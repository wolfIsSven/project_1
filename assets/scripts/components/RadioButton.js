cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        sprite: cc.SpriteFrame,
        checkedSprite: cc.SpriteFrame,
        checked: false,
        groupId: -1,
        id:0,
        changeColor:false,
        color:0
    },

    // use this for initialization
    refreshStatus:function(isEnable){
        var button = this.target.getComponent(cc.Button);
        var label = this.node.children[1];
        button.interactable = false;
        if(isEnable){
            button.enableAutoGrayEffect = false;
            label.color = new cc.color(2,152,10);
        }else{
            button.enableAutoGrayEffect = true;
            label.color = new cc.color(141,141,141);
        }
    },
    refresh: function () {
        var targetSprite = this.target.getComponent(cc.Sprite);
        if (this.checked) {
            targetSprite.spriteFrame = this.checkedSprite;
        } else {
            targetSprite.spriteFrame = this.sprite;
        }
    },
    onLoad: function () {
        if (cc.vv == null) {
            return;
        }
        // if (cc.vv.radiogroupmgr == null) {
        //     var RadioGroupMgr = require("RadioGroupMgr");
        //     cc.vv.radiogroupmgr = new RadioGroupMgr();
        //     cc.vv.radiogroupmgr.init();
        // }
        cc.vv.radiogroupmgr.add(this);

        this.refresh();
    },
    check: function (value) {
        this.checked = value;
        this.refresh();
        this.setColor(value);
    },
    setEnabled: function(enabled) {
        var btns = this.node.getChildren();
        for (var i = 0; i < btns.length; ++i) {
            var child = btns[i];
            if (child.getComponent(cc.Button)){
                child.getComponent(cc.Button).interactable = enabled;
            }
        }
    },
    onClicked: function () {
        if (!this.checked){
            cc.vv.radiogroupmgr.check(this);
        }
    },
    setColor:function(isSelected){
        var label = this.node.children[1];
        if(label && this.changeColor){
            if(isSelected){
                label.color = new cc.color(2,152,10);
            }else{
                label.color = new cc.color(169,90,45);
            }
        }
        if(label && this.color === 1){
            if(isSelected){
                label.color = new cc.color(255,255,255);
                label.getComponent(cc.LabelOutline).color = new cc.color(109,29,1);
            }else{
                label.color = new cc.color(236,195,172);
                label.getComponent(cc.LabelOutline).color = new cc.color(152,59,22);
            }
            
        }
    },
    onDestroy: function () {
        if (cc.vv && cc.vv.radiogroupmgr) {
            cc.vv.radiogroupmgr.del(this);
        }
    }



    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

});
