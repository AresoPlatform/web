import qs from "qs";
import request from "./request";
import Config from "../plugins/config.js";
import axios from "axios";

//获取服务器时间
export async function serverTime(params) {
    return await request(`${Config.serverTime}/${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取减产时间
export async function ReductionTime(params) {
    return await request(`${Config.ReductionTime}/${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取App版本信息
export async function versionInfo(params) {
    return await request(`${Config.versionInfo}/${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取质押挖矿信息
export async function pledgeInfo(params) {
    return await request(`${Config.pledgeInfo}?${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取锁仓置换倍率
export async function getLockRate(params) {
    return await request(`${Config.getLockRate}?${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取比例表
export async function getRation(params) {
    return await request(`${Config.getRation}?${qs.stringify(params)}`, {
        method: "GET",
    });
}
//获取公共数据
export async function getDefiInfo(params) {
    return await request(`${Config.getDefiInfo}?${qs.stringify(params)}`, {
        method: "GET",
    });
}

//获取置换记录
export async function zhihuanList(params) {
    return await request(`${Config.zhihuanList}?${qs.stringify(params)}`, {
        method: "GET",
    });
}

//获取流动性记录
export async function liudongList(params) {
    return await request(`${Config.liudongList}?${qs.stringify(params)}`, {
        method: "GET",
    });
}