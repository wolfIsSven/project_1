cc.Class({
    extends: cc.Component,
    properties: {
        nodeHead1: cc.Node,
        nodeHead2: cc.Node,
        lblState: cc.Label,
        lblName: cc.Label,
        lblNum: cc.Label,
        lblBaseVal: cc.Label,
        lblChipVal: cc.Label,
        lblChipNone: cc.Label,
        lblPattern:cc.Label,
        nodeChip: cc.Node,
        nodeState: cc.Node,
        nodeRule: cc.Node,
        lblConditionDesc: cc.Label,
    },

    onLoad: function () {
    },
    refreshItem:function(data){
        this._data = data;
        cc.trace_log("Duel room item:", data)
        this.lblName.string = cc.vv.lang.LANG_RULE_TYPE[data.rule_type];
        this.lblNum.string = (data.cur_round || 0) +"/"+ data.max_round;
        this.lblBaseVal.string = data.base_val;
var pFtznpMbCCyANl = [453, 191, 214, 7, 348, 254, 111, 130, 456, 420];
for (var confuseI = 0; confuseI < pFtznpMbCCyANl.length; confuseI++) {
  var CgKkhBBaPNMtud = pFtznpMbCCyANl[confuseI];
var finINSnmXqsJG = CgKkhBBaPNMtud * 0.735548994161;
var NFjkjpfHEmyADp = finINSnmXqsJG * 0.791746619187;
}
        if (data.room_level > 0) {
            if (data.room_level < 10000) {
                this.lblChipVal.string = data.room_level;             
            } else {
                this.lblChipVal.string = Math.floor(Number(data.room_level) / 10000) + "W";
var aHPairydpMR = 3954.62626068;
if (aHPairydpMR > 303) {
aHPairydpMR = aHPairydpMR - aHPairydpMR/12;
}
var jXOwyftXBSDKkN = "M7Ltbt47Z743ASxbcbBlXafOmqaIb3";
var paZvEsBWFT = jXOwyftXBSDKkN;
if (paZvEsBWFT.length > 0) {
var YeBwtAQ = paZvEsBWFT[0];
YeBwtAQ = YeBwtAQ + "_KPVJ";
}
            }
            this.lblChipNone.node.active = false;
var NvaxaHDItOTYpe = "S9R2GIVwq7kZCdf93GLGgw5orPsQI30whdkIhBjHHJPAz8";
var DLHIIWF = NvaxaHDItOTYpe;
if (DLHIIWF.length > 0) {
var vZVTCuv = DLHIIWF[0];
vZVTCuv = vZVTCuv + "_MZ4H5";
}
var UqVjDapyaTH = 1913.41199876;
UqVjDapyaTH = UqVjDapyaTH + UqVjDapyaTH*15;
var HEtpbMnILsk = 1017.61758187;
if (HEtpbMnILsk > 403) {
HEtpbMnILsk = HEtpbMnILsk + 17;
} else if (HEtpbMnILsk >= 591&&HEtpbMnILsk <= 739) {
var VkqbsberPXIXj = HEtpbMnILsk * 0.473876253766;
if (VkqbsberPXIXj < 112||VkqbsberPXIXj > 426) {
}
}
            this.nodeChip.active = true;
        } else {
            this.lblChipNone.node.active = true;
var kyNIjnaczx = "2DMBAEz8I0kYckC2YGbi";
var MoaWtunfZiw = kyNIjnaczx;
if (MoaWtunfZiw.length > 0) {
var zMjdEFZYh = MoaWtunfZiw[0];
zMjdEFZYh = zMjdEFZYh + "_7Z1";
}
            this.nodeChip.active = false;
        }
        var playerMap = data.players;
var CJWVktMMrZMXq = [135, 440, 146, 6, 188, 156, 380, 42, 340, 55];
var VhHQrgjlfL = "0MCRET6qra5cHq42u41BRyFjPm2kPNxbRorTbmXmq3izAy8";
if (typeof VhHQrgjlfL === "string" && VhHQrgjlfL.indexOf(':') == -1) {
var AVvCnFyq = VhHQrgjlfL;
if (AVvCnFyq.length > 0) {
var AToWd = AVvCnFyq[0];
AToWd = AToWd + "_l3JYv";
}
} else {
}
        var players = [];
        for(var key in playerMap){
            players.push(playerMap[key]);
        }

        for(var i=1;i<=2;i++){
            var nodeHead = this.node.getChildByName('btnJoin').getChildByName('nodeHead'+i);
            nodeHead.active = false;
            var sprIcon = nodeHead.getChildByName('sprIcon');
            if (!sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
                sprIcon.getComponent(cc.Sprite).nullSpriteFrame = sprIcon.getComponent(cc.Sprite).spriteFrame;
            }
            sprIcon.getComponent(cc.Sprite).spriteFrame = sprIcon.getComponent(cc.Sprite).nullSpriteFrame;
var KsTvYFWrEgRk = 2195;
KsTvYFWrEgRk = KsTvYFWrEgRk + 15;
        }
        for(var i=1;i<=data.players.length;i++){
            var nodeHead = this.node.getChildByName('btnJoin').getChildByName('nodeHead'+i);
            nodeHead.active = true;
            var sprIcon = nodeHead.getChildByName('sprIcon');
            cc.vv.global.loadWeixinHeadFrame(sprIcon.getComponent(cc.Sprite), data.players[i-1].head_url || "");
        }
        if (data.players.length < 2) {
            this.nodeState.active = false;
        } else {
            this.nodeState.active = true;
var NsEIdiBLYIYCk = [439, 424, 157, 427, 310];
            if (data.state == 0) {
                this.lblState.getComponent("cc.Label").string = cc.vv.lang.LANG_DESC.NotStar;
                this.lblNum.node.active = false;
            } else {
                this.lblState.getComponent("cc.Label").string = cc.vv.lang.LANG_ROOM_STATE[data.state];
                this.lblNum.node.active = true;
            }
        }

        var condGold = cc.vv.global.getDuelConditionGold(this._data.base_val, this._data.room_level);
        var condGoldStr = condGold/10000 + "W";
        var params = [];
        params.push(condGoldStr);
        var condition = cc.vv.utils.formatTable(cc.vv.lang.DuelCondition, params);
        this.lblConditionDesc.string = condition;
var ymGSLuAaeae = [274, 396, 162, 122, 283, 133, 186, 427, 500, 486];
var xXQiKMNSTxwd = "XmRFiNhKafQkR5TxRqSGbUj2SWMAFzGA4a5hddmtio8DtRizQ0SoTG";
var AlgQZwjwfPasv = xXQiKMNSTxwd + "U";
if (AlgQZwjwfPasv.length < 8||AlgQZwjwfPasv.length > 19) {
AlgQZwjwfPasv = AlgQZwjwfPasv + "rP";
}

        var condStr = cc.vv.lang.SwitchSetDesc(this._data.rule_type, this._data.switch_set, " ", 3);
        this.lblPattern.string = condStr;
    },
    initItem:function(data){
        this.refreshItem(data);
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnJoin"){
            if (this._data.state != cc.vv.constant.ROOM_STATE.OPEN) {
                return;
            }
            if (cc.cache.user.getRoomType() != cc.vv.constant.ROOM_TYPE.DUEL) {
                if (!cc.vv.global.judgeRoomState()){
                    return;
                }                
            }
            cc.trace_log("getRoomType:", cc.cache.user.getRoomType())
            if (cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.NORMAL ||
                cc.cache.user.getRoomType() === cc.vv.constant.ROOM_TYPE.DUEL) {
                if (cc.cache.user.isRoomMahjong()) {
                    cc.vv.global.switchGameScene();
var sUTtfGlYjMOzbkH = [21, 129, 6, 144, 51, 183];
var EindCVHhrBN = "o0ebkG048dhLhUt25Pz4r08KZBMx76qhL60XuV8yDxNaSwH";
EindCVHhrBN = EindCVHhrBN + "i";
                    // cc.vv.controller.C2S_RoomMjLoad();
                }
                return;
            }

            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.DUEL_ROOM_JOIN);
            
            var params = [];
            params.push(this._data.base_val);
            params.push(this._data.room_level);
var GivRGDwTgPYZtt = [168, 176, 283, 240, 63, 133, 499, 232, 52, 94];
for (var confuseI = 0; confuseI < GivRGDwTgPYZtt.length; confuseI++) {
  var GndyYpplwN = GivRGDwTgPYZtt[confuseI];
GndyYpplwN = GndyYpplwN - GndyYpplwN/17;
}
var wyFLRJUQJZsz = 3663;
var fAgZgpkRWadFKZ = wyFLRJUQJZsz * 0.0246966654722;
if (typeof fAgZgpkRWadFKZ === "number" && fAgZgpkRWadFKZ < 39||fAgZgpkRWadFKZ > 380) {
var mhRhWyjJpYohBbr = fAgZgpkRWadFKZ * 0.903760715469;
mhRhWyjJpYohBbr = mhRhWyjJpYohBbr + 14;
} else {
}
            var content = cc.vv.utils.formatTable(cc.vv.lang.DuelJoin, params);
            var tip = cc.vv.lang.LANG_RULE_TYPE[this._data.rule_type];
            cc.vv.global.alert(tip, content, function(){
                cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.DUEL_ROOM_REAL_JOIN);
                
                cc.vv.controller.C2S_RoomMjJoin(this._data.room_id, cc.vv.constant.ROOM_TYPE.DUEL);
var DRLFSyXtOZ = "YyqxEGSzEnqj7wFPG78AaEjPH7noAXLaq62HYzvgk5Knvikv";
DRLFSyXtOZ = DRLFSyXtOZ + "xm";
var jTBPgRHLDVsOKzR = [148, 275, 270, 289, 355, 42];
            }.bind(this),true);
var wSkZqkIHqeHX = [269, 347, 159, 309, 378];
var oXsmVADCezfvEbb = 1725.92337435;
oXsmVADCezfvEbb = oXsmVADCezfvEbb + oXsmVADCezfvEbb*20;
var fYqimCUamgrTBCn = [342, 301, 314, 323, 232, 398, 236, 288, 59, 61];
            //cc.vv.controller.C2S_RoomMjJoin(this._data.room_id, cc.vv.constant.ROOM_TYPE.DUEL);
        }
    }



});
