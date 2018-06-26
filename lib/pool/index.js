const Dashboard = (obj) => {
  return {
    /**
     * 流量池详情
     * @param data.iccid
     * @param data.imsi
     * @param data.msisdn
     * @returns {*|Promise<T>|void}
     */
    poolDetail (data) {
      obj.common.stateCheck(data)
      return obj.common.send('/card/pool/detail', data)
    },
    /**
     * 用户下所有流量池信息
     * @returns {*|Promise<T>|void}
     */
    poolList () {
      return obj.common.send('/card/pool/list')
    }
  }
}

module.exports = Dashboard