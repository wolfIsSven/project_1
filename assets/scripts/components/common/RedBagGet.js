cc.Class({
    extends: cc.Component,

    properties: {
        cc_redbagItem:cc.Prefab,
    },

    updateRedBagList:function() {
        var content = this.node.getChildByName('content');
        var length = cc.cache.commondata.redBags.length;
        for (var i = 0; i < length; ++i) {
            var data = cc.cache.commondata.redBags[i];
            var redBagItem = cc.instantiate(this.cc_redbagItem);
            redBagItem.getComponent('CashBagItem').initData(data);
            content.addChild(redBagItem);
        }
    },
    onLoad: function () {
        
    },
    show: function () {
        this.updateRedBagList();
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
    },
    hide: function () {
        this.node.active = false;
    },



});
