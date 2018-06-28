## SIMBOSS-SDK
		
### 概述
本项目是
### 引入

#### 从 npm 安装

这是我们建议的方式

	$ npm install qiniu
	
#### 从 git 库下载

你可以直接用 git clone 下载源代码来使用。但是请注意非 master 分支的代码可能会变更，应谨慎使用。

### 使用

#### 开始

项目仅支持node-v6.14.3及其以上的版本，低于该版本的node环境无法运行。


#### 初始化
- 你可以直接调用构造函数进行初始化，同时也可以调用初始化函数进行初始化

```
	const simbossSdkLib = require('../index.js');
	// 你可以使用调用构造函数的方法
	const simbossSdk = new simbossSdkLib({
			appid: 'you appid',
			secret: 'you secret'
		})
	// 也可以使用init来进行初始化
	const simbossSdk = simbossSdkLib.init({
			appid: 'you appid',
			secret: 'you secret'
		})
```
	
- 初始化参数

| 参数 | 功能 | 
| ------- | ---------:|
| appid |  你的 SIMBOSS appid  |
| secret |  你的 SIMBOSS secret  |
| timeout | 请求超时时间timeout |
	
#### 调用

- 我们的代码对方法的封装基于Promise的风格进行，可以支持所有用promise实现的调用。

代码将返回一个promise对象。你可以使用异步调用来决议或者自行决议。
不支持回调风格，如需使用，请自行封装。

1、promise

```js
	Instance.name.action(data).then(data=>{
			// your process
		}).catch(e=>{
			// err process
		})
```

2、async/await
	
```js
	async (data) => {
		try{
			let rst = await Instance.name.action(data)
			if (rst.code) {return false}
			//your process
		} catch (e) {
			// err process
		}
	} 
```

- 如果返回值的code不为0，请自行根据 [SIMBOSS-API](https://simboss.com/www/api-doc/index.html) 接口规范-参数规范 进行封装。

### 方法

所有方法基于 [SIMBOSS-API](https://simboss.com/www/api-doc/index.html) 进行封装。传入的参数和API内容中的参数保持一致。具体参数传递规范和要求见api文档规范

* Instance代表你自己初始化的实例对象

| API名称 | 方法 | 请求参数 |    
| ------- | --------- | ---------:|
|1.1 账户总览接口         |  Instance.dashboard.get  |  无  |
|2.1 批量卡详情			 | Instance.device.detailBatch        |  {iccids,imsis,msisdns}  |
|2.2 单卡详情				 | Instance.device.detail             |    {{iccid,imsi,msisdn}}  |
|2.3 单卡已订购套餐列表	 | Instance.device.orderedPlans       |  {{iccid,imsi,msisdn}}  |
|2.4 单卡可续费套餐信息	 | Instance.device.rateplans          |   {iccid,imsi,msisdn}    |
|2.5 单卡续费				 | Instance.device.recharge           |   {iccid,imsi,msisdn,ratePlanId,month,externalOrder}  |
|2.6 单卡续费记录			 | Instance.device.rechargeRecords    |   {iccid,imsi,msisdn}  |
|2.7 实时连接状态查询		 | Instance.device.gprsStatus         |   {iccid,imsi,msisdn}   |
|2.8 实时用户状态查询		 | Instance.device.userStatus         |   {iccid,imsi,msisdn}   |
|2.9 设备实时开关机状态查询 | Instance.device.runningStatus      |  {iccid,imsi,msisdn}  |
|2.10 查询设备套餐概要     | Instance.device.ratePlanSummary    |  {iccid,imsi,msisdn}   |
|2.11 流量池卡开关网络     | Instance.device.modifyDeviceStatus |   {iccid,imsi,msisdn,status}  |
|2.12 日用量查询          | Instance.device.dailyUsage         |    {iccid,imsi,msisdn,date}       |
|2.13 取消测试期          | Instance.device.cancelTesting      |  {iccid,imsi,msisdn}   |
|2.14 更新备注            | Instance.device.memoUpdate         |   {iccid,imsi,msisdn,memo}   |
|2.15 批量更新备注         | Instance.device.memoBatchUpdate    |  {iccids,imsis,msisdns,memo}   |
|3.1 流量池详情			 | Instance.pool.detail           |   {iccid,imsi,msisdn}   |
|3.2 用户下所有流量池信息   | Instance.pool.list             |    无    |
|4.1 提交实名认证信息		 | Instance.realname.submit   |    {iccid,imsi,msisdn,name,licenseType,licenseCode,<br>phone,extenalUserName,pic1,pic2,pic3}     |
|5.1 短信下发接口			 | Instance.sms.send                  |   {iccid,imsi,msisdn,text,msgId}    |
|5.2 短信查询             | Instance.sms.list                  |   {iccid,imsi,msisdn,pageNo}  |





