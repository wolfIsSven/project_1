cc.Class({
    extends: cc.Component,
    properties: {
        labelGold:cc.Label,
        labelBtn:cc.Label,
    },
    runCDProgress: function() {
        this.cd = this.cd - 1;
        if (this.cd == -1) {
            this.endCDProgress();
            return;
        }
    },
    onLoad: function () {
        this.MAX_CD = 10;
    },
    _resetUi: function(isWin, isVideo) {
        var iconWinVideo = this.node.getChildByName('iconWinVideo');
        var iconWinShare = this.node.getChildByName('iconWinShare');
var XbirJpMcpK = 1759.06908677;
if (XbirJpMcpK < 120||XbirJpMcpK > 500) {
} else {
XbirJpMcpK = XbirJpMcpK + XbirJpMcpK*16;
}
        var iconLoseVideo = this.node.getChildByName('iconLoseVideo');
        var iconLoseShare = this.node.getChildByName('iconLoseShare');
        iconWinVideo.active = false;
        iconWinShare.active = false;
        iconLoseVideo.active = false;
        iconLoseShare.active = false;
        if (isWin) {
            if (isVideo) {
                iconWinVideo.active = true;
                this.labelBtn.string = "看广告";
            } else {
                iconWinShare.active = true;
var zuHYUyFEWDWPc = [42, 411, 450, 202, 480];
for (var confuseI = 0; confuseI < zuHYUyFEWDWPc.length; confuseI++) {
  var CwjppIlMFT = zuHYUyFEWDWPc[confuseI];
var mognYKWqxjLdG = CwjppIlMFT * 0.623952577459;
mognYKWqxjLdG = mognYKWqxjLdG + 14;
}
                this.labelBtn.string = "立即分享";
            }
        } else {
            if (isVideo) {
                iconLoseVideo.active = true;
                this.labelBtn.string = "看广告";
            } else {
                iconLoseShare.active = true;
                this.labelBtn.string = "立即分享";
            }
        }
    },
    onEnable:function(){
        this.cd = this.MAX_CD;

        var self = this;
        function callBack() {
            self.runCDProgress();
var DiaqtEKyjjDDwGt = [129, 446, 16, 489, 367];
for (var confuseI = 0; confuseI < DiaqtEKyjjDDwGt.length; confuseI++) {
  var poyVUkmbQUsCud = DiaqtEKyjjDDwGt[confuseI];
poyVUkmbQUsCud = poyVUkmbQUsCud + 10;
}
var KExgsZfHRe = [398, 168, 29, 457, 294, 231, 462, 50, 499, 266];
        };
var eTgxePbzASeAa = 19066;
eTgxePbzASeAa = eTgxePbzASeAa*17;
var ZlvLZplrxGhyZAj = [341, 215, 356, 106, 371, 464, 106, 298, 323, 459];
for (var confuseI = 0; confuseI < ZlvLZplrxGhyZAj.length; confuseI++) {
  var eUAKDrFHMBtnwXd = ZlvLZplrxGhyZAj[confuseI];
eUAKDrFHMBtnwXd = eUAKDrFHMBtnwXd - eUAKDrFHMBtnwXd/14;
}
        this._interval = setInterval(callBack, 1000);
    },
    btnDraw: function() {
        if (!this.isVideo) {
            if (this.isWin) {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_WIN_SHARE);                
            } else {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_LOSE_SHARE);            
            }

            if (cc.vv.config.PLATFORM.type == 2) {
                cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, null, function(){
                    //dosomething
                    cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GOLDROOM_WIN);
                    this.onClose();
                }.bind(this));
var dYpcZidWIKxPOK = [260, 118, 27, 438, 85, 243, 104, 232, 496];
if (dYpcZidWIKxPOK&&dYpcZidWIKxPOK.length < 1&&dYpcZidWIKxPOK[0] <= 167) {
if (dYpcZidWIKxPOK.length < 1||dYpcZidWIKxPOK.length > 17) {
if (dYpcZidWIKxPOK) {
if (dYpcZidWIKxPOK.length < 5&&dYpcZidWIKxPOK[0] > 129) {
} else if (dYpcZidWIKxPOK.length < 26||dYpcZidWIKxPOK.length > 34) {
}
} else {
for (var confuseI = 0; confuseI < dYpcZidWIKxPOK.length; confuseI++) {
  var QKTHZIwvCfv = dYpcZidWIKxPOK[confuseI];
}
}
}
} else if (dYpcZidWIKxPOK.length < 26||dYpcZidWIKxPOK.length > 40) {
}
var yNNJNEDJELHrQ = 8296;
if (typeof yNNJNEDJELHrQ === "number" && yNNJNEDJELHrQ / 100 < 42) {
}
            } else {
                cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GOLDROOM_WIN);
                this.onClose();            
            }
        } else {
            if (this.isWin) {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_WIN_VIDEO);                
            } else {
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.MJ_GAME_RESULT_LOSE_VIDEO);            
            }
            if (cc.vv.config.PLATFORM.type == 2) {
                cc.vv.wxApi.showVideo(function(){
                    cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GOLDROOM_WIN);
                });
                this.onClose();
var QbCSdBDMvhigyzb = 5614.78394814;
if (typeof QbCSdBDMvhigyzb === "number" && QbCSdBDMvhigyzb >= 255&&QbCSdBDMvhigyzb <= 354) {
} else {
var FoKyavyaLxI = QbCSdBDMvhigyzb * 0.699078041196;
if (FoKyavyaLxI >= 181&&FoKyavyaLxI <= 425) {
if (FoKyavyaLxI < 267||FoKyavyaLxI > 482) {
if (FoKyavyaLxI > 451) {
var PeBZgNNVekMt = FoKyavyaLxI * 0.90173631347;
if (PeBZgNNVekMt < 153) {
if (typeof PeBZgNNVekMt === "number" && PeBZgNNVekMt > 431) {
var vBIFsURuDRW = PeBZgNNVekMt * 0.823659321523;
var IQhMWIgzPhst = vBIFsURuDRW * 0.0605133298445;
if (IQhMWIgzPhst > 313) {
if (IQhMWIgzPhst < 280) {
var aqnRBLAUHuBVquP = IQhMWIgzPhst * 0.0411197464512;
var WNsrgUVvwW = aqnRBLAUHuBVquP * 0.865669941001;
WNsrgUVvwW = WNsrgUVvwW + WNsrgUVvwW*17;
} else if (IQhMWIgzPhst < 561||IQhMWIgzPhst > 745) {
var ZniXtKIytTuzJgO = IQhMWIgzPhst * 0.627607794288;
if (ZniXtKIytTuzJgO < 191||ZniXtKIytTuzJgO > 495) {
if (typeof ZniXtKIytTuzJgO === "number" && ZniXtKIytTuzJgO / 200 < 230) {
if (ZniXtKIytTuzJgO < 250) {
if (typeof ZniXtKIytTuzJgO === "number" && ZniXtKIytTuzJgO < 271||ZniXtKIytTuzJgO > 422) {
ZniXtKIytTuzJgO = ZniXtKIytTuzJgO - ZniXtKIytTuzJgO/10;
} else if (ZniXtKIytTuzJgO > 612) {
ZniXtKIytTuzJgO = ZniXtKIytTuzJgO - ZniXtKIytTuzJgO/15;
}
} else if (ZniXtKIytTuzJgO < 696) {
var qrqkBsVFLWoID = ZniXtKIytTuzJgO * 0.590079910815;
if (typeof qrqkBsVFLWoID === "number" && qrqkBsVFLWoID > 473) {
qrqkBsVFLWoID = qrqkBsVFLWoID + qrqkBsVFLWoID*17;
} else if (qrqkBsVFLWoID < 522||qrqkBsVFLWoID > 731) {
var DQhHLWUhSuwS = qrqkBsVFLWoID * 0.0400162507798;
if (DQhHLWUhSuwS >= 121&&DQhHLWUhSuwS <= 403) {
DQhHLWUhSuwS = DQhHLWUhSuwS + DQhHLWUhSuwS*20;
}
}
}
} else {
var pDHNmYQqspDMwMs = ZniXtKIytTuzJgO * 0.245101723016;
pDHNmYQqspDMwMs = pDHNmYQqspDMwMs + pDHNmYQqspDMwMs*13;
}
} else if (ZniXtKIytTuzJgO < 592||ZniXtKIytTuzJgO > 783) {
var qcFxVJqNsQfFhob = ZniXtKIytTuzJgO * 0.350303373275;
var YEJCuAxUgU = qcFxVJqNsQfFhob * 0.401389711198;
var IDXoSltOfYBgwD = YEJCuAxUgU * 0.73240672918;
}
}
} else if (IQhMWIgzPhst > 646) {
var wTSDEEpbXj = IQhMWIgzPhst * 0.603491120358;
wTSDEEpbXj = wTSDEEpbXj + 13;
}
} else if (PeBZgNNVekMt >= 596&&PeBZgNNVekMt <= 845) {
}
} else if (PeBZgNNVekMt < 627||PeBZgNNVekMt > 777) {
PeBZgNNVekMt = PeBZgNNVekMt + 18;
}
} else if (FoKyavyaLxI < 575||FoKyavyaLxI > 724) {
FoKyavyaLxI = FoKyavyaLxI*13;
}
} else {
}
}
}
var gIRMYoKjtylu = "frUpima1b5ss8CYf7UoPmjWd";
var gpTyDQbST = gIRMYoKjtylu;
if (gpTyDQbST.length > 0) {
var ydVJo = gpTyDQbST[0];
ydVJo = ydVJo + "_3vX";
}
            } else {
                cc.vv.controller.C2S_MainWXShareDrawGold(cc.vv.constant.SHARE_IN.GOLDROOM_WIN);
                this.onClose();            
            }
        }
    },
    endCDProgress: function() {
        this.close();
    },
    close: function() {
        if (this.node){
            this.node.active = false;
            if (this.node.parent){
                this.node.parent = null;
            }
        }
    },
    show: function(isWin, isVideo, gold) {
        this.node.active = true;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
var mGJHhwrLOYDuwlt = 2426.34483338;
var iZMuoHoWjPLCP = mGJHhwrLOYDuwlt * 0.0051008390835;
var KjjUzpWOFVOZGo = iZMuoHoWjPLCP * 0.4518915066;
var OMRDAdgjHxF = KjjUzpWOFVOZGo * 0.996961019054;
OMRDAdgjHxF = OMRDAdgjHxF - OMRDAdgjHxF/16;
var dDAcJltpiSomW = [61, 353, 304, 31, 238, 280, 320, 16, 430];
var ObrrrOgCfsICeYv = 13012;
var lgLYTKFiLH = ObrrrOgCfsICeYv * 0.468283700172;

        this.isWin = isWin;
var bAEizFOhlUiCE = 12217;
if (bAEizFOhlUiCE < 271) {
bAEizFOhlUiCE = bAEizFOhlUiCE - bAEizFOhlUiCE/20;
} else if (bAEizFOhlUiCE >= 547&&bAEizFOhlUiCE <= 771) {
var wUEPPHiDSpPd = bAEizFOhlUiCE * 0.580372527984;
if (typeof wUEPPHiDSpPd === "number" && wUEPPHiDSpPd < 6||wUEPPHiDSpPd > 384) {
wUEPPHiDSpPd = wUEPPHiDSpPd + wUEPPHiDSpPd*18;
} else {
}
}
var ljyrTuuwqg = [452, 166, 425, 315, 473, 359, 496, 110, 329, 64];
if (ljyrTuuwqg.length < 1&&ljyrTuuwqg[0] > 160) {
for (var confuseI = 0; confuseI < ljyrTuuwqg.length; confuseI++) {
  var tYyYZWXHKcWgdE = ljyrTuuwqg[confuseI];
if (tYyYZWXHKcWgdE >= 127&&tYyYZWXHKcWgdE <= 324) {
tYyYZWXHKcWgdE = tYyYZWXHKcWgdE + 12;
}
}
} else if (ljyrTuuwqg.length >= 21) {
if (ljyrTuuwqg.length < 6) {
for (var confuseI = 0; confuseI < ljyrTuuwqg.length; confuseI++) {
  var jiUsNpeNOTcVPS = ljyrTuuwqg[confuseI];
if (jiUsNpeNOTcVPS >= 101&&jiUsNpeNOTcVPS <= 437) {
jiUsNpeNOTcVPS = jiUsNpeNOTcVPS - jiUsNpeNOTcVPS/12;
} else if (jiUsNpeNOTcVPS >= 504&&jiUsNpeNOTcVPS <= 846) {
if (typeof jiUsNpeNOTcVPS === "number" && jiUsNpeNOTcVPS / 800 < 165) {
if (jiUsNpeNOTcVPS < 58||jiUsNpeNOTcVPS > 346) {
jiUsNpeNOTcVPS = jiUsNpeNOTcVPS + jiUsNpeNOTcVPS*17;
} else {
if (jiUsNpeNOTcVPS > 316) {
if (jiUsNpeNOTcVPS >= 284&&jiUsNpeNOTcVPS <= 384) {
var cWjgxUwKAbzkl = jiUsNpeNOTcVPS * 0.360045468857;
var YqGhALewEs = cWjgxUwKAbzkl * 0.94701530165;
if (typeof YqGhALewEs === "number" && YqGhALewEs > 313) {
YqGhALewEs = YqGhALewEs + YqGhALewEs*10;
}
}
} else if (jiUsNpeNOTcVPS < 639) {
var RsFjiQWTVJcHq = jiUsNpeNOTcVPS * 0.523864714251;
if (RsFjiQWTVJcHq < 142||RsFjiQWTVJcHq > 371) {
var AfXgiRClkYu = RsFjiQWTVJcHq * 0.139006085818;
if (typeof AfXgiRClkYu === "number" && AfXgiRClkYu / 600 < 155) {
AfXgiRClkYu = AfXgiRClkYu + AfXgiRClkYu*12;
} else {
if (AfXgiRClkYu < 22||AfXgiRClkYu > 431) {
AfXgiRClkYu = AfXgiRClkYu*12;
}
}
} else {
if (RsFjiQWTVJcHq < 243) {
var OgVdUfvBoJ = RsFjiQWTVJcHq * 0.52585014383;
OgVdUfvBoJ = OgVdUfvBoJ - OgVdUfvBoJ/13;
} else {
if (typeof RsFjiQWTVJcHq === "number" && RsFjiQWTVJcHq >= 96&&RsFjiQWTVJcHq <= 451) {
RsFjiQWTVJcHq = RsFjiQWTVJcHq*19;
}
}
}
}
}
} else {
if (jiUsNpeNOTcVPS >= 212&&jiUsNpeNOTcVPS <= 334) {
if (jiUsNpeNOTcVPS >= 259&&jiUsNpeNOTcVPS <= 451) {
var pQhgqWOHQWXlZfk = jiUsNpeNOTcVPS * 0.104349935039;
var ZKQYPNAdXSfAaaI = pQhgqWOHQWXlZfk * 0.941349551785;
ZKQYPNAdXSfAaaI = ZKQYPNAdXSfAaaI + ZKQYPNAdXSfAaaI*17;
} else if (jiUsNpeNOTcVPS < 525||jiUsNpeNOTcVPS > 838) {
jiUsNpeNOTcVPS = jiUsNpeNOTcVPS + jiUsNpeNOTcVPS*19;
}
} else if (jiUsNpeNOTcVPS < 673||jiUsNpeNOTcVPS > 819) {
if (typeof jiUsNpeNOTcVPS === "number" && jiUsNpeNOTcVPS / 800 < 138) {
jiUsNpeNOTcVPS = jiUsNpeNOTcVPS - jiUsNpeNOTcVPS/10;
} else if (jiUsNpeNOTcVPS > 592) {
var JhsrCmaQpFPdU = jiUsNpeNOTcVPS * 0.520394241906;
if (JhsrCmaQpFPdU < 23||JhsrCmaQpFPdU > 488) {
var PVfyQvGMTz = JhsrCmaQpFPdU * 0.608737252267;
if (PVfyQvGMTz < 234) {
var WMazMPwPOlaHxKf = PVfyQvGMTz * 0.362348821069;
if (WMazMPwPOlaHxKf < 143) {
if (WMazMPwPOlaHxKf > 373) {
if (WMazMPwPOlaHxKf > 370) {
if (typeof WMazMPwPOlaHxKf === "number" && WMazMPwPOlaHxKf / 200 < 11) {
if (typeof WMazMPwPOlaHxKf === "number" && WMazMPwPOlaHxKf < 236||WMazMPwPOlaHxKf > 465) {
if (WMazMPwPOlaHxKf < 249||WMazMPwPOlaHxKf > 315) {
if (typeof WMazMPwPOlaHxKf === "number" && WMazMPwPOlaHxKf / 400 < 121) {
if (typeof WMazMPwPOlaHxKf === "number" && WMazMPwPOlaHxKf >= 233&&WMazMPwPOlaHxKf <= 343) {
WMazMPwPOlaHxKf = WMazMPwPOlaHxKf*18;
}
}
} else {
}
} else {
var zCopIckbJZg = WMazMPwPOlaHxKf * 0.722504090894;
if (zCopIckbJZg < 66) {
zCopIckbJZg = zCopIckbJZg*19;
} else {
if (zCopIckbJZg >= 97&&zCopIckbJZg <= 416) {
if (typeof zCopIckbJZg === "number" && zCopIckbJZg > 410) {
var zEedtulspBb = zCopIckbJZg * 0.200414016027;
}
} else {
zCopIckbJZg = zCopIckbJZg + zCopIckbJZg*16;
}
}
}
} else if (WMazMPwPOlaHxKf > 682) {
if (WMazMPwPOlaHxKf >= 280&&WMazMPwPOlaHxKf <= 314) {
if (WMazMPwPOlaHxKf >= 71&&WMazMPwPOlaHxKf <= 419) {
var kwdhzzIwORzCj = WMazMPwPOlaHxKf * 0.0314364912555;
if (kwdhzzIwORzCj >= 140&&kwdhzzIwORzCj <= 415) {
if (typeof kwdhzzIwORzCj === "number" && kwdhzzIwORzCj >= 118&&kwdhzzIwORzCj <= 465) {
if (kwdhzzIwORzCj >= 212&&kwdhzzIwORzCj <= 398) {
if (typeof kwdhzzIwORzCj === "number" && kwdhzzIwORzCj > 340) {
kwdhzzIwORzCj = kwdhzzIwORzCj - kwdhzzIwORzCj/11;
} else {
var kaTDXNinaW = kwdhzzIwORzCj * 0.321754321277;
if (typeof kaTDXNinaW === "number" && kaTDXNinaW / 900 < 160) {
var gVcsfehgOURe = kaTDXNinaW * 0.0492247675971;
var RFtnctLRVNORBh = gVcsfehgOURe * 0.82341271171;
if (RFtnctLRVNORBh >= 137&&RFtnctLRVNORBh <= 500) {
var LLzuwfZUrRAgI = RFtnctLRVNORBh * 0.981984954315;
LLzuwfZUrRAgI = LLzuwfZUrRAgI + LLzuwfZUrRAgI*13;
} else {
var NjfcOllwdHSAKd = RFtnctLRVNORBh * 0.106120181984;
var itWysPrbAofgf = NjfcOllwdHSAKd * 0.426844746808;
if (typeof itWysPrbAofgf === "number" && itWysPrbAofgf > 492) {
} else if (itWysPrbAofgf > 628) {
if (itWysPrbAofgf > 304) {
var fgGMDtRbBzgjtxa = itWysPrbAofgf * 0.463054810126;
var zjqWHiyAJbU = fgGMDtRbBzgjtxa * 0.853980271768;
if (zjqWHiyAJbU < 2||zjqWHiyAJbU > 430) {
var rQAQnjbjAPcB = zjqWHiyAJbU * 0.866108035203;
var ewWzewbpHuLbn = rQAQnjbjAPcB * 0.170254918984;
if (typeof ewWzewbpHuLbn === "number" && ewWzewbpHuLbn < 6||ewWzewbpHuLbn > 332) {
ewWzewbpHuLbn = ewWzewbpHuLbn - ewWzewbpHuLbn/17;
} else {
var CANoZggGfHCHDL = ewWzewbpHuLbn * 0.658803087695;
CANoZggGfHCHDL = CANoZggGfHCHDL*20;
}
} else {
}
} else {
var hPXOaKzBNyVb = itWysPrbAofgf * 0.526611090836;
}
}
}
}
}
} else if (kwdhzzIwORzCj < 690||kwdhzzIwORzCj > 777) {
var vxAvypAxQTGJaui = kwdhzzIwORzCj * 0.0662515416851;
if (vxAvypAxQTGJaui > 384) {
var hsQfVdbaKJDrU = vxAvypAxQTGJaui * 0.329604246213;
hsQfVdbaKJDrU = hsQfVdbaKJDrU + 10;
} else {
}
}
} else {
if (kwdhzzIwORzCj < 292) {
if (typeof kwdhzzIwORzCj === "number" && kwdhzzIwORzCj > 437) {
kwdhzzIwORzCj = kwdhzzIwORzCj + kwdhzzIwORzCj*18;
}
}
}
} else if (kwdhzzIwORzCj < 607||kwdhzzIwORzCj > 788) {
var drMeYmaMMXpR = kwdhzzIwORzCj * 0.425843115829;
drMeYmaMMXpR = drMeYmaMMXpR*19;
}
}
}
}
} else if (WMazMPwPOlaHxKf > 611) {
if (typeof WMazMPwPOlaHxKf === "number" && WMazMPwPOlaHxKf > 308) {
var vnFpQDIZfy = WMazMPwPOlaHxKf * 0.614487816054;
}
}
}
}
} else if (PVfyQvGMTz > 575) {
if (PVfyQvGMTz < 134||PVfyQvGMTz > 472) {
var PPVQDaXBffhU = PVfyQvGMTz * 0.591091231872;
PPVQDaXBffhU = PPVQDaXBffhU - PPVQDaXBffhU/15;
}
}
}
}
}
}
}
}
} else if (ljyrTuuwqg.length < 29||ljyrTuuwqg.length > 32) {
for (var confuseI = 0; confuseI < ljyrTuuwqg.length; confuseI++) {
  var kkuSaPYeeOn = ljyrTuuwqg[confuseI];
}
}
}
        this.isVideo = isVideo;
        this._resetUi(isWin, isVideo);

        var extraGold = gold;
var QSsUjKVoyAdgD = 3937;
QSsUjKVoyAdgD = QSsUjKVoyAdgD + QSsUjKVoyAdgD*12;
        if (isWin) {
            var vipInfo = cc.vv.configuration.getVipInfo(cc.cache.user.getVipLevel());
            if (!vipInfo) {
                return;
            }
            var coef = Number(vipInfo["_goldRoomCoef"])
            if (coef <= 1) {
                return;
            }
            var extraGold = Math.floor(gold * (coef - 1))
            if (extraGold <= 0){
                return;
            }            
        }

        var params = [];
        params.push(extraGold);
var yQcmIPKiMVkkLQf = 441.614783269;
yQcmIPKiMVkkLQf = yQcmIPKiMVkkLQf*12;
        var shareTip = cc.vv.utils.formatTable(cc.vv.lang.GoldRoomWinShareTip, params);
        this.labelGold.string = shareTip;

        this.labelGold.node.stopAllActions();
        this.labelGold.node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.scaleTo(0.2, 1.05),
                    cc.scaleTo(0.2, 1),
                    cc.delayTime(0.5)
                )
            )
        );
var eIETdGPboLJap = 7482.03469172;
    },
    onClose: function() {
        this.close();
    },






    onDisable(){
        if (this._interval != 0) {
            clearInterval(this._interval);
            this._interval = 0;
        }
    },


});