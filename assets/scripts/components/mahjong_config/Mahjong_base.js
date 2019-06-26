cc.Class({
    properties: {
        _obj: null,
    },

    getReplaceJokerCard: function() {
        return 0;
    },
    getMjFirstState: function (){
        return cc.vv.constant.ROOM_STATE.RUN;
    },
    pengGangHuaCount: function(data) {
        return 0;
    },
    isChooseColor: function(card){
        return false;
    },
    bind:function(obj) {
        this._obj = obj;
    },
    getHuScoreCalString: function (playerInfo,hu){
    },
    getCardLimit: function() {
        return 136;
    },
    getEachPaiLimit: function() {
        return 14;
    },
    getDunNums: function() {
        return 18;
    },
    isExchangeCards: function(card){
        return 0;
    },
    cardIsHua: function(card){
        return false;
    },
    getRemainNumsAdd: function (playerInfo,hu){
        return 0;
    },
    getDunPaiNums: function() {
        return 36;
    },
    release: function() {
        this._obj = null;
    },

});