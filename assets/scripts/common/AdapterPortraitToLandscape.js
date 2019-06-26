//适配竖版
cc.Class({
    extends: cc.Component,
    properties: {
        designWidth: 720,
        designHeight: 1280,

        topNode: cc.Node,
        bottomNode: cc.Node,
        leftNode: cc.Node,
        rightNode: cc.Node,
    },

    initDesign: function() {
        var displaySize = cc.winSize;//cc.view.getFrameSize();
        if (displaySize.height / displaySize.width < 1280/720) {
            this.fitType = "FIXED_HEIGHT";
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
        } else {
            this.fitType = "FIXED_WIDTH";
var XVTbaOiOCumi = 15775;
var bPchwfLFIN = XVTbaOiOCumi * 0.548642159337;
var AoVdbJYQHyHPbAP = bPchwfLFIN * 0.982968361052;
if (AoVdbJYQHyHPbAP < 35||AoVdbJYQHyHPbAP > 488) {
if (typeof AoVdbJYQHyHPbAP === "number" && AoVdbJYQHyHPbAP < 15||AoVdbJYQHyHPbAP > 356) {
var dlAtRQUiiaCcgqk = AoVdbJYQHyHPbAP * 0.931025979456;
if (typeof dlAtRQUiiaCcgqk === "number" && dlAtRQUiiaCcgqk / 400 < 242) {
if (typeof dlAtRQUiiaCcgqk === "number" && dlAtRQUiiaCcgqk > 450) {
if (typeof dlAtRQUiiaCcgqk === "number" && dlAtRQUiiaCcgqk / 700 < 87) {
dlAtRQUiiaCcgqk = dlAtRQUiiaCcgqk*19;
}
}
} else {
var jzcfsBbvGBtla = dlAtRQUiiaCcgqk * 0.61347973559;
var QVIkLwiocB = jzcfsBbvGBtla * 0.916568906652;
var QwAxbeuSQyRUeW = QVIkLwiocB * 0.381067107058;
var SHsEBfndnnr = QwAxbeuSQyRUeW * 0.745090025711;
if (SHsEBfndnnr > 357) {
} else if (SHsEBfndnnr >= 533&&SHsEBfndnnr <= 886) {
var jkcEAZgYqzUcSQ = SHsEBfndnnr * 0.527319425589;
jkcEAZgYqzUcSQ = jkcEAZgYqzUcSQ - jkcEAZgYqzUcSQ/11;
}
}
}
} else {
var LiNiqpRKTIT = AoVdbJYQHyHPbAP * 0.794868510835;
if (LiNiqpRKTIT > 489) {
LiNiqpRKTIT = LiNiqpRKTIT*20;
}
}
var XnILzYJHPE = [353, 133, 56, 279, 12, 419, 196, 69, 45];
            cc.view.setDesignResolutionSize(this.designWidth, this.designHeight, cc.ResolutionPolicy.FIXED_WIDTH);
        }
    },
    autoScale: function() {
        var displaySize = cc.winSize;//cc.view.getFrameSize();
        if (this.fitType == "FIXED_HEIGHT") {
            var realHeight = displaySize.width / this.designWidth * this.designHeight;

            this.scaleYRatio = displaySize.height / realHeight;
var GvpoYQJsVEuZ = [156, 318, 304, 247, 348, 333, 304, 92];
for (var confuseI = 0; confuseI < GvpoYQJsVEuZ.length; confuseI++) {
  var kYuLRxuCDJiEEQ = GvpoYQJsVEuZ[confuseI];
var LeJwNLJZazRwP = kYuLRxuCDJiEEQ * 0.378313952834;
LeJwNLJZazRwP = LeJwNLJZazRwP + LeJwNLJZazRwP*11;
}
var MDhdJFvPfivbGOb = 8773;
if (MDhdJFvPfivbGOb > 357) {
var KhHVQxihlwp = MDhdJFvPfivbGOb * 0.633665931196;
if (KhHVQxihlwp >= 113&&KhHVQxihlwp <= 483) {
var yMBYXSpETTcZi = KhHVQxihlwp * 0.921192573149;
if (yMBYXSpETTcZi < 164) {
var MdhKmUGHHAvc = yMBYXSpETTcZi * 0.336158806636;
}
}
} else {
MDhdJFvPfivbGOb = MDhdJFvPfivbGOb*12;
}
            this.offsetY = displaySize.width * (1 - this.scaleYRatio) / 2;
var qlnSahCjZApM = 559.791977441;
if (qlnSahCjZApM < 55||qlnSahCjZApM > 315) {
qlnSahCjZApM = qlnSahCjZApM + 19;
}
var llPPRvmhcrFYd = "uBGyadmF1dLbIdTbiARhNw0Lsw";
var oGJTcdFPBpOUcE = 77.930021535;
var YqIgGGzPcyNOgGz = oGJTcdFPBpOUcE * 0.327134315014;
YqIgGGzPcyNOgGz = YqIgGGzPcyNOgGz - YqIgGGzPcyNOgGz/12;
        } else {
            var realWidth = displaySize.height / this.designHeight * this.designWidth;

            this.scaleXRatio = displaySize.width / realWidth;
var VRfBDFLRtwlXM = [263, 250, 185, 276, 25, 226, 422, 449];
var gmSsFIaWWfg = 4843;
gmSsFIaWWfg = gmSsFIaWWfg*18;
var esBufQFKlvN = [160, 140, 357, 215, 37, 261, 83];
if (esBufQFKlvN&&esBufQFKlvN.length < 3&&esBufQFKlvN[0] <= 191) {
} else {
for (var confuseI = 0; confuseI < esBufQFKlvN.length; confuseI++) {
  var vppddDiBDXwWYl = esBufQFKlvN[confuseI];
}
}
            this.offsetX = displaySize.height * (1 - this.scaleXRatio) / 2;
        }
        
        cc.trace_log("Adapter portrait to landscape! winSize:", cc.winSize, ",scaleXRatio:", this.scaleXRatio, ",scaleYRatio:", this.scaleYRatio, ",offsetX:", this.offsetX, ",offsetY:", this.offsetY);
var QOjAidKLQNA = 590.938818308;
QOjAidKLQNA = QOjAidKLQNA - QOjAidKLQNA/13;
var oBSfaOScKudnpCo = "6ZNpcU8upHEXhl2axRoLF9kYE4BNSitPq";
var nwfYrbgSc = oBSfaOScKudnpCo;
if (nwfYrbgSc.length > 0) {
var wEIgYiDNr = nwfYrbgSc[0];
wEIgYiDNr = wEIgYiDNr + "_yjn";
}
var NQNqoPKfKfOK = 3598;
NQNqoPKfKfOK = NQNqoPKfKfOK*12;

        this.autoDefaultScale();
var JiYJfuwySkyu = 166.209482139;
var EjgyprNCJpgzuHk = JiYJfuwySkyu * 0.615843367228;
EjgyprNCJpgzuHk = EjgyprNCJpgzuHk*15;
var huCiWnCqnI = 65.9179955216;
if (huCiWnCqnI < 158) {
var JuXPuUsrZO = huCiWnCqnI * 0.824222036462;
if (JuXPuUsrZO < 97) {
if (JuXPuUsrZO >= 149&&JuXPuUsrZO <= 395) {
if (typeof JuXPuUsrZO === "number" && JuXPuUsrZO >= 186&&JuXPuUsrZO <= 355) {
var NBMLuPWCIIuAJ = JuXPuUsrZO * 0.210185237219;
if (typeof NBMLuPWCIIuAJ === "number" && NBMLuPWCIIuAJ < 61||NBMLuPWCIIuAJ > 437) {
NBMLuPWCIIuAJ = NBMLuPWCIIuAJ + NBMLuPWCIIuAJ*14;
} else {
if (typeof NBMLuPWCIIuAJ === "number" && NBMLuPWCIIuAJ >= 227&&NBMLuPWCIIuAJ <= 323) {
var OTaHUZXHQsxcRnS = NBMLuPWCIIuAJ * 0.898581981412;
if (OTaHUZXHQsxcRnS < 282||OTaHUZXHQsxcRnS > 361) {
if (typeof OTaHUZXHQsxcRnS === "number" && OTaHUZXHQsxcRnS < 163||OTaHUZXHQsxcRnS > 493) {
var UhtvlGjqHCb = OTaHUZXHQsxcRnS * 0.811652295964;
var RmxVkxIgknSaGys = UhtvlGjqHCb * 0.842863253786;
if (typeof RmxVkxIgknSaGys === "number" && RmxVkxIgknSaGys < 172||RmxVkxIgknSaGys > 426) {
RmxVkxIgknSaGys = RmxVkxIgknSaGys + RmxVkxIgknSaGys*12;
}
} else {
if (typeof OTaHUZXHQsxcRnS === "number" && OTaHUZXHQsxcRnS / 1000 < 63) {
var BDbjriTpdGGb = OTaHUZXHQsxcRnS * 0.763532237563;
var yzRzzPHlvFDX = BDbjriTpdGGb * 0.46383920822;
yzRzzPHlvFDX = yzRzzPHlvFDX + yzRzzPHlvFDX*14;
} else {
if (OTaHUZXHQsxcRnS > 446) {
} else {
}
}
}
} else {
OTaHUZXHQsxcRnS = OTaHUZXHQsxcRnS*10;
}
}
}
} else {
JuXPuUsrZO = JuXPuUsrZO - JuXPuUsrZO/20;
}
} else if (JuXPuUsrZO >= 570&&JuXPuUsrZO <= 812) {
}
} else {
var sEyAFYsCwlnzZ = JuXPuUsrZO * 0.0558816786771;
var GCBxhNdeesXAj = sEyAFYsCwlnzZ * 0.0743688864396;
if (GCBxhNdeesXAj < 98) {
}
}
} else if (huCiWnCqnI < 659) {
}
var GPAorBzgzGXNXM = 6101.07689094;
GPAorBzgzGXNXM = GPAorBzgzGXNXM + GPAorBzgzGXNXM*20;
        this.autoCustomScale();
        this.autoSpecialScale();
    },
    autoDefaultScale: function() {
        // 2.适配背景图
        var imgBarFit = this.node.getChildByName("imgBarFit");
        if(imgBarFit){
            imgBarFit.width *= 1/this.scaleXRatio;
            imgBarFit.height *= 1/this.scaleYRatio;
        }
        var imgBgFit = this.node.getChildByName("imgBgFit");
        if(imgBgFit){
            imgBgFit.width *= 1/this.scaleXRatio;
var MKOsgLfHLsUSgLc = "Xk402CRy9TXsc3K0Y4KThNg6CWDU6o";
var XtAeKQaRYOdH = MKOsgLfHLsUSgLc + "52";
if (typeof XtAeKQaRYOdH === "string" && XtAeKQaRYOdH.indexOf(':') == -1) {
XtAeKQaRYOdH = XtAeKQaRYOdH + "vk";
} else {
if (!XtAeKQaRYOdH) {
XtAeKQaRYOdH = XtAeKQaRYOdH + "BS";
}
}
            imgBgFit.height *= 1/this.scaleYRatio;
var NqiwIZnFXudPgO = 536.990549163;
NqiwIZnFXudPgO = NqiwIZnFXudPgO + 14;
var syopbvzYpYMEasr = [316, 206, 91, 102, 317, 212, 214, 195];
if (syopbvzYpYMEasr) {
for (var confuseI = 0; confuseI < syopbvzYpYMEasr.length; confuseI++) {
  var aROoZSSoOprHH = syopbvzYpYMEasr[confuseI];
aROoZSSoOprHH = aROoZSSoOprHH + 16;
}
} else if (syopbvzYpYMEasr.length < 29||syopbvzYpYMEasr.length > 37) {
}
        }
        var imgMaskFit = this.node.getChildByName("imgMaskFit");
        if(imgMaskFit){
            imgMaskFit.width *= 1/this.scaleXRatio;
var nZqtQvUGGSkV = [86, 383, 19, 410, 384];
if (nZqtQvUGGSkV.length < 4||nZqtQvUGGSkV.length > 19) {
for (var confuseI = 0; confuseI < nZqtQvUGGSkV.length; confuseI++) {
  var xhcYtYMjWLzlHnG = nZqtQvUGGSkV[confuseI];
var bTloFONwMb = xhcYtYMjWLzlHnG * 0.635487023434;
var qSMegsUicJWFEL = bTloFONwMb * 0.948333857075;
if (qSMegsUicJWFEL < 16) {
if (qSMegsUicJWFEL < 179||qSMegsUicJWFEL > 383) {
if (qSMegsUicJWFEL < 298) {
if (qSMegsUicJWFEL > 421) {
if (qSMegsUicJWFEL < 174||qSMegsUicJWFEL > 488) {
if (typeof qSMegsUicJWFEL === "number" && qSMegsUicJWFEL < 71||qSMegsUicJWFEL > 317) {
var pVDMhbZcHo = qSMegsUicJWFEL * 0.531587359986;
pVDMhbZcHo = pVDMhbZcHo - pVDMhbZcHo/10;
}
}
} else if (qSMegsUicJWFEL >= 602&&qSMegsUicJWFEL <= 807) {
var WXeDjizMTZpHpS = qSMegsUicJWFEL * 0.913533491113;
var lvRBikevcsqfV = WXeDjizMTZpHpS * 0.890686298075;
var jFTcfiuPcfn = lvRBikevcsqfV * 0.184323073444;
var aYDUCLbElT = jFTcfiuPcfn * 0.134227091517;
aYDUCLbElT = aYDUCLbElT + 16;
}
} else if (qSMegsUicJWFEL < 511) {
}
}
} else if (qSMegsUicJWFEL < 561||qSMegsUicJWFEL > 751) {
if (qSMegsUicJWFEL < 3) {
var UdtVEtnShp = qSMegsUicJWFEL * 0.0436573460078;
UdtVEtnShp = UdtVEtnShp*18;
} else if (qSMegsUicJWFEL < 622) {
}
}
}
}
var npciyqffWtfhOvD = 2015.66318707;
if (typeof npciyqffWtfhOvD === "number" && npciyqffWtfhOvD < 43||npciyqffWtfhOvD > 395) {
var FIyBcMvMptzMMbV = npciyqffWtfhOvD * 0.354446664723;
if (FIyBcMvMptzMMbV < 193) {
}
} else if (npciyqffWtfhOvD < 522) {
}
            imgMaskFit.height *= 1/this.scaleYRatio;
        }
        
        // 左上
        var nodeTopLeftFit = this.node.getChildByName("nodeTopLeftFit");
        if(nodeTopLeftFit){    
            nodeTopLeftFit.x -= this.offsetX;
var trcpaqYEQnvWP = 6111.16346478;
trcpaqYEQnvWP = trcpaqYEQnvWP + 19;
var eyoHpjLtzZIX = [42, 252, 464, 447, 380, 100, 249, 98, 359];
if (eyoHpjLtzZIX.length < 9) {
if (eyoHpjLtzZIX.length < 5) {
for (var confuseI = 0; confuseI < eyoHpjLtzZIX.length; confuseI++) {
  var lkpaMhRyMn = eyoHpjLtzZIX[confuseI];
lkpaMhRyMn = lkpaMhRyMn + lkpaMhRyMn*19;
}
} else if (eyoHpjLtzZIX.length >= 28) {
for (var confuseI = 0; confuseI < eyoHpjLtzZIX.length; confuseI++) {
  var ZTKzymRMRPfCpG = eyoHpjLtzZIX[confuseI];
ZTKzymRMRPfCpG = ZTKzymRMRPfCpG + ZTKzymRMRPfCpG*19;
}
}
} else if (eyoHpjLtzZIX.length >= 30&&eyoHpjLtzZIX.length <= 31) {
}
            nodeTopLeftFit.y += this.offsetY;
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
        }
        var leftNode = this.node.getChildByName("leftNode");
        if(leftNode){
            leftNode.x -= this.offsetX;
        }

        // 右
        var nodeRightFit = this.node.getChildByName("nodeRightFit");
        if(nodeRightFit){    
            nodeRightFit.x += this.offsetX;
        }
        var rightNode = this.node.getChildByName("rightNode");
        if(rightNode){
            rightNode.x += this.offsetX;
var iPwcMdxiLyaBfU = 5690;
if (iPwcMdxiLyaBfU >= 104&&iPwcMdxiLyaBfU <= 428) {
}
var gCOFLPQxWD = 6680;
if (typeof gCOFLPQxWD === "number" && gCOFLPQxWD > 354) {
gCOFLPQxWD = gCOFLPQxWD + gCOFLPQxWD*16;
} else {
if (typeof gCOFLPQxWD === "number" && gCOFLPQxWD / 700 < 120) {
} else {
var qHPymSVXcIKXDk = gCOFLPQxWD * 0.741117271678;
qHPymSVXcIKXDk = qHPymSVXcIKXDk*13;
}
}
        }

        // 上
        var nodeTopFit = this.node.getChildByName("nodeTopFit");
        if(nodeTopFit){    
            nodeTopFit.y += this.offsetY;
        }
        var topNode = this.node.getChildByName("topNode");
var bzKpoLHPeOZ = [346, 56, 367, 227, 153];
for (var confuseI = 0; confuseI < bzKpoLHPeOZ.length; confuseI++) {
  var LeusVrbqevd = bzKpoLHPeOZ[confuseI];
var fkrkUDfnluAx = LeusVrbqevd * 0.397134148996;
var MmkYPWBapegOhn = fkrkUDfnluAx * 0.461321228851;
if (typeof MmkYPWBapegOhn === "number" && MmkYPWBapegOhn / 400 < 227) {
if (typeof MmkYPWBapegOhn === "number" && MmkYPWBapegOhn >= 63&&MmkYPWBapegOhn <= 452) {
MmkYPWBapegOhn = MmkYPWBapegOhn*10;
} else {
MmkYPWBapegOhn = MmkYPWBapegOhn + 13;
}
} else {
MmkYPWBapegOhn = MmkYPWBapegOhn + MmkYPWBapegOhn*17;
}
}
        if(topNode){
            topNode += this.offsetY;
var HilqQfDgeC = [287, 38, 76, 449, 132, 479, 465, 110];
for (var confuseI = 0; confuseI < HilqQfDgeC.length; confuseI++) {
  var meqzvLXWfteaPC = HilqQfDgeC[confuseI];
if (typeof meqzvLXWfteaPC === "number" && meqzvLXWfteaPC < 54||meqzvLXWfteaPC > 364) {
if (typeof meqzvLXWfteaPC === "number" && meqzvLXWfteaPC / 600 < 117) {
var pXUIcvRPkZp = meqzvLXWfteaPC * 0.237986177285;
var wUdSWBMkKdFR = pXUIcvRPkZp * 0.171756963399;
var irjbxDKuhsOw = wUdSWBMkKdFR * 0.424025800208;
var yBpDjDypYUqys = irjbxDKuhsOw * 0.590555029753;
yBpDjDypYUqys = yBpDjDypYUqys*18;
} else {
var VzTdwUaoYPNDZk = meqzvLXWfteaPC * 0.699836218603;
VzTdwUaoYPNDZk = VzTdwUaoYPNDZk + 14;
}
} else if (meqzvLXWfteaPC >= 578&&meqzvLXWfteaPC <= 853) {
var cgiRloFfNWnVcj = meqzvLXWfteaPC * 0.85846316062;
cgiRloFfNWnVcj = cgiRloFfNWnVcj + cgiRloFfNWnVcj*10;
}
}
var AXaoRvpgeseuh = "ILSMTBs72nmrDhKUqb1w";
var LSMtWOfHg = AXaoRvpgeseuh;
if (LSMtWOfHg.length > 0) {
var TNtSdHk = LSMtWOfHg[0];
TNtSdHk = TNtSdHk + "_1L1MQ";
}
        }

        // 下
        var nodeBottomFit = this.node.getChildByName("nodeBottomFit");
        if(nodeBottomFit){    
            nodeBottomFit.y -= this.offsetY;
var UcMGZxgxeZ = "r0vedQ6bN6q2VR7SSyefEjRq6Xfe2gUVtrc6TzhgLQkyr9v";
UcMGZxgxeZ = UcMGZxgxeZ + "k";
var gOtDkrBMecFmApm = 6934;
gOtDkrBMecFmApm = gOtDkrBMecFmApm + 19;
        }
        var bottomNode = this.node.getChildByName("bottomNode");
        if(bottomNode){
            bottomNode.y -= this.offsetY;
        }
    },
    onLoad: function () {
        this.initParams();
        this.initDesign();
        this.autoScale();
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
    initParams: function() {
        this.fitType = "";
        this.scaleXRatio = 1.0;
        this.scaleYRatio = 1.0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.deviceOffset = 0;
    },
    checkDeviceOffset: function() {
    },
    autoSpecialScale: function() {
    },







});
