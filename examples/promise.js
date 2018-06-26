// 引入simbossSDK
const simbossSdkLib = require('../index.js');
// 初始化传入参数初始化SDK
const simbossSdk = new simbossSdkLib({
  appid: 'you appid',
  secret: 'you secret'
})

simbossSdk.dashboard.get()
  .then(function (rst) {
    if (!rst.code) {
      // 执行业务
      // ...
    }
  })
  .catch(function (e) {
    console.warn(err.toString())
  })

