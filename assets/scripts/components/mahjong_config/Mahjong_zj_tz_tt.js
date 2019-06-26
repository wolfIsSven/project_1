// var MJ_CONFIG = {
//     rule_id : "7008",
//     rule_name : "天台麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:300,

        carryNum:10, //10位  进1
        deCanPlay:true,
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
    getHuScoreCalString: function(playerInfo,hu) {
        var HU_CAL_TYPE = {
            an_gang:{name:cc.vv.lang.LANG_DESC.DarkBar,multiple:16},       //16倍
            ming_gang:{name:cc.vv.lang.LANG_DESC.Bar,multiple:8},    //8倍
            an_ke:{name:cc.vv.lang.LANG_DESC.Darks,multiple:4},        //4倍
            ming_ke:{name:cc.vv.lang.LANG_DESC.Words,multiple:2},      //2倍
            men_feng_dui:{name:cc.vv.lang.LANG_DESC.WordName,multiple:2},   //2倍
        
            kandang_hu:{name:cc.vv.lang.LANG_DESC.BlockHu,multiple:2},   //2倍
            kaobing_hu:{name:cc.vv.lang.LANG_DESC.KaoBingHu,multiple:2},   //2倍
            dandiao_hu:{name:cc.vv.lang.LANG_DESC.DanDiaoHu,multiple:2},   //2倍
        
            hua_pai:{name:cc.vv.lang.LANG_DESC.HuaPia,multiple:4},
        }
        
        var TAI_CAL_TYPE = {
            tai_zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
            tai_gangshang_kaihua:{name:cc.vv.lang.LANG_DESC.GangShangHua,multiple:1},   //1台
            tai_pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:1},   //2台
        
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:1},    //1台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
            
            si_hua:{name:cc.vv.lang.LANG_DESC.SiHuaQiQuan,multiple:2},   //2
            men_qing:{name:cc.vv.lang.LANG_DESC.MenQing,multiple:1},   //1
            qiang_gang_hu:{name:cc.vv.lang.LANG_DESC.QiangGangHu,multiple:1},        //1台
        
            zheng_dian_hua:{name:cc.vv.lang.LANG_DESC.ZuoHua,multiple:1},
        }
        
        var allType = {
            an_gang:0,
            ming_gang:0,
            an_ke:0,
            ming_ke:0,
            men_feng_dui:0,   //2倍

            tai_zi_menfeng_kegang:0, //1台
            zd_hua_count:0,
            is_si_hua:false,

            di_hu:false,
            
            de_4:false,
            hua_8:false,
        }
        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4LAIZI)) {
                allType.de_4 = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_8HUA)) {
                allType.hua_8 = true;
            }else if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_DIHU)) {
                allType.di_hu = true;
            }else {
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

        var huaData = cc.vv.global.judgeZhengDianHua(playerInfo.huaCards.slice(),playerInfo.index);
        allType.zd_hua_count = huaData.zdHua;
        allType.is_si_hua = huaData.sihua;

        var string = ""
        // var allCount = hu ? 20 : 0;

        if (allType.de_4 || allType.hua_8){
            var name = cc.vv.lang.LANG_DESC.LaZi;
            // allCount = this.lazi;
            string = name+" "+allCount+cc.vv.lang.LANG_DESC.Hu;
            return {allType:allType,typeStr:string,allCount:allCount};
        }

        if (allType.di_hu){
            var val = this.lazi/2;
            // allCount += val;
            string = cc.vv.lang.LANG_DESC.DiHu+""+val+cc.vv.lang.LANG_DESC.Hu;
        }

        for (var k in allType) {
            if (allType.hasOwnProperty(k)) {
                var val = allType[k];
                if (val > 0){
                    if (HU_CAL_TYPE[k]){
                        // allCount += HU_CAL_TYPE[k].multiple*val;
                        string += HU_CAL_TYPE[k].name+" "+HU_CAL_TYPE[k].multiple*val+cc.vv.lang.LANG_DESC.Hu;
                    }
                }
            }
        }
        
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
                var mul = HU_CAL_TYPE["kandang_hu"].multiple + 2;
                // allCount += mul;
                string += HU_CAL_TYPE["kandang_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BIANZHANG)) {
                var mul = HU_CAL_TYPE["kaobing_hu"].multiple + 2;
                // allCount += mul;
                string += HU_CAL_TYPE["kaobing_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DIAOZI19)) {
                var mul = HU_CAL_TYPE["dandiao_hu"].multiple + 2;
                // allCount += mul;
                string += HU_CAL_TYPE["dandiao_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DANDIAO)) {
                var mul = HU_CAL_TYPE["dandiao_hu"].multiple;
                // allCount += mul;
                string += HU_CAL_TYPE["dandiao_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
        }else {
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
                var mul = HU_CAL_TYPE["kandang_hu"].multiple;
                // allCount += mul;
                string += HU_CAL_TYPE["kandang_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BIANZHANG)) {
                var mul = HU_CAL_TYPE["kaobing_hu"].multiple;
                // allCount += mul;
                string += HU_CAL_TYPE["kaobing_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
            if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DIAOZI19)) {
                var mul = HU_CAL_TYPE["dandiao_hu"].multiple;
                // allCount += mul;
                string += HU_CAL_TYPE["dandiao_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            }
        }
        if (playerInfo.huaCards.length > 0){
            var mul = HU_CAL_TYPE["hua_pai"].multiple * playerInfo.huaCards.length;
            // allCount += mul;
            string += HU_CAL_TYPE["hua_pai"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu
        }  
        
        ////////台数
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_MENQING)) {
            var val = TAI_CAL_TYPE["men_qing"].multiple
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["men_qing"].name+" "+val+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
            var pphMul = TAI_CAL_TYPE["tai_pengpeng_hu"].multiple;
            // allCount *= Math.pow(2,pphMul);
            string += TAI_CAL_TYPE["tai_pengpeng_hu"].name+" "+pphMul+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var val = TAI_CAL_TYPE["hun_yi_se"].multiple
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var val = TAI_CAL_TYPE["qing_yi_se"].multiple
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGPAO)
            || hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGHUA))) {
            var mul = Math.pow(2,TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_gangshang_kaihua"].name+" "+TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_QIANGGANG)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["qiang_gang_hu"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qiang_gang_hu"].name+" "+TAI_CAL_TYPE["qiang_gang_hu"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (allType.is_si_hua) {
            var mul = Math.pow(2,TAI_CAL_TYPE["si_hua"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["si_hua"].name+" "+TAI_CAL_TYPE["si_hua"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Tai
        }
        if (allType.zd_hua_count > 0){
            var mul = allType.zd_hua_count * TAI_CAL_TYPE["zheng_dian_hua"].multiple;
            // allCount *= mul;
            string += TAI_CAL_TYPE["zheng_dian_hua"].name+" "+allType.zd_hua_count+cc.vv.lang.LANG_DESC.Tai
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },

})