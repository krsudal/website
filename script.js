const translations = {
  en: {
    heroTitle: "Creating Value with Data",
    heroDesc: "We build better solutions through AI and technology. Learn, Build, and Inspire.",
    navHome: "HOME",
    navAbout: "ABOUT",
    navProject: "PROJECT"
  },
  ko: {
    heroTitle: "데이터로 가치를 창출합니다",
    heroDesc: "AI와 기술을 통해 더 나은 솔루션을 만듭니다. 배우고, 만들고, 영감을 주는 과정.",
    navHome: "홈",
    navAbout: "소개",
    navProject: "프로젝트"
  },
  ja: {
    heroTitle: "データで価値を創造する",
    heroDesc: "AIと技術を通じてより良いソリューションを構築します。学び、作り、インスパイア。",
    navHome: "ホーム",
    navAbout: "紹介",
    navProject: "プロジェクト"
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
