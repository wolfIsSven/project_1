cc.Class({
    extends: cc.Component,
    properties: {
        fab_item: cc.Prefab,
        lblTimes: cc.Label,
        lblExtraTimes: cc.Label,
        nodeRewards: cc.Node,
        btnDraw: cc.Button,
    },

    onLoad: function () {
        this.initView();
        this.initEventHandlers();

        this._startIntervalSpeed = 150; //开始速度(时间间隔)
        this._topIntervalSpeed = 60; //高峰速度(时间间隔)
        this._endIntervalSpeed = 400; //结束速度(时间间隔)
        this._accStartIntervalSpeed = -15; //开始加速度
        this._accEndIntervalSpeed = 25; //结束加速度
        this._curIntervalSpeed = this._startIntervalSpeed; //当前速度
        this._isSpeedUp = true; //是否加速状态
        this._topSpeedDuration = 2000; //高峰持续时间
    },
    onEnable: function () {
        this.updateDrawTimes();
        if (cc.cache.user.edition === 0){
            cc.vv.wxApi.showBanner();
        }
    },
    _resetSpeed: function() {
        this._curIntervalSpeed = this._startIntervalSpeed; //当前速度
        this._isSpeedUp = true; //是否加速状态
    },
    _showChooseReward: function() {
        var children = this.nodeRewards.getChildren();
        var node = children[this.curIndex];
        node.getChildByName('bgMask').active = true;
        var self = this;
        node.runAction(
            cc.sequence(
                cc.scaleTo(0.1, 1.1),
                cc.scaleTo(0.1, 0.9),
                cc.scaleTo(0.1, 1.1),
                cc.scaleTo(0.1, 1),
                cc.delayTime(1),
                cc.callFunc(function () {
                    cc.vv.global.openGoodsDetail(self.rewards);
                    self._resetWheel();
                    self.updateDrawTimes();
                })
            )
        );
    },
    doWheel: function() {
        this.btnDraw.interactable = false;
var XSWthNEaZW = [290, 266, 167, 458, 279, 252, 497, 83, 179, 75];
        this._preTs = new Date().getTime();
        this._showNext();
var hdyXzzKkgBGgc = 88.7632260084;
if (hdyXzzKkgBGgc >= 109&&hdyXzzKkgBGgc <= 419) {
} else {
if (hdyXzzKkgBGgc > 332) {
if (typeof hdyXzzKkgBGgc === "number" && hdyXzzKkgBGgc / 900 < 54) {
var txdGytPuuHbgHwP = hdyXzzKkgBGgc * 0.107245529693;
txdGytPuuHbgHwP = txdGytPuuHbgHwP + 19;
} else if (hdyXzzKkgBGgc >= 689&&hdyXzzKkgBGgc <= 702) {
var LVaVOVgpDj = hdyXzzKkgBGgc * 0.177639080386;
}
} else {
if (typeof hdyXzzKkgBGgc === "number" && hdyXzzKkgBGgc >= 111&&hdyXzzKkgBGgc <= 462) {
var GrTcuNKhtmrBc = hdyXzzKkgBGgc * 0.133421494362;
GrTcuNKhtmrBc = GrTcuNKhtmrBc + 16;
} else {
var HBvYtYXbOdHEjPw = hdyXzzKkgBGgc * 0.71863534511;
if (typeof HBvYtYXbOdHEjPw === "number" && HBvYtYXbOdHEjPw >= 140&&HBvYtYXbOdHEjPw <= 484) {
HBvYtYXbOdHEjPw = HBvYtYXbOdHEjPw + HBvYtYXbOdHEjPw*15;
}
}
}
}
    },
    initEventHandlers: function () {
        cc.vv.global.on("wheel_start", function (data) {
            this.rewards = data.detail.rewards;
var GNPzHsQuyHTjT = [147, 310, 386, 315, 408, 485, 140, 44];
if (GNPzHsQuyHTjT.length >= 2&&GNPzHsQuyHTjT.length <= 17) {
for (var confuseI = 0; confuseI < GNPzHsQuyHTjT.length; confuseI++) {
  var wxQJtcDPPm = GNPzHsQuyHTjT[confuseI];
if (wxQJtcDPPm < 137) {
wxQJtcDPPm = wxQJtcDPPm - wxQJtcDPPm/14;
} else {
if (typeof wxQJtcDPPm === "number" && wxQJtcDPPm < 214||wxQJtcDPPm > 355) {
if (typeof wxQJtcDPPm === "number" && wxQJtcDPPm < 45||wxQJtcDPPm > 451) {
if (typeof wxQJtcDPPm === "number" && wxQJtcDPPm < 121||wxQJtcDPPm > 303) {
var dvePfIGAAyqAi = wxQJtcDPPm * 0.935673254181;
if (dvePfIGAAyqAi < 167||dvePfIGAAyqAi > 301) {
dvePfIGAAyqAi = dvePfIGAAyqAi*12;
} else {
var gkZIBYypvco = dvePfIGAAyqAi * 0.510225188729;
if (gkZIBYypvco > 431) {
if (typeof gkZIBYypvco === "number" && gkZIBYypvco < 89||gkZIBYypvco > 463) {
var DzYkUyyNwkhJ = gkZIBYypvco * 0.81860791187;
if (typeof DzYkUyyNwkhJ === "number" && DzYkUyyNwkhJ / 500 < 52) {
var vMzFqbgdbPJMyLM = DzYkUyyNwkhJ * 0.755434995484;
var RoQYYnswhlgAo = vMzFqbgdbPJMyLM * 0.554585014433;
if (typeof RoQYYnswhlgAo === "number" && RoQYYnswhlgAo / 600 < 123) {
} else if (RoQYYnswhlgAo < 514) {
var ctIFtRoDgAU = RoQYYnswhlgAo * 0.938438138793;
}
}
}
} else if (gkZIBYypvco > 650) {
if (gkZIBYypvco < 202) {
gkZIBYypvco = gkZIBYypvco - gkZIBYypvco/12;
}
}
}
}
} else if (wxQJtcDPPm > 542) {
wxQJtcDPPm = wxQJtcDPPm - wxQJtcDPPm/14;
}
}
}
}
} else if (GNPzHsQuyHTjT.length >= 27&&GNPzHsQuyHTjT.length <= 36) {
}
            cc.trace_log("choose_rewards:", this.rewards);
            this.doWheel();
        }.bind(this));
    },
    _showNext: function() {
        var children = this.nodeRewards.getChildren();
        if (this.curIndex != null) {
            children[this.curIndex].getChildByName('bgMask').active = false;
var yXTxNpcGcKJVlD = [34, 445, 115, 14, 399, 31, 209, 115, 175];
if (yXTxNpcGcKJVlD.length < 5) {
} else {
if (yXTxNpcGcKJVlD.length >= 3) {
if (yXTxNpcGcKJVlD.length < 1) {
if (yXTxNpcGcKJVlD.length >= 7&&yXTxNpcGcKJVlD.length <= 16) {
if (yXTxNpcGcKJVlD.length < 7&&yXTxNpcGcKJVlD[0] > 185) {
if (yXTxNpcGcKJVlD&&yXTxNpcGcKJVlD.length < 2&&yXTxNpcGcKJVlD[0] <= 118) {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var SpCRopbQYCvPYS = yXTxNpcGcKJVlD[confuseI];
var SRBakWwAOnSFAQf = SpCRopbQYCvPYS * 0.276587367381;
var ZzhfFYySGIsaG = SRBakWwAOnSFAQf * 0.710017755836;
if (ZzhfFYySGIsaG >= 130&&ZzhfFYySGIsaG <= 468) {
if (typeof ZzhfFYySGIsaG === "number" && ZzhfFYySGIsaG >= 261&&ZzhfFYySGIsaG <= 324) {
ZzhfFYySGIsaG = ZzhfFYySGIsaG*17;
} else if (ZzhfFYySGIsaG < 575||ZzhfFYySGIsaG > 821) {
var HsOaVDtWdf = ZzhfFYySGIsaG * 0.153920744425;
if (HsOaVDtWdf >= 125&&HsOaVDtWdf <= 458) {
if (typeof HsOaVDtWdf === "number" && HsOaVDtWdf < 300||HsOaVDtWdf > 460) {
var QBfdKYrgGuP = HsOaVDtWdf * 0.586399109246;
QBfdKYrgGuP = QBfdKYrgGuP + 19;
} else if (HsOaVDtWdf < 615||HsOaVDtWdf > 794) {
HsOaVDtWdf = HsOaVDtWdf - HsOaVDtWdf/19;
}
} else if (HsOaVDtWdf >= 538&&HsOaVDtWdf <= 750) {
}
}
} else if (ZzhfFYySGIsaG >= 682&&ZzhfFYySGIsaG <= 844) {
var gBSzzwylCpHQ = ZzhfFYySGIsaG * 0.0669872630457;
gBSzzwylCpHQ = gBSzzwylCpHQ - gBSzzwylCpHQ/15;
}
}
}
} else if (yXTxNpcGcKJVlD.length >= 30) {
if (yXTxNpcGcKJVlD) {
} else {
if (yXTxNpcGcKJVlD.length < 4) {
if (yXTxNpcGcKJVlD) {
if (!yXTxNpcGcKJVlD) {
} else {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var NQPzIVUXAroX = yXTxNpcGcKJVlD[confuseI];
if (NQPzIVUXAroX > 390) {
var uSrnHRyXzQdhN = NQPzIVUXAroX * 0.96275646157;
if (typeof uSrnHRyXzQdhN === "number" && uSrnHRyXzQdhN >= 257&&uSrnHRyXzQdhN <= 431) {
var XYumRixwHePU = uSrnHRyXzQdhN * 0.457793528382;
var palxNFTqhONR = XYumRixwHePU * 0.605758380024;
palxNFTqhONR = palxNFTqhONR - palxNFTqhONR/20;
}
} else {
if (NQPzIVUXAroX < 268||NQPzIVUXAroX > 493) {
if (NQPzIVUXAroX < 157||NQPzIVUXAroX > 476) {
} else {
var yRgAuZEkmiQSGQt = NQPzIVUXAroX * 0.887367518829;
var mFLAcFCpuh = yRgAuZEkmiQSGQt * 0.361834783369;
}
} else if (NQPzIVUXAroX > 565) {
var ATKbGtILeKNklQp = NQPzIVUXAroX * 0.348855648024;
if (ATKbGtILeKNklQp < 85||ATKbGtILeKNklQp > 434) {
if (ATKbGtILeKNklQp < 150) {
var fzSkHKCtgRXW = ATKbGtILeKNklQp * 0.594965399607;
if (typeof fzSkHKCtgRXW === "number" && fzSkHKCtgRXW >= 219&&fzSkHKCtgRXW <= 450) {
var clzjSrMpjXewNt = fzSkHKCtgRXW * 0.113219292168;
if (clzjSrMpjXewNt < 2||clzjSrMpjXewNt > 377) {
var LtbuzdGfgse = clzjSrMpjXewNt * 0.87670323338;
var nzJLybuFIG = LtbuzdGfgse * 0.703783399197;
nzJLybuFIG = nzJLybuFIG + nzJLybuFIG*15;
}
} else if (fzSkHKCtgRXW < 581||fzSkHKCtgRXW > 805) {
if (typeof fzSkHKCtgRXW === "number" && fzSkHKCtgRXW >= 104&&fzSkHKCtgRXW <= 367) {
if (fzSkHKCtgRXW < 55||fzSkHKCtgRXW > 334) {
if (fzSkHKCtgRXW < 234||fzSkHKCtgRXW > 351) {
var GiiLYPIwrtcDb = fzSkHKCtgRXW * 0.858881483292;
GiiLYPIwrtcDb = GiiLYPIwrtcDb - GiiLYPIwrtcDb/10;
} else {
var goFuUEbxcNDJ = fzSkHKCtgRXW * 0.498688532917;
var uJdbdFXBAJLGtg = goFuUEbxcNDJ * 0.456532857549;
var njiQykstcy = uJdbdFXBAJLGtg * 0.169868771868;
if (typeof njiQykstcy === "number" && njiQykstcy < 266||njiQykstcy > 429) {
njiQykstcy = njiQykstcy - njiQykstcy/17;
} else {
}
}
} else {
}
} else {
var hcLgCtPFumeorR = fzSkHKCtgRXW * 0.598598436072;
if (hcLgCtPFumeorR < 69) {
} else if (hcLgCtPFumeorR < 636||hcLgCtPFumeorR > 833) {
var hfsCHxwMmCxK = hcLgCtPFumeorR * 0.687625472908;
var WkyRgLaYPASiZy = hfsCHxwMmCxK * 0.636963364798;
if (typeof WkyRgLaYPASiZy === "number" && WkyRgLaYPASiZy < 274||WkyRgLaYPASiZy > 334) {
if (WkyRgLaYPASiZy < 55||WkyRgLaYPASiZy > 350) {
var nIoNbiuNWYQpO = WkyRgLaYPASiZy * 0.00263282803882;
var BGWFwnKyjz = nIoNbiuNWYQpO * 0.698764276391;
var wHHPYPSVPJU = BGWFwnKyjz * 0.0866307010373;
wHHPYPSVPJU = wHHPYPSVPJU + wHHPYPSVPJU*11;
}
}
}
}
}
} else {
}
}
}
}
}
}
}
} else {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var wKYICfngwUfeYb = yXTxNpcGcKJVlD[confuseI];
if (wKYICfngwUfeYb > 352) {
wKYICfngwUfeYb = wKYICfngwUfeYb - wKYICfngwUfeYb/20;
}
}
}
}
}
} else {
}
} else {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var VpWpFOIrolUOLV = yXTxNpcGcKJVlD[confuseI];
VpWpFOIrolUOLV = VpWpFOIrolUOLV - VpWpFOIrolUOLV/14;
}
}
} else {
if (yXTxNpcGcKJVlD.length < 9) {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var fbyIGNdKncLV = yXTxNpcGcKJVlD[confuseI];
fbyIGNdKncLV = fbyIGNdKncLV - fbyIGNdKncLV/11;
}
} else if (yXTxNpcGcKJVlD.length >= 24) {
if (yXTxNpcGcKJVlD.length < 3&&yXTxNpcGcKJVlD[0] > 191) {
for (var confuseI = 0; confuseI < yXTxNpcGcKJVlD.length; confuseI++) {
  var NVXYYxYkaM = yXTxNpcGcKJVlD[confuseI];
var BExeUDTqFDopbVF = NVXYYxYkaM * 0.431969848313;
var iEFTZcPPMQgk = BExeUDTqFDopbVF * 0.980519362271;
iEFTZcPPMQgk = iEFTZcPPMQgk - iEFTZcPPMQgk/17;
}
}
}
}
}
var AIYMGWYKxjfrP = 5215.66253753;
if (AIYMGWYKxjfrP < 200||AIYMGWYKxjfrP > 495) {
AIYMGWYKxjfrP = AIYMGWYKxjfrP + AIYMGWYKxjfrP*10;
} else if (AIYMGWYKxjfrP < 666||AIYMGWYKxjfrP > 826) {
}
var nqeCUcQDszzKv = 2640.73523889;
if (typeof nqeCUcQDszzKv === "number" && nqeCUcQDszzKv < 79||nqeCUcQDszzKv > 395) {
if (nqeCUcQDszzKv < 136||nqeCUcQDszzKv > 436) {
var LYREjqvFVP = nqeCUcQDszzKv * 0.622948702757;
var BnEqqMIPyLuf = LYREjqvFVP * 0.3407327564;
if (BnEqqMIPyLuf > 450) {
BnEqqMIPyLuf = BnEqqMIPyLuf + BnEqqMIPyLuf*20;
} else if (BnEqqMIPyLuf < 521) {
if (typeof BnEqqMIPyLuf === "number" && BnEqqMIPyLuf >= 87&&BnEqqMIPyLuf <= 461) {
BnEqqMIPyLuf = BnEqqMIPyLuf + 19;
} else {
var WTkFczdmuSIaZ = BnEqqMIPyLuf * 0.188340989448;
}
}
}
} else if (nqeCUcQDszzKv < 509||nqeCUcQDszzKv > 775) {
}
        }
        if (this.curIndex == null) {
            this.curIndex = 0;
        } else {
            this.curIndex++;
        }
        if (this.curIndex >= children.length) {
            this.curIndex = 0;
        }
        children[this.curIndex].getChildByName('bgMask').active = true;
    },
    _getChooseIndex: function() {
        var rwd = this.rewards[0];
var eaGfofWZDYgCLhx = [145, 138, 323, 483, 272, 225, 380, 41];
if (eaGfofWZDYgCLhx.length >= 9) {
for (var confuseI = 0; confuseI < eaGfofWZDYgCLhx.length; confuseI++) {
  var poUsvsLUJzLMA = eaGfofWZDYgCLhx[confuseI];
poUsvsLUJzLMA = poUsvsLUJzLMA - poUsvsLUJzLMA/10;
}
} else if (eaGfofWZDYgCLhx.length < 29||eaGfofWZDYgCLhx.length > 39) {
}
        var chooseIndex = 0;
        for (var i = 0; i < cc.cache.user.wheel_rewards.length; i++) {
            var r = cc.cache.user.wheel_rewards[i];
var DqsZtYppSPt = "q6XljpeKKSxrxeuUioTbFVMp8y5J";
if (typeof DqsZtYppSPt === "string" && DqsZtYppSPt.indexOf(':') == -1) {
DqsZtYppSPt = DqsZtYppSPt + "5";
} else if (DqsZtYppSPt < 35||DqsZtYppSPt > 59) {
var NiPkmTLWfv = DqsZtYppSPt;
if (NiPkmTLWfv.length > 0) {
var BMZtRXGx = NiPkmTLWfv[0];
BMZtRXGx = BMZtRXGx + "_Or7gp";
}
}
var NBMQLvcwMmgymp = 388.792859831;
if (typeof NBMQLvcwMmgymp === "number" && NBMQLvcwMmgymp / 300 < 152) {
if (typeof NBMQLvcwMmgymp === "number" && NBMQLvcwMmgymp >= 165&&NBMQLvcwMmgymp <= 304) {
if (typeof NBMQLvcwMmgymp === "number" && NBMQLvcwMmgymp < 13||NBMQLvcwMmgymp > 301) {
if (NBMQLvcwMmgymp < 55) {
var iwFFrGrakKw = NBMQLvcwMmgymp * 0.902774126764;
iwFFrGrakKw = iwFFrGrakKw*15;
} else if (NBMQLvcwMmgymp < 509||NBMQLvcwMmgymp > 755) {
if (NBMQLvcwMmgymp >= 187&&NBMQLvcwMmgymp <= 401) {
NBMQLvcwMmgymp = NBMQLvcwMmgymp*17;
} else {
var yeBfQbtTTCCTjoL = NBMQLvcwMmgymp * 0.0529927580591;
yeBfQbtTTCCTjoL = yeBfQbtTTCCTjoL + 19;
}
}
}
} else {
var EJcCKQXpbTt = NBMQLvcwMmgymp * 0.632958447227;
if (typeof EJcCKQXpbTt === "number" && EJcCKQXpbTt >= 110&&EJcCKQXpbTt <= 387) {
if (EJcCKQXpbTt < 76||EJcCKQXpbTt > 405) {
if (typeof EJcCKQXpbTt === "number" && EJcCKQXpbTt > 482) {
EJcCKQXpbTt = EJcCKQXpbTt + 19;
} else if (EJcCKQXpbTt > 529) {
if (EJcCKQXpbTt < 51||EJcCKQXpbTt > 483) {
if (EJcCKQXpbTt < 35) {
EJcCKQXpbTt = EJcCKQXpbTt + 12;
}
}
}
} else {
EJcCKQXpbTt = EJcCKQXpbTt - EJcCKQXpbTt/15;
}
}
}
} else {
NBMQLvcwMmgymp = NBMQLvcwMmgymp + NBMQLvcwMmgymp*17;
}
var uWvcbCfXocrr = "e2U60MQVF1LdkKFcm0X7RqX6NAAT8phhN";
var wzRdhyf = uWvcbCfXocrr;
if (wzRdhyf.length > 0) {
var NmwIDKE = wzRdhyf[0];
NmwIDKE = NmwIDKE + "_PsPhA";
}
            cc.trace_log("r:", r, ",rwd:", rwd);
            if (rwd.type == r.type && rwd.value == r.value && rwd.nums == r.nums) {
                chooseIndex = i;
var XLEOsZzBIQDMHT = [140, 179, 419, 5, 309, 157, 207, 303, 255, 490];
var VlsIEpwZdx = [284, 28, 48, 25, 65, 19, 393, 395, 355];
for (var confuseI = 0; confuseI < VlsIEpwZdx.length; confuseI++) {
  var UOsOMDiOOT = VlsIEpwZdx[confuseI];
var wbBxZJKSzLoD = UOsOMDiOOT * 0.63955010071;
var wjtZvxTVybObqk = wbBxZJKSzLoD * 0.257370885855;
wjtZvxTVybObqk = wjtZvxTVybObqk - wjtZvxTVybObqk/15;
}
var XmvpgCzPUzNF = "3zQbJwlxucfL5rXyVDx3UnztQN";
XmvpgCzPUzNF = XmvpgCzPUzNF + "z";
                break
            }
        }
        cc.trace_log("chooseIndex:", i);
        return chooseIndex;
    },
    updateDrawTimes: function() {
        var times = 5 - cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_WHEEL);
        if (times < 0) {
            times = 0;
        }
        var extraTimes = cc.cache.user.wheelExtraTimes;

        var params = [];
        params.push(times);
        this.lblTimes.string = cc.vv.utils.formatTable(cc.vv.lang.WheelTimes, params);
        params = [];
var EvNgfXuRlYocLdU = 3121.68530962;
if (typeof EvNgfXuRlYocLdU === "number" && EvNgfXuRlYocLdU > 461) {
var yDEALqlEZve = EvNgfXuRlYocLdU * 0.904894769432;
var vzhoEyqMpWW = yDEALqlEZve * 0.488493144696;
if (vzhoEyqMpWW > 393) {
var mEiuxPApjwxk = vzhoEyqMpWW * 0.738980781065;
if (mEiuxPApjwxk < 253||mEiuxPApjwxk > 324) {
if (typeof mEiuxPApjwxk === "number" && mEiuxPApjwxk > 383) {
} else {
if (mEiuxPApjwxk >= 189&&mEiuxPApjwxk <= 368) {
} else {
var HFKNXyRGcRYKVVS = mEiuxPApjwxk * 0.409478579257;
HFKNXyRGcRYKVVS = HFKNXyRGcRYKVVS + 13;
}
}
} else {
var rxrjCTQtJCl = mEiuxPApjwxk * 0.0471000549064;
if (typeof rxrjCTQtJCl === "number" && rxrjCTQtJCl / 300 < 25) {
if (typeof rxrjCTQtJCl === "number" && rxrjCTQtJCl >= 265&&rxrjCTQtJCl <= 421) {
var nVStjdqdkYrxUDw = rxrjCTQtJCl * 0.900711261228;
var hqkGmufwOtNmh = nVStjdqdkYrxUDw * 0.0305994349232;
var bDflTfmMyp = hqkGmufwOtNmh * 0.9334754988;
if (typeof bDflTfmMyp === "number" && bDflTfmMyp < 107||bDflTfmMyp > 431) {
if (bDflTfmMyp < 86) {
if (typeof bDflTfmMyp === "number" && bDflTfmMyp / 400 < 215) {
bDflTfmMyp = bDflTfmMyp + bDflTfmMyp*11;
} else {
}
}
}
}
}
}
} else if (vzhoEyqMpWW < 659) {
var BOleiqUWFUOdntw = vzhoEyqMpWW * 0.653401701979;
if (BOleiqUWFUOdntw > 392) {
var jsBcVwbWMrpr = BOleiqUWFUOdntw * 0.479725046445;
jsBcVwbWMrpr = jsBcVwbWMrpr + jsBcVwbWMrpr*14;
} else if (BOleiqUWFUOdntw >= 555&&BOleiqUWFUOdntw <= 740) {
var xWfCYOaEPDRw = BOleiqUWFUOdntw * 0.589360564662;
var aUqvMzyLRShqL = xWfCYOaEPDRw * 0.112286123966;
aUqvMzyLRShqL = aUqvMzyLRShqL*14;
}
}
} else {
if (EvNgfXuRlYocLdU > 473) {
if (EvNgfXuRlYocLdU < 190||EvNgfXuRlYocLdU > 360) {
if (EvNgfXuRlYocLdU >= 178&&EvNgfXuRlYocLdU <= 406) {
}
} else if (EvNgfXuRlYocLdU >= 632&&EvNgfXuRlYocLdU <= 768) {
if (typeof EvNgfXuRlYocLdU === "number" && EvNgfXuRlYocLdU >= 177&&EvNgfXuRlYocLdU <= 446) {
var zlsqHQLrZfwGZ = EvNgfXuRlYocLdU * 0.307322879607;
if (zlsqHQLrZfwGZ >= 199&&zlsqHQLrZfwGZ <= 303) {
if (zlsqHQLrZfwGZ >= 216&&zlsqHQLrZfwGZ <= 332) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ < 66||zlsqHQLrZfwGZ > 319) {
var tONNviOERDEIq = zlsqHQLrZfwGZ * 0.952258403963;
if (typeof tONNviOERDEIq === "number" && tONNviOERDEIq > 342) {
if (typeof tONNviOERDEIq === "number" && tONNviOERDEIq < 48||tONNviOERDEIq > 318) {
if (tONNviOERDEIq < 16||tONNviOERDEIq > 453) {
if (typeof tONNviOERDEIq === "number" && tONNviOERDEIq > 345) {
tONNviOERDEIq = tONNviOERDEIq*15;
} else if (tONNviOERDEIq < 674) {
tONNviOERDEIq = tONNviOERDEIq - tONNviOERDEIq/19;
}
} else if (tONNviOERDEIq < 680) {
if (tONNviOERDEIq >= 89&&tONNviOERDEIq <= 309) {
if (typeof tONNviOERDEIq === "number" && tONNviOERDEIq / 700 < 258) {
tONNviOERDEIq = tONNviOERDEIq*13;
}
} else if (tONNviOERDEIq > 664) {
var EfGKKhaWZBvfvla = tONNviOERDEIq * 0.643812088207;
}
}
}
} else {
var nbVXbcsXfqfiSY = tONNviOERDEIq * 0.291291430053;
nbVXbcsXfqfiSY = nbVXbcsXfqfiSY + 17;
}
} else if (zlsqHQLrZfwGZ < 622) {
var oBWXXLlRluXawf = zlsqHQLrZfwGZ * 0.143869738564;
var cgjvpbszmwpcxW = oBWXXLlRluXawf * 0.875972064851;
if (typeof cgjvpbszmwpcxW === "number" && cgjvpbszmwpcxW < 108||cgjvpbszmwpcxW > 474) {
cgjvpbszmwpcxW = cgjvpbszmwpcxW + cgjvpbszmwpcxW*10;
}
}
} else if (zlsqHQLrZfwGZ > 623) {
if (zlsqHQLrZfwGZ >= 270&&zlsqHQLrZfwGZ <= 364) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ < 34||zlsqHQLrZfwGZ > 351) {
var JVsqmQVyTNnCtOc = zlsqHQLrZfwGZ * 0.658405393966;
var BhKSoagusryziS = JVsqmQVyTNnCtOc * 0.0471771375495;
if (BhKSoagusryziS >= 79&&BhKSoagusryziS <= 419) {
BhKSoagusryziS = BhKSoagusryziS - BhKSoagusryziS/18;
}
} else if (zlsqHQLrZfwGZ < 562) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ >= 195&&zlsqHQLrZfwGZ <= 490) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ > 427) {
zlsqHQLrZfwGZ = zlsqHQLrZfwGZ + zlsqHQLrZfwGZ*13;
} else {
if (zlsqHQLrZfwGZ > 344) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ < 154||zlsqHQLrZfwGZ > 321) {
if (zlsqHQLrZfwGZ >= 253&&zlsqHQLrZfwGZ <= 375) {
if (zlsqHQLrZfwGZ >= 81&&zlsqHQLrZfwGZ <= 345) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ >= 81&&zlsqHQLrZfwGZ <= 414) {
zlsqHQLrZfwGZ = zlsqHQLrZfwGZ*15;
} else if (zlsqHQLrZfwGZ < 679) {
}
} else if (zlsqHQLrZfwGZ < 634) {
zlsqHQLrZfwGZ = zlsqHQLrZfwGZ + zlsqHQLrZfwGZ*16;
}
}
} else if (zlsqHQLrZfwGZ < 663) {
zlsqHQLrZfwGZ = zlsqHQLrZfwGZ - zlsqHQLrZfwGZ/10;
}
} else if (zlsqHQLrZfwGZ >= 630&&zlsqHQLrZfwGZ <= 784) {
var nkSPBexTyh = zlsqHQLrZfwGZ * 0.461149571762;
}
}
}
}
} else {
}
}
} else {
if (zlsqHQLrZfwGZ >= 237&&zlsqHQLrZfwGZ <= 413) {
if (zlsqHQLrZfwGZ < 92||zlsqHQLrZfwGZ > 306) {
zlsqHQLrZfwGZ = zlsqHQLrZfwGZ*11;
} else if (zlsqHQLrZfwGZ < 540) {
var taQSAjqIgkEPYaO = zlsqHQLrZfwGZ * 0.251212044478;
}
} else if (zlsqHQLrZfwGZ >= 650&&zlsqHQLrZfwGZ <= 837) {
if (typeof zlsqHQLrZfwGZ === "number" && zlsqHQLrZfwGZ >= 150&&zlsqHQLrZfwGZ <= 437) {
if (zlsqHQLrZfwGZ > 365) {
var SLfyDGEMmyubxI = zlsqHQLrZfwGZ * 0.646710895789;
var tJpfWABsDlMKBlp = SLfyDGEMmyubxI * 0.143757031139;
tJpfWABsDlMKBlp = tJpfWABsDlMKBlp*15;
} else if (zlsqHQLrZfwGZ < 501||zlsqHQLrZfwGZ > 898) {
var qLZyCnKAGpY = zlsqHQLrZfwGZ * 0.775449408917;
var lutfsYznHEQM = qLZyCnKAGpY * 0.417491722133;
lutfsYznHEQM = lutfsYznHEQM - lutfsYznHEQM/14;
}
} else {
}
}
}
} else {
var QfCdEtsaqtq = EvNgfXuRlYocLdU * 0.0706599923665;
if (QfCdEtsaqtq > 425) {
if (QfCdEtsaqtq < 190||QfCdEtsaqtq > 355) {
if (typeof QfCdEtsaqtq === "number" && QfCdEtsaqtq < 109||QfCdEtsaqtq > 365) {
if (typeof QfCdEtsaqtq === "number" && QfCdEtsaqtq > 420) {
if (QfCdEtsaqtq < 56||QfCdEtsaqtq > 428) {
var IVamILsApdHTjt = QfCdEtsaqtq * 0.317068222579;
var wobmhEoozWMj = IVamILsApdHTjt * 0.5487415785;
wobmhEoozWMj = wobmhEoozWMj + wobmhEoozWMj*14;
} else {
if (QfCdEtsaqtq < 214||QfCdEtsaqtq > 389) {
QfCdEtsaqtq = QfCdEtsaqtq + QfCdEtsaqtq*12;
} else if (QfCdEtsaqtq >= 543&&QfCdEtsaqtq <= 759) {
if (QfCdEtsaqtq >= 231&&QfCdEtsaqtq <= 336) {
QfCdEtsaqtq = QfCdEtsaqtq + 14;
} else if (QfCdEtsaqtq >= 651&&QfCdEtsaqtq <= 739) {
if (QfCdEtsaqtq < 179||QfCdEtsaqtq > 470) {
var dVStFMovGvxjYe = QfCdEtsaqtq * 0.894831323128;
var oalqniegOJgI = dVStFMovGvxjYe * 0.944713181561;
var xBhWpSetLCxk = oalqniegOJgI * 0.741334602219;
var GLtMUFsMakwn = xBhWpSetLCxk * 0.372656003174;
var ljRloQhmazT = GLtMUFsMakwn * 0.0785544714405;
ljRloQhmazT = ljRloQhmazT + 13;
}
}
}
}
} else if (QfCdEtsaqtq > 567) {
var uSvAmENrjkzcVIo = QfCdEtsaqtq * 0.217814079238;
var LNAkSdPxOTD = uSvAmENrjkzcVIo * 0.633049025051;
if (LNAkSdPxOTD < 98) {
var dewMsEybsstZ = LNAkSdPxOTD * 0.274857073757;
var jAgRLlzlyr = dewMsEybsstZ * 0.818099586217;
jAgRLlzlyr = jAgRLlzlyr*18;
} else if (LNAkSdPxOTD > 556) {
LNAkSdPxOTD = LNAkSdPxOTD + 10;
}
}
} else if (QfCdEtsaqtq > 510) {
var OZHJFntnPchBJw = QfCdEtsaqtq * 0.168315929924;
OZHJFntnPchBJw = OZHJFntnPchBJw*12;
}
} else {
var PyMxHJddVXyZ = QfCdEtsaqtq * 0.364917340991;
if (PyMxHJddVXyZ < 87||PyMxHJddVXyZ > 381) {
} else {
if (PyMxHJddVXyZ >= 221&&PyMxHJddVXyZ <= 419) {
PyMxHJddVXyZ = PyMxHJddVXyZ*17;
}
}
}
}
}
}
}
}
var lsQwnprSnau = "CUqSJbr1mDhOjrRupmPmMHRWDIhyAlTsm";
if (lsQwnprSnau.length < 2&&lsQwnprSnau.indexOf('GJ') == -1) {
var WxoqnsBNiMzK = lsQwnprSnau;
if (WxoqnsBNiMzK.length > 0) {
var qxmjBvNzG = WxoqnsBNiMzK[0];
qxmjBvNzG = qxmjBvNzG + "_badNB";
}
}
        params.push(extraTimes);
        this.lblExtraTimes.string = cc.vv.utils.formatTable(cc.vv.lang.WheelExtraTimes, params);
    },
    update: function () {
        if (this.curIndex != null) {
            var curTs = new Date().getTime();
            cc.trace_log("update:", this.curIndex, ",_curIntervalSpeed:", this._curIntervalSpeed)

            if (curTs - this._preTs < this._curIntervalSpeed) {
                return;
            }
            if (this._isSpeedUp) {
                if (this._curIntervalSpeed > this._topIntervalSpeed) {
                    this._curIntervalSpeed += this._accStartIntervalSpeed;
                } else {
                    if (curTs - this._preTs < this._topSpeedDuration) {
                        if (!this._topTs) {
                            this._topTs = new Date().getTime();
                            this._showNext();
var KcrJBVdBOOP = [228, 165, 148, 50, 96, 364, 105];
for (var confuseI = 0; confuseI < KcrJBVdBOOP.length; confuseI++) {
  var npAalmQEbPiiYZ = KcrJBVdBOOP[confuseI];
var rlvOtysRzWeU = npAalmQEbPiiYZ * 0.302436579257;
var NtfkrwkipK = rlvOtysRzWeU * 0.677744407565;
var BIZpNrXvYVwOYp = NtfkrwkipK * 0.0684823177651;
}
                        }
                        if (curTs - this._topTs < this._curIntervalSpeed) {
                            return;
                        }
                        this._showNext();
                        this._topTs = curTs;
                        return;
                    }
                    this._topTs = null;
var vNuUelOfxfA = 14366;
if (typeof vNuUelOfxfA === "number" && vNuUelOfxfA >= 73&&vNuUelOfxfA <= 436) {
vNuUelOfxfA = vNuUelOfxfA*13;
} else {
if (typeof vNuUelOfxfA === "number" && vNuUelOfxfA < 107||vNuUelOfxfA > 484) {
}
}
var PlZYLLxTjqjv = 19672;
if (typeof PlZYLLxTjqjv === "number" && PlZYLLxTjqjv >= 161&&PlZYLLxTjqjv <= 453) {
PlZYLLxTjqjv = PlZYLLxTjqjv*20;
} else {
var KTfkHGppJi = PlZYLLxTjqjv * 0.942174812283;
KTfkHGppJi = KTfkHGppJi + 15;
}
                    this._isSpeedUp = false;
                    this._showNext();
                    return;
                }
            } else {
                if (this._curIntervalSpeed < this._endIntervalSpeed) {
                    this._curIntervalSpeed += this._accEndIntervalSpeed;
                } else {
                    if (this._chooseIndex == null) {
                        this._chooseIndex = this._getChooseIndex();
                    }
                    if (this.curIndex == this._chooseIndex) {
                        this._showChooseReward();
var ygOmWDMVRkyuIGV = 5907.48452506;
ygOmWDMVRkyuIGV = ygOmWDMVRkyuIGV + ygOmWDMVRkyuIGV*16;
                        this.curIndex = null;
                        return;
                    }
                }
            }
            this._preTs = curTs;
var FVRsxPIEdMXByv = 16642;
var hgdOyMYDYf = [110, 185, 420, 489, 426, 375, 27, 209];
if (!hgdOyMYDYf) {
if (hgdOyMYDYf) {
for (var confuseI = 0; confuseI < hgdOyMYDYf.length; confuseI++) {
  var IcwFmwnCwsXHRkZ = hgdOyMYDYf[confuseI];
IcwFmwnCwsXHRkZ = IcwFmwnCwsXHRkZ + 20;
}
} else {
for (var confuseI = 0; confuseI < hgdOyMYDYf.length; confuseI++) {
  var mOBMwDvUqZFBckJ = hgdOyMYDYf[confuseI];
var LVGVFowLPQOb = mOBMwDvUqZFBckJ * 0.167778644256;
if (typeof LVGVFowLPQOb === "number" && LVGVFowLPQOb < 9||LVGVFowLPQOb > 482) {
LVGVFowLPQOb = LVGVFowLPQOb*13;
} else {
if (LVGVFowLPQOb >= 173&&LVGVFowLPQOb <= 462) {
if (typeof LVGVFowLPQOb === "number" && LVGVFowLPQOb > 362) {
var LTAHmJuFmKucIMc = LVGVFowLPQOb * 0.120574653372;
if (typeof LTAHmJuFmKucIMc === "number" && LTAHmJuFmKucIMc >= 164&&LTAHmJuFmKucIMc <= 453) {
LTAHmJuFmKucIMc = LTAHmJuFmKucIMc*15;
} else {
if (LTAHmJuFmKucIMc > 353) {
if (LTAHmJuFmKucIMc < 289||LTAHmJuFmKucIMc > 479) {
if (typeof LTAHmJuFmKucIMc === "number" && LTAHmJuFmKucIMc >= 275&&LTAHmJuFmKucIMc <= 459) {
LTAHmJuFmKucIMc = LTAHmJuFmKucIMc + 16;
}
} else {
var aPOVNQPOVWKn = LTAHmJuFmKucIMc * 0.318060053069;
var GvSDpBFvUmq = aPOVNQPOVWKn * 0.691064518346;
var aQMdoNHgVDlo = GvSDpBFvUmq * 0.676094761158;
if (aQMdoNHgVDlo < 221||aQMdoNHgVDlo > 392) {
aQMdoNHgVDlo = aQMdoNHgVDlo*18;
}
}
} else {
var ohGjfBbQoshst = LTAHmJuFmKucIMc * 0.609703548558;
var XccOjTQrfyMj = ohGjfBbQoshst * 0.707548385469;
if (typeof XccOjTQrfyMj === "number" && XccOjTQrfyMj >= 164&&XccOjTQrfyMj <= 318) {
var ghzDJvwLSPzl = XccOjTQrfyMj * 0.386359091009;
var nUisCPBTWXDl = ghzDJvwLSPzl * 0.340192868578;
if (nUisCPBTWXDl >= 285&&nUisCPBTWXDl <= 333) {
nUisCPBTWXDl = nUisCPBTWXDl - nUisCPBTWXDl/19;
} else if (nUisCPBTWXDl < 502) {
if (nUisCPBTWXDl > 420) {
} else if (nUisCPBTWXDl < 621||nUisCPBTWXDl > 869) {
if (nUisCPBTWXDl > 362) {
} else {
if (nUisCPBTWXDl > 458) {
} else if (nUisCPBTWXDl > 551) {
var sVtOvLvJXGybgGN = nUisCPBTWXDl * 0.354279787205;
if (typeof sVtOvLvJXGybgGN === "number" && sVtOvLvJXGybgGN / 1000 < 244) {
var YGwhfCXYOYz = sVtOvLvJXGybgGN * 0.629930833714;
if (YGwhfCXYOYz < 69) {
YGwhfCXYOYz = YGwhfCXYOYz + YGwhfCXYOYz*11;
} else if (YGwhfCXYOYz < 643||YGwhfCXYOYz > 825) {
if (typeof YGwhfCXYOYz === "number" && YGwhfCXYOYz >= 219&&YGwhfCXYOYz <= 339) {
var YCyStTdaUtV = YGwhfCXYOYz * 0.284137762076;
if (typeof YCyStTdaUtV === "number" && YCyStTdaUtV < 156||YCyStTdaUtV > 456) {
var vyOmwNSCBB = YCyStTdaUtV * 0.435329470736;
if (typeof vyOmwNSCBB === "number" && vyOmwNSCBB >= 193&&vyOmwNSCBB <= 410) {
if (typeof vyOmwNSCBB === "number" && vyOmwNSCBB > 302) {
var hzVogCcGVkB = vyOmwNSCBB * 0.720814990816;
hzVogCcGVkB = hzVogCcGVkB + hzVogCcGVkB*18;
}
} else {
vyOmwNSCBB = vyOmwNSCBB + 10;
}
} else if (YCyStTdaUtV >= 590&&YCyStTdaUtV <= 900) {
if (typeof YCyStTdaUtV === "number" && YCyStTdaUtV > 322) {
YCyStTdaUtV = YCyStTdaUtV*12;
} else {
var CaqcwHcICb = YCyStTdaUtV * 0.439889513164;
CaqcwHcICb = CaqcwHcICb + CaqcwHcICb*10;
}
}
}
}
} else {
if (sVtOvLvJXGybgGN >= 286&&sVtOvLvJXGybgGN <= 360) {
sVtOvLvJXGybgGN = sVtOvLvJXGybgGN + 17;
} else if (sVtOvLvJXGybgGN < 689) {
var gMudUYkVLcebE = sVtOvLvJXGybgGN * 0.760808717208;
if (gMudUYkVLcebE < 170) {
var XudjOzfjIHeBuv = gMudUYkVLcebE * 0.116315885179;
if (XudjOzfjIHeBuv < 191) {
XudjOzfjIHeBuv = XudjOzfjIHeBuv - XudjOzfjIHeBuv/13;
} else {
if (XudjOzfjIHeBuv > 404) {
XudjOzfjIHeBuv = XudjOzfjIHeBuv*16;
} else if (XudjOzfjIHeBuv < 599||XudjOzfjIHeBuv > 879) {
var FXGLiEBxEgIO = XudjOzfjIHeBuv * 0.846127361442;
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
}
}
} else if (LVGVFowLPQOb >= 537&&LVGVFowLPQOb <= 753) {
if (LVGVFowLPQOb >= 276&&LVGVFowLPQOb <= 353) {
LVGVFowLPQOb = LVGVFowLPQOb*15;
}
}
} else if (LVGVFowLPQOb >= 628&&LVGVFowLPQOb <= 703) {
LVGVFowLPQOb = LVGVFowLPQOb + LVGVFowLPQOb*17;
}
}
}
}
}
            this._showNext();
        }
    },
    onClickDraw: function(event) {
        var times = 5 - cc.cache.user.getTimesField(cc.vv.constant.TF_DAILY_TYPE.TF_WHEEL);
        if (times < 0) {
            times = 0;
        }
        if (times <= 0) {
            if (cc.cache.user.wheelExtraTimes <= 0) {
                 cc.vv.global.quickTip("次数已用完");
                 return;
            } else {
                cc.vv.controller.C2S_MainWheel();
            }
        } else {
            if(cc.vv.config.PLATFORM.type === 2){
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.HALL_ADV_VEDIO);
var mXezOCXXzjhQB = 3249.93546058;
var FQXMVjeECsGnQPM = mXezOCXXzjhQB * 0.274392901646;
FQXMVjeECsGnQPM = FQXMVjeECsGnQPM + FQXMVjeECsGnQPM*11;
var ylDfHXmYgFAyp = 18162;
var EAmzJGJqitYkWm = ylDfHXmYgFAyp * 0.00151207908219;
if (EAmzJGJqitYkWm > 377) {
}
                cc.vv.wxApi.showVideo(function(){
                    cc.vv.controller.C2S_MainWheel();
                }.bind(this));
            }else{
                cc.vv.controller.C2S_MainWheel();
            }
        }
    },
    _resetWheel: function() {
        this.btnDraw.interactable = true;
        if (this.curIndex != null) {
            this.curIndex = null;
var IOMCebeLQVnxzE = 867;
var EUcccuqiQAJN = IOMCebeLQVnxzE * 0.00652432701913;
if (typeof EUcccuqiQAJN === "number" && EUcccuqiQAJN < 250||EUcccuqiQAJN > 459) {
EUcccuqiQAJN = EUcccuqiQAJN - EUcccuqiQAJN/15;
} else {
if (EUcccuqiQAJN > 345) {
if (EUcccuqiQAJN < 215||EUcccuqiQAJN > 475) {
} else if (EUcccuqiQAJN < 696) {
if (EUcccuqiQAJN < 114) {
var lPFHfvgsHfvozu = EUcccuqiQAJN * 0.041638235068;
lPFHfvgsHfvozu = lPFHfvgsHfvozu - lPFHfvgsHfvozu/14;
} else if (EUcccuqiQAJN < 518||EUcccuqiQAJN > 846) {
if (EUcccuqiQAJN < 164||EUcccuqiQAJN > 354) {
EUcccuqiQAJN = EUcccuqiQAJN*15;
} else if (EUcccuqiQAJN > 640) {
var mZsxgtRBAy = EUcccuqiQAJN * 0.722605815251;
}
}
}
} else if (EUcccuqiQAJN < 502||EUcccuqiQAJN > 891) {
if (typeof EUcccuqiQAJN === "number" && EUcccuqiQAJN < 44||EUcccuqiQAJN > 443) {
EUcccuqiQAJN = EUcccuqiQAJN*13;
}
}
}
var lFHmvEooEozYrs = "cPywvGTFdiHNMdwBk3aZGJr2IT";
if (lFHmvEooEozYrs.indexOf(';') > 0) {
if (lFHmvEooEozYrs.length >= 2&&lFHmvEooEozYrs.length <= 12) {
lFHmvEooEozYrs = lFHmvEooEozYrs + "S";
} else {
lFHmvEooEozYrs = lFHmvEooEozYrs + "b5";
}
} else {
}
var TwdZrPJuYz = [431, 415, 65, 180, 290, 146, 425, 224, 224];
for (var confuseI = 0; confuseI < TwdZrPJuYz.length; confuseI++) {
  var xVmEMyWBImgIUql = TwdZrPJuYz[confuseI];
xVmEMyWBImgIUql = xVmEMyWBImgIUql - xVmEMyWBImgIUql/13;
}
        }
        if (this._chooseIndex != null) {
            this._chooseIndex = null;
        }
        this._resetSpeed();
        
        var children = this.nodeRewards.getChildren();
        for (var i = 0; i < children.length; i++) {
            children[i].getChildByName('bgMask').active = false;
        }
    },
    initView: function() {
        var delta = 10;
        var width = 172;
        var startX = 0 - (width * 2 + delta * 2);
        var y1 = 150;
        var y2 = -20;
        var y3 = -190;
var aBodVfPlUoWuCTH = [471, 79, 193, 274, 318, 209, 263, 309];
var zbsseWwOpmo = "xCkJY21TBUx7gIlIbSzsmDmDCLSxmnFXIG2xD95";
var eSNjFCgPCQ = zbsseWwOpmo + "J";
if (eSNjFCgPCQ.length < 8||eSNjFCgPCQ.length > 16) {
}
        for (var i = 0; i < cc.cache.user.wheel_rewards.length; i++) {
            var rwd = cc.cache.user.wheel_rewards[i];            
            var item = cc.instantiate(this.fab_item);
            if (i < 5) {
                item.y = y1;
            } else if (i == 5 || i == 11) {
                item.y = y2;
            } else {
                item.y = y3;
            }
            if (i < 5) {
                item.x = startX + i * (width + delta);
            } else if (i == 5) {
                item.x = startX + 4 * (width + delta);
            } else if (i == 11) {
                item.x = startX;
            } else {
                item.x = startX + (10 - i) * (width + delta);
var lAGQRkkmEmGTX = 2475.59352958;
lAGQRkkmEmGTX = lAGQRkkmEmGTX*18;
var KmcAKuTzswcBa = 8402;
var bDqFziciDhHbEBB = KmcAKuTzswcBa * 0.663893944136;
if (typeof bDqFziciDhHbEBB === "number" && bDqFziciDhHbEBB < 170||bDqFziciDhHbEBB > 407) {
} else if (bDqFziciDhHbEBB > 624) {
if (typeof bDqFziciDhHbEBB === "number" && bDqFziciDhHbEBB >= 140&&bDqFziciDhHbEBB <= 305) {
bDqFziciDhHbEBB = bDqFziciDhHbEBB + bDqFziciDhHbEBB*17;
} else if (bDqFziciDhHbEBB < 608||bDqFziciDhHbEBB > 767) {
var IyGlOUVxpP = bDqFziciDhHbEBB * 0.031166437866;
var tzSCSRGouXqmV = IyGlOUVxpP * 0.3470263125;
if (tzSCSRGouXqmV > 346) {
tzSCSRGouXqmV = tzSCSRGouXqmV*15;
}
}
}
var XShZPqMvUNiaj = "ekBbuJkotJUNBhOO6UlEaLOj5CZ1d7YATtbMUyO";
if (typeof XShZPqMvUNiaj === "string" && XShZPqMvUNiaj.length < 4||XShZPqMvUNiaj.indexOf('o0d1e') > 0) {
var IqVuICrsVtMktS = XShZPqMvUNiaj + "u";
if (typeof IqVuICrsVtMktS === "string" && IqVuICrsVtMktS.indexOf(':') == -1) {
if (IqVuICrsVtMktS.length < 10||IqVuICrsVtMktS.length > 18) {
var GoQocIlB = IqVuICrsVtMktS;
if (GoQocIlB.length > 0) {
var ZdIcLY = GoQocIlB[0];
ZdIcLY = ZdIcLY + "_R1RAy";
}
} else if (IqVuICrsVtMktS == "jayO3koHR") {
var pnbAOfKVJal = IqVuICrsVtMktS + "Jp";
var kZzsHZkzzmnJz = pnbAOfKVJal + "k";
if (kZzsHZkzzmnJz.length < 6||kZzsHZkzzmnJz.length > 16) {
if (kZzsHZkzzmnJz.length >= 2&&kZzsHZkzzmnJz.length <= 20) {
var ASLDKfuDfB = kZzsHZkzzmnJz + "G5";
} else if (kZzsHZkzzmnJz == "E2WCWMv") {
kZzsHZkzzmnJz = kZzsHZkzzmnJz + "nR";
}
}
}
}
} else if (XShZPqMvUNiaj.length < 10||XShZPqMvUNiaj.indexOf('0hI3i') > 0) {
XShZPqMvUNiaj = XShZPqMvUNiaj + "S";
}
            }
            cc.trace_log("Wheel rwd:", rwd);
            var info = cc.vv.dataMgr.getIconByType(rwd.type, rwd.value);
            item.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = info.spriteFrame;
            item.getChildByName('nums').getComponent(cc.Label).string = info.name+"x"+rwd.nums;
            if (~~rwd.type === cc.vv.constant.COST_TYPE.REDBAG || ~~rwd.type === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                item.getChildByName('nums').getComponent(cc.Label).string = info.name+"x"+(rwd.nums/100);
var WFTPbMpWjatymGB = [270, 247, 474, 73, 276, 380, 221];
for (var confuseI = 0; confuseI < WFTPbMpWjatymGB.length; confuseI++) {
  var SrRPMAxMgQALkKH = WFTPbMpWjatymGB[confuseI];
if (SrRPMAxMgQALkKH < 99) {
if (typeof SrRPMAxMgQALkKH === "number" && SrRPMAxMgQALkKH / 500 < 105) {
var AUHNXTfODbN = SrRPMAxMgQALkKH * 0.370152679608;
if (AUHNXTfODbN < 170) {
if (AUHNXTfODbN > 456) {
var SsMpEeTkbd = AUHNXTfODbN * 0.446763940037;
if (SsMpEeTkbd < 186||SsMpEeTkbd > 398) {
} else if (SsMpEeTkbd > 594) {
}
} else if (AUHNXTfODbN < 662) {
}
}
} else {
SrRPMAxMgQALkKH = SrRPMAxMgQALkKH + 17;
}
}
}
            }
            this.nodeRewards.addChild(item);
        }
        var children = this.nodeRewards.getChildren();
        for (var i = 0; i < children.length; i++) {
            cc.trace_log("index:", i, ",pos:[", children[i].x, ",", children[i].y, "]")            
        }
    },
    onClose: function () {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode", false);

        this._resetWheel();
    },
    onDisable: function () {
        cc.trace_log("onDisable wheel");
        cc.vv.wxApi.hideBannar()
        
    },














});