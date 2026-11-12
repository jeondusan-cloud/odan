/**
 * O's Dan — 내장 단어·개념 사전 (총 383개 고정 순서 배열)
 * - 배포일(2026-11-12)을 0번 인덱스로 고정하여 하루에 하나씩 순서대로 순환합니다.
 * - 새 단어를 추가할 때는 과거·오늘의 단어가 바뀌지 않도록 항상 배열의 맨 끝에만 추가합니다.
 */
const ALL_ENTRIES = [
  {
    "id": "odan-001",
    "title": "윤슬",
    "subtitle": "Pure Korean · Noun · Sun-glitter",
    "spectrum": "word",
    "domain": "순우리말 · 자연 감각",
    "pos": "명사",
    "summary": "해나 달의 빛이 수면의 잔잔한 물결에 부딪혀 보석처럼 반짝이는 현상을 이르는 순우리말입니다. 빛의 각도와 물결의 흔들림이 맞물리는 찰나에만 피어나는 광학적 풍경입니다."
  },
  {
    "id": "odan-002",
    "title": "사건의 지평선",
    "subtitle": "Event Horizon · 일반상대성이론",
    "spectrum": "science",
    "domain": "천체물리학 · 시공간",
    "pos": "물리 개념",
    "summary": "블랙홀 주변에서 중력이 너무 강해 빛조차 빠져나올 수 없는 시공간의 경계면입니다. 이 경계 안쪽의 어떤 신호도 바깥으로 전달될 수 없으며 외부 관찰자에게는 경계의 시간이 멈춘 것처럼 보입니다."
  },
  {
    "id": "odan-003",
    "title": "테세우스의 배",
    "subtitle": "Ship of Theseus · 정체성과 시간의 철학",
    "spectrum": "humanities",
    "domain": "형이상학 · 정체성 철학",
    "pos": "철학 역설",
    "summary": "배의 썩은 널빤지를 하나씩 새 나무로 교체해 모든 부품이 바뀌었을 때 여전히 처음과 같은 배인지, 헌 부품을 모아 옆에 한 척을 더 조립하면 어느 쪽이 진짜인지 묻는 정체성의 역설입니다."
  },
  {
    "id": "odan-004",
    "title": "제1원리 사고",
    "subtitle": "First Principles Thinking · 아리스토텔레스 · 공학",
    "spectrum": "system",
    "domain": "사고 모델 · 혁신",
    "pos": "인식론적 방법",
    "summary": "기존 관행이나 유추에 의존하는 대신 문제를 더 이상 쪼갤 수 없는 가장 근본적인 물리적·논리적 진실의 단위로 해체한 뒤, 밑바닥부터 새로운 해법을 재조립하는 사고방식입니다."
  },
  {
    "id": "odan-005",
    "title": "소실점",
    "subtitle": "Vanishing Point · 消失點",
    "spectrum": "word",
    "domain": "기하 · 공간 어휘",
    "pos": "명사",
    "summary": "원근법에서 서로 평행한 선들이 멀어지면서 마침내 한 점에서 만나는 것처럼 보이는 가상의 지점입니다. 실제로는 결코 만나지 않지만, 시선의 한계가 만들어내는 무한대의 좌표입니다."
  },
  {
    "id": "odan-006",
    "title": "괴델의 불완전성 정리",
    "subtitle": "Gödel's Incompleteness Theorems · 수리논리학",
    "spectrum": "science",
    "domain": "수학 · 수리논리학",
    "pos": "수학 정리",
    "summary": "자연수 산술을 포함하는 무모순적 공리계 안에는 참이지만 그 체계 내의 공리만으로는 증명도 반증도 할 수 없는 명제가 반드시 존재하며, 스스로의 무모순성도 내부에서 증명할 수 없다는 정리입니다."
  },
  {
    "id": "odan-007",
    "title": "데페이즈망",
    "subtitle": "Dépaysement · 초현실주의 미학",
    "spectrum": "humanities",
    "domain": "예술 · 초현실주의",
    "pos": "미학 기법",
    "summary": "본래 있던 익숙한 맥락이나 장소에서 사물을 떼어내어 전혀 엉뚱하고 낯선 공간에 배치함으로써(예: 르네 마그리트의 그림이나 수술대 위의 재봉틀과 우산의 만남) 관람자의 고정관념을 깨뜨리고 강렬한 시적 충격을 일으키는 예술 기법입니다."
  },
  {
    "id": "odan-008",
    "title": "안티프래질",
    "subtitle": "Antifragile · 나심 니콜라스 탈레브",
    "spectrum": "system",
    "domain": "복잡계 · 리스크 이론",
    "pos": "시스템 속성",
    "summary": "충격을 그저 버텨내는 강건함을 넘어, 외부의 충격과 변동성·스트레스를 겪을수록 오히려 더 강해지고 진화하는 성질을 뜻하며 면역계와 진화가 대표적인 사례입니다."
  },
  {
    "id": "odan-009",
    "title": "그루잠",
    "subtitle": "Pure Korean · Noun · Second Sleep",
    "spectrum": "word",
    "domain": "순우리말 · 일상과 의식",
    "pos": "명사",
    "summary": "깨었다가 다시 드는 잠을 이르는 순우리말입니다. 첫 번째 잠의 꿈과 깨어남의 짧은 현실 인식이 뒤섞여 가장 기묘하고 선명한 무의식이 유영하는 틈새의 시간입니다."
  },
  {
    "id": "odan-010",
    "title": "양자 얽힘",
    "subtitle": "Quantum Entanglement · 양자역학",
    "spectrum": "science",
    "domain": "물리학 · 양자역학",
    "pos": "물리 현상",
    "summary": "두 개 이상의 양자 입자가 하나의 양자 상태를 공유하여, 두 입자가 우주 반대편으로 수억 광년 떨어져 있더라도 한 입자의 상태를 측정하는 순간 다른 입자의 상태가 즉시 결정되는 비국소적(Non-local) 상관관계입니다."
  },
  {
    "id": "odan-011",
    "title": "킨츠기",
    "subtitle": "Kintsugi (金継ぎ) · 결함과 복원의 미학",
    "spectrum": "humanities",
    "domain": "공예 · 동양 미학",
    "pos": "미학 개념",
    "summary": "깨지거나 금이 간 도자기를 보이지 않게 감추어 수리하는 대신, 옻칠로 이어 붙인 자리에 금가루나 은가루를 덧입혀 깨진 흔적 자체를 세상에 단 하나뿐인 아름다운 금빛 문양이자 역사로 승화시키는 복원 예술입니다."
  },
  {
    "id": "odan-012",
    "title": "브래스의 역설",
    "subtitle": "Braess's Paradox · 네트워크 및 게임이론",
    "spectrum": "system",
    "domain": "네트워크 이론 · 교통공학",
    "pos": "시스템 역설",
    "summary": "도로망이나 통신망에 빠른 지름길을 새로 추가했더니 이용자들이 각자 최적 경로로 몰리는 바람에 오히려 네트워크 전체의 통행 시간이 이전보다 더 느려지는 역설적 현상입니다."
  },
  {
    "id": "odan-013",
    "title": "이음매",
    "subtitle": "Seam / Joint · 고유어 명사",
    "spectrum": "word",
    "domain": "사물 · 구조 어휘",
    "pos": "명사",
    "summary": "떨어져 있던 두 물체를 맞대어 하나로 연결한 자국이나 경계 부위를 가리킵니다. 가장 취약해 터지기 쉬운 곳이자 서로 다른 두 재료가 하나가 된 흔적입니다."
  },
  {
    "id": "odan-014",
    "title": "맥스웰의 도깨비",
    "subtitle": "Maxwell's Demon · 열역학 제2법칙과 정보이론",
    "spectrum": "science",
    "domain": "통계역학 · 정보물리학",
    "pos": "사고실험",
    "summary": "가상의 존재가 빠른 분자와 느린 분자를 골라 통과시켜 엔트로피를 줄일 수 있는가 묻는 사고실험입니다. 정보를 기억하고 지우는 과정에서 열역학적 엔트로피가 발생한다는 란다우어 원리로 해결되었습니다."
  },
  {
    "id": "odan-015",
    "title": "중국어 방",
    "subtitle": "Chinese Room Argument · 존 설(John Searle)",
    "spectrum": "humanities",
    "domain": "심리철학 · 인공지능 철학",
    "pos": "사고실험",
    "summary": "중국어를 모르는 사람이 방 안에서 규칙 사전만 보고 중국어 질문에 완벽한 답을 내놓더라도, 이는 기호 조작(구문론)일 뿐 의미를 실제로 이해(의미론)한 것은 아니라는 존 설의 사고실험입니다."
  },
  {
    "id": "odan-016",
    "title": "린디 효과",
    "subtitle": "Lindy Effect · 시간과 생존의 통계학",
    "spectrum": "system",
    "domain": "복잡계 · 기술 철학",
    "pos": "경험 법칙",
    "summary": "생물처럼 수명이 정해진 것과 달리, 고전 서적, 수학 정리, 바퀴, 의자, 기본 알고리즘 같은 비소멸성(Non-perishable) 아이디어와 기술은 지금까지 살아남은 기간이 길수록 앞으로 살아남을 기대 수명도 비례해서 길어진다는 법칙입니다."
  },
  {
    "id": "odan-017",
    "title": "잔상",
    "subtitle": "Afterimage · 殘像",
    "spectrum": "word",
    "domain": "시각 · 감각 어휘",
    "pos": "명사",
    "summary": "외부의 시각 자극이 사라진 뒤에도 망막과 시신경에 그 흔적이 남아, 원래의 형태나 보색(Complementary Color)으로 잠시 동안 계속 보이는 현상입니다."
  },
  {
    "id": "odan-018",
    "title": "라그랑주점",
    "subtitle": "Lagrange Point · 천체역학 3체 문제",
    "spectrum": "science",
    "domain": "천체역학 · 수학",
    "pos": "역학 좌표",
    "summary": "태양과 지구처럼 공전하는 두 거대 천체의 중력과 위성의 원심력이 정확히 상쇄되어, 제3의 작은 물체가 상대적인 위치를 유지하며 함께 머물 수 있는 우주 공간의 5개 평형점(L1~L5)입니다."
  },
  {
    "id": "odan-019",
    "title": "키아로스쿠로",
    "subtitle": "Chiaroscuro · 명암 대비법",
    "spectrum": "humanities",
    "domain": "회화 · 시각예술",
    "pos": "미술 기법",
    "summary": "이탈리아어로 '밝음(Chiaro)'과 '어두움(Scuro)'의 결합을 뜻하며, 카라바조나 렘브란트처럼 강렬한 빛과 짙은 어둠의 극단적인 대비를 통해 대상의 입체감과 극적인 심리적 긴장감을 폭발시키는 기법입니다."
  },
  {
    "id": "odan-020",
    "title": "창발성",
    "subtitle": "Emergence · 복잡계 과학",
    "spectrum": "system",
    "domain": "복잡계 · 시스템 이론",
    "pos": "시스템 현상",
    "summary": "개별 구성 요소 하나하나에는 없는 성질이 단순한 규칙으로 상호작용하며 모였을 때 상위 계층에서 전혀 새로운 질서와 지능으로 출현하는 복잡계 특성입니다."
  },
  {
    "id": "odan-021",
    "title": "시나브로",
    "subtitle": "Pure Korean · Adverb · Imperceptibly",
    "spectrum": "word",
    "domain": "순우리말 · 시간 감각",
    "pos": "부사",
    "summary": "모르는 사이에 조금씩, 줄곧 일어나는 변화를 뜻하는 순우리말입니다. 미분(Derivative)의 변화율이 감지 임계값보다 낮아 깨닫지 못하다가, 어느 순간 적분된 결과로 마주하게 되는 과정입니다."
  },
  {
    "id": "odan-022",
    "title": "카시미르 효과",
    "subtitle": "Casimir Effect · 양자장론",
    "spectrum": "science",
    "domain": "양자물리학",
    "pos": "물리 현상",
    "summary": "완전한 진공 속에서 전하를 띠지 않은 두 금속판을 나노미터 단위로 아주 가깝게 마주 대어 놓으면, 두 판 사이에 허용되는 진공 요동(가상 광자)의 파장 수가 외부보다 적어져 두 판이 서로 끌어당기는 거시적인 힘이 발생하는 현상입니다."
  },
  {
    "id": "odan-023",
    "title": "아포페니아",
    "subtitle": "Apophenia · 인지심리학",
    "spectrum": "humanities",
    "domain": "심리학 · 인지과학",
    "pos": "인지 현상",
    "summary": "서로 관련이 없는 무작위 데이터나 현상들 사이에서 유의미한 패턴과 연결고리를 찾아내려는 인간 뇌의 경향성입니다. 미신의 원인이자 은유와 과학적 가설의 출발점이기도 합니다."
  },
  {
    "id": "odan-024",
    "title": "굿하트의 법칙",
    "subtitle": "Goodhart's Law · 경제학 · 시스템 제어",
    "spectrum": "system",
    "domain": "경제학 · 조직 설계",
    "pos": "시스템 법칙",
    "summary": "어떤 측정 지표가 정책이나 조직의 목표가 되는 순간, 사람들이 지표 숫자만 맞추려 행동하기 때문에 그것은 더 이상 좋은 측정 지표가 아니게 된다는 경험 법칙입니다."
  },
  {
    "id": "odan-025",
    "title": "진공",
    "subtitle": "Vacuum · 眞空",
    "spectrum": "word",
    "domain": "물질 · 상태 어휘",
    "pos": "명사",
    "summary": "물질이 전혀 존재하지 않는 비어 있는 공간입니다. 그러나 현대 물리학에서의 진공은 아무것도 없는 무(無)가 아니라, 가상 입자들이 끊임없이 생성되고 소멸하는 바닥 상태의 에너지 바다입니다."
  },
  {
    "id": "odan-026",
    "title": "자발적 대칭 깨짐",
    "subtitle": "Spontaneous Symmetry Breaking · 입자물리 · 응집물질",
    "spectrum": "science",
    "domain": "이론물리학",
    "pos": "물리 원리",
    "summary": "계를 지배하는 물리 법칙 자체는 대칭적이지만 에너지가 가장 낮은 바닥 상태로 떨어지는 순간 특정 방향을 선택하며 대칭성이 깨지는 현상으로, 입자들이 질량을 얻는 힉스 메커니즘의 근원입니다."
  },
  {
    "id": "odan-027",
    "title": "시뮬라크르",
    "subtitle": "Simulacre · 장 보드리야르(Jean Baudrillard)",
    "spectrum": "humanities",
    "domain": "현대철학 · 문화이론",
    "pos": "철학 개념",
    "summary": "원래는 원본을 본뜬 복제물을 뜻했으나, 현대 사회에서는 원본 없이도 스스로 존재하며 오히려 실제 현실보다 더 현실처럼 기능하고 현실을 지배하는 이미지와 기호의 세계(하이퍼리얼리티)를 뜻합니다."
  },
  {
    "id": "odan-028",
    "title": "콘웨이의 법칙",
    "subtitle": "Conway's Law · 소프트웨어 아키텍처 & 조직론",
    "spectrum": "system",
    "domain": "시스템 아키텍처 · 조직학",
    "pos": "시스템 원리",
    "summary": "어떤 조직이 시스템을 설계할 때, 그 결과로 나오는 시스템의 구조(아키텍처)는 필연적으로 그 조직의 의사소통 구조를 그대로 빼닮게 된다는 법칙입니다."
  },
  {
    "id": "odan-029",
    "title": "풍향계",
    "subtitle": "Weather Vane · 風向計",
    "spectrum": "word",
    "domain": "사물 · 관측 도구",
    "pos": "명사",
    "summary": "높은 곳에 설치하여 바람이 불어오는 방향을 가리키는 기구입니다. 스스로 움직이는 동력은 없으나, 보이지 않는 공기의 흐름을 가장 먼저 시각적 화살표로 번역해 냅니다."
  },
  {
    "id": "odan-030",
    "title": "점균류 지능",
    "subtitle": "Physarum polycephalum · 황색망사점균",
    "spectrum": "science",
    "domain": "생물학 · 복잡계",
    "pos": "생물 현상",
    "summary": "변형체 시기에는 핵이 여러 개인 하나의 거대한 세포로 활동하며, 뇌나 신경계 없이도 원형질 파동만으로 미로의 최단 경로와 최적의 물류 네트워크를 찾아내는 분산 지능 사례입니다."
  },
  {
    "id": "odan-031",
    "title": "브루탈리즘",
    "subtitle": "Brutalism · Béton Brut (가공하지 않은 콘크리트)",
    "spectrum": "humanities",
    "domain": "건축 · 디자인 사조",
    "pos": "건축 양식",
    "summary": "장식적인 마감재를 일절 배제하고 거친 노출 콘크리트와 거대한 기하학적 매스(Mass), 건물의 구조적 뼈대와 설비 자체를 있는 그대로 정직하고 육중하게 드러내는 건축 및 디자인 사조입니다."
  },
  {
    "id": "odan-032",
    "title": "레드 퀸 가설",
    "subtitle": "Red Queen Hypothesis · 진화생물학 · 경쟁 전략",
    "spectrum": "system",
    "domain": "진화론 · 게임이론",
    "pos": "공진화 모델",
    "summary": "포식자와 피식자, 혹은 생태계의 경쟁자들이 서로 끊임없이 공진화하기 때문에 멈추지 않고 진화해야만 현재의 상대적인 생존 위치를 유지할 수 있다는 진화생물학 가설입니다."
  },
  {
    "id": "odan-033",
    "title": "여우비",
    "subtitle": "Pure Korean · Noun · Sunshower",
    "spectrum": "word",
    "domain": "순우리말 · 기상 어휘",
    "pos": "명사",
    "summary": "볕이 나 있는 날에 잠깐 오다가 그치는 비입니다. 맑음과 비라는 상반된 기상 상태가 같은 시공간의 하늘 아래에 공존하는 역설적이고 서정적인 순간입니다."
  },
  {
    "id": "odan-034",
    "title": "위상수학적 불변량",
    "subtitle": "Topological Invariant · Topology",
    "spectrum": "science",
    "domain": "수학 · 위상수학",
    "pos": "수학 개념",
    "summary": "도형을 자르거나 붙이지 않고 고무찰흙처럼 늘이거나 구부리는 연속 변환(위상동형)을 가해도 절대 변하지 않는 본질적 성질(예: 구멍의 개수인 종수 Genus)입니다. 위상수학자에게 손잡이 달린 머그컵과 도넛은 완벽히 같은 도형입니다."
  },
  {
    "id": "odan-035",
    "title": "바니타스",
    "subtitle": "Vanitas · 메멘토 모리 정물화",
    "spectrum": "humanities",
    "domain": "미술사 · 철학",
    "pos": "예술 주제",
    "summary": "17세기 네덜란드 플랑드르 회화에서 유행한 정물화 양식으로, 화려한 꽃과 과일, 악기, 책 옆에 반드시 해골, 꺼져가는 촛불, 비누거품, 모래시계를 함께 배치하여 지상적 쾌락의 덧없음과 죽음의 필연성을 일깨우는 예술입니다."
  },
  {
    "id": "odan-036",
    "title": "비대칭성 (컨벡시티)",
    "subtitle": "Asymmetry / Convexity · 의사결정 이론",
    "spectrum": "system",
    "domain": "전략 · 의사결정",
    "pos": "수학·전략 개념",
    "summary": "실패했을 때 잃을 수 있는 최대 손실은 작고 제한되어 있는 반면, 성공했을 때 얻을 수 있는 잠재적 보상은 상한선 없이 열려 있는 비선형적 의사결정 구조를 뜻합니다."
  },
  {
    "id": "odan-037",
    "title": "프리즘",
    "subtitle": "Prism · 분광기",
    "spectrum": "word",
    "domain": "광학 · 사물 어휘",
    "pos": "명사",
    "summary": "빛을 굴절·분산시키는 투명한 다면체입니다. 하나의 투명한 백색광이 프리즘을 통과하는 순간, 그 안에 숨어 있던 파장별 스펙트럼이 고유한 각도로 분리되어 드러납니다."
  },
  {
    "id": "odan-038",
    "title": "생물발광",
    "subtitle": "Bioluminescence · 심해 및 생태 생물학",
    "spectrum": "science",
    "domain": "생물학 · 생화학",
    "pos": "생명 현상",
    "summary": "반딧불이, 심해 아귀, 발광 플랑크톤 등 생물이 루시페린(Luciferin)과 루시페레이스 효소의 화학 반응을 통해 열을 거의 내지 않고(냉광, 에너지 효율 95% 이상) 스스로 빛을 만들어내는 현상입니다."
  },
  {
    "id": "odan-039",
    "title": "리미널 스페이스",
    "subtitle": "Liminal Space · 문턱과 경계의 공간",
    "spectrum": "humanities",
    "domain": "공간미학 · 인류학",
    "pos": "공간 개념",
    "summary": "라틴어 리멘(문턱)에서 유래한 말로, 새벽의 빈 공항 복도나 계단실처럼 이동을 위해 거쳐 가는 장소가 유동 인구를 잃고 정지해 있을 때 느껴지는 몽환적인 경계의 공간을 뜻합니다."
  },
  {
    "id": "odan-040",
    "title": "인접 가능성",
    "subtitle": "The Adjacent Possible · 스튜어트 카우프만",
    "spectrum": "system",
    "domain": "복잡계 · 혁신 이론",
    "pos": "진화·창의성 모델",
    "summary": "생물 진화나 기술 혁신은 허공에서 갑자기 도약하는 것이 아니라, 현재 존재하는 요소들의 바로 한 단계 바깥에 있는 인접한 가능성들이 조합되며 차근차근 확장된다는 스튜어트 카우프만의 이론입니다."
  },
  {
    "id": "odan-041",
    "title": "발화점",
    "subtitle": "Ignition Point · 發火點",
    "spectrum": "word",
    "domain": "화학 · 상태 어휘",
    "pos": "명사",
    "summary": "가연성 물질이 외부에서 불꽃을 직접 대지 않아도 스스로 타기 시작하는 최저 온도입니다. 그 온도보다 단 1도가 낮아도 침묵하지만, 넘어서는 순간 비가역적인 연소가 시작됩니다."
  },
  {
    "id": "odan-042",
    "title": "베이즈 추론",
    "subtitle": "Bayesian Inference · 확률론과 통계학",
    "spectrum": "science",
    "domain": "수학 · 확률과 인지",
    "pos": "수학·통계 원리",
    "summary": "사건에 대한 사전 확률을 바탕으로 새로운 증거가 관측될 때마다 가설이 참일 사후 확률을 갱신해 나가는 통계적 추론 방식으로, 뇌의 예측 부호화 모델의 핵심 원리이기도 합니다."
  },
  {
    "id": "odan-043",
    "title": "클리앙멘 (원자의 비껴남)",
    "subtitle": "Clinamen · 루크레티우스 · 에피쿠로스 자연철학",
    "spectrum": "humanities",
    "domain": "고대철학 · 존재론",
    "pos": "철학 개념",
    "summary": "허공을 평행하게 떨어지던 원자들이 예고 없이 미세하게 궤도를 비껴나는 현상입니다. 이 작은 빗나감이 없었다면 원자들이 충돌하지 못해 사물도 자유의지도 탄생하지 못했을 것이라는 고대 철학 개념입니다."
  },
  {
    "id": "odan-044",
    "title": "파레토 프론티어",
    "subtitle": "Pareto Frontier · 다목적 최적화",
    "spectrum": "system",
    "domain": "경제학 · 공학 최적화",
    "pos": "시스템 개념",
    "summary": "가벼우면서도 튼튼한 재료처럼 서로 상충(Trade-off)하는 여러 목표들 사이에서, 다른 지표를 희생하지 않고서는 어느 한 지표도 더 이상 개선할 수 없는 최적해들의 경계선."
  },
  {
    "id": "odan-045",
    "title": "모래시계",
    "subtitle": "Hourglass · 沙時計",
    "spectrum": "word",
    "domain": "사물 · 시간 어휘",
    "pos": "명사",
    "summary": "잘록한 목을 통해 모래가 중력에 의해 일정한 속도로 떨어지며 시간을 재는 도구입니다. 위쪽의 미래가 줄어든 만큼 아래쪽의 과거가 정확히 같은 부피로 쌓이며, 뒤집는 순간 시간의 방향이 역전됩니다."
  },
  {
    "id": "odan-046",
    "title": "시간 결정",
    "subtitle": "Time Crystal · 비평형 양자 물리학",
    "spectrum": "science",
    "domain": "응집물질물리학",
    "pos": "물리 물질상",
    "summary": "바닥 상태에서는 불가능함이 증명되었으나(Watanabe·Oshikawa 2015), 주기적으로 구동되는 비평형 양자계에서 시간 대칭성이 깨지며 구조가 시간 축을 따라 주기적으로 진동하는 물질상입니다."
  },
  {
    "id": "odan-047",
    "title": "폴리포니 (다성음악)",
    "subtitle": "Polyphony · 음악학 · 문학이론(바흐친)",
    "spectrum": "humanities",
    "domain": "음악 · 서사학",
    "pos": "예술 구조",
    "summary": "하나의 주선율에 반주가 종속되는 구조와 달리, 둘 이상의 독립적인 선율들이 동등한 자율성을 유지한 채 동시에 흐르며 대위법적 조화를 이루는 음악·서사 구조입니다."
  },
  {
    "id": "odan-048",
    "title": "네트워크 효과",
    "subtitle": "Network Effect · 메칼프의 법칙",
    "spectrum": "system",
    "domain": "경제 · 플랫폼 이론",
    "pos": "시스템 원리",
    "summary": "어떤 상품이나 생태계를 사용하는 노드의 수(n)가 늘어날수록, 그 네트워크가 제공하는 전체 가치와 연결의 경우의 수는 n의 제곱(n²)에 비례하여 기하급수적으로 폭발한다는 원리."
  },
  {
    "id": "odan-049",
    "title": "유영하다",
    "subtitle": "Swim / Float · 游泳",
    "spectrum": "word",
    "domain": "동작 · 감각 동사",
    "pos": "동사",
    "summary": "물속이나 허공을 자유롭게 헤엄치거나 떠다니는 동작을 뜻합니다. 목적지를 향해 직선으로 질주하는 것이 아니라, 매질(물·공기·사유)의 부력과 흐름에 몸을 맡긴 채 나아가는 움직임입니다."
  },
  {
    "id": "odan-050",
    "title": "칸토어 집합",
    "subtitle": "Cantor Set · 실해석학 · 프랙탈 기하학",
    "spectrum": "science",
    "domain": "수학 · 무한과 집합론",
    "pos": "수학 구조",
    "summary": "길이 1인 선분에서 가운데 1/3을 잘라내는 과정을 무한히 반복할 때 남는 점들의 집합입니다. 남은 길이의 합(측도)은 0이지만 남아 있는 점의 개수는 원래 선분 전체와 같은 비가산 무한인 프랙탈입니다."
  },
  {
    "id": "odan-051",
    "title": "오컴의 면도날",
    "subtitle": "Occam's Razor · 경제성의 원리",
    "spectrum": "humanities",
    "domain": "인식론 · 과학철학",
    "pos": "철학 원리",
    "summary": "동일한 현상을 설명하는 두 개 이상의 가설이 있다면, 불필요한 가정과 복잡한 전제를 가장 적게 사용하는 가장 단순한 설명을 선택해야 한다는 방법론적 원칙."
  },
  {
    "id": "odan-052",
    "title": "죄수의 딜레마와 팃포탯",
    "subtitle": "Prisoner's Dilemma & Tit-for-Tat",
    "spectrum": "system",
    "domain": "게임이론 · 진화전략",
    "pos": "전략 모델",
    "summary": "단발성 게임에서는 배신이 유리해 보이지만, 반복되는 상호작용 생태계에서는 '첫 수에는 무조건 협력하고, 그다음부터는 상대의 직전 행동을 그대로 돌려주는(Tit-for-Tat)' 단순하고 투명한 전략이 가장 강력한 생존력을 보인다는 게임이론의 발견."
  },
  {
    "id": "odan-053",
    "title": "불협화음",
    "subtitle": "Dissonance · 不協和音",
    "spectrum": "word",
    "domain": "청각 · 음악 어휘",
    "pos": "명사",
    "summary": "두 개 이상의 음이 동시에 울릴 때 주파수 비율이 정수비에서 벗어나 긴장과 불안정함을 일으키는 화음입니다. 그러나 음악사에서 모든 새로운 예술적 돌파와 해방감은 불협화음의 긴장으로부터 탄생했습니다."
  },
  {
    "id": "odan-054",
    "title": "세포 사멸 (아폽토시스)",
    "subtitle": "Apoptosis · 발생생물학",
    "spectrum": "science",
    "domain": "생물학 · 세포학",
    "pos": "생명 메커니즘",
    "summary": "세포가 손상되거나 발생 과정에서 역할이 끝났을 때 유전자에 설계된 명령에 따라 스스로를 깔끔하게 해체하는 능동적 과정입니다. 태아의 손가락이 다섯 개로 갈라지는 원리이기도 합니다."
  },
  {
    "id": "odan-055",
    "title": "플라톤의 동굴의 비유",
    "subtitle": "Allegory of the Cave · 국가론",
    "spectrum": "humanities",
    "domain": "고대철학 · 인식론",
    "pos": "철학 비유",
    "summary": "태어날 때부터 동굴 벽만 바라보도록 묶인 죄수들은 등 뒤의 불빛이 만들어낸 벽면의 그림자만을 유일한 실재라고 믿으며, 동굴 밖으로 나가 태양과 실물을 본 사람이 돌아와 진실을 말해도 믿지 않는다는 인식의 비유."
  },
  {
    "id": "odan-056",
    "title": "체스판의 두 번째 절반",
    "subtitle": "Second Half of the Chessboard",
    "spectrum": "system",
    "domain": "수학 · 기술 기하급수",
    "pos": "성장 모델",
    "summary": "체스판 첫 칸에 밀알 1개부터 매 칸 2배씩 늘리면 33번째 칸(두 번째 절반 시작)에서 약 43억 알(약 215톤)에 이르고, 57번째 칸 무렵에는 인류 연간 곡물 생산량(약 28억 톤)마저 넘어서는 기하급수 성장을 뜻합니다."
  },
  {
    "id": "odan-057",
    "title": "박제",
    "subtitle": "Taxidermy / Preserved Form · 剝製",
    "spectrum": "word",
    "domain": "사물 · 시간 어휘",
    "pos": "명사",
    "summary": "생물의 가죽을 벗겨 그 속에 솜 따위를 채워 살아 있을 때의 모양 그대로 영구히 보존하는 일, 또는 시간이 멈춘 채 굳어버린 관념이나 순간을 비유하는 단어입니다."
  },
  {
    "id": "odan-058",
    "title": "초유체",
    "subtitle": "Superfluid · 극저온 양자 유체",
    "spectrum": "science",
    "domain": "물리학 · 양자유체역학",
    "pos": "물질 상태",
    "summary": "액체 헬륨 등을 절대영도에 가깝게 냉각했을 때 점성(마찰력)이 완전히 0이 되는 상태입니다. 초유체를 그릇에 담아두면 벽면을 타고 스스로 중력을 거슬러 기어 올라가 그릇 밖으로 흘러나오며, 한 번 저어주면 영원히 멈추지 않고 회전합니다."
  },
  {
    "id": "odan-059",
    "title": "스트라이샌드 효과",
    "subtitle": "Streisand Effect · 사회심리학",
    "spectrum": "humanities",
    "domain": "미디어 · 심리학",
    "pos": "사회 현상",
    "summary": "어떤 정보나 사진을 검열하거나 숨기려고 시도할수록, 오히려 사람들의 호기심과 반발심을 자극해 그 정보가 이전보다 수천 배 더 널리 퍼져나가는 역효과."
  },
  {
    "id": "odan-060",
    "title": "생존자 편향",
    "subtitle": "Survivorship Bias · 아브라함 발드",
    "spectrum": "system",
    "domain": "통계학 · 의사결정",
    "pos": "인지 오류",
    "summary": "전투에서 살아 돌아온 폭격기들의 총탄 자국만 보고 그 부위를 보강하려 했으나, 통계학자 발드가 '총에 맞고도 돌아왔다는 건 그 부위는 맞아도 치명적이지 않다는 뜻이니, 정작 총탄 자국이 전혀 없는 엔진과 조종석을 보강해야 한다'고 간파한 통찰."
  },
  {
    "id": "odan-061",
    "title": "여백",
    "subtitle": "Blank Space / Margin · 餘白",
    "spectrum": "word",
    "domain": "공간 · 미학 어휘",
    "pos": "명사",
    "summary": "글씨나 그림을 그리고 남은 빈자리입니다. 아무것도 채워지지 않은 결핍의 공간이 아니라, 채워진 것들이 숨을 쉬고 관람자의 상상이 개입할 수 있도록 의도적으로 남겨둔 공간입니다."
  },
  {
    "id": "odan-062",
    "title": "푸리에 변환",
    "subtitle": "Fourier Transform · 해석학",
    "spectrum": "science",
    "domain": "수학 · 신호처리",
    "pos": "수학 변환",
    "summary": "아무리 복잡하고 불규칙한 파동이라도 단순한 사인·코사인 정현파들의 합으로 분해할 수 있으며, 시간 영역의 신호를 주파수 스펙트럼으로 변환해 주는 수학적 도구입니다."
  },
  {
    "id": "odan-063",
    "title": "제이가르닉 효과",
    "subtitle": "Zeigarnik Effect · 인지심리학",
    "spectrum": "humanities",
    "domain": "심리학 · 기억",
    "pos": "인지 현상",
    "summary": "완결된 일은 쉽게 잊어버리는 반면, 끝내지 못하거나 중간에 끊긴 미완성의 과제와 이야기는 뇌 속에서 계속 긴장 상태를 유지하며 선명하게 기억에 남는 심리 현상."
  },
  {
    "id": "odan-064",
    "title": "갈라파고스화",
    "subtitle": "Galápagos Syndrome · 고립 진화",
    "spectrum": "system",
    "domain": "생태학 · 기술 경제",
    "pos": "시스템 현상",
    "summary": "외부 대륙과 단절된 섬에서 독자적인 환경에 맞춰 고도로 특수하게 진화한 나머지, 보편적인 외부 생태계와 연결되는 순간 호환성을 잃고 도태되는 현상."
  },
  {
    "id": "odan-065",
    "title": "신기루",
    "subtitle": "Mirage · 蜃氣樓",
    "spectrum": "word",
    "domain": "자연 · 광학 어휘",
    "pos": "명사",
    "summary": "밀도가 다른 공기층을 지나는 빛이 굴절되어, 실제로는 멀리 있거나 존재하지 않는 풍경이 눈앞에 떠 있는 것처럼 보이는 대기 광학 현상입니다."
  },
  {
    "id": "odan-066",
    "title": "엔트로피",
    "subtitle": "Entropy · 열역학 제2법칙",
    "spectrum": "science",
    "domain": "물리학 · 정보이론",
    "pos": "물리 법칙",
    "summary": "고립된 계에서 에너지가 쓸모없는 형태로 흩어지며 무질서도(미시 상태의 경우의 수)가 항상 증가하는 방향성. 우주의 시간 화살(Arrow of Time)이 왜 과거에서 미래로만 흐르는지를 설명하는 유일한 물리량."
  },
  {
    "id": "odan-067",
    "title": "미장센",
    "subtitle": "Mise-en-scène · 무대 위에서의 배치",
    "spectrum": "humanities",
    "domain": "영화 · 연극 미학",
    "pos": "예술 용어",
    "summary": "프레임 안에 보이는 모든 시각적 요소(조명, 공간, 소품, 인물의 동선과 거리, 색채)를 대사 없이도 이야기의 함의와 심리를 전달하도록 정교하게 설계하는 연출 미학."
  },
  {
    "id": "odan-068",
    "title": "탐색과 활용 딜레마",
    "subtitle": "Exploration vs. Exploitation · 강화학습 · 전략",
    "spectrum": "system",
    "domain": "알고리즘 · 의사결정",
    "pos": "최적화 모델",
    "summary": "이미 검증된 최선의 선택지를 계속 이용할 것인가(활용), 아니면 불확실성을 감수하고 더 나은 대안을 찾아 미지의 영역을 시험할 것인가(탐색) 사이의 최적 균형을 찾는 의사결정 문제입니다."
  },
  {
    "id": "odan-069",
    "title": "이정표",
    "subtitle": "Milestone · 里程標",
    "spectrum": "word",
    "domain": "공간 · 여정 어휘",
    "pos": "명사",
    "summary": "길가에서 목적지까지의 거리나 방향을 알려주는 표지석입니다. 스스로는 단 한 걸음도 움직이지 못한 채, 스쳐 지나가는 여행자들의 이동만을 증명합니다."
  },
  {
    "id": "odan-070",
    "title": "페르미 역설",
    "subtitle": "Fermi Paradox · 우주생물학",
    "spectrum": "science",
    "domain": "천문학 · 우주론",
    "pos": "과학 역설",
    "summary": "우주의 나이와 수천억 개의 은하, 조 단위의 행성 수를 고려하면 외계 문명이 흔해야 마땅한데, 왜 지금까지 그 어떤 신호나 흔적도 발견되지 않는가? ('그들은 모두 어디에 있는가?')"
  },
  {
    "id": "odan-071",
    "title": "우로보로스",
    "subtitle": "Ouroboros · 자기 꼬리를 삼키는 뱀",
    "spectrum": "humanities",
    "domain": "신화 · 상징학",
    "pos": "고대 상징",
    "summary": "자신의 꼬리를 입에 물고 원형을 이루고 있는 뱀이나 용의 상징. 시작과 끝의 맞물림, 무한한 순환, 자기 창조와 자기 소멸의 일체를 나타냅니다."
  },
  {
    "id": "odan-072",
    "title": "시뮬레이티드 어닐링 (모의 담금질)",
    "subtitle": "Simulated Annealing · 전역 최적화 알고리즘",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 금속공학",
    "pos": "최적화 원리",
    "summary": "금속을 달군 뒤 서서히 식혀 안정된 결정을 얻듯, 초기 고온 상태에서는 일시적으로 불리한 방향의 이동도 허용함으로써 국소 최적해에 갇히지 않고 전역 최적해를 찾아가는 알고리즘입니다."
  },
  {
    "id": "odan-073",
    "title": "소용돌이",
    "subtitle": "Vortex / Eddy · 와류(渦流)",
    "spectrum": "word",
    "domain": "유체 · 역학 어휘",
    "pos": "명사",
    "summary": "액체나 기체가 중심축을 둘레로 빠르게 회전하며 빨려 들어가는 흐름입니다. 직선으로 흐르던 유체가 장애물을 만나거나 속도 차이를 겪을 때 필연적으로 태어나는 회전 에너지의 형태입니다."
  },
  {
    "id": "odan-074",
    "title": "도플러 효과",
    "subtitle": "Doppler Effect · 파동역학",
    "spectrum": "science",
    "domain": "물리학 · 파동",
    "pos": "물리 현상",
    "summary": "파동을 내는 파원이나 관찰자가 움직일 때, 가까워지면 파장이 짧아져 높은 음(청색편이)으로, 멀어지면 파장이 길어져 낮은 음(적색편이)으로 관측되는 현상. 우주가 팽창하고 있음을 밝혀낸 결정적 열쇠."
  },
  {
    "id": "odan-075",
    "title": "판옵티콘",
    "subtitle": "Panopticon · 제러미 벤담 · 미셸 푸코",
    "spectrum": "humanities",
    "domain": "사회철학 · 건축",
    "pos": "권력 구조",
    "summary": "중앙의 감시탑에서는 주변의 모든 감방을 볼 수 있지만, 감방의 죄수들은 중앙 탑에 간수가 있는지 없는지 볼 수 없게 설계하여, 결국 죄수들이 '항상 감시받고 있다'고 믿고 스스로를 규율하게 만드는 원형 감옥 모델."
  },
  {
    "id": "odan-076",
    "title": "영지식 증명",
    "subtitle": "Zero-Knowledge Proof · 현대 암호학",
    "spectrum": "system",
    "domain": "암호학 · 논리 시스템",
    "pos": "수학 프로토콜",
    "summary": "내가 비밀(암호나 해답)을 알고 있다는 사실을 상대방에게 100% 확신시키면서도, 정작 그 비밀의 내용 자체에 대해서는 단 1비트의 정보도 노출하지 않는 마법 같은 수학적 증명 프로토콜."
  },
  {
    "id": "odan-077",
    "title": "만화경",
    "subtitle": "Kaleidoscope · 萬華鏡",
    "spectrum": "word",
    "domain": "사물 · 광학 도구",
    "pos": "명사",
    "summary": "거울을 삼각형 등 다각 기둥 모양으로 맞대어 놓고, 그 안에 든 몇 개의 작은 색유리 조각이 거울의 다중 반사를 통해 무한히 대칭적인 기하학 무늬를 만들어내는 장난감이자 광학 기구입니다."
  },
  {
    "id": "odan-078",
    "title": "라플라스의 악마",
    "subtitle": "Laplace's Demon · 고전역학적 결정론",
    "spectrum": "science",
    "domain": "물리철학 · 역학",
    "pos": "사고실험",
    "summary": "만약 우주에 있는 모든 원자의 현재 위치와 운동량을 정확히 알고 이를 계산할 수 있는 지성이 있다면, 우주의 가장 먼 과거부터 가장 먼 미래까지 모든 사건을 한 치의 오차도 없이 예측할 수 있다는 결정론적 가설."
  },
  {
    "id": "odan-079",
    "title": "보르헤스의 바벨의 도서관",
    "subtitle": "The Library of Babel · 호르헤 루이스 보르헤스",
    "spectrum": "humanities",
    "domain": "문학 · 무한의 철학",
    "pos": "사유 실험",
    "summary": "스물다섯 개 기호로 조합 가능한 모든 410쪽짜리 책이 보관된 가상의 우주 도서관입니다. 모든 진실이 꽂혀 있으나 대부분이 무의미한 문자열이라 참된 책을 찾기는 불가능에 가깝다는 사유 실험입니다."
  },
  {
    "id": "odan-080",
    "title": "역선택과 레몬 시장",
    "subtitle": "Adverse Selection & Market for Lemons · 조지 애컬로프",
    "spectrum": "system",
    "domain": "정보경제학 · 시장 설계",
    "pos": "경제 원리",
    "summary": "중고차 시장처럼 판매자만 품질을 알고 구매자는 알 수 없는 '정보 비대칭' 상태에서는, 구매자가 평균 가격만 지불하려 하기 때문에 좋은 차(복숭아)는 시장에서 자취를 감추고 불량차(레몬)만 남아 결국 시장 전체가 붕괴한다는 원리."
  },
  {
    "id": "odan-081",
    "title": "꽃샘추위",
    "subtitle": "Spring Cold Snap",
    "spectrum": "word",
    "domain": "순우리말 · 계절",
    "pos": "명사",
    "summary": "이른 봄에 꽃이 피는 것을 시샘하듯 일시적으로 찾아오는 매서운 추위. 새로운 시작 직전에 찾아오는 마지막 저항의 시간."
  },
  {
    "id": "odan-082",
    "title": "초전도체와 마이스너 효과",
    "subtitle": "Superconductor & Meissner Effect",
    "spectrum": "science",
    "domain": "응집물질물리학",
    "pos": "물리 현상",
    "summary": "특정 임계온도 이하에서 전기 저항이 완전히 0이 될 뿐만 아니라, 내부의 자기장을 밖으로 완전히 밀어내어(완전 반자성) 자석 위에 허공에 떠서 고정되는 양자적 현상."
  },
  {
    "id": "odan-083",
    "title": "아우라",
    "subtitle": "Aura · 기술복제시대의 예술작품 (발터 벤야민)",
    "spectrum": "humanities",
    "domain": "미학 · 매체철학",
    "pos": "미학 개념",
    "summary": "완벽한 사진이나 디지털 복제본이 결코 가질 수 없는, 원본 예술 작품만이 가진 '지금 여기(Here and Now)'의 일회적 현존성과 오랜 시간 축적된 역사적 숨결."
  },
  {
    "id": "odan-084",
    "title": "파킨슨의 법칙",
    "subtitle": "Parkinson's Law · 조직학 · 시간 관리",
    "spectrum": "system",
    "domain": "조직론 · 시스템 역학",
    "pos": "경험 법칙",
    "summary": "'일은 그것을 완수하기 위해 할당된 시간을 남김없이 다 채울 때까지 스스로 팽창한다.' 1시간이면 끝날 일도 마감 기한을 일주일로 주면 일주일 내내 복잡해지며 시간을 다 써버리는 현상."
  },
  {
    "id": "odan-085",
    "title": "도란도란",
    "subtitle": "Quietly & Amiably",
    "spectrum": "word",
    "domain": "순우리말 · 음성 상징어",
    "pos": "부사",
    "summary": "여럿이 나직한 목소리로 서로 정답게 이야기하는 모양. 거대한 확성기의 시대에 가장 내밀한 주파수로만 공유되는 대화."
  },
  {
    "id": "odan-086",
    "title": "심해 열수분출공",
    "subtitle": "Hydrothermal Vent · 지구과학·생물학",
    "spectrum": "science",
    "domain": "해양학 · 생명의 기원",
    "pos": "자연 환경",
    "summary": "햇빛이 전혀 닿지 않는 수심 수천 미터의 해저 화산 지대에서 300~400°C의 뜨거운 광물질 물기둥이 뿜어져 나오는 곳. 태양 에너지(광합성) 없이도 화학합성만으로 번성하는 독자적인 생명 생태계."
  },
  {
    "id": "odan-087",
    "title": "리좀",
    "subtitle": "Rhizome · 들뢰즈와 과타리",
    "spectrum": "humanities",
    "domain": "현대철학 · 네트워크 사유",
    "pos": "철학 개념",
    "summary": "뿌리-줄기-가지로 이어지는 수직적·위계적 '나무(Tree)' 구조와 달리, 잔디나 생강의 땅속줄기처럼 중심도 시작도 끝도 없이 어느 지점에서나 다른 지점과 수평적으로 자유롭게 연결되고 뻗어나가는 탈중심적 사유 모델."
  },
  {
    "id": "odan-088",
    "title": "과적합 (오버피팅)",
    "subtitle": "Overfitting · 기계학습 · 통계학",
    "spectrum": "system",
    "domain": "인공지능 · 인식론",
    "pos": "시스템 오류",
    "summary": "과거의 기출문제나 주어진 데이터(노이즈까지 포함)에 너무 완벽하게 들어맞도록 복잡하게 학습한 나머지, 정작 처음 보는 새로운 현실 문제를 마주했을 때 예측력이 완전히 무너지는 현상."
  },
  {
    "id": "odan-089",
    "title": "미리내",
    "subtitle": "Milky Way / Galaxy",
    "spectrum": "word",
    "domain": "제주 방언 · 천문",
    "pos": "명사",
    "summary": "밤하늘을 가로지르는 은하수를 이르는 제주 방언입니다. 민간에서는 용을 뜻하는 옛말 미르와 시내를 뜻하는 내가 합쳐진 말로 풀이하기도 합니다."
  },
  {
    "id": "odan-090",
    "title": "몬티 홀 문제",
    "subtitle": "Monty Hall Problem · 조건부 확률",
    "spectrum": "science",
    "domain": "수학 · 확률의 직관",
    "pos": "확률 역설",
    "summary": "세 개의 문 중 하나를 고른 뒤, 사회자가 남은 두 문 중 염소가 있는 문 하나를 열어 보여줬을 때, 처음 선택을 유지하는 것(1/3)보다 선택을 바꾸는 것(2/3)이 당첨 확률을 정확히 2배 높인다는 반직관적 확률 문제."
  },
  {
    "id": "odan-091",
    "title": "낯설게 하기",
    "subtitle": "Defamiliarization (Ostranenie) · 빅토르 시클롭스키",
    "spectrum": "humanities",
    "domain": "문학이론 · 예술철학",
    "pos": "창작 원리",
    "summary": "너무나 익숙해져서 무감각하게 자동화되어 버린 일상의 사물과 행동을 마치 처음 보는 외계인의 시선이나 기묘한 묘사로 표현하여, 독자의 지각 시간을 지연시키고 대상의 생생한 감각을 되살리는 예술의 본질적 기법."
  },
  {
    "id": "odan-092",
    "title": "플라이휠 효과",
    "subtitle": "Flywheel Effect · 시스템 동역학",
    "spectrum": "system",
    "domain": "경영 · 역학 모델",
    "pos": "시스템 동역학",
    "summary": "무거운 거대 금속 바퀴를 처음 한 바퀴 돌릴 때는 엄청난 힘이 들지만, 멈추지 않고 계속 밀어 회전 관성이 붙기 시작하면 나중에는 자기 무게의 가속도로 스스로 거침없이 돌아가는 현상."
  },
  {
    "id": "odan-093",
    "title": "눈부처",
    "subtitle": "Reflection in the Pupil",
    "spectrum": "word",
    "domain": "시선 · 어휘",
    "pos": "명사",
    "summary": "마주 보고 있을 때 상대방의 눈동자 속에 비쳐 보이는 자기 자신의 작은 형상입니다. 타인의 시선 속에서만 비로소 확인되는 나의 모습을 가리킵니다."
  },
  {
    "id": "odan-094",
    "title": "공명 (레조넌스)",
    "subtitle": "Resonance · 진동학",
    "spectrum": "science",
    "domain": "물리학 · 음향학",
    "pos": "물리 현상",
    "summary": "모든 물체가 가진 고유 진동수와 외부에서 가해지는 힘의 진동수가 정확히 일치할 때, 아주 작은 힘만으로도 진폭이 폭발적으로 커지는 현상."
  },
  {
    "id": "odan-095",
    "title": "존 케이지의 4분 33초",
    "subtitle": "4'33\" · John Cage (1952)",
    "spectrum": "humanities",
    "domain": "현대음악 · 전위예술",
    "pos": "예술 사건",
    "summary": "연주자가 4분 33초 동안 단 하나의 건반도 누르지 않는 곡입니다. 객석과 공간의 자연스러운 환경음 자체가 음악이 되며 완전한 침묵이란 존재하지 않음을 일깨운 현대 예술 작품입니다."
  },
  {
    "id": "odan-096",
    "title": "공유지의 비극",
    "subtitle": "Tragedy of the Commons · 개릿 하딘",
    "spectrum": "system",
    "domain": "경제학 · 생태학",
    "pos": "개릿 하딘",
    "summary": "주인이 따로 정해지지 않은 공동의 목초지에서 모든 목동이 자신의 이익을 위해 소를 한 마리씩만 더 늘렸을 뿐인데, 결국 초지 전체가 황폐화되어 모두가 파멸에 이르는 시스템 딜레마."
  },
  {
    "id": "odan-097",
    "title": "물비늘",
    "subtitle": "Water Scales",
    "spectrum": "word",
    "domain": "순우리말 · 수면",
    "pos": "명사",
    "summary": "잔잔한 물결이 햇빛에 비치어 물고기의 비늘처럼 반짝이는 모양."
  },
  {
    "id": "odan-098",
    "title": "골디락스 존",
    "subtitle": "Goldilocks Zone · 생명체 거주가능 영역",
    "spectrum": "science",
    "domain": "천문학 · 시스템",
    "pos": "천문 개념",
    "summary": "항성으로부터 너무 가깝지도(물이 증발), 너무 멀지도(물이 결빙) 않아 행성 표면에 액체 상태의 물이 존재할 수 있는 '너무 뜨겁지도 차갑지도 않은' 최적의 궤도 영역."
  },
  {
    "id": "odan-099",
    "title": "게슈탈트 붕괴",
    "subtitle": "Gestaltzerfall · 자메뷔(미시감) · 인지심리학",
    "spectrum": "humanities",
    "domain": "심리학 · 지각 현상",
    "pos": "인지 현상",
    "summary": "평소 잘 알고 있던 글자나 단어를 오랫동안 뚫어지게 응시하면, 어느 순간 전체적인 형태와 의미가 해체되어 낯선 선과 획의 조합으로만 보이게 되는 지각 현상입니다."
  },
  {
    "id": "odan-100",
    "title": "비잔티움 장군 문제",
    "subtitle": "Byzantine Generals Problem · 분산시스템",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 합의이론",
    "pos": "분산시스템",
    "summary": "일부 전령이나 장군이 배신자(거짓 정보나 통신 오류)일 수 있는 불확실한 네트워크 환경에서, 떨어져 있는 정직한 참여자들이 어떻게 동일한 행동 계획에 완벽히 합의할 수 있는가 묻는 문제."
  },
  {
    "id": "odan-101",
    "title": "벼리",
    "subtitle": "Main Cord of a Net",
    "spectrum": "word",
    "domain": "순우리말 · 구조",
    "pos": "명사",
    "summary": "그물의 위쪽 코를 꿰어 오므렸다 폈다 하는 중심 줄, 또는 일이나 글의 가장 핵심이 되는 뼈대와 줄거리."
  },
  {
    "id": "odan-102",
    "title": "보로노이 다이어그램",
    "subtitle": "Voronoi Diagram · 계산기하학",
    "spectrum": "science",
    "domain": "수학 · 자연의 기하학",
    "pos": "기하 구조",
    "summary": "평면 위의 여러 기준점들로부터 가장 가까운 영역끼리 경계를 나누어 분할한 기하학 구조로, 기린의 무늬와 잠자리 날개 맥, 도시 관할 구역 최적화에 두루 나타납니다."
  },
  {
    "id": "odan-103",
    "title": "기억의 궁전",
    "subtitle": "Method of Loci / Memory Palace · 고대 수사학",
    "spectrum": "humanities",
    "domain": "인지 · 건축적 기억술",
    "pos": "기억 기법",
    "summary": "추상적인 정보나 긴 이야기를 외우기 위해, 머릿속에 자신이 잘 아는 집이나 궁전의 방과 복도를 지은 뒤 각 위치마다 강렬하고 기괴한 시각적 이미지를 배치하여 공간을 산책하듯 기억을 인출하는 고대 그리스·로마의 기법."
  },
  {
    "id": "odan-104",
    "title": "샌드박스",
    "subtitle": "Sandbox · 모래놀이터",
    "spectrum": "system",
    "domain": "소프트웨어 · 실험 설계",
    "pos": "모래놀이터",
    "summary": "아이들이 다치지 않고 무엇이든 만들었다 부술 수 있는 모래놀이터처럼, 외부의 실제 시스템에 어떠한 피해도 주지 않도록 완벽히 격리된 안전한 실험 공간."
  },
  {
    "id": "odan-105",
    "title": "새벽녘",
    "subtitle": "Break of Dawn",
    "spectrum": "word",
    "domain": "시간 · 경계 어휘",
    "pos": "명사",
    "summary": "밤의 어둠이 물러가고 동이 트려 하는 가장 서늘하고 고요한 시간의 경계."
  },
  {
    "id": "odan-106",
    "title": "클라인 병",
    "subtitle": "Klein Bottle · 4차원 위상수학",
    "spectrum": "science",
    "domain": "수학 · 위상수학",
    "pos": "위상 곡면",
    "summary": "뫼비우스의 띠 두 개를 경계끼리 이어 붙인 형태로, 안쪽과 바깥쪽의 구별이 전혀 없는 닫힌 곡면입니다. 물을 부으면 병의 목을 통해 자기 자신의 안팎을 순환하며 끝없이 흐르는 비가향(Non-orientable) 다양체."
  },
  {
    "id": "odan-107",
    "title": "몰입 (플로우)",
    "subtitle": "Flow · 미하이 칙센트미하이",
    "spectrum": "humanities",
    "domain": "심리학 · 창작 상태",
    "pos": "의식 상태",
    "summary": "과제의 난이도와 자신의 숙련도가 아슬아슬한 최고조의 균형을 이룰 때, 자의식이 사라지고 시간 감각이 왜곡되며 행위 자체와 내가 하나가 되는 무아지경의 최적 경험 상태."
  },
  {
    "id": "odan-108",
    "title": "휴리스틱",
    "subtitle": "Heuristic · 발견적 어림법",
    "spectrum": "system",
    "domain": "인지과학 · 알고리즘",
    "pos": "발견적 어림법",
    "summary": "모든 경우의 수를 다 계산하기에는 시간과 정보가 부족할 때, 완벽한 정답은 아니더라도 실전에서 충분히 빠르고 쓸 만한 해답을 찾아내는 직관적 지름길 규칙."
  },
  {
    "id": "odan-109",
    "title": "소나기",
    "subtitle": "Sudden Shower",
    "spectrum": "word",
    "domain": "기상 · 자연 어휘",
    "pos": "명사",
    "summary": "대기의 불안정으로 인해 갑자기 세차게 쏟아지다가 곧 그치는 비. 예고 없이 찾아와 모든 것을 적시고 사라지는 사건."
  },
  {
    "id": "odan-110",
    "title": "로렌츠 끌개 (나비효과)",
    "subtitle": "Lorenz Attractor · 카오스 이론",
    "spectrum": "science",
    "domain": "수학 · 동역학계",
    "pos": "카오스 모델",
    "summary": "초기 조건의 미세한 차이가 시간에 따라 크게 증폭되어 장기 예측은 불가능하지만, 그 궤적 전체를 위상 공간에 그리면 결코 겹치지 않는 나비 날개 모양의 기묘한 질서 안에 머무는 카오스 모델입니다."
  },
  {
    "id": "odan-111",
    "title": "플라뇌르",
    "subtitle": "Flâneur · 도시 산책자",
    "spectrum": "humanities",
    "domain": "문화이론 · 문학",
    "pos": "도시 산책자",
    "summary": "바쁘게 목적지를 향해 달려가는 군중 속에서 홀로 아무런 목적 없이 도시의 골목과 아케이드를 느리게 거닐며 시대의 풍경을 관찰하고 사유하는 산책자."
  },
  {
    "id": "odan-112",
    "title": "아지랑이",
    "subtitle": "Heat Haze",
    "spectrum": "word",
    "domain": "자연 · 광학 어휘",
    "pos": "명사",
    "summary": "햇볕이 강하게 쬘 때 데워진 공기가 위로 피어오르며 빛이 굴절되어 사물이 아른거리며 흔들려 보이는 현상."
  },
  {
    "id": "odan-113",
    "title": "레이놀즈 수",
    "subtitle": "Reynolds Number · 유체역학",
    "spectrum": "science",
    "domain": "물리학 · 유체역학",
    "pos": "무차원 수",
    "summary": "유체의 흐름에서 관성력과 점성력의 비를 나타내는 무차원 수입니다. 값이 낮으면 가지런한 층류가 되고, 임계값을 넘으면 소용돌이가 치는 난류로 전이됩니다."
  },
  {
    "id": "odan-114",
    "title": "레디메이드",
    "subtitle": "Readymade · 마르셀 뒤샹",
    "spectrum": "humanities",
    "domain": "현대미술 · 미학",
    "pos": "마르셀 뒤샹",
    "summary": "공장에서 대량 생산된 기성품(변기, 자전거 바퀴)을 미술관이라는 새로운 맥락 속에 놓아두고 서명함으로써 '무엇이 예술인가'라는 질문을 송두리째 바꾼 개념."
  },
  {
    "id": "odan-115",
    "title": "등대",
    "subtitle": "Lighthouse · 燈臺",
    "spectrum": "word",
    "domain": "건축 · 항해 사물",
    "pos": "명사",
    "summary": "어두운 바다나 암초 지대에서 항해하는 배들에게 일정한 주기의 빛을 비추어 좌표와 위험을 알리는 외로운 탑."
  },
  {
    "id": "odan-116",
    "title": "양자 터널링",
    "subtitle": "Quantum Tunneling · 양자역학",
    "spectrum": "science",
    "domain": "물리학 · 양자역학",
    "pos": "양자 현상",
    "summary": "미시 세계의 입자는 파동함수의 확률 분포를 가지므로 입자의 에너지가 장벽보다 낮아도 장벽을 투과해 반대편에 나타나는 양자 현상으로, 태양 핵융합과 플래시 메모리의 작동 원리입니다."
  },
  {
    "id": "odan-117",
    "title": "불쾌한 골짜기",
    "subtitle": "Uncanny Valley · 모리 마사히로",
    "spectrum": "humanities",
    "domain": "로봇공학 · 심리학",
    "pos": "모리 마사히로",
    "summary": "인간을 닮은 로봇이나 인형의 유사도가 높아질수록 호감도가 올라가다가, 인간과 거의 비슷하지만 미묘하게 다른 지점에 이르면 갑자기 강렬한 기괴함과 공포를 느끼게 되는 구간."
  },
  {
    "id": "odan-118",
    "title": "진자 (시계추)",
    "subtitle": "Pendulum · 振子",
    "spectrum": "word",
    "domain": "역학 · 사물 어휘",
    "pos": "명사",
    "summary": "고정된 한 축에 매달려 중력과 관성의 상호작용으로 두 극단 사이를 등시성 있게 왕복 운동하는 추."
  },
  {
    "id": "odan-119",
    "title": "체렌코프 복사",
    "subtitle": "Cherenkov Radiation · 입자물리학",
    "spectrum": "science",
    "domain": "물리학 · 광학",
    "pos": "물리 현상",
    "summary": "물이나 유리 같은 매질 속에서 하전 입자가 그 매질 속의 빛보다 더 빠르게 질주할 때, 초음속 비행기가 충격파를 만들듯 푸른 빛의 전자기파 충격파를 방출하는 현상입니다."
  },
  {
    "id": "odan-120",
    "title": "동시성 (싱크로니시티)",
    "subtitle": "Synchronicity · 카를 구스타프 융",
    "spectrum": "humanities",
    "domain": "심층심리학 · 철학",
    "pos": "카를 구스타프 융",
    "summary": "물리적인 인과관계로는 전혀 설명할 수 없지만, 내면의 강렬한 생각이나 꿈이 외부 세계의 우연한 사건과 소름 끼치도록 의미 있게 일치하여 일어나는 현상."
  },
  {
    "id": "odan-121",
    "title": "나침반",
    "subtitle": "Compass · 羅針盤",
    "spectrum": "word",
    "domain": "항해 · 자기장 도구",
    "pos": "명사",
    "summary": "지구 전체를 감싸고 있는 보이지 않는 자기장(Magnetic field)에 반응하여 언제나 자북을 가리키는 자화 바늘."
  },
  {
    "id": "odan-122",
    "title": "로슈 한계",
    "subtitle": "Roche Limit · 천체물리학",
    "spectrum": "science",
    "domain": "천문학 · 중력역학",
    "pos": "천문 법칙",
    "summary": "위성이 모행성에 너무 가까이 다가가서, 위성 스스로를 뭉치게 하는 자기 중력보다 모행성이 당기는 기조력(조석력) 차이가 더 커져 위성이 산산조각 부서져 토성의 고리처럼 흩어지게 되는 한계 거리."
  },
  {
    "id": "odan-123",
    "title": "고르디우스의 매듭",
    "subtitle": "Gordian Knot · 고대 전설",
    "spectrum": "humanities",
    "domain": "신화 · 문제해결",
    "pos": "고대 전설",
    "summary": "아무도 끝을 찾아 풀 수 없도록 복잡하게 얽힌 매듭을, 정해진 규칙대로 푸는 대신 단칼에 베어버림으로써 판 자체를 깨뜨린 알렉산드로스 대왕의 일화."
  },
  {
    "id": "odan-124",
    "title": "잠망경",
    "subtitle": "Periscope · 潛望鏡",
    "spectrum": "word",
    "domain": "광학 · 관측 도구",
    "pos": "명사",
    "summary": "수면 아래나 참호 속에 몸을 숨긴 채, 두 개의 평행한 거울이나 프리즘을 통해 다른 층위의 세계를 내다보는 관측 장치."
  },
  {
    "id": "odan-125",
    "title": "스윙바이 (중력 도움)",
    "subtitle": "Gravity Assist / Swing-by · 우주항법",
    "spectrum": "science",
    "domain": "우주공학 · 천체역학",
    "pos": "항법 원리",
    "summary": "우주선이 연료를 쓰지 않고 거대 행성의 중력장을 스쳐 지나가면서 행성의 공전 운동 에너지를 얻어 속도를 가속하고 궤도를 꺾어 심우주로 나아가는 항법입니다."
  },
  {
    "id": "odan-126",
    "title": "회전문",
    "subtitle": "Revolving Door · 回轉門",
    "spectrum": "word",
    "domain": "건축 · 구조 어휘",
    "pos": "명사",
    "summary": "실내외의 공기 교환과 열 손실을 막으면서 동시에 사람들이 끊임없이 들어오고 나갈 수 있게 만든 역설적인 문. 항상 닫혀 있으면서 동시에 항상 열려 있는 구조."
  },
  {
    "id": "odan-127",
    "title": "거울 신경세포",
    "subtitle": "Mirror Neuron · 인지신경과학",
    "spectrum": "science",
    "domain": "뇌과학 · 신경생물학",
    "pos": "신경 메커니즘",
    "summary": "내가 직접 어떤 행동을 할 때뿐만 아니라, 타인이 그 행동을 하는 것을 눈으로 보기만 해도 내 뇌 속에서 똑같이 발화하는 신경세포. 인간이 타인의 아픔에 공감하고, 문화를 모방하며, 소설과 영화에 몰입할 수 있는 생물학적 토대."
  },
  {
    "id": "odan-128",
    "title": "블랙박스",
    "subtitle": "Black Box · 기록 장치",
    "spectrum": "word",
    "domain": "시스템 · 사물 어휘",
    "pos": "명사",
    "summary": "내부 작동 원리는 밖에서 보이지 않지만 입력과 출력만 관측되는 시스템, 혹은 모든 것이 파괴된 참사 속에서도 끝까지 살아남아 마지막 진실을 증언하는 비행 기록 장치."
  },
  {
    "id": "odan-129",
    "title": "우주 거대 구조와 보이드",
    "subtitle": "Cosmic Web & Giant Void · 우주론",
    "spectrum": "science",
    "domain": "천체물리학 · 우주론",
    "pos": "우주 구조",
    "summary": "수억 광년 규모로 우주를 축소해서 보면, 수천억 개의 은하들이 거미줄이나 뇌의 신경망 같은 필라멘트 구조로 얽혀 있고 그 사이사이에 은하가 거의 존재하지 않는 지름 수억 광년의 텅 빈 암흑 공간(Void, 거대 공동)이 펼쳐져 있습니다."
  },
  {
    "id": "odan-130",
    "title": "앙코르",
    "subtitle": "Encore · 재청",
    "spectrum": "word",
    "domain": "공연 · 시간 어휘",
    "pos": "명사",
    "summary": "약속된 모든 막이 내린 뒤, 관객의 열망에 의해 공식적인 시간 바깥에서 다시 한번 열리는 보너스 시공."
  },
  {
    "id": "odan-131",
    "title": "촉매",
    "subtitle": "Catalyst · 명사",
    "spectrum": "science",
    "domain": "화학 · 반응",
    "pos": "명사",
    "summary": "자기 자신은 반응 전후에 조금도 소모되거나 변하지 않으면서, 다른 물질들이 반응하는 데 필요한 활성화 에너지의 벽만 극적으로 낮추어 주는 매개체."
  },
  {
    "id": "odan-132",
    "title": "청사진",
    "subtitle": "Blueprint · 靑寫眞",
    "spectrum": "word",
    "domain": "건축 · 설계 어휘",
    "pos": "명사",
    "summary": "시안화철 감광지를 이용해 푸른 바탕에 흰 선으로 복사해 내던 건축·기계 도면. 아직 현실에 존재하지 않는 미래의 구조물을 미리 그려낸 설계도."
  },
  {
    "id": "odan-133",
    "title": "반감기",
    "subtitle": "Half-life · 명사",
    "spectrum": "science",
    "domain": "물리학 · 시간",
    "pos": "명사",
    "summary": "방사성 원소나 체내 약물, 혹은 어떤 정보의 영향력이 처음 양의 정확히 절반(1/2)으로 줄어드는 데 걸리는 고유한 시간."
  },
  {
    "id": "odan-134",
    "title": "실루엣",
    "subtitle": "Silhouette · 윤곽 그림자",
    "spectrum": "word",
    "domain": "시각 · 조형 어휘",
    "pos": "명사",
    "summary": "역광을 받아 내부의 세부 표정과 색채는 모두 지워지고 오직 바깥 테두리의 외곽선만으로 대상을 드러내는 검은 그림자."
  },
  {
    "id": "odan-135",
    "title": "삼체 문제",
    "subtitle": "Three-Body Problem · 물리",
    "spectrum": "science",
    "domain": "천체역학 · 카오스",
    "pos": "물리",
    "summary": "두 천체의 중력 궤도는 완벽한 공식으로 풀리지만, 세 번째 천체가 하나 더 추가되는 순간 일반적인 해석적 해가 사라지고 예측 불가능한 카오스 궤도가 나타나는 난제."
  },
  {
    "id": "odan-136",
    "title": "주춧돌",
    "subtitle": "Foundation Stone · 礎石",
    "spectrum": "word",
    "domain": "건축 · 구조 어휘",
    "pos": "명사",
    "summary": "기둥 밑에 받쳐 건물의 막대한 하중을 땅으로 분산시키고 땅의 습기가 기둥으로 올라오는 것을 막아주는 가장 낮은 곳의 돌."
  },
  {
    "id": "odan-137",
    "title": "쌍곡기하학",
    "subtitle": "Hyperbolic Geometry · 수학",
    "spectrum": "science",
    "domain": "수학 · 비유클리드",
    "pos": "수학",
    "summary": "평행선 공준을 부정하여 한 직선 밖의 한 점을 지나는 평행선이 무수히 많이 존재하는 말안장 모양의 굽은 공간 기하학."
  },
  {
    "id": "odan-138",
    "title": "자오선",
    "subtitle": "Meridian · 子午線",
    "spectrum": "word",
    "domain": "지리 · 천문 어휘",
    "pos": "명사",
    "summary": "지구의 북극과 남극을 최단 거리로 잇는 가상의 세로선이자, 해가 하루 중 가장 높이 떠오르는 정오(남중)의 순간을 결정하는 시간의 기준선."
  },
  {
    "id": "odan-139",
    "title": "소수 (Prime Number)",
    "subtitle": "Prime Number · 정수론",
    "spectrum": "science",
    "domain": "수학 · 수론",
    "pos": "정수론",
    "summary": "1과 자기 자신 이외의 어떤 자연수로도 나누어떨어지지 않는 수. 모든 자연수를 곱셈으로 조립해 내는 수학 세계의 원소(Atom)."
  },
  {
    "id": "odan-140",
    "title": "등고선",
    "subtitle": "Contour Line · 等高線",
    "spectrum": "word",
    "domain": "지형 · 기하 어휘",
    "pos": "명사",
    "summary": "지도 위에서 해발 고도가 같은 지점들을 매끄럽게 이은 곡선. 3차원의 가파른 산맥과 깊은 계곡을 2차원의 평면 위에 간격의 밀도로 번역해 낸 기호."
  },
  {
    "id": "odan-141",
    "title": "브라운 운동",
    "subtitle": "Brownian Motion · 통계물리",
    "spectrum": "science",
    "domain": "물리학 · 확률과정",
    "pos": "통계물리",
    "summary": "물 위에 떠 있는 꽃가루가 눈에 보이지 않는 수많은 물 분자들의 무작위 충돌에 의해 쉴 새 없이 불규칙하게 지그재그로 떨며 움직이는 현상."
  },
  {
    "id": "odan-142",
    "title": "여진",
    "subtitle": "Aftershock · 餘震",
    "spectrum": "word",
    "domain": "지질 · 파동 어휘",
    "pos": "명사",
    "summary": "가장 거대한 본진이 지나간 뒤에도 지각의 깨진 단층면이 새로운 균형 자리를 찾기까지 수십 번에서 수백 번 이어지는 뒤늦은 떨림."
  },
  {
    "id": "odan-143",
    "title": "푸코의 진자",
    "subtitle": "Foucault Pendulum · 고전역학",
    "spectrum": "science",
    "domain": "물리학 · 지구과학",
    "pos": "고전역학",
    "summary": "우주 공간을 향해 일정한 진동면을 유지하려는 긴 진자 아래에서 지구가 스스로 자전하고 있음을 눈으로 직접 증명해 보인 실험 장치."
  },
  {
    "id": "odan-144",
    "title": "태엽",
    "subtitle": "Mainspring · 나선 용수철",
    "spectrum": "word",
    "domain": "기계 · 시간 사물",
    "pos": "명사",
    "summary": "얇고 긴 강철 띠를 소용돌이 모양으로 감아, 손으로 감아준 물리적 긴장 에너지를 아주 느리고 일정한 속도로 풀어내며 시계의 톱니바퀴에 생명을 불어넣는 심장."
  },
  {
    "id": "odan-145",
    "title": "내공생설",
    "subtitle": "Endosymbiotic Theory · 진화생물학",
    "spectrum": "science",
    "domain": "생물학 · 진화",
    "pos": "진화생물학",
    "summary": "독립된 박테리아였던 미토콘드리아와 엽록체가 큰 세포에게 잡아먹힌 뒤 소화되지 않고 그 안에서 공생하며 오늘날의 모든 복잡한 진핵생물이 탄생했다는 혁명적 이론."
  },
  {
    "id": "odan-146",
    "title": "조리개",
    "subtitle": "Aperture · 광학 장치",
    "spectrum": "word",
    "domain": "사진 · 광학 사물",
    "pos": "명사",
    "summary": "렌즈로 들어오는 빛의 양을 조절하는 구멍. 구멍을 넓게 열면 빛은 많이 들어오지만 배경이 흐려지고(얕은 심도), 좁게 조이면 빛은 적어지지만 가까운 곳부터 먼 풍경까지 모두 선명해지는 선택의 장치."
  },
  {
    "id": "odan-147",
    "title": "신경가소성",
    "subtitle": "Neuroplasticity · 뇌과학",
    "spectrum": "science",
    "domain": "신경과학 · 학습",
    "pos": "뇌과학",
    "summary": "성인의 뇌가 고정된 기계가 아니라, 새로운 경험과 학습, 사유를 반복할 때마다 시냅스의 물리적 연결망을 스스로 다시 배선하고 재건축하는 능력."
  },
  {
    "id": "odan-148",
    "title": "암실",
    "subtitle": "Darkroom · 暗室",
    "spectrum": "word",
    "domain": "사진 · 공간 어휘",
    "pos": "명사",
    "summary": "빛에 민감한 필름과 인화지가 타버리지 않도록 외부의 모든 빛을 완벽히 차단한 채, 오직 붉은 안전등 아래에서 잠상(숨은 이미지)을 현실의 상으로 건져 올리는 방."
  },
  {
    "id": "odan-149",
    "title": "쐐기돌 (키스톤)",
    "subtitle": "Keystone · 아치의 정점",
    "spectrum": "word",
    "domain": "건축 · 역학 어휘",
    "pos": "명사",
    "summary": "돌을 쌓아 만든 아치의 가장 꼭대기 한가운데에 마지막으로 끼워 넣는 쐐기 모양의 돌입니다. 이 돌이 끼워지는 순간 돌들이 낙하하려는 중력이 서로를 지탱하는 압축력으로 바뀝니다."
  },
  {
    "id": "odan-150",
    "title": "중정",
    "subtitle": "Courtyard · 건물 안의 빈 마당",
    "spectrum": "word",
    "domain": "건축 · 공간 어휘",
    "pos": "명사",
    "summary": "건물 한가운데를 지붕 없이 비워두어 하늘과 바람, 빗물과 햇살이 건축물 내부 깊숙이 내려앉게 만든 '방 안의 바깥'."
  },
  {
    "id": "odan-151",
    "title": "양피지 (팔림프세스트)",
    "subtitle": "Palimpsest · 겹쳐 쓴 양피지",
    "spectrum": "word",
    "domain": "기록 · 시간 사물",
    "pos": "명사",
    "summary": "귀했던 양피지의 이전 글씨를 긁어내어 지우고 그 위에 새로운 글을 덧써 내려간 문서. 그러나 세월이 흐르면 지워졌던 아래층의 옛 글씨가 유령처럼 다시 배어 나와 두 시대의 텍스트가 한 페이지에서 겹쳐 읽힙니다."
  },
  {
    "id": "odan-152",
    "title": "행간",
    "subtitle": "Between the Lines · 行間",
    "spectrum": "word",
    "domain": "언어 · 텍스트 어휘",
    "pos": "명사",
    "summary": "글의 줄과 줄 사이의 빈 공간. 활자로 직접 쓰이지 않았으나 문장과 문장의 배열을 통해 독자가 스스로 읽어내야 하는 진짜 속뜻이 머무는 자리."
  },
  {
    "id": "odan-153",
    "title": "막간 (인터미션)",
    "subtitle": "Intermission · 幕間",
    "spectrum": "word",
    "domain": "연극 · 시간 어휘",
    "pos": "명사",
    "summary": "긴 공연의 1막과 2막 사이에 막이 내려온 짧은 휴식 시간. 무대 위에서는 보이지 않게 배경 전체가 뒤바뀌고, 객석에서는 방금 본 세계의 여운과 다음 막의 기대가 교차하는 시간."
  },
  {
    "id": "odan-154",
    "title": "복선",
    "subtitle": "Foreshadowing · 伏線",
    "spectrum": "word",
    "domain": "서사 · 문학 어휘",
    "pos": "명사",
    "summary": "이야기 초반에는 스쳐 지나가는 사소한 디테일처럼 숨겨두었다가, 결정적인 순간에 수면 위로 떠오르며 모든 사건에 필연성을 부여하는 서사의 땅속 줄기."
  },
  {
    "id": "odan-155",
    "title": "호박 (앰버)",
    "subtitle": "Amber · 琥珀 · 시간의 캡슐",
    "spectrum": "word",
    "domain": "자연 · 광물 어휘",
    "pos": "명사",
    "summary": "수천만 년 전 침엽수에서 흘러나온 황금빛 송진이 작은 곤충이나 꽃잎, 공기 방울을 감싼 채 그대로 굳어 보석이 된 유기 광물."
  },
  {
    "id": "odan-156",
    "title": "나이테",
    "subtitle": "Tree Ring · 年輪",
    "spectrum": "word",
    "domain": "식물 · 시간 어휘",
    "pos": "명사",
    "summary": "나무가 따뜻한 봄여름에 빠르게 자란 밝은 층과 추운 가을겨울에 성장을 멈추며 단단해진 짙은 층이 1년에 한 겹씩 새겨 넣은 생장의 자서전. 가뭄과 산불의 기억까지 원형의 무늬로 기록됩니다."
  },
  {
    "id": "odan-157",
    "title": "균사체",
    "subtitle": "Mycelium · 숲의 지하 인터넷",
    "spectrum": "word",
    "domain": "생물 · 네트워크 어휘",
    "pos": "명사",
    "summary": "버섯의 본체로서 땅속에서 실처럼 뻗어나가 숲 전체의 나무 뿌리들을 연결하고 영양분과 위험 화학 신호를 주고받게 해주는 거대한 지하 신경망."
  },
  {
    "id": "odan-158",
    "title": "모세관 현상",
    "subtitle": "Capillary Action · 毛細管現象",
    "spectrum": "word",
    "domain": "물리 · 자연 어휘",
    "pos": "명사",
    "summary": "가느다란 관이나 좁은 틈새에서 액체가 표면장력과 관 벽면 사이의 부착력으로 중력을 거슬러 관 속을 스스로 타고 올라가거나 내려가는 물리 현상입니다."
  },
  {
    "id": "odan-159",
    "title": "크레바스",
    "subtitle": "Crevasse · 빙하의 균열",
    "spectrum": "word",
    "domain": "지형 · 극지 어휘",
    "pos": "명사",
    "summary": "거대하고 단단해 보이는 만년설 빙하가 휘어지며 흐를 때 표면에 깊숙이 갈라진 틈. 얇은 눈 다리(Snow bridge)에 가려져 보이지 않다가 발을 딛는 순간 드러나는 푸른 심연."
  },
  {
    "id": "odan-160",
    "title": "무풍지대 (돌드럼)",
    "subtitle": "Doldrums · 적도 무풍대",
    "spectrum": "word",
    "domain": "해양 · 기상 어휘",
    "pos": "명사",
    "summary": "북반구와 남반구의 무역풍이 만나는 적도 부근에서 공기가 수직으로만 상승하여 수평 방향의 바람이 완전히 사라지는 바다. 범선 시대의 항해자들이 수 주일 동안 갇히곤 했던 고요의 바다."
  },
  {
    "id": "odan-161",
    "title": "불면",
    "subtitle": "Night Vigil · 명사",
    "spectrum": "word",
    "domain": "의식 · 밤",
    "pos": "명사",
    "summary": "모두가 잠든 시간 홀로 깨어 있는 의식의 고요한 각성 상태."
  },
  {
    "id": "odan-162",
    "title": "이슬점",
    "subtitle": "Dew Point · 명사",
    "spectrum": "word",
    "domain": "기상 · 임계",
    "pos": "명사",
    "summary": "공기 중의 보이지 않던 수증기가 냉각되어 마침내 물방울로 맺히기 시작하는 온도."
  },
  {
    "id": "odan-163",
    "title": "평행선",
    "subtitle": "Parallel Lines · 명사",
    "spectrum": "word",
    "domain": "기하 · 관계",
    "pos": "명사",
    "summary": "같은 평면 위에서 영원히 같은 거리를 유지한 채 결코 만나지 않는 두 직선."
  },
  {
    "id": "odan-164",
    "title": "기폭제",
    "subtitle": "Detonator · 명사",
    "spectrum": "word",
    "domain": "화학 · 변화",
    "pos": "명사",
    "summary": "잠재되어 있던 거대한 에너지를 한순간에 폭발시키는 작은 방아쇠."
  },
  {
    "id": "odan-165",
    "title": "투명도",
    "subtitle": "Transparency · 명사",
    "spectrum": "word",
    "domain": "광학 · 성질",
    "pos": "명사",
    "summary": "빛이 매질을 통과할 때 산란되지 않고 반대편의 풍경을 그대로 투과시키는 정도."
  },
  {
    "id": "odan-166",
    "title": "불협",
    "subtitle": "Disharmony · 명사",
    "spectrum": "word",
    "domain": "감각 · 상태",
    "pos": "명사",
    "summary": "서로 다른 파장들이 매끄럽게 섞이지 못하고 마찰음을 내며 부딪히는 상태."
  },
  {
    "id": "odan-167",
    "title": "궤도",
    "subtitle": "Orbit · 명사",
    "spectrum": "word",
    "domain": "천문 · 경로",
    "pos": "명사",
    "summary": "중력에 붙들린 물체가 추락하지도 탈출하지도 않은 채 영원히 도는 타원형의 길."
  },
  {
    "id": "odan-168",
    "title": "원심력",
    "subtitle": "Centrifugal Force · 명사",
    "spectrum": "word",
    "domain": "역학 · 감각",
    "pos": "명사",
    "summary": "회전하는 중심으로부터 바깥을 향해 튕겨 나가려는 관성의 힘."
  },
  {
    "id": "odan-169",
    "title": "구심력",
    "subtitle": "Centripetal Force · 명사",
    "spectrum": "word",
    "domain": "역학 · 관계",
    "pos": "명사",
    "summary": "바깥으로 달아나려는 운동을 끊임없이 중심을 향해 끌어당겨 회전을 유지시키는 힘."
  },
  {
    "id": "odan-170",
    "title": "자전",
    "subtitle": "Rotation · 명사",
    "spectrum": "word",
    "domain": "천문 · 운동",
    "pos": "명사",
    "summary": "외부를 공전하면서도 자기 자신의 중심축을 기준으로 스스로 끝없이 도는 회전."
  },
  {
    "id": "odan-171",
    "title": "침전",
    "subtitle": "Precipitation · 명사",
    "spectrum": "word",
    "domain": "화학 · 시간",
    "pos": "명사",
    "summary": "흐린 액체 속을 부유하던 미세한 입자들이 시간이 흐르며 바닥에 고요히 가라앉아 쌓이는 일."
  },
  {
    "id": "odan-172",
    "title": "증류",
    "subtitle": "Distillation · 명사",
    "spectrum": "word",
    "domain": "화학 · 정제",
    "pos": "명사",
    "summary": "혼합물을 가열해 끓어오른 기체만을 다시 차갑게 식혀 가장 순수한 본질의 액체만 모아내는 과정."
  },
  {
    "id": "odan-173",
    "title": "발효",
    "subtitle": "Fermentation · 명사",
    "spectrum": "word",
    "domain": "생물 · 시간",
    "pos": "명사",
    "summary": "미생물이 유기물을 분해하며 시간의 흐름을 통해 전혀 새로운 풍미와 성질로 변화시키는 과정."
  },
  {
    "id": "odan-174",
    "title": "풍화",
    "subtitle": "Weathering · 명사",
    "spectrum": "word",
    "domain": "지질 · 시간",
    "pos": "명사",
    "summary": "가장 단단한 바위가 바람과 빗물, 기온의 변화에 수천 년간 깎여 마침내 부드러운 모래와 흙으로 돌아가는 일."
  },
  {
    "id": "odan-175",
    "title": "화석",
    "subtitle": "Fossil · 명사",
    "spectrum": "word",
    "domain": "고생물 · 기록",
    "pos": "명사",
    "summary": "억만년 전 살아 움직이던 생명의 흔적이 돌의 내부 구조로 치환되어 시간 속에 박제된 기록."
  },
  {
    "id": "odan-176",
    "title": "보호색",
    "subtitle": "Camouflage · 명사",
    "spectrum": "word",
    "domain": "생태 · 시각",
    "pos": "명사",
    "summary": "자신을 둘러싼 배경의 색채와 무늬 속으로 자신의 윤곽을 지워 생존하는 자연의 은폐술."
  },
  {
    "id": "odan-177",
    "title": "탈피",
    "subtitle": "Molting / Ecdysis · 명사",
    "spectrum": "word",
    "domain": "생물 · 성장",
    "pos": "명사",
    "summary": "더 크게 자라나기 위해 지금까지 자신을 지켜주던 단단하고 좁은 옛 껍질을 스스로 찢고 나오는 고통스러운 도약."
  },
  {
    "id": "odan-178",
    "title": "부력",
    "subtitle": "Buoyancy · 명사",
    "spectrum": "word",
    "domain": "유체 · 역학",
    "pos": "명사",
    "summary": "물속에 잠긴 물체의 부피만큼 물이 밀려나며 그 무게만큼 물체를 수면 위로 밀어 올리는 힘."
  },
  {
    "id": "odan-179",
    "title": "표류",
    "subtitle": "Drifting · 명사",
    "spectrum": "word",
    "domain": "항해 · 여정",
    "pos": "명사",
    "summary": "동력이나 키를 잃은 채 해류와 바람이 이끄는 대로 정처 없이 바다 위를 떠도는 상태."
  },
  {
    "id": "odan-180",
    "title": "닻",
    "subtitle": "Anchor · 명사",
    "spectrum": "word",
    "domain": "항해 · 사물",
    "pos": "명사",
    "summary": "거친 파도와 해류에 배가 휩쓸리지 않도록 보이지 않는 깊은 해저 바닥에 내려 박는 무거운 쇠갈고리."
  },
  {
    "id": "odan-181",
    "title": "방파제",
    "subtitle": "Breakwater · 명사",
    "spectrum": "word",
    "domain": "건축 · 해양",
    "pos": "명사",
    "summary": "외해에서 밀려오는 사나운 파도를 맨몸으로 먼저 받아 부수어 항구 안쪽의 잔잔한 수면을 지켜내는 콘크리트 성벽."
  },
  {
    "id": "odan-182",
    "title": "온실",
    "subtitle": "Greenhouse · 명사",
    "spectrum": "word",
    "domain": "건축 · 생태",
    "pos": "명사",
    "summary": "한겨울의 바깥 추위 속에서도 유리벽을 통해 햇살만 가두어 인위적인 봄과 열대의 기후를 유지하는 투명한 방."
  },
  {
    "id": "odan-183",
    "title": "다락방",
    "subtitle": "Attic · 명사",
    "spectrum": "word",
    "domain": "건축 · 기억",
    "pos": "명사",
    "summary": "지붕 바로 아래 가장 높은 구석에 자리해, 잊힌 사물들과 비밀스러운 상상이 먼지와 함께 쌓이는 작은 공간."
  },
  {
    "id": "odan-184",
    "title": "나선계단",
    "subtitle": "Spiral Staircase · 명사",
    "spectrum": "word",
    "domain": "건축 · 기하",
    "pos": "명사",
    "summary": "좁은 원기둥의 중심축을 감아 돌며 제자리를 맴도는 듯하지만 한 걸음마다 수직의 높이를 바꾸어 놓는 계단."
  },
  {
    "id": "odan-185",
    "title": "열쇠구멍",
    "subtitle": "Keyhole · 명사",
    "spectrum": "word",
    "domain": "사물 · 시선",
    "pos": "명사",
    "summary": "잠긴 문을 여는 통로이자, 닫힌 방 안의 세계를 아주 좁은 시야각으로 엿볼 수 있는 유일한 틈새."
  },
  {
    "id": "odan-186",
    "title": "봉인",
    "subtitle": "Seal · 명사",
    "spectrum": "word",
    "domain": "기록 · 비밀",
    "pos": "명사",
    "summary": "녹인 붉은 밀랍 위에 인장을 찍어, 허락받지 않은 자가 열지 못하도록 닫아걸고 개봉 여부를 증명하는 장치."
  },
  {
    "id": "odan-187",
    "title": "독백",
    "subtitle": "Monologue · 명사",
    "spectrum": "word",
    "domain": "연극 · 내면",
    "pos": "명사",
    "summary": "무대 위에 다른 인물이 없거나 듣지 못하는 상태에서 오직 자기 자신과 관객을 향해 쏟아내는 내면의 목소리."
  },
  {
    "id": "odan-188",
    "title": "맥거핀",
    "subtitle": "MacGuffin · 명사",
    "spectrum": "word",
    "domain": "영화 · 서사",
    "pos": "명사",
    "summary": "이야기 초반에 등장인물들을 격렬하게 움직이게 만드는 결정적 미끼처럼 보이지만, 정작 그 자체의 정체는 아무래도 상관없는 극적 장치."
  },
  {
    "id": "odan-189",
    "title": "롱테이크",
    "subtitle": "Long Take · 명사",
    "spectrum": "word",
    "domain": "영화 · 시간",
    "pos": "명사",
    "summary": "편집으로 시간을 자르지 않고 카메라가 오랫동안 숨을 멈추듯 하나의 장면을 끝까지 따라가며 실제의 시간 밀도를 화면에 가두는 기법."
  },
  {
    "id": "odan-190",
    "title": "크로키",
    "subtitle": "Croquis · 명사",
    "spectrum": "word",
    "domain": "미술 · 드로잉",
    "pos": "명사",
    "summary": "움직이는 대상의 세부 묘사를 과감히 버리고 단 몇십 초 만에 가장 역동적인 동세와 핵심 뼈대만을 빠른 선으로 포착하는 스케치."
  },
  {
    "id": "odan-191",
    "title": "비계",
    "subtitle": "Scaffolding · 명사",
    "spectrum": "word",
    "domain": "건축 · 과정",
    "pos": "명사",
    "summary": "높은 건물을 짓거나 수리하는 동안에만 외벽을 감싸고 세워졌다가, 건물이 완성되는 날 흔적도 없이 해체되어 사라지는 임시 철골 구조물."
  },
  {
    "id": "odan-192",
    "title": "가랑비",
    "subtitle": "Drizzle · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 기상",
    "pos": "고유어 명사",
    "summary": "실낱처럼 가늘게 내리는 조용한 비입니다. 당장은 옷이 젖는 줄 모르지만 오래 맞으면 속까지 깊이 스며드는 변화의 비유로 쓰입니다."
  },
  {
    "id": "odan-193",
    "title": "열역학 제1법칙",
    "subtitle": "First Law of Thermodynamics · 에너지 보존",
    "spectrum": "science",
    "domain": "물리학 · 열역학",
    "pos": "에너지 보존",
    "summary": "고립계에서 에너지는 형태만 바뀔 뿐 새로 창조되거나 소멸하지 않으며 총량이 항상 일정하게 보존된다는 법칙입니다."
  },
  {
    "id": "odan-194",
    "title": "이데아",
    "subtitle": "Idea / Form · 플라톤",
    "spectrum": "humanities",
    "domain": "고대철학 · 형이상학",
    "pos": "플라톤",
    "summary": "감각으로 경험하는 현상계의 사물들이 끊임없이 변하고 사라지는 것과 달리, 시간과 공간 너머에 영원불변하게 존재하는 본질적 원형을 뜻합니다."
  },
  {
    "id": "odan-195",
    "title": "오캄의 면도날과 과소적합",
    "subtitle": "Underfitting vs Complexity · 모델 선택",
    "spectrum": "system",
    "domain": "기계학습 · 인식론",
    "pos": "모델 선택",
    "summary": "모델이 너무 복잡하면 노이즈까지 외우는 과적합에 빠지고, 반대로 너무 단순하면 데이터의 핵심 구조조차 포착하지 못하는 과소적합에 빠진다는 균형 원리입니다."
  },
  {
    "id": "odan-196",
    "title": "여울",
    "subtitle": "Rapids / Shallows · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 지형",
    "pos": "고유어 명사",
    "summary": "강이나 바다의 바닥이 얕거나 폭이 좁아져 물살이 유난히 세차게 흐르는 길목입니다."
  },
  {
    "id": "odan-197",
    "title": "열역학 제3법칙",
    "subtitle": "Third Law of Thermodynamics · 절대영도",
    "spectrum": "science",
    "domain": "물리학 · 통계역학",
    "pos": "절대영도",
    "summary": "절대온도 0도에 가까워질수록 계의 엔트로피 변화가 0에 수렴하며, 유한한 과정만으로는 절대영도에 도달할 수 없다는 법칙입니다."
  },
  {
    "id": "odan-198",
    "title": "아파테이아",
    "subtitle": "Apatheia · 스토아 철학",
    "spectrum": "humanities",
    "domain": "고대철학 · 윤리학",
    "pos": "스토아 철학",
    "summary": "외부의 사건 자체보다 그에 대한 그릇된 판단이 고통을 만든다고 보고, 격정에 흔들리지 않는 이성적 평정심을 지키는 스토아학파의 이상적 상태입니다."
  },
  {
    "id": "odan-199",
    "title": "내시 균형",
    "subtitle": "Nash Equilibrium · 존 내시",
    "spectrum": "system",
    "domain": "게임이론 · 경제학",
    "pos": "존 내시",
    "summary": "게임에 참여하는 모든 주체가 상대방의 전략을 주어진 것으로 볼 때, 자기 혼자만 전략을 바꾸어서는 아무런 이득을 얻을 수 없어 아무도 선택을 바꾸지 않는 안정 상태입니다."
  },
  {
    "id": "odan-200",
    "title": "노을",
    "subtitle": "Sunset Glow · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 하늘",
    "pos": "고유어 명사",
    "summary": "해가 뜨거나 질 무렵 대기 중의 입자에 빛이 산란되어 하늘이 붉고 노랗게 물드는 현상입니다."
  },
  {
    "id": "odan-201",
    "title": "뇌터 정리",
    "subtitle": "Noether's Theorem · 수리물리학",
    "spectrum": "science",
    "domain": "물리학 · 대칭성",
    "pos": "수리물리학",
    "summary": "물리계에 연속적인 대칭성이 하나 존재할 때마다 그에 대응하는 보존 법칙이 반드시 하나씩 존재함을 증명한 아말리 에미 뇌터의 정리입니다."
  },
  {
    "id": "odan-202",
    "title": "아타락시아",
    "subtitle": "Ataraxia · 에피쿠로스 철학",
    "spectrum": "humanities",
    "domain": "고대철학 · 윤리학",
    "pos": "에피쿠로스 철학",
    "summary": "헛된 욕망과 두려움에서 벗어나 몸에 고통이 없고 영혼에 불안과 동요가 없는 고요한 평화 상태를 이르는 말입니다."
  },
  {
    "id": "odan-203",
    "title": "쉘링 포인트 (초점 해)",
    "subtitle": "Schelling Point · 토머스 쉘링",
    "spectrum": "system",
    "domain": "게임이론 · 의사소통",
    "pos": "토머스 쉘링",
    "summary": "서로 사전 연락을 할 수 없는 사람들이 같은 시간과 장소를 골라 만나야 할 때, 문화적·직관적으로 가장 두드러져 보이기에 암묵적으로 선택이 모이는 지점입니다."
  },
  {
    "id": "odan-204",
    "title": "그늘",
    "subtitle": "Shade / Shadow · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 빛과 공간",
    "pos": "고유어 명사",
    "summary": "빛이 물체에 가려 직접 닿지 않는 서늘한 자리이자, 타인의 보살핌이나 보이지 않는 이면을 뜻하는 말입니다."
  },
  {
    "id": "odan-205",
    "title": "하이젠베르크 불확정성 원리",
    "subtitle": "Uncertainty Principle · 양자역학",
    "spectrum": "science",
    "domain": "물리학 · 양자역학",
    "pos": "양자역학",
    "summary": "입자의 위치와 운동량 같은 켤레 물리량을 동시에 둘 다 무한히 정밀하게 결정할 수는 없다는 미시 세계의 근본 원리입니다."
  },
  {
    "id": "odan-206",
    "title": "정언 명령",
    "subtitle": "Categorical Imperative · 임마누엘 칸트",
    "spectrum": "humanities",
    "domain": "윤리학 · 근대철학",
    "pos": "임마누엘 칸트",
    "summary": "'네 의지의 격률이 언제나 동시에 보편적 입법의 원리가 될 수 있도록 행위하라'는 칸트의 무조건적 도덕 법칙입니다."
  },
  {
    "id": "odan-207",
    "title": "기회비용",
    "subtitle": "Opportunity Cost · 미시경제학",
    "spectrum": "system",
    "domain": "경제학 · 의사결정",
    "pos": "미시경제학",
    "summary": "하나의 선택지를 택함으로써 포기해야만 했던 다른 여러 대안들 가운데 가장 가치가 큰 것의 가치를 뜻합니다."
  },
  {
    "id": "odan-208",
    "title": "메아리",
    "subtitle": "Echo · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 음향",
    "pos": "고유어 명사",
    "summary": "퍼져 나간 소리가 산이나 절벽 같은 장애물에 부딪혀 다시 발원지로 되돌아오는 반사음입니다."
  },
  {
    "id": "odan-209",
    "title": "파울리 배타 원리",
    "subtitle": "Pauli Exclusion Principle · 양자역학",
    "spectrum": "science",
    "domain": "물리학 · 원자구조",
    "pos": "양자역학",
    "summary": "전자 같은 두 페르미온 입자는 동일한 양자 상태를 동시에 차지할 수 없다는 원리로, 물질이 부피를 유지하고 원소 주기율표가 성립하는 이유입니다."
  },
  {
    "id": "odan-210",
    "title": "타불라 라사 (빈 서판)",
    "subtitle": "Tabula Rasa · 존 로크",
    "spectrum": "humanities",
    "domain": "인식론 · 경험론",
    "pos": "존 로크",
    "summary": "인간의 마음은 태어날 때 아무것도 적히지 않은 깨끗한 서판과 같아서, 모든 지식과 관념은 후천적 감각과 성찰의 경험으로부터 새겨진다는 개념입니다."
  },
  {
    "id": "odan-211",
    "title": "매몰 비용 오류",
    "subtitle": "Sunk Cost Fallacy · 행동경제학",
    "spectrum": "system",
    "domain": "행동경제학 · 인지편향",
    "pos": "행동경제학",
    "summary": "이미 지출해서 어떤 선택을 하든 다시 회수할 수 없는 과거의 비용이나 시간에 미련을 두어, 미래 가치가 없는 일을 계속 붙잡고 있는 비합리적 의사결정입니다."
  },
  {
    "id": "odan-212",
    "title": "디딤돌",
    "subtitle": "Stepping Stone · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 사물",
    "pos": "고유어 명사",
    "summary": "건너다니거나 딛고 올라서기 위해 놓은 돌로, 더 높은 단계로 나아가기 위한 발판을 비유합니다."
  },
  {
    "id": "odan-213",
    "title": "페르마의 최소 시간 원리",
    "subtitle": "Fermat's Principle · 기하광학",
    "spectrum": "science",
    "domain": "물리학 · 광학",
    "pos": "기하광학",
    "summary": "빛이 한 지점에서 다른 지점으로 진행할 때 가장 짧은 거리가 아니라 가장 시간이 적게 걸리는 경로를 택한다는 원리입니다."
  },
  {
    "id": "odan-214",
    "title": "코기토 (나는 생각한다, 고로 존재한다)",
    "subtitle": "Cogito, ergo sum · 르네 데카르트",
    "spectrum": "humanities",
    "domain": "인식론 · 방법적 회의",
    "pos": "르네 데카르트",
    "summary": "감각과 세계의 모든 것을 거짓일지 모른다고 끝까지 의심하더라도, 그처럼 의심하고 생각하는 나 자신의 존재만큼은 부정할 수 없다는 철학의 제1원리입니다."
  },
  {
    "id": "odan-215",
    "title": "비교우위",
    "subtitle": "Comparative Advantage · 데이비드 리카도",
    "spectrum": "system",
    "domain": "경제학 · 분업 이론",
    "pos": "데이비드 리카도",
    "summary": "한 주체가 모든 일을 다른 주체보다 더 잘하더라도(절대우위), 각자 기회비용이 상대적으로 더 낮은 분야에 특화하여 교환하면 모두에게 이익이 된다는 법칙입니다."
  },
  {
    "id": "odan-216",
    "title": "마중물",
    "subtitle": "Priming Water · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 사물",
    "pos": "고유어 명사",
    "summary": "펌프에서 깊은 지하수를 끌어올리기 위해 위에서 먼저 한 바가지 부어 주는 유인수입니다."
  },
  {
    "id": "odan-217",
    "title": "호이겐스 원리",
    "subtitle": "Huygens' Principle · 파동광학",
    "spectrum": "science",
    "domain": "물리학 · 파동론",
    "pos": "파동광학",
    "summary": "파동이 나아갈 때 파면 위의 모든 점이 각각 새로운 구면 소파를 내보내는 파원이 되며, 이 소파들의 포락선이 다음 파면을 이룬다는 원리입니다."
  },
  {
    "id": "odan-218",
    "title": "변증법 (정반합)",
    "subtitle": "Dialectic · 헤겔 철학",
    "spectrum": "humanities",
    "domain": "철학 · 역사철학",
    "pos": "헤겔 철학",
    "summary": "하나의 주장(정)이 내적 모순을 드러내며 반대 주장(반)과 부딪히고, 두 대립을 지양(Aufheben)하여 더 높은 차원의 통합(합)으로 나아가는 사유의 운동입니다."
  },
  {
    "id": "odan-219",
    "title": "한계효용 체감의 법칙",
    "subtitle": "Diminishing Marginal Utility · 경제학",
    "spectrum": "system",
    "domain": "미시경제학 · 가치이론",
    "pos": "경제학",
    "summary": "목마를 때 마시는 첫 잔의 물은 큰 만족을 주지만, 재화의 소비량을 한 단위씩 늘려 갈수록 추가로 얻는 만족감(한계효용)은 점차 줄어든다는 법칙입니다."
  },
  {
    "id": "odan-220",
    "title": "오솔길",
    "subtitle": "Narrow Path · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 공간",
    "pos": "고유어 명사",
    "summary": "산이나 들에 나무와 풀이 우거진 사이로 한두 사람이 겨우 지나다닐 만큼 좁고 호젓하게 난 길입니다."
  },
  {
    "id": "odan-221",
    "title": "영의 이중 슬릿 실험",
    "subtitle": "Double-Slit Experiment · 파동-입자 이중성",
    "spectrum": "science",
    "domain": "물리학 · 양자역학",
    "pos": "파동-입자 이중성",
    "summary": "빛이나 전자를 두 개의 좁은 틈으로 쏘면 입자 하나씩 발사해도 스크린에 파동의 간섭무늬가 나타나 미시 존재의 이중성을 보여주는 실험입니다."
  },
  {
    "id": "odan-222",
    "title": "실존은 본질에 앞선다",
    "subtitle": "Existence Precedes Essence · 장폴 사르트르",
    "spectrum": "humanities",
    "domain": "실존주의 · 현대철학",
    "pos": "장폴 사르트르",
    "summary": "도구는 쓰임새(본질)가 먼저 설계된 뒤 만들어지지만, 인간은 먼저 세상에 태어난(실존) 뒤 스스로의 선택과 행동으로 자기 본질을 만들어 간다는 명제입니다."
  },
  {
    "id": "odan-223",
    "title": "베블런 효과",
    "subtitle": "Veblen Effect · 과시적 소비",
    "spectrum": "system",
    "domain": "경제학 · 사회심리학",
    "pos": "과시적 소비",
    "summary": "일반적인 재화는 가격이 오르면 수요가 줄어들지만, 지위와 과시를 드러내는 사치재는 가격이 비싸질수록 오히려 수요가 늘어나는 현상입니다."
  },
  {
    "id": "odan-224",
    "title": "물안개",
    "subtitle": "Steam Fog · 명사",
    "spectrum": "word",
    "domain": "자연 · 기상 어휘",
    "pos": "명사",
    "summary": "차가운 공기가 따뜻한 강이나 호수 수면과 만날 때 수면 위로 하얗게 피어오르는 안개입니다."
  },
  {
    "id": "odan-225",
    "title": "광전 효과",
    "subtitle": "Photoelectric Effect · 아인슈타인 광양자설",
    "spectrum": "science",
    "domain": "물리학 · 양자역학",
    "pos": "아인슈타인 광양자설",
    "summary": "금속 표면에 특정 진동수 이상의 빛을 비추면 빛의 세기가 아닌 진동수에 따라 전자가 튀어나오는 현상으로, 빛의 입자성을 입증했습니다."
  },
  {
    "id": "odan-226",
    "title": "아모르 파티 (운명애)",
    "subtitle": "Amor Fati · 프리드리히 니체",
    "spectrum": "humanities",
    "domain": "실존철학 · 삶의 철학",
    "pos": "프리드리히 니체",
    "summary": "자신의 삶에 찾아오는 필연적인 고난과 우연까지도 피하거나 원망하지 않고 있는 그대로 긍정하며 사랑하라는 철학적 태도입니다."
  },
  {
    "id": "odan-227",
    "title": "공공재와 무임승차 문제",
    "subtitle": "Free-Rider Problem · 공공경제학",
    "spectrum": "system",
    "domain": "경제학 · 제도 설계",
    "pos": "공공경제학",
    "summary": "국방이나 가로등처럼 대가를 내지 않은 사람도 배제할 수 없는 공공재에서는 개인들이 비용 부담을 피하고 혜택만 누리려 해 공급이 부족해지기 쉽다는 문제입니다."
  },
  {
    "id": "odan-228",
    "title": "서리",
    "subtitle": "Frost · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 기상",
    "pos": "고유어 명사",
    "summary": "기온이 영하로 내려간 새벽에 대기 중의 수증기가 풀잎이나 지면 위에 바로 얼어붙어 생긴 흰 얼음 결정입니다."
  },
  {
    "id": "odan-229",
    "title": "특수 상대성 이론",
    "subtitle": "Special Relativity · 알베르트 아인슈타인",
    "spectrum": "science",
    "domain": "물리학 · 시공간",
    "pos": "알베르트 아인슈타인",
    "summary": "모든 관성계에서 물리 법칙은 동일하고 진공 속 빛의 속도는 일정하다는 공리로부터 시간 지연과 길이 수축, 질량-에너지 등가성을 도출한 이론입니다."
  },
  {
    "id": "odan-230",
    "title": "에포케 (판단 중지)",
    "subtitle": "Epoché · 에드문트 후설",
    "spectrum": "humanities",
    "domain": "현상학 · 인식론",
    "pos": "에드문트 후설",
    "summary": "대상에 대한 기존의 선입견과 당연시하던 전제를 잠시 괄호 속에 넣어 보류하고, 의식에 직접 나타나는 현상 그 자체를 마주하려는 현상학적 방법입니다."
  },
  {
    "id": "odan-231",
    "title": "코즈 정리",
    "subtitle": "Coase Theorem · 법경제학",
    "spectrum": "system",
    "domain": "경제학 · 제도학",
    "pos": "법경제학",
    "summary": "재산권이 명확히 정의되어 있고 거래 비용이 0에 가깝다면, 정부의 직접 개입 없이도 당사자들 간의 자발적 협상을 통해 외부효과 문제를 효율적으로 해결할 수 있다는 정리입니다."
  },
  {
    "id": "odan-232",
    "title": "고드름",
    "subtitle": "Icicle · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 겨울",
    "pos": "고유어 명사",
    "summary": "처마 끝에서 녹아 흘러내리던 물방울이 찬 공기에 차례로 얼어붙어 아래로 길게 자라난 얼음 기둥입니다."
  },
  {
    "id": "odan-233",
    "title": "일반 상대성 이론",
    "subtitle": "General Relativity · 중력과 기하학",
    "spectrum": "science",
    "domain": "물리학 · 천체물리",
    "pos": "중력과 기하학",
    "summary": "질량과 에너지가 주변의 시공간을 휘게 만들고, 그 휘어진 시공간의 기하학적 경로를 따라 물체와 빛이 움직이는 현상이 곧 중력이라는 이론입니다."
  },
  {
    "id": "odan-234",
    "title": "언어 게임",
    "subtitle": "Language-game · 루트비히 비트겐슈타인",
    "spectrum": "humanities",
    "domain": "언어철학 · 분석철학",
    "pos": "루트비히 비트겐슈타인",
    "summary": "언어의 의미는 단어와 사물의 고정된 1대1 대응에 있는 것이 아니라, 구체적인 삶의 맥락과 규칙 속에서 언어가 어떻게 쓰이는가에 달려 있다는 개념입니다."
  },
  {
    "id": "odan-235",
    "title": "애로우의 불가능성 정리",
    "subtitle": "Arrow's Impossibility Theorem · 사회선택이론",
    "spectrum": "system",
    "domain": "경제학 · 투표이론",
    "pos": "사회선택이론",
    "summary": "세 개 이상의 대안을 두고 개인들의 선호 순위를 모아 사회 전체의 순위를 정할 때, 독재 배제와 파레토 효율 등 최소한의 공정 조건을 모두 만족하는 완벽한 투표 제도는 존재하지 않는다는 정리입니다."
  },
  {
    "id": "odan-236",
    "title": "소나기구름",
    "subtitle": "Cumulonimbus · 명사",
    "spectrum": "word",
    "domain": "기상 · 하늘 어휘",
    "pos": "명사",
    "summary": "강한 상승 기류를 타고 수직으로 거대한 탑처럼 솟아올라 짧은 시간 동안 세찬 비와 번개를 쏟는 구름입니다."
  },
  {
    "id": "odan-237",
    "title": "중력렌즈",
    "subtitle": "Gravitational Lensing · 천체물리학",
    "spectrum": "science",
    "domain": "천문학 · 상대성이론",
    "pos": "천체물리학",
    "summary": "거대한 은하나 은하단의 중력이 돋보기 렌즈처럼 뒤쪽 먼 천체에서 오는 빛을 휘게 만들어 상을 확대하거나 여러 개로 보이게 하는 현상입니다."
  },
  {
    "id": "odan-238",
    "title": "패러다임 전환",
    "subtitle": "Paradigm Shift · 토머스 쿤",
    "spectrum": "humanities",
    "domain": "과학철학 · 지성사",
    "pos": "토머스 쿤",
    "summary": "과학의 발전이 지식의 단순한 누적이 아니라, 정상과학의 위기가 임계점에 달했을 때 세계를 바라보는 인식의 틀 자체가 통째로 바뀌는 혁명적 과정이라는 개념입니다."
  },
  {
    "id": "odan-239",
    "title": "중앙값 투표자 정리",
    "subtitle": "Median Voter Theorem · 공공선택론",
    "spectrum": "system",
    "domain": "정치경제학 · 게임이론",
    "pos": "공공선택론",
    "summary": "다수결 투표 경쟁에서는 유권자들의 선호 분포에서 정확히 한가운데에 위치한 중앙값 투표자의 선택이 최종 결과를 결정짓게 되어 경쟁자들이 중도로 수렴한다는 모델입니다."
  },
  {
    "id": "odan-240",
    "title": "해무",
    "subtitle": "Sea Fog · 海霧",
    "spectrum": "word",
    "domain": "해양 · 기상 어휘",
    "pos": "海霧",
    "summary": "따뜻하고 습한 공기가 차가운 바닷물 위를 지날 때 응결하여 수평선과 시야를 하얗게 지워버리는 바다 안개입니다."
  },
  {
    "id": "odan-241",
    "title": "중력파",
    "subtitle": "Gravitational Wave · 시공간 파동",
    "spectrum": "science",
    "domain": "천체물리학 · 관측천문학",
    "pos": "시공간 파동",
    "summary": "블랙홀이나 중성자별의 병합처럼 거대한 질량이 가속 운동할 때 시공간 자체의 잔물결이 빛의 속도로 우주에 퍼져 나가는 현상입니다."
  },
  {
    "id": "odan-242",
    "title": "반증 가능성",
    "subtitle": "Falsifiability · 칼 포퍼",
    "spectrum": "humanities",
    "domain": "과학철학 · 인식론",
    "pos": "칼 포퍼",
    "summary": "어떤 명제가 과학적 이론이 되기 위해서는 관찰이나 실험을 통해 그것이 틀렸음을 입증할 수 있는 논리적 가능성이 열려 있어야 한다는 기준입니다."
  },
  {
    "id": "odan-243",
    "title": "비크리 경매 (제2가격 밀봉경매)",
    "subtitle": "Vickrey Auction · 메커니즘 디자인",
    "spectrum": "system",
    "domain": "경제학 · 경매이론",
    "pos": "메커니즘 디자인",
    "summary": "가장 높은 금액을 써낸 사람이 낙찰받되 실제 지불하는 금액은 두 번째로 높은 입찰가로 정하는 방식으로, 모든 참가자가 눈치싸움 없이 자신의 진짜 가치를 정직하게 써내는 것이 최적 전략이 됩니다."
  },
  {
    "id": "odan-244",
    "title": "만조",
    "subtitle": "High Tide · 滿潮",
    "spectrum": "word",
    "domain": "해양 · 천문 어휘",
    "pos": "滿潮",
    "summary": "달과 태양의 인력에 의해 밀물이 가장 높이 차올라 바닷물의 수위가 하루 중 정점에 이르는 시각입니다."
  },
  {
    "id": "odan-245",
    "title": "우주 마이크로파 배경",
    "subtitle": "Cosmic Microwave Background · 우주론",
    "spectrum": "science",
    "domain": "천문학 · 초기우주",
    "pos": "우주론",
    "summary": "빅뱅 후 약 38만 년 뒤 우주가 식으며 빛이 물질에서 분리되어 오늘날 우주 모든 방향에서 절대온도 2.7K 복사로 관측되는 태초의 잔광입니다."
  },
  {
    "id": "odan-246",
    "title": "무지의 베일",
    "subtitle": "Veil of Ignorance · 존 롤스",
    "spectrum": "humanities",
    "domain": "정치철학 · 정의론",
    "pos": "존 롤스",
    "summary": "내가 사회에서 어떤 재능과 계층, 건강을 타고날지 전혀 모르는 가상의 베일 뒤에서 규칙을 정할 때 비로소 가장 약자를 배려하는 공정한 정의에 합의하게 된다는 사고실험입니다."
  },
  {
    "id": "odan-247",
    "title": "정보의 폭포 (군집 행동)",
    "subtitle": "Information Cascade · 행동경제학",
    "spectrum": "system",
    "domain": "사회심리학 · 네트워크",
    "pos": "행동경제학",
    "summary": "사람들이 자신의 사적 정보보다 앞서 행동한 타인들의 선택을 보고 그대로 따라 하기 시작하면서, 초기의 우연한 선택이 눈덩이처럼 커져 집단 전체의 쏠림을 만드는 현상입니다."
  },
  {
    "id": "odan-248",
    "title": "간조",
    "subtitle": "Low Tide · 干潮",
    "spectrum": "word",
    "domain": "해양 · 천문 어휘",
    "pos": "干潮",
    "summary": "썰물로 바닷물이 가장 멀리 빠져나가 그동안 물속에 잠겨 있던 갯벌과 바위 길이 드러나는 시각입니다."
  },
  {
    "id": "odan-249",
    "title": "허블-르메트르 법칙",
    "subtitle": "Hubble-Lemaître Law · 우주 팽창",
    "spectrum": "science",
    "domain": "천문학 · 우주론",
    "pos": "우주 팽창",
    "summary": "우리은하로부터 멀리 떨어진 은하일수록 거리에 비례하여 더 빠른 속도로 멀어지고 있다는 관측 법칙으로 우주 팽창의 증거입니다."
  },
  {
    "id": "odan-250",
    "title": "타자의 얼굴",
    "subtitle": "Face of the Other · 에마뉘엘 레비나스",
    "spectrum": "humanities",
    "domain": "윤리학 · 현대철학",
    "pos": "에마뉘엘 레비나스",
    "summary": "내 기준과 범주로 결코 환원하거나 소유할 수 없는 타인의 마주침을 뜻하며, 나에게 무한한 윤리적 책임을 요청하는 철학적 계기입니다."
  },
  {
    "id": "odan-251",
    "title": "확인 편향",
    "subtitle": "Confirmation Bias · 인지심리학",
    "spectrum": "system",
    "domain": "인지과학 · 의사결정",
    "pos": "인지심리학",
    "summary": "자신이 원래 가지고 있던 신념이나 가설과 일치하는 정보만 적극적으로 찾고 받아들이며, 반대되는 증거는 무시하거나 과소평가하는 인지 경향입니다."
  },
  {
    "id": "odan-252",
    "title": "수평선",
    "subtitle": "Horizon · 水平線",
    "spectrum": "word",
    "domain": "공간 · 시각 어휘",
    "pos": "水平線",
    "summary": "망망대해와 하늘이 맞닿아 이루는 것처럼 보이는 먼 경계선입니다."
  },
  {
    "id": "odan-253",
    "title": "찬드라세카르 한계",
    "subtitle": "Chandrasekhar Limit · 항성진화",
    "spectrum": "science",
    "domain": "천체물리학 · 백색왜성",
    "pos": "항성진화",
    "summary": "전자 축퇴압으로 중력 붕괴를 버틸 수 있는 백색왜성의 최대 질량 한계(태양 질량의 약 1.44배)를 뜻합니다."
  },
  {
    "id": "odan-254",
    "title": "차연 (디페랑스)",
    "subtitle": "Différance · 자크 데리다",
    "spectrum": "humanities",
    "domain": "현대철학 · 해체론",
    "pos": "자크 데리다",
    "summary": "기호의 의미는 다른 기호들과의 '차이(Difference)' 속에서만 생겨나며 최종적인 의미 확정이 끊임없이 '유예(Deferral)'된다는 해체주의 핵심 개념입니다."
  },
  {
    "id": "odan-255",
    "title": "기준점 효과 (앵커링)",
    "subtitle": "Anchoring Effect · 카너먼과 트버스키",
    "spectrum": "system",
    "domain": "행동경제학 · 인지편향",
    "pos": "카너먼과 트버스키",
    "summary": "어떤 값을 추정할 때 처음 접한 숫자(닻, Anchor)가 머릿속에 기준점으로 박혀서, 그 숫자가 문제와 무관하더라도 최종 판단이 그 근처로 끌려가는 현상입니다."
  },
  {
    "id": "odan-256",
    "title": "지평선",
    "subtitle": "Horizon · 地平線",
    "spectrum": "word",
    "domain": "공간 · 시각 어휘",
    "pos": "地平線",
    "summary": "끝없이 펼쳐진 평야나 사막이 하늘과 맞닿아 그어지는 가상의 직선입니다."
  },
  {
    "id": "odan-257",
    "title": "펄사 (맥동 전파원)",
    "subtitle": "Pulsar · 고속 회전 중성자별",
    "spectrum": "science",
    "domain": "천문학 · 전파천문학",
    "pos": "고속 회전 중성자별",
    "summary": "강력한 자기장을 가진 채 초고속으로 자전하며 양 자극에서 뿜어내는 전자기파 빔이 등대 불빛처럼 정확한 주기로 관측되는 중성자별입니다."
  },
  {
    "id": "odan-258",
    "title": "아비투스",
    "subtitle": "Habitus · 피에르 부르디외",
    "spectrum": "humanities",
    "domain": "사회학 · 문화이론",
    "pos": "피에르 부르디외",
    "summary": "개인이 속한 사회적 환경과 역사 속에서 오랜 시간 몸에 배어 자연스러운 취향과 판단, 행동 양식으로 작동하는 내면화된 성향 체계입니다."
  },
  {
    "id": "odan-259",
    "title": "손실 회피",
    "subtitle": "Loss Aversion · 전망 이론",
    "spectrum": "system",
    "domain": "행동경제학 · 심리학",
    "pos": "전망 이론",
    "summary": "동일한 크기의 이득에서 느끼는 기쁨보다 동일한 크기의 손실에서 느끼는 고통이 약 2배 이상 더 크게 작동하여 위험 판단을 비대칭적으로 만드는 심리 특성입니다."
  },
  {
    "id": "odan-260",
    "title": "분수령",
    "subtitle": "Watershed · 分水嶺",
    "spectrum": "word",
    "domain": "지형 · 전환 어휘",
    "pos": "分水嶺",
    "summary": "빗물이 어느 쪽 비탈로 흐를지 갈라지는 산등성이의 경계선으로, 사건의 흐름이 완전히 갈리는 전환점을 뜻합니다."
  },
  {
    "id": "odan-261",
    "title": "케플러의 행성운동 법칙",
    "subtitle": "Kepler's Laws · 천체역학",
    "spectrum": "science",
    "domain": "천문학 · 고전역학",
    "pos": "천체역학",
    "summary": "행성이 태양을 한 초점으로 하는 타원 궤도를 돌며, 같은 시간 동안 휩쓰는 면적이 같고 공전 주기의 제곱이 긴반지름의 세제곱에 비례한다는 법칙입니다."
  },
  {
    "id": "odan-262",
    "title": "상상의 공동체",
    "subtitle": "Imagined Communities · 베네딕트 앤더슨",
    "spectrum": "humanities",
    "domain": "역사학 · 사회철학",
    "pos": "베네딕트 앤더슨",
    "summary": "국가의 구성원들은 평생 대다수의 동료 시민을 직접 만나지 못하지만, 인쇄 매체와 공유된 시간을 통해 마음속에 하나의 공동체 이미지를 그려냄으로써 성립한다는 개념입니다."
  },
  {
    "id": "odan-263",
    "title": "프레이밍 효과",
    "subtitle": "Framing Effect · 의사결정 심리학",
    "spectrum": "system",
    "domain": "행동경제학 · 커뮤니케이션",
    "pos": "의사결정 심리학",
    "summary": "논리적으로 완전히 똑같은 사실이라도 '생존율 90%'로 제시하느냐 '사망률 10%'로 제시하느냐처럼 문제의 틀(Frame)을 어떻게 짜는가에 따라 선택이 정반대로 바뀌는 현상입니다."
  },
  {
    "id": "odan-264",
    "title": "삼각주",
    "subtitle": "Delta · 三角洲",
    "spectrum": "word",
    "domain": "지형 · 퇴적 어휘",
    "pos": "三角洲",
    "summary": "강물이 바다나 호수로 흘러드는 어귀에서 유속이 느려지며 상류에서 실어 온 모래와 흙이 쌓여 만들어진 평야입니다."
  },
  {
    "id": "odan-265",
    "title": "코리올리 효과 (전향력)",
    "subtitle": "Coriolis Effect · 회전 좌표계",
    "spectrum": "science",
    "domain": "지구과학 · 유체역학",
    "pos": "회전 좌표계",
    "summary": "자전하는 지구 위에서 움직이는 공기나 해류가 북반구에서는 진행 방향의 오른쪽으로, 남반구에서는 왼쪽으로 휘어지는 관성력입니다."
  },
  {
    "id": "odan-266",
    "title": "숭고 (서블라임)",
    "subtitle": "The Sublime · 칸트 · 버크 미학",
    "spectrum": "humanities",
    "domain": "미학 · 예술철학",
    "pos": "칸트",
    "summary": "조화롭고 아담한 아름다움(미)과 달리, 폭풍우 치는 바다나 광활한 우주처럼 인간의 감각 한계를 압도하는 거대함 앞에서 경외감과 고양감을 동시에 느끼는 미적 경험입니다."
  },
  {
    "id": "odan-267",
    "title": "더닝-크루거 효과",
    "subtitle": "Dunning-Kruger Effect · 메타인지",
    "spectrum": "system",
    "domain": "인지심리학 · 학습이론",
    "pos": "메타인지",
    "summary": "어떤 분야를 아주 조금 알 때는 자신의 실력을 과대평가해 자신감이 정점에 달했다가, 지식이 깊어질수록 모르는 영역의 넓이를 깨닫고 겸손해지는 메타인지 곡선입니다."
  },
  {
    "id": "odan-268",
    "title": "화석목",
    "subtitle": "Petrified Wood · 化石木",
    "spectrum": "word",
    "domain": "지질 · 시간 어휘",
    "pos": "化石木",
    "summary": "땅속에 묻힌 옛 나무의 유기질 세포 속으로 광물질이 스며들어 나뭇결 모양 그대로 단단한 돌로 변한 화석입니다."
  },
  {
    "id": "odan-269",
    "title": "밀란코비치 주기",
    "subtitle": "Milankovitch Cycles · 고기후학",
    "spectrum": "science",
    "domain": "지구과학 · 천문학",
    "pos": "고기후학",
    "summary": "지구 공전 궤도 이심률, 자전축 기울기, 세차 운동의 주기적 변화가 태양 복사량 분포를 바꾸어 빙하기와 간빙기를 일으킨다는 이론입니다."
  },
  {
    "id": "odan-270",
    "title": "카타르시스",
    "subtitle": "Catharsis · 아리스토텔레스 시학",
    "spectrum": "humanities",
    "domain": "문학이론 · 연극학",
    "pos": "아리스토텔레스 시학",
    "summary": "비극 작품을 관람하며 주인공의 운명에 연민과 두려움을 깊이 겪어냄으로써 마음속에 쌓여 있던 감정의 앙금이 맑게 정화되는 상태입니다."
  },
  {
    "id": "odan-271",
    "title": "피터의 원리",
    "subtitle": "Peter Principle · 조직론",
    "spectrum": "system",
    "domain": "경영학 · 인사 시스템",
    "pos": "조직론",
    "summary": "위계 조직에서 직원은 현재 직무의 성과로 승진하기 때문에, 결국 자신이 감당할 수 없는 무능력을 드러내는 자리까지 승진한 뒤 그 자리에 멈춰 서게 된다는 조직 역설입니다."
  },
  {
    "id": "odan-272",
    "title": "종유석",
    "subtitle": "Stalactite · 鍾乳石",
    "spectrum": "word",
    "domain": "지질 · 동굴 어휘",
    "pos": "鍾乳石",
    "summary": "석회동굴 천장에서 탄산칼슘이 녹아 있는 물방울이 수만 년 동안 한 방울씩 떨어지며 고드름처럼 자라난 돌기둥입니다."
  },
  {
    "id": "odan-273",
    "title": "판 구조론",
    "subtitle": "Plate Tectonics · 지구물리학",
    "spectrum": "science",
    "domain": "지질학 · 지구과학",
    "pos": "지구물리학",
    "summary": "지구의 암석권이 여러 개의 판으로 나뉘어 맨틀 대류 위를 움직이며 대륙 이동과 산맥 형성, 지진과 화산 활동을 일으킨다는 이론입니다."
  },
  {
    "id": "odan-274",
    "title": "스푸마토",
    "subtitle": "Sfumato · 레오나르도 다빈치",
    "spectrum": "humanities",
    "domain": "회화 · 르네상스 미학",
    "pos": "레오나르도 다빈치",
    "summary": "이탈리아어로 '연기처럼 사라지다'라는 뜻으로, 색과 색 사이의 윤곽선을 날카롭게 긋지 않고 얇은 물감 층을 겹쳐 안개처럼 부드럽게 스며들게 하는 회화 기법입니다."
  },
  {
    "id": "odan-275",
    "title": "링겔만 효과",
    "subtitle": "Ringelmann Effect · 집단역학",
    "spectrum": "system",
    "domain": "사회심리학 · 조직행동",
    "pos": "집단역학",
    "summary": "줄다리기처럼 집단에 참여하는 인원수가 늘어날수록 개인의 책임감이 분산되어 1인당 쏟아붓는 실제 평균 노력은 오히려 줄어드는 현상입니다."
  },
  {
    "id": "odan-276",
    "title": "석순",
    "subtitle": "Stalagmite · 石筍",
    "spectrum": "word",
    "domain": "지질 · 동굴 어휘",
    "pos": "石筍",
    "summary": "동굴 천장에서 떨어진 물방울의 석회질이 바닥에 한 겹씩 쌓여 죽순처럼 위로 솟아오른 돌기둥입니다."
  },
  {
    "id": "odan-277",
    "title": "베르누이 법칙",
    "subtitle": "Bernoulli's Principle · 유체역학",
    "spectrum": "science",
    "domain": "물리학 · 유체역학",
    "pos": "유체역학",
    "summary": "점성과 압축성이 없는 이상 유체가 흐를 때 유속이 빨라지는 곳에서는 압력이 낮아지고 유속이 느려지는 곳에서는 압력이 높아진다는 에너지 보존 법칙입니다."
  },
  {
    "id": "odan-278",
    "title": "콘트라포스토",
    "subtitle": "Contrapposto · 고대 그리스 조각",
    "spectrum": "humanities",
    "domain": "조각 · 미술사",
    "pos": "고대 그리스 조각",
    "summary": "한쪽 다리에 체중을 실어 골반과 어깨의 축을 서로 반대 방향의 완만한 S자 곡선으로 기울임으로써 차가운 돌에 살아 움직이는 인체의 균형과 생동감을 불어넣은 자세입니다."
  },
  {
    "id": "odan-279",
    "title": "호손 효과",
    "subtitle": "Hawthorne Effect · 산업심리학",
    "spectrum": "system",
    "domain": "심리학 · 실험설계",
    "pos": "산업심리학",
    "summary": "작업장의 조명 밝기 같은 물리적 조건 때문이 아니라, 자신이 관찰받고 있고 관심을 받고 있다는 사실 자체가 사람들의 행동과 생산성을 바꾸어 놓는 현상입니다."
  },
  {
    "id": "odan-280",
    "title": "해시계",
    "subtitle": "Sundial · 日晷",
    "spectrum": "word",
    "domain": "사물 · 천문 도구",
    "pos": "日晷",
    "summary": "태양의 움직임에 따라 영침이 드리우는 그림자의 방향과 길이를 읽어 시각을 측정하는 고대 천문 의기입니다."
  },
  {
    "id": "odan-281",
    "title": "표면장력",
    "subtitle": "Surface Tension · 계면물리학",
    "spectrum": "science",
    "domain": "물리학 · 화학",
    "pos": "계면물리학",
    "summary": "액체 표면의 분자들이 내부로 끌리는 인력 때문에 표면적을 가능한 한 최소로 줄이려는 힘으로, 물방울이 둥글게 맺히고 소금쟁이가 물 위에 뜨는 원리입니다."
  },
  {
    "id": "odan-282",
    "title": "트롱프뢰유 (눈속임 그림)",
    "subtitle": "Trompe-l'œil · 시각 예술",
    "spectrum": "humanities",
    "domain": "회화 · 착시 미학",
    "pos": "시각 예술",
    "summary": "정교한 원근법과 그림자 묘사를 통해 2차원 평면에 그린 사물이 마치 실제 공간으로 튀어나와 있는 것처럼 관람자의 눈을 감쪽같이 속이는 회화 기법입니다."
  },
  {
    "id": "odan-283",
    "title": "피그말리온 효과",
    "subtitle": "Pygmalion Effect · 로젠탈 효과",
    "spectrum": "system",
    "domain": "교육심리학 · 시스템 피드백",
    "pos": "로젠탈 효과",
    "summary": "타인의 긍정적인 기대와 믿음이 상대방에게 미묘한 피드백으로 전달되어 실제로 그 사람의 수행 능력과 결과를 향상시키는 자기충족적 예언입니다."
  },
  {
    "id": "odan-284",
    "title": "물시계",
    "subtitle": "Water Clock · 자격루",
    "spectrum": "word",
    "domain": "사물 · 시간 도구",
    "pos": "자격루",
    "summary": "그릇에 일정한 속도로 흘러들거나 빠져나가는 물의 높이를 재어 밤이나 흐린 날에도 시간을 알렸던 장치입니다."
  },
  {
    "id": "odan-285",
    "title": "삼투 현상",
    "subtitle": "Osmosis · 물리화학·생물학",
    "spectrum": "science",
    "domain": "생물학 · 화학",
    "pos": "물리화학",
    "summary": "용매는 통과시키고 용질은 통과시키지 않는 반투과성 막을 사이에 두고 농도가 낮은 쪽의 물이 농도가 높은 쪽으로 이동해 평형을 이루는 현상입니다."
  },
  {
    "id": "odan-286",
    "title": "네거티브 스페이스 (여백의 형상)",
    "subtitle": "Negative Space · 조형 예술",
    "spectrum": "humanities",
    "domain": "디자인 · 시각예술",
    "pos": "조형 예술",
    "summary": "주제가 되는 대상 자체를 그리는 대신 그 대상을 둘러싼 주변의 빈 공간을 구성함으로써 대상의 윤곽과 긴장감을 더욱 또렷하게 드러내는 조형 원리입니다."
  },
  {
    "id": "odan-287",
    "title": "깨진 유리창 이론",
    "subtitle": "Broken Windows Theory · 도시사회학",
    "spectrum": "system",
    "domain": "사회학 · 환경설계",
    "pos": "도시사회학",
    "summary": "건물의 깨진 유리창 하나를 방치하면 그 공간 전체가 관리되지 않는다는 신호로 읽혀 무질서가 빠르게 확산된다는 이론으로, 작은 세부 관리의 중요성을 시사합니다."
  },
  {
    "id": "odan-288",
    "title": "풍경",
    "subtitle": "Wind Bell · 風磬",
    "spectrum": "word",
    "domain": "사물 · 청각 어휘",
    "pos": "風磬",
    "summary": "처마 끝에 매달아 두어 바람이 불 때마다 금속 물고기 조각이 종을 치며 맑은 소리를 내는 작은 종입니다."
  },
  {
    "id": "odan-289",
    "title": "르샤틀리에의 원리",
    "subtitle": "Le Chatelier's Principle · 화학 평형",
    "spectrum": "science",
    "domain": "화학 · 물리화학",
    "pos": "화학 평형",
    "summary": "평형 상태에 있는 화학계에 온도, 압력, 농도 같은 외부 조건 변화를 주면 그 변화를 줄이는 방향으로 평형이 스스로 이동한다는 원리입니다."
  },
  {
    "id": "odan-290",
    "title": "몽타주",
    "subtitle": "Montage · 세르게이 예이젠시테인",
    "spectrum": "humanities",
    "domain": "영화이론 · 편집 미학",
    "pos": "세르게이 예이젠시테인",
    "summary": "서로 다른 두 개의 쇼트(장면)를 이어 붙여 충돌시킴으로써 개별 장면에는 없던 제3의 새로운 의미와 정서적 충격을 관객의 머릿속에 창조해 내는 편집 기법입니다."
  },
  {
    "id": "odan-291",
    "title": "네트워크 삼각 폐쇄",
    "subtitle": "Triadic Closure · 사회 연결망 분석",
    "spectrum": "system",
    "domain": "네트워크 과학 · 사회학",
    "pos": "사회 연결망 분석",
    "summary": "소셜 네트워크에서 A가 B와 친하고 A가 C와도 친하면, 시간이 지남에 따라 B와 C 사이에도 새로운 연결고리가 형성될 확률이 매우 높아진다는 구조적 원리입니다."
  },
  {
    "id": "odan-292",
    "title": "창살",
    "subtitle": "Window Lattice · 窓살",
    "spectrum": "word",
    "domain": "건축 · 빛 어휘",
    "pos": "窓살",
    "summary": "창문이나 방문에 가로세로로 정교하게 짜 넣은 나무 살로, 방 안으로 들어오는 햇빛을 기하학적 무늬로 걸러 줍니다."
  },
  {
    "id": "odan-293",
    "title": "아보가드로 수",
    "subtitle": "Avogadro Constant · 화학 계량",
    "spectrum": "science",
    "domain": "화학 · 물리학",
    "pos": "화학 계량",
    "summary": "물질 1몰(mol) 속에 들어 있는 구성 입자(원자, 분자, 이온)의 개수로, 미시 세계의 원자 질량과 거시 세계의 그램(g) 단위를 이어 주는 상수입니다."
  },
  {
    "id": "odan-294",
    "title": "라이트모티프 (유도동기)",
    "subtitle": "Leitmotif · 음악학 · 서사학",
    "spectrum": "humanities",
    "domain": "음악 · 오페라·영화",
    "pos": "음악학",
    "summary": "특정 인물이나 사물, 감정, 운명을 상징하는 짧은 음악적 선율을 작품 곳곳에 반복·변주하여 등장시켜 말없이도 서사의 맥락을 일깨우는 기법입니다."
  },
  {
    "id": "odan-295",
    "title": "약한 연결의 힘",
    "subtitle": "Strength of Weak Ties · 마크 그라노베터",
    "spectrum": "system",
    "domain": "사회학 · 네트워크 이론",
    "pos": "마크 그라노베터",
    "summary": "나와 매일 만나는 절친한 친구들(강한 연결)은 나와 겹치는 정보를 가지고 있지만, 가끔 연락하는 다른 집단의 지인(약한 연결)이 완전히 새로운 기회와 정보를 건네주는 다리가 된다는 이론입니다."
  },
  {
    "id": "odan-296",
    "title": "처마",
    "subtitle": "Eaves · 고유어 명사",
    "spectrum": "word",
    "domain": "건축 · 공간 어휘",
    "pos": "고유어 명사",
    "summary": "기둥 바깥쪽으로 내민 지붕의 끝부분으로, 여름의 뜨거운 직사광선은 가리고 겨울의 낮은 햇살은 방 안으로 들입니다."
  },
  {
    "id": "odan-297",
    "title": "카이랄성 (거울상 이성질체)",
    "subtitle": "Chirality · 입체화학",
    "spectrum": "science",
    "domain": "화학 · 분자생물학",
    "pos": "입체화학",
    "summary": "왼손과 오른손처럼 구성 원자와 결합 순서는 같지만 거울에 비춘 형태가 서로 포개지지 않는 비대칭 입체 구조입니다."
  },
  {
    "id": "odan-298",
    "title": "푸가",
    "subtitle": "Fugue · 요한 제바스티안 바흐",
    "spectrum": "humanities",
    "domain": "음악학 · 대위법",
    "pos": "요한 제바스티안 바흐",
    "summary": "하나의 핵심 주제 선율이 제시된 뒤 다른 성부들이 시간차를 두고 그 주제를 모방하며 쫓아가듯 겹쳐져 건축물처럼 치밀한 다성음악을 이루는 악곡 형식입니다."
  },
  {
    "id": "odan-299",
    "title": "작은 세상 네트워크",
    "subtitle": "Small-World Network · 와츠와 스트로가츠",
    "spectrum": "system",
    "domain": "네트워크 과학 · 복잡계",
    "pos": "와츠와 스트로가츠",
    "summary": "대부분의 노드는 가까운 이웃과 촘촘히 연결되어 있으면서도, 몇 개의 무작위 장거리 지름길 연결만 추가되면 전체 네트워크의 평균 경로 길이가 극적으로 짧아지는 구조입니다."
  },
  {
    "id": "odan-300",
    "title": "징검다리",
    "subtitle": "Stepping Stones · 명사",
    "spectrum": "word",
    "domain": "공간 · 연결 어휘",
    "pos": "명사",
    "summary": "개울이나 물이 고인 곳에 일정한 간격으로 돌을 놓아 물에 젖지 않고 건너갈 수 있게 만든 다리입니다."
  },
  {
    "id": "odan-301",
    "title": "광합성과 캘빈 회로",
    "subtitle": "Photosynthesis & Calvin Cycle · 식물생리학",
    "spectrum": "science",
    "domain": "생물학 · 생화학",
    "pos": "식물생리학",
    "summary": "식물 엽록체가 태양의 빛에너지를 화학 에너지로 바꾼 뒤 대기 중의 이산화탄소를 고정하여 포도당이라는 생명 에너지원을 합성하는 과정입니다."
  },
  {
    "id": "odan-302",
    "title": "의식의 흐름",
    "subtitle": "Stream of Consciousness · 현대 문학",
    "spectrum": "humanities",
    "domain": "문학이론 · 소설 기법",
    "pos": "현대 문학",
    "summary": "외부 사건의 시간 순서 대신 인물 내면에서 꼬리를 물고 스쳐 지나가는 기억, 감각, 연상들을 논리적 정리 없이 있는 그대로 따라가며 서술하는 기법입니다."
  },
  {
    "id": "odan-303",
    "title": "척도 없는 네트워크",
    "subtitle": "Scale-Free Network · 바라바시",
    "spectrum": "system",
    "domain": "네트워크 과학 · 통계물리",
    "pos": "바라바시",
    "summary": "인터넷이나 항공망처럼 대다수 노드는 연결이 몇 개뿐이지만 극소수의 거대 허브(Hub) 노드가 엄청난 수의 연결을 독점하여 멱법칙 분포를 따르는 네트워크입니다."
  },
  {
    "id": "odan-304",
    "title": "나루터",
    "subtitle": "Ferry Crossing · 고유어 명사",
    "spectrum": "word",
    "domain": "공간 · 여정 어휘",
    "pos": "고유어 명사",
    "summary": "강이나 내를 건너다니는 나룻배가 닿고 떠나는 물가의 정박지입니다."
  },
  {
    "id": "odan-305",
    "title": "크렙스 회로 (시트르산 회로)",
    "subtitle": "Citric Acid Cycle · 세포호흡",
    "spectrum": "science",
    "domain": "생화학 · 세포생물학",
    "pos": "세포호흡",
    "summary": "미토콘드리아 안에서 영양소 분해 산물을 산화시키며 생명 활동에 필요한 에너지 화폐(ATP)의 전구 물질을 연속적으로 만들어내는 순환 대사 경로입니다."
  },
  {
    "id": "odan-306",
    "title": "상호텍스트성",
    "subtitle": "Intertextuality · 줄리아 크리스테바",
    "spectrum": "humanities",
    "domain": "문학이론 · 기호학",
    "pos": "줄리아 크리스테바",
    "summary": "어떤 텍스트도 완전히 고립된 창작물이 아니라, 이전에 쓰인 무수한 텍스트들의 인용과 변주, 대화가 그물망처럼 교차하며 새로운 의미를 낳는다는 개념입니다."
  },
  {
    "id": "odan-307",
    "title": "멱법칙 분포 (파레토 법칙)",
    "subtitle": "Power Law Distribution · 복잡계 통계",
    "spectrum": "system",
    "domain": "통계학 · 복잡계",
    "pos": "복잡계 통계",
    "summary": "키나 몸무게 같은 정규분포와 달리, 지진의 규모나 도시 인구, 단어 사용 빈도처럼 극단적인 소수의 사건이 전체 결과의 대부분을 차지하는 긴 꼬리 분포입니다."
  },
  {
    "id": "odan-308",
    "title": "이정",
    "subtitle": "Mileage · 里程",
    "spectrum": "word",
    "domain": "여정 · 거리 어휘",
    "pos": "里程",
    "summary": "출발지에서 목적지까지 이어지는 길의 거리와 노정을 이르는 말입니다."
  },
  {
    "id": "odan-309",
    "title": "효소와 유도 적합 모델",
    "subtitle": "Induced Fit Model · 생화학",
    "spectrum": "science",
    "domain": "생화학 · 분자생물학",
    "pos": "생화학",
    "summary": "효소와 기질이 단순히 딱딱한 자물쇠와 열쇠처럼 맞물리는 것을 넘어, 결합하는 순간 효소의 입체 구조가 기질에 맞게 유연하게 변하며 반응을 촉진한다는 모델입니다."
  },
  {
    "id": "odan-310",
    "title": "서사적 거리",
    "subtitle": "Narrative Distance · 서사학",
    "spectrum": "humanities",
    "domain": "문학 · 미학",
    "pos": "서사학",
    "summary": "작품 속 세계와 독자(관객) 사이에 유지되는 심리적·형식적 간격으로, 너무 가까우면 성찰을 잃고 너무 멀면 공감을 잃기에 예술적 긴장을 조율하는 척도가 됩니다."
  },
  {
    "id": "odan-311",
    "title": "임계 상태 (자기조직화 임계성)",
    "subtitle": "Self-Organized Criticality · 퍼 박",
    "spectrum": "system",
    "domain": "복잡계 물리 · 시스템",
    "pos": "퍼 박",
    "summary": "모래더미 위에 모래알을 하나씩 떨어뜨리면 외부의 정교한 조율 없이도 스스로 가장 아슬아슬한 임계 경사 상태에 도달하여 작은 모래알 하나가 크고 작은 사태를 일으키는 성질입니다."
  },
  {
    "id": "odan-312",
    "title": "윤곽",
    "subtitle": "Outline / Contour · 輪廓",
    "spectrum": "word",
    "domain": "조형 · 시각 어휘",
    "pos": "輪廓",
    "summary": "사물의 둘레를 이루는 바깥 테두리 선이나 어떤 일의 전체적인 개략과 틀을 뜻합니다."
  },
  {
    "id": "odan-313",
    "title": "항상성 (호메오스타시스)",
    "subtitle": "Homeostasis · 생리학",
    "spectrum": "science",
    "domain": "생물학 · 시스템생물학",
    "pos": "생리학",
    "summary": "외부 환경이 급격히 변하더라도 생물체가 음성 피드백 조절을 통해 체온, 혈당, 삼투압 등 내부 환경을 일정한 범위로 유지하는 성질입니다."
  },
  {
    "id": "odan-314",
    "title": "브레히트의 소격 효과",
    "subtitle": "Verfremdungseffekt · 베르톨트 브레히트",
    "spectrum": "humanities",
    "domain": "연극학 · 미학",
    "pos": "베르톨트 브레히트",
    "summary": "관객이 극 중 환상에 무비판적으로 빠져드는 것을 의도적으로 차단하여, 무대 위 사건을 낯설고 깨어 있는 이성으로 관찰·성찰하게 만드는 서사극 기법입니다."
  },
  {
    "id": "odan-315",
    "title": "히스테리시스 (이력 현상)",
    "subtitle": "Hysteresis · 물리·경제 시스템",
    "spectrum": "system",
    "domain": "시스템 이론 · 물리학",
    "pos": "물리",
    "summary": "자석이나 생태계, 실업률처럼 어떤 계의 현재 상태가 지금 가해지는 힘뿐만 아니라 과거에 어떤 경로를 거쳐 왔는가(역사)에 따라 달라져 원인을 되돌려도 바로 원래 상태로 복귀하지 않는 현상입니다."
  },
  {
    "id": "odan-316",
    "title": "명암",
    "subtitle": "Light and Shade · 明暗",
    "spectrum": "word",
    "domain": "시각 · 조형 어휘",
    "pos": "明暗",
    "summary": "빛이 닿는 밝은 부분과 가려진 어두운 부분의 차이로, 평면 위에 대상의 부피감과 깊이를 만들어냅니다."
  },
  {
    "id": "odan-317",
    "title": "크리스퍼 유전자 가위",
    "subtitle": "CRISPR-Cas9 · 분자생물학",
    "spectrum": "science",
    "domain": "유전학 · 생명공학",
    "pos": "분자생물학",
    "summary": "세균이 바이러스 침입을 기억해 방어하던 면역 체계에서 발견된 원리로, 원하는 DNA 염기서열 부위를 정확히 찾아 교정하는 유전체 편집 기술입니다."
  },
  {
    "id": "odan-318",
    "title": "파레이돌리아",
    "subtitle": "Pareidolia · 지각 심리학",
    "spectrum": "humanities",
    "domain": "심리학 · 시각 인지",
    "pos": "지각 심리학",
    "summary": "달의 분화구나 구름, 나뭇결, 자동차 앞모습 같은 무작위한 형태 속에서 사람의 얼굴이나 친숙한 사물의 형상을 즉각 읽어내는 지각 현상입니다."
  },
  {
    "id": "odan-319",
    "title": "음성 피드백과 양성 피드백",
    "subtitle": "Negative & Positive Feedback · 사이버네틱스",
    "spectrum": "system",
    "domain": "제어이론 · 시스템 사고",
    "pos": "사이버네틱스",
    "summary": "음성 피드백은 변화를 상쇄해 온도조절기처럼 안정과 균형을 유지시키고, 양성 피드백은 변화를 계속 증폭시켜 마이크 하울링이나 눈사태처럼 급격한 전환을 일으킵니다."
  },
  {
    "id": "odan-320",
    "title": "여운",
    "subtitle": "Lingering Resonance · 餘韻",
    "spectrum": "word",
    "domain": "청각 · 감성 어휘",
    "pos": "餘韻",
    "summary": "종소리가 그친 뒤에도 허공에 길게 남아 떨리는 울림이나, 작품이 끝난 뒤에도 마음에 남는 감흥을 뜻합니다."
  },
  {
    "id": "odan-321",
    "title": "후성유전학",
    "subtitle": "Epigenetics · 유전학",
    "spectrum": "science",
    "domain": "생물학 · 분자유전학",
    "pos": "유전학",
    "summary": "DNA 염기서열 자체는 바뀌지 않더라도 DNA 메틸화나 히스톤 단백질 변형을 통해 유전자의 켜짐과 꺼짐(발현)이 조절되는 생명 현상입니다."
  },
  {
    "id": "odan-322",
    "title": "프루스트 현상",
    "subtitle": "Proust Phenomenon · 감각과 기억",
    "spectrum": "humanities",
    "domain": "심리학 · 문학",
    "pos": "감각과 기억",
    "summary": "마르셀 프루스트의 소설에서 홍차에 적신 마들렌 향기가 유년 시절의 기억 전체를 단숨에 깨웠듯, 후각이나 미각 자극이 잊힌 과거의 기억을 생생하게 불러오는 현상입니다."
  },
  {
    "id": "odan-323",
    "title": "레버리지 포인트 (지렛점)",
    "subtitle": "Leverage Points · 도넬라 메도우스",
    "spectrum": "system",
    "domain": "시스템 사고 · 정책 설계",
    "pos": "도넬라 메도우스",
    "summary": "복잡한 시스템 안에서 작은 변화만 가해도 시스템 전체의 행동 양식과 흐름을 크게 바꾸어 놓을 수 있는 핵심 개입 지점을 뜻합니다."
  },
  {
    "id": "odan-324",
    "title": "서막",
    "subtitle": "Prelude / Overture · 序幕",
    "spectrum": "word",
    "domain": "연극 · 시간 어휘",
    "pos": "序幕",
    "summary": "극에서 본막이 오르기 전에 전체 이야기의 분위기를 예고하며 여는 첫 번째 장입니다."
  },
  {
    "id": "odan-325",
    "title": "공진화",
    "subtitle": "Coevolution · 진화생물학",
    "spectrum": "science",
    "domain": "생태학 · 진화론",
    "pos": "진화생물학",
    "summary": "꽃의 꿀샘 깊이와 나비의 대롱 길이처럼 밀접하게 상호작용하는 두 생물 종이 서로에게 선택 압력으로 작용하며 함께 진화하는 과정입니다."
  },
  {
    "id": "odan-326",
    "title": "던바의 수",
    "subtitle": "Dunbar's Number · 진화인류학",
    "spectrum": "humanities",
    "domain": "인류학 · 사회학",
    "pos": "진화인류학",
    "summary": "영장류의 대뇌 신피질 크기에 비례하여 한 개인이 서로 신뢰하고 안정적인 사회적 관계를 유지할 수 있는 최대 집단 규모가 약 150명 내외라는 가설입니다."
  },
  {
    "id": "odan-327",
    "title": "골디락스 가격 책정 (미끼 효과)",
    "subtitle": "Decoy Effect · 행동경제학",
    "spectrum": "system",
    "domain": "마케팅 · 의사결정",
    "pos": "행동경제학",
    "summary": "두 선택지 사이에 열등하거나 비대칭적인 세 번째 선택지(또는 상·중·하 3단계 구성)를 배치함으로써 소비자의 선호를 특정 목표로 자연스럽게 유도하는 설계입니다."
  },
  {
    "id": "odan-328",
    "title": "대단원",
    "subtitle": "Grand Finale · 大團圓",
    "spectrum": "word",
    "domain": "서사 · 연극 어휘",
    "pos": "大團圓",
    "summary": "오랜 갈등과 복선으로 얽혀 있던 이야기의 모든 실타래가 풀리며 막을 내리는 마지막 장면입니다."
  },
  {
    "id": "odan-329",
    "title": "핵심종 (키스톤 종)",
    "subtitle": "Keystone Species · 군집생태학",
    "spectrum": "science",
    "domain": "생태학 · 보전생물학",
    "pos": "군집생태학",
    "summary": "개체 수는 적더라도 아치의 쐐기돌처럼 생태계 전체의 먹이그물 균형과 종 다양성을 유지하는 데 결정적인 역할을 하는 생물 종입니다."
  },
  {
    "id": "odan-330",
    "title": "초점화",
    "subtitle": "Focalization · 제라르 주네트",
    "spectrum": "humanities",
    "domain": "서사학 · 문학이론",
    "pos": "제라르 주네트",
    "summary": "이야기 속에서 '누가 말하는가'와 구별되는 '누구의 시선과 지각을 통해 세계를 바라보는가'를 규정하는 서사적 렌즈입니다."
  },
  {
    "id": "odan-331",
    "title": "기술 수용 주기 (캐즘)",
    "subtitle": "Chasm · 제프리 무어",
    "spectrum": "system",
    "domain": "혁신 이론 · 기술 전략",
    "pos": "제프리 무어",
    "summary": "새로운 기술이 소수의 혁신가와 얼리어답터에게 환영받은 뒤, 실용성을 중시하는 대중 시장으로 넘어가기 직전에 마주치는 거대한 단절의 심연(Chasm)을 뜻합니다."
  },
  {
    "id": "odan-332",
    "title": "복원",
    "subtitle": "Restoration · 復元",
    "spectrum": "word",
    "domain": "시간 · 보존 어휘",
    "pos": "復元",
    "summary": "허물어지거나 훼손된 문화재나 시스템을 원래 있던 모습과 상태대로 되살려 놓는 일입니다."
  },
  {
    "id": "odan-333",
    "title": "오일러 등식",
    "subtitle": "Euler's Identity · 복소해석학",
    "spectrum": "science",
    "domain": "수학 · 해석학",
    "pos": "복소해석학",
    "summary": "자연로그의 밑 e, 원주율 π, 허수 단위 i, 덧셈의 항등원 0, 곱셈의 항등원 1이라는 수학의 다섯 근본 상수가 단 하나의 식(e^(iπ) + 1 = 0)으로 만나는 등식입니다."
  },
  {
    "id": "odan-334",
    "title": "알레고리",
    "subtitle": "Allegory · 수사학·미술사",
    "spectrum": "humanities",
    "domain": "문학 · 예술 기법",
    "pos": "수사학",
    "summary": "정의의 여신상이나 우화처럼 추상적인 도덕·철학·역사적 개념을 구체적인 인물이나 사물의 이야기에 빗대어 이중 구조로 전달하는 표현 양식입니다."
  },
  {
    "id": "odan-335",
    "title": "파괴적 혁신",
    "subtitle": "Disruptive Innovation · 클레이튼 크리스텐슨",
    "spectrum": "system",
    "domain": "경영전략 · 기술사",
    "pos": "클레이튼 크리스텐슨",
    "summary": "기존 대기업이 고성능·고수익 시장에 집중하는 사이, 처음에는 성능이 낮지만 단순하고 저렴한 신기술이 소외된 시장에서 출발해 빠르게 발전하며 결국 주류 시장을 대체하는 현상입니다."
  },
  {
    "id": "odan-336",
    "title": "탁본",
    "subtitle": "Rubbing · 拓本",
    "spectrum": "word",
    "domain": "기록 · 판화 어휘",
    "pos": "拓本",
    "summary": "비석이나 기와, 금속에 새겨진 글씨와 무늬 위에 젖은 종이를 밀착시키고 먹물을 두드려 원형 그대로 옮겨 찍는 기법입니다."
  },
  {
    "id": "odan-337",
    "title": "피보나치 수열과 엽서",
    "subtitle": "Fibonacci Sequence & Phyllotaxis · 수리생물학",
    "spectrum": "science",
    "domain": "수학 · 식물학",
    "pos": "수리생물학",
    "summary": "앞의 두 수를 더해 다음 수를 만드는 수열로, 해바라기 씨앗의 나선 배열이나 줄기에서 잎이 햇빛을 고루 받도록 나는 각도(황금각)에서 자연스럽게 나타납니다."
  },
  {
    "id": "odan-338",
    "title": "오브제 트루베 (발견된 사물)",
    "subtitle": "Objet trouvé · 현대미술",
    "spectrum": "humanities",
    "domain": "미술 · 조형 이론",
    "pos": "현대미술",
    "summary": "예술가가 직접 깎거나 만든 것이 아니라 해변의 조약돌, 나뭇가지, 낡은 기계 부품처럼 일상이나 자연에서 우연히 발견해 미적 의미를 부여한 사물입니다."
  },
  {
    "id": "odan-339",
    "title": "메칼프의 법칙과 리드의 법칙",
    "subtitle": "Metcalfe's & Reed's Law · 네트워크 가치",
    "spectrum": "system",
    "domain": "플랫폼 경제 · 정보통신",
    "pos": "네트워크 가치",
    "summary": "네트워크의 가치는1대1 연결에서는 참여자 수의 제곱(n²)에 비례하지만, 소모임과 커뮤니티 생성이 가능한 네트워크에서는 2의 n제곱(2^n)으로 더욱 가파르게 커진다는 법칙입니다."
  },
  {
    "id": "odan-340",
    "title": "낙관",
    "subtitle": "Artist's Seal · 落款",
    "spectrum": "word",
    "domain": "서화 · 기록 어휘",
    "pos": "落款",
    "summary": "글씨나 그림을 완성한 뒤 작가의 이름과 아호를 적고 붉은 인장을 찍어 작품을 마무리하는 표식입니다."
  },
  {
    "id": "odan-341",
    "title": "비둘기집 원리",
    "subtitle": "Pigeonhole Principle · 조합론",
    "spectrum": "science",
    "domain": "수학 · 이산수학",
    "pos": "조합론",
    "summary": "n개의 비둘기집에 n+1마리 이상의 비둘기가 들어가면 적어도 한 집에는 두 마리 이상의 비둘기가 반드시 들어 있다는 단순하지만 강력한 존재 증명 원리입니다."
  },
  {
    "id": "odan-342",
    "title": "바우하우스",
    "subtitle": "Bauhaus · 형태는 기능을 따른다",
    "spectrum": "humanities",
    "domain": "디자인사 · 건축",
    "pos": "형태는 기능을 따른다",
    "summary": "순수 예술과 공예, 산업 기술의 경계를 허물고 불필요한 장식을 덜어낸 기하학적 간결함과 실용적 기능을 결합하여 현대 디자인의 기틀을 세운 예술 학교이자 사조입니다."
  },
  {
    "id": "odan-343",
    "title": "포스텔의 법칙 (견고함의 원리)",
    "subtitle": "Postel's Law · 인터넷 아키텍처",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 프로토콜 설계",
    "pos": "인터넷 아키텍처",
    "summary": "'자신이 보내는 것은 엄격하게 규칙을 지키고, 남에게서 받아들이는 것은 너그럽게 수용하라'는 초기 인터넷 TCP 프로토콜의 상호운용성 설계 철학입니다."
  },
  {
    "id": "odan-344",
    "title": "판본",
    "subtitle": "Edition / Woodblock · 版本",
    "spectrum": "word",
    "domain": "출판 · 기록 어휘",
    "pos": "版本",
    "summary": "목판이나 활자로 찍어 낸 책의 원본 계통과 판식을 이르는 말입니다."
  },
  {
    "id": "odan-345",
    "title": "큰 수의 법칙",
    "subtitle": "Law of Large Numbers · 확률론",
    "spectrum": "science",
    "domain": "수학 · 통계학",
    "pos": "확률론",
    "summary": "주사위 던지기처럼 개별 시행의 결과는 우연에 좌우되더라도, 독립 시행 횟수가 충분히 커지면 표본 평균이 이론적 모평균에 수렴한다는 정리입니다."
  },
  {
    "id": "odan-346",
    "title": "미니멀리즘",
    "subtitle": "Minimalism · 최소한의 예술",
    "spectrum": "humanities",
    "domain": "현대미술 · 음악·디자인",
    "pos": "최소한의 예술",
    "summary": "작가의 주관적 감정 표현과 장식을 극도로 덜어내고 사물의 가장 본질적인 형태, 색상, 반복 구조만을 남겨 공간과 관람자의 지각 자체를 일깨우는 사조입니다."
  },
  {
    "id": "odan-347",
    "title": "케르크호프스의 원리",
    "subtitle": "Kerckhoffs's Principle · 암호학",
    "spectrum": "system",
    "domain": "보안공학 · 암호학",
    "pos": "암호학",
    "summary": "암호 시스템의 안전성은 암호화 알고리즘 자체를 비밀로 숨기는 데 의존해서는 안 되며, 알고리즘이 모두 공개되더라도 오직 '비밀키' 하나만 안전하면 뚫리지 않아야 한다는 원칙입니다."
  },
  {
    "id": "odan-348",
    "title": "주석",
    "subtitle": "Annotation · 註釋",
    "spectrum": "word",
    "domain": "텍스트 · 학술 어휘",
    "pos": "註釋",
    "summary": "본문의 낱말이나 문장 뜻이 쉽게 통하도록 본문 바깥이나 아래에 덧붙여 풀이한 글입니다."
  },
  {
    "id": "odan-349",
    "title": "중심극한정리",
    "subtitle": "Central Limit Theorem · 수리통계학",
    "spectrum": "science",
    "domain": "수학 · 통계학",
    "pos": "수리통계학",
    "summary": "모집단이 어떤 모양의 분포를 가지든 표본의 크기가 충분히 크면 표본 평균들의 분포는 종 모양의 정규분포에 가까워진다는 통계학의 핵심 정리입니다."
  },
  {
    "id": "odan-350",
    "title": "인상주의",
    "subtitle": "Impressionism · 빛과 색채의 혁명",
    "spectrum": "humanities",
    "domain": "미술사 · 회화",
    "pos": "빛과 색채의 혁명",
    "summary": "화실 안의 고정된 고유색을 버리고 야외로 나가 시시각각 변하는 태양빛과 대기의 흔들림을 섞이지 않은 원색의 붓터치(병치 혼합)로 포착한 회화 사조입니다."
  },
  {
    "id": "odan-351",
    "title": "암달의 법칙",
    "subtitle": "Amdahl's Law · 컴퓨터 아키텍처",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 최적화",
    "pos": "컴퓨터 아키텍처",
    "summary": "시스템의 일부를 아무리 빠르게 병렬화하더라도, 전체 속도 향상의 한계는 병렬화할 수 없고 순차적으로 처리해야만 하는 구간의 비율에 의해 결정된다는 법칙입니다."
  },
  {
    "id": "odan-352",
    "title": "색인",
    "subtitle": "Index · 索引",
    "spectrum": "word",
    "domain": "기록 · 탐색 어휘",
    "pos": "索引",
    "summary": "책 속의 중요한 낱말이나 인명, 항목을 일정한 순서로 배열하여 원하는 정보를 빠르게 찾아볼 수 있게 한 목록입니다."
  },
  {
    "id": "odan-353",
    "title": "4색 정리",
    "subtitle": "Four Color Theorem · 그래프 이론",
    "spectrum": "science",
    "domain": "수학 · 위상수학",
    "pos": "그래프 이론",
    "summary": "평면 위의 어떤 지도라도 서로 인접한 구역끼리 다른 색을 칠할 때 단 네 가지 색만 있으면 충분히 구분해 칠할 수 있다는 위상수학 정리입니다."
  },
  {
    "id": "odan-354",
    "title": "점묘법",
    "subtitle": "Pointillism · 조르주 쇠라",
    "spectrum": "humanities",
    "domain": "회화 · 색채이론",
    "pos": "조르주 쇠라",
    "summary": "팔레트 위에서 물감을 섞지 않고 캔버스 위에 순수한 원색의 작은 점들을 촘촘히 찍어, 일정한 거리에서 보는 관람자의 망막 안에서 빛으로 섞이게 한 기법입니다."
  },
  {
    "id": "odan-355",
    "title": "리틀의 법칙",
    "subtitle": "Little's Law · 대기행렬 이론",
    "spectrum": "system",
    "domain": "운용과학 · 시스템 공학",
    "pos": "대기행렬 이론",
    "summary": "안정된 시스템 안에 머물러 있는 평균 고객(작업)의 수(L)는 단위 시간당 평균 도착률(λ)과 한 고객이 시스템에 머무는 평균 시간(W)의 곱(L = λW)과 같다는 보편 법칙입니다."
  },
  {
    "id": "odan-356",
    "title": "실마리",
    "subtitle": "Clue / Beginning · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 탐색",
    "pos": "고유어 명사",
    "summary": "뒤엉킨 실뭉치의 첫머리라는 뜻에서, 복잡한 사건이나 문제를 풀어 나가는 첫 단서를 가리킵니다."
  },
  {
    "id": "odan-357",
    "title": "쾨니히스베르크의 다리 문제",
    "subtitle": "Seven Bridges of Königsberg · 오일러",
    "spectrum": "science",
    "domain": "수학 · 그래프 이론",
    "pos": "오일러",
    "summary": "강과 섬을 잇는 일곱 개의 다리를 한 번씩만 건너 출발점으로 돌아올 수 있는가 묻는 문제로, 지형을 점과 선으로 추상화하여 그래프 이론을 탄생시켰습니다."
  },
  {
    "id": "odan-358",
    "title": "입체주의 (큐비즘)",
    "subtitle": "Cubism · 피카소와 브라크",
    "spectrum": "humanities",
    "domain": "미술사 · 현대회화",
    "pos": "피카소와 브라크",
    "summary": "단일한 시점의 원근법을 해체하고 대상을 앞, 옆, 위 등 여러 시점에서 동시에 바라본 기하학적 면들로 쪼개어 한 화면에 재구성한 미술 혁명입니다."
  },
  {
    "id": "odan-359",
    "title": "분할 정복",
    "subtitle": "Divide and Conquer · 알고리즘 설계",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 문제해결",
    "pos": "알고리즘 설계",
    "summary": "한 번에 풀기 어려운 거대한 문제를 같은 형태의 작은 하위 문제들로 재귀적으로 쪼개어 각각 해결한 뒤, 그 해답들을 다시 합쳐 전체 문제를 푸는 핵심 알고리즘 패러다임입니다."
  },
  {
    "id": "odan-360",
    "title": "매듭",
    "subtitle": "Knot · 고유어 명사",
    "spectrum": "word",
    "domain": "순우리말 · 구조",
    "pos": "고유어 명사",
    "summary": "끈이나 실을 묶어 맺은 자리이자, 흐르던 일을 깔끔하게 마무리 짓는 구획을 뜻합니다."
  },
  {
    "id": "odan-361",
    "title": "정지 문제",
    "subtitle": "Halting Problem · 앨런 튜링",
    "spectrum": "science",
    "domain": "컴퓨터과학 · 수리논리학",
    "pos": "앨런 튜링",
    "summary": "임의의 컴퓨터 프로그램과 입력값이 주어졌을 때 그 프로그램이 유한한 시간 안에 끝날지 영원히 돌지 판별해 주는 일반 알고리즘은 존재할 수 없다는 정리입니다."
  },
  {
    "id": "odan-362",
    "title": "차경 (경치를 빌리다)",
    "subtitle": "Borrowed Scenery · 借景",
    "spectrum": "humanities",
    "domain": "전통건축 · 조경 미학",
    "pos": "借景",
    "summary": "정원이나 방 안에 인위적인 장식을 가득 채우는 대신, 창틀과 기둥의 배치만으로 멀리 있는 산과 구름, 계절의 풍경을 건축 내부의 그림처럼 끌어들여 즐기는 미학입니다."
  },
  {
    "id": "odan-363",
    "title": "동적 계획법 (메모이제이션)",
    "subtitle": "Dynamic Programming · 리처드 벨만",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 최적화",
    "pos": "리처드 벨만",
    "summary": "복잡한 문제를 여러 하위 문제로 나누어 풀되, 한 번 계산한 하위 문제의 답을 표에 기억(Memoization)해 두어 똑같은 계산을 중복하지 않음으로써 계산 속도를 획기적으로 높이는 기법입니다."
  },
  {
    "id": "odan-364",
    "title": "씨실과 날실",
    "subtitle": "Weft and Warp · 직조 어휘",
    "spectrum": "word",
    "domain": "구조 · 직조 어휘",
    "pos": "직조 어휘",
    "summary": "옷감을 짤 때 세로로 길게 걸어 놓는 날실과 가로로 교차하며 지나가는 씨실로, 서로 직교하며 단단한 면을 이룹니다."
  },
  {
    "id": "odan-365",
    "title": "섀넌 엔트로피",
    "subtitle": "Shannon Entropy · 정보이론",
    "spectrum": "science",
    "domain": "정보이론 · 수학",
    "pos": "정보이론",
    "summary": "클로드 섀넌이 정의한 개념으로, 어떤 메시지나 확률변수가 담고 있는 평균적인 불확실성(놀라움의 정도)이자 정보를 압축할 수 있는 이론적 한계치를 뜻합니다."
  },
  {
    "id": "odan-366",
    "title": "수미상관",
    "subtitle": "Inclusio / Ring Composition · 시학",
    "spectrum": "humanities",
    "domain": "문학 · 수사법",
    "pos": "시학",
    "summary": "글이나 시, 음악의 첫머리에 나왔던 문장이나 선율을 맨 끝부분에서 다시 한번 호응하게 배치하여 구조적 안정감과 깊은 여운을 남기는 구성법입니다."
  },
  {
    "id": "odan-367",
    "title": "해시 함수와 눈사태 효과",
    "subtitle": "Cryptographic Hash & Avalanche Effect",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 암호학",
    "pos": "개념",
    "summary": "임의의 길이 데이터를 고정된 길이의 고유한 지문으로 변환하되, 입력값에서 단 1비트만 바뀌어도 출력값 전체가 눈사태처럼 전혀 다르게 바뀌어 역추적을 불가능하게 만드는 함수입니다."
  },
  {
    "id": "odan-368",
    "title": "담금질",
    "subtitle": "Quenching · 금속 어휘",
    "spectrum": "word",
    "domain": "금속 · 단련 어휘",
    "pos": "금속 어휘",
    "summary": "붉게 달군 쇠를 찬물이나 기름에 단번에 식혀 강철의 결정 구조를 치밀하고 단단하게 만드는 열처리 과정입니다."
  },
  {
    "id": "odan-369",
    "title": "최소 작용의 원리",
    "subtitle": "Principle of Least Action · 해석역학",
    "spectrum": "science",
    "domain": "물리학 · 변분법",
    "pos": "해석역학",
    "summary": "자연계의 물리 시스템은 시작 상태에서 끝 상태로 이동할 때 운동에너지와 위치에너지 차이의 시간 적분(작용, Action)이 극값을 갖는 경로를 따른다는 원리입니다."
  },
  {
    "id": "odan-370",
    "title": "CAP 정리",
    "subtitle": "CAP Theorem · 분산 데이터베이스",
    "spectrum": "system",
    "domain": "컴퓨터과학 · 분산시스템",
    "pos": "분산 데이터베이스",
    "summary": "네트워크로 연결된 분산 데이터 시스템은 일관성(Consistency), 가용성(Availability), 분할 내성(Partition tolerance) 세 가지 속성 중 동시에 두 가지만 완벽히 보장할 수 있다는 정리입니다."
  },
  {
    "id": "odan-371",
    "title": "모루",
    "subtitle": "Anvil · 고유어 명사",
    "spectrum": "word",
    "domain": "사물 · 단련 어휘",
    "pos": "고유어 명사",
    "summary": "대장간에서 뜨겁게 달군 쇠를 올려놓고 망치로 두드릴 때 그 충격을 묵묵히 받아내는 무거운 쇠받침대입니다."
  },
  {
    "id": "odan-372",
    "title": "맥스웰 방정식",
    "subtitle": "Maxwell's Equations · 고전전자기학",
    "spectrum": "science",
    "domain": "물리학 · 전자기학",
    "pos": "고전전자기학",
    "summary": "전기와 자기가 별개의 현상이 아니라 하나의 전자기장임을 네 개의 미분방정식으로 통합하고, 빛이 곧 전자기파임을 밝혀낸 물리학의 금자탑입니다."
  },
  {
    "id": "odan-373",
    "title": "풀무",
    "subtitle": "Bellows · 고유어 명사",
    "spectrum": "word",
    "domain": "사물 · 동력 어휘",
    "pos": "고유어 명사",
    "summary": "화덕에 바람을 불어 넣어 불길을 한층 거세게 일으키는 기구입니다."
  },
  {
    "id": "odan-374",
    "title": "단열 팽창",
    "subtitle": "Adiabatic Expansion · 대기열역학",
    "spectrum": "science",
    "domain": "물리학 · 기상학",
    "pos": "대기열역학",
    "summary": "외부와 열을 주고받지 않은 채 공기가 상승하며 기압이 낮아져 팽창할 때 내부 에너지를 소모해 스스로 차갑게 식으며 구름을 만드는 현상입니다."
  },
  {
    "id": "odan-375",
    "title": "도르래",
    "subtitle": "Pulley · 고유어 명사",
    "spectrum": "word",
    "domain": "역학 · 도구 어휘",
    "pos": "고유어 명사",
    "summary": "바퀴의 홈에 줄을 걸어 힘의 방향을 바꾸거나 적은 힘으로도 무거운 물체를 들어 올리게 해 주는 단순 기계입니다."
  },
  {
    "id": "odan-376",
    "title": "안식각",
    "subtitle": "Angle of Repose · 입자물리·지질학",
    "spectrum": "science",
    "domain": "물리학 · 지형학",
    "pos": "입자물리",
    "summary": "모래나 곡물 같은 알갱이들을 쌓아 올릴 때 무너지지 않고 스스로 비탈을 유지할 수 있는 최대 경사각입니다."
  },
  {
    "id": "odan-377",
    "title": "지렛대",
    "subtitle": "Lever · 역학 어휘",
    "spectrum": "word",
    "domain": "역학 · 도구 어휘",
    "pos": "역학 어휘",
    "summary": "받침점을 기준으로 막대의 거리 비를 이용해 작은 힘을 큰 힘으로 증폭시키는 도구입니다."
  },
  {
    "id": "odan-378",
    "title": "수준기",
    "subtitle": "Spirit Level · 水準器",
    "spectrum": "word",
    "domain": "측량 · 균형 도구",
    "pos": "水準器",
    "summary": "유리관 속 액체에 띄운 작은 기포의 위치로 면의 수평과 수직을 정밀하게 맞추는 측정 기구입니다."
  },
  {
    "id": "odan-379",
    "title": "추",
    "subtitle": "Plumb Bob · 錘",
    "spectrum": "word",
    "domain": "측량 · 중력 도구",
    "pos": "錘",
    "summary": "실 끝에 매달아 지구 중심을 향하는 중력 방향만으로 완벽한 수직선을 찾아내는 무거운 금속 덩어리입니다."
  },
  {
    "id": "odan-380",
    "title": "해구",
    "subtitle": "Ocean Trench · 海溝",
    "spectrum": "word",
    "domain": "해양 · 지각 어휘",
    "pos": "海溝",
    "summary": "해양판이 대륙판 아래로 섭입하며 바닷속 바닥에 수천 미터 깊이로 길고 좁게 패인 심해의 골짜기입니다."
  },
  {
    "id": "odan-381",
    "title": "산호초",
    "subtitle": "Coral Reef · 珊瑚礁",
    "spectrum": "word",
    "domain": "해양 · 생태 어휘",
    "pos": "珊瑚礁",
    "summary": "작은 산호충들이 남긴 석회질 골격이 오랜 세월 쌓여 열대 바다에 거대한 수중 도시와 생태계를 이룬 지형입니다."
  },
  {
    "id": "odan-382",
    "title": "빙하",
    "subtitle": "Glacier · 氷河",
    "spectrum": "word",
    "domain": "극지 · 시간 어휘",
    "pos": "氷河",
    "summary": "오랜 세월 쌓인 눈이 자체 무게로 다져져 거대한 얼음 덩어리가 된 뒤, 중력을 따라 아주 느리게 흘러내리는 얼음 강입니다."
  },
  {
    "id": "odan-383",
    "title": "오로라",
    "subtitle": "Aurora · 극광(極光)",
    "spectrum": "word",
    "domain": "천문 · 대기 어휘",
    "pos": "극광(極光)",
    "summary": "태양에서 날아온 대전 입자들이 지구 자기장에 이끌려 극지방 고층 대기와 충돌하며 밤하늘에 수놓는 빛의 커튼입니다."
  }
];

window.OMNI_LEXICON = {
  ALL_ENTRIES,
  CURATED_ENTRIES: ALL_ENTRIES,
  INSTANT_WORD_BANK: []
};
