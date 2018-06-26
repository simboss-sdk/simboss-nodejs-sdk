const Dashboard = (obj) => {
  return {
    /**
     * 短信下发
     * @param data
     * @param data.text 发送的内容
     * @param data.msgId 自定义的id
     * @returns {*|Promise<T>|void}
     */
    send (data) {
      obj.common.stateCheck(data)
      return obj.common.send('/sms/send', data)
    },
    /**
     * 短信查询
     * @param data.pageNo 页码
     * @returns {*|Promise<T>|void}
     */
    list (data) {
      obj.common.stateCheck(data)
      return obj.common.send('/sms/list', data)
    },
  }
}

module.exports = Dashboard