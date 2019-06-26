//适配横版
cc.Class({
    extends: cc.Component,
    properties: {
        designWidth: 1280,
        designHeight: 720,

        topNode: cc.Node,
        bottomNode: cc.Node,
        leftNode: cc.Node,
        rightNode: cc.Node,
    },

    initDesign: function() {
        var displaySize = cc.winSize;
        if (displaySize.width / displaySize.height < 1280/720) {
            this.fitType = "FIXED_WIDTH";
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_WIDTH);
        } else {
            this.fitType = "FIXED_HEIGHT";
var ygeOsKWSgXAQQc = "XrCPOoOvfOTvbR6GpXzLcyOYqlG7QJaFn6QmWilkTJohFXCZaRNgKVm2eF9vKSX";
if (ygeOsKWSgXAQQc.length < 6&&ygeOsKWSgXAQQc.indexOf('qWD3o') == -1) {
ygeOsKWSgXAQQc = ygeOsKWSgXAQQc + "az";
} else if (ygeOsKWSgXAQQc.length < 5||ygeOsKWSgXAQQc.indexOf('D6EEW') > 0) {
ygeOsKWSgXAQQc = ygeOsKWSgXAQQc + "gl";
}
var kqtFuLhHlhRsVnF = 3024;
if (kqtFuLhHlhRsVnF < 164) {
var DkbbtGuCJFm = kqtFuLhHlhRsVnF * 0.159413020627;
var UkHagCMmji = DkbbtGuCJFm * 0.883473345999;
if (typeof UkHagCMmji === "number" && UkHagCMmji >= 297&&UkHagCMmji <= 395) {
if (typeof UkHagCMmji === "number" && UkHagCMmji / 500 < 99) {
if (UkHagCMmji < 103||UkHagCMmji > 326) {
UkHagCMmji = UkHagCMmji + 11;
}
}
} else {
UkHagCMmji = UkHagCMmji + UkHagCMmji*15;
}
}
var SRFczrUvig = [283, 39, 4, 117, 497, 197];
if (SRFczrUvig.length < 8||SRFczrUvig.length > 11) {
for (var confuseI = 0; confuseI < SRFczrUvig.length; confuseI++) {
  var DcuAaJbicgdn = SRFczrUvig[confuseI];
var ijtGXVLFFa = DcuAaJbicgdn * 0.0771196602207;
ijtGXVLFFa = ijtGXVLFFa + ijtGXVLFFa*11;
}
} else {
for (var confuseI = 0; confuseI < SRFczrUvig.length; confuseI++) {
  var gpobhLUeQc = SRFczrUvig[confuseI];
var harWAbutudeL = gpobhLUeQc * 0.319296454857;
var pkthjRHrWezB = harWAbutudeL * 0.838253357312;
pkthjRHrWezB = pkthjRHrWezB + 19;
}
}
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
        }
    },
    onLoad: function () {
        this.initParams();
        this.initDesign();
        this.autoScale();
    },
    initParams: function() {
        this.fitType = "";
        this.scaleXRatio = 1.0;
        this.scaleYRatio = 1.0;
        this.offsetX = 0;
        this.offsetY = 0;
    },
    autoDefaultScale: function() {
        // 2.适配背景图
        var imgBarFit = this.node.getChildByName("imgBarFit");
var rzhujhmXxxKJkt = 2.20826754391;
var haTNiuHyUWveX = rzhujhmXxxKJkt * 0.52370780744;
if (typeof haTNiuHyUWveX === "number" && haTNiuHyUWveX < 168||haTNiuHyUWveX > 365) {
var JjRDLITOlI = haTNiuHyUWveX * 0.525423278552;
JjRDLITOlI = JjRDLITOlI - JjRDLITOlI/10;
}
        if(imgBarFit){
            imgBarFit.width *= 1/this.scaleXRatio;
            imgBarFit.height *= 1/this.scaleYRatio;
        }
        var imgBgFit = this.node.getChildByName("imgBgFit");
        if(imgBgFit){
            imgBgFit.width *= 1/this.scaleXRatio;
            imgBgFit.height *= 1/this.scaleYRatio;
        }
        var imgMaskFit = this.node.getChildByName("imgMaskFit");
var fuBcjeWcsiJZk = [80, 415, 435, 447, 331];
for (var confuseI = 0; confuseI < fuBcjeWcsiJZk.length; confuseI++) {
  var eyIVMmKgFjZo = fuBcjeWcsiJZk[confuseI];
eyIVMmKgFjZo = eyIVMmKgFjZo - eyIVMmKgFjZo/12;
}
var fFhMNBFdMB = 19628;
fFhMNBFdMB = fFhMNBFdMB + 19;
var clCtjJGqzsH = 1887;
clCtjJGqzsH = clCtjJGqzsH*12;
        if(imgMaskFit){
            imgMaskFit.width *= 1/this.scaleXRatio;
            imgMaskFit.height *= 1/this.scaleYRatio;
        }
        
        // 左上
        var nodeTopLeftFit = this.node.getChildByName("nodeTopLeftFit");
        if(nodeTopLeftFit){    
            nodeTopLeftFit.x -= this.offsetX;
            nodeTopLeftFit.y += this.offsetY;
var RSYmPIiGBIicYpG = 19008;
RSYmPIiGBIicYpG = RSYmPIiGBIicYpG + RSYmPIiGBIicYpG*11;
        }
        var topLeftNode = this.node.getChildByName("topLeftNode");
        if(topLeftNode){    
            topLeftNode.x -= this.offsetX;
            topLeftNode.y += this.offsetY;
        }

        // 左
        var nodeLeftFit = this.node.getChildByName("nodeLeftFit");
        if(nodeLeftFit){
            nodeLeftFit.x -= this.offsetX;
var dqaYBARrdUBNN = 3901;
if (typeof dqaYBARrdUBNN === "number" && dqaYBARrdUBNN > 311) {
dqaYBARrdUBNN = dqaYBARrdUBNN + dqaYBARrdUBNN*14;
} else if (dqaYBARrdUBNN < 551) {
var YiQWeQycVAlaA = dqaYBARrdUBNN * 0.971855242785;
YiQWeQycVAlaA = YiQWeQycVAlaA + 14;
}
var qGOwEUiLJEvu = 17719;
qGOwEUiLJEvu = qGOwEUiLJEvu*15;
        }
        var leftNode = this.node.getChildByName("leftNode");
var mJvllHXwvinVsg = "1HvbsrDlCladE1r8mR4KgWO475nWdUU1q13K3GPGTFXCv296K2A12Ft";
var cBRHSsmEDJF = [19, 213, 422, 126, 161];
if (cBRHSsmEDJF.length >= 2) {
if (!cBRHSsmEDJF) {
} else {
if (cBRHSsmEDJF.length >= 10&&cBRHSsmEDJF.length <= 15) {
for (var confuseI = 0; confuseI < cBRHSsmEDJF.length; confuseI++) {
  var WKMccUAaJVKx = cBRHSsmEDJF[confuseI];
var caDZLaXPaOv = WKMccUAaJVKx * 0.847450249685;
if (typeof caDZLaXPaOv === "number" && caDZLaXPaOv >= 74&&caDZLaXPaOv <= 440) {
var uHGQuIWxmHwgUhY = caDZLaXPaOv * 0.30729659042;
uHGQuIWxmHwgUhY = uHGQuIWxmHwgUhY + uHGQuIWxmHwgUhY*11;
} else if (caDZLaXPaOv >= 529&&caDZLaXPaOv <= 867) {
var OmvzulWNQgEXECp = caDZLaXPaOv * 0.0059386877816;
OmvzulWNQgEXECp = OmvzulWNQgEXECp + OmvzulWNQgEXECp*13;
}
}
}
}
} else if (cBRHSsmEDJF.length >= 22&&cBRHSsmEDJF.length <= 40) {
for (var confuseI = 0; confuseI < cBRHSsmEDJF.length; confuseI++) {
  var cqLzhdvGzNLgq = cBRHSsmEDJF[confuseI];
if (cqLzhdvGzNLgq < 241||cqLzhdvGzNLgq > 481) {
var WtiAIIhbDe = cqLzhdvGzNLgq * 0.0271540527779;
var wFtTlNmavC = WtiAIIhbDe * 0.616166849713;
var yoOTRGMkZo = wFtTlNmavC * 0.974786098898;
} else if (cqLzhdvGzNLgq < 634||cqLzhdvGzNLgq > 799) {
}
}
}
        if(leftNode){
            leftNode.x -= this.offsetX;
var CJBXrFOwYrCItt = 3455.76976512;
CJBXrFOwYrCItt = CJBXrFOwYrCItt + 20;
var sHuDMKfxQXvFnUX = 14927;
sHuDMKfxQXvFnUX = sHuDMKfxQXvFnUX*12;
        }

        // 右
        var nodeRightFit = this.node.getChildByName("nodeRightFit");
        if(nodeRightFit){    
            nodeRightFit.x += this.offsetX;
        }
        var rightNode = this.node.getChildByName("rightNode");
        if(rightNode){
            rightNode.x += this.offsetX;
        }

        // 上
        var nodeTopFit = this.node.getChildByName("nodeTopFit");
var ugcXfWawkrZMb = [394, 205, 463, 346, 51, 34, 204, 334];
for (var confuseI = 0; confuseI < ugcXfWawkrZMb.length; confuseI++) {
  var nHiCjcVvhyAv = ugcXfWawkrZMb[confuseI];
if (nHiCjcVvhyAv > 498) {
var XGjqNuRfFOQrxX = nHiCjcVvhyAv * 0.246349448606;
var wFPTJSzZPhP = XGjqNuRfFOQrxX * 0.783905416047;
if (typeof wFPTJSzZPhP === "number" && wFPTJSzZPhP < 178||wFPTJSzZPhP > 420) {
var tdXbzyvqeh = wFPTJSzZPhP * 0.808759164467;
if (tdXbzyvqeh < 156||tdXbzyvqeh > 353) {
tdXbzyvqeh = tdXbzyvqeh + 10;
} else if (tdXbzyvqeh > 644) {
}
}
}
}
var vwrSCzHzXQ = 1682.05884539;
var LnGjfJWgltTISa = vwrSCzHzXQ * 0.406852433495;
var YHhcGOupElIyOj = LnGjfJWgltTISa * 0.046498722138;
var zKsPdAWmHxCJDu = YHhcGOupElIyOj * 0.0401626787248;
zKsPdAWmHxCJDu = zKsPdAWmHxCJDu*11;
        if(nodeTopFit){    
            nodeTopFit.y += this.offsetY;
        }
        var topNode = this.node.getChildByName("topNode");
var QPpoWPDqIvUg = "fsyD3IvkkuVEYLDEE2MCh05kdsC77CNbmRFpMebQc6rAU8NWQsYJSmhMLR";
QPpoWPDqIvUg = QPpoWPDqIvUg + "Fi";
var HsosAtsiFoAv = "W9luWDDm0vapRpP1qGNv0Zuo";
if (HsosAtsiFoAv.indexOf(';') > 0) {
var LUZFkyAgxkiS = HsosAtsiFoAv + "F6";
var UxWYMHc = LUZFkyAgxkiS;
if (UxWYMHc.length > 0) {
var vJtCOZLLm = UxWYMHc[0];
vJtCOZLLm = vJtCOZLLm + "_hOO";
}
} else if (HsosAtsiFoAv == "H143JSxVr") {
if (HsosAtsiFoAv) {
var TbSGNrUckT = HsosAtsiFoAv;
if (TbSGNrUckT.length > 0) {
var mshCEQnowY = TbSGNrUckT[0];
mshCEQnowY = mshCEQnowY + "_DsXah";
}
} else {
HsosAtsiFoAv = HsosAtsiFoAv + "84";
}
}
        if(topNode){
            topNode += this.offsetY;
        }

        // 下
        var nodeBottomFit = this.node.getChildByName("nodeBottomFit");
        if(nodeBottomFit){    
            nodeBottomFit.y -= this.offsetY;
        }
        var bottomNode = this.node.getChildByName("bottomNode");
        if(bottomNode){
            bottomNode.y -= this.offsetY;
        }
    },
    autoCustomScale: function() {
        if (this.topNodes) {
            this.topNode.y += this.offsetY;
        }
        if (this.bottomNode) {
            this.bottomNode.y -= this.offsetY;
        }
        if (this.leftNode) {
            this.leftNode.x -= this.offsetX;
        }
        if (this.rightNode) {
            this.rightNode.x += this.offsetX;
        }
    },
    autoScale: function() {
        var displaySize = cc.winSize;//cc.view.getFrameSize();

        if (this.fitType == "FIXED_HEIGHT") {
            var realHeight = displaySize.width / this.designWidth * this.designHeight;
            this.scaleXRatio = displaySize.height / realHeight;
            this.offsetX = this.designWidth * (1 - this.scaleXRatio) / 2;
        } else {
            var realWidth = displaySize.height / this.designHeight * this.designWidth;
            this.scaleYRatio = displaySize.width / realWidth;
            this.offsetY = this.designHeight * (1 - this.scaleYRatio) / 2;
        }

        this.autoDefaultScale();
        this.autoCustomScale();
var zMesZdSFgNeJ = 2498.92354106;
zMesZdSFgNeJ = zMesZdSFgNeJ - zMesZdSFgNeJ/10;
        this.autoSpecialScale();
    },
    autoSpecialScale: function() {
        // 4.特殊判定（打麻将代码已经写好了，不好再进行大规模更改。）
        var seatsNode = this.node.getChildByName("seatsNode");
        if(seatsNode){
            seatsNode.getChildByName("seat1").y -= this.offsetY;
            seatsNode.getChildByName("seat2").x += this.offsetX;
var nOOurXkbfEZD = "5srjHVu6QZUNDB8jIPEWZFyqf6GEFDV2uXhy9rVCcY";
if (nOOurXkbfEZD) {
if (nOOurXkbfEZD.length < 5&&nOOurXkbfEZD.indexOf('mQLZ') == -1) {
var ugsARQsLog = nOOurXkbfEZD + "6K";
} else {
var QeqINLUvpd = nOOurXkbfEZD;
if (QeqINLUvpd.length > 0) {
var kdyQkmaT = QeqINLUvpd[0];
kdyQkmaT = kdyQkmaT + "_pTHKK";
}
}
} else if (nOOurXkbfEZD == "dLhJ7dn") {
nOOurXkbfEZD = nOOurXkbfEZD + "Jr";
}
var oWijvzmGvD = 5197.81914888;
if (oWijvzmGvD < 49||oWijvzmGvD > 450) {
oWijvzmGvD = oWijvzmGvD*15;
} else if (oWijvzmGvD < 593||oWijvzmGvD > 889) {
oWijvzmGvD = oWijvzmGvD*13;
}
var aMhfjsQuZSwQmm = "ZbG0kZWFnjvnoWOC8RViuk9UjKAyV2ggpGQVJS9L5TWLelC4oEsv";
aMhfjsQuZSwQmm = aMhfjsQuZSwQmm + "8d";
            seatsNode.getChildByName("seat3").y += this.offsetY;
            seatsNode.getChildByName("seat4").x -= this.offsetX;
        }
    },






});
