cc.Class({
    extends: cc.Component,
    properties: {
        cc_roundLabel:cc.Label,
        cc_score1Label:cc.Label,
        cc_score2Label:cc.Label,
        cc_score3Label:cc.Label,
        cc_score4Label:cc.Label,
        _object:null
    },
    onLoad: function () {

    },
    onClickButton:function(event){
        cc.vv.protobuf.sendMessage(1907,{type:1907,roomId:cc.vv.global.replayRoomId,roundIndex:this._object.roundIndex});
    },
    initData:function(object){
        this._object = object;
        this.cc_roundLabel.string = this._object.roundIndex+1;

        var playerInfos = this._object.playerInfo;
        this.cc_score1Label.string = playerInfos[0].score;
        this.cc_score2Label.string = playerInfos[1].score;
        if(playerInfos[2]){
            this.cc_score3Label.string = playerInfos[2].score;
        }else{
            this.cc_score3Label.string = "";
        }
        if(playerInfos[3]){
            this.cc_score4Label.string = playerInfos[3].score;
        }else{
            this.cc_score4Label.string = "";
        }
        
    }
});