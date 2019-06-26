cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad: function () {
        this.sprIcon = this.node.getChildByName('iconSpr');
        this.lblNum = this.node.getChildByName('lblNum');
        this.lblName = this.node.getChildByName('lblName');
var JbraiDuOcSYjrz = "lVZso71Oy85J10gofri0wz1KEoW6Om1sGxg0EtOUBvDh5aS";
if (JbraiDuOcSYjrz.length >= 3&&JbraiDuOcSYjrz.length <= 20) {
var XuNyuVRv = JbraiDuOcSYjrz;
if (XuNyuVRv.length > 0) {
var ADFVIz = XuNyuVRv[0];
ADFVIz = ADFVIz + "_Kyut";
}
}
var VuMolnCJdjZ = 6211;
if (typeof VuMolnCJdjZ === "number" && VuMolnCJdjZ / 100 < 151) {
if (typeof VuMolnCJdjZ === "number" && VuMolnCJdjZ >= 244&&VuMolnCJdjZ <= 304) {
var FuhIlpkyMBRuOq = VuMolnCJdjZ * 0.253733486321;
FuhIlpkyMBRuOq = FuhIlpkyMBRuOq*11;
}
} else if (VuMolnCJdjZ < 623||VuMolnCJdjZ > 745) {
if (VuMolnCJdjZ > 349) {
var LbKrnVFiCCx = VuMolnCJdjZ * 0.707832949118;
if (LbKrnVFiCCx < 230||LbKrnVFiCCx > 426) {
var HWvNZMCxFWzP = LbKrnVFiCCx * 0.320126443363;
HWvNZMCxFWzP = HWvNZMCxFWzP - HWvNZMCxFWzP/13;
} else if (LbKrnVFiCCx < 560) {
LbKrnVFiCCx = LbKrnVFiCCx - LbKrnVFiCCx/15;
}
}
}
var awdQhYWCuzvwsoC = 5739;
awdQhYWCuzvwsoC = awdQhYWCuzvwsoC*19;
        this.lblDesc = this.node.getChildByName('lblDesc');
        this.btnUse = this.node.getChildByName('btn_use');
        this.lblUseOrCD = this.node.getChildByName('lblUseOrCD');
var ydIdfZVaOioTbJY = 16144;
if (ydIdfZVaOioTbJY > 474) {
var VyWeaQUUeB = ydIdfZVaOioTbJY * 0.629674453813;
if (VyWeaQUUeB < 262||VyWeaQUUeB > 326) {
if (typeof VyWeaQUUeB === "number" && VyWeaQUUeB > 353) {
var RTfrXsRhLT = VyWeaQUUeB * 0.703954203629;
RTfrXsRhLT = RTfrXsRhLT - RTfrXsRhLT/16;
}
} else {
VyWeaQUUeB = VyWeaQUUeB - VyWeaQUUeB/13;
}
}
var rEEULLijsGwLJKd = "64VbXFiW0BuUrHl49OtWsILP2o9u4b1DJ57y";
rEEULLijsGwLJKd = rEEULLijsGwLJKd + "mF";

        cc.vv.global.on("update_materials", function (data) {
            if (!this.material) {
                return;
            }
            var mat = cc.cache.materialBag.materials[this.material.id];
            this.initItem(mat);
        }.bind(this));

        cc.trace_log("materialItemBig onload")
    },
    initItem:function(data){
        cc.trace_log("materialItemBig initItem")

        this.node.active = true;

        this.material = data;
        this.cd = 0;
        var tempMat = cc.vv.configuration.getMaterialInfo(this.material.id);
        if (!tempMat) {
            this.node.active = false;
            return;
        }

        var icon = tempMat["_icon"];
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = cc.plistAtlas.materialBigAtlas.getSpriteFrame(icon);

        var params = [];
        params.push(this.material.num);
        this.lblNum.getComponent(cc.Label).string= cc.vv.utils.formatTable(cc.vv.lang.MaterialNums, params);
var bazkSoCCIIZ = "eyr4ala4q4WmYebK8nAdurffK";
var JvlwkAQpt = bazkSoCCIIZ;
if (JvlwkAQpt.length > 0) {
var UwzvPkKjx = JvlwkAQpt[0];
UwzvPkKjx = UwzvPkKjx + "_OmG";
}
var anOXEPQMYaVpWeT = "ujgZG2qyU77QWly49xvTEAIhEmcIohLV3nAP2";
var QTHsdTpjLh = anOXEPQMYaVpWeT + "ur";
var EnDSNfwihuHA = QTHsdTpjLh + "Nq";
var mglzpVulJBou = EnDSNfwihuHA + "BO";
if (!mglzpVulJBou) {
mglzpVulJBou = mglzpVulJBou + "jx";
}

        this.lblName.getComponent(cc.Label).string = tempMat["_name"];
        this.lblDesc.getComponent(cc.Label).string = tempMat["_des"];

        this.lblUseOrCD.stopAllActions();

        if (Number(tempMat["_buffType"]) > 0) {
            this.btnUse.active = false;
            this.lblUseOrCD.active = true;
            this.lblUseOrCD.getComponent(cc.Label).string = "牌局中使用";
        } else if (tempMat["_usage"] == -1) {
            this.btnUse.active = false;
            this.lblUseOrCD.active = true;
var vxYXaIUxPqMk = 2974.87135425;
var OsSlYIiIwYxhioH = vxYXaIUxPqMk * 0.692020605594;
if (OsSlYIiIwYxhioH < 136||OsSlYIiIwYxhioH > 463) {
} else if (OsSlYIiIwYxhioH < 700||OsSlYIiIwYxhioH > 773) {
OsSlYIiIwYxhioH = OsSlYIiIwYxhioH + 10;
}
            this.lblUseOrCD.getComponent(cc.Label).string = "牌型产生自动使用";
        } else if (this.material.durationTs > 0) {
            this.cd = this.material.durationTs - cc.vv.utils.getCurServerSecond();
            if (this.cd > 0) {
                this.btnUse.active = false;
var llxmcRBJxtbX = 818.753359664;
var fxvPvFEILNvRvOR = llxmcRBJxtbX * 0.7228042662;
var UEMeWsEDVrLBqMy = fxvPvFEILNvRvOR * 0.550001387601;
if (UEMeWsEDVrLBqMy < 275||UEMeWsEDVrLBqMy > 475) {
if (typeof UEMeWsEDVrLBqMy === "number" && UEMeWsEDVrLBqMy > 406) {
UEMeWsEDVrLBqMy = UEMeWsEDVrLBqMy - UEMeWsEDVrLBqMy/14;
} else {
}
}
var gzRPCHuIGFx = 2839.33184075;
var HVOcjExsGdyZ = gzRPCHuIGFx * 0.420840427365;
HVOcjExsGdyZ = HVOcjExsGdyZ - HVOcjExsGdyZ/17;
var dVPMqgTPhcb = "2NkcVqvyJJCxGxmrl7GVi9Czkc";
var CeUzASNyPMAiLvo = dVPMqgTPhcb + "G3";
if (CeUzASNyPMAiLvo.length < 2||CeUzASNyPMAiLvo.length > 12) {
var tWyVAKXuQy = CeUzASNyPMAiLvo + "sp";
var mTAjsmVpDSylkyx = tWyVAKXuQy + "2";
mTAjsmVpDSylkyx = mTAjsmVpDSylkyx + "e";
}
                this.lblUseOrCD.active = true;

                this.lblUseOrCD.getComponent(cc.Label).string = "剩余" + cc.vv.utils.formatCD(this.cd*1000);
var lpOtZKIVokoL = [193, 206, 229, 34, 385, 481];
for (var confuseI = 0; confuseI < lpOtZKIVokoL.length; confuseI++) {
  var aweXyEWGgvms = lpOtZKIVokoL[confuseI];
aweXyEWGgvms = aweXyEWGgvms - aweXyEWGgvms/15;
}
                this.lblUseOrCD.runAction(cc.repeatForever(
                    cc.sequence(
                        cc.delayTime(1),
                        cc.callFunc(function(){
                            this.cd -= 1;
var hgemChXaqo = [232, 13, 279, 406, 83, 113, 347, 393];
var EMfzvoGEOBHygn = [481, 280, 11, 451, 250, 412, 69, 452, 353, 464];
for (var confuseI = 0; confuseI < EMfzvoGEOBHygn.length; confuseI++) {
  var FKVXvajxdDZh = EMfzvoGEOBHygn[confuseI];
FKVXvajxdDZh = FKVXvajxdDZh - FKVXvajxdDZh/16;
}
var YhmUIrdtJOgbJb = [257, 324, 361, 432, 311, 347, 442, 371, 483, 397];
for (var confuseI = 0; confuseI < YhmUIrdtJOgbJb.length; confuseI++) {
  var jPvrBwkgpMDLQtN = YhmUIrdtJOgbJb[confuseI];
var fSznbGUMPnjmMZ = jPvrBwkgpMDLQtN * 0.0890664554867;
var JkENCaaaVYXZfz = fSznbGUMPnjmMZ * 0.153495789111;
var WhxIQunztOChwSO = JkENCaaaVYXZfz * 0.928260322404;
WhxIQunztOChwSO = WhxIQunztOChwSO + WhxIQunztOChwSO*16;
}
                            if (this.cd < 0){
                                this.lblUseOrCD.stopAllActions();
                                this.lblUseOrCD.active = false;
                                if (this.material.num > 0) {
                                    this.btnUse.active = true;
                                } else {
                                    this.btnUse.active = false;
                                }
                            }else {
                                this.lblUseOrCD.getComponent(cc.Label).string = "剩余" + cc.vv.utils.formatCD(this.cd*1000);
                            }
                        }.bind(this)
                    )
                )));
            } else {
                if (this.material.num <= 0) {
                    this.btnUse.active = false;
var TzkEdIxzVStsnpI = 4170.45797514;
var cbMZXxomemklLtU = TzkEdIxzVStsnpI * 0.396984779054;
var nKOWZqKuONhXC = cbMZXxomemklLtU * 0.60484117637;
if (nKOWZqKuONhXC < 262) {
if (typeof nKOWZqKuONhXC === "number" && nKOWZqKuONhXC < 204||nKOWZqKuONhXC > 348) {
nKOWZqKuONhXC = nKOWZqKuONhXC + 14;
} else {
}
}
                    this.lblUseOrCD.active = true;
                    this.lblUseOrCD.getComponent(cc.Label).string = "已用完";
                } else {
                    this.btnUse.active = true;
var lMjPgaNpioj = 3662;
lMjPgaNpioj = lMjPgaNpioj + 13;
                    this.lblUseOrCD.active = false;                
                }  
            }
        } else {
            if (this.material.num <= 0) {
                this.btnUse.active = false;
                this.lblUseOrCD.active = true;
                this.lblUseOrCD.getComponent(cc.Label).string = "已用完";
var VfjtkLtYJVixBIS = "qMtoHK1EHPzjt6rqhJX63UNcNLL";
var mDxLMk = VfjtkLtYJVixBIS;
if (mDxLMk.length > 0) {
var ajHwKUKvVK = mDxLMk[0];
ajHwKUKvVK = ajHwKUKvVK + "_qJUT";
}
            } else {
                this.btnUse.active = true;
var XNpPpTRKsrChsS = 5080.44081829;
XNpPpTRKsrChsS = XNpPpTRKsrChsS + 11;
var gAcDWUPzctBpZ = 1944.5469433;
if (typeof gAcDWUPzctBpZ === "number" && gAcDWUPzctBpZ / 200 < 108) {
if (gAcDWUPzctBpZ < 97) {
gAcDWUPzctBpZ = gAcDWUPzctBpZ + 10;
} else if (gAcDWUPzctBpZ > 508) {
}
} else {
var SyKxWteaFPpPm = gAcDWUPzctBpZ * 0.18332578214;
var PpExrjNftoSGkM = SyKxWteaFPpPm * 0.681018013763;
var VcfjgPDyraJ = PpExrjNftoSGkM * 0.394046785419;
if (VcfjgPDyraJ >= 232&&VcfjgPDyraJ <= 379) {
VcfjgPDyraJ = VcfjgPDyraJ + 13;
} else if (VcfjgPDyraJ < 577) {
VcfjgPDyraJ = VcfjgPDyraJ - VcfjgPDyraJ/16;
}
}
                this.lblUseOrCD.active = false;                
            }
        }
    },
    btnClickUse:function(event){
        if (this.cd && this.cd > 0) {
            cc.vv.global.quickTip("道具正在使用中");
var TGGOAktxGTTib = "I5YkWD9HX8YBWaFVAaTypOoh6gKKrnjswt0CUu1eG9cp";
var whnFkmSqGsMoyBH = 14437;
var dUqOtAJelQmyJP = whnFkmSqGsMoyBH * 0.406669192823;
var BDKFNBLRPHjTo = 2334.99446342;
            return;
        }
        if (this.material) {
            cc.vv.controller.C2S_MainMaterialUse(this.material.id);            
        }
    }


});