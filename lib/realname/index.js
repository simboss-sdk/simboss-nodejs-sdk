const Dashboard = (obj) => {
  return {
    /**
     * 提交实名认证
     * @param data.iccid
     * @param data.imsi
     * @param data.msisdn
     * @param data.name 姓名
     * @param data.licenseType 证件类型
     * @param data.licenseCode 证件号码
     * @param data.phone 手机号
     * @param data.extenalUserName 第三方系统关联用户名
     * @param data.pic1 证件正面照片
     * @param data.pic2 证件反面照片
     * @param data.pic2 手持证件照片
     * @returns {*|Promise<T>|void}
     */
    submit (data) {
      obj.common.stateCheck(data)
      return obj.common.send('/realname/submitRealname', data)
    }
  }
}

module.exports = Dashboard