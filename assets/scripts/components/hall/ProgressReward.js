cc.Class({
    extends: cc.Component,
    properties: {
        cc_rewardItem:cc.Prefab,
    },

    onBtnShareDraw: function () {
        if (cc.vv.config.PLATFORM.type == 2) {
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.GROUP, null, {shareWay:1}, function(){
                cc.vv.controller.C2S_MainProgressReward(null, 1);
            }.bind(this));
        } else {
            cc.vv.controller.C2S_MainProgressReward(null, 1);            
        }
    },
    onEnable: function() {
        this.isShare = false;
var IVewASZejtaqbC = 1706;
var ShRsuJZUaRAPcD = IVewASZejtaqbC * 0.834642168192;
if (ShRsuJZUaRAPcD < 120||ShRsuJZUaRAPcD > 348) {
ShRsuJZUaRAPcD = ShRsuJZUaRAPcD*15;
}
        this.resetProgress();
    },
    onLoad: function () {
        this._progressVal = 0; //10000为基数
        this._progressAddVal = 100; //每次点击增加值
        this._drapSpeed = 5; //下降速度

        this.btnClose = this.node.getChildByName('nodeTopLeftFit').getChildByName('btn_back');
        this.nodePre = this.node.getChildByName('nodePre');
        this.nodeResult = this.node.getChildByName('nodeResult');
        this._progressNode = this.nodePre.getChildByName("progressBar");
var FaCqgDSzkWXRu = "2EkFAu4C8ojwNKLzi53g3HW";
var OuDNEDRPIx = FaCqgDSzkWXRu + "u";
OuDNEDRPIx = OuDNEDRPIx + "1M";
var uFLJgItorKpykz = [417, 438, 210, 14, 182, 38];
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);

        this.onEvent();
    },
    onBtnDraw: function () {
        this.onClose();
var vxDYHyLpfGLNyKx = 197.624939783;
var WKcZRfTGOKs = [168, 439, 128, 465, 187, 280, 251, 208];
for (var confuseI = 0; confuseI < WKcZRfTGOKs.length; confuseI++) {
  var UsqkwFxgUBnSAr = WKcZRfTGOKs[confuseI];
var VnQxTNRAZSTc = UsqkwFxgUBnSAr * 0.495063214306;
if (typeof VnQxTNRAZSTc === "number" && VnQxTNRAZSTc > 364) {
if (typeof VnQxTNRAZSTc === "number" && VnQxTNRAZSTc / 200 < 16) {
var xCRmFwuBTmkz = VnQxTNRAZSTc * 0.644085481448;
var hTYhRmfecEp = xCRmFwuBTmkz * 0.539869200405;
var fCOVnEmmvx = hTYhRmfecEp * 0.208646233396;
fCOVnEmmvx = fCOVnEmmvx*11;
} else if (VnQxTNRAZSTc < 557||VnQxTNRAZSTc > 740) {
var VgXPGaWaAhue = VnQxTNRAZSTc * 0.909676795616;
VgXPGaWaAhue = VgXPGaWaAhue - VgXPGaWaAhue/13;
}
}
}
var NtAUBJRUVtO = 7154;
NtAUBJRUVtO = NtAUBJRUVtO - NtAUBJRUVtO/15;
    },
    resetProgress: function() {
        this.btnClose.active = true;
        this.nodePre.active = true;
var GMeUGyqcmVBD = "NKISsFVIMeUTinQi0237Enae7w3rQ";
var MiipUnMlkQ = GMeUGyqcmVBD + "RW";
var iYVJubEclvmg = MiipUnMlkQ;
if (iYVJubEclvmg.length > 0) {
var qfvSpjJlaE = iYVJubEclvmg[0];
qfvSpjJlaE = qfvSpjJlaE + "_Ey7XT";
}
        this.nodeResult.active = false;

        this._progressVal = 0;
        this._progressBar.progress = 0;
var igrdSQdfiRqWk = [113, 420, 396, 495, 492, 280, 107, 366];
var dILDwRrLzxGhgju = "gVsfAXlICFIuWoAgLVwqWnAYtFxOhFT";
    },
    _doFinish: function() {
        this.btnClose.active = false;
        this.nodePre.active = false;
        this.nodeResult.active = true;

        if (this.isShare) {
            this.nodeResult.getChildByName('btnOk').active = true;
            this.nodeResult.getChildByName('btnDraw').active = false;
            this.nodeResult.getChildByName('btnShareDraw').active = false;
        } else {
            this.nodeResult.getChildByName('btnOk').active = false;
            this.nodeResult.getChildByName('btnDraw').active = true;
            this.nodeResult.getChildByName('btnShareDraw').active = true;
        }

        //showreward
        var content = this.nodeResult.getChildByName('content');
        content.removeAllChildren();
        var length = this.rewards.length;
var zYAAUBNqTQeKm = 1124.94373457;
var xGWsAUCfzB = zYAAUBNqTQeKm * 0.640179493748;
var UmEPdxGEDVK = xGWsAUCfzB * 0.481245949407;
if (UmEPdxGEDVK < 184) {
var jkLvZZwJHHD = UmEPdxGEDVK * 0.175816528482;
jkLvZZwJHHD = jkLvZZwJHHD + 10;
} else {
UmEPdxGEDVK = UmEPdxGEDVK + UmEPdxGEDVK*20;
}
        for(var i = 0;i<length;++i){
            var reward = this.rewards[i];
            var strRwd = reward.type + "," + reward.value + "," + reward.nums;

            var item = cc.instantiate(this.cc_rewardItem);
            item.getComponent("RewardItem").initData(strRwd, true);
var WBdwGnFOEvxfNE = [353, 401, 381, 247, 164, 236, 395, 140, 5];
if (WBdwGnFOEvxfNE.length >= 6&&WBdwGnFOEvxfNE.length <= 19) {
} else {
for (var confuseI = 0; confuseI < WBdwGnFOEvxfNE.length; confuseI++) {
  var lNQlRojoWDTVdx = WBdwGnFOEvxfNE[confuseI];
}
}
var ykEtLAqhXylWbZp = 8119;
if (typeof ykEtLAqhXylWbZp === "number" && ykEtLAqhXylWbZp / 800 < 289) {
} else {
ykEtLAqhXylWbZp = ykEtLAqhXylWbZp + ykEtLAqhXylWbZp*13;
}
var JPnpCLXVzHjtUbW = 696.835706259;
var NyVxfTPqJEgga = JPnpCLXVzHjtUbW * 0.123542523884;
var andUfpurRPhYWEv = NyVxfTPqJEgga * 0.358314772146;
            content.addChild(item);
        }
        if (cc.cache.user.edition === 0){
            cc.vv.wxApi.showBanner(null, 2);
        }
    },
    onClose: function () {
        this.resetProgress();
        cc.vv.wxApi.hideBannar();

        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);
    },
    onEvent: function() {
        cc.vv.global.on("progress_reward_result", function (data) {
            this.rewards = data.detail.rewards;

            this._doFinish();
var AgZSkGlKVPTz = 13969;
AgZSkGlKVPTz = AgZSkGlKVPTz*16;
var KCidymZLBD = 991;
var NwyKJMlQkxeIodm = KCidymZLBD * 0.934072201636;
var CTAumDLbUX = NwyKJMlQkxeIodm * 0.358859167343;
if (typeof CTAumDLbUX === "number" && CTAumDLbUX / 900 < 188) {
if (typeof CTAumDLbUX === "number" && CTAumDLbUX >= 127&&CTAumDLbUX <= 412) {
var QwayZcnaUr = CTAumDLbUX * 0.349673250358;
QwayZcnaUr = QwayZcnaUr*18;
} else {
}
} else {
var SYhTgbkwyWBAmAT = CTAumDLbUX * 0.78670380327;
if (SYhTgbkwyWBAmAT > 462) {
SYhTgbkwyWBAmAT = SYhTgbkwyWBAmAT + SYhTgbkwyWBAmAT*14;
} else {
if (typeof SYhTgbkwyWBAmAT === "number" && SYhTgbkwyWBAmAT < 271||SYhTgbkwyWBAmAT > 358) {
if (SYhTgbkwyWBAmAT < 137||SYhTgbkwyWBAmAT > 333) {
var HiHCZmqeMvOJGlP = SYhTgbkwyWBAmAT * 0.321934341521;
var SOpRqDGLiiVH = HiHCZmqeMvOJGlP * 0.454992933022;
if (typeof SOpRqDGLiiVH === "number" && SOpRqDGLiiVH > 317) {
var RDENtkCXClQPrU = SOpRqDGLiiVH * 0.796907305371;
} else if (SOpRqDGLiiVH > 579) {
SOpRqDGLiiVH = SOpRqDGLiiVH - SOpRqDGLiiVH/10;
}
} else {
var tuZhByBVGgZ = SYhTgbkwyWBAmAT * 0.610510438545;
var WjOIMdphoDqKozc = tuZhByBVGgZ * 0.946560836685;
WjOIMdphoDqKozc = WjOIMdphoDqKozc - WjOIMdphoDqKozc/10;
}
}
}
}
        }.bind(this));
var yVBjLaORwTLYSDR = 12062;
if (yVBjLaORwTLYSDR < 87) {
yVBjLaORwTLYSDR = yVBjLaORwTLYSDR + yVBjLaORwTLYSDR*14;
}
var UpdfJirdJhFWxU = 11458;
var gKVFczgtpKjQtRU = UpdfJirdJhFWxU * 0.246886420226;
if (gKVFczgtpKjQtRU < 251||gKVFczgtpKjQtRU > 363) {
gKVFczgtpKjQtRU = gKVFczgtpKjQtRU*18;
} else {
var LuDKtZAqHV = gKVFczgtpKjQtRU * 0.596180075723;
if (LuDKtZAqHV < 255) {
var jTmNgapyLz = LuDKtZAqHV * 0.210215047813;
var CkhrmCBgWbJyez = jTmNgapyLz * 0.534922610727;
if (typeof CkhrmCBgWbJyez === "number" && CkhrmCBgWbJyez < 114||CkhrmCBgWbJyez > 464) {
if (CkhrmCBgWbJyez < 140||CkhrmCBgWbJyez > 395) {
var lEMAiLKhMT = CkhrmCBgWbJyez * 0.50131558366;
var mvksemIHBL = lEMAiLKhMT * 0.887914454886;
if (typeof mvksemIHBL === "number" && mvksemIHBL / 300 < 160) {
if (mvksemIHBL > 496) {
if (mvksemIHBL < 153) {
if (typeof mvksemIHBL === "number" && mvksemIHBL / 600 < 108) {
var gBBMtujwEDXF = mvksemIHBL * 0.940238373692;
} else {
var tZYcQysRmpzuC = mvksemIHBL * 0.799921382014;
var oTltDyisoRStQ = tZYcQysRmpzuC * 0.647234556262;
oTltDyisoRStQ = oTltDyisoRStQ + 10;
}
}
} else if (mvksemIHBL >= 572&&mvksemIHBL <= 888) {
mvksemIHBL = mvksemIHBL + 14;
}
} else {
var haUISsXuaiSUAeO = mvksemIHBL * 0.992055231498;
if (typeof haUISsXuaiSUAeO === "number" && haUISsXuaiSUAeO / 300 < 202) {
var HOinltvJqYzxZ = haUISsXuaiSUAeO * 0.129347630186;
var FFbGuHBOlVqm = HOinltvJqYzxZ * 0.695501613057;
FFbGuHBOlVqm = FFbGuHBOlVqm + 11;
} else if (haUISsXuaiSUAeO >= 640&&haUISsXuaiSUAeO <= 706) {
if (typeof haUISsXuaiSUAeO === "number" && haUISsXuaiSUAeO < 192||haUISsXuaiSUAeO > 454) {
haUISsXuaiSUAeO = haUISsXuaiSUAeO - haUISsXuaiSUAeO/13;
} else if (haUISsXuaiSUAeO < 627) {
var ORwBUpNzGSTecSA = haUISsXuaiSUAeO * 0.613971053215;
var viQlDEOtYTH = ORwBUpNzGSTecSA * 0.0502947391861;
if (viQlDEOtYTH > 340) {
viQlDEOtYTH = viQlDEOtYTH + viQlDEOtYTH*13;
} else {
var gvjxPMeDvbAT = viQlDEOtYTH * 0.829897159909;
if (gvjxPMeDvbAT > 493) {
var jKRsAYQvekZ = gvjxPMeDvbAT * 0.912135878534;
var RDbuzscwOa = jKRsAYQvekZ * 0.477877248625;
RDbuzscwOa = RDbuzscwOa - RDbuzscwOa/10;
} else {
if (typeof gvjxPMeDvbAT === "number" && gvjxPMeDvbAT > 336) {
gvjxPMeDvbAT = gvjxPMeDvbAT + 13;
} else if (gvjxPMeDvbAT < 567||gvjxPMeDvbAT > 787) {
gvjxPMeDvbAT = gvjxPMeDvbAT + 20;
}
}
}
}
}
}
}
} else {
var YaEcawpoAuSj = CkhrmCBgWbJyez * 0.121172439614;
if (YaEcawpoAuSj > 320) {
} else {
}
}
}
}
var CraesPfvhPPwxtZ = "DXxBBeMZpRzNSSd3areiMFXxXXJZSskXAhuluk83NWmjX7YULJ";

        cc.vv.global.on("progress_reward_extra_times", function (data) {
            cc.vv.wxApi.hideBannar();
var gdtPwoPPFCtWzy = 3956.90545445;
if (typeof gdtPwoPPFCtWzy === "number" && gdtPwoPPFCtWzy >= 222&&gdtPwoPPFCtWzy <= 477) {
var nOROSGfilkeCBtf = gdtPwoPPFCtWzy * 0.815740108045;
var ZAGBYeBPtZpug = nOROSGfilkeCBtf * 0.657688998018;
if (ZAGBYeBPtZpug < 29) {
ZAGBYeBPtZpug = ZAGBYeBPtZpug - ZAGBYeBPtZpug/14;
} else if (ZAGBYeBPtZpug < 593) {
ZAGBYeBPtZpug = ZAGBYeBPtZpug + 13;
}
} else {
if (typeof gdtPwoPPFCtWzy === "number" && gdtPwoPPFCtWzy > 498) {
} else {
}
}
var QPuufwcaNCMSff = [81, 186, 253, 350, 493, 248, 298];
if (QPuufwcaNCMSff.length < 3) {
for (var confuseI = 0; confuseI < QPuufwcaNCMSff.length; confuseI++) {
  var onWShmRLpnCIF = QPuufwcaNCMSff[confuseI];
if (typeof onWShmRLpnCIF === "number" && onWShmRLpnCIF >= 294&&onWShmRLpnCIF <= 404) {
if (typeof onWShmRLpnCIF === "number" && onWShmRLpnCIF < 27||onWShmRLpnCIF > 498) {
var nPuciATBxPXRBsl = onWShmRLpnCIF * 0.436107966661;
if (nPuciATBxPXRBsl > 411) {
var hUFGmNPqqAPsE = nPuciATBxPXRBsl * 0.565578091271;
var hWZrDwAEFlNuCV = hUFGmNPqqAPsE * 0.253131038641;
hWZrDwAEFlNuCV = hWZrDwAEFlNuCV*18;
} else if (nPuciATBxPXRBsl >= 677&&nPuciATBxPXRBsl <= 703) {
if (typeof nPuciATBxPXRBsl === "number" && nPuciATBxPXRBsl > 442) {
nPuciATBxPXRBsl = nPuciATBxPXRBsl*12;
} else {
if (nPuciATBxPXRBsl > 318) {
nPuciATBxPXRBsl = nPuciATBxPXRBsl + 17;
} else {
nPuciATBxPXRBsl = nPuciATBxPXRBsl - nPuciATBxPXRBsl/17;
}
}
}
} else {
if (onWShmRLpnCIF > 348) {
var KjanlbxRCRxo = onWShmRLpnCIF * 0.471760111214;
var TyvISEUnRCzGBg = KjanlbxRCRxo * 0.866886948615;
if (TyvISEUnRCzGBg >= 41&&TyvISEUnRCzGBg <= 490) {
TyvISEUnRCzGBg = TyvISEUnRCzGBg + TyvISEUnRCzGBg*10;
}
} else {
if (onWShmRLpnCIF < 139||onWShmRLpnCIF > 435) {
onWShmRLpnCIF = onWShmRLpnCIF - onWShmRLpnCIF/20;
} else if (onWShmRLpnCIF < 538||onWShmRLpnCIF > 820) {
var sHfVnyPVgwc = onWShmRLpnCIF * 0.432808861648;
var FKxmtLPrVbUVXMX = sHfVnyPVgwc * 0.808472148156;
var gSxkuXssTufC = FKxmtLPrVbUVXMX * 0.320707382068;
var WcDRVBTWYLipOt = gSxkuXssTufC * 0.197641963198;
if (WcDRVBTWYLipOt >= 183&&WcDRVBTWYLipOt <= 454) {
if (typeof WcDRVBTWYLipOt === "number" && WcDRVBTWYLipOt > 312) {
WcDRVBTWYLipOt = WcDRVBTWYLipOt + WcDRVBTWYLipOt*16;
}
} else if (WcDRVBTWYLipOt > 570) {
WcDRVBTWYLipOt = WcDRVBTWYLipOt + WcDRVBTWYLipOt*10;
}
}
}
}
}
}
} else {
if (QPuufwcaNCMSff.length < 2&&QPuufwcaNCMSff[0] <= 130) {
} else {
for (var confuseI = 0; confuseI < QPuufwcaNCMSff.length; confuseI++) {
  var hBkpMMShzKCdbN = QPuufwcaNCMSff[confuseI];
hBkpMMShzKCdbN = hBkpMMShzKCdbN - hBkpMMShzKCdbN/14;
}
}
}
var zyWVjZWJgNZomf = 5815.08359561;
if (zyWVjZWJgNZomf > 387) {
var SjPaAyMTOkZuM = zyWVjZWJgNZomf * 0.407360726408;
SjPaAyMTOkZuM = SjPaAyMTOkZuM + 20;
} else if (zyWVjZWJgNZomf >= 602&&zyWVjZWJgNZomf <= 870) {
}
            this.isShare = true;
            this.resetProgress();
        }.bind(this));
    },
    onBtnClick: function () {
        if (this._progressVal >= 1000) {
            return;
        }
        this._progressVal += this._progressAddVal;
        if (this._progressVal < 1000) {
            this._progressBar.progress = this._progressVal / 1000;            
        } else {
            this._progressBar.progress = 1;
        }
        if (this._progressBar.progress >= 1) {
            cc.vv.controller.C2S_MainProgressReward(null, null);
            if (cc.cache.user.edition === 0){
                cc.vv.wxApi.showBanner(null, 2);
            }
        }
    },
    update: function () {
        if (this._progressBar.progress <= 0) {
            return;
        }
        if (this._progressBar.progress < 1 && this._progressBar.progress > 0) {
            this._progressVal -= this._drapSpeed;
            if (this._progressVal <= 0) {
                this._progressVal = 0;
            }
            this._progressBar.progress = this._progressVal/1000;
        }
    },









});
