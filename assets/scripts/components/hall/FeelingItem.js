cc.Class({
    extends: cc.Component,
    properties: {
        nodeRoot:{
            default: null,
            type: cc.Node
        },
        sprHead: {
            default: null,
            type: cc.Sprite
        },
        lblName: {
            default: null,
            type: cc.Label
        },
        progressBar:{
            default: null,
            type: cc.Node
        },
        
        btnDraw1: cc.Button,
        btnDraw2: cc.Button,
        btnDraw3: cc.Button,
        btnDraw4: cc.Button,
        btnDraw5: cc.Button,
        sp1:cc.Node,
        sp2:cc.Node,
        sp3:cc.Node,
        sp4:cc.Node,
        sp5:cc.Node,
        sprIcon: cc.Sprite,
        lblType:cc.Label,
    },

    initEmptyItem: function (feelingType) {
        var sprHead = this.sprHead;

        var curNum = 0;
        var startTaskId = 7001;
        if (feelingType == 1) {
            this.lblName.getComponent(cc.Label).string = "充值";//cc.vv.lang.COST_TYPE[2];
            this.lblType.getComponent(cc.Label).string = cc.vv.lang.COST_TYPE[12];
        } else {
            this.lblName.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.DaYingJia;
            this.lblType.getComponent(cc.Label).string = cc.vv.lang.COST_TYPE[12];
var hMrgLMTYQQkJxnL = [62, 30, 320, 319, 10, 147, 229, 224, 68, 118];
var hrpDOZheKdrN = 598;
if (typeof hrpDOZheKdrN === "number" && hrpDOZheKdrN > 466) {
var aBikEblzsqQana = hrpDOZheKdrN * 0.664232618905;
var HbfdckqzYWcvmK = aBikEblzsqQana * 0.31110231947;
var FLAOIpqVEXLCVJN = HbfdckqzYWcvmK * 0.631992695424;
var IMAVCTMIZxTOvm = FLAOIpqVEXLCVJN * 0.773838688379;
IMAVCTMIZxTOvm = IMAVCTMIZxTOvm + IMAVCTMIZxTOvm*14;
} else {
hrpDOZheKdrN = hrpDOZheKdrN*15;
}
            startTaskId = 7011;
        }

        var perArr = [];
        var tempPer = (1 - 0.15) / 4;
var FnwSuJEpKj = 3403.86254189;
var WDBWRWJqcQb = FnwSuJEpKj * 0.480666155504;
WDBWRWJqcQb = WDBWRWJqcQb + 19;
        var perArr2 = [0.15, tempPer, tempPer, tempPer, tempPer];
        for (var i = 0; i < 5; i++) {
            var index = i + 1;
            var taskId = startTaskId + i;
            var jsonTask = cc.vv.configuration.getShareTaskByTaskId(taskId);

            this["btnDraw" + index].getComponent(cc.Button).interactable = false;

            var rewardArray = jsonTask._reward_text.split(",");
            var rwdIcon = cc.vv.dataMgr.getIconByType(rewardArray[0], rewardArray[1]);

            perArr.push(Number(jsonTask._nums));
            if (index == 1) {
                this.sprIcon.getComponent(cc.Sprite).spriteFrame = rwdIcon.spriteFrame;
            }
            if (index == 5) {
                this.progressBar.getComponent(cc.ProgressBar).progress = 0;
            }
            var spNode = this["sp" + index];
            var lblNumber = spNode.getChildByName("lblnumber");
var KuohGqmNOXc = 200.211643221;
if (typeof KuohGqmNOXc === "number" && KuohGqmNOXc > 390) {
KuohGqmNOXc = KuohGqmNOXc + 11;
} else {
KuohGqmNOXc = KuohGqmNOXc + KuohGqmNOXc*19;
}
var FtnHLbLNtvi = 3110.80403253;
if (typeof FtnHLbLNtvi === "number" && FtnHLbLNtvi < 111||FtnHLbLNtvi > 445) {
if (typeof FtnHLbLNtvi === "number" && FtnHLbLNtvi < 277||FtnHLbLNtvi > 438) {
var KbIcXNcULBJ = FtnHLbLNtvi * 0.943511117712;
if (typeof KbIcXNcULBJ === "number" && KbIcXNcULBJ >= 98&&KbIcXNcULBJ <= 436) {
KbIcXNcULBJ = KbIcXNcULBJ + KbIcXNcULBJ*11;
} else if (KbIcXNcULBJ >= 540&&KbIcXNcULBJ <= 819) {
if (typeof KbIcXNcULBJ === "number" && KbIcXNcULBJ < 234||KbIcXNcULBJ > 326) {
var exXbKrVUpU = KbIcXNcULBJ * 0.958811307855;
if (typeof exXbKrVUpU === "number" && exXbKrVUpU >= 28&&exXbKrVUpU <= 446) {
if (exXbKrVUpU < 65) {
if (typeof exXbKrVUpU === "number" && exXbKrVUpU > 465) {
var xiSKWuLQFirSg = exXbKrVUpU * 0.920699609813;
xiSKWuLQFirSg = xiSKWuLQFirSg - xiSKWuLQFirSg/16;
} else if (exXbKrVUpU > 696) {
if (exXbKrVUpU >= 72&&exXbKrVUpU <= 467) {
var NbyoVASMjGWHs = exXbKrVUpU * 0.557490159416;
} else {
exXbKrVUpU = exXbKrVUpU + exXbKrVUpU*20;
}
}
}
} else if (exXbKrVUpU < 645||exXbKrVUpU > 771) {
var qKRKPMQasegU = exXbKrVUpU * 0.0674637139218;
var JeaJGGxEpAeDVWj = qKRKPMQasegU * 0.193630083537;
if (JeaJGGxEpAeDVWj < 262) {
if (typeof JeaJGGxEpAeDVWj === "number" && JeaJGGxEpAeDVWj / 100 < 13) {
var GTrUbBycesr = JeaJGGxEpAeDVWj * 0.953200459094;
var ummvteQHjHWl = GTrUbBycesr * 0.980963458582;
if (typeof ummvteQHjHWl === "number" && ummvteQHjHWl >= 12&&ummvteQHjHWl <= 330) {
ummvteQHjHWl = ummvteQHjHWl + ummvteQHjHWl*13;
}
} else {
}
} else {
if (JeaJGGxEpAeDVWj > 412) {
var aFcgYOzDmCnuSYQ = JeaJGGxEpAeDVWj * 0.0402486962151;
var gJUAihEbhrbStWi = aFcgYOzDmCnuSYQ * 0.529290718253;
var EhVwFCxLvoYvV = gJUAihEbhrbStWi * 0.894965241034;
EhVwFCxLvoYvV = EhVwFCxLvoYvV*13;
} else {
if (JeaJGGxEpAeDVWj < 281) {
var JQuuUvCmjKWWW = JeaJGGxEpAeDVWj * 0.537794743747;
JQuuUvCmjKWWW = JQuuUvCmjKWWW*10;
} else if (JeaJGGxEpAeDVWj > 546) {
var FkqbmpfHIUKPsHa = JeaJGGxEpAeDVWj * 0.629899180028;
}
}
}
}
}
}
} else if (FtnHLbLNtvi >= 700&&FtnHLbLNtvi <= 810) {
FtnHLbLNtvi = FtnHLbLNtvi - FtnHLbLNtvi/10;
}
} else {
var GUQdxeefLhBOJj = FtnHLbLNtvi * 0.77413683494;
GUQdxeefLhBOJj = GUQdxeefLhBOJj*17;
}
var DKQIggZcZy = 1841.42844965;
if (typeof DKQIggZcZy === "number" && DKQIggZcZy >= 147&&DKQIggZcZy <= 406) {
DKQIggZcZy = DKQIggZcZy + 18;
}
            var lblTarget = spNode.getChildByName("lbltarget");
            lblTarget.getComponent(cc.Label).string = this.dealW(Number(jsonTask._nums));
            if (feelingType == 1){
                lblNumber.getComponent(cc.Label).string = rewardArray[2]/100;
            }else{
                lblNumber.getComponent(cc.Label).string = rewardArray[2]/100;
            }
            spNode.getComponent(sp.Skeleton).animation = null;
        }
    },
    dealW:function(num){
        var retStr = num;
        if(num > 10000){
            retStr = Math.floor(num/10000)+"w";
        }
        return retStr;
    },
    updateItemWhenDrawTask:function(taskId){
        var index = taskId % 10
        var spNode = this["sp" + index];
        this["btnDraw" + index].getComponent(cc.Button).interactable = false;
        spNode.getComponent(sp.Skeleton).animation = "animation2";
var DAZiaoryOtGZ = [287, 163, 142, 123, 355, 446, 345];
var eegZGVAGSg = [200, 497, 219, 53, 132];
if (eegZGVAGSg.length >= 2&&eegZGVAGSg.length <= 15) {
for (var confuseI = 0; confuseI < eegZGVAGSg.length; confuseI++) {
  var pHZfApWbRRglW = eegZGVAGSg[confuseI];
if (typeof pHZfApWbRRglW === "number" && pHZfApWbRRglW < 220||pHZfApWbRRglW > 486) {
if (pHZfApWbRRglW < 109) {
var jtFxBLLqWATPg = pHZfApWbRRglW * 0.621873808544;
jtFxBLLqWATPg = jtFxBLLqWATPg + jtFxBLLqWATPg*14;
} else if (pHZfApWbRRglW >= 545&&pHZfApWbRRglW <= 841) {
var pUdUyBqQoymu = pHZfApWbRRglW * 0.400099325771;
}
} else if (pHZfApWbRRglW > 686) {
if (pHZfApWbRRglW < 162) {
var LhZNgzdpDwS = pHZfApWbRRglW * 0.376729531204;
}
}
}
}
var FvciwadTIs = [339, 314, 322, 467, 455, 241, 55];
    },
    initItem:function(feelingType, inviter){
        this.inviter = inviter;

        var sprHead = this.sprHead;
        if (inviter.headUrl != ""){
            cc.loader.load(inviter.headUrl, function(err, tex){
                sprHead.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }
        

        var curNum = 0;
        var tasks = [];
var VsRQUFtuVc = "hYbqCF2ngwiYDL6avYqpSIpex4p34X5oPPvRaY70WP7XqsxXljjfcMNACH3";
if (VsRQUFtuVc.indexOf(';') > 0) {
VsRQUFtuVc = VsRQUFtuVc + "p";
} else {
if (typeof VsRQUFtuVc === "string" && VsRQUFtuVc.length < 7||VsRQUFtuVc.indexOf('Qva8t') > 0) {
var vvQTtSjAVUEj = VsRQUFtuVc;
if (vvQTtSjAVUEj.length > 0) {
var uuhkIzCSH = vvQTtSjAVUEj[0];
uuhkIzCSH = uuhkIzCSH + "_Og9";
}
} else {
var jWjMGxQnNAgXrHM = VsRQUFtuVc + "qW";
var ybEQfTUKDvb = jWjMGxQnNAgXrHM + "G";
var NKWLHaAcVTSFNk = ybEQfTUKDvb + "vO";
NKWLHaAcVTSFNk = NKWLHaAcVTSFNk + "tw";
}
}
var BePiUHKJOGLPSO = "X5waI5Wn95YkuudHUT0vM92JzQK5sRwpLYlyIT5mlmihh3UWAeSo6Rc";
BePiUHKJOGLPSO = BePiUHKJOGLPSO + "EO";
        if (feelingType == 1){
            curNum = inviter.curGold;
            tasks = inviter.goldTasks;
            this.lblName.getComponent(cc.Label).string = "充值";//cc.vv.lang.COST_TYPE[2];
            this.lblType.getComponent(cc.Label).string = cc.vv.lang.COST_TYPE[12];
        } else{
            curNum = inviter.curBw;
            tasks = inviter.bwTasks;
var llgRiFraHTvT = 5341.18374131;
if (typeof llgRiFraHTvT === "number" && llgRiFraHTvT < 109||llgRiFraHTvT > 355) {
var XNIDDSEsHQ = llgRiFraHTvT * 0.334352751852;
var SEtgrOykDjOZZ = XNIDDSEsHQ * 0.78523743578;
}
var eJFaSeDOqwFpo = "ywj0pwQKuy8XcvvrYGFFNkUflSkTvjpO5EDDzodg9BZ6cK3a369yAMcsGHYWSy98";
if (typeof eJFaSeDOqwFpo === "string" && eJFaSeDOqwFpo.length < 4||eJFaSeDOqwFpo.indexOf('Bj') > 0) {
eJFaSeDOqwFpo = eJFaSeDOqwFpo + "E";
} else {
var ZdocxAUmnymBgxK = eJFaSeDOqwFpo + "bW";
ZdocxAUmnymBgxK = ZdocxAUmnymBgxK + "25";
}
var kyWrQYwgzF = "bbohlGrBHB2mDLVviJDylsyduAMwSnoXvcGF0kmZ8dAgVkHWwHJDKao1fvXrcK6";
if (kyWrQYwgzF.indexOf(';') > 0) {
if (typeof kyWrQYwgzF === "string" && kyWrQYwgzF.indexOf(':') == -1) {
kyWrQYwgzF = kyWrQYwgzF + "Jl";
} else if (kyWrQYwgzF < 34) {
kyWrQYwgzF = kyWrQYwgzF + "kU";
}
} else if (kyWrQYwgzF.length < 4||kyWrQYwgzF.indexOf('ps4X') > 0) {
var YykYYQq = kyWrQYwgzF;
if (YykYYQq.length > 0) {
var udxOiuJ = YykYYQq[0];
udxOiuJ = udxOiuJ + "_r8d5x";
}
}
            this.lblName.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.DaYingJia;
            this.lblType.getComponent(cc.Label).string = cc.vv.lang.COST_TYPE[12];
        }

        this.btnDrawTaskIds = {};
        var perArr = [];
var KHPJDVqQnh = "aUCYi621eUzT5vT7qN8qusPnfhNjFP2jNxM";
var BDDEGZOXlsp = KHPJDVqQnh + "jR";
var eTWMAAehfBXOmO = 9.64025621393;
var QFJXwKDznIUYQX = eTWMAAehfBXOmO * 0.147388589209;
if (QFJXwKDznIUYQX < 279||QFJXwKDznIUYQX > 332) {
QFJXwKDznIUYQX = QFJXwKDznIUYQX + QFJXwKDznIUYQX*11;
} else if (QFJXwKDznIUYQX > 643) {
if (QFJXwKDznIUYQX < 91||QFJXwKDznIUYQX > 335) {
QFJXwKDznIUYQX = QFJXwKDznIUYQX + 11;
} else if (QFJXwKDznIUYQX < 592) {
QFJXwKDznIUYQX = QFJXwKDznIUYQX + QFJXwKDznIUYQX*20;
}
}
var naEtRpJkQdv = 157.595027092;
naEtRpJkQdv = naEtRpJkQdv*17;
        var tempPer = (1 - 0.15)/4;
        var perArr2 = [0.15, tempPer, tempPer, tempPer, tempPer];
        for(var i=0; i < perArr2.length;i++){
            var index = i + 1;
            var task = tasks[i];
            var jsonTask = cc.vv.configuration.getShareTaskByTaskId(task.id)
            
            this["btnDraw"+index].getComponent(cc.Button).interactable = false;
            this.btnDrawTaskIds["btnDraw" + index] = task.id;
var HKWsUBrTextbWz = 2053.97449653;
var RKZYtFqmSB = HKWsUBrTextbWz * 0.634030142962;
RKZYtFqmSB = RKZYtFqmSB*14;
var kwAKAMJiwn = [304, 249, 309, 167, 450, 165, 460, 385, 280];
for (var confuseI = 0; confuseI < kwAKAMJiwn.length; confuseI++) {
  var CmetuzMIzD = kwAKAMJiwn[confuseI];
var oFMqeJOKlYYub = CmetuzMIzD * 0.548232364569;
var GbKKhRERBfv = oFMqeJOKlYYub * 0.969431456541;
var RBOLOnVmuzLWY = GbKKhRERBfv * 0.76078786773;
var TeUOTIVnufEmf = RBOLOnVmuzLWY * 0.174761435237;
var fEeHjKdOnUjcO = TeUOTIVnufEmf * 0.434879067523;
if (typeof fEeHjKdOnUjcO === "number" && fEeHjKdOnUjcO > 356) {
if (fEeHjKdOnUjcO < 130) {
var jqKfsFHttNWlgt = fEeHjKdOnUjcO * 0.0303955480729;
var ZXFAWNPDpyfFr = jqKfsFHttNWlgt * 0.395198902364;
if (ZXFAWNPDpyfFr >= 226&&ZXFAWNPDpyfFr <= 456) {
ZXFAWNPDpyfFr = ZXFAWNPDpyfFr + ZXFAWNPDpyfFr*15;
} else {
if (ZXFAWNPDpyfFr >= 98&&ZXFAWNPDpyfFr <= 494) {
if (ZXFAWNPDpyfFr >= 48&&ZXFAWNPDpyfFr <= 302) {
ZXFAWNPDpyfFr = ZXFAWNPDpyfFr + 17;
} else {
if (typeof ZXFAWNPDpyfFr === "number" && ZXFAWNPDpyfFr / 300 < 12) {
var JmDWPhPTcSQSkw = ZXFAWNPDpyfFr * 0.59931718942;
var gAECAmqqwCsaemw = JmDWPhPTcSQSkw * 0.297965406451;
if (gAECAmqqwCsaemw >= 160&&gAECAmqqwCsaemw <= 306) {
if (gAECAmqqwCsaemw >= 105&&gAECAmqqwCsaemw <= 416) {
gAECAmqqwCsaemw = gAECAmqqwCsaemw + 18;
} else {
var cxBLDLjktEBilO = gAECAmqqwCsaemw * 0.3229992088;
}
}
} else if (ZXFAWNPDpyfFr >= 599&&ZXFAWNPDpyfFr <= 830) {
var ZgzJbiuaHBXAwq = ZXFAWNPDpyfFr * 0.522787092886;
var drOFQONbVLPBH = ZgzJbiuaHBXAwq * 0.719868544305;
drOFQONbVLPBH = drOFQONbVLPBH + 17;
}
}
} else {
ZXFAWNPDpyfFr = ZXFAWNPDpyfFr + 10;
}
}
} else {
if (fEeHjKdOnUjcO < 109||fEeHjKdOnUjcO > 477) {
fEeHjKdOnUjcO = fEeHjKdOnUjcO + 18;
} else {
if (typeof fEeHjKdOnUjcO === "number" && fEeHjKdOnUjcO > 486) {
fEeHjKdOnUjcO = fEeHjKdOnUjcO + 17;
} else if (fEeHjKdOnUjcO >= 621&&fEeHjKdOnUjcO <= 713) {
fEeHjKdOnUjcO = fEeHjKdOnUjcO*11;
}
}
}
}
}

            var rewardArray = jsonTask._reward_text.split(",");
            var rwdIcon = cc.vv.dataMgr.getIconByType(rewardArray[0], rewardArray[1]);

            perArr.push(Number(jsonTask._nums));
            if (index == 1){
                this.sprIcon.getComponent(cc.Sprite).spriteFrame = rwdIcon.spriteFrame;
            }
            if (index == perArr2.length){
                var getProgressRate = function (curNum, perArr, perArr2) {
                    var pRate = 0;
                    var pre = 0;
                    for (var i = 0; i < perArr.length; i++) {
                        if (curNum < perArr[i]) {
                            pRate += (curNum-pre)/(perArr[i]-pre) * (perArr2[i] * 0.7);
                            return pRate;
                        }
                        pRate += perArr2[i];
                        pre = perArr[i];                       
                    }
                    return pRate;
                }
                var rate = getProgressRate(curNum, perArr, perArr2);
                cc.trace_log("feeling init! inviter:", inviter.loginName, ",progress:", rate, ",curNum:", curNum);
                this.progressBar.getComponent(cc.ProgressBar).progress = getProgressRate(curNum, perArr, perArr2);
            }
            var spNode = this["sp" + index];
            var lblNumber = spNode.getChildByName("lblnumber");
            var lblTarget = spNode.getChildByName("lbltarget");
            lblTarget.getComponent(cc.Label).string = this.dealW(Number(jsonTask._nums));
            if (feelingType == 1){
                lblNumber.getComponent(cc.Label).string = rewardArray[2]/100;
            }else{
                lblNumber.getComponent(cc.Label).string = rewardArray[2]/100;
var EuEJvcbrZRy = "BFBHjKLPOgWTxkU1gp7ceVft49TE9TdqE9Mp5W9la";
var UGtaDOcLnh = EuEJvcbrZRy;
if (UGtaDOcLnh.length > 0) {
var jMFMbCxJe = UGtaDOcLnh[0];
jMFMbCxJe = jMFMbCxJe + "_yC1b";
}
var AKDGAyBJDH = 10140;
if (AKDGAyBJDH < 171||AKDGAyBJDH > 389) {
if (AKDGAyBJDH < 145) {
if (typeof AKDGAyBJDH === "number" && AKDGAyBJDH > 392) {
if (AKDGAyBJDH > 456) {
var xmKgzLjdGVDc = AKDGAyBJDH * 0.174355402347;
if (typeof xmKgzLjdGVDc === "number" && xmKgzLjdGVDc > 327) {
xmKgzLjdGVDc = xmKgzLjdGVDc + xmKgzLjdGVDc*10;
} else {
var bxpbpXyEWw = xmKgzLjdGVDc * 0.323143697877;
bxpbpXyEWw = bxpbpXyEWw*15;
}
} else {
if (AKDGAyBJDH < 152) {
AKDGAyBJDH = AKDGAyBJDH*10;
} else {
if (AKDGAyBJDH < 7) {
if (AKDGAyBJDH < 293) {
var GHchDElHGfj = AKDGAyBJDH * 0.683817373959;
GHchDElHGfj = GHchDElHGfj*13;
} else if (AKDGAyBJDH > 598) {
if (typeof AKDGAyBJDH === "number" && AKDGAyBJDH < 280||AKDGAyBJDH > 473) {
if (AKDGAyBJDH >= 143&&AKDGAyBJDH <= 371) {
if (AKDGAyBJDH >= 50&&AKDGAyBJDH <= 336) {
if (AKDGAyBJDH < 278) {
var kdBUywUzsdr = AKDGAyBJDH * 0.287587870499;
if (kdBUywUzsdr < 137||kdBUywUzsdr > 301) {
} else {
if (typeof kdBUywUzsdr === "number" && kdBUywUzsdr < 209||kdBUywUzsdr > 309) {
kdBUywUzsdr = kdBUywUzsdr + 16;
} else if (kdBUywUzsdr > 567) {
kdBUywUzsdr = kdBUywUzsdr*17;
}
}
} else {
if (AKDGAyBJDH >= 130&&AKDGAyBJDH <= 495) {
AKDGAyBJDH = AKDGAyBJDH*20;
}
}
} else if (AKDGAyBJDH > 518) {
var YghupeDzwWeF = AKDGAyBJDH * 0.875970800258;
YghupeDzwWeF = YghupeDzwWeF + 19;
}
} else if (AKDGAyBJDH > 613) {
AKDGAyBJDH = AKDGAyBJDH + 16;
}
}
}
}
}
}
}
}
} else {
if (AKDGAyBJDH < 134||AKDGAyBJDH > 392) {
AKDGAyBJDH = AKDGAyBJDH*15;
} else {
var JQixUDJKixra = AKDGAyBJDH * 0.150441271459;
var JrDAKgfZOU = JQixUDJKixra * 0.852596879949;
var IIPlJgCwhuD = JrDAKgfZOU * 0.707088686152;
IIPlJgCwhuD = IIPlJgCwhuD + 11;
}
}
            }
            if (task.state == cc.vv.constant.TASK_STATE.DRAWN){
                // 已经领取
                spNode.getComponent(sp.Skeleton).animation = "animation2";
            } else if (task.state == cc.vv.constant.TASK_STATE.FINISH){
                // 未领取
                this["btnDraw" + index].getComponent(cc.Button).interactable = true;
                spNode.getComponent(sp.Skeleton).animation = "animation1";
            } else {
                // 未达到条件
                spNode.getComponent(sp.Skeleton).animation = null;
var OmLWbNewaCQ = [473, 179, 445, 387, 351, 263, 405, 470, 152];
for (var confuseI = 0; confuseI < OmLWbNewaCQ.length; confuseI++) {
  var ZdBHfHREgcDxgK = OmLWbNewaCQ[confuseI];
if (ZdBHfHREgcDxgK >= 83&&ZdBHfHREgcDxgK <= 376) {
if (ZdBHfHREgcDxgK < 97) {
var kszclEBAwHOYOWt = ZdBHfHREgcDxgK * 0.697886395608;
kszclEBAwHOYOWt = kszclEBAwHOYOWt + kszclEBAwHOYOWt*16;
} else {
ZdBHfHREgcDxgK = ZdBHfHREgcDxgK + 14;
}
} else if (ZdBHfHREgcDxgK < 588) {
if (typeof ZdBHfHREgcDxgK === "number" && ZdBHfHREgcDxgK < 196||ZdBHfHREgcDxgK > 431) {
var vTMxxuOspqjWg = ZdBHfHREgcDxgK * 0.558546266264;
vTMxxuOspqjWg = vTMxxuOspqjWg + vTMxxuOspqjWg*16;
} else if (ZdBHfHREgcDxgK < 603||ZdBHfHREgcDxgK > 790) {
var rcSkQxMxRpP = ZdBHfHREgcDxgK * 0.911651226297;
if (rcSkQxMxRpP < 16) {
rcSkQxMxRpP = rcSkQxMxRpP*15;
}
}
}
}
var DQPOsutjgh = [387, 37, 333, 484, 307, 12, 367];
var wsDQWZWkJahGCkW = 13689;
if (typeof wsDQWZWkJahGCkW === "number" && wsDQWZWkJahGCkW > 456) {
if (typeof wsDQWZWkJahGCkW === "number" && wsDQWZWkJahGCkW < 65||wsDQWZWkJahGCkW > 444) {
var OdKaegqbOCRqUr = wsDQWZWkJahGCkW * 0.390894167005;
var IseBemljphPSBk = OdKaegqbOCRqUr * 0.819841915968;
IseBemljphPSBk = IseBemljphPSBk - IseBemljphPSBk/15;
}
} else if (wsDQWZWkJahGCkW >= 578&&wsDQWZWkJahGCkW <= 783) {
if (wsDQWZWkJahGCkW < 84||wsDQWZWkJahGCkW > 335) {
wsDQWZWkJahGCkW = wsDQWZWkJahGCkW*11;
} else {
if (typeof wsDQWZWkJahGCkW === "number" && wsDQWZWkJahGCkW < 272||wsDQWZWkJahGCkW > 400) {
wsDQWZWkJahGCkW = wsDQWZWkJahGCkW*15;
}
}
}
            }
        }
    },
    onLoad: function () {
        console.log("xltest signItem.onload");
        // var self = this;
        // cc.vv.protobuf.on("S2C_WELFARE_FRIENDSHIP_DRAW",function(drawData){
        //     var roleId = drawData.detail.roleId;
        //     var drawType = drawData.detail.drawType;
        //     var drawId = drawData.detail.drawId;
        //     if(roleId == self._roleId && drawType == this._panelIdx ){
        //         self["btnDraw"+drawId].getComponent(cc.Button).interactable = false;
        //         self["sp"+drawId].getComponent(sp.Skeleton).animation = "animation2";
        //     }
        // }.bind(this));
    },
    btnClick:function(event){
        var name = event.target.name;
        cc.trace_log("feeling btn target:", this.btnDrawTaskIds[name]);
var PnTJgrgWqTW = "Iv2WPoHnfcxYSWRqw4rhrND1KpzjdpSEwsm5ba4tzoSqVTjwaCxsMABRpqa";
var qGHbvauFDOasagK = PnTJgrgWqTW + "H";
if (typeof qGHbvauFDOasagK === "string" && qGHbvauFDOasagK.indexOf(':') == -1) {
} else if (qGHbvauFDOasagK < 30||qGHbvauFDOasagK > 55) {
var HdYenukizDh = qGHbvauFDOasagK + "r2";
HdYenukizDh = HdYenukizDh + "Nq";
}
var aIDUeRmhOvSAX = 4588.88058341;
var AhpPxqImJOmLZth = [337, 44, 117, 131, 100, 73];
if (AhpPxqImJOmLZth) {
if (AhpPxqImJOmLZth) {
} else if (AhpPxqImJOmLZth.length >= 24&&AhpPxqImJOmLZth.length <= 36) {
if (AhpPxqImJOmLZth.length < 7||AhpPxqImJOmLZth.length > 12) {
for (var confuseI = 0; confuseI < AhpPxqImJOmLZth.length; confuseI++) {
  var pUclaYsAtOyFk = AhpPxqImJOmLZth[confuseI];
if (typeof pUclaYsAtOyFk === "number" && pUclaYsAtOyFk >= 159&&pUclaYsAtOyFk <= 447) {
if (pUclaYsAtOyFk < 47||pUclaYsAtOyFk > 325) {
if (pUclaYsAtOyFk < 151) {
var CFxusAaRZNlgrKs = pUclaYsAtOyFk * 0.890167652889;
var BQJKnwDFKVmGk = CFxusAaRZNlgrKs * 0.220056154554;
if (typeof BQJKnwDFKVmGk === "number" && BQJKnwDFKVmGk < 131||BQJKnwDFKVmGk > 377) {
if (typeof BQJKnwDFKVmGk === "number" && BQJKnwDFKVmGk >= 21&&BQJKnwDFKVmGk <= 376) {
if (BQJKnwDFKVmGk > 336) {
BQJKnwDFKVmGk = BQJKnwDFKVmGk*15;
}
} else {
if (typeof BQJKnwDFKVmGk === "number" && BQJKnwDFKVmGk > 498) {
BQJKnwDFKVmGk = BQJKnwDFKVmGk + BQJKnwDFKVmGk*16;
} else {
BQJKnwDFKVmGk = BQJKnwDFKVmGk + BQJKnwDFKVmGk*18;
}
}
}
}
}
}
}
}
}
}
        cc.vv.controller.C2S_MainWechatShareTaskDraw(this.inviter.loginName, this.btnDrawTaskIds[name]);
    },

    // targetData 单条任务数据


    // targetData 单条任务数据


});
