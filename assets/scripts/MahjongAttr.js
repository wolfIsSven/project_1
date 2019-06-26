var GAME_CONFIG_TYPE = cc.Enum({
    TYPE_TEST_MAHJONG: 0,   //台州
    TYPE_TZ_MAHJONG: 1,   //台州
    TYPE_SC_MAHJONG: 2,   //四川
    TYPE_JH_MAHJONG: 3,   //金华
    TYPE_5151_MAHJONG: 998,   //5151麻将
});

var PROVINCE = cc.Enum({
    ZHEJIANG: 7,
});

var BIG_RULE_TYPE = cc.Enum({
    TYPE_LAND: 1,
    TYPE_NIU: 2,
    TYPE_GUANDAN: 3,
    TYPE_SC_MAHJONG: 4,
    TYPE_HN_MAHJONG: 5,
    TYPE_JS_MAHJONG: 6,
    TYPE_ZJ_MAHJONG: 7,
});

var RULE_TYPE = cc.Enum({
    //浙江
    //台洲地区
    ZJ_MAHJONG_TAIZHOU_HY: 7001, //黄岩
    ZJ_MAHJONG_TAIZHOU_SJ: 7002, //椒江
    ZJ_MAHJONG_TAIZHOU_LQ: 7003, //路桥
});

var GAME_TYPE = {
    index: 1,
    // [GAME_CONFIG_TYPE.TYPE_TEST_MAHJONG]: {
    //     name: "测试麻将",
    //     bigType : 0,
    //     rules: [RULE_TYPE.SX_MAHJONG_LVLIANG, RULE_TYPE.HB_MAHJONG_SUIZHOU],
    //     recommend: [RULE_TYPE.SX_MAHJONG_LVLIANG, RULE_TYPE.HB_MAHJONG_SUIZHOU],
    //     provinces: [],
    // },
    [GAME_CONFIG_TYPE.TYPE_TZ_MAHJONG]: {
        name: "台州麻将",
        bigType : 1,
        rules: [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY, RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ, RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ],
        recommend: [],//,RULE_TYPE.ZG_MAHJONG_GUOBIAO
        provinces: [PROVINCE.ZHEJIANG],//
    },
};

var RULE_TYPE_RES = {
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY]: ["黄岩麻将"],
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ]: ["椒江麻将"],
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ]: ["路桥麻将"],
};

var RULE_TYPE_JS = {
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY]: "Mahjong_zj_tz_hy",  //台州
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ]: "Mahjong_zj_tz_sj",
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ]: "Mahjong_zj_tz_lq",
};

var RULE_PREFAB_NAMES = {
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY]: "createroom_taizhou",
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ]: "createroom_taizhou",
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ]: "createroom_taizhou",
};

////创建条件
var MJ_PLAY_SETTING = cc.Enum({
    ROUND_LIMIT: 1, //局数
    PLAYER_LIMIT: 2, //人数
    LAZI_LIMIT: 3,  //腊子
    BIRD_LIMIT: 4,  //抓鸟数
    CONDITION_YINGPENGYING: 5, //可选条件   硬碰硬
    CONDITION_BAIHUANYUAN: 6, //白板是否还原
    CONDITION_PINGCUO: 7, //平搓 闲家是否减半
    CONDITION_BAOPAI: 8, //包牌  三摊包牌    三摊不包牌
    CONDITION_CAISHEN: 9, //财神  有无财神
    CONDITION_GANGTOU: 10, //不抓杠头、胡家抓杠头、每人抓杠头  2位
    CONDITION_MAIMA: 11,//买码：买   不买
    CONDITION_ZHUANG_DOUBLE  :12, //庄家是否翻倍
	CONDITION_NAO      :13, //是否小闹 是否大闹，小闹和大闹同时存在则为全闹，都不存在则为常规无花
	CONDITION_BAIDA_FIRST    :14, //先打财神还是先打熟张
    CONDITION_ZHONGFA_BAO    :15, //中发是否包牌
    CONDITION_CALL_DIVERT    :16, //呼叫转移
	CONDITION_GANG_ZIMO      :17, //点杠胡是否算自摸 
	CONDITION_HUA_BEISHU     :18, //上海麻将 基础花 与 倍数 2位
    CONDITION_HUANG_FAN	     :19, // 荒番
    CONDITION_ZHUANGXIAN     :20,  // 庄闲之间算分
    CONDITION_ZIMO_DOUBLE 	 :21, //自摸是否加倍
	CONDITION_DAI19	 	     :22, //带19
	CONDITION_ZHONGZHANG	 :23, //中张
	CONDITION_JIANGDUI	 	 :24, //将对
	CONDITION_MENQING	 	 :25, //门清
	CONDITION_TIANDIHU	 	 :26, //天地胡
    CONDITION_HAIDILAOYUE	 :27, //海底捞月
    CONDITION_DAI_FENG		  	    :28, //带风
    CONDITION_MASTER_ADD		    :29, //庄加底
    CONDITION_GANG_KAI_DOUBLE	    :30, //杠开加倍
    CONDITION_QI_DUI_DOUBLE         :31, //七对加倍
    CONDITION_ONLY_ZI_MO		    :32, //只能自摸
    CONDITION_4LAIZI_DOUBLE         :33, //4混加倍
    CONDITION_TIANHU_DOUBLE         :34, //天胡加倍
    CONDITION_XY_QIXIAOZUI    :35, //信阳玩法（七小嘴四大嘴满堂跑）
	CONDITION_LUAN_SAN_FENG   :36, //乱三风
    ////在结算之前加条件，结算依次往后延
    CONDITION_SETTLE         :37,  // 结算
});

var MJ_SETTING_CONFIG = {
    [MJ_PLAY_SETTING.ROUND_LIMIT]:{
        title:"quanLabel",groupId:1,btns:[{title:"8局",id:8},{title:"16局",id:16},{title:"32局",id:32},],ps:"圈数"},
    [MJ_PLAY_SETTING.PLAYER_LIMIT]:{
        title:"renLabel",groupId:2,btns:[{title:"2人",id:2},{title:"4人",id:4},],ps:"人数"},
    [MJ_PLAY_SETTING.LAZI_LIMIT]:{
        title:"laziLabel",groupId:3,btns:[{title:"20",id:20},{title:"50",id:50},{title:"100",id:100},{title:"不封顶",id:9999},],ps:"腊子"},
    [MJ_PLAY_SETTING.BIRD_LIMIT]:{
        title:"niaoCounLabel",groupId:4,btns:[{title:"2",id:2},{title:"4",id:4},{title:"6",id:6},],ps:"抓鸟"},
    [MJ_PLAY_SETTING.CONDITION_YINGPENGYING]:{
        title:"yingpengyingLabel",groupId:5,btns:[{title:"不加台",id:0},{title:"加1台",id:1},],bit:0,len:1,ps:"硬碰硬"},
    [MJ_PLAY_SETTING.CONDITION_BAIHUANYUAN]:{
        title:"baihuanyuanLabel",groupId:6,btns:[{title:"常规",id:0},{title:"还原",id:1},],bit:1,len:1,ps:"白还原"},
    [MJ_PLAY_SETTING.CONDITION_PINGCUO]:{
        title:"moshiLabel",groupId:7,btns:[{title:"平搓",id:0},{title:"不平搓",id:1},],bit:2,len:1,ps:"模式"},
    [MJ_PLAY_SETTING.CONDITION_BAOPAI]:{
        title:"baopaiLabel",groupId:8,btns:[{title:"三摊不包",id:0},{title:"三摊包牌",id:1},],bit:3,len:1,ps:"包牌"},
    [MJ_PLAY_SETTING.CONDITION_CAISHEN]:{
        title:"caishenLabel",groupId:9,btns:[{title:"无财神",id:0},{title:"有财神",id:1},],bit:4,len:1,ps:"财神"},
    [MJ_PLAY_SETTING.CONDITION_GANGTOU]:{
        title:"gangtouLabel",groupId:10,btns:[{title:"不抓",id:0},{title:"胡家抓",id:1},{title:"都抓",id:2},],bit:5,len:2,ps:"杠头"},
    [MJ_PLAY_SETTING.CONDITION_MAIMA]:{
        title:"maimaLabel",groupId:11,btns:[{title:"不买",id:0},{title:"买",id:1},],bit:7,len:1,ps:"买码"},
    [MJ_PLAY_SETTING.CONDITION_ZHUANG_DOUBLE]:{
        title:"zhuangjiaLabel",groupId:12,btns:[{title:"不翻倍",id:0},{title:"翻倍",id:1},],bit:8,len:1,ps:"庄家翻倍"},
    [MJ_PLAY_SETTING.CONDITION_NAO]:{
        title:"huapai1Label",groupId:13,btns:[{title:"无花",id:0},{title:"小闹",id:1},{title:"大闹",id:2},{title:"全闹",id:3},],bit:9,len:2,ps:"花牌"},
    [MJ_PLAY_SETTING.CONDITION_BAIDA_FIRST]:{
        title:"baopai1Label",groupId:14,btns:[{title:"先打熟张",id:0},{title:"先打财神",id:1},],bit:11,len:1,ps:"包牌"},
    [MJ_PLAY_SETTING.CONDITION_ZHONGFA_BAO]:{
        title:"baopai2Label",groupId:15,btns:[{title:"不包",id:0},{title:"包",id:1},],bit:12,len:1,ps:"中发包牌"},
    [MJ_PLAY_SETTING.CONDITION_CALL_DIVERT]:{
        itle:"hujiaozhuanyiLabel",groupId:16,btns:[{title:"不转移",id:0},{title:"转移",id:1},],bit:13,len:1,ps:"呼叫转移"},
    [MJ_PLAY_SETTING.CONDITION_GANG_ZIMO]:{
        title:"hujiaozhuanyiLabel",groupId:17,btns:[{title:"不算自摸",id:0},{title:"算自摸",id:1},],bit:14,len:1,ps:"点杠"},
    [MJ_PLAY_SETTING.CONDITION_HUA_BEISHU]:{
        title:"dihuaLabel",groupId:18,btns:[{title:"2/1",id:0},{title:"1/1",id:1},{title:"5/5",id:2},],bit:15,len:2,ps:"底/花"},
    [MJ_PLAY_SETTING.CONDITION_HUANG_FAN]:{
        title:"huangfanLabel",groupId:19,btns:[{title:"不荒番",id:0},{title:"荒番",id:1},],bit:17,len:1,ps:"荒番"},
    [MJ_PLAY_SETTING.CONDITION_ZHUANGXIAN]:{
        title:"zhuangxianLabel",groupId:20,btns:[{title:"不算分",id:0},{title:"算分",id:1},],bit:18,len:1,ps:"庄闲"},
    [MJ_PLAY_SETTING.CONDITION_ZIMO_DOUBLE]:{
        title:"zimojiabeiLabel",groupId:21,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:19,len:1,ps:"自摸"},
    [MJ_PLAY_SETTING.CONDITION_DAI19]:{
        title:"dai19jiabeiLabel",groupId:22,btns:[{title:"不加倍",id:0},{title:"4倍",id:1},],bit:20,len:1,ps:"带19"},
    [MJ_PLAY_SETTING.CONDITION_ZHONGZHANG]:{
        title:"zhongzhangjiabeiLabel",groupId:23,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:21,len:1,ps:"中张"},
    [MJ_PLAY_SETTING.CONDITION_JIANGDUI]:{
        title:"jiangduijiabeiLabel",groupId:24,btns:[{title:"不加倍",id:0},{title:"8倍",id:1},],bit:22,len:1,ps:"将对"},
    [MJ_PLAY_SETTING.CONDITION_MENQING]:{
        title:"menqingjiabeiLabel",groupId:25,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:23,len:1,ps:"门清"},
    [MJ_PLAY_SETTING.CONDITION_TIANDIHU]:{
        title:"tiandijiabeiLabel",groupId:26,btns:[{title:"不加倍",id:0},{title:"32倍",id:1},],bit:24,len:1,ps:"天地胡"},
    [MJ_PLAY_SETTING.CONDITION_HAIDILAOYUE]:{
        title:"haidijiabeiLabel",groupId:27,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:25,len:1,ps:"海底捞"},
    [MJ_PLAY_SETTING.CONDITION_DAI_FENG]:{
        title:"daifengLabel",groupId:28,btns:[{title:"不带风",id:0},{title:"带风",id:1},],bit:26,len:1,ps:"带风"},
    [MJ_PLAY_SETTING.CONDITION_MASTER_ADD]:{
        title:"zhuangjiadiLabel",groupId:29,btns:[{title:"不加底",id:0},{title:"加底",id:1},],bit:27,len:1,ps:"庄加底"},
    [MJ_PLAY_SETTING.CONDITION_GANG_KAI_DOUBLE]:{
        title:"gangkaijiabeiLabel",groupId:30,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:28,len:1,ps:"杠开加倍"},
    [MJ_PLAY_SETTING.CONDITION_QI_DUI_DOUBLE]:{
        title:"qiduijiabeiLabel",groupId:31,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:29,len:1,ps:"七对加倍"},
    [MJ_PLAY_SETTING.CONDITION_ONLY_ZI_MO]:{
        title:"zhizimoLabel",groupId:32,btns:[{title:"点炮",id:0},{title:"自摸",id:1},],bit:30,len:1,ps:"只能自摸"},
    [MJ_PLAY_SETTING.CONDITION_4LAIZI_DOUBLE]:{
        title:"sihunaddLabel",groupId:33,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:31,len:1,ps:"四混加倍"},
    [MJ_PLAY_SETTING.CONDITION_TIANHU_DOUBLE]:{
        title:"tianhuaddLabel",groupId:34,btns:[{title:"不加倍",id:0},{title:"2倍",id:1},],bit:32,len:1,ps:"天胡加倍"},
    [MJ_PLAY_SETTING.CONDITION_XY_QIXIAOZUI]:{
        title:"xinyangmjLabel",groupId:35,btns:[{title:"七小嘴",id:1},{title:"四大嘴",id:2},{title:"满堂跑",id:3},],bit:33,len:2,ps:"信仰麻将"},
    [MJ_PLAY_SETTING.CONDITION_LUAN_SAN_FENG]:{
        title:"caishenLabel",groupId:36,btns:[{title:"不乱",id:0},{title:"乱",id:1},],bit:35,len:1,ps:"乱三风"},
    [MJ_PLAY_SETTING.CONDITION_SETTLE]:{
        title:"jiesuanLabel",groupId:37,btns:[{title:"房主付",id:1},{title:"平摊",id:2},{title:"大赢家",id:3},],ps:"结算"},
};

var ROOM_SETTING = {
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY]: {
        [MJ_PLAY_SETTING.ROUND_LIMIT]:8, 
        [MJ_PLAY_SETTING.PLAYER_LIMIT]:4, 
        [MJ_PLAY_SETTING.CONDITION_YINGPENGYING]:1, 
        [MJ_PLAY_SETTING.CONDITION_BAIHUANYUAN]:1, 
        [MJ_PLAY_SETTING.CONDITION_PINGCUO]:1,
        [MJ_PLAY_SETTING.CONDITION_SETTLE]:1 ,
    },
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_SJ]: {
        [MJ_PLAY_SETTING.ROUND_LIMIT]:8, 
        [MJ_PLAY_SETTING.PLAYER_LIMIT]:4, 
        [MJ_PLAY_SETTING.CONDITION_YINGPENGYING]:0, 
        [MJ_PLAY_SETTING.CONDITION_BAIHUANYUAN]:1, 
        [MJ_PLAY_SETTING.CONDITION_PINGCUO]:1,
        [MJ_PLAY_SETTING.CONDITION_SETTLE]:1 ,
    },
    [RULE_TYPE.ZJ_MAHJONG_TAIZHOU_LQ]: {
        [MJ_PLAY_SETTING.ROUND_LIMIT]:8, 
        [MJ_PLAY_SETTING.PLAYER_LIMIT]:4, 
        [MJ_PLAY_SETTING.CONDITION_YINGPENGYING]:0, 
        [MJ_PLAY_SETTING.CONDITION_BAIHUANYUAN]:0, 
        [MJ_PLAY_SETTING.CONDITION_PINGCUO]:1,
        [MJ_PLAY_SETTING.CONDITION_SETTLE]:1 ,
    },
};

module.exports = {
    GAME_CONFIG_TYPE: GAME_CONFIG_TYPE,
    RULE_TYPE: RULE_TYPE,
    BIG_RULE_TYPE: BIG_RULE_TYPE,
    GAME_TYPE: GAME_TYPE,
    RULE_TYPE_RES: RULE_TYPE_RES,
    RULE_TYPE_JS: RULE_TYPE_JS,
    RULE_PREFAB_NAMES: RULE_PREFAB_NAMES,
    MJ_PLAY_SETTING: MJ_PLAY_SETTING,
    ROOM_SETTING: ROOM_SETTING,
    PROVINCE: PROVINCE,
    MJ_SETTING_CONFIG: MJ_SETTING_CONFIG,
};