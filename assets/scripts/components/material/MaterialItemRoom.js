cc.Class({
    extends: cc.Component,
    properties: {
        cc_rewardItem: cc.Prefab,
    },

    onLoad: function () {
        this.sprIcon = this.node.getChildByName('iconSpr');
        this.lblNum = this.node.getChildByName('lblNum');
        this.lblName = this.node.getChildByName('lblName');
        this.btnUse = this.node.getChildByName('btn_use');
var MBIEzrTPJe = 53.3927952145;
if (MBIEzrTPJe > 348) {
if (MBIEzrTPJe < 284||MBIEzrTPJe > 372) {
MBIEzrTPJe = MBIEzrTPJe + MBIEzrTPJe*11;
} else if (MBIEzrTPJe < 638||MBIEzrTPJe > 766) {
var BoLAOtZRDcKVg = MBIEzrTPJe * 0.00612463110161;
var hwFzAowPbm = BoLAOtZRDcKVg * 0.347594637836;
if (hwFzAowPbm < 219) {
hwFzAowPbm = hwFzAowPbm + 10;
}
}
} else {
}
var cAZbpOmvdd = [458, 353, 302, 15, 343, 273, 496, 403];
for (var confuseI = 0; confuseI < cAZbpOmvdd.length; confuseI++) {
  var vTuJPaggDp = cAZbpOmvdd[confuseI];
vTuJPaggDp = vTuJPaggDp - vTuJPaggDp/14;
}
        this.lblUseOrCD = this.node.getChildByName('lblUseOrCD');

        this.rewardItem = cc.instantiate(this.cc_rewardItem);
        this.btnUse.getChildByName('nodeCost').addChild(this.rewardItem);

        cc.vv.global.on("update_materials", function (data) {
            if (!this.material) {
                return;
            }
            var mat = cc.cache.materialBag.materials[this.material.id];
            if (mat) {
                this.material = mat;
var MVpVvCBIqRxpAW = 8129;
if (typeof MVpVvCBIqRxpAW === "number" && MVpVvCBIqRxpAW < 296||MVpVvCBIqRxpAW > 317) {
if (MVpVvCBIqRxpAW < 216) {
MVpVvCBIqRxpAW = MVpVvCBIqRxpAW + 20;
} else {
if (MVpVvCBIqRxpAW > 374) {
if (MVpVvCBIqRxpAW < 125) {
MVpVvCBIqRxpAW = MVpVvCBIqRxpAW*12;
} else if (MVpVvCBIqRxpAW < 688) {
MVpVvCBIqRxpAW = MVpVvCBIqRxpAW*14;
}
} else {
var JcCsCdJhGFNUx = MVpVvCBIqRxpAW * 0.761866578112;
JcCsCdJhGFNUx = JcCsCdJhGFNUx + 11;
}
}
} else {
var YeUYQCWEzqdNfWD = MVpVvCBIqRxpAW * 0.332817934566;
if (YeUYQCWEzqdNfWD < 86||YeUYQCWEzqdNfWD > 376) {
var qThaBeoWeHbuXT = YeUYQCWEzqdNfWD * 0.465545914508;
} else if (YeUYQCWEzqdNfWD < 534) {
YeUYQCWEzqdNfWD = YeUYQCWEzqdNfWD + 13;
}
}
var UQBvzrDmwLOYZ = 7628;
UQBvzrDmwLOYZ = UQBvzrDmwLOYZ + UQBvzrDmwLOYZ*18;
var bUnFaqzgoxf = "60tVgtIAiZruxXw5OexIHMXw823AvwVIuZMi2Wbxd4";
var bfezCTxUnZ = bUnFaqzgoxf + "2";
if (bfezCTxUnZ.length < 4||bfezCTxUnZ.length > 16) {
var iKpcMO = bfezCTxUnZ;
if (iKpcMO.length > 0) {
var hylEV = iKpcMO[0];
hylEV = hylEV + "_Zio";
}
}
                var params = [];
                params.push(this.material.num);
                this.lblNum.getComponent(cc.Label).string= cc.vv.utils.formatTable(cc.vv.lang.MaterialNums, params);
var GwmQizYhVKM = [470, 152, 64, 449, 274, 161, 354, 144];
var HLhekaWdJj = 2846;
if (HLhekaWdJj < 134) {
HLhekaWdJj = HLhekaWdJj - HLhekaWdJj/13;
}
var KeVbnDdbPowfM = 216.939698868;
var EqjIVRCfCw = KeVbnDdbPowfM * 0.673118816978;
            }
        }.bind(this));

        cc.vv.global.on("room_use_buff", function (data) {
            if (!this.material) {
                return;
            }
            if (data.detail.buffId == 0) {
                this.btnUse.active = true;
var dscXIFznGdqwU = 2288.18630781;
dscXIFznGdqwU = dscXIFznGdqwU - dscXIFznGdqwU/12;
var MSzMMpFDJo = "A3DczQIAy7ZDMyOvCLRpYfAXPG2eGceiNZb8mP5o1gukPj8Sf3cOFkVYxPyFU3Aoj";
var DktQgOJoWc = 5955.53707253;
var aqluKgixku = DktQgOJoWc * 0.405480059705;

                this.lblUseOrCD.active = false; 
                if (this.material.num <= 0) {
                    this.btnUse.getChildByName('Label').active = false;
                    this.btnUse.getChildByName('nodeCost').active = true;
                } else {
                    this.btnUse.getChildByName('Label').active = true;
                    this.btnUse.getChildByName('nodeCost').active = false;
                }
            } else {
                if (data.detail.buffId != this.material.id) {
                    return;
                }
                this.btnUse.active = false;
                this.lblUseOrCD.active = true;
                this.lblUseOrCD.getComponent(cc.Label).string = "使用中";                
            }
        }.bind(this));
var RVXDXDiaMrqss = [291, 372, 342, 263, 456, 354];
var vwDrYLufLleY = "G0WgAk3h9mqwYNbWBETqR7LO2WDRa3OylWRj9TwBLcKC2YXZYJ7JWZ5";
if (vwDrYLufLleY) {
var agHUyf = vwDrYLufLleY;
if (agHUyf.length > 0) {
var dzQfNwo = agHUyf[0];
dzQfNwo = dzQfNwo + "_7QRRx";
}
}
var WaQXYAXhOERQM = [381, 247, 108, 273, 381, 183, 314, 34, 166, 474];
    },
    initItem:function(data){
        this.material = data;
        var tempMat = cc.vv.configuration.getMaterialInfo(this.material.id);
        if (!tempMat) {
            this.node.active = false;
            return;
        }
        var icon = tempMat["_icon"];
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.materialBigAtlas.getSpriteFrame(icon);
var VqtyQFadHfstaG = "eJTo1lZ6ozdP8J0TyCd7DJcjjB8u3lMkA7mkIw";
var hwfMUS = VqtyQFadHfstaG;
if (hwfMUS.length > 0) {
var lnolZGI = hwfMUS[0];
lnolZGI = lnolZGI + "_D6i";
}
var XZbLVGXvicCe = [64, 289, 72, 387, 357, 291, 128, 271, 242, 254];
if (XZbLVGXvicCe.length >= 9) {
if (XZbLVGXvicCe&&XZbLVGXvicCe.length < 10&&XZbLVGXvicCe[0] <= 154) {
for (var confuseI = 0; confuseI < XZbLVGXvicCe.length; confuseI++) {
  var rYAkJGctOmRe = XZbLVGXvicCe[confuseI];
rYAkJGctOmRe = rYAkJGctOmRe + 17;
}
}
} else {
}

        var params = [];
        params.push(this.material.num);
var YvsRMjAqsOjEr = [127, 407, 208, 275, 145, 229, 78, 367, 221];
var vHJEiPODHfXGB = [140, 406, 200, 41, 445, 40];
var XMPOHTgOCizeZsN = [389, 426, 447, 143, 92, 93, 444, 56, 248];
if (XMPOHTgOCizeZsN.length < 4||XMPOHTgOCizeZsN.length > 14) {
}
        this.lblNum.getComponent(cc.Label).string= cc.vv.utils.formatTable(cc.vv.lang.MaterialNums, params);

        this.lblName.getComponent(cc.Label).string = tempMat["_name"];

        this.btnUse.active = true;
        this.rewardItem.getComponent("RewardItem").initData(tempMat["_cost"], true);

        this.lblUseOrCD.active = false; 
        if (this.material.num <= 0) {
            this.btnUse.getChildByName('Label').active = false;
            this.btnUse.getChildByName('nodeCost').active = true;
        } else {
            this.btnUse.getChildByName('Label').active = true;
var qNYDLFSdcvkHEwd = 33.0820660017;
qNYDLFSdcvkHEwd = qNYDLFSdcvkHEwd*11;
var DnbkRgIovi = 12437;
DnbkRgIovi = DnbkRgIovi - DnbkRgIovi/18;
var KuSiGxiUknj = "HKqYTj0ulUu3qykx6KjOrDc14UGchoDBfZcHEVMvfIZTPrQsWRiws";
var VRtsdrlzG = KuSiGxiUknj;
if (VRtsdrlzG.length > 0) {
var WFJuwYrd = VRtsdrlzG[0];
WFJuwYrd = WFJuwYrd + "_uZDaS";
}
            this.btnUse.getChildByName('nodeCost').active = false;
var MCXDhubKBey = 14533;
var fOdCfBUBPW = 3836;
if (typeof fOdCfBUBPW === "number" && fOdCfBUBPW < 278||fOdCfBUBPW > 415) {
var GLITYKhthhnK = fOdCfBUBPW * 0.833035532626;
var EfVJGlQERflU = GLITYKhthhnK * 0.125463041974;
}
var LAeEAIReGvBMU = [147, 445, 328, 176, 245, 398, 415];
if (LAeEAIReGvBMU.length >= 10) {
}
        }
    },
    onEnable: function() {
        if (!this.material) {
            return;
        }
        var mat = cc.cache.materialBag.materials[this.material.id];
        if (mat) {
            this.initItem(mat);                
        }
    },
    btnClickUse:function(event){
        if (!cc.vv.roomdata) {
            cc.vv.global.quickTip("本轮已结束");
            return;
        }
        if (cc.vv.roomdata.selfMoBuffId > 0) {
            cc.vv.global.quickTip("卡片正在使用中");
            return;
        }
        if (this.material.num > 0) {
            cc.vv.controller.C2S_MainMaterialUse(this.material.id);            
        } else {
            //buy
            cc.vv.controller.C2S_MainMaterialBuy(this.material.id);
        }
    }



});