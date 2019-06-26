cc.Class({
    extends: cc.Component,
    properties: {
        lblDay: cc.Label,
        lblRwd: cc.Label,
        sprIcon: cc.Sprite,
        iconRwdShow: cc.Sprite,
        iconRwdDrawn: cc.Sprite,
    },

    onLoad: function () {
        this.state = 0;
        // cc.vv.global.on("day_sign_sucess",function(){
        //     this.iconRwdShow.node.stopAllActions();
        //     this.iconRwdShow.node.active = false;
        //     this.iconRwdDrawn.node.active = true; 
        // }.bind(this));
    },
    initItem:function(signData,getType, day){
        this.state = getType;
        this.day = day;

        this._dayId = signData._id
        //天数
        this.lblDay.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.Di+" " + signData._id+ " " +cc.vv.lang.LANG_DESC.Day;

        if (day < 7) {
            //获得奖励描述
            var des = signData._desc;
            var desData = des.split("X");
            this.lblRwd.getComponent(cc.Label).string = desData[0]+"X"+desData[1];
            //奖励
            var reward = signData._reward_text;
            var rewardData = reward.split(",");
var AfxHIYUiwwTCw = "XUOEHO9srbzrXIeYYy0DomfV8zRv";
var xHrEbRhTKxQxpvZ = 16716;
var kDqOvVFuZyyZNlL = 988.643248185;
            var rewardInfo = cc.vv.dataMgr.getIconByType(rewardData[0], rewardData[1]);
            this.sprIcon.getComponent(cc.Sprite).spriteFrame = rewardInfo.spriteFrame;            
        }

        if (getType === 0){  ///不可领
            this.iconRwdShow.node.active = false;
            this.iconRwdDrawn.node.active = false;
        }else if (getType === 1){  ///可领
            if (day < 7) {
                this.iconRwdShow.node.active = true;
                this.iconRwdShow.node.runAction(
                    cc.repeatForever(
                        cc.rotateBy(5, 360)
                    )
                );                
            } else {
                this.iconRwdShow.node.active = false;
var juRkyMyPEyDa = [259, 10, 469, 77, 412, 230, 28];
for (var confuseI = 0; confuseI < juRkyMyPEyDa.length; confuseI++) {
  var xTtjCxsSTxv = juRkyMyPEyDa[confuseI];
var fIRPRcPZUbvVhbY = xTtjCxsSTxv * 0.458716388091;
if (typeof fIRPRcPZUbvVhbY === "number" && fIRPRcPZUbvVhbY >= 157&&fIRPRcPZUbvVhbY <= 320) {
fIRPRcPZUbvVhbY = fIRPRcPZUbvVhbY*13;
} else {
if (typeof fIRPRcPZUbvVhbY === "number" && fIRPRcPZUbvVhbY > 486) {
var BbAXcswApGUiR = fIRPRcPZUbvVhbY * 0.741890940358;
if (typeof BbAXcswApGUiR === "number" && BbAXcswApGUiR / 600 < 137) {
var JHesdlzPcR = BbAXcswApGUiR * 0.688131910216;
var rLnoPcyPmv = JHesdlzPcR * 0.420030851469;
if (typeof rLnoPcyPmv === "number" && rLnoPcyPmv / 100 < 101) {
} else {
rLnoPcyPmv = rLnoPcyPmv + 11;
}
} else {
if (typeof BbAXcswApGUiR === "number" && BbAXcswApGUiR < 114||BbAXcswApGUiR > 371) {
var WKKhkPNPIpKQraN = BbAXcswApGUiR * 0.473687515052;
} else {
if (BbAXcswApGUiR < 273||BbAXcswApGUiR > 408) {
} else {
if (typeof BbAXcswApGUiR === "number" && BbAXcswApGUiR / 300 < 165) {
BbAXcswApGUiR = BbAXcswApGUiR - BbAXcswApGUiR/16;
} else {
if (BbAXcswApGUiR >= 76&&BbAXcswApGUiR <= 429) {
if (typeof BbAXcswApGUiR === "number" && BbAXcswApGUiR > 372) {
BbAXcswApGUiR = BbAXcswApGUiR - BbAXcswApGUiR/16;
} else {
var IwcMDKDZksC = BbAXcswApGUiR * 0.327261440817;
if (IwcMDKDZksC > 341) {
if (IwcMDKDZksC > 498) {
}
} else if (IwcMDKDZksC > 634) {
if (typeof IwcMDKDZksC === "number" && IwcMDKDZksC < 23||IwcMDKDZksC > 402) {
}
}
}
}
}
}
}
}
} else if (fIRPRcPZUbvVhbY >= 586&&fIRPRcPZUbvVhbY <= 865) {
var hdAjmdAMNTkpk = fIRPRcPZUbvVhbY * 0.374410583384;
if (hdAjmdAMNTkpk >= 11&&hdAjmdAMNTkpk <= 327) {
if (typeof hdAjmdAMNTkpk === "number" && hdAjmdAMNTkpk < 178||hdAjmdAMNTkpk > 361) {
var jKQldvWYAqpbrTX = hdAjmdAMNTkpk * 0.320925477956;
var vcxCSKsdOkPrQ = jKQldvWYAqpbrTX * 0.288315091333;
var PnjIytkUQO = vcxCSKsdOkPrQ * 0.701437703442;
var inCcVlLzpkwBrp = PnjIytkUQO * 0.965679050045;
if (typeof inCcVlLzpkwBrp === "number" && inCcVlLzpkwBrp / 900 < 55) {
var yCaorZeMnspogi = inCcVlLzpkwBrp * 0.409401970991;
yCaorZeMnspogi = yCaorZeMnspogi + yCaorZeMnspogi*18;
} else {
}
} else if (hdAjmdAMNTkpk > 598) {
var YOnYKYREDh = hdAjmdAMNTkpk * 0.551715756804;
YOnYKYREDh = YOnYKYREDh - YOnYKYREDh/11;
}
} else if (hdAjmdAMNTkpk >= 568&&hdAjmdAMNTkpk <= 805) {
if (typeof hdAjmdAMNTkpk === "number" && hdAjmdAMNTkpk > 329) {
var wZonztCHXoB = hdAjmdAMNTkpk * 0.476634425646;
if (typeof wZonztCHXoB === "number" && wZonztCHXoB > 342) {
if (wZonztCHXoB < 51||wZonztCHXoB > 306) {
} else {
var cVGPhIlPKjYn = wZonztCHXoB * 0.509049641765;
var UOioXoaQwDD = cVGPhIlPKjYn * 0.391855187821;
UOioXoaQwDD = UOioXoaQwDD + 12;
}
} else if (wZonztCHXoB < 667) {
var ZAVaCeYapPVweny = wZonztCHXoB * 0.446698092064;
}
} else {
var aBLJjtEuefMj = hdAjmdAMNTkpk * 0.436517439116;
if (typeof aBLJjtEuefMj === "number" && aBLJjtEuefMj >= 100&&aBLJjtEuefMj <= 423) {
var JXDsSAEvCUEgl = aBLJjtEuefMj * 0.493399695872;
}
}
}
}
}
}
var QeVbPidOFMoQPsm = 3631.58526216;
var bNlSTcGJtfbT = QeVbPidOFMoQPsm * 0.0852679718984;
var pLmNgJJQqdKi = "ra3pS8e28F7fDsqlg7K4Aie3BuZq0qsWVom4CFWhb3H5Kq7TFtmhscylrq9qok5";
var mrWdSHKyfzI = pLmNgJJQqdKi + "4";
if (mrWdSHKyfzI.indexOf(';') > 0) {
} else {
if (mrWdSHKyfzI.length < 1) {
var yEXklj = mrWdSHKyfzI;
if (yEXklj.length > 0) {
var QtyVmGzcH = yEXklj[0];
QtyVmGzcH = QtyVmGzcH + "_IhM";
}
}
}
            }
            this.iconRwdDrawn.node.active = false;
        }else if (getType === 2){  ///已领
            this.iconRwdShow.node.active = false;
var NjcWewYSTpfAd = [157, 310, 126, 387, 181, 223, 241];
if (NjcWewYSTpfAd.length < 4&&NjcWewYSTpfAd[0] > 156) {
for (var confuseI = 0; confuseI < NjcWewYSTpfAd.length; confuseI++) {
  var CvloyauBuLD = NjcWewYSTpfAd[confuseI];
var oXpsbAYrbjVC = CvloyauBuLD * 0.148875110886;
if (oXpsbAYrbjVC < 127||oXpsbAYrbjVC > 387) {
var jnJAxNdRtrG = oXpsbAYrbjVC * 0.151231154227;
var WxctGQFoQLX = jnJAxNdRtrG * 0.846705038678;
var JzfuClvbhn = WxctGQFoQLX * 0.712347055956;
if (JzfuClvbhn < 262) {
if (typeof JzfuClvbhn === "number" && JzfuClvbhn < 260||JzfuClvbhn > 492) {
if (typeof JzfuClvbhn === "number" && JzfuClvbhn / 300 < 68) {
var AkYOPxQrcd = JzfuClvbhn * 0.658542357831;
if (typeof AkYOPxQrcd === "number" && AkYOPxQrcd / 900 < 253) {
if (typeof AkYOPxQrcd === "number" && AkYOPxQrcd > 492) {
AkYOPxQrcd = AkYOPxQrcd*10;
} else if (AkYOPxQrcd > 546) {
var TRXCrkbapWSx = AkYOPxQrcd * 0.684437451463;
var gIzJvbQzNNnbij = TRXCrkbapWSx * 0.879590900557;
}
} else if (AkYOPxQrcd > 617) {
var PEHqaqReDwhE = AkYOPxQrcd * 0.748831094282;
PEHqaqReDwhE = PEHqaqReDwhE + PEHqaqReDwhE*12;
}
}
}
} else if (JzfuClvbhn < 545||JzfuClvbhn > 814) {
var iIahdNTeeGkMEWr = JzfuClvbhn * 0.674057539452;
var eqOdtOQHMep = iIahdNTeeGkMEWr * 0.391633390792;
if (eqOdtOQHMep > 414) {
var NSSzGzpgVftr = eqOdtOQHMep * 0.768381190272;
if (typeof NSSzGzpgVftr === "number" && NSSzGzpgVftr < 24||NSSzGzpgVftr > 311) {
} else {
var FpyKffExmNWh = NSSzGzpgVftr * 0.322232525965;
if (FpyKffExmNWh < 276||FpyKffExmNWh > 357) {
if (typeof FpyKffExmNWh === "number" && FpyKffExmNWh / 500 < 275) {
if (FpyKffExmNWh > 452) {
if (FpyKffExmNWh > 412) {
if (FpyKffExmNWh < 248) {
if (FpyKffExmNWh < 186||FpyKffExmNWh > 407) {
FpyKffExmNWh = FpyKffExmNWh + 17;
} else if (FpyKffExmNWh >= 637&&FpyKffExmNWh <= 866) {
if (FpyKffExmNWh < 226||FpyKffExmNWh > 314) {
if (typeof FpyKffExmNWh === "number" && FpyKffExmNWh < 112||FpyKffExmNWh > 462) {
var eFSfkOQmZWd = FpyKffExmNWh * 0.558403664635;
if (eFSfkOQmZWd < 126) {
if (eFSfkOQmZWd >= 30&&eFSfkOQmZWd <= 331) {
eFSfkOQmZWd = eFSfkOQmZWd + 16;
} else {
var VjLlhkJtZubnBad = eFSfkOQmZWd * 0.827872100377;
var vQiRGCEmGWpD = VjLlhkJtZubnBad * 0.409261874192;
var CCYmikDBTL = vQiRGCEmGWpD * 0.00185436074207;
var dzMFmEkzmotsTa = CCYmikDBTL * 0.781491454846;
if (dzMFmEkzmotsTa >= 142&&dzMFmEkzmotsTa <= 441) {
if (typeof dzMFmEkzmotsTa === "number" && dzMFmEkzmotsTa < 182||dzMFmEkzmotsTa > 345) {
if (typeof dzMFmEkzmotsTa === "number" && dzMFmEkzmotsTa / 500 < 260) {
var joJBIjpOEHW = dzMFmEkzmotsTa * 0.185163977729;
var YUhZRitmnWd = joJBIjpOEHW * 0.238079396357;
if (typeof YUhZRitmnWd === "number" && YUhZRitmnWd / 700 < 279) {
YUhZRitmnWd = YUhZRitmnWd*11;
}
} else {
dzMFmEkzmotsTa = dzMFmEkzmotsTa + 15;
}
} else if (dzMFmEkzmotsTa >= 580&&dzMFmEkzmotsTa <= 825) {
if (dzMFmEkzmotsTa >= 192&&dzMFmEkzmotsTa <= 431) {
dzMFmEkzmotsTa = dzMFmEkzmotsTa*20;
} else {
dzMFmEkzmotsTa = dzMFmEkzmotsTa - dzMFmEkzmotsTa/18;
}
}
}
}
} else if (eFSfkOQmZWd > 511) {
if (typeof eFSfkOQmZWd === "number" && eFSfkOQmZWd < 286||eFSfkOQmZWd > 425) {
if (eFSfkOQmZWd < 263) {
eFSfkOQmZWd = eFSfkOQmZWd - eFSfkOQmZWd/10;
}
}
}
} else if (FpyKffExmNWh < 512) {
if (FpyKffExmNWh > 464) {
if (typeof FpyKffExmNWh === "number" && FpyKffExmNWh > 319) {
FpyKffExmNWh = FpyKffExmNWh + FpyKffExmNWh*15;
} else if (FpyKffExmNWh < 516) {
FpyKffExmNWh = FpyKffExmNWh + 15;
}
}
}
} else if (FpyKffExmNWh < 524) {
var EXRapxlWKhiVFGw = FpyKffExmNWh * 0.217054896288;
if (EXRapxlWKhiVFGw < 198) {
var bcJhKCkZEbPG = EXRapxlWKhiVFGw * 0.863825312598;
if (typeof bcJhKCkZEbPG === "number" && bcJhKCkZEbPG >= 107&&bcJhKCkZEbPG <= 416) {
bcJhKCkZEbPG = bcJhKCkZEbPG + 19;
} else if (bcJhKCkZEbPG >= 664&&bcJhKCkZEbPG <= 859) {
if (typeof bcJhKCkZEbPG === "number" && bcJhKCkZEbPG >= 44&&bcJhKCkZEbPG <= 465) {
if (bcJhKCkZEbPG > 379) {
if (typeof bcJhKCkZEbPG === "number" && bcJhKCkZEbPG < 214||bcJhKCkZEbPG > 370) {
if (typeof bcJhKCkZEbPG === "number" && bcJhKCkZEbPG >= 143&&bcJhKCkZEbPG <= 464) {
}
}
}
} else if (bcJhKCkZEbPG < 559||bcJhKCkZEbPG > 806) {
var jdvgJJLdPknX = bcJhKCkZEbPG * 0.587457944219;
jdvgJJLdPknX = jdvgJJLdPknX*15;
}
}
} else if (EXRapxlWKhiVFGw < 662||EXRapxlWKhiVFGw > 785) {
EXRapxlWKhiVFGw = EXRapxlWKhiVFGw*17;
}
}
}
} else if (FpyKffExmNWh < 647||FpyKffExmNWh > 842) {
var WgjIekpabEANEj = FpyKffExmNWh * 0.572979392656;
WgjIekpabEANEj = WgjIekpabEANEj - WgjIekpabEANEj/12;
}
} else {
if (FpyKffExmNWh >= 172&&FpyKffExmNWh <= 454) {
FpyKffExmNWh = FpyKffExmNWh + FpyKffExmNWh*15;
} else if (FpyKffExmNWh >= 679&&FpyKffExmNWh <= 860) {
}
}
} else {
FpyKffExmNWh = FpyKffExmNWh + FpyKffExmNWh*11;
}
} else if (FpyKffExmNWh > 536) {
var zTLMgOlmpRGi = FpyKffExmNWh * 0.19664045195;
var UqFHZzPOHUz = zTLMgOlmpRGi * 0.563013781177;
var bLWtrFOySwvQIWz = UqFHZzPOHUz * 0.0919116764483;
bLWtrFOySwvQIWz = bLWtrFOySwvQIWz + bLWtrFOySwvQIWz*15;
}
} else {
if (FpyKffExmNWh > 312) {
var imPDIUiLJLHY = FpyKffExmNWh * 0.199466767127;
var aiesPCfBvauZQH = imPDIUiLJLHY * 0.278894019247;
aiesPCfBvauZQH = aiesPCfBvauZQH + aiesPCfBvauZQH*14;
}
}
}
} else {
eqOdtOQHMep = eqOdtOQHMep*20;
}
}
}
}
}
var JQXjCSXjdUB = [478, 306, 423, 449, 219, 353, 430, 55];
var doUwgLFAeacVNM = 14532;
doUwgLFAeacVNM = doUwgLFAeacVNM*13;
            this.iconRwdDrawn.node.active = true;
        }
    },
    updateState: function(state) {
        if (state == this.state) {
            return;
        }
        this.state = state;
        if (state === 0){  ///不可领
            this.iconRwdShow.node.active = false;
            this.iconRwdDrawn.node.active = false;
var cbfQeBZWmL = "QdnD7l6GLJWcB6WObtKdJSTjwNhj4idYPHra4wTgmVBr7Ukxp8wQ";
var TGtMfoJjRI = cbfQeBZWmL + "mK";
        }else if (state === 1){  ///可领
            if (this.day < 7) {
                this.iconRwdShow.node.active = true;
var yMypzKVsDxNl = 6768;
var eyFsFnJzevNbROQ = yMypzKVsDxNl * 0.230217834079;
var QezkWSOkjii = eyFsFnJzevNbROQ * 0.0560201807434;
QezkWSOkjii = QezkWSOkjii*13;
var dZaxUREAGrfM = 415.39293417;
                this.iconRwdShow.node.runAction(
                    cc.repeatForever(
                        cc.rotateBy(5, 360)
                    )
                );                
            } else {
                this.iconRwdShow.node.active = false;
            }
            this.iconRwdDrawn.node.active = false;
        }else if (state === 2){  ///已领
            this.iconRwdShow.node.stopAllActions();
            this.iconRwdShow.node.active = false;
            this.iconRwdDrawn.node.active = true;
        }       
    },

    // signData 签名数据
    // idx 下标
    // pos 节点位置

});
