var ENROLL_STATE = cc.Enum({
    ENROLLED: 1,
    NOT_ENROLL: 2,
});

cc.Class({
    extends: cc.Component,
    properties: {
        cc_sprite16:cc.SpriteFrame,
        cc_sprite4:cc.SpriteFrame,
        _object:null
    },
    updateBtn:function(state){
        if(state === ENROLL_STATE.ENROLLED){
            this.node.getChildByName("exitButton").active = true;
            this.node.getChildByName("enlistButton").active = false;
        }else{
            this.node.getChildByName("exitButton").active = false;
            this.node.getChildByName("enlistButton").active = true;
        }
    },
    onLoad: function () {
        this.updateBtn(ENROLL_STATE.NOT_ENROLL);
        this.onEvent();
    },
    initData:function(object){
        this._object = object;
        // console.log("==============this._object",this._object);
        var name = this.node.getChildByName("name").getComponent(cc.Label);
        var peopleLabel = this.node.getChildByName("peoLabel").getComponent(cc.Label);
        var pepoleSprite = this.node.getChildByName("pSprite").getComponent(cc.Sprite);
        var countLabel = this.node.getChildByName("countLabel").getComponent(cc.RichText);
        // var iconSprite = this.node.getChildByName("icon").getComponent(cc.Sprite);
        // var costLabel = this.node.getChildByName("costLabel").getComponent(cc.Label);
        var ruleLabel = this.node.getChildByName("ruleLabe").getComponent(cc.Label);

        if (~~this._object._ruleType !== 0){
            var costArray = this._object._cost_text.split(",");
            var info = cc.vv.dataMgr.getIconByType(costArray[0]);

            countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+0+"</color>";
            name.string = this._object._name;
            // iconSprite.spriteFrame = info.spriteFrame;
            // costLabel.string = "X"+costArray[1];

            if(this._object._nums === "16"){
                pepoleSprite.spriteFrame = this.cc_sprite16;
                peopleLabel.string = cc.vv.lang.LANG_DESC.Full16People;
            }else if(this._object._nums === "4"){
                pepoleSprite.spriteFrame = this.cc_sprite4;
                peopleLabel.string = cc.vv.lang.LANG_DESC.Full4People;
            }

            var rewards = this._object["Rwd"];
            if(!(rewards instanceof Array)){
                rewards = [];
                rewards.push(this._object["Rwd"]);
            }
            var reward = rewards[0];
            if(reward){
                var sInfo = "";
                var rInfs = reward._reward_text.split(";");
                for(var s = 0;s<rInfs.length;s++){
                    var rewardArray= rInfs[s].split(",");
                    var info = cc.vv.dataMgr.getIconByType(rewardArray[0]);
                    sInfo += info.name +" X"+rewardArray[1];
                    break;
                }
            }
            ruleLabel.string = cc.vv.lang.LANG_DESC.One+sInfo;
        }
    },
    onEvent:function(){
        this.countLabel = this.node.getChildByName("countLabel").getComponent(cc.RichText);
        cc.vv.global.on("enrollSucceedEvent",function(data){
            if (~~this._object._id === ~~data.detail.xml_id){
                this.countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+data.detail.cur_nums+"</color>";
                this.updateBtn(ENROLL_STATE.ENROLLED);
            }
        }.bind(this));

        cc.vv.global.on("matchLoadEvent",function(data){
            var matchData = data.detail;
            if (~~this._object._id === ~~matchData.enroll_xml_id){
                this.updateBtn(ENROLL_STATE.ENROLLED);
            }
            for (var i = 0; i < matchData.matchs.length; ++i) {
                var curData = matchData.matchs[i];
                if (~~this._object._id === ~~curData.xml_id){
                    this.countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+curData.cur_nums+"</color>";
                    break;
                }
            }
        }.bind(this));

        cc.vv.global.on("exitSucceedEvent",function(data){
            var matchData = data.detail;
            if (~~this._object._id === ~~matchData.xml_id){
                this.countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+matchData.cur_nums+"</color>";
                this.updateBtn(ENROLL_STATE.NOT_ENROLL);
            }
        }.bind(this));

        cc.vv.global.on("enrollStateEvent",function(data){
            var matchData = data.detail.matchs;
            for (var i = 0; i < matchData.length; ++i) {
                var curData = matchData[i];
                if (~~this._object._id === ~~curData.xml_id){
                    this.countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+curData.cur_nums+"</color>";
                    break;
                }
            }
        }.bind(this));

        // cc.vv.global.on("OnUpdateEnlistCount",function(data){
        //     var object = data.detail;
        //     var infos = object.infos;
        //     var length = infos.length;
        //     for(var i= 0;i<length;i++){
        //         if(this._object && this._object._id == infos[i].type){
        //             var countLabel = this.node.getChildByName("countLabel").getComponent(cc.RichText);
        //             countLabel.string = "<color=#ac5831>"+cc.vv.lang.LANG_DESC.Enrolment+"</color><color=#ff0300>"+infos[i].count+"</color>";
        //         }
        //     }
        // }.bind(this));
        // cc.vv.global.on("OnUpdateEnlistState",function(data){
        //     this.updateBtn();
        // }.bind(this)); 
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "enlistButton"){
            console.log("=============this._object._id==",this._object._id);
            cc.vv.global.emit("showEnrollLayer",~~this._object._id);
            // cc.director.loadScene('mj_taizhou', function () {
            //     cc.vv.global.loadingHide();
            // }); 
        }else if(name === "exitButton"){
            cc.vv.controller.C2S_MatchExit(~~this._object._id);
        }else if(name === "detailsButton"){
            cc.vv.global.emit("ShowCompetionReward",~~this._object._id);
        }
    }
});