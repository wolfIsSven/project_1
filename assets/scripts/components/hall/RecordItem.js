cc.Class({
    extends: cc.Component,
    properties: {
        _object:null
    },
    initData:function(object){
        this._object = object;
        var roomIdLabel = this.node.getChildByName("roomIdLabel");
        var timeLabel = this.node.getChildByName("timeLabel");
        var ruleLabel = this.node.getChildByName("ruleLabel");

        var ruleType = object.rule_type;
        var roundLimit = 8;//object.roundLimit;
        var playerLimit = 4; //object.playerLimit;
        var nameString = cc.vv.lang.LANG_RULE_TYPE[Number(ruleType)];
        var value = roundLimit+cc.vv.lang.LANG_DESC.Bureau+" "+playerLimit+cc.vv.lang.LANG_DESC.People+" "; //+(object.chargeRoomType === 0?"房费平摊":object.chargeRoomType===1?"房主付费":"大赢家付费")+" "+(object.useMammon === 1?"加1台":"不加台")+" "+(object.restoreMammon === 1?"还原":"常规");
        ruleLabel.getComponent(cc.Label).string = nameString + " " + value; //"<color=#ac5831>"+nameString+"</color><color=ff0300>"+value+"</color><color=#ac5831>）</color>";

        roomIdLabel.getComponent(cc.Label).string = object.room_id;
        timeLabel.getComponent(cc.Label).string = cc.vv.utils.dateFormatSecond2(object.ts);

        var rscore = 0;
        for(var i = 0;i<4;i++){
            var node = this.node.getChildByName("node"+(i+1));
            if (i >= object.mj_logs.length) {
                node.active = false;
                continue;
            }
            var info = object.mj_logs[i];
            if(info){
                var name = node.getChildByName("nameLabel");
                var score = node.getChildByName("integalLabel");
                name.getComponent(cc.Label).string = info.role_name;
                score.getComponent(cc.Label).string = info.total_integal;
                node.active = true;
                if (info.role_name === cc.cache.user.roleName){
                    node.getChildByName('bg_select').active = true;
                }
            }else{
                node.active = false;
            }
        }
    },
    onLoad: function () {

    },
    onClickButton:function(event){
        cc.vv.global.emit("record_item_show_round", {report: this._object});
    },


});