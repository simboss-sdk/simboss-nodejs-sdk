// 执行各个功能点测试
const simbossSdkLib = require('../index.js'),
      expect = require("chai").expect;

// 测试用ICCID列
const iccidsList = ['你的ICCID卡号', '你的ICCID卡号'],
      iccids = iccidsList.join(','),
      iccid = iccidsList[0]

// 填入参数
const simbossSdk = new simbossSdkLib({
  appid: '你的APPID',
  secret: '你的SECRET',
  host: '如果你有SIMBOSS的特殊接口地址，可以通过这个参数上传'
});

describe('apiCollect', () => {
  describe('#dashboard', () => {
    it('获取用户信息', (done) => {
      simbossSdk.dashboard.get().then(rst => {
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('object');
        done();
      })
    });
  });
  describe('#device', () => {
    it('获取批量卡详情', (done) => {
      simbossSdk.device.detailBatch({iccids: iccids}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
    it('获取卡详情', (done) => {
      simbossSdk.device.detail({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('object');
        done();
      })
    });
    it('获取单卡已订购套餐列表', (done) => {
      simbossSdk.device.orderedPlans({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
    it('获取单卡可续费套餐', (done) => {
      simbossSdk.device.rateplans({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
    // it('续费', (done) => {
    //   simbossSdk.device.recharge({iccid: iccid}).then(rst => {
    //     console.log(rst)
    //     let err = rst.code,
    //       token = rst.data;
    //     expect(err).to.equal('0');
    //     expect(token).to.be.an('string');
    //     done();
    //   })
    // });
    it('续费记录', (done) => {
      simbossSdk.device.rechargeRecords({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
    it('实时连接状态查询', (done) => {
      simbossSdk.device.gprsStatus({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.status;
        expect(err).to.equal('0');
        expect(token).to.be.an('string');
        done();
      })
    });
    it('实时用户状态查询', (done) => {
      simbossSdk.device.userStatus({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.status;
        expect(err).to.equal('0');
        expect(token).to.be.an('string');
        done();
      })
    });
    it('设备实时开关机状态查询', (done) => {
      simbossSdk.device.runningStatus({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.status;
        expect(err).to.equal('0');
        expect(token).to.be.an('string');
        done();
      })
    });
    it('查询设备套餐概要', (done) => {
      simbossSdk.device.ratePlanSummary({iccid: iccid}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.volumeSummary;
        expect(err).to.equal('0');
        expect(token).to.be.an('number');
        done();
      })
    });
    // it('流量池卡开关网络', (done) => {
    //   simbossSdk.device.modifyDeviceStatus({iccid: iccid, status: 'ACTIVATED_NAME'}).then(rst => {
    //     console.log(rst)
    //     let err = rst.code;
    //     expect(err).to.equal('0');
    //     done();
    //   })
    // });
    it('日用量查询', (done) => {
      simbossSdk.device.dailyUsage({iccid: iccid, date: '2018-6-22'}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.usage;
        expect(err).to.equal('0');
        expect(token).to.be.an('number');
        done();
      })
    });
    it('更新备注', (done) => {
      simbossSdk.device.memoUpdate({iccid: iccid, memo: '张晨SDK测试'}).then(rst => {
        console.log(rst)
        let err = rst.code;
        expect(err).to.equal('0');
        done();
      })
    });
    it('批量更新备注', (done) => {
      simbossSdk.device.memoBatchUpdate({iccids: iccids, memo: '张晨SDK测试'}).then(rst => {
        console.log(rst)
        let err = rst.code;
        expect(err).to.equal('0');
        done();
      })
    });
  });
  describe('#pool', () => {
    it('流查询量池详情', (done) => {
      simbossSdk.pool.poolDetail({iccid: iccid}).then(rst => {
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('object');
        done();
      })
    });
    it('查询用户下所有流量池信息', (done) => {
      simbossSdk.pool.poolList().then(rst => {
        let err = rst.code,
          token = rst.data;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
  });
  describe('#sms', () => {
    // it('下发短信', (done) => {
    //   simbossSdk.sms.send({iccid: iccid}).then(rst => {
    //     let err = rst.code;
    //     expect(err).to.equal('0');
    //     done();
    //   })
    // });
    it('查询短信列表', (done) => {
      simbossSdk.sms.list({iccid: iccid, pageNo: 1}).then(rst => {
        console.log(rst)
        let err = rst.code,
          token = rst.data.list;
        expect(err).to.equal('0');
        expect(token).to.be.an('array');
        done();
      })
    });
  });
});