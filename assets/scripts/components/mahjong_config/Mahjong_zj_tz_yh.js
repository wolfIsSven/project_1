// var MJ_CONFIG = {
//     rule_id : "7006",
//     rule_name : "玉环麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:400,

        carryNum:10, //10位  进1
        deCanPlay:true,
    },

    ////每人手上多少张牌
    cardIsHua: function(card){
        if (card === 415 && cc.vv.roomdata.depaiCardId[417] === 417){
            return true;
        }else if (card === 417 && cc.vv.roomdata.depaiCardId[417] !== 417){
            return true;
        }
        return false;
    },
    getEachPaiLimit: function() {
        return 17;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var HU_CAL_TYPE = {
            an_gang:{name:cc.vv.lang.LANG_DESC.DarkBar,multiple:16},       //16倍
            ming_gang:{name:cc.vv.lang.LANG_DESC.Bar,multiple:8},    //8倍
            an_ke:{name:cc.vv.lang.LANG_DESC.Darks,multiple:4},        //4倍
            ming_ke:{name:cc.vv.lang.LANG_DESC.Words,multiple:2},      //2倍
            men_feng_dui:{name:cc.vv.lang.LANG_DESC.WordName,multiple:2},   //2倍
            zi_mo:{name:cc.vv.lang.LANG_DESC.OwnDraw,multiple:2},   //2倍
            kandang_hu:{name:cc.vv.lang.LANG_DESC.BlockHu,multiple:2},   //2倍
        
            kaobing_hu:{name:cc.vv.lang.LANG_DESC.KaoBingHu,multiple:2},   //2倍
            dandiao_hu:{name:cc.vv.lang.LANG_DESC.DanDiaoHu,multiple:2},   //2倍
        
            hua_pai:{name:cc.vv.lang.LANG_DESC.HuaPia,multiple:4},
        }
        
        var TAI_CAL_TYPE = {
            tai_zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
            tai_gangshang_kaihua:{name:cc.vv.lang.LANG_DESC.GangShangHua,multiple:1},   //1台
            tai_pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:2},   //2台
        
            wu_de:{name:cc.vv.lang.LANG_DESC.NoDe,multiple:1},      //1台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:2},    //1台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:4},    //1台
            
            la_gang:{name:cc.vv.lang.LANG_DESC.LaGang,multiple:1},   //1台
            si_feng:{name:cc.vv.lang.LANG_DESC.SiFeng,multiple:1},   //1台
            haidi_laoyue:{name:cc.vv.lang.LANG_DESC.HaiDiLaoYue,multiple:1},   //1台
        
            hua_pai:{name:cc.vv.lang.LANG_DESC.HuaPia,multiple:1},
        }
        
        var allType = {
            an_gang:0,
            ming_gang:0,
            an_ke:0,
            ming_ke:0,
            men_feng_dui:0,   //2倍

            tai_zi_menfeng_kegang:0, //1台

            have_de_pai_count:0,
            have_hua_count:0,
            
            tian_hu:false,
            di_hu:false,
            de_3:false,
        }
        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_TIANHU)) {
                allType.tian_hu = true;
            }else if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_DIHU)) {
                allType.di_hu = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4LAIZI) || 
                hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_3LAIZI)) {
                allType.de_3 = true;
            }else {
                var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
                allType.have_de_pai_count = huType0.have_de_pai_count;
                allType.have_hua_count = playerInfo.huaCards.length;
    
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
        
        var string = ""
        // var allCount = hu ? 20 : 0;

        if (allType.tian_hu || allType.di_hu || allType.de_3){
            // allCount = this.lazi;
            string = cc.vv.lang.LANG_DESC.LaZi+" "+this.lazi+cc.vv.lang.LANG_DESC.Hu;
            return {allType:allType,typeStr:string,allCount:allCount};
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
            // allCount += HU_CAL_TYPE["zi_mo"].multiple;
            string += HU_CAL_TYPE["zi_mo"].name+" "+HU_CAL_TYPE["zi_mo"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
            // allCount += HU_CAL_TYPE["kandang_hu"].multiple;
            string += HU_CAL_TYPE["kandang_hu"].name+" "+HU_CAL_TYPE["kandang_hu"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BIANZHANG)) {
            // allCount += HU_CAL_TYPE["kaobing_hu"].multiple;
            string += HU_CAL_TYPE["kaobing_hu"].name+" "+HU_CAL_TYPE["kaobing_hu"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DANDIAO)) {
            // allCount += HU_CAL_TYPE["dandiao_hu"].multiple;
            string += HU_CAL_TYPE["dandiao_hu"].name+" "+HU_CAL_TYPE["dandiao_hu"].multiple+cc.vv.lang.LANG_DESC.Hu
        }
        if (allType.have_hua_count > 0){
            var mul = allType.have_hua_count * HU_CAL_TYPE["hua_pai"].multiple;
            // allCount += mul;
            string += HU_CAL_TYPE["hua_pai"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu
        }
        ////////台数
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var val = TAI_CAL_TYPE["hun_yi_se"].multiple
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var val = TAI_CAL_TYPE["qing_yi_se"].multiple
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Fan
        } 
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_FOUR_FENG)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["si_feng"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["si_feng"].name+" "+TAI_CAL_TYPE["si_feng"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)){
            var mul = Math.pow(2,TAI_CAL_TYPE["tai_pengpeng_hu"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_pengpeng_hu"].name+" "+TAI_CAL_TYPE["tai_pengpeng_hu"].multiple+cc.vv.lang.LANG_DESC.Fan
        }  
        if (hu && (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGPAO)
            || hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGHUA))) {
            var mul = Math.pow(2,TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_gangshang_kaihua"].name+" "+TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_LAGANG)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["la_gang"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["la_gang"].name+" "+TAI_CAL_TYPE["la_gang"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_HAIDILAOYUE)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["haidi_laoyue"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["haidi_laoyue"].name+" "+TAI_CAL_TYPE["haidi_laoyue"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        
        if (hu && allType.have_de_pai_count === 0) {
            var mul = Math.pow(2,TAI_CAL_TYPE["wu_de"].multiple);
            // allCount *= mul;
            string += TAI_CAL_TYPE["wu_de"].name+" "+TAI_CAL_TYPE["wu_de"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }else if (hu && allType.have_de_pai_count === 2){
            var mul = Math.pow(2,1)
            // allCount *= mul;
            string += cc.vv.lang.LANG_DESC.TwoDeOneFan;
        }else if (hu && allType.have_de_pai_count === 3){
            var mul = Math.pow(2,4);
            // allCount *= mul;
            string += cc.vv.lang.LANG_DESC.ThreeDeFourFan;
        }

        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Fan
        }

        if (allType.have_hua_count > 0){
            var mul = allType.have_hua_count * Math.pow(2,TAI_CAL_TYPE["hua_pai"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["hua_pai"].name+" "+(allType.have_hua_count*TAI_CAL_TYPE["hua_pai"].multiple)+cc.vv.lang.LANG_DESC.Fan;
        }
        
        return {allType:allType,typeStr:string,allCount:allCount};
    },

    ///牌是否为花牌

})