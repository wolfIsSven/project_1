cc.Class({
    extends: cc.Component,
    properties: {
        _beginPos:0,
        _endPos:0,
        _nowRunning:false
    },
    onLoad: function () {
        if(cc.vv.global.IsScale()){
            this.node.height = cc.winSize.height;
        }
        var userAgreemnetUrl = 'xml/activity.json';
        var self = this;
        cc.loader.loadRes(userAgreemnetUrl, function (err, data) {
            self._activityJson = data.json;
            self.initData();
        });

        this._turnTableNode = this.node.getChildByName("turntableSprite");
        this._startBtn = this.node.getChildByName("turnButton");
        // this._startBtn.getComponent(cc.Button).enabled = false;

        this.addComponent('OnBack');
        // cc.vv.utils.addClickEvent(this._startBtn, this.node, 'Activity', 'onStartBtn');

        this.updateButtonStatus();

        cc.vv.global.on("onActivityRotorRun",function(data){
            data = data.detail;
            cc.vv.activityMgr.setkeyNum(-1);
            self.refreshTimes();
            self._endPos = data.id;
            self.playAnimation();
            self._beginPos = self._endPos-1;
        });

        cc.vv.global.on("onActivityRefreshTimes",function(data){
            if(!self._nowRunning){
                self.updateButtonStatus();
            }
        });

        cc.vv.global.on("onActivityRotorDraw",function(data){
            
        });
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "turnButton"){
            cc.vv.protobuf.sendMessage(1403,{type:1403});
            this._startBtn.getComponent(cc.Button).interactable = false;
            this._startBtn.getChildByName("spineNode").active = false;
            this._nowRunning = true;

            // this._endPos = ~~(Math.random()*12+1);
            // this.playAnimation();
            // this._beginPos = this._endPos;
        }else if(name === "StartButton"){
            cc.vv.global.emit("OnShowTaskView",true);
        }
    },
    playAnimation:function(){
        if(!this._beginPos){
            this._beginPos = ~~(Math.random()*12+1);
        }
        
        var childrens = this._turnTableNode.children;
        var length = childrens.length;
        for(var i = 0;i<length;i++){
            childrens[i].getChildByName("SelectedSprite").active = false;
        }
        childrens[this._beginPos-1].getChildByName("SelectedSprite").active = true;
      
        var actionArray = [];
        for(var i = this._beginPos-1;i<length*3+this._endPos;i++){
            var pos1 = i%length;
            var pos2 = (i-1);
            if(pos2 < 0){
                pos2 = length -1;
            }else{
                pos2 = pos2%length;
            }
            actionArray.push(this.action(childrens[pos1],childrens[pos2]));
        }
        var action = cc.sequence(actionArray);
        action.easing(cc.easeOut(2.0));
        this._turnTableNode.runAction(action);

        cc.vv.protobuf.sendMessage(1405,{type:1405});
    },
    updateButtonStatus:function(){
        if(cc.vv.activityMgr._keyNum > 0){
            this._startBtn.getComponent(cc.Button).interactable  = true;
            this._startBtn.getChildByName("spineNode").active = true;
        }else{
            this._startBtn.getComponent(cc.Button).interactable = false;
            this._startBtn.getChildByName("spineNode").active = false;
        }
        this.refreshTimes();
        this._nowRunning = false;
    },
    refreshTimes:function(){
        this._startBtn.getChildByName("frequencyLabel").getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.LeftTimes.replace("?",cc.vv.activityMgr._keyNum);
    },
    initData:function(){
        // function initSprite(sprite){
        //     cc.loader.loadRes(info["icon"],cc.SpriteFrame,function(err,spriteFrame){
        //         sprite.spriteFrame = spriteFrame;
        //     });
        // }
        var activity = this._activityJson["Activitys"]["Activity"]["Details"];
        var childrens = this._turnTableNode.children;
        var length = childrens.length;
        for(var i = 0;i<length;i++){
            var child = childrens[i];
            child.getChildByName("SelectedSprite").active = false;
            var rewardArray= activity[i]._reward_text.split(",");

            child.getChildByName("NumberLabel").getComponent(cc.Label).string = rewardArray[1];

            // var info = cc.vv.dataMgr.getIconByType(rewardArray[0]);
            child.getChildByName("iconSprite").getComponent(cc.Sprite).spriteFrame = cc.vv.dataMgr.getSpriteFrameByName(activity[i]._icon);//info.spriteFrame;
            // initSprite(sprite);
        }
    },
    action:function(node,pNode,time){
        return cc.sequence(cc.callFunc(function(){
            pNode.getChildByName("SelectedSprite").active = false;
            node.getChildByName("SelectedSprite").active = true;
        }),cc.delayTime(0.1))
    }
});