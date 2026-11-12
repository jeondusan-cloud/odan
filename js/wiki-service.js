/**
 * 실시간 위키백과(LivePools) & 위키낱말사전(KoWiktionary) 큐 서비스
 * - 오늘의 단어(osdan)만 보는 방문자에게는 요청을 보내지 않고, 각 분야에 들어갈 때 백그라운드 리필을 시작합니다.
 * - 모든 네트워크 요청에 타임아웃과 예외 처리를 두어 실패 시 내장 카드로 즉시 폴백됩니다.
 */
class WikiEntropyService {
  constructor() {
    this.queues = {
      word: [],
      wiki: [],
      science: [],
      humanities: [],
      system: []
    };
    this.fetching = {
      word: false,
      wiki: false,
      science: false,
      humanities: false,
      system: false
    };
    this.seenTitles = new Set();

    this.fallbackSubtitles = {
      wiki: '위키백과 표제어',
      science: '과학 · 수학 · 자연',
      humanities: '철학 · 예술 · 사유',
      system: '시스템 · 패러다임'
    };
  }

  /**
   * 방문자가 특정 주제를 열었을 때 해당 큐의 백그라운드 리필을 시작합니다.
   */
  ensureSpectrum(spectrum) {
    if (!spectrum || spectrum === 'osdan') return;
    if (spectrum === 'all') {
      const cats = ['word', 'wiki', 'science', 'humanities', 'system'];
      const pick = cats[Math.floor(Math.random() * cats.length)];
      this.ensureSpectrum(pick);
      return;
    }
    if (spectrum === 'word') {
      if (this.queues.word.length <= 6) this.refillWordQueue();
    } else if (this.queues[spectrum]) {
      if (this.queues[spectrum].length <= 5) this.refillWikiCategory(spectrum);
    }
  }

  /**
   * 3-1. 위키낱말사전 실시간 카드 리필 (명사 60%, 한자성어 20%, 형용사 10%, 부사 10%)
   */
  async refillWordQueue() {
    if (this.fetching.word || this.queues.word.length >= 24) return;
    if (!window.KoWiktionary) return;

    this.fetching.word = true;
    try {
      const r = Math.random();
      const pool = r < 0.6 ? 'noun' : r < 0.8 ? 'idiom' : r < 0.9 ? 'adj' : 'adv';
      const cards = await window.KoWiktionary.fetchCards(pool, 35);
      for (const c of cards) {
        if (!this.seenTitles.has(c.title)) {
          this.seenTitles.add(c.title);
          const entry = window.KoWiktionary.toEntry(c, 'word');
          entry.domain = '위키낱말사전 · CC BY-SA 4.0';
          this.queues.word.push(entry);
        }
      }
    } catch (_) {
      // 타임아웃 또는 오프라인 시 내장 카드로 폴백
    } finally {
      this.fetching.word = false;
    }
  }

  /**
   * 3-2 & 3-3. 위키백과 주제별 실시간 카드 리필 (wiki, science, humanities, system)
   */
  async refillWikiCategory(category) {
    if (!this.queues[category] || this.fetching[category] || this.queues[category].length >= 20) {
      return;
    }
    if (!window.LivePools) return;

    this.fetching[category] = true;
    try {
      const q = window.LivePools.pickQuery(category);
      const pages = await window.LivePools.fetchPages(q, {
        signal: AbortSignal.timeout(8000)
      });

      for (const page of pages) {
        if (!page || !page.title || !page.extract) continue;
        const title = page.title.trim();
        if (this.seenTitles.has(title)) continue;

        const reason = window.LivePools.rejectReason(title, page.extract, page.description || '');
        if (reason) continue;

        const summary = window.LivePools.firstSentence(page.extract);
        if (!summary || summary.length < 25) continue;

        this.seenTitles.add(title);
        const subtitle =
          (page.description && page.description.trim()) ||
          this.fallbackSubtitles[category] ||
          '위키백과 표제어';

        this.queues[category].push({
          id: `wiki-${page.pageid || title}`,
          title,
          subtitle,
          spectrum: category,
          domain: '위키백과 · CC BY-SA 4.0',
          pos: '백과사전 표제어',
          summary,
          wikiUrl: `https://ko.wikipedia.org/wiki/${encodeURIComponent(title)}`,
          isLiveWiki: true
        });
      }
    } catch (_) {
      // cirrussearch-too-busy-error 또는 타임아웃 시 내장 카드로 폴백
    } finally {
      this.fetching[category] = false;
    }
  }

  /**
   * 해당 스펙트럼의 실시간 큐에서 카드 1장을 즉시 꺼내고, 부족하면 백그라운드 리필을 예약합니다.
   * 큐가 비어 있으면 기다리지 않고 즉시 null을 반환해 내장 카드를 보여주게 합니다.
   */
  popLiveEntry(spectrum) {
    if (spectrum === 'all') {
      const nonEmpty = ['word', 'wiki', 'science', 'humanities', 'system'].filter(
        (k) => this.queues[k] && this.queues[k].length > 0
      );
      this.ensureSpectrum('all');
      if (nonEmpty.length === 0) return null;
      const pickCat = nonEmpty[Math.floor(Math.random() * nonEmpty.length)];
      return this.popLiveEntry(pickCat);
    }

    if (spectrum === 'word') {
      if (this.queues.word.length <= 6) this.refillWordQueue();
      return this.queues.word.shift() || null;
    }

    if (this.queues[spectrum]) {
      if (this.queues[spectrum].length <= 5) this.refillWikiCategory(spectrum);
      return this.queues[spectrum].shift() || null;
    }

    return null;
  }
}

window.wikiService = new WikiEntropyService();
