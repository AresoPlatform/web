import CryptoJS from "crypto-js"; //加密
import LocalStore from './localstore'
export function getCurrentAuthority() {

    return JSON.parse(LocalStore.getLocalStore('list'))
}

export function check(authority) {
    const current = getCurrentAuthority();
    return current.some(item => authority.includes(item));
}

//sign加密
export function digitize(n) {
    //接受一个number类参数，拆分成一个数组并返回
    var str = n + "";
    var maparr = new Map();
    var keys = "testdefaultKeydes";
    var newvalue = "";

    for (let i = 0; i < str.length; i++) {
        if (i != str.length - 1) {
            maparr.set(i, Number(str[i]) ^ Number(str[i + 1]));
        } else {
            maparr.set(i, Number(str[i]));
        }
    }
    //相乘
    for (let i = 13; i >= 1; i--) {
        maparr.set(13 - i, maparr.get(13 - i) * i);
    }
    //相加
    for (let i = 0; i <= 11; i++) {
        let remainder = maparr.get(i) % 10;
        // console.log(i+1)
        maparr.set(i + 1, maparr.get(i + 1) + remainder);
    }

    var temp = null;
    var KEYS = keys;
    maparr.forEach((item, index) => {
        let domstr = randomRangeId(1);
        newvalue = "-" + index + domstr + item + "-"; //加密内容
        if (temp == null) {
            KEYS = insertStr(KEYS, 1, newvalue);
        } else {
            KEYS = insertStr(KEYS, KEYS.indexOf(temp) + temp.length + 1, newvalue);
        }
        temp = newvalue;

    });

    //加密
    var encrypt = CryptoJS.DES.encrypt(KEYS + '-PC', CryptoJS.enc.Utf8.parse(keys), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypt; //返回加密字符
}

//密码加密
// let passtem = null;
export function password(name, time, pass) {
    var keys = "testdefaultKeydes";
    for (let i = 1; i < pass.length; i += 2) {
        let str = randomRangeId(1);
        pass = insertStr(pass, i, str);
    }
    var keyvalue = time + "+" + name + "+" + pass.toString();
    // console.log(keyvalue)
    //加密
    var encrypt = CryptoJS.DES.encrypt(keyvalue, CryptoJS.enc.Utf8.parse(keys), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypt; //返回加密字符
}

//插入字符串
export function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + newStr + soure.slice(start);
}

//获取随机字符串
export function randomRangeId(num) {
    var returnStr = "",
        charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < num; i++) {
        var index = Math.round(Math.random() * (charStr.length - 1));
        returnStr += charStr.substring(index, index + 1);
    }
    return returnStr;
}