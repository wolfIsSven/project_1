var APP_TYPE = cc.Enum({
    WEB_APP: 0,
    WY_WEB_APP: 1,
    ANDROID_APP: 2,
});

var ADMIN_SWITCH = cc.Enum({
    OPEN_ALD: 1, 
    OPEN_DEBUG_PROTO: 2, 
    CLOSE_REDBAG: 3, 
    OPEN_CIRCLE: 4, 
    OPEN_KEFU: 5, 
    CLOSE_BANNER: 6, 
    CLOSE_SHARE: 7, 
    CLOSE_PAY: 8, 
    ROOM_FREE: 9, 
    CLOSE_CASH: 10, 
});

var BUDDY_TYPE = cc.Enum({
    FRIEND: 1,
    APPLY: 2,
    BLACK: 3,
    APPLY_SELF: 4,
});

var COST_TYPE = cc.Enum({
    DIAMOND: 1,
	GOLD: 2,
	FANGKA: 3,
	REDBAG: 4,
	VOUCHER: 5,
    ENROLL_VOUCHER: 6,
    SHARE_REDBAG: 7,
    VIP_EXP: 8,
    WHEEL: 9,
    STAR_INTEGAL: 10,
    MATERIAL: 11,
    TELEBILL: 12,
    ADV_TYPE: 888,
    SHARE_TYPE: 999,
});

var HINT_DOT_TYPE = cc.Enum({
    MAIL: 101,
    BUDDY: 201,
    WELFARE_SHARE: 301,
    WELFARE_TASK_MAIN: 302,
    WELFARE_TASK_DAY: 303,
    SHARE_DAILY: 401,
    BUDDY_MSG: 501,
    BUDDY_APPLY: 502,
    CIRCLE_APPLY: 601,
    CIRCLE_APPLY_CARD: 602,
});

var RANK_BIG_TYPE = cc.Enum({
    RANK_TYPE_ALL: 0,
	RANK_TYPE_GOLD: 1,
	RANK_TYPE_REDBAG: 2,
	RANK_TYPE_STAR: 3,
});

var RANK_TYPE = cc.Enum({
    WORLD: 1,
    FRIENDS: 2,
    FLOCK: 3,
});

var FIRST_TYPE = cc.Enum({
    PAY: 1,
    VIP1_DRAW: 2,
    VIP2_DRAW: 3,
    VIP3_DRAW: 4,
    VIP4_DRAW: 5,
    VIP5_DRAW: 6,
    VIP6_DRAW: 7,
    VIP7_DRAW: 8,
    VIP8_DRAW: 9,
    TELEBILL_FIRST_DRAW : 10,
});

var GOLDROOM_SHARE_TIMES = 10;

var SHARE_IN = cc.Enum({
    GOLDROOM: 1,
    PLAY_OTHERGAME: 2,
    GOLDROOM_WIN: 3,
    STORE_BUY: 4,
    RELIVE: 5,
    ZJJ: 6,
    CONTACT_KEFU: 7,
    PLACEROOM_WIN: 8,
    GOLDROOM_LOSE: 9,
    GRANDPRIX  :10,
});

var ADV_TYPE = cc.Enum({
    ZJJ: 1,
    PLAY_OTHERGAME: 2,
    ALL: 3,
});

var MAHJONG_MASK = 100;

var ROOM_STATE = cc.Enum({
    OPEN: 0,
    PRE: 1,
    START: 2,
    CALL: 3,
    BET: 4,
    EXCHANGE: 5,
    CHOOSE: 6,
    RUN: 7,
    PAUSE: 8,
    CLOSED: 9,
});

var PLAYER_STATE = cc.Enum({
    ENTER: 0,
    PRE: 1,
    PRE_CALL: 2,
    PRE_NOT_CALL: 3,
    BET: 4,
    EXCHANGE_CARDS: 5,
    CHOOSE_COLOR: 6,
    RUN_PLAY: 7,
    RUN_PASS: 8,
    GIVEUP: 9,
	INSIST: 10,
    FINISH: 11,
});

var ROOM_TYPE = cc.Enum({
    NORMAL: 1, 
    GOLD: 2, 
    MATCH: 3, 
    CIRCLE: 4, 
    MATCH_REDBAG: 5, 
    DUEL: 6, 
    PLACE: 7, 
    GRANDPRIX: 8, 
});

var MJ_SEQ = cc.Enum({
    INDEX_1: 1,
    INDEX_2: 2,
    INDEX_3: 3,
    INDEX_4: 4,
    INDEX_5: 5,
    INDEX_6: 6,
    INDEX_7: 7,
    INDEX_8: 8,
    INDEX_9: 9,
    INDEX_DONG: 11,
    INDEX_NAN: 12,
    INDEX_XI: 13,
    INDEX_BEI: 14,
    INDEX_HONGZHONG: 15,
    INDEX_LVFA: 16,
    INDEX_BAI: 17,
    INDEX_SPRING: 20,
    INDEX_SUMMER: 21,
    INDEX_AUTUMN: 22,
    INDEX_WINTER: 23,
    INDEX_MEI: 24,
    INDEX_LAN: 25,
    INDEX_ZHU: 26,
    INDEX_JU: 27,
    INDEX_BAIDA: 28,
    INDEX_BAIBAN: 29,
    INDEX_MOUSE :31,	
	INDEX_GOD   :32,
	INDEX_CAT   :33,
	INDEX_POT   :34,
	INDEX_DA  :35,
});

var MJ_FACE = cc.Enum({
    FRONT: 1,
    SIDE: 2,
    BACK: 3,
});

var MJ_COLOR = cc.Enum({
    WAN: 1,
    TONG: 2,
    TIAO: 3,
});

var MJ_CHI_TYPE = cc.Enum({
    HU: 1,
    GANG: 2,
    GANG_WAN: 3,
    GANG_AN: 4,
    PENG: 5,
    CHI: 6,
    LIANG_XI: 7,
});

var MJ_COND = cc.Enum({
    ZIMO_JIADI: 0x01,
    ZIMO_JIAFAN: 0x01 << 2,
    DIANGANGHUA_DIANPAO: 0x01 << 3,
    DIANGANGHUA_ZIMO: 0x01 << 4,
    DAIYAOJIU_JIANGDUI: 0x01 << 5,
    MENGQING_ZHONGZHANG: 0x01 << 6,
    TIAN_DI_HU: 0x01 << 7,
    YI_TIAO_LONG: 0x01 << 8,
    JIA_XIN_WU: 0x01 << 9,
    KE_XIAO_HU: 0x01 << 10,

    HUANSANZHANG: 0x01 << 11,
    HUJIAOZHUANYI: 0x01 << 12,
    HUJIAOZHUANYI_ZHUANGEN: 0x01 << 13,

    THREE_MO_FOUR_CHONG: 0x01 << 14, 
    TWO_MO_THREE_CHONG: 0x01 << 15, 

    BAIBAN_HUANYUAN: 0x01 << 16, 
});

var MJ_SETTING = cc.Enum({
	BAIDA_RESTORE:     0,  
	BAIBAN_RESTORE:    1,  
	XIAN_HALF:         2,  
    BAOPAI:            3,  
    BAIDA:             4,  
    GANGTOU_HU:        5,  
    GANGTOU_ALL:       6,  
    MAIMA:             7,  
    ZHUANG_DOUBLE:     8,  
    NAO_SMALL:         9,  
    NAO_BIG:           10, 
    BAIDA_FIRST:       11, 
    ZHONGFA_BAO:       12, 
})

var MJ_PLAY_SETTING = cc.Enum({
    ROUND_LIMIT: 1, 
    PLAYER_LIMIT: 2, 
    LAZI_LIMIT: 3,  
    BIRD_LIMIT: 4,  
    CONDITION_YINGPENGYING: 5, 
    CONDITION_BAIHUANYUAN: 6, 
    CONDITION_PINGCUO: 7, 
    CONDITION_BAOPAI: 8, 
    CONDITION_CAISHEN: 9, 
    CONDITION_GANGTOU: 10, 
    CONDITION_MAIMA: 11,
    CONDITION_ZHUANG_DOUBLE  :12, 
	CONDITION_NAO      :13, 
	CONDITION_BAIDA_FIRST    :14, 
    CONDITION_ZHONGFA_BAO    :15, 
    CONDITION_CALL_DIVERT    :16, 
	CONDITION_GANG_ZIMO      :17, 
	CONDITION_HUA_BEISHU     :18, 
    CONDITION_HUANG_FAN	     :19, 
    CONDITION_ZHUANGXIAN     :20, 
    CONDITION_ZIMO_DOUBLE 	 :21, 
	CONDITION_DAI19	 	     :22, 
	CONDITION_ZHONGZHANG	 :23, 
	CONDITION_JIANGDUI	 	 :24, 
	CONDITION_MENQING	 	 :25, 
	CONDITION_TIANDIHU	 	 :26, 
    CONDITION_HAIDILAOYUE	 :27, 
    CONDITION_DAI_FENG		  	    :28, 
    CONDITION_MASTER_ADD		    :29, 
    CONDITION_GANG_KAI_DOUBLE	    :30, 
    CONDITION_QI_DUI_DOUBLE         :31, 
    CONDITION_ONLY_ZI_MO		    :32, 
    CONDITION_4LAIZI_DOUBLE         :33, 
    CONDITION_TIANHU_DOUBLE         :34, 
    CONDITION_XY_QIXIAOZUI    :35, 
	CONDITION_LUAN_SAN_FENG   :36, 
    ////在结算之前加条件，结算依次往后延
    CONDITION_SETTLE         :37,  
});

var APPLY_OP = cc.Enum({
    AGREE: 1,
    REFUSE: 2,
});

var HALL_PREFAB = cc.Enum({
    COMPETITION: 1,
    CREATEROOM: 2,
    COINSROOM: 3,
    JOINROOM: 4,
    MAIL: 5,
    RECORD: 6,
    RULE: 7,
    SETTING: 8,
    TASK: 9,
    USERINFO: 10,
    WXSHARE: 11,
    REDBAG: 12,
    RANK: 13,
    PUBLIC: 14,
    SHOP: 15,
    KEFU: 16,
    SIGN: 17,
    BUDDY: 18,
    DUEL: 19,
    VIP: 20,
    ADV: 21,
    MYPRO: 22,
    CHOOSE_RULE: 23,
    ADV_ALL: 24,
    // ONE_PAY: 25,
    CONTACT_KEFU: 26,
    WHEEL: 27,
    CHOOSE_PLACE_RULE: 28,
    CHOOSE_PLACE_DESC: 29,
    PROGRESS_REWARD: 30,
    MATERIAL: 31,
    // ZJJ: 32,
    FREE_GOLD: 33,
    COMPETITION_BIG:34,
    // COUPONS:35,
});

var CIRCLE_PREFAB = cc.Enum({
    MEMBER: 1,
    CHAT: 2,
    CERTIFICATION: 3
});

var CIRCLE_CLICK_BTN = cc.Enum({
    LVLUP:1,    
    RENEW:2     
});

var CIRCLE_CREATE_ROOM_TYPE = cc.Enum({
    DEFAULT:1,  
    DESK:2      
});

var CIRCLE_ROLE_TYPE = cc.Enum({
    CREATOR:1,
    MEMBER:2
});

var ROOM_PREFAB = cc.Enum({
    COM_AUTO: 1,
    COM_CHAT: 2,
    COM_CHECKIP: 3,
    COM_DISMISS: 4,
    COM_LOCATION: 5,
    COM_MATCHING: 6,
    COM_REPLAY: 7,
    COM_SETTING: 8,
    COM_CERTIFICATION: 9,
    COM_MATERIAL: 10,

    MJ_ACTION: 51,
    MJ_TING: 52,
    MJ_USERINFO: 53,
    MJ_GANGTOU:54,
    MJ_CHOOSE_COLOR:55,
    MJ_EXCHANGE_CARDS:56,
    MJ_BET:57,
    // MJ_TING_ACTION:58,
    MJ_GIVE_UP:58
});

var REYUN_EVENT_ID = cc.Enum({
    PAY: 1,
    SHOP: 2,
    CASH: 3,
    REDBAG: 4,

    TASK_DRAW: 101,

    ROOM_CREATE: 201,
    ROOM_JOIN: 202,
    GOLD_ROOM_QUICK_JOIN: 203,
    GOLD_ROOM_JOIN: 204,
    MATCH_ENROLL: 205,
    MATCH_EXIT: 206,
    MATCH_SHARE: 207,

    WEIXIN_SHARE: 301,
    WEIXIN_SHARE_CIRCLE: 302,

    SELECT_LANGUAGE: 401,
});

var MATCH_SEQ_TYPE = cc.Enum({
    MATCH_4_JIN_1: 4,
    MATCH_8_JIN_4: 8,
    MATCH_16_JIN_8: 16,
    MATCH_32_JIN_16: 32,
    MATCH_64_JIN_32: 64,
});

var MATCH_STATE_TYPE = cc.Enum({
    MATCH_STATE_START: 1,
    MATCH_STATE_MATE: 2,
    MATCH_STATE_IN_PROGRESS: 3,
    MATCH_STATE_OVER: 4,
});

var TF_TYPE = cc.Enum({
    TF_TYPE_ALL: 0,
    TF_TYPE_DAILY: 1,
    TF_TYPE_WEEKLY: 2,
});

var TF_DAILY_TYPE = cc.Enum({
    TF_GOLD_ROOM_LV1_TIMES: 1,
	TF_GOLD_ROOM_LV2_TIMES: 2,
	TF_GOLD_ROOM_LV3_TIMES: 3,
	TF_GOLD_ROOM_LV4_TIMES: 4,
	TF_GOLD_ROOM_LV5_TIMES: 5,
	TF_GOLD_ROOM_LV6_TIMES: 6,

	TF_GOLD_ROOM_LV1_STATE: 11,
	TF_GOLD_ROOM_LV2_STATE: 12,
	TF_GOLD_ROOM_LV3_STATE: 13,
	TF_GOLD_ROOM_LV4_STATE: 14,
	TF_GOLD_ROOM_LV5_STATE: 15,
	TF_GOLD_ROOM_LV6_STATE: 16,

	TF_AD_TIMES           : 21,
	TF_GOLD_RELIVE_TIMES  : 22,
    TF_SHARE_GOLD_IN_GOLDROOM : 23,
    TF_DAILY_LOGIN        : 24,
    TF_WX_MYPRO_LOGIN     : 25,
    TF_SHARE_ZJJ          : 26,
    TF_CONTACT_KEFU       : 27,
    TF_CARD_GOOD          : 28,
    TF_WHEEL              : 29,
    TF_GOLDROOM_LOSE_COMPENSATE : 30,
    TF_PROGRESS_REWARD    : 31,
    TF_PROGRESS_REWARD_TIMES : 32,
    // TF_TELEBILL_FIRST_TIME_LOGIN : 33,
});

var TFW_WEEKLY_TYPE = cc.Enum({
    TFW_SIGN_GROUP: 1,
    TFW_SIGN: 2,
    TFW_SHARE_GOLD_IN_PLAY_OTHERGAME: 3,
});

var SIGN_INFO_TYPE = cc.Enum({
    SIGN_INFO_SIGN: 1,
    SIGN_INFO_WINXIN: 2,
});

var TASK_TYPE = cc.Enum({
    DAY: 1,
    MAIN: 2,
    SHARE: 3, 
});

var TASK_STATE = cc.Enum({
    RUNNING: 0,
    FINISH: 1,
    DRAWN: 2,
    CLOSED: 3,
});

var MAIL_STATE = cc.Enum({
    NOT_OPEN: 0,
    READ: 1,
    READ_AND_DRAWN: 2,
});

var HU_CAL_TYPE = cc.Enum({
    HU_CAL_PAIR_SPECIAL: 1,
    HU_CAL_TRIPLET_SPECIAL: 2,
    HU_CAL_TRIPLET_NORMAL: 3,
    HU_CAL_HID_TRIPLET_SPECIAL: 4,
    HU_CAL_HID_TRIPLET_NORMAL: 5,
    HU_CAL_GANG_SPECIAL: 6,
    HU_CAL_GANG_NORMAL: 7,
    HU_CAL_HID_GANG_SPECIAL: 8,
    HU_CAL_HID_GANG_NORMAL: 9,
    HU_CAL_ZIMO_HU: 10,
    HU_CAL_KANDANG_HU: 11,
    HU_CAL_PAIRS_HU: 12,
});

var HU_MULTIPLE_TYPE = cc.Enum({
    // NOT_OPEN: 0,
    // READ: 1,
    // READ_AND_DRAWN: 2,
});

//麻将胡的主要类型，可以胡牌的情况，不可叠加
var MJ_HU_TYPE = cc.Enum ({
    // MJ_HU_TYPE_NONE       uint64 = 0
	MJ_HU_TYPE_COMMON     :0,  //一般性胡法
	MJ_HU_TYPE_QIDUI      :1,  //胡七对
	MJ_HU_TYPE_13BUKAO    :2,  //胡13不靠
	MJ_HU_TYPE_4LAIZI     :3,  //4癞子胡
	MJ_HU_TYPE_3LAIZI     :4,  //3癞子胡
	MJ_HU_TYPE_8HUA       :5,  //8花胡
	MJ_HU_TYPE_4HUA       :6,  //4花胡
	MJ_HU_TYPE_4HUNHUA    :7,  //4混花胡
	MJ_HU_TYPE_4ZISELF    :8,  //4门风箭胡
	MJ_HU_TYPE_QINGYISE   :9,  //清一色
	MJ_HU_TYPE_QUANBUKAO  :10, //全不靠
	MJ_HU_TYPE_7STARBUKAO :11, //七星不靠
	MJ_HU_TYPE_13YAO      :12, //13幺
    MJ_HU_TYPE_ZUHELONG   :13, //组合龙胡
    MJ_HU_TYPE_7STAR13BUKAO :14, //胡7星13不靠
    MJ_HU_TYPE_ZIYISE       :15, //胡字一色，未实现其听牌
    MJ_HU_TYPE_JIANGJIANG   :16, //将将胡
    MJ_HU_TYPE_LUANSANFENG  :17, //乱三风
    MJ_HU_TYPE_7HUA         :18, //7花胡
    MJ_HU_TYPE_DASIXI       :19, //大四喜
	MJ_HU_TYPE_BANBAN       :20, //板板胡
	MJ_HU_TYPE_LIULIUSHUN   :21, //六六顺
    MJ_HU_TYPE_QUEYISE      :22, //缺一色
    MJ_HU_TYPE_3BAO         :23, //3宝
});

//麻将胡的子类型，在胡牌的基础上针对牌型的细分，可叠加，例，大四喜、清一色、碰碰胡、财神头
var MJ_HU_SUB_TYPE = cc.Enum ({
    // MJ_HU_SUB_TYPE_NONE       :0,
    MJ_HU_SUB_TYPE_NONE           :0 ,	
    MJ_HU_SUB_TYPE_CAISHENTOU     :1 , //财神头
	MJ_HU_SUB_TYPE_QINGYISE       :2 , //清一色
	MJ_HU_SUB_TYPE_ZIYISE         :3 , //字一色
	MJ_HU_SUB_TYPE_HUNYISE        :4 , //混一色
	MJ_HU_SUB_TYPE_DUIDUIHU       :5 , //对对胡
	MJ_HU_SUB_TYPE_LONG           :6 , //一条杠
	MJ_HU_SUB_TYPE_TWOLONG        :7 , //两条杠
	MJ_HU_SUB_TYPE_THREELONG      :8 , //三条杠
	MJ_HU_SUB_TYPE_DAI19          :9 , //带19
	MJ_HU_SUB_TYPE_DAI258         :10, //带258
	MJ_HU_SUB_TYPE_ZHONGZHANG     :11, //中张
	MJ_HU_SUB_TYPE_QUANLAOTOU     :12, //全老头
	MJ_HU_SUB_TYPE_DANDIAO        :13, //单调
	MJ_HU_SUB_TYPE_DIAOZI19       :14, //单调19风箭
	MJ_HU_SUB_TYPE_JINDIAO        :15, //金钩调
	MJ_HU_SUB_TYPE_QIAZI          :16, //卡子
	MJ_HU_SUB_TYPE_BIANZHANG      :17, //边张
	MJ_HU_SUB_TYPE_LZSELF         :18, //得还原
	MJ_HU_SUB_TYPE_BAISELF        :19, //白板还原
	MJ_HU_SUB_TYPE_MENQING        :20, //门清
	MJ_HU_SUB_TYPE_FOURHUA        :21, //四花齐放
	MJ_HU_SUB_TYPE_FOURFENG       :22, //四风会齐
	MJ_HU_SUB_TYPE_DUIDAO         :23, //对倒
	MJ_HU_SUB_TYPE_CAISHENNIU     :24, //财神牛对
	MJ_HU_SUB_TYPE_FIG            :25, //无花果
	MJ_HU_SUB_TYPE_KAWUXING       :26, //卡五星
	MJ_HU_SUB_TYPE_XIAOSANYUAN    :27, //小三元
	MJ_HU_SUB_TYPE_DASANYUAN      :28, //大三元
	MJ_HU_SUB_TYPE_MINGSIGUIYI    :29, //明四归一
	MJ_HU_SUB_TYPE_ANSIGUIYI      :30, //暗四归一
	MJ_HU_SUB_TYPE_SANYUAN        :31, //三元
	MJ_HU_SUB_TYPE_DASIXI         :32, //大四喜
    MJ_HU_SUB_TYPE_LVYISE         :33, //绿一色
	MJ_HU_SUB_TYPE_JIULIANBAODENG :34, //九莲宝灯
	MJ_HU_SUB_TYPE_SIGANG         :35, //四杠
	MJ_HU_SUB_TYPE_LIANQIDUI      :36, //连七对
	MJ_HU_SUB_TYPE_QINGYAOJIU     :37, //清幺九
	MJ_HU_SUB_TYPE_XIAOSIXI       :38, //小四喜
	MJ_HU_SUB_TYPE_SIANKE         :39, //四暗刻
	MJ_HU_SUB_TYPE_YISETWOLONG    :40, //一色双龙会
	MJ_HU_SUB_TYPE_YISESITONG     :41, //一色四同顺
	MJ_HU_SUB_TYPE_YISESIJIE      :42, //一色四节高
	MJ_HU_SUB_TYPE_YISESIBU       :43, //一色四步高
	MJ_HU_SUB_TYPE_SANGANG        :44, //三缸
	MJ_HU_SUB_TYPE_HUNYAOJIU      :45, //混幺九
	MJ_HU_SUB_TYPE_QUANPAIRKE     :46, //全双刻
	MJ_HU_SUB_TYPE_YISESANTONG    :47, //一色三同顺
	MJ_HU_SUB_TYPE_YISESANJIE     :48, //一色三节高
	MJ_HU_SUB_TYPE_QUANDA         :49, //全大
	MJ_HU_SUB_TYPE_QUANZHONG      :50, //全中
	MJ_HU_SUB_TYPE_QUANXIAO       :51, //全小
	MJ_HU_SUB_TYPE_QINGLONG       :52, //清龙
	MJ_HU_SUB_TYPE_SANSETWOLONG   :53, //三色双龙会
	MJ_HU_SUB_TYPE_YISESANBU      :54, //一色三步高
	MJ_HU_SUB_TYPE_QUANDAIWU      :55, //全带五
	MJ_HU_SUB_TYPE_SANTONGKE      :56, //三同刻
	MJ_HU_SUB_TYPE_SANANKE        :57, //三暗刻
	MJ_HU_SUB_TYPE_DAYUWU         :58, //大于五
	MJ_HU_SUB_TYPE_XIAOYUWU       :59, //小于五
	MJ_HU_SUB_TYPE_SANFENGKE      :60, //三风刻
	MJ_HU_SUB_TYPE_HUALONG        :61, //花龙
	MJ_HU_SUB_TYPE_TUIBUDAO       :62, //推不倒
	MJ_HU_SUB_TYPE_SANSESANTONG   :63, //三色三同顺
	MJ_HU_SUB_TYPE_SANSESANJIE    :64, //三色三节高
	MJ_HU_SUB_TYPE_WUFAN          :65, //无番和
	MJ_HU_SUB_TYPE_TWOANGANG      :66, //双暗杠
	MJ_HU_SUB_TYPE_SANSESANBU     :67, //三色三步高
	MJ_HU_SUB_TYPE_WUMENQI        :68, //五门齐
	MJ_HU_SUB_TYPE_QUANQIURER     :69, //全求人
	MJ_HU_SUB_TYPE_SHUANGJIANKE   :70, //双箭刻
	MJ_HU_SUB_TYPE_BUQIUREN       :71, //不求人
	MJ_HU_SUB_TYPE_TWOMINGGANG    :72, //双明杠
	MJ_HU_SUB_TYPE_HEJUEZHANG     :73, //和绝张
	MJ_HU_SUB_TYPE_JIANKE         :74, //箭刻
	MJ_HU_SUB_TYPE_QUANFENGKE     :75, //圈风刻
	MJ_HU_SUB_TYPE_MENFENGKE      :76, //门风刻
	MJ_HU_SUB_TYPE_PINGHU         :77, //平和
	MJ_HU_SUB_TYPE_SIGUIYI        :78, //四归一
	MJ_HU_SUB_TYPE_TWOANKE        :79, //双暗刻
	MJ_HU_SUB_TYPE_ANGANG         :80, //暗杠
	MJ_HU_SUB_TYPE_MINGGANG       :81, //明杠
	MJ_HU_SUB_TYPE_QUEYIMEN       :82, //缺一门
    MJ_HU_SUB_TYPE_WUZI           :83, //无字
    MJ_HU_SUB_TYPE_DAGEDA		  :84, //大哥大
	MJ_HU_SUB_TYPE_SANCHA		  :85, //三叉
	MJ_HU_SUB_TYPE_28JINAG		  :86, //28将
    MJ_HU_SUB_TYPE_SHANGQIANGTOU  :87, //上墙头
    MJ_HU_SUB_TYPE_BAOZHONGBAO 	  :88, //宝中宝
	MJ_HU_SUB_TYPE_DUIBAO 		  :89, //对宝
    MJ_HU_SUB_TYPE_MOBAO 		  :90, //摸宝
    MJ_HU_SUB_TYPE_2AN2PUZI 	  :91, //2暗双铺子
	MJ_HU_SUB_TYPE_AN2PUZI 	  	  :92, //暗双铺子
    MJ_HU_SUB_TYPE_MING2PUZI 	  :93, //明双铺子
    MJ_HU_SUB_TYPE_TWOBAZHI       :94, //双八支
    MJ_HU_SUB_TYPE_YAOTOU	      :95, //幺头
    MJ_HU_SUB_TYPE_DAYU4          :96,  //大于4
    MJ_HU_SUB_TYPE_XIAOYU6        :97,  //小于6
    MJ_HU_SUB_TYPE_10DAYU4        :98,  //大于4，超过10个
    MJ_HU_SUB_TYPE_10XIAOYU6      :99,  //小于6，超过10个
    MJ_HU_SUB_TYPE_TWOWUTONG      :100, //双五同
	MJ_HU_SUB_TYPE_37HU           :101, //37胡
	MJ_HU_SUB_TYPE_37JIANG        :102, //37将
	MJ_HU_SUB_TYPE_QINGQUE        :103, //清缺
    MJ_HU_SUB_TYPE_DAMENQING      :104, //大门清
    MJ_HU_SUB_TYPE_SHUANGLZSELF   :105, //双得还原
    MJ_HU_SUB_TYPE_YAJUE		  :106, //压绝
    MJ_HU_SUB_TYPE_3LAIZIKE       :107, //三赖子刻
	MJ_HU_SUB_TYPE_PAOPEI         :108, //跑配
	MJ_HU_SUB_TYPE_GUAIZHI        :109, //拐之
	MJ_HU_SUB_TYPE_JUEZHI         :110, //绝之
	MJ_HU_SUB_TYPE_WAZHI          :111, //挖之
    MJ_HU_SUB_TYPE_4WITH1         :112, //四拖一
    MJ_HU_SUB_TYPE_TOUDA		  :113, //头搭
	MJ_HU_SUB_TYPE_ZHONGDA		  :114, //中搭
	MJ_HU_SUB_TYPE_PENGDA		  :115, //碰搭
})

//麻将胡的额外类型，在胡牌的基础上针对外部环境的细分，不可叠加，例，天地胡、自摸、杠上花、单飘
var MJ_HU_EXTRA_TYPE = cc.Enum ({
	// MJ_HU_EXTRA_TYPE_NONE    		:0,
	MJ_HU_EXTRA_TYPE_TIANHU 		:0, //天胡
	MJ_HU_EXTRA_TYPE_DIHU    		:1, //地胡
	MJ_HU_EXTRA_TYPE_ZIMO   		:2, //自摸
    MJ_HU_EXTRA_TYPE_QIANGGANG 		:3, //抢杠
    MJ_HU_EXTRA_TYPE_LAGANG         :4, //拉杠: 补杠或打出杠牌导致别家胡，第二种情况傻逼才会干
	MJ_HU_EXTRA_TYPE_GANGSHANGHUA 	:5, //杠上花
	MJ_HU_EXTRA_TYPE_GANGSHANGPAO 	:6, //杠上炮
    MJ_HU_EXTRA_TYPE_HAIDILAOYUE 	:7, //海底捞月
    MJ_HU_EXTRA_TYPE_HAIDIPAO       :8, //海底炮
	MJ_HU_EXTRA_TYPE_ONEPIAO 		:9, //单飘
    MJ_HU_EXTRA_TYPE_TWOPIAO 		:10, //双飘
    MJ_HU_EXTRA_TYPE_THREEPIAO      :11, //三飘
    MJ_HU_EXTRA_TYPE_GANGPIAO       :12, //杠飘
    MJ_HU_EXTRA_TYPE_LIUJU		    :13, //流局
	MJ_HU_EXTRA_TYPE_LZZI		    :14, //老头黄：百搭牌为风箭牌
	MJ_HU_EXTRA_TYPE_BAOZI		    :15, //豹子：筛子相同
    MJ_HU_EXTRA_TYPE_LZTWO		    :16, //百搭连庄：两局百搭牌相同
	MJ_HU_EXTRA_TYPE_ERLIANGANG     :17, //二连杠
    MJ_HU_EXTRA_TYPE_SANLIANGANG    :18, //三连杠  二连杠和三连杠都为1,则是四连杠
    MJ_HU_EXTRA_TYPE_HUAGANG        :19, //花杠
    MJ_HU_EXTRA_TYPE_RENHU          :20, //人胡
    MJ_HU_EXTRA_TYPE_TIANTING       :21, //天听
    MJ_HU_EXTRA_TYPE_QIANGJIN       :22, //抢金
})

//麻将胡数类型，含数值
var MJ_HU_NUM_TYPE = cc.Enum ({
	MJ_HU_NUM_TYPE_DUI_ZISELF 		:1,  //对子：门风箭
	MJ_HU_NUM_TYPE_KE_GANG_ZISELF   :2,  //刻杠：门风箭
	MJ_HU_NUM_TYPE_KE_ZI19 			:3,  //明刻：风箭19
	MJ_HU_NUM_TYPE_KE_OTHER			:4,  //明刻：其它
	MJ_HU_NUM_TYPE_ANKE_ZI19		:5,  //暗刻：风箭19
	MJ_HU_NUM_TYPE_ANKE_OTHER		:6,  //暗刻：其它
	MJ_HU_NUM_TYPE_GANG_ZI19		:7,  //明杠：风箭19
	MJ_HU_NUM_TYPE_GANG_OTHER		:8,  //明杠：其它
	MJ_HU_NUM_TYPE_ANGANG_ZI19		:9,  //暗杠：风箭19
    MJ_HU_NUM_TYPE_ANGANG_OTHER		:10, //暗杠：其它
    MJ_HU_NUM_TYPE_KE_GANG_MENFENG  :11, //刻杠：门风
	MJ_HU_NUM_TYPE_KE_GANG_QUANFENG :12, //刻杠：圈风
	MJ_HU_NUM_TYPE_KE_GANG_JIAN     :13, //刻杠：箭
    MJ_HU_NUM_TYPE_PARTICULAR_HUA	:14, //花
	MJ_HU_NUM_TYPE_SAME_KE          :15, //双同刻
	MJ_HU_NUM_TYPE_YIBANGAO         :16, //一般高
	MJ_HU_NUM_TYPE_XIXIANGFENG      :17, //喜相逢
	MJ_HU_NUM_TYPE_LIANLIU          :18, //连六
	MJ_HU_NUM_TYPE_LAOSHAOFU        :19, //老少副
    MJ_HU_NUM_TYPE_KE_GANG_ZI19     :20, //刻杠：风箭19
    MJ_JI_NUM_TYPE_YAO_JI       	:21, // 幺鸡
	MJ_JI_NUM_TYPE_WU_GU_JI     	:22, // 乌骨鸡
	MJ_JI_NUM_TYPE_YAO_JI_ZRJ   	:23, // 幺鸡（责任鸡）
	MJ_JI_NUM_TYPE_WU_GU_JI_ZRJ 	:24, // 乌骨鸡（责任鸡）
	MJ_JI_NUM_TYPE_YAO_JI_CFJ   	:25, // 幺鸡（冲锋鸡）
	MJ_JI_NUM_TYPE_WU_GU_JI_CFJ 	:26, // 乌骨鸡（冲锋鸡）
	MJ_JI_NUM_TYPE_FAN_JI       	:27, // 翻鸡
	MJ_DOU_NUM_TYPE_DIAN      		:28, // 点豆
	MJ_DOU_NUM_TYPE_MENG      		:29, // 闷豆
    MJ_DOU_NUM_TYPE_ZHUAN_WAN 		:30, // 转弯豆
    MJ_TYPE_JIAO_ZUI			    :31, // 叫嘴
    MJ_SCORE_TYPE_GANG			    :32, //杠分
    MJ_SCORE_TYPE_HU			    :33, //胡分
    MJ_HU_NUM_TYPE_KE 			    :34, //刻数量
	MJ_HU_NUM_TYPE_ZHI 			    :35, //支数量： 同花色牌数量
    MJ_HU_NUM_TYPE_TONG 		    :36, //同数量： 相同序数牌数量
    MJ_HU_NUM_TYPE_SIHE             :37, //四核数量
    MJ_HU_NUM_TYPE_ZHONG 			:38, //红中数量
	MJ_HU_NUM_TYPE_FA 				:39, //发财数量
    MJ_HU_NUM_TYPE_BAI	 			:40, //白板数量
    MJ_HU_NUM_TYPE_ZHAN1DUI 		:41, //沾一对数量
	MJ_HU_NUM_TYPE_ZHAN2DUI 	 	:42, //沾两对数量
	MJ_HU_NUM_TYPE_ZHAN3TOU 		:43, //沾三头数量
    MJ_HU_NUM_TYPE_ZHAN4TOU			:44, //沾四头数量
    MJ_HU_NUM_TYPE_LUAN_SAN_FENG    :45, //乱三风数量
    MJ_HU_NUM_TYPE_ZHONG5			:46, //中五数量
    MJ_HU_NUM_TYPE_LIUJU            :47, //之前流局的次数
	MJ_HU_NUM_TYPE_HUN              :48, //混
    MJ_HU_NUM_TYPE_HUA_GANG_SCORE	:49, //花杠分
	MJ_HU_NUM_TYPE_ANKE             :50, //暗刻数量
	MJ_HU_NUM_TYPE_MINGKE           :51, //明刻数量
	MJ_HU_NUM_TYPE_LIANLIU19        :52, //带19的连六
    MJ_HU_NUM_TYPE_YIBANGAO19       :53, //带19的一般高
    MJ_HU_NUM_TYPE_HUA_ANGANG_SCORE :54, // 花暗杠分
    MJ_HU_NUM_TYPE_FENBING          :55, // 分饼
})

var MJ_JI_TYPE = cc.Enum ({
	// MJ_JI_TYPE_NONE     uint32 = 0
	MJ_JI_TYPE_1_CFJ    : 0, //1条   冲锋鸡
	MJ_JI_TYPE_1_ZRJ    : 1, //1条   责任鸡（打）
	MJ_JI_TYPE_1_ZRJ_PG : 2, //1条   责任鸡（碰，杠）
	MJ_JI_TYPE_8_CFJ    : 3, //8筒   冲锋鸡
	MJ_JI_TYPE_8_ZRJ    : 4, //8筒   责任鸡（打）
	MJ_JI_TYPE_8_ZRJ_PG : 5, //8筒   责任鸡（碰，杠）
})

var SHOP_TYPE = cc.Enum ({
	DIAMOND    		    :1, //钻石商店
	GOLD 		        :2, //金币商店
    REDBAG    		    :3, //红包商店
    FREE_DIAMOND        :4, //免费钻石商店
})

var LAYER_Z_INDEX = cc.Enum ({
	LAYER_Z_INDEX_NORMAL    		:1000, //
	LAYER_Z_INDEX_LOADING 		    :1001, //
	LAYER_Z_INDEX_QUICKTIP    		:1002, //
})

var SHARE_TYPE = cc.Enum ({
    SHARE_TYPE_DEFAULT              :0, 
    SHARE_TYPE_ROOM_INVITE    	    :1, 
	SHARE_TYPE_RED_BAG_MATCH    	:2, 
    SHARE_TYPE_GAME_OVER    		:3, 
    SHARE_TYPE_DUEL                 :4, 
    SHARE_TYPE_CIRCLE               :5, 
    SHARE_TYPE_BUDDY                :6, 
    SHARE_TYPE_PAY                  :7, 
})

var SHARE_DEST = cc.Enum ({
    FRIEND                          :1, //// 微信好友
    GROUP                           :2, //// 微信群
    FRIEND_CIRCLE                   :3, //// 微信朋友圈
    QQ_FRIEND                       :4, //// QQ好友
})

var GANG_TOU_CARD_TYPE = cc.Enum({
    CARD_TYPE_NONE                  :0,
	CARD_TYPE_WIN                   :1,
	CARD_TYPE_LOSE                  :2,
})

var MJ_WIN_TYPE = cc.Enum({
    MJ_WIN_TYPE_CHADAJIAO                :7,
	MJ_WIN_TYPE_CHADHUAZHU               :8,
    MJ_WIN_TYPE_TUISHUI                  :9,
    MJ_WIN_TYPE_CHALIANGDAO              :10,
})

//押注选项
var MJ_BET_TYPE = cc.Enum({
	MJ_BET_MAIZI	:0,
    MJ_BET_XIAZI 	:1,
    MJ_BET_SCORE 	:2,
    MJ_BET_PIAO_1 	:3,
    MJ_BET_PIAO_2 	:4,
    MJ_BET_DAPIAO_RATE_1 :5,
	MJ_BET_DAPIAO_RATE_3 :6,
    MJ_BET_DAPIAO_RATE_5 :7,
    MJ_BET_XIA_PAO_1	 :8,
    MJ_BET_XIA_PAO_2	 :9,
    MJ_BET_XIA_PAO_3	 :10,
    MJ_BET_NAO_PAO_1	 :11,
    MJ_BET_NAO_PAO_2	 :12,
    MJ_BET_NAO_PAO_4	 :13,
    MJ_BET_LA_SCORE_1      :14,
    MJ_BET_LA_SCORE_2      :15,
    MJ_BET_LA_SCORE_3      :16,
    MJ_BET_ZHAZHEN       :17,
	MJ_BET_DUN           :18,
	MJ_BET_LA            :19,
    MJ_BET_PAO           :20,
    MJ_BET_JIADI_3       :21,
	MJ_BET_JIADI_6       :22,
    MJ_BET_JIADI_9       :23,
    MJ_BET_PIAO          :24,
	MJ_BET_PIAO_1TO5     :25,
    MJ_BET_MASTER 	:31,
})

//飘财类型
var MJ_PIAO_TYPE = cc.Enum({
	MJ_PIAO_TYPE_NONE  :0,
	MJ_PIAO_TYPE_ONE   :1,
	MJ_PIAO_TYPE_TWO   :2,
	MJ_PIAO_TYPE_THREE :3,
})

//飘财状态
var MJ_PIAO_STATE = cc.Enum({
	MJ_PIAO_STATE_NONE        :0,
	MJ_PIAO_STATE_PLAYHU_ONLY :1, // 只能打摸到的牌或者胡
})

var ROOM_PAY_TYPE = cc.Enum({
	ROOM_PAY_TYPE_CREATER :1,
	ROOM_PAY_TYPE_AA      :2,
	ROOM_PAY_TYPE_WINNER  :3,
})

var CARD_PLAY_PROGRESS = cc.Enum({
	CARD_PLAY_NONE       :0,
	CARD_PLAY_BEGIN      :1,
	CARD_PLAY_CHI        :2,
})

module.exports = {
    ADMIN_SWITCH:               ADMIN_SWITCH,
    BUDDY_TYPE:                 BUDDY_TYPE,
    COST_TYPE:                  COST_TYPE,
    HINT_DOT_TYPE:              HINT_DOT_TYPE, 
    RANK_TYPE:                  RANK_TYPE,
    FIRST_TYPE:                 FIRST_TYPE,
    RANK_BIG_TYPE:              RANK_BIG_TYPE,
    CIRCLE_ROLE_TYPE:           CIRCLE_ROLE_TYPE,
    CIRCLE_PREFAB:              CIRCLE_PREFAB,
    CIRCLE_CLICK_BTN:           CIRCLE_CLICK_BTN,
    CIRCLE_CREATE_ROOM_TYPE:    CIRCLE_CREATE_ROOM_TYPE,
    APP_TYPE:                   APP_TYPE,
    MAHJONG_MASK:               MAHJONG_MASK,
    ROOM_TYPE:                  ROOM_TYPE,
    ROOM_STATE:                 ROOM_STATE,
    PLAYER_STATE:               PLAYER_STATE,
    MJ_SEQ:                     MJ_SEQ,
    MJ_COLOR:                   MJ_COLOR,
    MJ_CHI_TYPE:                MJ_CHI_TYPE,
    MJ_HU_TYPE:                 MJ_HU_TYPE,
    MJ_HU_SUB_TYPE:             MJ_HU_SUB_TYPE,
    MJ_HU_EXTRA_TYPE:           MJ_HU_EXTRA_TYPE,
    MJ_COND:                    MJ_COND,
    MJ_FACE:                    MJ_FACE,
    MJ_PLAY_SETTING:            MJ_PLAY_SETTING,
    APPLY_OP:                   APPLY_OP,
    HALL_PREFAB:                HALL_PREFAB,
    ROOM_PREFAB:                ROOM_PREFAB,
    REYUN_EVENT_ID:             REYUN_EVENT_ID,
    MATCH_SEQ_TYPE:             MATCH_SEQ_TYPE,
    MATCH_STATE_TYPE:           MATCH_STATE_TYPE,
    TF_TYPE:                    TF_TYPE,
    TF_DAILY_TYPE:              TF_DAILY_TYPE,
    TFW_WEEKLY_TYPE:            TFW_WEEKLY_TYPE,
    SIGN_INFO_TYPE:             SIGN_INFO_TYPE,
    TASK_TYPE:                  TASK_TYPE,
    TASK_STATE:                 TASK_STATE,
    MAIL_STATE:                 MAIL_STATE,
    MJ_SETTING:                 MJ_SETTING,
    HU_CAL_TYPE:                HU_CAL_TYPE,
    HU_MULTIPLE_TYPE:           HU_MULTIPLE_TYPE,
    SHOP_TYPE:                  SHOP_TYPE,
    LAYER_Z_INDEX:              LAYER_Z_INDEX,
    MJ_HU_NUM_TYPE:             MJ_HU_NUM_TYPE,
    SHARE_TYPE:                 SHARE_TYPE,
    SHARE_DEST:                 SHARE_DEST,
    SHARE_IN:                   SHARE_IN,
    ADV_TYPE:                   ADV_TYPE,
    GOLDROOM_SHARE_TIMES:       GOLDROOM_SHARE_TIMES,
    GANG_TOU_CARD_TYPE:         GANG_TOU_CARD_TYPE,
    MJ_WIN_TYPE:                MJ_WIN_TYPE,
    MJ_BET_TYPE:                MJ_BET_TYPE,
    MJ_PIAO_TYPE:               MJ_PIAO_TYPE,
    MJ_PIAO_STATE:              MJ_PIAO_STATE,
    ROOM_PAY_TYPE:              ROOM_PAY_TYPE,
    MJ_JI_TYPE:                 MJ_JI_TYPE,
    CARD_PLAY_PROGRESS:         CARD_PLAY_PROGRESS,
};
