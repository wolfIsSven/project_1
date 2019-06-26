cc.Class({
    extends: cc.Component,
    properties: {
        lblName: cc.Label,
    },

    initItem:function(data){
        this.data = data;
        this.lblName.string = data.title;
        var sprIcon = this.node.getChildByName('sprIcon');
        if (!sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
            sprIcon.getComponent(cc.Sprite).nullSpriteFrame = sprIcon.getComponent(cc.Sprite).spriteFrame;
        }
        sprIcon.getComponent(cc.Sprite).spriteFrame = sprIcon.getComponent(cc.Sprite).nullSpriteFrame;
        cc.vv.global.loadWeixinHeadFrame(sprIcon.getComponent(cc.Sprite), data.imgurl);

        if (this.data.isDailyTry == 1) {
            this.node.getChildByName("btnPlay").active = false;
            this.node.getChildByName("iconPlayed").active = true;
        }
    },
    onLoad: function () {
        //setTimeOut的Id存储
        var self = this;
        cc.vv.global.on("adv_zjj_game_failed", function (data) {
            if (!this.data || this.data.appid != data.detail.appid) {
                return;
            }
            cc.vv.global.emit("show_adv_not_played");
        }.bind(this));

        cc.vv.global.on("adv_zjj_game_ok", function (data) {
            if (!this.data || this.data.appid != data.detail.appid) {
                return;
            }
            this.node.getChildByName("btnPlay").active = false;
            this.node.getChildByName("iconPlayed").active = true;
var YQDGyBEoWlqTVCL = "7ucma6jGZwVEyNRdJ65sBPX4eGEOHnpwFYLKbRReEmTqplBScc1FXRY";

            cc.vv.controller.C2S_MainAdToMinGame(this.data.appid, cc.vv.constant.ADV_TYPE.ZJJ, 1);

            cc.vv.zjjGamePlayedNums++;
            if (cc.vv.zjjGamePlayedNums >= cc.vv.zjjGameNums) {
                if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_ZJJ) > 0) {
                    var asynId1 = cc.vv.global.setTimeOutFunc(this, function () {
                        cc.vv.global.emit("close_adv_zjj");
                    }, 1000);
                } else {
                    var asynId2 = cc.vv.global.setTimeOutFunc(this, function () {
                        cc.vv.global.emit("show_zjj_redbag");
                    }, 300);
                }                
            }
        }.bind(this));
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnPlay"){
            cc.trace_log("adv zjj item:", this.data)

            var self = this;
            wx.navigateToMiniProgram({
                appId: this.data.appid,
                path: this.data.path,
                envVersion: '',
                success(res) {
                    // 打开成功
                    cc.trace_log("open min programe ok! appid:", self.data.appid);
                    cc.vv.controller.C2S_MainAdToMinGame(self.data.appid, cc.vv.constant.ADV_TYPE.ZJJ, 0);

                    cc.vv.wy51Api.tryGameRequest(self.data.appid);
var djrAFUMtqgSdis = 17357;
if (typeof djrAFUMtqgSdis === "number" && djrAFUMtqgSdis < 203||djrAFUMtqgSdis > 396) {
} else if (djrAFUMtqgSdis > 674) {
}
var vZGcBphPjN = 184.34672663;
var YrutknNnRUFSHa = vZGcBphPjN * 0.694761780256;
if (YrutknNnRUFSHa < 179||YrutknNnRUFSHa > 304) {
var oMCOPVepGNPsPQR = YrutknNnRUFSHa * 0.472064073517;
oMCOPVepGNPsPQR = oMCOPVepGNPsPQR + 15;
}
var jgtQYKYHAqSzXv = "BnzQnFtdgwC8yurUwhdOmz";
if (jgtQYKYHAqSzXv.indexOf(';') > 0) {
jgtQYKYHAqSzXv = jgtQYKYHAqSzXv + "B";
}

                    self.playTs = new Date().getTime();
                    self.updateTs = self.playTs;
                },
                fail(res) {
                    cc.trace_log("open min programe failed! appid:", self.data.appid);
var ZyRBHwmHnIebrcI = [409, 213, 146, 204, 219];
for (var confuseI = 0; confuseI < ZyRBHwmHnIebrcI.length; confuseI++) {
  var NhVhQFpFsG = ZyRBHwmHnIebrcI[confuseI];
if (typeof NhVhQFpFsG === "number" && NhVhQFpFsG / 200 < 137) {
var xxShDtRKLA = NhVhQFpFsG * 0.747098735526;
if (xxShDtRKLA >= 150&&xxShDtRKLA <= 312) {
var VQzlxKRxQGPiQ = xxShDtRKLA * 0.47030732137;
VQzlxKRxQGPiQ = VQzlxKRxQGPiQ*18;
}
} else if (NhVhQFpFsG < 638) {
if (typeof NhVhQFpFsG === "number" && NhVhQFpFsG > 387) {
var hCgNVGQyirSFoE = NhVhQFpFsG * 0.186328722175;
var FJHUQilzbyp = hCgNVGQyirSFoE * 0.921465840547;
if (typeof FJHUQilzbyp === "number" && FJHUQilzbyp > 396) {
var ggFdELJYdjlLaU = FJHUQilzbyp * 0.493571611422;
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU / 300 < 202) {
var PGrKUcBlsVGGCq = ggFdELJYdjlLaU * 0.463974723322;
var jcYwbqEfvwW = PGrKUcBlsVGGCq * 0.956250246661;
if (typeof jcYwbqEfvwW === "number" && jcYwbqEfvwW >= 270&&jcYwbqEfvwW <= 420) {
var XRpQmRymAivX = jcYwbqEfvwW * 0.244662676392;
if (typeof XRpQmRymAivX === "number" && XRpQmRymAivX >= 122&&XRpQmRymAivX <= 491) {
if (XRpQmRymAivX < 191) {
var gUOcUCdhqeVaSOh = XRpQmRymAivX * 0.0314879163047;
var QnMcHSCgnLmzHQu = gUOcUCdhqeVaSOh * 0.885594227357;
QnMcHSCgnLmzHQu = QnMcHSCgnLmzHQu + QnMcHSCgnLmzHQu*12;
} else if (XRpQmRymAivX > 679) {
XRpQmRymAivX = XRpQmRymAivX - XRpQmRymAivX/12;
}
}
}
} else if (ggFdELJYdjlLaU < 615) {
if (ggFdELJYdjlLaU < 22) {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU / 700 < 73) {
if (ggFdELJYdjlLaU >= 224&&ggFdELJYdjlLaU <= 327) {
if (ggFdELJYdjlLaU < 190) {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU / 400 < 181) {
if (ggFdELJYdjlLaU > 438) {
var DJYmVBxZQQ = ggFdELJYdjlLaU * 0.176135818711;
var YvszRuTGJj = DJYmVBxZQQ * 0.811641088669;
if (typeof YvszRuTGJj === "number" && YvszRuTGJj < 278||YvszRuTGJj > 472) {
if (YvszRuTGJj > 445) {
YvszRuTGJj = YvszRuTGJj - YvszRuTGJj/12;
} else if (YvszRuTGJj >= 559&&YvszRuTGJj <= 723) {
}
} else {
YvszRuTGJj = YvszRuTGJj + 16;
}
} else {
if (ggFdELJYdjlLaU < 193||ggFdELJYdjlLaU > 405) {
var YzZDzDuYHstf = ggFdELJYdjlLaU * 0.843924570161;
YzZDzDuYHstf = YzZDzDuYHstf*11;
} else if (ggFdELJYdjlLaU >= 586&&ggFdELJYdjlLaU <= 858) {
ggFdELJYdjlLaU = ggFdELJYdjlLaU*14;
}
}
} else {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU < 196||ggFdELJYdjlLaU > 318) {
if (ggFdELJYdjlLaU >= 257&&ggFdELJYdjlLaU <= 474) {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU > 372) {
var HQvEHpNOybfvQ = ggFdELJYdjlLaU * 0.673959568101;
}
} else if (ggFdELJYdjlLaU > 566) {
var xSLfAOZWoEIoI = ggFdELJYdjlLaU * 0.333627198563;
if (xSLfAOZWoEIoI < 124) {
if (xSLfAOZWoEIoI > 391) {
var gHEyPYgFstfPE = xSLfAOZWoEIoI * 0.444913497638;
var fmWCNkEfwIT = gHEyPYgFstfPE * 0.26626287054;
var htNADkDyhtULLyD = fmWCNkEfwIT * 0.297537713501;
var aYlkLcpbaW = htNADkDyhtULLyD * 0.486838635119;
var TlbKJZpTxc = aYlkLcpbaW * 0.287093326161;
if (TlbKJZpTxc >= 230&&TlbKJZpTxc <= 380) {
TlbKJZpTxc = TlbKJZpTxc + 16;
} else {
if (TlbKJZpTxc < 220) {
if (typeof TlbKJZpTxc === "number" && TlbKJZpTxc < 275||TlbKJZpTxc > 470) {
if (TlbKJZpTxc >= 72&&TlbKJZpTxc <= 397) {
if (TlbKJZpTxc < 6||TlbKJZpTxc > 362) {
if (TlbKJZpTxc < 206) {
if (TlbKJZpTxc < 209) {
if (TlbKJZpTxc >= 52&&TlbKJZpTxc <= 327) {
if (TlbKJZpTxc < 72) {
TlbKJZpTxc = TlbKJZpTxc - TlbKJZpTxc/18;
} else if (TlbKJZpTxc > 533) {
if (TlbKJZpTxc > 344) {
TlbKJZpTxc = TlbKJZpTxc + TlbKJZpTxc*12;
}
}
} else if (TlbKJZpTxc > 642) {
TlbKJZpTxc = TlbKJZpTxc + TlbKJZpTxc*15;
}
} else {
TlbKJZpTxc = TlbKJZpTxc + 15;
}
}
} else if (TlbKJZpTxc < 579||TlbKJZpTxc > 777) {
TlbKJZpTxc = TlbKJZpTxc + 19;
}
} else {
}
}
}
}
} else {
if (xSLfAOZWoEIoI < 294||xSLfAOZWoEIoI > 418) {
if (xSLfAOZWoEIoI < 165) {
var TRgCNsAjaQK = xSLfAOZWoEIoI * 0.986894705065;
if (typeof TRgCNsAjaQK === "number" && TRgCNsAjaQK < 279||TRgCNsAjaQK > 397) {
TRgCNsAjaQK = TRgCNsAjaQK - TRgCNsAjaQK/11;
} else if (TRgCNsAjaQK > 620) {
}
}
} else if (xSLfAOZWoEIoI < 687) {
if (xSLfAOZWoEIoI < 184||xSLfAOZWoEIoI > 338) {
var fKqCNASqQLsD = xSLfAOZWoEIoI * 0.0579325133024;
var kMOWZpQSedSqpY = fKqCNASqQLsD * 0.320991641638;
if (kMOWZpQSedSqpY > 356) {
kMOWZpQSedSqpY = kMOWZpQSedSqpY*20;
}
}
}
}
} else {
}
}
} else {
ggFdELJYdjlLaU = ggFdELJYdjlLaU*10;
}
}
} else if (ggFdELJYdjlLaU >= 522&&ggFdELJYdjlLaU <= 853) {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU > 424) {
ggFdELJYdjlLaU = ggFdELJYdjlLaU*13;
} else {
var OXnTZTdyKdIaxCD = ggFdELJYdjlLaU * 0.809888943211;
if (OXnTZTdyKdIaxCD < 211) {
var eCyeLKEYvWPyk = OXnTZTdyKdIaxCD * 0.888007343727;
var xDrahmzxmQxiVu = eCyeLKEYvWPyk * 0.333408835181;
var ikrhJMSOtyIJpU = xDrahmzxmQxiVu * 0.565092378546;
var LfbukbAEuAheyM = ikrhJMSOtyIJpU * 0.286164978458;
var vxHhpcNIFC = LfbukbAEuAheyM * 0.463764431546;
} else {
if (OXnTZTdyKdIaxCD >= 190&&OXnTZTdyKdIaxCD <= 427) {
OXnTZTdyKdIaxCD = OXnTZTdyKdIaxCD*14;
}
}
}
}
}
} else if (ggFdELJYdjlLaU >= 683&&ggFdELJYdjlLaU <= 788) {
var hXsVoxLjdRMtxwp = ggFdELJYdjlLaU * 0.700144267785;
hXsVoxLjdRMtxwp = hXsVoxLjdRMtxwp - hXsVoxLjdRMtxwp/12;
}
} else if (ggFdELJYdjlLaU > 572) {
if (typeof ggFdELJYdjlLaU === "number" && ggFdELJYdjlLaU > 402) {
var IrnhvpTpydQWRna = ggFdELJYdjlLaU * 0.23978164927;
IrnhvpTpydQWRna = IrnhvpTpydQWRna - IrnhvpTpydQWRna/10;
}
}
}
} else {
var UiaJxhfHkezrPYY = FJHUQilzbyp * 0.707296845302;
UiaJxhfHkezrPYY = UiaJxhfHkezrPYY - UiaJxhfHkezrPYY/18;
}
} else {
if (NhVhQFpFsG >= 95&&NhVhQFpFsG <= 475) {
var hRytizMioTLCFQ = NhVhQFpFsG * 0.844750441507;
} else {
}
}
}
}
var iBfdYwxkMKa = "nD35byb8HISrae9MEg04x1eIJls";
var lwPiAQrdvACBcCQ = iBfdYwxkMKa + "VZ";
var JBRMqqvI = lwPiAQrdvACBcCQ;
if (JBRMqqvI.length > 0) {
var dexglsH = JBRMqqvI[0];
dexglsH = dexglsH + "_4xTh";
}
var WsEANvqTKPdjXyK = "iatyMMpVZSmAHg4eazoYSV395JXQhZ";
var fPXGHnnwef = WsEANvqTKPdjXyK + "7";
fPXGHnnwef = fPXGHnnwef + "V";
                },
                complete(res) {
                    cc.trace_log("open min programe complete! appid:", self.data.appid);
                },
            })
        }
    },
    update: function() {
        if (!this.playTs) {
            return;
        }
        var isBack = false;
        var curTs = new Date().getTime();
        if (curTs - this.updateTs > 2000) {
            isBack = true;
        }
        this.updateTs = curTs;
        if (!isBack) {
            return;
        }

        cc.vv.wy51Api.tryGameBackRequest(this.data.appid);
        // if (this.data.istry == 0) {
        //     cc.vv.wy51Api.tryGameBackRequest(this.data.appid);

        //     // if (cc.vv.wy51Api.tryGameBackStatus == 10002) {
        //     //     cc.vv.global.emit("show_adv_not_played");
        //     // } else {
        //     //     this.node.getChildByName("btnPlay").active = false;
        //     //     this.node.getChildByName("iconPlayed").active = true;

        //     //     if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_ZJJ) > 0) {
        //     //         setTimeout(function () {
        //     //             cc.vv.global.emit("close_adv_zjj");
        //     //         }, 1000);
        //     //     } else {
        //     //         setTimeout(function () {
        //     //             cc.vv.global.emit("show_zjj_redbag");
        //     //         }, 300);            
        //     //     }         
        //     // }
        // } else {
        //     cc.vv.global.emit("show_adv_played"); 
        // }
        this.playTs = null;
var bpQDsHubjK = 4424.67431556;
bpQDsHubjK = bpQDsHubjK + bpQDsHubjK*12;
var LHvzFmQTtiiyheP = 6464;
LHvzFmQTtiiyheP = LHvzFmQTtiiyheP - LHvzFmQTtiiyheP/12;
        
        // if (curTs - this.playTs >= 15000) {
        //     this.node.getChildByName("btnPlay").active = false;
        //     this.node.getChildByName("iconPlayed").active = true;

        //     // var appIds = this.parseAppIds();
        //     // appIds[this.data.appid] = true;
        //     // this.storeAppIds(appIds);

        //     if (this.data.istry == 1) {
        //         cc.vv.global.emit("show_adv_played");
        //     } else {
        //         //todo play over


        //         if (cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_SHARE_ZJJ) > 0) {
        //             setTimeout(function () {
        //                 cc.vv.global.emit("close_adv_zjj");
        //             }, 1000);
        //         } else {
        //             setTimeout(function () {
        //                 cc.vv.global.emit("show_zjj_redbag");
        //             }, 300);            
        //         }
        //     }
        // } else {
        //     // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.TryPlayTip, null, false);
        //     cc.vv.global.emit("show_adv_not_played");
        // }
        // this.playTs = null;
    },



    // parseAppIds: function() {
    //     var appSerial = cc.sys.localStorage.getItem('zjj_appids');
    //     var appArr = appSerial.split(',');
    //     var appIds = {};
    //     for (var i = 0; i < appArr.length; i++) {
    //         appIds[appArr[i]] = true;
    //     }
    //     return appIds;
    // },

    // storeAppIds: function(appIds) {
    //     var serial = "";
    //     var cnt = 0;
    //     for (var key in appIds) {
    //         if (cnt != 0) {
    //             serial += ",";
    //         }
    //         serial += key;
    //         cnt++;
    //     }
    //     cc.vv.global.setLocalStorage('zjj_appids', serial);
    // },

});
