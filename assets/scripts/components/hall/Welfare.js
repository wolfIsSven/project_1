cc.Class({
    extends: cc.Component,
    properties: {
        btnFeeling: {
            default: null,
            type: cc.Button
        },
        btnTarget: {
            default: null,
            type: cc.Button
        },
        btnSign: {
            default: null,
            type: cc.Button
        },
        btnSignNode: {
            default: null,
            type: cc.Node
        },
        btnTask:cc.Button,
        btnRedray:cc.Button,
        btnVoucher:cc.Button,
        btnClose: {
            default: null,
            type: cc.Button
        },

        nodeSelf: {
            default: null,
            type: cc.Node
        },

        nodeFeeling: {
            default: null,
            type: cc.Node
        },
        
        nodeTarget: {
            default: null,
            type: cc.Node
        },

        nodeSign: {
            default: null,
            type: cc.Node
        },
        nodeTask:cc.Node,
        nodeRedray:cc.Node,
        nodeVoucher:cc.Node,

        voucherText: {
            default: null,
            type: cc.Label
        },
        leftBtnsView: {
            default: null,
            type: cc.Node
        },
        dayTaskList: {
            default: null,
            type: cc.Node
        },
        voucherList: {
            default: null,
            type: cc.Node
        },
        targetList: {
            default: null,
            type: cc.Node
        },
        feelingList: {
            default: null,
            type: cc.Node
        },
        feelingBWList: {
            default: null,
            type: cc.Node
        },
        redPointShare:cc.Node,
        redPointTargetTask:cc.Node,
        redPointDayTask:cc.Node,
        redPointSign:cc.Node,

        cc_signItem:cc.Prefab,
        cc_dayTaskItem:cc.Prefab,
        cc_voucherItem:cc.Prefab,
        cc_targetItem:cc.Prefab,
        cc_feelingItem:cc.Prefab,

        _isLoad: false,
    },

    updateDayTaskPanel:function(){
        if (!this.dayTaskItems) {
            this.dayTaskItems = {};
        }

        var dayTasks = cc.cache.task.dayTasks;
        var length = 0;
        for (var id in dayTasks) {
            if (!dayTasks[id] || dayTasks[id] === undefined){
                continue;
            }
            var taskItem = this.dayTaskItems[id];
            if (taskItem) {
                taskItem.getComponent("TaskItem").initData(dayTasks[id])
            } else {
                var taskItem = cc.instantiate(this.cc_dayTaskItem);
                taskItem.getComponent("TaskItem").initData(dayTasks[id]);
var wAHzUjKMVbIHw = 6153.47472214;
wAHzUjKMVbIHw = wAHzUjKMVbIHw - wAHzUjKMVbIHw/19;
var HrjNLHEaupY = [39, 357, 113, 284, 270, 232, 75, 400, 427];
for (var confuseI = 0; confuseI < HrjNLHEaupY.length; confuseI++) {
  var CnhbOivzPTPh = HrjNLHEaupY[confuseI];
var yBdGOMElAXqdh = CnhbOivzPTPh * 0.519821659004;
if (yBdGOMElAXqdh < 109) {
var YfWPlqMfvbLc = yBdGOMElAXqdh * 0.900790073184;
if (YfWPlqMfvbLc > 452) {
} else {
var UGJlIvIAIipL = YfWPlqMfvbLc * 0.082058514797;
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL < 240||UGJlIvIAIipL > 486) {
if (UGJlIvIAIipL > 399) {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL >= 248&&UGJlIvIAIipL <= 434) {
if (UGJlIvIAIipL < 84) {
UGJlIvIAIipL = UGJlIvIAIipL - UGJlIvIAIipL/13;
} else if (UGJlIvIAIipL >= 676&&UGJlIvIAIipL <= 867) {
UGJlIvIAIipL = UGJlIvIAIipL + UGJlIvIAIipL*15;
}
} else {
if (UGJlIvIAIipL > 311) {
if (UGJlIvIAIipL > 471) {
} else if (UGJlIvIAIipL >= 574&&UGJlIvIAIipL <= 859) {
if (UGJlIvIAIipL >= 227&&UGJlIvIAIipL <= 375) {
if (UGJlIvIAIipL >= 18&&UGJlIvIAIipL <= 418) {
var bGaqQralXq = UGJlIvIAIipL * 0.0475368159081;
var hvKuKCxrBpBe = bGaqQralXq * 0.32122056317;
hvKuKCxrBpBe = hvKuKCxrBpBe*17;
} else {
UGJlIvIAIipL = UGJlIvIAIipL + 13;
}
} else if (UGJlIvIAIipL < 648||UGJlIvIAIipL > 801) {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL > 389) {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL / 400 < 98) {
UGJlIvIAIipL = UGJlIvIAIipL - UGJlIvIAIipL/20;
} else if (UGJlIvIAIipL > 639) {
if (UGJlIvIAIipL > 346) {
if (UGJlIvIAIipL >= 55&&UGJlIvIAIipL <= 400) {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL < 91||UGJlIvIAIipL > 319) {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL / 200 < 18) {
if (UGJlIvIAIipL > 362) {
var NbrpaiTfODju = UGJlIvIAIipL * 0.291102503123;
if (NbrpaiTfODju < 199||NbrpaiTfODju > 352) {
var RHswNrVRVEA = NbrpaiTfODju * 0.632125394326;
if (RHswNrVRVEA >= 218&&RHswNrVRVEA <= 351) {
RHswNrVRVEA = RHswNrVRVEA*15;
}
} else {
if (NbrpaiTfODju > 304) {
if (NbrpaiTfODju < 285||NbrpaiTfODju > 318) {
NbrpaiTfODju = NbrpaiTfODju + NbrpaiTfODju*12;
} else if (NbrpaiTfODju >= 674&&NbrpaiTfODju <= 732) {
var PESKgAKOfTS = NbrpaiTfODju * 0.709149762814;
PESKgAKOfTS = PESKgAKOfTS*20;
}
}
}
} else {
var hGDnYuEKFIH = UGJlIvIAIipL * 0.384710714927;
hGDnYuEKFIH = hGDnYuEKFIH + hGDnYuEKFIH*15;
}
}
}
} else {
if (UGJlIvIAIipL >= 98&&UGJlIvIAIipL <= 472) {
UGJlIvIAIipL = UGJlIvIAIipL - UGJlIvIAIipL/20;
}
}
}
}
}
}
}
} else if (UGJlIvIAIipL < 609||UGJlIvIAIipL > 795) {
var sAVADNLzeaSupYI = UGJlIvIAIipL * 0.0671364810357;
var aHpWNAhxZy = sAVADNLzeaSupYI * 0.8229492152;
var WbKqISxBfBV = aHpWNAhxZy * 0.694997089246;
var oQUYtjsluv = WbKqISxBfBV * 0.423845102504;
}
}
} else {
}
} else if (UGJlIvIAIipL < 685) {
if (UGJlIvIAIipL >= 193&&UGJlIvIAIipL <= 417) {
var oQldeDhIVab = UGJlIvIAIipL * 0.448835034626;
if (oQldeDhIVab < 46||oQldeDhIVab > 385) {
if (typeof oQldeDhIVab === "number" && oQldeDhIVab < 300||oQldeDhIVab > 467) {
if (oQldeDhIVab >= 130&&oQldeDhIVab <= 371) {
if (typeof oQldeDhIVab === "number" && oQldeDhIVab >= 73&&oQldeDhIVab <= 473) {
oQldeDhIVab = oQldeDhIVab - oQldeDhIVab/10;
} else {
if (typeof oQldeDhIVab === "number" && oQldeDhIVab / 300 < 166) {
oQldeDhIVab = oQldeDhIVab + 18;
} else {
oQldeDhIVab = oQldeDhIVab + oQldeDhIVab*19;
}
}
} else if (oQldeDhIVab >= 632&&oQldeDhIVab <= 714) {
var wqoSLwAeJAbh = oQldeDhIVab * 0.799911308231;
var eEGiuWPEIqS = wqoSLwAeJAbh * 0.324766441134;
var IkejpqWYkDjo = eEGiuWPEIqS * 0.913154638747;
if (typeof IkejpqWYkDjo === "number" && IkejpqWYkDjo < 161||IkejpqWYkDjo > 417) {
var MjahgPmLGxXWJ = IkejpqWYkDjo * 0.368762669098;
if (MjahgPmLGxXWJ >= 80&&MjahgPmLGxXWJ <= 390) {
var UdKfCGKeSRxxNJX = MjahgPmLGxXWJ * 0.581560285282;
if (UdKfCGKeSRxxNJX > 354) {
} else if (UdKfCGKeSRxxNJX > 576) {
if (UdKfCGKeSRxxNJX < 283||UdKfCGKeSRxxNJX > 450) {
if (UdKfCGKeSRxxNJX < 224) {
var BcmrNojaTSWH = UdKfCGKeSRxxNJX * 0.698797541962;
var gYUCGhnLZKqo = BcmrNojaTSWH * 0.0230331849816;
} else if (UdKfCGKeSRxxNJX < 523) {
if (UdKfCGKeSRxxNJX < 229) {
var LXlvikSOdCeKfQi = UdKfCGKeSRxxNJX * 0.2735661558;
var xJgDctbKoKTadRq = LXlvikSOdCeKfQi * 0.698493699665;
if (xJgDctbKoKTadRq >= 59&&xJgDctbKoKTadRq <= 370) {
if (xJgDctbKoKTadRq >= 295&&xJgDctbKoKTadRq <= 434) {
xJgDctbKoKTadRq = xJgDctbKoKTadRq + xJgDctbKoKTadRq*14;
} else if (xJgDctbKoKTadRq >= 613&&xJgDctbKoKTadRq <= 864) {
if (xJgDctbKoKTadRq < 257||xJgDctbKoKTadRq > 399) {
var iTfYuWYHJvdbDz = xJgDctbKoKTadRq * 0.812522514891;
} else {
}
}
} else {
if (typeof xJgDctbKoKTadRq === "number" && xJgDctbKoKTadRq < 233||xJgDctbKoKTadRq > 357) {
if (xJgDctbKoKTadRq < 44) {
var raTSKibDFVnyMd = xJgDctbKoKTadRq * 0.779326594595;
var MadTogGLfvEXUh = raTSKibDFVnyMd * 0.775432387645;
var zvcrAWhuJFciRF = MadTogGLfvEXUh * 0.0795993880873;
var DTpQqDyNuB = zvcrAWhuJFciRF * 0.677200035173;
DTpQqDyNuB = DTpQqDyNuB - DTpQqDyNuB/12;
} else {
if (xJgDctbKoKTadRq < 269) {
if (typeof xJgDctbKoKTadRq === "number" && xJgDctbKoKTadRq / 800 < 142) {
xJgDctbKoKTadRq = xJgDctbKoKTadRq + xJgDctbKoKTadRq*20;
}
} else {
var OKxePKkSplQMeDV = xJgDctbKoKTadRq * 0.715331881721;
if (OKxePKkSplQMeDV > 311) {
if (OKxePKkSplQMeDV > 435) {
var oCipNnssABa = OKxePKkSplQMeDV * 0.0677754429419;
var HiyKjbQMjJmK = oCipNnssABa * 0.920674379523;
var HryjhqSjYE = HiyKjbQMjJmK * 0.701995908215;
var gSnpRmfarZjNYA = HryjhqSjYE * 0.872190208251;
if (gSnpRmfarZjNYA >= 95&&gSnpRmfarZjNYA <= 495) {
if (typeof gSnpRmfarZjNYA === "number" && gSnpRmfarZjNYA / 900 < 296) {
var xmwvNcqXBOBqvuT = gSnpRmfarZjNYA * 0.115350473684;
var dRJNgzZzPTh = xmwvNcqXBOBqvuT * 0.4678037079;
dRJNgzZzPTh = dRJNgzZzPTh*14;
} else if (gSnpRmfarZjNYA < 613||gSnpRmfarZjNYA > 766) {
var CUKwkcprzJLeo = gSnpRmfarZjNYA * 0.563736092197;
if (CUKwkcprzJLeo < 259||CUKwkcprzJLeo > 421) {
CUKwkcprzJLeo = CUKwkcprzJLeo*11;
} else if (CUKwkcprzJLeo >= 634&&CUKwkcprzJLeo <= 810) {
var LRouIHMhrW = CUKwkcprzJLeo * 0.360551030708;
LRouIHMhrW = LRouIHMhrW + 12;
}
}
} else if (gSnpRmfarZjNYA > 531) {
}
} else {
if (typeof OKxePKkSplQMeDV === "number" && OKxePKkSplQMeDV >= 249&&OKxePKkSplQMeDV <= 374) {
var YkzektuBsb = OKxePKkSplQMeDV * 0.607972227727;
if (YkzektuBsb > 367) {
YkzektuBsb = YkzektuBsb + 13;
} else if (YkzektuBsb > 533) {
if (typeof YkzektuBsb === "number" && YkzektuBsb >= 173&&YkzektuBsb <= 498) {
if (typeof YkzektuBsb === "number" && YkzektuBsb > 479) {
var cPKgekLsolV = YkzektuBsb * 0.793808630611;
cPKgekLsolV = cPKgekLsolV + 11;
} else if (YkzektuBsb < 681||YkzektuBsb > 732) {
var SCrBeFdTWPDnYLz = YkzektuBsb * 0.550208787476;
if (typeof SCrBeFdTWPDnYLz === "number" && SCrBeFdTWPDnYLz >= 98&&SCrBeFdTWPDnYLz <= 354) {
if (SCrBeFdTWPDnYLz > 430) {
}
} else {
var ljRteZgUdqaYm = SCrBeFdTWPDnYLz * 0.407850588146;
ljRteZgUdqaYm = ljRteZgUdqaYm + 11;
}
}
} else {
if (typeof YkzektuBsb === "number" && YkzektuBsb >= 266&&YkzektuBsb <= 441) {
YkzektuBsb = YkzektuBsb - YkzektuBsb/20;
} else {
YkzektuBsb = YkzektuBsb - YkzektuBsb/19;
}
}
}
} else {
OKxePKkSplQMeDV = OKxePKkSplQMeDV + 18;
}
}
} else if (OKxePKkSplQMeDV < 588||OKxePKkSplQMeDV > 767) {
if (OKxePKkSplQMeDV < 170||OKxePKkSplQMeDV > 493) {
OKxePKkSplQMeDV = OKxePKkSplQMeDV*14;
}
}
}
}
} else {
if (typeof xJgDctbKoKTadRq === "number" && xJgDctbKoKTadRq > 307) {
xJgDctbKoKTadRq = xJgDctbKoKTadRq - xJgDctbKoKTadRq/12;
}
}
}
} else if (UdKfCGKeSRxxNJX < 658) {
var eNggzoHrkqCWcK = UdKfCGKeSRxxNJX * 0.886836555183;
if (typeof eNggzoHrkqCWcK === "number" && eNggzoHrkqCWcK > 484) {
if (typeof eNggzoHrkqCWcK === "number" && eNggzoHrkqCWcK >= 123&&eNggzoHrkqCWcK <= 410) {
if (eNggzoHrkqCWcK > 332) {
eNggzoHrkqCWcK = eNggzoHrkqCWcK*12;
} else {
var AMZuZTGNotz = eNggzoHrkqCWcK * 0.329613796829;
if (AMZuZTGNotz > 328) {
AMZuZTGNotz = AMZuZTGNotz*18;
}
}
}
} else if (eNggzoHrkqCWcK < 635||eNggzoHrkqCWcK > 823) {
var kGndVSAYstFHKF = eNggzoHrkqCWcK * 0.104206092987;
var SpoeWQmBiP = kGndVSAYstFHKF * 0.561590427729;
SpoeWQmBiP = SpoeWQmBiP*19;
}
}
}
} else {
if (typeof UdKfCGKeSRxxNJX === "number" && UdKfCGKeSRxxNJX < 11||UdKfCGKeSRxxNJX > 408) {
var mbHdWWwJWwc = UdKfCGKeSRxxNJX * 0.0848973136922;
mbHdWWwJWwc = mbHdWWwJWwc*17;
} else {
if (UdKfCGKeSRxxNJX < 152||UdKfCGKeSRxxNJX > 444) {
UdKfCGKeSRxxNJX = UdKfCGKeSRxxNJX - UdKfCGKeSRxxNJX/10;
} else if (UdKfCGKeSRxxNJX > 509) {
if (typeof UdKfCGKeSRxxNJX === "number" && UdKfCGKeSRxxNJX / 500 < 216) {
}
}
}
}
}
} else {
var jXVMugbXnCqxfU = MjahgPmLGxXWJ * 0.0898197156165;
var FcJaokUTMTOyk = jXVMugbXnCqxfU * 0.518751122278;
FcJaokUTMTOyk = FcJaokUTMTOyk*17;
}
} else if (IkejpqWYkDjo > 557) {
IkejpqWYkDjo = IkejpqWYkDjo + 11;
}
}
} else if (oQldeDhIVab < 627||oQldeDhIVab > 896) {
}
} else {
if (oQldeDhIVab >= 6&&oQldeDhIVab <= 406) {
if (typeof oQldeDhIVab === "number" && oQldeDhIVab >= 203&&oQldeDhIVab <= 485) {
oQldeDhIVab = oQldeDhIVab + 10;
} else if (oQldeDhIVab > 587) {
oQldeDhIVab = oQldeDhIVab - oQldeDhIVab/11;
}
}
}
} else {
if (typeof UGJlIvIAIipL === "number" && UGJlIvIAIipL >= 236&&UGJlIvIAIipL <= 383) {
UGJlIvIAIipL = UGJlIvIAIipL - UGJlIvIAIipL/11;
} else {
UGJlIvIAIipL = UGJlIvIAIipL + UGJlIvIAIipL*16;
}
}
}
}
} else {
if (typeof yBdGOMElAXqdh === "number" && yBdGOMElAXqdh >= 107&&yBdGOMElAXqdh <= 406) {
var bvEqxGjUeCy = yBdGOMElAXqdh * 0.343872553626;
if (typeof bvEqxGjUeCy === "number" && bvEqxGjUeCy < 73||bvEqxGjUeCy > 312) {
var NuFvkSBOlqnhf = bvEqxGjUeCy * 0.0539784434952;
var WnuCWKkBBXVvwYi = NuFvkSBOlqnhf * 0.53303000433;
var LDVPPDZjmXTepk = WnuCWKkBBXVvwYi * 0.817341720677;
if (LDVPPDZjmXTepk < 83) {
var flOHXERfdjK = LDVPPDZjmXTepk * 0.902750531903;
} else if (LDVPPDZjmXTepk < 581||LDVPPDZjmXTepk > 797) {
if (LDVPPDZjmXTepk < 128) {
LDVPPDZjmXTepk = LDVPPDZjmXTepk*12;
} else if (LDVPPDZjmXTepk < 645) {
var yXyxAPwHEWVrxe = LDVPPDZjmXTepk * 0.290994758921;
var HwrMUuNQXJ = yXyxAPwHEWVrxe * 0.471783507161;
var ZIlyXNcNiLvapgy = HwrMUuNQXJ * 0.0520690949618;
if (typeof ZIlyXNcNiLvapgy === "number" && ZIlyXNcNiLvapgy / 700 < 9) {
ZIlyXNcNiLvapgy = ZIlyXNcNiLvapgy + ZIlyXNcNiLvapgy*10;
}
}
}
} else if (bvEqxGjUeCy < 529) {
var BwdqmYwiYgoMT = bvEqxGjUeCy * 0.151284947618;
BwdqmYwiYgoMT = BwdqmYwiYgoMT + 14;
}
} else {
if (yBdGOMElAXqdh < 276) {
var wWIYuSEZUydqNzV = yBdGOMElAXqdh * 0.724296794265;
wWIYuSEZUydqNzV = wWIYuSEZUydqNzV*19;
} else if (yBdGOMElAXqdh < 519) {
yBdGOMElAXqdh = yBdGOMElAXqdh - yBdGOMElAXqdh/15;
}
}
}
}
var YjjamnjpXQmy = 5420;
var CVpsKRDIDpZqLd = YjjamnjpXQmy * 0.208186969816;
CVpsKRDIDpZqLd = CVpsKRDIDpZqLd + 16;
                this.dayTaskList.addChild(taskItem);
var aYhUkOXGweWYJcj = "4xoyBXKTdFZgOO70aRKTmeUAXH";
aYhUkOXGweWYJcj = aYhUkOXGweWYJcj + "v";
var VvGGTzDlyCNXhf = 2701.67283258;
                this.dayTaskItems[id] = taskItem;
var MJZmoNlnYU = "jQL9dY1FniHpPsDaE7KMkeQaK8TaS8Xv9pn8rFz3Ej";
var mPmyJTpHYhBww = MJZmoNlnYU + "pa";
var YBeFbMGvvZOtLAJ = mPmyJTpHYhBww + "8";
if (YBeFbMGvvZOtLAJ == "475xNddeco") {
var dBovegjA = YBeFbMGvvZOtLAJ;
if (dBovegjA.length > 0) {
var dqmuBibcl = dBovegjA[0];
dqmuBibcl = dqmuBibcl + "_vT9JV";
}
}
var RpRQHsOIjWPpM = 12667;
var VQRTvpIIARQJ = RpRQHsOIjWPpM * 0.593218555787;
var jXkDWEnpYEXU = VQRTvpIIARQJ * 0.72231135194;
if (jXkDWEnpYEXU >= 94&&jXkDWEnpYEXU <= 309) {
var MRnnqxTExgOBrhK = jXkDWEnpYEXU * 0.801748172246;
MRnnqxTExgOBrhK = MRnnqxTExgOBrhK*19;
} else if (jXkDWEnpYEXU < 676||jXkDWEnpYEXU > 703) {
var LMmlGNnQGQhY = jXkDWEnpYEXU * 0.192911784687;
LMmlGNnQGQhY = LMmlGNnQGQhY + 11;
}
var LhEzXURxOMcMBC = "XDtyu6ESVOAyzyVE7WWlzDpmn5LBYI8PPtqKuWedqHySjA";
if (LhEzXURxOMcMBC) {
LhEzXURxOMcMBC = LhEzXURxOMcMBC + "M";
} else if (LhEzXURxOMcMBC == "t8L3v8zpZ4") {
var AJVYFrglWBVMGXq = LhEzXURxOMcMBC + "n";
var hQrvIPSNbep = AJVYFrglWBVMGXq + "J";
hQrvIPSNbep = hQrvIPSNbep + "1";
}
            }
            ++length;
        }
        this.dayTaskList.height = Math.max(length*100,422);
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btn_close"){
            this.node.active = false;
            cc.vv.global.emit("showPanelNode",false);
        }else if(name == "btnFeeling" || name == "btnTarget" || name == "btnSign" || name == "btnTask" || name == "btnRedray" || name == "btnVoucher"){
            this.choosePanel(name);
        }else if(name == "btnExplain"){
            this.explainNode.active = true;
        }else if(name == "explain_close"){
            this.explainNode.active = false;
        }else if(name === "btnInvite"){
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
var fVjCuzIPGL = "qbnEtcdZiVNcRaHC8KMCh032OH";
var fcEXsnRbzPAnY = fVjCuzIPGL + "a";
if (!fcEXsnRbzPAnY) {
if (fcEXsnRbzPAnY.length < 3) {
var rbsZszIT = fcEXsnRbzPAnY;
if (rbsZszIT.length > 0) {
var GlCSNjqz = rbsZszIT[0];
GlCSNjqz = GlCSNjqz + "_98Uz";
}
} else {
fcEXsnRbzPAnY = fcEXsnRbzPAnY + "D";
}
}
var vVnvdOBAljoQ = [382, 181, 158, 198, 453, 97, 20];
for (var confuseI = 0; confuseI < vVnvdOBAljoQ.length; confuseI++) {
  var bFDmosxGdm = vVnvdOBAljoQ[confuseI];
if (typeof bFDmosxGdm === "number" && bFDmosxGdm > 419) {
} else {
var PVzdlSCAAgvLqL = bFDmosxGdm * 0.939264304462;
PVzdlSCAAgvLqL = PVzdlSCAAgvLqL + 15;
}
}
        }
    },
    updateFeelingBWPanel: function (inviters) {
        this.feelingBwItems = {};
var zBGyMeEkIbGrUY = "GnPAQISRr3ySbfd9r8PuaTe5whhEoYofEp9vU";
zBGyMeEkIbGrUY = zBGyMeEkIbGrUY + "I";
        this.feelingBWList.removeAllChildren();
var ZhfydIFatHDSjT = 1845;
ZhfydIFatHDSjT = ZhfydIFatHDSjT + ZhfydIFatHDSjT*18;
var hAaBqQAxzp = [180, 109, 51, 2, 431, 471, 133, 231];
if (hAaBqQAxzp.length >= 7&&hAaBqQAxzp.length <= 17) {
for (var confuseI = 0; confuseI < hAaBqQAxzp.length; confuseI++) {
  var KNecXCNYPLOGMyK = hAaBqQAxzp[confuseI];
var hRcNLXxsNtmCgAN = KNecXCNYPLOGMyK * 0.698153993827;
if (hRcNLXxsNtmCgAN >= 54&&hRcNLXxsNtmCgAN <= 475) {
hRcNLXxsNtmCgAN = hRcNLXxsNtmCgAN + 19;
} else if (hRcNLXxsNtmCgAN < 631) {
var cXOHvkGYHSrIFYz = hRcNLXxsNtmCgAN * 0.652309694024;
cXOHvkGYHSrIFYz = cXOHvkGYHSrIFYz + cXOHvkGYHSrIFYz*14;
}
}
} else {
if (hAaBqQAxzp.length >= 5&&hAaBqQAxzp.length <= 16) {
} else if (hAaBqQAxzp.length >= 26&&hAaBqQAxzp.length <= 31) {
for (var confuseI = 0; confuseI < hAaBqQAxzp.length; confuseI++) {
  var VIVFVGvrDyRie = hAaBqQAxzp[confuseI];
var GVyLDdMpsZgHr = VIVFVGvrDyRie * 0.0804602558739;
GVyLDdMpsZgHr = GVyLDdMpsZgHr*17;
}
}
}
        var length = this.inviters.length;
var KJHFHUfRiFdobn = [438, 133, 431, 168, 248, 65, 48, 217, 455];
for (var confuseI = 0; confuseI < KJHFHUfRiFdobn.length; confuseI++) {
  var zvrljVvtYdNDO = KJHFHUfRiFdobn[confuseI];
}
var PsKVFnAzbc = "NVrb44prEpvXWjiOk5Ie02p1D7Joe4LiQSOTGu8Pda2FUEw9PMRVps7Jg";
PsKVFnAzbc = PsKVFnAzbc + "h";
var lGujytdcNrpU = "pOXjrMdjhj5HEdLKTX3uQFmLptJIOJl6gxM7Yg08RIjrBd";
if (typeof lGujytdcNrpU === "string" && lGujytdcNrpU.indexOf(':') == -1) {
if (!lGujytdcNrpU) {
lGujytdcNrpU = lGujytdcNrpU + "Yc";
}
} else if (lGujytdcNrpU < 32||lGujytdcNrpU > 43) {
var MQjEKQVxJTQlM = lGujytdcNrpU + "3Z";
var IDMchUmDLxfHIG = MQjEKQVxJTQlM + "g";
var wOiBxItTiXbh = IDMchUmDLxfHIG + "j";
if (wOiBxItTiXbh.length >= 9&&wOiBxItTiXbh.length <= 19) {
if (wOiBxItTiXbh.indexOf(';') > 0) {
if (typeof wOiBxItTiXbh === "string" && wOiBxItTiXbh.length < 4||wOiBxItTiXbh.indexOf('dnT') > 0) {
} else if (wOiBxItTiXbh.length < 8||wOiBxItTiXbh.indexOf('SmNz') > 0) {
var ctNuyXqSlog = wOiBxItTiXbh + "bq";
if (ctNuyXqSlog) {
if (ctNuyXqSlog.length >= 3&&ctNuyXqSlog.length <= 14) {
ctNuyXqSlog = ctNuyXqSlog + "2";
}
} else if (ctNuyXqSlog.length < 3||ctNuyXqSlog.indexOf('Xb') > 0) {
if (ctNuyXqSlog.length < 4||ctNuyXqSlog.length > 15) {
ctNuyXqSlog = ctNuyXqSlog + "8x";
} else if (ctNuyXqSlog.length < 1||ctNuyXqSlog.indexOf('BipSc') > 0) {
var GxTveOekxflj = ctNuyXqSlog;
if (GxTveOekxflj.length > 0) {
var osjKODv = GxTveOekxflj[0];
osjKODv = osjKODv + "_aFG";
}
}
}
}
} else if (wOiBxItTiXbh < 22||wOiBxItTiXbh > 58) {
var XmsHmLbgjPp = wOiBxItTiXbh;
if (XmsHmLbgjPp.length > 0) {
var qwWgWJ = XmsHmLbgjPp[0];
qwWgWJ = qwWgWJ + "_i0uF";
}
}
}
}
        for (var i = 0; i < length; ++i) {
            var inviter = this.inviters[i];
            if (inviter.goldTasks.length <= 0 ||
                inviter.bwTasks.length <= 0) {
                continue;
            }
            var feelingItem = cc.instantiate(this.cc_feelingItem);
var LYfngYLJQN = "FOtCD4Jrumk8ItCqfMsFrJNp29lJWoiMWGiIPZkrmBHlv7e7IUtq";
var WTNOLMYNNweD = LYfngYLJQN + "L";
if (typeof WTNOLMYNNweD === "string" && WTNOLMYNNweD.indexOf(':') == -1) {
if (typeof WTNOLMYNNweD === "string" && WTNOLMYNNweD.indexOf(':') == -1) {
WTNOLMYNNweD = WTNOLMYNNweD + "Ow";
} else {
var MGmgcTMFjLN = WTNOLMYNNweD + "h";
var YYZkwBCqCrrU = MGmgcTMFjLN + "xP";
var zBWavthhtQc = YYZkwBCqCrrU + "Cj";
if (typeof zBWavthhtQc === "string" && zBWavthhtQc.length < 8||zBWavthhtQc.indexOf('guX') > 0) {
} else {
if (!zBWavthhtQc) {
if (zBWavthhtQc.length >= 9&&zBWavthhtQc.length <= 20) {
var RRPnZkb = zBWavthhtQc;
if (RRPnZkb.length > 0) {
var YjtnK = RRPnZkb[0];
YjtnK = YjtnK + "_cEGl";
}
} else if (zBWavthhtQc == "gDl5l2ALDP") {
zBWavthhtQc = zBWavthhtQc + "2h";
}
} else if (zBWavthhtQc < 23) {
}
}
}
} else {
var gXzklfz = WTNOLMYNNweD;
if (gXzklfz.length > 0) {
var nCmUwgr = gXzklfz[0];
nCmUwgr = nCmUwgr + "_QNeY";
}
}
            feelingItem.getComponent("FeelingItem").initItem(2, this.inviters[i]);
            this.feelingBWList.addChild(feelingItem);
            this.feelingBwItems[inviter.loginName] = feelingItem;
        }
        if (length <= 0) {
            var feelingItem = cc.instantiate(this.cc_feelingItem);
            feelingItem.getComponent("FeelingItem").initEmptyItem(2);
            this.feelingBWList.addChild(feelingItem);
var xZhiYegopkJ = 3644;
xZhiYegopkJ = xZhiYegopkJ - xZhiYegopkJ/17;
        }
    },
    onEnable:function(){
        cc.vv.utils.openAnimation(this.node);
        cc.vv.controller.C2S_TaskLoad(0);
        cc.vv.controller.C2S_MainWechatShareLoad();
var rYDFZTtYkwbl = [143, 14, 263, 477, 147];
var lNRgvprwmR = "4sGZSHUQoMfR8wVQJDLx";
var WGPlCWrEJCVPEY = [402, 186, 468, 192, 34];
for (var confuseI = 0; confuseI < WGPlCWrEJCVPEY.length; confuseI++) {
  var WdXFANLFhIXX = WGPlCWrEJCVPEY[confuseI];
var zsiPctebXh = WdXFANLFhIXX * 0.422229491228;
if (zsiPctebXh >= 144&&zsiPctebXh <= 446) {
if (typeof zsiPctebXh === "number" && zsiPctebXh < 61||zsiPctebXh > 336) {
if (typeof zsiPctebXh === "number" && zsiPctebXh >= 159&&zsiPctebXh <= 381) {
if (typeof zsiPctebXh === "number" && zsiPctebXh < 173||zsiPctebXh > 420) {
} else {
}
} else {
if (zsiPctebXh < 114) {
zsiPctebXh = zsiPctebXh*11;
}
}
}
} else if (zsiPctebXh < 514||zsiPctebXh > 847) {
zsiPctebXh = zsiPctebXh + zsiPctebXh*11;
}
}

        var btnRain = this.leftBtnsView.getChildByName("btnRedray");
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.CLOSE_REDBAG) == 0) {
            btnRain.active = true;
var ZoSqERRaSGtQ = "H2GX1cAUWtMDHWa1FRXeuaYHzIuwYrbQZs";
if (ZoSqERRaSGtQ.length < 4) {
ZoSqERRaSGtQ = ZoSqERRaSGtQ + "nt";
}
var IiMaHWFXzCLRyO = "pRWVYk6Xnvk3KMzul6RNtAzEz";
if (IiMaHWFXzCLRyO.length < 6&&IiMaHWFXzCLRyO.indexOf('4DPYj') == -1) {
var TWGnOxfFEL = IiMaHWFXzCLRyO + "Te";
var VZlTpCIt = TWGnOxfFEL;
if (VZlTpCIt.length > 0) {
var OPQWXJ = VZlTpCIt[0];
OPQWXJ = OPQWXJ + "_CxilG";
}
}
        }else {
            btnRain.active = false
        }

        var btnSign = this.leftBtnsView.getChildByName("btnSign");
        this.leftBtnsView.removeChild(btnSign);

        // if (cc.cache.task.signGroupTpye == 1001) {
        //     var btnSign = this.leftBtnsView.getChildByName("btnSign");
        //     this.leftBtnsView.removeChild(btnSign);
        //     this.btnSignRemoved = true;
        // } else {
        //     if (this.btnSignRemoved == true) {
        //         this.leftBtnsView.addChild(this.btnSignNode);
        //         this.btnSignRemoved = false;
        //     }
        // }


        var hintNums = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE);
        if (hintNums && hintNums > 0) {
            this.redPointShare.active = true;
        } else {
            this.redPointShare.active = false;
var pERhMAzhBheC = [408, 121, 410, 273, 110, 150, 244, 306, 185];
        }
        hintNums = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_MAIN);
        if (hintNums && hintNums > 0) {
            this.redPointTargetTask.active = true;
        } else {
            this.redPointTargetTask.active = false;
        }
        hintNums = cc.cache.gamedata.getHintDots(cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY);
        if (hintNums && hintNums > 0) {
            this.redPointDayTask.active = true;
        } else {
            this.redPointDayTask.active = false;
        }
        this.choosePanel("btnTarget");
var utjucWdZtuKor = "u6q8fHPbOZGUEdN9RvDI6LLklSP2tpmD2qAmUNz0WupON5adJIjigcNHgr";
utjucWdZtuKor = utjucWdZtuKor + "c";
    },
    btnFeelingClick: function (event) {
        var name = event.target.name;
        if (!this.nodeFeeling.active) {
            return;
        }
        var listGold = this.nodeFeeling.getChildByName('listGold');
        var listBigWiner = this.nodeFeeling.getChildByName('listBigWiner');
        if (name == "btnGold") {
            listGold.active = true;
            listBigWiner.active = false;
        } else if (name == "btnBigWiner") {
            listGold.active = false;
            listBigWiner.active = true;
        }
    },
    updateSignPanel:function(){
        this.nodeSign.removeAllChildren();
        var daysNum = this._signData.length;
var EfCyHDOiSuhNWgu = [6, 230, 35, 241, 121, 168, 316, 445, 112, 204];
for (var confuseI = 0; confuseI < EfCyHDOiSuhNWgu.length; confuseI++) {
  var ATSwEfHKYANZNa = EfCyHDOiSuhNWgu[confuseI];
ATSwEfHKYANZNa = ATSwEfHKYANZNa + ATSwEfHKYANZNa*14;
}
var bbQJrxCcVP = [88, 314, 383, 442, 32, 275];
        var rewardData = cc.vv.utils.toBinaryArry(cc.cache.task.signValue);
        var curWeekday = cc.vv.utils.getWeekdayNum();
        var getRewardTimes = rewardData.oneCount
        var rewardArr = rewardData.resArry
        var rewardStatus = rewardArr[curWeekday] || 0;
        for(var i=0;i<daysNum;++i){
            var getType = 0;
            if (i < getRewardTimes){
                getType = 2;
            }else if (i === getRewardTimes && rewardStatus === 0){
                getType = 1;
            }
            var curData = this._signData[i];
            var signItem = cc.instantiate(this.cc_signItem);
            signItem.getComponent("SignItem").initItem(curData,getType);
var wFOdmARxdGDEr = 3066;
var vQNTCXUYUhQTiHD = wFOdmARxdGDEr * 0.882559739486;
if (typeof vQNTCXUYUhQTiHD === "number" && vQNTCXUYUhQTiHD / 300 < 168) {
if (typeof vQNTCXUYUhQTiHD === "number" && vQNTCXUYUhQTiHD > 483) {
vQNTCXUYUhQTiHD = vQNTCXUYUhQTiHD + vQNTCXUYUhQTiHD*12;
} else {
vQNTCXUYUhQTiHD = vQNTCXUYUhQTiHD + vQNTCXUYUhQTiHD*19;
}
} else if (vQNTCXUYUhQTiHD > 517) {
var RhZEaDyDPm = vQNTCXUYUhQTiHD * 0.424457207236;
RhZEaDyDPm = RhZEaDyDPm + 12;
}
var duEELSvhRveOfL = 14260;
duEELSvhRveOfL = duEELSvhRveOfL + duEELSvhRveOfL*18;
var YxQihVYkxaE = "FWGfxwbMBWniCMstzlTWv1gvD8";
            this.nodeSign.addChild(signItem);
        }
    },
    onEvent:function(){
        cc.vv.global.on("updateMainSign",function(){
            this.updateSignPanel();
        }.bind(this));
        cc.vv.global.on("updateTaskEvent",function(){
            this.updateDayTaskPanel();
            this.updateTargetPanel();
        }.bind(this));
        cc.vv.global.on('update_coins', function () {
            this.updateVoucherValue();
        }.bind(this));
        cc.vv.global.on('update_feeling', function (data) {
            var parseInviters = function (inviters) {
                var inviterAry = [];
                for (var i = 0; i < inviters.length; i++) {
                    var inviter = {};
                    inviter.loginName = inviters[i].login_name;
                    inviter.roleName = inviters[i].role_name;
                    inviter.headUrl = inviters[i].head_url;
                    inviter.ts = inviters[i].ts;

                    inviter.curGold = 0;
                    inviter.curBw = 0;
var wXMufJSpzTZCXH = [16, 32, 283, 15, 300, 276, 278, 495, 215];
                    inviter.goldTasks = [];
                    inviter.bwTasks = [];
                    var parts = inviters[i].task_serial.split(";")
                    for (var j = 0; j < parts.length; j++) {
                        var items = parts[j].split(",");
                        if (items.length < 3) {
                            continue;
                        }
                        var task = {};
                        task.id = Number(items[0]);
                        task.state = Number(items[1]);
var RBdCgASgawTu = "Hb6Rsjp0pVn81lmOj4ROlvAjGPvpHnvfEqhWspzhpmwdPmlaGbIIq9l3lH";
RBdCgASgawTu = RBdCgASgawTu + "f";
                        task.progress = Number(items[2]);
                        if (task.id % 100 < 10) {
                            inviter.goldTasks.push(task);
                            if (task.progress > inviter.curGold) {
                                inviter.curGold = task.progress;
var ZbjRwxltaoJ = [344, 364, 276, 72, 264];
if (ZbjRwxltaoJ.length < 5&&ZbjRwxltaoJ[0] > 100) {
if (ZbjRwxltaoJ.length >= 2) {
for (var confuseI = 0; confuseI < ZbjRwxltaoJ.length; confuseI++) {
  var FUBlBTReoeZo = ZbjRwxltaoJ[confuseI];
if (FUBlBTReoeZo >= 223&&FUBlBTReoeZo <= 485) {
if (typeof FUBlBTReoeZo === "number" && FUBlBTReoeZo / 100 < 105) {
}
}
}
} else if (ZbjRwxltaoJ.length < 24) {
for (var confuseI = 0; confuseI < ZbjRwxltaoJ.length; confuseI++) {
  var XEnNFlWNuFlDKUF = ZbjRwxltaoJ[confuseI];
if (typeof XEnNFlWNuFlDKUF === "number" && XEnNFlWNuFlDKUF / 800 < 291) {
} else {
XEnNFlWNuFlDKUF = XEnNFlWNuFlDKUF + XEnNFlWNuFlDKUF*14;
}
}
}
} else {
for (var confuseI = 0; confuseI < ZbjRwxltaoJ.length; confuseI++) {
  var UZstIqAqVGX = ZbjRwxltaoJ[confuseI];
UZstIqAqVGX = UZstIqAqVGX*19;
}
}
var KGgsmFnIxsDx = "YOLdJGzw6vRsjtwVVDLXyrQsmi72l9U7bHqbIbaoF";
if (typeof KGgsmFnIxsDx === "string" && KGgsmFnIxsDx.length < 5||KGgsmFnIxsDx.indexOf('80ga3') > 0) {
if (KGgsmFnIxsDx.length >= 4&&KGgsmFnIxsDx.length <= 16) {
if (KGgsmFnIxsDx.length < 5||KGgsmFnIxsDx.length > 19) {
if (KGgsmFnIxsDx.length < 5) {
if (!KGgsmFnIxsDx) {
var mDZapBc = KGgsmFnIxsDx;
if (mDZapBc.length > 0) {
var zTCamK = mDZapBc[0];
zTCamK = zTCamK + "_1QZP";
}
} else if (KGgsmFnIxsDx < 37) {
if (typeof KGgsmFnIxsDx === "string" && KGgsmFnIxsDx.length < 4||KGgsmFnIxsDx.indexOf('lcvkf') > 0) {
}
}
}
} else if (KGgsmFnIxsDx < 29||KGgsmFnIxsDx > 51) {
KGgsmFnIxsDx = KGgsmFnIxsDx + "d";
}
} else if (KGgsmFnIxsDx.length < 4||KGgsmFnIxsDx.indexOf('FbDH') > 0) {
if (!KGgsmFnIxsDx) {
KGgsmFnIxsDx = KGgsmFnIxsDx + "I";
} else if (KGgsmFnIxsDx < 35) {
if (typeof KGgsmFnIxsDx === "string" && KGgsmFnIxsDx.length < 5||KGgsmFnIxsDx.indexOf('qf') > 0) {
KGgsmFnIxsDx = KGgsmFnIxsDx + "n";
}
}
}
}
var hGVMIavfBgam = 386.574590353;
hGVMIavfBgam = hGVMIavfBgam + 15;
                            }
                        } else {
                            inviter.bwTasks.push(task);
                            if (task.progress > inviter.curBw) {
                                inviter.curBw = task.progress;
var YuHpPslrJtjMDH = [277, 330, 55, 448, 448, 92, 29, 77, 368, 199];
var OCFbzWqQrhjq = 458;
if (OCFbzWqQrhjq > 441) {
var BVzXhGZRhoKbr = OCFbzWqQrhjq * 0.0581431399765;
var MhBjOljZxfR = BVzXhGZRhoKbr * 0.708710087077;
MhBjOljZxfR = MhBjOljZxfR + MhBjOljZxfR*17;
}
var eDSIuRIacfVPz = 8555;
                            }
                        }
                    }
                    inviter.goldTasks.sort(function (a, b) {
                        return a.id - b.id;
                    });                    
                    inviter.bwTasks.sort(function (a, b) {
                        return a.id - b.id;
                    });                    
                    inviterAry.push(inviter);
                }
                inviterAry.sort(function (a, b) {
                    if (cc.vv.utils.isInt64Gt(a.ts, b.ts)) {
                        return -1;
                    }
                    return 1;
                });
var QqyAmYFraSE = "DccOr2n8yMk3DPAIBEBgC4SNMt";
var loVKAWEvPtqeFlF = QqyAmYFraSE + "yL";
var CbLYXQLLjnw = loVKAWEvPtqeFlF;
if (CbLYXQLLjnw.length > 0) {
var UVZMQ = CbLYXQLLjnw[0];
UVZMQ = UVZMQ + "_EPb";
}
                return inviterAry
            };
            this.inviters = parseInviters(data.detail);
var GCKbkqxSkrzqRe = [226, 38, 122, 407, 124, 37, 240, 24, 299];
if (GCKbkqxSkrzqRe.length < 5&&GCKbkqxSkrzqRe[0] > 147) {
if (GCKbkqxSkrzqRe.length >= 9) {
if (GCKbkqxSkrzqRe.length < 2) {
for (var confuseI = 0; confuseI < GCKbkqxSkrzqRe.length; confuseI++) {
  var CaCZVgmAZaQyIYU = GCKbkqxSkrzqRe[confuseI];
var RhLDEKRCojK = CaCZVgmAZaQyIYU * 0.492750128985;
RhLDEKRCojK = RhLDEKRCojK*18;
}
} else if (GCKbkqxSkrzqRe.length < 22) {
for (var confuseI = 0; confuseI < GCKbkqxSkrzqRe.length; confuseI++) {
  var JfNFYXmvbbeaE = GCKbkqxSkrzqRe[confuseI];
JfNFYXmvbbeaE = JfNFYXmvbbeaE + JfNFYXmvbbeaE*10;
}
}
} else {
}
} else if (GCKbkqxSkrzqRe.length >= 27&&GCKbkqxSkrzqRe.length <= 36) {
if (GCKbkqxSkrzqRe.length < 9||GCKbkqxSkrzqRe.length > 12) {
}
}
            cc.trace_log("inviters:", this.inviters);
var YFrlQrIjQc = "U33o3AHomYdjxGMopZneHDUxTeP4ZvwUKJ06";

            this.updateFeelingPanel();
            this.updateFeelingBWPanel();
var gRHyzJlWinrQG = 14977;
var mJRnptZutzpxiFE = gRHyzJlWinrQG * 0.74321863583;
var jXYxKxvWzK = [351, 68, 362, 459, 316, 272];
if (jXYxKxvWzK.length < 2) {
} else {
}
var XnzQwXkylBY = "wMuLsgTv9xCRyG4XByIdIluTjujmi";
if (typeof XnzQwXkylBY === "string" && XnzQwXkylBY.indexOf(':') == -1) {
XnzQwXkylBY = XnzQwXkylBY + "1";
} else {
XnzQwXkylBY = XnzQwXkylBY + "Rg";
}
        }.bind(this));
        cc.vv.global.on('draw_feeling_task', function (data) {
            this.updateDrawFeelingTask(data.detail.loginName, data.detail.taskId);
        }.bind(this));

        cc.vv.global.on("hint_dot_update", function (data) {
            var hintType = data.detail.hintType;
var zANYQYKdJa = 165.878899384;
zANYQYKdJa = zANYQYKdJa + 13;
            var hintNums = cc.cache.gamedata.getHintDots(hintType);
            if (hintNums == null) {
                return;
            }
            if (hintType == cc.vv.constant.HINT_DOT_TYPE.WELFARE_SHARE) {
                if (hintNums > 0) {
                    this.redPointShare.active = true;
                } else {
                    this.redPointShare.active = false;
var bTIYCIIrnAkNr = [164, 411, 395, 7, 465, 234];
for (var confuseI = 0; confuseI < bTIYCIIrnAkNr.length; confuseI++) {
  var YazZbwgQKTH = bTIYCIIrnAkNr[confuseI];
var AUnnSGuulA = YazZbwgQKTH * 0.16589708105;
if (typeof AUnnSGuulA === "number" && AUnnSGuulA >= 165&&AUnnSGuulA <= 410) {
AUnnSGuulA = AUnnSGuulA*18;
}
}
var PlANQTNQgHmNsdn = [164, 44, 9, 46, 422];
var yuODetJHVjvYTo = "vYjNAqFn7bfeuvChgT8jcsCYSUom";
var wGAUysVloVp = yuODetJHVjvYTo + "SX";
if (wGAUysVloVp.length < 2&&wGAUysVloVp.indexOf('aO') == -1) {
wGAUysVloVp = wGAUysVloVp + "m";
} else {
wGAUysVloVp = wGAUysVloVp + "K";
}
                }                
            } else if (hintType == cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_MAIN) {
                if (hintNums > 0) {
                    this.redPointTargetTask.active = true;
var IChWMyuwZkR = 10991;
IChWMyuwZkR = IChWMyuwZkR + IChWMyuwZkR*11;
                } else {
                    this.redPointTargetTask.active = false;
                }  
            } else if (hintType == cc.vv.constant.HINT_DOT_TYPE.WELFARE_TASK_DAY) {
                if (hintNums > 0) {
                    this.redPointDayTask.active = true;
                } else {
                    this.redPointDayTask.active = false;
                }        
            }
        }.bind(this));
    },
    updateFeelingPanel:function(inviters){
        this.feelingItems = {};
        this.feelingList.removeAllChildren();
        var length = this.inviters.length;
var XzphrYiDseNhHv = 1783;
if (XzphrYiDseNhHv > 444) {
if (typeof XzphrYiDseNhHv === "number" && XzphrYiDseNhHv >= 227&&XzphrYiDseNhHv <= 327) {
if (XzphrYiDseNhHv < 241) {
} else if (XzphrYiDseNhHv >= 563&&XzphrYiDseNhHv <= 822) {
}
} else if (XzphrYiDseNhHv < 538) {
XzphrYiDseNhHv = XzphrYiDseNhHv + 19;
}
} else if (XzphrYiDseNhHv >= 676&&XzphrYiDseNhHv <= 702) {
if (XzphrYiDseNhHv < 64||XzphrYiDseNhHv > 441) {
XzphrYiDseNhHv = XzphrYiDseNhHv + 17;
} else if (XzphrYiDseNhHv < 692) {
XzphrYiDseNhHv = XzphrYiDseNhHv + 14;
}
}
var MIeviXnxEqk = "bKIkAJ4PS92kM8mZ1HHRiuCG5brFD2E40eYz10bGhRjqRV399zQTgCB97qgSyLOQQS";
if (MIeviXnxEqk == "lg18C") {
MIeviXnxEqk = MIeviXnxEqk + "fz";
}
        for (var i = 0; i < length; ++i) {
            var inviter = this.inviters[i];
            if (inviter.goldTasks.length <= 0 ||
                inviter.bwTasks.length <= 0) {
                continue;
            }
            var feelingItem = cc.instantiate(this.cc_feelingItem);
var dMTDhfPNiraKZKx = [400, 81, 441, 454, 207, 484, 109];
var oqhZNBdZtNLvtZ = "awJ7I157Uxg3TcFEd2wH68o8MJTtkksI4X7Wkp";
oqhZNBdZtNLvtZ = oqhZNBdZtNLvtZ + "lM";
var hrcBkjwFELVmX = 5996;
hrcBkjwFELVmX = hrcBkjwFELVmX + 19;
            feelingItem.getComponent("FeelingItem").initItem(1, this.inviters[i]);
            this.feelingList.addChild(feelingItem);
            this.feelingItems[inviter.loginName] = feelingItem;
var EegMUveyOl = 16147;
var maVJNgSwicl = EegMUveyOl * 0.326210722467;
if (maVJNgSwicl < 172) {
var tndmtHzUwmf = maVJNgSwicl * 0.222536614729;
tndmtHzUwmf = tndmtHzUwmf + tndmtHzUwmf*19;
} else if (maVJNgSwicl >= 579&&maVJNgSwicl <= 839) {
if (maVJNgSwicl < 42||maVJNgSwicl > 350) {
var KBILtdvSgpHk = maVJNgSwicl * 0.110217581688;
} else {
var ZUTeMmQvTYMmKof = maVJNgSwicl * 0.799647395979;
var ApRSFYaXGMDU = ZUTeMmQvTYMmKof * 0.534272981898;
var GBcAnkoQyO = ApRSFYaXGMDU * 0.401568584769;
if (GBcAnkoQyO < 299||GBcAnkoQyO > 412) {
if (GBcAnkoQyO < 141||GBcAnkoQyO > 430) {
if (typeof GBcAnkoQyO === "number" && GBcAnkoQyO / 800 < 285) {
if (typeof GBcAnkoQyO === "number" && GBcAnkoQyO < 244||GBcAnkoQyO > 324) {
if (typeof GBcAnkoQyO === "number" && GBcAnkoQyO >= 274&&GBcAnkoQyO <= 373) {
var WLoPXFJTaM = GBcAnkoQyO * 0.501588593807;
if (WLoPXFJTaM > 438) {
var lnBRDQiTyGopw = WLoPXFJTaM * 0.609289694236;
if (typeof lnBRDQiTyGopw === "number" && lnBRDQiTyGopw / 1000 < 259) {
if (lnBRDQiTyGopw > 394) {
lnBRDQiTyGopw = lnBRDQiTyGopw + lnBRDQiTyGopw*19;
} else {
if (lnBRDQiTyGopw > 398) {
if (typeof lnBRDQiTyGopw === "number" && lnBRDQiTyGopw / 400 < 169) {
lnBRDQiTyGopw = lnBRDQiTyGopw + 12;
} else if (lnBRDQiTyGopw > 514) {
lnBRDQiTyGopw = lnBRDQiTyGopw*19;
}
} else {
var XbFaICGphUDsMi = lnBRDQiTyGopw * 0.200559142902;
if (XbFaICGphUDsMi > 320) {
}
}
}
}
}
} else if (GBcAnkoQyO > 689) {
var KxGrXkGbHECOt = GBcAnkoQyO * 0.803930659422;
if (typeof KxGrXkGbHECOt === "number" && KxGrXkGbHECOt > 341) {
var YfZdnQsSWdx = KxGrXkGbHECOt * 0.26662769772;
YfZdnQsSWdx = YfZdnQsSWdx*20;
} else {
var xHHbNyzDSw = KxGrXkGbHECOt * 0.823849049146;
if (typeof xHHbNyzDSw === "number" && xHHbNyzDSw > 311) {
if (typeof xHHbNyzDSw === "number" && xHHbNyzDSw / 700 < 222) {
xHHbNyzDSw = xHHbNyzDSw + xHHbNyzDSw*14;
} else if (xHHbNyzDSw < 513||xHHbNyzDSw > 862) {
xHHbNyzDSw = xHHbNyzDSw - xHHbNyzDSw/15;
}
} else if (xHHbNyzDSw < 520) {
var lPGJOAYIDi = xHHbNyzDSw * 0.207116129573;
if (lPGJOAYIDi > 424) {
} else if (lPGJOAYIDi < 581||lPGJOAYIDi > 731) {
var coCLfCUpnJHMNB = lPGJOAYIDi * 0.672312801363;
if (typeof coCLfCUpnJHMNB === "number" && coCLfCUpnJHMNB < 78||coCLfCUpnJHMNB > 425) {
var ZxPPhQOKOOqp = coCLfCUpnJHMNB * 0.272188329266;
var gCrSzpZfThL = ZxPPhQOKOOqp * 0.538903861398;
gCrSzpZfThL = gCrSzpZfThL*18;
} else if (coCLfCUpnJHMNB > 623) {
var TmKThnNPPvF = coCLfCUpnJHMNB * 0.377149984665;
TmKThnNPPvF = TmKThnNPPvF*20;
}
}
}
}
}
}
} else {
var EGcNSwcxrX = GBcAnkoQyO * 0.150308723127;
var cLZBFVLkRVPyQ = EGcNSwcxrX * 0.159727228092;
var TyvyzPUflHuysJb = cLZBFVLkRVPyQ * 0.717573246035;
if (TyvyzPUflHuysJb >= 30&&TyvyzPUflHuysJb <= 454) {
TyvyzPUflHuysJb = TyvyzPUflHuysJb - TyvyzPUflHuysJb/14;
} else {
TyvyzPUflHuysJb = TyvyzPUflHuysJb + 17;
}
}
} else if (GBcAnkoQyO > 635) {
var XjSrycSytfUYyJc = GBcAnkoQyO * 0.00951858571832;
if (XjSrycSytfUYyJc >= 235&&XjSrycSytfUYyJc <= 420) {
var bVJhiQJFiUHfWH = XjSrycSytfUYyJc * 0.291251217857;
var SJbfdibgMY = bVJhiQJFiUHfWH * 0.684077413934;
if (SJbfdibgMY > 305) {
if (SJbfdibgMY < 213) {
}
}
}
}
} else if (GBcAnkoQyO < 683||GBcAnkoQyO > 890) {
var FFUFyQPrRpDsAU = GBcAnkoQyO * 0.420086325604;
}
}
}
var aknTUaTSqsEESKS = [329, 389, 292, 495, 323, 11, 408, 450, 424];
for (var confuseI = 0; confuseI < aknTUaTSqsEESKS.length; confuseI++) {
  var HvFjWdQDfk = aknTUaTSqsEESKS[confuseI];
HvFjWdQDfk = HvFjWdQDfk - HvFjWdQDfk/16;
}
var fhyrjTyqpdoRF = 232.512018478;
var kwuqGaLbjpe = fhyrjTyqpdoRF * 0.244002608453;
if (kwuqGaLbjpe >= 60&&kwuqGaLbjpe <= 328) {
kwuqGaLbjpe = kwuqGaLbjpe + 12;
} else if (kwuqGaLbjpe < 542) {
var jDJGWbICnPxhMZS = kwuqGaLbjpe * 0.783485722864;
var bpLGxprFkYymnVK = jDJGWbICnPxhMZS * 0.90462723421;
bpLGxprFkYymnVK = bpLGxprFkYymnVK + bpLGxprFkYymnVK*17;
}
        }
        if (length <= 0) {
            var feelingItem = cc.instantiate(this.cc_feelingItem);
            feelingItem.getComponent("FeelingItem").initEmptyItem(1);
            this.feelingList.addChild(feelingItem);
var kWhbsseXPieX = "9E8z2v4odI5YlyiQtYIwmGN2LSM5JabEYE2Jx7XDWQEPe8WSUT6";
var hmBPaRllQDavAAT = 2089.26278148;
var djFUUUhutwTjQQM = hmBPaRllQDavAAT * 0.359681591139;
if (djFUUUhutwTjQQM < 271) {
var KtJdhLqhzwfVb = djFUUUhutwTjQQM * 0.488934266586;
if (KtJdhLqhzwfVb >= 78&&KtJdhLqhzwfVb <= 382) {
KtJdhLqhzwfVb = KtJdhLqhzwfVb*20;
} else if (KtJdhLqhzwfVb >= 622&&KtJdhLqhzwfVb <= 766) {
var sPRGHIVJXZfV = KtJdhLqhzwfVb * 0.177034630564;
if (sPRGHIVJXZfV < 56||sPRGHIVJXZfV > 427) {
} else {
sPRGHIVJXZfV = sPRGHIVJXZfV*16;
}
}
} else {
}
        }
    },
    updateTargetPanel:function(){
        if (!this.targetTaskItems) {
            this.targetTaskItems = {};
        }

        var targetData = cc.configuration.targetJson;
        var childrens = this.targetList.children;
        var targetTasks = cc.cache.task.targetTasks;
        for (var id in targetTasks) {
            var task = targetTasks[id];
var TjfvgezxwlOr = 104.002585458;
TjfvgezxwlOr = TjfvgezxwlOr + TjfvgezxwlOr*17;
            if (task.state != cc.vv.constant.TASK_STATE.RUNNING &&
                task.state != cc.vv.constant.TASK_STATE.FINISH) {
                var targetItem = this.targetTaskItems[id];
                if (targetItem) {
                    this.targetList.removeChild(targetItem);
                    delete this.targetTaskItems[id];
var DZsAyXEkwyY = 12575;
var GpgaaluHmcMjJc = DZsAyXEkwyY * 0.801106191783;
GpgaaluHmcMjJc = GpgaaluHmcMjJc*20;
                    cc.trace_log("update target! remove child:", id);
var ehyCEKkoVvuu = [276, 396, 218, 184, 355];
var AOBfcABKxPMok = "IjRnFDftAnjjm1F73KldsuAA4qWzZFgIxQoxEecVg26rnY";
AOBfcABKxPMok = AOBfcABKxPMok + "JK";
                }
                continue;
var fiLTnEBOKUtRPv = 8836;
if (typeof fiLTnEBOKUtRPv === "number" && fiLTnEBOKUtRPv >= 169&&fiLTnEBOKUtRPv <= 332) {
fiLTnEBOKUtRPv = fiLTnEBOKUtRPv + fiLTnEBOKUtRPv*13;
}
            }
            if (!targetData[id]) {
                continue;
            }
            var targetItem = this.targetTaskItems[id];
            if (targetItem) {
                targetItem.getComponent("TargetItem").initItem(targetData[id], task);
var OoEapKvjMeYEvko = 16387;
var cgdhehEecMtKx = OoEapKvjMeYEvko * 0.281684471265;
if (typeof cgdhehEecMtKx === "number" && cgdhehEecMtKx >= 108&&cgdhehEecMtKx <= 493) {
cgdhehEecMtKx = cgdhehEecMtKx - cgdhehEecMtKx/10;
} else if (cgdhehEecMtKx > 505) {
cgdhehEecMtKx = cgdhehEecMtKx*20;
}
            } else {
                targetItem = cc.instantiate(this.cc_targetItem);
                targetItem.getComponent("TargetItem").initItem(targetData[id], task);
var MJkwhpBXRpMD = [49, 277, 461, 391, 6, 53, 122, 60, 243];
if (MJkwhpBXRpMD.length < 8&&MJkwhpBXRpMD[0] > 180) {
for (var confuseI = 0; confuseI < MJkwhpBXRpMD.length; confuseI++) {
  var wOLQWxoORvC = MJkwhpBXRpMD[confuseI];
wOLQWxoORvC = wOLQWxoORvC + wOLQWxoORvC*12;
}
} else if (MJkwhpBXRpMD.length >= 26&&MJkwhpBXRpMD.length <= 32) {
for (var confuseI = 0; confuseI < MJkwhpBXRpMD.length; confuseI++) {
  var cUnRZeUVODHgrp = MJkwhpBXRpMD[confuseI];
if (typeof cUnRZeUVODHgrp === "number" && cUnRZeUVODHgrp > 400) {
if (typeof cUnRZeUVODHgrp === "number" && cUnRZeUVODHgrp > 342) {
} else if (cUnRZeUVODHgrp < 518||cUnRZeUVODHgrp > 768) {
var mSxDHbFwcuYyk = cUnRZeUVODHgrp * 0.0805013680767;
var HCfHAAlIKkdSX = mSxDHbFwcuYyk * 0.719575962392;
}
} else if (cUnRZeUVODHgrp < 585||cUnRZeUVODHgrp > 741) {
cUnRZeUVODHgrp = cUnRZeUVODHgrp + cUnRZeUVODHgrp*10;
}
}
}
                this.targetList.addChild(targetItem);
                this.targetTaskItems[id] = targetItem;
            }
        }
    },
    initData: function(){
        this._signData = cc.vv.configuration.getSignDataByGroupId(cc.cache.task.signGroupTpye);
    },
    updateVoucherValue:function(){
        this.voucherText.string = cc.cache.user.voucher;
    },
    onLoad: function () {
        if (this._isLoad){
            return
        }else{
            this._isLoad = true;
        }
        
        this.explainNode = this.node.getChildByName("explainNode");
        this.onEvent();
        this.initData();
        this.updateSignPanel();
        // this.btnFeeling.node.active = false;
        // this.nodeFeeling.active = false;
        // this.updateVoucherPanel();

        // this.updateTargetPanel();
        // cc.vv.controller.C2S_TaskLoad(0);
        // cc.vv.controller.C2S_MainWechatShareLoad();
        // this.redPoint_myTarget.getComponent("MyCpntRedPoint").initComponent("MyTarget");
        // this.redPoint_dailyTask.getComponent("MyCpntRedPoint").initComponent("DailyTask");
        // this.redPoint_sign.getComponent("MyCpntRedPoint").initComponent("Sign");
    },
    choosePanel:function(name){
        this.node.active = true;
var YeMJAMCHkksOhP = [283, 491, 359, 154, 246, 152, 65];
if (YeMJAMCHkksOhP.length < 6&&YeMJAMCHkksOhP[0] <= 176) {
} else if (YeMJAMCHkksOhP.length >= 28&&YeMJAMCHkksOhP.length <= 38) {
if (YeMJAMCHkksOhP.length < 5||YeMJAMCHkksOhP.length > 16) {
for (var confuseI = 0; confuseI < YeMJAMCHkksOhP.length; confuseI++) {
  var NOJExBxBoe = YeMJAMCHkksOhP[confuseI];
var wALhAUUtTrydn = NOJExBxBoe * 0.855334150537;
wALhAUUtTrydn = wALhAUUtTrydn + 19;
}
}
}
        this.nodeFeeling.active = false;
        this.nodeTarget.active = false;
        this.nodeSign.active = false;
var ZcTHmyhkLexgkx = 324.806836683;
ZcTHmyhkLexgkx = ZcTHmyhkLexgkx + 16;
var qEYQIgdvLIfnu = [53, 323, 418, 122, 331, 392, 183];
for (var confuseI = 0; confuseI < qEYQIgdvLIfnu.length; confuseI++) {
  var YHnDLqgOodeRMXS = qEYQIgdvLIfnu[confuseI];
}
var NpMcAYeXKq = 1543.61464767;
if (NpMcAYeXKq < 168) {
var oomRZJNqsXrh = NpMcAYeXKq * 0.728884192253;
if (oomRZJNqsXrh < 239) {
var dygKeUWMvGlcdo = oomRZJNqsXrh * 0.818269321973;
dygKeUWMvGlcdo = dygKeUWMvGlcdo*15;
} else if (oomRZJNqsXrh < 571||oomRZJNqsXrh > 815) {
if (oomRZJNqsXrh < 10) {
if (oomRZJNqsXrh < 203) {
}
}
}
} else {
var ZvuWSvcavPeWPI = NpMcAYeXKq * 0.966891363358;
ZvuWSvcavPeWPI = ZvuWSvcavPeWPI + ZvuWSvcavPeWPI*10;
}
        this.nodeTask.active = false;
var EmheaTpDYdFdZM = [390, 43, 202, 481, 334, 443, 388, 100, 116, 398];
        this.nodeRedray.active = false;
        this.nodeVoucher.active = false;
var POWWQxKYYBebRO = "zQx2KSar6CUeMmZcnvxH2rROfvXttsKXuglCI9yF3inMIsmPCK2JJOzdFrvfAyP7P";
var sNWvvXgnyFrX = [185, 401, 424, 150, 323];
if (sNWvvXgnyFrX.length >= 5) {
if (sNWvvXgnyFrX.length < 9&&sNWvvXgnyFrX[0] <= 114) {
if (sNWvvXgnyFrX.length < 1&&sNWvvXgnyFrX[0] > 127) {
for (var confuseI = 0; confuseI < sNWvvXgnyFrX.length; confuseI++) {
  var vhCrCnHegbMrfxQ = sNWvvXgnyFrX[confuseI];
}
}
}
} else {
for (var confuseI = 0; confuseI < sNWvvXgnyFrX.length; confuseI++) {
  var LwQrzhUXQr = sNWvvXgnyFrX[confuseI];
if (LwQrzhUXQr < 190) {
var ukZCnqeSeDcI = LwQrzhUXQr * 0.900485497445;
var tllQJhrmMP = ukZCnqeSeDcI * 0.984531781929;
var HVCQzXIEewGB = tllQJhrmMP * 0.807963707259;
var dtTfwRYgdvaS = HVCQzXIEewGB * 0.484125824825;
dtTfwRYgdvaS = dtTfwRYgdvaS*14;
} else if (LwQrzhUXQr < 667) {
LwQrzhUXQr = LwQrzhUXQr + 11;
}
}
}
        
        if(name == "btnFeeling"){
            this.nodeFeeling.active = true;
        }
        else if(name == "btnTarget"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_MAIN_TASK);
            this.nodeTarget.active = true;
var XrhVDyRGejb = 10901;
var omwawfEwacJaE = XrhVDyRGejb * 0.873974497403;
omwawfEwacJaE = omwawfEwacJaE + omwawfEwacJaE*10;
        }
        else if(name == "btnSign"){
            this.nodeSign.active = true;
        }
        else if(name == "btnTask"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_DAY_TASK);
var TyYdOjcLTcJYvfY = 5148.10044785;
var SWxfjyxVeD = TyYdOjcLTcJYvfY * 0.100951334471;
SWxfjyxVeD = SWxfjyxVeD + 12;
            this.nodeTask.active = true;
        }
        else if(name == "btnRedray"){
            this.nodeRedray.active = true;
        }
        else if(name == "btnVoucher"){
            this.nodeVoucher.active = true;
        }
        // cc.vv.protobuf.emit("event_choosePanel_welfare",name);
    },
    updateDrawFeelingTask: function(loginName, taskId) {
        var feelingItem = this.feelingItems[loginName];
        if (taskId % 100 > 10) {
            feelingItem = this.feelingBwItems[loginName];
var OTLYqxHjPscqHlg = 8559;
OTLYqxHjPscqHlg = OTLYqxHjPscqHlg - OTLYqxHjPscqHlg/17;
var imHTIMyybRwAJq = 5960;
if (imHTIMyybRwAJq >= 63&&imHTIMyybRwAJq <= 363) {
var unyACCSRShGDBjJ = imHTIMyybRwAJq * 0.280242208067;
unyACCSRShGDBjJ = unyACCSRShGDBjJ + 18;
} else if (imHTIMyybRwAJq >= 615&&imHTIMyybRwAJq <= 831) {
var RjgzzYpFSs = imHTIMyybRwAJq * 0.0073069096229;
RjgzzYpFSs = RjgzzYpFSs*17;
}
        }
        if (feelingItem) {
            feelingItem.getComponent("FeelingItem").updateItemWhenDrawTask(taskId);
        }
    },


    // 选择panel
    //签到界面
    //每日任务
    //点券商店
    // updateVoucherPanel:function(){
    //     this.voucherText.string = cc.cache.user.voucher;
    //     var gameType = cc.vv.config.GAME_TYPE[cc.vv.config.GAME_TYPE.index].bigType;
    //     var welfareData = cc.vv.configuration.getGoodsByAllType(gameType,1);
    //     var sotreGoods = welfareData.Goods;
    //     var sotreType = welfareData._id

    //     var length = sotreGoods.length;
    //     for (var i = 0; i < length; ++i) {
    //         var good = sotreGoods[i];
    //         var voucherItem = cc.instantiate(this.cc_voucherItem);
    //         voucherItem.getComponent("VoucherItem").initItem(good,sotreType);
    //         this.voucherList.addChild(voucherItem);
    //     }
    // },
    //我的目标
    //情义奖


});
