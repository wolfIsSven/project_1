cc.Class({
    extends: cc.Component,
    properties: {
    },
    arrowRunAction:function(node,type) {
        if (type === 2){
            var sp1 = node.getChildByName("sp1");
            var sp2 = node.getChildByName("sp2");
            sp1.stopAllActions();
            sp2.stopAllActions();

            sp1.runAction(cc.repeat(cc.sequence(
                cc.moveBy(0.5, 0, -50),
                cc.moveBy(0.5, 0, 50),
            ), 3));
            sp2.runAction(cc.repeat(cc.sequence(
                cc.moveBy(0.5, 0, 50),
                cc.moveBy(0.5, 0, -50),
            ), 3));
        }else if (type === 0){
            node.stopAllActions();
            node.runAction(cc.repeat(cc.sequence(
                cc.rotateBy(0.5, 45),
                cc.rotateBy(0.5, -45),
            ), 3));
        }else if (type === 1){
            node.stopAllActions();
            node.runAction(cc.repeat(cc.sequence(
                cc.rotateBy(0.5, -45),
                cc.rotateBy(0.5, 45),
            ), 3));
        }
    },
    updateChooseNode:function(){
        for (var i = 0; i < 3; i++) {
            var curWayNode = this.wayNode.getChildByName("swpWay"+i);
            var title = this.wayNode.getChildByName("labelTip"+i)
            if (i === cc.vv.roomdata.exchangeType){
                curWayNode.active = true;
                title.active = true;
                this.arrowRunAction(curWayNode,i);
            }else {
                curWayNode.active = false;
                title.active = false;
            }
        }
        console.log("111111=========updateChooseNode=========");
        var action = cc.delayTime(3);
        var self = this;
        this.node.runAction(cc.sequence(action, cc.callFunc(function () {
            console.log("===============mj_show_choose_color=============")
            cc.vv.global.emit('mj_show_choose_color');
            self.onClose();
        })));
    },
    updateXPZNode:function(){
        for (var i = 1; i < 4; i++) {
            var sp = this.xpzNode.getChildByName("sp"+i);
            sp.active = false;
        }
        for (var index in cc.vv.roomdata.players) {
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (seatIndex === 0){ continue; }
            var sp = this.xpzNode.getChildByName("sp"+seatIndex);
            sp.active = true;
        }
    },
    onEnable:function(){
        console.log("exchangecards=========onEnable=========");
        this.updateData()
        cc.vv.global.emit('proto_best_swap_cards');
    },
    updateData:function(){
        var ownCards = cc.vv.roomdata.ownCardIds;
        this.node.stopAllActions();
        if (cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.CHOOSE){
            this.exchangeNode.active = false;
            this.wayNode.active = true;
            this.waitNode.active = false;
            this.xpzNode.active = false;
            this.updateChooseNode();
        }else if (ownCards && ownCards.length >= cc.vv.mjconfig.getEachPaiLimit()-1){
            this.exchangeNode.active = true;
            this.wayNode.active = false;
            this.waitNode.active = false;
            this.xpzNode.active = true;
            this.updateXPZNode();
        }else if(cc.vv.roomdata.state === cc.vv.constant.ROOM_STATE.EXCHANGE){
            this.exchangeNode.active = false;
            this.wayNode.active = false;
            this.waitNode.active = true;
            this.xpzNode.active = true;
            this.updateXPZNode();
        }else{
            this.exchangeNode.active = false;
            this.wayNode.active = false;
            this.waitNode.active = false;
            this.xpzNode.active = false;
        }
    },
    onLoad: function () {
        this.exchangeNode = this.node.getChildByName("exchangeNode");
        this.wayNode = this.node.getChildByName("wayNode");
        this.waitNode = this.node.getChildByName("waitNode");
        this.xpzNode = this.node.getChildByName("xuanpaizhong");
        
        console.log("exchangecards=========onLoad=========");
        var self = this;
        cc.vv.global.on("proto_had_Swap",function(){
            console.log("=========proto_had_Swap=========");
            self.updateData();
        }.bind(this))
    },
    onClose:function(){
        cc.vv.global.emit("mj_close_module",cc.vv.constant.ROOM_PREFAB.MJ_EXCHANGE_CARDS)
    },
    btnClick:function(target,customEventData){
        var exchangeCards = [];
        var len = cc.vv.roomdata.exchangeCards.length;
        console.log("cc.vv.roomdata.exchangeCards=====================",cc.vv.roomdata.exchangeCards);
        if (len < cc.vv.mjconfig.isExchangeCards()){
            cc.vv.global.quickTip("选择的数量不足");
            return;
        }else if (len > cc.vv.mjconfig.isExchangeCards()){
            cc.vv.global.quickTip("数量异常");
            return;
        }
        for (var i = 0; i < cc.vv.roomdata.exchangeCards.length; i++) {
            var node = cc.vv.roomdata.exchangeCards[i];
            exchangeCards.push(node.mjId);
        }
        console.log("exchangeCards==============",exchangeCards);
        cc.vv.controller.C2S_RoomMjSwapCard(exchangeCards);
    },
    OnDisabled:function() {
        this.node.stopAllActions();
    }








});