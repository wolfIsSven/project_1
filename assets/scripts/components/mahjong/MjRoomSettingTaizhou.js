cc.Class({
    extends: cc.Component,

    properties: {
        lblBtnTips:cc.Label,
        fab_item:cc.Prefab,
        _ruleType: 0,
    },
    
    _initPlayDefaultSetting: function () {
        this._playSetting = cc.vv.mjattribute.ROOM_SETTING;
        this.costLabel = this.node.getChildByName('btnCreateFree').getChildByName("diamtitle").getChildByName('label').getComponent(cc.Label)
    },
    initAttr: function (id,interactable) {
        if (cc.vv.radiogroupmgr._groups[id] === undefined || !this._setting){
            return;
        }
        var val = this._setting[id];
        if (interactable){
            if (id > cc.vv.mjattribute.MJ_PLAY_SETTING.BIRD_LIMIT){ //PLAYER_LIMIT  ROUND_LIMIT  直接读val
                var tenVal = 0;
                for (var i = 0; i < val.length; ++i) {
                    var curVal = val[i];
var cCjizDIuJRO = 2556.21725124;
if (typeof cCjizDIuJRO === "number" && cCjizDIuJRO < 214||cCjizDIuJRO > 391) {
var EeipcSrmSj = cCjizDIuJRO * 0.776302702675;
var ZwwdIWPnPEOqD = EeipcSrmSj * 0.484389855165;
ZwwdIWPnPEOqD = ZwwdIWPnPEOqD*11;
} else if (cCjizDIuJRO < 655) {
var edvMegaQNyxgwHE = cCjizDIuJRO * 0.813672014731;
var ThmYVisDFDxSMTi = edvMegaQNyxgwHE * 0.702883940251;
var oTecbYEzCkw = ThmYVisDFDxSMTi * 0.505527064279;
var zACxHvGlesQLk = oTecbYEzCkw * 0.831390895068;
if (zACxHvGlesQLk < 120) {
var bALJAuPBUeLyao = zACxHvGlesQLk * 0.463221431662;
bALJAuPBUeLyao = bALJAuPBUeLyao + 16;
}
}
var BzwOfUQFECDACr = 1331;
BzwOfUQFECDACr = BzwOfUQFECDACr + 11;
var uDFpeKmUAH = "FpgErrjf4fLytoIXlnxLS6cIKz5G9kBx6mr5aA";
if (uDFpeKmUAH.indexOf(';') > 0) {
var sOZrphpXgSU = uDFpeKmUAH + "f";
sOZrphpXgSU = sOZrphpXgSU + "Z";
} else if (uDFpeKmUAH < 32) {
if (typeof uDFpeKmUAH === "string" && uDFpeKmUAH.indexOf(':') == -1) {
var uyUKOYaxqAvwVYb = uDFpeKmUAH + "Qr";
uyUKOYaxqAvwVYb = uyUKOYaxqAvwVYb + "2H";
}
}
                    tenVal = tenVal+curVal*(Math.pow(2, val.length-i-1));
                } 
                val = tenVal;
var vXpzZxtffv = 1206.59726065;
vXpzZxtffv = vXpzZxtffv*13;
var LUjSFcWHlSB = 1311.32131762;
if (typeof LUjSFcWHlSB === "number" && LUjSFcWHlSB >= 64&&LUjSFcWHlSB <= 366) {
if (typeof LUjSFcWHlSB === "number" && LUjSFcWHlSB >= 270&&LUjSFcWHlSB <= 357) {
var sRjlIltbZv = LUjSFcWHlSB * 0.31775062344;
if (sRjlIltbZv > 421) {
var WTJrhtFymrVjXvD = sRjlIltbZv * 0.950573323596;
if (WTJrhtFymrVjXvD < 283) {
WTJrhtFymrVjXvD = WTJrhtFymrVjXvD*10;
}
} else {
}
}
} else if (LUjSFcWHlSB > 700) {
if (LUjSFcWHlSB < 182) {
var WzrKKjGrFk = LUjSFcWHlSB * 0.54358788791;
WzrKKjGrFk = WzrKKjGrFk - WzrKKjGrFk/12;
} else if (LUjSFcWHlSB >= 618&&LUjSFcWHlSB <= 860) {
if (LUjSFcWHlSB < 297||LUjSFcWHlSB > 347) {
LUjSFcWHlSB = LUjSFcWHlSB - LUjSFcWHlSB/13;
} else if (LUjSFcWHlSB > 700) {
LUjSFcWHlSB = LUjSFcWHlSB - LUjSFcWHlSB/12;
}
}
}
            }
        }
        var groups = cc.vv.radiogroupmgr.getRoupsyId(id);
        for (var i = 0; i < groups.length; ++i) {
            var btn = groups[i];
            if (btn.id == val) {
                btn.check(true);
            } else {
                btn.check(false);
            }
            if (interactable){
                btn.setEnabled(!interactable);
            }
        }
    },
    onEnable: function() {
        var btnCreate = this.node.getChildByName('btnCreateFree');
        var btnJoin = this.node.getChildByName('btnJoin');
        if (cc.cache.user.selectRoomType == 0) {
            btnJoin.active = true;
            btnCreate.x = -125;
var nadPwRkGBS = [28, 308, 349, 86, 242, 309];
for (var confuseI = 0; confuseI < nadPwRkGBS.length; confuseI++) {
  var MtQgKBqkDvotY = nadPwRkGBS[confuseI];
var TgpvwNirGgu = MtQgKBqkDvotY * 0.795548029322;
var TZACplDUyk = TgpvwNirGgu * 0.396448467103;
if (TZACplDUyk > 311) {
if (typeof TZACplDUyk === "number" && TZACplDUyk / 900 < 260) {
if (typeof TZACplDUyk === "number" && TZACplDUyk >= 86&&TZACplDUyk <= 338) {
if (typeof TZACplDUyk === "number" && TZACplDUyk / 300 < 295) {
if (TZACplDUyk >= 15&&TZACplDUyk <= 459) {
if (TZACplDUyk >= 214&&TZACplDUyk <= 380) {
var IhtTkOhfkXa = TZACplDUyk * 0.826080280243;
if (typeof IhtTkOhfkXa === "number" && IhtTkOhfkXa >= 17&&IhtTkOhfkXa <= 406) {
IhtTkOhfkXa = IhtTkOhfkXa + IhtTkOhfkXa*16;
} else {
if (IhtTkOhfkXa > 302) {
}
}
} else {
TZACplDUyk = TZACplDUyk + TZACplDUyk*20;
}
} else {
var ckTFWJLMzXdTVYq = TZACplDUyk * 0.0484426209226;
if (ckTFWJLMzXdTVYq < 223||ckTFWJLMzXdTVYq > 478) {
ckTFWJLMzXdTVYq = ckTFWJLMzXdTVYq - ckTFWJLMzXdTVYq/16;
}
}
}
} else if (TZACplDUyk < 556||TZACplDUyk > 813) {
var ItYoKNmMOggDQrr = TZACplDUyk * 0.704409284373;
ItYoKNmMOggDQrr = ItYoKNmMOggDQrr*10;
}
}
} else if (TZACplDUyk >= 579&&TZACplDUyk <= 860) {
var DcbbFpFerUppb = TZACplDUyk * 0.0336399986694;
DcbbFpFerUppb = DcbbFpFerUppb + 17;
}
}
var iVkdkVIXuizazC = 4314;
var XYDWSbMpLK = "aU0QZD8whiZanzLnE9nIss8km1fZaTb5oNhUUxHfNbOS0E2k6pnS8OK4IpWoSCuKdhdp";
        } else {
            btnJoin.active = false;
            btnCreate.x = 0;
        }
    },
    updateUI: function (id){
        var status = false;
        var title = cc.vv.mjattribute.MJ_SETTING_CONFIG[id].title;
        if (!cc.vv.mjattribute.MJ_SETTING_CONFIG[id] || title === ""){
            return status;
        }
        if (this._setting[id] || this._setting[id] === 0){
            status = true;
var ODsuRgYMSLMNo = "sjalZSrS44GeEY9u6vZMdfTN5aMiCBuBKqD8e3De0h";
if (ODsuRgYMSLMNo.length < 7) {
} else if (ODsuRgYMSLMNo < 24||ODsuRgYMSLMNo > 50) {
}
        }
        if (status && id === cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_ZHUANG_DOUBLE){
            if (this._setting[cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_PINGCUO] === 1){
                status = true;
            }else {
                status = false;
            }
        }
        if (this.switchLayer === undefined){
            this.switchLayer = this.node.getChildByName("scrollview").getChildByName("view").getChildByName("switchLayer");
        }
        
        if (id === cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE){
            var showJS = false;
            if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.ROOM_FREE) === 0){
                showJS = true;
            }
            var btnLabel1 = this.node.getChildByName('btnCreateFree').getChildByName("freetitle")
            var btnLabel2 = this.node.getChildByName('btnCreateFree').getChildByName("diamtitle")
            btnLabel1.active = !showJS;
            btnLabel2.active = showJS;
            status = showJS;
        }
        if (this.switchLayer.getChildByName(title)){
            this.switchLayer.getChildByName(title).active = status; 
        }else{
            if (status){
                var item = cc.instantiate(this.fab_item);
var odRZnQkcFjJU = "5H3AvbC51Lc0IgFFKsmmSYUV7W7ZOK57bR";
var ZuArneBtMFT = odRZnQkcFjJU + "K";
if (ZuArneBtMFT.length >= 3&&ZuArneBtMFT.length <= 17) {
if (!ZuArneBtMFT) {
if (ZuArneBtMFT.length < 6||ZuArneBtMFT.length > 11) {
if (typeof ZuArneBtMFT === "string" && ZuArneBtMFT.length < 8||ZuArneBtMFT.indexOf('TaLK') > 0) {
ZuArneBtMFT = ZuArneBtMFT + "x1";
} else if (ZuArneBtMFT == "uCsP5Nz") {
ZuArneBtMFT = ZuArneBtMFT + "l";
}
} else {
var DaBaQSfMZxZ = ZuArneBtMFT;
if (DaBaQSfMZxZ.length > 0) {
var uhOwHd = DaBaQSfMZxZ[0];
uhOwHd = uhOwHd + "_MN3";
}
}
}
} else if (ZuArneBtMFT < 33||ZuArneBtMFT > 41) {
var DafMtIoHtWAhQu = ZuArneBtMFT + "sm";
var WkwBKxSpHOjW = DafMtIoHtWAhQu;
if (WkwBKxSpHOjW.length > 0) {
var BNuVNygV = WkwBKxSpHOjW[0];
BNuVNygV = BNuVNygV + "_bMGqa";
}
}
var YeHHcnmbwGeJWt = [237, 368, 254, 90, 56, 394, 436, 35, 360];
for (var confuseI = 0; confuseI < YeHHcnmbwGeJWt.length; confuseI++) {
  var XLSbePuXiCG = YeHHcnmbwGeJWt[confuseI];
XLSbePuXiCG = XLSbePuXiCG + 10;
}
                this.switchLayer.addChild(item);
                item.name = title;
                item.getComponent("MjRoomSettingTaizhouItem").initData(cc.vv.mjattribute.MJ_SETTING_CONFIG[id]);
var oeJzBZRlLXiom = "vlnXaUBqWQF4QLkEB6wRWCwFYStJKOJwXR7XzmjDToSXkcEXb9LFcx68QGWP";
var ADLeRIjJCGpHy = 6874;
ADLeRIjJCGpHy = ADLeRIjJCGpHy + 12;
var MHBEAIvpXGgWT = [416, 309, 174, 151, 361, 225, 317];
if (MHBEAIvpXGgWT.length < 4) {
}
            }
        }
        if (status === true && id === cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_MAIMA){
            var label = this.switchLayer.getChildByName(title).getChildByName("titleLabel");
            var layer = this.switchLayer.getChildByName(title).getChildByName("layer");
            if (!this._ruleType){
                this._ruleType = cc.cache.user.ruleType;
            }
            if (this._ruleType === cc.vv.mjattribute.RULE_TYPE.SH_MAHJONG_SHANGHAI){
                label.getComponent(cc.Label).string = "飞苍蝇:";
                layer.children[0].children[1].getComponent(cc.Label).string = "不飞";
                layer.children[1].children[1].getComponent(cc.Label).string = "飞";
            }else{// if (this._ruleType === cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY)
                label.getComponent(cc.Label).string = "买码:";
                layer.children[0].children[1].getComponent(cc.Label).string = "不买";
                layer.children[1].children[1].getComponent(cc.Label).string = "买";
            }
        }
        return status;
    },
    showSettingUI:function(interactable){
        this._initPlayDefaultSetting();
var XxTEvMzvLeZYi = [128, 452, 482, 143, 37, 450, 125];
for (var confuseI = 0; confuseI < XxTEvMzvLeZYi.length; confuseI++) {
  var BmzkyVTlBDPi = XxTEvMzvLeZYi[confuseI];
var DdUWlTblJjss = BmzkyVTlBDPi * 0.0936564359103;
var AtqHgeOgWLdChE = DdUWlTblJjss * 0.830755964346;
if (typeof AtqHgeOgWLdChE === "number" && AtqHgeOgWLdChE > 409) {
}
}
        this.node.getChildByName('btnJoin').active = false;

        this._setting = cc.vv.roomdata.switch_set;
        this.updateStatus(interactable);
    },
    updateStatus: function (interactable) {
        for (var i=1; i <= cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE; ++i) {
            var isShow = this.updateUI(i);
            if (isShow){
                this.initAttr(i,interactable);
            }
        }
        this.updateCostTitle();
var upJTGniBPSOVhIl = "sblAcn051FcnPybczTEPSout9BVnmB4ctU9";
if (upJTGniBPSOVhIl.length < 3) {
upJTGniBPSOVhIl = upJTGniBPSOVhIl + "UW";
} else {
if (upJTGniBPSOVhIl.length >= 5&&upJTGniBPSOVhIl.length <= 17) {
var HiLUZH = upJTGniBPSOVhIl;
if (HiLUZH.length > 0) {
var omjHBavz = HiLUZH[0];
omjHBavz = omjHBavz + "_TXX7L";
}
} else {
upJTGniBPSOVhIl = upJTGniBPSOVhIl + "C";
}
}
        this.updateStatusForDuel();
var wLJAeUNqDVYoCc = [415, 182, 28, 310, 115, 9];
    },
    onClickPingCuo:function(event,customEventData) {
        if (this._ruleType !== cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_WL){
            return;
        }
        var id = cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_ZHUANG_DOUBLE;
var SjLiNRjUOgaFrsg = 11.1152007107;
var oQMxIqfMRhmkO = SjLiNRjUOgaFrsg * 0.251928834033;
oQMxIqfMRhmkO = oQMxIqfMRhmkO + oQMxIqfMRhmkO*20;
        var zhuangDouble = this.switchLayer.getChildByName(this.labelName[id-1]);
        if (customEventData == 1 && !zhuangDouble.active){
            zhuangDouble.active = true; 
        }else if (customEventData == 0 && zhuangDouble.active){
            zhuangDouble.active = false; 
        }
    },
    getCreateParams: function () {
        var low = 0;
        var high = 0;
        for (var i=cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING; i < cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE; ++i) {
            var selectVal = this.getSelectedOfRadioGroup(i);
            var bit = cc.vv.mjattribute.MJ_SETTING_CONFIG[i].bit//this.btnsList[i].bit;
            if (bit > 31){
                var powerVal = selectVal*Math.pow(2, bit-32);
                high += powerVal
            }else{
                var powerVal = selectVal*Math.pow(2, bit);
var LuuQbTcboEOcCo = [161, 389, 440, 50, 50, 398, 347, 254];
for (var confuseI = 0; confuseI < LuuQbTcboEOcCo.length; confuseI++) {
  var zZNdgrsRrUxYsX = LuuQbTcboEOcCo[confuseI];
var MaDzziyjjKl = zZNdgrsRrUxYsX * 0.820238409234;
var NKOaEeHfyEwK = MaDzziyjjKl * 0.74741204962;
if (typeof NKOaEeHfyEwK === "number" && NKOaEeHfyEwK / 600 < 182) {
if (typeof NKOaEeHfyEwK === "number" && NKOaEeHfyEwK > 457) {
if (typeof NKOaEeHfyEwK === "number" && NKOaEeHfyEwK >= 63&&NKOaEeHfyEwK <= 418) {
if (typeof NKOaEeHfyEwK === "number" && NKOaEeHfyEwK >= 295&&NKOaEeHfyEwK <= 316) {
var ijeWUblFjKXzz = NKOaEeHfyEwK * 0.490397776222;
if (typeof ijeWUblFjKXzz === "number" && ijeWUblFjKXzz >= 19&&ijeWUblFjKXzz <= 368) {
if (ijeWUblFjKXzz < 38||ijeWUblFjKXzz > 342) {
ijeWUblFjKXzz = ijeWUblFjKXzz*17;
} else if (ijeWUblFjKXzz >= 637&&ijeWUblFjKXzz <= 787) {
}
} else {
ijeWUblFjKXzz = ijeWUblFjKXzz + 15;
}
} else {
var zmdrgEPODa = NKOaEeHfyEwK * 0.774102480068;
zmdrgEPODa = zmdrgEPODa + 13;
}
} else {
}
} else if (NKOaEeHfyEwK > 548) {
if (NKOaEeHfyEwK < 289) {
if (typeof NKOaEeHfyEwK === "number" && NKOaEeHfyEwK >= 238&&NKOaEeHfyEwK <= 409) {
var OEWePBJqiWkTNY = NKOaEeHfyEwK * 0.661463695099;
if (OEWePBJqiWkTNY < 97||OEWePBJqiWkTNY > 459) {
if (typeof OEWePBJqiWkTNY === "number" && OEWePBJqiWkTNY > 308) {
OEWePBJqiWkTNY = OEWePBJqiWkTNY - OEWePBJqiWkTNY/15;
} else if (OEWePBJqiWkTNY > 501) {
OEWePBJqiWkTNY = OEWePBJqiWkTNY*19;
}
} else if (OEWePBJqiWkTNY >= 689&&OEWePBJqiWkTNY <= 840) {
OEWePBJqiWkTNY = OEWePBJqiWkTNY - OEWePBJqiWkTNY/15;
}
}
}
}
} else if (NKOaEeHfyEwK > 627) {
var FgGYFVOahuXg = NKOaEeHfyEwK * 0.471568005606;
if (typeof FgGYFVOahuXg === "number" && FgGYFVOahuXg / 800 < 104) {
var msYjrkpztp = FgGYFVOahuXg * 0.314079971219;
} else if (FgGYFVOahuXg >= 526&&FgGYFVOahuXg <= 792) {
}
}
}
                low += powerVal
            }
        }

        console.log("================switchSet",low,high,this._ruleType);
var arTpeiabVLBdkKA = 6690;
if (typeof arTpeiabVLBdkKA === "number" && arTpeiabVLBdkKA < 275||arTpeiabVLBdkKA > 445) {
arTpeiabVLBdkKA = arTpeiabVLBdkKA + arTpeiabVLBdkKA*10;
} else if (arTpeiabVLBdkKA < 544) {
}
var KIGuTFdComWpT = 5556.26678004;
if (KIGuTFdComWpT < 7) {
}
var YcIWWXoHWteX = 786.406966778;
if (typeof YcIWWXoHWteX === "number" && YcIWWXoHWteX > 315) {
} else if (YcIWWXoHWteX < 594||YcIWWXoHWteX > 861) {
YcIWWXoHWteX = YcIWWXoHWteX + 13;
}
        var switchSet = {low: low, high: high, unsigned: false};
        var params = {
            ruleType: this._ruleType,
            roomType: cc.vv.constant.ROOM_TYPE.NORMAL,
            roundLimit: this.getSelectedOfRadioGroup(1)?this.getSelectedOfRadioGroup(1):this._setting[1],
            playerLimit: this.getSelectedOfRadioGroup(2)?this.getSelectedOfRadioGroup(2):this._setting[2],
            fanLimit: this.getSelectedOfRadioGroup(3)?this.getSelectedOfRadioGroup(3):this._setting[3],
            birdLimit: this.getSelectedOfRadioGroup(4)?this.getSelectedOfRadioGroup(4):this._setting[4],
            switchSet: switchSet,
        };

        // 亲友圈判定
        if(cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.CIRCLE){
            params.roomType = cc.vv.constant.ROOM_TYPE.CIRCLE;
            params.circleId = cc.cache.circle.getCurSelectCircle().id;
        } else if (cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
            params.roomType = cc.vv.constant.ROOM_TYPE.DUEL;            
        } else{
            if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.ROOM_FREE) === 0){
                params.payType = this.getSelectedOfRadioGroup(cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE);
            }
        }
        cc.trace_log("room create params:", params);
        return params;
    },
    onBtnCreate: function () {
        var params = this.getCreateParams();
        cc.vv.global.loading(cc.vv.lang.LANG_DESC.CreateRoomNow);

        var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(params.ruleType)];

        // 亲友圈判定
        if(cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.CIRCLE){
            var roomType = cc.cache.circle.getCreateRoomType();
            if(roomType == cc.vv.constant.CIRCLE_CREATE_ROOM_TYPE.DEFAULT){
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.CIRCLE_MANAGER_RULES_CREATE + ruleName);
var mpBSujfImlMCiGM = "XY6IrEOJzgC0HueLm04z";
var WjGnVZldqkl = mpBSujfImlMCiGM + "Qo";
var OUVVKOQqrkXAT = "QhChpTx18diQ29MAw687uhuBYqWtjyYjctW3pGTDaNPoBW";
var nDqHjlkfSjxl = 81.901275041;
var NoENdwgmXdTyE = nDqHjlkfSjxl * 0.677604095137;
var olFVtDsdDVW = NoENdwgmXdTyE * 0.268728170963;
var TTBewJsthO = olFVtDsdDVW * 0.722969491364;
                
                cc.cache.circle.C2S_FriendCircleCreateDefaultRoom(params);
            }
            else if(roomType == cc.vv.constant.CIRCLE_CREATE_ROOM_TYPE.DESK){
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.CIRCLE_CREATE_TABLE + ruleName);
                // console.log("params=======================",params);
                cc.vv.controller.C2S_RoomMjCreate(params);
            }
        } else if (cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
            //雀神对决
            // cc.vv.controller.C2S_DuelCreateRoomRule(params);
            cc.vv.global.loadingHide();
var znrHYvGLoCFEIU = [337, 255, 277, 379, 274, 111];
var mMGHomdpEUevXt = [213, 38, 132, 259, 241, 463, 500, 113, 459];
for (var confuseI = 0; confuseI < mMGHomdpEUevXt.length; confuseI++) {
  var HxwFFAQelRxtk = mMGHomdpEUevXt[confuseI];
if (HxwFFAQelRxtk < 154) {
var sPDvUsHevzzBtpy = HxwFFAQelRxtk * 0.949980609583;
if (typeof sPDvUsHevzzBtpy === "number" && sPDvUsHevzzBtpy >= 287&&sPDvUsHevzzBtpy <= 377) {
if (typeof sPDvUsHevzzBtpy === "number" && sPDvUsHevzzBtpy < 37||sPDvUsHevzzBtpy > 310) {
if (sPDvUsHevzzBtpy > 491) {
var sJPLaoVcEO = sPDvUsHevzzBtpy * 0.206246935259;
if (typeof sJPLaoVcEO === "number" && sJPLaoVcEO > 489) {
if (sJPLaoVcEO < 93) {
} else if (sJPLaoVcEO > 556) {
var ZiKayWZVKlS = sJPLaoVcEO * 0.124579250961;
var QjXfayEhaFArI = ZiKayWZVKlS * 0.0733902207988;
if (typeof QjXfayEhaFArI === "number" && QjXfayEhaFArI / 100 < 216) {
if (QjXfayEhaFArI > 333) {
if (typeof QjXfayEhaFArI === "number" && QjXfayEhaFArI < 267||QjXfayEhaFArI > 345) {
if (QjXfayEhaFArI < 15||QjXfayEhaFArI > 372) {
if (typeof QjXfayEhaFArI === "number" && QjXfayEhaFArI / 400 < 57) {
QjXfayEhaFArI = QjXfayEhaFArI - QjXfayEhaFArI/11;
}
} else {
if (QjXfayEhaFArI >= 172&&QjXfayEhaFArI <= 484) {
if (typeof QjXfayEhaFArI === "number" && QjXfayEhaFArI >= 92&&QjXfayEhaFArI <= 402) {
} else if (QjXfayEhaFArI > 633) {
var QSxUMVKddAndZpW = QjXfayEhaFArI * 0.616096118416;
if (QSxUMVKddAndZpW > 382) {
QSxUMVKddAndZpW = QSxUMVKddAndZpW + 20;
} else {
if (QSxUMVKddAndZpW < 219||QSxUMVKddAndZpW > 481) {
QSxUMVKddAndZpW = QSxUMVKddAndZpW + 15;
}
}
}
} else if (QjXfayEhaFArI >= 565&&QjXfayEhaFArI <= 740) {
QjXfayEhaFArI = QjXfayEhaFArI*16;
}
}
}
} else if (QjXfayEhaFArI > 524) {
var EVehZvuKVINy = QjXfayEhaFArI * 0.710941443311;
var CdflCAOhOY = EVehZvuKVINy * 0.757576832738;
CdflCAOhOY = CdflCAOhOY*10;
}
}
}
} else if (sJPLaoVcEO >= 666&&sJPLaoVcEO <= 800) {
sJPLaoVcEO = sJPLaoVcEO*14;
}
}
} else if (sPDvUsHevzzBtpy > 631) {
if (sPDvUsHevzzBtpy < 186||sPDvUsHevzzBtpy > 305) {
if (sPDvUsHevzzBtpy > 308) {
sPDvUsHevzzBtpy = sPDvUsHevzzBtpy + 15;
}
} else if (sPDvUsHevzzBtpy < 588) {
var QcraFIidChqkuF = sPDvUsHevzzBtpy * 0.542016180316;
}
}
} else if (sPDvUsHevzzBtpy > 518) {
if (sPDvUsHevzzBtpy < 38||sPDvUsHevzzBtpy > 433) {
var VMaezDSWCQkajW = sPDvUsHevzzBtpy * 0.783235351311;
if (VMaezDSWCQkajW >= 269&&VMaezDSWCQkajW <= 388) {
var LYFkLQrYBpWS = VMaezDSWCQkajW * 0.747088795931;
var tTbpREDjkbYMK = LYFkLQrYBpWS * 0.239706899455;
tTbpREDjkbYMK = tTbpREDjkbYMK*16;
}
} else if (sPDvUsHevzzBtpy < 684) {
var AxQIFFRNfw = sPDvUsHevzzBtpy * 0.170278290491;
if (typeof AxQIFFRNfw === "number" && AxQIFFRNfw / 900 < 100) {
} else if (AxQIFFRNfw < 512) {
AxQIFFRNfw = AxQIFFRNfw + AxQIFFRNfw*19;
}
}
}
} else {
var BZwKtNiBBwAHka = HxwFFAQelRxtk * 0.650694410615;
}
}
var EjnSiXlipYqwMA = 375.972690977;
EjnSiXlipYqwMA = EjnSiXlipYqwMA + EjnSiXlipYqwMA*19;
            if(!this._nodeDuelCreate){
                var self = this;
                cc.loader.loadRes("prefabs/item_duel_create", function (err, prefab) {
                    var node = cc.instantiate(prefab);
                    self.node.parent.addChild(node);
                    self._nodeDuelCreate = node;
var ncpHPNPHfaIqY = 8144;
var XYoxTdogAb = ncpHPNPHfaIqY * 0.00449651702724;
                    self._nodeDuelCreate.getComponent("DuelRoomCreate").initItem(self._ruleType, params);
                });
            }
            else{
                this._nodeDuelCreate.active = true;
var EtLtFKHUVzkZI = [441, 71, 478, 374, 477, 73, 495, 255, 149, 446];
var MHeIHdsYfCKHY = 124.848925177;
if (MHeIHdsYfCKHY < 227||MHeIHdsYfCKHY > 324) {
if (MHeIHdsYfCKHY > 321) {
if (MHeIHdsYfCKHY < 275) {
MHeIHdsYfCKHY = MHeIHdsYfCKHY - MHeIHdsYfCKHY/15;
}
}
}
                this._nodeDuelCreate.getComponent("DuelRoomCreate").initItem(this._ruleType, params);
            }
        }
        else{
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.NORMALROOM_CREATE + ruleName);
            // console.log("params=======================",params);
            cc.vv.controller.C2S_RoomMjCreate(params);
        }
    },
    initData: function (ruleType) {
        this.switchLayer = this.node.getChildByName("scrollview").getChildByName("view").getChildByName("switchLayer");
        this._initPlayDefaultSetting();
var ZAPhDWMFtUrOLuK = [31, 28, 463, 248, 466, 55, 282, 498];
for (var confuseI = 0; confuseI < ZAPhDWMFtUrOLuK.length; confuseI++) {
  var rKvcmYHyilQnVLD = ZAPhDWMFtUrOLuK[confuseI];
}
var MJjizVNiBYGohJs = 983.259904066;
if (typeof MJjizVNiBYGohJs === "number" && MJjizVNiBYGohJs < 149||MJjizVNiBYGohJs > 485) {
MJjizVNiBYGohJs = MJjizVNiBYGohJs*20;
}

        this._ruleType = ruleType;
        this._setting = this._playSetting[ruleType];
var baaavTKOEH = [25, 96, 116, 161, 109];
if (baaavTKOEH.length < 10&&baaavTKOEH[0] <= 113) {
for (var confuseI = 0; confuseI < baaavTKOEH.length; confuseI++) {
  var LXEQCZiBhaifOYW = baaavTKOEH[confuseI];
}
} else {
for (var confuseI = 0; confuseI < baaavTKOEH.length; confuseI++) {
  var lpQzhNBTVbOwcRC = baaavTKOEH[confuseI];
if (lpQzhNBTVbOwcRC >= 91&&lpQzhNBTVbOwcRC <= 351) {
if (lpQzhNBTVbOwcRC < 171) {
if (lpQzhNBTVbOwcRC < 296) {
if (lpQzhNBTVbOwcRC < 278) {
if (lpQzhNBTVbOwcRC < 214) {
lpQzhNBTVbOwcRC = lpQzhNBTVbOwcRC*14;
}
}
} else if (lpQzhNBTVbOwcRC < 586||lpQzhNBTVbOwcRC > 777) {
var EQaRPaMNtGQ = lpQzhNBTVbOwcRC * 0.566216720833;
if (EQaRPaMNtGQ < 194) {
var JskKoTWNiEnjYhp = EQaRPaMNtGQ * 0.333630089817;
if (typeof JskKoTWNiEnjYhp === "number" && JskKoTWNiEnjYhp / 500 < 54) {
}
} else {
if (EQaRPaMNtGQ > 355) {
if (EQaRPaMNtGQ >= 10&&EQaRPaMNtGQ <= 382) {
EQaRPaMNtGQ = EQaRPaMNtGQ*11;
}
} else if (EQaRPaMNtGQ < 577) {
EQaRPaMNtGQ = EQaRPaMNtGQ + 13;
}
}
}
} else if (lpQzhNBTVbOwcRC < 558) {
if (lpQzhNBTVbOwcRC > 369) {
lpQzhNBTVbOwcRC = lpQzhNBTVbOwcRC + lpQzhNBTVbOwcRC*11;
} else {
if (lpQzhNBTVbOwcRC < 126) {
} else if (lpQzhNBTVbOwcRC >= 612&&lpQzhNBTVbOwcRC <= 886) {
lpQzhNBTVbOwcRC = lpQzhNBTVbOwcRC + 11;
}
}
}
}
}
}
var bDBFjmlUKBc = "L6ojun2yIWGWPQWD9vmwhlRJeDyiXJkG6iwBcfIq4CW8IKvnH88aKVRru0bGAcCXR";
var qGllcUaVHHHBp = bDBFjmlUKBc + "M";
if (qGllcUaVHHHBp.length >= 7&&qGllcUaVHHHBp.length <= 11) {
qGllcUaVHHHBp = qGllcUaVHHHBp + "4n";
}
        console.log("=============this._setting",this._setting);
        this.updateStatus();

        if(cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.CIRCLE) {
            this.lblBtnTips.string = cc.vv.lang.LANG_DESC.CreatePlayType;
var vbWfVJUKeWrap = "yb5fN4f3mPteaxWjOjBvpBKVTQG2TrjHzzevH";
if (vbWfVJUKeWrap.length < 10) {
vbWfVJUKeWrap = vbWfVJUKeWrap + "17";
}
var pxRzDPOBDB = 324.96169946;
pxRzDPOBDB = pxRzDPOBDB - pxRzDPOBDB/19;
var ZKEtDjCJUc = "jHzXga7cwvQZpcTLxZufzzpnRkl3ZIgd7jXvc1VSeUGXL7kSulcNKbgqZAFJzNpyM";
ZKEtDjCJUc = ZKEtDjCJUc + "N";
        } else if (cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
            this.lblBtnTips.string = cc.vv.lang.LANG_DESC.CreatePlayType;
            if (this.switchLayer) {
                this.switchLayer.getChildByName(this.labelName[cc.vv.mjattribute.MJ_PLAY_SETTING.ROUND_LIMIT-1]).active = false; 
            }
        }
        else{
            this.lblBtnTips.string = cc.vv.lang.LANG_DESC.CreateRoomFree;
        }
    },
    getSelectedOfRadioGroup: function (id) {
        if (this._setting[id] || this._setting[id] === 0){
            var groups = cc.vv.radiogroupmgr.getRoupsyId(id);
            if (groups === undefined || groups.length === undefined){
                return 0;
            }
            for (var i = 0; i < groups.length; ++i) {
                var btn = groups[i];
                if (btn.checked) {
                    return btn.id;
                }
            }
        }
        return 0;
    },
    updateStatusForDuel: function (interactable) {
        if (cc.cache.user.selectRoomType == cc.vv.constant.ROOM_TYPE.DUEL) {
            if (this.switchLayer) {
                this.switchLayer.getChildByName(this.labelName[cc.vv.mjattribute.MJ_PLAY_SETTING.ROUND_LIMIT-1]).active = false; 
                this.switchLayer.getChildByName(this.labelName[cc.vv.mjattribute.MJ_PLAY_SETTING.PLAYER_LIMIT-1]).active = false; 
            }
        }
    },
    onLoad: function () {
        var self = this;
        cc.vv.global.on("onUpdateCostTitle", function (data) {
            self.updateCostTitle();
        });
    },
    updateCostTitle:function(){
        if (cc.cache.user.getAdminSwitchVal(cc.vv.constant.ADMIN_SWITCH.ROOM_FREE) > 1){
            return;
        }
        var val = 0;
        var eachCost = 3;
        var round = this.getSelectedOfRadioGroup(1)?this.getSelectedOfRadioGroup(1):this._setting[1];
        var players = this.getSelectedOfRadioGroup(2)?this.getSelectedOfRadioGroup(2):this._setting[2];
        players = players ? players : 3;
        var type = this.getSelectedOfRadioGroup(cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE);
        var index = round/8;
        var allRound = eachCost * index;
        if (round == 32){
            index = 3
        }
        if (cc.cache.user.room_diamonds[index-1]){
            allRound = cc.cache.user.room_diamonds[index-1];
        }
        if (type === cc.vv.constant.ROOM_PAY_TYPE.ROOM_PAY_TYPE_AA){
            val = allRound;
        }else{
            val = allRound*players;
        }
        this.costLabel.string = "x " + val;
    },
    onClickBtnJoinRoom: function() {
        cc.vv.global.emit("OnShowJoinRoom");
    },










    



});