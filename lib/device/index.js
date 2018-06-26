const List = [
  {name: 'detailBatch', url: '/device/detail/batch', mode: 'batchData', remark: '批量卡详情'},
  {name: 'detail', url: '/device/detail', mode: '', remark: '单卡详情'},
  {name: 'orderedPlans', url: '/device/orderedPlans', mode: '', remark: '单卡已订购套餐列表'},
  {name: 'rateplans', url: '/device/rateplans', mode: '', remark: '单卡可续费套餐信息'},
  {name: 'recharge', url: '/device/recharge', mode: '', remark: '单卡续费'},
  {name: 'rechargeRecords', url: '/device/recharge/records', mode: '', remark: '单卡续费记录'},
  {name: 'gprsStatus', url: '/device/gprsStatus', mode: '', remark: '实时连接状态查询'},
  {name: 'userStatus', url: '/device/userStatus', mode: '', remark: '实时用户状态查询'},
  {name: 'runningStatus', url: '/device/runningStatus', mode: '', remark: '设备实时开关机状态查询'},
  {name: 'ratePlanSummary', url: '/device/ratePlan/summary', mode: '', remark: '查询设备套餐概要'},
  {name: 'modifyDeviceStatus', url: '/device/modifyDeviceStatus', mode: '', remark: '流量池卡开关网络'},
  {name: 'dailyUsage', url: '/device/dailyUsage', mode: '', remark: '日用量查询'},
  {name: 'cancelTesting', url: '/device/cancelTesting', mode: '', remark: '取消测试期'},
  {name: 'memoUpdate', url: '/device/memo/update', mode: '', remark: '更新备注'},
  {name: 'memoBatchUpdate', url: '/device/memo/batchUpdate', mode: 'batchData', remark: '批量更新备注'}
]

const Device = (obj) => {
  let listMap = {}
  List.map(e => {
    listMap[e.name] =
      !e.arg ?
      (data) => {
        if (e.mode === 'batchData') obj.common.stateCheck(data, false)
        if (!e.mode) obj.common.stateCheck(data)
        return obj.common.send(e.url, data)
      } :
      () => {
        return obj.common.send(e.url)
      }
  });
  return listMap
}

module.exports = Device