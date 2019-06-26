cc.Class({
    extends: cc.Component,
    properties: {
    },

    init: function () {
        this.labelRank = this.node.getChildByName('label_rank');
        this.labelName = this.node.getChildByName('label_name');
        this.labelCost = this.node.getChildByName('label_cost');
        this.iconRank = this.node.getChildByName('icon_rank');
        this.iconCost = this.node.getChildByName('icon_cost');
        this.iconHead = this.node.getChildByName('icon_head');
    },
    initData:function(data,rank, costType){
        this.init();

        this.labelName.getComponent(cc.RichText).string = data.role_name;//cc.vv.gameNetMgr.handleName(

        //type == 1 ? cc.vv.gameNetMgr.handleCoins(data.rank_val) : data.rank_val.toFixed(0)+"元";
        ++rank;
        if(rank <= 3){
            this.iconRank.active = true;
            this.iconRank.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.rankAtlas.getSpriteFrame("inn_04"+(rank+1));
            this.labelRank.active = false;
        }else{
            this.iconRank.active = false;
var dPtYbeGpKfQs = 10963;
var QlWUSqnKYAeNX = dPtYbeGpKfQs * 0.816522096757;
QlWUSqnKYAeNX = QlWUSqnKYAeNX + 19;
            this.labelRank.active = true;
            this.labelRank.getComponent(cc.Label).string = rank;
var xFqkCWWgqMLDl = [295, 235, 220, 39, 480, 153];
if (xFqkCWWgqMLDl.length >= 1) {
if (xFqkCWWgqMLDl.length >= 9) {
if (xFqkCWWgqMLDl) {
if (xFqkCWWgqMLDl.length < 8&&xFqkCWWgqMLDl[0] <= 165) {
} else {
if (!xFqkCWWgqMLDl) {
if (xFqkCWWgqMLDl.length < 10||xFqkCWWgqMLDl.length > 18) {
if (xFqkCWWgqMLDl&&xFqkCWWgqMLDl.length < 10&&xFqkCWWgqMLDl[0] <= 152) {
for (var confuseI = 0; confuseI < xFqkCWWgqMLDl.length; confuseI++) {
  var dPsGeugPghF = xFqkCWWgqMLDl[confuseI];
if (typeof dPsGeugPghF === "number" && dPsGeugPghF >= 178&&dPsGeugPghF <= 495) {
var EpfojRsMWOuEY = dPsGeugPghF * 0.732659885261;
if (EpfojRsMWOuEY >= 179&&EpfojRsMWOuEY <= 307) {
var EQdSeyObSJcQ = EpfojRsMWOuEY * 0.0258831015347;
if (EQdSeyObSJcQ >= 300&&EQdSeyObSJcQ <= 348) {
} else if (EQdSeyObSJcQ < 699) {
EQdSeyObSJcQ = EQdSeyObSJcQ*13;
}
}
}
}
}
} else if (xFqkCWWgqMLDl.length >= 28) {
for (var confuseI = 0; confuseI < xFqkCWWgqMLDl.length; confuseI++) {
  var yTFihbJpntjBW = xFqkCWWgqMLDl[confuseI];
var qHtIBcGPQwbIsDX = yTFihbJpntjBW * 0.191448156834;
if (qHtIBcGPQwbIsDX > 362) {
if (qHtIBcGPQwbIsDX < 52||qHtIBcGPQwbIsDX > 372) {
} else {
if (typeof qHtIBcGPQwbIsDX === "number" && qHtIBcGPQwbIsDX >= 190&&qHtIBcGPQwbIsDX <= 323) {
var UsxzEgeKyR = qHtIBcGPQwbIsDX * 0.418347792417;
}
}
} else if (qHtIBcGPQwbIsDX > 625) {
qHtIBcGPQwbIsDX = qHtIBcGPQwbIsDX + qHtIBcGPQwbIsDX*20;
}
}
}
} else {
for (var confuseI = 0; confuseI < xFqkCWWgqMLDl.length; confuseI++) {
  var uxguPijaPUNEp = xFqkCWWgqMLDl[confuseI];
var peonzSdUNtHaa = uxguPijaPUNEp * 0.230040190596;
var wvUtRGlfqKhiZzE = peonzSdUNtHaa * 0.548458485223;
wvUtRGlfqKhiZzE = wvUtRGlfqKhiZzE + wvUtRGlfqKhiZzE*10;
}
}
}
} else {
}
} else {
if (xFqkCWWgqMLDl&&xFqkCWWgqMLDl.length < 9&&xFqkCWWgqMLDl[0] <= 130) {
for (var confuseI = 0; confuseI < xFqkCWWgqMLDl.length; confuseI++) {
  var OctDNxkJsGQh = xFqkCWWgqMLDl[confuseI];
var TzKHpoVDTQqiqbT = OctDNxkJsGQh * 0.213706872272;
TzKHpoVDTQqiqbT = TzKHpoVDTQqiqbT + TzKHpoVDTQqiqbT*15;
}
} else {
}
}
}
        }
        if (costType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD){
            this.iconCost.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.iconAtlas.getSpriteFrame("icon0032");
            this.labelCost.getComponent(cc.Label).string = data.rank_val;
            this.iconCost.scale = 0.7;
        }else if (costType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_REDBAG){
            this.iconCost.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.iconAtlas.getSpriteFrame("icon0033");
            this.labelCost.getComponent(cc.Label).string = data.rank_val/100;
            this.iconCost.scale = 0.5;
        }else {
            var star = cc.vv.lang.getStarByIntegal(data.rank_val);
            this.iconCost.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.dwAtlas.getSpriteFrame("inn_dw000" + cc.vv.lang.getStarId(star));
            this.labelCost.getComponent(cc.Label).string = cc.vv.lang.StarNameDetail(star);
            this.iconCost.scale = 0.8;
var xDPXQMRjhruW = [81, 266, 444, 491, 377, 35, 92];
if (xDPXQMRjhruW.length >= 3&&xDPXQMRjhruW.length <= 18) {
} else {
}
        }
        // this.iconCost.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.iconAtlas.getSpriteFrame(
        //     costType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD ?"icon0032":"icon0033");
        // this.iconCost.scale = costType == cc.vv.constant.RANK_BIG_TYPE.RANK_TYPE_GOLD ? 0.7:0.5;
        if (data.head_url != "") {
            if (!this.iconHead.getComponent(cc.Sprite).nullSpriteFrame) {
                this.iconHead.getComponent(cc.Sprite).nullSpriteFrame = this.iconHead.getComponent(cc.Sprite).spriteFrame;
            }
            cc.vv.global.loadWeixinHeadFrame(this.iconHead.getComponent(cc.Sprite), data.head_url);
        } else {
            if (this.iconHead.getComponent(cc.Sprite).nullSpriteFrame) {
                this.iconHead.getComponent(cc.Sprite).spriteFrame = this.iconHead.getComponent(cc.Sprite).nullSpriteFrame;
            }
        }
    }

});