const axios = require('axios');
const crypto = require('crypto-js');
const qs = require('qs');

// appid = '10242014240'
// secret = '4d0a9c1ba867dcc29f0a167d46efee89'

const Common = (obj) => {
  /**
   *  签名计算器
   * @param appid
   * @param secret
   * @param t
   * @param data
   */
  const createSign = (appid, secret, t, data) => {
    let array = [];
    let params = Object.assign(data, {timestamp: t, appid: appid})
    Object.keys(params)
      .forEach((key) => array.push(`${key}=${params[key]}`))
    array.sort();
    return crypto.SHA256(array.join('&') + secret).toString();
  }
  return {
    /**
     * 请求分发器
     * @param url
     * @param data
     * @returns {Promise<T>}
     */
    send (url, data = {}) {
      let appid = obj.appid
      let secret = obj.secret
      let timestamp = Date.now()
      let object = Object.assign(data, {appid, timestamp: Date.now()})
      object.sign = createSign(appid, secret, timestamp, data)
      return axios({
        method: 'POST',
        url: obj.host + url,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(object)
      }).then(res => {
        return res.data;
      }).catch(err => {
        return err.toString()
      })
    },
    /**
     * 卡必要信息检查器
     * @param data
     * @param mode
     * @param log
     */
    stateCheck (data, mode = true, log = console.warn) {
       if (mode) {
         if (!data.iccid && !data.imsi && !data.msisdn) {
           log('[SIMBOSS-SDK告警] 缺少必要的卡信息: iccid, imsi, msisdn 三者者选一')
         }
       } else {
         if (!data.iccids && !data.imsis && !data.msisdns) {
           log('[SIMBOSS-SDK告警] 缺少必要的卡信息: iccids, imsis, msisdns 三者者选一')
         }
       }
    }
  }
}

module.exports = Common

