// var MJ_CONFIG = {
//     rule_id : "7009",
//     rule_name : "温岭麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:500,

        carryNum:10, //10位  进1
        deCanPlay:true,
        buhuaTogether:true,
    },

    //牌数数量
    // getCardLimit: function() {
    //     return 144;
    // },
    ////每人手上多少张牌
    cardIsHua: function(card){
        if (cc.vv.roomdata.depaiCardId[card] === card){
            return false;
        }

        var nao = cc.vv.roomdata.switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_NAO];
        if (cc.vv.roomdata.depaiCardId[417] === 417 && (card === 415 || card === 416))    {
            return true
        }else if (!cc.vv.roomdata.depaiCardId[417] && card === 417)    {
            return true
        }
        
        if (nao >= 2){
            if (cc.vv.roomdata.depaiCardId[411] === 411 || cc.vv.roomdata.depaiCardId[412] === 412 ||
                cc.vv.roomdata.depaiCardId[413] === 413 || cc.vv.roomdata.depaiCardId[414] === 414){
                if (card >= 415){
                    return true;
                }    
            }
        }

        if (nao === 3){
            if (card >= 415){
                return true;
            }  
        }

        if (card >= 420){
            return true;
        }
        return false;
    },
    getEachPaiLimit: function() {
        return 17;
    },
    getHuScoreCalString: function(playerInfo,hu) {
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
        
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:1},    //1台
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
            de_huan_yuan:{name:cc.vv.lang.LANG_DESC.DeHuanYuan,multiple:1},        //1台
            
            qiang_gang_hu:{name:cc.vv.lang.LANG_DESC.QiangGangHu,multiple:1},        //1台
            pang_he:{name:cc.vv.lang.LANG_DESC.PangHe,multiple:1},        //1台
        
            zheng_dian_hua:{name:cc.vv.lang.LANG_DESC.ZuoHua,multiple:1},
            zi_hua:{name:cc.vv.lang.LANG_DESC.ZiHua,multiple:1},
        }
        
        var allType = {
            an_gang:0,
            ming_gang:0,
            an_ke:0,
            ming_ke:0,
            men_feng_dui:0,   //2倍

            have_de_pai_count:0,

            tai_zi_menfeng_kegang:0, //1台
            zd_hua_count:0,
            other_hua:0,
            
            de_3:false,
            feng_4:false,
            hua_4:false,
            hua_hun_4:false,
            angang_menfengjian:false,

            pang_he:true,
        }
        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            if (hu.huType & (0x01 <<  cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_3LAIZI) || 
                hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4LAIZI)) {
                allType.de_3 = true;
            }else if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_FOUR_FENG)) {
                allType.feng_4 = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4HUA)) {
                allType.hua_4 = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4HUNHUA)) {
                allType.hua_hun_4 = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_4ZISELF)) {
                allType.angang_menfengjian = true;
            }else {
                var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
                allType.have_de_pai_count = huType0.have_de_pai_count;

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
        allType.other_hua = huaData.otherHua;

        var string = ""
        // var allCount = hu ? 20 : 0;

        if (allType.de_3 || allType.hua_8 || allType.hua_4 || allType.angang_menfengjian || allType.hua_hun_4){
            // allCount = this.lazi;
            string = cc.vv.lang.LANG_DESC.LaZi+""+this.lazi+cc.vv.lang.LANG_DESC.Hu;
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
        
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
            var mul = HU_CAL_TYPE["kandang_hu"].multiple;
            // allCount += mul;
            string += HU_CAL_TYPE["kandang_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            allType.pang_he = false;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BIANZHANG)) {
            var mul = HU_CAL_TYPE["kaobing_hu"].multiple;
            // allCount += mul;
            string += HU_CAL_TYPE["kaobing_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            allType.pang_he = false;
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
            var mul = HU_CAL_TYPE["zi_mo"].multiple;
            // allCount += mul;
            string += HU_CAL_TYPE["zi_mo"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DANDIAO)) {
            var mul = HU_CAL_TYPE["dandiao_hu"].multiple;
            // allCount += mul;
            string += HU_CAL_TYPE["dandiao_hu"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu;
            allType.pang_he = false;
        }
        if (playerInfo.huaCards.length > 0){
            var mul = HU_CAL_TYPE["hua_pai"].multiple * playerInfo.huaCards.length;
            // allCount += mul;
            string += HU_CAL_TYPE["hua_pai"].name+" "+mul+cc.vv.lang.LANG_DESC.Hu
        }  
        
        ////////台数
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
            var pphMul = TAI_CAL_TYPE["tai_pengpeng_hu"].multiple;
            // allCount *= Math.pow(2,pphMul);
            string += TAI_CAL_TYPE["tai_pengpeng_hu"].name+" "+pphMul+cc.vv.lang.LANG_DESC.Fan;
            allType.pang_he = false;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            var val = TAI_CAL_TYPE["hun_yi_se"].multiple+1;
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            var val = TAI_CAL_TYPE["qing_yi_se"].multiple+1;
            var mul = Math.pow(2,val)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+val+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGPAO)
            || hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGHUA))) {
            var mul = Math.pow(2,TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_gangshang_kaihua"].name+" "+TAI_CAL_TYPE["tai_gangshang_kaihua"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_QIANGGANG)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["qiang_gang_hu"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["qiang_gang_hu"].name+" "+TAI_CAL_TYPE["qiang_gang_hu"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_LZSELF)) {
            var mul = Math.pow(2,TAI_CAL_TYPE["de_huan_yuan"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["de_huan_yuan"].name+" "+TAI_CAL_TYPE["de_huan_yuan"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && allType.pang_he) {
            // allCount *= Math.pow(2,TAI_CAL_TYPE["pang_he"].multiple);
            string += TAI_CAL_TYPE["pang_he"].name+" "+TAI_CAL_TYPE["pang_he"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && allType.have_de_pai_count === 2){
            // allCount *= 2;
            string += cc.vv.lang.LANG_DESC.TwoDeOneFan;
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO) && 
            playerInfo.moCard === cc.vv.roomdata.depaiCardId[~~playerInfo.moCard]){
            // allCount *= 2;
            string += cc.vv.lang.LANG_DESC.ZiMoDeOneFan;
        }
        if (allType.tai_zi_menfeng_kegang) {
            var mul = allType.tai_zi_menfeng_kegang * Math.pow(2,TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["tai_zi_menfeng_kegang"].name+" "+(allType.tai_zi_menfeng_kegang*TAI_CAL_TYPE["tai_zi_menfeng_kegang"].multiple)+cc.vv.lang.LANG_DESC.Fan;
        }
        if (allType.zd_hua_count > 0){
            var mul = allType.zd_hua_count*Math.pow(2,TAI_CAL_TYPE["zheng_dian_hua"].multiple);
            // allCount *= mul;
            string += TAI_CAL_TYPE["zheng_dian_hua"].name+" "+(allType.zd_hua_count*TAI_CAL_TYPE["zheng_dian_hua"].multiple)+cc.vv.lang.LANG_DESC.Fan;
        }
        if (allType.other_hua > 0) {
            var mul = allType.other_hua*Math.pow(2,TAI_CAL_TYPE["zi_hua"].multiple)
            // allCount *= mul;
            string += TAI_CAL_TYPE["zi_hua"].name+" "+(allType.other_hua*TAI_CAL_TYPE["zi_hua"].multiple)+cc.vv.lang.LANG_DESC.Fan;
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },

    ///牌是否为花牌

})