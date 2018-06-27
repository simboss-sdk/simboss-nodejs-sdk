// 引入simbossSDK
const simbossSdkLib = require('../index.js');
// 初始化传入参数初始化SDK
const simbossSdk = new simbossSdkLib({
  appid: 'you appid',
  secret: 'you secret'
})

const recharge = async () => {
  let rechargeOrderId, planList, accountMoney
  try {
    let rst = await simbossSdk.dashboard.get()
    accountMoney = rst.data.balance || 0
    // 拉取可续费套餐，确保只续费可以续费的套餐
    let rst2 = await simbossSdk.device.rateplans({iccid: '你需要续费的ICCID'})
    planList = !rst2.code ? rst2.data : []
    if (!planList.length) {
      console.log('本卡没有合适的套餐可续费')
      return
    }
    // 提前检测金额是否足够，避免600错误
    if (planList[0].price > accountMoney) {
      console.log('账户余额，无法继续续费')
      return
    }
    // 执行续费
    let rst3 = await simbossSdk.device.recharge({
      iccid: '你需要续费的ICCID',
      ratePlanId: planList[0].ratePlanId,
      month: 1
    })
    if (!rst3.success) return false
    rechargeOrderId = rst3.data
    console.log(`续费成功，订单号为${rechargeOrderId}`)
  } catch (err) {
    // 打印出错流程
    console.warn(err.toString())
  }
}

