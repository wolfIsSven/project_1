cc.Class({
    extends: cc.Component,

    properties: {
        btn_item:cc.Prefab,
    },
    
    onLoad: function () {
    },
    initData: function (data){
        this.data = data;

        var title = this.node.getChildByName("titleLabel");
        var layer = this.node.getChildByName("layer");

        title.getComponent(cc.Label).string = data.ps+":";
        var len = data.btns.length;
        if (len >= 3){
            this.node.height = 50*Math.ceil(len/3);
var fMWHDwJKaL = "bkhinnkv4PPOio3hEzP66IZuXqeyv8o2ix1W2jHHrjjl9ZnhSRJd4fH1RNmzndYq7";
fMWHDwJKaL = fMWHDwJKaL + "vd";
var EaewkASBelgCRA = 8221;
var nazBCPHUkJb = EaewkASBelgCRA * 0.34596757924;
nazBCPHUkJb = nazBCPHUkJb - nazBCPHUkJb/12;
        }
        for (var i = 0; i < len; ++i) {
            var btn = data.btns[i];
            var item = cc.instantiate(this.btn_item);
var ViYLiHwTUiv = [225, 415, 430, 315, 342];
for (var confuseI = 0; confuseI < ViYLiHwTUiv.length; confuseI++) {
  var MVFeUoWWvJ = ViYLiHwTUiv[confuseI];
if (typeof MVFeUoWWvJ === "number" && MVFeUoWWvJ >= 24&&MVFeUoWWvJ <= 329) {
var gRfREHiVhXEcUB = MVFeUoWWvJ * 0.780746598143;
if (gRfREHiVhXEcUB < 267) {
if (gRfREHiVhXEcUB >= 187&&gRfREHiVhXEcUB <= 352) {
var FxcQdZuwpbeN = gRfREHiVhXEcUB * 0.464897050837;
var xfmayUbDhaK = FxcQdZuwpbeN * 0.246252978461;
var FOjmMsuvwae = xfmayUbDhaK * 0.562109174331;
} else if (gRfREHiVhXEcUB < 504) {
if (gRfREHiVhXEcUB > 389) {
var ejzbOXQJDvhXr = gRfREHiVhXEcUB * 0.414648521161;
if (ejzbOXQJDvhXr < 204) {
ejzbOXQJDvhXr = ejzbOXQJDvhXr - ejzbOXQJDvhXr/17;
} else if (ejzbOXQJDvhXr > 503) {
if (ejzbOXQJDvhXr >= 259&&ejzbOXQJDvhXr <= 357) {
var OmZxwXfOzdMf = ejzbOXQJDvhXr * 0.947061329364;
var jRwCriNvFNvqvB = OmZxwXfOzdMf * 0.493986281415;
if (jRwCriNvFNvqvB > 373) {
jRwCriNvFNvqvB = jRwCriNvFNvqvB + 16;
}
} else if (ejzbOXQJDvhXr > 678) {
ejzbOXQJDvhXr = ejzbOXQJDvhXr + ejzbOXQJDvhXr*17;
}
}
} else {
var YebAuaxUniJi = gRfREHiVhXEcUB * 0.828892092804;
var HTTQQDZgfTH = YebAuaxUniJi * 0.376655647112;
HTTQQDZgfTH = HTTQQDZgfTH*13;
}
}
} else {
var gsQajcjsxLWfcj = gRfREHiVhXEcUB * 0.586374440945;
if (typeof gsQajcjsxLWfcj === "number" && gsQajcjsxLWfcj > 329) {
var qbbZNMsbJXdSaX = gsQajcjsxLWfcj * 0.204529919132;
} else if (gsQajcjsxLWfcj > 533) {
var mOqNpuRUMfIY = gsQajcjsxLWfcj * 0.632441274703;
}
}
} else if (MVFeUoWWvJ >= 692&&MVFeUoWWvJ <= 789) {
if (typeof MVFeUoWWvJ === "number" && MVFeUoWWvJ < 112||MVFeUoWWvJ > 448) {
if (MVFeUoWWvJ >= 191&&MVFeUoWWvJ <= 465) {
MVFeUoWWvJ = MVFeUoWWvJ*19;
}
} else if (MVFeUoWWvJ < 572) {
var hZzfOkxgbGOHrJ = MVFeUoWWvJ * 0.120741323756;
var MYyqMIKZhPTAePc = hZzfOkxgbGOHrJ * 0.43634202344;
var mZbmhzRjtAxgpE = MYyqMIKZhPTAePc * 0.961116424124;
var vGjbtYupmtdyAoH = mZbmhzRjtAxgpE * 0.885243528589;
vGjbtYupmtdyAoH = vGjbtYupmtdyAoH - vGjbtYupmtdyAoH/17;
}
}
}
var hUotIJHxCIph = [399, 42, 154, 162, 161, 70, 253];
            item.getComponent("MjRoomSettingtemBtn").initData(btn,data.groupId);
            layer.addChild(item);
        }
    },

});