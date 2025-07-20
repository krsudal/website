const translations = {
  en: {
    heroTitle: "Create. Amaze. Inspire.",
    heroDesc: "Welcome to my portfolio showcasing projects and skills.",
    navHome: "HOME",
    navAbout: "ABOUT",
    navProject: "PROJECT",
  },
  ko: {
    heroTitle: "창조. 감탄. 영감.",
    heroDesc: "프로젝트와 역량을 소개하는 포트폴리오입니다.",
    navHome: "홈",
    navAbout: "소개",
    navProject: "프로젝트",
  },
  ja: {
    heroTitle: "創造。驚き。インスピレーション。",
    heroDesc: "プロジェクトとスキルを紹介するポートフォリオです。",
    navHome: "ホーム",
    navAbout: "紹介",
    navProject: "プロジェクト",
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
