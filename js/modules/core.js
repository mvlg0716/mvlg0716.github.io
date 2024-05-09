/** Global Module Declare */
const ISGOHK = {};

/** Global Const Var Declare */

ISGOHK['CONFIG'] = {
  LANG: 'en' 
}


class FlushNoArgMethodRegister {
  constructor() {
    this.list = [];
  }
  add(methodName) {
    this.list.push(methodName);
    return this;
  }
  flush() {
    this.list.map(methodName => {
      methodName();
    })
    return this;
  }
  clear() {
    this.list = [];
  }
}

ISGOHK['FLUSH'] = {
  REGISTER: {
    NOARGMETHOD: new FlushNoArgMethodRegister()
  }
};

const flushCenter = ISGOHK.FLUSH.REGISTER.NOARGMETHOD;