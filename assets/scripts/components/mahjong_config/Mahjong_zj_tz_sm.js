// var MJ_CONFIG = {
//     rule_id : "7005",
//     rule_name : "三门麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:100,

        huShuString:true,
        deCanPlay:true,
        
        gangtou:true,
        gangtouTitle:"买码",
    },

    //牌数数量
    // getCardLimit: function() {
    //     return 144;
    // },

    ///牌是否为花牌
    cardIsHua: function(card){
        if (card >= 420 && card !== cc.vv.roomdata.depaiCardId[~~card]){
            return true;
        }
        return false;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var TAI_CAL_TYPE = {
            tai_zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:2},    //2台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
            hua_pai:{name:cc.vv.lang.LANG_DESC.HuaPia,multiple:1},
        }
        
        var allType = {
            tai_zi_menfeng_kegang:0,

            have_de_pai_count:0,
            have_hua_count:0,
        }
        ////////胡数
        if (hu && hu.huType > 0){
            var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
            allType.have_de_pai_count = huType0.have_de_pai_count;
            allType.have_hua_count = playerInfo.huaCards.length;

            var huInfos = hu.huNumInfo;
            for (var i = 0; i < huInfos.length; ++i) {
                var huInfo = huInfos[i];
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_ZISELF){
                    allType.tai_zi_menfeng_kegang += huInfo.value;
                }
            }
        }
        
        var string = ""
        var allCount = 0;

        if (hu && cc.vv.roomdata.gangtouData && cc.vv.roomdata.gangtouData[0]){
            var maima = cc.vv.roomdata.gangtouData[0].value;
            string = this.gangtouTitle+" "+maima+cc.vv.lang.LANG_DESC.Hu;
            allCount += maima;
        }
        // console.log("=============allType",allType);
        // for (var k in allType) {
        //     if (allType.hasOwnProperty(k)) {
        //         var val = allType[k];
        //         if (val > 0){
        //             if (HU_CAL_TYPE[k]){
        //                 allCount += HU_CAL_TYPE[k].multiple*val;
        //                 string += HU_CAL_TYPE[k].name+" "+HU_CAL_TYPE[k].multiple*val+"冲 ";
        //             }
        //         }
        //     }
        // }
        // console.log("111=============string",string);
        ////////台数
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var val = TAI_CAL_TYPE["hun_yi_se"].multiple;
            var mul = Math.pow(2,val)
            allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var val = TAI_CAL_TYPE["qing_yi_se"].multiple;
            var mul = Math.pow(2,val)
            allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Tai;
        }
        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && allType.have_hua_count > 0){
            var mul = allType.have_hua_count*Math.pow(2,TAI_CAL_TYPE["hua_pai"].multiple)
            allCount += mul;
            string += TAI_CAL_TYPE["hua_pai"].name+" "+allType.have_hua_count+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && allType.have_de_pai > 2) {
            var mul = 8
            allCount *= mul;
            string += allType.have_de_pai+"个得 3台 "
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },
})