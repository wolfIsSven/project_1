// var MJ_CONFIG = {
//     rule_id : "7002",
//     rule_name : "椒江麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:100,
        depaicount:1,
    },

    ///替换百搭牌
    getReplaceJokerCard: function() {
        return 417;
    },
    getHuScoreCalString:function(playerInfo,hu){
        var HU_CAL_TYPE = {
            an_gang:{name:cc.vv.lang.LANG_DESC.DarkBar,multiple:16},       //16倍
            ming_gang:{name:cc.vv.lang.LANG_DESC.Bar,multiple:8},    //8倍
            an_ke:{name:cc.vv.lang.LANG_DESC.Darks,multiple:4},        //4倍
            ming_ke:{name:cc.vv.lang.LANG_DESC.Words,multiple:2},      //2倍
            men_feng_dui:{name:cc.vv.lang.LANG_DESC.WordName,multiple:2},   //2倍
            zi_mo:{name:cc.vv.lang.LANG_DESC.OwnDraw,multiple:2},   //2倍
            kandang_hu:{name:cc.vv.lang.LANG_DESC.BlockHu,multiple:2},   //2倍
        
            hu_pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:4},   //2倍
        }
        
        var TAI_CAL_TYPE = {
            tai_zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
        
            wu_de:{name:cc.vv.lang.LANG_DESC.NoDe,multiple:1},      //1台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:1},    //1台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
            de_huan_yuan:{name:cc.vv.lang.LANG_DESC.DeHuanYuan,multiple:1},        //1台
            bai_huan_yuan:{name:cc.vv.lang.LANG_DESC.DeRestore,multiple:1},        //1台
        }
        
        var allType = {
            an_gang:0,
            ming_gang:0,
            an_ke:0,
            ming_ke:0,
            men_feng_dui:0,   //2倍

            tai_zi_menfeng_kegang:0, //1台
            have_de_pai:false,       
        }
        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            for (var i = 0; i < hu.huGroup.length; ++i) {
                var group = hu.huGroup[i].card;
                var huType0 = cc.vv.global.judgeCardsGroupType(group.slice(),playerInfo.index,false,hu.cardId); //手上的牌
                allType.have_de_pai = allType.have_de_pai || huType0.have_de_pai;
            }
            var huInfos = hu.huNumInfo;
            for (var i = 0; i < huInfos.length; ++i) {
                var huInfo = huInfos[i];
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_DUI_ZISELF){
                    allType.men_feng_dui += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_ZISELF){
                    allType.tai_zi_menfeng_kegang += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_ZI19){
                    allType.ming_ke += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_OTHER){
                    allType.ming_ke += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANKE_ZI19){
                    allType.an_ke += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANKE_OTHER){
                    allType.an_ke += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_GANG_ZI19){
                    allType.ming_gang += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_GANG_OTHER){
                    allType.ming_gang += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANGANG_ZI19){
                    allType.an_gang += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANGANG_OTHER){
                    allType.an_gang += huInfo.value;
                }
            }
            allCount = hu.huNum;
        }else if(playerInfo.defCards){
            for (var i = 0; i < playerInfo.defCards.length; ++i) {
                var huInfo = playerInfo.defCards[i];
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_DUI_ZISELF){
                    allType.men_feng_dui += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_ZISELF){
                    allType.tai_zi_menfeng_kegang += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_ZI19){
                    allType.ming_ke += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_OTHER){
                    allType.ming_ke += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANKE_ZI19){
                    allType.an_ke += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANKE_OTHER){
                    allType.an_ke += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_GANG_ZI19){
                    allType.ming_gang += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_GANG_OTHER){
                    allType.ming_gang += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANGANG_ZI19){
                    allType.an_gang += huInfo.value * 2;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_ANGANG_OTHER){
                    allType.an_gang += huInfo.value;
                }
            } 
            allCount = playerInfo.huNum;
        }
        
        var string = ""
        // var allCount = hu ? 10 : 0;

        for (var k in allType) {
            if (allType.hasOwnProperty(k)) {
                var val = allType[k];
                if (val > 0){
                    if (HU_CAL_TYPE[k] ){
                        // allCount += HU_CAL_TYPE[k].multiple*val;
                        string += HU_CAL_TYPE[k].name+" "+HU_CAL_TYPE[k].multiple*val+cc.vv.lang.LANG_DESC.Hu;
                    }
                }
            }
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
            // allCount += HU_CAL_TYPE["zi_mo"].multiple;
            string += HU_CAL_TYPE["zi_mo"].name+" "+HU_CAL_TYPE["zi_mo"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
            // allCount += HU_CAL_TYPE["hu_pengpeng_hu"].multiple;
            string += HU_CAL_TYPE["hu_pengpeng_hu"].name+" "+HU_CAL_TYPE["hu_pengpeng_hu"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
            // allCount += HU_CAL_TYPE["kandang_hu"].multiple;
            string += HU_CAL_TYPE["kandang_hu"].name+" "+HU_CAL_TYPE["kandang_hu"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        ////////台数
        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["hun_yi_se"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+TAI_CAL_TYPE["hun_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["qing_yi_se"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+TAI_CAL_TYPE["qing_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_LZSELF)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["de_huan_yuan"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["de_huan_yuan"].name+" "+TAI_CAL_TYPE["de_huan_yuan"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BAISELF)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["bai_huan_yuan"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["bai_huan_yuan"].name+" "+TAI_CAL_TYPE["bai_huan_yuan"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        // var a = cc.vv.roomdata.switch_set.toString(2); //转成二进制 
        // a = cc.vv.global.prefixInteger(a,13);
        // var length = a.length;
        // var ypy = a.slice(length-cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING+2,length-cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING+3);
        var ypy = cc.vv.roomdata.switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING];
        if (hu && !allType.have_de_pai && ypy == 1) {
            var mul = Math.pow(2,TAI_CAL_TYPE["wu_de"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["wu_de"].name+" "+TAI_CAL_TYPE["wu_de"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },

})