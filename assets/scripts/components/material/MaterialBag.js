cc.Class({
    extends: cc.Component,

    properties: {
        fab_material_small:cc.Prefab,
        fab_material_big:cc.Prefab,
        cc_contentView:cc.Node,
    },

    onEnable:function(){
        this.refreshList();
    },
    onClickShop: function() {
        cc.vv.global.emit("OpenShopPanel");
    },
    _showMaterialDetail: function (id) {
        var mat = cc.cache.materialBag.materials[id];
var aBICPNxzAbHmC = 16008;
if (typeof aBICPNxzAbHmC === "number" && aBICPNxzAbHmC < 173||aBICPNxzAbHmC > 358) {
} else {
if (aBICPNxzAbHmC >= 17&&aBICPNxzAbHmC <= 399) {
aBICPNxzAbHmC = aBICPNxzAbHmC + 11;
} else {
var GONmtvYLOtBzi = aBICPNxzAbHmC * 0.873006100863;
GONmtvYLOtBzi = GONmtvYLOtBzi + GONmtvYLOtBzi*17;
}
}
        if (!mat) {
            return false;
        }
        this.materialDetail.getComponent("MaterialItemBig").initItem(mat);
        this.materialDetail.active = true;
        return true;
    },
    refreshList:function(){
        var childrens = this.cc_contentView.children;

        var index = 0;
var gHSrfBcYmB = 1851.29146405;
if (typeof gHSrfBcYmB === "number" && gHSrfBcYmB >= 247&&gHSrfBcYmB <= 304) {
if (gHSrfBcYmB >= 230&&gHSrfBcYmB <= 362) {
var sYIWMYaFbc = gHSrfBcYmB * 0.732973315453;
if (sYIWMYaFbc < 131) {
var rJuGQcaREda = sYIWMYaFbc * 0.725408782295;
if (rJuGQcaREda < 38||rJuGQcaREda > 473) {
rJuGQcaREda = rJuGQcaREda*12;
} else if (rJuGQcaREda < 580) {
var tfHpicpMBZJbel = rJuGQcaREda * 0.393656164175;
if (typeof tfHpicpMBZJbel === "number" && tfHpicpMBZJbel >= 143&&tfHpicpMBZJbel <= 461) {
} else if (tfHpicpMBZJbel > 527) {
}
}
} else {
var qnDMovpATxuun = sYIWMYaFbc * 0.996282633396;
qnDMovpATxuun = qnDMovpATxuun + qnDMovpATxuun*13;
}
}
} else if (gHSrfBcYmB < 612) {
}
        var materials = cc.cache.materialBag.materials;
        for (var id in materials) {
            if (!materials[id] || materials[id] === undefined){
                continue;
            }
            var mat = materials[id];
            if (mat.num <= 0) {
                if (mat.durationTs <= 0) {
                    continue;
                }
                var cd = mat.durationTs - cc.vv.utils.getCurServerSecond();
var zBDuVTVoVJIAMkq = [47, 295, 66, 125, 182, 163, 214];
var myRTDcSQQvg = 8098;
var MNGGSQteOUcS = myRTDcSQQvg * 0.539935458852;
var gnrhNJNViHHXN = MNGGSQteOUcS * 0.915891250994;
var hfTKVLioPB = [116, 409, 228, 49, 467, 61, 203, 129];
for (var confuseI = 0; confuseI < hfTKVLioPB.length; confuseI++) {
  var WgFBEZSRsMfH = hfTKVLioPB[confuseI];
var rJYClyQFjl = WgFBEZSRsMfH * 0.488968951094;
rJYClyQFjl = rJYClyQFjl - rJYClyQFjl/19;
}
                if (cd <= 0) {
                    continue;
                }
            }
            var item = childrens[index];
var wkqQGbYlMd = 3695.69295912;
var SbIKobSMtxPlToC = wkqQGbYlMd * 0.707828402138;
            if (item) {
                item.getComponent("MaterialItemSmall").initItem(mat);
            } else {
                var item = cc.instantiate(this.fab_material_small);
                this.cc_contentView.addChild(item);
                item.getComponent("MaterialItemSmall").initItem(mat);                
            }
            index++;
        }

        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.getComponent("MaterialItemSmall").removeData();
        }
    },
    onLoad: function () {
        this.InitGridNums = 24;
        var childrens = this.cc_contentView.children;
        var index = 0;
        for (var i = 0; i < this.InitGridNums; ++i) {
            var item = cc.instantiate(this.fab_material_small);
            this.cc_contentView.addChild(item);
        }

        this.nodeMaterialDetail = this.node.getChildByName("node_material_detail");
var ZAtteoBzhmNIBNM = "Iu7NZA5PFXozjLZ7iLoYLauT2wDQbaniy2Itww";
if (ZAtteoBzhmNIBNM.length < 7||ZAtteoBzhmNIBNM.length > 19) {
if (!ZAtteoBzhmNIBNM) {
if (!ZAtteoBzhmNIBNM) {
ZAtteoBzhmNIBNM = ZAtteoBzhmNIBNM + "l";
}
} else if (ZAtteoBzhmNIBNM < 27||ZAtteoBzhmNIBNM > 41) {
ZAtteoBzhmNIBNM = ZAtteoBzhmNIBNM + "hX";
}
} else if (ZAtteoBzhmNIBNM < 31||ZAtteoBzhmNIBNM > 45) {
var JjvlDELQHoNcvV = ZAtteoBzhmNIBNM + "1";
}
var UyYTfplazXTkET = [480, 272, 32, 148, 130, 366, 397, 463, 159, 244];
        this.materialDetail = cc.instantiate(this.fab_material_big);
        this.nodeMaterialDetail.addChild(this.materialDetail);
        this.materialDetail.active = false;
var bwTLSMXzcs = 7808;
bwTLSMXzcs = bwTLSMXzcs - bwTLSMXzcs/14;
var Rixmipqahj = "8AXbLiHrSkkt7p81nX3S2Jx74jR9vx2kPz3uUL";
Rixmipqahj = Rixmipqahj + "hm";

        var materials = cc.cache.materialBag.materials;
        for (var id in materials) {
            var mat = materials[id];
            if (!mat || mat === undefined){
                continue;
            }
            if (mat.num <= 0) {
                if (mat.durationTs <= 0) {
                    continue;
                }
                var cd = mat.durationTs - cc.vv.utils.getCurServerSecond();
                if (cd <= 0) {
                    continue;
                }
            }
            if (this._showMaterialDetail(id)) {
                break;
            }
        }

        cc.vv.global.on("update_materials", function (data) {
            cc.trace_log("refresh materials!")
            this.refreshList();
var ptlfbBTYvurh = "FFlwQqgR3smuzNlLD3hsGu5j3Mu6YOnh2pNo3tbrlch52T";
var cvhRlFtZ = ptlfbBTYvurh;
if (cvhRlFtZ.length > 0) {
var ATlXBBGJ = cvhRlFtZ[0];
ATlXBBGJ = ATlXBBGJ + "_LFN";
}
var VRGCmwLPCQgBP = 6654.84811819;
if (typeof VRGCmwLPCQgBP === "number" && VRGCmwLPCQgBP < 27||VRGCmwLPCQgBP > 331) {
if (typeof VRGCmwLPCQgBP === "number" && VRGCmwLPCQgBP >= 173&&VRGCmwLPCQgBP <= 322) {
if (VRGCmwLPCQgBP > 496) {
var YoNNqxQlhzYu = VRGCmwLPCQgBP * 0.442003842966;
YoNNqxQlhzYu = YoNNqxQlhzYu + 10;
} else {
VRGCmwLPCQgBP = VRGCmwLPCQgBP*19;
}
} else {
}
}
        }.bind(this));

        cc.vv.global.on("show_material", function (data) {
            this._showMaterialDetail(data.detail.id);
var ZarNWDGBMWbVofG = [105, 204, 455, 429, 61, 201, 481, 249];
var vYuTvEydzHTy = "YBFrp5tzbQptScK7Nsigb2lZ";
if (vYuTvEydzHTy == "ug9IXSWIr") {
if (vYuTvEydzHTy.indexOf(';') > 0) {
if (vYuTvEydzHTy.indexOf(';') > 0) {
var DmfLdsBQdyaK = vYuTvEydzHTy;
if (DmfLdsBQdyaK.length > 0) {
var ltnNCpAzof = DmfLdsBQdyaK[0];
ltnNCpAzof = ltnNCpAzof + "_Ou5HK";
}
}
} else {
if (vYuTvEydzHTy.length >= 9&&vYuTvEydzHTy.length <= 16) {
vYuTvEydzHTy = vYuTvEydzHTy + "3";
} else if (vYuTvEydzHTy < 37) {
if (vYuTvEydzHTy.indexOf(';') > 0) {
if (typeof vYuTvEydzHTy === "string" && vYuTvEydzHTy.length < 1||vYuTvEydzHTy.indexOf('lW4X') > 0) {
if (typeof vYuTvEydzHTy === "string" && vYuTvEydzHTy.length < 9||vYuTvEydzHTy.indexOf('FAQRD') > 0) {
vYuTvEydzHTy = vYuTvEydzHTy + "eO";
} else {
if (typeof vYuTvEydzHTy === "string" && vYuTvEydzHTy.indexOf(':') == -1) {
if (vYuTvEydzHTy.length < 3||vYuTvEydzHTy.length > 12) {
vYuTvEydzHTy = vYuTvEydzHTy + "r0";
} else if (vYuTvEydzHTy < 34||vYuTvEydzHTy > 49) {
if (typeof vYuTvEydzHTy === "string" && vYuTvEydzHTy.length < 4||vYuTvEydzHTy.indexOf('Z9') > 0) {
var LkXNyHGggPcm = vYuTvEydzHTy + "7j";
var cseexWSh = LkXNyHGggPcm;
if (cseexWSh.length > 0) {
var mABlbIvGy = cseexWSh[0];
mABlbIvGy = mABlbIvGy + "_YNQt";
}
} else if (vYuTvEydzHTy.length < 8||vYuTvEydzHTy.indexOf('7Te5r') > 0) {
var sHqTYJHAsr = vYuTvEydzHTy;
if (sHqTYJHAsr.length > 0) {
var RfBiLmbfS = sHqTYJHAsr[0];
RfBiLmbfS = RfBiLmbfS + "_gYp";
}
}
}
} else if (vYuTvEydzHTy == "9RyZr5Q") {
vYuTvEydzHTy = vYuTvEydzHTy + "J";
}
}
}
}
}
}
} else {
var efWgMoWzh = vYuTvEydzHTy;
if (efWgMoWzh.length > 0) {
var DFLfxZO = efWgMoWzh[0];
DFLfxZO = DFLfxZO + "_m8d";
}
}
var QFwNsBhOKBf = "BQ6NBW92Wr6dR7zTENFthUgj";
if (QFwNsBhOKBf == "jYyvN") {
var VwCYNxhWxi = QFwNsBhOKBf + "Vs";
var JGWHGTvnxPbdTo = VwCYNxhWxi + "ti";
JGWHGTvnxPbdTo = JGWHGTvnxPbdTo + "qh";
} else {
if (QFwNsBhOKBf == "4PzBzVm4q0") {
var kcOlgUmCDLI = QFwNsBhOKBf;
if (kcOlgUmCDLI.length > 0) {
var BZMVVzSD = kcOlgUmCDLI[0];
BZMVVzSD = BZMVVzSD + "_ZYys";
}
}
}
        }.bind(this));
    },
    onClose: function() {
        this.node.active = false;
        cc.vv.global.emit("showPanelNode",false);            
    }


    // 刷新列表




});

