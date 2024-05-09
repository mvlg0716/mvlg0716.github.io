class Route {
  i18n(route) {
    return LanguageRouter() + route;
  }
}

class API {
  constructor() {
    this.__api = '/api';
  }
  setApiPath(path) {
    this.__api = path;
    return this;
  }
  i18n(route) {
    return this.__api + LanguageRouter() + route;
  }
}

class Link {
  i18n(path) {
    let searchStr = window.location.search;
    if (searchStr.length == 0) return path;
    
    let paramStrList = searchStr.substring(1).split('&');
    let hasLang = false;
    let langParam = '';

    for (let str of paramStrList) { 
      if (str.indexOf('lang=') > -1) {
        hasLang = true;
        langParam = str;
        break;
      }   
    }

    if (!hasLang) return path;
    
    return path.indexOf('?') > -1 
      ? path + '&' + langParam
      : path + '?' + langParam;
  }
}

ISGOHK['Link'] = new Link();

ISGOHK['ROUTE'] = new Route();
ISGOHK['API'] = new API();
