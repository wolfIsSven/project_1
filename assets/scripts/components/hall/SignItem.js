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
        lblDay: {
            default: null,
            type: cc.Label
        },
        lblName: {
            default: null,
            type: cc.Label
        },
        lblDiamond: {
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
        richTextVal:cc.RichText,
        skSign:cc.Node,
    },

    initItem:function(signData,getType){
        this._dayId = signData._id
        //天数
        this.lblDay.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.Di+signData._id+cc.vv.lang.LANG_DESC.Day;
        //获得奖励描述
        var des = signData._desc;
        var desData = des.split("X");
        this.richTextVal.getComponent(cc.RichText).string = "<color=#905C41>"+desData[0]+"</c><color=#D45331>x"+desData[1]+"</color>";
        //奖励
        var reward = signData._reward_text;
        var rewardData = reward.split(",");
        var rewardInfo = cc.vv.dataMgr.getIconByType(rewardData[0], rewardData[1]);
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = rewardInfo.spriteFrame;

        if (getType === 0){  ///不可领
            this.btnDraw.getComponent(cc.Button).interactable = false;
            this.skSign.getComponent(sp.Skeleton).animation = null;
            this.sprFinish.node.active = false;
        }else if (getType === 1){  ///可领
            this.btnDraw.getComponent(cc.Button).interactable = true;
            this.skSign.getComponent(sp.Skeleton).animation = "animation";
            this.sprFinish.node.active = false;
        }else if (getType === 2){  ///已领
            this.btnDraw.getComponent(cc.Button).interactable = false;
            this.skSign.getComponent(sp.Skeleton).animation = null;
            this.sprFinish.node.active = true;
        }
    },
    onLoad: function () {
        // cc.vv.protobuf.on("S2C_WELFARE_LIVENESS_CHECKIN",function(drawData){
        //     var newDay = drawData.detail.newCheckinCount;
        //     if(this._day == newDay){
        //         this.btnDraw.getComponent(cc.Button).interactable = false;
        //         this.sprFinish.node.active = true;
        //         this.skSign.getComponent(sp.Skeleton).animation = null;
        //     }
        // }.bind(this));
    },
    btnClick:function(){
        cc.vv.controller.C2S_MainSign(~~this._dayId);
    }

    // signData 签名数据
    // idx 下标
    // pos 节点位置

});
