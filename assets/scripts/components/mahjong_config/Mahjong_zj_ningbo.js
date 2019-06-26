// var MJ_CONFIG = {
//     rule_id : "7121",
//     rule_name : "宁波麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:0,
        depaicount:1,

        huShuString:true,
        showRoundType:true, //显示圈风
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
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:4},    //4台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:2},    //2台
            pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:2},   //2倍
            zi_mo:{name:cc.vv.lang.LANG_DESC.OwnDraw,multiple:1},   //1倍
            haidi_laoyue:{name:cc.vv.lang.LANG_DESC.HaiDiLaoYue,multiple:1},   //1台
            gang_shang_hua:{name:cc.vv.lang.LANG_DESC.GangShangHua,multiple:1},        //1台
            zi_menfeng_kegang:{name:cc.vv.lang.LANG_DESC.MenFengZiKeGang,multiple:1},       //1台
            quan_feng:{name:cc.vv.lang.LANG_DESC.QuanFeng,multiple:1},
            zheng_hua:{name:cc.vv.lang.LANG_DESC.ZhengDianHua,multiple:1},
            de_huan_yuan:{name:cc.vv.lang.LANG_DESC.DeHuanYuan,multiple:1},    //1台
            wu_de:{name:cc.vv.lang.LANG_DESC.WuDe,multiple:1},    //1台
            san_de:{name:cc.vv.lang.LANG_DESC.ThreeDe,multiple:3},
            bian_dao:{name:cc.vv.lang.LANG_DESC.BianDao,multiple:1},
            kan_dao:{name:cc.vv.lang.LANG_DESC.KanDao,multiple:1},
            dan_diao:{name:cc.vv.lang.LANG_DESC.DanDiaoHu,multiple:1},
            dui_dao:{name:cc.vv.lang.LANG_DESC.DuiDao,multiple:1},
            jin_gou_diao:{name:cc.vv.lang.LANG_DESC.JinGouDiao,multiple:1},
            si_hua:{name:cc.vv.lang.LANG_DESC.SiHuaQiQuan,multiple:1},
            la_zi:{name:cc.vv.lang.LANG_DESC.LaZi,multiple:20},
        }
        var allType = {};
        var have_de_pai_count = 0; 
        var zi_menfeng_kegang = 0;
        var quan_feng = 0;
        var zd_hua_count = 0;
        var is_si_hua = false;
        var la_zi = false;
        ////////胡数
        var allCount = 0;
        var string = ""
        if (hu){
            if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_TIANHU)) {
                la_zi = true;
            }else if (hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_DIHU)) {
                la_zi = true;
            }else if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_8HUA)) {
                la_zi = true;
            }
        }
        if (la_zi){
            string = TAI_CAL_TYPE["la_zi"].name+" "+TAI_CAL_TYPE["la_zi"].multiple+cc.vv.lang.LANG_DESC.Tai;
            allCount = TAI_CAL_TYPE["la_zi"].multiple;
            return {allType:allType,typeStr:string,allCount:allCount};    
        }

        if (hu && hu.huType > 0){
            var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
            have_de_pai_count = huType0.have_de_pai_count;
            var huaData = cc.vv.global.judgeZhengDianHua(playerInfo.huaCards.slice(),playerInfo.index);
            zd_hua_count = huaData.zdHua;
            is_si_hua = huaData.sihua;

            allCount = hu.huNum;
            var huInfos = hu.huNumInfo;
            for (var i = 0; i < huInfos.length; ++i) {
                var huInfo = huInfos[i];
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_JIAN){
                    zi_menfeng_kegang += huInfo.value;
                }else if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_KE_GANG_QUANFENG){
                    quan_feng += huInfo.value;
                }
            }
        }
        
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+TAI_CAL_TYPE["qing_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+TAI_CAL_TYPE["hun_yi_se"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
            string += TAI_CAL_TYPE["pengpeng_hu"].name+" "+TAI_CAL_TYPE["pengpeng_hu"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
            string += TAI_CAL_TYPE["zi_mo"].name+" "+TAI_CAL_TYPE["zi_mo"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_HAIDILAOYUE)) {
            string += TAI_CAL_TYPE["haidi_laoyue"].name+" "+TAI_CAL_TYPE["haidi_laoyue"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGHUA)) {
            string += TAI_CAL_TYPE["gang_shang_hua"].name+" "+TAI_CAL_TYPE["gang_shang_hua"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && zi_menfeng_kegang > 0) {
            var mul = zi_menfeng_kegang * TAI_CAL_TYPE["zi_menfeng_kegang"].multiple
            string += TAI_CAL_TYPE["zi_menfeng_kegang"].name+" "+mul+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && quan_feng > 0) {
            var mul = quan_feng * TAI_CAL_TYPE["quan_feng"].multiple
            string += TAI_CAL_TYPE["quan_feng"].name+" "+mul+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && zd_hua_count > 0){
            var mul = zd_hua_count * TAI_CAL_TYPE["zheng_hua"].multiple;
            string += TAI_CAL_TYPE["zheng_hua"].name+" "+mul+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_LZSELF)) {
            string += TAI_CAL_TYPE["de_huan_yuan"].name+" "+TAI_CAL_TYPE["de_huan_yuan"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && have_de_pai_count <= 0) {
            string += TAI_CAL_TYPE["wu_de"].name+" "+TAI_CAL_TYPE["wu_de"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && have_de_pai_count >= 3) {
            string += TAI_CAL_TYPE["san_de"].name+" "+TAI_CAL_TYPE["san_de"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_BIANZHANG)) {
            string += TAI_CAL_TYPE["bian_dao"].name+" "+TAI_CAL_TYPE["bian_dao"].multiple+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QIAZI)) {
            string += TAI_CAL_TYPE["kan_dao"].name+" "+TAI_CAL_TYPE["kan_dao"].multiple+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DANDIAO)) {
            string += TAI_CAL_TYPE["dan_diao"].name+" "+TAI_CAL_TYPE["dan_diao"].multiple+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDAO)) {
            string += TAI_CAL_TYPE["dui_dao"].name+" "+TAI_CAL_TYPE["dui_dao"].multiple+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_JINDIAO)) {
            string += TAI_CAL_TYPE["jin_gou_diao"].name+" "+TAI_CAL_TYPE["jin_gou_diao"].multiple+cc.vv.lang.LANG_DESC.Tai;
        }
        if (hu && is_si_hua) {
            string += TAI_CAL_TYPE["si_hua"].name+" "+TAI_CAL_TYPE["si_hua"].multiple+cc.vv.lang.LANG_DESC.Tai
        }
        return {allType:allType,typeStr:string,allCount:allCount};    
    }

})