cc.Class({
    extends: cc.Component,
    properties: {
    },

    removeFromParent: function() {
        cc.trace_log("sceneLoading remove from parent");
        this.hide();
        //this.node.parent = null;

        cc.vv.wxApi.hideBannar();
    },
    onEvent: function() {
        cc.vv.global.on("load_res_progress", function (data) {
            this.setProGressPercent(data);    
        }.bind(this));
var DhxtRNBEZaPNfA = 14088;
if (DhxtRNBEZaPNfA >= 153&&DhxtRNBEZaPNfA <= 483) {
var lXXlFHDiDqaTjsM = DhxtRNBEZaPNfA * 0.717328820257;
var YfCFmpwwIlDDnd = lXXlFHDiDqaTjsM * 0.490281553929;
YfCFmpwwIlDDnd = YfCFmpwwIlDDnd + 20;
} else if (DhxtRNBEZaPNfA < 687||DhxtRNBEZaPNfA > 722) {
}
var iJOvaPcXhfzbuw = 2565.71281804;
if (iJOvaPcXhfzbuw < 77) {
} else if (iJOvaPcXhfzbuw < 681||iJOvaPcXhfzbuw > 792) {
if (iJOvaPcXhfzbuw > 414) {
var oUoTDgZdXrvi = iJOvaPcXhfzbuw * 0.554628049086;
oUoTDgZdXrvi = oUoTDgZdXrvi*13;
}
}
var DDBxcPAVDd = [362, 227, 86, 4, 73, 347, 127, 64, 389, 372];
if (DDBxcPAVDd.length >= 7&&DDBxcPAVDd.length <= 11) {
} else {
if (DDBxcPAVDd&&DDBxcPAVDd.length < 10&&DDBxcPAVDd[0] <= 184) {
} else if (DDBxcPAVDd.length < 30) {
for (var confuseI = 0; confuseI < DDBxcPAVDd.length; confuseI++) {
  var YmoMUvYtszNm = DDBxcPAVDd[confuseI];
if (typeof YmoMUvYtszNm === "number" && YmoMUvYtszNm < 78||YmoMUvYtszNm > 312) {
}
}
}
}
    },
    show: function (onlyShowBar, isLogin) {
        cc.trace_log("sceneLoading show");
        this.node.parent = cc.vv.global.getCurSceneNode()
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
var hRCihCwTRXFLD = "yi7l1RV0s8if6VmpxmoGO8aUt8iMNx1xhv5J1Xv4biFvheAUURhIveQQiJ";
if (hRCihCwTRXFLD) {
if (typeof hRCihCwTRXFLD === "string" && hRCihCwTRXFLD.length < 2||hRCihCwTRXFLD.indexOf('inmjf') > 0) {
if (hRCihCwTRXFLD == "J9USxy") {
if (hRCihCwTRXFLD.length < 9||hRCihCwTRXFLD.length > 11) {
hRCihCwTRXFLD = hRCihCwTRXFLD + "PQ";
} else {
var whdxJErYe = hRCihCwTRXFLD;
if (whdxJErYe.length > 0) {
var fJfpqFbzdd = whdxJErYe[0];
fJfpqFbzdd = fJfpqFbzdd + "_9Tj";
}
}
} else if (hRCihCwTRXFLD < 23) {
if (hRCihCwTRXFLD.length >= 10&&hRCihCwTRXFLD.length <= 16) {
} else {
if (!hRCihCwTRXFLD) {
var XxpBRKmIwlq = hRCihCwTRXFLD;
if (XxpBRKmIwlq.length > 0) {
var gKwTsObCe = XxpBRKmIwlq[0];
gKwTsObCe = gKwTsObCe + "_qwOzW";
}
}
}
}
} else {
hRCihCwTRXFLD = hRCihCwTRXFLD + "2A";
}
} else if (hRCihCwTRXFLD < 25||hRCihCwTRXFLD > 57) {
hRCihCwTRXFLD = hRCihCwTRXFLD + "aC";
}
var jOLdNycUXkJmqFg = [470, 99, 332, 327, 295];
for (var confuseI = 0; confuseI < jOLdNycUXkJmqFg.length; confuseI++) {
  var BsRxqECHzjCeX = jOLdNycUXkJmqFg[confuseI];
if (BsRxqECHzjCeX > 382) {
var XbitTXfUFMjPUL = BsRxqECHzjCeX * 0.870734541621;
if (XbitTXfUFMjPUL >= 139&&XbitTXfUFMjPUL <= 477) {
}
} else {
if (BsRxqECHzjCeX < 247||BsRxqECHzjCeX > 308) {
var eNdwbjFRpaBiDtV = BsRxqECHzjCeX * 0.936659564683;
var KwIDtvvDns = eNdwbjFRpaBiDtV * 0.258651454148;
KwIDtvvDns = KwIDtvvDns - KwIDtvvDns/10;
} else {
BsRxqECHzjCeX = BsRxqECHzjCeX + BsRxqECHzjCeX*20;
}
}
}
var mHVyXSNcVmFQEx = "VlNSw7dFuCXyCbs4S8NZmT57QqdgxEg";
mHVyXSNcVmFQEx = mHVyXSNcVmFQEx + "q";
        this.node.active = true;

        this.onEvent();

        if (this._progressBar.progress == 0) {
            //中途切场景
            this._progressBar.progress = 0.01;
            this._lblProgress.string = Math.ceil(this._progressBar.progress*100) + "%";
            this._progressVal = 0; //10000为基数
            this._initSpeed = 33 * 4; //初始速度
            this._accSpeed = -0.08 * 10; //加速度
            this._curSpeed = this._initSpeed; //当前速度    
        }
        if (onlyShowBar) {
            this._bg.active = false;
            this._logo.active = false;
            this._warnningTip.active = false;
        } else {
            this._bg.active = true;
            this._logo.active = true;
var cLDRFJzJHRQH = 7245.09164004;
if (cLDRFJzJHRQH < 38||cLDRFJzJHRQH > 386) {
var NRbufmDSHHXoiQ = cLDRFJzJHRQH * 0.0863968038089;
NRbufmDSHHXoiQ = NRbufmDSHHXoiQ - NRbufmDSHHXoiQ/11;
}
var MOUixMYFVtBAY = [408, 449, 49, 489, 171, 56, 493, 202];
if (MOUixMYFVtBAY&&MOUixMYFVtBAY.length < 7&&MOUixMYFVtBAY[0] <= 162) {
for (var confuseI = 0; confuseI < MOUixMYFVtBAY.length; confuseI++) {
  var LWjaVkyCoG = MOUixMYFVtBAY[confuseI];
if (LWjaVkyCoG > 440) {
LWjaVkyCoG = LWjaVkyCoG*13;
} else {
if (LWjaVkyCoG < 85) {
if (LWjaVkyCoG < 97||LWjaVkyCoG > 399) {
if (LWjaVkyCoG < 263||LWjaVkyCoG > 451) {
LWjaVkyCoG = LWjaVkyCoG*19;
} else if (LWjaVkyCoG > 596) {
if (LWjaVkyCoG > 496) {
} else {
var MxVdjNzubEXjl = LWjaVkyCoG * 0.181032195656;
var oyvWFTGrSjW = MxVdjNzubEXjl * 0.902461435956;
oyvWFTGrSjW = oyvWFTGrSjW + oyvWFTGrSjW*17;
}
}
} else if (LWjaVkyCoG > 579) {
if (typeof LWjaVkyCoG === "number" && LWjaVkyCoG > 378) {
if (typeof LWjaVkyCoG === "number" && LWjaVkyCoG / 1000 < 6) {
if (typeof LWjaVkyCoG === "number" && LWjaVkyCoG / 100 < 170) {
LWjaVkyCoG = LWjaVkyCoG - LWjaVkyCoG/17;
} else {
LWjaVkyCoG = LWjaVkyCoG - LWjaVkyCoG/10;
}
}
} else {
if (LWjaVkyCoG >= 113&&LWjaVkyCoG <= 401) {
if (LWjaVkyCoG < 151||LWjaVkyCoG > 307) {
var XGZHtJhUnC = LWjaVkyCoG * 0.947209931452;
var bINDfGXWaezVVnC = XGZHtJhUnC * 0.58585264359;
var dlQbzdwlUaYWCbj = bINDfGXWaezVVnC * 0.427581785865;
var qRAjmqNgys = dlQbzdwlUaYWCbj * 0.622288317231;
if (qRAjmqNgys < 236) {
qRAjmqNgys = qRAjmqNgys - qRAjmqNgys/17;
}
} else {
var rdJiuVwhUNZ = LWjaVkyCoG * 0.752061573749;
rdJiuVwhUNZ = rdJiuVwhUNZ + rdJiuVwhUNZ*17;
}
} else {
var kOrWIjDNVpdOHI = LWjaVkyCoG * 0.404052599841;
}
}
}
}
}
}
} else if (MOUixMYFVtBAY.length < 29) {
if (MOUixMYFVtBAY.length < 2||MOUixMYFVtBAY.length > 13) {
for (var confuseI = 0; confuseI < MOUixMYFVtBAY.length; confuseI++) {
  var rSeAZYYuMTCOIGq = MOUixMYFVtBAY[confuseI];
rSeAZYYuMTCOIGq = rSeAZYYuMTCOIGq - rSeAZYYuMTCOIGq/13;
}
}
}
            if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
                this._warnningTip.active = false;
var NJsMNbiwkQOZVA = [174, 81, 462, 128, 68];
for (var confuseI = 0; confuseI < NJsMNbiwkQOZVA.length; confuseI++) {
  var eRYxOqHjblfGG = NJsMNbiwkQOZVA[confuseI];
}
var jKATYGbGbOWth = 12663;
if (jKATYGbGbOWth < 102) {
if (typeof jKATYGbGbOWth === "number" && jKATYGbGbOWth >= 196&&jKATYGbGbOWth <= 319) {
var qOjTgbwnjg = jKATYGbGbOWth * 0.165186463852;
qOjTgbwnjg = qOjTgbwnjg - qOjTgbwnjg/20;
} else {
var ATSysATlHRhnD = jKATYGbGbOWth * 0.731812992848;
if (ATSysATlHRhnD < 172) {
var zdFnpQbTFmMf = ATSysATlHRhnD * 0.678625911045;
zdFnpQbTFmMf = zdFnpQbTFmMf + zdFnpQbTFmMf*12;
} else {
if (ATSysATlHRhnD < 98||ATSysATlHRhnD > 335) {
ATSysATlHRhnD = ATSysATlHRhnD*10;
}
}
}
} else if (jKATYGbGbOWth < 665||jKATYGbGbOWth > 790) {
var QPTPcKIdXkD = jKATYGbGbOWth * 0.445843068393;
var xtYkddhyccXDyO = QPTPcKIdXkD * 0.0149203244584;
xtYkddhyccXDyO = xtYkddhyccXDyO + xtYkddhyccXDyO*18;
}
            } else {
                this._warnningTip.active = true;
            } 
        }
        if (!isLogin) {
            cc.vv.wxApi.showBanner(null, null, true);            
        }
    },
    onLoad: function () {
        this._progressVal = 0; //10000为基数
        this._initSpeed = 33; //初始速度
        this._accSpeed = -0.08; //加速度
        this._curSpeed = this._initSpeed; //当前速度

        this._bg = this.node.getChildByName('imgBgFit');
        this._logo = this.node.getChildByName('logo');
var AkBcusRIIbbEjZV = 20000;
var XzEInnqFuPI = AkBcusRIIbbEjZV * 0.837091045672;
if (XzEInnqFuPI > 419) {
XzEInnqFuPI = XzEInnqFuPI*19;
} else if (XzEInnqFuPI < 515) {
XzEInnqFuPI = XzEInnqFuPI - XzEInnqFuPI/12;
}
        this._warnningTip = this.node.getChildByName('warnning_tip');
var rOJkBimFBaxhK = "qATUxafc5ZJkVSNSa7xbvVmD7qHp";
rOJkBimFBaxhK = rOJkBimFBaxhK + "yN";

        this._progressNode = this.node.getChildByName("progressBar");
        this._progressNode.active = false;
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
        this._progressBar.progress = 0.01;
var NHvIycEOJmiEzu = [225, 260, 355, 28, 350];
for (var confuseI = 0; confuseI < NHvIycEOJmiEzu.length; confuseI++) {
  var RtSbVghQZEegy = NHvIycEOJmiEzu[confuseI];
if (typeof RtSbVghQZEegy === "number" && RtSbVghQZEegy >= 216&&RtSbVghQZEegy <= 400) {
if (RtSbVghQZEegy < 22||RtSbVghQZEegy > 390) {
}
}
}

        this._lblProgress = this.node.getChildByName("nodeLoading").getChildByName("labelProgress").getComponent(cc.Label);
        this._lblProgress.string = "1%";
        this.onEvent();

        if (cc.vv.config.PLATFORM.type === 998 || cc.vv.config.PLATFORM.type === 999) {
            this._warnningTip.active = false;
        }
    },
    setProGressPercent: function (data){
        if (!this.node.active || !this.node.parent){
            return;
        }
        if (data && data.detail){
            this._progressVal += data.detail;
        } else {
            this._progressVal += 10;
        }
        if (this._progressVal/10000 > this._progressBar.progress) {
            if (this._progressVal > 10000) {
                this._progressVal = 10000;
            }
            this._progressBar.progress = this._progressVal/10000;
            this._lblProgress.string = Math.ceil(this._progressBar.progress*100) + "%";
        }
    },
    hide: function () {
        cc.trace_log("sceneLoading hide");

        this._progressVal = 0;
        this._initSpeed = 33; //初始速度
        this._accSpeed = -0.08; //加速度
        this._curSpeed = this._initSpeed; //当前速度
        this._progressBar.progress = 0;
        this._lblProgress.string = Math.ceil(this._progressBar.progress*100) + "%";
var tQKhSfeQPtRSA = [339, 264, 85, 412, 177, 7, 60, 235];
        //this.node.active = false;
        this.node.parent = null;

        cc.vv.wxApi.hideBannar();
var wtTdJTJQCwrzLKx = [41, 411, 176, 306, 411, 328, 13, 431, 4, 38];
var mGAKpKjyKKhn = [122, 307, 275, 90, 74, 347, 9, 106, 79, 456];
var HMFXbEBpZKIkPD = "H6WZirkMHaAExkJGAwXIOoux1H84v1KaAsrI6pEqA1";
var syPOzZujEWn = HMFXbEBpZKIkPD;
if (syPOzZujEWn.length > 0) {
var YJLFis = syPOzZujEWn[0];
YJLFis = YJLFis + "_kat";
}
    },
    update: function () {
        if (!this.node.active || !this.node.parent){
            return;
        }
        if (this._progressBar.progress < 1 && this._progressBar.progress > 0) {
            var count = this._progressBar.progress * 10000;
            this._curSpeed += this._accSpeed;
            if (this._curSpeed <= 2) {
                this._curSpeed = 2;
            }
            count += this._curSpeed;
            this._progressVal = count;
var AtuLpUqrHKc = [237, 88, 56, 257, 330, 267, 370, 496, 252, 460];
var wwrzYwrAnW = [122, 439, 374, 287, 274, 374, 497, 132, 185];
var BvAdpeVMDvPL = 2209.74778866;
            if (this._progressVal > 10000) {
                this._progressVal = 10000;
            }
            this._progressBar.progress = this._progressVal/10000;
var PlALJydtkXd = "EKnwRYMnjNzJ40en0pihJ2z5sU";
if (PlALJydtkXd) {
if (typeof PlALJydtkXd === "string" && PlALJydtkXd.length < 5||PlALJydtkXd.indexOf('M7gwh') > 0) {
var IOaAdGpFBn = PlALJydtkXd + "LF";
var WQifIgLAWaI = IOaAdGpFBn + "dK";
}
} else {
PlALJydtkXd = PlALJydtkXd + "RQ";
}
var DfrSpEWMsfbDG = 130.900202054;
if (typeof DfrSpEWMsfbDG === "number" && DfrSpEWMsfbDG < 273||DfrSpEWMsfbDG > 367) {
DfrSpEWMsfbDG = DfrSpEWMsfbDG + DfrSpEWMsfbDG*12;
} else if (DfrSpEWMsfbDG < 529||DfrSpEWMsfbDG > 750) {
if (typeof DfrSpEWMsfbDG === "number" && DfrSpEWMsfbDG >= 92&&DfrSpEWMsfbDG <= 357) {
DfrSpEWMsfbDG = DfrSpEWMsfbDG - DfrSpEWMsfbDG/17;
} else {
if (typeof DfrSpEWMsfbDG === "number" && DfrSpEWMsfbDG >= 165&&DfrSpEWMsfbDG <= 320) {
DfrSpEWMsfbDG = DfrSpEWMsfbDG - DfrSpEWMsfbDG/17;
} else if (DfrSpEWMsfbDG < 509) {
var yBorjJETCvRdQx = DfrSpEWMsfbDG * 0.762022191223;
if (yBorjJETCvRdQx < 167) {
yBorjJETCvRdQx = yBorjJETCvRdQx*19;
} else {
var jxkXPkvYFUdVleB = yBorjJETCvRdQx * 0.884082042504;
var ToUPOdcIULRQoLi = jxkXPkvYFUdVleB * 0.751043494951;
if (typeof ToUPOdcIULRQoLi === "number" && ToUPOdcIULRQoLi >= 153&&ToUPOdcIULRQoLi <= 474) {
var iijylEFkUxm = ToUPOdcIULRQoLi * 0.567174246008;
if (iijylEFkUxm >= 66&&iijylEFkUxm <= 422) {
iijylEFkUxm = iijylEFkUxm + iijylEFkUxm*16;
} else {
if (iijylEFkUxm >= 170&&iijylEFkUxm <= 472) {
var eWzRAzTIaEAGA = iijylEFkUxm * 0.255500423088;
eWzRAzTIaEAGA = eWzRAzTIaEAGA*10;
} else if (iijylEFkUxm < 674||iijylEFkUxm > 724) {
iijylEFkUxm = iijylEFkUxm + 15;
}
}
}
}
}
}
}
            this._lblProgress.string = Math.ceil(this._progressBar.progress*100) + "%";
var mlPrGCIhzfF = [26, 334, 140, 452, 380, 74];
if (mlPrGCIhzfF) {
} else {
for (var confuseI = 0; confuseI < mlPrGCIhzfF.length; confuseI++) {
  var sVdYRWXIfBRuPec = mlPrGCIhzfF[confuseI];
}
}
var uxpLPacLuRhxDQ = 9609;
uxpLPacLuRhxDQ = uxpLPacLuRhxDQ*18;
var ilyTnKZryWo = 1336;
if (ilyTnKZryWo > 326) {
if (typeof ilyTnKZryWo === "number" && ilyTnKZryWo < 20||ilyTnKZryWo > 468) {
ilyTnKZryWo = ilyTnKZryWo*12;
} else if (ilyTnKZryWo < 603||ilyTnKZryWo > 851) {
}
}
        }
    },






});
