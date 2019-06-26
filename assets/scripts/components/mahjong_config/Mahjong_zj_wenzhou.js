// var MJ_CONFIG = {
//     rule_id : "7161",
//     rule_name : "温州麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:0,
        depaicount:1,

        bet:true,
        huShuString:true,
        ziFengMustPlay:true,
    },
    ///替换百搭牌
    getReplaceJokerCard: function() {
        return 417;
    },
    getEachPaiLimit: function() {
        return 17;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var TAI_CAL_TYPE = {
            zi_mo:{name:cc.vv.lang.LANG_DESC.OwnDraw,multiple:2},    //1台
            de_huan_yuan:{name:cc.vv.lang.LANG_DESC.DeHuanYuan,multiple:2},    //1台
            wu_de:{name:cc.vv.lang.LANG_DESC.WuDe,multiple:2},    //1台
            ruan_3_de:{name:cc.vv.lang.LANG_DESC.Ruan3DeHu,multiple:2},    //1台
            qiang_gang_hu:{name:cc.vv.lang.LANG_DESC.QiangGangHu,multiple:2},    //1台
            ruan_8_dui:{name:cc.vv.lang.LANG_DESC.RuanBaDui,multiple:2},    //1台
            cai_shen_niu:{name:cc.vv.lang.LANG_DESC.CaiShenNiu,multiple:2},    //1台
            ying_3_de:{name:cc.vv.lang.LANG_DESC.Ying3DeHu,multiple:4},    //1台
            ying_8_dui:{name:cc.vv.lang.LANG_DESC.YingBaDui,multiple:4},    //1台
            tian_hu:{name:cc.vv.lang.LANG_DESC.TianHu,multiple:4},    //1台
            di_hu:{name:cc.vv.lang.LANG_DESC.DiHu,multiple:4},    //1台
            jin_gou_diao:{name:cc.vv.lang.LANG_DESC.JinGouDiao,multiple:4},   //2冲
            pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:4},   //2倍
            caishen_niudui:{name:cc.vv.lang.LANG_DESC.CaiSehnNiuDui,multiple:4},   //2倍
            qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:4},    //1台
            hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:4},    //1台
        }

        var allType = {};
        var string = ""
        var allCount = 0;

        var have_de_pai_count = 0; 
        ////////胡数
        if (hu && hu.huType > 0){
            var huType0 = cc.vv.global.judgeCardsGroupType(playerInfo.cards.slice(),playerInfo.index,true,hu.cardId); //手上的牌
            have_de_pai_count = huType0.have_de_pai_count;

            allCount = hu.huNum;
        }
        //倍数
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ZIMO)) {
            string += TAI_CAL_TYPE["zi_mo"].name+" "+TAI_CAL_TYPE["zi_mo"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_LZSELF)) {
            string += TAI_CAL_TYPE["de_huan_yuan"].name+" "+TAI_CAL_TYPE["de_huan_yuan"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && have_de_pai_count <= 0) {
            string += TAI_CAL_TYPE["wu_de"].name+" "+TAI_CAL_TYPE["wu_de"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_QIANGGANG)) {
            string += TAI_CAL_TYPE["qiang_gang_hu"].name+" "+TAI_CAL_TYPE["qiang_gang_hu"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_3LAIZI)) {
            if (hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_COMMON)){
                string += TAI_CAL_TYPE["ying_3_de"].name+" "+TAI_CAL_TYPE["ying_3_de"].multiple+cc.vv.lang.LANG_DESC.Bei
            }else{
                string += TAI_CAL_TYPE["ruan_3_de"].name+" "+TAI_CAL_TYPE["ruan_3_de"].multiple+cc.vv.lang.LANG_DESC.Bei
            }
        }
        if (hu && hu.huType & (0x01 << cc.vv.constant.MJ_HU_TYPE.MJ_HU_TYPE_QIDUI)) {
            if (hu && (cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_LZSELF) || have_de_pai_count <= 0)){
                string += TAI_CAL_TYPE["ying_8_dui"].name+" "+TAI_CAL_TYPE["ying_8_dui"].multiple+cc.vv.lang.LANG_DESC.Bei
            }else{
                string += TAI_CAL_TYPE["ruan_8_dui"].name+" "+TAI_CAL_TYPE["ruan_8_dui"].multiple+cc.vv.lang.LANG_DESC.Bei
            }
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_CAISHENTOU)) {
            string += TAI_CAL_TYPE["cai_shen_niu"].name+" "+TAI_CAL_TYPE["cai_shen_niu"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_TIANHU)) {
            string += TAI_CAL_TYPE["tian_hu"].name+" "+TAI_CAL_TYPE["tian_hu"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_DIHU)) {
            string += TAI_CAL_TYPE["di_hu"].name+" "+TAI_CAL_TYPE["di_hu"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_JINDIAO)) {
            string += TAI_CAL_TYPE["jin_gou_diao"].name+" "+TAI_CAL_TYPE["jin_gou_diao"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_DUIDUIHU)) {
            string += TAI_CAL_TYPE["pengpeng_hu"].name+" "+TAI_CAL_TYPE["pengpeng_hu"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_CAISHENNIU)) {
            string += TAI_CAL_TYPE["caishen_niudui"].name+" "+TAI_CAL_TYPE["caishen_niudui"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_QINGYISE)) {
            string += TAI_CAL_TYPE["qing_yi_se"].name+" "+TAI_CAL_TYPE["qing_yi_se"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_HUNYISE)) {
            string += TAI_CAL_TYPE["hun_yi_se"].name+" "+TAI_CAL_TYPE["caishen_niudui"].multiple+cc.vv.lang.LANG_DESC.Bei
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },
    ////每人手上多少张牌

})