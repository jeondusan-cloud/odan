/**
 * O's Dan — Daily & Spectrum Word Engine
 * - O's Dan 주제: 배포일(LAUNCH)로부터 지난 날 수에 따라 고정 순서 배열에서 '오늘의 단어'를 선택 (새 단어가 끝에 추가되어도 과거·오늘의 단어 불변)
 * - 그 외 주제(전체 무작위 ~ 시스템·패러다임): 큐에 실시간 카드가 있으면 약 70%(백과는 우선) 비율로 즉시 꺼내고, 비어 있으면 기다리지 않고 내장 카드를 반환
 */
class DailyEditionEngine {
  constructor() {
    this.seenTitles = new Set();
  }

  formatDateKey(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  formatDotDate(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}. ${m}. ${d}`;
  }

  getAllLocalEntries() {
    if (window.OMNI_LEXICON.ALL_ENTRIES) {
      return window.OMNI_LEXICON.ALL_ENTRIES;
    }
    return [
      ...(window.OMNI_LEXICON.CURATED_ENTRIES || []),
      ...(window.OMNI_LEXICON.INSTANT_WORD_BANK || [])
    ];
  }

  /**
   * O's Dan 주제 전용: 오늘의 날짜에 해당하는 단 하나의 '오늘의 단어' 반환
   * - 배포일(2026-11-12)을 0번 인덱스로 고정하고, 새 단어는 항상 배열 끝에만 추가하여
   *   배열 길이만큼의 날 동안 중복이 없으며 단어를 추가해도 과거·오늘의 단어가 바뀌지 않습니다.
   */
  getOsDanTodayPick(d = new Date()) {
    const dateKey = this.formatDateKey(d);
    const dotDate = this.formatDotDate(d);
    const all = this.getAllLocalEntries();

    const LAUNCH = Date.UTC(2026, 10, 12); // 배포일에 0번 단어. 새 단어는 배열 끝에만 추가
    const day = Math.floor(
      (Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - LAUNCH) / 86400000
    );
    const entry = all[((day % all.length) + all.length) % all.length];

    return {
      dateKey,
      dotDate,
      entry
    };
  }

  /**
   * O's Dan 외의 주제(all, word, wiki, science, humanities, system)에서
   * 해당 주제에 맞는 새로운 단어나 주제를 무작위로 추출합니다.
   */
  async drawRandomBySpectrum(spectrum = 'all', currentTitle = '') {
    const now = new Date();
    const dotDate = this.formatDotDate(now);

    if (window.wikiService) {
      window.wikiService.ensureSpectrum(spectrum);

      const useLive = spectrum === 'wiki' ? true : Math.random() < 0.7;
      if (useLive) {
        let liveEntry = window.wikiService.popLiveEntry(spectrum);
        if (liveEntry && liveEntry.title === currentTitle) {
          liveEntry = window.wikiService.popLiveEntry(spectrum) || liveEntry;
        }
        if (liveEntry && liveEntry.title !== currentTitle) {
          return { dotDate, entry: liveEntry };
        }
      }
    }

    // 내장 풀에서 스펙트럼에 맞게 필터링하여 무작위 추출 (큐가 비어 있어도 기다리지 않고 즉시 반환)
    const allEntries = this.getAllLocalEntries();
    let pool =
      spectrum === 'all' || spectrum === 'wiki'
        ? allEntries
        : allEntries.filter((item) => item.spectrum === spectrum);

    if (pool.length === 0) pool = allEntries;

    let candidates = pool.filter(
      (item) => item.title !== currentTitle && !this.seenTitles.has(item.title)
    );

    if (candidates.length === 0) {
      this.seenTitles.clear();
      candidates = pool.filter((item) => item.title !== currentTitle);
    }
    if (candidates.length === 0) {
      candidates = pool;
    }

    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    this.seenTitles.add(picked.title);
    if (this.seenTitles.size > 50) {
      const oldest = this.seenTitles.values().next().value;
      this.seenTitles.delete(oldest);
    }

    return {
      dotDate,
      entry: picked
    };
  }
}

window.dailyEngine = new DailyEditionEngine();
