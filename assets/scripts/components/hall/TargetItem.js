cc.Class({
    extends: cc.Component,
    properties: {
        nodeRoot:{
            default: null,
            type: cc.Node
        },
        

        btnDraw: {
            default: null,
            type: cc.Button
        },
        btnJump: {
            default: null,
            type: cc.Button
        },
        lblTarget: {
            default: null,
            type: cc.Label
        },
        lblReward: {
            default: null,
            type: cc.Label
        },
        progressBar:{
            default: null,
            type: cc.Node
        },
        lblProgress: {
            default: null,
            type: cc.Label
        },
        sprIcon: {
            default: null,
            type: cc.Sprite
        },
        sprFinish: {
            default: null,
            type: cc.Sprite
        },
    },

    onLoad: function () {
        // console.log("xltest signItem.onload");
        // cc.vv.protobuf.on("S2C_WELFARE_MAIN_TASK_DRAW",function(drawData){
        //     var id = drawData.detail.nextInfos.id;
        //     var preId = drawData.detail.nextInfos.preId;
        //     var state = drawData.detail.nextInfos.state;
        //     // 已完成，要更新的任务id是当前id
        //     if(state == 2){
        //         if(this._targetId == id){
        //             this.initItem(drawData.detail.nextInfos);
        //         }
        //     }
        //     else{
        //         if(this._targetId == preId){
        //             this.initItem(drawData.detail.nextInfos);
        //         }
        //     }
            
        // }.bind(this));
    },
    initItem:function(targetData, task){
        console.log("=========targetData",targetData, ",task:", task);
        this.id = task.id
        this.task = task
        this.targetData = targetData;
        this._jumpPos = targetData._jumpPos;
        var targetNum = targetData._nums ;
        var rewardStr = targetData._reward_text;
        var rewardTable = rewardStr.split(',');
        var rewardName = cc.vv.dataMgr.getIconByType(rewardTable[0], rewardTable[1]).name;
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.taskAtlas.getSpriteFrame(targetData._icon);
        this.lblTarget.getComponent(cc.Label).string = targetData._name;
        this.lblReward.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.Reward+rewardName+"*"+rewardTable[2];
        var progress = task.progress / Number(targetNum);
        if (progress > 1) {
            progress = 1;
        }
        this.progressBar.getComponent(cc.ProgressBar).progress = progress;
        this.lblProgress.getComponent(cc.Label).string = task.progress +"/"+targetNum;
        
        this.btnDraw.node.active = false;
        this.btnJump.node.active = false;
        this.sprFinish.node.active = false;
        // // 
        if (task.state == cc.vv.constant.TASK_STATE.RUNNING){
            this.btnJump.node.active = true;
        }
        else if (task.state == cc.vv.constant.TASK_STATE.FINISH){
            this.btnDraw.node.active = true;
        }
        else if (task.state == cc.vv.constant.TASK_STATE.DRAWN){
            // 显示任务系列都已经完成
            this.sprFinish.node.active = true;
        }
        
        // // 
        // this.btnJump.getComponent("MyCpntJump").initComponent(this._nodeSuper, mainTaskData._jumpPos);
    },
    setNodeSuper:function(nodeSuper){
        this._nodeSuper = nodeSuper;
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name === "btnDraw"){
            // cc.vv.protobuf.sendMessage(2632,{type:2632, taskId:this._targetId});   // 每日签到领取协议
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_MAIN_TASK_DRAW + this.targetData._name);
            cc.vv.controller.C2S_TaskDraw(this.task.id)
        }else if(name === "btnJump") {
            cc.vv.wxApi.aldEventReport(cc.vv.lang.ALD_EVENT.WELFARE_MAIN_TASK_TODO + this.targetData._name);
            cc.vv.global.emit("onOpenPanel",~~this._jumpPos);
        }
    }

    // targetData 单条任务数据


});