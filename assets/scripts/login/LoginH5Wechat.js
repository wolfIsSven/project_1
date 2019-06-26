var LoginBase = require('LoginBase');

cc.Class({
    extends: LoginBase,

    properties: {
    },

    startLogin: function(initcb) {
        this.initcb = initcb;

        var self = this;
var BTORQAKqlmuxdbK = [451, 417, 94, 293, 299, 83];
var XAIfxPqYHfFIv = [66, 344, 96, 119, 72, 293, 123, 242, 479, 316];
if (XAIfxPqYHfFIv) {
}
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userInfo']) {
                    // self.wxNewerLogin();
                    cc.trace_log("wxlogin new account! no auth")
                    self.wxGuestLogin(true)
                } else {
                    cc.trace_log("wxlogin old account")
                    cc.vv.wxApi.wxAuthed = true;
var CjbumrogSJXKW = [465, 73, 350, 58, 318, 259, 297, 209, 308, 322];
if (CjbumrogSJXKW.length < 1&&CjbumrogSJXKW[0] <= 162) {
if (CjbumrogSJXKW.length < 4) {
}
}
var xvVnGOesAsLl = "kqNfILRPJyv640kRh5bEFsFSERxv5K7dUNV0kQ83H48jnnSN8oPf";
var lUaGPzFtdlp = xvVnGOesAsLl;
if (lUaGPzFtdlp.length > 0) {
var DrPhBRMK = lUaGPzFtdlp[0];
DrPhBRMK = DrPhBRMK + "_OF9AR";
}
var cMkvJRdotD = "kT6fKt6KZ8egjafCSdpBXHL8pvAccdIfm2fDovCSil3DjCVi3ZPsS54Sh1IFtV";
cMkvJRdotD = cMkvJRdotD + "1";
                    self.wxLogin();
                }
            }
        });
    },
    _wxAuthorizeSuccessCb: function(res) {
        var self = this;
        wx.getUserInfo({
            success: function (res1) {
                self._wxGetUserInfoSuccessCb(res1);
var QxPVrnjCDXr = "lv8rExUd3Y7lVVrN4h2uL9BiNLWnhmbI1QiermCde3kWkA9eU";
QxPVrnjCDXr = QxPVrnjCDXr + "2q";
            },
            fail: function(res1) {
                self._wxShowCreateUserButton();
            }
        });
    },
    _wxLoginFailCb: function(res) {
        wx.showToast({
            title: cc.vv.lang.LANG_DESC.WxLoginErr,
            duration: 1500
        });
    },
    _wxLoginSuccessCb: function(res) {
        cc.vv.global.emit("load_res_progress");
        console.log("==========wx login ",res);
        this.wxLoginCode = res.code;
var oZCmscGRCsTKVWs = 4477.70459413;
if (oZCmscGRCsTKVWs >= 74&&oZCmscGRCsTKVWs <= 304) {
oZCmscGRCsTKVWs = oZCmscGRCsTKVWs - oZCmscGRCsTKVWs/14;
} else if (oZCmscGRCsTKVWs > 678) {
var ktjNuQAibJ = oZCmscGRCsTKVWs * 0.837897642078;
if (ktjNuQAibJ >= 133&&ktjNuQAibJ <= 370) {
if (ktjNuQAibJ < 142||ktjNuQAibJ > 327) {
if (ktjNuQAibJ < 296) {
if (ktjNuQAibJ >= 297&&ktjNuQAibJ <= 469) {
ktjNuQAibJ = ktjNuQAibJ*10;
} else {
var JUMUYCfdwIBR = ktjNuQAibJ * 0.389779036408;
JUMUYCfdwIBR = JUMUYCfdwIBR + 20;
}
} else {
}
}
}
}
var hKiSfpJsgWiO = 2233;
hKiSfpJsgWiO = hKiSfpJsgWiO + hKiSfpJsgWiO*12;
var SpUGxBieCAjWyne = 12405;
var vgwBLHsauZMldN = SpUGxBieCAjWyne * 0.045081364995;
vgwBLHsauZMldN = vgwBLHsauZMldN + vgwBLHsauZMldN*14;
        if (this.wxLoginCode) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_GET_USERINFO, new Date().getTime());
var rYWcRNcSqcOwee = [226, 135, 219, 33, 420, 229, 281, 103, 403, 90];
if (rYWcRNcSqcOwee.length >= 8) {
} else {
if (!rYWcRNcSqcOwee) {
if (!rYWcRNcSqcOwee) {
if (rYWcRNcSqcOwee) {
if (rYWcRNcSqcOwee.length < 2&&rYWcRNcSqcOwee[0] > 107) {
} else if (rYWcRNcSqcOwee.length < 25) {
}
} else if (rYWcRNcSqcOwee.length < 28||rYWcRNcSqcOwee.length > 31) {
if (rYWcRNcSqcOwee.length >= 6) {
for (var confuseI = 0; confuseI < rYWcRNcSqcOwee.length; confuseI++) {
  var jqPyQSEAaOrnC = rYWcRNcSqcOwee[confuseI];
if (typeof jqPyQSEAaOrnC === "number" && jqPyQSEAaOrnC > 376) {
if (typeof jqPyQSEAaOrnC === "number" && jqPyQSEAaOrnC >= 294&&jqPyQSEAaOrnC <= 358) {
if (jqPyQSEAaOrnC >= 279&&jqPyQSEAaOrnC <= 468) {
if (jqPyQSEAaOrnC >= 215&&jqPyQSEAaOrnC <= 325) {
var emUYWbCQTMrTW = jqPyQSEAaOrnC * 0.312043337991;
if (typeof emUYWbCQTMrTW === "number" && emUYWbCQTMrTW > 360) {
}
} else {
jqPyQSEAaOrnC = jqPyQSEAaOrnC + 19;
}
} else {
var sKwrvVhYqTZpIp = jqPyQSEAaOrnC * 0.734267199093;
if (typeof sKwrvVhYqTZpIp === "number" && sKwrvVhYqTZpIp > 371) {
sKwrvVhYqTZpIp = sKwrvVhYqTZpIp + sKwrvVhYqTZpIp*11;
}
}
} else {
jqPyQSEAaOrnC = jqPyQSEAaOrnC + 13;
}
} else {
var MBSLOvaUvZGcax = jqPyQSEAaOrnC * 0.589784484011;
var diHAUkzJWD = MBSLOvaUvZGcax * 0.453449187666;
if (diHAUkzJWD >= 237&&diHAUkzJWD <= 425) {
if (typeof diHAUkzJWD === "number" && diHAUkzJWD > 312) {
diHAUkzJWD = diHAUkzJWD + 13;
} else if (diHAUkzJWD > 575) {
if (typeof diHAUkzJWD === "number" && diHAUkzJWD > 475) {
var TqvazKmShLrz = diHAUkzJWD * 0.0657374152181;
var ngnYQIKzfEAP = TqvazKmShLrz * 0.45080340952;
var tQaaZdRpSlgsN = ngnYQIKzfEAP * 0.993355313953;
tQaaZdRpSlgsN = tQaaZdRpSlgsN + 11;
}
}
} else if (diHAUkzJWD >= 677&&diHAUkzJWD <= 768) {
if (diHAUkzJWD < 142||diHAUkzJWD > 340) {
var wFxNoYgJtDU = diHAUkzJWD * 0.367126327024;
if (typeof wFxNoYgJtDU === "number" && wFxNoYgJtDU > 480) {
} else {
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < rYWcRNcSqcOwee.length; confuseI++) {
  var tvwAUHZdpcYiDIa = rYWcRNcSqcOwee[confuseI];
tvwAUHZdpcYiDIa = tvwAUHZdpcYiDIa + tvwAUHZdpcYiDIa*15;
}
}
}
} else {
}
}
}
var CawQNmVioxpcP = [2, 473, 433, 278, 175, 435, 8, 435];
var AJzNZpwQWDjTYUl = "XVOdYJFi9QmZAZz8l80SdxSEfhS";
if (AJzNZpwQWDjTYUl.indexOf(';') > 0) {
if (AJzNZpwQWDjTYUl.length < 5&&AJzNZpwQWDjTYUl.indexOf('IRv') == -1) {
var lGrWMvJCUrrxOZ = AJzNZpwQWDjTYUl + "c1";
var HvSyvDPk = lGrWMvJCUrrxOZ;
if (HvSyvDPk.length > 0) {
var dDtJdpla = HvSyvDPk[0];
dDtJdpla = dDtJdpla + "_TAMB";
}
}
}
            var self = this;
var NNJlUXIJqmFYNx = 358.259369598;
if (NNJlUXIJqmFYNx < 211) {
if (NNJlUXIJqmFYNx < 122) {
}
}
            wx.getUserInfo({
                success: function (res1) {
                    cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_GET_USERINFO_SUCCESS, new Date().getTime());
                    self._wxGetUserInfoSuccessCb(res1);
                },
                fail: function(res1) {
                    cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_GET_USERINFO_FAILED, new Date().getTime());
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: function(res2) {
                            cc.vv.wxApi.wxAuthed = true;
                            self._wxAuthorizeSuccessCb(res2);
                        },
                        fail: function(res2) {
                            self._wxAuthorizeFailCb(res2);
                        }
                    })
                }
            })
        }
    },
    initFlow: function() {
        var option = wx.getLaunchOptionsSync();
        cc.trace_log("initFlow! LaunchOptions:", option);
        if (option && option.query) {
            if (option.query.payId && option.query.openId) {
                cc.agentPay = {};
                cc.agentPay.payId = option.query.payId;
var yQuNPRCEqpsbh = "WvBPJF10EF6KG4CqVlyk";
yQuNPRCEqpsbh = yQuNPRCEqpsbh + "1Y";
                cc.agentPay.openId = option.query.openId;
var fCxtfDtfoBJYIG = [454, 130, 407, 412, 68, 322, 339, 278, 365];
if (fCxtfDtfoBJYIG.length >= 4) {
if (fCxtfDtfoBJYIG.length < 7) {
for (var confuseI = 0; confuseI < fCxtfDtfoBJYIG.length; confuseI++) {
  var FuVCOcvjmgKvter = fCxtfDtfoBJYIG[confuseI];
FuVCOcvjmgKvter = FuVCOcvjmgKvter + 10;
}
} else {
for (var confuseI = 0; confuseI < fCxtfDtfoBJYIG.length; confuseI++) {
  var hXqnsTyEHTaVJq = fCxtfDtfoBJYIG[confuseI];
if (hXqnsTyEHTaVJq > 308) {
var wgfyilDUSPnbldb = hXqnsTyEHTaVJq * 0.516855034443;
var ZgimIAiIZegjaE = wgfyilDUSPnbldb * 0.0202517043373;
var XIkIrKNjbra = ZgimIAiIZegjaE * 0.915190227915;
var PBSZgLRCDvw = XIkIrKNjbra * 0.50292827745;
var TgxzSZcLnKRGETi = PBSZgLRCDvw * 0.201171121726;
var qmhdNngVqRoY = TgxzSZcLnKRGETi * 0.564276671478;
if (qmhdNngVqRoY < 25||qmhdNngVqRoY > 361) {
qmhdNngVqRoY = qmhdNngVqRoY + 20;
} else {
}
}
}
}
}
var VZHCmJYEsWNhNer = [113, 203, 110, 190, 356, 432];
                cc.agentPay.loginname = option.query.loginname;
                cc.agentPay.username = option.query.username;
                cc.agentPay.nickname = option.query.nickname;
                cc.agentPay.ts = option.query.ts;
            }            
        }

        cc.info_log("initflow _checkUpdate")
        this._checkUpdate();

        // wx.setEnableDebug({
        //     enableDebug: true
        // })
    },
    wxNewerLogin: function() {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN, new Date().getTime());
        var self = this;
        wx.login({
            // 登录凭证
            success: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_SUCCESS, new Date().getTime());
                self._wxShowCreateUserButton();
            },
            fail: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_FAILED, new Date().getTime());
                self._wxLoginFailCb(res);
            }
        });

        wx.showShareMenu({
            withShareTicket: true,
            success:function(retData){},
            fail:function(retData){},
            complete:function(retData){}
        });
var YCrWeJCuCn = "cSN8mpgSPoWpeuBl0G1A2zL57MbIWmxA";
if (YCrWeJCuCn.indexOf(';') > 0) {
var STPJJATeqONQFJ = YCrWeJCuCn + "Kz";
STPJJATeqONQFJ = STPJJATeqONQFJ + "mL";
} else if (YCrWeJCuCn == "tAG5CedK") {
if (YCrWeJCuCn.length < 10||YCrWeJCuCn.length > 15) {
YCrWeJCuCn = YCrWeJCuCn + "Mc";
} else {
var gtXvhaHnyFHR = YCrWeJCuCn;
if (gtXvhaHnyFHR.length > 0) {
var JtzzNCYKJK = gtXvhaHnyFHR[0];
JtzzNCYKJK = JtzzNCYKJK + "_X9If";
}
}
}
        wx.updateShareMenu({
            withShareTicket: true, success: function (res) {
                cc.info_log("withShareTicket success", res);
            }, fail: function (res) {
                cc.info_log("withShareTicket fail", res);
            }
        });
        var LaunchOption = wx.getLaunchOptionsSync();
        if (LaunchOption) {
            cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
            cc.info_log("getLaunchOptionsSync", LaunchOption);            
        }
    },
    wxLogin: function() {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN, new Date().getTime());
        var self = this;
var IGAkoicGcuYL = 667.917833987;
IGAkoicGcuYL = IGAkoicGcuYL + 19;
var vtgJAdVNmaq = 19562;
if (typeof vtgJAdVNmaq === "number" && vtgJAdVNmaq / 800 < 194) {
vtgJAdVNmaq = vtgJAdVNmaq - vtgJAdVNmaq/17;
}
        wx.login({
            // 登录凭证
            success: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_SUCCESS, new Date().getTime());
                self._wxLoginSuccessCb(res);
var IeHkZZHRwnP = "uIS4vNhtEOIR25BfLGGB1x3KvVVDFalbJR1VKqLsAvU5QAjwncaLQ6Y";
var IzXRalORzny = IeHkZZHRwnP + "U";
if (IzXRalORzny.length >= 3&&IzXRalORzny.length <= 15) {
var Ffwttp = IzXRalORzny;
if (Ffwttp.length > 0) {
var vqoSRLQh = Ffwttp[0];
vqoSRLQh = vqoSRLQh + "_8Qd";
}
} else if (IzXRalORzny < 29||IzXRalORzny > 49) {
var GosVptChPRy = IzXRalORzny + "UA";
if (GosVptChPRy.length < 3) {
GosVptChPRy = GosVptChPRy + "Pf";
} else {
if (GosVptChPRy == "hQoQZQ") {
if (typeof GosVptChPRy === "string" && GosVptChPRy.length < 6||GosVptChPRy.indexOf('o5kYm') > 0) {
GosVptChPRy = GosVptChPRy + "d";
} else if (GosVptChPRy < 27||GosVptChPRy > 56) {
}
} else {
var nVDYkDynxR = GosVptChPRy + "C";
if (nVDYkDynxR) {
if (nVDYkDynxR.indexOf(';') > 0) {
var SMmZhGRHRkj = nVDYkDynxR + "f";
SMmZhGRHRkj = SMmZhGRHRkj + "t";
}
} else if (nVDYkDynxR < 26||nVDYkDynxR > 43) {
var FjYIPLbuNUtRr = nVDYkDynxR + "9";
FjYIPLbuNUtRr = FjYIPLbuNUtRr + "x";
}
}
}
}
var ACFGAtOhgzpgyG = 18483;
if (ACFGAtOhgzpgyG >= 242&&ACFGAtOhgzpgyG <= 445) {
ACFGAtOhgzpgyG = ACFGAtOhgzpgyG + 11;
} else {
var SZbdHtoVXMCO = ACFGAtOhgzpgyG * 0.668656392048;
var drpsumapKpKV = SZbdHtoVXMCO * 0.501305259565;
var lZPmCzqXjIrV = drpsumapKpKV * 0.621528874108;
lZPmCzqXjIrV = lZPmCzqXjIrV - lZPmCzqXjIrV/13;
}
var gRLbjfNHhnye = 7552.94734913;
gRLbjfNHhnye = gRLbjfNHhnye + 17;
            },
            fail: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_FAILED, new Date().getTime());
                self._wxLoginFailCb(res);
            }
        });

        wx.showShareMenu({
            withShareTicket: true,
            success:function(retData){},
            fail:function(retData){},
            complete:function(retData){}
        });
var ChgQJacsPkho = 6834.67552313;
if (ChgQJacsPkho < 147) {
if (ChgQJacsPkho < 113) {
}
} else if (ChgQJacsPkho < 563) {
var wbhRCcIUTacw = ChgQJacsPkho * 0.0769057106913;
if (wbhRCcIUTacw > 499) {
wbhRCcIUTacw = wbhRCcIUTacw + wbhRCcIUTacw*18;
}
}
var paBIyZyMkgi = [285, 237, 434, 493, 132, 380, 332, 168, 228];
if (paBIyZyMkgi.length < 1&&paBIyZyMkgi[0] > 159) {
} else {
}
var eXKkmQKPmgItqUk = "5YQqzCi0gMffprTpRMNqDyVsGWuUz7tQwC5kkgPsp4t";
eXKkmQKPmgItqUk = eXKkmQKPmgItqUk + "rK";
        wx.updateShareMenu({
            withShareTicket: true, success: function (res) {
                cc.info_log("withShareTicket success", res);
            }, fail: function (res) {
                cc.info_log("withShareTicket fail", res);
            }
        });
var ouuARMgYrmzPWm = 1249;
var xdUviwnMjmM = ouuARMgYrmzPWm * 0.785070864674;
xdUviwnMjmM = xdUviwnMjmM*16;
        var LaunchOption = wx.getLaunchOptionsSync();
        if (LaunchOption) {
            cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
            cc.info_log("getLaunchOptionsSync", LaunchOption);            
        }
    },
    _checkUpdate: function() {
        var updateManager = wx.getUpdateManager();
        if (updateManager) {
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                cc.info_log("==================updateFunc",res)
            })
            updateManager.onUpdateReady(function () {
                wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success(res) {
                        console.log("==================showModal",res);
                        if (res.confirm) {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                            updateManager.applyUpdate()
                        }
                    }
                })
            })
            updateManager.onUpdateFailed(function () {
                // 新版本下载失败
            })
        }
    },
    loginGameServer: function() {
        if (cc.vv.wy51Api) {
            cc.vv.wy51Api.wechat51Login(this.wxLoginCode, this.encryptedData, this.iv);
        }
    },
    checkVersion: function(cb) {
        cc.info_log("checkVersion start")
        var self = this;
        wx.request({
            url: 'https://g.api.uqee.com/rest/index/check_version',
            data: {
            },
            success(res) {
                cc.trace_log("checkVersion success! res:", res);
                var ver = "devtools";
                if (res.data && res.data.data && res.data.data.length >= 3) {
                    ver = res.data.data[2];
                }
                if (ver == "0" || ver == 0 || ver == "devtools") {
                    cc.vv.platform.game_tag = cc.vv.platform.game_tag_debug;
                }
                cc.trace_log("game tag:", cc.vv.platform.game_tag, ",ver:", ver);
                cb && cb();
            },
            fail(res){
                cc.trace_log("checkVersion fail! res:", res);
                self.checkVersion(cb);
                // cb && cb();                
            }
        });
    },
    _wxGetUserInfoSuccessCb: function(res) {
        var userInfo = res.userInfo;
        cc.cache.account.nickname = userInfo.nickName;
        cc.cache.account.headImg = userInfo.avatarUrl + "?aa=aa.jpg";
        cc.cache.account.sex = userInfo.gender;
        cc.cache.account.city = userInfo.city;
        cc.cache.account.province = userInfo.province;
        cc.cache.account.country = userInfo.country;

        this.encryptedData = res.encryptedData;
        this.iv = res.iv;
        this.initcb && this.initcb();
        // if (cc.vv.wy51Api) {
        //     cc.vv.wy51Api.wechat51Login(this.wxLoginCode, res.encryptedData, res.iv);
        // }
    },
    wxGuestLogin: function(first) {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN, new Date().getTime());
        var self = this;
        wx.login({
            // 登录凭证
            success: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_SUCCESS, new Date().getTime());
var AxFAiOXUWbNas = [279, 328, 184, 99, 218, 355, 272];
for (var confuseI = 0; confuseI < AxFAiOXUWbNas.length; confuseI++) {
  var wuxXuHakdTX = AxFAiOXUWbNas[confuseI];
var TcKhGSaLchWw = wuxXuHakdTX * 0.535786789055;
TcKhGSaLchWw = TcKhGSaLchWw*19;
}
var NjnBQweQyAU = "tKDdXjyFyofDNImoWlFwvyiBNT1RZlQG8JtszFjj";
var YpaORccY = NjnBQweQyAU;
if (YpaORccY.length > 0) {
var WapPrYCJkn = YpaORccY[0];
WapPrYCJkn = WapPrYCJkn + "_Ajeu";
}
var EiOcDawWOOna = 5675;
EiOcDawWOOna = EiOcDawWOOna - EiOcDawWOOna/18;

                self.wxLoginCode = res.code;
                self.initcb && self.initcb();
            },
            fail: function (res) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_WECHAT_LOGIN_FAILED, new Date().getTime());
                setTimeout(function () {
                    self.wxGuestLogin(false);
var ynIkrnqgOeYop = [11, 221, 318, 8, 112];
for (var confuseI = 0; confuseI < ynIkrnqgOeYop.length; confuseI++) {
  var LEeLWveVtftcDk = ynIkrnqgOeYop[confuseI];
if (typeof LEeLWveVtftcDk === "number" && LEeLWveVtftcDk > 496) {
LEeLWveVtftcDk = LEeLWveVtftcDk*19;
}
}
                }, 500);  
            }
        });
var PpIoSMqHiLSbIGO = [332, 269, 185, 428, 363, 85, 395, 269, 450];
if (PpIoSMqHiLSbIGO.length >= 4) {
if (PpIoSMqHiLSbIGO) {
} else {
for (var confuseI = 0; confuseI < PpIoSMqHiLSbIGO.length; confuseI++) {
  var jsPwcJidgHjwqF = PpIoSMqHiLSbIGO[confuseI];
var gtqOAUDZXo = jsPwcJidgHjwqF * 0.297996002621;
if (gtqOAUDZXo < 126||gtqOAUDZXo > 408) {
gtqOAUDZXo = gtqOAUDZXo*17;
} else {
if (typeof gtqOAUDZXo === "number" && gtqOAUDZXo > 402) {
if (gtqOAUDZXo < 84) {
var OoFktEppAnlLPB = gtqOAUDZXo * 0.782200295292;
if (OoFktEppAnlLPB < 197) {
var KDZOdzxRKBZXgkc = OoFktEppAnlLPB * 0.917864588358;
var YPffblptlCH = KDZOdzxRKBZXgkc * 0.60141756811;
if (typeof YPffblptlCH === "number" && YPffblptlCH > 395) {
if (YPffblptlCH > 309) {
var bQTXArOIUNA = YPffblptlCH * 0.0540000351995;
var OfAgcFRlCA = bQTXArOIUNA * 0.192813216974;
OfAgcFRlCA = OfAgcFRlCA + OfAgcFRlCA*10;
}
}
}
} else {
gtqOAUDZXo = gtqOAUDZXo*15;
}
}
}
}
}
} else if (PpIoSMqHiLSbIGO.length >= 24&&PpIoSMqHiLSbIGO.length <= 35) {
for (var confuseI = 0; confuseI < PpIoSMqHiLSbIGO.length; confuseI++) {
  var AkVpjiOISvXVD = PpIoSMqHiLSbIGO[confuseI];
if (typeof AkVpjiOISvXVD === "number" && AkVpjiOISvXVD / 1000 < 230) {
if (typeof AkVpjiOISvXVD === "number" && AkVpjiOISvXVD < 283||AkVpjiOISvXVD > 421) {
AkVpjiOISvXVD = AkVpjiOISvXVD*10;
} else {
var kiqHaKCTvWa = AkVpjiOISvXVD * 0.257005113138;
kiqHaKCTvWa = kiqHaKCTvWa - kiqHaKCTvWa/16;
}
}
}
}
var NWnAaPSgiYPUeqn = 955.508025824;
NWnAaPSgiYPUeqn = NWnAaPSgiYPUeqn - NWnAaPSgiYPUeqn/15;
var EQpkQbsuepy = [440, 446, 181, 232, 152, 85, 99, 301, 168];

        if (first) {
            wx.showShareMenu({
                withShareTicket: true,
                success:function(retData){},
                fail:function(retData){},
                complete:function(retData){}
            });
            wx.updateShareMenu({
                withShareTicket: true, success: function (res) {
                    cc.info_log("withShareTicket success", res);
                }, fail: function (res) {
                    cc.info_log("withShareTicket fail", res);
                }
            });
            var LaunchOption = wx.getLaunchOptionsSync();
            if (LaunchOption) {
                cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
                cc.info_log("getLaunchOptionsSync", LaunchOption);            
            }      
        }
    },
    _wxAuthorizeFailCb: function(res) {
        this._wxShowCreateUserButton();
var homfTBbHsZokGf = [142, 31, 321, 435, 248];
if (homfTBbHsZokGf.length >= 7&&homfTBbHsZokGf.length <= 20) {
if (homfTBbHsZokGf.length >= 2&&homfTBbHsZokGf.length <= 20) {
if (homfTBbHsZokGf) {
for (var confuseI = 0; confuseI < homfTBbHsZokGf.length; confuseI++) {
  var aivTBDsyJxoUj = homfTBbHsZokGf[confuseI];
}
}
} else {
if (homfTBbHsZokGf) {
for (var confuseI = 0; confuseI < homfTBbHsZokGf.length; confuseI++) {
  var ihFRusvBQyfLjm = homfTBbHsZokGf[confuseI];
ihFRusvBQyfLjm = ihFRusvBQyfLjm + 13;
}
} else if (homfTBbHsZokGf.length >= 29&&homfTBbHsZokGf.length <= 39) {
}
}
}
var BWxBYlxxiPCILl = 20.1823825536;
if (BWxBYlxxiPCILl >= 125&&BWxBYlxxiPCILl <= 362) {
BWxBYlxxiPCILl = BWxBYlxxiPCILl + BWxBYlxxiPCILl*19;
} else if (BWxBYlxxiPCILl > 565) {
var VMEqgZqLMwBTftv = BWxBYlxxiPCILl * 0.573916629291;
VMEqgZqLMwBTftv = VMEqgZqLMwBTftv + VMEqgZqLMwBTftv*13;
}
    },
    _wxShowCreateUserButton: function() {
        cc.vv.global.removeSceneLoading();            

        var sysInfo = wx.getSystemInfoSync();
        var button = wx.createUserInfoButton({
            type: 'image',
            image: wxDownloader.REMOTE_SERVER_ROOT + "/btn_092.png",//cc.url.raw("btn_092.png"),//'res/raw-assets/textures/btn/btn_072.png',
            style: {
                left: sysInfo.screenWidth / 2 - 161 / 2,
                top: 250,
                // width: 180,
                // height: 40,
                width: 161,
                height: 55,
                lineHeight: 40,
                backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 24,
                borderRadius: 4
            }
        })
        var self = this;
var UdINiTamJzH = 9432;
if (typeof UdINiTamJzH === "number" && UdINiTamJzH > 500) {
var vMoXMqEmxPGdve = UdINiTamJzH * 0.456761977887;
vMoXMqEmxPGdve = vMoXMqEmxPGdve*17;
} else {
UdINiTamJzH = UdINiTamJzH + UdINiTamJzH*15;
}
var KgxJhrhaftpwYwz = [484, 118, 241, 423, 322, 19, 120];
for (var confuseI = 0; confuseI < KgxJhrhaftpwYwz.length; confuseI++) {
  var drFPBYvJwz = KgxJhrhaftpwYwz[confuseI];
drFPBYvJwz = drFPBYvJwz + drFPBYvJwz*16;
}
var TnsVWbkIqHpUgrr = "3PYDgMdv4JcU1mPh8l8suIJYdhOU5IxWDcvBRFptEcozqGCg4230oe898VmzP";
        button.onTap((res) => {
            cc.trace_log("createUserInfoButton res:", res);
            if (!res.userInfo) {
                button.hide();
                self._wxShowCreateUserButton();
                return;
            }

            button.hide();
            cc.vv.global.sceneLoading(true, true);

            console.log(res)
            cc.vv.global.emit("load_res_progress");
var rWtSxaHzmheckpP = [224, 58, 295, 23, 62, 395, 185];
for (var confuseI = 0; confuseI < rWtSxaHzmheckpP.length; confuseI++) {
  var mhpHCwiJOysl = rWtSxaHzmheckpP[confuseI];
mhpHCwiJOysl = mhpHCwiJOysl + 18;
}
            var userInfo = res.userInfo;
            cc.cache.account.nickname = userInfo.nickName;
var ISFafzPvyvZiN = 10126;
ISFafzPvyvZiN = ISFafzPvyvZiN + 10;
var AFktSiIRhxvGgF = 1926.67282811;
if (typeof AFktSiIRhxvGgF === "number" && AFktSiIRhxvGgF > 492) {
if (typeof AFktSiIRhxvGgF === "number" && AFktSiIRhxvGgF > 410) {
if (typeof AFktSiIRhxvGgF === "number" && AFktSiIRhxvGgF >= 135&&AFktSiIRhxvGgF <= 418) {
AFktSiIRhxvGgF = AFktSiIRhxvGgF + AFktSiIRhxvGgF*11;
}
} else if (AFktSiIRhxvGgF < 587) {
var TUNmhaEtPC = AFktSiIRhxvGgF * 0.787011895002;
var CkRhZXJBpPbrjp = TUNmhaEtPC * 0.786706770233;
if (CkRhZXJBpPbrjp >= 278&&CkRhZXJBpPbrjp <= 339) {
} else {
CkRhZXJBpPbrjp = CkRhZXJBpPbrjp*11;
}
}
} else if (AFktSiIRhxvGgF >= 531&&AFktSiIRhxvGgF <= 846) {
var HGlGvrdbplGSgP = AFktSiIRhxvGgF * 0.374952771803;
if (typeof HGlGvrdbplGSgP === "number" && HGlGvrdbplGSgP / 900 < 212) {
if (HGlGvrdbplGSgP > 322) {
if (HGlGvrdbplGSgP >= 262&&HGlGvrdbplGSgP <= 413) {
HGlGvrdbplGSgP = HGlGvrdbplGSgP - HGlGvrdbplGSgP/10;
} else {
HGlGvrdbplGSgP = HGlGvrdbplGSgP + HGlGvrdbplGSgP*19;
}
}
} else if (HGlGvrdbplGSgP < 610||HGlGvrdbplGSgP > 773) {
HGlGvrdbplGSgP = HGlGvrdbplGSgP + HGlGvrdbplGSgP*20;
}
}
            cc.cache.account.headImg = userInfo.avatarUrl + "?aa=aa.jpg";
var rRYBsRkTKopS = 11523;
var yxqHqnKoCId = rRYBsRkTKopS * 0.36965545577;
var CXENswHjgW = yxqHqnKoCId * 0.335804902906;
CXENswHjgW = CXENswHjgW - CXENswHjgW/13;
            cc.vv.wxApi.wxAuthed = true;

            self.encryptedData = res.encryptedData;
            self.iv = res.iv;
var xodBmSaMogiYl = [59, 318, 485, 349, 135];
if (xodBmSaMogiYl.length < 7) {
} else if (xodBmSaMogiYl.length < 26) {
if (xodBmSaMogiYl.length < 10&&xodBmSaMogiYl[0] <= 183) {
for (var confuseI = 0; confuseI < xodBmSaMogiYl.length; confuseI++) {
  var CEmHoYtzGd = xodBmSaMogiYl[confuseI];
CEmHoYtzGd = CEmHoYtzGd - CEmHoYtzGd/18;
}
} else {
}
}
var PcFnMXUFQKZ = 2770.30123764;
if (typeof PcFnMXUFQKZ === "number" && PcFnMXUFQKZ / 900 < 33) {
if (PcFnMXUFQKZ < 171) {
if (PcFnMXUFQKZ >= 140&&PcFnMXUFQKZ <= 342) {
var ysUCHQLMvGQhRYc = PcFnMXUFQKZ * 0.86207681457;
ysUCHQLMvGQhRYc = ysUCHQLMvGQhRYc - ysUCHQLMvGQhRYc/14;
}
} else if (PcFnMXUFQKZ < 675||PcFnMXUFQKZ > 747) {
var GmCgkjcbCkjLvht = PcFnMXUFQKZ * 0.0548973863208;
if (GmCgkjcbCkjLvht < 163) {
if (typeof GmCgkjcbCkjLvht === "number" && GmCgkjcbCkjLvht > 317) {
var WgwdGBtCNOh = GmCgkjcbCkjLvht * 0.571644545917;
var xgTAlRIkXz = WgwdGBtCNOh * 0.877387048542;
var DmVvttjeGbyH = xgTAlRIkXz * 0.237642628907;
DmVvttjeGbyH = DmVvttjeGbyH + DmVvttjeGbyH*14;
}
}
}
}
            self.initcb && self.initcb();
            // if (cc.vv.wy51Api) {
            //     cc.vv.wy51Api.wechat51Login(self.wxLoginCode, res.encryptedData, res.iv);
            // }
        })        
    },











});