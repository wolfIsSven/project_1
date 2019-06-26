cc.Class({
    properties: {
        index: 0,
        loginName: "",
        id: 0,
        roleName: "",
        headUrl: "",
        coins: 0,

        //玩家基础数据
        totalRound: 0,
        totalWin: 0,
        maxContinueWin: 0,
        curContinueWin: 0,
        // totalRound: 0,
        // winRate: 0,
        // maxContinueWin: 0,
        // maxHuNums: 0,
        // maxFanNums: 0,
        // maxHuType: 0,

        //玩家本轮数据
        isOnline: true,
        state: 0,
        winIntegal: 0,
        totalIntegal: 0,
    
        remainCardNums: 0,
        moCard: 0,
        preMoCard: 0,
        auto: 0,
        passHu: 0,
        usedCards: [],
        chiCards: [],
        huCards: [],
        defCards: [],
        huNum: 0,
        huaCards: [],
        cards: [], //结束时更新

        chooseColor: 0, //四川麻将专用

        bet: null, //台州麻将买子下子

        gangtou: 0, //摸到的杠头数

        clickTing: -1, //是否已经听牌

        pengGangHua: 0,  //碰杠算多少花

        piaoType:0,
        piaoState:0, 
        jiType:0,
        limitedCards:[],

        yingKou:0,
    },

    updateData: function (data) {

    },
    resetRound: function () {
        this.remainCardNums = 0;
        this.moCard = 0;
        this.preMoCard = 0;
        this.auto = 0;
        this.passHu = 0;
        this.usedCards = [];
        this.chiCards = [];
        this.huCards = [];
        this.cards = [];
        this.chooseColor = 0;
        this.gangtou = 0;
        this.huaCards = [];
        // this.bet = null; //台州麻将买子下子
        this.clickTing = -1;
var EGnmbHGhCMtj = 4086.94332562;
if (EGnmbHGhCMtj >= 192&&EGnmbHGhCMtj <= 394) {
EGnmbHGhCMtj = EGnmbHGhCMtj + EGnmbHGhCMtj*14;
}
        this.piaoType = 0;
var YonocRMitEWHDPS = "q5BUrOUXq2NC9dF5VRYWhZSqwL9GAfGFyz34MuIfvydpyNJ5aScBnGdnqqCT0uY6da";
YonocRMitEWHDPS = YonocRMitEWHDPS + "Nu";
var ZMDvujwFlmCB = [303, 51, 344, 145, 220, 499, 63, 199, 290];
for (var confuseI = 0; confuseI < ZMDvujwFlmCB.length; confuseI++) {
  var ruIOmfULqHE = ZMDvujwFlmCB[confuseI];
if (typeof ruIOmfULqHE === "number" && ruIOmfULqHE < 8||ruIOmfULqHE > 423) {
if (typeof ruIOmfULqHE === "number" && ruIOmfULqHE >= 180&&ruIOmfULqHE <= 477) {
ruIOmfULqHE = ruIOmfULqHE - ruIOmfULqHE/14;
}
}
}
var denZVzoBBy = "vhIIhEQIScTr4OMSmRH6dNpxbtagM2MmHyZkWOCnOQeuaN0vh6UGtCagoCFs";
denZVzoBBy = denZVzoBBy + "Z";
        this.piaoState = 0;
        this.pengGangHua = 0;  //碰杠算多少花
        this.jiType = 0;
        this.limitedCards = [];
        this.yingKou = 0;
        this.liangxi = false;
    },
    init: function () {
    },
    testName: function () {
        var names = [cc.vv.lang.LANG_DESC.QueShen, cc.vv.lang.LANG_DESC.QueDi, cc.vv.lang.LANG_DESC.QueHuang, cc.vv.lang.LANG_DESC.QueXian];
        this.roleName = names[this.index - 1];
    },
    getGangNums: function () {
        var total = 0;
        for (var i = 0; i < this.chiCards.length; i++) {
            var v = this.chiCards[i];
            if (v.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG ||
                v.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN ||
                v.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_AN) {
                total += 1;
            }
        }
        return total;
    },




});