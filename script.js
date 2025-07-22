
const translations = {
  en: {
    navHome: "HOME",
    navProject: "PROJECT",
    projectsTitle: "Projects",
    categoryData: "Data Analysis Projects",
    categoryML: "Machine Learning & Deep Learning Projects",
    categoryITSolutions: "IT Solutions",
    heroHeadline: "AI-powered solutions for smart trade and data-driven strategy.",
    project1_title: "Data-Driven Strategy for Local Private University Survival",
    project1_desc: "Predicting closure risk and providing strategic insights using education data.",
    project1_tech: "Tech: Python, Pandas, Matplotlib",
    project2_title: "Automotive Recall Defect Data Analysis and Visualization",
    project2_desc: "Trend analysis and visualization of vehicle defect and recall reports.",
    project2_tech: "Tech: Pandas, Seaborn, Plotly",
    project3_title: "Ad Campaign Success Prediction Model",
    project3_desc: "Built a binary classification model to estimate success probability of campaigns.",
    project3_tech: "Tech: scikit-learn, XGBoost",
    project4_title: "Startup Success Prediction using Investment Data",
    project4_desc: "Used venture stage and industry features to predict startup outcomes.",
    project4_tech: "Tech: Python, LightGBM",
    project5_title: "Credit Default Risk Prediction Algorithm",
    project5_desc: "Developed a model using credit scoring data to detect default risk.",
    project5_tech: "Tech: TensorFlow, Keras",
    project6_title: "HealthSquare: AI Healthcare Service",
    project6_desc: "Personalized health coaching based on user wellness history and preferences.",
    project6_tech: "Tech: Streamlit, OpenAI API",
    project7_title: "HACTREE: HS Code Auto Classification & Export Strategy Analyst",
    project7_desc: "An AI-powered platform that classifies HS codes and generates trade reports for export enterprises.",
    project7_tech: "Tech: FastAPI, PyTorch, FAISS, LLM, Gradio"
  },
  ko: {
    navHome: "홈",
    navProject: "프로젝트",
    projectsTitle: "프로젝트",
    categoryData: "데이터 분석 프로젝트",
    categoryML: "머신러닝 및 딥러닝 프로젝트",
    categoryITSolutions: "IT 솔루션",
    heroHeadline: "스마트 무역과 데이터 기반 전략을 위한 AI 솔루션",
    project1_title: "지방 사립대 존폐 위기 대응을 위한 데이터 기반 전략 수립",
    project1_desc: "대학 폐교 위험 예측 및 대응 방안 도출",
    project1_tech: "기술: Python, Pandas, Matplotlib",
    project2_title: "자동차 결함 리콜 데이터 분석 및 시각화",
    project2_desc: "결함 빈도 분석 및 시계열 리콜 트렌드 시각화",
    project2_tech: "기술: Pandas, Seaborn, Plotly",
    project3_title: "광고 캠페인의 성공 여부 예측 모델",
    project3_desc: "캠페인 데이터를 기반으로 성공률 분류 모델 개발",
    project3_tech: "기술: scikit-learn, XGBoost",
    project4_title: "스타트업 성공 여부 예측",
    project4_desc: "투자 단계 및 산업군 특성을 반영한 예측",
    project4_tech: "기술: Python, LightGBM",
    project5_title: "채무 불이행 여부 예측 알고리즘",
    project5_desc: "신용평가 데이터를 이용한 이진 분류 모델링",
    project5_tech: "기술: TensorFlow, Keras",
    project6_title: "헬스퀘어: AI 헬스케어 서비스",
    project6_desc: "헬스 기록 기반 맞춤형 건강 코칭",
    project6_tech: "기술: Streamlit, OpenAI API",
    project7_title: "HACTREE: HS코드 자동 분류 및 수출 전략 분석 플랫폼",
    project7_desc: "HS코드 분류와 수출 전략 보고서를 자동 생성하는 AI 플랫폼",
    project7_tech: "기술: FastAPI, PyTorch, FAISS, LLM, Gradio"
  },
  ja: {
    navHome: "ホーム",
    navProject: "プロジェクト",
    projectsTitle: "プロジェクト",
    categoryData: "データ分析プロジェクト",
    categoryML: "機械学習・深層学習プロジェクト",
    categoryITSolutions: "ITソリューション",
    heroHeadline: "スマート貿易とデータ主導戦略のためのAIソリューション",
    project1_title: "地方私立大学の存続戦略データ分析",
    project1_desc: "閉校リスクを予測し、戦略的示唆を提供",
    project1_tech: "技術: Python, Pandas, Matplotlib",
    project2_title: "自動車リコール欠陥データ分析と可視化",
    project2_desc: "リコールトレンドの可視化と頻度分析",
    project2_tech: "技術: Pandas, Seaborn, Plotly",
    project3_title: "広告キャンペーン成功予測モデル",
    project3_desc: "成功確率を推定する分類モデルを構築",
    project3_tech: "技術: scikit-learn, XGBoost",
    project4_title: "スタートアップ成功予測",
    project4_desc: "投資段階と業種に基づいて成功を予測",
    project4_tech: "技術: Python, LightGBM",
    project5_title: "信用不履行予測アルゴリズム",
    project5_desc: "信用スコアデータを用いた分類モデル",
    project5_tech: "技術: TensorFlow, Keras",
    project6_title: "HealthSquare：AIヘルスケアサービス",
    project6_desc: "健康履歴に基づくパーソナライズド支援",
    project6_tech: "技術: Streamlit, OpenAI API",
    project7_title: "HACTREE：HSコード分類と輸出インテリジェンス分析AI",
    project7_desc: "HSコードの分類と貿易戦略レポートを自動生成するAIシステム",
    project7_tech: "技術: FastAPI, PyTorch, FAISS, LLM, Gradio"
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
