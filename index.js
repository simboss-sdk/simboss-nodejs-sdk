class SimbossSdk {
  constructor ({appid, secret, mode = 'default', host = 'https://api.simboss.com/2.0'}) {
    if (!appid) throw new Error('appid not exist');
    if (!secret) throw new Error('secret not exist');
    this.appid = appid;
    this.secret = secret;
    this.mode = mode;
    this.host = host;

    this.dashboard = require('./lib/dashboard')(this);
    this.pool = require('./lib/pool')(this);
    this.realname = require('./lib/realname')(this);
    this.sms = require( './lib/sms')(this);
    this.device = require( './lib/device')(this);

    this.common = require('./lib/common')(this);
  }

  /**
   * 初始化
   * @param args
   * @returns {SimbossSdk}
   */
  static init(...args) {
    return new SimbossSdk(...args);
  }

}

module.exports = SimbossSdk;
