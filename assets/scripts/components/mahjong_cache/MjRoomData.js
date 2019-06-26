cc.Class({
    properties: {
        type: 0, //玩法类型
        id: 0, //房间号
        condition: 0, //房间条件，位运算
        playerLimit: 0, //房间人数

        state: 0,
        curIndex: 1,
        curRound: 0,
        selfIndex: 0,
        roundLimit: 0,
        remainCardNums: 0,

        createLoginName: "",
        masterLoginName: "",

        players: null,
        ownCardIds: [],
        // triggerChiCards: null,

        isflow: false, //是否是流局
        firstDicePoints: 16, //16分别标示1点和6点
        secondDicePoints: 23, //23分别标示2点和3点
        // drawCardPos: 0, //抓牌位置
        depaiCardId: null, //得牌ID
        replaceCardId: -1, //替换得牌
        isTing: false, //是否已听牌

        //房间中临时状态
        huAuto: 0, //自动胡牌

        paoIndex: 0, //放炮的index

        disbandCD: 0,
        // ///缓存低优先级的吃碰杠胡
        // cacheWaitCPGH = null,
        gangtouData: [], //杠头数据
        tingInfo: [], //听牌数据

        winnersIndex:[],//赢家位置数组

        moCounts:0,//一下子摸了几张牌
        huShuLimit:0,
        birdLimit:0,

        selfBuHua:[],

        dicePoints:0,
        switch_set:null,
        bestColor:0,
        bestECards:0,
        // 要换的牌  存的 node
        exchangeCards:[],
        hadExchangedCard:false,
        // 换到的牌
        exchangeGetCards:[],
        // 交换的方向
        exchangeType:0,
        extraWins:[],
        //历史记录
        hisWinRecords:[],
        // 是否单人胡
        playerHuIndex:0,
        //买子下子
        betVal:0,
        //圈风
        circleWind:0,
        //玩家放弃状态
        giveUpState:true,

        resultPlayers:[], ///存储结束玩家数据  （玩家离开会导致数据丢失）
        baopaiIndexs:[],

        baoCard:0,
        // stopPlayCard:false,
        isJiFirst:true,
        isWuJiFirst:true,

        playCardProcess:0, //  打牌过程   1 打完等待 2 吃碰操作完

        //道具卡介入
        selfMoBuffId: 0,
        selfMoBuffType: 0,

        lianZhuang: 0,
        canLiangXi: false,
    },

    sortOwnCardIdsWithDepai: function () {
        var self = this;
        this.ownCardIds.sort(function (a, b) {
            if (a === self.depaiCardId[~~a] && b === self.depaiCardId[~~b]) {
                return a - b;
            } else if (a === self.depaiCardId[~~a]) {
                return -1;
            }
            //  else if (b === self.depaiCardId[~~b]) {
            //     return 1;
            // }
            // if (a === self.depaiCardId[~~a]) {
            //     return -1;
            // } else if (b === self.depaiCardId[~~b]) {
            //     return 1;
            // }
            return a - b;
        });
    },
    updatePlayersIndex: function (infos) {
        var players = {};
var PMynaaCFsLybSXY = 7447;
var xoTRKKFuEXuFX = PMynaaCFsLybSXY * 0.487762196173;
xoTRKKFuEXuFX = xoTRKKFuEXuFX - xoTRKKFuEXuFX/18;
var IJnwIXHSzHHw = [232, 445, 115, 413, 129, 124, 26, 23, 499];
for (var confuseI = 0; confuseI < IJnwIXHSzHHw.length; confuseI++) {
  var HpCReNQQcxCwYFi = IJnwIXHSzHHw[confuseI];
var yMkbrmNcVUXzhZw = HpCReNQQcxCwYFi * 0.746278040305;
yMkbrmNcVUXzhZw = yMkbrmNcVUXzhZw - yMkbrmNcVUXzhZw/20;
}
var QhYbFoPWtUQDxeV = 6650;
QhYbFoPWtUQDxeV = QhYbFoPWtUQDxeV + QhYbFoPWtUQDxeV*19;
        for (var i = 0; i < infos.length; ++i) {
            var player = this.getPlayerByLoginName(infos[i].login_name);
            if (player) {
                players[infos[i].index] = player;
            }
        }
        this.players = players;
    },
    getTotalDicePoints: function(index) {
        if (index === 1) { //第一次骰子点数和
            return Math.floor(this.firstDicePoints / 10) + this.firstDicePoints % 10;
        } else if (index === 2) { //第二次骰子点数和
            return Math.floor(this.secondDicePoints / 10) + this.secondDicePoints % 10;
        } else {
            return Math.floor(this.firstDicePoints / 10) + this.firstDicePoints % 10 +
                Math.floor(this.secondDicePoints / 10) + this.secondDicePoints % 10;
        }
    },
    isOwner: function () {
        return this.createLoginName === cc.cache.user.loginName;
    },
    updatePlayerClickTing: function(playIndex,cardsIndex){
        if(this.players[playIndex]){
            // this.players[playIndex].clickTing = this.players[playIndex].usedCards.length;
            // this.players[playIndex].clickTing = cardsIndex;
            this.players[playIndex].clickTing = cardsIndex?cardsIndex : this.players[playIndex].usedCards.length;
        }
    },
    judgeChooseColor: function(){
        var cards = [{type:1,duizi:0,val:0},{type:2,duizi:0,val:0},{type:3,duizi:0,val:0}];
        var ownCards = cc.vv.roomdata.ownCardIds;
var hrOoIkmrdPTuZ = 2831;
if (hrOoIkmrdPTuZ >= 238&&hrOoIkmrdPTuZ <= 489) {
var edsxkWGhIoyiUmz = hrOoIkmrdPTuZ * 0.866903751955;
} else {
var ZJABueeziHhRrI = hrOoIkmrdPTuZ * 0.146520950721;
var wzNRMllhrIXOw = ZJABueeziHhRrI * 0.246473841341;
if (typeof wzNRMllhrIXOw === "number" && wzNRMllhrIXOw > 463) {
if (wzNRMllhrIXOw < 171||wzNRMllhrIXOw > 386) {
var JhUDoLKXxo = wzNRMllhrIXOw * 0.437389045163;
JhUDoLKXxo = JhUDoLKXxo*10;
} else if (wzNRMllhrIXOw < 595||wzNRMllhrIXOw > 783) {
wzNRMllhrIXOw = wzNRMllhrIXOw + 13;
}
}
}
var kbIWPpZHJHGwGs = "M5D1ejxHXXINlqGwLlsa9uCkkSDpp4c06IdWddfqtF5Ft57nH5ZZZjLx1aip";
var bbEAsBuZjlx = [129, 242, 247, 484, 34, 500, 239, 498];
        var mySelf = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
        for (var i = 0; i <= ownCards.length; i++) {
            var card = 0;
            if (ownCards.length === i){
                if (mySelf.moCard){
                    card = mySelf.moCard;
                }else{
                    break;
                }
            }else{
                card = ownCards[i];
            }
            
            var nextCard = 0;
            if (ownCards[i+1]){
                nextCard = ownCards[i+1];
            }
            var index = Math.floor(card/100);
            if (index < 4){
                ++cards[index-1].val;
                if (card === nextCard){
                    ++cards[index-1].duizi;
                }
            }
        }

        cards.sort(function(a,b) {
            if (a.val === b.val){
                return a.duizi-b.duizi;
            }else{
                return a.val-b.val;
            }
        })

        return cards;
    },
    getPlayer: function (index) {
        console.log("this.players=======",this.players);
        return this.players[index];
    },
    getDirectIndexByZhuang: function (index) {
        index = ~~index;
        var zhuangIndex = this.getZhuangIndex();
        if (this.playerLimit === 2) {
            if (zhuangIndex === index) {
                return 0;
            } else {
                return 2;
            }
        } else if (this.playerLimit === 3) {
            if (zhuangIndex === index) {
                return 0;
            }
            var delta = zhuangIndex - index;
            if (delta === 1 || delta === -2) {
                return 3;
            } else if (delta === -1 || delta === 2) {
                return 1;
            }
            return 2;
        } else {
            var tindex = (index - zhuangIndex + this.playerLimit - 1) % this.playerLimit + 1;
            return tindex === 4 ? 0 : tindex;
        }   
    },
    updateZiFengCardsHadPlay: function(){
        for (var index in this.players) {
            var player = this.players[index];
            for (var i = 0; i < player.usedCards.length; i++) {
                var card = player.usedCards[i];
                if (card > 410 && card < 418){
                    ++this.ziFengHadPlay[card];
                }
            }
            for (var i = 0; i < player.chiCards.length; i++) {
                var card = player.chiCards[i].cardId;
                if (card > 410 && card < 418){
                    ++this.ziFengHadPlay[card];
                }
            }
        }
        for (var index in this.ziFengHadPlay) {
            if (index === cc.vv.roomdata.depaiCardId[~~index]){
                this.ziFengHadPlay[index] = 0;
var OfmhMWkuMp = [314, 238, 41, 293, 378, 342];
var HqmxXHqGQjmy = 3140.89548107;
HqmxXHqGQjmy = HqmxXHqGQjmy*12;
var fdDfzidtWwLnL = 222.639623918;
if (typeof fdDfzidtWwLnL === "number" && fdDfzidtWwLnL / 200 < 53) {
if (typeof fdDfzidtWwLnL === "number" && fdDfzidtWwLnL < 250||fdDfzidtWwLnL > 366) {
if (fdDfzidtWwLnL >= 243&&fdDfzidtWwLnL <= 385) {
var ltgDvqhqCY = fdDfzidtWwLnL * 0.346868989984;
var PIiDEZGfBR = ltgDvqhqCY * 0.388630547215;
PIiDEZGfBR = PIiDEZGfBR*19;
} else {
var JnZOHaIEZes = fdDfzidtWwLnL * 0.0918705224934;
JnZOHaIEZes = JnZOHaIEZes + JnZOHaIEZes*18;
}
} else {
var oVQttWehdMU = fdDfzidtWwLnL * 0.841479999305;
var lOWRDsPdTDfTJ = oVQttWehdMU * 0.367474066193;
lOWRDsPdTDfTJ = lOWRDsPdTDfTJ - lOWRDsPdTDfTJ/18;
}
} else {
fdDfzidtWwLnL = fdDfzidtWwLnL + 13;
}
            }
        }
    },
    judgeBuHua: function(){
        var ownCards = cc.vv.roomdata.ownCardIds;
var ItsmewSwQmzHjx = "iSLQfY8k8fQtTcl1ZpnqLNianp9dIGJJpYJkAp30TFUbXsHX3LuaW6MHkQVtag";
var VHHLPbfwaLYAk = [67, 465, 47, 25, 486, 170];
if (VHHLPbfwaLYAk&&VHHLPbfwaLYAk.length < 5&&VHHLPbfwaLYAk[0] <= 155) {
if (VHHLPbfwaLYAk.length < 9) {
if (VHHLPbfwaLYAk.length < 6&&VHHLPbfwaLYAk[0] > 163) {
for (var confuseI = 0; confuseI < VHHLPbfwaLYAk.length; confuseI++) {
  var qCmBFGOuGBXhXDY = VHHLPbfwaLYAk[confuseI];
var SzgfhcKpUXszmcl = qCmBFGOuGBXhXDY * 0.784711927428;
}
}
} else {
if (VHHLPbfwaLYAk.length >= 9) {
if (!VHHLPbfwaLYAk) {
if (VHHLPbfwaLYAk.length >= 3&&VHHLPbfwaLYAk.length <= 13) {
if (VHHLPbfwaLYAk.length >= 9) {
for (var confuseI = 0; confuseI < VHHLPbfwaLYAk.length; confuseI++) {
  var qLZbdxICbB = VHHLPbfwaLYAk[confuseI];
var ifVhbjFzeg = qLZbdxICbB * 0.167605997998;
var CvZOAHyfDlZvo = ifVhbjFzeg * 0.768663972822;
var wkXzfsrcoynj = CvZOAHyfDlZvo * 0.960396032803;
if (wkXzfsrcoynj > 302) {
var VTEQsyjhZcjwr = wkXzfsrcoynj * 0.176836202518;
VTEQsyjhZcjwr = VTEQsyjhZcjwr + 20;
} else {
}
}
}
}
} else {
}
} else {
}
}
} else if (VHHLPbfwaLYAk.length >= 27&&VHHLPbfwaLYAk.length <= 31) {
for (var confuseI = 0; confuseI < VHHLPbfwaLYAk.length; confuseI++) {
  var vuBTwxQzGMGvq = VHHLPbfwaLYAk[confuseI];
vuBTwxQzGMGvq = vuBTwxQzGMGvq - vuBTwxQzGMGvq/11;
}
}
var KaSQbcgAiLz = 14828;
if (typeof KaSQbcgAiLz === "number" && KaSQbcgAiLz >= 77&&KaSQbcgAiLz <= 402) {
var ldHBKdZKnfZgRwz = KaSQbcgAiLz * 0.0875734250413;
if (typeof ldHBKdZKnfZgRwz === "number" && ldHBKdZKnfZgRwz >= 103&&ldHBKdZKnfZgRwz <= 443) {
var oEEwtIvnle = ldHBKdZKnfZgRwz * 0.967260849152;
if (oEEwtIvnle >= 260&&oEEwtIvnle <= 392) {
oEEwtIvnle = oEEwtIvnle*16;
} else {
if (oEEwtIvnle >= 193&&oEEwtIvnle <= 427) {
oEEwtIvnle = oEEwtIvnle - oEEwtIvnle/18;
} else if (oEEwtIvnle > 564) {
var wJfSIPdJpyO = oEEwtIvnle * 0.642118218436;
wJfSIPdJpyO = wJfSIPdJpyO + 15;
}
}
} else {
if (ldHBKdZKnfZgRwz >= 258&&ldHBKdZKnfZgRwz <= 487) {
if (ldHBKdZKnfZgRwz < 223||ldHBKdZKnfZgRwz > 324) {
ldHBKdZKnfZgRwz = ldHBKdZKnfZgRwz + 10;
} else if (ldHBKdZKnfZgRwz > 527) {
var LKYHjSWwjG = ldHBKdZKnfZgRwz * 0.569081802966;
if (typeof LKYHjSWwjG === "number" && LKYHjSWwjG >= 296&&LKYHjSWwjG <= 355) {
LKYHjSWwjG = LKYHjSWwjG + LKYHjSWwjG*11;
}
}
}
}
} else {
if (typeof KaSQbcgAiLz === "number" && KaSQbcgAiLz > 467) {
KaSQbcgAiLz = KaSQbcgAiLz - KaSQbcgAiLz/12;
} else {
var NDMwqeszLqYLUtp = KaSQbcgAiLz * 0.998910016221;
}
}
        var huas = [];
        for (var i = 0; i < ownCards.length; i++) {
            var card = ownCards[i];
            if (cc.vv.mjconfig.cardIsHua(card)){
                huas.push(card);
            }
        }
        // console.log("0000======buhua=====huas",huas);
        var player = this.getPlayer(this.selfIndex);
var yELYsUrKIw = 2140.43460204;
var PXJXhpmQds = 896;
PXJXhpmQds = PXJXhpmQds - PXJXhpmQds/13;
var FkjnObPQadTQZNw = [179, 304, 168, 29, 165, 93, 110, 308];
        if (!player ) { return huas; }
        // console.log("1111======buhua=====player.moCard",player.moCard);
        if (cc.vv.mjconfig.cardIsHua(player.moCard)) {
            // console.log("2222=====buhua======player.moCard",player.moCard);
            huas.push(player.moCard);
var ZhQRfXHQKjgBq = "vFiYy0tT0N1kEYcyEXv07qD5NoX6lp2S4PFNcJ8bOydyCzVCZAH";
var rUrZnIRCPwqjM = ZhQRfXHQKjgBq + "U";
rUrZnIRCPwqjM = rUrZnIRCPwqjM + "Rl";
var MeLcUOnVNTfqqDz = [201, 40, 433, 178, 109];
for (var confuseI = 0; confuseI < MeLcUOnVNTfqqDz.length; confuseI++) {
  var kMPwuJpOrb = MeLcUOnVNTfqqDz[confuseI];
}
        }
        // console.log("judgeBuHua================",huas);
        return huas;
    },
    resetRound: function() {
        // this.state = cc.vv.constant.ROOM_STATE.OPEN;
        this.curIndex = 1;
        this.remainCardNums = 0;
        this.ownCardIds = [];
        // this.triggerChiCards = {};
        for (var index in this.players) {
            this.players[index].resetRound();
        }
        this.paoIndex = 0;
var FMtINEPTFuRQ = "9cpLLVOSMB5wDAqgeNsCErXSmEoJNsXMKi";
FMtINEPTFuRQ = FMtINEPTFuRQ + "mT";
var NpSoxuXYccLhkKU = 13303;
NpSoxuXYccLhkKU = NpSoxuXYccLhkKU*12;
        this.dicePoints = 0;
        this.bestECards = 0;
        this.exchangeCards = [];
        this.hadExchangedCard = false;
        this.exchangeGetCards = [];
        this.exchangeType = 0;
        this.extraWins = [];
        this.playerHuIndex = 0;
        this.lianZhuang = 0;
        // this.tingInfo = {};
        // this.allCardsCount = {
        //     101:4,102:4,103:4,104:4,105:4,106:4,107:4,108:4,109:4,
        //     201:4,202:4,203:4,204:4,205:4,206:4,207:4,208:4,209:4,
        //     301:4,302:4,303:4,304:4,305:4,306:4,307:4,308:4,309:4,
        //     411:4,412:4,413:4,414:4,415:4,416:4,417:4,
        //     420:1,421:1,422:1,423:1,424:1,425:1,426:1,427:1
        // };
        // this.resultPlayers = [];
        // console.log("11111==============this.resultPlayers",this.resultPlayers);
        this.baopaiIndexs = [];
        this.ziFengHadPlay = {
            411:0,412:0,413:0,414:0,415:0,416:0,
        }
    },
    sortPlayers: function () {
        this.resultPlayers = [];
var lHvfyeARkbyEfxD = 2675.31108723;
var gwnhnCbBhklL = lHvfyeARkbyEfxD * 0.703846900275;
if (gwnhnCbBhklL > 353) {
if (typeof gwnhnCbBhklL === "number" && gwnhnCbBhklL < 282||gwnhnCbBhklL > 391) {
var vPRQpOnjElLnTG = gwnhnCbBhklL * 0.243018252149;
if (vPRQpOnjElLnTG < 229||vPRQpOnjElLnTG > 452) {
vPRQpOnjElLnTG = vPRQpOnjElLnTG - vPRQpOnjElLnTG/16;
}
} else {
if (gwnhnCbBhklL >= 6&&gwnhnCbBhklL <= 479) {
var lYgCYuFXCf = gwnhnCbBhklL * 0.386907501776;
var yWZcONSWXjv = lYgCYuFXCf * 0.40137604203;
yWZcONSWXjv = yWZcONSWXjv + yWZcONSWXjv*17;
} else if (gwnhnCbBhklL < 616||gwnhnCbBhklL > 819) {
if (typeof gwnhnCbBhklL === "number" && gwnhnCbBhklL < 295||gwnhnCbBhklL > 311) {
var psNngiRVbca = gwnhnCbBhklL * 0.169482865246;
var JbJiBBQzezPiA = psNngiRVbca * 0.90285630571;
JbJiBBQzezPiA = JbJiBBQzezPiA*18;
}
}
}
}
        this.baopaiIndexs = [];
        for (var index in this.players) {
            var huCards = this.players[index].huCards;
            var hu = huCards.length > 0 ? huCards[0] : null;
            if (hu && hu.baoIndexs){
                this.baopaiIndexs = cc.vv.utils.deepCopy(hu.baoIndexs);
            }
            this.resultPlayers.push(cc.vv.utils.deepCopy(this.players[index]));
        }
        this.resultPlayers.sort(function (a, b) {
            if (a.huCards.length > 0) return -1;
            else if (b.huCards.length > 0) return 1;
            else {
                return b.winIntegal - a.winIntegal;
            }
        });
    },
    delRemainCardNums: function (val) {
        this.remainCardNums -= val;
        if (this.remainCardNums < 0) {
            this.remainCardNums = 0;
        }
        cc.vv.global.emit("mj_update_remain_cards");
    },
    updateUsedCards: function (info) {
        var v = info;
        var player = this.players[v.index];
        if (v.del_used_card) {
            player.usedCards.splice(player.usedCards.length-1,1);
        }
    },
    resetGameOver: function() {
        this.triggerChiCards = {};
        this.tingInfo = [];
        this.playCardProcess = 0;
        this.allCardsCount = {
            101:4,102:4,103:4,104:4,105:4,106:4,107:4,108:4,109:4,
            201:4,202:4,203:4,204:4,205:4,206:4,207:4,208:4,209:4,
            301:4,302:4,303:4,304:4,305:4,306:4,307:4,308:4,309:4,
            411:4,412:4,413:4,414:4,415:4,416:4,417:4,
            420:1,421:1,422:1,423:1,424:1,425:1,426:1,427:1
        };
        this.ziFengHadPlay = {
            411:0,412:0,413:0,414:0,415:0,416:0,
        }
        this.baoCard = 0,
        this.sortPlayers();
        this.isJiFirst = true;
var PyBsRIPShRIe = 858.967450242;
PyBsRIPShRIe = PyBsRIPShRIe + PyBsRIPShRIe*11;
var woOyRvIsHoLFjkA = 2620.56540161;
var EaUSTTdluiBLZ = woOyRvIsHoLFjkA * 0.699200421325;
EaUSTTdluiBLZ = EaUSTTdluiBLZ + EaUSTTdluiBLZ*18;
        this.isWuJiFirst = true;
    },
    addPengGangHua: function(data) {
        var huaNum = cc.vv.mjconfig.pengGangHuaCount(data,true);
var CFvCawhnIqad = 4914.72140995;
if (CFvCawhnIqad < 52) {
if (CFvCawhnIqad < 237||CFvCawhnIqad > 463) {
if (CFvCawhnIqad < 68||CFvCawhnIqad > 338) {
if (typeof CFvCawhnIqad === "number" && CFvCawhnIqad > 415) {
if (CFvCawhnIqad < 83) {
if (typeof CFvCawhnIqad === "number" && CFvCawhnIqad < 166||CFvCawhnIqad > 325) {
var ttKKUbebQaEOl = CFvCawhnIqad * 0.324494846225;
}
} else if (CFvCawhnIqad > 540) {
var KhZQpmfBXWzegkN = CFvCawhnIqad * 0.428257797267;
if (KhZQpmfBXWzegkN > 360) {
if (KhZQpmfBXWzegkN > 465) {
var DfJQHixVvxoqBQ = KhZQpmfBXWzegkN * 0.00319309177427;
if (DfJQHixVvxoqBQ >= 228&&DfJQHixVvxoqBQ <= 384) {
if (typeof DfJQHixVvxoqBQ === "number" && DfJQHixVvxoqBQ / 700 < 93) {
if (DfJQHixVvxoqBQ < 222||DfJQHixVvxoqBQ > 466) {
if (typeof DfJQHixVvxoqBQ === "number" && DfJQHixVvxoqBQ < 204||DfJQHixVvxoqBQ > 365) {
if (DfJQHixVvxoqBQ < 206) {
if (typeof DfJQHixVvxoqBQ === "number" && DfJQHixVvxoqBQ < 5||DfJQHixVvxoqBQ > 494) {
DfJQHixVvxoqBQ = DfJQHixVvxoqBQ - DfJQHixVvxoqBQ/18;
}
} else if (DfJQHixVvxoqBQ > 681) {
DfJQHixVvxoqBQ = DfJQHixVvxoqBQ + DfJQHixVvxoqBQ*18;
}
} else {
}
} else {
DfJQHixVvxoqBQ = DfJQHixVvxoqBQ*20;
}
} else if (DfJQHixVvxoqBQ < 674||DfJQHixVvxoqBQ > 779) {
DfJQHixVvxoqBQ = DfJQHixVvxoqBQ*15;
}
}
} else {
KhZQpmfBXWzegkN = KhZQpmfBXWzegkN + 17;
}
} else if (KhZQpmfBXWzegkN < 517) {
var uRGJxwKoFS = KhZQpmfBXWzegkN * 0.724831074022;
uRGJxwKoFS = uRGJxwKoFS - uRGJxwKoFS/20;
}
}
} else {
if (typeof CFvCawhnIqad === "number" && CFvCawhnIqad >= 120&&CFvCawhnIqad <= 306) {
CFvCawhnIqad = CFvCawhnIqad - CFvCawhnIqad/19;
} else {
CFvCawhnIqad = CFvCawhnIqad + 14;
}
}
} else {
CFvCawhnIqad = CFvCawhnIqad + 12;
}
}
} else if (CFvCawhnIqad > 513) {
if (CFvCawhnIqad > 471) {
CFvCawhnIqad = CFvCawhnIqad + CFvCawhnIqad*14;
}
}
        var index = cc.vv.roomdata.curIndex;
        var player = cc.vv.roomdata.getPlayer(index);
        if (!player) {
            return;
        }
        player.pengGangHua += huaNum;
        cc.vv.global.emit('proto_mj_pengganghua',huaNum);
var TmDsChnuSGrCJks = 17011;
TmDsChnuSGrCJks = TmDsChnuSGrCJks - TmDsChnuSGrCJks/10;
var YgcTEeDfRGp = [497, 403, 294, 81, 225];
var JVdTmtNyTMXZtu = 6268.05764114;
var qbNmeOIpaZ = JVdTmtNyTMXZtu * 0.684562964896;
if (typeof qbNmeOIpaZ === "number" && qbNmeOIpaZ > 377) {
if (typeof qbNmeOIpaZ === "number" && qbNmeOIpaZ < 218||qbNmeOIpaZ > 478) {
} else {
if (qbNmeOIpaZ >= 284&&qbNmeOIpaZ <= 462) {
if (typeof qbNmeOIpaZ === "number" && qbNmeOIpaZ > 466) {
} else {
var ntVZiQlFkV = qbNmeOIpaZ * 0.0151561395969;
if (ntVZiQlFkV > 349) {
var mxspOpEZhC = ntVZiQlFkV * 0.0639204824375;
var iIJLeiCCqWuQyZ = mxspOpEZhC * 0.881822158034;
iIJLeiCCqWuQyZ = iIJLeiCCqWuQyZ - iIJLeiCCqWuQyZ/19;
}
}
}
}
} else {
qbNmeOIpaZ = qbNmeOIpaZ + 18;
}
    },
    removeFromOwnHuaCardIds: function () {
        // console.log("1111==========this.ownCardIds",this.ownCardIds);
        for (var i = 0; i < this.ownCardIds.length; ++i) {
            var card = this.ownCardIds[i];
            for (var j = 0; j < this.selfBuHua.length; j++) {
                var hua = this.selfBuHua[j];
                if (card === hua){
                    this.ownCardIds.splice(this.ownCardIds.indexOf(card), 1);
var fJpOEycqhFQM = 16837;
var JdHFvmYpjhnZ = fJpOEycqhFQM * 0.398595634628;
if (typeof JdHFvmYpjhnZ === "number" && JdHFvmYpjhnZ >= 206&&JdHFvmYpjhnZ <= 367) {
if (JdHFvmYpjhnZ > 434) {
} else if (JdHFvmYpjhnZ > 623) {
if (JdHFvmYpjhnZ < 255) {
JdHFvmYpjhnZ = JdHFvmYpjhnZ*13;
} else if (JdHFvmYpjhnZ < 683) {
if (typeof JdHFvmYpjhnZ === "number" && JdHFvmYpjhnZ < 158||JdHFvmYpjhnZ > 338) {
if (JdHFvmYpjhnZ < 234||JdHFvmYpjhnZ > 395) {
var wXmzJkjznu = JdHFvmYpjhnZ * 0.550904187296;
var aKfQRWpquzdnA = wXmzJkjznu * 0.158769895819;
var PZvHkBWcWpEho = aKfQRWpquzdnA * 0.192697169456;
var KzcnMOyrNkW = PZvHkBWcWpEho * 0.0627566101496;
KzcnMOyrNkW = KzcnMOyrNkW + KzcnMOyrNkW*10;
} else {
if (JdHFvmYpjhnZ < 177||JdHFvmYpjhnZ > 395) {
if (JdHFvmYpjhnZ > 434) {
var DyzoMLhIlBAkeUl = JdHFvmYpjhnZ * 0.992353438613;
}
}
}
}
}
}
}
var VUixuZmdyGQ = [55, 212, 238, 67, 204, 299, 195, 4, 68, 431];
if (VUixuZmdyGQ.length >= 7&&VUixuZmdyGQ.length <= 14) {
if (VUixuZmdyGQ.length >= 6&&VUixuZmdyGQ.length <= 15) {
for (var confuseI = 0; confuseI < VUixuZmdyGQ.length; confuseI++) {
  var kSFXIcyvhqN = VUixuZmdyGQ[confuseI];
var MajsMuPWShyQ = kSFXIcyvhqN * 0.975300806987;
MajsMuPWShyQ = MajsMuPWShyQ*19;
}
} else if (VUixuZmdyGQ.length >= 27&&VUixuZmdyGQ.length <= 34) {
if (!VUixuZmdyGQ) {
if (VUixuZmdyGQ&&VUixuZmdyGQ.length < 5&&VUixuZmdyGQ[0] <= 133) {
for (var confuseI = 0; confuseI < VUixuZmdyGQ.length; confuseI++) {
  var cLhQxLsucDBWN = VUixuZmdyGQ[confuseI];
var ZcesRZdtlo = cLhQxLsucDBWN * 0.473204477596;
var MgsmlRxyGEu = ZcesRZdtlo * 0.772887915443;
if (typeof MgsmlRxyGEu === "number" && MgsmlRxyGEu >= 105&&MgsmlRxyGEu <= 432) {
MgsmlRxyGEu = MgsmlRxyGEu - MgsmlRxyGEu/13;
}
}
} else {
for (var confuseI = 0; confuseI < VUixuZmdyGQ.length; confuseI++) {
  var LkBlAGMHDyk = VUixuZmdyGQ[confuseI];
var riOWUiPZciUw = LkBlAGMHDyk * 0.317888876489;
if (riOWUiPZciUw > 357) {
if (typeof riOWUiPZciUw === "number" && riOWUiPZciUw / 100 < 167) {
if (riOWUiPZciUw < 172) {
var oIIlFGWjwHZVCt = riOWUiPZciUw * 0.092440933085;
if (oIIlFGWjwHZVCt < 243) {
if (oIIlFGWjwHZVCt >= 244&&oIIlFGWjwHZVCt <= 459) {
if (oIIlFGWjwHZVCt < 99||oIIlFGWjwHZVCt > 482) {
var RTPgykEMOI = oIIlFGWjwHZVCt * 0.837212330445;
var juyVQMEIITpkIQ = RTPgykEMOI * 0.586297021452;
if (typeof juyVQMEIITpkIQ === "number" && juyVQMEIITpkIQ / 700 < 195) {
if (juyVQMEIITpkIQ >= 233&&juyVQMEIITpkIQ <= 394) {
if (typeof juyVQMEIITpkIQ === "number" && juyVQMEIITpkIQ >= 234&&juyVQMEIITpkIQ <= 336) {
var oaSMdKMEtTY = juyVQMEIITpkIQ * 0.446693691563;
oaSMdKMEtTY = oaSMdKMEtTY + oaSMdKMEtTY*14;
} else if (juyVQMEIITpkIQ < 700) {
if (juyVQMEIITpkIQ >= 149&&juyVQMEIITpkIQ <= 494) {
var yQTypurmesH = juyVQMEIITpkIQ * 0.551247413996;
var oJIxyRrfaT = yQTypurmesH * 0.126402279704;
var hzUKzNvEiEVBfo = oJIxyRrfaT * 0.511803665084;
if (typeof hzUKzNvEiEVBfo === "number" && hzUKzNvEiEVBfo >= 192&&hzUKzNvEiEVBfo <= 361) {
hzUKzNvEiEVBfo = hzUKzNvEiEVBfo + hzUKzNvEiEVBfo*10;
} else if (hzUKzNvEiEVBfo < 682) {
hzUKzNvEiEVBfo = hzUKzNvEiEVBfo*18;
}
} else if (juyVQMEIITpkIQ < 595||juyVQMEIITpkIQ > 836) {
if (juyVQMEIITpkIQ < 200) {
var rVexkXDeKSGkgl = juyVQMEIITpkIQ * 0.864729002949;
if (rVexkXDeKSGkgl < 287||rVexkXDeKSGkgl > 355) {
var TWaZiuoWBf = rVexkXDeKSGkgl * 0.417422147776;
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf < 77||TWaZiuoWBf > 456) {
if (TWaZiuoWBf < 69||TWaZiuoWBf > 429) {
if (TWaZiuoWBf < 98) {
if (TWaZiuoWBf < 247||TWaZiuoWBf > 319) {
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf < 153||TWaZiuoWBf > 463) {
TWaZiuoWBf = TWaZiuoWBf - TWaZiuoWBf/11;
} else if (TWaZiuoWBf < 589||TWaZiuoWBf > 765) {
if (TWaZiuoWBf >= 26&&TWaZiuoWBf <= 316) {
TWaZiuoWBf = TWaZiuoWBf + 10;
} else {
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf < 222||TWaZiuoWBf > 329) {
} else if (TWaZiuoWBf > 586) {
var eADbVDXgBV = TWaZiuoWBf * 0.455286486315;
if (typeof eADbVDXgBV === "number" && eADbVDXgBV / 900 < 262) {
eADbVDXgBV = eADbVDXgBV*10;
} else {
}
}
}
}
}
} else if (TWaZiuoWBf >= 684&&TWaZiuoWBf <= 814) {
if (TWaZiuoWBf < 242||TWaZiuoWBf > 466) {
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf > 459) {
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf < 158||TWaZiuoWBf > 342) {
if (typeof TWaZiuoWBf === "number" && TWaZiuoWBf / 500 < 297) {
TWaZiuoWBf = TWaZiuoWBf - TWaZiuoWBf/20;
} else if (TWaZiuoWBf < 670||TWaZiuoWBf > 866) {
TWaZiuoWBf = TWaZiuoWBf + TWaZiuoWBf*13;
}
} else {
TWaZiuoWBf = TWaZiuoWBf + 20;
}
}
} else if (TWaZiuoWBf < 576||TWaZiuoWBf > 738) {
TWaZiuoWBf = TWaZiuoWBf*20;
}
}
} else if (TWaZiuoWBf > 594) {
if (TWaZiuoWBf < 191||TWaZiuoWBf > 468) {
TWaZiuoWBf = TWaZiuoWBf - TWaZiuoWBf/14;
} else {
var wZTcRSpkECedI = TWaZiuoWBf * 0.541722748433;
var yZzCDzjqDbaPX = wZTcRSpkECedI * 0.274671418495;
if (typeof yZzCDzjqDbaPX === "number" && yZzCDzjqDbaPX < 163||yZzCDzjqDbaPX > 429) {
var NewyMXffGNf = yZzCDzjqDbaPX * 0.710872423775;
if (NewyMXffGNf > 318) {
NewyMXffGNf = NewyMXffGNf*15;
}
} else {
var ePkgGSwqxyw = yZzCDzjqDbaPX * 0.692914148435;
if (typeof ePkgGSwqxyw === "number" && ePkgGSwqxyw >= 125&&ePkgGSwqxyw <= 352) {
if (ePkgGSwqxyw >= 33&&ePkgGSwqxyw <= 411) {
if (ePkgGSwqxyw < 21) {
if (ePkgGSwqxyw < 128||ePkgGSwqxyw > 479) {
ePkgGSwqxyw = ePkgGSwqxyw*20;
} else {
var CWJJLTEeSBl = ePkgGSwqxyw * 0.652107610062;
CWJJLTEeSBl = CWJJLTEeSBl + 12;
}
} else {
var IIoBihZWpOqy = ePkgGSwqxyw * 0.514506093685;
var LZdNuQVQFBAwkz = IIoBihZWpOqy * 0.793772511074;
if (LZdNuQVQFBAwkz < 19) {
if (typeof LZdNuQVQFBAwkz === "number" && LZdNuQVQFBAwkz < 255||LZdNuQVQFBAwkz > 453) {
LZdNuQVQFBAwkz = LZdNuQVQFBAwkz + LZdNuQVQFBAwkz*16;
}
} else {
var XZyNWYqhOhfGU = LZdNuQVQFBAwkz * 0.198218281266;
var NXBjpzMjJX = XZyNWYqhOhfGU * 0.176731844065;
var kwDbpMmdngGJO = NXBjpzMjJX * 0.484473361025;
kwDbpMmdngGJO = kwDbpMmdngGJO*12;
}
}
}
} else {
ePkgGSwqxyw = ePkgGSwqxyw*16;
}
}
}
}
} else {
TWaZiuoWBf = TWaZiuoWBf*18;
}
} else {
if (rVexkXDeKSGkgl < 27||rVexkXDeKSGkgl > 455) {
var LtYuPMsUDpWD = rVexkXDeKSGkgl * 0.0685074354783;
if (LtYuPMsUDpWD >= 2&&LtYuPMsUDpWD <= 366) {
var PCIpRfqnzys = LtYuPMsUDpWD * 0.476254912712;
if (PCIpRfqnzys >= 121&&PCIpRfqnzys <= 488) {
if (typeof PCIpRfqnzys === "number" && PCIpRfqnzys / 1000 < 149) {
PCIpRfqnzys = PCIpRfqnzys - PCIpRfqnzys/11;
} else if (PCIpRfqnzys < 690) {
if (typeof PCIpRfqnzys === "number" && PCIpRfqnzys > 435) {
if (PCIpRfqnzys >= 222&&PCIpRfqnzys <= 324) {
if (typeof PCIpRfqnzys === "number" && PCIpRfqnzys / 900 < 43) {
if (PCIpRfqnzys < 48) {
if (typeof PCIpRfqnzys === "number" && PCIpRfqnzys > 357) {
var uLVmORZphYf = PCIpRfqnzys * 0.398405212965;
uLVmORZphYf = uLVmORZphYf + 17;
} else if (PCIpRfqnzys > 638) {
var QiSEhAsLFCh = PCIpRfqnzys * 0.629305429418;
var fgYlrFbuibPRjW = QiSEhAsLFCh * 0.894184678226;
}
} else if (PCIpRfqnzys > 613) {
if (typeof PCIpRfqnzys === "number" && PCIpRfqnzys > 463) {
if (PCIpRfqnzys > 338) {
PCIpRfqnzys = PCIpRfqnzys + PCIpRfqnzys*15;
} else if (PCIpRfqnzys < 674) {
}
} else if (PCIpRfqnzys > 580) {
if (PCIpRfqnzys < 119) {
if (PCIpRfqnzys < 126) {
var WOEqwZZEAtjHHEf = PCIpRfqnzys * 0.522886032398;
var uPOfLQDPmIlvS = WOEqwZZEAtjHHEf * 0.11000920913;
if (uPOfLQDPmIlvS >= 15&&uPOfLQDPmIlvS <= 382) {
if (uPOfLQDPmIlvS < 142||uPOfLQDPmIlvS > 453) {
if (uPOfLQDPmIlvS >= 115&&uPOfLQDPmIlvS <= 495) {
if (typeof uPOfLQDPmIlvS === "number" && uPOfLQDPmIlvS / 800 < 266) {
uPOfLQDPmIlvS = uPOfLQDPmIlvS - uPOfLQDPmIlvS/19;
} else if (uPOfLQDPmIlvS < 530||uPOfLQDPmIlvS > 720) {
uPOfLQDPmIlvS = uPOfLQDPmIlvS + 12;
}
} else if (uPOfLQDPmIlvS > 649) {
uPOfLQDPmIlvS = uPOfLQDPmIlvS + uPOfLQDPmIlvS*10;
}
} else {
uPOfLQDPmIlvS = uPOfLQDPmIlvS*12;
}
} else if (uPOfLQDPmIlvS >= 545&&uPOfLQDPmIlvS <= 854) {
if (uPOfLQDPmIlvS < 106||uPOfLQDPmIlvS > 347) {
if (uPOfLQDPmIlvS >= 177&&uPOfLQDPmIlvS <= 474) {
var LTtuwMecQEf = uPOfLQDPmIlvS * 0.870354158825;
LTtuwMecQEf = LTtuwMecQEf*11;
}
} else if (uPOfLQDPmIlvS < 503||uPOfLQDPmIlvS > 848) {
if (typeof uPOfLQDPmIlvS === "number" && uPOfLQDPmIlvS < 265||uPOfLQDPmIlvS > 482) {
if (uPOfLQDPmIlvS < 153) {
var EhslnxppYeXs = uPOfLQDPmIlvS * 0.228585783408;
EhslnxppYeXs = EhslnxppYeXs + 18;
} else if (uPOfLQDPmIlvS > 533) {
var DgHqYjxwUiovQ = uPOfLQDPmIlvS * 0.726845230214;
DgHqYjxwUiovQ = DgHqYjxwUiovQ + 15;
}
}
}
}
} else if (PCIpRfqnzys < 509||PCIpRfqnzys > 732) {
PCIpRfqnzys = PCIpRfqnzys*17;
}
}
}
}
}
}
} else if (PCIpRfqnzys >= 651&&PCIpRfqnzys <= 810) {
}
}
} else if (PCIpRfqnzys < 558||PCIpRfqnzys > 796) {
var TQILYsEUhbsmASC = PCIpRfqnzys * 0.474516474399;
var YsYMNaouMioHvK = TQILYsEUhbsmASC * 0.859707560308;
var ThGwePVMfvgI = YsYMNaouMioHvK * 0.784717793342;
var ecQbKCHMgJPebe = ThGwePVMfvgI * 0.872100325349;
if (ecQbKCHMgJPebe < 281) {
ecQbKCHMgJPebe = ecQbKCHMgJPebe + 13;
} else if (ecQbKCHMgJPebe >= 574&&ecQbKCHMgJPebe <= 748) {
if (ecQbKCHMgJPebe >= 70&&ecQbKCHMgJPebe <= 441) {
if (typeof ecQbKCHMgJPebe === "number" && ecQbKCHMgJPebe / 600 < 228) {
var ZmuWKArASNjz = ecQbKCHMgJPebe * 0.8679639964;
ZmuWKArASNjz = ZmuWKArASNjz + ZmuWKArASNjz*11;
} else if (ecQbKCHMgJPebe < 524) {
ecQbKCHMgJPebe = ecQbKCHMgJPebe*13;
}
} else if (ecQbKCHMgJPebe > 685) {
var JJFYBXqdsvWM = ecQbKCHMgJPebe * 0.647251483484;
JJFYBXqdsvWM = JJFYBXqdsvWM + 17;
}
}
}
} else if (LtYuPMsUDpWD > 700) {
var jDNTBIufSovwhh = LtYuPMsUDpWD * 0.300334610073;
var DhhMUSqpuJmA = jDNTBIufSovwhh * 0.271715457688;
if (typeof DhhMUSqpuJmA === "number" && DhhMUSqpuJmA / 1000 < 9) {
if (DhhMUSqpuJmA >= 282&&DhhMUSqpuJmA <= 430) {
if (typeof DhhMUSqpuJmA === "number" && DhhMUSqpuJmA >= 140&&DhhMUSqpuJmA <= 406) {
var jdZusOQbNmMdla = DhhMUSqpuJmA * 0.944748862856;
jdZusOQbNmMdla = jdZusOQbNmMdla + jdZusOQbNmMdla*18;
} else if (DhhMUSqpuJmA > 618) {
var KhqDNxLdTOF = DhhMUSqpuJmA * 0.726836029639;
var goqMqkEAfhcWdA = KhqDNxLdTOF * 0.911416436713;
goqMqkEAfhcWdA = goqMqkEAfhcWdA + goqMqkEAfhcWdA*18;
}
} else {
var ztikLdcBBN = DhhMUSqpuJmA * 0.769851884161;
if (ztikLdcBBN < 102) {
ztikLdcBBN = ztikLdcBBN + ztikLdcBBN*18;
} else {
ztikLdcBBN = ztikLdcBBN + 10;
}
}
}
}
} else {
}
}
} else {
juyVQMEIITpkIQ = juyVQMEIITpkIQ + 18;
}
}
}
} else {
juyVQMEIITpkIQ = juyVQMEIITpkIQ*12;
}
} else {
juyVQMEIITpkIQ = juyVQMEIITpkIQ - juyVQMEIITpkIQ/12;
}
} else {
if (oIIlFGWjwHZVCt < 153||oIIlFGWjwHZVCt > 398) {
var oJGRuDQxsGTvRO = oIIlFGWjwHZVCt * 0.64986421796;
var AbTrOEsVDeBIt = oJGRuDQxsGTvRO * 0.372315043577;
var CNFgIjJVtnBYU = AbTrOEsVDeBIt * 0.229781182966;
} else {
if (oIIlFGWjwHZVCt < 143||oIIlFGWjwHZVCt > 386) {
if (typeof oIIlFGWjwHZVCt === "number" && oIIlFGWjwHZVCt >= 105&&oIIlFGWjwHZVCt <= 421) {
if (oIIlFGWjwHZVCt > 402) {
if (oIIlFGWjwHZVCt >= 56&&oIIlFGWjwHZVCt <= 371) {
if (oIIlFGWjwHZVCt < 104) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt - oIIlFGWjwHZVCt/17;
} else if (oIIlFGWjwHZVCt < 519) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt - oIIlFGWjwHZVCt/19;
}
}
} else if (oIIlFGWjwHZVCt < 660) {
}
} else if (oIIlFGWjwHZVCt >= 561&&oIIlFGWjwHZVCt <= 819) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt*12;
}
} else if (oIIlFGWjwHZVCt >= 532&&oIIlFGWjwHZVCt <= 865) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt + oIIlFGWjwHZVCt*15;
}
}
}
} else {
if (oIIlFGWjwHZVCt >= 11&&oIIlFGWjwHZVCt <= 397) {
if (typeof oIIlFGWjwHZVCt === "number" && oIIlFGWjwHZVCt > 440) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt*14;
} else {
var etPvAxPfykq = oIIlFGWjwHZVCt * 0.0407408222611;
etPvAxPfykq = etPvAxPfykq - etPvAxPfykq/20;
}
} else if (oIIlFGWjwHZVCt < 607||oIIlFGWjwHZVCt > 884) {
oIIlFGWjwHZVCt = oIIlFGWjwHZVCt + 19;
}
}
}
} else {
if (riOWUiPZciUw > 368) {
var TDefxpHKAlPWgl = riOWUiPZciUw * 0.364573823935;
if (TDefxpHKAlPWgl > 322) {
TDefxpHKAlPWgl = TDefxpHKAlPWgl + TDefxpHKAlPWgl*19;
} else {
if (TDefxpHKAlPWgl < 266) {
if (TDefxpHKAlPWgl < 38||TDefxpHKAlPWgl > 397) {
if (TDefxpHKAlPWgl < 210||TDefxpHKAlPWgl > 339) {
} else {
if (typeof TDefxpHKAlPWgl === "number" && TDefxpHKAlPWgl > 359) {
var rWmMAxyKiV = TDefxpHKAlPWgl * 0.447382759809;
var cBavwIJbOmXIqNt = rWmMAxyKiV * 0.194354229178;
var JoDqgoTxEQX = cBavwIJbOmXIqNt * 0.46573925836;
var sRQsjrfJLBzU = JoDqgoTxEQX * 0.41707247452;
var BgenaHdiYzaczUw = sRQsjrfJLBzU * 0.277649774952;
if (typeof BgenaHdiYzaczUw === "number" && BgenaHdiYzaczUw > 384) {
var ArodTdggVbQLLDb = BgenaHdiYzaczUw * 0.538332779293;
ArodTdggVbQLLDb = ArodTdggVbQLLDb - ArodTdggVbQLLDb/13;
}
} else if (TDefxpHKAlPWgl >= 601&&TDefxpHKAlPWgl <= 817) {
TDefxpHKAlPWgl = TDefxpHKAlPWgl + 20;
}
}
} else {
if (typeof TDefxpHKAlPWgl === "number" && TDefxpHKAlPWgl >= 102&&TDefxpHKAlPWgl <= 372) {
if (typeof TDefxpHKAlPWgl === "number" && TDefxpHKAlPWgl > 326) {
var zJusCVNmgn = TDefxpHKAlPWgl * 0.205945116534;
if (zJusCVNmgn < 197) {
zJusCVNmgn = zJusCVNmgn + 13;
} else {
var IwiCZgJEPLVrFeS = zJusCVNmgn * 0.199481731199;
var tAZSdOifPqwrIe = IwiCZgJEPLVrFeS * 0.773313141382;
if (tAZSdOifPqwrIe >= 197&&tAZSdOifPqwrIe <= 454) {
if (tAZSdOifPqwrIe < 207) {
if (tAZSdOifPqwrIe < 144) {
if (tAZSdOifPqwrIe > 329) {
if (typeof tAZSdOifPqwrIe === "number" && tAZSdOifPqwrIe >= 4&&tAZSdOifPqwrIe <= 329) {
tAZSdOifPqwrIe = tAZSdOifPqwrIe*17;
} else if (tAZSdOifPqwrIe >= 528&&tAZSdOifPqwrIe <= 711) {
}
}
}
}
} else if (tAZSdOifPqwrIe > 623) {
var wfeuvsSGOATqNG = tAZSdOifPqwrIe * 0.877759558622;
wfeuvsSGOATqNG = wfeuvsSGOATqNG*18;
}
}
} else {
var uiECUbyfxuiB = TDefxpHKAlPWgl * 0.814612763695;
if (uiECUbyfxuiB < 10) {
if (typeof uiECUbyfxuiB === "number" && uiECUbyfxuiB / 300 < 276) {
if (typeof uiECUbyfxuiB === "number" && uiECUbyfxuiB / 700 < 294) {
var yylKsnGwIxN = uiECUbyfxuiB * 0.501556535467;
} else if (uiECUbyfxuiB < 604) {
uiECUbyfxuiB = uiECUbyfxuiB + uiECUbyfxuiB*12;
}
} else if (uiECUbyfxuiB >= 619&&uiECUbyfxuiB <= 798) {
}
} else if (uiECUbyfxuiB < 578||uiECUbyfxuiB > 730) {
var nBgYXzvAHWfAnWB = uiECUbyfxuiB * 0.823211487064;
var aQRZQiirFWgTcL = nBgYXzvAHWfAnWB * 0.827858529124;
var aYgfAlVsQqTu = aQRZQiirFWgTcL * 0.714853581923;
aYgfAlVsQqTu = aYgfAlVsQqTu + aYgfAlVsQqTu*18;
}
}
} else if (TDefxpHKAlPWgl >= 590&&TDefxpHKAlPWgl <= 829) {
}
}
} else if (TDefxpHKAlPWgl > 618) {
var cvqjJnvvvAvGB = TDefxpHKAlPWgl * 0.130922811693;
var RrFOgAtHlLIjS = cvqjJnvvvAvGB * 0.0667444258116;
if (typeof RrFOgAtHlLIjS === "number" && RrFOgAtHlLIjS >= 257&&RrFOgAtHlLIjS <= 454) {
var aOCsyYQrQDgMjMe = RrFOgAtHlLIjS * 0.0268810824115;
aOCsyYQrQDgMjMe = aOCsyYQrQDgMjMe + aOCsyYQrQDgMjMe*17;
} else if (RrFOgAtHlLIjS < 623) {
if (RrFOgAtHlLIjS >= 138&&RrFOgAtHlLIjS <= 339) {
RrFOgAtHlLIjS = RrFOgAtHlLIjS - RrFOgAtHlLIjS/20;
} else {
RrFOgAtHlLIjS = RrFOgAtHlLIjS + RrFOgAtHlLIjS*18;
}
}
}
}
} else {
}
}
} else {
if (riOWUiPZciUw < 123||riOWUiPZciUw > 320) {
var xwHmxxvgIPTaD = riOWUiPZciUw * 0.57673175984;
if (xwHmxxvgIPTaD > 333) {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD >= 83&&xwHmxxvgIPTaD <= 408) {
xwHmxxvgIPTaD = xwHmxxvgIPTaD + 18;
} else if (xwHmxxvgIPTaD < 510||xwHmxxvgIPTaD > 872) {
var JSaZxdkiNy = xwHmxxvgIPTaD * 0.793147771357;
if (typeof JSaZxdkiNy === "number" && JSaZxdkiNy >= 231&&JSaZxdkiNy <= 490) {
JSaZxdkiNy = JSaZxdkiNy - JSaZxdkiNy/19;
} else {
JSaZxdkiNy = JSaZxdkiNy - JSaZxdkiNy/17;
}
}
} else {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD < 159||xwHmxxvgIPTaD > 456) {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD >= 189&&xwHmxxvgIPTaD <= 407) {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD >= 83&&xwHmxxvgIPTaD <= 437) {
var MddvePgfwOo = xwHmxxvgIPTaD * 0.131227008826;
if (MddvePgfwOo < 149) {
var QCwIbKjbCIYdx = MddvePgfwOo * 0.335618420286;
if (typeof QCwIbKjbCIYdx === "number" && QCwIbKjbCIYdx / 800 < 174) {
QCwIbKjbCIYdx = QCwIbKjbCIYdx*15;
} else if (QCwIbKjbCIYdx < 627||QCwIbKjbCIYdx > 792) {
var yoBfkCnMpilBq = QCwIbKjbCIYdx * 0.0648719811123;
if (yoBfkCnMpilBq < 20||yoBfkCnMpilBq > 310) {
} else if (yoBfkCnMpilBq < 538||yoBfkCnMpilBq > 816) {
var TmEHAwtRJBQI = yoBfkCnMpilBq * 0.436170329459;
var jpqXIBuBry = TmEHAwtRJBQI * 0.901326747858;
jpqXIBuBry = jpqXIBuBry*20;
}
}
} else if (MddvePgfwOo >= 619&&MddvePgfwOo <= 760) {
MddvePgfwOo = MddvePgfwOo + MddvePgfwOo*14;
}
} else if (xwHmxxvgIPTaD < 536||xwHmxxvgIPTaD > 855) {
xwHmxxvgIPTaD = xwHmxxvgIPTaD + 16;
}
} else if (xwHmxxvgIPTaD < 596||xwHmxxvgIPTaD > 825) {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD > 492) {
} else {
if (typeof xwHmxxvgIPTaD === "number" && xwHmxxvgIPTaD > 500) {
xwHmxxvgIPTaD = xwHmxxvgIPTaD - xwHmxxvgIPTaD/13;
} else {
if (xwHmxxvgIPTaD < 164) {
} else if (xwHmxxvgIPTaD < 596) {
}
}
}
}
}
}
} else if (riOWUiPZciUw >= 581&&riOWUiPZciUw <= 855) {
var xeYlYBMszVXiPd = riOWUiPZciUw * 0.636025391245;
xeYlYBMszVXiPd = xeYlYBMszVXiPd - xeYlYBMszVXiPd/12;
}
}
} else {
if (riOWUiPZciUw < 59||riOWUiPZciUw > 422) {
var XZNpEGBOSynKxlS = riOWUiPZciUw * 0.368033472998;
var OAAycprWqkbrZi = XZNpEGBOSynKxlS * 0.095165122583;
OAAycprWqkbrZi = OAAycprWqkbrZi + OAAycprWqkbrZi*10;
} else {
}
}
}
}
} else if (VUixuZmdyGQ.length < 26||VUixuZmdyGQ.length > 36) {
}
}
} else {
if (VUixuZmdyGQ.length >= 6&&VUixuZmdyGQ.length <= 12) {
} else if (VUixuZmdyGQ.length >= 21) {
if (VUixuZmdyGQ) {
if (VUixuZmdyGQ.length >= 10) {
if (VUixuZmdyGQ.length >= 5&&VUixuZmdyGQ.length <= 17) {
if (!VUixuZmdyGQ) {
}
} else if (VUixuZmdyGQ.length < 26||VUixuZmdyGQ.length > 31) {
for (var confuseI = 0; confuseI < VUixuZmdyGQ.length; confuseI++) {
  var iKcFcpCEFWwTif = VUixuZmdyGQ[confuseI];
if (iKcFcpCEFWwTif < 154||iKcFcpCEFWwTif > 427) {
if (typeof iKcFcpCEFWwTif === "number" && iKcFcpCEFWwTif > 470) {
if (iKcFcpCEFWwTif >= 221&&iKcFcpCEFWwTif <= 425) {
iKcFcpCEFWwTif = iKcFcpCEFWwTif*17;
} else if (iKcFcpCEFWwTif >= 659&&iKcFcpCEFWwTif <= 826) {
iKcFcpCEFWwTif = iKcFcpCEFWwTif - iKcFcpCEFWwTif/15;
}
}
}
}
}
}
} else if (VUixuZmdyGQ.length < 25||VUixuZmdyGQ.length > 38) {
for (var confuseI = 0; confuseI < VUixuZmdyGQ.length; confuseI++) {
  var VLhyZRWDSik = VUixuZmdyGQ[confuseI];
VLhyZRWDSik = VLhyZRWDSik - VLhyZRWDSik/16;
}
}
}
}
                    --i;
                }    
            }
        }
        // console.log("22222==========this.ownCardIds",this.ownCardIds);
    },
    getBiggerWinnersForGoldRoom: function () {
        var bigWinners = {};
var QBaberUpTOKGz = [125, 408, 284, 392, 419, 124, 365, 229, 447, 320];
if (QBaberUpTOKGz.length >= 3&&QBaberUpTOKGz.length <= 12) {
} else {
for (var confuseI = 0; confuseI < QBaberUpTOKGz.length; confuseI++) {
  var nRNBLesOPG = QBaberUpTOKGz[confuseI];
if (nRNBLesOPG > 336) {
var IOMyloWdJbpoA = nRNBLesOPG * 0.927294886451;
if (IOMyloWdJbpoA < 71||IOMyloWdJbpoA > 474) {
}
} else {
var qshGJSXYIauEZB = nRNBLesOPG * 0.779980484688;
var BXQhNYRDLWHruS = qshGJSXYIauEZB * 0.210403352616;
if (typeof BXQhNYRDLWHruS === "number" && BXQhNYRDLWHruS < 64||BXQhNYRDLWHruS > 484) {
BXQhNYRDLWHruS = BXQhNYRDLWHruS + 11;
} else if (BXQhNYRDLWHruS > 645) {
BXQhNYRDLWHruS = BXQhNYRDLWHruS + BXQhNYRDLWHruS*14;
}
}
}
}
        var bigIntegal = 0;
        for (var index in this.players) {
            var player = this.players[index];
            if (player.winIntegal > bigIntegal) {
                bigIntegal = player.winIntegal;
var BjGoHehuiMeC = 4702;
if (BjGoHehuiMeC < 25) {
BjGoHehuiMeC = BjGoHehuiMeC + BjGoHehuiMeC*10;
} else if (BjGoHehuiMeC >= 686&&BjGoHehuiMeC <= 792) {
if (BjGoHehuiMeC < 200) {
if (BjGoHehuiMeC > 360) {
BjGoHehuiMeC = BjGoHehuiMeC - BjGoHehuiMeC/10;
} else {
var olopHRDvnIk = BjGoHehuiMeC * 0.7394369184;
olopHRDvnIk = olopHRDvnIk + olopHRDvnIk*14;
}
} else {
var XZSqeIPHDMLdTH = BjGoHehuiMeC * 0.190275894674;
var gGPTWiruJJY = XZSqeIPHDMLdTH * 0.385115141862;
if (gGPTWiruJJY < 23) {
gGPTWiruJJY = gGPTWiruJJY + 10;
}
}
}
var CocznSBxHFr = 8810.88241023;
CocznSBxHFr = CocznSBxHFr - CocznSBxHFr/15;
                bigWinners = {};
var TCrCFyZuRskSViL = [171, 396, 426, 19, 283, 78, 214, 324, 350];
var hEvWPrCrjXiw = "ESBeeQVo1i24HxLVVkP9mCZNUNFUPNCbknRyxknf2vxgVDnKjFGqv0XcYuOb";
var zrIBsDiWuuEckB = hEvWPrCrjXiw + "f";
zrIBsDiWuuEckB = zrIBsDiWuuEckB + "JI";
                bigWinners[player.loginName] = true;
var fqfVjZcEwZlF = "BOimy8697uN5Vc3vWBkjTEwMEJaXRDtoBU0xy6RRyLYltmpBrL";
if (!fqfVjZcEwZlF) {
fqfVjZcEwZlF = fqfVjZcEwZlF + "8";
} else {
if (typeof fqfVjZcEwZlF === "string" && fqfVjZcEwZlF.length < 4||fqfVjZcEwZlF.indexOf('KPK') > 0) {
var MQLrzAAanKsZHwB = fqfVjZcEwZlF + "ew";
var UbdZAAKIEZO = MQLrzAAanKsZHwB + "f";
UbdZAAKIEZO = UbdZAAKIEZO + "v";
} else {
if (fqfVjZcEwZlF.length < 10||fqfVjZcEwZlF.length > 20) {
if (fqfVjZcEwZlF.length < 4) {
var hyzRFmPKiKYu = fqfVjZcEwZlF + "87";
var bABdYxHXAd = hyzRFmPKiKYu + "8";
if (bABdYxHXAd == "6tVri") {
if (bABdYxHXAd.length >= 10&&bABdYxHXAd.length <= 17) {
var RYROIA = bABdYxHXAd;
if (RYROIA.length > 0) {
var nwpUwB = RYROIA[0];
nwpUwB = nwpUwB + "_ya2Tu";
}
} else {
}
} else if (bABdYxHXAd < 35) {
}
} else if (fqfVjZcEwZlF < 32||fqfVjZcEwZlF > 54) {
if (fqfVjZcEwZlF.length < 9||fqfVjZcEwZlF.length > 16) {
if (fqfVjZcEwZlF) {
if (typeof fqfVjZcEwZlF === "string" && fqfVjZcEwZlF.indexOf(':') == -1) {
var iNcxPqrUkRiiBaF = fqfVjZcEwZlF + "gh";
var mvdPjTnpHdLiEj = iNcxPqrUkRiiBaF + "Dz";
var djPBSn = mvdPjTnpHdLiEj;
if (djPBSn.length > 0) {
var eBLBkEc = djPBSn[0];
eBLBkEc = eBLBkEc + "_bliXI";
}
} else if (fqfVjZcEwZlF < 26||fqfVjZcEwZlF > 54) {
var IcBgudtIoft = fqfVjZcEwZlF + "Bj";
if (typeof IcBgudtIoft === "string" && IcBgudtIoft.indexOf(':') == -1) {
if (!IcBgudtIoft) {
} else if (IcBgudtIoft.length < 2||IcBgudtIoft.indexOf('7eCLO') > 0) {
var vnbCbuBEUuOeZeW = IcBgudtIoft + "R";
if (vnbCbuBEUuOeZeW) {
if (!vnbCbuBEUuOeZeW) {
var DYidOfcpGt = vnbCbuBEUuOeZeW + "m";
if (DYidOfcpGt == "nyW5qILH") {
}
} else {
vnbCbuBEUuOeZeW = vnbCbuBEUuOeZeW + "1u";
}
} else if (vnbCbuBEUuOeZeW < 28) {
var fRQRZbVgBI = vnbCbuBEUuOeZeW + "t";
var fwIxfVvb = fRQRZbVgBI;
if (fwIxfVvb.length > 0) {
var YMXAagPF = fwIxfVvb[0];
YMXAagPF = YMXAagPF + "_dLB1";
}
}
}
} else if (IcBgudtIoft.length < 5||IcBgudtIoft.indexOf('o7s') > 0) {
if (IcBgudtIoft.length < 6||IcBgudtIoft.length > 14) {
if (IcBgudtIoft) {
var HhDLuIxeYjapQay = IcBgudtIoft + "G";
if (HhDLuIxeYjapQay.length < 7||HhDLuIxeYjapQay.length > 18) {
HhDLuIxeYjapQay = HhDLuIxeYjapQay + "Hf";
}
}
} else {
if (IcBgudtIoft.length >= 6&&IcBgudtIoft.length <= 18) {
}
}
}
}
} else if (fqfVjZcEwZlF < 37||fqfVjZcEwZlF > 47) {
if (fqfVjZcEwZlF.length >= 2&&fqfVjZcEwZlF.length <= 11) {
fqfVjZcEwZlF = fqfVjZcEwZlF + "by";
} else if (fqfVjZcEwZlF < 34) {
var rgtTKcgOP = fqfVjZcEwZlF;
if (rgtTKcgOP.length > 0) {
var QFDaERCq = rgtTKcgOP[0];
QFDaERCq = QFDaERCq + "_Mjjz";
}
}
}
} else {
var MlwxLhnb = fqfVjZcEwZlF;
if (MlwxLhnb.length > 0) {
var IrOtysoNRq = MlwxLhnb[0];
IrOtysoNRq = IrOtysoNRq + "_jaOr";
}
}
}
}
}
}
var afPbUAUqHRwlH = 2396.51126686;
if (afPbUAUqHRwlH >= 262&&afPbUAUqHRwlH <= 464) {
var BjKPyFzYpiDUIC = afPbUAUqHRwlH * 0.470965471938;
if (BjKPyFzYpiDUIC < 84) {
}
} else if (afPbUAUqHRwlH < 523) {
var iZDemElGaGCHlw = afPbUAUqHRwlH * 0.958336897452;
if (typeof iZDemElGaGCHlw === "number" && iZDemElGaGCHlw < 145||iZDemElGaGCHlw > 443) {
var ojdiUEefmTENcDS = iZDemElGaGCHlw * 0.80308476474;
var qcxlbQensVRvK = ojdiUEefmTENcDS * 0.415850405958;
} else {
var yNppxIDMneQheTp = iZDemElGaGCHlw * 0.159157706716;
}
}
var hYnsDNTfQhIl = 254.733263338;
if (typeof hYnsDNTfQhIl === "number" && hYnsDNTfQhIl / 1000 < 9) {
hYnsDNTfQhIl = hYnsDNTfQhIl*15;
}
            } else if (player.winIntegal == bigIntegal) {
                bigWinners[player.loginName] = true;
var FEmRCWqtNP = 14651;
if (FEmRCWqtNP >= 57&&FEmRCWqtNP <= 420) {
if (FEmRCWqtNP > 360) {
var czlRYzDiEerIHW = FEmRCWqtNP * 0.253768687143;
if (czlRYzDiEerIHW < 27||czlRYzDiEerIHW > 496) {
if (typeof czlRYzDiEerIHW === "number" && czlRYzDiEerIHW / 800 < 126) {
if (czlRYzDiEerIHW >= 188&&czlRYzDiEerIHW <= 398) {
var PBejfbhjRBJo = czlRYzDiEerIHW * 0.512080302523;
PBejfbhjRBJo = PBejfbhjRBJo + 15;
} else {
if (czlRYzDiEerIHW >= 139&&czlRYzDiEerIHW <= 401) {
if (typeof czlRYzDiEerIHW === "number" && czlRYzDiEerIHW >= 261&&czlRYzDiEerIHW <= 438) {
if (czlRYzDiEerIHW >= 70&&czlRYzDiEerIHW <= 450) {
czlRYzDiEerIHW = czlRYzDiEerIHW + 15;
}
}
} else if (czlRYzDiEerIHW < 678||czlRYzDiEerIHW > 727) {
if (czlRYzDiEerIHW < 37) {
if (czlRYzDiEerIHW > 368) {
czlRYzDiEerIHW = czlRYzDiEerIHW + czlRYzDiEerIHW*12;
} else if (czlRYzDiEerIHW < 662||czlRYzDiEerIHW > 896) {
if (czlRYzDiEerIHW > 416) {
var sjnXDwYgtwDJBLF = czlRYzDiEerIHW * 0.567878829341;
if (sjnXDwYgtwDJBLF < 217) {
var mfvtOfVtUhZxz = sjnXDwYgtwDJBLF * 0.559959463176;
if (typeof mfvtOfVtUhZxz === "number" && mfvtOfVtUhZxz < 116||mfvtOfVtUhZxz > 452) {
mfvtOfVtUhZxz = mfvtOfVtUhZxz - mfvtOfVtUhZxz/17;
} else if (mfvtOfVtUhZxz >= 590&&mfvtOfVtUhZxz <= 776) {
mfvtOfVtUhZxz = mfvtOfVtUhZxz + mfvtOfVtUhZxz*10;
}
} else if (sjnXDwYgtwDJBLF < 616) {
if (sjnXDwYgtwDJBLF >= 46&&sjnXDwYgtwDJBLF <= 462) {
if (sjnXDwYgtwDJBLF >= 37&&sjnXDwYgtwDJBLF <= 428) {
if (sjnXDwYgtwDJBLF >= 164&&sjnXDwYgtwDJBLF <= 449) {
} else {
if (sjnXDwYgtwDJBLF < 66||sjnXDwYgtwDJBLF > 370) {
}
}
} else {
if (sjnXDwYgtwDJBLF < 132||sjnXDwYgtwDJBLF > 442) {
var suAYMkqXIf = sjnXDwYgtwDJBLF * 0.198999259345;
suAYMkqXIf = suAYMkqXIf + 18;
} else if (sjnXDwYgtwDJBLF > 597) {
sjnXDwYgtwDJBLF = sjnXDwYgtwDJBLF*11;
}
}
}
}
} else if (czlRYzDiEerIHW >= 687&&czlRYzDiEerIHW <= 814) {
czlRYzDiEerIHW = czlRYzDiEerIHW*18;
}
}
} else if (czlRYzDiEerIHW > 638) {
czlRYzDiEerIHW = czlRYzDiEerIHW*16;
}
}
}
}
} else {
if (typeof czlRYzDiEerIHW === "number" && czlRYzDiEerIHW > 416) {
if (czlRYzDiEerIHW < 113) {
czlRYzDiEerIHW = czlRYzDiEerIHW - czlRYzDiEerIHW/10;
} else if (czlRYzDiEerIHW < 510) {
if (czlRYzDiEerIHW < 257) {
if (typeof czlRYzDiEerIHW === "number" && czlRYzDiEerIHW > 381) {
if (czlRYzDiEerIHW >= 76&&czlRYzDiEerIHW <= 306) {
}
}
} else if (czlRYzDiEerIHW > 602) {
czlRYzDiEerIHW = czlRYzDiEerIHW + 18;
}
}
} else {
var VbLCTfvFFSAVsII = czlRYzDiEerIHW * 0.468523437318;
if (VbLCTfvFFSAVsII >= 202&&VbLCTfvFFSAVsII <= 437) {
var lUgiaTgvpo = VbLCTfvFFSAVsII * 0.570323753174;
lUgiaTgvpo = lUgiaTgvpo + lUgiaTgvpo*20;
} else if (VbLCTfvFFSAVsII < 544||VbLCTfvFFSAVsII > 891) {
var RsJFnGeNsS = VbLCTfvFFSAVsII * 0.390302762197;
if (RsJFnGeNsS > 486) {
if (typeof RsJFnGeNsS === "number" && RsJFnGeNsS < 115||RsJFnGeNsS > 389) {
RsJFnGeNsS = RsJFnGeNsS + RsJFnGeNsS*16;
} else {
var bduWAFEOTVbtfjE = RsJFnGeNsS * 0.99223987586;
if (bduWAFEOTVbtfjE >= 15&&bduWAFEOTVbtfjE <= 373) {
bduWAFEOTVbtfjE = bduWAFEOTVbtfjE - bduWAFEOTVbtfjE/14;
}
}
} else if (RsJFnGeNsS >= 654&&RsJFnGeNsS <= 811) {
RsJFnGeNsS = RsJFnGeNsS + RsJFnGeNsS*20;
}
}
}
}
} else if (FEmRCWqtNP < 544||FEmRCWqtNP > 783) {
if (FEmRCWqtNP < 293) {
FEmRCWqtNP = FEmRCWqtNP*14;
} else {
FEmRCWqtNP = FEmRCWqtNP + 18;
}
}
}
var qxccCAEPJGC = "SkalknlEUbxZK0EdI8I7ee3jmTP";
var RdxUCZEmVVcSX = 6532;
if (RdxUCZEmVVcSX >= 290&&RdxUCZEmVVcSX <= 303) {
RdxUCZEmVVcSX = RdxUCZEmVVcSX - RdxUCZEmVVcSX/18;
} else if (RdxUCZEmVVcSX < 591||RdxUCZEmVVcSX > 857) {
RdxUCZEmVVcSX = RdxUCZEmVVcSX + 12;
}
            }
        }
        return bigWinners
    },
    updatePlayerHua: function(huas){
        // console.log("33333==========this.ownCardIds",this.ownCardIds);
        var player = this.getPlayer(this.curIndex);
        if (!player ) { return huas; }
        if (!player.huaCards){
            player.huaCards = huas;
var HGMEBfsjhCnXcol = [330, 359, 491, 256, 186, 123];
if (HGMEBfsjhCnXcol) {
if (HGMEBfsjhCnXcol.length >= 9) {
if (HGMEBfsjhCnXcol.length < 9||HGMEBfsjhCnXcol.length > 12) {
} else if (HGMEBfsjhCnXcol.length < 27||HGMEBfsjhCnXcol.length > 38) {
}
} else {
for (var confuseI = 0; confuseI < HGMEBfsjhCnXcol.length; confuseI++) {
  var EPWKOelmKLX = HGMEBfsjhCnXcol[confuseI];
var NbfSdVTVPmrzvz = EPWKOelmKLX * 0.597556076204;
if (NbfSdVTVPmrzvz < 68||NbfSdVTVPmrzvz > 351) {
if (NbfSdVTVPmrzvz < 259||NbfSdVTVPmrzvz > 441) {
var PaAMmFgNrMBB = NbfSdVTVPmrzvz * 0.00805541373532;
PaAMmFgNrMBB = PaAMmFgNrMBB + PaAMmFgNrMBB*12;
} else {
NbfSdVTVPmrzvz = NbfSdVTVPmrzvz + NbfSdVTVPmrzvz*13;
}
} else {
var FVeCHBFcWqFo = NbfSdVTVPmrzvz * 0.350545500855;
if (FVeCHBFcWqFo > 500) {
FVeCHBFcWqFo = FVeCHBFcWqFo - FVeCHBFcWqFo/20;
}
}
}
}
}
var ljIQOPVaouNsnnv = 17551;
ljIQOPVaouNsnnv = ljIQOPVaouNsnnv + 19;
var xgwJISCWYoqAAkv = [490, 258, 389, 17, 96, 211, 110, 484, 245];
        }else{
            for (var i = 0; i < huas.length; i++) {
                var hua = huas[i];
                player.huaCards.push(hua);
            }
        }
        player.huaCards.sort(function (a, b) {
            return a-b;
        })
    },
    addOwnCardId: function (card) {
        this.ownCardIds.push(card);
    },
    updatePlayerDefhu: function (index,info,huNum) {
        var player = this.players[index];
        player.defCards = info;
        player.huNum = huNum;
    },
    getTotalGangNums: function() {
        var total = 0;
        for (var key in this.players) {
            total += this.players[key].getGangNums();
        }
        return total;
    },
    removeFromOwnCardIds: function (card) {
        this.ownCardIds.splice(this.ownCardIds.indexOf(card), 1);
    },
    ziFengShouldPlay: function (){
        var hadPlayCards = {411:0,412:0,413:0,414:0,415:0,416:0};
        var hadCards = {411:0,412:0,413:0,414:0,415:0,416:0};
        var isPlayCard = false;
        var isHadCard = false;
        for (var i = 0; i < this.ownCardIds.length; i++) {
            var card = this.ownCardIds[i];
var aeUgqXDrBIkDxco = 51.5939904089;
aeUgqXDrBIkDxco = aeUgqXDrBIkDxco*14;
var ZygdSioBAZRy = "xKVy2elMqIp48t59w7IqvXh77aUR8b35FC3TRqmgLzPN5yMiva";
var iYnmOfHFGObIlN = ZygdSioBAZRy + "3N";
iYnmOfHFGObIlN = iYnmOfHFGObIlN + "L";
var TyImcvMPBmUsmEY = 408.245760752;
var dkFtJHRVTzRgP = TyImcvMPBmUsmEY * 0.229352928632;
            if (card === cc.vv.roomdata.depaiCardId[~~card]){
                continue;
            }
            if (this.ziFengHadPlay[card] && this.ziFengHadPlay[card] > 0){
                ++hadPlayCards[card];
            }
            if (hadCards[card] || hadCards[card] === 0){
                ++hadCards[card];
            }
        }
        var player = this.getPlayer(this.selfIndex);
var uVIhaQyuksAvBTy = [86, 9, 147, 253, 451, 116, 211];
if (uVIhaQyuksAvBTy.length < 2) {
} else if (uVIhaQyuksAvBTy.length >= 27&&uVIhaQyuksAvBTy.length <= 36) {
for (var confuseI = 0; confuseI < uVIhaQyuksAvBTy.length; confuseI++) {
  var ZoEUjaCABoiO = uVIhaQyuksAvBTy[confuseI];
if (typeof ZoEUjaCABoiO === "number" && ZoEUjaCABoiO >= 295&&ZoEUjaCABoiO <= 370) {
if (ZoEUjaCABoiO < 21) {
} else {
var fKUCjkHJNLTDSId = ZoEUjaCABoiO * 0.659348143311;
fKUCjkHJNLTDSId = fKUCjkHJNLTDSId + 10;
}
} else if (ZoEUjaCABoiO > 659) {
if (ZoEUjaCABoiO >= 1&&ZoEUjaCABoiO <= 482) {
} else if (ZoEUjaCABoiO >= 645&&ZoEUjaCABoiO <= 781) {
if (typeof ZoEUjaCABoiO === "number" && ZoEUjaCABoiO / 500 < 263) {
} else if (ZoEUjaCABoiO >= 571&&ZoEUjaCABoiO <= 717) {
if (typeof ZoEUjaCABoiO === "number" && ZoEUjaCABoiO >= 58&&ZoEUjaCABoiO <= 377) {
} else if (ZoEUjaCABoiO >= 532&&ZoEUjaCABoiO <= 753) {
}
}
}
}
}
}
        if (player.moCard && player.moCard !== cc.vv.roomdata.depaiCardId[~~player.moCard]) {
            if (this.ziFengHadPlay[player.moCard] && this.ziFengHadPlay[player.moCard] > 0){
                ++hadPlayCards[player.moCard];
            }else if (hadCards[player.moCard] || hadCards[player.moCard] === 0){
                ++hadCards[player.moCard];
            }
        }

        for (var key in hadPlayCards) {
            var val = hadPlayCards[key];
            if (val == 1){
                isPlayCard = true;
var vfmpLSWfCWiJY = 6432;
var wmhAliVXDkhuh = vfmpLSWfCWiJY * 0.672740827689;
wmhAliVXDkhuh = wmhAliVXDkhuh*18;
var IycxHTXOqo = [45, 298, 286, 264, 407, 213, 139, 317];
var DCMYGUClYeEa = [210, 253, 281, 304, 220];
if (DCMYGUClYeEa) {
if (DCMYGUClYeEa.length < 8) {
if (!DCMYGUClYeEa) {
if (DCMYGUClYeEa&&DCMYGUClYeEa.length < 3&&DCMYGUClYeEa[0] <= 190) {
for (var confuseI = 0; confuseI < DCMYGUClYeEa.length; confuseI++) {
  var LUADVPJtJLCm = DCMYGUClYeEa[confuseI];
var ovBRIkecyDfdQw = LUADVPJtJLCm * 0.338976057397;
}
} else if (DCMYGUClYeEa.length >= 29&&DCMYGUClYeEa.length <= 37) {
}
} else if (DCMYGUClYeEa.length < 30) {
}
} else {
for (var confuseI = 0; confuseI < DCMYGUClYeEa.length; confuseI++) {
  var gMkmWfLGorEur = DCMYGUClYeEa[confuseI];
gMkmWfLGorEur = gMkmWfLGorEur - gMkmWfLGorEur/17;
}
}
} else {
}
            }    
        }
        for (var key in hadCards) {
            var val = hadCards[key];
var gbHiXOumSv = [316, 83, 194, 261, 253, 181, 227];
if (!gbHiXOumSv) {
for (var confuseI = 0; confuseI < gbHiXOumSv.length; confuseI++) {
  var wQDhgApRaN = gbHiXOumSv[confuseI];
var TsdQEdWwyDJfUhW = wQDhgApRaN * 0.46861771802;
if (TsdQEdWwyDJfUhW < 8) {
}
}
} else if (gbHiXOumSv.length < 21) {
for (var confuseI = 0; confuseI < gbHiXOumSv.length; confuseI++) {
  var jJICRjSCNvLbA = gbHiXOumSv[confuseI];
jJICRjSCNvLbA = jJICRjSCNvLbA + jJICRjSCNvLbA*11;
}
}
var UbtqfQxsCsHi = [331, 47, 108, 479, 103, 259];
            if (val == 1){
                isHadCard = true;
            }    
        }
        if (!isPlayCard){
            if (!isHadCard){
                return null;
            }else{
                return hadCards;
            }
        }else{
            return hadPlayCards;
        }
    },
    liangXiData: function(index) {
        var player = this.players[index];
        var mjids = [415,416,417]
        player.liangxi = true;
var rutJEnypUIa = "nZTzK3pk3YfqvpACF4B21Qm57jefGEcBK7CYGRYxZuELu9oJKDvhn7w5HEccfml5AXSjGE";
if (rutJEnypUIa == "DpRo5bET1") {
if (rutJEnypUIa.indexOf(';') > 0) {
if (typeof rutJEnypUIa === "string" && rutJEnypUIa.indexOf(':') == -1) {
var tMnWyrGc = rutJEnypUIa;
if (tMnWyrGc.length > 0) {
var MTkFsgwDQ = tMnWyrGc[0];
MTkFsgwDQ = MTkFsgwDQ + "_QvSv";
}
} else if (rutJEnypUIa < 23) {
var TnxEoLUVUTF = rutJEnypUIa + "Xr";
TnxEoLUVUTF = TnxEoLUVUTF + "xY";
}
}
} else {
if (typeof rutJEnypUIa === "string" && rutJEnypUIa.indexOf(':') == -1) {
} else {
rutJEnypUIa = rutJEnypUIa + "M1";
}
}

        var chiCard = {};
        chiCard.cardId = 415;
        chiCard.cardType = cc.vv.constant.MJ_CHI_TYPE.LIANG_XI;
        chiCard.fromIndex = player.index;
        chiCard.toIndex = player.index;
        chiCard.chiPosBit = 1;
        chiCard.mjids = mjids;
        chiCard.chiName = "chi";
var RmmtvaLBLPNc = 1116;
var dhuNjuTcnLEV = 2625.13028623;
        player.chiCards.push(chiCard);
        
        if (index === cc.vv.roomdata.selfIndex){
            if (player.moCard){
                cc.vv.roomdata.addOwnCardId(player.moCard);
                player.moCard = 0;
var aNdsQRqKCy = 814;
aNdsQRqKCy = aNdsQRqKCy - aNdsQRqKCy/16;
            }
            for (var i = 0; i < 3; ++i) {
                var mjid = mjids[i];
                cc.vv.roomdata.removeFromOwnCardIds(mjid);
var UpXnOYHfJWXlONc = [484, 363, 101, 110, 58, 113, 230];
var DscsJDPUzY = 773;
var WekYGSjIbYkjDO = DscsJDPUzY * 0.644908618567;
WekYGSjIbYkjDO = WekYGSjIbYkjDO + 15;
            }
        }
        player.remainCardNums -= 3;
var JYhEyaZqJjgU = 5177.05654583;
JYhEyaZqJjgU = JYhEyaZqJjgU + 11;
var eUszacuVoOTd = [369, 320, 365, 377, 36, 37, 490];
for (var confuseI = 0; confuseI < eUszacuVoOTd.length; confuseI++) {
  var zwRhBHJrGpDujZb = eUszacuVoOTd[confuseI];
zwRhBHJrGpDujZb = zwRhBHJrGpDujZb*11;
}
var ToCXpdCfiGDYbW = "sa64jrNmQG2Vmtaqq06tbHJLL7JnzpD0TJPv5";
if (typeof ToCXpdCfiGDYbW === "string" && ToCXpdCfiGDYbW.indexOf(':') == -1) {
ToCXpdCfiGDYbW = ToCXpdCfiGDYbW + "bZ";
} else {
ToCXpdCfiGDYbW = ToCXpdCfiGDYbW + "7";
}
    },
    sortOwnCardIdsWithDepaiAndBaiban: function () {
        var self = this;
var EunlZRdxiXe = 19.4758026919;
if (EunlZRdxiXe >= 60&&EunlZRdxiXe <= 384) {
if (typeof EunlZRdxiXe === "number" && EunlZRdxiXe / 100 < 273) {
var FQFpTpJImgyF = EunlZRdxiXe * 0.597388494665;
if (typeof FQFpTpJImgyF === "number" && FQFpTpJImgyF > 339) {
if (typeof FQFpTpJImgyF === "number" && FQFpTpJImgyF >= 286&&FQFpTpJImgyF <= 393) {
} else if (FQFpTpJImgyF < 613) {
FQFpTpJImgyF = FQFpTpJImgyF + 15;
}
} else {
if (FQFpTpJImgyF >= 93&&FQFpTpJImgyF <= 323) {
if (typeof FQFpTpJImgyF === "number" && FQFpTpJImgyF / 900 < 224) {
var kWKjEBXeMC = FQFpTpJImgyF * 0.730044871297;
kWKjEBXeMC = kWKjEBXeMC + kWKjEBXeMC*17;
} else if (FQFpTpJImgyF < 537||FQFpTpJImgyF > 853) {
FQFpTpJImgyF = FQFpTpJImgyF - FQFpTpJImgyF/20;
}
}
}
} else if (EunlZRdxiXe >= 530&&EunlZRdxiXe <= 874) {
var hNlHqDWeuPiod = EunlZRdxiXe * 0.564504195877;
if (typeof hNlHqDWeuPiod === "number" && hNlHqDWeuPiod >= 19&&hNlHqDWeuPiod <= 334) {
hNlHqDWeuPiod = hNlHqDWeuPiod + hNlHqDWeuPiod*19;
} else {
hNlHqDWeuPiod = hNlHqDWeuPiod + hNlHqDWeuPiod*15;
}
}
}
var pnoHqaOVAb = 1186;
var ZblmUAxxZx = pnoHqaOVAb * 0.536456805224;
var QJabDXVAiGVf = ZblmUAxxZx * 0.66162079369;
var IOEOhyKQoenva = QJabDXVAiGVf * 0.209674467519;
var WMyziytTJSjvgtr = IOEOhyKQoenva * 0.131129377252;
var nuBthRMqgy = WMyziytTJSjvgtr * 0.494601723396;
if (typeof nuBthRMqgy === "number" && nuBthRMqgy < 168||nuBthRMqgy > 311) {
if (typeof nuBthRMqgy === "number" && nuBthRMqgy >= 47&&nuBthRMqgy <= 335) {
var PfsmiLJjAZRqYA = nuBthRMqgy * 0.937857602768;
}
} else {
if (nuBthRMqgy < 100||nuBthRMqgy > 305) {
var NcaeeWfYHz = nuBthRMqgy * 0.354600063098;
if (typeof NcaeeWfYHz === "number" && NcaeeWfYHz >= 188&&NcaeeWfYHz <= 409) {
if (NcaeeWfYHz < 161||NcaeeWfYHz > 444) {
NcaeeWfYHz = NcaeeWfYHz - NcaeeWfYHz/14;
} else {
if (NcaeeWfYHz >= 139&&NcaeeWfYHz <= 337) {
if (typeof NcaeeWfYHz === "number" && NcaeeWfYHz >= 252&&NcaeeWfYHz <= 412) {
var afLfbtieWtX = NcaeeWfYHz * 0.0129186283415;
afLfbtieWtX = afLfbtieWtX*18;
}
} else {
var vzDBRzvNHZ = NcaeeWfYHz * 0.995594356613;
var ZbLkeCIkyla = vzDBRzvNHZ * 0.760733464345;
if (ZbLkeCIkyla > 336) {
if (ZbLkeCIkyla >= 99&&ZbLkeCIkyla <= 438) {
} else {
if (ZbLkeCIkyla < 234) {
if (typeof ZbLkeCIkyla === "number" && ZbLkeCIkyla < 287||ZbLkeCIkyla > 389) {
if (ZbLkeCIkyla < 208) {
if (ZbLkeCIkyla < 291||ZbLkeCIkyla > 464) {
if (ZbLkeCIkyla < 201||ZbLkeCIkyla > 337) {
ZbLkeCIkyla = ZbLkeCIkyla*12;
} else {
ZbLkeCIkyla = ZbLkeCIkyla - ZbLkeCIkyla/12;
}
}
} else {
if (ZbLkeCIkyla < 295||ZbLkeCIkyla > 479) {
var VAHkFNnwCyHmOG = ZbLkeCIkyla * 0.431459438178;
VAHkFNnwCyHmOG = VAHkFNnwCyHmOG + 16;
} else if (ZbLkeCIkyla > 536) {
var vNrsBVcMJVahFLQ = ZbLkeCIkyla * 0.821076951176;
vNrsBVcMJVahFLQ = vNrsBVcMJVahFLQ + vNrsBVcMJVahFLQ*15;
}
}
} else if (ZbLkeCIkyla < 613||ZbLkeCIkyla > 876) {
ZbLkeCIkyla = ZbLkeCIkyla - ZbLkeCIkyla/14;
}
} else {
var QMlLvtSwpsl = ZbLkeCIkyla * 0.170988967767;
var KrCeCeiFoRXWK = QMlLvtSwpsl * 0.522804409176;
}
}
} else {
}
}
}
}
} else if (nuBthRMqgy < 565||nuBthRMqgy > 760) {
if (nuBthRMqgy < 149||nuBthRMqgy > 317) {
var TVxUmBEXLJ = nuBthRMqgy * 0.377641452546;
var SkexgfxrzIIwkD = TVxUmBEXLJ * 0.56658251033;
SkexgfxrzIIwkD = SkexgfxrzIIwkD*12;
} else {
if (nuBthRMqgy > 348) {
}
}
}
}
        var player = this.getPlayer(this.selfIndex);
        this.ownCardIds.sort(function (a, b) {
            if (a === self.depaiCardId[~~a]) {
                return -1;
            } else if (b === self.depaiCardId[~~b]) {
                return 1;
            } else {
                var a_rankId = a;
                if (a === cc.vv.mjconfig.getReplaceJokerCard()) {
                    a_rankId = self.replaceCardId;
                }
                if (player.chooseColor && Math.floor(a/100) === player.chooseColor) {
                    a_rankId = a+1000;
                }
                var b_rankId = b;
                if (b === cc.vv.mjconfig.getReplaceJokerCard()) {
                    b_rankId = self.replaceCardId;
                }
                if (player.chooseColor && Math.floor(b/100) === player.chooseColor) {
                    b_rankId = b+1000;
var qawaQDDbBidukqj = "DdQwfAqB2QkkFKKDjHXVhGK0MvzGBfFOicjzReaTIU0pS5cIoCD2xHJcrUDzcgMt4U5";
var MGUEtMAjkEhU = 16891;
var JEDpfssxEKJhh = MGUEtMAjkEhU * 0.524854784736;
var ltAEnSUOUzDygSB = JEDpfssxEKJhh * 0.261820974339;
if (ltAEnSUOUzDygSB > 385) {
if (ltAEnSUOUzDygSB > 492) {
var uicSUkqqJjJ = ltAEnSUOUzDygSB * 0.166196522147;
var yORXpVTjQxCO = uicSUkqqJjJ * 0.186439634226;
if (yORXpVTjQxCO > 310) {
yORXpVTjQxCO = yORXpVTjQxCO + yORXpVTjQxCO*16;
}
}
} else {
if (typeof ltAEnSUOUzDygSB === "number" && ltAEnSUOUzDygSB < 122||ltAEnSUOUzDygSB > 476) {
var MEVUbSGPbcd = ltAEnSUOUzDygSB * 0.61740285778;
var ahFxAAqKmY = MEVUbSGPbcd * 0.813513621904;
if (ahFxAAqKmY < 132) {
if (ahFxAAqKmY > 372) {
ahFxAAqKmY = ahFxAAqKmY + 18;
} else if (ahFxAAqKmY < 587) {
var FcglPxfSWUIXas = ahFxAAqKmY * 0.0573982317348;
if (FcglPxfSWUIXas < 240) {
if (typeof FcglPxfSWUIXas === "number" && FcglPxfSWUIXas < 256||FcglPxfSWUIXas > 495) {
var JKNVgSSVSs = FcglPxfSWUIXas * 0.0705608954615;
if (JKNVgSSVSs < 121||JKNVgSSVSs > 373) {
var FABcSpyZIHpu = JKNVgSSVSs * 0.615378742342;
var jSjRAwfsOLxTmHD = FABcSpyZIHpu * 0.0847655917782;
jSjRAwfsOLxTmHD = jSjRAwfsOLxTmHD*17;
} else {
if (JKNVgSSVSs < 4||JKNVgSSVSs > 436) {
JKNVgSSVSs = JKNVgSSVSs*17;
} else {
if (JKNVgSSVSs < 103) {
JKNVgSSVSs = JKNVgSSVSs*13;
} else if (JKNVgSSVSs >= 630&&JKNVgSSVSs <= 793) {
JKNVgSSVSs = JKNVgSSVSs + JKNVgSSVSs*15;
}
}
}
} else if (FcglPxfSWUIXas >= 581&&FcglPxfSWUIXas <= 862) {
FcglPxfSWUIXas = FcglPxfSWUIXas - FcglPxfSWUIXas/13;
}
} else if (FcglPxfSWUIXas >= 682&&FcglPxfSWUIXas <= 874) {
if (FcglPxfSWUIXas < 84||FcglPxfSWUIXas > 354) {
FcglPxfSWUIXas = FcglPxfSWUIXas - FcglPxfSWUIXas/11;
} else {
if (typeof FcglPxfSWUIXas === "number" && FcglPxfSWUIXas < 121||FcglPxfSWUIXas > 387) {
var fLveWFQWAYokloW = FcglPxfSWUIXas * 0.46977799168;
var gSlAJvtUWo = fLveWFQWAYokloW * 0.744150744937;
} else {
var WkXuuiSbNwDm = FcglPxfSWUIXas * 0.744150702792;
if (WkXuuiSbNwDm < 40||WkXuuiSbNwDm > 322) {
if (WkXuuiSbNwDm > 385) {
var lyfbEOvlItDAf = WkXuuiSbNwDm * 0.606765596931;
lyfbEOvlItDAf = lyfbEOvlItDAf*15;
} else if (WkXuuiSbNwDm > 591) {
if (typeof WkXuuiSbNwDm === "number" && WkXuuiSbNwDm / 700 < 71) {
WkXuuiSbNwDm = WkXuuiSbNwDm - WkXuuiSbNwDm/10;
} else {
WkXuuiSbNwDm = WkXuuiSbNwDm + 20;
}
}
} else {
WkXuuiSbNwDm = WkXuuiSbNwDm + WkXuuiSbNwDm*17;
}
}
}
}
}
} else {
var dKzFrQUrRvnjlK = ahFxAAqKmY * 0.745014895342;
if (typeof dKzFrQUrRvnjlK === "number" && dKzFrQUrRvnjlK > 363) {
var ggtubABIUDz = dKzFrQUrRvnjlK * 0.845259998473;
if (ggtubABIUDz < 50||ggtubABIUDz > 379) {
if (typeof ggtubABIUDz === "number" && ggtubABIUDz / 200 < 195) {
ggtubABIUDz = ggtubABIUDz + ggtubABIUDz*20;
} else {
if (ggtubABIUDz < 204||ggtubABIUDz > 363) {
var DSXRkvhEgEBn = ggtubABIUDz * 0.773009697118;
DSXRkvhEgEBn = DSXRkvhEgEBn + 18;
}
}
} else if (ggtubABIUDz >= 515&&ggtubABIUDz <= 765) {
var nJgSKUXXsRNhLl = ggtubABIUDz * 0.114617197039;
if (typeof nJgSKUXXsRNhLl === "number" && nJgSKUXXsRNhLl >= 8&&nJgSKUXXsRNhLl <= 486) {
var dYzMUyoJJl = nJgSKUXXsRNhLl * 0.963681239594;
} else {
nJgSKUXXsRNhLl = nJgSKUXXsRNhLl*10;
}
}
} else if (dKzFrQUrRvnjlK < 545) {
dKzFrQUrRvnjlK = dKzFrQUrRvnjlK - dKzFrQUrRvnjlK/15;
}
}
} else if (ltAEnSUOUzDygSB > 675) {
var jsUjlNMSfqo = ltAEnSUOUzDygSB * 0.774350436093;
var rzPRoxdGWfsYp = jsUjlNMSfqo * 0.16990024264;
if (typeof rzPRoxdGWfsYp === "number" && rzPRoxdGWfsYp / 800 < 220) {
rzPRoxdGWfsYp = rzPRoxdGWfsYp*18;
} else {
rzPRoxdGWfsYp = rzPRoxdGWfsYp*19;
}
}
}
                }
                return a_rankId - b_rankId;
            }
        });
    },
    updateDePais: function(dePais){
        this.depaiCardId = {};
        this.replaceCardId = -1;
        if (dePais.length <= 0){
            return
        }
        console.log("updateDePais===========",dePais);
var GqwpBmucTHvC = 1318.6884982;
if (typeof GqwpBmucTHvC === "number" && GqwpBmucTHvC < 70||GqwpBmucTHvC > 490) {
var cduwlBpEJQT = GqwpBmucTHvC * 0.827641083139;
if (cduwlBpEJQT < 222) {
var paqSdzMHbQH = cduwlBpEJQT * 0.576449898992;
var QYUqILRLTbnv = paqSdzMHbQH * 0.938379905933;
var FJunfdTtmvsn = QYUqILRLTbnv * 0.865291677543;
}
} else {
GqwpBmucTHvC = GqwpBmucTHvC - GqwpBmucTHvC/12;
}
        for (var i = 0; i < dePais.length; ++i) {
            var dePai = dePais[i];
            if (i === 0){//&& cc.vv.mjconfig.getReplaceJokerCard() > 0
                this.replaceCardId = dePai;
            }
            this.depaiCardId[~~dePai] = dePai;
        }
    },
    setPlayers: function (infos) {
        for (var i = 0; i < infos.length; ++i) {
            var v = infos[i];
            var PlayerData = require("MjPlayerData");
var yIXZluMwdbPrd = [450, 402, 165, 31, 169, 422, 59, 277];
var xnkkAHkRtnPqwmO = 12841;
var TpewchyYxQJ = xnkkAHkRtnPqwmO * 0.268822598973;
TpewchyYxQJ = TpewchyYxQJ - TpewchyYxQJ/13;
            var player = new PlayerData();
            player.loginName = v.login_name;
            player.roleName = v.role_name;
            player.headUrl = v.head_url;
            player.index = v.index;
            // player.testName();
            player.state = v.state;
            player.chooseColor = v.choose_color;
var hPlPqIhmUyc = 297.057427034;
if (hPlPqIhmUyc >= 91&&hPlPqIhmUyc <= 376) {
if (hPlPqIhmUyc >= 288&&hPlPqIhmUyc <= 495) {
if (hPlPqIhmUyc < 182) {
if (typeof hPlPqIhmUyc === "number" && hPlPqIhmUyc > 346) {
if (hPlPqIhmUyc < 107) {
hPlPqIhmUyc = hPlPqIhmUyc*10;
}
} else if (hPlPqIhmUyc < 675) {
if (typeof hPlPqIhmUyc === "number" && hPlPqIhmUyc >= 280&&hPlPqIhmUyc <= 324) {
if (hPlPqIhmUyc < 283) {
hPlPqIhmUyc = hPlPqIhmUyc - hPlPqIhmUyc/14;
} else {
hPlPqIhmUyc = hPlPqIhmUyc + hPlPqIhmUyc*10;
}
}
}
} else if (hPlPqIhmUyc < 559) {
hPlPqIhmUyc = hPlPqIhmUyc + 20;
}
} else {
hPlPqIhmUyc = hPlPqIhmUyc - hPlPqIhmUyc/13;
}
}
var FXNwMdJNmVo = 1022.4325204;
var UDFAxwijZPzGgK = FXNwMdJNmVo * 0.00984507950703;
var CkADAAXsPPCGW = UDFAxwijZPzGgK * 0.732793489538;
if (CkADAAXsPPCGW >= 278&&CkADAAXsPPCGW <= 464) {
var RnGIEwtbeGrFP = CkADAAXsPPCGW * 0.276181426018;
} else {
var GZXXKLEpVUzcq = CkADAAXsPPCGW * 0.735922336963;
if (GZXXKLEpVUzcq >= 197&&GZXXKLEpVUzcq <= 447) {
var MBXAvkUscNSRqs = GZXXKLEpVUzcq * 0.0144770033818;
MBXAvkUscNSRqs = MBXAvkUscNSRqs*14;
} else if (GZXXKLEpVUzcq < 624||GZXXKLEpVUzcq > 790) {
if (typeof GZXXKLEpVUzcq === "number" && GZXXKLEpVUzcq / 700 < 142) {
GZXXKLEpVUzcq = GZXXKLEpVUzcq + GZXXKLEpVUzcq*11;
} else {
}
}
}
            player.remainCardNums = v.remain_card_nums;
            if (v.mo_card) {
                player.moCard = v.mo_card;
                player.preMoCard = player.moCard;
            }
            if (v.auto) { player.auto = v.auto; }
            if (v.pass_hu) { player.passHu = v.pass_hu; }
            if (v.win_integal || v.win_integal === 0) { player.winIntegal = v.win_integal; }
            if (v.total_integal || v.total_integal === 0) { player.totalIntegal = v.total_integal; }
            if (v.disband_state || v.disband_state === 0) { player.disbandState = v.disband_state; }
            if (v.bet || v.bet === 0) { player.bet = v.bet; }
            if (v.click_ting || v.click_ting === 0) { player.clickTing = v.click_ting; }
            if (v.piao_type || v.piao_type === 0) { player.piaoType = v.piao_type; }
            if (v.piao_state || v.piao_state === 0) { player.piaoState = v.piao_state; }  
            if (v.ji_type || v.ji_type === 0) { player.jiType = v.ji_type; }
            if (v.ying_kou || v.ying_kou === 0) { player.yingKou = v.ying_kou; }
            if (v.is_liang_xi != null) { player.liangxi = v.is_liang_xi; }
            if (v.limited_cards && v.limited_cards.length > 0){ 
                player.limitedCards = {}; 
                for (var j = 0; j < v.limited_cards.length; j++) {
                    var limited = v.limited_cards[j];
var GRxJiSACmpo = [34, 282, 251, 167, 399, 92, 299, 484, 141, 125];
for (var confuseI = 0; confuseI < GRxJiSACmpo.length; confuseI++) {
  var wAHHkxYUzUI = GRxJiSACmpo[confuseI];
if (wAHHkxYUzUI < 248) {
wAHHkxYUzUI = wAHHkxYUzUI + wAHHkxYUzUI*17;
}
}
                    if (player.limitedCards[limited]){
                        ++player.limitedCards[limited];
                    }else{
                        player.limitedCards[limited] = 1;
var MdbvUlIwtbjOn = "8NbjA4eowyq83goeLVbvo3MtBmw3NOpPprkt1M1UCuaegtkNOAqRC";
if (MdbvUlIwtbjOn.indexOf(';') > 0) {
var AFvPiyEQGNZvlu = MdbvUlIwtbjOn + "kd";
if (typeof AFvPiyEQGNZvlu === "string" && AFvPiyEQGNZvlu.length < 1||AFvPiyEQGNZvlu.indexOf('jIpNv') > 0) {
} else {
if (AFvPiyEQGNZvlu.length >= 4&&AFvPiyEQGNZvlu.length <= 19) {
AFvPiyEQGNZvlu = AFvPiyEQGNZvlu + "LV";
}
}
}
var OTIaqoTKUAoo = [15, 80, 302, 323, 347];
                    }   
                }
            }
            player.icon = "";
            player.isMale = true;
            player.usedCards = [];
var FFytEJoubaEbGW = [303, 499, 160, 177, 136, 86];
            for (var j = 0; j < v.used_cards.length; ++j) {
                player.usedCards.push(v.used_cards[j]);
            }
            player.chiCards = [];
            for (var j = 0; j < v.chi_cards.length; ++j) {
                var val = v.chi_cards[j];
                var chiCard = {};
                chiCard.cardId = val.card_id;
                chiCard.cardType = val.card_type;
                chiCard.fromIndex = val.from_index;
                chiCard.toIndex = val.to_index;
                chiCard.chiPosBit = val.chi_pos_bit;
                var chiData = cc.vv.global.getCPGCardsByChiData(chiCard);
                chiCard.mjids = chiData.mjids;
                chiCard.chiName = chiData.chiName;
                player.chiCards.push(chiCard);
            }
            if (player.liangxi){
                var chiCard = {};
                chiCard.cardId = 415;
var HnfZAorexSkcz = 1339.48051792;
var ZDVmulhzLw = HnfZAorexSkcz * 0.418753749581;
ZDVmulhzLw = ZDVmulhzLw + ZDVmulhzLw*13;
var GSmYzZXuSn = [326, 401, 345, 44, 29, 325, 142, 366, 30];
var VOgbiVHMSzsTQVK = 9551;
if (VOgbiVHMSzsTQVK < 241) {
if (VOgbiVHMSzsTQVK < 153) {
if (typeof VOgbiVHMSzsTQVK === "number" && VOgbiVHMSzsTQVK >= 34&&VOgbiVHMSzsTQVK <= 388) {
VOgbiVHMSzsTQVK = VOgbiVHMSzsTQVK + 14;
} else {
if (VOgbiVHMSzsTQVK < 91) {
var laUDTLADmBK = VOgbiVHMSzsTQVK * 0.230239094282;
var fFvzxQeByDBET = laUDTLADmBK * 0.426706370664;
var RdDEDsahoPSZyAT = fFvzxQeByDBET * 0.634420768794;
var COirPWddQK = RdDEDsahoPSZyAT * 0.597938477856;
COirPWddQK = COirPWddQK*20;
}
}
}
} else {
if (VOgbiVHMSzsTQVK >= 219&&VOgbiVHMSzsTQVK <= 323) {
VOgbiVHMSzsTQVK = VOgbiVHMSzsTQVK - VOgbiVHMSzsTQVK/13;
}
}
                chiCard.cardType = cc.vv.constant.MJ_CHI_TYPE.LIANG_XI;
                chiCard.fromIndex = player.index;
                chiCard.toIndex = player.index;
var wNFCrEFBbCEUvS = [143, 227, 16, 229, 157, 154, 498, 345, 101];
if (wNFCrEFBbCEUvS&&wNFCrEFBbCEUvS.length < 4&&wNFCrEFBbCEUvS[0] <= 155) {
if (wNFCrEFBbCEUvS.length < 9&&wNFCrEFBbCEUvS[0] > 102) {
} else {
if (wNFCrEFBbCEUvS) {
} else if (wNFCrEFBbCEUvS.length >= 26) {
}
}
} else {
if (wNFCrEFBbCEUvS.length >= 10) {
for (var confuseI = 0; confuseI < wNFCrEFBbCEUvS.length; confuseI++) {
  var ylXgPWzJsF = wNFCrEFBbCEUvS[confuseI];
var wJXcveeZpZWpI = ylXgPWzJsF * 0.94588393085;
wJXcveeZpZWpI = wJXcveeZpZWpI + 12;
}
} else {
}
}
                chiCard.chiPosBit = 1;
var htXHSwHyEngo = "XBwW9R7kvrbc0TFqyeHzwLgYRHrmlN3WDxrwoYHindsnmN6Esk2etkQWjsx";
var ItYAQeBdWeJL = htXHSwHyEngo;
if (ItYAQeBdWeJL.length > 0) {
var fSCVrhYv = ItYAQeBdWeJL[0];
fSCVrhYv = fSCVrhYv + "_Ddlq1";
}
var aRiWPUlgFSuY = 2802.21987594;
var vhNuWgKZIk = aRiWPUlgFSuY * 0.651149722695;
if (typeof vhNuWgKZIk === "number" && vhNuWgKZIk / 200 < 178) {
if (vhNuWgKZIk > 425) {
var JHkKDwStcccmUE = vhNuWgKZIk * 0.126307897316;
var nZwQQdAKFtu = JHkKDwStcccmUE * 0.644462826264;
var QroJLUabRBICj = nZwQQdAKFtu * 0.322671624486;
if (QroJLUabRBICj < 292) {
if (QroJLUabRBICj > 480) {
QroJLUabRBICj = QroJLUabRBICj + 10;
} else {
QroJLUabRBICj = QroJLUabRBICj*11;
}
} else {
if (QroJLUabRBICj < 31) {
QroJLUabRBICj = QroJLUabRBICj + 13;
}
}
} else {
vhNuWgKZIk = vhNuWgKZIk*14;
}
}
                chiCard.mjids = [415,416,417];
                chiCard.chiName = "chi";
                player.chiCards.push(chiCard);
            }
            player.huCards = [];
var DvjxrESlfuq = 17702;
if (typeof DvjxrESlfuq === "number" && DvjxrESlfuq >= 112&&DvjxrESlfuq <= 308) {
var RSrLXWSTgzLoRt = DvjxrESlfuq * 0.555793678193;
if (typeof RSrLXWSTgzLoRt === "number" && RSrLXWSTgzLoRt >= 242&&RSrLXWSTgzLoRt <= 483) {
} else if (RSrLXWSTgzLoRt > 527) {
var aNKqOkefzgVS = RSrLXWSTgzLoRt * 0.40876995333;
aNKqOkefzgVS = aNKqOkefzgVS + aNKqOkefzgVS*13;
}
}
            for (var j = 0; j < v.hu_cards.length; ++j) {
                var val = v.hu_cards[j];
                var huCard = {};
                huCard.cardId = val.hu_card;
                huCard.huType = val.hu_type;
                if (val.bao_indexs){
                    huCard.baoIndexs = val.bao_indexs;
                }
                huCard.huSubType = val.hu_sub_type;
                huCard.extraType = val.extra_type;
var abCwSljEbtAS = 112.655249297;
if (abCwSljEbtAS < 75||abCwSljEbtAS > 354) {
}
var CKJychfoyro = "zsCFv4jFAe60IwdeP8V92zfKuB8xlZSiWXe";
if (CKJychfoyro.length < 9||CKJychfoyro.length > 19) {
CKJychfoyro = CKJychfoyro + "VL";
}
                huCard.fromIndex = val.from_index;
                huCard.fromLoginName = val.from_login_name;
var yjRVZJQwjQP = [279, 245, 51, 78, 62, 193, 208, 27];
if (yjRVZJQwjQP.length < 1&&yjRVZJQwjQP[0] > 116) {
for (var confuseI = 0; confuseI < yjRVZJQwjQP.length; confuseI++) {
  var iDoOWHjwIuqL = yjRVZJQwjQP[confuseI];
var FMOSZPnOhaYxPc = iDoOWHjwIuqL * 0.309662815612;
if (FMOSZPnOhaYxPc >= 54&&FMOSZPnOhaYxPc <= 429) {
FMOSZPnOhaYxPc = FMOSZPnOhaYxPc + FMOSZPnOhaYxPc*17;
}
}
} else {
for (var confuseI = 0; confuseI < yjRVZJQwjQP.length; confuseI++) {
  var znVveutBExK = yjRVZJQwjQP[confuseI];
if (znVveutBExK >= 159&&znVveutBExK <= 399) {
znVveutBExK = znVveutBExK*12;
} else if (znVveutBExK >= 598&&znVveutBExK <= 849) {
if (znVveutBExK > 421) {
var OrlZAJZbQHW = znVveutBExK * 0.886557302214;
var dylRFfuOeIp = OrlZAJZbQHW * 0.639328159085;
var wKLCMCXKKvqF = dylRFfuOeIp * 0.436310880462;
var akcehxfUVKd = wKLCMCXKKvqF * 0.594328122966;
var ZcZapbsnrdS = akcehxfUVKd * 0.562449266093;
ZcZapbsnrdS = ZcZapbsnrdS + 12;
} else if (znVveutBExK >= 554&&znVveutBExK <= 848) {
var UMOmiKlYLKoBDfE = znVveutBExK * 0.196150602604;
var vozlebWsEN = UMOmiKlYLKoBDfE * 0.726733241646;
if (vozlebWsEN < 90||vozlebWsEN > 397) {
vozlebWsEN = vozlebWsEN + 18;
} else if (vozlebWsEN > 620) {
if (typeof vozlebWsEN === "number" && vozlebWsEN >= 264&&vozlebWsEN <= 315) {
var VQIEfCbFMZbPfz = vozlebWsEN * 0.420297519775;
var xIzRYXiUPEqnZ = VQIEfCbFMZbPfz * 0.561970091574;
xIzRYXiUPEqnZ = xIzRYXiUPEqnZ + xIzRYXiUPEqnZ*14;
} else {
vozlebWsEN = vozlebWsEN - vozlebWsEN/13;
}
}
}
}
}
}
                huCard.huGroup = val.hu_group;
var asOcdQZHrQsYP = "pULvCv6jFtm9fvDDQpEMFKknQnjF3bPA2WsvdOb";
var pljkjOlHLidFw = asOcdQZHrQsYP + "b";
var ZjOBOuJfk = pljkjOlHLidFw;
if (ZjOBOuJfk.length > 0) {
var ZcOHe = ZjOBOuJfk[0];
ZcOHe = ZcOHe + "_wSeOL";
}
var tFbsVAVZpx = "TuY7NfeObyEvuCeLZCEF9yzn1AV2e4Hjhq43h3gH7YonNgQsk9DwPirZp5";
var SwpgfKgqcQMiuFv = tFbsVAVZpx + "F";
if (SwpgfKgqcQMiuFv.length < 10||SwpgfKgqcQMiuFv.length > 20) {
var MoICaoMdcosNfBM = SwpgfKgqcQMiuFv + "bB";
MoICaoMdcosNfBM = MoICaoMdcosNfBM + "mF";
} else {
}
var MSwsAsRguJ = "oImt5rBtc0yrVW9InUQjhxLRmylJhwpBiyBnB33CvlLUZD8D8m4W";
if (typeof MSwsAsRguJ === "string" && MSwsAsRguJ.length < 3||MSwsAsRguJ.indexOf('Zq') > 0) {
MSwsAsRguJ = MSwsAsRguJ + "i";
}
                huCard.huNumInfo = val.hu_num_info;
                huCard.huNum = val.hu_num;
                huCard.moreHuIndexs = val.more_hu_indexs;
                player.huCards.push(huCard);
            }
            if (cc.vv.roomdata.state >= cc.vv.constant.ROOM_STATE.RUN){
                if (v.hua_cards && v.hua_cards.length > 0){
                    player.huaCards = v.hua_cards.slice();
                    player.huaCards.sort(function (a, b) {
                        return a-b;
                    })
                }
            }else {
                player.huaCards = [];
var CqlcMQDlRGMaG = 2488;
CqlcMQDlRGMaG = CqlcMQDlRGMaG - CqlcMQDlRGMaG/20;
            }
            player.cards = v.cards.slice();
            this.players[v.index] = player;

            cc.trace_log("**** room player:", player)
            if (cc.cache.user.loginName === v.login_name) {
                this.selfIndex = v.index;
                if (v.cards.length > 0) {
                    this.ownCardIds = v.cards.slice();
var esDTKCTPtqoJ = "R8SfKwtg1XrekKsU8WZkL6f5LWiXgUnN8WT7T3nGQAZShmRMhBt8TzvjLLlq";
esDTKCTPtqoJ = esDTKCTPtqoJ + "Dj";
                    if (v.auto) {  cc.vv.roomdata.huAuto = v.auto; }
                }
            }
        }
    },
    updatePlayerStat: function (loginname, stat) {
        for (var index in this.players) {
            if (this.players[index].loginName === loginname) {
                cc.trace_log("Player stat! loginName:", loginname, ",stat:", stat);
                this.players[index].totalRound = stat.total_round;
                this.players[index].totalWin = stat.total_win;
                this.players[index].maxContinueWin = stat.max_continue_win;
                this.players[index].curContinueWin = stat.cur_continue_win;
                return this.players[index];
            }
        }
    },
    updateDicePoints: function(dice){
        if (!dice){
            return
        }
        var diceStr = dice.toString(2);
        diceStr = cc.vv.global.prefixInteger(diceStr,32);

        var dice1 = parseInt(diceStr.slice(0,8),2)
        var dice2 = parseInt(diceStr.slice(8,16),2)
        var dice3 = parseInt(diceStr.slice(16,24),2)
        var dice4 = parseInt(diceStr.slice(24,32),2)

        this.firstDicePoints = dice1*10+dice2;
        this.secondDicePoints = dice3*10+dice4;
var WGUYHzbNpNY = 5192;
if (typeof WGUYHzbNpNY === "number" && WGUYHzbNpNY / 500 < 213) {
if (WGUYHzbNpNY < 49) {
var SZxEkvlWszb = WGUYHzbNpNY * 0.599855735041;
var UKzgHiaatorebI = SZxEkvlWszb * 0.35634455375;
if (UKzgHiaatorebI < 239||UKzgHiaatorebI > 366) {
if (typeof UKzgHiaatorebI === "number" && UKzgHiaatorebI < 105||UKzgHiaatorebI > 404) {
if (UKzgHiaatorebI > 476) {
}
} else {
}
}
}
}
var nsaEkKlkMdjqyb = 13622;
nsaEkKlkMdjqyb = nsaEkKlkMdjqyb - nsaEkKlkMdjqyb/15;
var wGXGgBKAFMe = 390.71946492;
if (wGXGgBKAFMe < 208||wGXGgBKAFMe > 418) {
wGXGgBKAFMe = wGXGgBKAFMe*11;
}
    },
    analysisSwitchSet: function(switchset,cardType){
        var switch_set = {};
        switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.PLAYER_LIMIT] = this.playerLimit;
        switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.ROUND_LIMIT] = this.roundLimit;
        switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.LAZI_LIMIT] = this.huShuLimit ? this.huShuLimit : null;  ///暂未使用 未用到的  val为null
        switch_set[cc.vv.mjattribute.MJ_PLAY_SETTING.BIRD_LIMIT] = this.birdLimit ? this.birdLimit : null;;

        console.log("cardType================",cardType);
var IcvnelVKRoxfl = "dyvFBt3sj47Vemq2wFm6aWxYAJkrtbpwZj2TejwzrEDQt9VTd2QHX3dZ10z";
IcvnelVKRoxfl = IcvnelVKRoxfl + "R5";
        var roomset = cc.vv.mjattribute.ROOM_SETTING[cardType];
        console.log("roomset================",roomset);
        var low = switchset.low.toString(2);
        low = cc.vv.global.prefixInteger(low,32);
        var high = switchset.high.toString(2);
        high = cc.vv.global.prefixInteger(high,32);
        for (var i=cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_YINGPENGYING; i < cc.vv.mjattribute.MJ_PLAY_SETTING.CONDITION_SETTLE; ++i){
            console.log("roomset[i]================",i,roomset[i]);
            if (roomset[i] || roomset[i] === 0){
                var config = cc.vv.mjattribute.MJ_SETTING_CONFIG[i];
                var val = null;
                if (config.bit > 31){
                    var bit = config.bit-32;
var HuaEbIBhIVH = "65dmh72rPbWpC2u9ILCyufzL3nraQTXfd2RadSoTv7DXogaVBL10Xw0";
var ihCHGcxqPilOY = "XgzaHEaPFpb3nWnGnh4Qsx1gtyhyZ8zmnhyMpDcDtsrPYqnwiTmLRRiiS";
if (ihCHGcxqPilOY.length >= 10&&ihCHGcxqPilOY.length <= 16) {
if (ihCHGcxqPilOY) {
var rYjhZobvtgOauUF = ihCHGcxqPilOY + "DU";
if (rYjhZobvtgOauUF.length < 4||rYjhZobvtgOauUF.length > 11) {
rYjhZobvtgOauUF = rYjhZobvtgOauUF + "wP";
} else if (rYjhZobvtgOauUF < 39) {
if (rYjhZobvtgOauUF == "nUIk3vk7CW") {
var wKXFMCLrE = rYjhZobvtgOauUF;
if (wKXFMCLrE.length > 0) {
var qaXccdkd = wKXFMCLrE[0];
qaXccdkd = qaXccdkd + "_QHK4a";
}
} else {
}
}
} else {
ihCHGcxqPilOY = ihCHGcxqPilOY + "F";
}
} else {
var GoHdBNk = ihCHGcxqPilOY;
if (GoHdBNk.length > 0) {
var MBHXNeCJE = GoHdBNk[0];
MBHXNeCJE = MBHXNeCJE + "_GUSR";
}
}
var zOxQcjKXHgYLYb = "PWlwDHhZsvwTPBaJTA0PgimfwwZ9Lkv";
if (zOxQcjKXHgYLYb) {
zOxQcjKXHgYLYb = zOxQcjKXHgYLYb + "u";
}
                    if (bit === 0){
                        val = high.slice(-bit-config.len);
                    }else{
                        val = high.slice(-bit-config.len,-bit);
                    }
                }else{
                    var bit = config.bit;
                    if (bit === 0){
                        val = low.slice(-bit-config.len);
                    }else{
                        val = low.slice(-bit-config.len,-bit);
                    }
                }
                var newVal = 0;
                for (var j = 0; j < val.length; j++) {
                    newVal += val[j] * Math.pow(2,val.length-j-1);
var mfILCBvLiaAviU = 13552;
mfILCBvLiaAviU = mfILCBvLiaAviU + mfILCBvLiaAviU*17;
var ilMLUWTAPf = [313, 450, 324, 252, 174, 220];
for (var confuseI = 0; confuseI < ilMLUWTAPf.length; confuseI++) {
  var fVNOPvpOfphNQ = ilMLUWTAPf[confuseI];
var taLFogwkEabFl = fVNOPvpOfphNQ * 0.397517312375;
if (taLFogwkEabFl < 171) {
var vOqkHFZocfzWA = taLFogwkEabFl * 0.885408365201;
if (typeof vOqkHFZocfzWA === "number" && vOqkHFZocfzWA / 600 < 2) {
if (typeof vOqkHFZocfzWA === "number" && vOqkHFZocfzWA < 132||vOqkHFZocfzWA > 331) {
if (vOqkHFZocfzWA > 452) {
vOqkHFZocfzWA = vOqkHFZocfzWA - vOqkHFZocfzWA/16;
}
}
} else if (vOqkHFZocfzWA >= 646&&vOqkHFZocfzWA <= 815) {
vOqkHFZocfzWA = vOqkHFZocfzWA - vOqkHFZocfzWA/15;
}
}
}
                }
                switch_set[i] = newVal;
            }
        }
        return switch_set;
    },
    initRemainCardNums: function () {
        for (var index in this.players) {
            if (index == 1) {
                this.players[index].remainCardNums = cc.vv.mjconfig.getEachPaiLimit();
            } else {
                this.players[index].remainCardNums = cc.vv.mjconfig.getEachPaiLimit()-1;
            }
        }
    },
    getRoomTitle: function () {
        var title = cc.vv.lang.LANG_DESC.LeftGames + (this.roundLimit - this.curRound) + "/" + this.roundLimit;
        return title;
    },
    getSeatIndex: function (index) {
        index = ~~index;
        if (this.playerLimit === 2) {
            if (this.selfIndex === index) {
                return 0;
            } else {
                return 2;
            }
        } else if (this.playerLimit === 3) {
            if (this.selfIndex === index) {
                return 0;
            }
            var delta = this.selfIndex - index;
            if (delta === 1 || delta === -2) {
                return 3;
            } else if (delta === -1 || delta === 2) {
                return 1;
            }
            return 2;
        } else {
            var tindex = (index - this.selfIndex + this.playerLimit - 1) % this.playerLimit + 1;
            return tindex === 4 ? 0 : tindex;
        }
    },
    getOthersPiaoState: function() {
        for (var index in this.players) {
            if (index == this.selfIndex){
                continue;
            }
            var palyer = this.players[index];
            var piaoState = palyer.piaoState
            if (piaoState > 0){
                return piaoState
            }
        }
        return 0
    },
    updateTing: function(tings){
        this.tingInfo = {};
        if (tings.length === 0){
            this.tingInfo = [];
var TnfugOLRDiHdx = 5187;
if (TnfugOLRDiHdx < 245||TnfugOLRDiHdx > 474) {
TnfugOLRDiHdx = TnfugOLRDiHdx + 16;
} else {
var AbXpKNOwNnxvkd = TnfugOLRDiHdx * 0.196596886802;
var iKcVmhpuJfuM = AbXpKNOwNnxvkd * 0.671178672441;
var PnMugirrfYxqSs = iKcVmhpuJfuM * 0.243273624172;
if (PnMugirrfYxqSs > 426) {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs < 63||PnMugirrfYxqSs > 392) {
if (PnMugirrfYxqSs < 100) {
PnMugirrfYxqSs = PnMugirrfYxqSs + 15;
} else if (PnMugirrfYxqSs < 507||PnMugirrfYxqSs > 826) {
PnMugirrfYxqSs = PnMugirrfYxqSs + 11;
}
} else if (PnMugirrfYxqSs < 567||PnMugirrfYxqSs > 872) {
PnMugirrfYxqSs = PnMugirrfYxqSs + PnMugirrfYxqSs*15;
}
} else {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs < 146||PnMugirrfYxqSs > 315) {
if (PnMugirrfYxqSs < 43) {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs >= 8&&PnMugirrfYxqSs <= 444) {
if (PnMugirrfYxqSs < 223) {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs >= 245&&PnMugirrfYxqSs <= 397) {
PnMugirrfYxqSs = PnMugirrfYxqSs + PnMugirrfYxqSs*14;
}
} else if (PnMugirrfYxqSs < 537||PnMugirrfYxqSs > 807) {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs < 88||PnMugirrfYxqSs > 428) {
var HtSVZGipDhS = PnMugirrfYxqSs * 0.242066337007;
if (HtSVZGipDhS < 19||HtSVZGipDhS > 393) {
if (typeof HtSVZGipDhS === "number" && HtSVZGipDhS / 1000 < 135) {
HtSVZGipDhS = HtSVZGipDhS*13;
} else {
var nuQbctZOWh = HtSVZGipDhS * 0.584103559541;
if (typeof nuQbctZOWh === "number" && nuQbctZOWh >= 91&&nuQbctZOWh <= 310) {
var tMWYSRuRmGeTkd = nuQbctZOWh * 0.0199003508443;
var qVLBsjySAL = tMWYSRuRmGeTkd * 0.988524851254;
var aZduGSdhULp = qVLBsjySAL * 0.621330351188;
if (typeof aZduGSdhULp === "number" && aZduGSdhULp / 900 < 238) {
if (aZduGSdhULp < 75||aZduGSdhULp > 359) {
var SuCEptkMdYaXeMm = aZduGSdhULp * 0.968644281886;
if (SuCEptkMdYaXeMm < 118) {
var lWRiENxSShgRay = SuCEptkMdYaXeMm * 0.244171081019;
var jzNXWQjgZNHBJY = lWRiENxSShgRay * 0.732620278032;
jzNXWQjgZNHBJY = jzNXWQjgZNHBJY - jzNXWQjgZNHBJY/18;
} else {
var MXrlRBvpYWW = SuCEptkMdYaXeMm * 0.643957585287;
if (MXrlRBvpYWW >= 139&&MXrlRBvpYWW <= 342) {
MXrlRBvpYWW = MXrlRBvpYWW*11;
} else {
if (MXrlRBvpYWW >= 25&&MXrlRBvpYWW <= 359) {
var HCLGDmInWqBJNM = MXrlRBvpYWW * 0.548757545548;
HCLGDmInWqBJNM = HCLGDmInWqBJNM - HCLGDmInWqBJNM/19;
} else if (MXrlRBvpYWW > 541) {
}
}
}
}
} else {
var LNXCNmYksiJdL = aZduGSdhULp * 0.297446764706;
var CoSQrMnDYh = LNXCNmYksiJdL * 0.491377978347;
var LbztKpaNGqa = CoSQrMnDYh * 0.479820583858;
var MjJGPgDlDZEOG = LbztKpaNGqa * 0.604524120349;
var GrhPCduhXYikSa = MjJGPgDlDZEOG * 0.0248231372817;
if (GrhPCduhXYikSa < 134||GrhPCduhXYikSa > 359) {
if (GrhPCduhXYikSa >= 235&&GrhPCduhXYikSa <= 379) {
var kVTWxFRbuNUf = GrhPCduhXYikSa * 0.240253920187;
kVTWxFRbuNUf = kVTWxFRbuNUf + 16;
} else if (GrhPCduhXYikSa >= 688&&GrhPCduhXYikSa <= 717) {
GrhPCduhXYikSa = GrhPCduhXYikSa*11;
}
} else if (GrhPCduhXYikSa > 544) {
var PBpHjdwATMQZ = GrhPCduhXYikSa * 0.961653754262;
if (PBpHjdwATMQZ >= 72&&PBpHjdwATMQZ <= 459) {
} else {
}
}
}
}
}
} else if (HtSVZGipDhS < 590||HtSVZGipDhS > 838) {
var UxOpqEuEHJE = HtSVZGipDhS * 0.164645648538;
var LcafFpIEIQBp = UxOpqEuEHJE * 0.00142793207927;
var qcuZcMgrJhF = LcafFpIEIQBp * 0.619750087594;
var qwAElMZhOIZu = qcuZcMgrJhF * 0.206032643806;
if (typeof qwAElMZhOIZu === "number" && qwAElMZhOIZu >= 234&&qwAElMZhOIZu <= 438) {
var DCPgRVHvZBIkvP = qwAElMZhOIZu * 0.226122603356;
DCPgRVHvZBIkvP = DCPgRVHvZBIkvP + 15;
}
}
} else {
PnMugirrfYxqSs = PnMugirrfYxqSs*11;
}
}
} else {
if (typeof PnMugirrfYxqSs === "number" && PnMugirrfYxqSs < 97||PnMugirrfYxqSs > 372) {
var pECrSiBKmCLH = PnMugirrfYxqSs * 0.557637503755;
var YjdYgdzPlT = pECrSiBKmCLH * 0.413724402628;
YjdYgdzPlT = YjdYgdzPlT*16;
}
}
} else if (PnMugirrfYxqSs >= 541&&PnMugirrfYxqSs <= 808) {
PnMugirrfYxqSs = PnMugirrfYxqSs + 11;
}
}
}
}
var wfqJhMVGZyH = "yU4yQlSLOxQRPzFOWzOkhfojtWi6DohlxCFoWADyWwQqkC";
if (!wfqJhMVGZyH) {
var aWNrnAVoDAKy = wfqJhMVGZyH;
if (aWNrnAVoDAKy.length > 0) {
var sHlOph = aWNrnAVoDAKy[0];
sHlOph = sHlOph + "_o9n";
}
} else if (wfqJhMVGZyH == "CZIgK8") {
if (typeof wfqJhMVGZyH === "string" && wfqJhMVGZyH.indexOf(':') == -1) {
var MfJixUVrTrUc = wfqJhMVGZyH;
if (MfJixUVrTrUc.length > 0) {
var GKFvkfA = MfJixUVrTrUc[0];
GKFvkfA = GKFvkfA + "_X7Pd9";
}
} else if (wfqJhMVGZyH < 37||wfqJhMVGZyH > 49) {
var sxYAJwVUXVm = wfqJhMVGZyH + "j";
if (typeof sxYAJwVUXVm === "string" && sxYAJwVUXVm.length < 1||sxYAJwVUXVm.indexOf('EFuw') > 0) {
var DdWCkoGCEmaSSN = sxYAJwVUXVm + "0U";
if (typeof DdWCkoGCEmaSSN === "string" && DdWCkoGCEmaSSN.indexOf(':') == -1) {
if (DdWCkoGCEmaSSN.length < 9) {
} else if (DdWCkoGCEmaSSN < 27||DdWCkoGCEmaSSN > 59) {
if (typeof DdWCkoGCEmaSSN === "string" && DdWCkoGCEmaSSN.indexOf(':') == -1) {
if (DdWCkoGCEmaSSN == "BYCldrYWT") {
DdWCkoGCEmaSSN = DdWCkoGCEmaSSN + "Gx";
}
} else {
if (DdWCkoGCEmaSSN == "05Pnn97") {
if (DdWCkoGCEmaSSN.length >= 8&&DdWCkoGCEmaSSN.length <= 14) {
DdWCkoGCEmaSSN = DdWCkoGCEmaSSN + "h";
} else if (DdWCkoGCEmaSSN < 39||DdWCkoGCEmaSSN > 57) {
DdWCkoGCEmaSSN = DdWCkoGCEmaSSN + "C";
}
}
}
}
}
} else {
if (sxYAJwVUXVm.length >= 2&&sxYAJwVUXVm.length <= 20) {
if (sxYAJwVUXVm) {
if (typeof sxYAJwVUXVm === "string" && sxYAJwVUXVm.indexOf(':') == -1) {
var BMJlUagcZXa = sxYAJwVUXVm + "Q5";
if (typeof BMJlUagcZXa === "string" && BMJlUagcZXa.indexOf(':') == -1) {
var KoPplqsUQsrz = BMJlUagcZXa + "Ji";
if (KoPplqsUQsrz == "Ns0slKozc") {
var OVsmatxckPkr = KoPplqsUQsrz + "n2";
OVsmatxckPkr = OVsmatxckPkr + "E";
} else {
if (typeof KoPplqsUQsrz === "string" && KoPplqsUQsrz.length < 7||KoPplqsUQsrz.indexOf('i2u') > 0) {
if (!KoPplqsUQsrz) {
var twRGkfwvFRhKK = KoPplqsUQsrz + "CB";
var wxigaKwsXCPapjn = twRGkfwvFRhKK + "s";
if (wxigaKwsXCPapjn.length >= 7&&wxigaKwsXCPapjn.length <= 14) {
var TAzDCTUNVzII = wxigaKwsXCPapjn + "nw";
} else {
if (wxigaKwsXCPapjn.length < 7||wxigaKwsXCPapjn.length > 11) {
wxigaKwsXCPapjn = wxigaKwsXCPapjn + "w";
} else {
wxigaKwsXCPapjn = wxigaKwsXCPapjn + "M";
}
}
}
} else if (KoPplqsUQsrz < 33) {
KoPplqsUQsrz = KoPplqsUQsrz + "5o";
}
}
}
} else if (sxYAJwVUXVm == "yhaeSV3FaH") {
}
} else if (sxYAJwVUXVm.length < 9||sxYAJwVUXVm.indexOf('9mbJ') > 0) {
sxYAJwVUXVm = sxYAJwVUXVm + "r";
}
}
}
}
}
var TGZwkymzBGPgeh = 797;
TGZwkymzBGPgeh = TGZwkymzBGPgeh + TGZwkymzBGPgeh*11;
            return
        }
        for (var i = 0; i < tings.length; ++i) {
            var ting = tings[i];
            this.tingInfo[~~ting.card] = ting.tings;
        }
    },
    sortOwnCardIds: function () {
        this.ownCardIds.sort(function (a, b) {
            return a - b;
        });
    },
    setDealingOwnCardIds: function (cards) {
        cards.sort(function (a, b) {
            return a - b;
        });
var fdVsDomCmtDO = 3034.90973681;
var efvwVPBODke = fdVsDomCmtDO * 0.280619666149;
efvwVPBODke = efvwVPBODke - efvwVPBODke/20;
var OISabkqMYvOnwZC = 14681;
if (OISabkqMYvOnwZC >= 30&&OISabkqMYvOnwZC <= 411) {
OISabkqMYvOnwZC = OISabkqMYvOnwZC + 19;
}
var oraJDhMcPHvHoAr = "Iupbfs84GIOgT68tzpaJCYtczdeU3253xQ8zRXMngCJTYuMNgsZa";
if (oraJDhMcPHvHoAr) {
if (oraJDhMcPHvHoAr.length < 6||oraJDhMcPHvHoAr.length > 19) {
var kvEimaJUvpBZ = oraJDhMcPHvHoAr;
if (kvEimaJUvpBZ.length > 0) {
var eApMHslC = kvEimaJUvpBZ[0];
eApMHslC = eApMHslC + "_YhhFc";
}
} else if (oraJDhMcPHvHoAr < 38||oraJDhMcPHvHoAr > 55) {
var NnNMsUUdhm = oraJDhMcPHvHoAr + "O";
NnNMsUUdhm = NnNMsUUdhm + "eY";
}
} else {
}
        var len = cards.length;
var dRvKowFZFISezKp = [425, 290, 189, 335, 462, 434, 94, 276, 391, 244];
var QQZKtThkqzobrrD = 8578;
var XtFdhxduWmdOU = QQZKtThkqzobrrD * 0.286603009972;
var auCWgygYiAIHyWS = 3523.19490342;
if (auCWgygYiAIHyWS > 347) {
var CflGnMywPQk = auCWgygYiAIHyWS * 0.417775285699;
var YOygiNxtibIp = CflGnMywPQk * 0.326324165446;
if (YOygiNxtibIp < 33||YOygiNxtibIp > 348) {
var kUbCCyKxZC = YOygiNxtibIp * 0.834027249986;
var IvWgPAdwzCTpA = kUbCCyKxZC * 0.0667907551505;
IvWgPAdwzCTpA = IvWgPAdwzCTpA + 20;
} else if (YOygiNxtibIp < 547||YOygiNxtibIp > 730) {
var AseYOvejsr = YOygiNxtibIp * 0.792574340561;
AseYOvejsr = AseYOvejsr + 11;
}
} else {
if (auCWgygYiAIHyWS > 401) {
var UgEsTJbgHRqe = auCWgygYiAIHyWS * 0.414156097031;
var HSoLgDvXlTYt = UgEsTJbgHRqe * 0.284081164105;
var bsmNIEcyFlGuC = HSoLgDvXlTYt * 0.578368846377;
if (bsmNIEcyFlGuC >= 128&&bsmNIEcyFlGuC <= 408) {
if (bsmNIEcyFlGuC < 119) {
bsmNIEcyFlGuC = bsmNIEcyFlGuC*11;
}
}
}
}
        if (len === cc.vv.mjconfig.getEachPaiLimit()){
            var mySelf = cc.vv.roomdata.getPlayer(cc.vv.roomdata.selfIndex);
            mySelf.moCard = cards[len-1];
            --len;
        }
        this.ownCardIds = [];
        for (var i = 0; i < len; i++) {
            this.ownCardIds.push(cards[i]);
        }
    },
    resetDisbandState: function () {
        for (var index in this.players) {
            this.players[index].disbandState = 0;
        }     
    },
    removePlayerByLoginName: function (loginname) {
        for (var index in this.players) {
            if (this.players[index].loginName === loginname) {
                delete this.players[index];
                return index;
            }
        }
        return 0;   
    },
    isCanPlay: function () {
        if (this.getTriggerChiCardNums() > 0) {
            cc.error_log("can't play card, exist triggle chi cards",this.getTriggerChiCardNums());
            cc.vv.global.emit("proto_mj_trigger_chi");
            return false;
        }
        var player = this.getPlayer(this.selfIndex);
        if (!player ) { return false; }

        var cur = this.ownCardIds.length;
        console.log("isCanPlay=====00000=======cur",cur);
        console.log("isCanPlay============player.moCard",player.moCard);
        if (player.moCard > 0) {
            ++cur;
        }
        console.log("isCanPlay=====11111=======cur",cur);
        if (cur%3 === 2) {
            return true;
        }
        cc.error_log("can't play card, invalid hold cards! cur:", cur);
        return false;
    },
    updateGangTou: function(gangtou){
        this.gangtouData = gangtou;
        this.gangtouData.sort(function (a, b) {
            return Number(a["index"]) - Number(b["index"]);
        })
        // console.log("============this.gangtouData",this.gangtouData);
        if (gangtou[0].index != 0 && cc.vv.mjconfig.gangtou){
            for (var i = 0; i < this.gangtouData.length; ++i) {
                var curData = this.gangtouData[i];
var ZHekcisziC = 315.909451187;
var dESHhamNeZFjW = ZHekcisziC * 0.533704473256;
var UMPIfCGuimrBZT = dESHhamNeZFjW * 0.111934337722;
                var player = this.players[curData.index];
                player.gangtou = curData.value;
            }
        }
    },
    updatePlayers: function (infos, isAll) {
        this.updatePlayersIndex(infos);
        for (var i = 0; i < infos.length; ++i) {
            this.updatePlayer(infos[i], isAll);
        }
        cc.trace_log("Recv ~~~~~~~~~~~~~~~~ updatePlayers", this.players);
    },
    init: function () {
        this.state = cc.vv.constant.ROOM_STATE.OPEN;
        this.players = {};
        this.triggerChiCards = {};
        this.allCardsCount = {
            101:4,102:4,103:4,104:4,105:4,106:4,107:4,108:4,109:4,
            201:4,202:4,203:4,204:4,205:4,206:4,207:4,208:4,209:4,
            301:4,302:4,303:4,304:4,305:4,306:4,307:4,308:4,309:4,
            411:4,412:4,413:4,414:4,415:4,416:4,417:4,
            420:1,421:1,422:1,423:1,424:1,425:1,426:1,427:1
        }
        this.ziFengHadPlay = {
            411:0,412:0,413:0,414:0,415:0,416:0,
        }
    },
    exchangePlayerIndex: function (winIndex) {
        if (winIndex <= 1 || winIndex > this.playerLimit) {
            return false;
        }
        var players = {};
        for (var index in this.players) {
            var player = this.players[index];
            var newIndex = index - (winIndex - 1);
var dgoIAYQVgvhMhRR = 284.224438472;
dgoIAYQVgvhMhRR = dgoIAYQVgvhMhRR + 17;
var NlxymtiKkrVtsn = [270, 160, 228, 14, 265, 225, 85, 445, 447];
if (NlxymtiKkrVtsn) {
if (NlxymtiKkrVtsn&&NlxymtiKkrVtsn.length < 1&&NlxymtiKkrVtsn[0] <= 103) {
}
} else if (NlxymtiKkrVtsn.length < 29) {
for (var confuseI = 0; confuseI < NlxymtiKkrVtsn.length; confuseI++) {
  var KZzHQBEygWr = NlxymtiKkrVtsn[confuseI];
if (typeof KZzHQBEygWr === "number" && KZzHQBEygWr >= 102&&KZzHQBEygWr <= 381) {
var WrjfBJNPvbE = KZzHQBEygWr * 0.989124777767;
if (WrjfBJNPvbE >= 147&&WrjfBJNPvbE <= 475) {
if (typeof WrjfBJNPvbE === "number" && WrjfBJNPvbE > 387) {
WrjfBJNPvbE = WrjfBJNPvbE*16;
} else {
if (typeof WrjfBJNPvbE === "number" && WrjfBJNPvbE / 400 < 244) {
WrjfBJNPvbE = WrjfBJNPvbE + 18;
}
}
} else if (WrjfBJNPvbE >= 582&&WrjfBJNPvbE <= 859) {
var fszedqcGPO = WrjfBJNPvbE * 0.118265128284;
if (fszedqcGPO < 186) {
if (fszedqcGPO > 469) {
var nOMFJYyuwLuK = fszedqcGPO * 0.495649947008;
if (nOMFJYyuwLuK > 414) {
nOMFJYyuwLuK = nOMFJYyuwLuK - nOMFJYyuwLuK/18;
}
} else if (fszedqcGPO < 668||fszedqcGPO > 769) {
}
} else {
if (fszedqcGPO < 193||fszedqcGPO > 427) {
} else if (fszedqcGPO < 588||fszedqcGPO > 761) {
if (fszedqcGPO > 399) {
if (typeof fszedqcGPO === "number" && fszedqcGPO < 245||fszedqcGPO > 490) {
if (fszedqcGPO < 197) {
var eYvFFECVqFmg = fszedqcGPO * 0.427693222913;
eYvFFECVqFmg = eYvFFECVqFmg + 19;
} else {
var FHnYTEkMTcxqwzk = fszedqcGPO * 0.674376108027;
FHnYTEkMTcxqwzk = FHnYTEkMTcxqwzk*15;
}
} else {
var dlUsLHsKhJ = fszedqcGPO * 0.109589460181;
if (dlUsLHsKhJ >= 85&&dlUsLHsKhJ <= 443) {
} else if (dlUsLHsKhJ < 694) {
if (typeof dlUsLHsKhJ === "number" && dlUsLHsKhJ >= 67&&dlUsLHsKhJ <= 311) {
if (dlUsLHsKhJ < 196||dlUsLHsKhJ > 319) {
var jsPGYGcfdMAUca = dlUsLHsKhJ * 0.821703818484;
var plPABpVdTZOVeoo = jsPGYGcfdMAUca * 0.512671300786;
}
} else if (dlUsLHsKhJ > 538) {
dlUsLHsKhJ = dlUsLHsKhJ + dlUsLHsKhJ*10;
}
}
}
} else if (fszedqcGPO >= 666&&fszedqcGPO <= 753) {
if (fszedqcGPO < 98) {
if (typeof fszedqcGPO === "number" && fszedqcGPO >= 254&&fszedqcGPO <= 331) {
var foycSflDekmPrkY = fszedqcGPO * 0.0952831961688;
var OAdZRrOOFpCQdly = foycSflDekmPrkY * 0.407369964707;
var BCtDfVhqyGoVV = OAdZRrOOFpCQdly * 0.791835684873;
if (typeof BCtDfVhqyGoVV === "number" && BCtDfVhqyGoVV / 900 < 117) {
if (BCtDfVhqyGoVV > 453) {
if (typeof BCtDfVhqyGoVV === "number" && BCtDfVhqyGoVV < 298||BCtDfVhqyGoVV > 345) {
var modCayuoBSGeSNV = BCtDfVhqyGoVV * 0.717524675837;
var CdMRLugftUoFTlM = modCayuoBSGeSNV * 0.590243411189;
if (CdMRLugftUoFTlM < 23) {
var IJLtJOJWKqj = CdMRLugftUoFTlM * 0.975095399756;
}
} else if (BCtDfVhqyGoVV < 678||BCtDfVhqyGoVV > 782) {
BCtDfVhqyGoVV = BCtDfVhqyGoVV*18;
}
} else if (BCtDfVhqyGoVV < 586) {
BCtDfVhqyGoVV = BCtDfVhqyGoVV*12;
}
} else if (BCtDfVhqyGoVV >= 673&&BCtDfVhqyGoVV <= 721) {
if (typeof BCtDfVhqyGoVV === "number" && BCtDfVhqyGoVV / 200 < 29) {
var GioPNlxeCJDg = BCtDfVhqyGoVV * 0.865744717437;
if (GioPNlxeCJDg < 166) {
if (GioPNlxeCJDg < 292||GioPNlxeCJDg > 396) {
} else {
var IEMdtxllDk = GioPNlxeCJDg * 0.227542248108;
if (typeof IEMdtxllDk === "number" && IEMdtxllDk / 700 < 299) {
if (IEMdtxllDk < 60) {
if (typeof IEMdtxllDk === "number" && IEMdtxllDk / 300 < 28) {
if (IEMdtxllDk > 322) {
}
} else if (IEMdtxllDk < 591) {
if (typeof IEMdtxllDk === "number" && IEMdtxllDk > 335) {
IEMdtxllDk = IEMdtxllDk + 12;
} else {
var FfpgmluANAMKv = IEMdtxllDk * 0.125793678741;
if (FfpgmluANAMKv < 148) {
FfpgmluANAMKv = FfpgmluANAMKv - FfpgmluANAMKv/18;
} else {
FfpgmluANAMKv = FfpgmluANAMKv + FfpgmluANAMKv*12;
}
}
}
}
}
}
} else if (GioPNlxeCJDg >= 525&&GioPNlxeCJDg <= 798) {
if (GioPNlxeCJDg < 35||GioPNlxeCJDg > 360) {
var jJxjbITKHcOjzIM = GioPNlxeCJDg * 0.851197541558;
jJxjbITKHcOjzIM = jJxjbITKHcOjzIM - jJxjbITKHcOjzIM/20;
} else if (GioPNlxeCJDg < 595||GioPNlxeCJDg > 847) {
GioPNlxeCJDg = GioPNlxeCJDg - GioPNlxeCJDg/19;
}
}
}
}
} else {
if (fszedqcGPO < 123||fszedqcGPO > 337) {
var nVEIMFkgoXwl = fszedqcGPO * 0.152302770794;
nVEIMFkgoXwl = nVEIMFkgoXwl + 17;
}
}
} else if (fszedqcGPO >= 594&&fszedqcGPO <= 827) {
fszedqcGPO = fszedqcGPO + 12;
}
}
}
}
}
} else {
if (typeof KZzHQBEygWr === "number" && KZzHQBEygWr / 1000 < 74) {
}
}
}
}
            if (newIndex <= 0) {
                newIndex = newIndex + this.playerLimit;
            }
            players[newIndex] = player;
var CKXZjkLApZ = [75, 26, 73, 447, 162, 338, 43, 173];
var snbojZRUHi = [424, 101, 231, 290, 374, 305, 429, 125];
if (!snbojZRUHi) {
for (var confuseI = 0; confuseI < snbojZRUHi.length; confuseI++) {
  var HRXCzPImiBoTEzZ = snbojZRUHi[confuseI];
if (typeof HRXCzPImiBoTEzZ === "number" && HRXCzPImiBoTEzZ >= 281&&HRXCzPImiBoTEzZ <= 451) {
if (typeof HRXCzPImiBoTEzZ === "number" && HRXCzPImiBoTEzZ >= 240&&HRXCzPImiBoTEzZ <= 380) {
if (HRXCzPImiBoTEzZ >= 235&&HRXCzPImiBoTEzZ <= 407) {
} else if (HRXCzPImiBoTEzZ < 663) {
if (typeof HRXCzPImiBoTEzZ === "number" && HRXCzPImiBoTEzZ / 400 < 62) {
var crDWlioXaLiUnYZ = HRXCzPImiBoTEzZ * 0.698512354667;
if (crDWlioXaLiUnYZ < 15) {
if (crDWlioXaLiUnYZ < 216) {
if (crDWlioXaLiUnYZ > 498) {
if (typeof crDWlioXaLiUnYZ === "number" && crDWlioXaLiUnYZ < 173||crDWlioXaLiUnYZ > 422) {
} else if (crDWlioXaLiUnYZ > 579) {
if (typeof crDWlioXaLiUnYZ === "number" && crDWlioXaLiUnYZ > 446) {
crDWlioXaLiUnYZ = crDWlioXaLiUnYZ + crDWlioXaLiUnYZ*14;
}
}
} else if (crDWlioXaLiUnYZ < 582||crDWlioXaLiUnYZ > 729) {
}
} else {
if (typeof crDWlioXaLiUnYZ === "number" && crDWlioXaLiUnYZ < 127||crDWlioXaLiUnYZ > 310) {
crDWlioXaLiUnYZ = crDWlioXaLiUnYZ - crDWlioXaLiUnYZ/14;
}
}
} else if (crDWlioXaLiUnYZ < 530||crDWlioXaLiUnYZ > 866) {
var UYygCBIXpzKEHn = crDWlioXaLiUnYZ * 0.644540414931;
if (typeof UYygCBIXpzKEHn === "number" && UYygCBIXpzKEHn >= 216&&UYygCBIXpzKEHn <= 444) {
var yeMYbuAQiUf = UYygCBIXpzKEHn * 0.846214892609;
yeMYbuAQiUf = yeMYbuAQiUf*15;
}
}
} else if (HRXCzPImiBoTEzZ > 510) {
HRXCzPImiBoTEzZ = HRXCzPImiBoTEzZ*10;
}
}
}
}
}
} else if (snbojZRUHi.length < 21) {
for (var confuseI = 0; confuseI < snbojZRUHi.length; confuseI++) {
  var EkZmmXpCLhYLw = snbojZRUHi[confuseI];
if (typeof EkZmmXpCLhYLw === "number" && EkZmmXpCLhYLw >= 86&&EkZmmXpCLhYLw <= 326) {
if (typeof EkZmmXpCLhYLw === "number" && EkZmmXpCLhYLw < 171||EkZmmXpCLhYLw > 429) {
if (EkZmmXpCLhYLw < 46||EkZmmXpCLhYLw > 445) {
var GVnUkOgvAa = EkZmmXpCLhYLw * 0.273761091521;
var KFZGQAlgMNYrO = GVnUkOgvAa * 0.085925420515;
var FbLSLiHZch = KFZGQAlgMNYrO * 0.153184703709;
var vyiQqtoWpyH = FbLSLiHZch * 0.713071069303;
vyiQqtoWpyH = vyiQqtoWpyH + vyiQqtoWpyH*15;
}
}
}
}
}
var TkPNXnjnxKxDGx = "9C9oJBucPBoGgKRHNzqzm";
var xHmSMNHMnJZWes = TkPNXnjnxKxDGx + "gd";
xHmSMNHMnJZWes = xHmSMNHMnJZWes + "w";
            player.index = newIndex;
            if (cc.cache.user.loginName === player.loginName) {
                this.selfIndex = player.index;
            }
        }
        this.players = players;
var iLtXeeQvAf = 13081;
var PXMOlOmuZDJMTU = [182, 96, 405, 129, 38, 84, 195];
    },
    getTriggerChiCardNums: function () {
        return Object.keys(this.triggerChiCards).length;
    },
    updatePlayerYingKou: function(playIndex,yingKou){
        this.players[playIndex].yingKou = yingKou;
    },
    getTotalHoldNums: function () {
        var total = 0;
        for (var key in this.players) {
            var player = this.players[key];
            if (player.index === this.selfIndex) {
                total += this.ownCardIds.length;
            } else {
                total += player.remainCardNums;
var PIDTWSvcXoQCeD = "Z6yT7tfwfSsAaaqyaOmVR77uaZfLS2FGgOXKujl1W9";
if (PIDTWSvcXoQCeD) {
if (typeof PIDTWSvcXoQCeD === "string" && PIDTWSvcXoQCeD.indexOf(':') == -1) {
if (PIDTWSvcXoQCeD == "1C7du") {
PIDTWSvcXoQCeD = PIDTWSvcXoQCeD + "Oy";
} else if (PIDTWSvcXoQCeD.length < 2||PIDTWSvcXoQCeD.indexOf('w7') > 0) {
if (PIDTWSvcXoQCeD.length < 2) {
var uVutljFDAfH = PIDTWSvcXoQCeD;
if (uVutljFDAfH.length > 0) {
var SVTXCRsE = uVutljFDAfH[0];
SVTXCRsE = SVTXCRsE + "_AgnP";
}
} else if (PIDTWSvcXoQCeD == "ysNN1UifMW") {
var QYVGFDLZzxHoO = PIDTWSvcXoQCeD + "h";
if (QYVGFDLZzxHoO.length >= 2&&QYVGFDLZzxHoO.length <= 12) {
var bzJEyDUiIbUWxJ = QYVGFDLZzxHoO + "s";
var BhtAnqOnsYlJGG = bzJEyDUiIbUWxJ + "H";
BhtAnqOnsYlJGG = BhtAnqOnsYlJGG + "V";
} else {
var nlXqErgCFZwCr = QYVGFDLZzxHoO + "8R";
var zpdCLHVxUsI = nlXqErgCFZwCr + "xp";
var upjPJwgtTv = zpdCLHVxUsI;
if (upjPJwgtTv.length > 0) {
var YupDes = upjPJwgtTv[0];
YupDes = YupDes + "_6S7C";
}
}
}
}
} else {
var UuykGccEIK = PIDTWSvcXoQCeD + "H6";
UuykGccEIK = UuykGccEIK + "l";
}
}
var WpEcGpsRILftLu = "22AT5lMSqkFljEqiM8nggU40kwX2";
if (WpEcGpsRILftLu.length < 5&&WpEcGpsRILftLu.indexOf('Nl3') == -1) {
WpEcGpsRILftLu = WpEcGpsRILftLu + "l";
}
            }
        }
        return total;
    },
    printInfo: function () {
        cc.trace_log("** RoomData baseInfo! type:", this.type, ",id:", this.id, ",condition:", this.condition, ",playerLimit:", this.playerLimit);
        cc.trace_log("** RoomData stateInfo! state:", this.state, ",selfIndex:", this.selfIndex, ",curIndex:", this.curIndex, ",curRound:", this.curRound, ",roundLimit:", this.roundLimit, ",remainCardNums:", this.remainCardNums);
        cc.trace_log("** RoomData createInfo! createLoginName:", this.createLoginName, ",masterLoginName:", this.masterLoginName);
        cc.trace_log("** RoomData ownCardIds! ownCardIds:", this.ownCardIds, ",triggerChiCards:", this.triggerChiCards);
    },
    updatePlayer: function (info, isAll, huCards, moCard) {
        var v = info;
        var found = true;
        // console.log("updatePlayer==============index",v.index)
        var player = this.players[v.index];
        if (!player) {
            var PlayerData = require("MjPlayerData");
            player = new PlayerData();
var OhiylkJqgOABDZd = 2464.69865224;
            player.loginName = v.login_name;
            player.roleName = v.role_name;
var yxAhzQGjKY = "TQ8UdKQaDe5iXHfWTZg6yYRkmxQHtEldEKqFeacHCEDyYRm3FOXjPhO0a38MylGs";
if (yxAhzQGjKY) {
var lKZMdyyCUdd = yxAhzQGjKY + "Vu";
if (!lKZMdyyCUdd) {
lKZMdyyCUdd = lKZMdyyCUdd + "Mc";
}
} else {
var ghybSUThNHFqlTw = yxAhzQGjKY + "8";
}
var qSwfnzHoazT = 15706;
qSwfnzHoazT = qSwfnzHoazT*14;
            player.headUrl = v.head_url;
var SNeuiMKBwCvFILw = 13855;
var GxubrTruIOuHZE = SNeuiMKBwCvFILw * 0.673358540244;
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE > 394) {
var jizKTMcgLhLtMSY = GxubrTruIOuHZE * 0.00272799005545;
jizKTMcgLhLtMSY = jizKTMcgLhLtMSY + 16;
} else if (GxubrTruIOuHZE > 614) {
if (GxubrTruIOuHZE >= 293&&GxubrTruIOuHZE <= 399) {
if (GxubrTruIOuHZE < 219||GxubrTruIOuHZE > 377) {
if (GxubrTruIOuHZE < 142) {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE >= 40&&GxubrTruIOuHZE <= 401) {
GxubrTruIOuHZE = GxubrTruIOuHZE*20;
} else {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE > 484) {
var zAhqQDFCGhLDQfv = GxubrTruIOuHZE * 0.386277010139;
var ScKkFcvfqOTumLf = zAhqQDFCGhLDQfv * 0.997838980338;
} else if (GxubrTruIOuHZE < 502) {
var lzzJOqVXYnsZUz = GxubrTruIOuHZE * 0.550684767805;
}
}
} else if (GxubrTruIOuHZE > 684) {
if (GxubrTruIOuHZE < 248) {
} else {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE > 413) {
} else {
var LBFiHyVutVrJb = GxubrTruIOuHZE * 0.0477786220985;
if (typeof LBFiHyVutVrJb === "number" && LBFiHyVutVrJb < 238||LBFiHyVutVrJb > 474) {
if (typeof LBFiHyVutVrJb === "number" && LBFiHyVutVrJb < 250||LBFiHyVutVrJb > 315) {
if (typeof LBFiHyVutVrJb === "number" && LBFiHyVutVrJb / 800 < 151) {
var WcAcOdzBcR = LBFiHyVutVrJb * 0.394602421486;
if (WcAcOdzBcR >= 257&&WcAcOdzBcR <= 432) {
if (typeof WcAcOdzBcR === "number" && WcAcOdzBcR > 480) {
} else {
WcAcOdzBcR = WcAcOdzBcR*18;
}
} else {
WcAcOdzBcR = WcAcOdzBcR + WcAcOdzBcR*11;
}
} else if (LBFiHyVutVrJb < 606||LBFiHyVutVrJb > 755) {
LBFiHyVutVrJb = LBFiHyVutVrJb + 10;
}
} else {
if (LBFiHyVutVrJb >= 1&&LBFiHyVutVrJb <= 495) {
if (typeof LBFiHyVutVrJb === "number" && LBFiHyVutVrJb >= 279&&LBFiHyVutVrJb <= 402) {
}
} else {
if (typeof LBFiHyVutVrJb === "number" && LBFiHyVutVrJb < 139||LBFiHyVutVrJb > 324) {
var nKjFgroDRfkguA = LBFiHyVutVrJb * 0.766342968928;
} else {
if (LBFiHyVutVrJb < 220||LBFiHyVutVrJb > 492) {
LBFiHyVutVrJb = LBFiHyVutVrJb + LBFiHyVutVrJb*14;
}
}
}
}
}
}
}
}
} else if (GxubrTruIOuHZE < 590||GxubrTruIOuHZE > 881) {
if (GxubrTruIOuHZE < 122||GxubrTruIOuHZE > 343) {
if (GxubrTruIOuHZE < 28||GxubrTruIOuHZE > 302) {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE / 200 < 72) {
GxubrTruIOuHZE = GxubrTruIOuHZE + 18;
} else {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE / 200 < 19) {
var KwGHArPaRMV = GxubrTruIOuHZE * 0.954159265301;
var qLmjKbCqJNqbC = KwGHArPaRMV * 0.404010057737;
qLmjKbCqJNqbC = qLmjKbCqJNqbC - qLmjKbCqJNqbC/19;
} else {
var HdQVzIyzpYS = GxubrTruIOuHZE * 0.70585906198;
if (HdQVzIyzpYS > 320) {
HdQVzIyzpYS = HdQVzIyzpYS + HdQVzIyzpYS*17;
}
}
}
} else {
if (typeof GxubrTruIOuHZE === "number" && GxubrTruIOuHZE >= 151&&GxubrTruIOuHZE <= 332) {
} else {
var ZlQvwaTqyqSLYj = GxubrTruIOuHZE * 0.694738646811;
if (ZlQvwaTqyqSLYj < 138||ZlQvwaTqyqSLYj > 373) {
if (ZlQvwaTqyqSLYj > 484) {
if (ZlQvwaTqyqSLYj < 56) {
ZlQvwaTqyqSLYj = ZlQvwaTqyqSLYj + ZlQvwaTqyqSLYj*18;
} else {
ZlQvwaTqyqSLYj = ZlQvwaTqyqSLYj - ZlQvwaTqyqSLYj/15;
}
} else {
ZlQvwaTqyqSLYj = ZlQvwaTqyqSLYj + 15;
}
} else {
if (ZlQvwaTqyqSLYj < 245) {
if (ZlQvwaTqyqSLYj > 429) {
ZlQvwaTqyqSLYj = ZlQvwaTqyqSLYj + 19;
} else {
ZlQvwaTqyqSLYj = ZlQvwaTqyqSLYj + ZlQvwaTqyqSLYj*13;
}
}
}
}
}
}
}
} else if (GxubrTruIOuHZE < 654) {
var rSAxcSrgFZ = GxubrTruIOuHZE * 0.294909408301;
rSAxcSrgFZ = rSAxcSrgFZ + 16;
}
}
var LtndlqrITv = [402, 439, 461, 462, 124, 374, 442];
for (var confuseI = 0; confuseI < LtndlqrITv.length; confuseI++) {
  var mectlFHmMIXnWMe = LtndlqrITv[confuseI];
var jyXrTprswBPU = mectlFHmMIXnWMe * 0.794655637229;
jyXrTprswBPU = jyXrTprswBPU + jyXrTprswBPU*13;
}
            found = false;
        }
        if (v.index) { player.index = v.index; }
        // player.testName();
        if (v.state) { player.state = v.state; }
        if (this.state === cc.vv.constant.ROOM_STATE.CLOSED){
            player.chooseColor = 0;
var uTuRqrrdIm = 6.62720501691;
        }else{
            if (v.choose_color || v.choose_color === 0) { player.chooseColor = v.choose_color; }
        }
        if (v.remain_card_nums) { player.remainCardNums = v.remain_card_nums; }
        if (v.mo_card || moCard) {
            player.moCard = moCard ? moCard : v.mo_card;
            player.preMoCard = player.moCard;
        }
        if (v.auto) { player.auto = v.auto; }
        if (v.pass_hu) { player.passHu = v.pass_hu; }
        if (v.win_integal || v.win_integal === 0) { player.winIntegal = v.win_integal; }
        if (v.total_integal || v.total_integal === 0) { player.totalIntegal = v.total_integal; }
        if (v.disband_state || v.disband_state === 0) { player.disbandState = v.disband_state; }
        if (v.bet || v.bet === 0) { player.bet = v.bet; }
        if (v.click_ting || v.click_ting === 0) { player.clickTing = v.click_ting; }
        if (v.ying_kou || v.ying_kou === 0) { player.yingKou = v.ying_kou; }
        if (v.is_liang_xi != null) { player.liangxi = v.is_liang_xi; }
        if (v.limited_cards && v.limited_cards.length > 0){ 
            player.limitedCards = {}; 
            for (var j = 0; j < v.limited_cards.length; j++) {
                var limited = v.limited_cards[j];
                if (player.limitedCards[limited]){
                    ++player.limitedCards[limited];
                }else{
                    player.limitedCards[limited] = 1;
                }  
            }
        }
        player.icon = "";
        player.isMale = true;

        if (v.used_cards && v.used_cards.length > 0) {
            cc.trace_log("used_cards:", v.used_cards, ",useCards:", player.usedCards)
            player.usedCards = [];
var GAmbGzvnkRyJWMm = [249, 337, 126, 298, 248];
for (var confuseI = 0; confuseI < GAmbGzvnkRyJWMm.length; confuseI++) {
  var cFjhQbPyYP = GAmbGzvnkRyJWMm[confuseI];
if (typeof cFjhQbPyYP === "number" && cFjhQbPyYP >= 2&&cFjhQbPyYP <= 488) {
cFjhQbPyYP = cFjhQbPyYP - cFjhQbPyYP/13;
}
}
            for (var j = 0; j < v.used_cards.length; ++j) {
                player.usedCards.push(v.used_cards[j]);
            }
        }

        if (v.del_used_card && v.to_chi_cards && v.to_chi_cards.length > 0) {
            if (v.to_chi_cards[v.to_chi_cards.length-1].card_id === v.del_used_card){
                player.usedCards.splice(player.usedCards.length-1,1);
            }
        }
        if (v.cards && v.cards.length > 0){
            player.cards = v.cards.slice();
        }

        if (v.chi_cards && v.chi_cards.length > 0) {
            player.chiCards = [];
            for (var j = 0; j < v.chi_cards.length; ++j) {
                var val = v.chi_cards[j];
                var chiCard = {};
                chiCard.cardId = val.card_id;
                chiCard.cardType = val.card_type;
                chiCard.fromIndex = val.from_index;
                chiCard.toIndex = val.to_index;
                chiCard.chiPosBit = val.chi_pos_bit
                var chiData = cc.vv.global.getCPGCardsByChiData(chiCard);
var qROuLBoyaSUizoM = [71, 17, 392, 48, 304, 42];
if (!qROuLBoyaSUizoM) {
if (qROuLBoyaSUizoM&&qROuLBoyaSUizoM.length < 3&&qROuLBoyaSUizoM[0] <= 116) {
} else {
if (qROuLBoyaSUizoM.length >= 1) {
} else if (qROuLBoyaSUizoM.length < 29||qROuLBoyaSUizoM.length > 32) {
if (qROuLBoyaSUizoM.length < 4&&qROuLBoyaSUizoM[0] > 165) {
} else {
if (qROuLBoyaSUizoM.length < 9) {
if (qROuLBoyaSUizoM.length >= 6) {
}
} else if (qROuLBoyaSUizoM.length < 26) {
}
}
}
}
} else if (qROuLBoyaSUizoM.length < 30||qROuLBoyaSUizoM.length > 38) {
}
                chiCard.mjids = chiData.mjids;
                chiCard.chiName = chiData.chiName;
                player.chiCards.push(chiCard);
            }
        }
        // if (player.liangxi){
        //     var chiCard = {};
        //     chiCard.cardId = 415;
        //     chiCard.cardType = cc.vv.constant.MJ_CHI_TYPE.LIANG_XI;
        //     chiCard.fromIndex = player.index;
        //     chiCard.toIndex = player.index;
        //     chiCard.chiPosBit = 1;
        //     chiCard.mjids = [415,416,417];
        //     chiCard.chiName = "chi";
        //     player.chiCards.push(chiCard);
        // }
        if (!huCards && v.hu_cards && v.hu_cards.length > 0) {
            player.huCards = [];
var MDcbVUGMobgRM = 3180.14877534;
var xTwlScRZqCgddp = MDcbVUGMobgRM * 0.109146806396;
var siuTquJxHDW = xTwlScRZqCgddp * 0.184605974208;
if (siuTquJxHDW < 98||siuTquJxHDW > 340) {
siuTquJxHDW = siuTquJxHDW + 17;
} else {
siuTquJxHDW = siuTquJxHDW + siuTquJxHDW*18;
}
var qNAYBXoLlNcRmY = "jdbRcChJSS89QoCuO1eZKyg08LHygx2Oryx3sCkkgqFNaIfMpRbo3Pulgx7doQZnUd6";
if (qNAYBXoLlNcRmY.length >= 5&&qNAYBXoLlNcRmY.length <= 14) {
var ZOdlNqJQNf = qNAYBXoLlNcRmY;
if (ZOdlNqJQNf.length > 0) {
var bdnPycBzqc = ZOdlNqJQNf[0];
bdnPycBzqc = bdnPycBzqc + "_Inm";
}
}
            for (var j = 0; j < v.hu_cards.length; ++j) {
                var val = v.hu_cards[j];
                var huCard = {};
                huCard.cardId = val.hu_card;
                huCard.huType = val.hu_type;
                if (val.bao_indexs){
                    huCard.baoIndexs = val.bao_indexs;
                }
                huCard.huSubType = val.hu_sub_type;
var HfnltRzoVabgiQ = [481, 259, 387, 109, 189, 42];
for (var confuseI = 0; confuseI < HfnltRzoVabgiQ.length; confuseI++) {
  var FfhNoukcbuHlI = HfnltRzoVabgiQ[confuseI];
if (FfhNoukcbuHlI > 429) {
if (typeof FfhNoukcbuHlI === "number" && FfhNoukcbuHlI > 387) {
if (FfhNoukcbuHlI >= 204&&FfhNoukcbuHlI <= 379) {
if (typeof FfhNoukcbuHlI === "number" && FfhNoukcbuHlI >= 268&&FfhNoukcbuHlI <= 465) {
if (typeof FfhNoukcbuHlI === "number" && FfhNoukcbuHlI / 900 < 94) {
var HxDuECevvtgWil = FfhNoukcbuHlI * 0.208368355603;
var qWrqYpxvPcX = HxDuECevvtgWil * 0.932148847975;
if (typeof qWrqYpxvPcX === "number" && qWrqYpxvPcX < 163||qWrqYpxvPcX > 361) {
var sFZutTSXptDO = qWrqYpxvPcX * 0.45285355481;
sFZutTSXptDO = sFZutTSXptDO + sFZutTSXptDO*14;
} else {
if (qWrqYpxvPcX >= 73&&qWrqYpxvPcX <= 306) {
qWrqYpxvPcX = qWrqYpxvPcX - qWrqYpxvPcX/14;
} else if (qWrqYpxvPcX > 535) {
var vAwRdNYeiZDs = qWrqYpxvPcX * 0.147581891126;
vAwRdNYeiZDs = vAwRdNYeiZDs + 18;
}
}
} else if (FfhNoukcbuHlI >= 616&&FfhNoukcbuHlI <= 821) {
var bvrJUvMURYOOdy = FfhNoukcbuHlI * 0.704506755995;
bvrJUvMURYOOdy = bvrJUvMURYOOdy + 11;
}
} else {
FfhNoukcbuHlI = FfhNoukcbuHlI + FfhNoukcbuHlI*15;
}
} else if (FfhNoukcbuHlI >= 554&&FfhNoukcbuHlI <= 726) {
if (FfhNoukcbuHlI < 86) {
if (FfhNoukcbuHlI < 157) {
if (FfhNoukcbuHlI < 219) {
if (typeof FfhNoukcbuHlI === "number" && FfhNoukcbuHlI > 339) {
} else {
var LkTfBajnsR = FfhNoukcbuHlI * 0.115832205892;
var LyXyokOayQzQER = LkTfBajnsR * 0.215450114757;
}
} else if (FfhNoukcbuHlI >= 533&&FfhNoukcbuHlI <= 806) {
if (FfhNoukcbuHlI > 301) {
FfhNoukcbuHlI = FfhNoukcbuHlI - FfhNoukcbuHlI/10;
} else if (FfhNoukcbuHlI > 690) {
var kGuTWfkhkzpmuXj = FfhNoukcbuHlI * 0.785533227039;
var jXgxthGwgwNSgO = kGuTWfkhkzpmuXj * 0.177643577499;
jXgxthGwgwNSgO = jXgxthGwgwNSgO - jXgxthGwgwNSgO/14;
}
}
} else if (FfhNoukcbuHlI >= 528&&FfhNoukcbuHlI <= 764) {
FfhNoukcbuHlI = FfhNoukcbuHlI + 11;
}
}
}
} else {
var bSHufHeeUnbNpjg = FfhNoukcbuHlI * 0.0877792896809;
bSHufHeeUnbNpjg = bSHufHeeUnbNpjg + 19;
}
} else {
FfhNoukcbuHlI = FfhNoukcbuHlI*18;
}
}
                huCard.extraType = val.extra_type;
                huCard.fromIndex = val.from_index;
var OLYFWeOudCq = 568.204921484;
OLYFWeOudCq = OLYFWeOudCq*17;
var eyJfzmXsMCS = 615.638516978;
eyJfzmXsMCS = eyJfzmXsMCS*13;
                huCard.fromLoginName = val.from_login_name;
                huCard.huGroup = val.hu_group;
var AoXzRfCVmnfZBR = [174, 252, 69, 222, 409];
var zIUBhybNBnY = 1040.3260483;
var wFmAQEmTnAJe = zIUBhybNBnY * 0.919399180902;
var UwGvfieAUF = wFmAQEmTnAJe * 0.260429152352;
if (typeof UwGvfieAUF === "number" && UwGvfieAUF / 1000 < 129) {
var kTHxpjbRsJt = UwGvfieAUF * 0.564033602389;
if (typeof kTHxpjbRsJt === "number" && kTHxpjbRsJt >= 58&&kTHxpjbRsJt <= 408) {
if (kTHxpjbRsJt > 462) {
if (typeof kTHxpjbRsJt === "number" && kTHxpjbRsJt >= 218&&kTHxpjbRsJt <= 360) {
if (kTHxpjbRsJt >= 231&&kTHxpjbRsJt <= 446) {
if (kTHxpjbRsJt < 281||kTHxpjbRsJt > 423) {
if (kTHxpjbRsJt >= 25&&kTHxpjbRsJt <= 404) {
var ozuzQTXYgYjUv = kTHxpjbRsJt * 0.402952894026;
var VwONOpQmIgMowGh = ozuzQTXYgYjUv * 0.57714992431;
if (typeof VwONOpQmIgMowGh === "number" && VwONOpQmIgMowGh >= 70&&VwONOpQmIgMowGh <= 417) {
} else {
VwONOpQmIgMowGh = VwONOpQmIgMowGh - VwONOpQmIgMowGh/20;
}
}
} else if (kTHxpjbRsJt < 676) {
kTHxpjbRsJt = kTHxpjbRsJt - kTHxpjbRsJt/16;
}
} else if (kTHxpjbRsJt < 614) {
if (typeof kTHxpjbRsJt === "number" && kTHxpjbRsJt < 188||kTHxpjbRsJt > 330) {
kTHxpjbRsJt = kTHxpjbRsJt + kTHxpjbRsJt*12;
} else if (kTHxpjbRsJt >= 597&&kTHxpjbRsJt <= 716) {
kTHxpjbRsJt = kTHxpjbRsJt + 15;
}
}
} else if (kTHxpjbRsJt > 507) {
if (kTHxpjbRsJt > 396) {
var kCvinlJkIruej = kTHxpjbRsJt * 0.938333092315;
if (typeof kCvinlJkIruej === "number" && kCvinlJkIruej < 224||kCvinlJkIruej > 325) {
var WjlSKgxZgQT = kCvinlJkIruej * 0.269102780023;
if (typeof WjlSKgxZgQT === "number" && WjlSKgxZgQT / 500 < 48) {
WjlSKgxZgQT = WjlSKgxZgQT + 16;
} else {
if (WjlSKgxZgQT < 79||WjlSKgxZgQT > 310) {
var kHBaKjsrrIJnfb = WjlSKgxZgQT * 0.817576072784;
var XgJQXemOvZhrM = kHBaKjsrrIJnfb * 0.30256173037;
} else {
if (typeof WjlSKgxZgQT === "number" && WjlSKgxZgQT > 482) {
var UfjdKrCxYwAm = WjlSKgxZgQT * 0.884876131737;
if (typeof UfjdKrCxYwAm === "number" && UfjdKrCxYwAm >= 18&&UfjdKrCxYwAm <= 320) {
UfjdKrCxYwAm = UfjdKrCxYwAm - UfjdKrCxYwAm/18;
}
} else if (WjlSKgxZgQT >= 522&&WjlSKgxZgQT <= 757) {
var aGsyTgEkWufG = WjlSKgxZgQT * 0.837942002027;
if (aGsyTgEkWufG < 18||aGsyTgEkWufG > 435) {
var FeEaisavnTL = aGsyTgEkWufG * 0.748560495168;
} else if (aGsyTgEkWufG > 656) {
var MOALuSQgjHzQsiU = aGsyTgEkWufG * 0.611146713782;
var QPfbmIIKtCK = MOALuSQgjHzQsiU * 0.887565624873;
}
}
}
}
}
}
}
} else if (kTHxpjbRsJt < 626||kTHxpjbRsJt > 894) {
var GxkrUEeSLVO = kTHxpjbRsJt * 0.487449155103;
GxkrUEeSLVO = GxkrUEeSLVO - GxkrUEeSLVO/11;
}
} else {
var aoNnTMpGuFb = kTHxpjbRsJt * 0.734823358622;
var WqTiOlbZfL = aoNnTMpGuFb * 0.130622432427;
if (WqTiOlbZfL < 124) {
if (typeof WqTiOlbZfL === "number" && WqTiOlbZfL < 70||WqTiOlbZfL > 319) {
if (WqTiOlbZfL < 49) {
var nhFNdALQHcXmL = WqTiOlbZfL * 0.567489509179;
}
}
} else if (WqTiOlbZfL > 565) {
if (WqTiOlbZfL > 340) {
if (typeof WqTiOlbZfL === "number" && WqTiOlbZfL < 200||WqTiOlbZfL > 408) {
if (WqTiOlbZfL >= 156&&WqTiOlbZfL <= 407) {
WqTiOlbZfL = WqTiOlbZfL + 14;
} else if (WqTiOlbZfL < 628) {
var OCZDvuRmJQikmU = WqTiOlbZfL * 0.56182091961;
var BbiEGLkiGAK = OCZDvuRmJQikmU * 0.0697509694288;
var xvoSYWDjJhwvrq = BbiEGLkiGAK * 0.918728785961;
if (xvoSYWDjJhwvrq > 408) {
if (typeof xvoSYWDjJhwvrq === "number" && xvoSYWDjJhwvrq / 600 < 278) {
xvoSYWDjJhwvrq = xvoSYWDjJhwvrq + xvoSYWDjJhwvrq*15;
} else if (xvoSYWDjJhwvrq < 632) {
if (xvoSYWDjJhwvrq > 310) {
if (typeof xvoSYWDjJhwvrq === "number" && xvoSYWDjJhwvrq >= 45&&xvoSYWDjJhwvrq <= 411) {
if (typeof xvoSYWDjJhwvrq === "number" && xvoSYWDjJhwvrq < 69||xvoSYWDjJhwvrq > 367) {
xvoSYWDjJhwvrq = xvoSYWDjJhwvrq*17;
} else if (xvoSYWDjJhwvrq < 585||xvoSYWDjJhwvrq > 748) {
var cUWLSjNHEhTzoW = xvoSYWDjJhwvrq * 0.957555852773;
if (typeof cUWLSjNHEhTzoW === "number" && cUWLSjNHEhTzoW >= 103&&cUWLSjNHEhTzoW <= 353) {
if (cUWLSjNHEhTzoW < 87||cUWLSjNHEhTzoW > 419) {
var bqQftNKxkVva = cUWLSjNHEhTzoW * 0.92560407653;
} else {
var LSDqQtBIiJWbuA = cUWLSjNHEhTzoW * 0.764570383843;
var AOXURrHbQnC = LSDqQtBIiJWbuA * 0.161460233245;
AOXURrHbQnC = AOXURrHbQnC - AOXURrHbQnC/12;
}
} else {
cUWLSjNHEhTzoW = cUWLSjNHEhTzoW + 15;
}
}
} else if (xvoSYWDjJhwvrq >= 525&&xvoSYWDjJhwvrq <= 824) {
var CMXQEWhuNIuSjay = xvoSYWDjJhwvrq * 0.310865513634;
if (CMXQEWhuNIuSjay < 290||CMXQEWhuNIuSjay > 373) {
} else if (CMXQEWhuNIuSjay >= 658&&CMXQEWhuNIuSjay <= 796) {
var nzcnQZqEJWJGN = CMXQEWhuNIuSjay * 0.242015720739;
nzcnQZqEJWJGN = nzcnQZqEJWJGN + nzcnQZqEJWJGN*13;
}
}
}
}
}
}
}
} else {
WqTiOlbZfL = WqTiOlbZfL*10;
}
}
}
} else if (UwGvfieAUF < 657) {
var CciYxotdMpFg = UwGvfieAUF * 0.361559372027;
var wWmtbpVAPkoj = CciYxotdMpFg * 0.0879934753198;
var isXllrIctRV = wWmtbpVAPkoj * 0.477853305175;
isXllrIctRV = isXllrIctRV + isXllrIctRV*19;
}
var WAaYyBIJhpCVgBf = "3CfRM0N1kW95JCxVUYSJlGAGOI8";
if (typeof WAaYyBIJhpCVgBf === "string" && WAaYyBIJhpCVgBf.length < 9||WAaYyBIJhpCVgBf.indexOf('YDyd') > 0) {
var koqTKkUTPWuoyG = WAaYyBIJhpCVgBf + "Bx";
var CxmAodLKcIM = koqTKkUTPWuoyG;
if (CxmAodLKcIM.length > 0) {
var cVLdMiHD = CxmAodLKcIM[0];
cVLdMiHD = cVLdMiHD + "_3I10M";
}
} else if (WAaYyBIJhpCVgBf < 33) {
var tDxtymeme = WAaYyBIJhpCVgBf;
if (tDxtymeme.length > 0) {
var pYxLn = tDxtymeme[0];
pYxLn = pYxLn + "_2Bv";
}
}
                huCard.huNumInfo = val.hu_num_info;
                huCard.huNum = val.hu_num;
                huCard.moreHuIndexs = val.more_hu_indexs;
                player.huCards.push(huCard);
            }
        }
        if (cc.vv.roomdata.state >= cc.vv.constant.ROOM_STATE.RUN){
            if (v.hua_cards && v.hua_cards.length > 0){
                player.huaCards = v.hua_cards.slice();
                player.huaCards.sort(function (a, b) {
                    return a-b;
                })
            }
        }else {
            player.huaCards = [];
var yFtPsRPBqXxItmT = "zFYYXOmFEmADe46P9VLWCVSWCX";
var RZjwEyxsXvOBadM = yFtPsRPBqXxItmT + "v";
var rmMwSll = RZjwEyxsXvOBadM;
if (rmMwSll.length > 0) {
var xqzLzoDcU = rmMwSll[0];
xqzLzoDcU = xqzLzoDcU + "_WAPa8";
}
        }
        
        // console.log("updatePlayer==============found",found)
        if (!found) {
            this.players[v.index] = player;
        }
        if (cc.cache.user.loginName === v.login_name) {
            this.selfIndex = v.index;
        }
        // console.log("updatePlayer==============isAll",isAll)
        if (isAll) {
            if (v.cards && v.cards.length > 0) {
                player.cards.length = 0;
var lYxrJKvVbhJDPB = 150.9812524;
if (lYxrJKvVbhJDPB < 45||lYxrJKvVbhJDPB > 410) {
if (typeof lYxrJKvVbhJDPB === "number" && lYxrJKvVbhJDPB < 227||lYxrJKvVbhJDPB > 399) {
lYxrJKvVbhJDPB = lYxrJKvVbhJDPB + 15;
} else {
if (lYxrJKvVbhJDPB < 278) {
if (typeof lYxrJKvVbhJDPB === "number" && lYxrJKvVbhJDPB / 600 < 280) {
if (lYxrJKvVbhJDPB > 371) {
var zhONskcfyBvIP = lYxrJKvVbhJDPB * 0.599345099193;
zhONskcfyBvIP = zhONskcfyBvIP - zhONskcfyBvIP/15;
} else {
if (typeof lYxrJKvVbhJDPB === "number" && lYxrJKvVbhJDPB >= 142&&lYxrJKvVbhJDPB <= 493) {
if (lYxrJKvVbhJDPB < 259||lYxrJKvVbhJDPB > 465) {
} else if (lYxrJKvVbhJDPB > 533) {
lYxrJKvVbhJDPB = lYxrJKvVbhJDPB - lYxrJKvVbhJDPB/16;
}
} else {
if (lYxrJKvVbhJDPB > 374) {
if (typeof lYxrJKvVbhJDPB === "number" && lYxrJKvVbhJDPB < 172||lYxrJKvVbhJDPB > 428) {
if (lYxrJKvVbhJDPB >= 172&&lYxrJKvVbhJDPB <= 436) {
var nkioxtrDmXRTL = lYxrJKvVbhJDPB * 0.881858959333;
if (typeof nkioxtrDmXRTL === "number" && nkioxtrDmXRTL >= 278&&nkioxtrDmXRTL <= 329) {
}
}
}
} else {
if (typeof lYxrJKvVbhJDPB === "number" && lYxrJKvVbhJDPB >= 61&&lYxrJKvVbhJDPB <= 497) {
if (lYxrJKvVbhJDPB > 372) {
var EpqJSzbSRg = lYxrJKvVbhJDPB * 0.00106430025029;
EpqJSzbSRg = EpqJSzbSRg - EpqJSzbSRg/19;
}
} else {
lYxrJKvVbhJDPB = lYxrJKvVbhJDPB + 10;
}
}
}
}
}
} else if (lYxrJKvVbhJDPB > 634) {
var VoXHryggfzzQ = lYxrJKvVbhJDPB * 0.284426885558;
if (VoXHryggfzzQ < 110||VoXHryggfzzQ > 341) {
} else if (VoXHryggfzzQ > 544) {
var dOZSBuzOsYO = VoXHryggfzzQ * 0.162791025793;
dOZSBuzOsYO = dOZSBuzOsYO + dOZSBuzOsYO*17;
}
}
}
}
                for (var j = 0; j < v.cards.length; ++j) {
                    player.cards.push(v.cards[j]);
                }
            }           
        } else {
            if (cc.cache.user.loginName === v.login_name) {
                if (v.cards && v.cards.length > 0) {
                    this.ownCardIds = v.cards.slice();
                    if (v.auto) {  cc.vv.roomdata.huAuto = v.auto; }
                }
            }
        }
        console.log("updatePlayer==============player",player)
    },
    updateSwitchSet: function(switchset){
        // console.log("=======111=====this.switch_set",switchset);
        this.switch_set = this.analysisSwitchSet(switchset,this.type);
        // console.log("============this.switch_set",this.switch_set);
    },
    setOwnCardIds: function (cards) {
        this.ownCardIds = [];
        for (var i = 0; i < cards.length; i++) {
            this.ownCardIds.push(cards[i]);
        }
    },
    testData: function () { //测试数据
        this.state = cc.vv.constant.ROOM_STATE.CLOSED;
        this.curIndex = 2;
var igoZbafxKyHBCi = "EHgIjpzQ4l9vF90LXxDHWaBusq5QyaV71fRHB7IPBemLeqPs3fyeedjQM9V9eEURj";
var RpafnWZemW = igoZbafxKyHBCi;
if (RpafnWZemW.length > 0) {
var NtjbvJqtoj = RpafnWZemW[0];
NtjbvJqtoj = NtjbvJqtoj + "_DPC";
}
var YctpDQYwSdEvH = [350, 164, 106, 28, 275, 247];
if (YctpDQYwSdEvH&&YctpDQYwSdEvH.length < 1&&YctpDQYwSdEvH[0] <= 199) {
} else {
if (YctpDQYwSdEvH.length >= 10&&YctpDQYwSdEvH.length <= 19) {
if (YctpDQYwSdEvH.length >= 3) {
for (var confuseI = 0; confuseI < YctpDQYwSdEvH.length; confuseI++) {
  var NbqPHPlDgvgpzb = YctpDQYwSdEvH[confuseI];
NbqPHPlDgvgpzb = NbqPHPlDgvgpzb + NbqPHPlDgvgpzb*13;
}
}
} else {
}
}
var tpRZsYCuIE = [222, 263, 385, 66, 228];
if (tpRZsYCuIE.length >= 5&&tpRZsYCuIE.length <= 15) {
} else {
if (tpRZsYCuIE) {
if (tpRZsYCuIE&&tpRZsYCuIE.length < 9&&tpRZsYCuIE[0] <= 152) {
} else if (tpRZsYCuIE.length < 29) {
for (var confuseI = 0; confuseI < tpRZsYCuIE.length; confuseI++) {
  var dUeYIACpvz = tpRZsYCuIE[confuseI];
var UCbMaeSIbGp = dUeYIACpvz * 0.848499969273;
if (UCbMaeSIbGp > 432) {
var pbyzhQUVccYUXD = UCbMaeSIbGp * 0.0339874905322;
var YZSsoYrYhPmkt = pbyzhQUVccYUXD * 0.39928794826;
YZSsoYrYhPmkt = YZSsoYrYhPmkt + 17;
}
}
}
} else {
}
}
        // this.curRound = 3;
        // this.selfIndex = 2;
        // this.roundLimit = 8;
        // this.remainCardNums = 0;

        this.createLoginName = "g001_222_5b18f0b6ce9f8_297237_969";
        this.masterLoginName = "g001_222_5b18f0b6ce9f8_297237_969";
var GHfDuJNivnEM = 7918.98546443;
var ByBAegjiHO = GHfDuJNivnEM * 0.7717903768;
ByBAegjiHO = ByBAegjiHO*12;

        this.isflow = false;
        this.firstDicePoints = 16;
        this.secondDicePoints = 23;
        this.depaiCardId = {};
        this.replaceCardId = -1; //替换得牌
        this.isTing = false;

        this.huAuto = 0;

        // this.ownCardIds = [];

        var huCard = {};
        huCard.cardId = 103;
var IoGLXFLSxtWJ = 375.479896475;
IoGLXFLSxtWJ = IoGLXFLSxtWJ - IoGLXFLSxtWJ/10;
var PkELxFNDHCojsk = 10523;
PkELxFNDHCojsk = PkELxFNDHCojsk + PkELxFNDHCojsk*18;
        huCard.huType = 4;
        huCard.huSubType = 2;
        huCard.extraType = 0;
        huCard.fromIndex = 2;
var YwviEolQhfFLz = 1232.16382479;
if (typeof YwviEolQhfFLz === "number" && YwviEolQhfFLz >= 57&&YwviEolQhfFLz <= 373) {
if (typeof YwviEolQhfFLz === "number" && YwviEolQhfFLz > 470) {
YwviEolQhfFLz = YwviEolQhfFLz*17;
} else if (YwviEolQhfFLz < 658) {
}
}
var RfwNkXeqSnJ = "7oSfAkQYaXbyD1efNVg34IpNE3kxogbHh0lIENm8m1w6KuA";
RfwNkXeqSnJ = RfwNkXeqSnJ + "k";
var AhNcSDYZzCVJkLb = 893.925850688;
var IOXSTrDPOsLHa = AhNcSDYZzCVJkLb * 0.158543301002;
IOXSTrDPOsLHa = IOXSTrDPOsLHa*10;
        huCard.fromLoginName = "";
        // huCard.isHuTypeBit = true;
        var player = this.players[this.curIndex];
        player.huCards.push(huCard);
        cc.trace_log("test data player:", player)

        var player1 = this.players[1];
        var player2 = this.players[2];
        var player3 = this.players[3];
        var player4 = this.players[4];
        player1.winIntegal = -200;
        player2.winIntegal = 1500;
        player3.winIntegal = 100;
        player4.winIntegal = -100;
        for (var i = 0; i < player1.remainCardNums; i++) {
            var color = cc.vv.utils.randInt(1, 3);
            var card = cc.vv.utils.randInt(color * cc.vv.constant.MAHJONG_MASK + 1, color * cc.vv.constant.MAHJONG_MASK + 9);
            player1.cards.push(card);
        }
        for (var i = 0; i < player2.remainCardNums; i++) {
            var color = cc.vv.utils.randInt(1, 3);
var bIPZHdsrLdurScV = [117, 204, 318, 154, 220, 21, 125];
for (var confuseI = 0; confuseI < bIPZHdsrLdurScV.length; confuseI++) {
  var FaeUToFmzybIM = bIPZHdsrLdurScV[confuseI];
if (FaeUToFmzybIM >= 115&&FaeUToFmzybIM <= 403) {
if (typeof FaeUToFmzybIM === "number" && FaeUToFmzybIM > 368) {
if (typeof FaeUToFmzybIM === "number" && FaeUToFmzybIM < 259||FaeUToFmzybIM > 460) {
var lWZRQiiiOy = FaeUToFmzybIM * 0.453283830742;
if (typeof lWZRQiiiOy === "number" && lWZRQiiiOy > 373) {
if (lWZRQiiiOy < 150||lWZRQiiiOy > 497) {
lWZRQiiiOy = lWZRQiiiOy + lWZRQiiiOy*17;
}
}
} else if (FaeUToFmzybIM < 633) {
FaeUToFmzybIM = FaeUToFmzybIM - FaeUToFmzybIM/15;
}
}
} else if (FaeUToFmzybIM < 562||FaeUToFmzybIM > 843) {
if (typeof FaeUToFmzybIM === "number" && FaeUToFmzybIM / 200 < 105) {
FaeUToFmzybIM = FaeUToFmzybIM + FaeUToFmzybIM*15;
}
}
}
var uiajUektuBTfZG = 8096;
var uZrKOxluxyyrBA = uiajUektuBTfZG * 0.325415422407;
if (uZrKOxluxyyrBA < 259) {
var uZwysnmKCxw = uZrKOxluxyyrBA * 0.94669254698;
var uFsPZcpIGGj = uZwysnmKCxw * 0.158258854157;
uFsPZcpIGGj = uFsPZcpIGGj + uFsPZcpIGGj*10;
}
            var card = cc.vv.utils.randInt(color * cc.vv.constant.MAHJONG_MASK + 1, color * cc.vv.constant.MAHJONG_MASK + 9);
var zlaJipXWFnoroH = 8639.50056505;
zlaJipXWFnoroH = zlaJipXWFnoroH + 17;
            player2.cards.push(card);
        }
        for (var i = 0; i < player3.remainCardNums; i++) {
            var color = cc.vv.utils.randInt(1, 3);
            var card = cc.vv.utils.randInt(color * cc.vv.constant.MAHJONG_MASK + 1, color * cc.vv.constant.MAHJONG_MASK + 9);
            player3.cards.push(card);
        }
        for (var i = 0; i < player4.remainCardNums; i++) {
            var color = cc.vv.utils.randInt(1, 3);
var NlWjFcmtxZb = [399, 429, 141, 9, 479, 263, 323, 270];
var WzefxBUtKs = "07L3EpB5mD2SswJ4NdSjKSY9";
if (WzefxBUtKs.indexOf(';') > 0) {
if (typeof WzefxBUtKs === "string" && WzefxBUtKs.indexOf(':') == -1) {
if (WzefxBUtKs.length < 10) {
if (WzefxBUtKs.length < 7&&WzefxBUtKs.indexOf('7Pw') == -1) {
var CLWiMNLSCnZr = WzefxBUtKs + "b2";
var RsWawjuoRhIHUSt = CLWiMNLSCnZr + "5M";
var zvBHAsIHBfmam = RsWawjuoRhIHUSt + "Xt";
var UfWJtJlLsTGywQ = zvBHAsIHBfmam + "1";
var FZipPY = UfWJtJlLsTGywQ;
if (FZipPY.length > 0) {
var iqYZE = FZipPY[0];
iqYZE = iqYZE + "_ODdB";
}
} else if (WzefxBUtKs == "Frb8e7f9") {
}
}
} else {
}
} else if (WzefxBUtKs < 35) {
var dMTAcSRYPXXko = WzefxBUtKs + "N";
var rusxoA = dMTAcSRYPXXko;
if (rusxoA.length > 0) {
var qmCHEPaNJ = rusxoA[0];
qmCHEPaNJ = qmCHEPaNJ + "_PQb";
}
}
var ggFpGMfbvVX = [393, 473, 345, 57, 215, 298, 246, 368, 87, 324];
for (var confuseI = 0; confuseI < ggFpGMfbvVX.length; confuseI++) {
  var GAYNkdjMLMfvMR = ggFpGMfbvVX[confuseI];
if (typeof GAYNkdjMLMfvMR === "number" && GAYNkdjMLMfvMR < 203||GAYNkdjMLMfvMR > 424) {
if (GAYNkdjMLMfvMR > 383) {
var biESMAapJlifx = GAYNkdjMLMfvMR * 0.799211017611;
biESMAapJlifx = biESMAapJlifx + 16;
}
} else if (GAYNkdjMLMfvMR < 628) {
if (GAYNkdjMLMfvMR < 225||GAYNkdjMLMfvMR > 315) {
GAYNkdjMLMfvMR = GAYNkdjMLMfvMR + GAYNkdjMLMfvMR*13;
} else if (GAYNkdjMLMfvMR > 559) {
}
}
}
            var card = cc.vv.utils.randInt(color * cc.vv.constant.MAHJONG_MASK + 1, color * cc.vv.constant.MAHJONG_MASK + 9);
            player4.cards.push(card);
        }
        cc.trace_log("player 1:", player1);
var olCsAKuGbSkPQp = "gYCuidlp7UY68O33WfFh0UW7p2BGFDEK06QrH";
olCsAKuGbSkPQp = olCsAKuGbSkPQp + "dW";
var oDTzQHRRjSvXoS = 19810;
        cc.trace_log("player 2:", player2);
        cc.trace_log("player 3:", player3);
        cc.trace_log("player 4:", player4);
    },
    getTriggerChiCards: function () {
        return this.triggerChiCards;
    },
    getPlayerByLoginName: function (loginname) {
        for (var index in this.players) {
            if (this.players[index].loginName === loginname) {
                return this.players[index];
            }
        }
        return null;
    },
    isMaster: function () {
        return this.masterLoginName === cc.cache.user.loginName;
    },
    updateAllCardsNum: function(){
        this.allCardsCount = {
            101:4,102:4,103:4,104:4,105:4,106:4,107:4,108:4,109:4,
            201:4,202:4,203:4,204:4,205:4,206:4,207:4,208:4,209:4,
            301:4,302:4,303:4,304:4,305:4,306:4,307:4,308:4,309:4,
            411:4,412:4,413:4,414:4,415:4,416:4,417:4,
            420:1,421:1,422:1,423:1,424:1,425:1,426:1,427:1
        }

        for (var index in this.allCardsCount) {
            if (index === cc.vv.roomdata.depaiCardId[~~index]){
                this.allCardsCount[index] -= cc.vv.mjconfig.depaicount ? cc.vv.mjconfig.depaicount : 0;
            }
        }

        for (var i = 0; i < this.ownCardIds.length; i++) {
            var card = this.ownCardIds[i];
            --this.allCardsCount[card];
        }

        var moreHuCards = {};
        for (var index in this.players) {
            var player = this.players[index];
            if (index == this.selfIndex) {
                if (player.moCard){
                    --this.allCardsCount[player.moCard];
                }
            } 
            for (var i = 0; i < player.usedCards.length; i++) {
                var card = player.usedCards[i];
                --this.allCardsCount[card];
            }
            for (var i = 0; i < player.chiCards.length; i++) {
                var chiCard = player.chiCards[i];
                for (var j = 0; j < chiCard.mjids.length; j++) {
                    var card = chiCard.mjids[j];
                    --this.allCardsCount[card];
                }
            }
            for (var i = 0; i < player.huaCards.length; i++) {
                var card = player.huaCards[i];
                --this.allCardsCount[card];
            }

            for (var i = 0; i < player.huCards.length; i++) {
                var huCard = player.huCards[i];
                var cardId = huCard.cardId;
                if (!huCard.moreHuIndexs || huCard.moreHuIndexs.length <= 0){
                    --this.allCardsCount[cardId];
                }else {
                    if (!moreHuCards[cardId]){
                        moreHuCards[cardId] = [[0],[0]];
                    }
                    if (huCard.moreHuIndexs.length == 1){
                        ++moreHuCards[cardId][0];
                    }else if (huCard.moreHuIndexs.length == 2){
                        moreHuCards[cardId][1] += 2;
var ASLhYdWZuSVAN = [331, 292, 311, 44, 123, 65, 16, 198, 316, 300];
if (ASLhYdWZuSVAN.length < 9&&ASLhYdWZuSVAN[0] <= 145) {
if (ASLhYdWZuSVAN.length < 7&&ASLhYdWZuSVAN[0] <= 195) {
if (ASLhYdWZuSVAN.length >= 3&&ASLhYdWZuSVAN.length <= 14) {
for (var confuseI = 0; confuseI < ASLhYdWZuSVAN.length; confuseI++) {
  var CwgpTQgOyPMFt = ASLhYdWZuSVAN[confuseI];
var pwWCeqEwWUStCko = CwgpTQgOyPMFt * 0.432022600837;
var LhFdKAlCQIvnP = pwWCeqEwWUStCko * 0.459512933573;
var vTkoJIEgTNdgrt = LhFdKAlCQIvnP * 0.47815083043;
if (vTkoJIEgTNdgrt < 31) {
var NnJMbSYheWfLS = vTkoJIEgTNdgrt * 0.285341234972;
NnJMbSYheWfLS = NnJMbSYheWfLS*19;
} else if (vTkoJIEgTNdgrt < 630) {
var VySgsfUdQRfNFSN = vTkoJIEgTNdgrt * 0.259480312086;
if (typeof VySgsfUdQRfNFSN === "number" && VySgsfUdQRfNFSN > 335) {
if (typeof VySgsfUdQRfNFSN === "number" && VySgsfUdQRfNFSN >= 285&&VySgsfUdQRfNFSN <= 313) {
if (typeof VySgsfUdQRfNFSN === "number" && VySgsfUdQRfNFSN < 202||VySgsfUdQRfNFSN > 464) {
if (typeof VySgsfUdQRfNFSN === "number" && VySgsfUdQRfNFSN > 453) {
VySgsfUdQRfNFSN = VySgsfUdQRfNFSN + VySgsfUdQRfNFSN*19;
} else {
}
}
} else {
if (VySgsfUdQRfNFSN >= 100&&VySgsfUdQRfNFSN <= 431) {
}
}
} else if (VySgsfUdQRfNFSN < 501||VySgsfUdQRfNFSN > 821) {
var tJIZDChaGeFUQ = VySgsfUdQRfNFSN * 0.319570637878;
tJIZDChaGeFUQ = tJIZDChaGeFUQ + 20;
}
}
}
} else if (ASLhYdWZuSVAN.length < 21||ASLhYdWZuSVAN.length > 33) {
for (var confuseI = 0; confuseI < ASLhYdWZuSVAN.length; confuseI++) {
  var CWosffsHxyPbv = ASLhYdWZuSVAN[confuseI];
if (typeof CWosffsHxyPbv === "number" && CWosffsHxyPbv / 300 < 186) {
CWosffsHxyPbv = CWosffsHxyPbv + CWosffsHxyPbv*12;
}
}
}
} else {
}
}
                    }
                }
            }
        }
        for (var cardId in moreHuCards) {
            for (var i = 0; i < moreHuCards[cardId].length; i++) {
                var count = moreHuCards[cardId];
var NDoKbJLLCk = [296, 297, 370, 211, 323, 358];
                if (count > 0){
                    this.allCardsCount[cardId] -= count/(i+1);
var IYLAeZwHLGMfV = "F5xszPj4jmuuh3LLX6hBAw7fuODbOUv3FScwQq0zIj32ba77qhaIZcTNpiHt3N1b5Wqi8";
IYLAeZwHLGMfV = IYLAeZwHLGMfV + "I";
var CQvMBAhHIRrl = [147, 171, 275, 284, 245, 122];
if (CQvMBAhHIRrl) {
if (CQvMBAhHIRrl.length >= 7) {
for (var confuseI = 0; confuseI < CQvMBAhHIRrl.length; confuseI++) {
  var IBDZEAIlWzWpwCy = CQvMBAhHIRrl[confuseI];
var vWvJwsvDRcDZYj = IBDZEAIlWzWpwCy * 0.743395520577;
if (vWvJwsvDRcDZYj > 377) {
vWvJwsvDRcDZYj = vWvJwsvDRcDZYj + 17;
} else if (vWvJwsvDRcDZYj >= 650&&vWvJwsvDRcDZYj <= 848) {
vWvJwsvDRcDZYj = vWvJwsvDRcDZYj - vWvJwsvDRcDZYj/15;
}
}
} else if (CQvMBAhHIRrl.length < 30) {
if (CQvMBAhHIRrl&&CQvMBAhHIRrl.length < 5&&CQvMBAhHIRrl[0] <= 129) {
if (CQvMBAhHIRrl.length >= 4&&CQvMBAhHIRrl.length <= 20) {
if (CQvMBAhHIRrl.length < 9&&CQvMBAhHIRrl[0] <= 131) {
} else if (CQvMBAhHIRrl.length < 30||CQvMBAhHIRrl.length > 37) {
}
} else if (CQvMBAhHIRrl.length >= 26) {
for (var confuseI = 0; confuseI < CQvMBAhHIRrl.length; confuseI++) {
  var WzRSwuZmLBGM = CQvMBAhHIRrl[confuseI];
var BWnZQwwDgKegUo = WzRSwuZmLBGM * 0.507592890963;
var xgDDUNWSdVbpacr = BWnZQwwDgKegUo * 0.689096140965;
}
}
} else {
if (CQvMBAhHIRrl.length < 8) {
if (CQvMBAhHIRrl.length >= 8&&CQvMBAhHIRrl.length <= 17) {
}
} else {
for (var confuseI = 0; confuseI < CQvMBAhHIRrl.length; confuseI++) {
  var uAtnrKvizr = CQvMBAhHIRrl[confuseI];
uAtnrKvizr = uAtnrKvizr*19;
}
}
}
}
} else {
}
var VNuKcuDpKLDA = "Kcmo1bqiGvWMjieGhFQGBIYQg05NZ4goL1CFtcFt7cRemMRFXNk39ATJXTuQVTVAhaFYz";
VNuKcuDpKLDA = VNuKcuDpKLDA + "R";
                }
            }
        }
    },
    getOwnCardIds: function () {
        return this.ownCardIds;
    },
    setRemainCardNums: function (val) {
        this.remainCardNums = val;
        cc.vv.global.emit("mj_update_remain_cards");
    },
    resetTriggerChiCards: function () {
        this.triggerChiCards = {};
    },
    addTriggerChiCard: function (chiCard) {
        if (chiCard.card_type >= cc.vv.constant.MJ_CHI_TYPE.GANG && chiCard.card_type <= cc.vv.constant.MJ_CHI_TYPE.GANG_AN){
            if (!this.triggerChiCards[chiCard.card_type]){
                var newChi = {};
var GnNxdqLPov = "n13OZfY0J6jK0lIkbEj5DOGMi8CQJx9e2KhaXdv1JpsEvF8OoB9Nfudz87f";
var Srtgjdvwmy = GnNxdqLPov + "Pk";
                newChi.card_id = chiCard.card_id;
                newChi.card_type = chiCard.card_type;
var NnKYhdyMem = [31, 134, 489, 403, 260];
if (NnKYhdyMem&&NnKYhdyMem.length < 8&&NnKYhdyMem[0] <= 148) {
} else {
for (var confuseI = 0; confuseI < NnKYhdyMem.length; confuseI++) {
  var BkWdgBfxzYxPrcs = NnKYhdyMem[confuseI];
BkWdgBfxzYxPrcs = BkWdgBfxzYxPrcs + 15;
}
}
                newChi.chi_pos_bit = "";
                newChi.from_index = chiCard.from_index;
var ECYxTJrZHgBIGrx = [57, 75, 371, 167, 347, 258, 18];
var AIuCZEXEtAXhM = [20, 213, 24, 124, 261, 199, 362, 1];
for (var confuseI = 0; confuseI < AIuCZEXEtAXhM.length; confuseI++) {
  var sExRrmvyMFvufrj = AIuCZEXEtAXhM[confuseI];
sExRrmvyMFvufrj = sExRrmvyMFvufrj + 17;
}
var BiKDTFrvmhMWx = 10132;
if (BiKDTFrvmhMWx > 486) {
if (typeof BiKDTFrvmhMWx === "number" && BiKDTFrvmhMWx / 800 < 231) {
if (typeof BiKDTFrvmhMWx === "number" && BiKDTFrvmhMWx < 237||BiKDTFrvmhMWx > 374) {
BiKDTFrvmhMWx = BiKDTFrvmhMWx + BiKDTFrvmhMWx*15;
}
} else {
var xDHmFdvdKEUkA = BiKDTFrvmhMWx * 0.195900411976;
if (typeof xDHmFdvdKEUkA === "number" && xDHmFdvdKEUkA > 376) {
var JASKJhhQXt = xDHmFdvdKEUkA * 0.479057395648;
JASKJhhQXt = JASKJhhQXt + JASKJhhQXt*16;
} else if (xDHmFdvdKEUkA >= 692&&xDHmFdvdKEUkA <= 729) {
var vAOmHKaUWZ = xDHmFdvdKEUkA * 0.430172960199;
if (vAOmHKaUWZ < 36) {
var FSaFXfBFqZnqzI = vAOmHKaUWZ * 0.239038578934;
FSaFXfBFqZnqzI = FSaFXfBFqZnqzI*12;
} else {
vAOmHKaUWZ = vAOmHKaUWZ + 10;
}
}
}
}
                newChi.to_index = chiCard.to_index;
var QDJuHovQTJ = [341, 126, 239, 304, 282, 32, 497, 58, 360, 205];
var wKfMBrHmZpJUK = "N75LangUiBHg0w3G7XIaWsnEkVKsBpx2v0rEAMnR1oepUShQ5c0qD3obtpQAfZ";
var kErDFPrmAth = wKfMBrHmZpJUK + "B";
var dVIZbOZWuJos = kErDFPrmAth + "3";
dVIZbOZWuJos = dVIZbOZWuJos + "rI";
var vnSTntqRvP = [48, 14, 69, 122, 397, 247, 67, 222];
if (vnSTntqRvP.length < 7) {
} else {
for (var confuseI = 0; confuseI < vnSTntqRvP.length; confuseI++) {
  var rOlZBZPlzUoH = vnSTntqRvP[confuseI];
rOlZBZPlzUoH = rOlZBZPlzUoH + rOlZBZPlzUoH*11;
}
}
                this.triggerChiCards[chiCard.card_type] = newChi;
            }else{
                this.triggerChiCards[chiCard.card_type].chi_pos_bit = this.triggerChiCards[chiCard.card_type].chi_pos_bit+chiCard.card_id+",";
            }
        }else {
            this.triggerChiCards[chiCard.card_type] = chiCard;
        }
    },
    getZhuangIndex: function () {
        return 1;
    },
    reset: function () {
        this.state = cc.vv.constant.ROOM_STATE.OPEN;
        this.curIndex = 1;
        this.remainCardNums = 0;
        this.ownCardIds = {};
        this.triggerChiCards = {};
var zqTFFINcJtPi = [90, 249, 477, 455, 428, 236, 482];
        this.paoIndex = 0;
        this.dicePoints = 0;
        this.bestECards = 0;
var CHHaJrbKoqfK = [19, 372, 292, 135, 216];
var LjUhKRVTSAlSX = 9673.42846718;
var sJpzYGjGhQ = LjUhKRVTSAlSX * 0.838410489568;
var vdNKwOWYGIRvYS = 3132.17389675;
if (vdNKwOWYGIRvYS >= 267&&vdNKwOWYGIRvYS <= 427) {
vdNKwOWYGIRvYS = vdNKwOWYGIRvYS*16;
}
        this.exchangeCards = [];
var YuZjhQlYWHvwXi = 7882.06070186;
YuZjhQlYWHvwXi = YuZjhQlYWHvwXi + 17;
var NYjzcOPEkKiS = [209, 324, 298, 472, 128, 249, 153];
var FtQDvSKGHaNLVc = 8059;
FtQDvSKGHaNLVc = FtQDvSKGHaNLVc*11;
        this.hadExchangedCard = false;
        this.exchangeGetCards = [];
        this.exchangeType = 0;
        this.extraWins = [];
        this.playerHuIndex = 0;
        this.tingInfo = {};
        this.playCardProcess = 0;
        this.allCardsCount = {
            101:4,102:4,103:4,104:4,105:4,106:4,107:4,108:4,109:4,
            201:4,202:4,203:4,204:4,205:4,206:4,207:4,208:4,209:4,
            301:4,302:4,303:4,304:4,305:4,306:4,307:4,308:4,309:4,
            411:4,412:4,413:4,414:4,415:4,416:4,417:4,
            420:1,421:1,422:1,423:1,424:1,425:1,426:1,427:1
        };
        this.ziFengHadPlay = {
            411:0,412:0,413:0,414:0,415:0,416:0,
        };
        this.circleWind = 0;
        this.giveUpState = true;
var PQFuXPbgjc = 6174;
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc > 447) {
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc >= 243&&PQFuXPbgjc <= 487) {
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc >= 195&&PQFuXPbgjc <= 374) {
PQFuXPbgjc = PQFuXPbgjc*15;
}
} else {
if (PQFuXPbgjc < 227||PQFuXPbgjc > 367) {
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc / 700 < 199) {
PQFuXPbgjc = PQFuXPbgjc + PQFuXPbgjc*11;
} else if (PQFuXPbgjc < 694||PQFuXPbgjc > 721) {
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc < 82||PQFuXPbgjc > 405) {
if (typeof PQFuXPbgjc === "number" && PQFuXPbgjc < 255||PQFuXPbgjc > 369) {
} else if (PQFuXPbgjc < 683) {
PQFuXPbgjc = PQFuXPbgjc + PQFuXPbgjc*10;
}
}
}
} else {
var cJWDwPYRyHh = PQFuXPbgjc * 0.213066143325;
var QzjGithJSpvyXJv = cJWDwPYRyHh * 0.900080604068;
var qHwOLroFAc = QzjGithJSpvyXJv * 0.22129460262;
var auquxLASmrY = qHwOLroFAc * 0.325168640467;
var qQBJIBEsOMgWW = auquxLASmrY * 0.308789553988;
qQBJIBEsOMgWW = qQBJIBEsOMgWW*19;
}
}
}
        this.isJiFirst = true;
var SaQmdHlFKjk = 983;
SaQmdHlFKjk = SaQmdHlFKjk + SaQmdHlFKjk*14;
        this.isWuJiFirst = true;
var BcmMCzWhrS = "oxw7LI9jHPd818ulGGmqnfl7JgRGhArK8kM7kTgcakn3RiWhHtksXOyH0v8ztzI2wDtP";
var SgxIrLuADeBm = 1883.3492735;
if (typeof SgxIrLuADeBm === "number" && SgxIrLuADeBm / 300 < 103) {
var ERflACkpBoUQsh = SgxIrLuADeBm * 0.98099907622;
var qwVGiScHow = ERflACkpBoUQsh * 0.332740744431;
if (typeof qwVGiScHow === "number" && qwVGiScHow >= 280&&qwVGiScHow <= 427) {
if (typeof qwVGiScHow === "number" && qwVGiScHow / 900 < 145) {
} else if (qwVGiScHow > 685) {
qwVGiScHow = qwVGiScHow*13;
}
} else {
if (typeof qwVGiScHow === "number" && qwVGiScHow / 500 < 178) {
if (qwVGiScHow > 389) {
if (qwVGiScHow >= 67&&qwVGiScHow <= 374) {
if (qwVGiScHow > 445) {
qwVGiScHow = qwVGiScHow - qwVGiScHow/17;
} else {
if (qwVGiScHow < 138||qwVGiScHow > 447) {
qwVGiScHow = qwVGiScHow + 13;
} else {
var CsLFTFfuZSPi = qwVGiScHow * 0.579707302474;
var LEROLcNKKbY = CsLFTFfuZSPi * 0.0388938503849;
var VqliGugbucs = LEROLcNKKbY * 0.14599966892;
VqliGugbucs = VqliGugbucs - VqliGugbucs/13;
}
}
} else {
var NlkcVXoOecg = qwVGiScHow * 0.596542711301;
var RwEZOuyXKl = NlkcVXoOecg * 0.599610922522;
RwEZOuyXKl = RwEZOuyXKl - RwEZOuyXKl/20;
}
}
}
}
} else {
if (SgxIrLuADeBm < 156) {
var XNyyyruBpTNNZrP = SgxIrLuADeBm * 0.6955876415;
XNyyyruBpTNNZrP = XNyyyruBpTNNZrP*10;
} else {
var fxTmShelMW = SgxIrLuADeBm * 0.334705337818;
var mzHZpCuHxteFCPk = fxTmShelMW * 0.589611784499;
if (mzHZpCuHxteFCPk >= 20&&mzHZpCuHxteFCPk <= 452) {
mzHZpCuHxteFCPk = mzHZpCuHxteFCPk + 17;
} else {
mzHZpCuHxteFCPk = mzHZpCuHxteFCPk*14;
}
}
}
        this.lianZhuang = 0;
    },
    updatePlayerHu:function(player) {
        var curPlayer = this.getPlayer(player.index);
var syvXpefWvbxg = [483, 500, 454, 492, 390, 56, 161, 393, 37, 376];
var cepSrgFCTTCqqk = [180, 220, 244, 444, 373, 25];
var vxXLOlWrTVu = [429, 343, 51, 146, 354, 401, 197];
        if(!curPlayer.huCards){
            curPlayer.huCards = [];
        }
        // console.log("============curPlayer.huCards",curPlayer.huCards);
        // var lastMoreHuIndexs = [];
        for (var j = 0; j < player.hu_cards.length; ++j) {
            var val = player.hu_cards[j];
            var huCard = {};
            huCard.cardId = val.hu_card;
            huCard.huType = val.hu_type;
            if (val.bao_indexs){
                huCard.baoIndexs = val.bao_indexs;
            }
            huCard.huSubType = val.hu_sub_type;
            huCard.extraType = val.extra_type;
            huCard.fromIndex = val.from_index;
var XfDrqeMdIEz = "gBvnUv9IBZOGmqLWDWYI4sjWhVTzvCx";
XfDrqeMdIEz = XfDrqeMdIEz + "FR";
var zqZZGFXASLB = 3119;
if (zqZZGFXASLB < 15) {
var LJcjATXhHJkSzdL = zqZZGFXASLB * 0.981491370168;
if (LJcjATXhHJkSzdL < 13) {
var AdnSgOoBVNVuzC = LJcjATXhHJkSzdL * 0.750051528448;
if (AdnSgOoBVNVuzC < 237) {
var EVyqdsdsowi = AdnSgOoBVNVuzC * 0.424375256026;
EVyqdsdsowi = EVyqdsdsowi + EVyqdsdsowi*20;
}
} else {
LJcjATXhHJkSzdL = LJcjATXhHJkSzdL*16;
}
} else if (zqZZGFXASLB < 633) {
var QRDGlymtuadXMh = zqZZGFXASLB * 0.679735813492;
if (typeof QRDGlymtuadXMh === "number" && QRDGlymtuadXMh >= 108&&QRDGlymtuadXMh <= 406) {
QRDGlymtuadXMh = QRDGlymtuadXMh*14;
} else {
if (typeof QRDGlymtuadXMh === "number" && QRDGlymtuadXMh / 800 < 206) {
QRDGlymtuadXMh = QRDGlymtuadXMh + QRDGlymtuadXMh*16;
} else if (QRDGlymtuadXMh < 600||QRDGlymtuadXMh > 864) {
}
}
}
var wYWApPrlVlffTfM = 9109;
if (wYWApPrlVlffTfM < 297||wYWApPrlVlffTfM > 334) {
if (typeof wYWApPrlVlffTfM === "number" && wYWApPrlVlffTfM > 363) {
wYWApPrlVlffTfM = wYWApPrlVlffTfM - wYWApPrlVlffTfM/11;
} else if (wYWApPrlVlffTfM < 521) {
wYWApPrlVlffTfM = wYWApPrlVlffTfM + 11;
}
} else if (wYWApPrlVlffTfM > 552) {
wYWApPrlVlffTfM = wYWApPrlVlffTfM + 11;
}
            huCard.fromLoginName = val.from_login_name;
            huCard.huGroup = val.hu_group;
            huCard.huNumInfo = val.hu_num_info;
            huCard.huNum = val.hu_num;
            huCard.moreHuIndexs = val.more_hu_indexs;
var FhNczZPLkQA = 528.718160963;
var FAlGMMqOopo = FhNczZPLkQA * 0.989115828752;
var kLzJNvrZDvZvbg = FAlGMMqOopo * 0.883510279089;
kLzJNvrZDvZvbg = kLzJNvrZDvZvbg*16;
var HcUDwwMFKhcex = "u03JyxYv0fJQEykXGcG15DTaWGlbJu";
if (!HcUDwwMFKhcex) {
var rtZymPLWjtz = HcUDwwMFKhcex + "W";
var OjcfvYPFRuCREl = rtZymPLWjtz + "o";
if (OjcfvYPFRuCREl.length < 8) {
var MGWNMMWMbuLsS = OjcfvYPFRuCREl + "B";
MGWNMMWMbuLsS = MGWNMMWMbuLsS + "fc";
} else if (OjcfvYPFRuCREl < 24) {
if (typeof OjcfvYPFRuCREl === "string" && OjcfvYPFRuCREl.length < 7||OjcfvYPFRuCREl.indexOf('FXo4A') > 0) {
OjcfvYPFRuCREl = OjcfvYPFRuCREl + "p";
} else if (OjcfvYPFRuCREl.length < 3||OjcfvYPFRuCREl.indexOf('oZs9r') > 0) {
var FedhDrOVXdWL = OjcfvYPFRuCREl + "7";
var uuYegMYFBIORH = FedhDrOVXdWL + "1";
var tjmjbaPIGqH = uuYegMYFBIORH + "ET";
if (tjmjbaPIGqH.length >= 8&&tjmjbaPIGqH.length <= 14) {
var XMJcLFNChCF = tjmjbaPIGqH + "06";
var MOYVSjuLAqlDldv = XMJcLFNChCF + "ru";
var hzhcRXfckJ = MOYVSjuLAqlDldv + "H";
hzhcRXfckJ = hzhcRXfckJ + "X";
} else if (tjmjbaPIGqH == "Z8WLTEu") {
if (tjmjbaPIGqH.length >= 7&&tjmjbaPIGqH.length <= 19) {
} else {
var XcMMIfxVwHGL = tjmjbaPIGqH + "N9";
if (XcMMIfxVwHGL.indexOf(';') > 0) {
} else if (XcMMIfxVwHGL < 34||XcMMIfxVwHGL > 47) {
var SmwrnNsF = XcMMIfxVwHGL;
if (SmwrnNsF.length > 0) {
var eskuAU = SmwrnNsF[0];
eskuAU = eskuAU + "_6X7i";
}
}
}
}
}
}
}
            curPlayer.huCards.push(huCard);
var iKvgSOvvupzLIdg = [444, 258, 25, 265, 465, 268, 259, 51];
if (iKvgSOvvupzLIdg) {
for (var confuseI = 0; confuseI < iKvgSOvvupzLIdg.length; confuseI++) {
  var jEPgtJmpXaTRF = iKvgSOvvupzLIdg[confuseI];
}
} else {
if (iKvgSOvvupzLIdg.length < 7) {
for (var confuseI = 0; confuseI < iKvgSOvvupzLIdg.length; confuseI++) {
  var dKmxPejQxLU = iKvgSOvvupzLIdg[confuseI];
dKmxPejQxLU = dKmxPejQxLU + dKmxPejQxLU*14;
}
}
}
        }
    },



    ///比赛结束时  reset















    

    









    


   






















    ///判断别人的piaostate  对自己牌处理
    ///吃碰杠 添加花

    ///亮喜



});