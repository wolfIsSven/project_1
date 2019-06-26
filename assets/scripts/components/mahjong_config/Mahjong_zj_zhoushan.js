// var MJ_CONFIG = {
//     rule_id : "7181",
//     rule_name : "舟山麻将",
// }

// var HU_CAL_TYPE = {
//     // hu_gangshang_kaihua:{name:"杠上开花",multiple:2},   //2冲
// }

// var TAI_CAL_TYPE = {
//     tai_zi_menfeng_kegang:{name:"门风字刻杠",multiple:1},       //1台
//     hun_yi_se:{name:"混一色",multiple:2},    //2台
//     qing_yi_se:{name:"清一色",multiple:3},    //1台
//     hua_pai:{name:"花牌",multiple:1},
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:100,
        depaicount:1,

    },
    ///替换百搭牌
    cardIsHua: function(card){
        return false;
    },
    getCardLimit: function() {
        return 136;
    },
    getReplaceJokerCard: function() {
        return 417;
    },
    getEachPaiLimit: function() {
        return 17;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var allType = {};
        var string = ""
        var allCount = 0;
        return {allType:allType,typeStr:string,allCount:allCount};
    },
    //牌数数量
    ////每人手上多少张牌
    ///牌是否为花牌

})