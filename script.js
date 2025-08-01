const translations = {
  en: {
    heroTitle: "Creating Value with Data",
    heroDesc: "We build better solutions through AI and technology. Learn, Build, and Inspire.",
    navHome: "HOME",
    navProject: "PROJECT",
    projectsTitle: "Projects",
    categoryData: "Data Analysis Projects",
    categoryML: "Machine Learning & Deep Learning Projects",
    categoryITSolutions: "IT Solutions",
    project1_title: "Regional Private University Closure Risk Strategy",
    project1_desc: "Predicting closure risk and providing strategic insights using education data.",
    project1_tech: "Tech: Python, Pandas, Matplotlib",
    project1_modal_desc: "This project uses enrollment statistics and regional economic indicators to build a predictive model for assessing closure risk of regional private universities. Strategic recommendations are offered for sustainability.",
    project2_title: "Advertising Campaign Success Strategy",
    project2_desc: "Analysis of defect frequency and visualization of time series recall trends",
    project2_tech: "Tech: Pandas, Seaborn, Plotly",
    project2_modal_desc: "",
    project3_title: "Automotive Recall Data: Analysis & Visualization",
    project3_desc: "This project analyzes and visualizes automobile recall data provided by the Korea Transportation Safety Authority. Utilizing time-series analysis and Korean text mining techniques, the study effectively identifies key trends in the underlying causes of vehicle recalls.",
    project3_tech: "Tech: Python, Seaborn, KoNLPy, Mecab, Twitter, re, WordCloud",
    project3_modal_desc: `
      <div class="modal-section">
        <strong>Objective</strong>
        <ul>
          <li>To visually explore the causes and patterns of automobile defects using the 2020 recall dataset from the Korea Transportation Safety Authority</li>
          <li>To design the analysis framework with scalability in mind, enabling future collaboration with insurance companies and repair shops, as well as specialized analysis for electric and autonomous vehicles</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>Dataset and Key Variables</strong>
        <ul>
          <li>Source: Public Automobile Recall Dataset (Ministry of Land, Infrastructure and Transport, Korea)</li>
          <li>Key columns: Manufacturer, Model Name, Recall Start Date, Defect Description</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>Methodology</strong>
        <ul>
          <li>Parsed time-series data and conducted monthly frequency analysis</li>
          <li>Applied morphological analysis using KoNLPy tools (Mecab and Twitter) to extract nouns from defect descriptions</li>
          <li>Removed stopwords and performed frequency analysis, followed by word cloud visualization</li>
          <li>Explored structural categorization potential in defect texts to inform future modeling efforts</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>Key Tasks</strong>
        <ul>
          <li>Analyzed recall trends based on time-series data</li>
          <li>Parsed the 'Recall Start Date' column into year/month/day and calculated monthly recall counts</li>
          <li>Used value_counts() and sort_index() to identify months with the highest and lowest recall occurrences</li>
          <li>Provided strategic insights into quality control through interpretation of seasonal and item-specific recall trends</li>
          <li>Conducted textual analysis on recall reasons</li>
          <li>Preprocessed defect description texts using regular expressions for noise removal</li>
          <li>Switched from Twitter() to Mecab() for improved noun extraction accuracy</li>
          <li>Applied a stopword list and filtered out single-character words to isolate meaningful keywords</li>
          <li>Visualized results using collections.Counter and WordCloud to enhance insight communication</li>
          <li>Tracked recall cases for Kia Motors</li>
          <li>Filtered by manufacturer and sorted by recall start date to identify the most recent recalled model</li>
        </ul>
      </div>
    `,
    project4_title: "Power Plant NOx Emission Prediction Model Using Power Demand and Weather Data",
    project4_desc: "Used venture stage and industry features to predict startup outcomes.",
    project4_tech: "Tech: Python, LightGBM",
    project4_modal_desc: "",
    project5_title: "HealthSquare: Personalized AI Healthcare Coaching",
    project5_desc: "Developed a model using credit scoring data to detect default risk.",
    project5_tech: "Tech: TensorFlow, Keras",
    project5_modal_desc: "",
    project6_title: "Startup Success Prediction using Investment Data",
    project6_desc: "Personalized health coaching based on user wellness history and preferences.",
    project6_tech: "Tech: Streamlit, OpenAI API",
    project6_modal_desc: "",
    project7_title: "Credit Default Prediction Algorithm",
    project7_desc: "Not Defined",
    project7_tech: "Tech: ",
    project7_modal_desc: "",
    project8_title: "HACTREE: HS Code Auto Classification & Export Strategy Analyst",
    project8_desc: "An AI-powered platform that classifies HS codes and generates trade reports for export enterprises.",
    project8_tech: "Tech: FastAPI, PyTorch, FAISS, LLM, Gradio",
    project8_modal_desc: ""
  },
  ko: {
    heroTitle: "데이터로 가치를 창출합니다",
    heroDesc: "AI와 기술을 통해 더 나은 솔루션을 만듭니다. 배우고, 만들고, 영감을 주는 과정.",
    navHome: "홈",
    navProject: "프로젝트",
    projectsTitle: "프로젝트",
    categoryData: "데이터 분석 프로젝트",
    categoryML: "머신러닝 및 딥러닝 프로젝트",
    categoryITSolutions: "IT 솔루션",
    project1_title: "지방 사립대 존폐 위기 대응을 위한 데이터 기반 전략 수립",
    project1_desc: "대학 폐교 위험 예측 및 대응 방안 도출",
    project1_tech: "기술: Python, Pandas, Matplotlib",
    project2_title: "광고 캠페인의 성공 여부 예측 모델",
    project2_desc: "캠페인 데이터를 기반으로 성공률 분류 모델 개발",
    project2_tech: "기술: Pandas, Seaborn, Plotly",
    project3_title: "자동차 결함 리콜 데이터 분석 및 시각화",
    project3_desc: "본 프로젝트는 한국교통안전공단의 자동차 리콜 데이터를 바탕으로 결함 사유 분석과 시각화를 수행하였으며, 시계열 분석 및 한국어 텍스트 마이닝(Mecab)을 통해 리콜 원인의 트렌드를 효과적으로 도출했습니다.",
    project3_tech: "기술: Python, Seaborn, KoNLPy, Mecab, Twitter, re, WordCloud",
    project3_modal_desc: `
      <div class="modal-section">
        <strong>프로젝트 목표</strong>
        <ul>
          <li>2020년 한국교통안전공단 자동차 리콜 데이터를 활용해 결함의 원인과 패턴을 시각적으로 분석</li>
          <li>추후 보험사/정비업체 데이터 협업, 전기차/자율주행 특화 결함 분석을 고려한 확장성 설계</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>데이터셋</strong>
        <ul>
          <li>자동차 리콜 공공데이터 (국토교통부)</li>
          <li>주요 열: 제작자, 차명, 리콜개시일, 결함내용</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>데이터 분석 방법</strong>
        <ul>
          <li>시계열 데이터 파싱 및 월별 빈도 분석</li>
          <li>KoNLPy 기반 형태소 분석기(Mecab, Twitter)를 활용한 명사 추출</li>
          <li>불용어 제거 후 텍스트 빈도 분석 및 워드클라우드 시각화</li>
          <li>결함 텍스트의 구조적 분류 가능성 탐색 및 추후 모델링 고려</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>주요 작업</strong>
        <ul>
          <li>시계열 기반 리콜 추이 분석</li>
          <li>리콜개시일 컬럼을 연/월/일로 파싱하여 월별 리콜 건수 집계</li>
          <li>value_counts() 및 sort_index()를 통해 리콜이 가장 많이 발생한 달과 가장 적은 달 비교</li>
          <li>계절성 및 품목별 리콜 트렌드 해석을 통해 품질 관리 전략 수립 근거 제공</li>
          <li>텍스트 기반 리콜 사유 분석</li>
          <li>결함내용 컬럼에 대한 정규표현식 기반 전처리 및 텍스트 정제</li>
          <li>KoNLPy의 Twitter() 실패 후 Mecab()로 전환하여 명사 추출 정확도 확보</li>
          <li>불용어 리스트 적용 및 1글자 이하 단어 제거 → 의미 있는 핵심 키워드 필터링</li>
          <li>collections.Counter + WordCloud로 시각화하여 인사이트 전달력 강화</li>
          <li>기아자동차 리콜 사례 추적</li>
          <li>제작자 기준 필터링 + 리콜개시일 기준 정렬로 가장 최근 리콜 모델명 도출</li>
        </ul>
      </div>
    `,
    project4_title: "전력 수요 및 기상 데이터를 활용한 발전소 질소산화물(NOx) 배출량 예측 모델",
    project4_desc: "한국전력거래소와 한국남동발전소 공공데이터를 활용한 기상정보와 TMS측정 데이터를 활용한 예측 모델",
    project4_tech: "기술: Python, LightGBM",
    project5_title: "헬스퀘어(HealthSquare): 사각형 건강남녀를 위한 AI 헬스케어 서비스",
    project5_desc: "헬스 기록 기반 맞춤형 건강 코칭",
    project5_tech: "기술: TensorFlow, Keras",
    project6_title: "스타트업 성공 여부 예측 모델",
    project6_desc: "스타트업의 다양한 창업 및 투자 데이터를 기반으로 성공 여부를 예측",
    project6_tech: "기술: Streamlit, OpenAI API",
    project7_title: "채무 불이행 여부 예측 알고리즘 구축",
    project7_desc: "Not Defined",
    project7_tech: "기술: ",
    project8_title: "HACTREE: HS코드 자동 분류 및 수출 전략 분석 플랫폼",
    project8_desc: "HS코드 분류와 수출 전략 보고서를 자동 생성하는 AI 플랫폼",
    project8_tech: "기술: FastAPI, PyTorch, FAISS, LLM, Gradio"
  },
  ja: {
    heroTitle: "データで価値を創造する",
    heroDesc: "AIと技術を通じてより良いソリューションを構築します。学び、作り、インスパイア。",
    navHome: "ホーム",
    navProject: "プロジェクト",
    projectsTitle: "プロジェクト",
    categoryData: "データ分析プロジェクト",
    categoryML: "機械学習・深層学習プロジェクト",
    categoryITSolutions: "ITソリューション",
    project1_title: "地方私立大学の存続戦略データ分析",
    project1_desc: "閉校リスクを予測し、戦略的示唆を提供",
    project1_tech: "技術: Python, Pandas, Matplotlib",
    project2_title: "広告キャンペーン成功分析",
    project2_desc: "成功確率を推定する分類モデルを構築",
    project2_tech: "技術: scikit-learn, XGBoost",
    project3_title: "自動車リコール欠陥データ分析と可視化",
    project3_desc: "本プロジェクトでは、韓国交通安全公団が提供する自動車リコールデータをもとに、欠陥原因の分析および可視化を行いました。時系列分析と韓国語テキストマイニングを組み合わせることで、リコール原因のトレンドを効果的に抽出しました。",
    project3_tech: "技術: Python, Seaborn, KoNLPy, Mecab, Twitter, re, WordCloud",
    project3_modal_desc: `
      <div class="modal-section">
        <strong>目的</strong>
        <ul>
          <li>2020年の韓国交通安全公団リコールデータを用いて、自動車の欠陥原因およびパターンを視覚的に分析すること</li>
          <li>将来的な保険会社・整備業者とのデータ連携、また電気自動車や自動運転車両向けの特化型分析に対応できる拡張性を意識した設計</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>データセットおよび主な変数</strong>
        <ul>
          <li>ソース：自動車リコール公共データ（韓国 国土交通部）</li>
          <li>主な列：製造者、車種名、リコール開始日、欠陥内容</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>分析手法</strong>
        <ul>
          <li>時系列データのパースおよび月別頻度の分析</li>
          <li>KoNLPyのMecabおよびTwitter形態素解析器を用いた名詞抽出</li>
          <li>ストップワードの除去後、テキスト頻度分析とワードクラウドによる可視化</li>
          <li>欠陥内容の構造的分類の可能性を検討し、将来的なモデリングを視野に入れた分析</li>
        </ul>
      </div>
      <div class="modal-section">
        <strong>主な作業内容</strong>
        <ul>
          <li>時系列データに基づくリコール傾向の分析</li>
          <li>「リコール開始日」列を年/月/日に分解し、月別リコール件数を集計</li>
          <li>value_counts()およびsort_index()により、リコールが最も多かった月と少なかった月を比較</li>
          <li>季節性および品目別リコール傾向の解釈を通じて、品質管理戦略への示唆を提供</li>
          <li>テキストに基づくリコール理由の分析</li>
          <li>欠陥内容に正規表現を適用し、前処理とテキストクレンジングを実施</li>
          <li>Twitter()からMecab()へ切り替え、名詞抽出の精度を向上</li>
          <li>ストップワードの適用と1文字以下の語の除去により、意味のあるキーワードを抽出</li>
          <li>collections.CounterとWordCloudを用いた可視化で、洞察の伝達力を向上</li>
          <li>起亜自動車のリコール事例の追跡</li>
          <li>製造者でフィルタリングし、リコール開始日順に並べて最新モデル名を抽出</li>
        </ul>
      </div>
    `,
    project4_title: "電力需要·気象データを活用した発電所窒素酸化物(NOx)排出量予測モデル",
    project4_desc: "つづく",
    project4_tech: "技術: Python, LightGBM",
    project5_title: "HealthSquare：AIヘルスケアサービス",
    project5_desc: "健康履歴に基づくパーソナライズド支援",
    project5_tech: "技術: TensorFlow, Keras",
    project6_title: "スタートアップ成功予測",
    project6_desc: "投資段階と業種に基づいて成功を予測",
    project6_tech: "技術: Streamlit, OpenAI API",
    project7_title: "信用不履行予測アルゴリズム",
    project7_desc: "信用スコアデータを用いた分類モデル",
    project7_tech: "技術: TensorFlow, Keras",
    project8_title: "HACTREE：HSコード分類と輸出インテリジェンス分析AI",
    project8_desc: "HSコードの分類と貿易戦略レポートを自動生成するAIシステム",
    project8_tech: "技術: FastAPI, PyTorch, FAISS, LLM, Gradio"
  }
};

function setLang(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
// --- 모달 기능 시작 ---

// 열기 버튼마다 이벤트 연결
document.querySelectorAll('.more-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => openModal(index));
});

// 모달 열기
function openModal(index) {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content-inner');
  const lang = document.documentElement.lang || 'en'; // 현재 언어 감지

  // 예시용 상세 설명 (인덱스에 따라 다르게 출력 가능)
  const details = [
    {
      title: translations['en']['project1_title'],
      desc: translations['en']['project1_desc'],
      image: 'assets/project1.png'
    },
    {
      title: translations['en']['project2_title'],
      desc: translations['en']['project2_desc'],
      image: 'assets/project2.png'
    },
    {
      title: translations['en']['project3_title'],
      desc: translations['en']['project3_modal_desc'],
      image: 'assets/project3.jpg'
    },
    {
      title: translations['en']['project4_title'],
      desc: translations['en']['project4_desc'],
      image: 'assets/project4.png'
    },
    {
      title: translations['en']['project5_title'],
      desc: translations['en']['project5_desc'],
      image: 'assets/project5.jpg'
    },
    {
      title: translations['en']['project6_title'],
      desc: translations['en']['project6_desc'],
      image: 'assets/project6.png'
    },
    {
      title: translations['en']['project7_title'],
      desc: translations['en']['project7_desc'],
      image: 'assets/project7.png'
    },
    {
      title: translations['en']['project8_title'],
      desc: translations['en']['project8_desc'],
      image: 'assets/project8.png'
    },
    // ...계속 추가
  ];

  const data = details[index] || { title: 'Project', desc: 'Details not available', image: '' };

  const isHTML = data.desc && data.desc.trim().startsWith('<');
  const descriptionHTML = isHTML ? data.desc : `<p>${data.desc}</p>`;

  modalContent.innerHTML = `
    <span class="close" onclick="closeModal()">&times;</span>
    <h3>${data.title}</h3>
    ${descriptionHTML}
    ${data.image ? `<img src="${data.image}" alt="${data.title}" style="width:100%; margin-top: 15px;" />` : ''}
  `;

  modal.style.display = 'block';
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// ESC 키로 닫기
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
