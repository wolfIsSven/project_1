cc.Class({
    extends: cc.Component,
    properties: {
        cc_iconNode:cc.Node,
        cc_nameNode:cc.Node,
        cc_rewardItem:cc.Prefab,
        cc_progressNode:cc.Node,
        cc_contentNode:cc.Node,
        cc_buttonNode:cc.Node,
        cc_getNode:cc.Node,
        cc_goButton:cc.Node,
        _object:null
    },
    onClicked:function(event){
        var name = event.target.name;
        if (name === "btn_get"){
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_DAY_TASK_DRAW + this._object._name);
            cc.vv.controller.C2S_TaskDraw(~~this._object._id)
        }else if(name === "buttonQWC"){
            // cc.vv.controller.C2S_TaskDraw(~~this._object._id)
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_DAY_TASK_TODO + this._object._name);
            cc.vv.global.emit("onOpenPanel",~~this._object._id);
        }
    },
    onLoad: function () {
        // var self = this;
        // cc.vv.global.on("onTaskReceiveReward",function(data){
        //     var id = data.detail.id;
        //     if(id == self._object.id){
        //         self.initData(self._object);
        //     }
        // });
    },
    initData:function(data){
        this.id = data.id;
        if (!this._object) {
            this._object = cc.vv.configuration.getDayTaskByTaskId(data.id);
        }
        if (!this._object) {
            return;
        }
        cc.trace_log("TaskItem initData ~~~~~~~~~~~~ data.id:", data.id, ",object:", this._object);
        var nums = ~~(this._object._nums);
        var curNums = Math.min(nums,~~data.progress);
        this.cc_nameNode.getComponent(cc.Label).string = this._object._name+"("+curNums+"/"+nums+")";
        // var rewardStr = this._object._reward_text;
        // var rewardTable = rewardStr.split(',');
        // var rewardName = cc.vv.dataMgr.getIconByType(rewardTable[0], rewardTable[1]).name;
        // this.cc_contentNode.getComponent(cc.Label).string = rewardName+"x"+rewardTable[2];
        this.cc_contentNode.getComponent(cc.Label).string = this._object._des;

        this.cc_buttonNode.active = data.state === 1;
        this.cc_getNode.active = data.state === 2;
        this.cc_goButton.active = data.state === 0 && this._object._id != "8006";
        this.cc_iconNode.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.taskAtlas.getSpriteFrame(this._object._icon);
    }
});