const baseUrl = '********'

export default {
    serverTime: baseUrl + '/base/serverTime',
    versionInfo: baseUrl + '/base/versionInfo',
    ReductionTime: baseUrl + '/base/distanceReductionTime',

    pledgeInfo: baseUrl + '/base/pledgeInfo', //获取质押挖矿信息
    getLockRate: baseUrl + '/base/getLockRate', //获取锁仓置换倍率
    zhihuanList: baseUrl + '/web/tron/webLpositionInfo', //置换记录
    liudongList: baseUrl + '/web/tron/webLpLpositionInfo', //流动性记录
    getRation: baseUrl + '/web/tron/getRation', //比例表
    getDefiInfo: baseUrl + '/web/tron/getDefiInfo', //公共数据


}