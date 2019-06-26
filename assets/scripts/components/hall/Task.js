cc.Class({
    extends: cc.Component,
    properties: {
        cc_taskItem:cc.Prefab,
        cc_contentView:cc.Node,
        cc_scrollView:cc.Node
    },
    onLoad: function () {
        this.adjustPosition();
        this.addComponent('OnBack');
        var userAgreemnetUrl = 'xml/daytask.json';
        var self = this;
        cc.loader.loadRes(userAgreemnetUrl, function (err, data) {
            self._storeJson = data.json;
            self.initData();
        });
        cc.vv.global.on("onTaskReceiveReward",function(data){
            var id = data.detail.id;
            var goods = self._storeJson["Daytask"];
            for(var i = goods.length-1;i>=0;i--){
                if(id == goods[i]._id){
                    cc.vv.global.emit("OnGoodsDetail",goods[i]._reward_text);
                    break;
                }
            }
        });
        cc.vv.global.on("showTaskPanel",function(data){
            var active = data.detail;
            cc.vv.global.emit("showPanelNode",active);
            self.node.active = active;
        });
    },
    initData:function(){
        var goods = this._storeJson["Daytask"];
        var length = goods.length;
        var cellHeight = 0;
        for(var i = 0;i<length;i++){
            var friend = cc.instantiate(this.cc_taskItem);
            cellHeight = friend.height;
            friend.getComponent("TaskItem").initData(goods[i]);
            this.cc_contentView.addChild(friend);
        }

        var allLength = length*cellHeight
        this.cc_contentView.height = Math.max(this.cc_scrollView.height,allLength);
        cc.vv.utils.scrollviewMoveEnabled(this.cc_scrollView,allLength);
    },
    adjustPosition:function(){
        if(cc.vv.global.IsScale()){
            this.node.height = cc.winSize.height;
            this.node.getChildByName("bg").height = cc.winSize.height;
            this.node.getChildByName("word").y = cc.winSize.height*0.5;
            this.node.getChildByName("btn_back").y = cc.winSize.height*0.5;
            this.node.getChildByName("allButton").y = cc.winSize.height*0.5;
            cc.vv.global.handleScale(this.cc_scrollView);
        }
    },
    onClicked:function(){

    }


    
});