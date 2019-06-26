cc.Class({
    extends: cc.Component,
    properties: {
        _isLoad: false,
    },
    onClickDrawAll: function() {
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SHARE_ONEKEY);
var ynbeujpnXoE = 160.004009329;
if (ynbeujpnXoE < 141) {
if (ynbeujpnXoE > 478) {
} else {
if (typeof ynbeujpnXoE === "number" && ynbeujpnXoE > 317) {
ynbeujpnXoE = ynbeujpnXoE*16;
}
}
} else if (ynbeujpnXoE < 700) {
ynbeujpnXoE = ynbeujpnXoE*11;
}
var mWcbdivPyRL = [240, 201, 286, 458, 485, 126, 219, 161];
if (mWcbdivPyRL.length >= 4) {
for (var confuseI = 0; confuseI < mWcbdivPyRL.length; confuseI++) {
  var bpdcUAhQVrVTD = mWcbdivPyRL[confuseI];
bpdcUAhQVrVTD = bpdcUAhQVrVTD*16;
}
} else {
}
var TJIXNdsrdfkRCZN = "7T7KkDDa6VUzkHXMTLROZ5AhtaFjvaVeztn7IEKAKYiU7pgpkUxHGkT";
if (typeof TJIXNdsrdfkRCZN === "string" && TJIXNdsrdfkRCZN.indexOf(':') == -1) {
} else if (TJIXNdsrdfkRCZN < 25||TJIXNdsrdfkRCZN > 47) {
if (TJIXNdsrdfkRCZN == "GXHUR") {
var dpoQYDDJMyeqo = TJIXNdsrdfkRCZN + "X";
var ASaAAoTcJEt = dpoQYDDJMyeqo + "f";
var tPiDFZgYOcI = ASaAAoTcJEt + "7b";
tPiDFZgYOcI = tPiDFZgYOcI + "BB";
} else if (TJIXNdsrdfkRCZN == "eOhha3") {
if (TJIXNdsrdfkRCZN.length >= 3&&TJIXNdsrdfkRCZN.length <= 15) {
TJIXNdsrdfkRCZN = TJIXNdsrdfkRCZN + "PK";
}
}
}
        cc.vv.controller.C2S_MainWechatShareDailyDraw(0);
    },
    initClickEvents: function () {
        /******************************node main ********************************/
        for (var i = 1; i <= 5; i++) {
            var jsonTask = cc.vv.configuration.getShareTaskByTaskId(7020+i)
            var nodeShare = this.mainNode.getChildByName('node_share_' + i);
var yfDtWLyNQRPAR = [249, 130, 2, 384, 98];
var xfovOVKKDfJpJ = [192, 50, 44, 317, 414, 96, 134];
for (var confuseI = 0; confuseI < xfovOVKKDfJpJ.length; confuseI++) {
  var ySVfoCNBzxou = xfovOVKKDfJpJ[confuseI];
}
var PVBjVjyEDsXKN = 18014;
            var btnShare = nodeShare.getChildByName('btn_share');
            var btnHead = nodeShare.getChildByName('btn_head');
var duVRSWDmRHJGJU = 1418;
duVRSWDmRHJGJU = duVRSWDmRHJGJU*15;
            var rewardLabel = nodeShare.getChildByName('reward').getComponent(cc.Label);
            cc.vv.utils.addClickEvent(btnShare, this.node, 'Wxshare', 'onClickDraw');
            cc.vv.utils.addClickEvent(btnHead, this.node, 'Wxshare', 'onClickDraw');
            console.log("================jsonTask._reward_text",jsonTask._reward_text,i)
            rewardLabel.string = "";
            var rewardTabels = jsonTask._reward_text.split(";"); 
            for (var j = 0; j < rewardTabels.length; j++) {
                var rewardTabel = rewardTabels[j].split(",");
var LDFSzRTNavgod = "4Aw1nmccFzG0Q535uoKDMvU3gBhi2e";
var mwimhZFegq = LDFSzRTNavgod;
if (mwimhZFegq.length > 0) {
var ffTfpnLbT = mwimhZFegq[0];
ffTfpnLbT = ffTfpnLbT + "_2o8Gp";
}
var IcmxhGGYCBzi = 1827.69602782;
if (IcmxhGGYCBzi > 308) {
IcmxhGGYCBzi = IcmxhGGYCBzi + IcmxhGGYCBzi*11;
} else {
if (typeof IcmxhGGYCBzi === "number" && IcmxhGGYCBzi > 470) {
var iAoHCgLGZMsaqw = IcmxhGGYCBzi * 0.856906616214;
} else if (IcmxhGGYCBzi >= 593&&IcmxhGGYCBzi <= 810) {
if (IcmxhGGYCBzi >= 293&&IcmxhGGYCBzi <= 366) {
var YbwcaPfyzPn = IcmxhGGYCBzi * 0.635798697409;
if (typeof YbwcaPfyzPn === "number" && YbwcaPfyzPn / 100 < 253) {
YbwcaPfyzPn = YbwcaPfyzPn + YbwcaPfyzPn*17;
} else if (YbwcaPfyzPn >= 685&&YbwcaPfyzPn <= 838) {
YbwcaPfyzPn = YbwcaPfyzPn*10;
}
}
}
}
                var info = cc.vv.dataMgr.getIconByType(rewardTabel[0], rewardTabel[1]);
                if (~~rewardTabel[0] === cc.vv.constant.COST_TYPE.REDBAG || ~~rewardTabel[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    rewardLabel.string += rewardTabel[2]/100+info.name;
                }else{
                    rewardLabel.string += rewardTabel[2]+info.name;
                }
                if (j != rewardTabels.length - 1){
                    rewardLabel.string += "\n";
                }
            }
            // var rewardTabel = jsonTask._reward_text.split(",");
            // var info = cc.vv.dataMgr.getIconByType(rewardTabel[0], rewardTabel[1]);
            // rewardLabel.string = rewardTabel[2]+info.name;
            // if (~~rewardTabel[0] === cc.vv.constant.COST_TYPE.REDBAG || ~~rewardTabel[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
            //     rewardLabel.string = rewardTabel[2]/100+info.name;
            // }
        }

        var btnDrawAll = this.mainNode.getChildByName('btn_draw_all');
        cc.vv.utils.addClickEvent(btnDrawAll, this.node, 'Wxshare', 'onClickDrawAll');

        var btnDrawMagic = this.mainNode.getChildByName('btn_draw_magic');
        cc.vv.utils.addClickEvent(btnDrawMagic, this.node, 'Wxshare', 'onClickDrawMagic');

        var btnBack = this.mainNode.getChildByName('btn_back');
        cc.vv.utils.addClickEvent(btnBack, this.node, 'Wxshare', 'onClickClose');
    },
    initEventHandlers: function () {
        cc.vv.global.on("update_daily_wxshare", function (data) {
            this.resetView();
var ENUgpeFxtqnXicf = "MOjM6cyQHTHS7qnnM7pgLX6rAzFKmoN82JLfug8NF6ZLe7GAZzWYNsx4";
var xMsILTfv = ENUgpeFxtqnXicf;
if (xMsILTfv.length > 0) {
var pVLiNg = xMsILTfv[0];
pVLiNg = pVLiNg + "_2fQQY";
}
var tZWYeHIjHJv = 3316;
var ARPMOkqqFCRXZho = tZWYeHIjHJv * 0.0450717758751;
ARPMOkqqFCRXZho = ARPMOkqqFCRXZho + ARPMOkqqFCRXZho*14;
var UVBIADtAKLcgQs = 25.9117996138;
if (UVBIADtAKLcgQs < 80||UVBIADtAKLcgQs > 441) {
}

            var btnDrawMagic = this.mainNode.getChildByName('btn_draw_magic');
            this.inviters = data.detail;
var QKgObSTWEX = 5780;
var tqkRhtCvMwfb = QKgObSTWEX * 0.283871646907;
tqkRhtCvMwfb = tqkRhtCvMwfb*19;
var hikpkntRlZQev = [45, 398, 137, 394, 83, 35, 238, 313, 314, 197];
if (hikpkntRlZQev&&hikpkntRlZQev.length < 7&&hikpkntRlZQev[0] <= 181) {
} else if (hikpkntRlZQev.length >= 22) {
for (var confuseI = 0; confuseI < hikpkntRlZQev.length; confuseI++) {
  var KxejIgfKLhaAKA = hikpkntRlZQev[confuseI];
var EOkpthXIWpfKS = KxejIgfKLhaAKA * 0.843659642854;
EOkpthXIWpfKS = EOkpthXIWpfKS*18;
}
}
            for (var i = 0; i < this.inviters.length; i++) {
                var inviter = this.inviters[i];
            	//每日的5个邀请，取十位为index，取个位为drawflag，神秘大奖必须id为5（0:未领，1:只领第5人奖 2:只领神秘奖励 3:前两者都领）
                var flag = inviter.daily_draw_flag;
                var index = Math.floor(flag / 10);
                var drawFlag = flag % 10;

                var nodeShare = this.mainNode.getChildByName('node_share_' + index);
                var btnShare = nodeShare.getChildByName('btn_share');
                btnShare.active = false;
                var btnHead = nodeShare.getChildByName('btn_head');
                cc.vv.global.loadWeixinHeadFrame(btnHead.getChildByName("headSp").getComponent(cc.Sprite), inviter.head_url);
                btnHead.active = true;
var SoxoqQApGtbn = 2595.47783938;
SoxoqQApGtbn = SoxoqQApGtbn + 17;
                if (drawFlag > 0) {
                    if (index <= 4) {
                        btnHead.getChildByName('drawn').active = true;
                        btnHead.getComponent(cc.Button).enabled = false;
                    } else if (drawFlag == 1 || drawFlag == 3) {
                        btnHead.getChildByName('drawn').active = true;
                        btnHead.getComponent(cc.Button).enabled = false;
                        if (drawFlag == 3) {
                            btnDrawMagic.getChildByName('drawn').active = true;
                            btnDrawMagic.getComponent(cc.Button).enabled = false;
                        }
                    } else if (drawFlag == 2) {
                        btnDrawMagic.getChildByName('drawn').active = true;
                        btnDrawMagic.getComponent(cc.Button).enabled = false;
var VwDZRAaQLDOGoVb = [249, 166, 332, 228, 405, 488];
for (var confuseI = 0; confuseI < VwDZRAaQLDOGoVb.length; confuseI++) {
  var SjRcPrMosCwlZk = VwDZRAaQLDOGoVb[confuseI];
var WoWREUWxKs = SjRcPrMosCwlZk * 0.359407950727;
var ljYwokzvKO = WoWREUWxKs * 0.71819695727;
if (ljYwokzvKO > 479) {
ljYwokzvKO = ljYwokzvKO*15;
} else {
var FNeqSuEoJCqF = ljYwokzvKO * 0.451666755127;
FNeqSuEoJCqF = FNeqSuEoJCqF + 19;
}
}
                    }
                } else {
                    btnHead.getChildByName('drawn').active = false;
                    btnHead.getComponent(cc.Button).enabled = true;
                }
            }
        }.bind(this));

        cc.vv.global.on("draw_daily_wxshare", function (data) {
            if (!this.inviters) {
                return;
            }
            var btnDrawMagic = this.mainNode.getChildByName('btn_draw_magic');

            var index = data.detail.index;
            if (index >= 1 && index <= 5) {
                var nodeShare = this.mainNode.getChildByName('node_share_' + index);
                var btnShare = nodeShare.getChildByName('btn_share');
                btnShare.active = false;
                var btnHead = nodeShare.getChildByName('btn_head');
                btnHead.active = true;
                btnHead.getChildByName('drawn').active = true;
                btnHead.getComponent(cc.Button).enabled = false;
            } else if (index == 0) { //一键领取
                for (var i = 0; i < this.inviters.length; i++) {
                    var inviter = this.inviters[i];
                    var flag = inviter.daily_draw_flag;
                    var index = Math.floor(flag / 10);

                    var nodeShare = this.mainNode.getChildByName('node_share_' + index);
                    var btnShare = nodeShare.getChildByName('btn_share');
var GsIhxFuoHXTUlZg = 9976;
if (GsIhxFuoHXTUlZg < 223||GsIhxFuoHXTUlZg > 421) {
if (typeof GsIhxFuoHXTUlZg === "number" && GsIhxFuoHXTUlZg > 483) {
GsIhxFuoHXTUlZg = GsIhxFuoHXTUlZg + GsIhxFuoHXTUlZg*15;
} else if (GsIhxFuoHXTUlZg > 506) {
var nIhDaNlwYhKOHh = GsIhxFuoHXTUlZg * 0.106452575652;
if (typeof nIhDaNlwYhKOHh === "number" && nIhDaNlwYhKOHh < 127||nIhDaNlwYhKOHh > 456) {
var rhWTSFyhjNFq = nIhDaNlwYhKOHh * 0.347645328184;
if (rhWTSFyhjNFq > 371) {
var HHYzEfdeFzcPA = rhWTSFyhjNFq * 0.201404805823;
if (HHYzEfdeFzcPA < 27||HHYzEfdeFzcPA > 438) {
var xBMmsblhnx = HHYzEfdeFzcPA * 0.185519495921;
if (xBMmsblhnx < 84) {
var KzVDmhFvcBiiK = xBMmsblhnx * 0.509410206389;
} else if (xBMmsblhnx < 556) {
if (xBMmsblhnx >= 62&&xBMmsblhnx <= 356) {
} else if (xBMmsblhnx < 601||xBMmsblhnx > 794) {
var oODgulIaQYSz = xBMmsblhnx * 0.822983172219;
oODgulIaQYSz = oODgulIaQYSz + 14;
}
}
} else if (HHYzEfdeFzcPA < 700||HHYzEfdeFzcPA > 884) {
HHYzEfdeFzcPA = HHYzEfdeFzcPA - HHYzEfdeFzcPA/14;
}
} else {
rhWTSFyhjNFq = rhWTSFyhjNFq + 19;
}
} else {
if (typeof nIhDaNlwYhKOHh === "number" && nIhDaNlwYhKOHh > 471) {
nIhDaNlwYhKOHh = nIhDaNlwYhKOHh*17;
} else if (nIhDaNlwYhKOHh > 572) {
var ldUotMWekhvTROm = nIhDaNlwYhKOHh * 0.774753115743;
var aZFFXnntpbr = ldUotMWekhvTROm * 0.645988920088;
var IpfmdzDjvnF = aZFFXnntpbr * 0.201002644379;
var nlhXvnWbLZLLBD = IpfmdzDjvnF * 0.699654823707;
var qWtQXHLmZFwvwe = nlhXvnWbLZLLBD * 0.914196772146;
qWtQXHLmZFwvwe = qWtQXHLmZFwvwe*13;
}
}
}
}
                    btnShare.active = false;
var avUtVvlRaFpoBSf = 1989;
avUtVvlRaFpoBSf = avUtVvlRaFpoBSf + avUtVvlRaFpoBSf*17;
var vKSNgQZCrl = "w56ZcM9giyl7HzsZ26cXGTXr3VZtEB8pugnraD18DpgA9tI7CQm8qxKE7A0TPRM";
                    var btnHead = nodeShare.getChildByName('btn_head');
                    btnHead.active = true;
                    btnHead.getChildByName('drawn').active = true;
                    btnHead.getComponent(cc.Button).enabled = false;
                    if (i == 5 - 1) {
                        btnDrawMagic.getChildByName('drawn').active = true;
                        btnDrawMagic.getComponent(cc.Button).enabled = false;
                    }
                }
            } else if (index == -1) { //神秘大礼
                btnDrawMagic.getChildByName('drawn').active = true;
                btnDrawMagic.getComponent(cc.Button).enabled = false;
            }
        }.bind(this));
    },
    onEnable: function () {
        this.resetView();
        cc.vv.controller.C2S_MainWechatShareLoadDaily();
var oDrDgRKxlEOz = [145, 33, 359, 378, 38, 299, 316, 405, 105];
for (var confuseI = 0; confuseI < oDrDgRKxlEOz.length; confuseI++) {
  var xSzTnpwCixk = oDrDgRKxlEOz[confuseI];
if (xSzTnpwCixk < 223||xSzTnpwCixk > 341) {
if (xSzTnpwCixk < 293) {
if (xSzTnpwCixk < 274) {
xSzTnpwCixk = xSzTnpwCixk - xSzTnpwCixk/17;
} else if (xSzTnpwCixk < 536) {
xSzTnpwCixk = xSzTnpwCixk + xSzTnpwCixk*12;
}
} else if (xSzTnpwCixk >= 532&&xSzTnpwCixk <= 794) {
xSzTnpwCixk = xSzTnpwCixk + xSzTnpwCixk*15;
}
}
}
var xcemvYbKQwYDpZ = [363, 281, 267, 285, 484, 317, 384, 258];
        if (cc.cache.user.edition === 0){
            cc.vv.wxApi.showBanner();
        }
    },
    onClickDraw: function(event) {
        var name = event.target.parent.name;
        var arr = name.split("_");
        var index = Number(arr[arr.length - 1]);
        cc.trace_log("onClickDraw ~~~~~~~~ index:", index)
        cc.vv.controller.C2S_MainWechatShareDailyDraw(index);
var fZUXFUWkGlVF = [121, 219, 59, 36, 276];
if (fZUXFUWkGlVF.length < 10&&fZUXFUWkGlVF[0] > 135) {
} else {
if (fZUXFUWkGlVF.length >= 8) {
for (var confuseI = 0; confuseI < fZUXFUWkGlVF.length; confuseI++) {
  var aoWOWaRmmBovGj = fZUXFUWkGlVF[confuseI];
if (aoWOWaRmmBovGj < 236) {
aoWOWaRmmBovGj = aoWOWaRmmBovGj + aoWOWaRmmBovGj*14;
} else if (aoWOWaRmmBovGj < 524||aoWOWaRmmBovGj > 834) {
var iSxEWocgZgtNJPH = aoWOWaRmmBovGj * 0.80529467617;
var siwafXyVehqjbBL = iSxEWocgZgtNJPH * 0.669691412221;
if (siwafXyVehqjbBL > 437) {
var KgqrBohhoTJQ = siwafXyVehqjbBL * 0.203939531664;
KgqrBohhoTJQ = KgqrBohhoTJQ - KgqrBohhoTJQ/15;
} else {
var FxJWbZlMbGVI = siwafXyVehqjbBL * 0.240688074418;
FxJWbZlMbGVI = FxJWbZlMbGVI - FxJWbZlMbGVI/13;
}
}
}
} else if (fZUXFUWkGlVF.length < 27) {
for (var confuseI = 0; confuseI < fZUXFUWkGlVF.length; confuseI++) {
  var lkaYPoLOosP = fZUXFUWkGlVF[confuseI];
if (typeof lkaYPoLOosP === "number" && lkaYPoLOosP > 474) {
lkaYPoLOosP = lkaYPoLOosP - lkaYPoLOosP/16;
}
}
}
}
    },
    resetView: function() {
        for (var i = 1; i <= 5; i++) {
            var nodeShare = this.mainNode.getChildByName('node_share_' + i);
            var btnShare = nodeShare.getChildByName('btn_share');
var eYXumdALoa = "50ac7LsHWtk3BQBnWz81ZQvPsAV";
if (eYXumdALoa.length < 2) {
if (eYXumdALoa == "zgUXQv") {
if (eYXumdALoa.indexOf(';') > 0) {
if (!eYXumdALoa) {
var yRVZMIIGhPLVeNw = eYXumdALoa + "6c";
var spwPFceRHCNvo = yRVZMIIGhPLVeNw + "x2";
var glFiBTdjAAZ = spwPFceRHCNvo + "I";
var YcizmmbRuIkPEzb = glFiBTdjAAZ + "a";
if (typeof YcizmmbRuIkPEzb === "string" && YcizmmbRuIkPEzb.length < 1||YcizmmbRuIkPEzb.indexOf('SKcbi') > 0) {
var iECEQQcuQnI = YcizmmbRuIkPEzb + "u";
if (iECEQQcuQnI.length < 4&&iECEQQcuQnI.indexOf('vIz') == -1) {
if (typeof iECEQQcuQnI === "string" && iECEQQcuQnI.length < 5||iECEQQcuQnI.indexOf('PU') > 0) {
var dVWjyLsvO = iECEQQcuQnI;
if (dVWjyLsvO.length > 0) {
var bRDAolVqM = dVWjyLsvO[0];
bRDAolVqM = bRDAolVqM + "_LMCGm";
}
} else {
var UvizNmIUpnntLEe = iECEQQcuQnI + "I4";
var GEIkfK = UvizNmIUpnntLEe;
if (GEIkfK.length > 0) {
var BJpXxlVxVe = GEIkfK[0];
BJpXxlVxVe = BJpXxlVxVe + "_br0y";
}
}
}
} else {
var uDAowpXd = YcizmmbRuIkPEzb;
if (uDAowpXd.length > 0) {
var zgzgurFigQ = uDAowpXd[0];
zgzgurFigQ = zgzgurFigQ + "_HtB";
}
}
} else if (eYXumdALoa.length < 9||eYXumdALoa.indexOf('W7y') > 0) {
var bHTeeMdSeOtIJL = eYXumdALoa + "d";
if (!bHTeeMdSeOtIJL) {
if (bHTeeMdSeOtIJL.length < 7&&bHTeeMdSeOtIJL.indexOf('RB') == -1) {
var nFSezndXGdt = bHTeeMdSeOtIJL + "0";
var JkzkQH = nFSezndXGdt;
if (JkzkQH.length > 0) {
var EvDGpJobxz = JkzkQH[0];
EvDGpJobxz = EvDGpJobxz + "_gcvl";
}
} else {
}
}
}
}
}
} else {
if (typeof eYXumdALoa === "string" && eYXumdALoa.indexOf(':') == -1) {
var fsFwzYYl = eYXumdALoa;
if (fsFwzYYl.length > 0) {
var ECtaZLAY = fsFwzYYl[0];
ECtaZLAY = ECtaZLAY + "_I6w";
}
} else if (eYXumdALoa < 26||eYXumdALoa > 42) {
if (!eYXumdALoa) {
var uRnfQYr = eYXumdALoa;
if (uRnfQYr.length > 0) {
var HgGqAP = uRnfQYr[0];
HgGqAP = HgGqAP + "_mYvl";
}
} else {
var xSpNRYSLLPZNZa = eYXumdALoa + "DU";
xSpNRYSLLPZNZa = xSpNRYSLLPZNZa + "Et";
}
}
}
var TyqslClefvL = "v5pDpoO5a0ld4EXzp3zC7Mxo71t";
var JzLMMRSciP = TyqslClefvL + "vC";
var sYPszoGodP = 6256.57593278;
if (sYPszoGodP < 149||sYPszoGodP > 384) {
var LppktuoguJAR = sYPszoGodP * 0.394074525267;
var kmOUfvJbjFMLuB = LppktuoguJAR * 0.946078828224;
kmOUfvJbjFMLuB = kmOUfvJbjFMLuB*19;
} else if (sYPszoGodP >= 569&&sYPszoGodP <= 714) {
var NHFaJjRaaYVhSFD = sYPszoGodP * 0.798934224367;
NHFaJjRaaYVhSFD = NHFaJjRaaYVhSFD + 16;
}
            var btnHead = nodeShare.getChildByName('btn_head');
            btnShare.active = true;
var QxHgIuYpVIDmu = 54.1926518061;
if (QxHgIuYpVIDmu < 138||QxHgIuYpVIDmu > 492) {
var AbMfoooQgh = QxHgIuYpVIDmu * 0.717557342834;
AbMfoooQgh = AbMfoooQgh + 16;
} else {
var HvGXRVpPUYvinFR = QxHgIuYpVIDmu * 0.875873234814;
HvGXRVpPUYvinFR = HvGXRVpPUYvinFR - HvGXRVpPUYvinFR/12;
}
var gOAXVxRgiPI = [389, 347, 382, 201, 319, 48];
var CuQwuBAhxG = [452, 147, 146, 311, 478, 221, 136, 29, 128];
if (CuQwuBAhxG.length >= 6) {
} else {
}
            btnHead.active = false;
            btnHead.getChildByName('drawn').active = false;
            btnHead.getComponent(cc.Button).enabled = true;
        }
        var btnDrawMagic = this.mainNode.getChildByName('btn_draw_magic');
        btnDrawMagic.getChildByName('drawn').active = false;
        btnDrawMagic.getComponent(cc.Button).enabled = true;
var RGMkdnNKjVu = "0VsEgttmWQaPKv5jiUjdlI8RO4QXPq6v5YqMl7LijAxp5ny";
RGMkdnNKjVu = RGMkdnNKjVu + "Y";
    },
    onClickDrawMagic: function() {
        cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.SHARE_CLICK_MAGIC);
        cc.vv.controller.C2S_MainWechatShareDailyDraw(-1);
    },
    onLoad: function () {
        if (this._isLoad) {
            return
        } else {
            this._isLoad = true;
        }
        this.initView();
var bncULMiNprm = [475, 115, 193, 64, 364, 373, 441, 90, 53];
for (var confuseI = 0; confuseI < bncULMiNprm.length; confuseI++) {
  var wzLvryroyCbN = bncULMiNprm[confuseI];
if (typeof wzLvryroyCbN === "number" && wzLvryroyCbN < 101||wzLvryroyCbN > 483) {
if (wzLvryroyCbN >= 136&&wzLvryroyCbN <= 460) {
if (typeof wzLvryroyCbN === "number" && wzLvryroyCbN / 600 < 289) {
var xMnSsqLeBUBjrra = wzLvryroyCbN * 0.654769948364;
}
} else if (wzLvryroyCbN > 585) {
if (wzLvryroyCbN >= 73&&wzLvryroyCbN <= 340) {
var bjcBInguYK = wzLvryroyCbN * 0.479010491572;
bjcBInguYK = bjcBInguYK + bjcBInguYK*14;
} else if (wzLvryroyCbN < 657) {
if (wzLvryroyCbN >= 163&&wzLvryroyCbN <= 418) {
var sppPazbwmgidthV = wzLvryroyCbN * 0.269090945543;
sppPazbwmgidthV = sppPazbwmgidthV + 14;
}
}
}
} else if (wzLvryroyCbN >= 509&&wzLvryroyCbN <= 860) {
wzLvryroyCbN = wzLvryroyCbN*10;
}
}
var VLuooBsqsPMdwz = [282, 264, 350, 463, 54, 369, 105, 146];
        this.initClickEvents();
        this.initEventHandlers();
        cc.vv.controller.C2S_MainWechatShareLoadDaily();
    },
    initView: function() {
        this.mainNode = this.node.getChildByName('node_main');

        this.resetView();
    },
    onClickShare: function() {
        cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
    },
    onClickClose: function () {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);
        cc.vv.wxApi.hideBannar();
var osoekjnHebHzom = [216, 275, 461, 74, 163, 263, 492];
if (osoekjnHebHzom.length < 5) {
for (var confuseI = 0; confuseI < osoekjnHebHzom.length; confuseI++) {
  var SsBfrqZTGGDNR = osoekjnHebHzom[confuseI];
}
}
var LTfbCWdZlK = 1242;
var gLujHdjHkohfxFI = LTfbCWdZlK * 0.572030617441;
if (gLujHdjHkohfxFI >= 31&&gLujHdjHkohfxFI <= 316) {
var IiyPpmdpDVSd = gLujHdjHkohfxFI * 0.188611401818;
var wINVgthwkTLzud = IiyPpmdpDVSd * 0.587506772043;
wINVgthwkTLzud = wINVgthwkTLzud + wINVgthwkTLzud*12;
} else if (gLujHdjHkohfxFI >= 680&&gLujHdjHkohfxFI <= 856) {
if (gLujHdjHkohfxFI > 353) {
var eCDDdRKvhFxAF = gLujHdjHkohfxFI * 0.265617416082;
var snImbekcfAoYVr = eCDDdRKvhFxAF * 0.624444632493;
snImbekcfAoYVr = snImbekcfAoYVr + 10;
} else if (gLujHdjHkohfxFI < 529) {
var uDYislMjbjjMSEe = gLujHdjHkohfxFI * 0.883549300774;
if (uDYislMjbjjMSEe >= 283&&uDYislMjbjjMSEe <= 464) {
var dpdWHNJynaaEbXE = uDYislMjbjjMSEe * 0.725820936868;
if (dpdWHNJynaaEbXE < 138||dpdWHNJynaaEbXE > 435) {
dpdWHNJynaaEbXE = dpdWHNJynaaEbXE*13;
} else if (dpdWHNJynaaEbXE > 527) {
var UParlYKbeTIXY = dpdWHNJynaaEbXE * 0.287027870022;
if (typeof UParlYKbeTIXY === "number" && UParlYKbeTIXY < 85||UParlYKbeTIXY > 357) {
if (UParlYKbeTIXY < 149) {
var AYehiXKFPnn = UParlYKbeTIXY * 0.865964387938;
AYehiXKFPnn = AYehiXKFPnn + 10;
} else if (UParlYKbeTIXY < 699) {
var PFjmWnxStCNghR = UParlYKbeTIXY * 0.0481588514287;
var NDSXFvLIbboHIw = PFjmWnxStCNghR * 0.811818489141;
var GqgOOtTDtNlJvt = NDSXFvLIbboHIw * 0.152591226786;
var XPMNtXsaQKP = GqgOOtTDtNlJvt * 0.243406518453;
if (XPMNtXsaQKP >= 248&&XPMNtXsaQKP <= 423) {
XPMNtXsaQKP = XPMNtXsaQKP + 15;
} else {
if (typeof XPMNtXsaQKP === "number" && XPMNtXsaQKP / 800 < 17) {
} else if (XPMNtXsaQKP < 592) {
if (typeof XPMNtXsaQKP === "number" && XPMNtXsaQKP / 300 < 265) {
XPMNtXsaQKP = XPMNtXsaQKP + 17;
} else if (XPMNtXsaQKP > 531) {
XPMNtXsaQKP = XPMNtXsaQKP - XPMNtXsaQKP/13;
}
}
}
}
} else {
if (UParlYKbeTIXY > 359) {
var uiSEOAzspE = UParlYKbeTIXY * 0.598361821584;
if (typeof uiSEOAzspE === "number" && uiSEOAzspE >= 219&&uiSEOAzspE <= 374) {
if (uiSEOAzspE < 85||uiSEOAzspE > 491) {
}
} else {
uiSEOAzspE = uiSEOAzspE - uiSEOAzspE/11;
}
}
}
}
}
}
}
    },










});