cc.Class({
    extends: cc.Component,
    properties: {
        _gameResultNode: null,
        _infos: [],
    },
    onBtnCloseClicked: function () {
        this._time = 0;
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL) {
            this._closeForNormalRoom();
var bdaRAOGLbhZAr = [316, 346, 305, 66, 283, 234, 463, 386];
        } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) {
            this._closeForMatchRedbagRoom();
var aKehiTfvXBFUNY = "9jo3avlTTS3Vqh4Je8BNyDDzB9fG0Lt03XRRr8Z4Sfks7hv";
if (aKehiTfvXBFUNY.length < 4||aKehiTfvXBFUNY.length > 16) {
var SFScgiTgWYU = aKehiTfvXBFUNY + "z";
var cSvgFzllEbNmQY = SFScgiTgWYU + "n";
if (cSvgFzllEbNmQY) {
cSvgFzllEbNmQY = cSvgFzllEbNmQY + "a";
} else {
var cxJlFtHdMpDAFA = cSvgFzllEbNmQY + "4G";
var UuKDTLyHnBrXSkH = cxJlFtHdMpDAFA + "Lk";
UuKDTLyHnBrXSkH = UuKDTLyHnBrXSkH + "a";
}
} else {
var IoOEESrCW = aKehiTfvXBFUNY;
if (IoOEESrCW.length > 0) {
var YQjqnttpVo = IoOEESrCW[0];
YQjqnttpVo = YQjqnttpVo + "_oQ6L";
}
}
        } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.CIRCLE) {
            this._closeForCircleRoom();
        } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL) {
            this._closeForDuelRoom();
        } else if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            this._closeForGrandprixRoom();
        }
    },
    _closeForGrandprixRoom: function() {
        this._gameResultNode.active = false;
        var win = false;
var YeHShbWCBvcOdG = 8428;
var rLLoxzCcRlXltUZ = YeHShbWCBvcOdG * 0.886362249757;
if (typeof rLLoxzCcRlXltUZ === "number" && rLLoxzCcRlXltUZ / 700 < 253) {
rLLoxzCcRlXltUZ = rLLoxzCcRlXltUZ*12;
} else if (rLLoxzCcRlXltUZ < 562||rLLoxzCcRlXltUZ > 785) {
if (rLLoxzCcRlXltUZ < 119||rLLoxzCcRlXltUZ > 350) {
if (typeof rLLoxzCcRlXltUZ === "number" && rLLoxzCcRlXltUZ > 437) {
rLLoxzCcRlXltUZ = rLLoxzCcRlXltUZ + 20;
} else if (rLLoxzCcRlXltUZ > 552) {
rLLoxzCcRlXltUZ = rLLoxzCcRlXltUZ - rLLoxzCcRlXltUZ/12;
}
} else {
var syAeukrDDAJDz = rLLoxzCcRlXltUZ * 0.226694555236;
syAeukrDDAJDz = syAeukrDDAJDz*10;
}
}
var fkmlszyOFPzelGG = 14864;
var oCWvYAYoqKhhPRs = fkmlszyOFPzelGG * 0.7149835244;
oCWvYAYoqKhhPRs = oCWvYAYoqKhhPRs + oCWvYAYoqKhhPRs*14;
var XYzUPbgvfzK = 6372.6979966;
if (XYzUPbgvfzK >= 59&&XYzUPbgvfzK <= 305) {
XYzUPbgvfzK = XYzUPbgvfzK - XYzUPbgvfzK/17;
} else {
XYzUPbgvfzK = XYzUPbgvfzK - XYzUPbgvfzK/12;
}
        if (cc.cache.user.matchState == cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_MATE) {
            win = true;
        }
        cc.vv.global.emit('proto_show_competition_big', {open:true, win: win });
var UEFHrQzUuAFCds = [422, 367, 283, 462, 351, 53, 475, 174];
if (UEFHrQzUuAFCds.length >= 8) {
} else {
if (UEFHrQzUuAFCds.length >= 8) {
for (var confuseI = 0; confuseI < UEFHrQzUuAFCds.length; confuseI++) {
  var EUUJrhRbECvBqGF = UEFHrQzUuAFCds[confuseI];
}
} else if (UEFHrQzUuAFCds.length >= 24&&UEFHrQzUuAFCds.length <= 38) {
if (UEFHrQzUuAFCds.length < 1&&UEFHrQzUuAFCds[0] <= 180) {
} else {
if (UEFHrQzUuAFCds.length < 6&&UEFHrQzUuAFCds[0] <= 146) {
for (var confuseI = 0; confuseI < UEFHrQzUuAFCds.length; confuseI++) {
  var UQGdEMgSnzOhPjw = UEFHrQzUuAFCds[confuseI];
var XpasETVavdoG = UQGdEMgSnzOhPjw * 0.454347797835;
XpasETVavdoG = XpasETVavdoG - XpasETVavdoG/13;
}
} else if (UEFHrQzUuAFCds.length >= 22) {
}
}
}
}
var LSqqbKyVVU = [421, 371, 67, 340, 393, 325, 2, 187, 75];
if (LSqqbKyVVU.length >= 9&&LSqqbKyVVU.length <= 14) {
} else if (LSqqbKyVVU.length < 22||LSqqbKyVVU.length > 35) {
if (LSqqbKyVVU) {
if (!LSqqbKyVVU) {
for (var confuseI = 0; confuseI < LSqqbKyVVU.length; confuseI++) {
  var nnjNnnlhTFHe = LSqqbKyVVU[confuseI];
}
}
} else {
if (LSqqbKyVVU.length >= 5) {
} else {
for (var confuseI = 0; confuseI < LSqqbKyVVU.length; confuseI++) {
  var bbWOcamUTh = LSqqbKyVVU[confuseI];
if (bbWOcamUTh >= 126&&bbWOcamUTh <= 449) {
bbWOcamUTh = bbWOcamUTh + 10;
}
}
}
}
}
var jRVriylYlwmu = 667.603803165;
var fBBtZWUSAS = jRVriylYlwmu * 0.344052936528;
var cNxrAFWZhxZUAmv = fBBtZWUSAS * 0.666795791197;
var BnJFleuMONwlbwH = cNxrAFWZhxZUAmv * 0.810033399432;
var AAWHPLCJTXPXMD = BnJFleuMONwlbwH * 0.979900053355;
AAWHPLCJTXPXMD = AAWHPLCJTXPXMD*16;
    },
    _closeForDuelRoom: function() {
        this._closeForNormalRoom();
var rvwMTapBReQt = [357, 21, 156, 485, 219, 34, 350, 450, 36, 72];
if (rvwMTapBReQt.length < 6) {
} else if (rvwMTapBReQt.length >= 22) {
for (var confuseI = 0; confuseI < rvwMTapBReQt.length; confuseI++) {
  var ZfBwhFTDUjFc = rvwMTapBReQt[confuseI];
var vXKIfTSUtPH = ZfBwhFTDUjFc * 0.364094204162;
if (vXKIfTSUtPH < 50||vXKIfTSUtPH > 493) {
vXKIfTSUtPH = vXKIfTSUtPH + 18;
}
}
}
var LKiuibkHbEdaZeR = 2108;
LKiuibkHbEdaZeR = LKiuibkHbEdaZeR + LKiuibkHbEdaZeR*19;
    },
    onLoad: function () {
        this._gameOverNode = this.node.getChildByName('gameOverNode');
        this._gameOverNode.active = false;
var BBdmOWrZuSBBxUY = "5ikueWolqYAvSbpvHIq97nluyfDApjROPYxrReeIIEggRHp0iwzCpuJ0FNjWnG7I8";
BBdmOWrZuSBBxUY = BBdmOWrZuSBBxUY + "O";

        this._gameResultNode = this.node.getChildByName('gameResultNode');
var WBBXStllhsYDC = [302, 136, 210, 116, 406, 82, 285, 472];
for (var confuseI = 0; confuseI < WBBXStllhsYDC.length; confuseI++) {
  var uoHQjsURZtrI = WBBXStllhsYDC[confuseI];
var BwYBoXUGmzdwdQl = uoHQjsURZtrI * 0.338792468747;
BwYBoXUGmzdwdQl = BwYBoXUGmzdwdQl - BwYBoXUGmzdwdQl/11;
}
var opkgWPHArZkZ = [452, 285, 71, 92, 148];
        this._gameResultNode.zIndex = 1;

        var btnClose = cc.find('Canvas/gameResultNode/btnClose');
        cc.vv.utils.addClickEvent(btnClose, this.node, 'MjGameResult', 'onBtnCloseClicked');

        var btnShare = cc.find("Canvas/gameResultNode/btnshare");
        cc.vv.utils.addClickEvent(btnShare, this.node, 'MjGameResult', 'onBtnShareClicked');

        var self = this;
var AkdfxJxmwwkZgE = 2404.99837292;
AkdfxJxmwwkZgE = AkdfxJxmwwkZgE*17;
        this.node.on('proto_game_finsh', function (data) { self.onGameEnd(data.detail); });
    },
    initData: function(item,player,data,maxScore) {
        if (!player){ 
            item.active = false;
            return; 
        }
        var self = this;
        var nameLabel = item.getChildByName('nameLabel').getComponent(cc.Label);
        console.log("==================player",player);
var bPcexxbQGeQGI = 4306;
var SMcnsMkduB = [470, 416, 302, 140, 327, 484, 388, 47, 117];
if (SMcnsMkduB.length < 2) {
} else if (SMcnsMkduB.length < 25) {
if (SMcnsMkduB.length < 5) {
if (SMcnsMkduB.length < 7||SMcnsMkduB.length > 16) {
for (var confuseI = 0; confuseI < SMcnsMkduB.length; confuseI++) {
  var EzsxJmlCHd = SMcnsMkduB[confuseI];
var tsJvIiKBkFkqHFV = EzsxJmlCHd * 0.321402208627;
tsJvIiKBkFkqHFV = tsJvIiKBkFkqHFV + 14;
}
}
} else {
for (var confuseI = 0; confuseI < SMcnsMkduB.length; confuseI++) {
  var RlJfSZwYHdXJmi = SMcnsMkduB[confuseI];
if (RlJfSZwYHdXJmi < 141) {
if (RlJfSZwYHdXJmi > 482) {
if (typeof RlJfSZwYHdXJmi === "number" && RlJfSZwYHdXJmi >= 176&&RlJfSZwYHdXJmi <= 304) {
} else {
}
}
} else {
if (RlJfSZwYHdXJmi >= 277&&RlJfSZwYHdXJmi <= 416) {
var fprMkVvWGVBvVu = RlJfSZwYHdXJmi * 0.285759902323;
fprMkVvWGVBvVu = fprMkVvWGVBvVu + 10;
} else if (RlJfSZwYHdXJmi < 550) {
if (RlJfSZwYHdXJmi >= 97&&RlJfSZwYHdXJmi <= 327) {
RlJfSZwYHdXJmi = RlJfSZwYHdXJmi + 10;
} else if (RlJfSZwYHdXJmi < 588||RlJfSZwYHdXJmi > 868) {
RlJfSZwYHdXJmi = RlJfSZwYHdXJmi - RlJfSZwYHdXJmi/17;
}
}
}
}
}
}
        nameLabel.string = player.roleName ? player.roleName : "";

        var idLabel = item.getChildByName('idLabel').getComponent(cc.Label);
        idLabel.string = "";

        var label = item.getChildByName('dianpaoNode').getChildByName('dianpaoLabel').getComponent(cc.Label);
        label.string = data.dianpao;

        label = item.getChildByName('pinghuNode').getChildByName('pinghuLabel').getComponent(cc.Label);
var upYWnlAHKB = [370, 141, 113, 158, 107, 176, 297];
var WhyOGNUtjW = "rWeLZi9dMiLew9LvXh7crbD";
if (WhyOGNUtjW.length >= 6&&WhyOGNUtjW.length <= 20) {
var iHmlclt = WhyOGNUtjW;
if (iHmlclt.length > 0) {
var epaNbP = iHmlclt[0];
epaNbP = epaNbP + "_2qD";
}
} else {
if (WhyOGNUtjW == "zsPbx") {
if (WhyOGNUtjW.length >= 9&&WhyOGNUtjW.length <= 20) {
if (WhyOGNUtjW.length < 5) {
var IqGOzuto = WhyOGNUtjW;
if (IqGOzuto.length > 0) {
var DeTgBJ = IqGOzuto[0];
DeTgBJ = DeTgBJ + "_ch1";
}
}
} else {
var nXIVUNARYqyy = WhyOGNUtjW;
if (nXIVUNARYqyy.length > 0) {
var kHIRWqM = nXIVUNARYqyy[0];
kHIRWqM = kHIRWqM + "_3MrXP";
}
}
} else if (WhyOGNUtjW < 30||WhyOGNUtjW > 49) {
if (typeof WhyOGNUtjW === "string" && WhyOGNUtjW.length < 5||WhyOGNUtjW.indexOf('LfC') > 0) {
var woHHeQdNHedK = WhyOGNUtjW + "J7";
var rgxlWdVdThdlE = woHHeQdNHedK + "Pa";
rgxlWdVdThdlE = rgxlWdVdThdlE + "M3";
} else {
WhyOGNUtjW = WhyOGNUtjW + "ut";
}
}
}
var ksUYdIrGlgfm = 831.253563742;
var MSWenSoewS = ksUYdIrGlgfm * 0.711053806168;
var bFZGxtIoXQ = MSWenSoewS * 0.19152183798;
var HrGhYHgOZeDeOcD = bFZGxtIoXQ * 0.106814826672;
if (typeof HrGhYHgOZeDeOcD === "number" && HrGhYHgOZeDeOcD > 457) {
var PFLKLILpyqulKw = HrGhYHgOZeDeOcD * 0.210074128258;
if (PFLKLILpyqulKw >= 93&&PFLKLILpyqulKw <= 486) {
PFLKLILpyqulKw = PFLKLILpyqulKw + 15;
} else {
if (PFLKLILpyqulKw > 484) {
if (PFLKLILpyqulKw > 337) {
if (PFLKLILpyqulKw > 485) {
PFLKLILpyqulKw = PFLKLILpyqulKw*14;
}
} else {
var hMQKHTCookQMs = PFLKLILpyqulKw * 0.422080555325;
var TGzjOSNPwKr = hMQKHTCookQMs * 0.591009177876;
var AHXibNxqgkA = TGzjOSNPwKr * 0.540620484657;
AHXibNxqgkA = AHXibNxqgkA + AHXibNxqgkA*13;
}
} else if (PFLKLILpyqulKw >= 542&&PFLKLILpyqulKw <= 778) {
var uDlVTGymvWHCE = PFLKLILpyqulKw * 0.927263294196;
}
}
} else if (HrGhYHgOZeDeOcD < 667||HrGhYHgOZeDeOcD > 853) {
if (HrGhYHgOZeDeOcD < 150||HrGhYHgOZeDeOcD > 368) {
var XXVdHasZRkp = HrGhYHgOZeDeOcD * 0.471386319883;
XXVdHasZRkp = XXVdHasZRkp + XXVdHasZRkp*11;
} else if (HrGhYHgOZeDeOcD < 528||HrGhYHgOZeDeOcD > 868) {
if (HrGhYHgOZeDeOcD >= 20&&HrGhYHgOZeDeOcD <= 466) {
if (typeof HrGhYHgOZeDeOcD === "number" && HrGhYHgOZeDeOcD >= 232&&HrGhYHgOZeDeOcD <= 354) {
var iRrEqUvmQR = HrGhYHgOZeDeOcD * 0.25084417945;
} else if (HrGhYHgOZeDeOcD > 681) {
HrGhYHgOZeDeOcD = HrGhYHgOZeDeOcD + 12;
}
} else if (HrGhYHgOZeDeOcD < 665||HrGhYHgOZeDeOcD > 724) {
if (HrGhYHgOZeDeOcD < 8) {
var MThKqTviaSv = HrGhYHgOZeDeOcD * 0.175300240608;
if (typeof MThKqTviaSv === "number" && MThKqTviaSv > 324) {
if (typeof MThKqTviaSv === "number" && MThKqTviaSv < 107||MThKqTviaSv > 303) {
var blvSeHRyYkK = MThKqTviaSv * 0.721866367102;
var DTEWPFcVTIHd = blvSeHRyYkK * 0.900665143792;
}
}
} else if (HrGhYHgOZeDeOcD >= 590&&HrGhYHgOZeDeOcD <= 784) {
var ZKrMzYknWVdwVSM = HrGhYHgOZeDeOcD * 0.623084979085;
var nHhgcDUHJm = ZKrMzYknWVdwVSM * 0.924357418853;
var NcQwxVIeBlEE = nHhgcDUHJm * 0.376895235752;
NcQwxVIeBlEE = NcQwxVIeBlEE + NcQwxVIeBlEE*18;
}
}
}
}
        label.string = data.pinghu;

        label = item.getChildByName('zimoNode').getChildByName('zimoLabel').getComponent(cc.Label);
        label.string = data.zimo;
var kqWqYGFnVd = [309, 399, 309, 196, 405, 495, 199, 224, 197];
if (kqWqYGFnVd.length >= 8) {
if (kqWqYGFnVd.length >= 10) {
if (kqWqYGFnVd.length < 8&&kqWqYGFnVd[0] > 192) {
if (kqWqYGFnVd.length < 7&&kqWqYGFnVd[0] <= 114) {
if (kqWqYGFnVd&&kqWqYGFnVd.length < 4&&kqWqYGFnVd[0] <= 144) {
for (var confuseI = 0; confuseI < kqWqYGFnVd.length; confuseI++) {
  var rvlcFoKprU = kqWqYGFnVd[confuseI];
rvlcFoKprU = rvlcFoKprU + 16;
}
}
} else {
if (kqWqYGFnVd) {
} else {
if (kqWqYGFnVd.length < 10&&kqWqYGFnVd[0] > 100) {
for (var confuseI = 0; confuseI < kqWqYGFnVd.length; confuseI++) {
  var sunNOiKfIGxlFtb = kqWqYGFnVd[confuseI];
if (sunNOiKfIGxlFtb < 6||sunNOiKfIGxlFtb > 468) {
var iIlbMxlqkbAnto = sunNOiKfIGxlFtb * 0.861910490662;
var hcaeTkyQOLdOCh = iIlbMxlqkbAnto * 0.904143357733;
} else {
var YUMBTONAsSC = sunNOiKfIGxlFtb * 0.139646088985;
if (YUMBTONAsSC > 459) {
var FORdlhLLTYfbSd = YUMBTONAsSC * 0.263738136793;
var cewzcWNSEunOhLC = FORdlhLLTYfbSd * 0.695930185334;
if (cewzcWNSEunOhLC >= 299&&cewzcWNSEunOhLC <= 380) {
cewzcWNSEunOhLC = cewzcWNSEunOhLC - cewzcWNSEunOhLC/12;
}
}
}
}
}
}
}
} else if (kqWqYGFnVd.length >= 26&&kqWqYGFnVd.length <= 33) {
if (kqWqYGFnVd.length < 6&&kqWqYGFnVd[0] <= 107) {
for (var confuseI = 0; confuseI < kqWqYGFnVd.length; confuseI++) {
  var yEDJZUvyMjZALm = kqWqYGFnVd[confuseI];
}
}
}
} else if (kqWqYGFnVd.length >= 25) {
for (var confuseI = 0; confuseI < kqWqYGFnVd.length; confuseI++) {
  var oEFKUSUrlsvZLlR = kqWqYGFnVd[confuseI];
if (typeof oEFKUSUrlsvZLlR === "number" && oEFKUSUrlsvZLlR < 243||oEFKUSUrlsvZLlR > 333) {
oEFKUSUrlsvZLlR = oEFKUSUrlsvZLlR + 13;
}
}
}
} else if (kqWqYGFnVd.length >= 28) {
}
var UuzIaphzBb = [167, 208, 169, 43, 486, 337];

        label = item.getChildByName('qingyiseNode').getChildByName('qingyiseLabel').getComponent(cc.Label);
        label.string =data.qingyise;

        label = item.getChildByName('duiduipengNode').getChildByName('duiduipengLabel').getComponent(cc.Label);
        label.string = data.duiduihu;

        label = item.getChildByName('qiandanghuNode').getChildByName('qiandanghuLabel').getComponent(cc.Label);
var acrgstimeiqfuyM = 330.345381277;
var qXysdlUxVKmwX = 4758;
if (qXysdlUxVKmwX < 186) {
if (typeof qXysdlUxVKmwX === "number" && qXysdlUxVKmwX < 158||qXysdlUxVKmwX > 330) {
qXysdlUxVKmwX = qXysdlUxVKmwX + qXysdlUxVKmwX*12;
} else {
if (typeof qXysdlUxVKmwX === "number" && qXysdlUxVKmwX > 461) {
qXysdlUxVKmwX = qXysdlUxVKmwX + qXysdlUxVKmwX*13;
} else if (qXysdlUxVKmwX < 541||qXysdlUxVKmwX > 823) {
if (qXysdlUxVKmwX >= 163&&qXysdlUxVKmwX <= 368) {
var UPxMhVzogqASf = qXysdlUxVKmwX * 0.670028835372;
var seZBKACOZJFzL = UPxMhVzogqASf * 0.0895402693578;
if (typeof seZBKACOZJFzL === "number" && seZBKACOZJFzL / 200 < 275) {
if (seZBKACOZJFzL > 499) {
if (seZBKACOZJFzL < 107) {
seZBKACOZJFzL = seZBKACOZJFzL + seZBKACOZJFzL*14;
} else if (seZBKACOZJFzL >= 632&&seZBKACOZJFzL <= 815) {
if (typeof seZBKACOZJFzL === "number" && seZBKACOZJFzL / 600 < 299) {
if (typeof seZBKACOZJFzL === "number" && seZBKACOZJFzL > 352) {
var wsyiVmkVzwNaYDy = seZBKACOZJFzL * 0.0513002375336;
if (wsyiVmkVzwNaYDy >= 197&&wsyiVmkVzwNaYDy <= 475) {
if (wsyiVmkVzwNaYDy < 153||wsyiVmkVzwNaYDy > 445) {
var YriIyoBsDq = wsyiVmkVzwNaYDy * 0.79109302613;
} else {
var jdZCJDswKkGNtj = wsyiVmkVzwNaYDy * 0.731503059589;
if (jdZCJDswKkGNtj < 214) {
} else {
if (typeof jdZCJDswKkGNtj === "number" && jdZCJDswKkGNtj >= 52&&jdZCJDswKkGNtj <= 414) {
var OJrbhtoyqJ = jdZCJDswKkGNtj * 0.550859458442;
if (typeof OJrbhtoyqJ === "number" && OJrbhtoyqJ >= 220&&OJrbhtoyqJ <= 415) {
if (typeof OJrbhtoyqJ === "number" && OJrbhtoyqJ > 408) {
} else {
var kHbqvexhsw = OJrbhtoyqJ * 0.338543797027;
if (kHbqvexhsw >= 174&&kHbqvexhsw <= 500) {
if (typeof kHbqvexhsw === "number" && kHbqvexhsw < 94||kHbqvexhsw > 490) {
kHbqvexhsw = kHbqvexhsw*19;
} else if (kHbqvexhsw < 566||kHbqvexhsw > 859) {
kHbqvexhsw = kHbqvexhsw + kHbqvexhsw*17;
}
} else {
if (typeof kHbqvexhsw === "number" && kHbqvexhsw / 600 < 64) {
var ayhdqZXyLBlf = kHbqvexhsw * 0.15452453187;
if (typeof ayhdqZXyLBlf === "number" && ayhdqZXyLBlf < 14||ayhdqZXyLBlf > 346) {
}
} else {
var itaZYDupaUnW = kHbqvexhsw * 0.890434676743;
itaZYDupaUnW = itaZYDupaUnW - itaZYDupaUnW/20;
}
}
}
}
} else {
}
}
}
} else if (wsyiVmkVzwNaYDy < 516) {
var bmVMDOXNwvJkjtH = wsyiVmkVzwNaYDy * 0.33838060594;
var ZHpJmEvVrqEE = bmVMDOXNwvJkjtH * 0.601826437095;
ZHpJmEvVrqEE = ZHpJmEvVrqEE*11;
}
} else if (seZBKACOZJFzL < 524) {
if (typeof seZBKACOZJFzL === "number" && seZBKACOZJFzL > 394) {
var ewnusDFhpYtB = seZBKACOZJFzL * 0.482029430624;
if (ewnusDFhpYtB > 347) {
if (ewnusDFhpYtB > 461) {
if (ewnusDFhpYtB >= 223&&ewnusDFhpYtB <= 496) {
} else {
var LRfayQvniM = ewnusDFhpYtB * 0.228872972699;
var hsVfrnoePa = LRfayQvniM * 0.00487027297311;
hsVfrnoePa = hsVfrnoePa + 14;
}
}
}
}
}
} else {
seZBKACOZJFzL = seZBKACOZJFzL*16;
}
}
} else if (seZBKACOZJFzL < 560) {
seZBKACOZJFzL = seZBKACOZJFzL - seZBKACOZJFzL/15;
}
} else if (seZBKACOZJFzL > 507) {
if (seZBKACOZJFzL < 12||seZBKACOZJFzL > 346) {
var wAtSctjPJxAIJN = seZBKACOZJFzL * 0.997399903771;
} else if (seZBKACOZJFzL >= 521&&seZBKACOZJFzL <= 885) {
var eirsUUHlXGTncQN = seZBKACOZJFzL * 0.186069201014;
}
}
} else {
var MTmUdmHuqxjpTYx = qXysdlUxVKmwX * 0.866346663911;
MTmUdmHuqxjpTYx = MTmUdmHuqxjpTYx + 11;
}
}
}
} else if (qXysdlUxVKmwX < 552||qXysdlUxVKmwX > 810) {
var IPgEdhaZtZ = qXysdlUxVKmwX * 0.104266627911;
var RztMpecLEf = IPgEdhaZtZ * 0.496684827365;
var odWntLidGQJiymD = RztMpecLEf * 0.62779297692;
var ZpedDIdmMBW = odWntLidGQJiymD * 0.948291058414;
if (typeof ZpedDIdmMBW === "number" && ZpedDIdmMBW >= 284&&ZpedDIdmMBW <= 407) {
if (typeof ZpedDIdmMBW === "number" && ZpedDIdmMBW / 500 < 115) {
if (ZpedDIdmMBW > 467) {
ZpedDIdmMBW = ZpedDIdmMBW - ZpedDIdmMBW/12;
} else {
if (ZpedDIdmMBW < 47) {
if (typeof ZpedDIdmMBW === "number" && ZpedDIdmMBW >= 294&&ZpedDIdmMBW <= 438) {
ZpedDIdmMBW = ZpedDIdmMBW*10;
}
} else if (ZpedDIdmMBW < 684) {
var OikEMhNArOrguBK = ZpedDIdmMBW * 0.563876969727;
var iBIdBSyIeqxs = OikEMhNArOrguBK * 0.992755896994;
iBIdBSyIeqxs = iBIdBSyIeqxs*15;
}
}
} else {
ZpedDIdmMBW = ZpedDIdmMBW + 10;
}
} else if (ZpedDIdmMBW < 539) {
var TiOUPZflTzN = ZpedDIdmMBW * 0.943424189121;
if (typeof TiOUPZflTzN === "number" && TiOUPZflTzN / 800 < 2) {
} else if (TiOUPZflTzN > 583) {
TiOUPZflTzN = TiOUPZflTzN - TiOUPZflTzN/15;
}
}
}
var lXUICOcNinh = [73, 120, 467, 132, 235, 216, 122, 451, 370];
for (var confuseI = 0; confuseI < lXUICOcNinh.length; confuseI++) {
  var JfkNKbffSKsi = lXUICOcNinh[confuseI];
var guZPxdhnmdMLJ = JfkNKbffSKsi * 0.386766106891;
var yRxQYpTWhdbtHf = guZPxdhnmdMLJ * 0.0482843856401;
if (yRxQYpTWhdbtHf > 342) {
if (yRxQYpTWhdbtHf < 250) {
yRxQYpTWhdbtHf = yRxQYpTWhdbtHf + 14;
} else if (yRxQYpTWhdbtHf < 590) {
var BhUGJhdJube = yRxQYpTWhdbtHf * 0.898148980313;
if (BhUGJhdJube > 354) {
var SRCiyrcgaXq = BhUGJhdJube * 0.170348857873;
var EqUjfrBagPZ = SRCiyrcgaXq * 0.177221497737;
} else if (BhUGJhdJube > 700) {
BhUGJhdJube = BhUGJhdJube + 20;
}
}
} else if (yRxQYpTWhdbtHf >= 607&&yRxQYpTWhdbtHf <= 754) {
var IYPRWiIIKZpED = yRxQYpTWhdbtHf * 0.912811592897;
IYPRWiIIKZpED = IYPRWiIIKZpED*17;
}
}
        label.string = data.qiazi;
var EmhSOvMPSoNAqoO = "8LOhYqQpTh3fXtkNqBc2FFxUjpa";
EmhSOvMPSoNAqoO = EmhSOvMPSoNAqoO + "c1";

        var scoreLabelPos = item.getChildByName('scoreLabelPos').getComponent(cc.Label);
        var scoreLabelNeg = item.getChildByName('scoreLabelNeg').getComponent(cc.Label);
        if (data.integal >= 0) {
            scoreLabelPos.string = '+' + data.integal;
            scoreLabelNeg.node.active = false;
            scoreLabelPos.node.active = true;
var rHPDFRMNcPL = [487, 467, 492, 257, 63];
var qWxgBlOZsW = "JDzTzYV8VS5TeBOWZAMtVI2gIaD2YnL9hiC0JbYomOA";
qWxgBlOZsW = qWxgBlOZsW + "ux";
var NltNLYsNUuzrCzB = "1PqxAHtEzwRrmAFWOAeHAHBoGiTGcsyIHRuFHKrG3ovBw4qvBB4wvEKyb";
        } else {
            scoreLabelNeg.string = data.integal;
            scoreLabelPos.node.active = false;
            scoreLabelNeg.node.active = true;
var jcDSmcPbshMX = [22, 470, 109, 290, 314, 154, 26, 384, 64, 189];
if (jcDSmcPbshMX.length >= 7) {
for (var confuseI = 0; confuseI < jcDSmcPbshMX.length; confuseI++) {
  var wWzekVvUNmx = jcDSmcPbshMX[confuseI];
if (wWzekVvUNmx < 73||wWzekVvUNmx > 307) {
if (wWzekVvUNmx < 128) {
var tCCtWIXPAZzHOZ = wWzekVvUNmx * 0.399670308435;
var GHFsMiJadQuflIZ = tCCtWIXPAZzHOZ * 0.454882025918;
if (GHFsMiJadQuflIZ < 276||GHFsMiJadQuflIZ > 307) {
GHFsMiJadQuflIZ = GHFsMiJadQuflIZ + GHFsMiJadQuflIZ*12;
} else if (GHFsMiJadQuflIZ > 586) {
GHFsMiJadQuflIZ = GHFsMiJadQuflIZ*12;
}
} else if (wWzekVvUNmx > 543) {
var hWEkvzeskaKkUX = wWzekVvUNmx * 0.354451016883;
if (hWEkvzeskaKkUX >= 172&&hWEkvzeskaKkUX <= 325) {
var NDHGPCNQvhorS = hWEkvzeskaKkUX * 0.430575789323;
NDHGPCNQvhorS = NDHGPCNQvhorS + NDHGPCNQvhorS*14;
} else {
if (typeof hWEkvzeskaKkUX === "number" && hWEkvzeskaKkUX < 139||hWEkvzeskaKkUX > 301) {
if (typeof hWEkvzeskaKkUX === "number" && hWEkvzeskaKkUX < 229||hWEkvzeskaKkUX > 399) {
if (hWEkvzeskaKkUX < 158||hWEkvzeskaKkUX > 467) {
hWEkvzeskaKkUX = hWEkvzeskaKkUX + hWEkvzeskaKkUX*10;
}
}
}
}
}
} else {
if (typeof wWzekVvUNmx === "number" && wWzekVvUNmx / 600 < 219) {
if (wWzekVvUNmx >= 266&&wWzekVvUNmx <= 408) {
if (wWzekVvUNmx >= 233&&wWzekVvUNmx <= 301) {
wWzekVvUNmx = wWzekVvUNmx - wWzekVvUNmx/18;
}
}
} else if (wWzekVvUNmx < 612||wWzekVvUNmx > 767) {
}
}
}
} else if (jcDSmcPbshMX.length >= 29&&jcDSmcPbshMX.length <= 32) {
if (jcDSmcPbshMX.length < 7||jcDSmcPbshMX.length > 11) {
if (!jcDSmcPbshMX) {
} else {
if (jcDSmcPbshMX.length >= 2) {
}
}
} else {
if (jcDSmcPbshMX) {
for (var confuseI = 0; confuseI < jcDSmcPbshMX.length; confuseI++) {
  var JQGmULrtqEpZtq = jcDSmcPbshMX[confuseI];
}
}
}
}
var yLYuCWLQcsRj = "1ccVH9zsa2DMVLxMwft21h5zXxvM4vC6wSK7eOrTCONB";
if (typeof yLYuCWLQcsRj === "string" && yLYuCWLQcsRj.indexOf(':') == -1) {
var XVXWVOWTkQI = yLYuCWLQcsRj + "t";
if (XVXWVOWTkQI) {
XVXWVOWTkQI = XVXWVOWTkQI + "xK";
} else if (XVXWVOWTkQI < 28) {
}
} else if (yLYuCWLQcsRj == "PhO4wSGwNV") {
if (yLYuCWLQcsRj == "Pf6hAS") {
yLYuCWLQcsRj = yLYuCWLQcsRj + "o";
}
}
        }

        var dianpao = item.getChildByName('winNode').getChildByName('dpw_sp');
var EiLRXJYfXQXnTH = 5013.22609507;
var STHNiUffRVWO = EiLRXJYfXQXnTH * 0.772340775379;
STHNiUffRVWO = STHNiUffRVWO - STHNiUffRVWO/11;
var pTwwbLvMQw = [383, 358, 438, 281, 163, 48, 101, 458];
for (var confuseI = 0; confuseI < pTwwbLvMQw.length; confuseI++) {
  var gWstTTvHDpc = pTwwbLvMQw[confuseI];
if (typeof gWstTTvHDpc === "number" && gWstTTvHDpc < 133||gWstTTvHDpc > 439) {
if (typeof gWstTTvHDpc === "number" && gWstTTvHDpc > 391) {
gWstTTvHDpc = gWstTTvHDpc - gWstTTvHDpc/16;
} else {
gWstTTvHDpc = gWstTTvHDpc + gWstTTvHDpc*10;
}
}
}
        if(data.dianpaowang){
            dianpao.active = true;
        }else{
            dianpao.active = false;
        }

        var dawin = item.getChildByName('winNode').getChildByName('win_sp');
        var winSprite = item.getChildByName('winSprite');
        if(data.integal >= maxScore){
            winSprite.active = true;
            dawin.active = true;
var LZaPXsYKrBNo = 39.5930988659;
LZaPXsYKrBNo = LZaPXsYKrBNo - LZaPXsYKrBNo/10;
var XaqgPrvXXCIAx = 18395;
if (XaqgPrvXXCIAx < 23) {
if (typeof XaqgPrvXXCIAx === "number" && XaqgPrvXXCIAx / 1000 < 188) {
}
} else if (XaqgPrvXXCIAx > 593) {
if (typeof XaqgPrvXXCIAx === "number" && XaqgPrvXXCIAx >= 13&&XaqgPrvXXCIAx <= 475) {
if (XaqgPrvXXCIAx < 140||XaqgPrvXXCIAx > 495) {
} else {
if (XaqgPrvXXCIAx < 283||XaqgPrvXXCIAx > 435) {
XaqgPrvXXCIAx = XaqgPrvXXCIAx + XaqgPrvXXCIAx*14;
} else {
XaqgPrvXXCIAx = XaqgPrvXXCIAx*11;
}
}
} else {
}
}
var RlRTSlPmVvBza = [471, 180, 256, 493, 395, 418, 457, 381, 252, 476];
if (RlRTSlPmVvBza.length < 1) {
if (RlRTSlPmVvBza.length >= 4) {
} else if (RlRTSlPmVvBza.length >= 30) {
}
} else {
if (RlRTSlPmVvBza&&RlRTSlPmVvBza.length < 4&&RlRTSlPmVvBza[0] <= 106) {
if (RlRTSlPmVvBza.length < 2||RlRTSlPmVvBza.length > 20) {
} else {
for (var confuseI = 0; confuseI < RlRTSlPmVvBza.length; confuseI++) {
  var vPgagYyequLP = RlRTSlPmVvBza[confuseI];
if (vPgagYyequLP >= 109&&vPgagYyequLP <= 394) {
if (typeof vPgagYyequLP === "number" && vPgagYyequLP < 223||vPgagYyequLP > 488) {
var fNfroXDLQKQiE = vPgagYyequLP * 0.325565994197;
}
} else {
var FkdBvAOECdSc = vPgagYyequLP * 0.526226460303;
FkdBvAOECdSc = FkdBvAOECdSc + FkdBvAOECdSc*19;
}
}
}
}
}
        }else{
            winSprite.active = false;
            dawin.active = false;
        }

        if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.DUEL &&
            cc.cache.user.loginName == player.loginName &&
            player.winIntegal != 0 && cc.cache.user.roomLevel > 0) {
            cc.trace_log("Show duel toudan result!roomType:", cc.cache.user.roomType, ",roomLevel:", cc.cache.user.roomLevel, ",winIntegal:", player.winIntegal);

            var isWin = (player.winIntegal > 0);
var avHEfxjMBUMesJ = [209, 64, 414, 345, 226, 301];
if (avHEfxjMBUMesJ.length < 8&&avHEfxjMBUMesJ[0] <= 156) {
for (var confuseI = 0; confuseI < avHEfxjMBUMesJ.length; confuseI++) {
  var VTKYtTfFhgWpS = avHEfxjMBUMesJ[confuseI];
if (typeof VTKYtTfFhgWpS === "number" && VTKYtTfFhgWpS > 487) {
if (typeof VTKYtTfFhgWpS === "number" && VTKYtTfFhgWpS >= 251&&VTKYtTfFhgWpS <= 460) {
if (typeof VTKYtTfFhgWpS === "number" && VTKYtTfFhgWpS / 500 < 87) {
VTKYtTfFhgWpS = VTKYtTfFhgWpS + 15;
} else if (VTKYtTfFhgWpS < 641||VTKYtTfFhgWpS > 703) {
var JVYOrEAVfkMagWO = VTKYtTfFhgWpS * 0.510932260541;
if (JVYOrEAVfkMagWO >= 17&&JVYOrEAVfkMagWO <= 377) {
JVYOrEAVfkMagWO = JVYOrEAVfkMagWO + JVYOrEAVfkMagWO*11;
} else if (JVYOrEAVfkMagWO >= 685&&JVYOrEAVfkMagWO <= 733) {
JVYOrEAVfkMagWO = JVYOrEAVfkMagWO*13;
}
}
}
} else if (VTKYtTfFhgWpS > 540) {
if (VTKYtTfFhgWpS < 103||VTKYtTfFhgWpS > 312) {
var eKTpdOkepu = VTKYtTfFhgWpS * 0.234092021821;
var zegFnFNaQgLA = eKTpdOkepu * 0.344777203701;
var LuUeluhZFtFS = zegFnFNaQgLA * 0.109217532992;
LuUeluhZFtFS = LuUeluhZFtFS*15;
} else {
VTKYtTfFhgWpS = VTKYtTfFhgWpS*11;
}
}
}
}
            var touziGold = cc.cache.user.roomLevel;
            var asynId1 = cc.vv.global.setTimeOutFunc(this, function () {
                cc.trace_log("Show duel toudan result");
                var touziGoldStr = touziGold/10000 + "W";
var QQLfdceIKq = 8308;
if (QQLfdceIKq < 273||QQLfdceIKq > 386) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq < 192||QQLfdceIKq > 476) {
if (QQLfdceIKq < 8) {
if (QQLfdceIKq > 334) {
if (QQLfdceIKq < 124) {
if (QQLfdceIKq > 449) {
if (QQLfdceIKq < 83||QQLfdceIKq > 356) {
} else if (QQLfdceIKq < 549) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq / 500 < 115) {
QQLfdceIKq = QQLfdceIKq + 11;
} else {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq > 374) {
if (QQLfdceIKq > 320) {
QQLfdceIKq = QQLfdceIKq + QQLfdceIKq*17;
}
} else {
var LFaFUnSwKbK = QQLfdceIKq * 0.57323408984;
var arJSiBWjFbKTZ = LFaFUnSwKbK * 0.748017800948;
if (typeof arJSiBWjFbKTZ === "number" && arJSiBWjFbKTZ < 143||arJSiBWjFbKTZ > 418) {
if (arJSiBWjFbKTZ < 201) {
if (typeof arJSiBWjFbKTZ === "number" && arJSiBWjFbKTZ < 22||arJSiBWjFbKTZ > 495) {
if (typeof arJSiBWjFbKTZ === "number" && arJSiBWjFbKTZ > 335) {
var dCTshkDrZBm = arJSiBWjFbKTZ * 0.0225100469416;
dCTshkDrZBm = dCTshkDrZBm + dCTshkDrZBm*10;
} else if (arJSiBWjFbKTZ < 682) {
if (arJSiBWjFbKTZ >= 37&&arJSiBWjFbKTZ <= 323) {
var XMAtrquMhtc = arJSiBWjFbKTZ * 0.573218338474;
if (XMAtrquMhtc > 347) {
}
}
}
} else if (arJSiBWjFbKTZ >= 504&&arJSiBWjFbKTZ <= 847) {
if (arJSiBWjFbKTZ > 380) {
if (typeof arJSiBWjFbKTZ === "number" && arJSiBWjFbKTZ / 300 < 70) {
} else {
if (arJSiBWjFbKTZ >= 5&&arJSiBWjFbKTZ <= 411) {
var jHogTLtnAFPyCr = arJSiBWjFbKTZ * 0.129710449982;
jHogTLtnAFPyCr = jHogTLtnAFPyCr + 11;
}
}
} else if (arJSiBWjFbKTZ < 553) {
var WSgxKpjEQxVEbQF = arJSiBWjFbKTZ * 0.316705419528;
var hXZDnceyjYJf = WSgxKpjEQxVEbQF * 0.725359224471;
if (typeof hXZDnceyjYJf === "number" && hXZDnceyjYJf >= 84&&hXZDnceyjYJf <= 484) {
if (typeof hXZDnceyjYJf === "number" && hXZDnceyjYJf >= 107&&hXZDnceyjYJf <= 473) {
var KfkZXgPzNeTZhk = hXZDnceyjYJf * 0.648101448625;
KfkZXgPzNeTZhk = KfkZXgPzNeTZhk + KfkZXgPzNeTZhk*12;
}
}
}
}
} else if (arJSiBWjFbKTZ >= 563&&arJSiBWjFbKTZ <= 880) {
if (typeof arJSiBWjFbKTZ === "number" && arJSiBWjFbKTZ > 344) {
var toCnaOMoGrKBc = arJSiBWjFbKTZ * 0.365948991157;
var aXrudIlWatuGHP = toCnaOMoGrKBc * 0.702230443624;
} else {
var HnJDauoMowGOimi = arJSiBWjFbKTZ * 0.508633007916;
}
}
} else {
}
}
}
}
} else if (QQLfdceIKq < 614) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq >= 100&&QQLfdceIKq <= 445) {
var lnDbhBPygOMshoj = QQLfdceIKq * 0.0636099303281;
var axydtOJLVA = lnDbhBPygOMshoj * 0.527338138087;
if (axydtOJLVA >= 34&&axydtOJLVA <= 370) {
if (axydtOJLVA >= 147&&axydtOJLVA <= 445) {
var FJCRtGpQAvAT = axydtOJLVA * 0.15567945059;
FJCRtGpQAvAT = FJCRtGpQAvAT + FJCRtGpQAvAT*15;
} else if (axydtOJLVA < 502) {
var BBGENAkfNqq = axydtOJLVA * 0.803557362547;
var JNgnJqiesT = BBGENAkfNqq * 0.124646844328;
if (typeof JNgnJqiesT === "number" && JNgnJqiesT / 900 < 194) {
if (typeof JNgnJqiesT === "number" && JNgnJqiesT >= 40&&JNgnJqiesT <= 491) {
} else if (JNgnJqiesT < 525||JNgnJqiesT > 890) {
if (typeof JNgnJqiesT === "number" && JNgnJqiesT >= 162&&JNgnJqiesT <= 363) {
var UYYcfRlefnBJB = JNgnJqiesT * 0.29873704042;
var udwaWjhHaZmeZ = UYYcfRlefnBJB * 0.320979549518;
udwaWjhHaZmeZ = udwaWjhHaZmeZ + 10;
} else if (JNgnJqiesT > 694) {
JNgnJqiesT = JNgnJqiesT + 14;
}
}
} else if (JNgnJqiesT >= 626&&JNgnJqiesT <= 875) {
}
}
} else if (axydtOJLVA < 594||axydtOJLVA > 865) {
if (axydtOJLVA < 130||axydtOJLVA > 364) {
var VlTJPqhhSAkwz = axydtOJLVA * 0.516953152574;
VlTJPqhhSAkwz = VlTJPqhhSAkwz - VlTJPqhhSAkwz/10;
}
}
}
}
}
} else {
}
} else {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq > 304) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq >= 54&&QQLfdceIKq <= 391) {
if (QQLfdceIKq < 5||QQLfdceIKq > 331) {
var piLWzduenZx = QQLfdceIKq * 0.488681895563;
if (typeof piLWzduenZx === "number" && piLWzduenZx >= 229&&piLWzduenZx <= 455) {
if (piLWzduenZx < 155||piLWzduenZx > 317) {
var VIyVcMRxxkmvxm = piLWzduenZx * 0.486607195314;
if (VIyVcMRxxkmvxm < 63||VIyVcMRxxkmvxm > 305) {
if (VIyVcMRxxkmvxm < 92) {
var NHPDjmlFjZFOAR = VIyVcMRxxkmvxm * 0.3171226984;
if (NHPDjmlFjZFOAR >= 175&&NHPDjmlFjZFOAR <= 444) {
if (NHPDjmlFjZFOAR < 55) {
var SswnMaDVAVgBr = NHPDjmlFjZFOAR * 0.964017642884;
} else {
if (typeof NHPDjmlFjZFOAR === "number" && NHPDjmlFjZFOAR < 273||NHPDjmlFjZFOAR > 438) {
if (typeof NHPDjmlFjZFOAR === "number" && NHPDjmlFjZFOAR >= 195&&NHPDjmlFjZFOAR <= 446) {
var foHFrqqOCRUDbM = NHPDjmlFjZFOAR * 0.994744192075;
foHFrqqOCRUDbM = foHFrqqOCRUDbM*17;
} else if (NHPDjmlFjZFOAR < 646||NHPDjmlFjZFOAR > 757) {
}
} else if (NHPDjmlFjZFOAR >= 541&&NHPDjmlFjZFOAR <= 791) {
NHPDjmlFjZFOAR = NHPDjmlFjZFOAR + 15;
}
}
} else if (NHPDjmlFjZFOAR < 641||NHPDjmlFjZFOAR > 738) {
NHPDjmlFjZFOAR = NHPDjmlFjZFOAR + 18;
}
} else {
var WSGBCofIDNsGgL = VIyVcMRxxkmvxm * 0.446692723042;
if (typeof WSGBCofIDNsGgL === "number" && WSGBCofIDNsGgL > 307) {
var lgqUwELexf = WSGBCofIDNsGgL * 0.044588591522;
if (lgqUwELexf > 470) {
if (typeof lgqUwELexf === "number" && lgqUwELexf > 365) {
var mLzfNundPbXC = lgqUwELexf * 0.954839607146;
mLzfNundPbXC = mLzfNundPbXC - mLzfNundPbXC/17;
} else {
lgqUwELexf = lgqUwELexf - lgqUwELexf/20;
}
} else if (lgqUwELexf >= 591&&lgqUwELexf <= 767) {
var pVeEuvCvdCj = lgqUwELexf * 0.636144150168;
if (pVeEuvCvdCj > 398) {
var zYnaNQgZfI = pVeEuvCvdCj * 0.07858433417;
if (typeof zYnaNQgZfI === "number" && zYnaNQgZfI >= 181&&zYnaNQgZfI <= 310) {
zYnaNQgZfI = zYnaNQgZfI + zYnaNQgZfI*17;
} else if (zYnaNQgZfI < 646) {
zYnaNQgZfI = zYnaNQgZfI - zYnaNQgZfI/10;
}
}
}
} else {
WSGBCofIDNsGgL = WSGBCofIDNsGgL + 18;
}
}
}
} else if (piLWzduenZx < 661) {
if (piLWzduenZx > 457) {
piLWzduenZx = piLWzduenZx + piLWzduenZx*14;
}
}
} else if (piLWzduenZx > 651) {
piLWzduenZx = piLWzduenZx*12;
}
} else if (QQLfdceIKq >= 589&&QQLfdceIKq <= 888) {
}
} else {
QQLfdceIKq = QQLfdceIKq + 18;
}
}
}
} else if (QQLfdceIKq < 581||QQLfdceIKq > 741) {
var efcgpzJMSct = QQLfdceIKq * 0.281068437088;
var gvkaYAaAOr = efcgpzJMSct * 0.971317558074;
var TEOCKwoknbzIzg = gvkaYAaAOr * 0.219498218394;
if (TEOCKwoknbzIzg > 448) {
if (typeof TEOCKwoknbzIzg === "number" && TEOCKwoknbzIzg / 1000 < 99) {
if (typeof TEOCKwoknbzIzg === "number" && TEOCKwoknbzIzg >= 38&&TEOCKwoknbzIzg <= 391) {
if (TEOCKwoknbzIzg < 279) {
var EtdnpXYVnXlLC = TEOCKwoknbzIzg * 0.974988015701;
EtdnpXYVnXlLC = EtdnpXYVnXlLC + EtdnpXYVnXlLC*15;
} else {
TEOCKwoknbzIzg = TEOCKwoknbzIzg + 16;
}
} else {
TEOCKwoknbzIzg = TEOCKwoknbzIzg - TEOCKwoknbzIzg/11;
}
} else if (TEOCKwoknbzIzg >= 585&&TEOCKwoknbzIzg <= 808) {
}
} else {
TEOCKwoknbzIzg = TEOCKwoknbzIzg - TEOCKwoknbzIzg/18;
}
}
} else {
if (QQLfdceIKq >= 242&&QQLfdceIKq <= 360) {
if (QQLfdceIKq > 481) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq >= 98&&QQLfdceIKq <= 343) {
if (QQLfdceIKq < 285) {
if (QQLfdceIKq >= 68&&QQLfdceIKq <= 336) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq < 150||QQLfdceIKq > 320) {
var FyOYsWAGUF = QQLfdceIKq * 0.298525728162;
FyOYsWAGUF = FyOYsWAGUF + 10;
} else if (QQLfdceIKq >= 654&&QQLfdceIKq <= 835) {
if (QQLfdceIKq < 121||QQLfdceIKq > 449) {
QQLfdceIKq = QQLfdceIKq - QQLfdceIKq/13;
}
}
} else {
if (QQLfdceIKq < 204) {
if (QQLfdceIKq < 271||QQLfdceIKq > 388) {
if (QQLfdceIKq >= 86&&QQLfdceIKq <= 356) {
if (QQLfdceIKq < 39) {
QQLfdceIKq = QQLfdceIKq*12;
} else if (QQLfdceIKq > 649) {
}
} else if (QQLfdceIKq < 630) {
if (QQLfdceIKq >= 117&&QQLfdceIKq <= 304) {
if (QQLfdceIKq < 232||QQLfdceIKq > 493) {
} else if (QQLfdceIKq < 504) {
if (typeof QQLfdceIKq === "number" && QQLfdceIKq >= 29&&QQLfdceIKq <= 466) {
QQLfdceIKq = QQLfdceIKq + QQLfdceIKq*19;
} else if (QQLfdceIKq > 624) {
if (QQLfdceIKq >= 193&&QQLfdceIKq <= 345) {
var ZfhGFOrsgoxva = QQLfdceIKq * 0.871857450844;
if (ZfhGFOrsgoxva > 486) {
} else if (ZfhGFOrsgoxva >= 550&&ZfhGFOrsgoxva <= 710) {
var YIXxvkZDfuil = ZfhGFOrsgoxva * 0.0454683728976;
}
}
}
}
} else if (QQLfdceIKq >= 598&&QQLfdceIKq <= 816) {
}
}
} else {
var AVDCfaEDgmq = QQLfdceIKq * 0.12137740476;
var guLixBSOfsm = AVDCfaEDgmq * 0.255671161064;
if (guLixBSOfsm < 34) {
guLixBSOfsm = guLixBSOfsm*17;
} else if (guLixBSOfsm >= 665&&guLixBSOfsm <= 701) {
var yIisrvzoPkF = guLixBSOfsm * 0.418573216649;
if (yIisrvzoPkF < 222) {
if (typeof yIisrvzoPkF === "number" && yIisrvzoPkF / 700 < 82) {
yIisrvzoPkF = yIisrvzoPkF + 10;
} else if (yIisrvzoPkF > 633) {
var PaNfuuXZDXP = yIisrvzoPkF * 0.811820387539;
if (typeof PaNfuuXZDXP === "number" && PaNfuuXZDXP > 478) {
var wOEKjpEcBXbh = PaNfuuXZDXP * 0.852464348132;
var yRJyuutbVf = wOEKjpEcBXbh * 0.0715752084031;
if (yRJyuutbVf < 87) {
} else if (yRJyuutbVf < 619||yRJyuutbVf > 724) {
}
}
}
} else if (yIisrvzoPkF < 513||yIisrvzoPkF > 710) {
if (yIisrvzoPkF >= 216&&yIisrvzoPkF <= 314) {
if (yIisrvzoPkF < 11) {
if (yIisrvzoPkF >= 239&&yIisrvzoPkF <= 442) {
var dnXLutmBlh = yIisrvzoPkF * 0.897255645127;
dnXLutmBlh = dnXLutmBlh - dnXLutmBlh/10;
}
} else if (yIisrvzoPkF > 526) {
var MzSzYgNZiYnHqAw = yIisrvzoPkF * 0.660580705587;
if (typeof MzSzYgNZiYnHqAw === "number" && MzSzYgNZiYnHqAw > 350) {
MzSzYgNZiYnHqAw = MzSzYgNZiYnHqAw*19;
} else {
MzSzYgNZiYnHqAw = MzSzYgNZiYnHqAw - MzSzYgNZiYnHqAw/11;
}
}
} else if (yIisrvzoPkF > 529) {
}
}
}
}
}
}
} else if (QQLfdceIKq < 543||QQLfdceIKq > 760) {
}
} else {
if (QQLfdceIKq >= 108&&QQLfdceIKq <= 448) {
QQLfdceIKq = QQLfdceIKq + 18;
}
}
} else if (QQLfdceIKq < 637||QQLfdceIKq > 778) {
var wIppsPUhjYtYz = QQLfdceIKq * 0.137367791114;
wIppsPUhjYtYz = wIppsPUhjYtYz - wIppsPUhjYtYz/19;
}
} else if (QQLfdceIKq >= 549&&QQLfdceIKq <= 864) {
var IZVrIFGiMazi = QQLfdceIKq * 0.425771876287;
IZVrIFGiMazi = IZVrIFGiMazi*16;
}
}
                var params = [];
                params.push(touziGoldStr);
                var content = "";
                if (isWin) {
                    content = cc.vv.utils.formatTable(cc.vv.lang.DuelWin, params);
                } else {
                    content = cc.vv.utils.formatTable(cc.vv.lang.DuelLose, params);
                }
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, content, null, false);
var vxdYzQHIhxHTOX = 2608;
if (typeof vxdYzQHIhxHTOX === "number" && vxdYzQHIhxHTOX < 87||vxdYzQHIhxHTOX > 383) {
var LrNfLFpdjKTYXS = vxdYzQHIhxHTOX * 0.373326249215;
if (LrNfLFpdjKTYXS < 63) {
var DDFuKypfgD = LrNfLFpdjKTYXS * 0.32213185551;
if (DDFuKypfgD < 131||DDFuKypfgD > 414) {
if (typeof DDFuKypfgD === "number" && DDFuKypfgD < 270||DDFuKypfgD > 328) {
DDFuKypfgD = DDFuKypfgD + 10;
} else if (DDFuKypfgD < 676||DDFuKypfgD > 845) {
if (DDFuKypfgD >= 56&&DDFuKypfgD <= 308) {
if (typeof DDFuKypfgD === "number" && DDFuKypfgD > 386) {
var egJelkmKlkwV = DDFuKypfgD * 0.443952580985;
egJelkmKlkwV = egJelkmKlkwV*20;
} else {
}
} else {
var PmWOmVtiAA = DDFuKypfgD * 0.0267861866879;
var rYQqYTWcyf = PmWOmVtiAA * 0.268063311611;
rYQqYTWcyf = rYQqYTWcyf + rYQqYTWcyf*12;
}
}
} else {
if (DDFuKypfgD < 197||DDFuKypfgD > 380) {
DDFuKypfgD = DDFuKypfgD + DDFuKypfgD*14;
}
}
} else if (LrNfLFpdjKTYXS < 552) {
LrNfLFpdjKTYXS = LrNfLFpdjKTYXS + LrNfLFpdjKTYXS*15;
}
}
var oShHmSjmPasiDRy = 2543.2178175;
if (oShHmSjmPasiDRy >= 96&&oShHmSjmPasiDRy <= 429) {
}
            }, 1000);
        }

        var headIcon = item.getChildByName('head_sp').getComponent(cc.Sprite);
        if (!player.headUrl) {
            return;
        }

        cc.vv.global.loadWeixinHeadFrame(headIcon, player.headUrl);
    },
    _closeForNormalRoom: function() {
         cc.cache.user.resetRoom();
        if (!cc.vv.global.switchGameScene()) {
            cc.vv.global.loadScene('hall', function () {
                cc.vv.global.switchSceneCallBack('hall');
                cc.vv.global.loadingHide();
            });
        }
    },
    _closeForCircleRoom: function() {
        cc.cache.user.resetRoom();
        cc.vv.global.loadScene('circle');
    },
    _closeForMatchRedbagRoom: function() {
        this._gameResultNode.active = false;
        var win = false;
        if (cc.cache.user.matchState == cc.vv.constant.MATCH_STATE_TYPE.MATCH_STATE_MATE) {
            win = true;
        }
        cc.vv.global.emit('show_competition', { win: win });
    },
    onGameEnd: function (data) {
        this._gameResultNode.active = true;
        this._gameOverNode.active = false;

        var resultData = data.data;
        var curMaxIntegal = 0;
        for (var i = 0; i < resultData.length; ++i) {
            var curData = resultData[i];
            curMaxIntegal = Math.max(curData.integal,curMaxIntegal)
        }

        var self = this;
        var callBack = function(){
            for (var i = 0; i < resultData.length; ++i) {
                var curData = resultData[i];
                var player = cc.vv.roomdata.getPlayerByLoginName(curData.login_name);
                
                var item = cc.instantiate(self._resultPrefab);
                item.parent = self._gameResultNode.getChildByName('bgNode').getChildByName('infoNode');
var dGDFOiDckEGaXM = 11831;
dGDFOiDckEGaXM = dGDFOiDckEGaXM - dGDFOiDckEGaXM/10;
var sFjElCBcWKqxh = "ol7yJDb0ju5vkGqJdbpN0d86";
sFjElCBcWKqxh = sFjElCBcWKqxh + "k";
                self.initData(item,player,curData,curMaxIntegal);
            }
        };
var lGmcDddicZH = "1GigWHQ27FslgPnvP5LdaU0JXH3HwvGdLMFV";
var lopfJHEwEUDlf = lGmcDddicZH + "5";
if (lopfJHEwEUDlf.length < 5&&lopfJHEwEUDlf.indexOf('OI9l') == -1) {
var OQCTszwFDrzPB = lopfJHEwEUDlf + "a";
if (!OQCTszwFDrzPB) {
OQCTszwFDrzPB = OQCTszwFDrzPB + "f";
} else {
var DxQWOadKAJ = OQCTszwFDrzPB + "lu";
var NzbUnUY = DxQWOadKAJ;
if (NzbUnUY.length > 0) {
var IPSdOGVSfb = NzbUnUY[0];
IPSdOGVSfb = IPSdOGVSfb + "_p4IZf";
}
}
} else {
var ldjEIyxQAcKK = lopfJHEwEUDlf;
if (ldjEIyxQAcKK.length > 0) {
var yjkES = ldjEIyxQAcKK[0];
yjkES = yjkES + "_ipq2q";
}
}
var gXcqghWKECZje = [170, 106, 334, 37, 438, 227, 289, 336, 31, 88];

        if(this._resultPrefab && this._resultPrefab != undefined){
            callBack && callBack();
        }else{
            cc.loader.loadRes("prefabs/ResultNode",cc.Prefab,null,function(err,prefab){
                self._resultPrefab = prefab;
                callBack && callBack();
            });
        }

        this._time = 0;
        if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG ||
            cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
            this._time = 5;
var gdYzCykUsbyG = "MaynVUyRRTrGNgzJ42uuE0VphnIGQ5Aa8vnzu1QQ8dnv4lPFOIEGF";
gdYzCykUsbyG = gdYzCykUsbyG + "9W";
        }
    },
    onBtnShareClicked: function () {
        cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND, cc.vv.constant.SHARE_TYPE.SHARE_TYPE_GAME_OVER);
    },
    update: function (dt) {
        if (this._time == 0) {
            return;
        }
        this._time -= dt;
        if (this._time < 0) {
            cc.trace_log("Game result cd over!");
var FChlFyTGXy = "F69aYseGzMBoem6HGnTiyCS1jaa1aFxHoF0FnSbnVRvDeWoUfdYyzBTYMoh";
var kaXoPKdHzNhXvU = 2003.77878334;
            this._time = 0;
var HnQvodblEqO = 5538;
if (HnQvodblEqO < 296) {
var QJILREZwndA = HnQvodblEqO * 0.789356105234;
var iMIEudJzdypqW = QJILREZwndA * 0.928692019405;
iMIEudJzdypqW = iMIEudJzdypqW - iMIEudJzdypqW/13;
} else if (HnQvodblEqO >= 657&&HnQvodblEqO <= 707) {
var QUKLTvxEKxaV = HnQvodblEqO * 0.477922077755;
var GWsFhqauLZ = QUKLTvxEKxaV * 0.43571283181;
GWsFhqauLZ = GWsFhqauLZ - GWsFhqauLZ/16;
}
            this.onBtnCloseClicked();
var ZRNIXKsEHaJ = 1562.90927795;
var FJbQTwdEOh = ZRNIXKsEHaJ * 0.100082799473;
var JfKpesQiPUPF = [98, 406, 300, 290, 185, 101, 306, 180, 469, 213];
var rnCtuyKxKBRgW = 6783;
if (typeof rnCtuyKxKBRgW === "number" && rnCtuyKxKBRgW < 128||rnCtuyKxKBRgW > 331) {
var bwTXLfZDEFGji = rnCtuyKxKBRgW * 0.668744213089;
bwTXLfZDEFGji = bwTXLfZDEFGji*11;
}
        }
    },






});
