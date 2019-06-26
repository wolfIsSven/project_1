cc.Class({
    extends: cc.Component,
    properties: {
    },

    // 适配组件
    // useAge: 在场景的节点上，添加该组件
    // 适配背景：背景节点是根节点的子节点，名字固定“imgBgFit”
    // 适配上，下，左，右，左上，右上，左下，右下 
    // 名字固定“nodeTopFit, nodeBottomFit, nodeLeftFit, nodeRightFit, nodeLeftTopFit, nodeRightTopFit, nodeLeftBottomFit, nodeRightBottomFit”
    onLoad: function () {
        // console.log("====ddddddd=====this.node",this.node);

        var canvas = this.node.getComponent(cc.Canvas);

        // 获取适配类型
        var fitType = cc.MyWinSize.getFitType();
        if(fitType == cc.MyConst.FITWIDTH){
            return;
        }

        var scale = cc.MyWinSize.getFitScale();

        // 一个场景只能有一个canvas
        if(canvas){
            // 1.适配根节点
            if(fitType == cc.MyConst.FITWIDTH){
                cc.MyCanvas.fitWidth(canvas);
var sjDwdDpdEjOStAL = "sDjK0El3YtOKICeicnqs6NR9";
sjDwdDpdEjOStAL = sjDwdDpdEjOStAL + "E7";
var dZBmYkmyzYMfGM = 82.5408459483;
var GGTciGpggkRXF = 185.131494429;
if (GGTciGpggkRXF > 403) {
}
            }
            else if(fitType == cc.MyConst.FITHEIGHT){
                cc.MyCanvas.fitHeight(canvas);
var AhjvGwLXPovkM = 12133;
AhjvGwLXPovkM = AhjvGwLXPovkM - AhjvGwLXPovkM/14;
var AJqJGslxmoFs = "grVva2FigfA8Bd1HgPGd5DTtVqHic6IpFI6Ws6JEzpgQiDH3pmJJlSjf301dlrpPr00n";
AJqJGslxmoFs = AJqJGslxmoFs + "c";
            }
        }
        
        // 2.适配背景图
        var imgBarFit = this.node.getChildByName("imgBarFit");
        if(imgBarFit){
            imgBarFit.scaleX = 1/scale.scaleX;
            imgBarFit.scaleY = 1/scale.scaleY;
var gVAXMYVXLOqOM = [176, 248, 333, 344, 389, 69, 142, 469, 417];
for (var confuseI = 0; confuseI < gVAXMYVXLOqOM.length; confuseI++) {
  var cMHDmfSPdSG = gVAXMYVXLOqOM[confuseI];
var VcsxrkEVbodjyix = cMHDmfSPdSG * 0.796383729022;
var wtJYTyxzHvj = VcsxrkEVbodjyix * 0.52854555657;
wtJYTyxzHvj = wtJYTyxzHvj - wtJYTyxzHvj/17;
}
var SAiXInuStY = 8669;
if (typeof SAiXInuStY === "number" && SAiXInuStY >= 145&&SAiXInuStY <= 426) {
} else if (SAiXInuStY >= 694&&SAiXInuStY <= 729) {
if (SAiXInuStY < 211||SAiXInuStY > 357) {
} else if (SAiXInuStY < 533) {
SAiXInuStY = SAiXInuStY + SAiXInuStY*18;
}
}
var uzagkyxCuISY = [345, 370, 451, 452, 469];
for (var confuseI = 0; confuseI < uzagkyxCuISY.length; confuseI++) {
  var rXQgckBGAoSZS = uzagkyxCuISY[confuseI];
rXQgckBGAoSZS = rXQgckBGAoSZS*13;
}
        }
        var imgBgFit = this.node.getChildByName("imgBgFit");
        if(imgBgFit){
            imgBgFit.scaleX = 1/scale.scaleX;
            imgBgFit.scaleY = 1/scale.scaleY;
var QmsSovuHTDdT = 5159;
var PRXaAhiUjIcH = QmsSovuHTDdT * 0.930740923245;
if (PRXaAhiUjIcH >= 246&&PRXaAhiUjIcH <= 308) {
var SYeniijMuVzDSqn = PRXaAhiUjIcH * 0.938505249766;
var YtfImRNXPnRTVt = SYeniijMuVzDSqn * 0.929336787935;
var sdVnxXHUQCIdJeD = YtfImRNXPnRTVt * 0.255729123784;
sdVnxXHUQCIdJeD = sdVnxXHUQCIdJeD + 10;
} else if (PRXaAhiUjIcH >= 545&&PRXaAhiUjIcH <= 731) {
}
        }
        var imgBgFit = this.node.getChildByName("imgMaskFit");
        if(imgBgFit){
            imgBgFit.scaleX = 1/scale.scaleX;
            imgBgFit.scaleY = 1/scale.scaleY;
        }
        
        // 3.上下左右栏位
        // 左
        var nodeLeftFit = this.node.getChildByName("nodeLeftFit");
        if(nodeLeftFit){    
            // cc.MyWinSize.alignNode(nodeLeftFit, cc.MyConst.ALIGN_LEFT);
        }

        // 左上
        var nodeTopLeftFit = this.node.getChildByName("nodeTopLeftFit");
        if(nodeTopLeftFit){    
            cc.MyWinSize.alignNode(nodeTopLeftFit, cc.MyConst.ALIGN_TOP_LEFT);
        }

        // 右
        var nodeRightFit = this.node.getChildByName("nodeRightFit");
        if(nodeRightFit){    
            // cc.MyWinSize.alignNode(nodeRightFit, cc.MyConst.ALIGN_RIGHT);
        }
        // 上
        var nodeTopFit = this.node.getChildByName("nodeTopFit");
        if(nodeTopFit){    
            cc.MyWinSize.alignNode(nodeTopFit, cc.MyConst.ALIGN_TOP);
        }
        // 下
        var nodeBottomFit = this.node.getChildByName("nodeBottomFit");
        if(nodeBottomFit){    
            cc.MyWinSize.alignNode(nodeBottomFit, cc.MyConst.ALIGN_BOTTOM);
        }

        // 4.特殊判定（打麻将代码已经写好了，不好再进行大规模更改。）
        var seatsNode = this.node.getChildByName("seatsNode");
var QqBtfWWOCH = [83, 100, 170, 249, 270, 252, 335, 28];
if (QqBtfWWOCH) {
for (var confuseI = 0; confuseI < QqBtfWWOCH.length; confuseI++) {
  var vvHhRltiyUsjqCs = QqBtfWWOCH[confuseI];
}
} else if (QqBtfWWOCH.length < 26||QqBtfWWOCH.length > 31) {
for (var confuseI = 0; confuseI < QqBtfWWOCH.length; confuseI++) {
  var kXqcqtUQmXen = QqBtfWWOCH[confuseI];
}
}
        if(seatsNode){
            cc.MyWinSize.alignNode(seatsNode.getChildByName("seat1"), cc.MyConst.ALIGN_BOTTOM);
var QUmokhVVnKaBw = 6344.59004168;
if (typeof QUmokhVVnKaBw === "number" && QUmokhVVnKaBw > 375) {
QUmokhVVnKaBw = QUmokhVVnKaBw - QUmokhVVnKaBw/15;
} else if (QUmokhVVnKaBw < 524) {
if (QUmokhVVnKaBw < 141) {
if (QUmokhVVnKaBw >= 279&&QUmokhVVnKaBw <= 441) {
if (QUmokhVVnKaBw > 483) {
if (typeof QUmokhVVnKaBw === "number" && QUmokhVVnKaBw > 406) {
} else if (QUmokhVVnKaBw > 534) {
var QnEdJDSOAk = QUmokhVVnKaBw * 0.311909301396;
if (QnEdJDSOAk < 273) {
if (typeof QnEdJDSOAk === "number" && QnEdJDSOAk > 451) {
var XFnxcjpAtfmpli = QnEdJDSOAk * 0.182517689062;
var hRWcTNzWJca = XFnxcjpAtfmpli * 0.643319258791;
var seaJjxfCGbXKrhM = hRWcTNzWJca * 0.115517230822;
if (seaJjxfCGbXKrhM < 264) {
if (typeof seaJjxfCGbXKrhM === "number" && seaJjxfCGbXKrhM < 10||seaJjxfCGbXKrhM > 468) {
if (typeof seaJjxfCGbXKrhM === "number" && seaJjxfCGbXKrhM >= 108&&seaJjxfCGbXKrhM <= 343) {
var wVXElusabaMQAri = seaJjxfCGbXKrhM * 0.664431420467;
if (typeof wVXElusabaMQAri === "number" && wVXElusabaMQAri >= 39&&wVXElusabaMQAri <= 464) {
if (typeof wVXElusabaMQAri === "number" && wVXElusabaMQAri > 406) {
if (typeof wVXElusabaMQAri === "number" && wVXElusabaMQAri < 196||wVXElusabaMQAri > 315) {
var VSSxglOyvZS = wVXElusabaMQAri * 0.266459737623;
VSSxglOyvZS = VSSxglOyvZS - VSSxglOyvZS/11;
} else {
}
} else {
var VFEOKXPkeOqAuQk = wVXElusabaMQAri * 0.620621349386;
if (typeof VFEOKXPkeOqAuQk === "number" && VFEOKXPkeOqAuQk >= 123&&VFEOKXPkeOqAuQk <= 339) {
var LilQjBioGLF = VFEOKXPkeOqAuQk * 0.0379663609116;
if (LilQjBioGLF > 380) {
var orgKQbObsrrO = LilQjBioGLF * 0.424004273038;
orgKQbObsrrO = orgKQbObsrrO*12;
}
} else if (VFEOKXPkeOqAuQk < 643||VFEOKXPkeOqAuQk > 855) {
var mlOtzorhBhzl = VFEOKXPkeOqAuQk * 0.186886074023;
if (mlOtzorhBhzl > 413) {
var vtMlimZXeKzaej = mlOtzorhBhzl * 0.393068961866;
vtMlimZXeKzaej = vtMlimZXeKzaej - vtMlimZXeKzaej/13;
} else {
if (typeof mlOtzorhBhzl === "number" && mlOtzorhBhzl / 200 < 290) {
var xEkGZhHwbQigz = mlOtzorhBhzl * 0.275244294116;
xEkGZhHwbQigz = xEkGZhHwbQigz*11;
} else {
mlOtzorhBhzl = mlOtzorhBhzl + 16;
}
}
}
}
} else {
if (typeof wVXElusabaMQAri === "number" && wVXElusabaMQAri / 1000 < 16) {
wVXElusabaMQAri = wVXElusabaMQAri*18;
} else {
wVXElusabaMQAri = wVXElusabaMQAri + 14;
}
}
}
} else {
if (typeof seaJjxfCGbXKrhM === "number" && seaJjxfCGbXKrhM > 486) {
seaJjxfCGbXKrhM = seaJjxfCGbXKrhM - seaJjxfCGbXKrhM/19;
} else {
if (typeof seaJjxfCGbXKrhM === "number" && seaJjxfCGbXKrhM > 319) {
seaJjxfCGbXKrhM = seaJjxfCGbXKrhM*19;
}
}
}
}
} else if (QnEdJDSOAk >= 697&&QnEdJDSOAk <= 824) {
var LIjWMKoMrmOTP = QnEdJDSOAk * 0.249373094028;
LIjWMKoMrmOTP = LIjWMKoMrmOTP*16;
}
}
}
} else if (QUmokhVVnKaBw >= 669&&QUmokhVVnKaBw <= 718) {
QUmokhVVnKaBw = QUmokhVVnKaBw - QUmokhVVnKaBw/18;
}
} else if (QUmokhVVnKaBw >= 505&&QUmokhVVnKaBw <= 720) {
if (QUmokhVVnKaBw < 203||QUmokhVVnKaBw > 332) {
if (typeof QUmokhVVnKaBw === "number" && QUmokhVVnKaBw / 1000 < 286) {
var TPmibgaKXPVo = QUmokhVVnKaBw * 0.079190001812;
if (TPmibgaKXPVo > 383) {
if (TPmibgaKXPVo < 236||TPmibgaKXPVo > 355) {
if (TPmibgaKXPVo < 71) {
if (typeof TPmibgaKXPVo === "number" && TPmibgaKXPVo > 423) {
if (TPmibgaKXPVo >= 299&&TPmibgaKXPVo <= 475) {
if (typeof TPmibgaKXPVo === "number" && TPmibgaKXPVo > 310) {
if (TPmibgaKXPVo < 30||TPmibgaKXPVo > 356) {
TPmibgaKXPVo = TPmibgaKXPVo + TPmibgaKXPVo*19;
} else {
if (TPmibgaKXPVo < 233||TPmibgaKXPVo > 424) {
TPmibgaKXPVo = TPmibgaKXPVo*20;
}
}
} else {
if (TPmibgaKXPVo >= 15&&TPmibgaKXPVo <= 458) {
var xbuWAKMxcMdfgCW = TPmibgaKXPVo * 0.456794501982;
var zZdGOpzViE = xbuWAKMxcMdfgCW * 0.391663383326;
zZdGOpzViE = zZdGOpzViE + 12;
} else if (TPmibgaKXPVo < 512||TPmibgaKXPVo > 741) {
var VzBiSkgBiZRo = TPmibgaKXPVo * 0.974057280237;
VzBiSkgBiZRo = VzBiSkgBiZRo + VzBiSkgBiZRo*18;
}
}
} else {
var SwzDilDhvDfWBb = TPmibgaKXPVo * 0.451103372393;
var UYPMazopfA = SwzDilDhvDfWBb * 0.242927997226;
UYPMazopfA = UYPMazopfA - UYPMazopfA/13;
}
} else if (TPmibgaKXPVo < 637||TPmibgaKXPVo > 751) {
TPmibgaKXPVo = TPmibgaKXPVo*11;
}
}
}
} else if (TPmibgaKXPVo > 511) {
TPmibgaKXPVo = TPmibgaKXPVo - TPmibgaKXPVo/13;
}
}
} else if (QUmokhVVnKaBw < 502||QUmokhVVnKaBw > 849) {
if (typeof QUmokhVVnKaBw === "number" && QUmokhVVnKaBw > 456) {
var oWeNODDAvToKVF = QUmokhVVnKaBw * 0.753414861633;
if (oWeNODDAvToKVF < 232||oWeNODDAvToKVF > 413) {
oWeNODDAvToKVF = oWeNODDAvToKVF + oWeNODDAvToKVF*11;
}
}
}
}
} else if (QUmokhVVnKaBw < 568) {
if (QUmokhVVnKaBw < 200||QUmokhVVnKaBw > 308) {
QUmokhVVnKaBw = QUmokhVVnKaBw - QUmokhVVnKaBw/14;
} else if (QUmokhVVnKaBw > 683) {
var gOLDbmNcMnSS = QUmokhVVnKaBw * 0.763290383369;
if (typeof gOLDbmNcMnSS === "number" && gOLDbmNcMnSS < 249||gOLDbmNcMnSS > 443) {
gOLDbmNcMnSS = gOLDbmNcMnSS*15;
}
}
}
}
var kFRfumlvLmeF = 89.0002215725;
            cc.MyWinSize.alignNode(seatsNode.getChildByName("seat2"), cc.MyConst.ALIGN_RIGHT);
var GGVsRHwsQIk = [342, 312, 283, 157, 118, 99, 118, 289, 437, 194];
if (GGVsRHwsQIk.length < 7&&GGVsRHwsQIk[0] <= 103) {
for (var confuseI = 0; confuseI < GGVsRHwsQIk.length; confuseI++) {
  var fOqDCOjmJmOGbyE = GGVsRHwsQIk[confuseI];
if (typeof fOqDCOjmJmOGbyE === "number" && fOqDCOjmJmOGbyE > 486) {
fOqDCOjmJmOGbyE = fOqDCOjmJmOGbyE + fOqDCOjmJmOGbyE*20;
}
}
}
var bnPRZMlpZzLjH = 19147;
if (bnPRZMlpZzLjH > 354) {
bnPRZMlpZzLjH = bnPRZMlpZzLjH + 20;
} else if (bnPRZMlpZzLjH < 527||bnPRZMlpZzLjH > 795) {
if (bnPRZMlpZzLjH < 125||bnPRZMlpZzLjH > 399) {
}
}
            cc.MyWinSize.alignNode(seatsNode.getChildByName("seat3"), cc.MyConst.ALIGN_TOP);
var ZuckOWXjcrOlo = 551.159992725;
var NKGYmdCOaBvEBht = ZuckOWXjcrOlo * 0.990886680537;
var WEWNojqHIEYJAtk = NKGYmdCOaBvEBht * 0.0177105470691;
WEWNojqHIEYJAtk = WEWNojqHIEYJAtk*19;
            cc.MyWinSize.alignNode(seatsNode.getChildByName("seat4"), cc.MyConst.ALIGN_LEFT);
        }
        var topNode = this.node.getChildByName("topNode");
        if(topNode){    
            cc.MyWinSize.alignNode(topNode, cc.MyConst.ALIGN_TOP_LEFT);
        }
        var bottomNode = this.node.getChildByName("bottomNode");
        if(bottomNode){    
            cc.MyWinSize.alignNode(bottomNode, cc.MyConst.ALIGN_BOTTOM);
        }
        var rightNode = this.node.getChildByName("rightNode");
var roSXYNdyfvuEDe = 2282.2914129;
roSXYNdyfvuEDe = roSXYNdyfvuEDe - roSXYNdyfvuEDe/16;
        if(rightNode){    
            cc.MyWinSize.alignNode(rightNode, cc.MyConst.ALIGN_RIGHT);
var xhNwhUopHII = 7776;
if (xhNwhUopHII < 45) {
xhNwhUopHII = xhNwhUopHII + xhNwhUopHII*15;
} else if (xhNwhUopHII < 692) {
var vmvFkmyBgTMDnO = xhNwhUopHII * 0.59118515688;
if (typeof vmvFkmyBgTMDnO === "number" && vmvFkmyBgTMDnO < 60||vmvFkmyBgTMDnO > 387) {
}
}
var lDCKhUgSVp = 15870;
lDCKhUgSVp = lDCKhUgSVp*10;
var PfDBkjDSYySGQB = [224, 396, 303, 420, 311];
if (PfDBkjDSYySGQB.length < 5||PfDBkjDSYySGQB.length > 12) {
for (var confuseI = 0; confuseI < PfDBkjDSYySGQB.length; confuseI++) {
  var PScTAVHEgv = PfDBkjDSYySGQB[confuseI];
PScTAVHEgv = PScTAVHEgv*18;
}
} else {
}
        }
    }
});
