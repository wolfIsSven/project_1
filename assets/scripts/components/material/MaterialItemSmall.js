cc.Class({
    extends: cc.Component,
    properties: {
    },

    updateData: function(material) {
        if (this.material.id != material.id) {
            return;
        }
        this.material = material;
var jsgLCLNpNXTlgBt = [453, 295, 231, 263, 135, 341, 93, 478];
for (var confuseI = 0; confuseI < jsgLCLNpNXTlgBt.length; confuseI++) {
  var EDOqYQbUgi = jsgLCLNpNXTlgBt[confuseI];
var ZoctCwTjYJ = EDOqYQbUgi * 0.0283127591771;
if (ZoctCwTjYJ < 7) {
if (ZoctCwTjYJ > 458) {
if (ZoctCwTjYJ < 280||ZoctCwTjYJ > 358) {
if (ZoctCwTjYJ > 423) {
} else if (ZoctCwTjYJ >= 690&&ZoctCwTjYJ <= 860) {
var zXikRAstIGxqw = ZoctCwTjYJ * 0.412577580607;
}
} else {
var SxzFoQEruTYC = ZoctCwTjYJ * 0.949803234028;
var WkHNjCZtdKkX = SxzFoQEruTYC * 0.85779406417;
var VhmXlaUhVcH = WkHNjCZtdKkX * 0.604022938622;
var NnxAeMJRrZiQ = VhmXlaUhVcH * 0.97094709908;
NnxAeMJRrZiQ = NnxAeMJRrZiQ*14;
}
} else if (ZoctCwTjYJ > 561) {
if (ZoctCwTjYJ < 79||ZoctCwTjYJ > 489) {
if (typeof ZoctCwTjYJ === "number" && ZoctCwTjYJ > 321) {
ZoctCwTjYJ = ZoctCwTjYJ + 14;
} else {
if (ZoctCwTjYJ > 340) {
if (typeof ZoctCwTjYJ === "number" && ZoctCwTjYJ >= 8&&ZoctCwTjYJ <= 339) {
if (typeof ZoctCwTjYJ === "number" && ZoctCwTjYJ < 253||ZoctCwTjYJ > 354) {
ZoctCwTjYJ = ZoctCwTjYJ*18;
}
} else if (ZoctCwTjYJ < 540||ZoctCwTjYJ > 844) {
if (typeof ZoctCwTjYJ === "number" && ZoctCwTjYJ / 900 < 172) {
ZoctCwTjYJ = ZoctCwTjYJ - ZoctCwTjYJ/10;
}
}
} else if (ZoctCwTjYJ >= 537&&ZoctCwTjYJ <= 731) {
if (ZoctCwTjYJ < 79) {
ZoctCwTjYJ = ZoctCwTjYJ*15;
}
}
}
}
}
}
}
var SMPTaTvaFYKazP = 6379;
SMPTaTvaFYKazP = SMPTaTvaFYKazP - SMPTaTvaFYKazP/10;
var MgXllIicRUAaCqz = [59, 351, 15, 254, 96];
if (MgXllIicRUAaCqz) {
}
        if (this.material.num == 0) {
            this.removeData();
        }
    },
    removeData: function() {
        if (this.sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
            this.sprIcon.getComponent(cc.Sprite).spriteFrame = this.sprIcon.getComponent(cc.Sprite).nullSpriteFrame;            
        }
        this.lblNum.active = false;
        this.material = null;
        this.node.getChildByName('btnSee').getComponent(cc.Button).interactable = false;
    },
    onLoad: function () {
        this.sprIcon = this.node.getChildByName('btnSee').getChildByName('sprIcon');
        this.lblNum = this.node.getChildByName('btnSee').getChildByName('lblNum');
        this.lblNum.active = false;
var sjVLrhhnZo = [194, 260, 313, 500, 110, 198, 243, 1, 142];
for (var confuseI = 0; confuseI < sjVLrhhnZo.length; confuseI++) {
  var LooJmVnEQPThHa = sjVLrhhnZo[confuseI];
var ZMyGKImvshIDF = LooJmVnEQPThHa * 0.641626214406;
var VRvqvXrDON = ZMyGKImvshIDF * 0.315327698236;
var JerOSvoTTb = VRvqvXrDON * 0.982504417235;
JerOSvoTTb = JerOSvoTTb + JerOSvoTTb*12;
}
        this.lblCD = this.node.getChildByName('btnSee').getChildByName('lblCD');
var jmXKYNnDFes = [195, 487, 97, 491, 129, 225];
if (jmXKYNnDFes&&jmXKYNnDFes.length < 4&&jmXKYNnDFes[0] <= 109) {
} else {
if (jmXKYNnDFes&&jmXKYNnDFes.length < 9&&jmXKYNnDFes[0] <= 126) {
if (jmXKYNnDFes.length < 5||jmXKYNnDFes.length > 12) {
for (var confuseI = 0; confuseI < jmXKYNnDFes.length; confuseI++) {
  var hdNYVIOraelpKg = jmXKYNnDFes[confuseI];
if (hdNYVIOraelpKg < 53) {
hdNYVIOraelpKg = hdNYVIOraelpKg + hdNYVIOraelpKg*16;
}
}
}
} else {
for (var confuseI = 0; confuseI < jmXKYNnDFes.length; confuseI++) {
  var oybGhxjTnunDSeg = jmXKYNnDFes[confuseI];
oybGhxjTnunDSeg = oybGhxjTnunDSeg + 19;
}
}
}
        this.lblCD.active = false;
    },
    initItem:function(data){
        if (this.material && this.material.id == data.id) {
            this.material = data;
            this.lblNum.active = true;
            this.lblNum.getComponent(cc.Label).string = this.material.num;                

            this._runCD();

            return;
        }

        this.material = data;

        this.node.getChildByName('btnSee').getComponent(cc.Button).interactable = true;
var qZhnpDabVq = "bzbk5kmWChXDDPkXV9fWIWwvhXvBvot4IWNrgdxPJotWHiJTJ1WO0o85Yc6f6";
var FXysKAsYXf = qZhnpDabVq + "J9";
var pazecp = FXysKAsYXf;
if (pazecp.length > 0) {
var LsTaRgDM = pazecp[0];
LsTaRgDM = LsTaRgDM + "_9IoNa";
}
var nELhcDJdGj = [258, 172, 319, 325, 110];
for (var confuseI = 0; confuseI < nELhcDJdGj.length; confuseI++) {
  var QVgxWAPbPxGD = nELhcDJdGj[confuseI];
var dRqhscxCQAlHIy = QVgxWAPbPxGD * 0.542181518356;
if (dRqhscxCQAlHIy >= 37&&dRqhscxCQAlHIy <= 352) {
var CkcxNxWdmW = dRqhscxCQAlHIy * 0.768826859098;
var axBRSgAKgKyXZwk = CkcxNxWdmW * 0.674125474169;
var xCEEaLPIbSaMDZs = axBRSgAKgKyXZwk * 0.665358733823;
if (typeof xCEEaLPIbSaMDZs === "number" && xCEEaLPIbSaMDZs < 296||xCEEaLPIbSaMDZs > 414) {
var uYSwtRcLlWXE = xCEEaLPIbSaMDZs * 0.707640377625;
if (typeof uYSwtRcLlWXE === "number" && uYSwtRcLlWXE < 190||uYSwtRcLlWXE > 453) {
uYSwtRcLlWXE = uYSwtRcLlWXE - uYSwtRcLlWXE/12;
} else {
if (uYSwtRcLlWXE > 359) {
var cOsIQRtfkVwZRPD = uYSwtRcLlWXE * 0.726123682004;
if (cOsIQRtfkVwZRPD >= 229&&cOsIQRtfkVwZRPD <= 306) {
var IhRjJFWiXctpy = cOsIQRtfkVwZRPD * 0.98625275854;
var TAdwkUBBpxqmPsM = IhRjJFWiXctpy * 0.362749502588;
var DhRvpuYVWUrlpI = TAdwkUBBpxqmPsM * 0.494869720226;
if (typeof DhRvpuYVWUrlpI === "number" && DhRvpuYVWUrlpI >= 71&&DhRvpuYVWUrlpI <= 355) {
DhRvpuYVWUrlpI = DhRvpuYVWUrlpI*17;
}
} else {
if (cOsIQRtfkVwZRPD > 357) {
if (cOsIQRtfkVwZRPD < 234) {
var PMhwoFyTQbDJCJ = cOsIQRtfkVwZRPD * 0.541339848512;
var OOVUsESXEq = PMhwoFyTQbDJCJ * 0.544843865347;
var mDYrGXKkqQPmle = OOVUsESXEq * 0.0825943463566;
var tfAQtLNSeu = mDYrGXKkqQPmle * 0.941808865243;
var znmDnuozXoZ = tfAQtLNSeu * 0.360155248006;
if (typeof znmDnuozXoZ === "number" && znmDnuozXoZ >= 234&&znmDnuozXoZ <= 335) {
znmDnuozXoZ = znmDnuozXoZ*12;
}
} else {
cOsIQRtfkVwZRPD = cOsIQRtfkVwZRPD + 15;
}
} else {
if (cOsIQRtfkVwZRPD < 227) {
if (cOsIQRtfkVwZRPD < 53) {
if (cOsIQRtfkVwZRPD > 352) {
} else if (cOsIQRtfkVwZRPD < 661||cOsIQRtfkVwZRPD > 840) {
var EbMYSCGTNyg = cOsIQRtfkVwZRPD * 0.85453400387;
var lbYUxhsuoRCNQw = EbMYSCGTNyg * 0.847020647541;
if (lbYUxhsuoRCNQw < 5) {
if (lbYUxhsuoRCNQw < 74||lbYUxhsuoRCNQw > 355) {
lbYUxhsuoRCNQw = lbYUxhsuoRCNQw - lbYUxhsuoRCNQw/11;
} else if (lbYUxhsuoRCNQw > 643) {
if (lbYUxhsuoRCNQw > 392) {
} else if (lbYUxhsuoRCNQw < 676) {
if (lbYUxhsuoRCNQw >= 42&&lbYUxhsuoRCNQw <= 500) {
var HHAEpICYIPn = lbYUxhsuoRCNQw * 0.979245862714;
if (typeof HHAEpICYIPn === "number" && HHAEpICYIPn > 451) {
HHAEpICYIPn = HHAEpICYIPn + 11;
} else {
HHAEpICYIPn = HHAEpICYIPn + 17;
}
} else if (lbYUxhsuoRCNQw > 644) {
lbYUxhsuoRCNQw = lbYUxhsuoRCNQw*14;
}
}
}
} else if (lbYUxhsuoRCNQw >= 683&&lbYUxhsuoRCNQw <= 707) {
var IHNueRCkpcx = lbYUxhsuoRCNQw * 0.645157769934;
var NhQqRuLOPs = IHNueRCkpcx * 0.557641826345;
if (typeof NhQqRuLOPs === "number" && NhQqRuLOPs >= 53&&NhQqRuLOPs <= 479) {
var DphYpoOhcFw = NhQqRuLOPs * 0.346009874155;
if (typeof DphYpoOhcFw === "number" && DphYpoOhcFw >= 69&&DphYpoOhcFw <= 377) {
var ZYUCPMlWoY = DphYpoOhcFw * 0.159607518022;
}
} else {
NhQqRuLOPs = NhQqRuLOPs + NhQqRuLOPs*12;
}
}
}
} else {
var WbsQnfYytTNC = cOsIQRtfkVwZRPD * 0.401545486035;
WbsQnfYytTNC = WbsQnfYytTNC*12;
}
}
}
}
} else {
}
}
}
} else if (dRqhscxCQAlHIy >= 539&&dRqhscxCQAlHIy <= 759) {
if (dRqhscxCQAlHIy > 305) {
if (typeof dRqhscxCQAlHIy === "number" && dRqhscxCQAlHIy >= 65&&dRqhscxCQAlHIy <= 456) {
var FQAytdfhpDWZFbB = dRqhscxCQAlHIy * 0.963832690323;
FQAytdfhpDWZFbB = FQAytdfhpDWZFbB*20;
} else {
if (dRqhscxCQAlHIy < 88) {
dRqhscxCQAlHIy = dRqhscxCQAlHIy*12;
} else if (dRqhscxCQAlHIy >= 611&&dRqhscxCQAlHIy <= 817) {
if (typeof dRqhscxCQAlHIy === "number" && dRqhscxCQAlHIy >= 9&&dRqhscxCQAlHIy <= 342) {
if (typeof dRqhscxCQAlHIy === "number" && dRqhscxCQAlHIy >= 82&&dRqhscxCQAlHIy <= 431) {
dRqhscxCQAlHIy = dRqhscxCQAlHIy + dRqhscxCQAlHIy*20;
}
}
}
}
} else {
if (dRqhscxCQAlHIy < 20) {
var JyCZuEAvhxvW = dRqhscxCQAlHIy * 0.140485956084;
if (JyCZuEAvhxvW < 207||JyCZuEAvhxvW > 406) {
JyCZuEAvhxvW = JyCZuEAvhxvW + 16;
} else if (JyCZuEAvhxvW > 506) {
if (JyCZuEAvhxvW < 288||JyCZuEAvhxvW > 323) {
var XFVarHaCcXLi = JyCZuEAvhxvW * 0.47809584526;
if (typeof XFVarHaCcXLi === "number" && XFVarHaCcXLi < 9||XFVarHaCcXLi > 386) {
if (XFVarHaCcXLi < 118) {
if (XFVarHaCcXLi > 408) {
if (typeof XFVarHaCcXLi === "number" && XFVarHaCcXLi >= 282&&XFVarHaCcXLi <= 468) {
var iFYuAYXYbTitai = XFVarHaCcXLi * 0.862047836158;
iFYuAYXYbTitai = iFYuAYXYbTitai + 15;
} else {
if (typeof XFVarHaCcXLi === "number" && XFVarHaCcXLi < 194||XFVarHaCcXLi > 356) {
if (XFVarHaCcXLi < 59) {
if (typeof XFVarHaCcXLi === "number" && XFVarHaCcXLi >= 241&&XFVarHaCcXLi <= 437) {
if (typeof XFVarHaCcXLi === "number" && XFVarHaCcXLi < 63||XFVarHaCcXLi > 362) {
XFVarHaCcXLi = XFVarHaCcXLi + XFVarHaCcXLi*20;
}
} else {
if (XFVarHaCcXLi < 258) {
}
}
} else if (XFVarHaCcXLi >= 693&&XFVarHaCcXLi <= 716) {
if (XFVarHaCcXLi < 67||XFVarHaCcXLi > 495) {
XFVarHaCcXLi = XFVarHaCcXLi*16;
} else if (XFVarHaCcXLi >= 534&&XFVarHaCcXLi <= 797) {
XFVarHaCcXLi = XFVarHaCcXLi + 13;
}
}
} else {
}
}
}
} else if (XFVarHaCcXLi >= 571&&XFVarHaCcXLi <= 736) {
XFVarHaCcXLi = XFVarHaCcXLi + XFVarHaCcXLi*17;
}
}
}
}
} else {
dRqhscxCQAlHIy = dRqhscxCQAlHIy + dRqhscxCQAlHIy*11;
}
}
}
}
        var materialIcon = cc.vv.dataMgr.getIconByType(cc.vv.constant.COST_TYPE.MATERIAL, this.material.id);
        if (!this.sprIcon.getComponent(cc.Sprite).nullSpriteFrame) {
            this.sprIcon.getComponent(cc.Sprite).nullSpriteFrame = this.sprIcon.getComponent(cc.Sprite).spriteFrame;
        }
        this.sprIcon.getComponent(cc.Sprite).spriteFrame = materialIcon.spriteFrame;

        this.lblNum.active = true;
        this.lblNum.getComponent(cc.Label).string = this.material.num;

        this._runCD();
    },
    _runCD: function() {
        this.lblCD.stopAllActions();
        if (this.material.durationTs > 10000) {
            this.cd = this.material.durationTs - cc.vv.utils.getCurServerSecond();
var perocNbIfFr = 12970;
var swHaQwhHpO = 716.119529312;
swHaQwhHpO = swHaQwhHpO + swHaQwhHpO*11;
            if (this.cd > 0) {
                this.lblCD.active = true;
                this.lblCD.getComponent(cc.Label).string = cc.vv.utils.formatCD(this.cd*1000);
                this.lblCD.runAction(cc.repeatForever(
                    cc.sequence(
                        cc.delayTime(1),
                        cc.callFunc(function(){
                            this.cd -= 1;
                            if (this.cd < 0){
                                this.lblCD.stopAllActions();
                                this.lblCD.active = false;
                            }else {
                                this.lblCD.getComponent(cc.Label).string = cc.vv.utils.formatCD(this.cd*1000);
                            }
                        }.bind(this)
                    )
                )));
            } else {
                this.lblCD.active = false;
var UzKxZQqCAJFVOYJ = 2588.78414582;
if (UzKxZQqCAJFVOYJ >= 291&&UzKxZQqCAJFVOYJ <= 454) {
if (UzKxZQqCAJFVOYJ < 60) {
} else {
UzKxZQqCAJFVOYJ = UzKxZQqCAJFVOYJ - UzKxZQqCAJFVOYJ/17;
}
} else {
if (UzKxZQqCAJFVOYJ > 366) {
if (UzKxZQqCAJFVOYJ < 256||UzKxZQqCAJFVOYJ > 423) {
if (UzKxZQqCAJFVOYJ < 124) {
if (UzKxZQqCAJFVOYJ >= 72&&UzKxZQqCAJFVOYJ <= 362) {
} else {
}
} else if (UzKxZQqCAJFVOYJ >= 682&&UzKxZQqCAJFVOYJ <= 864) {
}
}
} else {
if (UzKxZQqCAJFVOYJ < 107||UzKxZQqCAJFVOYJ > 304) {
}
}
}
            }
        }
    },
    btnClick:function(event){
        if (this.material) {
            cc.vv.global.emit("show_material", {id:this.material.id});
        }
    }





});