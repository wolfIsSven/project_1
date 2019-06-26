// var MJ_CONFIG = {
//     rule_id : "8001",
//     rule_name : "上饶麻将",
// }

var HU_CAL_TYPE = {
    // hu_gangshang_kaihua:{name:"杠上开花",multiple:2},   //2冲
}

var TAI_CAL_TYPE = {
    tai_zi_menfeng_kegang:{name:"门风字刻杠",multiple:1},       //1台
    hun_yi_se:{name:"混一色",multiple:2},    //2台
    qing_yi_se:{name:"清一色",multiple:3},    //1台
    hua_pai:{name:"花牌",multiple:1},
}

var MahjongBase = require('Mahjong_base');

cc.Class({
    extends: MahjongBase,

    properties: {
        lazi:100,
        depaicount:1,

        ziFengMustPlay:true,
    },
    //牌数数量
    getEachPaiLimit: function() {
        return 14;
    },
    getCardLimit: function() {
        return 144;
    },
    cardIsHua: function(card){
        if (card > 414){
            return true;
        }
        return false;
    },
    getHuScoreCalString: function (playerInfo,hu){
        var HU_CAL_TYPE = {
            particular_hua:{name:cc.vv.lang.LANG_DESC.Hua,multiple:1},   //2冲
        }

        // var TAI_CAL_TYPE = {
        //     hun_yi_se:{name:cc.vv.lang.LANG_DESC.Mixed,multiple:1},    //1台
        //     qing_yi_se:{name:cc.vv.lang.LANG_DESC.ClearColor,multiple:3},    //1台
        //     pengpeng_hu:{name:cc.vv.lang.LANG_DESC.ToHu,multiple:1},   //2倍
        //     men_qing:{name:cc.vv.lang.LANG_DESC.MenQing,multiple:1},   //1
        //     tai_gangshang_kaihua:{name:cc.vv.lang.LANG_DESC.GangShangHua,multiple:1},   //2冲
        //     jin_gou_diao:{name:cc.vv.lang.LANG_DESC.JinGouDiao,multiple:1},   //2冲
        // }

        var allType = {
            particular_hua:0,
        };

        ////////胡数
        var allCount = 0;
        if (hu && hu.huType > 0){
            var huInfos = hu.huNumInfo;
            for (var i = 0; i < huInfos.length; ++i) {
                var huInfo = huInfos[i];
                if (huInfo.type === cc.vv.constant.MJ_HU_NUM_TYPE.MJ_HU_NUM_TYPE_PARTICULAR_HUA){
                    allType.particular_hua += huInfo.value;
                }
            }
            allCount = hu.huNum;
        }

        var string = ""
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
        return {allType:allType,typeStr:string,allCount:allCount};
    },
    ////每人手上多少张牌
    ///牌是否为花牌

})