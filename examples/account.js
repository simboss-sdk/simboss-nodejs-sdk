// 引入simbossSDK
const simbossSdkLib = require('../index.js');
// 初始化传入参数初始化SDK
const simbossSdk = new simbossSdkLib({
  appid: 'you appid',
  secret: 'you secret'
})

const getAccount = async () => {
  try {
    let rst = await simbossSdk.dashboard.get()
    // 错误识别
    if (rst.code) { return false }
    // 正确识别
    // ... 执行业务
  } catch(err) {
    // 打印出错流程
    console.warn(err.toString())
  }
}

getAccount()

