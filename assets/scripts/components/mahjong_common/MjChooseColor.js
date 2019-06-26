cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad: function () {
        this.chooseNode = this.node.getChildByName("chooseNode");
        this.waitNode = this.node.getChildByName("waitNode");
        this.dqNode = this.node.getChildByName("dingquezhong");
        
        var self = this;
        cc.vv.global.on("proto_had_choose",function(){
            self.updateData();
        })

        cc.vv.global.on("proto_best_color_show",function(){
            self.updateChooseNode();
        })
    },
    btnClick:function(target,customEventData){
        cc.vv.controller.C2S_RoomMjChoose(cc.vv.roomdata.selfIndex,~~customEventData);
    },
    onClose:function(){
        cc.vv.global.emit("mj_close_module",cc.vv.constant.ROOM_PREFAB.MJ_CHOOSE_COLOR)
    },
    updateChooseNode:function(){
        var wan = this.chooseNode.getChildByName("wan").getComponent("RadioButton"); ;
        var tong = this.chooseNode.getChildByName("tong").getComponent("RadioButton");
        var tiao = this.chooseNode.getChildByName("tiao").getComponent("RadioButton");

        var index = cc.vv.roomdata.bestColor;
        if (index === 0){
            return;
        }
        var ac1 = cc.spawn(cc.scaleTo(0.4, 1.2), cc.fadeIn(0.8));
        var ac2 = cc.spawn(cc.scaleTo(0, 0.7), cc.fadeOut(0));
        var ac3 = cc.delayTime(0.1);
        if (index === 1){                                                                                                         
            wan.onClicked();
            var btn = this.chooseNode.getChildByName("wan").getChildByName("button");
            btn.runAction(cc.repeatForever(cc.sequence(ac1,ac2,ac3)));
        }else if (index === 2){
            tong.onClicked();
            var btn = this.chooseNode.getChildByName("tong").getChildByName("button");
            btn.runAction(cc.repeatForever(cc.sequence(ac1,ac2,ac3)));
        }else if (index === 3){
            tiao.onClicked();
            var btn = this.chooseNode.getChildByName("tiao").getChildByName("button");
            btn.runAction(cc.repeatForever(cc.sequence(ac1,ac2,ac3)));
        }
        cc.vv.roomdata.bestColor = 0;
    },
    updateCCNode:function(){
        for (var i = 1; i < 4; i++) {
            var sp = this.dqNode.getChildByName("sp"+i);
            sp.active = false;
        }
        for (var index in cc.vv.roomdata.players) {
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (seatIndex === 0){ continue; }
            var sp = this.dqNode.getChildByName("sp"+seatIndex);
            sp.active = true;
        }
    },
    resetBtnsStatus:function() {
        var wan = this.chooseNode.getChildByName("wan").getChildByName("button");
        var tong = this.chooseNode.getChildByName("tong").getChildByName("button");
        var tiao = this.chooseNode.getChildByName("tiao").getChildByName("button");

        wan.stopAllActions();
        tong.stopAllActions();
        tiao.stopAllActions();

        wan.scale = 0.7;
        tong.scale = 0.7;
        tiao.scale = 0.7;

        wan.opacity = 0;
        tong.opacity = 0;
        tiao.opacity = 0;
    },
    onEnable:function(){
        this.updateData()
    },
    updateData:function(){
        this.updateCCNode();
        var selfPlayer = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        if (!selfPlayer.chooseColor){
            this.chooseNode.active = true;
            this.waitNode.active = false;
            this.updateChooseNode();
        }else{
            this.chooseNode.active = false;
            this.waitNode.active = true;
        }
    },
    OnDisabled:function() {
        this.resetBtnsStatus();
    }








});