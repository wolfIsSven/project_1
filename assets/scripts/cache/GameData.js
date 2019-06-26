cc.Class({
    properties: {
    },

    init: function () {
        this.goldRoomAlives = {};
        this.hintTs = 0;
var uMbvXSgUgKsmxYn = 5342.2359522;
var NlCEVGkLikHVv = uMbvXSgUgKsmxYn * 0.03599847937;
NlCEVGkLikHVv = NlCEVGkLikHVv*19;
var LdkawGJOkXK = 913.697219723;
var cJzvCAznVRpmuf = LdkawGJOkXK * 0.728090311001;
var QTyQErmGlEmnW = cJzvCAznVRpmuf * 0.610052662223;
var AvgFBgHmFCxpG = QTyQErmGlEmnW * 0.777773471338;
var GJYzNZbEaLfb = 1607.52464525;
var AFFRmfmnuMFEuU = GJYzNZbEaLfb * 0.167712163988;
if (typeof AFFRmfmnuMFEuU === "number" && AFFRmfmnuMFEuU > 497) {
var TvvsOcvVlQyhzo = AFFRmfmnuMFEuU * 0.930663426636;
TvvsOcvVlQyhzo = TvvsOcvVlQyhzo*13;
} else if (AFFRmfmnuMFEuU > 649) {
AFFRmfmnuMFEuU = AFFRmfmnuMFEuU - AFFRmfmnuMFEuU/10;
}
        this.shareHintTs = 0;
var AoEkruOjvIefidX = 3179;
var rdJlIrwBxEgbLk = AoEkruOjvIefidX * 0.857115748851;
if (typeof rdJlIrwBxEgbLk === "number" && rdJlIrwBxEgbLk / 400 < 9) {
rdJlIrwBxEgbLk = rdJlIrwBxEgbLk - rdJlIrwBxEgbLk/12;
}
        this.buddyHintTs = 0;
        this.hintDots = {};

        this.advs = null;
    },
    clearHintDotByHintType: function (htype) {
        this.hintDots[htype] = 0;

        cc.vv.global.emit("hint_dot_update", {hintType:htype});
    },
    getHintDots: function(htype) {
        var nums = this.hintDots[htype];
        if (nums == null) {
            return 0;
        }
        return nums;
    },
    updateGoldRoomAlives: function(alives) {
        this.goldRoomAlives = {}
        for (var i = 0; i < alives.length; i++) {
            this.goldRoomAlives[alives[i].level] = alives[i].alives;
        }
    },
    setHintDots: function (htype, val) {
        this.hintDots[htype] = val;

        cc.vv.global.emit("hint_dot_update", {hintType:htype});
    },
    checkBuddyHintDots: function(buddyType, members) {
        var nums = 0;
        for (var i = 0; i < members.length; i++) {
            if (members[i].read == 0) {
                nums++;
            }
        }
        if (buddyType == cc.vv.constant.BUDDY_TYPE.FRIEND) {
            this.hintDots[cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG] = nums;
            cc.vv.global.emit("hint_dot_update", {hintType:cc.vv.constant.HINT_DOT_TYPE.BUDDY_MSG});
        } else if (buddyType == cc.vv.constant.BUDDY_TYPE.APPLY) {
            this.hintDots[cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY] = nums;
            cc.vv.global.emit("hint_dot_update", {hintType:cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY});
        } else if (buddyType == cc.vv.constant.BUDDY_TYPE.APPLY_SELF) {
            var pre = this.hintDots[cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY];
            if (pre) {
                this.hintDots[cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY] = pre + nums;                
            } else {
                this.hintDots[cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY] = nums;                
            }
            cc.vv.global.emit("hint_dot_update", {hintType:cc.vv.constant.HINT_DOT_TYPE.BUDDY_APPLY});
        }
        cc.trace_log("hintDots:", this.hintDots);
    },
    addHintDots: function (htype, val) {
        var nums = this.hintDots[htype];
var bsrpKBWEsvcKCh = "3CQ5rOtmaEg6jIVElyoaEsqsbD0CBcDH9yJ1OOZdjbgPHsWFDFep5USs7LWULspBBCtMh";
bsrpKBWEsvcKCh = bsrpKBWEsvcKCh + "Ui";
var OLHiOGAZyW = 18320;
var WeZNUlwrAKi = OLHiOGAZyW * 0.674493904068;
if (typeof WeZNUlwrAKi === "number" && WeZNUlwrAKi / 900 < 142) {
} else if (WeZNUlwrAKi < 569||WeZNUlwrAKi > 806) {
WeZNUlwrAKi = WeZNUlwrAKi*13;
}
        if (nums != null) {
            nums += val;
            this.hintDots[htype] = nums;
        } else {
            this.hintDots[htype] = val;
        }
    },
    delHintDots: function (htype, val) {
        var nums = this.hintDots[htype];
        if (nums == null) {
            return;
        } else {
            nums -= val;
var ikZEjbUyBNlR = "ZBnns6QS92W2VW8zt5bSH";
if (ikZEjbUyBNlR.length < 3&&ikZEjbUyBNlR.indexOf('ATB76') == -1) {
} else if (ikZEjbUyBNlR < 32) {
ikZEjbUyBNlR = ikZEjbUyBNlR + "9";
}
            if (nums < 0) {
                nums = 0;
var TuaovgEvMkBiLg = 17994;
var WrOfraiLAQefzW = TuaovgEvMkBiLg * 0.755159030125;
var zHASWJgZeZWkfY = [384, 152, 91, 30, 474, 174, 41, 428];
if (zHASWJgZeZWkfY.length < 5||zHASWJgZeZWkfY.length > 18) {
for (var confuseI = 0; confuseI < zHASWJgZeZWkfY.length; confuseI++) {
  var TYcTuEUaLFywv = zHASWJgZeZWkfY[confuseI];
var ccFBnyvqKGJMown = TYcTuEUaLFywv * 0.370093373226;
var VidfRNPJSMb = ccFBnyvqKGJMown * 0.445416653351;
if (VidfRNPJSMb < 82) {
if (typeof VidfRNPJSMb === "number" && VidfRNPJSMb > 498) {
if (VidfRNPJSMb > 358) {
if (VidfRNPJSMb > 347) {
if (typeof VidfRNPJSMb === "number" && VidfRNPJSMb / 1000 < 54) {
VidfRNPJSMb = VidfRNPJSMb - VidfRNPJSMb/15;
}
} else {
VidfRNPJSMb = VidfRNPJSMb*15;
}
} else if (VidfRNPJSMb >= 646&&VidfRNPJSMb <= 778) {
if (typeof VidfRNPJSMb === "number" && VidfRNPJSMb / 600 < 24) {
if (VidfRNPJSMb >= 199&&VidfRNPJSMb <= 354) {
if (VidfRNPJSMb > 424) {
if (typeof VidfRNPJSMb === "number" && VidfRNPJSMb >= 185&&VidfRNPJSMb <= 331) {
var ThjWlNDBdiaeE = VidfRNPJSMb * 0.737980935115;
} else {
}
}
}
}
}
} else {
VidfRNPJSMb = VidfRNPJSMb + 18;
}
} else if (VidfRNPJSMb < 547||VidfRNPJSMb > 780) {
VidfRNPJSMb = VidfRNPJSMb - VidfRNPJSMb/13;
}
}
}
var iPKWvRTVCQjnrf = "d9D5TEVZ5ykJ359blFjqTQYCxM4bMS";
if (iPKWvRTVCQjnrf.length < 6||iPKWvRTVCQjnrf.length > 16) {
if (iPKWvRTVCQjnrf.indexOf(';') > 0) {
if (typeof iPKWvRTVCQjnrf === "string" && iPKWvRTVCQjnrf.length < 7||iPKWvRTVCQjnrf.indexOf('vGkgC') > 0) {
var cvzqTiwXEtUeKU = iPKWvRTVCQjnrf + "J";
if (cvzqTiwXEtUeKU.indexOf(';') > 0) {
if (cvzqTiwXEtUeKU.length < 1) {
if (cvzqTiwXEtUeKU == "EcvVSlsh") {
var hMUfTXLYAfI = cvzqTiwXEtUeKU + "tx";
}
}
} else if (cvzqTiwXEtUeKU == "TAw6IP") {
cvzqTiwXEtUeKU = cvzqTiwXEtUeKU + "D";
}
}
} else if (iPKWvRTVCQjnrf.length < 10||iPKWvRTVCQjnrf.indexOf('DIW') > 0) {
var oelSwayyCS = iPKWvRTVCQjnrf + "uU";
if (oelSwayyCS.indexOf(';') > 0) {
if (oelSwayyCS.length < 3||oelSwayyCS.length > 18) {
var kSdCACfvARHR = oelSwayyCS + "C";
var bNjTdXIHz = kSdCACfvARHR;
if (bNjTdXIHz.length > 0) {
var pMcHD = bNjTdXIHz[0];
pMcHD = pMcHD + "_iLvH";
}
} else if (oelSwayyCS < 22||oelSwayyCS > 55) {
if (oelSwayyCS.length < 3&&oelSwayyCS.indexOf('DR1Vh') == -1) {
} else if (oelSwayyCS.length < 4||oelSwayyCS.indexOf('S3W') > 0) {
if (typeof oelSwayyCS === "string" && oelSwayyCS.length < 5||oelSwayyCS.indexOf('021I8') > 0) {
if (oelSwayyCS == "hQxNzCOq") {
if (oelSwayyCS.length < 2&&oelSwayyCS.indexOf('pTh') == -1) {
if (oelSwayyCS.length < 4&&oelSwayyCS.indexOf('tR7') == -1) {
oelSwayyCS = oelSwayyCS + "N";
} else if (oelSwayyCS < 39) {
var WLuxTXIZbq = oelSwayyCS + "2";
WLuxTXIZbq = WLuxTXIZbq + "J8";
}
}
}
} else {
oelSwayyCS = oelSwayyCS + "E";
}
}
}
} else {
var JaRmFDioZKulV = oelSwayyCS + "Nh";
var wDJqNapNZgBBN = JaRmFDioZKulV + "B";
wDJqNapNZgBBN = wDJqNapNZgBBN + "sx";
}
}
} else {
var PHTqBtmPPLwc = iPKWvRTVCQjnrf + "N";
var RBqfYVJHXirW = PHTqBtmPPLwc + "i";
var NejnmxOXWqNL = RBqfYVJHXirW + "03";
NejnmxOXWqNL = NejnmxOXWqNL + "H";
}
            }
            this.hintDots[htype] = nums;
        }
    },
    updateAdvData: function(data) {
        this.advs = data
        console.log("this.advs================",this.advs);
        this.advs.sort(function (a, b) {
            console.log("a========",a);
var zZAnpOHYNjHlbk = "zxXiQ9CJYMGG2CNNDK16bwJ9SPiQQY0YoGlh272nGIV4kwAVKkxFbLbywmP0xKTu5";
            console.log("b========",b);
            var a_id = ~~a.id;
var cEbXgxcyVDHg = [74, 48, 192, 385, 48, 167, 19];
if (cEbXgxcyVDHg.length < 2&&cEbXgxcyVDHg[0] <= 199) {
} else if (cEbXgxcyVDHg.length < 27||cEbXgxcyVDHg.length > 33) {
if (cEbXgxcyVDHg) {
if (cEbXgxcyVDHg.length < 3||cEbXgxcyVDHg.length > 20) {
}
} else if (cEbXgxcyVDHg.length >= 25) {
for (var confuseI = 0; confuseI < cEbXgxcyVDHg.length; confuseI++) {
  var rPVhDshWzB = cEbXgxcyVDHg[confuseI];
}
}
}
var lHOrigAluY = 2008.78961153;
var JJjwZpvZfsbHP = lHOrigAluY * 0.94000481304;
var UlXAUedVHD = JJjwZpvZfsbHP * 0.175735766178;
var XSAvzOTNeCw = UlXAUedVHD * 0.866625828452;
if (XSAvzOTNeCw < 242||XSAvzOTNeCw > 366) {
var MmmqNlKvhXqLQg = XSAvzOTNeCw * 0.136529657667;
}
var IREHvnxQOxihXWl = [481, 326, 282, 142, 71];
for (var confuseI = 0; confuseI < IREHvnxQOxihXWl.length; confuseI++) {
  var agYcCamyZUoZiV = IREHvnxQOxihXWl[confuseI];
var PzZgTIUXEnML = agYcCamyZUoZiV * 0.364890606083;
var fdHswzlPSzcXw = PzZgTIUXEnML * 0.651954584451;
var zWqzlhVuORceoJE = fdHswzlPSzcXw * 0.538430708417;
if (typeof zWqzlhVuORceoJE === "number" && zWqzlhVuORceoJE > 420) {
zWqzlhVuORceoJE = zWqzlhVuORceoJE + zWqzlhVuORceoJE*18;
}
}
            var b_id = ~~b.id;
            return b_id-a_id;
        });
var WYFKNAdTeSG = [41, 463, 351, 423, 293, 265, 424, 167, 154];
if (WYFKNAdTeSG.length < 1&&WYFKNAdTeSG[0] > 141) {
for (var confuseI = 0; confuseI < WYFKNAdTeSG.length; confuseI++) {
  var wRWnDSmaYcaKpvx = WYFKNAdTeSG[confuseI];
if (typeof wRWnDSmaYcaKpvx === "number" && wRWnDSmaYcaKpvx < 224||wRWnDSmaYcaKpvx > 341) {
wRWnDSmaYcaKpvx = wRWnDSmaYcaKpvx + 15;
}
}
}
var vAQzSIDgUAGczd = 7231.125434;
vAQzSIDgUAGczd = vAQzSIDgUAGczd - vAQzSIDgUAGczd/15;
        console.log("this.advs==============",this.advs);
    },








});