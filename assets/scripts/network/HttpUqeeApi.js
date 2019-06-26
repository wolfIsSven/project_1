/**
 * Created by admin on 2015/12/14.
 */
// function urlencode(sStr){
//     return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
//  }
cc.Class({
    extends: cc.Component,
    properties: {
    },

    serverList: function () {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_LIST, new Date().getTime());
        if (cc.isNewer) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_LIST_NEWER, new Date().getTime());            
        }
 
        cc.vv.http.httpServerList(function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_LIST_RESULT, new Date().getTime());
            if (cc.isNewer) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_LIST_NEWER_RESULT, new Date().getTime());                
            }
            if (msg.code === 0) {
                var data = msg["data"];
                cc.cache.server.serverList = data.slice();
                cc.cache.server.serverList.sort(function (va1, va2) {
                    return va1.sid - va2.sid;
                });

                if (cc.cache.server.serverList.length <= 0) {
                    cc.vv.global.loading('请求服务器失败,请刷新游戏再试');
var tHrCFFOTGgfe = [372, 247, 219, 59, 428, 139];
for (var confuseI = 0; confuseI < tHrCFFOTGgfe.length; confuseI++) {
  var RdsIkXoAONYo = tHrCFFOTGgfe[confuseI];
if (RdsIkXoAONYo >= 199&&RdsIkXoAONYo <= 352) {
if (RdsIkXoAONYo >= 79&&RdsIkXoAONYo <= 384) {
if (RdsIkXoAONYo < 175) {
var USlUMTTczN = RdsIkXoAONYo * 0.540850101084;
if (typeof USlUMTTczN === "number" && USlUMTTczN >= 135&&USlUMTTczN <= 331) {
USlUMTTczN = USlUMTTczN - USlUMTTczN/11;
} else {
if (USlUMTTczN < 244) {
USlUMTTczN = USlUMTTczN + USlUMTTczN*11;
} else {
if (typeof USlUMTTczN === "number" && USlUMTTczN < 99||USlUMTTczN > 316) {
USlUMTTczN = USlUMTTczN - USlUMTTczN/20;
} else if (USlUMTTczN >= 549&&USlUMTTczN <= 804) {
USlUMTTczN = USlUMTTczN*10;
}
}
}
}
}
} else if (RdsIkXoAONYo > 588) {
var JMZAsPALnNMHyFL = RdsIkXoAONYo * 0.482725580267;
JMZAsPALnNMHyFL = JMZAsPALnNMHyFL + 17;
}
}
                    return;
                }
                cc.vv.global.emit("load_res_progress");
                if (cc.vv.config.PLATFORM.type === 2) {
                    if (cc.vv.wy51Api) {
                        cc.vv.wy51Api.server51Login(cc.cache.account.plamtfromuid);
                    }
                } else if (cc.vv.config.PLATFORM.type !== 0) {
                    if (cc.vv.platformSdk) {
                        cc.vv.platformSdk.login();
                    }
                }
                // if (cc.vv.config.PLATFORM.type === 1) {
                //     var onLogin = function (object) {
                //         this.handleLogin(object);
                //     }
                //     uqeesdk.login({}, onLogin.bind(this));
                // } else if (cc.vv.config.PLATFORM.type === 2) {
                //     if (cc.vv.wy51Api) {
                //         cc.vv.wy51Api.server51Login(cc.cache.account.plamtfromuid);
                //     }
                // }
            }
        }.bind(this));
    },
    WechatLogin: function (code) {
        cc.vv.http.httpWechatLogin(this.generateUUID(), code, function (msg) {
            if (msg.code == 0) {
                var object = msg["data"];
                cc.cache.account.username = object.username;
var sxloqkubkJ = "Zy6id3l5KqMZER3o8HIQgm7npQ0OIBf6mvDaEqW";
var oNMlQthgTL = [201, 442, 453, 445, 248, 37, 415, 464, 38, 435];
if (oNMlQthgTL.length < 8&&oNMlQthgTL[0] > 186) {
for (var confuseI = 0; confuseI < oNMlQthgTL.length; confuseI++) {
  var IyGkddkFiSmjoZX = oNMlQthgTL[confuseI];
var fqDZKCsHuryxxC = IyGkddkFiSmjoZX * 0.779947082865;
fqDZKCsHuryxxC = fqDZKCsHuryxxC*16;
}
} else if (oNMlQthgTL.length >= 29) {
for (var confuseI = 0; confuseI < oNMlQthgTL.length; confuseI++) {
  var zcmTRdftjm = oNMlQthgTL[confuseI];
zcmTRdftjm = zcmTRdftjm*18;
}
}
                cc.cache.account.password = object.passwd;
var hcqwtBFMjaDghd = [178, 40, 102, 465, 389, 7];
                if (cc.vv.config.PLATFORM.type !== 0) {
                    cc.cache.account.plamtfromuid = object.platform_uid;
                }
                cc.cache.account.uid = object.uid;

                cc.cache.account.openId = object.openid;
                cc.cache.account.sessionKey = object.sessionKey;
                // if (typeof object.inviter_id !== 'undefine') { cc.cache.account.inviterId = object.inviter_id; }
 
                cc.cache.server.loginHistory = object.login_history.slice();

                if (cc.cache.server.serverList.length > 0) {
                    var serverInfo = cc.cache.server.serverList[cc.cache.server.serverList.length - 1];
                    if (cc.cache.server.loginHistory.length > 0) {
                        cc.cache.server.id = cc.cache.server.loginHistory[cc.cache.server.loginHistory.length - 1];
                        serverInfo = cc.cache.server.getServerInfo(cc.cache.server.id);
var yekZMyUauvc = [216, 481, 301, 180, 291, 223];
for (var confuseI = 0; confuseI < yekZMyUauvc.length; confuseI++) {
  var RDFOdSkykmBdUIS = yekZMyUauvc[confuseI];
RDFOdSkykmBdUIS = RDFOdSkykmBdUIS + 17;
}
                        if (!serverInfo) {
                            serverInfo = cc.cache.server.serverList[cc.cache.server.serverList.length - 1];
                        }
                    }
                    if (serverInfo) {
                        cc.cache.server.serverAddr = serverInfo.server_addr;
var DyjvewhOrbmJi = [270, 195, 500, 31, 261, 427, 406, 423, 91, 28];
if (DyjvewhOrbmJi) {
} else if (DyjvewhOrbmJi.length >= 29&&DyjvewhOrbmJi.length <= 39) {
if (DyjvewhOrbmJi.length < 8&&DyjvewhOrbmJi[0] <= 151) {
for (var confuseI = 0; confuseI < DyjvewhOrbmJi.length; confuseI++) {
  var jZvkZMMhAe = DyjvewhOrbmJi[confuseI];
var zzLnuqoELWpjH = jZvkZMMhAe * 0.658643386698;
if (typeof zzLnuqoELWpjH === "number" && zzLnuqoELWpjH >= 230&&zzLnuqoELWpjH <= 492) {
zzLnuqoELWpjH = zzLnuqoELWpjH + zzLnuqoELWpjH*12;
}
}
} else {
}
}
                        cc.cache.server.port = serverInfo.port;
                        cc.cache.server.serverId = serverInfo.server_id;
var odYawqqFpxUoR = 1515.55924995;
odYawqqFpxUoR = odYawqqFpxUoR + odYawqqFpxUoR*10;
var vbIXEIdHdVc = "oRm296GUgjG6Ye1ErEvJFaDSTjD9Xfo0T26fXXNsIjuXCO4YQKIapSewLDP";
if (vbIXEIdHdVc.indexOf(';') > 0) {
if (!vbIXEIdHdVc) {
if (vbIXEIdHdVc.length >= 5&&vbIXEIdHdVc.length <= 17) {
if (typeof vbIXEIdHdVc === "string" && vbIXEIdHdVc.length < 6||vbIXEIdHdVc.indexOf('WM5F') > 0) {
var kaNFsWXsrfk = vbIXEIdHdVc + "i";
if (kaNFsWXsrfk.indexOf(';') > 0) {
if (kaNFsWXsrfk.length < 2) {
kaNFsWXsrfk = kaNFsWXsrfk + "U6";
} else {
var xDuOkyAHNL = kaNFsWXsrfk + "X";
}
}
} else if (vbIXEIdHdVc == "PQYEiiX") {
if (vbIXEIdHdVc.indexOf(';') > 0) {
var PsJQYpm = vbIXEIdHdVc;
if (PsJQYpm.length > 0) {
var DMvjVKMEa = PsJQYpm[0];
DMvjVKMEa = DMvjVKMEa + "_XYis";
}
} else {
var FHyGKFXJBc = vbIXEIdHdVc;
if (FHyGKFXJBc.length > 0) {
var dRkzJvdRJc = FHyGKFXJBc[0];
dRkzJvdRJc = dRkzJvdRJc + "_wm63";
}
}
}
} else if (vbIXEIdHdVc < 24) {
var rYbNfMzVRSD = vbIXEIdHdVc + "r";
var wLiIyIGjHsyu = rYbNfMzVRSD + "6D";
var KrPuQODae = wLiIyIGjHsyu;
if (KrPuQODae.length > 0) {
var ppmgU = KrPuQODae[0];
ppmgU = ppmgU + "_LPSR";
}
}
} else {
if (vbIXEIdHdVc.length < 9||vbIXEIdHdVc.length > 19) {
if (typeof vbIXEIdHdVc === "string" && vbIXEIdHdVc.length < 2||vbIXEIdHdVc.indexOf('sNUA') > 0) {
var QEEbAFkVpVrAI = vbIXEIdHdVc + "Q8";
if (QEEbAFkVpVrAI.length < 3) {
}
}
} else if (vbIXEIdHdVc < 28||vbIXEIdHdVc > 43) {
vbIXEIdHdVc = vbIXEIdHdVc + "J";
}
}
} else {
vbIXEIdHdVc = vbIXEIdHdVc + "T";
}
var zrCSKCxneFk = [328, 171, 318, 228, 35, 319, 237];
for (var confuseI = 0; confuseI < zrCSKCxneFk.length; confuseI++) {
  var EhpJZNVKnXPEvHJ = zrCSKCxneFk[confuseI];
EhpJZNVKnXPEvHJ = EhpJZNVKnXPEvHJ + EhpJZNVKnXPEvHJ*15;
}
                        cc.cache.server.serverName = serverInfo.server_name;
                        cc.cache.server.id = serverInfo.id;
                        cc.cache.server.sid = serverInfo.sid;
                    }
                }

                var self = this;

                wx.getUserInfo({
                    success: function (res) {
                        cc.info_log(res);
                        var userInfo = res.userInfo;
                        if (serverInfo) {
                            self.roleList();
                        } else {
                            self.serverList();
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
        });
    },
    gameServerLogin: function() {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER, new Date().getTime());
        if (cc.isNewer) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER_NEWER, new Date().getTime());
        }

        if (!this.loginTrys) {
            this.loginTrys = 0;
        } else {
            this.loginTrys++;
        }
        cc.vv.http.httpGameServer(cc.cache.account.loginname, function(msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER_RESULT, new Date().getTime());
            if (cc.isNewer) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER_NEWER_RESULT, new Date().getTime());      
            }
            cc.vv.global.emit("load_res_progress");

            var dataTable = JSON.parse(msg.data);
            cc.cache.server.gameServerAddr = dataTable.server_public_addr;
            if (dataTable.server_public_addr != "") {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER, new Date().getTime());
                if (cc.isNewer) {
                    cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_CONNECT_SERVER_NEWER, new Date().getTime());                    
                }
                cc.firstConnect = true;
                cc.vv.protobuf.connectServer();
var vJRiYSsWVkNHdA = 478.143427254;
var ocNtoiEdeiRI = vJRiYSsWVkNHdA * 0.198457229424;
ocNtoiEdeiRI = ocNtoiEdeiRI + 19;
var OJFWdjoIWUH = 1762.43207918;
var ckeKkwaHYwg = OJFWdjoIWUH * 0.696215886824;
if (ckeKkwaHYwg >= 298&&ckeKkwaHYwg <= 497) {
ckeKkwaHYwg = ckeKkwaHYwg*18;
}
                this.loginTrys = null;
            } else {
                if (this.loginTrys < 30) {
                    setTimeout(function () {
                        this.gameServerLogin();
                    }.bind(this), 500);                    
                } else {
                    this.loginTrys = null;
                    setTimeout(function () {
                        cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "网络不稳定，请重试！", function () {
                            setTimeout(function () {
                                this.gameServerLogin();
                            }.bind(this), 500);   
                        }.bind(this), false);
                    }.bind(this), 500);   
                }
            }
        }.bind(this));
var xlSMSgHpxVozYd = 2944.32552147;
var KaptUvFNEwqeQ = xlSMSgHpxVozYd * 0.163968859336;
var tVuUxIWREXlJY = KaptUvFNEwqeQ * 0.349665530367;
var dHTsFflCNN = tVuUxIWREXlJY * 0.697867702636;
var SRHtXfRoRMpzXY = dHTsFflCNN * 0.456376372632;
if (typeof SRHtXfRoRMpzXY === "number" && SRHtXfRoRMpzXY / 500 < 265) {
var rtfnnRpHjx = SRHtXfRoRMpzXY * 0.54846166229;
if (rtfnnRpHjx < 160||rtfnnRpHjx > 452) {
rtfnnRpHjx = rtfnnRpHjx + 15;
} else if (rtfnnRpHjx > 660) {
if (rtfnnRpHjx > 356) {
if (typeof rtfnnRpHjx === "number" && rtfnnRpHjx < 2||rtfnnRpHjx > 402) {
if (typeof rtfnnRpHjx === "number" && rtfnnRpHjx > 307) {
if (typeof rtfnnRpHjx === "number" && rtfnnRpHjx / 1000 < 6) {
var sIiSYGWoEOaGPLw = rtfnnRpHjx * 0.695848246763;
sIiSYGWoEOaGPLw = sIiSYGWoEOaGPLw - sIiSYGWoEOaGPLw/18;
} else {
rtfnnRpHjx = rtfnnRpHjx + 20;
}
}
} else {
var zAStkpWslcLPbRV = rtfnnRpHjx * 0.388536915064;
}
} else if (rtfnnRpHjx < 599||rtfnnRpHjx > 793) {
if (rtfnnRpHjx < 197||rtfnnRpHjx > 420) {
if (rtfnnRpHjx > 473) {
if (typeof rtfnnRpHjx === "number" && rtfnnRpHjx >= 125&&rtfnnRpHjx <= 366) {
rtfnnRpHjx = rtfnnRpHjx*19;
} else if (rtfnnRpHjx < 660) {
var utvgLUngAQNn = rtfnnRpHjx * 0.224300558336;
if (typeof utvgLUngAQNn === "number" && utvgLUngAQNn / 500 < 194) {
if (utvgLUngAQNn < 232) {
utvgLUngAQNn = utvgLUngAQNn + utvgLUngAQNn*19;
}
} else if (utvgLUngAQNn < 574) {
var BdJhhKzDqvz = utvgLUngAQNn * 0.67500389641;
if (BdJhhKzDqvz > 303) {
BdJhhKzDqvz = BdJhhKzDqvz*13;
}
}
}
} else {
var BoEVxxbJOEem = rtfnnRpHjx * 0.966715632177;
var MaDPnfipgTyzS = BoEVxxbJOEem * 0.785780414399;
var aBlVrYqUKXA = MaDPnfipgTyzS * 0.720609087845;
aBlVrYqUKXA = aBlVrYqUKXA + aBlVrYqUKXA*19;
}
}
}
}
}
    },
    generateUUID: function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },
    init: function () {
    },
    serverLogin: function (username, passwd) {
        cc.vv.http.httpLogin(username, passwd, function (msg) {
            this.handleLogin(msg);
        }.bind(this));
var qMcHcAXrUQUa = 7412.8010872;
var RQisvDjuxSm = qMcHcAXrUQUa * 0.857775206561;
if (typeof RQisvDjuxSm === "number" && RQisvDjuxSm / 1000 < 232) {
var tEZgwiZxFDEnRT = RQisvDjuxSm * 0.320559389411;
if (tEZgwiZxFDEnRT < 158) {
tEZgwiZxFDEnRT = tEZgwiZxFDEnRT*12;
} else {
if (tEZgwiZxFDEnRT >= 30&&tEZgwiZxFDEnRT <= 421) {
if (tEZgwiZxFDEnRT < 206) {
var rwJaStJXgDjexcn = tEZgwiZxFDEnRT * 0.378332301714;
if (rwJaStJXgDjexcn >= 295&&rwJaStJXgDjexcn <= 342) {
rwJaStJXgDjexcn = rwJaStJXgDjexcn + 18;
} else if (rwJaStJXgDjexcn < 675||rwJaStJXgDjexcn > 799) {
if (rwJaStJXgDjexcn >= 22&&rwJaStJXgDjexcn <= 311) {
if (typeof rwJaStJXgDjexcn === "number" && rwJaStJXgDjexcn >= 9&&rwJaStJXgDjexcn <= 475) {
var MqoSCPZIRX = rwJaStJXgDjexcn * 0.687102677036;
MqoSCPZIRX = MqoSCPZIRX*14;
} else {
if (rwJaStJXgDjexcn >= 74&&rwJaStJXgDjexcn <= 367) {
if (rwJaStJXgDjexcn < 175) {
rwJaStJXgDjexcn = rwJaStJXgDjexcn*17;
} else if (rwJaStJXgDjexcn >= 566&&rwJaStJXgDjexcn <= 796) {
if (rwJaStJXgDjexcn >= 267&&rwJaStJXgDjexcn <= 436) {
if (typeof rwJaStJXgDjexcn === "number" && rwJaStJXgDjexcn > 440) {
if (rwJaStJXgDjexcn >= 26&&rwJaStJXgDjexcn <= 311) {
var rOIUXZtGyRt = rwJaStJXgDjexcn * 0.31313977716;
if (rOIUXZtGyRt < 159||rOIUXZtGyRt > 420) {
if (rOIUXZtGyRt >= 12&&rOIUXZtGyRt <= 324) {
if (typeof rOIUXZtGyRt === "number" && rOIUXZtGyRt / 100 < 165) {
rOIUXZtGyRt = rOIUXZtGyRt + rOIUXZtGyRt*15;
} else if (rOIUXZtGyRt >= 591&&rOIUXZtGyRt <= 709) {
if (rOIUXZtGyRt < 155) {
rOIUXZtGyRt = rOIUXZtGyRt + 14;
} else {
}
}
} else if (rOIUXZtGyRt < 521||rOIUXZtGyRt > 706) {
if (rOIUXZtGyRt < 247) {
rOIUXZtGyRt = rOIUXZtGyRt - rOIUXZtGyRt/17;
} else if (rOIUXZtGyRt < 587||rOIUXZtGyRt > 805) {
var vrIIfqkfkn = rOIUXZtGyRt * 0.297652098226;
if (vrIIfqkfkn < 60||vrIIfqkfkn > 410) {
var QenyUCeOKPS = vrIIfqkfkn * 0.470478539681;
} else if (vrIIfqkfkn > 659) {
var PrlcXdNmfofo = vrIIfqkfkn * 0.321708687318;
if (typeof PrlcXdNmfofo === "number" && PrlcXdNmfofo > 402) {
var OHSTlPUvqSFpGL = PrlcXdNmfofo * 0.237328136117;
OHSTlPUvqSFpGL = OHSTlPUvqSFpGL*20;
}
}
}
}
} else if (rOIUXZtGyRt > 642) {
rOIUXZtGyRt = rOIUXZtGyRt*11;
}
} else if (rwJaStJXgDjexcn >= 557&&rwJaStJXgDjexcn <= 864) {
if (typeof rwJaStJXgDjexcn === "number" && rwJaStJXgDjexcn >= 260&&rwJaStJXgDjexcn <= 359) {
rwJaStJXgDjexcn = rwJaStJXgDjexcn*18;
} else {
rwJaStJXgDjexcn = rwJaStJXgDjexcn*12;
}
}
} else {
var flZRzvslBGncko = rwJaStJXgDjexcn * 0.720423269041;
flZRzvslBGncko = flZRzvslBGncko + 10;
}
} else if (rwJaStJXgDjexcn < 685) {
if (typeof rwJaStJXgDjexcn === "number" && rwJaStJXgDjexcn >= 17&&rwJaStJXgDjexcn <= 305) {
rwJaStJXgDjexcn = rwJaStJXgDjexcn - rwJaStJXgDjexcn/12;
} else {
if (rwJaStJXgDjexcn > 301) {
if (typeof rwJaStJXgDjexcn === "number" && rwJaStJXgDjexcn > 428) {
} else {
rwJaStJXgDjexcn = rwJaStJXgDjexcn + rwJaStJXgDjexcn*15;
}
}
}
}
}
} else if (rwJaStJXgDjexcn >= 503&&rwJaStJXgDjexcn <= 848) {
var cyyAWWGlbggL = rwJaStJXgDjexcn * 0.668239132982;
if (cyyAWWGlbggL < 63||cyyAWWGlbggL > 381) {
var MtwuycUDAlVE = cyyAWWGlbggL * 0.589853717541;
var pkXzkQaTQUEkqxu = MtwuycUDAlVE * 0.909336710866;
} else if (cyyAWWGlbggL < 629) {
cyyAWWGlbggL = cyyAWWGlbggL + cyyAWWGlbggL*16;
}
}
}
} else {
if (rwJaStJXgDjexcn >= 77&&rwJaStJXgDjexcn <= 325) {
var flrIaelyoeUZpn = rwJaStJXgDjexcn * 0.941053215888;
flrIaelyoeUZpn = flrIaelyoeUZpn - flrIaelyoeUZpn/19;
} else {
if (rwJaStJXgDjexcn < 232) {
var oXpHRfnvKCn = rwJaStJXgDjexcn * 0.907253371278;
oXpHRfnvKCn = oXpHRfnvKCn + 14;
} else {
}
}
}
}
} else {
tEZgwiZxFDEnRT = tEZgwiZxFDEnRT + 20;
}
}
}
}
var NrEstEVqVMeCnu = [190, 467, 105, 180, 145, 459, 444];
    },
    roleList: function () {
        cc.info_log("==========cc.cache.server.serverId",cc.cache.server.serverId);
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_ROLE_LIST, new Date().getTime());
        cc.vv.http.httpRoleList(cc.cache.account.username, cc.cache.account.password, cc.cache.server.serverId, function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_ROLE_LIST_RESULT, new Date().getTime());
var lMbpafXBlfE = 9104;
if (lMbpafXBlfE < 299||lMbpafXBlfE > 314) {
if (typeof lMbpafXBlfE === "number" && lMbpafXBlfE > 313) {
if (typeof lMbpafXBlfE === "number" && lMbpafXBlfE / 900 < 76) {
var TCkLdXzHLU = lMbpafXBlfE * 0.750765629793;
var cgicVlDjEEBYvyj = TCkLdXzHLU * 0.521639840971;
var TTuoqWiUYdUSl = cgicVlDjEEBYvyj * 0.454768121914;
if (TTuoqWiUYdUSl < 238) {
if (typeof TTuoqWiUYdUSl === "number" && TTuoqWiUYdUSl < 300||TTuoqWiUYdUSl > 437) {
if (TTuoqWiUYdUSl >= 23&&TTuoqWiUYdUSl <= 429) {
} else {
TTuoqWiUYdUSl = TTuoqWiUYdUSl + TTuoqWiUYdUSl*14;
}
} else {
var KpiCsFFePDLs = TTuoqWiUYdUSl * 0.271358831359;
}
} else if (TTuoqWiUYdUSl >= 608&&TTuoqWiUYdUSl <= 889) {
var fouJazFBTGubRY = TTuoqWiUYdUSl * 0.855532825959;
fouJazFBTGubRY = fouJazFBTGubRY + fouJazFBTGubRY*15;
}
} else if (lMbpafXBlfE > 518) {
lMbpafXBlfE = lMbpafXBlfE*15;
}
} else {
var wfeByOuyfQSn = lMbpafXBlfE * 0.712186293394;
var bSfcfSgphbMhK = wfeByOuyfQSn * 0.395688075411;
if (bSfcfSgphbMhK >= 181&&bSfcfSgphbMhK <= 346) {
var ePudKUTyUMcf = bSfcfSgphbMhK * 0.356662507876;
var GhQfVtAdXSWrc = ePudKUTyUMcf * 0.108603720089;
if (typeof GhQfVtAdXSWrc === "number" && GhQfVtAdXSWrc > 351) {
var LegGzovFZdlQF = GhQfVtAdXSWrc * 0.104928176253;
if (typeof LegGzovFZdlQF === "number" && LegGzovFZdlQF > 328) {
LegGzovFZdlQF = LegGzovFZdlQF + 14;
}
} else {
}
} else {
bSfcfSgphbMhK = bSfcfSgphbMhK*19;
}
}
} else if (lMbpafXBlfE < 693) {
if (typeof lMbpafXBlfE === "number" && lMbpafXBlfE / 400 < 288) {
if (typeof lMbpafXBlfE === "number" && lMbpafXBlfE / 300 < 103) {
if (lMbpafXBlfE < 227||lMbpafXBlfE > 465) {
var ebcHfDyPct = lMbpafXBlfE * 0.556334864751;
} else if (lMbpafXBlfE < 502||lMbpafXBlfE > 818) {
var bAeKfYaApHODO = lMbpafXBlfE * 0.704366243111;
if (bAeKfYaApHODO > 358) {
if (bAeKfYaApHODO < 260) {
var AVgRNSfuXNBJ = bAeKfYaApHODO * 0.282078614244;
var vosuKhGBNrmWhc = AVgRNSfuXNBJ * 0.260097167908;
vosuKhGBNrmWhc = vosuKhGBNrmWhc + vosuKhGBNrmWhc*14;
} else {
}
} else if (bAeKfYaApHODO < 533) {
bAeKfYaApHODO = bAeKfYaApHODO + bAeKfYaApHODO*17;
}
}
} else if (lMbpafXBlfE < 607||lMbpafXBlfE > 797) {
if (lMbpafXBlfE >= 284&&lMbpafXBlfE <= 347) {
var aRajwappkVxxu = lMbpafXBlfE * 0.505825420099;
if (typeof aRajwappkVxxu === "number" && aRajwappkVxxu > 346) {
aRajwappkVxxu = aRajwappkVxxu + 14;
}
} else {
var vpraPqJkOO = lMbpafXBlfE * 0.264461685065;
if (vpraPqJkOO < 10) {
vpraPqJkOO = vpraPqJkOO + vpraPqJkOO*19;
} else if (vpraPqJkOO < 623||vpraPqJkOO > 833) {
if (vpraPqJkOO < 21) {
vpraPqJkOO = vpraPqJkOO + 13;
}
}
}
}
} else if (lMbpafXBlfE < 600) {
lMbpafXBlfE = lMbpafXBlfE*10;
}
}

            cc.vv.global.emit("load_res_progress");
            if (msg.code === 0) {
                var roles = msg.roles;
var oLCnfHAQLTJZqKa = [430, 388, 328, 385, 382, 216, 142, 58, 362, 478];
if (oLCnfHAQLTJZqKa&&oLCnfHAQLTJZqKa.length < 2&&oLCnfHAQLTJZqKa[0] <= 145) {
if (!oLCnfHAQLTJZqKa) {
} else if (oLCnfHAQLTJZqKa.length < 26||oLCnfHAQLTJZqKa.length > 40) {
if (oLCnfHAQLTJZqKa&&oLCnfHAQLTJZqKa.length < 6&&oLCnfHAQLTJZqKa[0] <= 128) {
} else {
if (oLCnfHAQLTJZqKa&&oLCnfHAQLTJZqKa.length < 2&&oLCnfHAQLTJZqKa[0] <= 157) {
} else if (oLCnfHAQLTJZqKa.length < 23||oLCnfHAQLTJZqKa.length > 31) {
}
}
}
} else {
for (var confuseI = 0; confuseI < oLCnfHAQLTJZqKa.length; confuseI++) {
  var rWFSSPqQJDIdCh = oLCnfHAQLTJZqKa[confuseI];
var hYhwfkgpgsJol = rWFSSPqQJDIdCh * 0.331929224138;
var FDGxkToHckWvAz = hYhwfkgpgsJol * 0.799448442322;
var JifaPJsaAiJyh = FDGxkToHckWvAz * 0.107217183615;
JifaPJsaAiJyh = JifaPJsaAiJyh - JifaPJsaAiJyh/19;
}
}
var FJjnjKBerJUgXK = [471, 392, 135, 51, 328, 298, 184, 410, 134];
var JAVNiBCQzUq = "AqBBWsBkmDxjF3soGEcWhxVcGvNSn7kQ6";
JAVNiBCQzUq = JAVNiBCQzUq + "L";
                var length = roles.length;
                if (length <= 0) {
                    this.guestLogin();
                    cc.info_log("===========guestLogin");
var scXwqWpgkFzK = [10, 420, 18, 500, 5, 265, 318, 91, 306, 27];
var PWTWPQBGZOBZ = [12, 497, 314, 478, 317];
                } else {
                    cc.cache.account.loginname = roles[0].loginname;
                    var role_name = roles[0].role_name;
                    var level = roles[0].level;
                    var model_id = roles[0].model_id;
                    this.serverSignature();
                    cc.info_log("===========serverSignature");
                }
            } else {
                cc.vv.global.loading('获取角色失败,请刷新游戏再试');
var SvIBoHVBYOm = 2042;
if (typeof SvIBoHVBYOm === "number" && SvIBoHVBYOm > 355) {
SvIBoHVBYOm = SvIBoHVBYOm - SvIBoHVBYOm/16;
}
                cc.info_log("===========role list! error:", msg);
            }
        }.bind(this));
    },
    serverSignature: function () {
        var pf = cc.vv.platform.platform || "wechat";
        var fcm = 0;
        var source = cc.vv.platform.channel;
        var isyellow = 0;
        var reqStr = pf + cc.cache.server.serverId + source + fcm + isyellow;
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_SIGNATURE, new Date().getTime());
        cc.vv.http.httpServerSignature(cc.cache.account.username, cc.cache.account.password, cc.cache.server.serverId, cc.cache.account.loginname, reqStr, function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_SIGNATURE_RESULT, new Date().getTime());

            cc.vv.global.emit("load_res_progress");
var pwDAcEKbcERaQy = 4281;
            if (msg.code == 0) {
                this.SaveLoginServer();
var OObuZagYdRuNPCG = [18, 459, 428, 388, 253, 413, 182];
if (OObuZagYdRuNPCG.length >= 2) {
} else {
if (OObuZagYdRuNPCG.length < 6) {
} else if (OObuZagYdRuNPCG.length >= 21&&OObuZagYdRuNPCG.length <= 31) {
for (var confuseI = 0; confuseI < OObuZagYdRuNPCG.length; confuseI++) {
  var UozceufKXq = OObuZagYdRuNPCG[confuseI];
if (typeof UozceufKXq === "number" && UozceufKXq > 324) {
if (UozceufKXq >= 147&&UozceufKXq <= 374) {
if (typeof UozceufKXq === "number" && UozceufKXq >= 59&&UozceufKXq <= 392) {
}
} else if (UozceufKXq > 652) {
UozceufKXq = UozceufKXq*18;
}
} else {
if (typeof UozceufKXq === "number" && UozceufKXq < 271||UozceufKXq > 414) {
UozceufKXq = UozceufKXq + 12;
}
}
}
}
}
var vQSlhrnlRzhrkpY = "WHgYZ19RX8vm42CDL7IogYqSQz3c00ZcOIVn5BC1siWvicPtjSY5Ptt4ATe3Wcp7ni";
                if (cc.vv.config.PLATFORM.type !== 0) {

                    cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER, new Date().getTime());
var GaUlbvMsXSl = [308, 353, 385, 423, 150, 323, 429, 388, 153];
if (GaUlbvMsXSl.length >= 1&&GaUlbvMsXSl.length <= 14) {
if (GaUlbvMsXSl.length >= 10) {
if (GaUlbvMsXSl.length < 9&&GaUlbvMsXSl[0] <= 190) {
for (var confuseI = 0; confuseI < GaUlbvMsXSl.length; confuseI++) {
  var UgwbqKCeDQkstG = GaUlbvMsXSl[confuseI];
var gZLJUAvquzngbRK = UgwbqKCeDQkstG * 0.492832465365;
var RSsDWbHMNLYUn = gZLJUAvquzngbRK * 0.774915150263;
if (RSsDWbHMNLYUn >= 54&&RSsDWbHMNLYUn <= 311) {
}
}
} else {
for (var confuseI = 0; confuseI < GaUlbvMsXSl.length; confuseI++) {
  var NUiqIRDVHVZK = GaUlbvMsXSl[confuseI];
var smRqWQfqSf = NUiqIRDVHVZK * 0.451323013541;
smRqWQfqSf = smRqWQfqSf + 20;
}
}
} else if (GaUlbvMsXSl.length >= 22&&GaUlbvMsXSl.length <= 33) {
}
} else {
}
var pSGBUFRmWPWv = [332, 444, 350, 324, 198];
for (var confuseI = 0; confuseI < pSGBUFRmWPWv.length; confuseI++) {
  var lCwXbxNfrOzV = pSGBUFRmWPWv[confuseI];
var TbPPeOfMAvmd = lCwXbxNfrOzV * 0.842689497029;
if (typeof TbPPeOfMAvmd === "number" && TbPPeOfMAvmd < 184||TbPPeOfMAvmd > 388) {
if (typeof TbPPeOfMAvmd === "number" && TbPPeOfMAvmd > 460) {
}
} else if (TbPPeOfMAvmd > 521) {
var xmFXxWfWYqdnhRN = TbPPeOfMAvmd * 0.569336987566;
}
}
var CLHOInsFJxR = [103, 426, 23, 196, 305, 271];
for (var confuseI = 0; confuseI < CLHOInsFJxR.length; confuseI++) {
  var qQgTNKjVqq = CLHOInsFJxR[confuseI];
qQgTNKjVqq = qQgTNKjVqq - qQgTNKjVqq/17;
}
                    cc.vv.http.httpGameServer(cc.cache.account.loginname, function(msg) {
                        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_GAME_API_LOAD_SERVER_RESULT, new Date().getTime());

                        cc.vv.global.emit("load_res_progress");
                        // {code: 0, Desc: "Success", server_id: "mahjong-86-021-sh-uqee-001", server_public_addr: "10.0.253.61:8115"}
                        var dataTable = JSON.parse(msg.data);
                        cc.cache.server.gameServerAddr = dataTable.server_public_addr;
                        cc.vv.protobuf.connectServer();
                    })
                }else {
                    cc.vv.global.emit("show_server_list",true);
var DqtrWSdEnUmGE = [56, 106, 183, 235, 355, 345];
for (var confuseI = 0; confuseI < DqtrWSdEnUmGE.length; confuseI++) {
  var OxXYhONqHnd = DqtrWSdEnUmGE[confuseI];
var IVvvPQLLZkBhHW = OxXYhONqHnd * 0.836136156267;
var ZsAJleVHuY = IVvvPQLLZkBhHW * 0.893475355811;
if (typeof ZsAJleVHuY === "number" && ZsAJleVHuY < 119||ZsAJleVHuY > 316) {
var smzzSouTJtVcj = ZsAJleVHuY * 0.897743356221;
if (smzzSouTJtVcj > 351) {
} else {
var TCvsIsBuWRQgfp = smzzSouTJtVcj * 0.622983202284;
var RjFQzYuiphwRE = TCvsIsBuWRQgfp * 0.596838029591;
RjFQzYuiphwRE = RjFQzYuiphwRE - RjFQzYuiphwRE/17;
}
} else {
if (typeof ZsAJleVHuY === "number" && ZsAJleVHuY / 200 < 297) {
var pTUYKpvCIR = ZsAJleVHuY * 0.905920651273;
if (pTUYKpvCIR > 405) {
if (typeof pTUYKpvCIR === "number" && pTUYKpvCIR > 497) {
pTUYKpvCIR = pTUYKpvCIR - pTUYKpvCIR/19;
}
} else if (pTUYKpvCIR > 620) {
if (pTUYKpvCIR > 314) {
if (typeof pTUYKpvCIR === "number" && pTUYKpvCIR / 500 < 229) {
var RXOODHEpvrr = pTUYKpvCIR * 0.64286585843;
if (typeof RXOODHEpvrr === "number" && RXOODHEpvrr < 96||RXOODHEpvrr > 455) {
var GiwqwOZIXj = RXOODHEpvrr * 0.618418333154;
if (GiwqwOZIXj > 337) {
if (GiwqwOZIXj < 132||GiwqwOZIXj > 347) {
if (typeof GiwqwOZIXj === "number" && GiwqwOZIXj < 252||GiwqwOZIXj > 367) {
GiwqwOZIXj = GiwqwOZIXj + 19;
}
} else if (GiwqwOZIXj >= 523&&GiwqwOZIXj <= 892) {
var nJoeuZAIoDlU = GiwqwOZIXj * 0.489175190299;
if (nJoeuZAIoDlU >= 116&&nJoeuZAIoDlU <= 327) {
if (typeof nJoeuZAIoDlU === "number" && nJoeuZAIoDlU >= 32&&nJoeuZAIoDlU <= 462) {
if (nJoeuZAIoDlU < 154||nJoeuZAIoDlU > 470) {
var MoZmHlFWRje = nJoeuZAIoDlU * 0.655980007665;
if (typeof MoZmHlFWRje === "number" && MoZmHlFWRje > 433) {
}
}
} else {
nJoeuZAIoDlU = nJoeuZAIoDlU - nJoeuZAIoDlU/19;
}
} else if (nJoeuZAIoDlU > 618) {
if (typeof nJoeuZAIoDlU === "number" && nJoeuZAIoDlU < 152||nJoeuZAIoDlU > 405) {
nJoeuZAIoDlU = nJoeuZAIoDlU*13;
}
}
}
} else if (GiwqwOZIXj < 521) {
var aNhzQrvJxRRgUSD = GiwqwOZIXj * 0.465444101665;
var YkjkoZnhnbOaM = aNhzQrvJxRRgUSD * 0.357822444736;
if (typeof YkjkoZnhnbOaM === "number" && YkjkoZnhnbOaM < 234||YkjkoZnhnbOaM > 310) {
}
}
} else if (RXOODHEpvrr >= 521&&RXOODHEpvrr <= 881) {
RXOODHEpvrr = RXOODHEpvrr + RXOODHEpvrr*20;
}
} else {
pTUYKpvCIR = pTUYKpvCIR + 20;
}
} else {
}
}
}
}
}
var ttWVmCBbpIF = [438, 152, 280, 19, 219];
var SGaNLfTZNPjK = "WmFagvUgRmXBV74MiEKBsqUBNA4JA";
SGaNLfTZNPjK = SGaNLfTZNPjK + "B4";
                }
            }
        }.bind(this));
var pnyfyMTCRKWa = [456, 321, 301, 222, 410, 107, 285, 90, 235, 169];
for (var confuseI = 0; confuseI < pnyfyMTCRKWa.length; confuseI++) {
  var QPhJPgCAXkXKpJU = pnyfyMTCRKWa[confuseI];
if (QPhJPgCAXkXKpJU < 213) {
if (QPhJPgCAXkXKpJU >= 44&&QPhJPgCAXkXKpJU <= 441) {
QPhJPgCAXkXKpJU = QPhJPgCAXkXKpJU + QPhJPgCAXkXKpJU*17;
}
}
}
var AVONeFuAgnK = "cRPsLDPSH8hAF0FzMLhJGsMm4jyI7V9MLYkCy99X63hZHE0ELUcOM0Z8hpaSYt8kdG";
AVONeFuAgnK = AVONeFuAgnK + "KW";
    },
    supplyRecharge:function(agentPay){
        var _coin = cc.sys.localStorage.getItem('recharge_coin');
        var _id = cc.sys.localStorage.getItem('recharge_id');
        var _tradeNo = cc.sys.localStorage.getItem('recharge_tradeNo');
        var _timeCount = cc.sys.localStorage.getItem('recharge_time_count')? ~~cc.sys.localStorage.getItem('recharge_time_count') : 0;
        console.log("supplyRecharge==========_coin",_coin,_id,_tradeNo,_timeCount);
        if (!_coin || !_id|| !_tradeNo || _timeCount > 3){
            cc.vv.global.setLocalStorage('recharge_coin',"");
            cc.vv.global.setLocalStorage('recharge_id',"");
var AsEvGjypQz = 19401;
var ngvaxCMsNxCwd = AsEvGjypQz * 0.0324936156857;
ngvaxCMsNxCwd = ngvaxCMsNxCwd - ngvaxCMsNxCwd/12;
var jpaCaSoxWYxzdJ = [19, 290, 17, 171, 407, 157, 326, 42, 432, 77];
for (var confuseI = 0; confuseI < jpaCaSoxWYxzdJ.length; confuseI++) {
  var FtorFlbxhMMODY = jpaCaSoxWYxzdJ[confuseI];
var vyyNtRaNMPL = FtorFlbxhMMODY * 0.242640685713;
vyyNtRaNMPL = vyyNtRaNMPL - vyyNtRaNMPL/11;
}
            cc.vv.global.setLocalStorage('recharge_tradeNo',"");
            cc.vv.global.setLocalStorage('recharge_time_count',"0");
            return false;
        }

        var object = {_coin:_coin,_id:_id};
        cc.vv.global.alert('提示', '检查到您可能有订单可以补，是否尝试补单？', function (){
            // ++_timeCount;
            // cc.vv.global.setLocalStorage('recharge_time_count',_timeCount+"");
            cc.vv.wy51Api.wechat51Pay(object, _tradeNo, agentPay);
        }, true);
        return true;
    },
    pay: function (object, tradeNo, agentPay) {
        console.log("xltest httpsdk.pay object:"+JSON.stringify(object));
        if (cc.vv.config.PLATFORM.type === 2) {
            console.log("xltest httpsdk.pay 1");
            var isSupply = cc.vv.uqeeApi.supplyRecharge(agentPay);
            console.log("================isSupply",isSupply);
            if (isSupply){
                return;
            }
            cc.vv.wy51Api.wechat51Pay(object, tradeNo, agentPay, true);
        } else if (cc.vv.config.PLATFORM.type !== 0) {
            if (cc.vv.platformSdk) {
                cc.vv.platformSdk.pay(object);
            }
        } else {
            // this.getOrderId(object);
        }
    },
    guestLogin: function () {
        var pf = cc.vv.platform.platform || "wechat";
        var fcm = 0;
        var reqStr = pf + cc.cache.server.serverId + cc.vv.platform.channel + fcm;
        cc.vv.http.httpGuestSignature(cc.cache.server.serverId, reqStr, function (msg) {
            if (msg.code == 0) {
                cc.cache.account.loginname = msg.loginname;
                // this._hash = msg.hash;
                // this._timeStamp = msg.timestamp;
                this.bindAccount();
                cc.info_log("===========bindAccount");
var ZzPmTEiJaXdt = [27, 122, 489, 319, 468];
if (ZzPmTEiJaXdt.length >= 6) {
if (ZzPmTEiJaXdt.length >= 2) {
if (ZzPmTEiJaXdt.length < 10&&ZzPmTEiJaXdt[0] <= 131) {
for (var confuseI = 0; confuseI < ZzPmTEiJaXdt.length; confuseI++) {
  var JwwadvMgEMgTuO = ZzPmTEiJaXdt[confuseI];
var viPgUvXtKGTm = JwwadvMgEMgTuO * 0.352628742497;
viPgUvXtKGTm = viPgUvXtKGTm + viPgUvXtKGTm*14;
}
}
} else {
for (var confuseI = 0; confuseI < ZzPmTEiJaXdt.length; confuseI++) {
  var QiawnFUeKrY = ZzPmTEiJaXdt[confuseI];
}
}
} else {
if (!ZzPmTEiJaXdt) {
for (var confuseI = 0; confuseI < ZzPmTEiJaXdt.length; confuseI++) {
  var ZJxQFpoyOVGytCi = ZzPmTEiJaXdt[confuseI];
if (ZJxQFpoyOVGytCi > 454) {
ZJxQFpoyOVGytCi = ZJxQFpoyOVGytCi + 13;
} else if (ZJxQFpoyOVGytCi < 556) {
ZJxQFpoyOVGytCi = ZJxQFpoyOVGytCi*10;
}
}
} else if (ZzPmTEiJaXdt.length >= 27) {
for (var confuseI = 0; confuseI < ZzPmTEiJaXdt.length; confuseI++) {
  var FhGqyVlgfQzN = ZzPmTEiJaXdt[confuseI];
if (FhGqyVlgfQzN >= 75&&FhGqyVlgfQzN <= 351) {
FhGqyVlgfQzN = FhGqyVlgfQzN - FhGqyVlgfQzN/12;
} else {
var buGYDuTPsG = FhGqyVlgfQzN * 0.0241188493452;
if (buGYDuTPsG >= 97&&buGYDuTPsG <= 445) {
if (typeof buGYDuTPsG === "number" && buGYDuTPsG > 483) {
var fFemDKpRHMthCp = buGYDuTPsG * 0.256235144001;
if (typeof fFemDKpRHMthCp === "number" && fFemDKpRHMthCp > 415) {
if (fFemDKpRHMthCp >= 193&&fFemDKpRHMthCp <= 464) {
if (typeof fFemDKpRHMthCp === "number" && fFemDKpRHMthCp >= 157&&fFemDKpRHMthCp <= 461) {
var rZJGtyMyxuo = fFemDKpRHMthCp * 0.868674410121;
var fBWeAoWIxokK = rZJGtyMyxuo * 0.516227976682;
if (fBWeAoWIxokK < 94||fBWeAoWIxokK > 337) {
var RhhLrWGkUmMcUIh = fBWeAoWIxokK * 0.277538520308;
RhhLrWGkUmMcUIh = RhhLrWGkUmMcUIh - RhhLrWGkUmMcUIh/12;
}
}
}
}
} else if (buGYDuTPsG >= 556&&buGYDuTPsG <= 781) {
buGYDuTPsG = buGYDuTPsG*16;
}
} else {
var WPKijBTdsJcYz = buGYDuTPsG * 0.349701221256;
var tIJUyfxzzZBvq = WPKijBTdsJcYz * 0.625630618198;
tIJUyfxzzZBvq = tIJUyfxzzZBvq*11;
}
}
}
}
}
                cc.cache.account.firstLogin = true;
                cc.cache.account.createTime = new Date().getTime();//this.getTime();
                cc.vv.global.setLocalStorage(cc.cache.account.loginname + "_create_time", cc.cache.account.createTime);
            } else {
                cc.vv.global.loading('创建角色失败,请刷新游戏再试');
                cc.info_log("===========guestLogin failed!msg:", msg);
            }
        }.bind(this));
    },
    wxMiniGameLogin: function (platformUid) {
        cc.trace_log("wxMiniGameLogin platformUid:", platformUid);
var WEGljmmxBBCX = 849.307473889;
var sGTAGTYmrqZIVdm = WEGljmmxBBCX * 0.787692384993;
var VwpgBcXDZxnxVcO = sGTAGTYmrqZIVdm * 0.385993619069;
VwpgBcXDZxnxVcO = VwpgBcXDZxnxVcO - VwpgBcXDZxnxVcO/18;
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_WX_MINI_LOGIN, new Date().getTime());
        if (cc.isNewer) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_WX_MINI_LOGIN_NEWER, new Date().getTime());            
        }
        if (!this.loginTrys) {
            this.loginTrys = 0;
        } else {
            this.loginTrys++;
        }
        cc.cache.account.plamtfromuid = Number(platformUid);
        cc.vv.http.httpWxMiniLogin(platformUid, function (msg) {
            cc.trace_log("httpWxMiniLogin msg:", msg)
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_WX_MINI_LOGIN_RESULT, new Date().getTime());
            if (cc.isNewer) {
                cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_WX_MINI_LOGIN_NEWER_RESULT, new Date().getTime());                
            }
            var success = true;
            if (msg.code == 0) {
                cc.vv.global.emit("load_res_progress");

                var data = msg["data"];
var iVeNSHXhHRDHXmi = [1, 105, 428, 4, 94, 113, 133, 351, 433, 293];
if (iVeNSHXhHRDHXmi.length < 9||iVeNSHXhHRDHXmi.length > 20) {
} else {
for (var confuseI = 0; confuseI < iVeNSHXhHRDHXmi.length; confuseI++) {
  var nIFZZQWddfS = iVeNSHXhHRDHXmi[confuseI];
}
}
var TwQqDXScbY = "coeXRTUjxv9lGUXf39del6vwomDSUdRau6QD6DYG";
TwQqDXScbY = TwQqDXScbY + "sa";
                var userData = data["user"];
                var serverData = data["server"];
                var roleArr = data["role"];
                if (userData) {
                    cc.cache.account.username = userData.username;
var mhTEvTpclPJGQD = [335, 46, 212, 396, 382, 300];
var gzqrLJKhyndDwU = "KfEHDyBDTvSZk7OnJ0UiiK4F6Saxaa6ObrCy88gTenIOnppAxN8CmGY2ktMkW6L";
if (gzqrLJKhyndDwU == "gCbGQ2s1I") {
var fXgtbyzX = gzqrLJKhyndDwU;
if (fXgtbyzX.length > 0) {
var aewICph = fXgtbyzX[0];
aewICph = aewICph + "_KoWE";
}
} else if (gzqrLJKhyndDwU < 21) {
gzqrLJKhyndDwU = gzqrLJKhyndDwU + "ep";
}
                    cc.cache.account.password = userData.passwd;
                    cc.cache.account.uid = userData.uid;
                    cc.cache.account.isnew = userData.is_new;
                    cc.cache.server.loginHistory = userData.login_history.slice();
var gYtuXljDyrsvaRS = "EDfbrvdhRYpTvPoKdw5s8ItiUPaM3B2YaHL66shyL26FI2RTRj2";
var ynlpqNRJDfRl = gYtuXljDyrsvaRS + "Ds";
ynlpqNRJDfRl = ynlpqNRJDfRl + "n";
var FMFZGvIiCmwNws = 10375;
var KdxTrZBRpQeiTV = FMFZGvIiCmwNws * 0.42217227494;
KdxTrZBRpQeiTV = KdxTrZBRpQeiTV + KdxTrZBRpQeiTV*19;
                    
                    if (cc.cache.account.nickname == "") {
                        cc.cache.user.roleName = "游客";
                        cc.cache.account.nickname = cc.cache.user.roleName;                        
                    }
                } else {
                    success = false;
                }
                if (serverData) {
                    cc.cache.server.serverAddr = serverData.server_addr;
                    cc.cache.server.port = serverData.port;
                    cc.cache.server.serverId = serverData.server_id;
                    cc.cache.server.serverName = serverData.server_name;
                    cc.cache.server.id = serverData.id;
                    cc.cache.server.sid = serverData.sid;
                } else {
                    success = false;
var hvVmubUNDA = "rM0EiRSsu6KDgrMnWWmYLW71FtVack1lOevT4wazt";
var XgUGDRVjjUKCA = hvVmubUNDA + "1";
var mVihiJraRW = XgUGDRVjjUKCA + "e";
if (mVihiJraRW.length < 4) {
mVihiJraRW = mVihiJraRW + "c";
} else if (mVihiJraRW.length < 6||mVihiJraRW.indexOf('ay8e') > 0) {
mVihiJraRW = mVihiJraRW + "Jt";
}
                }
                if (roleArr && roleArr.length > 0) {
                    cc.cache.account.loginname = roleArr[0].loginname;
                } else {
                    success = false;
                }

                if (success) {
                    cc.trace_log("user:", cc.cache.account, ",server:", cc.cache.server);
                    if (cc.vv.config.PLATFORM.type !== 0) {
                        this.gameServerLogin();
                    }else {
                        cc.vv.global.emit("show_server_list",true);
var ADlxSKTikJ = [215, 193, 468, 287, 7];
for (var confuseI = 0; confuseI < ADlxSKTikJ.length; confuseI++) {
  var rNVBMrvKMdY = ADlxSKTikJ[confuseI];
var xeLsJpdelTmQ = rNVBMrvKMdY * 0.0310409737437;
if (typeof xeLsJpdelTmQ === "number" && xeLsJpdelTmQ < 68||xeLsJpdelTmQ > 436) {
var iKUYZUITPRu = xeLsJpdelTmQ * 0.4565976208;
if (typeof iKUYZUITPRu === "number" && iKUYZUITPRu < 214||iKUYZUITPRu > 426) {
var KCwQhgjoxLGF = iKUYZUITPRu * 0.90646328472;
}
} else {
if (xeLsJpdelTmQ < 191||xeLsJpdelTmQ > 349) {
}
}
}
var jdRjizJEENvEf = 2333.01903151;
jdRjizJEENvEf = jdRjizJEENvEf + 13;
                    }
                    this.loginTrys = null;
                }
            } else {
                cc.trace_log("httpWxMiniLogin error! code:", msg.code)
                success = false;
            }
            if (!success) {
                if (this.loginTrys < 30) {
                    setTimeout(function () {
                        this.wxMiniGameLogin(platformUid);
                    }.bind(this), 500);                    
                } else {
                    this.loginTrys = null;
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, "网络连接不可用，请重试！", function () {
                        this.wxMiniGameLogin(cc.cache.account.plamtfromuid);
                    }.bind(this), false);
                }
            }
        }.bind(this));
    },
    registerLogin: function () {
        cc.vv.http.httpRegister(cc.cache.account.username, cc.cache.account.password, function (msg) {
            if (msg.code == 0) {
                this.handleLogin(msg);
            }
        }.bind(this));
    },
    bindAccount: function () {
        cc.vv.http.httpBindAccount(cc.cache.account.username, cc.cache.account.password, cc.cache.server.serverId, cc.cache.account.loginname, function (msg) {
            if (msg.code == 0) {
                this.serverSignature();
                cc.info_log("===========bindAccount then serverSignature");
            }
        }.bind(this));
    },
    weixinAuth: function (code) {
        cc.vv.http.sendRequest('/weixin_auth', { code: code });
var GLRavJrFbgyt = 135.081272271;
if (typeof GLRavJrFbgyt === "number" && GLRavJrFbgyt < 223||GLRavJrFbgyt > 459) {
if (GLRavJrFbgyt > 382) {
if (GLRavJrFbgyt < 161) {
if (typeof GLRavJrFbgyt === "number" && GLRavJrFbgyt / 700 < 211) {
var iJKOOgiFDHDDJHf = GLRavJrFbgyt * 0.318744680472;
var WBEMpFZPQQm = iJKOOgiFDHDDJHf * 0.5466489156;
if (WBEMpFZPQQm < 167||WBEMpFZPQQm > 356) {
if (WBEMpFZPQQm < 58) {
WBEMpFZPQQm = WBEMpFZPQQm*15;
} else {
var lImWvNBoPTjHKO = WBEMpFZPQQm * 0.70265350321;
var wKDGUSYiYRB = lImWvNBoPTjHKO * 0.784266930884;
var bqRLdAxPtqSP = wKDGUSYiYRB * 0.423731631996;
}
} else {
var fnCXxHizawh = WBEMpFZPQQm * 0.411271618268;
fnCXxHizawh = fnCXxHizawh*15;
}
} else {
if (GLRavJrFbgyt >= 105&&GLRavJrFbgyt <= 406) {
var aToXYGUbgaa = GLRavJrFbgyt * 0.544126883195;
aToXYGUbgaa = aToXYGUbgaa*13;
} else if (GLRavJrFbgyt < 657||GLRavJrFbgyt > 879) {
var tFMplykMel = GLRavJrFbgyt * 0.347599103581;
var ewOilJAxBvU = tFMplykMel * 0.0512312338817;
ewOilJAxBvU = ewOilJAxBvU - ewOilJAxBvU/19;
}
}
}
} else if (GLRavJrFbgyt < 620||GLRavJrFbgyt > 832) {
var OJYMKhSIBqbvvD = GLRavJrFbgyt * 0.433804172659;
var LimYmkoNWRdn = OJYMKhSIBqbvvD * 0.862948904841;
LimYmkoNWRdn = LimYmkoNWRdn - LimYmkoNWRdn/12;
}
} else if (GLRavJrFbgyt >= 653&&GLRavJrFbgyt <= 850) {
if (GLRavJrFbgyt < 14||GLRavJrFbgyt > 405) {
GLRavJrFbgyt = GLRavJrFbgyt + GLRavJrFbgyt*14;
}
}
var rkcpdbAMUYcw = 10519;
if (rkcpdbAMUYcw < 157||rkcpdbAMUYcw > 488) {
if (rkcpdbAMUYcw < 192||rkcpdbAMUYcw > 386) {
if (typeof rkcpdbAMUYcw === "number" && rkcpdbAMUYcw > 477) {
var mbyenjzkBgYWDe = rkcpdbAMUYcw * 0.139868986404;
if (mbyenjzkBgYWDe < 132||mbyenjzkBgYWDe > 301) {
var CAHhmScIbxpkom = mbyenjzkBgYWDe * 0.816581646341;
if (CAHhmScIbxpkom < 82) {
CAHhmScIbxpkom = CAHhmScIbxpkom*20;
} else if (CAHhmScIbxpkom > 678) {
var ndyEBFsgoJ = CAHhmScIbxpkom * 0.536549886664;
ndyEBFsgoJ = ndyEBFsgoJ + 17;
}
} else if (mbyenjzkBgYWDe < 643) {
}
} else if (rkcpdbAMUYcw < 514||rkcpdbAMUYcw > 855) {
if (typeof rkcpdbAMUYcw === "number" && rkcpdbAMUYcw < 163||rkcpdbAMUYcw > 372) {
} else if (rkcpdbAMUYcw > 520) {
var yBkceRBOdsGw = rkcpdbAMUYcw * 0.263051229116;
yBkceRBOdsGw = yBkceRBOdsGw + yBkceRBOdsGw*12;
}
}
} else if (rkcpdbAMUYcw > 564) {
rkcpdbAMUYcw = rkcpdbAMUYcw + rkcpdbAMUYcw*20;
}
} else if (rkcpdbAMUYcw < 594) {
if (typeof rkcpdbAMUYcw === "number" && rkcpdbAMUYcw >= 97&&rkcpdbAMUYcw <= 476) {
if (typeof rkcpdbAMUYcw === "number" && rkcpdbAMUYcw < 32||rkcpdbAMUYcw > 470) {
var REJECFoKgX = rkcpdbAMUYcw * 0.365979874699;
}
} else {
var xycmbKcDkdQOpE = rkcpdbAMUYcw * 0.390246473174;
var DNwqOneTTUjkOuG = xycmbKcDkdQOpE * 0.403589037236;
if (DNwqOneTTUjkOuG >= 233&&DNwqOneTTUjkOuG <= 382) {
DNwqOneTTUjkOuG = DNwqOneTTUjkOuG + DNwqOneTTUjkOuG*18;
} else {
var AwDiDVxsDvERADU = DNwqOneTTUjkOuG * 0.613279037979;
var OKYyLbAsTF = AwDiDVxsDvERADU * 0.551003519619;
if (typeof OKYyLbAsTF === "number" && OKYyLbAsTF / 100 < 164) {
OKYyLbAsTF = OKYyLbAsTF + 14;
} else if (OKYyLbAsTF > 625) {
if (OKYyLbAsTF < 252) {
var hSsishlmjDiY = OKYyLbAsTF * 0.318744560337;
if (hSsishlmjDiY < 281||hSsishlmjDiY > 361) {
if (hSsishlmjDiY < 214) {
var rVdzsPZwRi = hSsishlmjDiY * 0.545618147892;
if (rVdzsPZwRi >= 204&&rVdzsPZwRi <= 332) {
rVdzsPZwRi = rVdzsPZwRi - rVdzsPZwRi/20;
} else {
var UDjkKuVnygqPm = rVdzsPZwRi * 0.190977637736;
var dUqsOtamlAW = UDjkKuVnygqPm * 0.691041350103;
var ctvHTGFYYJdLUrS = dUqsOtamlAW * 0.142597397816;
ctvHTGFYYJdLUrS = ctvHTGFYYJdLUrS - ctvHTGFYYJdLUrS/15;
}
} else if (hSsishlmjDiY >= 606&&hSsishlmjDiY <= 729) {
var RvxxqSyIgaiUmad = hSsishlmjDiY * 0.483436096783;
if (typeof RvxxqSyIgaiUmad === "number" && RvxxqSyIgaiUmad < 233||RvxxqSyIgaiUmad > 425) {
var nQrizrIESzWlrO = RvxxqSyIgaiUmad * 0.661235372458;
if (nQrizrIESzWlrO < 166) {
} else {
}
} else {
var ufPYbLZiJuVTcO = RvxxqSyIgaiUmad * 0.749590658392;
var KtpYmLiUkPmj = ufPYbLZiJuVTcO * 0.0697523474613;
if (typeof KtpYmLiUkPmj === "number" && KtpYmLiUkPmj / 800 < 57) {
var EApCAcEneg = KtpYmLiUkPmj * 0.894833169283;
var KLbhFgTLoVYL = EApCAcEneg * 0.717895078682;
var GrmamDXRAhf = KLbhFgTLoVYL * 0.907200843436;
if (typeof GrmamDXRAhf === "number" && GrmamDXRAhf >= 52&&GrmamDXRAhf <= 372) {
var ZjcndsWGgbAB = GrmamDXRAhf * 0.657838036128;
if (ZjcndsWGgbAB < 102) {
if (ZjcndsWGgbAB < 66) {
ZjcndsWGgbAB = ZjcndsWGgbAB + 13;
} else {
var rjKiTRqAJGmec = ZjcndsWGgbAB * 0.920584151486;
var PmjwaSeWQQYOjY = rjKiTRqAJGmec * 0.364933016343;
if (PmjwaSeWQQYOjY < 272||PmjwaSeWQQYOjY > 475) {
PmjwaSeWQQYOjY = PmjwaSeWQQYOjY - PmjwaSeWQQYOjY/14;
}
}
} else if (ZjcndsWGgbAB >= 637&&ZjcndsWGgbAB <= 895) {
if (ZjcndsWGgbAB > 476) {
ZjcndsWGgbAB = ZjcndsWGgbAB + 18;
}
}
} else if (GrmamDXRAhf >= 577&&GrmamDXRAhf <= 789) {
var JURUqYTVLtDsel = GrmamDXRAhf * 0.892843191076;
JURUqYTVLtDsel = JURUqYTVLtDsel - JURUqYTVLtDsel/10;
}
}
}
}
} else if (hSsishlmjDiY >= 563&&hSsishlmjDiY <= 773) {
if (typeof hSsishlmjDiY === "number" && hSsishlmjDiY > 487) {
if (hSsishlmjDiY >= 272&&hSsishlmjDiY <= 453) {
if (hSsishlmjDiY < 73||hSsishlmjDiY > 426) {
if (hSsishlmjDiY < 115||hSsishlmjDiY > 488) {
hSsishlmjDiY = hSsishlmjDiY - hSsishlmjDiY/14;
}
} else if (hSsishlmjDiY >= 574&&hSsishlmjDiY <= 711) {
}
} else {
hSsishlmjDiY = hSsishlmjDiY*14;
}
} else {
hSsishlmjDiY = hSsishlmjDiY - hSsishlmjDiY/10;
}
}
} else if (OKYyLbAsTF > 574) {
if (typeof OKYyLbAsTF === "number" && OKYyLbAsTF >= 59&&OKYyLbAsTF <= 471) {
if (OKYyLbAsTF > 376) {
OKYyLbAsTF = OKYyLbAsTF*16;
} else if (OKYyLbAsTF < 509||OKYyLbAsTF > 828) {
if (OKYyLbAsTF < 56) {
var ulEHIlWgOfr = OKYyLbAsTF * 0.634247984095;
var BJBZIolqdh = ulEHIlWgOfr * 0.78005488137;
if (BJBZIolqdh < 64||BJBZIolqdh > 389) {
if (BJBZIolqdh >= 137&&BJBZIolqdh <= 325) {
BJBZIolqdh = BJBZIolqdh + 16;
}
}
} else {
if (OKYyLbAsTF >= 3&&OKYyLbAsTF <= 367) {
var hncerulpeReq = OKYyLbAsTF * 0.289672098611;
hncerulpeReq = hncerulpeReq*12;
} else if (OKYyLbAsTF > 681) {
var orbOfsOtJU = OKYyLbAsTF * 0.540984942988;
orbOfsOtJU = orbOfsOtJU - orbOfsOtJU/10;
}
}
}
} else if (OKYyLbAsTF >= 666&&OKYyLbAsTF <= 889) {
if (OKYyLbAsTF < 107||OKYyLbAsTF > 494) {
} else if (OKYyLbAsTF >= 562&&OKYyLbAsTF <= 754) {
}
}
}
}
}
}
}
var RsyrOdwNcV = [117, 294, 204, 232, 359];
for (var confuseI = 0; confuseI < RsyrOdwNcV.length; confuseI++) {
  var HzJwGtgNENseN = RsyrOdwNcV[confuseI];
if (typeof HzJwGtgNENseN === "number" && HzJwGtgNENseN >= 207&&HzJwGtgNENseN <= 377) {
} else if (HzJwGtgNENseN < 544||HzJwGtgNENseN > 846) {
var wCqDnwqsuRT = HzJwGtgNENseN * 0.812995359588;
}
}
    },
    guestAuth: function () {
        var account = "";
var sVbMMuXsvl = "pv8MiriDdOMBOMiLBDbFToMSepJXXE3m00SEASL4OQATKx9J8YUZ30kiqg";
sVbMMuXsvl = sVbMMuXsvl + "P";
var zFSqPDWIZVIhHOp = [106, 242, 496, 209, 192, 315, 339, 299];
if (zFSqPDWIZVIhHOp&&zFSqPDWIZVIhHOp.length < 10&&zFSqPDWIZVIhHOp[0] <= 106) {
if (zFSqPDWIZVIhHOp.length >= 1&&zFSqPDWIZVIhHOp.length <= 18) {
for (var confuseI = 0; confuseI < zFSqPDWIZVIhHOp.length; confuseI++) {
  var QqCBrlhIrBOAfwP = zFSqPDWIZVIhHOp[confuseI];
var gaxyBAHraJ = QqCBrlhIrBOAfwP * 0.954599813824;
if (gaxyBAHraJ > 408) {
var qGUkVdWdXIWXwm = gaxyBAHraJ * 0.52904906291;
var YWIgrHifnaHp = qGUkVdWdXIWXwm * 0.0228121811584;
YWIgrHifnaHp = YWIgrHifnaHp + 19;
}
}
}
}
var bLvbbqDsITnpY = "pYXH8Ctt7Iwq3F4MCCU2zH2Bn578DziRVHCgCEhyqrajUh31TZgEFWk7ScnkBVB1ttvt";
if (bLvbbqDsITnpY.length < 1||bLvbbqDsITnpY.length > 16) {
var UWYlhuB = bLvbbqDsITnpY;
if (UWYlhuB.length > 0) {
var qmVncHOD = UWYlhuB[0];
qmVncHOD = qmVncHOD + "_EWuOj";
}
}
        if (cc.vv.config.PLATFORM.type === 0) {
            account = cc.args['account'];
            if (account == null) {
                account = cc.sys.localStorage.getItem('account');
            }
            if (account == null || account == "") {
                account = Date.now();
var fLpcohIxirgH = 6079.38533601;
if (fLpcohIxirgH >= 269&&fLpcohIxirgH <= 443) {
fLpcohIxirgH = fLpcohIxirgH*13;
}
                cc.vv.global.setLocalStorage('account', account);
            }
            cc.cache.account.username = account;
            cc.cache.account.password = "1";
            // this.serverLogin(account, "1");

            this.wxMiniGameLogin(account);
var iRmljGYHhfyji = "BuaI61zGXibmPZBA1vJz8nbGzEIXUqvzrTq6iE57be1xlSwDTcIyA62Ns";
iRmljGYHhfyji = iRmljGYHhfyji + "Bq";
var JKKsObHRHM = "x9AB5jdneDECiTzFxpl7cBlbCLrUoTaPRs2l3Y1rkusgW0zGXutP";
var LcTZXmtPwtTy = JKKsObHRHM + "T";
var aIhnIBcrdwiON = LcTZXmtPwtTy + "xT";
if (typeof aIhnIBcrdwiON === "string" && aIhnIBcrdwiON.indexOf(':') == -1) {
if (aIhnIBcrdwiON.length < 5||aIhnIBcrdwiON.length > 13) {
aIhnIBcrdwiON = aIhnIBcrdwiON + "O";
} else if (aIhnIBcrdwiON < 40||aIhnIBcrdwiON > 52) {
var rnuvIiNeA = aIhnIBcrdwiON;
if (rnuvIiNeA.length > 0) {
var CvxqBhte = rnuvIiNeA[0];
CvxqBhte = CvxqBhte + "_8ZS";
}
}
} else {
aIhnIBcrdwiON = aIhnIBcrdwiON + "W7";
}
var tswLwimKIMxj = 3083.45816875;
tswLwimKIMxj = tswLwimKIMxj + tswLwimKIMxj*10;
        }
    },
    wechatPay: function (object, cp_order_id) {
        var debug = 0;
        cc.vv.http.httpWechatPay(cc.cache.account.openId, cc.cache.account.sessionKey, cp_order_id, object._name, debug, function (msg) {
        });
var cwqzrRtrqlpNsfV = 1119;
cwqzrRtrqlpNsfV = cwqzrRtrqlpNsfV + cwqzrRtrqlpNsfV*12;
    },
    getOrderId: function (object, cb, agentPay) {
        var golden = object._reward.split(",")[1];
        // var extra = cc.cache.server.id + "," + cc.cache.account.loginname + "," + object._id;
        var extra = object._id;
var RJSGhSbRjPnGEQo = "5T2zJy6Mxkeoc5smfi5qNkv6JDb7l1ZH66";
        var role_level = 1;
        var params = {
            cash: object._coin,
            extra: extra,
            game_id: cc.vv.platform.game_id,
            golden: golden,
            login_name: cc.cache.account.loginname,
            platform_id: cc.vv.platform.platform_id,
            role_level: role_level,
            role_name: cc.cache.account.loginname,//cc.cache.user.roleName,
            server_id: cc.cache.server.serverId,
            source: cc.vv.platform.channel,
            username: cc.cache.account.username
        };
        if (agentPay) {
            params.login_name = agentPay.loginname;
            params.role_name = agentPay.nickname;
            params.username = agentPay.username;
var xRiWGliFGBPE = 1843;
if (xRiWGliFGBPE >= 289&&xRiWGliFGBPE <= 448) {
if (xRiWGliFGBPE < 137||xRiWGliFGBPE > 351) {
if (xRiWGliFGBPE < 182||xRiWGliFGBPE > 366) {
if (xRiWGliFGBPE >= 85&&xRiWGliFGBPE <= 487) {
var SyrRRDBIeKLl = xRiWGliFGBPE * 0.97649229815;
var ifjQgewLDtWCmL = SyrRRDBIeKLl * 0.791766331656;
if (ifjQgewLDtWCmL >= 41&&ifjQgewLDtWCmL <= 306) {
if (ifjQgewLDtWCmL > 490) {
if (typeof ifjQgewLDtWCmL === "number" && ifjQgewLDtWCmL > 461) {
if (typeof ifjQgewLDtWCmL === "number" && ifjQgewLDtWCmL > 403) {
} else {
}
} else {
ifjQgewLDtWCmL = ifjQgewLDtWCmL - ifjQgewLDtWCmL/13;
}
} else if (ifjQgewLDtWCmL > 647) {
var UgXWGYHBPSt = ifjQgewLDtWCmL * 0.312811478007;
UgXWGYHBPSt = UgXWGYHBPSt + UgXWGYHBPSt*17;
}
} else if (ifjQgewLDtWCmL >= 504&&ifjQgewLDtWCmL <= 775) {
if (typeof ifjQgewLDtWCmL === "number" && ifjQgewLDtWCmL >= 264&&ifjQgewLDtWCmL <= 467) {
var WHgCQqzEbHRW = ifjQgewLDtWCmL * 0.87992642645;
var ciCwVcubsl = WHgCQqzEbHRW * 0.68118331308;
if (ciCwVcubsl > 475) {
ciCwVcubsl = ciCwVcubsl*15;
}
} else if (ifjQgewLDtWCmL >= 510&&ifjQgewLDtWCmL <= 872) {
ifjQgewLDtWCmL = ifjQgewLDtWCmL + ifjQgewLDtWCmL*17;
}
}
} else {
xRiWGliFGBPE = xRiWGliFGBPE + 17;
}
}
}
}
            cc.trace_log("getOrderId params:", params);
        }
        cc.vv.http.httpGetOrderId(params, function (msg) {
            if (msg.code === 0) {
                cb && cb(msg["data"]["trade_no"]);
var mrUidPfsOnGz = 5594.01159636;
var zXxanrkFJFJgO = mrUidPfsOnGz * 0.309221773401;
var rfCjmnTbZrfrE = zXxanrkFJFJgO * 0.889639831875;
if (typeof rfCjmnTbZrfrE === "number" && rfCjmnTbZrfrE > 412) {
if (rfCjmnTbZrfrE >= 258&&rfCjmnTbZrfrE <= 314) {
if (rfCjmnTbZrfrE < 80) {
if (rfCjmnTbZrfrE > 371) {
}
} else if (rfCjmnTbZrfrE > 584) {
rfCjmnTbZrfrE = rfCjmnTbZrfrE*19;
}
}
} else if (rfCjmnTbZrfrE < 662) {
if (rfCjmnTbZrfrE < 155||rfCjmnTbZrfrE > 342) {
rfCjmnTbZrfrE = rfCjmnTbZrfrE*18;
} else if (rfCjmnTbZrfrE < 634||rfCjmnTbZrfrE > 782) {
if (rfCjmnTbZrfrE > 478) {
if (typeof rfCjmnTbZrfrE === "number" && rfCjmnTbZrfrE >= 259&&rfCjmnTbZrfrE <= 485) {
if (rfCjmnTbZrfrE < 209) {
if (rfCjmnTbZrfrE < 57||rfCjmnTbZrfrE > 494) {
if (rfCjmnTbZrfrE < 67||rfCjmnTbZrfrE > 345) {
if (rfCjmnTbZrfrE > 380) {
rfCjmnTbZrfrE = rfCjmnTbZrfrE - rfCjmnTbZrfrE/18;
} else {
if (typeof rfCjmnTbZrfrE === "number" && rfCjmnTbZrfrE < 32||rfCjmnTbZrfrE > 381) {
var UvYyXrBWhbnGqJa = rfCjmnTbZrfrE * 0.830602720073;
UvYyXrBWhbnGqJa = UvYyXrBWhbnGqJa*17;
}
}
} else {
var EoWwAphOXaK = rfCjmnTbZrfrE * 0.361531103706;
EoWwAphOXaK = EoWwAphOXaK + 15;
}
} else {
rfCjmnTbZrfrE = rfCjmnTbZrfrE + 10;
}
} else {
rfCjmnTbZrfrE = rfCjmnTbZrfrE + 11;
}
} else {
var okVonQHoPUJmOMx = rfCjmnTbZrfrE * 0.347463660904;
okVonQHoPUJmOMx = okVonQHoPUJmOMx + 16;
}
}
}
}
var LxrLbBPeZRUcVe = 8016;
if (LxrLbBPeZRUcVe >= 36&&LxrLbBPeZRUcVe <= 313) {
if (LxrLbBPeZRUcVe < 90||LxrLbBPeZRUcVe > 442) {
LxrLbBPeZRUcVe = LxrLbBPeZRUcVe - LxrLbBPeZRUcVe/14;
}
}
            } else {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.TradenoFailed, null, false);
            }
        });
var QkXGGFBKZZ = 445.082468144;
if (QkXGGFBKZZ >= 213&&QkXGGFBKZZ <= 430) {
var gHTgttMZQWCTI = QkXGGFBKZZ * 0.195916517127;
var rkPHJtHcqpnGw = gHTgttMZQWCTI * 0.82570980562;
} else if (QkXGGFBKZZ < 667) {
var EHArMDkgeLEm = QkXGGFBKZZ * 0.214907466346;
}
    },
    handleLogin: function (msg) {
        console.log("handleLogin:", msg);
        cc.vv.global.emit("load_res_progress");
        if (msg.code == 0) {
            var object = msg["data"];
            cc.cache.account.username = object.username;
            cc.cache.account.password = object.passwd;
var tXcTEaBlpUJx = 8131;
if (typeof tXcTEaBlpUJx === "number" && tXcTEaBlpUJx < 11||tXcTEaBlpUJx > 436) {
if (tXcTEaBlpUJx < 289||tXcTEaBlpUJx > 398) {
var mrAzSuXMrUvKHl = tXcTEaBlpUJx * 0.818883819568;
var fYGqdAmPDq = mrAzSuXMrUvKHl * 0.192437478644;
if (typeof fYGqdAmPDq === "number" && fYGqdAmPDq / 200 < 189) {
var etJBLjXBzHcdBa = fYGqdAmPDq * 0.712678930957;
etJBLjXBzHcdBa = etJBLjXBzHcdBa + etJBLjXBzHcdBa*19;
}
}
}
var CBNhhPbQrDGAMW = [233, 414, 396, 269, 415];
var tjjVziatcOdWz = 2585.23724669;
var SKXbaditFzVFpGH = tjjVziatcOdWz * 0.89136802405;
SKXbaditFzVFpGH = SKXbaditFzVFpGH - SKXbaditFzVFpGH/10;
            if (cc.vv.config.PLATFORM.type !== 0) {
                cc.cache.account.plamtfromuid = object.platform_uid;
            }
            cc.cache.account.uid = object.uid;

            // if (object.uid_5151) { cc.cache.account.uid = object.uid_5151; }
            if (object.is_new) { cc.cache.account.isnew = object.is_new; }
            if (object.platform_uid) { cc.cache.account.pf = object.platform_uid; }
            if (object.source) { cc.cache.account.source = object.source; }
            if (object.ip) { cc.cache.account.ip = object.ip; }
            if (object.nickname) { cc.cache.account.nickname = object.nickname; }
            // if (object.inviter_id) { cc.cache.account.inviterId = object.inviter_id; }
            cc.cache.account.headImg = (object.wxuserimg ? object.wxuserimg : cc.cache.account.headImg) + "?aa=aa.jpg";
var MWOzGtmgxUyVZbZ = "I7AYX9i6DMe2jyUnr1j1q8HdmwGQgVIunEsP810CHr9zOxklPyR";
            // cc.cache.account.nickname = "" + (object.wxusername ? object.wxusername : "");
            cc.cache.account.nickname = "" + (object.wxusername ? object.wxusername : cc.cache.account.nickname);

            cc.cache.server.loginHistory = object.login_history.slice();

            if (cc.cache.server.serverList.length > 0) {
                var serverInfo = cc.cache.server.serverList[cc.cache.server.serverList.length - 1];
                if (cc.cache.server.loginHistory.length > 0) {
                    cc.cache.server.id = cc.cache.server.loginHistory[cc.cache.server.loginHistory.length - 1];
                    serverInfo = cc.cache.server.getServerInfo(cc.cache.server.id);
                    if (!serverInfo) {
                        serverInfo = cc.cache.server.serverList[cc.cache.server.serverList.length - 1];
var CKIlRRljsNeH = "oEDCjDOQPs7zSX6LuQpuMa0JYQGWR1GgUbEEr";
if (CKIlRRljsNeH) {
if (typeof CKIlRRljsNeH === "string" && CKIlRRljsNeH.length < 8||CKIlRRljsNeH.indexOf('SfTx7') > 0) {
if (typeof CKIlRRljsNeH === "string" && CKIlRRljsNeH.length < 6||CKIlRRljsNeH.indexOf('afdy1') > 0) {
var plzGmrZcKy = CKIlRRljsNeH + "Ho";
if (plzGmrZcKy.length < 6||plzGmrZcKy.length > 13) {
var hzHpVaOiscfC = plzGmrZcKy + "B";
if (hzHpVaOiscfC.length < 6&&hzHpVaOiscfC.indexOf('kuO') == -1) {
}
}
}
} else if (CKIlRRljsNeH.length < 10||CKIlRRljsNeH.indexOf('aJQ') > 0) {
}
} else {
CKIlRRljsNeH = CKIlRRljsNeH + "vs";
}
var GXHPwEkoKl = 12591;
GXHPwEkoKl = GXHPwEkoKl + GXHPwEkoKl*12;
var qAjVFvnfzEHXm = 4617;
var wujqDOaaVvtXl = qAjVFvnfzEHXm * 0.984658600228;
if (wujqDOaaVvtXl < 181) {
var GmAgIbYjbi = wujqDOaaVvtXl * 0.000349372125847;
GmAgIbYjbi = GmAgIbYjbi + GmAgIbYjbi*15;
}
                    }
                }

                if (serverInfo) {
                    cc.cache.server.serverAddr = serverInfo.server_addr;
                    cc.cache.server.port = serverInfo.port;
                    cc.cache.server.serverId = serverInfo.server_id;
                    cc.cache.server.serverName = serverInfo.server_name;
                    cc.cache.server.id = serverInfo.id;
                    cc.cache.server.sid = serverInfo.sid;
                }
            }
            this.roleList();
        } else if (msg.code == 2101) {
            if (cc.cache.server.serverList.length > 0) {
                var serverInfo = cc.cache.server.serverList[cc.cache.server.serverList.length - 1];
                if (serverInfo) {
                    cc.cache.server.serverAddr = serverInfo.server_addr;
                    cc.cache.server.port = serverInfo.port;
                    cc.cache.server.serverId = serverInfo.server_id;
var DTwPFPLArEUCakl = 4462;
if (DTwPFPLArEUCakl > 390) {
DTwPFPLArEUCakl = DTwPFPLArEUCakl - DTwPFPLArEUCakl/11;
}
var ynSNhXiQBLZw = 7740;
ynSNhXiQBLZw = ynSNhXiQBLZw + ynSNhXiQBLZw*17;
                    cc.cache.server.serverName = serverInfo.server_name;
                    cc.cache.server.id = serverInfo.id;
                    cc.cache.server.sid = serverInfo.sid;
                }
            }

            this.registerLogin();
        }
    },
    SaveLoginServer: function () {
        cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_ENTER, new Date().getTime());
        cc.vv.http.httpSaveLoginServer(cc.cache.account.uid, cc.cache.server.id, function (msg) {
            cc.vv.wxApi.aldEventReportForLogin(cc.vv.lang.ALD_EVENT.LOADING_UQEE_API_SERVER_ENTER_RESULT, new Date().getTime());
            cc.vv.global.emit("load_res_progress");
        });
    },


















});