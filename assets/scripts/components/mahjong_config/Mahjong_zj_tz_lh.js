// var MJ_CONFIG = {
//     rule_id : "7004",
//     rule_name : "临海麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:100,

        huShuString:true,
        deCanPlay:true,

        gangtou:true,
        gangtouTitle:"抓杠头",
    },

    getHuScoreCalString: function (playerInfo,hu){
        var TAI_CAL_TYPE = {
            tai_zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
            wu_de:{name:cc.vv.lang.LANG_DESC.NoDe,multiple:1},      //1台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:1},    //1台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
        }
        
        var allType = {
            tai_zi_menfeng_kegang:0,

            have_de_pai:false,       
        }
        ////////胡数
        if (hu && hu.huType > 0){
            var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
            allType.have_de_pai = allType.have_de_pai || huType0.have_de_pai;

            var huInfos = hu.huNumInfo;
            for (var i = 0; i < huInfos.length; ++i) {
                var huInfo = huInfos[i];
                // console.log("==========huInfo.type",i,huInfo.type);
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_ZISELF){
                    allType.tai_zi_menfeng_kegang += huInfo.value;
                }
            }
        }
        
        var string = ""
        var allCount = 0;

        if (playerInfo.gangtou !== 0){
            string = this.gangtouTitle+" "+playerInfo.gangtou+cc.vv.lang.LANG_DESC.Hu;
            allCount += playerInfo.gangtou
        }
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
        ////////台数
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["hun_yi_se"].multiple)
            allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+TAI_CAL_TYPE["hun_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["qing_yi_se"].multiple)
            allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+TAI_CAL_TYPE["qing_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Tai
        }
        // var a = cc.vv.roomdata.switch_set.toString(2); //转成二进制 
        // a = cc.vv.global.prefixInteger(a,13);
        // var length = a.length;
        // var ypy = a.slice(length-cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING+2,length-cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING+3);
        var ypy = cc.vv.roomdata.switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING];
        if (hu && !allType.have_de_pai && ypy == 1) {
            var mul = Math.pow(2,TAI_CAL_TYPE["wu_de"].multiple)
            allCount *= mul;
            string += TAI_CAL_TYPE["wu_de"].name+" "+TAI_CAL_TYPE["wu_de"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },
})