class Language {
  get() {
    return ISGOHK.CONFIG.LANG;
  }
  set(lang) {
    ISGOHK.CONFIG.LANG = lang;
  }
  init() {
    let lang = ISGOHK.LocalStorage.get('lang');

    lang = lang ? lang : 'en'; 

    this.set(lang);
  }
}

const LanguageUtil = new Language();

const LanguageRouter = () => {
  switch(LanguageUtil.get()) {
    case 'en':
      return '/en';
    case 'zh-CN':
      return '/cn';
    case 'zh-HK':
      return '/hk';
    case 'ja':
      return '/ja';
    default:
      return '/en';
  }
}