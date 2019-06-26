// var MJ_CONFIG = {
//     rule_id : "7141",
//     rule_name : "绍兴麻将",
// }

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:0,
        depaicount:1,

        huShuString:true,
        deCanPlay:true, //得牌是否可以打出
    },
    
    //牌数数量
    // getCardLimit: function() {
    //     return 144;
    // },
    ///牌是否为花牌
    cardIsHua: function(card){
        if (card > 414 && card !== cc.vv.roomdata.depaiCardId[~~card]){
            return true;
        }
        return false;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var TAI_CAL_TYPE = {
            bao_tou:{name:cc.vv.lang.LANG_DESC.BaoTou,multiple:2},       //1台
            gang_shang_hua:{name:cc.vv.lang.LANG_DESC.GangShangHua,multiple:2},        //1台
            jin_gou_diao:{name:cc.vv.lang.LANG_DESC.JinGouDiao,multiple:2},   //2冲
            qiang_gang_hu:{name:cc.vv.lang.LANG_DESC.QiangGangHu,multiple:2},        //1台
            cai_piao:{name:cc.vv.lang.LANG_DESC.CaiPiao,multiple:4},      //1台
        }
        var allType = {};
        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            allCount = hu.huNum;
        }
        
        var string = ""
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_CAISHENTOU)) {
            string += TAI_CAL_TYPE["bao_tou"].name+" "+TAI_CAL_TYPE["bao_tou"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_GANGSHANGHUA)) {
            string += TAI_CAL_TYPE["gang_shang_hua"].name+" "+TAI_CAL_TYPE["gang_shang_hua"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && cc.vv.global.judgeHuSubType(hu.huSubType,cc.vv.constant.MJ_HU_SUB_TYPE.MJ_HU_SUB_TYPE_JINDIAO)) {
            string += TAI_CAL_TYPE["jin_gou_diao"].name+" "+TAI_CAL_TYPE["jin_gou_diao"].multiple+cc.vv.lang.LANG_DESC.Fan;
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_QIANGGANG)) {
            string += TAI_CAL_TYPE["qiang_gang_hu"].name+" "+TAI_CAL_TYPE["qiang_gang_hu"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        if (hu && hu.extraType & (0x01 << cc.vv.constant.MJ_HU_EXTRA_TYPE.MJ_HU_EXTRA_TYPE_ONEPIAO)) {
            string += TAI_CAL_TYPE["cai_piao"].name+" "+TAI_CAL_TYPE["cai_piao"].multiple+cc.vv.lang.LANG_DESC.Fan
        }
        return {allType:allType,typeStr:string,allCount:allCount};
    },

})