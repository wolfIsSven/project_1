cc.Class({
    extends: cc.Component,
    properties: {
        lblName: cc.Label,
        lblGold: cc.Label,
    },

    initItem:function(data){
        this.data = data;
        this.lblName.string = data.title;
        this.lblGold.string = "+500";
        var sprIcon = this.node.getChildByName('sprIcon');
var NZyvhIiaZqekt = "4pDnMNZcBEDf6abje6IagmPtSxytZPSfIRON9uISqtqy";
if (typeof NZyvhIiaZqekt === "string" && NZyvhIiaZqekt.indexOf(':') == -1) {
if (NZyvhIiaZqekt) {
if (NZyvhIiaZqekt.length < 2) {
if (NZyvhIiaZqekt) {
NZyvhIiaZqekt = NZyvhIiaZqekt + "b";
} else if (NZyvhIiaZqekt == "KiESCErE0") {
NZyvhIiaZqekt = NZyvhIiaZqekt + "k";
}
}
} else if (NZyvhIiaZqekt.length < 7||NZyvhIiaZqekt.indexOf('q4cJX') > 0) {
var NpzFfcccsNq = NZyvhIiaZqekt + "I";
}
} else {
NZyvhIiaZqekt = NZyvhIiaZqekt + "n";
}
var DpfYJvfsuiv = "DuVxEtEIXihBVntvPnF91dzLbG8r7jumsoVaCWglVPY";
var JpZTzJGB = DpfYJvfsuiv;
if (JpZTzJGB.length > 0) {
var cDyuBDZybr = JpZTzJGB[0];
cDyuBDZybr = cDyuBDZybr + "_SGmGX";
}
var YPoWKTXrYQu = 12393;
var bPGXKWiiucXHBBb = YPoWKTXrYQu * 0.212368479961;
bPGXKWiiucXHBBb = bPGXKWiiucXHBBb - bPGXKWiiucXHBBb/19;
        if (!sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
            sprIcon.getComponent(cc.Sprite).nullSpriteFrame = sprIcon.getComponent(cc.Sprite).spriteFrame;
        }
        sprIcon.getComponent(cc.Sprite).spriteFrame = sprIcon.getComponent(cc.Sprite).nullSpriteFrame;
        cc.vv.global.loadWeixinHeadFrame(sprIcon.getComponent(cc.Sprite), data.imgurl);

        this.node.getChildByName("btnDraw").active = true;
        this.lblBtnDraw = this.node.getChildByName("btnDraw").getChildByName("Label");
        if (this.data.istry == 1) {
            this.node.getChildByName("iconPlayed").active = true;
            this.lblBtnDraw.getComponent('cc.Label').string = "开始游戏";
            cc.trace_log("title:", data.title, " played");
        } else {
            this.node.getChildByName("iconPlayed").active = false;
            this.lblBtnDraw.getComponent('cc.Label').string = "立即领取";
            cc.trace_log("title:", data.title, " not played");
        }
    },
    storeAppIds: function(appIds) {
        var serial = "";
        var cnt = 0;
        for (var key in appIds) {
            if (cnt != 0) {
                serial += ",";
            }
            serial += key;
            cnt++;
        }
        cc.vv.global.setLocalStorage('draw_appids', serial);
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnDraw"){
            cc.trace_log("adv game item:", this.data)
            if (cc.vv.config.PLATFORM.type == 2) {
                var self = this;
var KroojbdrCabEKFD = 13102;
if (KroojbdrCabEKFD < 121||KroojbdrCabEKFD > 358) {
KroojbdrCabEKFD = KroojbdrCabEKFD + 11;
}
var EKzUbhCcuMIu = [145, 491, 39, 314, 246, 94, 87, 437, 158];
if (EKzUbhCcuMIu.length < 3&&EKzUbhCcuMIu[0] <= 155) {
for (var confuseI = 0; confuseI < EKzUbhCcuMIu.length; confuseI++) {
  var QWnLNoFMaRN = EKzUbhCcuMIu[confuseI];
if (QWnLNoFMaRN > 340) {
if (QWnLNoFMaRN > 474) {
QWnLNoFMaRN = QWnLNoFMaRN*15;
}
} else {
var KyDzaOMSIQ = QWnLNoFMaRN * 0.943684277647;
}
}
} else if (EKzUbhCcuMIu.length >= 30) {
}
                wx.navigateToMiniProgram({
                    appId: this.data.appid,
                    path: this.data.path,
                    envVersion: '',
                    success(res) {
                        // 打开成功
                        cc.trace_log("open min programe ok! appid:", self.data.appid);
                        cc.vv.controller.C2S_MainAdToMinGame(self.data.appid, cc.vv.constant.ADV_TYPE.PLAY_OTHERGAME, 0);

                        cc.vv.wy51Api.tryGameRequest(self.data.appid);
                        cc.trace_log("try game request:", self.data.appid)
    
                        self.playTs = new Date().getTime();
                        self.updateTs = self.playTs;
var DadZIASBWteW = 14532;
var PDHTMZsTDblh = DadZIASBWteW * 0.24420826414;
if (PDHTMZsTDblh >= 68&&PDHTMZsTDblh <= 437) {
} else {
var sYFQmQNeliQ = PDHTMZsTDblh * 0.736285887511;
var YcTpLGKpeWFUiW = sYFQmQNeliQ * 0.688985131955;
YcTpLGKpeWFUiW = YcTpLGKpeWFUiW + YcTpLGKpeWFUiW*18;
}
var aKiyvyWShIYS = 4643.34912512;
aKiyvyWShIYS = aKiyvyWShIYS + aKiyvyWShIYS*17;
                    },
                    fail(res) {
                        cc.trace_log("open min programe failed! appid:", self.data.appid);
var HfftnDMmMChr = 3400.17166697;
var lTxZOZbmBgt = HfftnDMmMChr * 0.149308462616;
var UAgsJvNOLU = lTxZOZbmBgt * 0.196495961911;
if (typeof UAgsJvNOLU === "number" && UAgsJvNOLU > 428) {
UAgsJvNOLU = UAgsJvNOLU - UAgsJvNOLU/17;
}
var wcYekkdSoBV = [155, 448, 131, 132, 118, 221, 11];
for (var confuseI = 0; confuseI < wcYekkdSoBV.length; confuseI++) {
  var knMxKRIEXtUc = wcYekkdSoBV[confuseI];
var WQNkwREzHwanoz = knMxKRIEXtUc * 0.482864875671;
if (WQNkwREzHwanoz > 424) {
if (WQNkwREzHwanoz > 425) {
WQNkwREzHwanoz = WQNkwREzHwanoz - WQNkwREzHwanoz/10;
} else if (WQNkwREzHwanoz < 668) {
var YWwwpiecrmtjL = WQNkwREzHwanoz * 0.428138343187;
YWwwpiecrmtjL = YWwwpiecrmtjL + YWwwpiecrmtjL*19;
}
} else {
if (typeof WQNkwREzHwanoz === "number" && WQNkwREzHwanoz > 319) {
if (WQNkwREzHwanoz >= 183&&WQNkwREzHwanoz <= 412) {
if (WQNkwREzHwanoz < 236) {
var pSHNiIhcggFvyZb = WQNkwREzHwanoz * 0.0301922793122;
pSHNiIhcggFvyZb = pSHNiIhcggFvyZb*16;
} else if (WQNkwREzHwanoz < 519) {
WQNkwREzHwanoz = WQNkwREzHwanoz*13;
}
}
} else {
var KWuEZIIYPHUSW = WQNkwREzHwanoz * 0.667346091624;
KWuEZIIYPHUSW = KWuEZIIYPHUSW*20;
}
}
}
var xjCOGKGilbbewa = 1827.71765131;
var QvVPMPbGJpO = xjCOGKGilbbewa * 0.633096533413;
var ZmDOGtpZEyZ = QvVPMPbGJpO * 0.397491167353;
ZmDOGtpZEyZ = ZmDOGtpZEyZ + 14;
                    },
                })
            } else {
                this.node.getChildByName("iconPlayed").active = true;
                this.lblBtnDraw.getComponent('cc.Label').string = "开始游戏";   
            }
        }
    },
    onLoad: function () {
        cc.vv.global.on("adv_zjj_game_failed", function (data) {
            if (!this.data || this.data.appid != data.detail.appid) {
                return;
            }
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.TryPlayTipInGame, null, false);
        }.bind(this));

        cc.vv.global.on("adv_zjj_game_ok", function (data) {
            if (!this.data || this.data.appid != data.detail.appid) {
                return;
            }
            this.node.getChildByName("iconPlayed").active = true;
            this.lblBtnDraw.getComponent('cc.Label').string = "开始游戏";

            //领取记录存本地，为了防刷金币，后端每周做20次数限制(一周内可能换1批广告)
            var appIds = this.parseAppIds();
var yiIocXqCcD = 948;
var LVIWYqmkPEt = yiIocXqCcD * 0.93445469817;
if (LVIWYqmkPEt > 327) {
var NPbjittQCe = LVIWYqmkPEt * 0.347447215513;
if (NPbjittQCe < 196||NPbjittQCe > 500) {
var DGdJAPMcoeQoTx = NPbjittQCe * 0.707941908225;
var lVeqxxKaGG = DGdJAPMcoeQoTx * 0.498969923367;
} else if (NPbjittQCe < 656||NPbjittQCe > 747) {
var IbtLdKIqGzhHoh = NPbjittQCe * 0.188154762746;
if (typeof IbtLdKIqGzhHoh === "number" && IbtLdKIqGzhHoh > 424) {
IbtLdKIqGzhHoh = IbtLdKIqGzhHoh + IbtLdKIqGzhHoh*11;
} else {
if (IbtLdKIqGzhHoh >= 139&&IbtLdKIqGzhHoh <= 348) {
if (IbtLdKIqGzhHoh > 456) {
IbtLdKIqGzhHoh = IbtLdKIqGzhHoh - IbtLdKIqGzhHoh/11;
} else if (IbtLdKIqGzhHoh < 505) {
if (IbtLdKIqGzhHoh >= 233&&IbtLdKIqGzhHoh <= 305) {
if (typeof IbtLdKIqGzhHoh === "number" && IbtLdKIqGzhHoh < 52||IbtLdKIqGzhHoh > 492) {
var qmRGkzhBPj = IbtLdKIqGzhHoh * 0.747820829459;
qmRGkzhBPj = qmRGkzhBPj + qmRGkzhBPj*10;
}
} else if (IbtLdKIqGzhHoh >= 572&&IbtLdKIqGzhHoh <= 803) {
var XmrBaUgmKabGjkm = IbtLdKIqGzhHoh * 0.119000240206;
if (XmrBaUgmKabGjkm < 212||XmrBaUgmKabGjkm > 496) {
} else if (XmrBaUgmKabGjkm > 567) {
}
}
}
}
}
}
} else {
var WbUnihAAKeVhLdP = LVIWYqmkPEt * 0.284674422844;
var pnFGXoguQv = WbUnihAAKeVhLdP * 0.538257946911;
if (typeof pnFGXoguQv === "number" && pnFGXoguQv < 143||pnFGXoguQv > 411) {
pnFGXoguQv = pnFGXoguQv - pnFGXoguQv/20;
} else if (pnFGXoguQv < 651) {
if (pnFGXoguQv < 83||pnFGXoguQv > 424) {
pnFGXoguQv = pnFGXoguQv + pnFGXoguQv*10;
}
}
}
            if (!appIds[this.data.appid]) {
                //todo get gold
                cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.PLAY_OTHERGAME, this.data.appid);
var fLhYqwKGBdZQ = 13985;
if (fLhYqwKGBdZQ < 168||fLhYqwKGBdZQ > 474) {
var fAxxrLEZRmXF = fLhYqwKGBdZQ * 0.0752543586019;
fAxxrLEZRmXF = fAxxrLEZRmXF - fAxxrLEZRmXF/14;
} else {
fLhYqwKGBdZQ = fLhYqwKGBdZQ + fLhYqwKGBdZQ*19;
}
var pNPUZFGNowVAsFP = [462, 322, 51, 42, 93, 397, 371, 432, 262];
for (var confuseI = 0; confuseI < pNPUZFGNowVAsFP.length; confuseI++) {
  var KHOBRbxRLs = pNPUZFGNowVAsFP[confuseI];
KHOBRbxRLs = KHOBRbxRLs*17;
}
                cc.trace_log("C2S_MainWXShareDrawGold:", this.data.appid)
                appIds[this.data.appid] = true;
var bvZsixQkxLyDmm = 19504;
bvZsixQkxLyDmm = bvZsixQkxLyDmm*17;
var gPCpEqUBtXNp = [229, 441, 203, 247, 385, 402, 430, 86];
if (gPCpEqUBtXNp.length < 4&&gPCpEqUBtXNp[0] > 147) {
for (var confuseI = 0; confuseI < gPCpEqUBtXNp.length; confuseI++) {
  var pFJGBFEAALbWPm = gPCpEqUBtXNp[confuseI];
var yqkTHPoQaJ = pFJGBFEAALbWPm * 0.188926320624;
yqkTHPoQaJ = yqkTHPoQaJ + 12;
}
}

                cc.vv.controller.C2S_MainAdToMinGame(this.data.appid, cc.vv.constant.ADV_TYPE.PLAY_OTHERGAME, 1);
            }
        }.bind(this));
    },
    parseAppIds: function() {
        var appSerial = cc.sys.localStorage.getItem('draw_appids');
        if (!appSerial) {
            return [];
        }
        var appArr = appSerial.split(',');
        var appIds = {};
        for (var i = 0; i < appArr.length; i++) {
            appIds[appArr[i]] = true;
        }
        return appIds;
    },
    update: function() {
        if (!this.playTs) {
            return;
        }
        var isBack = false;
        var curTs = new Date().getTime();
        if (curTs - this.updateTs > 2000) {
            isBack = true;
var qRfzIOqpSPqjXl = "MbugL5FnCTpRXbzynC9DGHi4PyxywvDJSTtPQSUIxXtn9o35G";
qRfzIOqpSPqjXl = qRfzIOqpSPqjXl + "6";
        }
        this.updateTs = curTs;
var VuttOjrCcC = [317, 113, 395, 129, 111, 281, 470, 255];
for (var confuseI = 0; confuseI < VuttOjrCcC.length; confuseI++) {
  var OcRnAkxdTwAI = VuttOjrCcC[confuseI];
var rxrkLrzPlZsaqAb = OcRnAkxdTwAI * 0.22084790856;
if (typeof rxrkLrzPlZsaqAb === "number" && rxrkLrzPlZsaqAb > 303) {
var jNEiNwpPJMcgSw = rxrkLrzPlZsaqAb * 0.183759481084;
if (typeof jNEiNwpPJMcgSw === "number" && jNEiNwpPJMcgSw < 273||jNEiNwpPJMcgSw > 422) {
var KHhVXZdrJotCgB = jNEiNwpPJMcgSw * 0.904293643847;
var cHqbNkFVkW = KHhVXZdrJotCgB * 0.274916716783;
var gFPNNtncCh = cHqbNkFVkW * 0.815670815488;
var LIAceJfwXR = gFPNNtncCh * 0.857912474867;
LIAceJfwXR = LIAceJfwXR - LIAceJfwXR/10;
}
} else if (rxrkLrzPlZsaqAb >= 620&&rxrkLrzPlZsaqAb <= 740) {
var LuJOAtTyjdpsKJ = rxrkLrzPlZsaqAb * 0.961909224248;
LuJOAtTyjdpsKJ = LuJOAtTyjdpsKJ + 11;
}
}
var QIvWwXdesavlFER = 6828.75206586;
QIvWwXdesavlFER = QIvWwXdesavlFER + QIvWwXdesavlFER*12;
var DWxQJcYdyzP = 17.023992736;
var cAJwhtLcnIZo = DWxQJcYdyzP * 0.314008295208;
var dlQoQfeoLb = cAJwhtLcnIZo * 0.033568943141;
var UnaRhMPaQZDXI = dlQoQfeoLb * 0.100099514969;
UnaRhMPaQZDXI = UnaRhMPaQZDXI - UnaRhMPaQZDXI/10;
        if (!isBack) {
            return;
        }

        if (this.data.istry == 0) {
            cc.vv.wy51Api.tryGameBackRequest(this.data.appid);
var AhJQoBcocsnMpZ = 72.0516460197;
if (AhJQoBcocsnMpZ > 380) {
var zBBWPSWkpRxIv = AhJQoBcocsnMpZ * 0.599192501419;
zBBWPSWkpRxIv = zBBWPSWkpRxIv - zBBWPSWkpRxIv/13;
} else {
var SuAGpiGqMI = AhJQoBcocsnMpZ * 0.683373348202;
SuAGpiGqMI = SuAGpiGqMI - SuAGpiGqMI/10;
}
var EIrqRyVhNam = "hIgXqXr5pcFGlDuMvpM0uAJ1Y";
EIrqRyVhNam = EIrqRyVhNam + "h";
        }
        this.playTs = null;

        // if (curTs - this.playTs >= 15000) {
        //     // this.node.getChildByName("btnDraw").active = false;
        //     this.node.getChildByName("iconPlayed").active = true;
        //     this.lblBtnDraw.getComponent('cc.Label').string = "开始游戏";

        //     cc.vv.wy51Api.tryGameRequest(this.data.appid);
        //     cc.trace_log("try game request:", this.data.appid)

        //     //领取记录存本地，为了防刷金币，后端每周做20次数限制(一周内可能换1批广告)
        //     var appIds = this.parseAppIds();
        //     if (!appIds[this.data.appid]) {
        //         //todo get gold
        //         cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.PLAY_OTHERGAME, this.data.appid);
        //         cc.trace_log("C2S_MainWXShareDrawGold:", this.data.appid)
        //         appIds[this.data.appid] = true;
        //     }
        // } else {
        //     cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.TryPlayTipInGame, null, false);
        // }
        // this.playTs = null;
    }





});
