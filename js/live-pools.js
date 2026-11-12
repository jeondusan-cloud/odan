// Final live-selection config for O's Dan. Runs unchanged in a browser or Node 18+.
(() => {
const SAFE = '-포르노 -강간 -성폭행 -성행위 -음경 -살인 -시체 -고문 -에로 -에로게 -매춘 -성매매 -누드 -페티시즘 -BDSM -"성인 게임" -"성인용" -"미소녀 게임" -자해 -자살 -마약 -필로폰 -코카인 -헤로인 -대마초 -펜타닐 -환각제 -아편 -모르핀 -엑스터시 -케타민 -향정신성 -"약물 남용" -"약물 중독" -성착취 -아동학대 -혐오';
const AUTH = 'hastemplate:"전거 통제"';
const LIVING = '-incategory:"살아있는 사람"';
const NO_PEOPLE = '-incategory:"살아있는 사람|생년 미상|생몰년 미상|IUCN 적색 목록 최소관심종"';
const WIKI_TPL = '토막글|Dmbox|좌표|인물 정보|출생일|사망일과 나이|학교 정보|대학 정보|기업 정보|회사 정보|철도역 정보|음반 정보|노래 정보|음악 그룹 정보|음악가 정보|일본 행정구역 정보 (폐지)|대한민국 읍면동 정보|도시 정보|경기장 정보|선거결과 시작|유엔 결의 정보|유전자 정보|포르노 배우 정보|그라비아 아이돌 정보|범죄인 정보|사건사고 정보|생물 분류|도로 정보|소프트웨어 정보|소행성 정보|항성 정보|항성 정보 시작|은하 정보|대한민국의 문화재 정보|문화재 정보';
const WIKI_TOPIC = '-articletopic:biography|sports|transportation|geographical|education|video-games|comics-and-anime|television|music|films|politics-and-government|military-and-warfare';
const TITLE_NEG = '-hastemplate:"토막글|Dmbox|인물 정보|대한민국 읍면동 정보|학교 정보" -articletopic:biography|films|television|music|video-games|comics-and-anime';
const HUM_CATS = '철학 개념|형이상학 개념|인식론 개념|윤리학 개념|미학 개념|심리철학 개념|논리학 개념|과학철학 개념|실존주의 개념|정치철학 개념|종교철학 개념|사회철학 개념|언어철학 개념|철학 용어|철학적 비유|철학 이론|윤리 이론|형이상학 이론|인식론의 이론|존재론|형이상학|인식론|윤리학|논리학|미학|삶의 철학|덕|선악|도덕|진리|자유|정의|행복|사랑|죽음|시간|정치철학|사회철학|언어철학|과학철학|교육철학|법철학|역사철학|심리철학|종교철학|중국 철학|인도 철학|한국 철학|유학 사상|도교 사상|불교 사상|실존주의|현상학|구조주의|포스트모더니즘|모더니즘|비판이론|기호학|의미론|서사학|서사 기법|문학 개념|문학 이론|문학 용어|문학 장르|문학 운동|시의 장르|연극 용어|허구|음악 용어|음악 이론|기보법|건축 양식|예술 사조|근대 미술|시각 예술 장르|미술 기법|회화 기법|사진 기법|영화 기법|영화 이론|타이포그래피|디자인|추상|서예|판화|벽화|공예|도자기|문화 개념|문화인류학|사상사|역사 이론|의례|일본의 요괴|요괴|민속학|전설';
const SYS_CATS = '인지 편향|인지 관성|편향|기억 편향|발견법|착시|지각|인지|학습|기억|습관|동기|사회심리학|도덕심리학|대중심리학|군중심리학|집단 과정|동조|심리학 이론|심리학 실험|게임 이론|비협력 게임|진화 게임 이론|딜레마|사회 선택 이론|투표 이론|공공선택론|메커니즘 디자인|경매 이론|결정 이론|의사결정|전망 이론|체계 이론|복잡계 이론|사이버네틱스|창발|자기조직화|혼돈 이론|시스템 과학|시스템 사고|시스템 공학|네트워크 이론|동역학계|제어이론|정보 이론|엔트로피|멱법칙|통계 법칙|전체론|역설|경제학 역설|수학의 역설|의사결정의 역설|확률론의 역설|철학의 역설|논리학의 역설|물리학의 역설|자기언급 역설|사고 실험|비형식적 오류|논리적 오류|귀납적 오류|인과관계의 오류|발생학적 오류|연관성 오류|오류|프레이밍|선전 기법|경험 법칙|경험적 법칙|경제학 법칙|경제학의 효과|경제 이론|경제학 용어|경제학 곡선|행동경제학|행동금융학|미시경제학|시장 실패|시장 구조|정보 비대칭|전략적 경영|경영학|사업 용어|마케팅 전략|조직론|조직 행동|혁신|품질 관리|운용 과학|계산 이론|계산 복잡도 이론|프로그래밍 패러다임|소프트웨어 설계|소프트웨어 개발 철학|안티패턴|사회학 이론|사회 현상|사회학 용어';
const CS_CATS = '알고리즘|자료 구조|인공지능|기계 학습|암호학|그래프 이론|컴퓨터 과학|소프트웨어 공학|프로그래밍 패러다임|소프트웨어 설계|계산 이론|계산 복잡도 이론|안티패턴|소프트웨어 개발 철학|인공지능철학|오토마타 이론|형식 언어|정렬 알고리즘|검색 알고리즘|그래프 알고리즘|최적화 알고리즘|자연어 처리|분산 컴퓨팅|컴퓨터 보안|프로그래밍 언어 이론|형식 방법|정보 이론|데이터 압축|오류 정정 부호|유한 상태 기계';
const KOR_CATS = '한국 철학|유학 사상|실학|성리학|양명학|동학|한국의 사상|한국의 미학|한국의 민속|한국의 건축|한국의 전통 음악|한국의 전통 예술|한국의 고전 소설|한국의 설화|한국의 신화|한국의 과학기술사|한국의 천문학';
const title = (t) => ({ w: 1, q: `intitle:${t} ${TITLE_NEG} ${SAFE}` });

const POOLS = {
  wiki: [
    { w: 6, q: `${AUTH} -hastemplate:"${WIKI_TPL}" ${NO_PEOPLE} ${WIKI_TOPIC} ${SAFE}` },
    { w: 1, q: `incategory:"${KOR_CATS}" -hastemplate:"${WIKI_TPL}" ${NO_PEOPLE} ${WIKI_TOPIC} ${SAFE}` },
  ],
  science: [
    { w: 1, q: `articletopic:physics|chemistry|mathematics|space|earth-and-environment ${AUTH} -hastemplate:"토막글|Dmbox|생물 분류|유전자 정보|Chembox|좌표|인물 정보|출생일" -articletopic:biography ${LIVING} ${SAFE}` },
    { w: 1, q: `articletopic:biology|medicine-and-health ${AUTH} -hastemplate:"토막글|Dmbox|유전자 정보|인물 정보|출생일" -articletopic:biography -incategory:"살아있는 사람|IUCN 적색 목록 최소관심종" ${SAFE}` },
  ],
  humanities: [
    { w: 3, q: `articletopic:philosophy-and-religion|visual-arts|literature|performing-arts|linguistics ${AUTH} -hastemplate:"토막글|Dmbox|좌표|인물 정보|출생일|음반 정보|노래 정보|대한민국의 문화재 정보" -articletopic:biography|sports|transportation|comics-and-anime|video-games|films|television|music ${LIVING} ${SAFE}` },
    { w: 2, q: `incategory:"${HUM_CATS}" -hastemplate:"토막글|Dmbox|인물 정보|좌표|대한민국의 문화재 정보" ${LIVING} ${SAFE}` },
  ],
  system: [
    { w: 6, q: `incategory:"${SYS_CATS}" -hastemplate:"토막글|Dmbox|인물 정보" ${LIVING} ${SAFE}` },
    { w: 3, q: `incategory:"${CS_CATS}" -hastemplate:"토막글|Dmbox|인물 정보|소프트웨어 정보|기업 정보|회사 정보" ${LIVING} ${SAFE}` },
    { w: 3, q: `articletopic:business-and-economics ${AUTH} -hastemplate:"토막글|Dmbox|기업 정보|회사 정보|인물 정보|출생일|좌표|음반 정보" -articletopic:biography|transportation|sports|geographical|technology|software|politics-and-government|films|television|society ${LIVING} ${SAFE}` },
    title('효과'), title('법칙'), title('역설'), title('가설'), title('편향'),
  ],
};

function pickQuery(category, rnd = Math.random) {
  const list = POOLS[category] || POOLS.wiki;
  let n = rnd() * list.reduce((s, x) => s + x.w, 0);
  for (const item of list) if ((n -= item.w) < 0) return item.q;
  return list[0].q;
}

// One background refill. Returns the pages, or throws so the caller can use the built-in pool.
async function fetchPages(q, { signal } = {}) {
  const url = new URL('https://ko.wikipedia.org/w/api.php');
  const params = {
    action: 'query', format: 'json', formatversion: '2', origin: '*', generator: 'search', gsrsearch: q, gsrnamespace: '0', gsrlimit: '20',
    gsrsort: 'random', gsrprop: '', prop: 'extracts|description', exintro: '1', explaintext: '1', exsentences: '3', exlimit: '20', redirects: '1',
  };
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, { signal: signal || AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`http ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error.code); // includes cirrussearch-too-busy-error
  return (data.query?.pages || []).sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
}

// Client-side safety net. Drops about 5 percent of cards + youth protection filter (no self-harm, drugs, suicide, hate, adult).
const TITLE_BAD = /(목록|일람)$|^(기원전 )?\d{1,4}(년|세기|년대)$|^(대한민국 (민법|형법|상법|헌법|형사소송법|민사소송법) 제|유엔 안전 보장 이사회 결의)|^(HD|NGC|IC|HIP|GJ|PSR|LEDA|WOH|글리제) ?[\dA-Z]|^G\d+\.\d+|^IEEE 802|동위 원소$|동음이의/;
const PLACE = /행정 ?구역(이다|이며|다)|(도시|마을|코뮌|자치주|자치현|지급시|현급시|자치체|지자체|무형문화재|유형문화재|기념물|문화재자료)(이다|다|였다|이며|로,|으로,)|(위치한|위치하는|있는|있던|속한|의) (주|군|구|현|시|면|읍|동|촌|정|도|도시|마을)(이다|다|였다|이며|로,|으로|로 )/;
const COMPANY = /(기업|회사|업체|은행|출판사|음반사|레이블|방송사)(이다|다|였다)\./;
const PERSON = /^.{0,90}?\d{1,2}월 \d{1,2}일\s*[~–—-]/;
const ADULT_META = /포르노|(^|\s)에로|성인 ?(비디오|게임|영화|용품|만화)|AV ?배우|강간|성폭행|성폭력|성착취|성추행|성희롱|성매매|매춘|윤간|근친상간|수간|네크로필리아|소아성애|페티시즘|BDSM|자위행위|성교|성행위|음경|음부|질내|살인|살해|토막살인|연쇄살인|시체|시신|고문|참수|처형|사형|학살|식인|자해|자살|투신|할복|음독|목숨을 끊|극단적 선택|마약|필로폰|메스암페타민|암페타민|코카인|헤로인|펜타닐|대마초|마리화나|칸나비스|환각제|아편|모르핀|옥시코돈|엑스터시|케타민|프로포폴|향정신성|약물 ?(남용|중독|오남용)|과다 ?복용|본드 ?흡입|부탄가스|청산가리|독극물|치사량|아동 ?(학대|성폭력|음란물)|가정 ?폭력|학교 ?폭력|혐오 ?(발언|표현|범죄)|테러/;

function clean(text) {
  return (text || '').replace(/\[\*\]/g, '').replace(/\s+/g, ' ').trim();
}

function splitFirstSentence(lead) {
  return (lead.match(/^.*?(?:[가-힣0-9)\]"'”’][.!?]|[.!?]$)(?=\s|$)/) || [lead])[0].trim();
}

function firstSentence(extract) {
  const lead = clean(extract);
  const first = splitFirstSentence(lead);
  return first.length <= 140 ? first : `${first.slice(0, 138).trim()}…`;
}

// Returns a reason string when the card should be dropped, or null when it can be shown.
function rejectReason(title, extract, description = '') {
  const lead = clean(extract);
  const first = splitFirstSentence(lead);
  if (lead.length < 45) return 'short';
  if (first.length > 140) return 'long';
  if (lead.includes('\\displaystyle')) return 'tex';
  if (TITLE_BAD.test(title)) return 'title';
  if (PLACE.test(first)) return 'place';
  if (COMPANY.test(first)) return 'company';
  if (PERSON.test(first)) return 'person';
  if (ADULT_META.test(`${title} ${description} ${lead}`)) return 'adult-or-violence';
  return null;
}

globalThis.LivePools = { POOLS, pickQuery, fetchPages, rejectReason, clean, firstSentence };
})();