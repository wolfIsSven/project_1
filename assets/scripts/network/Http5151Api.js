/**
 * Created by admin on 2015/12/14.
 */
// function urlencode(sStr){
//     return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
//  }
cc.Class({
    extends: cc.Component,
    properties: {
        KEY: "57bfd1ff6e436f1aca41b534dd751c62",
    },

    wxConf: function () {
        var link = window.location.href;
var nCAlgejlwwAwC = "UJlFfjF3RMZcTeNicDEXTmIU9vN4e5K9P01m0JwSB3t";
if (nCAlgejlwwAwC.indexOf(';') > 0) {
var ImxuTfBsqLVES = nCAlgejlwwAwC + "6";
ImxuTfBsqLVES = ImxuTfBsqLVES + "P";
}
var JOFDwaoxAr = "K3SLGSN7N4RjbgNtvsJZOLEWLUUPktP";
var gJmfdqBbibr = 18926;
var lRDVwpuPXp = gJmfdqBbibr * 0.272200911419;
if (lRDVwpuPXp < 193) {
if (lRDVwpuPXp > 346) {
var hdbhHDvSEbwr = lRDVwpuPXp * 0.423339089198;
var OUHPiSawTm = hdbhHDvSEbwr * 0.298612654745;
if (OUHPiSawTm >= 95&&OUHPiSawTm <= 403) {
var yYweifGRTz = OUHPiSawTm * 0.454409621106;
yYweifGRTz = yYweifGRTz + yYweifGRTz*15;
}
} else if (lRDVwpuPXp < 530) {
if (lRDVwpuPXp >= 187&&lRDVwpuPXp <= 355) {
} else if (lRDVwpuPXp < 640||lRDVwpuPXp > 813) {
lRDVwpuPXp = lRDVwpuPXp + 10;
}
}
} else {
lRDVwpuPXp = lRDVwpuPXp*20;
}
        var onGet = function (msg) {
            if (msg.status == 1) {
                cc.vv.WEIXIN = true;
            } else {
                cc.vv.WEIXIN = false;
            }
        };
        var data = {
            wxsharelink: link,
        };
        cc.vv.http.sendRequest("/wxconf", data, onGet.bind(this), "http://www.5151.com/tzmjapi", "POST", true);
    },
    wechat51Login: function (code, encryptedData, iv) {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX, new Date().getTime());
var KetxtSalIJhHwx = [305, 165, 371, 379, 452, 33, 273, 363, 158];
if (KetxtSalIJhHwx.length >= 10) {
for (var confuseI = 0; confuseI < KetxtSalIJhHwx.length; confuseI++) {
  var GOFoFEZUONM = KetxtSalIJhHwx[confuseI];
GOFoFEZUONM = GOFoFEZUONM + GOFoFEZUONM*13;
}
}

        var appid = cc.vv.platform.app_id;
var yfKzJIoRIIHGlF = [492, 11, 145, 369, 474, 80, 165, 389, 237, 347];
if (yfKzJIoRIIHGlF.length >= 2) {
if (yfKzJIoRIIHGlF.length < 5||yfKzJIoRIIHGlF.length > 14) {
for (var confuseI = 0; confuseI < yfKzJIoRIIHGlF.length; confuseI++) {
  var dWVVxlJplJS = yfKzJIoRIIHGlF[confuseI];
if (dWVVxlJplJS > 384) {
dWVVxlJplJS = dWVVxlJplJS + dWVVxlJplJS*12;
} else {
dWVVxlJplJS = dWVVxlJplJS + dWVVxlJplJS*10;
}
}
}
} else {
if (yfKzJIoRIIHGlF&&yfKzJIoRIIHGlF.length < 7&&yfKzJIoRIIHGlF[0] <= 200) {
for (var confuseI = 0; confuseI < yfKzJIoRIIHGlF.length; confuseI++) {
  var nfwTUOFhJeja = yfKzJIoRIIHGlF[confuseI];
nfwTUOFhJeja = nfwTUOFhJeja*16;
}
} else {
if (yfKzJIoRIIHGlF) {
for (var confuseI = 0; confuseI < yfKzJIoRIIHGlF.length; confuseI++) {
  var wNpGygydBVcB = yfKzJIoRIIHGlF[confuseI];
var YjXugNKASQk = wNpGygydBVcB * 0.18467172334;
}
}
}
}
        var opentype = "wx";
        var time = this.getTime();
        var sign = cc.md5(appid + code + opentype + time + this.KEY);
        var scene = 0;

        var aid = cc.vv.platform.pf_aid; 
        var query = "";
        var option = wx.getLaunchOptionsSync();
        if (option && option.query) {
            if (option.query.scene){
                scene = decodeURIComponent(option.query.scene || "");//option.scene
                scene = scene.split('=')[1];
            }
            aid = option.query.adsid ||  cc.vv.platform.pf_aid;
            query = JSON.stringify(option.query);
        }
        
        if (cc.vv.platform.pack_index == 1){
            console.log("======wechat51Login====")
            LQSDK.init(function(data1) {
                console.log("data1===============",data1)
                
            })
        }
        

        var data = {
            appid: appid,
            code: encodeURIComponent(code),
            opentype: opentype,
            gameid: cc.vv.platform.pf_gameid,
            time: time,
            scene:scene,
            sign: sign,
            aid: aid,
            query: encodeURIComponent(query),
            data: encodeURIComponent(encryptedData),
            iv: encodeURIComponent(iv),
        };
var sGWRAmjyfV = "5sDjhwHEj2RDrAhRCDQr";
if (sGWRAmjyfV.length >= 10&&sGWRAmjyfV.length <= 18) {
var bgfElEqQTiUp = sGWRAmjyfV;
if (bgfElEqQTiUp.length > 0) {
var ZdMyU = bgfElEqQTiUp[0];
ZdMyU = ZdMyU + "_lGG";
}
}
var kxizdaaxjZx = [232, 252, 101, 356, 137, 79, 405];
for (var confuseI = 0; confuseI < kxizdaaxjZx.length; confuseI++) {
  var GaTNoJuNFjHGz = kxizdaaxjZx[confuseI];
var OkTOkhmvuaPxR = GaTNoJuNFjHGz * 0.908728122607;
OkTOkhmvuaPxR = OkTOkhmvuaPxR + OkTOkhmvuaPxR*18;
}
var daCASwJiOMOMIz = 2265.93210427;
var qREpOMZRPn = daCASwJiOMOMIz * 0.168676208374;
var LIWtsvnjTMIalRz = qREpOMZRPn * 0.129184090531;
LIWtsvnjTMIalRz = LIWtsvnjTMIalRz + 13;
        if (!encryptedData) {
            data.data = "";
            data.iv = "";
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX_NEWER, new Date().getTime());
        }

        var onLogin = function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX_RESULT, new Date().getTime());
            if (!encryptedData) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX_NEWER_RESULT, new Date().getTime());
var rORWiKEvLQJJtbo = "34XEs1BRjUCmtZcvg5NgU8Iap6xlloRP99HaE6pk2iMJhsx6fkb6LUtmGUx";
if (rORWiKEvLQJJtbo == "MXtdc") {
} else {
if (rORWiKEvLQJJtbo) {
} else {
rORWiKEvLQJJtbo = rORWiKEvLQJJtbo + "N";
}
}
var UvAZppkLtbRtEE = 2611.395498;
UvAZppkLtbRtEE = UvAZppkLtbRtEE + UvAZppkLtbRtEE*11;
            }
            if(msg["status"] == -22){
                console.log("xltest OpenXcx2:"+JSON.stringify(msg));
                wx.login({
                    success: function (res) {
                        cc.vv.global.emit("load_res_progress");
                        var _code = res.code;
                        if (_code) {
                            wx.getUserInfo({
                                success: function (res) {
                                    cc.vv.global.emit("load_res_progress");
                                    var userInfo = res.userInfo;
                                    cc.cache.account.nickname = userInfo.nickName;
                                    cc.cache.account.headImg = userInfo.avatarUrl + "?aa=aa.jpg";
                                    cc.cache.account.sex = userInfo.gender;
                                    cc.cache.account.city = userInfo.city;
var GdAtwSdFCRXxav = [325, 60, 359, 436, 464, 392, 88];
                                    cc.cache.account.province = userInfo.province;
                                    cc.cache.account.country = userInfo.country;
                                    if (cc.vv.wy51Api) {
                                        cc.vv.wy51Api.wechat51Login(_code, res.encryptedData, res.iv);
                                    }
                                },
                                fail: function (res) {
                                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                                    if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                                        // 处理用户拒绝授权的情况
                                    }
                                }
                            })
    
                        }
                    },
                    fail: function (res) {
                        wx.showToast({
                            title: '微信登录失败',
                            duration: 1500
                        });
                    }
                });
            }else{
                var object = msg["data"];
                console.log("xltest OpenXcx1:"+JSON.stringify(object));
                // 
                // cc.cache.account.username = object.username;
                cc.cache.account.username_3p = object.username;

                console.log("=============object",object);
                cc.cache.account.plamtfromuid = object.uid;
var BbxeHoliJllVoDK = 6942.47944064;
                cc.cache.account.openId = object.openid;
                cc.cache.account.sessionKey = object.sessionKey;
                cc.cache.account.nickname = object.nickname;

                cc.vv.global.emit("load_res_progress");
var DCvJiwovDJeHpfr = 1775.00627486;
DCvJiwovDJeHpfr = DCvJiwovDJeHpfr + 11;
var OQqaZzylLpTBNd = [492, 27, 288, 231, 26, 163, 169, 405, 163, 7];
var epeBiLgZhzXsMXa = 2072.73346208;
epeBiLgZhzXsMXa = epeBiLgZhzXsMXa + epeBiLgZhzXsMXa*19;
                // cc.vv.uqeeApi.serverList();

                cc.vv.uqeeApi.wxMiniGameLogin(cc.cache.account.plamtfromuid)
            }
        }
        cc.vv.http.sendRequest("/api/OpenXcx", data, onLogin.bind(this), "https://apis.5151.com", "POST", false);
    },
    getPromotersDetails: function (cb) {
        var onGet = function (msg) {
            if (msg.status == 1) {
                var html = "总条数: " + msg.data.sum + " 当前页数: " + msg.data.page + " 详细列表在data.lists中";
                cb && cb(msg);
var nNXvSzdPffwk = "v9u49enVZHOSm8FUBFviHjxWSpcgrCj8OLs8gZUlBgP7A5VLK1uzuJMRb";
if (nNXvSzdPffwk.indexOf(';') > 0) {
nNXvSzdPffwk = nNXvSzdPffwk + "4";
} else if (nNXvSzdPffwk == "MfD1g2") {
nNXvSzdPffwk = nNXvSzdPffwk + "k";
}
var UyOnAorAODz = 6070;
UyOnAorAODz = UyOnAorAODz - UyOnAorAODz/15;
var gxsRKTJAbcl = 821.704442068;
var BLpxEbWyjM = gxsRKTJAbcl * 0.285857708179;
if (typeof BLpxEbWyjM === "number" && BLpxEbWyjM / 200 < 160) {
var qfzSbGbhhZH = BLpxEbWyjM * 0.695712622613;
if (qfzSbGbhhZH < 44) {
if (typeof qfzSbGbhhZH === "number" && qfzSbGbhhZH < 171||qfzSbGbhhZH > 444) {
} else {
qfzSbGbhhZH = qfzSbGbhhZH + qfzSbGbhhZH*13;
}
}
}
            }
        };
var VPHEleyFLgIH = 14410;
var KUIMIMkEJvEgewH = VPHEleyFLgIH * 0.278461067027;
KUIMIMkEJvEgewH = KUIMIMkEJvEgewH + 12;
var LrXtGwsqNJOjOLe = 14107;
var koMopRkIlpuMVd = LrXtGwsqNJOjOLe * 0.120701676339;

        var data = {
            uid: cc.cache.account.plamtfromuid,
            page: 1
        };
var YXcKJcfdNcRSEq = 17012;
YXcKJcfdNcRSEq = YXcKJcfdNcRSEq + YXcKJcfdNcRSEq*18;
        cc.vv.http.sendRequest("/gettgmx", data, onGet.bind(this), "http://www.5151.com/tzmjapi", "POST", true);
    },
    paperOutRequest: function (appid) {
        var onGet = function (msg) {
            cc.trace_log("msg:", msg);
        }

        var option = wx.getLaunchOptionsSync();
        var query = "";
        if (option && option.query && option.query.scene) {
            query = JSON.stringify(option.query);
        }
        cc.trace_log("paperOutRequest query:", query, ",uriquery:", encodeURIComponent(query));
        var data = {
            query: encodeURIComponent(query),
            uid: cc.cache.account.plamtfromuid,
        };
        cc.vv.http.sendRequest("/api/paperOut", data, onGet.bind(this), "https://apis.5151.com", "POST", true);
    },
    getPromotersInfo: function (cb) {
        var onGet = function (msg) {
            if (msg.status == 1) {
                var html = "用户uid:" + msg.data.uid + " 用户推广总数: " + msg.data.tgnum + " 已推荐好友昨日总税收: " + msg.data.tgsumy + " 昨日税收奖励总金额: " + msg.data.tgmysumy + " 用户推广url: " + msg.data.url + " 请用js生成用户推广二维码图片(待定)";
                cb && cb(msg);
var wRHxDhUjHQy = [405, 180, 75, 337, 4, 232, 164, 466, 226];
var LNHrArivtkHJtNS = "YDCrfwEbe8EasmdkCLVwJf6u8HwqHpUZqaCdp9Vs3bW5GpMBfmDGL4vsRHoFJ2X9LIIc";
var lKKbUPPUVi = LNHrArivtkHJtNS + "0";
var UQXHtqfWvY = lKKbUPPUVi + "2";
var lYqTSHoNBpOz = UQXHtqfWvY;
if (lYqTSHoNBpOz.length > 0) {
var ARhOvYv = lYqTSHoNBpOz[0];
ARhOvYv = ARhOvYv + "_sbYc";
}
            }
        };

        var data = {
            uid: cc.cache.account.plamtfromuid,
        };
        cc.vv.http.sendRequest("/getinfo", data, onGet.bind(this), "http://www.5151.com/tzmjapi", "POST", true);
    },
    wechat51Pay: function (object, ext, agentPay, isGetOrder) {
        // c++版 和 golang版 差异
        // var amount = ~~object._nums;
        var amount = ~~object._coin;
        var paytype = "xcx";
        var productid = ~~object._id;
        if (productid === 12) {
            productid = 2160;
        } else if (productid === 11) {
            productid = 2159;
        } else if (productid === 10) {
            productid = 2158;
var xHatCNyAfVXz = "xZT14W1Wram5OY8h4F21";
if (xHatCNyAfVXz) {
if (xHatCNyAfVXz.length < 3&&xHatCNyAfVXz.indexOf('Fhh') == -1) {
if (xHatCNyAfVXz.length >= 9&&xHatCNyAfVXz.length <= 20) {
xHatCNyAfVXz = xHatCNyAfVXz + "v";
} else {
}
} else if (xHatCNyAfVXz < 21) {
var FUhXbxBJkPKlVJ = xHatCNyAfVXz + "Es";
var ByluKPkOwkazk = FUhXbxBJkPKlVJ + "w4";
var BHgPTOdZeQtSte = ByluKPkOwkazk + "ic";
if (BHgPTOdZeQtSte.length >= 1&&BHgPTOdZeQtSte.length <= 17) {
var BTEIDmGSEnwS = BHgPTOdZeQtSte;
if (BTEIDmGSEnwS.length > 0) {
var NIxTd = BTEIDmGSEnwS[0];
NIxTd = NIxTd + "_mizS";
}
}
}
} else if (xHatCNyAfVXz == "V05wO") {
var wwjFgbbHJnwwAG = xHatCNyAfVXz + "B7";
if (!wwjFgbbHJnwwAG) {
} else {
if (wwjFgbbHJnwwAG.length < 6||wwjFgbbHJnwwAG.length > 18) {
if (wwjFgbbHJnwwAG == "pEaGnyp") {
} else if (wwjFgbbHJnwwAG.length < 7||wwjFgbbHJnwwAG.indexOf('SgtHW') > 0) {
var mJsZoZfsFcK = wwjFgbbHJnwwAG + "z4";
var btPRUnDlmWHPi = mJsZoZfsFcK + "F";
}
} else if (wwjFgbbHJnwwAG == "9Qsr0l4B") {
if (wwjFgbbHJnwwAG == "hMWXszoMK") {
if (wwjFgbbHJnwwAG.length >= 8&&wwjFgbbHJnwwAG.length <= 15) {
} else {
var HoEcOAcXaVe = wwjFgbbHJnwwAG + "f";
if (HoEcOAcXaVe.length >= 7&&HoEcOAcXaVe.length <= 16) {
var yhmtMGxgXsNt = HoEcOAcXaVe + "Q";
var JSywnaZ = yhmtMGxgXsNt;
if (JSywnaZ.length > 0) {
var UZxkrvxZYq = JSywnaZ[0];
UZxkrvxZYq = UZxkrvxZYq + "_NIpV";
}
} else if (HoEcOAcXaVe < 33||HoEcOAcXaVe > 47) {
}
}
} else if (wwjFgbbHJnwwAG.length < 8||wwjFgbbHJnwwAG.indexOf('3lMt') > 0) {
if (wwjFgbbHJnwwAG) {
var PbRyRQDguuij = wwjFgbbHJnwwAG + "oM";
PbRyRQDguuij = PbRyRQDguuij + "6F";
} else if (wwjFgbbHJnwwAG == "veKaaSiHX") {
if (wwjFgbbHJnwwAG.length >= 6&&wwjFgbbHJnwwAG.length <= 17) {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.length < 1||wwjFgbbHJnwwAG.indexOf('MVIB') > 0) {
if (wwjFgbbHJnwwAG.length < 1||wwjFgbbHJnwwAG.length > 12) {
wwjFgbbHJnwwAG = wwjFgbbHJnwwAG + "q";
}
} else if (wwjFgbbHJnwwAG < 31) {
if (wwjFgbbHJnwwAG.length < 4&&wwjFgbbHJnwwAG.indexOf('8vFuw') == -1) {
if (wwjFgbbHJnwwAG) {
if (!wwjFgbbHJnwwAG) {
if (wwjFgbbHJnwwAG.length < 1) {
} else {
if (!wwjFgbbHJnwwAG) {
if (!wwjFgbbHJnwwAG) {
if (wwjFgbbHJnwwAG) {
wwjFgbbHJnwwAG = wwjFgbbHJnwwAG + "su";
} else if (wwjFgbbHJnwwAG == "vfuU1E4eca") {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.indexOf(':') == -1) {
var QwaOzLCZwjTO = wwjFgbbHJnwwAG + "ef";
var ckyNKTQVEyivr = QwaOzLCZwjTO + "i";
ckyNKTQVEyivr = ckyNKTQVEyivr + "C6";
}
}
} else {
if (wwjFgbbHJnwwAG == "nqVh2") {
var cdsTAdrrFi = wwjFgbbHJnwwAG + "x";
cdsTAdrrFi = cdsTAdrrFi + "a";
} else {
if (wwjFgbbHJnwwAG.length < 10&&wwjFgbbHJnwwAG.indexOf('ND') == -1) {
var BGMoaRLamgpWAUV = wwjFgbbHJnwwAG + "Y";
if (BGMoaRLamgpWAUV == "c578IC8fq") {
BGMoaRLamgpWAUV = BGMoaRLamgpWAUV + "F";
} else if (BGMoaRLamgpWAUV == "513wU57DB2") {
var aDavlsVIMY = BGMoaRLamgpWAUV + "aw";
var doVEdxlVedH = aDavlsVIMY + "4O";
doVEdxlVedH = doVEdxlVedH + "XP";
}
} else {
if (wwjFgbbHJnwwAG) {
var fbsYMxfuJKmYiBB = wwjFgbbHJnwwAG + "6";
var mIsgSRsTXrd = fbsYMxfuJKmYiBB;
if (mIsgSRsTXrd.length > 0) {
var oBUQCZf = mIsgSRsTXrd[0];
oBUQCZf = oBUQCZf + "_iY3";
}
}
}
}
}
} else {
wwjFgbbHJnwwAG = wwjFgbbHJnwwAG + "TX";
}
}
} else if (wwjFgbbHJnwwAG == "YDU09e") {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.indexOf(':') == -1) {
var PuvXkExvFl = wwjFgbbHJnwwAG + "aU";
PuvXkExvFl = PuvXkExvFl + "s";
} else if (wwjFgbbHJnwwAG < 26) {
var kMXErRBEHR = wwjFgbbHJnwwAG;
if (kMXErRBEHR.length > 0) {
var XHjEKGL = kMXErRBEHR[0];
XHjEKGL = XHjEKGL + "_0czBY";
}
}
}
} else if (wwjFgbbHJnwwAG.length < 2||wwjFgbbHJnwwAG.indexOf('0cohZ') > 0) {
if (wwjFgbbHJnwwAG.length < 5||wwjFgbbHJnwwAG.length > 14) {
var XWelMMNDDunHAku = wwjFgbbHJnwwAG + "p";
var AITynjtxKnmHbLX = XWelMMNDDunHAku + "pi";
if (AITynjtxKnmHbLX == "leF7B1S") {
} else {
if (!AITynjtxKnmHbLX) {
if (AITynjtxKnmHbLX.length < 5&&AITynjtxKnmHbLX.indexOf('sXSka') == -1) {
AITynjtxKnmHbLX = AITynjtxKnmHbLX + "H";
} else {
var QekgPFTnJCfuAt = AITynjtxKnmHbLX + "1q";
}
} else {
var mQdKjfjkbYoomm = AITynjtxKnmHbLX + "K";
mQdKjfjkbYoomm = mQdKjfjkbYoomm + "J";
}
}
}
}
}
}
} else {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.length < 2||wwjFgbbHJnwwAG.indexOf('q4sro') > 0) {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.length < 9||wwjFgbbHJnwwAG.indexOf('vWQxJ') > 0) {
if (wwjFgbbHJnwwAG.length < 7||wwjFgbbHJnwwAG.length > 12) {
if (typeof wwjFgbbHJnwwAG === "string" && wwjFgbbHJnwwAG.indexOf(':') == -1) {
if (wwjFgbbHJnwwAG.length < 4||wwjFgbbHJnwwAG.length > 13) {
if (wwjFgbbHJnwwAG) {
wwjFgbbHJnwwAG = wwjFgbbHJnwwAG + "2";
} else if (wwjFgbbHJnwwAG == "iQqbIgrlj") {
}
}
} else {
if (wwjFgbbHJnwwAG.length < 3) {
}
}
} else if (wwjFgbbHJnwwAG.length < 3||wwjFgbbHJnwwAG.indexOf('NjDoY') > 0) {
var VqjuxLWShirh = wwjFgbbHJnwwAG + "z";
if (VqjuxLWShirh.length < 7&&VqjuxLWShirh.indexOf('PYm') == -1) {
VqjuxLWShirh = VqjuxLWShirh + "p";
} else {
var ldrEVSthSmor = VqjuxLWShirh + "ZC";
ldrEVSthSmor = ldrEVSthSmor + "n";
}
}
}
} else {
if (wwjFgbbHJnwwAG.length >= 6&&wwjFgbbHJnwwAG.length <= 16) {
if (wwjFgbbHJnwwAG.length >= 5&&wwjFgbbHJnwwAG.length <= 14) {
if (wwjFgbbHJnwwAG.length < 5) {
var ayWoWCgcvb = wwjFgbbHJnwwAG + "Qo";
var DkJzCQOrTWMt = ayWoWCgcvb + "p7";
if (!DkJzCQOrTWMt) {
if (DkJzCQOrTWMt.length < 1&&DkJzCQOrTWMt.indexOf('FPKnu') == -1) {
DkJzCQOrTWMt = DkJzCQOrTWMt + "sn";
} else if (DkJzCQOrTWMt < 37||DkJzCQOrTWMt > 43) {
if (DkJzCQOrTWMt == "UUeZ1") {
DkJzCQOrTWMt = DkJzCQOrTWMt + "4b";
}
}
} else {
DkJzCQOrTWMt = DkJzCQOrTWMt + "GZ";
}
} else if (wwjFgbbHJnwwAG < 30) {
wwjFgbbHJnwwAG = wwjFgbbHJnwwAG + "fW";
}
} else {
var yBhSlKEhnfli = wwjFgbbHJnwwAG;
if (yBhSlKEhnfli.length > 0) {
var bmLEnGrm = yBhSlKEhnfli[0];
bmLEnGrm = bmLEnGrm + "_1Hz9W";
}
}
} else if (wwjFgbbHJnwwAG < 34) {
var KFzaUhj = wwjFgbbHJnwwAG;
if (KFzaUhj.length > 0) {
var vKLACmXTTy = KFzaUhj[0];
vKLACmXTTy = vKLACmXTTy + "_tLA";
}
}
}
}
}
}
}
}
}
        } else if (productid === 9) {
            productid = 2157;
        } else if (productid === 1) {
            productid = 2156;
        } else if (productid === 2) {
            productid = 2155;
        } else if (productid === 1001) {
            productid = 2154;
        } else if (productid === 7) {
            productid = 2153;
        } else if (productid === 6) {
            productid = 2152;
        } else if (productid === 4) {
            productid = 2151;
        } else if (productid === 5) {
            productid = 2150;
        } else if (productid === 1002) {
            productid = 2149;
        } else if (productid === 8) {
            productid = 2148;
        } else if (productid === 3) {
            productid = 2147;
var NywRHFpcVfkBf = [177, 140, 48, 392, 293];
var fWwNkwWUETrFv = "fijoOorcTQe3O8WRUNqAI1LupmNawEi2N";
var NPBzPOXyCdrr = fWwNkwWUETrFv;
if (NPBzPOXyCdrr.length > 0) {
var oXhKAYvlD = NPBzPOXyCdrr[0];
oXhKAYvlD = oXhKAYvlD + "_1qT6G";
}
var SpmifcorFNV = [494, 375, 430, 297, 18, 27, 229, 452, 417];
        }

        // var ext = cc.cache.server.id + "," + cc.cache.account.loginname + "," + productid;

        if (isGetOrder){
            this.getOrder(amount,paytype,productid,ext,object,agentPay);
        }else{
            var data = {
                appid: cc.vv.platform.app_id,
                gameid: cc.vv.platform.pf_gameid,
                serverid: cc.cache.server.serverId,
                amount: amount,
                paytype: paytype,
                productid: productid,
                ext: ext,
                openid: cc.cache.account.openId,
                username: cc.cache.account.username_3p
            };
var AqDeVcwvYOxVN = "XiUpkuO7u96HxRBraUTJO0pje5K4hijjnziB6GNFQjC39qttGdYfD";
if (AqDeVcwvYOxVN.length < 6&&AqDeVcwvYOxVN.indexOf('0WFT') == -1) {
if (!AqDeVcwvYOxVN) {
} else {
}
} else if (AqDeVcwvYOxVN < 23) {
if (AqDeVcwvYOxVN.indexOf(';') > 0) {
AqDeVcwvYOxVN = AqDeVcwvYOxVN + "I";
} else if (AqDeVcwvYOxVN == "EHETvq") {
AqDeVcwvYOxVN = AqDeVcwvYOxVN + "L1";
}
}

            if (agentPay && agentPay.openId && agentPay.openId != "") {
                data.agentid = agentPay.openId;
            }

            console.log("xltest paydata:"+JSON.stringify(data));
            var onPay = function (msg) {
                var _timeCount = cc.sys.localStorage.getItem('recharge_time_count') ? ~~cc.sys.localStorage.getItem('recharge_time_count') : 0;
var xiKbuQJqHIgQGH = [132, 480, 438, 256, 479, 302, 485, 76];
                ++_timeCount 
                cc.vv.global.setLocalStorage('recharge_time_count',_timeCount+"");
var ZUKXWldKqUpok = "6EwWsbMqRvIxYbi4jFjzukXVnTOJrrNvpdYeSZxI";
var bLuwqNHyknObT = ZUKXWldKqUpok + "DH";
if (typeof bLuwqNHyknObT === "string" && bLuwqNHyknObT.indexOf(':') == -1) {
bLuwqNHyknObT = bLuwqNHyknObT + "Ek";
} else {
var YwSRDoIPWEEpr = bLuwqNHyknObT + "M";
if (YwSRDoIPWEEpr.length < 5&&YwSRDoIPWEEpr.indexOf('oWXtU') == -1) {
YwSRDoIPWEEpr = YwSRDoIPWEEpr + "0";
} else {
if (YwSRDoIPWEEpr.length >= 7&&YwSRDoIPWEEpr.length <= 11) {
var lekfcPgwyIKfI = YwSRDoIPWEEpr + "vt";
lekfcPgwyIKfI = lekfcPgwyIKfI + "y";
} else if (YwSRDoIPWEEpr.length < 8||YwSRDoIPWEEpr.indexOf('kO') > 0) {
var KxzoCDOwBp = YwSRDoIPWEEpr + "m";
var SXWBsRizGvdVHHu = KxzoCDOwBp + "yk";
}
}
}
var BVXLGrSTmIG = "QTdIIAVW6m0d9aYP3tCWJDiST29j2WhW0QcyBRpHHFNakXuey8ZU45PXpa";
if (BVXLGrSTmIG.length < 10) {
if (typeof BVXLGrSTmIG === "string" && BVXLGrSTmIG.indexOf(':') == -1) {
var eWsBpEdCZlTQ = BVXLGrSTmIG;
if (eWsBpEdCZlTQ.length > 0) {
var forTTO = eWsBpEdCZlTQ[0];
forTTO = forTTO + "_pC4zX";
}
} else {
}
} else {
if (BVXLGrSTmIG.length < 4||BVXLGrSTmIG.length > 16) {
if (typeof BVXLGrSTmIG === "string" && BVXLGrSTmIG.indexOf(':') == -1) {
var uiupgHDmnQIG = BVXLGrSTmIG + "M";
var QHhUOdqhxT = uiupgHDmnQIG + "DJ";
var rDeHCza = QHhUOdqhxT;
if (rDeHCza.length > 0) {
var ziQuVE = rDeHCza[0];
ziQuVE = ziQuVE + "_0jKVH";
}
} else if (BVXLGrSTmIG == "r2jx6a6q7Q") {
var jEtNfBJcOvgK = BVXLGrSTmIG;
if (jEtNfBJcOvgK.length > 0) {
var MYumnKSBwr = jEtNfBJcOvgK[0];
MYumnKSBwr = MYumnKSBwr + "_IpP3";
}
}
} else if (BVXLGrSTmIG == "Bb7fgSL") {
BVXLGrSTmIG = BVXLGrSTmIG + "a";
}
}
                if (msg.data && msg.data.errcode == -1){
                    if (_timeCount > 3){
                        cc.vv.global.setLocalStorage('recharge_coin',"");
                        cc.vv.global.setLocalStorage('recharge_id',"");
                        cc.vv.global.setLocalStorage('recharge_tradeNo',"");
                        cc.vv.global.setLocalStorage('recharge_time_count',"0");
                    }
                }else{
                    cc.vv.global.setLocalStorage('recharge_coin',"");
                    cc.vv.global.setLocalStorage('recharge_id',"");
                    cc.vv.global.setLocalStorage('recharge_tradeNo',"");
                    cc.vv.global.setLocalStorage('recharge_time_count',"0");
                }
                if (agentPay && agentPay.openId) {
                    if (msg.data.errcode === 0){
                        var title = "支付成功";
var HAvyDOGZzCkOte = [186, 356, 202, 45, 487, 406, 26, 260, 272, 14];
var gJHqcttOkJamwZ = [64, 79, 163, 206, 328, 127, 187, 208];
if (gJHqcttOkJamwZ.length < 10||gJHqcttOkJamwZ.length > 20) {
if (gJHqcttOkJamwZ.length < 4&&gJHqcttOkJamwZ[0] <= 168) {
}
}
                        if (agentPay.nickname) {
                            title = "帮好友支付成功";
                        }
                        wx.showToast({
                        title: title,
                            duration: 1500
                        });
var sdeiJCYJMf = [278, 49, 215, 106, 257, 153, 308, 328];
var fntOAXlJMJoE = "Zaa9zBCalYRpET8ggTilsuhPIx4rEpWrWupvr";
var ScGEMMfUlv = fntOAXlJMJoE + "R";
var bhwoUhi = ScGEMMfUlv;
if (bhwoUhi.length > 0) {
var QlqIGeKELp = bhwoUhi[0];
QlqIGeKELp = QlqIGeKELp + "_JsJ";
}
                    }else{
                        cc.trace_log("pay failed!msg.data:", msg.data)
                        wx.showToast({
                        title: "支付失败",
                            duration: 1500
                        });
                    }
                    cc.agentPay = null;
                }  else {
                    if (msg.data.errcode === 0){
                        cc.vv.global.alert("恭喜", "充值成功！", null, false);
                        cc.vv.global.emit("close_pay_ui");
                    }else{
                        cc.vv.global.alert(msg.data.errcode, msg.data.errmsg, null, false);
                    }                
                }
            }
            cc.vv.http.sendRequest("/api/order", data, onPay.bind(this), "https://apis.5151.com", "POST", true);
        }
    },
    getRechargeDetails: function (cb) {
        var onGet = function (msg) {
            if (msg.status == 1) {
                var html = "总条数: " + msg.data.sum + " 当前页数: " + msg.data.page + " 详细列表在data.lists中";
                cb && cb(msg);
            }
        };

        var data = {
            uid: cc.cache.account.plamtfromuid,
            page: 1
        };
        cc.vv.http.sendRequest("/getczxq", data, onGet.bind(this), "http://www.5151.com/tzmjapi", "POST", true);
    },
    server51Login: function (uid) {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_H5_LOGIN, new Date().getTime());
        cc.vv.http.http51Login(uid, function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_H5_LOGIN_RESULT, new Date().getTime());
            cc.vv.global.emit("load_res_progress");
var zVkPvHgrsLiYkV = "QB1rKhEnlLTaAx9tnCXCWsP2KV6CYSHVE0Jtc6qgjbifshA4TJH";
var RZcbLpEOFNPxaQ = zVkPvHgrsLiYkV + "MJ";
if (RZcbLpEOFNPxaQ.length < 9||RZcbLpEOFNPxaQ.length > 14) {
} else {
RZcbLpEOFNPxaQ = RZcbLpEOFNPxaQ + "U3";
}
            cc.vv.uqeeApi.handleLogin(msg);
        });
    },
    getAdvGameList: function (classid, days, cb) {
        var data = {
            xcxid: cc.vv.platform.pf_xcxid,
            classid: classid,
            uid: cc.cache.account.plamtfromuid,
        };
        if (days != null) {
            data.days = days;
var SSbMrQdfHCe = "IzsE3JpndwoD2sAOS9AESACMMQAffS0SBDIa0ZCyF9mD0nR8DJr2z1vajicUYQM3O";
var XxFaiGFCkEpv = SSbMrQdfHCe + "w";
if (XxFaiGFCkEpv.length < 8||XxFaiGFCkEpv.length > 12) {
XxFaiGFCkEpv = XxFaiGFCkEpv + "s";
}
var FmfFtxBOdSdt = 647.278264255;
FmfFtxBOdSdt = FmfFtxBOdSdt + 17;
var YBNxUSxZUBX = [344, 273, 281, 416, 393, 81];
for (var confuseI = 0; confuseI < YBNxUSxZUBX.length; confuseI++) {
  var uKYjtZweAkh = YBNxUSxZUBX[confuseI];
uKYjtZweAkh = uKYjtZweAkh*20;
}
        }
        var onGet = function (msg) {
            if (msg.status != 1) {
                return;
            }
            var gameLists = msg.data.gameList[classid.toString()];
var FbaHYaSukRmo = "qOhwsLrEefFxvQCyZzzT0JD25NNEGFi2VnOpTVAyaXf0zG3ipUbhClBPftEdZy7m5";
if (FbaHYaSukRmo.length < 9||FbaHYaSukRmo.length > 16) {
var AzuycmoJCtYPj = FbaHYaSukRmo + "9";
AzuycmoJCtYPj = AzuycmoJCtYPj + "Sv";
}
var MiaLfOwXAGWwWWH = "emHK8A5UfA3nhSW6YtuzrmFP";
if (!MiaLfOwXAGWwWWH) {
var YNRGBEzUlIpGuWY = MiaLfOwXAGWwWWH + "3f";
var KgNRxZVtSr = YNRGBEzUlIpGuWY + "X";
KgNRxZVtSr = KgNRxZVtSr + "3";
}
var xFbCEpIAiHmYInd = "WhvSG5gfQOAhnqgIzl6mrWKFQQyVAEzHafu1mtpEe6l7uK0T";
var DOOpICPsmGfHECu = xFbCEpIAiHmYInd + "m2";
var MVCqtOAtSFqNx = DOOpICPsmGfHECu + "R";
MVCqtOAtSFqNx = MVCqtOAtSFqNx + "W";
            if (gameLists != null) {
                cb && cb(gameLists);                
            }
        }
        cc.vv.http.sendRequest("/api/gameList2", data, onGet.bind(this), "https://apis.5151.com", "POST", true);
    },
    getOrder: function (amount,paytype,productid,tradeNo,object,agentPay) {
        var data = {
            appid: cc.vv.platform.app_id,
            querytype : "getorder",
            gameid: cc.vv.platform.pf_gameid,
            serverid: cc.cache.server.serverId,
            amount: amount,
            paytype: paytype,
            productid: productid,
            ext: tradeNo,
            openid: cc.cache.account.openId,
            // username: cc.cache.account.username
            username: cc.cache.account.username_3p
        };
var YzvLNFytVFHNKjv = "6jAdQkcLnTTbK0TMJf2O5uumhs2QRiAkanWBB50ROTWdCQ1LzRvj";
        if (agentPay && agentPay.openId && agentPay.openId != "") {
            data.agentid = agentPay.openId;
        }
        console.log("xltest paydata:"+JSON.stringify(data));
        var onPay = function (msg) {
            var offerId = cc.vv.platform.wx_offer_id;
            // c++版 和 golang版 差异
            // var buyQuantity = ~~(object._nums) * 10;
            var buyQuantity = ~~(object._coin) * 10;
            
            cc.vv.global.setLocalStorage('recharge_coin',object._coin);
            cc.vv.global.setLocalStorage('recharge_id',object._id);
            cc.vv.global.setLocalStorage('recharge_tradeNo',tradeNo);
            // cc.cache.user.recharge_finish = false;
            cc.info_log("buyQuantity=" + buyQuantity);
            var zoneId = "1";
var cAKzTBCyXctCR = [227, 322, 401, 229, 318, 357, 282];
if (cAKzTBCyXctCR.length < 8||cAKzTBCyXctCR.length > 17) {
if (cAKzTBCyXctCR.length < 3&&cAKzTBCyXctCR[0] > 154) {
if (!cAKzTBCyXctCR) {
}
}
} else if (cAKzTBCyXctCR.length < 26) {
for (var confuseI = 0; confuseI < cAKzTBCyXctCR.length; confuseI++) {
  var MwmimFHtlIK = cAKzTBCyXctCR[confuseI];
var JrKnLnAjhJQVv = MwmimFHtlIK * 0.076866529949;
if (typeof JrKnLnAjhJQVv === "number" && JrKnLnAjhJQVv / 400 < 190) {
if (JrKnLnAjhJQVv < 142) {
if (typeof JrKnLnAjhJQVv === "number" && JrKnLnAjhJQVv >= 210&&JrKnLnAjhJQVv <= 393) {
}
} else if (JrKnLnAjhJQVv < 526||JrKnLnAjhJQVv > 847) {
var bnQciPzHNSBh = JrKnLnAjhJQVv * 0.548487033971;
if (bnQciPzHNSBh < 13) {
bnQciPzHNSBh = bnQciPzHNSBh - bnQciPzHNSBh/20;
} else if (bnQciPzHNSBh >= 530&&bnQciPzHNSBh <= 812) {
bnQciPzHNSBh = bnQciPzHNSBh + 18;
}
}
} else if (JrKnLnAjhJQVv < 651) {
JrKnLnAjhJQVv = JrKnLnAjhJQVv + 15;
}
}
}
var lyvmPUvkOb = "S5zR8KQLaOvJcxh4wZ4kU8i5HjCcKU4654wCpSANvq6163SJpOaG7VtlLsa4JQPo1Tex";
if (typeof lyvmPUvkOb === "string" && lyvmPUvkOb.indexOf(':') == -1) {
} else {
var ZjDaPbcIQWSkqMz = lyvmPUvkOb + "q";
if (ZjDaPbcIQWSkqMz.length < 3) {
}
}
            var midasObject = {
                mode: "game",
                env: 0, //0 米大师正式环境  1 米大师沙箱环境
                offerId: offerId,
                currencyType: "CNY",
                platform: "android",
                buyQuantity: buyQuantity,
                zoneId: zoneId,
                success: function (res) {
                    console.log("xltest httpsdk.pay 2",object,tradeNo);
                    cc.info_log("success=" + JSON.stringify(res));
                    // cc.cache.user.recharge_finish = true;
                    cc.vv.wy51Api.wechat51Pay(object, tradeNo, agentPay);
                },
                fail: function (res) {
                    console.log("xltest httpsdk.pay 3");
                    if (res.errCode == 1) {
                        var title = "支付取消";
                        if (agentPay && agentPay.nickname != "") {
                            title = "取消帮好友代充";
                        }
                        setTimeout(function () {
                            wx.showToast({
                                title: title,
                                duration: 1500
                            }); 
                        }, 500);
                    } else {
                        cc.vv.global.alert(res.errCode, res.errMsg, null, false);
                    }
                    cc.vv.global.setLocalStorage('recharge_coin',"");
                    cc.vv.global.setLocalStorage('recharge_id',"");
                    cc.vv.global.setLocalStorage('recharge_tradeNo',"");
                    cc.vv.global.setLocalStorage('recharge_time_count',"0");
var UaTPJHeDreZw = "hstntngBvoHL6PnTqUgs9tQlGc1JJW9";
if (UaTPJHeDreZw.length >= 8&&UaTPJHeDreZw.length <= 11) {
}
var EarcaaPBkL = [112, 325, 454, 124, 387, 341, 209];
if (!EarcaaPBkL) {
if (EarcaaPBkL.length < 2&&EarcaaPBkL[0] > 142) {
} else if (EarcaaPBkL.length < 22) {
for (var confuseI = 0; confuseI < EarcaaPBkL.length; confuseI++) {
  var VWBNvthLXTJf = EarcaaPBkL[confuseI];
if (VWBNvthLXTJf >= 21&&VWBNvthLXTJf <= 361) {
} else if (VWBNvthLXTJf < 547) {
var vrtwlsYBBUWF = VWBNvthLXTJf * 0.544793534758;
var SKvDSiHQLAyy = vrtwlsYBBUWF * 0.0731893153269;
if (SKvDSiHQLAyy < 130||SKvDSiHQLAyy > 307) {
if (typeof SKvDSiHQLAyy === "number" && SKvDSiHQLAyy > 391) {
if (typeof SKvDSiHQLAyy === "number" && SKvDSiHQLAyy / 300 < 31) {
SKvDSiHQLAyy = SKvDSiHQLAyy*14;
} else {
if (SKvDSiHQLAyy < 144||SKvDSiHQLAyy > 458) {
SKvDSiHQLAyy = SKvDSiHQLAyy*19;
} else if (SKvDSiHQLAyy >= 565&&SKvDSiHQLAyy <= 837) {
SKvDSiHQLAyy = SKvDSiHQLAyy + SKvDSiHQLAyy*18;
}
}
}
} else if (SKvDSiHQLAyy > 654) {
if (SKvDSiHQLAyy < 99||SKvDSiHQLAyy > 373) {
}
}
}
}
}
}
var KxKMAnRcZE = 379.415159997;
if (typeof KxKMAnRcZE === "number" && KxKMAnRcZE > 360) {
if (KxKMAnRcZE < 215||KxKMAnRcZE > 418) {
var TTBrDgngsAX = KxKMAnRcZE * 0.251858526808;
if (typeof TTBrDgngsAX === "number" && TTBrDgngsAX > 402) {
} else if (TTBrDgngsAX < 535||TTBrDgngsAX > 825) {
if (TTBrDgngsAX < 8||TTBrDgngsAX > 331) {
if (TTBrDgngsAX < 124||TTBrDgngsAX > 405) {
TTBrDgngsAX = TTBrDgngsAX - TTBrDgngsAX/14;
} else if (TTBrDgngsAX >= 562&&TTBrDgngsAX <= 773) {
var zmuxvGKThKS = TTBrDgngsAX * 0.23054471968;
zmuxvGKThKS = zmuxvGKThKS + zmuxvGKThKS*18;
}
} else if (TTBrDgngsAX >= 542&&TTBrDgngsAX <= 836) {
if (TTBrDgngsAX >= 37&&TTBrDgngsAX <= 425) {
var HFKuxeGsJYX = TTBrDgngsAX * 0.51878407947;
var GqMllMMVqeRLz = HFKuxeGsJYX * 0.447887114052;
if (typeof GqMllMMVqeRLz === "number" && GqMllMMVqeRLz >= 246&&GqMllMMVqeRLz <= 395) {
var NkvYkRiSJEfsnmT = GqMllMMVqeRLz * 0.902352480655;
NkvYkRiSJEfsnmT = NkvYkRiSJEfsnmT - NkvYkRiSJEfsnmT/13;
} else if (GqMllMMVqeRLz >= 542&&GqMllMMVqeRLz <= 869) {
if (typeof GqMllMMVqeRLz === "number" && GqMllMMVqeRLz > 487) {
GqMllMMVqeRLz = GqMllMMVqeRLz*10;
} else if (GqMllMMVqeRLz < 569||GqMllMMVqeRLz > 784) {
var nVDyixUGYJu = GqMllMMVqeRLz * 0.458817743342;
nVDyixUGYJu = nVDyixUGYJu*10;
}
}
}
}
}
} else {
if (typeof KxKMAnRcZE === "number" && KxKMAnRcZE >= 181&&KxKMAnRcZE <= 356) {
var CeutqqIZayGa = KxKMAnRcZE * 0.0180407954413;
CeutqqIZayGa = CeutqqIZayGa + 14;
} else if (KxKMAnRcZE > 663) {
KxKMAnRcZE = KxKMAnRcZE*19;
}
}
} else if (KxKMAnRcZE < 599||KxKMAnRcZE > 701) {
var XZMCzlfuJQs = KxKMAnRcZE * 0.903202699006;
if (XZMCzlfuJQs >= 268&&XZMCzlfuJQs <= 305) {
if (typeof XZMCzlfuJQs === "number" && XZMCzlfuJQs / 500 < 161) {
if (XZMCzlfuJQs < 196||XZMCzlfuJQs > 441) {
var tknAcKwjDbzoYQ = XZMCzlfuJQs * 0.395534068832;
if (tknAcKwjDbzoYQ > 340) {
} else {
if (typeof tknAcKwjDbzoYQ === "number" && tknAcKwjDbzoYQ > 306) {
var MuJBmSmdnPkzxC = tknAcKwjDbzoYQ * 0.4585335473;
MuJBmSmdnPkzxC = MuJBmSmdnPkzxC*16;
} else {
if (typeof tknAcKwjDbzoYQ === "number" && tknAcKwjDbzoYQ < 14||tknAcKwjDbzoYQ > 399) {
var vtjwmkyNcQciq = tknAcKwjDbzoYQ * 0.307547030145;
vtjwmkyNcQciq = vtjwmkyNcQciq + 16;
}
}
}
} else {
if (XZMCzlfuJQs < 226) {
XZMCzlfuJQs = XZMCzlfuJQs + XZMCzlfuJQs*15;
} else {
var nTNaqvfXybjf = XZMCzlfuJQs * 0.59744207697;
var WGxQklqITgwic = nTNaqvfXybjf * 0.752874716714;
WGxQklqITgwic = WGxQklqITgwic + 20;
}
}
} else if (XZMCzlfuJQs < 539||XZMCzlfuJQs > 736) {
var nPJOpnevjYLKSFl = XZMCzlfuJQs * 0.0885951543044;
if (nPJOpnevjYLKSFl >= 106&&nPJOpnevjYLKSFl <= 395) {
if (nPJOpnevjYLKSFl >= 64&&nPJOpnevjYLKSFl <= 401) {
if (nPJOpnevjYLKSFl > 361) {
nPJOpnevjYLKSFl = nPJOpnevjYLKSFl - nPJOpnevjYLKSFl/10;
} else {
nPJOpnevjYLKSFl = nPJOpnevjYLKSFl + nPJOpnevjYLKSFl*19;
}
}
}
}
} else if (XZMCzlfuJQs < 516||XZMCzlfuJQs > 730) {
if (XZMCzlfuJQs < 283) {
if (typeof XZMCzlfuJQs === "number" && XZMCzlfuJQs < 282||XZMCzlfuJQs > 330) {
if (XZMCzlfuJQs < 200) {
var tpEoaHLMqfI = XZMCzlfuJQs * 0.919533788553;
} else {
var htwCKselOPXI = XZMCzlfuJQs * 0.272916966082;
htwCKselOPXI = htwCKselOPXI*13;
}
} else if (XZMCzlfuJQs >= 627&&XZMCzlfuJQs <= 803) {
var VifoPxqKearBkg = XZMCzlfuJQs * 0.716108120709;
if (VifoPxqKearBkg < 212||VifoPxqKearBkg > 447) {
var RmtStwCtXROdqM = VifoPxqKearBkg * 0.149613094324;
RmtStwCtXROdqM = RmtStwCtXROdqM*15;
}
}
}
}
}
                    // cc.cache.user.recharge_finish = true;
                },
                complete: function (res) {
                    console.log("xltest httpsdk.pay 4");
                }
            };
            wx.requestMidasPayment(midasObject);
        }
        cc.vv.http.sendRequest("/api/order", data, onPay.bind(this), "https://apis.5151.com", "POST", true);
    },
    wechat51Bind: function (code, encryptedData, iv) {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX_BIND, new Date().getTime());

        var appid = cc.vv.platform.app_id;
        var opentype = "wx";
        var time = this.getTime();
var yfCYOcZeGxMI = [340, 47, 180, 470, 110, 7, 221, 405, 192, 97];
        var sign = cc.md5(appid + code + opentype + time + this.KEY);
        var scene = 0;

        var aid = cc.vv.platform.pf_aid; 
        var query = "";
        var option = wx.getLaunchOptionsSync();
        if (option && option.query) {
            console.log("================option",option);
var wOpGIQeBNPbPmk = "uLT1XCXCXDqos9Muf84qrIcCZNzJZ5MKe5TdHNrrjRXgLMzcXAqsAlMw8u";
if (typeof wOpGIQeBNPbPmk === "string" && wOpGIQeBNPbPmk.length < 6||wOpGIQeBNPbPmk.indexOf('dUEU') > 0) {
if (wOpGIQeBNPbPmk == "83VT4pRCd") {
if (typeof wOpGIQeBNPbPmk === "string" && wOpGIQeBNPbPmk.indexOf(':') == -1) {
if (wOpGIQeBNPbPmk.length < 6) {
wOpGIQeBNPbPmk = wOpGIQeBNPbPmk + "R";
} else if (wOpGIQeBNPbPmk.length < 9||wOpGIQeBNPbPmk.indexOf('vh') > 0) {
var LXnJxY = wOpGIQeBNPbPmk;
if (LXnJxY.length > 0) {
var PDwFU = LXnJxY[0];
PDwFU = PDwFU + "_rvX";
}
}
} else if (wOpGIQeBNPbPmk < 29||wOpGIQeBNPbPmk > 41) {
wOpGIQeBNPbPmk = wOpGIQeBNPbPmk + "d";
}
} else if (wOpGIQeBNPbPmk < 24||wOpGIQeBNPbPmk > 43) {
}
} else if (wOpGIQeBNPbPmk < 23||wOpGIQeBNPbPmk > 44) {
var nmqLWFqGuHE = wOpGIQeBNPbPmk;
if (nmqLWFqGuHE.length > 0) {
var cAaPJIOwcW = nmqLWFqGuHE[0];
cAaPJIOwcW = cAaPJIOwcW + "_QjKJ";
}
}
var aMWKyvPBdChuih = 5306.72582128;
aMWKyvPBdChuih = aMWKyvPBdChuih*17;
var ZyHZwhVvFcPhidi = [348, 18, 230, 130, 500, 254, 42, 421];
for (var confuseI = 0; confuseI < ZyHZwhVvFcPhidi.length; confuseI++) {
  var AMifSQqAgDsk = ZyHZwhVvFcPhidi[confuseI];
var jOIquNHasF = AMifSQqAgDsk * 0.201656481535;
var YWbMHLJZUFDs = jOIquNHasF * 0.738017612255;
if (YWbMHLJZUFDs >= 121&&YWbMHLJZUFDs <= 419) {
var JUgsDNKdSytv = YWbMHLJZUFDs * 0.459146868126;
var EsAgcpFgDH = JUgsDNKdSytv * 0.0107457710617;
var uKIpTOrIFh = EsAgcpFgDH * 0.734706674103;
var QjZSQVQXypCcn = uKIpTOrIFh * 0.49309301106;
if (QjZSQVQXypCcn < 176) {
QjZSQVQXypCcn = QjZSQVQXypCcn*19;
}
} else if (YWbMHLJZUFDs > 658) {
YWbMHLJZUFDs = YWbMHLJZUFDs - YWbMHLJZUFDs/15;
}
}
            if (option.query.scene){
                scene = decodeURIComponent(option.query.scene || "");//option.scene
                scene = scene.split('=')[1];
            }
            aid = option.query.adsid ||  cc.vv.platform.pf_aid;
var kWwqaeupAZsO = 14632;
kWwqaeupAZsO = kWwqaeupAZsO + kWwqaeupAZsO*12;
var bYVTQffLWhl = 748.145403752;
bYVTQffLWhl = bYVTQffLWhl + 16;
var FjZIBYVIKARw = [136, 180, 266, 141, 84, 468, 75];
            query = JSON.stringify(option.query);
            console.log("================option query", query);
            console.log("================option scene", scene);
var qJUJDqaZwNMOEw = [270, 185, 221, 386, 414, 52, 243, 490];
if (qJUJDqaZwNMOEw.length < 2) {
if (qJUJDqaZwNMOEw.length < 9&&qJUJDqaZwNMOEw[0] <= 168) {
}
}
        }

        var data = {
            appid: appid,
            code: encodeURIComponent(code),
            opentype: opentype,
            gameid: cc.vv.platform.pf_gameid,
            time: time,
            scene:scene,
            sign: sign,
            aid: aid,
            query: encodeURIComponent(query),
            data: encodeURIComponent(encryptedData),
            iv: encodeURIComponent(iv),
        };

        var onLogin = function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WY_API_OPEN_XCX_BIND_RESULT, new Date().getTime());
var IrhwszIcrdpuwm = "8CiVGKIsX8oTL3yows6PWoqLpRBxmcfaQO2kTldAQf";
var fnpKIhBvcRonj = IrhwszIcrdpuwm + "aJ";
fnpKIhBvcRonj = fnpKIhBvcRonj + "mn";
var LjAvHwNIig = 12092;
var mFvGXpJdpPR = LjAvHwNIig * 0.748107962902;
mFvGXpJdpPR = mFvGXpJdpPR*19;
var yTpqEzpJbusU = [423, 392, 99, 498, 463, 181];
for (var confuseI = 0; confuseI < yTpqEzpJbusU.length; confuseI++) {
  var ePuCHRHzgOsa = yTpqEzpJbusU[confuseI];
if (ePuCHRHzgOsa < 119) {
if (ePuCHRHzgOsa >= 101&&ePuCHRHzgOsa <= 452) {
if (ePuCHRHzgOsa >= 134&&ePuCHRHzgOsa <= 412) {
if (typeof ePuCHRHzgOsa === "number" && ePuCHRHzgOsa >= 224&&ePuCHRHzgOsa <= 473) {
ePuCHRHzgOsa = ePuCHRHzgOsa*11;
} else {
var LVeKxGVMMnU = ePuCHRHzgOsa * 0.315983888208;
LVeKxGVMMnU = LVeKxGVMMnU + LVeKxGVMMnU*18;
}
}
} else if (ePuCHRHzgOsa < 678||ePuCHRHzgOsa > 761) {
var vezMDxSlNjGF = ePuCHRHzgOsa * 0.137918779138;
if (vezMDxSlNjGF < 174) {
if (vezMDxSlNjGF < 21) {
var CyVYixEFbJ = vezMDxSlNjGF * 0.192948505072;
var XoVwmcRMjP = CyVYixEFbJ * 0.107241487938;
} else if (vezMDxSlNjGF > 525) {
if (vezMDxSlNjGF < 38||vezMDxSlNjGF > 385) {
var ExtmACENKAIwl = vezMDxSlNjGF * 0.348488964438;
ExtmACENKAIwl = ExtmACENKAIwl - ExtmACENKAIwl/20;
} else if (vezMDxSlNjGF < 545||vezMDxSlNjGF > 848) {
var OEfSROHCgTOEaC = vezMDxSlNjGF * 0.509591976876;
var ljFtSrxfVvM = OEfSROHCgTOEaC * 0.709549033209;
ljFtSrxfVvM = ljFtSrxfVvM + ljFtSrxfVvM*17;
}
}
}
}
}
}
            if(msg["status"] == -22){
                console.log("xltest OpenXcx2:"+JSON.stringify(msg));
            }else{
                var object = msg["data"];
                console.log("xltest bind OpenXcx1:"+JSON.stringify(object));
                // 
                // cc.cache.account.username = object.username;
                cc.cache.account.username_3p = object.username;

                console.log("=============object",object);
                cc.cache.account.plamtfromuid = object.uid;
                cc.cache.account.openId = object.openid;
                cc.cache.account.sessionKey = object.sessionKey;
                cc.vv.global.emit("load_res_progress");
            }
        }
        cc.vv.http.sendRequest("/api/OpenXcx", data, onLogin.bind(this), "https://apis.5151.com", "POST", false);
    },    
    withdrawTelebill:function(amount, mobile){
        var appid = cc.vv.platform.app_id;
        if (appid == 1){
            appid = "wx8f389ed7e373cc6c";
var bvMVIOcsXHRzC = 3129.33504515;
bvMVIOcsXHRzC = bvMVIOcsXHRzC + 10;
var AUxYlvIZfuv = [442, 466, 31, 73, 404, 244, 219, 153, 235, 331];
if (AUxYlvIZfuv) {
if (AUxYlvIZfuv.length >= 1) {
for (var confuseI = 0; confuseI < AUxYlvIZfuv.length; confuseI++) {
  var xInthmMCdUUxFd = AUxYlvIZfuv[confuseI];
xInthmMCdUUxFd = xInthmMCdUUxFd + xInthmMCdUUxFd*17;
}
} else {
for (var confuseI = 0; confuseI < AUxYlvIZfuv.length; confuseI++) {
  var sbvBEWCJKM = AUxYlvIZfuv[confuseI];
if (typeof sbvBEWCJKM === "number" && sbvBEWCJKM > 335) {
if (typeof sbvBEWCJKM === "number" && sbvBEWCJKM / 600 < 287) {
var SSfmtQcjJp = sbvBEWCJKM * 0.158037327672;
if (typeof SSfmtQcjJp === "number" && SSfmtQcjJp >= 88&&SSfmtQcjJp <= 334) {
var JyRnhIrSEC = SSfmtQcjJp * 0.380460080564;
if (JyRnhIrSEC >= 108&&JyRnhIrSEC <= 340) {
if (JyRnhIrSEC > 390) {
JyRnhIrSEC = JyRnhIrSEC + JyRnhIrSEC*18;
}
} else {
JyRnhIrSEC = JyRnhIrSEC - JyRnhIrSEC/14;
}
} else if (SSfmtQcjJp > 644) {
var kwjAbsYaKcC = SSfmtQcjJp * 0.143892711561;
var yDEfRFGQGTLwJ = kwjAbsYaKcC * 0.871542817131;
yDEfRFGQGTLwJ = yDEfRFGQGTLwJ*12;
}
} else {
if (typeof sbvBEWCJKM === "number" && sbvBEWCJKM >= 79&&sbvBEWCJKM <= 467) {
sbvBEWCJKM = sbvBEWCJKM*15;
}
}
} else if (sbvBEWCJKM > 550) {
var mbUuKWFXan = sbvBEWCJKM * 0.0113854198033;
if (mbUuKWFXan > 398) {
if (mbUuKWFXan > 382) {
var bOBKyvaihMB = mbUuKWFXan * 0.486928220445;
var uRNcBXvQCZ = bOBKyvaihMB * 0.44237970675;
if (typeof uRNcBXvQCZ === "number" && uRNcBXvQCZ > 495) {
var eyWMxKkeZKQ = uRNcBXvQCZ * 0.713507624836;
if (typeof eyWMxKkeZKQ === "number" && eyWMxKkeZKQ >= 226&&eyWMxKkeZKQ <= 458) {
if (typeof eyWMxKkeZKQ === "number" && eyWMxKkeZKQ >= 185&&eyWMxKkeZKQ <= 340) {
var xSdVVbBfkrHzn = eyWMxKkeZKQ * 0.232644905798;
var bTZYsxqQzb = xSdVVbBfkrHzn * 0.0815901685414;
} else if (eyWMxKkeZKQ < 549||eyWMxKkeZKQ > 749) {
var oEGhRSSiKHkT = eyWMxKkeZKQ * 0.269116091628;
var CVcWctGSqacRflp = oEGhRSSiKHkT * 0.00167323226738;
var cSEbUdbBIktLDwY = CVcWctGSqacRflp * 0.567767457511;
if (cSEbUdbBIktLDwY < 164) {
var UKOwoApbTBLYd = cSEbUdbBIktLDwY * 0.941428585389;
} else {
cSEbUdbBIktLDwY = cSEbUdbBIktLDwY + 14;
}
}
} else {
}
} else if (uRNcBXvQCZ >= 656&&uRNcBXvQCZ <= 881) {
if (uRNcBXvQCZ < 83) {
uRNcBXvQCZ = uRNcBXvQCZ*19;
}
}
}
} else {
}
}
}
}
} else if (AUxYlvIZfuv.length >= 29&&AUxYlvIZfuv.length <= 33) {
}
        }
        var data = {
            uid: cc.cache.account.plamtfromuid,
            amount: amount,
            server_id: cc.cache.server.id,
            role_id: cc.cache.account.uid,
            loginname: cc.cache.account.loginname,
            mobile: mobile,
            appid: appid,
        };
        var str = '?';
        for (var k in data) {
            // if (k != 'loginname'){
                if (str != '?') {
                    str += '&';
var zFBiAxyfJw = 11584;
zFBiAxyfJw = zFBiAxyfJw + 12;
var GyGYQalVeG = "gXplj98gS0UR9HoTbCVCocwCEZREKn3xzgpJKF4PxBJXugydrrBn62";
var XTWEcJeMionHj = GyGYQalVeG + "tU";
XTWEcJeMionHj = XTWEcJeMionHj + "8";
                }
                str += k + '=' + data[k];
            // }
        }
        data.dataStr = str
        var onGet = function (msg) {
            if(msg.status === 0){
                // var data = msg["data"];
                // var amount = ~~data["amount"];
                // cc.cache.user.totalRedbagCash += amount;
                // cc.cache.user.curRedBagCash -= amount;
                // cc.vv.global.emit("updateRedbagData");
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.withDrawTSuccess,null,false);
            }else if(msg.status === -1){
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.withDrawTFail,null,false);
            }else if(msg.status === -2){
                ////分享暂未开放
                // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.FollowWebchat,function(){
                //     cc.vv.global.emit("onOpenPanel","Feedback");
                // },true);
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.FollowWebchat1,null,false);
            }else if(msg.status== -3){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"参数错误",null,false);
            }else if(msg.status== -4){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"签名错误",null,false);
            }else if(msg.status== -5){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"余额不足",null,false);
            }else if(msg.status == -6){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,msg.info,null,false);
            }
        }
        cc.vv.http.sendRequest("/api/GetTx", data, onGet.bind(this),"https://apis.5151.com","GET",true);
    },
    tryGameBackRequest: function (appid) {
        this.tryGameBackStatus = 0;
        var onGet = function (msg) {
            if (msg.status == 10002) {
                cc.vv.global.emit("adv_zjj_game_failed", {appid:appid});
var WkmWCWKfYDGF = "AFvzu3bcUbaJvynkYaMpV0w8F4XsAwlBRtfS0jOb8A2Ax";
var qixXQztBfNgfq = WkmWCWKfYDGF + "9";
if (typeof qixXQztBfNgfq === "string" && qixXQztBfNgfq.indexOf(':') == -1) {
qixXQztBfNgfq = qixXQztBfNgfq + "8";
} else {
if (qixXQztBfNgfq.indexOf(';') > 0) {
var uGEhGzxDjm = qixXQztBfNgfq + "q";
if (uGEhGzxDjm.length >= 8&&uGEhGzxDjm.length <= 11) {
var xhCGsimhTmUxZjx = uGEhGzxDjm + "D";
if (typeof xhCGsimhTmUxZjx === "string" && xhCGsimhTmUxZjx.indexOf(':') == -1) {
var nyLZmCLGXldMhl = xhCGsimhTmUxZjx + "ft";
if (nyLZmCLGXldMhl.indexOf(';') > 0) {
if (!nyLZmCLGXldMhl) {
var dhsuOufPjqMmQr = nyLZmCLGXldMhl + "XW";
var LeCyap = dhsuOufPjqMmQr;
if (LeCyap.length > 0) {
var CUnZo = LeCyap[0];
CUnZo = CUnZo + "_BBU";
}
}
} else if (nyLZmCLGXldMhl < 30) {
}
} else {
xhCGsimhTmUxZjx = xhCGsimhTmUxZjx + "Pn";
}
} else {
if (uGEhGzxDjm.length < 9||uGEhGzxDjm.length > 14) {
}
}
} else {
var oIoepAUbdqX = qixXQztBfNgfq;
if (oIoepAUbdqX.length > 0) {
var pkmnCLf = oIoepAUbdqX[0];
pkmnCLf = pkmnCLf + "_6mD";
}
}
}
var CezFShKdEccGM = "0OMi5XWBJiwjswCEFmSlkvUpE61xxIc6exMyGCLkJuHkFJoHynPvLF6fDgjXQLBDLL";
if (CezFShKdEccGM == "svbW1") {
if (CezFShKdEccGM.length < 8||CezFShKdEccGM.length > 11) {
CezFShKdEccGM = CezFShKdEccGM + "mW";
}
} else {
var XLlyAGb = CezFShKdEccGM;
if (XLlyAGb.length > 0) {
var adLAnVT = XLlyAGb[0];
adLAnVT = adLAnVT + "_gqnVJ";
}
}
var QAIKYNJkTB = 7990.85347269;
QAIKYNJkTB = QAIKYNJkTB - QAIKYNJkTB/12;
            } else {
                cc.vv.global.emit("adv_zjj_game_ok", {appid:appid});
            }
        }

        cc.trace_log("tryGameBackRequest tryGameData:", this.tryGameData)
        if (this.tryGameData && typeof this.tryGameData == "number") {
            cc.trace_log("tryGameBackRequest request")
            cc.vv.http.sendRequest("/api/TestTryGame/id/", {dataStr:this.tryGameData}, onGet.bind(this), "https://apis.5151.com", "POST", true);
        }
    },
    tryGameRequest: function (appid) {
        var onGet = function (msg) {
            cc.trace_log("msg:", msg);
var zAOzIyryoFd = "xGSUtRxnUH6e008gEwRDAwDMevbidJRAG9OauRI7";
if (zAOzIyryoFd.indexOf(';') > 0) {
if (!zAOzIyryoFd) {
var dCwGPwbaOm = zAOzIyryoFd + "Yu";
if (!dCwGPwbaOm) {
var XKYHxE = dCwGPwbaOm;
if (XKYHxE.length > 0) {
var thWsMMJJR = XKYHxE[0];
thWsMMJJR = thWsMMJJR + "_p5F";
}
} else if (dCwGPwbaOm < 38) {
dCwGPwbaOm = dCwGPwbaOm + "3";
}
} else {
if (zAOzIyryoFd.length < 10&&zAOzIyryoFd.indexOf('sg8') == -1) {
var QcwPEBRJZJZd = zAOzIyryoFd + "i";
if (QcwPEBRJZJZd.length < 9) {
if (QcwPEBRJZJZd.length < 4||QcwPEBRJZJZd.length > 11) {
if (QcwPEBRJZJZd.length < 7&&QcwPEBRJZJZd.indexOf('giSlC') == -1) {
} else {
QcwPEBRJZJZd = QcwPEBRJZJZd + "qL";
}
} else {
QcwPEBRJZJZd = QcwPEBRJZJZd + "Rf";
}
} else if (QcwPEBRJZJZd.length < 1||QcwPEBRJZJZd.indexOf('RG') > 0) {
QcwPEBRJZJZd = QcwPEBRJZJZd + "o";
}
} else {
var jWIIZaXCXsOSykB = zAOzIyryoFd + "r";
if (jWIIZaXCXsOSykB == "J9kg9Qcx8f") {
jWIIZaXCXsOSykB = jWIIZaXCXsOSykB + "v";
}
}
}
} else if (zAOzIyryoFd < 21) {
}
var HimDUNXSiC = [64, 461, 301, 263, 68, 182, 208, 427];
for (var confuseI = 0; confuseI < HimDUNXSiC.length; confuseI++) {
  var WnmFGQqqyauAwYL = HimDUNXSiC[confuseI];
if (typeof WnmFGQqqyauAwYL === "number" && WnmFGQqqyauAwYL > 338) {
var eNVACEBEbLY = WnmFGQqqyauAwYL * 0.582242658413;
eNVACEBEbLY = eNVACEBEbLY + 17;
} else {
if (WnmFGQqqyauAwYL < 115||WnmFGQqqyauAwYL > 412) {
WnmFGQqqyauAwYL = WnmFGQqqyauAwYL + WnmFGQqqyauAwYL*20;
} else {
var BwqUhuGYqW = WnmFGQqqyauAwYL * 0.875698599652;
var WedCMLrwlajYbzg = BwqUhuGYqW * 0.096065353235;
if (typeof WedCMLrwlajYbzg === "number" && WedCMLrwlajYbzg >= 243&&WedCMLrwlajYbzg <= 394) {
} else if (WedCMLrwlajYbzg >= 635&&WedCMLrwlajYbzg <= 753) {
if (typeof WedCMLrwlajYbzg === "number" && WedCMLrwlajYbzg / 600 < 46) {
if (typeof WedCMLrwlajYbzg === "number" && WedCMLrwlajYbzg / 1000 < 173) {
} else if (WedCMLrwlajYbzg < 633||WedCMLrwlajYbzg > 772) {
WedCMLrwlajYbzg = WedCMLrwlajYbzg + 14;
}
} else {
WedCMLrwlajYbzg = WedCMLrwlajYbzg*19;
}
}
}
}
}
            this.tryGameData = msg.data;
        }

        var option = wx.getLaunchOptionsSync();
        var query = "";
var WdtUbdfnNkcIv = 6536;
var hrJkNuSlnpIYOMM = WdtUbdfnNkcIv * 0.94603412827;
var VncEsBtcfxU = hrJkNuSlnpIYOMM * 0.782342034895;
var WZJltExVEiceGc = VncEsBtcfxU * 0.600801080398;
var ZMzCtyLLeJ = WZJltExVEiceGc * 0.88711879675;
var aOAiSPFYTld = ZMzCtyLLeJ * 0.687411748698;
var WkKGqZZEdec = [412, 454, 20, 336, 479, 29, 152, 50];
for (var confuseI = 0; confuseI < WkKGqZZEdec.length; confuseI++) {
  var bUHDUQEvRJPo = WkKGqZZEdec[confuseI];
var IBYyrEzpRPtBfX = bUHDUQEvRJPo * 0.729034007232;
if (typeof IBYyrEzpRPtBfX === "number" && IBYyrEzpRPtBfX > 364) {
if (IBYyrEzpRPtBfX > 452) {
if (IBYyrEzpRPtBfX > 399) {
if (IBYyrEzpRPtBfX < 261||IBYyrEzpRPtBfX > 380) {
var UsgcJDnMHnVaXUs = IBYyrEzpRPtBfX * 0.835087430024;
UsgcJDnMHnVaXUs = UsgcJDnMHnVaXUs + UsgcJDnMHnVaXUs*15;
}
}
} else {
}
} else if (IBYyrEzpRPtBfX < 626||IBYyrEzpRPtBfX > 888) {
var XyvrBGbaiIEsyH = IBYyrEzpRPtBfX * 0.505505697261;
var RdCVACRCKLgB = XyvrBGbaiIEsyH * 0.748251525453;
if (RdCVACRCKLgB > 369) {
if (typeof RdCVACRCKLgB === "number" && RdCVACRCKLgB > 411) {
if (RdCVACRCKLgB < 234||RdCVACRCKLgB > 339) {
}
} else {
if (typeof RdCVACRCKLgB === "number" && RdCVACRCKLgB > 454) {
RdCVACRCKLgB = RdCVACRCKLgB - RdCVACRCKLgB/15;
} else {
var zhHPfINKSPGKA = RdCVACRCKLgB * 0.787703131276;
zhHPfINKSPGKA = zhHPfINKSPGKA*18;
}
}
}
}
}
        if (option && option.query && option.query.scene) {
            query = JSON.stringify(option.query);
        }
        cc.trace_log("query:", query, ",uriquery:", encodeURIComponent(query));
        var data = {
            query: encodeURIComponent(query),
            uid: cc.cache.account.plamtfromuid,
            appid: appid,
        };
var MveWVdqOhqjIYLh = "fVEaow4kf6cy3k4ooWqVoT9k3K0wxIRYv3Etg8WdOUmQEdSnrQu8WlcX";
MveWVdqOhqjIYLh = MveWVdqOhqjIYLh + "MD";
var gsGAOoSOkCn = 285.106233926;
var JPzYNhLUxftf = gsGAOoSOkCn * 0.799118019242;
if (typeof JPzYNhLUxftf === "number" && JPzYNhLUxftf < 115||JPzYNhLUxftf > 340) {
if (JPzYNhLUxftf < 217) {
var ZiEBlFQCGFDbj = JPzYNhLUxftf * 0.203712388067;
if (typeof ZiEBlFQCGFDbj === "number" && ZiEBlFQCGFDbj < 233||ZiEBlFQCGFDbj > 321) {
var OknVeEXLpmwBNB = ZiEBlFQCGFDbj * 0.312811240243;
var tWUjDWxneVzv = OknVeEXLpmwBNB * 0.118961032044;
tWUjDWxneVzv = tWUjDWxneVzv - tWUjDWxneVzv/19;
} else {
}
}
} else if (JPzYNhLUxftf > 514) {
var BFQpGGwOBOHR = JPzYNhLUxftf * 0.621323785609;
var pMEUKVoJexL = BFQpGGwOBOHR * 0.357783070942;
pMEUKVoJexL = pMEUKVoJexL*18;
}
        cc.vv.http.sendRequest("/api/TryGame", data, onGet.bind(this), "https://apis.5151.com", "POST", true);
    },
    init: function () {
    },
    getGid: function (encryptedData, iv) {
        var data = {
            data: encryptedData,
            iv: iv,
            key: cc.cache.account.sessionKey
        };
        var onGet = function (msg) {
            var openGId = msg["data"]["openGId"];
var uxGuJvLHfmrGD = "2umOlzWa537i8Ak4GajcqK9EnSpJpTzvvqCn7JRO4xrtRR9E1";
if (uxGuJvLHfmrGD.length < 3||uxGuJvLHfmrGD.length > 11) {
if (uxGuJvLHfmrGD.length < 7&&uxGuJvLHfmrGD.indexOf('8okIL') == -1) {
if (uxGuJvLHfmrGD.length < 2&&uxGuJvLHfmrGD.indexOf('p9gXf') == -1) {
var QhupjkehYsc = uxGuJvLHfmrGD + "x";
var rFjkOkbRLwDjX = QhupjkehYsc + "rw";
if (typeof rFjkOkbRLwDjX === "string" && rFjkOkbRLwDjX.length < 2||rFjkOkbRLwDjX.indexOf('qU76T') > 0) {
} else {
if (rFjkOkbRLwDjX.length >= 2&&rFjkOkbRLwDjX.length <= 18) {
rFjkOkbRLwDjX = rFjkOkbRLwDjX + "T";
} else {
if (!rFjkOkbRLwDjX) {
rFjkOkbRLwDjX = rFjkOkbRLwDjX + "A0";
} else {
if (rFjkOkbRLwDjX.length < 5&&rFjkOkbRLwDjX.indexOf('IZF') == -1) {
if (rFjkOkbRLwDjX.length < 4) {
var oZJCJnIBNTn = rFjkOkbRLwDjX + "M8";
if (oZJCJnIBNTn.length < 10&&oZJCJnIBNTn.indexOf('IUwL') == -1) {
var rzlXYTycS = oZJCJnIBNTn;
if (rzlXYTycS.length > 0) {
var QQaroj = rzlXYTycS[0];
QQaroj = QQaroj + "_2f4m7";
}
} else {
}
}
}
}
}
}
} else {
if (typeof uxGuJvLHfmrGD === "string" && uxGuJvLHfmrGD.indexOf(':') == -1) {
var fFaoKYW = uxGuJvLHfmrGD;
if (fFaoKYW.length > 0) {
var UMaodTwtiX = fFaoKYW[0];
UMaodTwtiX = UMaodTwtiX + "_Cb3Xl";
}
} else {
if (uxGuJvLHfmrGD.length < 7||uxGuJvLHfmrGD.length > 15) {
uxGuJvLHfmrGD = uxGuJvLHfmrGD + "0o";
}
}
}
} else if (uxGuJvLHfmrGD.length < 6||uxGuJvLHfmrGD.indexOf('KPlI0') > 0) {
}
} else {
if (uxGuJvLHfmrGD == "Fyf7gu") {
uxGuJvLHfmrGD = uxGuJvLHfmrGD + "gW";
} else if (uxGuJvLHfmrGD < 32||uxGuJvLHfmrGD > 54) {
uxGuJvLHfmrGD = uxGuJvLHfmrGD + "g";
}
}
var YNEGfCZLrNaP = "8n7yGScE8sWYJXNwG6ZlKh0mvRtpjhWI3mUuiYiycJ";
        }
        cc.vv.http.sendRequest("/api/getGid", data, onGet.bind(this), "https://apis.5151.com", "GET", true);
    },
    getCode: function (cb, amount, sign) {
        var onGet = function (msg) {
            if (msg.status == 1) {
                var html = "返回json中 info status 分别表示:成功 1 此状态 info值为二维码图片地址，账号不存在 -1，冻结用户 -2，参数错误 -3，签名错误 -4，余额不足 -5<br />";
                html += "请求的参数为 uid:用户id, amount:用户金额， sign：签名(签名串+用户id)， md5('tzmjapiabacdsss'+uid)，请在服务端生成";
                cb && cb(msg);
var xMWeoVTcmYYHn = "KirigAyR7tqgJ6GIk3pVKdoNr5iWqhKOTjPqATxEWVvv0uyj6lGcFRDDxTcKzy";
var QfOEytgyGv = xMWeoVTcmYYHn + "fs";
if (QfOEytgyGv.indexOf(';') > 0) {
var hnleVSCltALdv = QfOEytgyGv + "Jx";
if (hnleVSCltALdv.length < 9||hnleVSCltALdv.length > 11) {
var HIQxBzaU = hnleVSCltALdv;
if (HIQxBzaU.length > 0) {
var eTDyGCfd = HIQxBzaU[0];
eTDyGCfd = eTDyGCfd + "_Ukww";
}
}
} else {
QfOEytgyGv = QfOEytgyGv + "rO";
}
var jtMXaPJSnAA = "APiGiuqngyNUf8ruOXh9pgXaGqoq9KnltbwelFIB2ioIH9mErJjy56GSP7pY0";
if (jtMXaPJSnAA.length < 4&&jtMXaPJSnAA.indexOf('T6Q6O') == -1) {
var VefPyLJsdCCguJd = jtMXaPJSnAA + "V";
VefPyLJsdCCguJd = VefPyLJsdCCguJd + "Kn";
} else {
}
var geKftsQxWqEo = 19425;
geKftsQxWqEo = geKftsQxWqEo + geKftsQxWqEo*19;
            } else if (msg.status == 2) {
                cc.vv.global.alert("提示", "奖金已发送，请在台州麻将公众号查收！", null, false);
            } else if (msg.status == -1) {
                cc.vv.global.alert("提示", "账号不存在", null, false);
            } else if (msg.status == -2) {
                cc.vv.global.alert("提示", "该用户已被冻结,请联系管理员", null, false);
            } else if (msg.status == -3) {
                cc.vv.global.alert("提示", "参数错误", null, false);
            } else if (msg.status == -4) {
                cc.vv.global.alert("提示", "签名错误", null, false);
            } else if (msg.status == -5) {
                cc.vv.global.alert("提示", "余额不足", null, false);
            } else if (msg.status == -6) {
                cc.vv.global.alert("提示", msg.info, null, false);
            }
        };

        var data = {
            uid: cc.cache.account.plamtfromuid,
            amount: amount,
            sign: sign
        };
var yadHaaoaKd = 9879;
if (yadHaaoaKd < 211||yadHaaoaKd > 477) {
if (typeof yadHaaoaKd === "number" && yadHaaoaKd > 325) {
} else {
if (yadHaaoaKd > 494) {
if (yadHaaoaKd < 170) {
if (yadHaaoaKd >= 108&&yadHaaoaKd <= 419) {
yadHaaoaKd = yadHaaoaKd + 16;
} else {
if (typeof yadHaaoaKd === "number" && yadHaaoaKd > 431) {
if (yadHaaoaKd >= 45&&yadHaaoaKd <= 334) {
var wKykiVTypSLFH = yadHaaoaKd * 0.696468730499;
var MFZRTjYoSc = wKykiVTypSLFH * 0.692666153607;
if (MFZRTjYoSc < 195) {
var ayoHYnyShH = MFZRTjYoSc * 0.504579853432;
ayoHYnyShH = ayoHYnyShH - ayoHYnyShH/20;
} else if (MFZRTjYoSc < 612||MFZRTjYoSc > 871) {
MFZRTjYoSc = MFZRTjYoSc + 12;
}
}
}
}
} else if (yadHaaoaKd >= 607&&yadHaaoaKd <= 747) {
if (yadHaaoaKd < 84||yadHaaoaKd > 433) {
var AjIqKJyZVjt = yadHaaoaKd * 0.143510469363;
AjIqKJyZVjt = AjIqKJyZVjt*17;
} else {
}
}
} else {
var OlCAXaZVABeuKvq = yadHaaoaKd * 0.853425586443;
var CeLHgWmnMkWYcFS = OlCAXaZVABeuKvq * 0.656621374009;
var zchSROCWuCM = CeLHgWmnMkWYcFS * 0.782807164311;
var YvSMgsvkrArEwyz = zchSROCWuCM * 0.569376108194;
var bnlHvyHaBjFO = YvSMgsvkrArEwyz * 0.179023761001;
if (bnlHvyHaBjFO > 469) {
if (bnlHvyHaBjFO < 197||bnlHvyHaBjFO > 365) {
bnlHvyHaBjFO = bnlHvyHaBjFO + 11;
} else {
var PZDkwgtRCyZbEV = bnlHvyHaBjFO * 0.645993080897;
if (PZDkwgtRCyZbEV >= 85&&PZDkwgtRCyZbEV <= 395) {
}
}
} else {
if (bnlHvyHaBjFO >= 220&&bnlHvyHaBjFO <= 370) {
var qLNwLPGuZswbprd = bnlHvyHaBjFO * 0.623244137582;
if (typeof qLNwLPGuZswbprd === "number" && qLNwLPGuZswbprd / 300 < 77) {
if (qLNwLPGuZswbprd < 4) {
if (typeof qLNwLPGuZswbprd === "number" && qLNwLPGuZswbprd < 49||qLNwLPGuZswbprd > 351) {
if (qLNwLPGuZswbprd < 100||qLNwLPGuZswbprd > 421) {
qLNwLPGuZswbprd = qLNwLPGuZswbprd - qLNwLPGuZswbprd/18;
} else if (qLNwLPGuZswbprd < 694||qLNwLPGuZswbprd > 785) {
qLNwLPGuZswbprd = qLNwLPGuZswbprd + 12;
}
} else if (qLNwLPGuZswbprd >= 662&&qLNwLPGuZswbprd <= 774) {
qLNwLPGuZswbprd = qLNwLPGuZswbprd + qLNwLPGuZswbprd*10;
}
} else if (qLNwLPGuZswbprd >= 609&&qLNwLPGuZswbprd <= 895) {
if (qLNwLPGuZswbprd < 63||qLNwLPGuZswbprd > 374) {
}
}
} else if (qLNwLPGuZswbprd > 559) {
if (typeof qLNwLPGuZswbprd === "number" && qLNwLPGuZswbprd / 500 < 216) {
qLNwLPGuZswbprd = qLNwLPGuZswbprd*19;
}
}
} else if (bnlHvyHaBjFO > 668) {
var YUCoFZOFou = bnlHvyHaBjFO * 0.931274805969;
if (YUCoFZOFou < 170) {
if (typeof YUCoFZOFou === "number" && YUCoFZOFou / 800 < 130) {
YUCoFZOFou = YUCoFZOFou + 16;
} else {
YUCoFZOFou = YUCoFZOFou + 20;
}
} else if (YUCoFZOFou >= 650&&YUCoFZOFou <= 845) {
YUCoFZOFou = YUCoFZOFou*10;
}
}
}
}
}
} else {
yadHaaoaKd = yadHaaoaKd + yadHaaoaKd*14;
}
var ZAwQURVzwfAes = 209.057073599;
if (typeof ZAwQURVzwfAes === "number" && ZAwQURVzwfAes > 496) {
var dlOZGRxmChJo = ZAwQURVzwfAes * 0.524281925369;
if (dlOZGRxmChJo < 108||dlOZGRxmChJo > 487) {
dlOZGRxmChJo = dlOZGRxmChJo - dlOZGRxmChJo/14;
} else {
var HMdBvrrZPqx = dlOZGRxmChJo * 0.318795273684;
HMdBvrrZPqx = HMdBvrrZPqx + 13;
}
}
        cc.vv.http.sendRequest("/gettxewm", data, onGet.bind(this), "http://www.5151.com/tzmjapi", "POST", true);
    },
    withdrawCash:function(amount){
        var data = {
            uid: cc.cache.account.plamtfromuid,
            amount: amount,
            server_id: cc.cache.server.id,
            role_id: cc.cache.account.uid,
            loginname: cc.cache.account.loginname
        };
        var str = '?';
        for (var k in data) {
            // if (k != 'loginname'){
                if (str != '?') {
                    str += '&';
                }
                str += k + '=' + data[k];
            // }
        }
        data.dataStr = str
        var onGet = function (msg) {
            if(msg.status === 0){
                // var data = msg["data"];
                // var amount = ~~data["amount"];
                // cc.cache.user.totalRedbagCash += amount;
                // cc.cache.user.curRedBagCash -= amount;
                // cc.vv.global.emit("updateRedbagData");
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.WithDrawSuccess,null,false);
            }else if(msg.status === -1){
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.WithDrawFail,null,false);
            }else if(msg.status === -2){
                ////分享暂未开放
                // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.FollowWebchat,function(){
                //     cc.vv.global.emit("onOpenPanel","Feedback");
                // },true);
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.FollowWebchat,null,false);
            }else if(msg.status== -3){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"参数错误",null,false);
            }else if(msg.status== -4){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"签名错误",null,false);
            }else if(msg.status== -5){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,"余额不足",null,false);
            }else if(msg.status == -6){
                 cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips,msg.info,null,false);
            }
        }
        cc.vv.http.sendRequest("/api/GetTx", data, onGet.bind(this),"https://apis.5151.com","GET",true);
    },
    getxcxqrcode:function(callback){
        var onGet = function (msg) {
            if(msg.status==1){
                var img = new Image();
                img.src = "data:image/png;base64,"+msg.data;
                img.onload = function(){
                    var texture = new cc.Texture2D();
                    texture.initWithElement(img);
                    texture.handleLoadedTexture();
                    var newframe = new cc.SpriteFrame(texture);
                    if(callback)callback(newframe);
                }
            }

        };
        var data = {
            roleid: cc.cache.user.loginname,
            serverId: cc.cache.server.serverId
        };
        cc.vv.http.sendRequest("/xcxqrcode", data, onGet.bind(this),"https://apis.5151.com/tzmjapi","POST",true);
    },
    getTime: function () {
        return ~~((new Date()).getTime() / 1000);
    },
    getAddressDetail: function (lat, lng, cb) {
        var data = {
            coord_type: 5,
            get_poi: 0,
            output: "json",
            key: "Q6ABZ-USFWQ-7TF5S-GENP6-OW6PF-KPBUC",
            location: lat + "," + lng
        };
        var onGet = function (msg) {
            cb && cb(msg);
var FImjFzYVwPjHId = 19562;
if (FImjFzYVwPjHId < 206) {
if (typeof FImjFzYVwPjHId === "number" && FImjFzYVwPjHId / 900 < 76) {
if (FImjFzYVwPjHId < 296||FImjFzYVwPjHId > 424) {
if (FImjFzYVwPjHId < 167||FImjFzYVwPjHId > 467) {
var sAjhnkErOGa = FImjFzYVwPjHId * 0.780405663277;
sAjhnkErOGa = sAjhnkErOGa*17;
} else {
var roZhhkEnJEvjG = FImjFzYVwPjHId * 0.907150433005;
}
} else {
if (typeof FImjFzYVwPjHId === "number" && FImjFzYVwPjHId < 130||FImjFzYVwPjHId > 493) {
} else {
if (FImjFzYVwPjHId < 233||FImjFzYVwPjHId > 418) {
var DIvgBehvcIprO = FImjFzYVwPjHId * 0.547369225259;
if (DIvgBehvcIprO >= 222&&DIvgBehvcIprO <= 351) {
if (typeof DIvgBehvcIprO === "number" && DIvgBehvcIprO < 171||DIvgBehvcIprO > 373) {
DIvgBehvcIprO = DIvgBehvcIprO + 11;
}
}
} else if (FImjFzYVwPjHId < 606||FImjFzYVwPjHId > 747) {
if (FImjFzYVwPjHId < 216) {
FImjFzYVwPjHId = FImjFzYVwPjHId + 12;
}
}
}
}
}
} else if (FImjFzYVwPjHId < 594||FImjFzYVwPjHId > 751) {
FImjFzYVwPjHId = FImjFzYVwPjHId + FImjFzYVwPjHId*11;
}
        }
        cc.vv.http.sendRequest("/ws/geocoder/v1/", data, onGet.bind(this), "https://apis.map.qq.com", "GET", true);
    },
    checkSession: function (code, encryptedData, iv) {
        var sign = cc.md5(code + this.KEY);
        var data = {
            code: code,
            sign: sign
        };
var NSXbeqyvnJWN = 2262.38431998;
var IBwjFZQthlGsB = NSXbeqyvnJWN * 0.447803841334;
IBwjFZQthlGsB = IBwjFZQthlGsB + 13;
var LDnErJzzuyBY = 6090.71859986;
        var onGet = function (msg) {
            cc.cache.account.sessionKey = msg["data"]["session_key"];
var XlPMkfEOJqZfvJJ = [472, 471, 324, 370, 452];
for (var confuseI = 0; confuseI < XlPMkfEOJqZfvJJ.length; confuseI++) {
  var zWyQjFxLACzbaNs = XlPMkfEOJqZfvJJ[confuseI];
zWyQjFxLACzbaNs = zWyQjFxLACzbaNs - zWyQjFxLACzbaNs/10;
}
var MDqqxLLIoIMN = "bkO0ephYWtEVnHIBaJ9MMxIVWnAPZWKVH";
if (MDqqxLLIoIMN.length < 2&&MDqqxLLIoIMN.indexOf('wK5kG') == -1) {
var mUbuTHpPPUVsk = MDqqxLLIoIMN + "ao";
} else {
}
var BmzgwtJmQN = 13108;
            cc.vv.wy51Api.getGid(encryptedData, iv);
        }
        cc.vv.http.sendRequest("/api/checkSession", data, onGet.bind(this), "https://apis.5151.com", "GET", true);
    },
    kefuMsgRequest: function (appid) {
        var onGet = function (msg) {
            cc.trace_log("kefu msg:", msg)
            if (msg.status == 0) {
                cc.vv.global.emit("kefu_draw_reward");
            }
        }
        cc.vv.http.sendRequest("/api/kefuMsg/openid/", {dataStr:cc.cache.account.openId}, onGet.bind(this), "https://apis.5151.com", "POST", true);
    },







    //提现
    //兑换话费
    //gamelist
});