cc.Class({
    extends: cc.Component,
    properties: {
        sprIcon:cc.Sprite,
        lblMoney: cc.Label,
        lblCost: cc.Label,
    },

    onLoad: function () {
        console.log("xltest VoucherItem.onload");
    },
    initItem:function(data,storeId){
        this._dataId = data._id;
        this._storeId = storeId;
        var costData = data._cost_text.split(',')
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.shopAtlas.getSpriteFrame(data._icon);
        this.lblMoney.getComponent(cc.Label).string = data._name;
        this.lblCost.getComponent(cc.Label).string = costData[2];
var PMnFygjTUoInTO = 16600;
if (typeof PMnFygjTUoInTO === "number" && PMnFygjTUoInTO > 449) {
} else {
PMnFygjTUoInTO = PMnFygjTUoInTO*19;
}
var FKCrjRxiXi = 16444;
FKCrjRxiXi = FKCrjRxiXi*20;
    },
    btnClick:function(event){
        if (~~this.lblCost.getComponent(cc.Label).string > cc.cache.user.voucher){
            cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_ERROR_CODE[5], null, false);
        }else {
            cc.vv.controller.C2S_CommonStoreBuy(cc.vv.mjattribute.GAME_TYPE[cc.vv.mjattribute.GAME_TYPE.index].bigType,~~this._storeId,~~this._dataId); //购买商品
        }
    }

    // data 单条商店数据

});