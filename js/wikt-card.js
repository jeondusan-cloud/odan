// Live Korean Wiktionary cards for a static site. No dependencies. No regex lookbehind: Safari before 16.4 cannot parse it.
// Han ranges are \u escapes on purpose: a literal U+F900 can be normalized to U+8C48, and that range then swallows all Hangul.
(() => {
  const HAN = '\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFAFF';
  const POS = /^(명사|자립명사|의존 명사|동사|형용사|부사|관형사|감탄사|대명사|수사|관용구|관용 표현|속담|어근|접미사|접두사|조사|어미|조동사|보조 동사|보조 형용사)\s*\d*$/; const DROP_POS = /^(의존 명사|접미사|접두사|조사|어미|조동사|보조 동사|보조 형용사)$/;
  const NON_DEF = /^(발음|어원\s*\d*|번역|관련 어휘|유의어|반의어|동의어|파생어|합성어|활용형|활용|외부 링크|참고|참고 문헌|같이 보기|관련 표현|표기|다른 표기|독음|상위어|하위어|용례|예문|각주|문자 정보)$/;
  const BAD_TPL = /^(hanja form of|이철자|다른 표기|축약어|줄임말|축약어화|rfdef|비하적 사용역|alt|alternative form of|alternative spelling of|misspelling of|inflection of|ko-hanja form of|보기)$/i; const DROP_TPL = /^(senseid|예문|따옴|c|cite|문단 책갈피|위키백과|wikipedia|그림틀|t\+?|ko-IPA|IPA|발음 듣기)$/i;
  const BAD_LABEL = /속어|비속|비어|욕|비하|낮잡|멸칭|음담|외설|성적|옛말|고어|사투리|방언|북한|문화어|일본어투|비표준|잘못|고유 명사|인명|지명|못마땅|인터넷|경북|경남|전북|전남|충북|충남|강원|제주|함경|평안|황해|서남|동남|동북|서북/;
  const QUOTED_ONLY = /^['‘’"“”「『《]+[^'‘’"“”」』》]{1,30}['‘’"“”」』》]+\s*[.。]?$/, BARE_WORD = /^[가-힣]{1,14}[.。]?$/;
  const POINTER = /^['‘"“][^'’"”]{1,20}['’"”](?:을|를|의|과|와|로)\s|달리 이르는 말|의\s*(?:사투리|방언|옛말)|(?:준말|본말|옛말|방언|사투리|잘못(?:된)?(?:\s*(?:표기|말))?|비표준어|센말|여린말|거센말|큰말|작은말|높임말|낮춤말|높임 표현|낮춤 표현|속된 말|약어|약자|줄임말|이표기|다른 표기|원말|변한말|활용형|명사형|관형사형|연결형|부사형|동의어|유의어|한자 표기|북한어|문화어)\s*(?:이다|임|다)?[.。]?$|(?:와|과)\s*같(?:은 말|은 뜻|음|다)|(?:을|를)\s*(?:보라|보시오|참조|참고)|^(?:참조|참고|보기|=|→|⇒|☞|⇨)/;
  const BAD_CAT = /^한국어 (?:속어|인터넷 속어|트위터 속어|인스타그램 속어|여성속어|레즈비언 속어|은어|성문화|초성체|유행어|고유 ?명사|일반명사가 된 고유명사|인명|성씨|지명|도시|국명|수도|민족|.*의 (?:도시|지명|나라)|집시 인명|옛말.*|고어|죽은말|현재는 잘 쓰이지 않는 용법이 있는 표현|.*사투리|.*방언|연변말|고려말|문화어|비표준어|.*활용형.*|관형사형.*|명사형.*|부정사형|.*조사|.*어미|접미사|접두사|단일어접미사|단일어접두사|파생접미사|한자 표기|약어|한글 자모|한자|한자 형태소|어근|단일어어근)$/;
  const TONE = /속되게|비속|낮잡|얕잡|욕하|욕으로|욕설|놀리|놀림|조롱|비꼬|멸시|경멸|비하(?:하|는|적)|천하게|점잖지/;
  const UNSAFE_ANY = /성교|성행위|성관계|성적(?:인|으로)?\s?(?:도구|행위|관계|욕|흥분|쾌락|접촉|대상|착취|매력)|성욕|(?:^|[^전극왕최흥융])성기(?!게)|음경|음부|음순|유방|엉덩이 사이|고환|음낭|정액|강간|겁탈|윤간|성폭|매춘|매음|창녀|창부|갈보|기생집|유곽|몸을 파는|몸 파는|윤락|사창|접대부|호스티스|알몸|나체|초경|포르노|음란|외설|음담|섹스|야동|오르가슴|불알|씨발|개새끼|병신|쪽바리|짱깨|짱개|깜둥이|검둥이|왜놈|되놈|화냥|잡년|잡놈|쌍놈|쌍년|년놈|창놈|미친(?:놈|년|개|새끼)/;
  const GRIM = /죽이|죽임|죽인|목숨을 끊|목을 매|목을 베|목을 자르|자살|자해|투신|할복|음독|살해|살인|학살|처형|시체|시신|주검|참수|능지|마약|환각제|필로폰|메스암페타민|대마초|마리화나|코카인|헤로인|펜타닐|아편|모르핀|엑스터시|향정신성|약물 ?(?:남용|중독|오남용)|본드 ?흡입|청산가리|독극물/; const UNSAFE_TITLE = /^(?:성기|자위|보지|자지|좆|씹|시발|튀기|양키|호모|벙어리|귀머거리|장님|소경|봉사|앉은뱅이|절름발이|곱추|난쟁이|곰보|언청이|문둥이|저능아|정박아|백치|천치|혼혈아|위안부|식인|변태|고문|젖꼭지|유방|자해|자살|마약|필로폰|대마초|코카인|헤로인|아편)$/;
  const hits = (t, re) => (t.match(re) || []).length;
  function stripTemplates(input, labels) {
    let s = input, guard = 0, blocked = null;
    const one = (_, body) => {
      const parts = body.split('|').map((x) => x.trim()), name = parts[0];
      if (BAD_TPL.test(name)) { blocked = name; return ''; } if (/^(lb|라벨|label|lbl|term-label)$/i.test(name)) { parts.slice(2).forEach((x) => x && labels.push(x)); return ''; }
      if (/^(l|link|연결|lang|m|mention)$/i.test(name)) return parts[2] || parts[1] || ''; if (!DROP_TPL.test(name)) blocked = blocked || `unknown:${name}`; return '';
    };
    while (/\{\{/.test(s) && guard++ < 8) { const before = s; s = s.replace(/\{\{([^{}]*)\}\}/g, one); if (s === before) break; }
    return { s, blocked };
  }
  function cleanDefinition(raw) {
    const labels = [];
    const t = stripTemplates(raw.replace(/<!--[\s\S]*?-->/g, '').replace(/<ref[^>]*\/>/gi, '').replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, '').replace(/<\/?(?:nowiki|small|sup|sub|span|u|b|i|s)[^>]*>/gi, '').replace(/<br\s*\/?>/gi, ' '), labels);
    let s = t.s.replace(/\[\[(?:파일|그림|File|Image|분류|Category)[^\]]*\]\]/gi, '').replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, '$1').replace(/\[\[([^\]]*)\]\]/g, '$1').replace(/'{2,}/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim().replace(/^[\s:;,.·*-]+/, '').trim();
    s = s.replace(/[(（]\s*(?:학명|영어|영문|라틴어)\s*[:：]?[^)）]*[)）]/g, '').replace(/^학명\s*:\s*[A-Za-z][A-Za-z .]*/, '').replace(/[(（]\s*부록\s*:[^)）]*[)）]\s*\.?/g, '').replace(/\s+([.,])/g, '$1').trim().replace(/^[(（]{1,2}[^)）]*쓰여[)）]{1,2}\s*/, '').trim();
    for (let i = 0; i < 2; i++) { const m = /^[(（[『「]([^)）\]』」]{1,24})[)）\]』」]\s*/.exec(s); if (!m) break; labels.push(m[1]); s = s.slice(m[0].length).trim(); }
    return { text: s, labels, blocked: t.blocked };
  }
  function koSection(wikitext) {
    const text = wikitext.replace(/<!--[\s\S]*?-->/g, ''), m = /^==[ \t]*(?:\[\[)?한국어(?:\]\])?[ \t]*==[ \t]*$/m.exec(text); if (!m) return null;
    const rest = text.slice(m.index + m[0].length), end = /^==[^=].*$/m.exec(rest); return end ? rest.slice(0, end.index) : rest;
  }
  function findHanja(sec, title, posBlocks) {
    const found = new Set(); if (posBlocks !== 1) return '';
    for (const m of sec.matchAll(new RegExp(`\\{\\{ko-(?:noun|verb|adj|adv)[^}]*?(?:한자|hanja)\\s*=\\s*([${HAN}]+)`, 'g'))) found.add(m[1]);
    for (const m of sec.matchAll(/\{\{ko-etym-sino\|([^}]*)\}\}/gi)) { const h = m[1].split('|').filter((_, i) => i % 2 === 0).join('').replace(new RegExp(`[^${HAN}]`, 'g'), ''); if (h) found.add(h); }
    for (const m of sec.matchAll(new RegExp(`어원:\\s*(?:한자\\s*)?\\[\\[([${HAN}]+)\\]\\]`, 'g'))) found.add(m[1]);
    const h = found.size === 1 ? [...found][0] : ''; return h && (h.length === title.length || h.length === title.replace(/(?:하다|되다|히|이)$/, '').length) ? h : '';
  }
  function parseEntry(title, wikitext) {
    const sec = wikitext ? koSection(wikitext) : null, defs = [], labels = []; if (sec === null) return null;
    let heading = '', pos = '', posBlocks = 0;
    for (const line of sec.split('\n')) {
      const h = /^(={3,6})\s*(.+?)\s*\1\s*$/.exec(line);
      if (h) { heading = h[2].replace(/\s*\d+$/, '').trim(); if (POS.test(heading)) { posBlocks++; pos = pos || heading; } continue; }
      if (NON_DEF.test(heading) || !/^#(?![#:*])/.test(line)) continue;
      const body = line.replace(/^#\s*/, '').trim(); if (!body || DROP_POS.test(heading)) continue;
      const c = cleanDefinition(body); labels.push(...c.labels); if (!c.blocked && c.text) defs.push(c.text);
    }
    const homograph = posBlocks > 1 || hits(sec, /^\*?\s*어원\s*:/gm) + hits(sec, /^={3,6}\s*어원\s*\d+\s*=/gm) > 1;
    return !defs.length || DROP_POS.test(pos) ? null : { pos, hanja: findHanja(sec, title, posBlocks), defs, labels, homograph };
  }
  function firstSentence(text, max = 130, join = 90) {
    const parts = text.replace(/([가-힣)])[.。]\s+/g, '$1\u0000').split('\u0000').map((p) => p.replace(/[.。]\s*$/, '').trim());
    const two = parts[1] ? `${parts[0]}. ${parts[1]}` : '', out = two && (parts[0].length < 10 || two.length <= join) ? two : parts[0];
    return out.length > max ? null : `${out}.`;
  }
  function badDef(t, title) {
    if (!t || /\{\{|\}\}|\[\[|\]\]|<|>|\||==|【/.test(t) || /^[(（]?(?:뜻|의미|설명|내용|정의)[)）]?[.。]?$/.test(t) || /^[A-Za-z]/.test(t) || QUOTED_ONLY.test(t) || BARE_WORD.test(t) || POINTER.test(t)) return true;
    const hangul = hits(t, /[가-힣]/g); return hits(t, /[A-Za-z一-鿿぀-ヿ]/g) > hangul * 0.5 || hangul < 4 || hits(t, /[(（]/g) !== hits(t, /[)）]/g) || t.replace(/[.。\s]/g, '') === title;
  }
  // Returns { title, hanja, pos, summary } or null. It fails closed: a page with no categories is rejected.
  function cardFromPage(title, text, cats, minLen = 12) {
    if (!/^[가-힣]{2,8}$/.test(title) || !cats.length || UNSAFE_TITLE.test(title) || UNSAFE_ANY.test(title) || GRIM.test(title)) return null;
    if (cats.some((c) => c === '초안' || c === '한국어 낱말의 뜻풀이 추가 요청' || BAD_CAT.test(c))) return null;
    const r = parseEntry(title, text);
    if (!r || r.homograph || r.labels.some((l) => BAD_LABEL.test(l)) || r.defs.some((d) => TONE.test(d) || UNSAFE_ANY.test(d) || GRIM.test(d))) return null;
    for (const def of r.defs) {
      const one = badDef(def, title) ? null : firstSentence(def);
      if (one && one.length >= minLen) return { title, hanja: r.hanja, pos: r.pos || '명사', summary: one };
    }
    return null;
  }
  const cat = (...names) => `incategory:"${names.map((n) => `한국어 ${n}`).join('|')}" -incategory:"한국어 한자 표기" -incategory:"초안"`;
  const POOLS = { noun: cat('명사'), idiom: cat('한자성어'), adj: cat('형용사'), adv: cat('부사'), science: cat('물리', '수학', '화학', '천문', '생명과학', '지구과학', '생물', '식물', '동물', '포유류', '조류', '곤충', '광물', '화학원소'), humanities: cat('철학', '역사', '문학', '음악', '미술', '불교', '종교', '언어학', '민속', '신화', '예술', '유교'), system: cat('경제', '법률', '정치', '컴퓨터', '행정', '사회', '통신', '이념', '군사') };
  const buildUrl = (pool, limit = 30) => `https://ko.wiktionary.org/w/api.php?${new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', origin: '*', generator: 'search', gsrsearch: POOLS[pool], gsrsort: 'random', gsrlimit: String(limit), gsrnamespace: '0', prop: 'revisions|categories', rvprop: 'content', rvslots: 'main', cllimit: 'max', clshow: '!hidden' })}`;
  async function fetchCards(pool, limit = 30) {
    const res = await fetch(buildUrl(pool, limit), { signal: AbortSignal.timeout(8000) }); const pages = res.ok ? ((await res.json()).query?.pages || []) : [];
    return pages.map((p) => cardFromPage(p.title, p.revisions?.[0]?.slots?.main?.content || '', (p.categories || []).map((c) => c.title.replace(/^분류:/, '')))).filter(Boolean);
  }
  const toEntry = (c, spectrum = 'word') => ({ id: `wikt-${c.title}`, title: c.title, subtitle: [c.hanja, c.pos].filter(Boolean).join(' · '), spectrum, domain: '위키낱말사전', pos: c.pos, summary: c.summary, wikiUrl: `https://ko.wiktionary.org/wiki/${encodeURIComponent(c.title)}`, isLiveWiki: true });
  globalThis.KoWiktionary = { POOLS, buildUrl, fetchCards, cardFromPage, toEntry };
})();