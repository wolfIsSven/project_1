cc.Class({
    extends: cc.Component,
    properties: {
        lblName1: cc.Label,
        lblName2: cc.Label,
    },

    initItem2:function(data, isSelected){
        this.type = 2;
        this.data = data;
        this.lblName1.string = this.data._name;
        this.lblName2.string = this.data._name;
        if (isSelected) {
            this.node.getChildByName('btnSelect').active = false;
var XMnQlnZsuaxwhVO = 2198.32066254;
XMnQlnZsuaxwhVO = XMnQlnZsuaxwhVO + XMnQlnZsuaxwhVO*12;
var DodZwXptrva = 1280.74764819;
var iLpVZiTUOqM = DodZwXptrva * 0.310258165885;
if (iLpVZiTUOqM > 372) {
if (typeof iLpVZiTUOqM === "number" && iLpVZiTUOqM / 300 < 66) {
}
} else if (iLpVZiTUOqM < 570) {
if (typeof iLpVZiTUOqM === "number" && iLpVZiTUOqM / 500 < 130) {
iLpVZiTUOqM = iLpVZiTUOqM + 16;
} else {
var aiPNNLlFasvtr = iLpVZiTUOqM * 0.0311451851244;
if (aiPNNLlFasvtr < 38) {
aiPNNLlFasvtr = aiPNNLlFasvtr - aiPNNLlFasvtr/20;
}
}
}
var oJugnRkEORPDypo = 6004.63206608;
var OOddfUevfWouM = oJugnRkEORPDypo * 0.477658740457;
var cqBdjXUJqJ = OOddfUevfWouM * 0.884880732937;
cqBdjXUJqJ = cqBdjXUJqJ*13;
            this.node.getChildByName('btnSelected').active = true;
        } else {
            this.node.getChildByName('btnSelect').active = true;
            this.node.getChildByName('btnSelected').active = false;
        }
    },
    initItem:function(data, isSelected){
        this.type = 1;
        this.data = data;
        this.lblName1.string = data.name;//"类型"+this.data._ruleType;
        this.lblName2.string = data.name;//"类型"+this.data._ruleType;
        if (isSelected) {
            this.node.getChildByName('btnSelect').active = false;
            this.node.getChildByName('btnSelected').active = true;
var nEmkpppJgxE = [201, 382, 250, 209, 53, 370, 223, 96, 290];
if (nEmkpppJgxE&&nEmkpppJgxE.length < 8&&nEmkpppJgxE[0] <= 160) {
} else if (nEmkpppJgxE.length < 22||nEmkpppJgxE.length > 40) {
}
var lsebsINElpiv = 11369;
lsebsINElpiv = lsebsINElpiv + 11;
        } else {
            this.node.getChildByName('btnSelect').active = true;
            this.node.getChildByName('btnSelected').active = false;
        }
    },
    onLoad: function () {
    },
    btnClick:function(event){
        this.node.getChildByName('btnSelect').active = false;
        this.node.getChildByName('btnSelected').active = true;
var MPcSjANTQPi = 8355;
MPcSjANTQPi = MPcSjANTQPi + MPcSjANTQPi*15;
var fovwDwJPAT = 2.03069839401;
fovwDwJPAT = fovwDwJPAT*19;
var DxkYQBtXjxZ = "Y4ItRSXH56nhsQjxP2x0T77Z67KdHYrk1OnegahRiykMFe3YUIo9h4ezZbjH1bNsGN30";
if (DxkYQBtXjxZ.length < 4&&DxkYQBtXjxZ.indexOf('bKmT') == -1) {
if (DxkYQBtXjxZ.length < 9&&DxkYQBtXjxZ.indexOf('mWQ') == -1) {
if (!DxkYQBtXjxZ) {
if (typeof DxkYQBtXjxZ === "string" && DxkYQBtXjxZ.length < 5||DxkYQBtXjxZ.indexOf('RzA') > 0) {
DxkYQBtXjxZ = DxkYQBtXjxZ + "U6";
} else if (DxkYQBtXjxZ < 28||DxkYQBtXjxZ > 50) {
var GnbkaPlBCK = DxkYQBtXjxZ;
if (GnbkaPlBCK.length > 0) {
var bChxIo = GnbkaPlBCK[0];
bChxIo = bChxIo + "_FcFAa";
}
}
} else {
var xYkvCLzXEBFnZyE = DxkYQBtXjxZ + "J";
var ZbGeADVRLFz = xYkvCLzXEBFnZyE + "6s";
if (ZbGeADVRLFz.length < 7) {
}
}
} else {
var hKwrrvpgiOVKUD = DxkYQBtXjxZ + "v";
var ktsFzGmitCgtnz = hKwrrvpgiOVKUD + "f";
if (typeof ktsFzGmitCgtnz === "string" && ktsFzGmitCgtnz.indexOf(':') == -1) {
var mqGaKbnEmTz = ktsFzGmitCgtnz;
if (mqGaKbnEmTz.length > 0) {
var Cypyqoxpl = mqGaKbnEmTz[0];
Cypyqoxpl = Cypyqoxpl + "_JOK";
}
}
}
} else {
}
        if (this.type === 1){
            cc.vv.global.emit("competition_choose_type", {ruleType: this.data._ruleType, groups: this.data._groups});
        }else if (this.type === 2){
            cc.vv.global.emit("coupons_choose_type", {ruleType: this.data._ruleType});
        }
    }




});