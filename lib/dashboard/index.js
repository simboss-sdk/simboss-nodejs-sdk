const Dashboard = (obj) => {
  return {
    /**
     * 账户详情接口
     * @returns {*|Promise<T>|void}
     */
    get () {
      return obj.common.send('/user/dashboard/get')
    }
  }
}

module.exports = Dashboard