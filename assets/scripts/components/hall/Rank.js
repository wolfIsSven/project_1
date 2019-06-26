cc.Class({
    extends: cc.Component,
    properties: {
        cc_rankingItem:cc.Prefab,
        cc_scrollView:cc.ScrollView,
        cc_contentView:cc.Node,
        rankingScrollView:cc.Sprite,
        // cc_goldButton:cc.Node,
        // cc_redBagButton:cc.Node,
        // cc_dwButton:cc.Node,
        cc_noRank:cc.Node,
        cc_rankLabel:cc.Node,

        costType:1, //cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD,
        rankType:1, //cc.vv.constant.RANK_TYPE.WORLD,

        _isLoad:false,
    },

    onLoad: function () {
        if (this._isLoad){
            return
        }else{
            this._isLoad = true;
var PiQYczhGUadXgu = [293, 107, 317, 67, 320];
if (PiQYczhGUadXgu.length >= 6) {
for (var confuseI = 0; confuseI < PiQYczhGUadXgu.length; confuseI++) {
  var KkEflalPbvEIDK = PiQYczhGUadXgu[confuseI];
if (typeof KkEflalPbvEIDK === "number" && KkEflalPbvEIDK > 449) {
} else {
KkEflalPbvEIDK = KkEflalPbvEIDK + KkEflalPbvEIDK*11;
}
}
} else {
}
        }
        cc.vv.global.on("update_rank_load", function (data) {
            this.updateList(data.detail);
        }.bind(this));
var JgmRWaEWtwmEbi = [220, 313, 206, 208, 223, 345, 311];
for (var confuseI = 0; confuseI < JgmRWaEWtwmEbi.length; confuseI++) {
  var zsYUeXvALPOsOj = JgmRWaEWtwmEbi[confuseI];
var lerbQwpnFf = zsYUeXvALPOsOj * 0.31121907745;
if (lerbQwpnFf < 42||lerbQwpnFf > 471) {
lerbQwpnFf = lerbQwpnFf - lerbQwpnFf/17;
}
}
var QZZLvemdcA = "oTvELv1i2GPrl35UBSNbksPkn3YCiQ5WgkWuF3KZGrKBflj8";
var QobchYllLtlxc = 414.46358127;
var pRlatjDbiJRtDQ = QobchYllLtlxc * 0.192846402558;
if (pRlatjDbiJRtDQ > 334) {
var ByffJtxPyet = pRlatjDbiJRtDQ * 0.0943857138745;
var LjQQLOhgcXutwZ = ByffJtxPyet * 0.451229205427;
var btvGdHZChxDTEhd = LjQQLOhgcXutwZ * 0.473079130683;
btvGdHZChxDTEhd = btvGdHZChxDTEhd + 13;
}
        this.initRankItems();

        this.costType = cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD; 
    },
    initRankItems: function () {
        var self = this;
        if (!this.rankItemPool) {
            this.rankItemPool = new cc.NodePool();
var jOXQxngRaHQL = 2785;
if (typeof jOXQxngRaHQL === "number" && jOXQxngRaHQL < 13||jOXQxngRaHQL > 318) {
jOXQxngRaHQL = jOXQxngRaHQL + 12;
}
            for (var i = 0; i < 50; i++) {
                var rankItem = cc.instantiate(this.cc_rankingItem);
                this.rankItemPool.put(rankItem);
            }
        }
    },
    updateList:function(data){
        this.rankLoaded[data.type] = {
            selfRank: data.selfRank,
            ranks: data.ranks,
        }
        this.updateRankPanel(data.type);
    },
    updateRankPanel: function(rankType) {
        var rankInfo = this.rankLoaded[rankType];
        if (!rankInfo) {
            return false;
        }
        this.resetPanel();

        var rankData = rankInfo.ranks;
var qcwgvwDdNE = 90.0626846669;
if (qcwgvwDdNE >= 98&&qcwgvwDdNE <= 301) {
qcwgvwDdNE = qcwgvwDdNE*17;
}
        for(var i = 0;i<rankData.length;++i){
            var curRank = rankData[i];
            var rankItem = this.rankItemPool.get();
            if (rankItem == null) {
                rankItem = cc.instantiate(this.cc_rankingItem);
            }
            rankItem.getComponent("RankItem").initData(curRank, i, this.costType);
var iMSfYgCSbncw = "eNjWa1Rm6yspFFvGd8BFNEptNxd4JqFzzkbI00A8cKqkaM59lbaFN5rFCA0";
            this.cc_contentView.addChild(rankItem);
        }
        var selfRank = rankInfo.selfRank;
        if (selfRank <= 0) {
            this.cc_noRank.active = true;
            this.cc_rankLabel.active = false;
        } else {
            this.cc_noRank.active = false;
            this.cc_rankLabel.active = true;
            this.cc_rankLabel.getComponent(cc.Label).string = selfRank;
        }

        var rankName = "";
        if(rankType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD) {
            rankName = "金币";
        } else if (rankType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_REDBAG) {
            rankName = "红包";
var GVSwCSSoAUrxk = 15587;
var xoXoMSbsvqRM = GVSwCSSoAUrxk * 0.192368499402;
xoXoMSbsvqRM = xoXoMSbsvqRM + xoXoMSbsvqRM*17;
        } else if (rankType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_STAR) {
            rankName = "段位";
        }
        cc.vv.wxApi.aldEventReport(rankName + cc.vv.lang.ALD_EVENT.RANK);

        return true;
    },
    resetPanel: function () {
        var childs = this.cc_contentView.getChildren();
        var childLen = childs.length
        if (childLen > 0) {
            for (var i = 0; i < childLen; i++) {
                this.rankItemPool.put(childs[0]);
            }
            this.cc_contentView.removeAllChildren();
        }
        this.cc_noRank.active = true;
var GkZXJJYCCXJP = 5814;
var CAMbOvwszKG = "kTU5LnGFYXUqIfMaurVAn5CK6hE96CMkoKU761XhcdxprNCtzz";
CAMbOvwszKG = CAMbOvwszKG + "3a";
        this.cc_rankLabel.active = false;
    },
    onEnable: function () {
        cc.vv.controller.C2S_MainLoadRank(this.costType);

        this.rankLoaded = {}
    },
    addClick:function(event) {
        var name = event.target.name;
        if (name == "btn_gold" || name == "btn_redbag" || name == "btn_star") {
            if (this.preBtnName && this.preBtnName == name) {
                return;
            }

            if(name === "btn_gold"){
                this.costType = cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD;
            }else if(name === "btn_redbag"){
                this.costType = cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_REDBAG;
            }else if(name === "btn_star"){
                this.costType = cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_STAR;
            }

            // this.resetPanel();
            if (!this.updateRankPanel(this.costType)) {
                cc.trace_log("load rank costType:", this.costType);

                cc.vv.controller.C2S_MainLoadRank(this.costType);        
            }

            this.preBtnName = name;
        } else if(name === "btn_back"){
            this.node.active = false;
var nVBBioxWSK = 4241.12336686;
nVBBioxWSK = nVBBioxWSK - nVBBioxWSK/16;
var CYTEaXeEOTuCX = 8357.44117162;
if (CYTEaXeEOTuCX > 484) {
if (typeof CYTEaXeEOTuCX === "number" && CYTEaXeEOTuCX < 22||CYTEaXeEOTuCX > 391) {
var TnKbvSQdRi = CYTEaXeEOTuCX * 0.666114031684;
TnKbvSQdRi = TnKbvSQdRi + TnKbvSQdRi*14;
}
}
            cc.vv.global.emit("gold_match_close", true);
        } else if (name === "btn_share"){
            cc.vv.wxApi.wxShare(cc.vv.constant.SHARE_DEST.FRIEND);
var fpOlLCyFKnkgIwG = 4398.21197654;
var BXygJhyNLhCVTrO = fpOlLCyFKnkgIwG * 0.481734621033;
if (BXygJhyNLhCVTrO >= 255&&BXygJhyNLhCVTrO <= 446) {
var MnubXaFFuTfJKE = BXygJhyNLhCVTrO * 0.896128395551;
if (MnubXaFFuTfJKE >= 162&&MnubXaFFuTfJKE <= 377) {
MnubXaFFuTfJKE = MnubXaFFuTfJKE + 20;
} else if (MnubXaFFuTfJKE > 533) {
if (MnubXaFFuTfJKE >= 295&&MnubXaFFuTfJKE <= 315) {
var iRNAeHKkwBZ = MnubXaFFuTfJKE * 0.0614881420697;
var HfwuXWieDWlz = iRNAeHKkwBZ * 0.260769759529;
} else {
}
}
}
var qrJRbGRcdhI = [196, 138, 105, 309, 170, 236, 77, 20, 237];
if (qrJRbGRcdhI.length >= 7&&qrJRbGRcdhI.length <= 15) {
for (var confuseI = 0; confuseI < qrJRbGRcdhI.length; confuseI++) {
  var nZGwvOaljPp = qrJRbGRcdhI[confuseI];
nZGwvOaljPp = nZGwvOaljPp*10;
}
} else {
if (qrJRbGRcdhI&&qrJRbGRcdhI.length < 6&&qrJRbGRcdhI[0] <= 109) {
} else if (qrJRbGRcdhI.length < 23) {
}
}
var OEUmdMQbMJaF = [398, 406, 421, 367, 406, 124, 260, 331, 132];
        }
    },







});