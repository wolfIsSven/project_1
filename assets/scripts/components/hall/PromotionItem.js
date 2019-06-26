// var PHONE_REG = /^1[3|4|5|8][0-9]\d{4,8}$/;
// var TEXT_REG = /^\d{6}$/;
cc.Class({
    extends: cc.Component,
    properties: {
        _object:null
    },
    onLoad: function () {

    },
    initData:function(object,spriteFrame,color){
        this._object = object;
        var name = this.node.getChildByName("name").getComponent("cc.Label");
        name.string = this._object.username;
        name.node.color = color;
        var time = this.node.getChildByName("time").getComponent("cc.Label");
        time.string = cc.vv.utils.dateFormat(~~this._object.dateline);
        time.node.color = color;
        var amout = this.node.getChildByName("amount").getComponent("cc.Label");
        amout.string = this._object.amount;
        amout.node.color = color;
        this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }
});