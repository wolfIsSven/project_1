cc.Class({
    extends: cc.Component,
    properties: {
        cc_label: cc.Node,
        cc_messNode: cc.Node,
    },

    onDestory: function (){
        this.time = 0;
        this.isEnd = false;
        this.cc_label.stopAllActions();
        this.cc_messNode.active = false;
    },
    showCurMessage:function(){
        this.isEnd = true;
        cc.cache.commondata.sortMessfunc();
        var str = cc.cache.commondata.handleMessageBegin();
        if (!str){
            cc.cache.commondata.handleMessageEnd();
            this.onDestory();
            return;
        }

        var table1 = str.split("<");
        var newStr = "";
        if (str.match(/>(.+)(<)/)){
            for (var i = 1; i < table1.length; i+=2) {
                if (table1[i] && table1[i].match(/>(.+)/) && table1[i].match(/>(.+)/)[1]){
                    newStr += table1[i].match(/>(.+)/)[1];
                }
            }    
        }else{
            newStr = str
        }
        
        this.cc_label.getComponent(cc.RichText).string = str;
        var messageLen = newStr.length;
        cc.cache.commondata.handleMessageEnd();
        this.cc_label.x = 310;
        var action = cc.moveBy(15, -620-messageLen*20, 0);
        this.cc_label.runAction(cc.sequence(action, cc.callFunc(function () {
            if (cc.cache.commondata.messages.length > 0){
                this.showCurMessage();
            }else{
                this.onDestory();
            }
        }.bind(this))));
    },
    onLoad: function () {
        // cc.game.addPersistRootNode(this.node);
    },
    show: function () {
        this.time = 0;
        this.node.active = true;
        this.cc_messNode.active = true;
        this.node.parent = cc.vv.global.getCurSceneNode();
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_QUICKTIP;
        this.showCurMessage();
    },
    updateShow: function () {
        if (this.isEnd){
            return
        }
        this.cc_messNode.active = true;
        this.showCurMessage();
    },
    update:function(dt){
        ++this.time;
        if (this.time % 500 !== 0 || this.isEnd){
            return
        }
        if (cc.cache.commondata.messages[0] && cc.cache.commondata.messages[0].nextTime){
            var curTime = Math.ceil(new Date().getTime()/1000);
            if (cc.cache.commondata.messages[0].nextTime <= curTime){
                this.updateShow();
            }
        }
    }





})