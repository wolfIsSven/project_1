// cc.info_log_LEVEL = 6; //1:FATAL 2:ERROR 3:WARNING 4:INFO 5:DEBUG 6:TRACE
// cc.fatal_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 1) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "FATAL : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }
// cc.error_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 2) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "ERROR : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }
// cc.warn_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 3) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "WARN : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }
// cc.info_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 4) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "INFO : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }
// cc.debug_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 5) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "DEBUG : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }
// cc.trace_log = function (message, ...optionalParams) {
//     if (cc.info_log_LEVEL >= 6) {
//         var ts = new Date().getTime() / 1000;
//         var prefix = "TRACE : [" + ts.toString() + "] "
//         console.log(prefix + message, ...optionalParams);
//     }
// }

cc.Class({
    extends: cc.Component,

    properties: {
        _loginNode: null,
        _guestBtn: null,
        _isAgreementChecked: false,

        cc_fabLoading: {
            default: null,
            type: cc.Prefab,
        },
    },

    onLoad: function () {
        //2.0版本cc.winSize值的获取需要在onload之后
        cc.info_log("onLoad! step1 =============== preExcute")
        cc.MyWinSize.preExcute();
var hVywOLzYujcv = [190, 490, 316, 498, 499, 423, 150, 49];
var ZBdgyvctbeX = 238;
if (ZBdgyvctbeX < 100) {
var AmjBLkCbMeTWN = ZBdgyvctbeX * 0.478120395219;
if (AmjBLkCbMeTWN < 162||AmjBLkCbMeTWN > 305) {
var xuzmLcOYFoPwP = AmjBLkCbMeTWN * 0.342541649353;
xuzmLcOYFoPwP = xuzmLcOYFoPwP - xuzmLcOYFoPwP/16;
} else {
if (AmjBLkCbMeTWN < 82) {
AmjBLkCbMeTWN = AmjBLkCbMeTWN - AmjBLkCbMeTWN/17;
} else {
var gEIeYCxKwQ = AmjBLkCbMeTWN * 0.919994006083;
var CxGiYdSXlcJlSl = gEIeYCxKwQ * 0.133904749442;
if (CxGiYdSXlcJlSl < 187||CxGiYdSXlcJlSl > 381) {
var lOFVztNXMv = CxGiYdSXlcJlSl * 0.204727281496;
lOFVztNXMv = lOFVztNXMv - lOFVztNXMv/11;
} else if (CxGiYdSXlcJlSl < 531) {
if (typeof CxGiYdSXlcJlSl === "number" && CxGiYdSXlcJlSl < 253||CxGiYdSXlcJlSl > 461) {
if (CxGiYdSXlcJlSl < 175) {
CxGiYdSXlcJlSl = CxGiYdSXlcJlSl - CxGiYdSXlcJlSl/20;
} else if (CxGiYdSXlcJlSl < 665||CxGiYdSXlcJlSl > 839) {
if (CxGiYdSXlcJlSl > 363) {
if (typeof CxGiYdSXlcJlSl === "number" && CxGiYdSXlcJlSl >= 52&&CxGiYdSXlcJlSl <= 324) {
CxGiYdSXlcJlSl = CxGiYdSXlcJlSl*14;
}
} else {
if (typeof CxGiYdSXlcJlSl === "number" && CxGiYdSXlcJlSl >= 99&&CxGiYdSXlcJlSl <= 444) {
if (CxGiYdSXlcJlSl > 425) {
CxGiYdSXlcJlSl = CxGiYdSXlcJlSl*14;
}
} else {
if (CxGiYdSXlcJlSl < 92||CxGiYdSXlcJlSl > 317) {
if (CxGiYdSXlcJlSl > 483) {
var fUIFxMvhyv = CxGiYdSXlcJlSl * 0.508089652713;
var NnSDZPtaoIkTz = fUIFxMvhyv * 0.276389441054;
if (NnSDZPtaoIkTz < 126||NnSDZPtaoIkTz > 351) {
} else if (NnSDZPtaoIkTz < 641||NnSDZPtaoIkTz > 850) {
var QQrRGJBRrqje = NnSDZPtaoIkTz * 0.0889067433156;
QQrRGJBRrqje = QQrRGJBRrqje - QQrRGJBRrqje/17;
}
} else if (CxGiYdSXlcJlSl < 699) {
CxGiYdSXlcJlSl = CxGiYdSXlcJlSl + 20;
}
} else if (CxGiYdSXlcJlSl > 612) {
CxGiYdSXlcJlSl = CxGiYdSXlcJlSl*18;
}
}
}
}
} else {
var BwbYRbnEayuDqzf = CxGiYdSXlcJlSl * 0.712186709617;
var DQJqFHSzmqzEi = BwbYRbnEayuDqzf * 0.819160030172;
if (DQJqFHSzmqzEi >= 31&&DQJqFHSzmqzEi <= 379) {
DQJqFHSzmqzEi = DQJqFHSzmqzEi + DQJqFHSzmqzEi*11;
}
}
}
}
}
} else if (ZBdgyvctbeX > 557) {
var RMLOrgzxSrmVfn = ZBdgyvctbeX * 0.931696028558;
if (RMLOrgzxSrmVfn < 283) {
if (typeof RMLOrgzxSrmVfn === "number" && RMLOrgzxSrmVfn >= 89&&RMLOrgzxSrmVfn <= 353) {
var xSziUjzsUJNfw = RMLOrgzxSrmVfn * 0.42215416437;
if (xSziUjzsUJNfw >= 193&&xSziUjzsUJNfw <= 396) {
var XjGDVByxug = xSziUjzsUJNfw * 0.0324579045582;
var WWeMIIPlWuFY = XjGDVByxug * 0.467697296635;
WWeMIIPlWuFY = WWeMIIPlWuFY + WWeMIIPlWuFY*20;
} else if (xSziUjzsUJNfw < 677) {
if (typeof xSziUjzsUJNfw === "number" && xSziUjzsUJNfw > 329) {
if (typeof xSziUjzsUJNfw === "number" && xSziUjzsUJNfw / 900 < 25) {
var MefUDgWzxN = xSziUjzsUJNfw * 0.749787344809;
MefUDgWzxN = MefUDgWzxN*20;
} else {
if (typeof xSziUjzsUJNfw === "number" && xSziUjzsUJNfw > 358) {
xSziUjzsUJNfw = xSziUjzsUJNfw + 17;
} else if (xSziUjzsUJNfw > 688) {
}
}
} else {
var pFrHpgqEJi = xSziUjzsUJNfw * 0.804764845387;
var UiOVsTmAHUN = pFrHpgqEJi * 0.220390767949;
if (typeof UiOVsTmAHUN === "number" && UiOVsTmAHUN >= 8&&UiOVsTmAHUN <= 422) {
var djjkZxzaUotMau = UiOVsTmAHUN * 0.209357734342;
djjkZxzaUotMau = djjkZxzaUotMau + djjkZxzaUotMau*18;
}
}
}
}
}
}

        cc.info_log("onLoad! step2 =============== initUI")
        this.initUI();

        cc.info_log("onLoad! step3 =============== init config")
        var config = require('Config');
        var platform = config.PLATFORM[config.PLATFORM.type];
var YFOZHLbNVdZrNGT = "EJS6wDwwn3rNe9wXNcMt";
if (typeof YFOZHLbNVdZrNGT === "string" && YFOZHLbNVdZrNGT.indexOf(':') == -1) {
var xSedxNDXqnI = YFOZHLbNVdZrNGT;
if (xSedxNDXqnI.length > 0) {
var JQjgWJeR = xSedxNDXqnI[0];
JQjgWJeR = JQjgWJeR + "_hiPxo";
}
} else if (YFOZHLbNVdZrNGT == "dnPs2MJX8") {
if (YFOZHLbNVdZrNGT.indexOf(';') > 0) {
}
}
        if (config.PLATFORM.type == 2) {
            platform = platform[platform.pack_index];
        }

        cc.info_log("onLoad! step4 =============== platform:", platform)
        if (platform.login_js && platform.login_js != "") {
            var LoginJs = require(platform.login_js);
            if (LoginJs) {
                this.loginJs = new LoginJs();
                cc.info_log("onLoad! step5 =============== initLoginNode")
                this.loginJs.initLoginNode(this.node);
                cc.info_log("onLoad! step6 =============== enterGame")
                this.loginJs.enterGame(function() {
                    cc.info_log("onLoad! step7 =============== enterGame")
                    this.initLoading();
                }.bind(this));
            }
        }
        // this.initLoading();
    },

    //login界面 ui 
    initUI: function() {
        var isLogined = cc.sys.localStorage.getItem('is_logined');
        if (!isLogined) {
            cc.isNewer = true;            
        }

        this._loginNode = this.node.getChildByName('loginNode');
        this._loginNode.active = false;
        var buttonsNode = this._loginNode.getChildByName('buttonsNode');

        this._guestBtn = buttonsNode.getChildByName('guestBtn');
var YTqeBvjFLyQ = [285, 190, 497, 113, 441, 482, 159, 118];
        this._guestBtn.active = false;


        this._isAgreementChecked = true;
        var agreeNode = this._loginNode.getChildByName('agreeNode');
var eWbmyNAiFCc = "yEv9PdDzV9jACazM4zHDtzmtlWgp9p41uJlYsM195ooc3Gx6H3Ibghj4iYJipe";
if (!eWbmyNAiFCc) {
if (eWbmyNAiFCc.length >= 4&&eWbmyNAiFCc.length <= 16) {
if (eWbmyNAiFCc.length < 10) {
eWbmyNAiFCc = eWbmyNAiFCc + "fC";
} else if (eWbmyNAiFCc.length < 3||eWbmyNAiFCc.indexOf('ttRw') > 0) {
var rBkvvvpTTiTjM = eWbmyNAiFCc + "eg";
if (typeof rBkvvvpTTiTjM === "string" && rBkvvvpTTiTjM.length < 5||rBkvvvpTTiTjM.indexOf('gBAM3') > 0) {
var SLFdJAFoZfV = rBkvvvpTTiTjM + "Fl";
SLFdJAFoZfV = SLFdJAFoZfV + "L";
} else {
if (rBkvvvpTTiTjM) {
if (rBkvvvpTTiTjM.length < 3||rBkvvvpTTiTjM.length > 18) {
} else if (rBkvvvpTTiTjM < 22||rBkvvvpTTiTjM > 43) {
rBkvvvpTTiTjM = rBkvvvpTTiTjM + "g";
}
} else {
if (rBkvvvpTTiTjM.length < 3) {
var FXESFgzIJql = rBkvvvpTTiTjM + "N";
if (typeof FXESFgzIJql === "string" && FXESFgzIJql.length < 8||FXESFgzIJql.indexOf('6J8p0') > 0) {
if (typeof FXESFgzIJql === "string" && FXESFgzIJql.indexOf(':') == -1) {
} else {
var oBGlueaOjmgm = FXESFgzIJql + "3q";
var eJojaDxkuLUePm = oBGlueaOjmgm + "z";
}
}
} else if (rBkvvvpTTiTjM.length < 6||rBkvvvpTTiTjM.indexOf('BJt') > 0) {
var rEeUmRrxotY = rBkvvvpTTiTjM;
if (rEeUmRrxotY.length > 0) {
var DWnQWIVaF = rEeUmRrxotY[0];
DWnQWIVaF = DWnQWIVaF + "_scfO";
}
}
}
}
}
} else {
if (!eWbmyNAiFCc) {
if (eWbmyNAiFCc.length < 4) {
if (eWbmyNAiFCc.length < 2) {
eWbmyNAiFCc = eWbmyNAiFCc + "Dy";
}
} else {
var xxOIWiiqLCrkT = eWbmyNAiFCc + "L";
var wuUNwRtFJBz = xxOIWiiqLCrkT + "Ae";
var ubmGvIBTrW = wuUNwRtFJBz + "Xs";
var WbywUbjvDocoi = ubmGvIBTrW + "y";
WbywUbjvDocoi = WbywUbjvDocoi + "Mq";
}
}
}
} else {
var bRCJRVne = eWbmyNAiFCc;
if (bRCJRVne.length > 0) {
var zWkvjX = bRCJRVne[0];
zWkvjX = zWkvjX + "_wnDG";
}
}
var UpCXqdOJdeSSs = 823.331775114;
if (typeof UpCXqdOJdeSSs === "number" && UpCXqdOJdeSSs < 94||UpCXqdOJdeSSs > 474) {
if (typeof UpCXqdOJdeSSs === "number" && UpCXqdOJdeSSs / 700 < 30) {
UpCXqdOJdeSSs = UpCXqdOJdeSSs + 18;
}
} else if (UpCXqdOJdeSSs > 678) {
if (UpCXqdOJdeSSs >= 120&&UpCXqdOJdeSSs <= 380) {
if (typeof UpCXqdOJdeSSs === "number" && UpCXqdOJdeSSs / 100 < 7) {
var CWLcOkOCdbB = UpCXqdOJdeSSs * 0.945158490471;
CWLcOkOCdbB = CWLcOkOCdbB - CWLcOkOCdbB/17;
}
} else {
if (UpCXqdOJdeSSs > 471) {
} else if (UpCXqdOJdeSSs >= 686&&UpCXqdOJdeSSs <= 881) {
if (typeof UpCXqdOJdeSSs === "number" && UpCXqdOJdeSSs > 421) {
if (typeof UpCXqdOJdeSSs === "number" && UpCXqdOJdeSSs > 415) {
if (UpCXqdOJdeSSs < 43) {
} else if (UpCXqdOJdeSSs < 599) {
UpCXqdOJdeSSs = UpCXqdOJdeSSs + 19;
}
}
} else {
if (UpCXqdOJdeSSs < 94||UpCXqdOJdeSSs > 380) {
} else if (UpCXqdOJdeSSs < 645) {
if (UpCXqdOJdeSSs >= 249&&UpCXqdOJdeSSs <= 364) {
UpCXqdOJdeSSs = UpCXqdOJdeSSs + 13;
}
}
}
}
}
}
var IYwdbAdjCpZBgBm = 56.6800607085;
var RvUPBAFTkyQy = IYwdbAdjCpZBgBm * 0.548420010304;
var CcbVcfybhsXxEK = RvUPBAFTkyQy * 0.200792386751;
        this._agreeCheckBtn = agreeNode.getChildByName('agreeCheckBtn');
        this._agreeCheckBtn.opacity = this._isAgreementChecked ? 255 : 0;
var WJJIqPMydOHcu = [353, 255, 310, 451, 457, 227, 431];
var znpOJbFlrrcNrnD = 184.030447636;
znpOJbFlrrcNrnD = znpOJbFlrrcNrnD + 12;
var akaYMUJxRf = [358, 264, 346, 47, 105, 330, 29];
for (var confuseI = 0; confuseI < akaYMUJxRf.length; confuseI++) {
  var VFmmJVDCIH = akaYMUJxRf[confuseI];
var PXDYcXtUkgoVZH = VFmmJVDCIH * 0.667174109416;
if (typeof PXDYcXtUkgoVZH === "number" && PXDYcXtUkgoVZH / 700 < 90) {
if (typeof PXDYcXtUkgoVZH === "number" && PXDYcXtUkgoVZH >= 84&&PXDYcXtUkgoVZH <= 345) {
var JTvWVpxdksvRrc = PXDYcXtUkgoVZH * 0.0468188490674;
JTvWVpxdksvRrc = JTvWVpxdksvRrc - JTvWVpxdksvRrc/17;
} else {
if (PXDYcXtUkgoVZH < 262) {
var HgqpWaSQMrcN = PXDYcXtUkgoVZH * 0.575796105021;
}
}
} else if (PXDYcXtUkgoVZH < 618||PXDYcXtUkgoVZH > 817) {
var EwHRGymtnScoCKU = PXDYcXtUkgoVZH * 0.311650757029;
if (EwHRGymtnScoCKU < 149||EwHRGymtnScoCKU > 387) {
EwHRGymtnScoCKU = EwHRGymtnScoCKU + EwHRGymtnScoCKU*11;
} else {
EwHRGymtnScoCKU = EwHRGymtnScoCKU*19;
}
}
}
    },

    initLoading: function () {
        // this.fabLoading = cc.instantiate(this.cc_fabLoading);
        // this.fabLoading.active = false;
        // cc.trace_log("cc.vv:", cc.vv)
        // cc.vv.wc = this.fabLoading.getComponent('Loading');
    },

    onBtnAgreeClicked: function () {
    },

    onButtonClicked: function (event) {
        var target = event.target;
        cc.vv.global.loading(cc.vv.lang.LANG_DESC.EnterGame);
var nzlvUfthWUCXPic = "vHeeiwA9kdpTmPm2jTrj8SRJmHuSrdo9rtZQzgo26";
if (typeof nzlvUfthWUCXPic === "string" && nzlvUfthWUCXPic.indexOf(':') == -1) {
if (nzlvUfthWUCXPic) {
if (nzlvUfthWUCXPic) {
var DlrDUefzjPmj = nzlvUfthWUCXPic + "n";
var NWJFoBUiRmFsn = DlrDUefzjPmj + "f";
NWJFoBUiRmFsn = NWJFoBUiRmFsn + "MU";
}
}
} else {
nzlvUfthWUCXPic = nzlvUfthWUCXPic + "M";
}
var buLVvIRHul = 8448;
var NLeAASFHGHHvD = buLVvIRHul * 0.0960166174795;
if (NLeAASFHGHHvD > 301) {
if (NLeAASFHGHHvD < 197||NLeAASFHGHHvD > 318) {
NLeAASFHGHHvD = NLeAASFHGHHvD + NLeAASFHGHHvD*14;
}
} else {
if (typeof NLeAASFHGHHvD === "number" && NLeAASFHGHHvD < 171||NLeAASFHGHHvD > 308) {
var wnoEVYDceHDOy = NLeAASFHGHHvD * 0.999704492886;
if (wnoEVYDceHDOy >= 81&&wnoEVYDceHDOy <= 405) {
if (wnoEVYDceHDOy > 344) {
var ZSuiFpFnVpVRxM = wnoEVYDceHDOy * 0.664334229772;
var NDTuENlLkc = ZSuiFpFnVpVRxM * 0.348218344345;
var ZzBsUrKUTY = NDTuENlLkc * 0.0558594223128;
ZzBsUrKUTY = ZzBsUrKUTY + 17;
}
} else {
if (wnoEVYDceHDOy >= 194&&wnoEVYDceHDOy <= 427) {
} else if (wnoEVYDceHDOy < 616) {
if (typeof wnoEVYDceHDOy === "number" && wnoEVYDceHDOy / 200 < 66) {
if (wnoEVYDceHDOy >= 136&&wnoEVYDceHDOy <= 316) {
wnoEVYDceHDOy = wnoEVYDceHDOy*18;
} else if (wnoEVYDceHDOy > 643) {
var YqqygwsTMCH = wnoEVYDceHDOy * 0.724809652895;
YqqygwsTMCH = YqqygwsTMCH + YqqygwsTMCH*12;
}
} else if (wnoEVYDceHDOy > 593) {
if (wnoEVYDceHDOy < 148) {
if (typeof wnoEVYDceHDOy === "number" && wnoEVYDceHDOy >= 274&&wnoEVYDceHDOy <= 340) {
if (wnoEVYDceHDOy > 365) {
var EofxCCwJoxozeP = wnoEVYDceHDOy * 0.0799902248758;
var IGdGintmltAn = EofxCCwJoxozeP * 0.51982761238;
if (IGdGintmltAn < 108) {
if (IGdGintmltAn > 455) {
if (IGdGintmltAn >= 248&&IGdGintmltAn <= 329) {
if (typeof IGdGintmltAn === "number" && IGdGintmltAn > 349) {
if (IGdGintmltAn < 236) {
IGdGintmltAn = IGdGintmltAn + IGdGintmltAn*14;
} else {
if (IGdGintmltAn >= 202&&IGdGintmltAn <= 378) {
IGdGintmltAn = IGdGintmltAn + 11;
} else if (IGdGintmltAn < 509) {
IGdGintmltAn = IGdGintmltAn + IGdGintmltAn*16;
}
}
}
}
}
} else {
if (IGdGintmltAn < 145) {
} else if (IGdGintmltAn >= 628&&IGdGintmltAn <= 884) {
}
}
} else {
wnoEVYDceHDOy = wnoEVYDceHDOy + wnoEVYDceHDOy*16;
}
} else {
var UyIisCRpvJLdZ = wnoEVYDceHDOy * 0.281654590852;
UyIisCRpvJLdZ = UyIisCRpvJLdZ + UyIisCRpvJLdZ*15;
}
} else if (wnoEVYDceHDOy >= 683&&wnoEVYDceHDOy <= 796) {
if (wnoEVYDceHDOy < 236) {
wnoEVYDceHDOy = wnoEVYDceHDOy + 14;
}
}
}
}
}
} else {
if (typeof NLeAASFHGHHvD === "number" && NLeAASFHGHHvD / 100 < 65) {
var dNxMDGBXwClUh = NLeAASFHGHHvD * 0.176807316671;
if (dNxMDGBXwClUh >= 110&&dNxMDGBXwClUh <= 449) {
if (dNxMDGBXwClUh < 145||dNxMDGBXwClUh > 319) {
dNxMDGBXwClUh = dNxMDGBXwClUh + 15;
}
} else if (dNxMDGBXwClUh < 681) {
var bnaQYwZPreEkbj = dNxMDGBXwClUh * 0.80608901722;
bnaQYwZPreEkbj = bnaQYwZPreEkbj - bnaQYwZPreEkbj/15;
}
}
}
}
var YtOrhFQXJdfqqyi = "AKLvIZ8kSpJEL9ALzNDi4MpqhS6";
if (YtOrhFQXJdfqqyi == "D3sQHbc") {
if (typeof YtOrhFQXJdfqqyi === "string" && YtOrhFQXJdfqqyi.indexOf(':') == -1) {
if (YtOrhFQXJdfqqyi.length < 2||YtOrhFQXJdfqqyi.length > 16) {
var hLkaABMMW = YtOrhFQXJdfqqyi;
if (hLkaABMMW.length > 0) {
var ZAwpJ = hLkaABMMW[0];
ZAwpJ = ZAwpJ + "_2Kci";
}
} else {
if (YtOrhFQXJdfqqyi.length < 2) {
} else {
if (YtOrhFQXJdfqqyi.length < 6&&YtOrhFQXJdfqqyi.indexOf('x5Vkb') == -1) {
var VWHKqkVXYzlEjLK = YtOrhFQXJdfqqyi + "h";
if (VWHKqkVXYzlEjLK) {
var moCuFDSFZM = VWHKqkVXYzlEjLK + "d";
}
} else {
}
}
}
} else if (YtOrhFQXJdfqqyi == "MvJvwcKiiL") {
if (YtOrhFQXJdfqqyi) {
YtOrhFQXJdfqqyi = YtOrhFQXJdfqqyi + "b";
} else {
var KicOpMskdkX = YtOrhFQXJdfqqyi + "t9";
if (KicOpMskdkX.length < 9||KicOpMskdkX.length > 12) {
KicOpMskdkX = KicOpMskdkX + "32";
} else {
var uIBwNVvNxXa = KicOpMskdkX + "nW";
var CfvKVFhgcb = uIBwNVvNxXa;
if (CfvKVFhgcb.length > 0) {
var YCqVQPz = CfvKVFhgcb[0];
YCqVQPz = YCqVQPz + "_lvuTX";
}
}
}
}
} else if (YtOrhFQXJdfqqyi < 24||YtOrhFQXJdfqqyi > 57) {
var RHqVBccMHMGm = YtOrhFQXJdfqqyi;
if (RHqVBccMHMGm.length > 0) {
var lklgsyeKu = RHqVBccMHMGm[0];
lklgsyeKu = lklgsyeKu + "_4Nc";
}
}
        switch (target) {
            case this._guestBtn:
                if (this.loginJs) {
                    this.loginJs.onBtnClickLogin();
var pyKCmwZkiatCfUQ = [242, 98, 467, 186, 299, 115];
if (pyKCmwZkiatCfUQ&&pyKCmwZkiatCfUQ.length < 6&&pyKCmwZkiatCfUQ[0] <= 199) {
for (var confuseI = 0; confuseI < pyKCmwZkiatCfUQ.length; confuseI++) {
  var KDMjHifUVNW = pyKCmwZkiatCfUQ[confuseI];
var WzjTyfEIgEcAspT = KDMjHifUVNW * 0.0163554074846;
if (typeof WzjTyfEIgEcAspT === "number" && WzjTyfEIgEcAspT > 400) {
if (WzjTyfEIgEcAspT > 332) {
var FwIGuibylHn = WzjTyfEIgEcAspT * 0.276573097994;
var TLKxUUWjhoyu = FwIGuibylHn * 0.65808582933;
var VykwTClHsETd = TLKxUUWjhoyu * 0.253989824552;
VykwTClHsETd = VykwTClHsETd - VykwTClHsETd/19;
}
}
}
} else {
if (pyKCmwZkiatCfUQ.length < 3&&pyKCmwZkiatCfUQ[0] <= 104) {
if (pyKCmwZkiatCfUQ.length >= 7&&pyKCmwZkiatCfUQ.length <= 17) {
if (pyKCmwZkiatCfUQ&&pyKCmwZkiatCfUQ.length < 10&&pyKCmwZkiatCfUQ[0] <= 158) {
} else if (pyKCmwZkiatCfUQ.length < 24) {
}
} else {
}
} else {
for (var confuseI = 0; confuseI < pyKCmwZkiatCfUQ.length; confuseI++) {
  var JiELzhkztNdi = pyKCmwZkiatCfUQ[confuseI];
var viCUWSNOPBkVK = JiELzhkztNdi * 0.435274323509;
if (viCUWSNOPBkVK >= 209&&viCUWSNOPBkVK <= 311) {
if (viCUWSNOPBkVK > 424) {
viCUWSNOPBkVK = viCUWSNOPBkVK + 19;
} else {
var ERCXmTLtZC = viCUWSNOPBkVK * 0.0964430094518;
ERCXmTLtZC = ERCXmTLtZC*10;
}
} else if (viCUWSNOPBkVK < 575||viCUWSNOPBkVK > 784) {
var LqtGOqssbAcqxqz = viCUWSNOPBkVK * 0.992653023626;
if (LqtGOqssbAcqxqz > 334) {
if (LqtGOqssbAcqxqz > 401) {
if (LqtGOqssbAcqxqz > 303) {
if (LqtGOqssbAcqxqz < 28) {
LqtGOqssbAcqxqz = LqtGOqssbAcqxqz + 16;
}
}
} else {
LqtGOqssbAcqxqz = LqtGOqssbAcqxqz*12;
}
} else {
var rIIfKjqRouR = LqtGOqssbAcqxqz * 0.0242443645446;
var RdmwSaIZZBL = rIIfKjqRouR * 0.0656784524513;
}
}
}
}
}
                }
                break;
            default:
                break;
var XvQfVzEOYF = [283, 462, 88, 314, 232, 459, 276];
for (var confuseI = 0; confuseI < XvQfVzEOYF.length; confuseI++) {
  var wprGgTZlGP = XvQfVzEOYF[confuseI];
}
var nWyPqKlvYWa = [152, 209, 285, 287, 55, 209];
var JbPepymBXloYIY = 9155;
JbPepymBXloYIY = JbPepymBXloYIY + JbPepymBXloYIY*13;
        }
    },

    onDisable: function () {
        cc.trace_log("onDisable main");
        cc.vv.global.removeSceneLoading();
    
        cc.vv.wxApi.aldEventReportForce(cc.vv.lang.ALD_EVENT.LOADING_END_2, new Date().getTime());
        if (cc.isNewer) {
            cc.vv.wxApi.aldEventReportForce(cc.vv.lang.ALD_EVENT.LOADING_END_2_NEWER, new Date().getTime());            
        }
        cc.isNewer = false;
var VvFuDSETIKBbFfK = 9161;
var DflDJPYNBbd = VvFuDSETIKBbFfK * 0.253131769116;
if (DflDJPYNBbd < 84||DflDJPYNBbd > 364) {
var PtRnhrLhIxTh = DflDJPYNBbd * 0.486465203542;
PtRnhrLhIxTh = PtRnhrLhIxTh + 16;
} else if (DflDJPYNBbd >= 587&&DflDJPYNBbd <= 821) {
var sbVPwDhnojFOH = DflDJPYNBbd * 0.371225142231;
var TfqsGpKQuZbIHs = sbVPwDhnojFOH * 0.597951278669;
var YVPrsuUfnPErf = TfqsGpKQuZbIHs * 0.161304851693;
var jqsTIgpDMZKp = YVPrsuUfnPErf * 0.602762580442;
var voHUgEzLUaB = jqsTIgpDMZKp * 0.395888106081;
voHUgEzLUaB = voHUgEzLUaB - voHUgEzLUaB/12;
}
var QtGoznofplYg = 14150;
if (typeof QtGoznofplYg === "number" && QtGoznofplYg < 145||QtGoznofplYg > 366) {
if (typeof QtGoznofplYg === "number" && QtGoznofplYg > 415) {
QtGoznofplYg = QtGoznofplYg*18;
} else {
var vVsXlrdWwmFJU = QtGoznofplYg * 0.491928194975;
var PVnayRWFfebaCI = vVsXlrdWwmFJU * 0.433614563784;
var LikVsWVCdYiXD = PVnayRWFfebaCI * 0.699003658162;
if (typeof LikVsWVCdYiXD === "number" && LikVsWVCdYiXD / 300 < 218) {
var HXjTxmjPKVV = LikVsWVCdYiXD * 0.631260826493;
if (typeof HXjTxmjPKVV === "number" && HXjTxmjPKVV >= 189&&HXjTxmjPKVV <= 446) {
var eQdCTjzWsTwA = HXjTxmjPKVV * 0.757232029779;
var BUQBeygpLaz = eQdCTjzWsTwA * 0.95329489595;
BUQBeygpLaz = BUQBeygpLaz*15;
} else if (HXjTxmjPKVV < 565||HXjTxmjPKVV > 830) {
if (HXjTxmjPKVV >= 132&&HXjTxmjPKVV <= 421) {
if (typeof HXjTxmjPKVV === "number" && HXjTxmjPKVV >= 212&&HXjTxmjPKVV <= 468) {
var znEilUuQKOcIZ = HXjTxmjPKVV * 0.266239012522;
} else if (HXjTxmjPKVV < 675) {
if (HXjTxmjPKVV < 1) {
var bucsJpIgKCA = HXjTxmjPKVV * 0.610594968036;
if (bucsJpIgKCA >= 68&&bucsJpIgKCA <= 390) {
bucsJpIgKCA = bucsJpIgKCA*11;
} else {
if (bucsJpIgKCA < 233) {
bucsJpIgKCA = bucsJpIgKCA + 13;
} else if (bucsJpIgKCA >= 614&&bucsJpIgKCA <= 885) {
bucsJpIgKCA = bucsJpIgKCA + bucsJpIgKCA*10;
}
}
}
}
} else if (HXjTxmjPKVV > 583) {
if (typeof HXjTxmjPKVV === "number" && HXjTxmjPKVV >= 290&&HXjTxmjPKVV <= 301) {
} else {
HXjTxmjPKVV = HXjTxmjPKVV + HXjTxmjPKVV*13;
}
}
}
} else if (LikVsWVCdYiXD > 654) {
}
}
} else if (QtGoznofplYg < 620||QtGoznofplYg > 879) {
if (QtGoznofplYg < 92) {
var fAGXdlVQSd = QtGoznofplYg * 0.968066346645;
if (fAGXdlVQSd > 324) {
var pfplIklDbkruV = fAGXdlVQSd * 0.0666594743757;
pfplIklDbkruV = pfplIklDbkruV + pfplIklDbkruV*18;
} else if (fAGXdlVQSd >= 522&&fAGXdlVQSd <= 801) {
var zmPzrcfiOiVxkk = fAGXdlVQSd * 0.304085301404;
var ZQAsHutFzUYIUr = zmPzrcfiOiVxkk * 0.0910475065469;
}
} else if (QtGoznofplYg < 619) {
if (QtGoznofplYg > 452) {
if (QtGoznofplYg < 113) {
if (QtGoznofplYg < 133) {
var CceCOxkNLHrjFg = QtGoznofplYg * 0.24096036172;
var wAsXslEdQlE = CceCOxkNLHrjFg * 0.793732198816;
if (wAsXslEdQlE < 223) {
wAsXslEdQlE = wAsXslEdQlE + 15;
} else if (wAsXslEdQlE < 612) {
if (wAsXslEdQlE > 333) {
if (wAsXslEdQlE >= 31&&wAsXslEdQlE <= 367) {
wAsXslEdQlE = wAsXslEdQlE + 16;
} else if (wAsXslEdQlE < 593) {
wAsXslEdQlE = wAsXslEdQlE + wAsXslEdQlE*13;
}
} else if (wAsXslEdQlE < 657) {
wAsXslEdQlE = wAsXslEdQlE*16;
}
}
}
}
} else {
if (QtGoznofplYg >= 10&&QtGoznofplYg <= 323) {
var mohZoVDAQxGm = QtGoznofplYg * 0.239651582302;
if (typeof mohZoVDAQxGm === "number" && mohZoVDAQxGm / 300 < 35) {
mohZoVDAQxGm = mohZoVDAQxGm + 13;
} else if (mohZoVDAQxGm < 613) {
var rkcbyQiSGyRB = mohZoVDAQxGm * 0.046810612985;
var gJgTlyMyXqNLLAZ = rkcbyQiSGyRB * 0.0851452798527;
gJgTlyMyXqNLLAZ = gJgTlyMyXqNLLAZ + gJgTlyMyXqNLLAZ*15;
}
}
}
}
}
var hQUvNcGuCjuhfT = "9aBjBqIgx4ccdOXP4Or5x7X6Bf8j3vZukOXQWcasaj";
var ioUsFdaotcMtq = hQUvNcGuCjuhfT + "DC";
    },

    onDestory: function () {
        cc.trace_log("onDestory Main")
    },
});
