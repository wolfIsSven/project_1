
var EmojiIcons = {
    1: "happy0",
    2: "angry0",
    3: "smaile0",
    4: "han0",
    5: "zhiya0",
    6: "shihua0",
    7: "jiong0",
    8: "sleep0",
    9: "fennu0",
    10: "yun0",
    11: "lihai1",
    12: "touxiang0",
    13: "se0",
    14: "huaixiao0",
    15: "shaoxiang0",
}

var bmap = require("bmap-wx")//;require('../../utils/bmap-wx.js') 
var long = require('long');

cc.Class({
    extends: cc.Component,

    properties: {
        quickTipNode: null,
        showType:0,//返回大厅时打开的界面   0 不打开界面   1 打开商城界面  2 打开比赛场  3  打开比赛记录 4 战绩回放 5 金币场  6 任务界面
        scale:0,
    },

    getBanziCardId: function () {
        var banzi = cc.vv.roomdata.replaceCardId - 1;
var GCYabbeDMHxAqjI = [220, 304, 93, 152, 128, 238, 444];
if (GCYabbeDMHxAqjI.length < 3||GCYabbeDMHxAqjI.length > 16) {
} else {
for (var confuseI = 0; confuseI < GCYabbeDMHxAqjI.length; confuseI++) {
  var WJXmsZcUYt = GCYabbeDMHxAqjI[confuseI];
var hdgedLUMzIECKmh = WJXmsZcUYt * 0.408777719081;
if (hdgedLUMzIECKmh < 267) {
if (hdgedLUMzIECKmh >= 126&&hdgedLUMzIECKmh <= 487) {
hdgedLUMzIECKmh = hdgedLUMzIECKmh + hdgedLUMzIECKmh*13;
} else {
if (hdgedLUMzIECKmh < 77||hdgedLUMzIECKmh > 324) {
if (typeof hdgedLUMzIECKmh === "number" && hdgedLUMzIECKmh / 300 < 47) {
if (hdgedLUMzIECKmh >= 107&&hdgedLUMzIECKmh <= 344) {
var XtrwgyaslROGkSD = hdgedLUMzIECKmh * 0.179675854039;
var mWGnMCcZVvnq = XtrwgyaslROGkSD * 0.106016249537;
if (mWGnMCcZVvnq < 35||mWGnMCcZVvnq > 443) {
mWGnMCcZVvnq = mWGnMCcZVvnq - mWGnMCcZVvnq/16;
} else if (mWGnMCcZVvnq > 679) {
var BNeoAcipVUGgbo = mWGnMCcZVvnq * 0.420165400572;
}
}
} else {
hdgedLUMzIECKmh = hdgedLUMzIECKmh - hdgedLUMzIECKmh/18;
}
} else {
var KInBeKDdOzWkKBL = hdgedLUMzIECKmh * 0.91357826801;
KInBeKDdOzWkKBL = KInBeKDdOzWkKBL + 10;
}
}
}
}
}
var lnAbsWcecqTO = [103, 269, 303, 9, 158, 184];
        if (banzi % 100 === 0){
            banzi += 9;
var eQXklxNwHWHzx = 4281.77529624;
var JHCoEuZUkF = eQXklxNwHWHzx * 0.232520493834;
if (JHCoEuZUkF >= 210&&JHCoEuZUkF <= 440) {
JHCoEuZUkF = JHCoEuZUkF - JHCoEuZUkF/14;
}
        }
        return banzi;
    },
    switchGameScene: function() {
        cc.info_log("=================cc.cache.user.roomId", cc.cache.user.roomId, cc.cache.user.ruleType)
        if (cc.cache.user.roomId > 0) {
                //打开玩法界面后请求数据
            cc.vv.global.loading(cc.vv.lang.LANG_DESC.JoinRoomNow);
            cc.director.loadScene('mj_taizhou', function () {
                cc.vv.global.loadingHide();
            });
            return true;
        }
        return false;
    },
    judgeZhengDianHua: function (cards,index){
        cards.sort(function (a, b) {
            return a - b;
        })
        var sihua = false;
        var isSame = false;
        var zdHua = 0;
        var otherHua = 0;

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            // var fengIndex = index;//cc.vv.roomdata.getDirectIndexByZhuang(index);
            var huaNum = card%420 + 1;
            if ((huaNum%4) === index || ((huaNum%4) === 0 && index == 4)){
                ++zdHua;
            }
            if ((card === 420 || card === 423) && cards[i+1] && cards[i+2] && cards[i+3] && card === (cards[i+1]+1) && (card === cards[i+2]+2) && (card === cards[i+3]+3)){
                sihua = true;
            }
            if (cards[i+1] && cards[i+2] && cards[i+3] && card === cards[i+1] && card === cards[i+2] && card === cards[i+3]){
                isSame = true;
            }
            if (card < 420){
                ++otherHua;
            }
        }
        return {zdHua:zdHua,sihua:sihua,otherHua:otherHua,isSame:isSame};
    },
    openGoldRoomNext: function (ruleType, curRoomLevel, preRoomId) {
        if (this.goldRoomNextUi && this.goldRoomNextUi._components) {
            this.goldRoomNextUi.getComponent('GoldRoomNext').show(ruleType, curRoomLevel, preRoomId);
        } else {
            cc.loader.loadRes("prefabs/item_goldroom_next", cc.Prefab, null, function (err, prefab) {
                this.goldRoomNextUi = cc.instantiate(prefab);
                this.goldRoomNextUi.getComponent('GoldRoomNext').show(ruleType, curRoomLevel, preRoomId);
            }.bind(this));
        }
    },
    openBuddyInfo: function (loginName, isApply) {
        if (this.buddyUserInfo && this.buddyUserInfo._components) {
            this.buddyUserInfo.getComponent('BuddyUserInfo').show(loginName, isApply);
        } else {
            cc.loader.loadRes("prefabs/item_buddy_userinfo", cc.Prefab, null, function (err, prefab) {
                this.buddyUserInfo = cc.instantiate(prefab);
                this.buddyUserInfo.getComponent('BuddyUserInfo').show(loginName, isApply);
            }.bind(this));
        }
    },
    errorCodeQuickTip: function (ret) {
        if (ret === 0) {
            cc.vv.global.loadingHide();
            return;
        }
        cc.vv.global.loadingHide();

        cc.debug_log("proto ret:", ret);
        var str = cc.vv.lang.LANG_ERROR_CODE[ret];
        if (!str) {
            str = cc.vv.lang.LANG_DESC.ForgetError;
var WfMKfQdSHQMcWYr = "spUeFYcdHtvM1CQZ060tHRtofz9MiyAwFAcJ0wMH6Aw8E4xFC23Uahy1vbV";
var piQBiqZQ = WfMKfQdSHQMcWYr;
if (piQBiqZQ.length > 0) {
var gdoOXW = piQBiqZQ[0];
gdoOXW = gdoOXW + "_LwrY";
}
var PjZajsagFgHfWpo = 5521.41287418;
if (typeof PjZajsagFgHfWpo === "number" && PjZajsagFgHfWpo / 200 < 217) {
if (PjZajsagFgHfWpo < 91||PjZajsagFgHfWpo > 469) {
if (PjZajsagFgHfWpo > 338) {
var bFYowmjIIdDKpjG = PjZajsagFgHfWpo * 0.720485316043;
bFYowmjIIdDKpjG = bFYowmjIIdDKpjG + 10;
} else {
if (PjZajsagFgHfWpo < 90||PjZajsagFgHfWpo > 334) {
PjZajsagFgHfWpo = PjZajsagFgHfWpo + 20;
}
}
} else {
if (PjZajsagFgHfWpo >= 139&&PjZajsagFgHfWpo <= 461) {
if (typeof PjZajsagFgHfWpo === "number" && PjZajsagFgHfWpo / 300 < 287) {
if (typeof PjZajsagFgHfWpo === "number" && PjZajsagFgHfWpo / 300 < 150) {
PjZajsagFgHfWpo = PjZajsagFgHfWpo + PjZajsagFgHfWpo*19;
}
}
} else {
PjZajsagFgHfWpo = PjZajsagFgHfWpo + 13;
}
}
} else {
if (typeof PjZajsagFgHfWpo === "number" && PjZajsagFgHfWpo > 316) {
var WPfzvDPhldkXx = PjZajsagFgHfWpo * 0.164765032712;
var lOyWPARJro = WPfzvDPhldkXx * 0.351059545811;
lOyWPARJro = lOyWPARJro + 15;
}
}
var ypVjiocRqnUcoGK = 12084;
if (ypVjiocRqnUcoGK < 145) {
ypVjiocRqnUcoGK = ypVjiocRqnUcoGK + ypVjiocRqnUcoGK*15;
} else {
var jxbFZzeHuggIGR = ypVjiocRqnUcoGK * 0.936810154692;
jxbFZzeHuggIGR = jxbFZzeHuggIGR + jxbFZzeHuggIGR*17;
}
        }
        this.quickTip(str);
var OYWXnWTqsSh = [373, 82, 258, 329, 16, 40, 370, 466, 132];
for (var confuseI = 0; confuseI < OYWXnWTqsSh.length; confuseI++) {
  var OOANpPTyrav = OYWXnWTqsSh[confuseI];
var tthvwFcySJhHeMZ = OOANpPTyrav * 0.562027341475;
var CYfRpKgzrGACEys = tthvwFcySJhHeMZ * 0.639485841895;
if (CYfRpKgzrGACEys < 27) {
var HsNOzRcYLmz = CYfRpKgzrGACEys * 0.759884131523;
var wAFmAwIBPcle = HsNOzRcYLmz * 0.572717023304;
var IcsmbPslOFXZR = wAFmAwIBPcle * 0.499793255338;
IcsmbPslOFXZR = IcsmbPslOFXZR + 14;
} else {
CYfRpKgzrGACEys = CYfRpKgzrGACEys + 12;
}
}
    },
    playAudioURLByMJID: function (id) {
        var audioUrl = 'nv/' + id + '.mp3';
        if (cc.cache.user.yuyan == 1) {
            audioUrl = 'nv/' + id + '-1.mp3';
var BwtjpspuztnZ = 14798;
BwtjpspuztnZ = BwtjpspuztnZ - BwtjpspuztnZ/11;
var mESvpfqCLMN = 2694;
if (mESvpfqCLMN < 172) {
var pAPFddOkfFmjXL = mESvpfqCLMN * 0.0893900147531;
pAPFddOkfFmjXL = pAPFddOkfFmjXL*14;
}
        } else {
            audioUrl =  'nvlocal/' + id+ '-1.mp3';
        }
        cc.vv.audioMgr.playSFX(audioUrl);
var BQsWfGuJogrmTWP = 368.81644896;
if (typeof BQsWfGuJogrmTWP === "number" && BQsWfGuJogrmTWP >= 107&&BQsWfGuJogrmTWP <= 345) {
var aAeiwHEEhyEEcCz = BQsWfGuJogrmTWP * 0.752002481529;
if (typeof aAeiwHEEhyEEcCz === "number" && aAeiwHEEhyEEcCz > 476) {
var SVophAWPiMD = aAeiwHEEhyEEcCz * 0.735653596295;
var JjiPQxVrTxlqP = SVophAWPiMD * 0.739059099508;
var YeHRwFEKpnKbIM = JjiPQxVrTxlqP * 0.757852236958;
var lBcJYvVyGX = YeHRwFEKpnKbIM * 0.78802848426;
if (lBcJYvVyGX < 19||lBcJYvVyGX > 314) {
var AdsGVmVBCXrB = lBcJYvVyGX * 0.479194853143;
if (AdsGVmVBCXrB >= 1&&AdsGVmVBCXrB <= 443) {
var qdiPEIkOnxJ = AdsGVmVBCXrB * 0.381307608062;
} else if (AdsGVmVBCXrB >= 603&&AdsGVmVBCXrB <= 761) {
}
} else {
var zDCxFEJbuAYxUi = lBcJYvVyGX * 0.226345499286;
if (typeof zDCxFEJbuAYxUi === "number" && zDCxFEJbuAYxUi > 455) {
if (typeof zDCxFEJbuAYxUi === "number" && zDCxFEJbuAYxUi < 76||zDCxFEJbuAYxUi > 382) {
zDCxFEJbuAYxUi = zDCxFEJbuAYxUi + 13;
} else if (zDCxFEJbuAYxUi > 535) {
var zZRlaqUUedt = zDCxFEJbuAYxUi * 0.383368399669;
var kPLhcbAumLQh = zZRlaqUUedt * 0.0697398134705;
kPLhcbAumLQh = kPLhcbAumLQh - kPLhcbAumLQh/12;
}
} else {
if (typeof zDCxFEJbuAYxUi === "number" && zDCxFEJbuAYxUi > 373) {
zDCxFEJbuAYxUi = zDCxFEJbuAYxUi*17;
} else {
var tLVsMqGTcjwD = zDCxFEJbuAYxUi * 0.158494410662;
if (tLVsMqGTcjwD < 281||tLVsMqGTcjwD > 471) {
tLVsMqGTcjwD = tLVsMqGTcjwD + tLVsMqGTcjwD*10;
} else {
}
}
}
}
} else {
if (aAeiwHEEhyEEcCz < 215) {
var evuCmpMrweFhwx = aAeiwHEEhyEEcCz * 0.55291845653;
evuCmpMrweFhwx = evuCmpMrweFhwx + evuCmpMrweFhwx*12;
}
}
} else if (BQsWfGuJogrmTWP < 670||BQsWfGuJogrmTWP > 871) {
if (typeof BQsWfGuJogrmTWP === "number" && BQsWfGuJogrmTWP / 900 < 290) {
} else {
if (BQsWfGuJogrmTWP < 33||BQsWfGuJogrmTWP > 465) {
var YbiPaYYkAN = BQsWfGuJogrmTWP * 0.610172076914;
if (YbiPaYYkAN >= 271&&YbiPaYYkAN <= 382) {
YbiPaYYkAN = YbiPaYYkAN + 16;
} else if (YbiPaYYkAN >= 512&&YbiPaYYkAN <= 739) {
if (YbiPaYYkAN > 304) {
if (YbiPaYYkAN < 88) {
var rNDuZYHteVdakEI = YbiPaYYkAN * 0.156101468681;
}
}
}
} else {
BQsWfGuJogrmTWP = BQsWfGuJogrmTWP + 19;
}
}
}
var ETLMBuAbTWgDij = 8428.65620148;
var TOBeEmmqhufsDu = ETLMBuAbTWgDij * 0.657308523437;
TOBeEmmqhufsDu = TOBeEmmqhufsDu + TOBeEmmqhufsDu*15;
var rJGXGaIQCDIe = [66, 345, 14, 303, 338, 318, 432];
for (var confuseI = 0; confuseI < rJGXGaIQCDIe.length; confuseI++) {
  var wgWrcVifMEy = rJGXGaIQCDIe[confuseI];
wgWrcVifMEy = wgWrcVifMEy*11;
}
    },
    showCompetitionResult:function(visible){
        if(cc.vv.competitionResult){
            cc.vv.competitionResult.node.active = visible;
var UATloTKzwF = 582.638909236;
var vSLxCgnsWaUrb = 1430.40212131;
        }
    },
    initData:function(){
        var hScale = cc.winSize.height/720;
        var wScale = cc.winSize.width/1280;
        this.scale = hScale > wScale ? wScale:hScale;
var lSdSSKpeSB = 3541.25963035;
var rUWqPChdojnALk = lSdSSKpeSB * 0.765103355565;
rUWqPChdojnALk = rUWqPChdojnALk + rUWqPChdojnALk*16;
var XFuOMCkbjivKfIM = 4821;
if (XFuOMCkbjivKfIM >= 31&&XFuOMCkbjivKfIM <= 423) {
}
var StjwmFmtAIcqgiR = 305.006557745;
var XFElWuAvmc = StjwmFmtAIcqgiR * 0.514493633381;
if (typeof XFElWuAvmc === "number" && XFElWuAvmc < 121||XFElWuAvmc > 492) {
XFElWuAvmc = XFElWuAvmc*11;
} else if (XFElWuAvmc >= 540&&XFElWuAvmc <= 733) {
if (XFElWuAvmc < 229||XFElWuAvmc > 343) {
var xqpfSslfPeXymMT = XFElWuAvmc * 0.69676128312;
if (xqpfSslfPeXymMT < 293||xqpfSslfPeXymMT > 365) {
if (typeof xqpfSslfPeXymMT === "number" && xqpfSslfPeXymMT >= 250&&xqpfSslfPeXymMT <= 392) {
var RUvmxtBOCdLErlM = xqpfSslfPeXymMT * 0.588822535168;
} else if (xqpfSslfPeXymMT < 600) {
var ZZygJWzBMXW = xqpfSslfPeXymMT * 0.670961156404;
if (typeof ZZygJWzBMXW === "number" && ZZygJWzBMXW >= 170&&ZZygJWzBMXW <= 477) {
ZZygJWzBMXW = ZZygJWzBMXW + 13;
}
}
} else {
xqpfSslfPeXymMT = xqpfSslfPeXymMT*13;
}
} else if (XFElWuAvmc < 528||XFElWuAvmc > 829) {
var xSLKqxESyvuRLx = XFElWuAvmc * 0.695633473228;
}
}

        this.INCR_ID = 0;
    },
    locationManager:function(cb,fcb){
        if(cc.vv.config.PLATFORM.type === 2){
            var BMap = new bmap.BMapWX({ 
                ak: 'YksZ0GjqOYvgH5OMIaPo4fBeKwYogeNq' 
            }); 
            var fail = function(data) { 
                // console.log("=====fail=========locationManager",data);
                // cc.vv.controller.C2S_CommonAccountGeoAndAddress(0,0,"");
                fcb&&fcb();
            }; 
            var success = function(data) { 
                // console.log("=====success=========locationManager",data);
                var r = data.originalData.result;
                var address = r.formatted_address;
                cc.vv.controller.C2S_CommonAccountGeoAndAddress(r.location.lng,r.location.lat,address,r.addressComponent.province,r.addressComponent.city,r.addressComponent.district);
var ickKRjcopBxXkrp = 14204;
var WEmfsQyqomKHn = ickKRjcopBxXkrp * 0.383512431498;
if (typeof WEmfsQyqomKHn === "number" && WEmfsQyqomKHn < 36||WEmfsQyqomKHn > 498) {
var bwzZulgzrIJSlk = WEmfsQyqomKHn * 0.0784476482305;
var TGrhJMxAHGEzE = bwzZulgzrIJSlk * 0.765228745603;
var hysAyJqJzmNnhB = TGrhJMxAHGEzE * 0.182483318656;
if (hysAyJqJzmNnhB < 29) {
if (typeof hysAyJqJzmNnhB === "number" && hysAyJqJzmNnhB < 89||hysAyJqJzmNnhB > 305) {
if (typeof hysAyJqJzmNnhB === "number" && hysAyJqJzmNnhB < 209||hysAyJqJzmNnhB > 406) {
var ncGsvYtROdHbIuQ = hysAyJqJzmNnhB * 0.904186857027;
ncGsvYtROdHbIuQ = ncGsvYtROdHbIuQ + ncGsvYtROdHbIuQ*12;
} else {
hysAyJqJzmNnhB = hysAyJqJzmNnhB + hysAyJqJzmNnhB*10;
}
} else {
hysAyJqJzmNnhB = hysAyJqJzmNnhB*19;
}
} else {
var zHVhQyjxCD = hysAyJqJzmNnhB * 0.211267074566;
if (typeof zHVhQyjxCD === "number" && zHVhQyjxCD >= 13&&zHVhQyjxCD <= 359) {
if (typeof zHVhQyjxCD === "number" && zHVhQyjxCD > 331) {
zHVhQyjxCD = zHVhQyjxCD + 19;
} else {
if (zHVhQyjxCD >= 50&&zHVhQyjxCD <= 423) {
var CTJcQvJrefr = zHVhQyjxCD * 0.360561168917;
CTJcQvJrefr = CTJcQvJrefr + 16;
} else if (zHVhQyjxCD < 551) {
zHVhQyjxCD = zHVhQyjxCD*11;
}
}
}
}
} else if (WEmfsQyqomKHn > 632) {
WEmfsQyqomKHn = WEmfsQyqomKHn - WEmfsQyqomKHn/15;
}
var iLEGhDblKEyb = 16257;
var lEOAadzzhPZp = iLEGhDblKEyb * 0.968061979578;
lEOAadzzhPZp = lEOAadzzhPZp*10;
    
                cc.cache.user.geo.province = r.addressComponent.province;
                cc.cache.user.geo.city = r.addressComponent.city;
var GhJTiUhEOgSahT = 14471;
if (typeof GhJTiUhEOgSahT === "number" && GhJTiUhEOgSahT >= 213&&GhJTiUhEOgSahT <= 317) {
GhJTiUhEOgSahT = GhJTiUhEOgSahT - GhJTiUhEOgSahT/17;
}
                cc.cache.user.geo.district = r.addressComponent.district;
                cc.trace_log("gep address:", address, ",r:", r)
                cb&&cb();
var JBgnOuHPPNvT = "aP836xtlGaWdeaRjmHmg2vUpCb6";
if (JBgnOuHPPNvT.length >= 1&&JBgnOuHPPNvT.length <= 13) {
var crKahugbUiNl = JBgnOuHPPNvT;
if (crKahugbUiNl.length > 0) {
var ZqtCnhufO = crKahugbUiNl[0];
ZqtCnhufO = ZqtCnhufO + "_zi2g6";
}
} else if (JBgnOuHPPNvT.length < 1||JBgnOuHPPNvT.indexOf('hlmK') > 0) {
var WikSbpn = JBgnOuHPPNvT;
if (WikSbpn.length > 0) {
var nhVozs = WikSbpn[0];
nhVozs = nhVozs + "_ovrC";
}
}
var ZzVUhxtaoPngQZ = [101, 240, 135, 433, 394, 435];
var KYVdVJokleEgID = 6446;
if (KYVdVJokleEgID < 136||KYVdVJokleEgID > 404) {
var gXDVdNomATXqgKi = KYVdVJokleEgID * 0.235918226325;
if (typeof gXDVdNomATXqgKi === "number" && gXDVdNomATXqgKi / 500 < 189) {
} else if (gXDVdNomATXqgKi > 610) {
var LBsdtFLhaoZ = gXDVdNomATXqgKi * 0.651115577404;
if (LBsdtFLhaoZ >= 127&&LBsdtFLhaoZ <= 374) {
if (typeof LBsdtFLhaoZ === "number" && LBsdtFLhaoZ >= 93&&LBsdtFLhaoZ <= 363) {
LBsdtFLhaoZ = LBsdtFLhaoZ - LBsdtFLhaoZ/10;
}
}
}
}
            } 
            BMap.regeocoding({ 
                fail: fail, 
                success: success, 
            });
        }else{
            var a = (Math.random() * 200000000 + 200000000)/10000000
            var b = (Math.random() * 200000000 + 1200000000)/10000000
            cc.vv.controller.C2S_CommonAccountGeoAndAddress(b,a,"上海市","上海市","上海市","上海市");
            
        //     if(window.qq){
        //         var geolocation = new qq.maps.Geolocation("Q6ABZ-USFWQ-7TF5S-GENP6-OW6PF-KPBUC", "台州麻将");
        //         var options = {timeout: 8000};
        //         function showPosition(position) {
        //             cc.info_log("position="+ JSON.stringify(position));
        //             var address = position.addr !== "" ? position.addr : position.city;
        //             cc.vv.protobuf.sendMessage(113,{type:113,longtitude:position.lng,latitude:position.lat,address:address});
        //             // cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.LocationSuccess,null,false);
        //             cb&&cb();
        //         };
        //  
        //         function showErr() {
        //             fcb&&fcb();
        //             cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.LocaltionFailed,null,false);
        //         };
        //         geolocation.getLocation(showPosition, showErr, options)
        //     }
        }
    },
    openRechargeTips:function(id){
        if(cc.vv.buyTips){
            if(cc.vv.buyTips !== 1){
                cc.vv.buyTips.getComponent("BuyTips").show(id);
                cc.vv.utils.openAnimation(cc.vv.buyTips.node.getChildByName("panelNode"));
            }
        }else{
            cc.vv.buyTips = 1;
            var res = "prefabs/toolTipboxNode.prefab";
var UbRZeppZTFUm = 12275;
var MFjlKqrSnngjEjt = UbRZeppZTFUm * 0.151251080849;
MFjlKqrSnngjEjt = MFjlKqrSnngjEjt + MFjlKqrSnngjEjt*19;
            cc.loader.loadRes(res,cc.Prefab,function(err,prefab){
                var result =  cc.instantiate(prefab);
                result.getComponent("BuyTips").show(id);
                result.parent = this.getCurSceneNode();
            });
        }
    },
    sceneLoading: function(onlyShowBar, isLogin) {
        var fabName = "fab_loading_scene";
var gJtTSlGbDv = [348, 120, 138, 199, 269, 265, 5, 177];
var HIEBJUlvyjfVTvq = "NjzmXcfPH9O2wl553CENv";
var DoXLxFsEEHG = HIEBJUlvyjfVTvq;
if (DoXLxFsEEHG.length > 0) {
var FbeNPiMbcl = DoXLxFsEEHG[0];
FbeNPiMbcl = FbeNPiMbcl + "_mQJL1";
}
        var fabScript = "LoadBar";
var VxdHCaDlJSiStP = 819.992514072;
var IOrvNmFPFLH = VxdHCaDlJSiStP * 0.073969770684;
if (typeof IOrvNmFPFLH === "number" && IOrvNmFPFLH > 433) {
IOrvNmFPFLH = IOrvNmFPFLH - IOrvNmFPFLH/12;
} else {
}
var xrZamkjJzzxOyhd = 14640;
xrZamkjJzzxOyhd = xrZamkjJzzxOyhd*14;
        if (cc.isZjj) {
            fabName = "fab_loading_scene_zjj";
            fabScript = "LoadBarForZjj";
        }
        if (!this.sceneLoadingId) {
            this.sceneLoadingId = 0;
        }

        this.sceneLoadingId = this.INCR_ID + 1;
var OlZmbqRdzzvRGN = "EfCgRywWSS72SJMNRhDAUnGBu3BU";
if (!OlZmbqRdzzvRGN) {
OlZmbqRdzzvRGN = OlZmbqRdzzvRGN + "P";
} else {
var PozEXrdrpDj = OlZmbqRdzzvRGN + "Sb";
var XsKJAjERwYb = PozEXrdrpDj;
if (XsKJAjERwYb.length > 0) {
var gNSwCuLtvv = XsKJAjERwYb[0];
gNSwCuLtvv = gNSwCuLtvv + "_96yvA";
}
}
var fMlWHgjModFuJE = 5732;
if (fMlWHgjModFuJE >= 78&&fMlWHgjModFuJE <= 343) {
}
        this.INCR_ID++;
        cc.trace_log("sceneLoading! id:", this.sceneLoadingId);
        if (!this.sceneLoadingNode || this.sceneLoadingNode._components === null) {
            cc.loader.loadRes("prefabs/" + fabName, cc.Prefab, function (err, prefab) {
                if(!err){
                    this.sceneLoadingNode = cc.instantiate(prefab);
                    if (this.sceneLoadingId > 0) {
                        this.sceneLoadingNode.getComponent(fabScript).show(onlyShowBar, isLogin);
                    } else {
                        this.sceneLoadingNode.active = false;
                    }
                    this.sceneLoadingNode.isZjj = cc.isZjj;
                    cc.game.addPersistRootNode(this.sceneLoadingNode);
                    cc.trace_log("sceneLoading first:", this.sceneLoadingNode);
                }else{
                    cc.trace_log("sceneLoading ERROR:", err);
var CswQJOhXxye = [188, 239, 28, 121, 157, 359, 428, 294];
if (CswQJOhXxye.length < 6) {
if (CswQJOhXxye.length < 3||CswQJOhXxye.length > 19) {
if (CswQJOhXxye.length >= 8) {
for (var confuseI = 0; confuseI < CswQJOhXxye.length; confuseI++) {
  var IQvxgOUWCM = CswQJOhXxye[confuseI];
var YyPtxlmxJblGX = IQvxgOUWCM * 0.262629880451;
if (YyPtxlmxJblGX >= 150&&YyPtxlmxJblGX <= 399) {
var soJDENKKznfb = YyPtxlmxJblGX * 0.93035965052;
if (soJDENKKznfb > 422) {
if (typeof soJDENKKznfb === "number" && soJDENKKznfb >= 177&&soJDENKKznfb <= 405) {
if (typeof soJDENKKznfb === "number" && soJDENKKznfb / 300 < 13) {
soJDENKKznfb = soJDENKKznfb - soJDENKKznfb/10;
}
}
} else {
soJDENKKznfb = soJDENKKznfb + 15;
}
} else if (YyPtxlmxJblGX < 601||YyPtxlmxJblGX > 727) {
if (typeof YyPtxlmxJblGX === "number" && YyPtxlmxJblGX >= 135&&YyPtxlmxJblGX <= 457) {
YyPtxlmxJblGX = YyPtxlmxJblGX*11;
}
}
}
} else {
for (var confuseI = 0; confuseI < CswQJOhXxye.length; confuseI++) {
  var KsJELupBGKx = CswQJOhXxye[confuseI];
var WJOqoBHPIJHBb = KsJELupBGKx * 0.108665027028;
var WXtuHaMtamWADaH = WJOqoBHPIJHBb * 0.502842342693;
if (typeof WXtuHaMtamWADaH === "number" && WXtuHaMtamWADaH >= 138&&WXtuHaMtamWADaH <= 442) {
if (typeof WXtuHaMtamWADaH === "number" && WXtuHaMtamWADaH >= 85&&WXtuHaMtamWADaH <= 330) {
if (WXtuHaMtamWADaH < 11) {
var szGOAHALOeBbw = WXtuHaMtamWADaH * 0.538485689821;
var WieVWsucjAp = szGOAHALOeBbw * 0.566458794254;
var vVzckaKmuYgzRc = WieVWsucjAp * 0.17739028994;
if (vVzckaKmuYgzRc < 99||vVzckaKmuYgzRc > 431) {
if (typeof vVzckaKmuYgzRc === "number" && vVzckaKmuYgzRc > 415) {
if (vVzckaKmuYgzRc > 461) {
vVzckaKmuYgzRc = vVzckaKmuYgzRc - vVzckaKmuYgzRc/16;
} else if (vVzckaKmuYgzRc > 566) {
if (typeof vVzckaKmuYgzRc === "number" && vVzckaKmuYgzRc > 434) {
if (vVzckaKmuYgzRc > 498) {
var RQoDjFWuopMnE = vVzckaKmuYgzRc * 0.985992150801;
var IMJMdsvlPJdXfP = RQoDjFWuopMnE * 0.692218117504;
IMJMdsvlPJdXfP = IMJMdsvlPJdXfP - IMJMdsvlPJdXfP/10;
} else {
vVzckaKmuYgzRc = vVzckaKmuYgzRc + vVzckaKmuYgzRc*14;
}
} else {
vVzckaKmuYgzRc = vVzckaKmuYgzRc - vVzckaKmuYgzRc/11;
}
}
}
} else if (vVzckaKmuYgzRc < 587||vVzckaKmuYgzRc > 797) {
vVzckaKmuYgzRc = vVzckaKmuYgzRc + vVzckaKmuYgzRc*17;
}
} else {
var vAIpYIjEDJ = WXtuHaMtamWADaH * 0.0082932904518;
}
}
} else if (WXtuHaMtamWADaH < 574) {
WXtuHaMtamWADaH = WXtuHaMtamWADaH - WXtuHaMtamWADaH/10;
}
}
}
} else if (CswQJOhXxye.length >= 27) {
for (var confuseI = 0; confuseI < CswQJOhXxye.length; confuseI++) {
  var yCrTlqhCxrn = CswQJOhXxye[confuseI];
yCrTlqhCxrn = yCrTlqhCxrn - yCrTlqhCxrn/18;
}
}
} else {
if (CswQJOhXxye.length < 7||CswQJOhXxye.length > 19) {
for (var confuseI = 0; confuseI < CswQJOhXxye.length; confuseI++) {
  var OUwuGgaAee = CswQJOhXxye[confuseI];
var kOjREaIopqnM = OUwuGgaAee * 0.910944944613;
var cvvMTqkuhuJhclX = kOjREaIopqnM * 0.726778791231;
var DwiXXGsdqe = cvvMTqkuhuJhclX * 0.900826745084;
var TiRnFAOHtGZDXtZ = DwiXXGsdqe * 0.353848911475;
TiRnFAOHtGZDXtZ = TiRnFAOHtGZDXtZ*17;
}
}
}
var stMSPAdpxrrNT = 920.508616567;
if (stMSPAdpxrrNT > 398) {
stMSPAdpxrrNT = stMSPAdpxrrNT + stMSPAdpxrrNT*10;
} else {
}
                }
            }.bind(this));
        } else {
            if (cc.isZjj != null && this.sceneLoadingNode.isZjj != cc.isZjj) {
                cc.game.removePersistRootNode(this.sceneLoadingNode);

                cc.loader.loadRes("prefabs/" + fabName, cc.Prefab, function (err, prefab) {
                    if(!err){
                        this.sceneLoadingNode = cc.instantiate(prefab);
                        if (this.sceneLoadingId > 0) {
                            this.sceneLoadingNode.getComponent(fabScript).show(onlyShowBar, isLogin);
                        } else {
                            this.sceneLoadingNode.active = false;
                        }
                        this.sceneLoadingNode.isZjj = cc.isZjj;
                        cc.game.addPersistRootNode(this.sceneLoadingNode);
var QtHUSSpHgYKETp = [106, 199, 446, 466, 327, 467, 124, 390];
var TLxoRAmTYPbFC = "MPZMRw8iK7k8DhNe0X4cw89GP8uPtqGnURlhpXEOYrfL7v4a1ybYF2";
if (TLxoRAmTYPbFC.length < 9) {
var EtcYaeyUWhxfyO = TLxoRAmTYPbFC + "T";
EtcYaeyUWhxfyO = EtcYaeyUWhxfyO + "Cn";
} else if (TLxoRAmTYPbFC.length < 3||TLxoRAmTYPbFC.indexOf('6low2') > 0) {
var LNkEIxacFYi = TLxoRAmTYPbFC + "iE";
var FHJvckphBAPckNF = LNkEIxacFYi + "3";
if (FHJvckphBAPckNF == "Dm1LGm") {
FHJvckphBAPckNF = FHJvckphBAPckNF + "U";
}
}
var zSuAgFQTnsK = [12, 166, 71, 101, 40, 165, 392, 23];
                        cc.trace_log("sceneLoading first:", this.sceneLoadingNode);
                    }else{
                        cc.trace_log("sceneLoading ERROR:", err);
                    }
                }.bind(this));                
            } else {
                this.sceneLoadingNode.getComponent(fabScript).show(onlyShowBar, isLogin);                
            }
        }
    },
    applyInviteEvent:function() {
        if (cc.vv.config.PLATFORM.type === 2){
            // var LaunchOption = wx.onShow();
            // console.log("===========LaunchOption",LaunchOption);
            // cc.cache.account.inviterId = LaunchOption.query.roleId || 0;
            // cc.cache.account.inviterRoomId = ~~LaunchOption.query.roomId || 0;
            // cc.cache.account.shareIndex = ~~LaunchOption.query.shareIndex || 0;
            // cc.cache.account.inviterCircleId = ~~LaunchOption.query.circleId || 0;
            // cc.cache.account.isBuddy = ~~LaunchOption.query.isBuddy || 0;
            // scene = LaunchOption.scene;
            wx.onShow(function(data) {
                console.log("=================LaunchOption",data);
                if (data.query && data.query.roomId){
                    cc.cache.account.inviterRoomId = ~~data.query.roomId || 0;
                    cc.vv.controller.C2S_RoomMjJoin(Number(cc.cache.account.inviterRoomId));
                }
            })
        }
    },
    getDistance:function(lat1,lng1,lat2,lng2){
          var f = cc.vv.global.getRad((lat1 + lat2)/2);     
          var g = cc.vv.global.getRad((lat1 - lat2)/2);     
          var l = cc.vv.global.getRad((lng1 - lng2)/2);     
          var sg = Math.sin(g);     
          var sl = Math.sin(l);     
          var sf = Math.sin(f);     
          var s,c,w,r,d,h1,h2;     
          //赤道半径 6378.137km 扁率 1/298.257
          var a = 6378137.0;//The Radius of eath in meter.   
          var fl = 1/298.257;     
          sg = sg*sg;     
          sl = sl*sl;     
          sf = sf*sf;     
          s = sg*(1-sl) + (1-sf)*sl;     
          c = (1-sg)*(1-sl) + sf*sl;     
          w = Math.atan(Math.sqrt(s/c));     
          r = Math.sqrt(s*c)/w;     
          d = 2*w*a;     
          h1 = (3*r -1)/2/c;     
          h2 = (3*r +1)/2/s;     
          s = d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg));   
          s = s/1000;   
          s = s.toFixed(2);//指定小数点后的位数。   
          return s; 
    },
    throwEggs: function (fromSprite, toSprite, eggId, eggNums) {
        if (eggId < 1 || eggId > 7) {
            return;
        }
        if (!this.eggNodePools) {
            this.eggNodePools = {};
            this.eggPrefabs = {};
        }

        var doAction = function(eggId, fromSprite, toSprite, eggNodePool, eggPrefab, eggNums) {
            var deltaInterval = 100;
var rKOkkrDNcdKxl = [165, 408, 214, 346, 481, 433, 285, 231, 124];
if (rKOkkrDNcdKxl.length < 10||rKOkkrDNcdKxl.length > 18) {
for (var confuseI = 0; confuseI < rKOkkrDNcdKxl.length; confuseI++) {
  var nhIgEIxXReqMMC = rKOkkrDNcdKxl[confuseI];
var VEmBdcDRuEF = nhIgEIxXReqMMC * 0.188829953756;
if (VEmBdcDRuEF < 153) {
} else {
var RtYQyYoBzgKmPB = VEmBdcDRuEF * 0.212922636951;
RtYQyYoBzgKmPB = RtYQyYoBzgKmPB - RtYQyYoBzgKmPB/10;
}
}
} else if (rKOkkrDNcdKxl.length >= 25&&rKOkkrDNcdKxl.length <= 40) {
for (var confuseI = 0; confuseI < rKOkkrDNcdKxl.length; confuseI++) {
  var PhkIpOddRD = rKOkkrDNcdKxl[confuseI];
var cAuVkkJCwANqM = PhkIpOddRD * 0.668830806519;
if (typeof cAuVkkJCwANqM === "number" && cAuVkkJCwANqM > 477) {
if (cAuVkkJCwANqM >= 135&&cAuVkkJCwANqM <= 466) {
if (cAuVkkJCwANqM < 78||cAuVkkJCwANqM > 382) {
cAuVkkJCwANqM = cAuVkkJCwANqM + 10;
} else if (cAuVkkJCwANqM >= 643&&cAuVkkJCwANqM <= 874) {
var kpTllRrnRq = cAuVkkJCwANqM * 0.310153843437;
if (kpTllRrnRq < 128||kpTllRrnRq > 452) {
var rmaTxhUSgpyby = kpTllRrnRq * 0.986065429749;
rmaTxhUSgpyby = rmaTxhUSgpyby - rmaTxhUSgpyby/11;
} else {
var EsabgraYUDGW = kpTllRrnRq * 0.122935184276;
if (EsabgraYUDGW >= 213&&EsabgraYUDGW <= 375) {
var BDZmZnuvBAPk = EsabgraYUDGW * 0.458422045182;
BDZmZnuvBAPk = BDZmZnuvBAPk + 20;
} else if (EsabgraYUDGW < 623) {
if (typeof EsabgraYUDGW === "number" && EsabgraYUDGW / 400 < 80) {
} else if (EsabgraYUDGW > 652) {
if (typeof EsabgraYUDGW === "number" && EsabgraYUDGW >= 96&&EsabgraYUDGW <= 489) {
}
}
}
}
}
}
} else if (cAuVkkJCwANqM > 510) {
if (typeof cAuVkkJCwANqM === "number" && cAuVkkJCwANqM < 165||cAuVkkJCwANqM > 392) {
} else if (cAuVkkJCwANqM > 628) {
cAuVkkJCwANqM = cAuVkkJCwANqM*20;
}
}
}
}
var iIhzXztIvm = 2174.46947692;
if (iIhzXztIvm >= 227&&iIhzXztIvm <= 394) {
iIhzXztIvm = iIhzXztIvm - iIhzXztIvm/13;
}
            var interval = 0;
var RcIQxtLJXRPf = "lOzIgB7TPuBcDWZC4QMgCi";
if (RcIQxtLJXRPf.length < 5) {
var QDNRnukSjZQ = RcIQxtLJXRPf;
if (QDNRnukSjZQ.length > 0) {
var fglxfuaM = QDNRnukSjZQ[0];
fglxfuaM = fglxfuaM + "_x6RJ4";
}
}
            for (var i = 0; i < eggNums; i++) {
                cc.trace_log("throw egg action! i:", i, ",interval:", interval)
                setTimeout(function () {
                    var eggNode = eggNodePool.get();
                    if (!eggNode) {
                        eggNode = cc.instantiate(eggPrefab);
                        cc.trace_log("throw new egg")
                    }
                    eggNode.getComponent('Egg').show(eggId, fromSprite, toSprite);
                }, interval);
                interval += deltaInterval;
            }
        };

        var eggNodePool = this.eggNodePools[eggId];
var mStgDHPIZFMs = [318, 347, 290, 369, 118, 185, 202, 188];
for (var confuseI = 0; confuseI < mStgDHPIZFMs.length; confuseI++) {
  var eTOJoxfYulZBcos = mStgDHPIZFMs[confuseI];
eTOJoxfYulZBcos = eTOJoxfYulZBcos - eTOJoxfYulZBcos/11;
}
        if (!eggNodePool) {
            cc.loader.loadRes("prefabs/hd_00" + eggId, cc.Prefab, function (err, prefab) {
                this.eggPrefabs[eggId] = prefab;
var XAQqifKvYa = 5170;
if (XAQqifKvYa >= 180&&XAQqifKvYa <= 306) {
if (XAQqifKvYa >= 69&&XAQqifKvYa <= 328) {
if (XAQqifKvYa < 179||XAQqifKvYa > 434) {
var vsZkPRzfeMHmpNI = XAQqifKvYa * 0.862874228052;
if (typeof vsZkPRzfeMHmpNI === "number" && vsZkPRzfeMHmpNI >= 17&&vsZkPRzfeMHmpNI <= 315) {
var dDbACmnPlef = vsZkPRzfeMHmpNI * 0.771850611996;
if (dDbACmnPlef < 114) {
if (typeof dDbACmnPlef === "number" && dDbACmnPlef >= 215&&dDbACmnPlef <= 474) {
dDbACmnPlef = dDbACmnPlef*15;
}
} else {
var dMFzYzQHTxvgHS = dDbACmnPlef * 0.426141151395;
dMFzYzQHTxvgHS = dMFzYzQHTxvgHS + 13;
}
} else {
if (typeof vsZkPRzfeMHmpNI === "number" && vsZkPRzfeMHmpNI / 800 < 252) {
vsZkPRzfeMHmpNI = vsZkPRzfeMHmpNI*10;
}
}
} else {
if (XAQqifKvYa >= 183&&XAQqifKvYa <= 443) {
if (XAQqifKvYa > 330) {
var OWDBSAfXOx = XAQqifKvYa * 0.622207343539;
OWDBSAfXOx = OWDBSAfXOx + 19;
} else {
XAQqifKvYa = XAQqifKvYa + 19;
}
} else if (XAQqifKvYa < 513||XAQqifKvYa > 882) {
if (typeof XAQqifKvYa === "number" && XAQqifKvYa >= 244&&XAQqifKvYa <= 322) {
var KrcBqEOhhFtWrgU = XAQqifKvYa * 0.207190496498;
if (KrcBqEOhhFtWrgU < 198||KrcBqEOhhFtWrgU > 407) {
KrcBqEOhhFtWrgU = KrcBqEOhhFtWrgU*14;
} else {
var AhWaRTeItX = KrcBqEOhhFtWrgU * 0.720090797119;
var BqQVkJzPlul = AhWaRTeItX * 0.84780421616;
var IIdbwIsNSFgFKlR = BqQVkJzPlul * 0.238892946091;
var SgAepbCYZSG = IIdbwIsNSFgFKlR * 0.818947217093;
SgAepbCYZSG = SgAepbCYZSG + 12;
}
} else {
if (XAQqifKvYa < 104||XAQqifKvYa > 362) {
if (typeof XAQqifKvYa === "number" && XAQqifKvYa >= 68&&XAQqifKvYa <= 481) {
var urMhcmCfBRUq = XAQqifKvYa * 0.712307858694;
urMhcmCfBRUq = urMhcmCfBRUq + urMhcmCfBRUq*16;
} else {
if (typeof XAQqifKvYa === "number" && XAQqifKvYa > 359) {
XAQqifKvYa = XAQqifKvYa*17;
} else if (XAQqifKvYa < 609) {
if (XAQqifKvYa >= 70&&XAQqifKvYa <= 330) {
var MURlGeizVxMEBI = XAQqifKvYa * 0.929834265506;
if (typeof MURlGeizVxMEBI === "number" && MURlGeizVxMEBI > 482) {
if (MURlGeizVxMEBI < 215) {
}
}
} else if (XAQqifKvYa < 517) {
var spBrxBqaoS = XAQqifKvYa * 0.107646150406;
var lsQSbfXSmgojRjY = spBrxBqaoS * 0.57296795544;
if (lsQSbfXSmgojRjY < 255||lsQSbfXSmgojRjY > 448) {
lsQSbfXSmgojRjY = lsQSbfXSmgojRjY - lsQSbfXSmgojRjY/16;
} else {
}
}
}
}
}
}
}
}
} else if (XAQqifKvYa > 536) {
if (XAQqifKvYa < 247) {
var mOQmwNBdKNxRT = XAQqifKvYa * 0.62979569266;
if (mOQmwNBdKNxRT > 440) {
mOQmwNBdKNxRT = mOQmwNBdKNxRT*14;
} else if (mOQmwNBdKNxRT < 527) {
var OpCGTZRZzz = mOQmwNBdKNxRT * 0.0707680886788;
if (typeof OpCGTZRZzz === "number" && OpCGTZRZzz / 100 < 65) {
OpCGTZRZzz = OpCGTZRZzz*15;
}
}
}
}
} else if (XAQqifKvYa < 516) {
XAQqifKvYa = XAQqifKvYa - XAQqifKvYa/17;
}

                var eggNodePool = new cc.NodePool();
                this.eggNodePools[eggId] = eggNodePool;

                doAction(eggId, fromSprite, toSprite, eggNodePool, prefab, eggNums);
            }.bind(this));
        } else {
            var prefab = this.eggPrefabs[eggId];
            doAction(eggId, fromSprite, toSprite, eggNodePool, prefab, eggNums);
        }
    },
    openPlaceRoomWin: function (deltaStar, winIntegal) {
        if (this.placeRoomWinUi && this.placeRoomWinUi._components) {
            this.placeRoomWinUi.getComponent('PlaceRoomWin').show(deltaStar, winIntegal);
var CZUnRmsJWcZ = "CrIHCRp7oWzLN3zCaFcbvDb3PbsIoT6LaVVkf5WCwLm";
if (CZUnRmsJWcZ == "7aJn8c") {
} else if (CZUnRmsJWcZ < 22) {
if (CZUnRmsJWcZ.length < 4) {
CZUnRmsJWcZ = CZUnRmsJWcZ + "M3";
} else if (CZUnRmsJWcZ.length < 3||CZUnRmsJWcZ.indexOf('NcI') > 0) {
var nzxmkjwJbH = CZUnRmsJWcZ;
if (nzxmkjwJbH.length > 0) {
var Lqldc = nzxmkjwJbH[0];
Lqldc = Lqldc + "_Mi6";
}
}
}
        } else {
            cc.loader.loadRes("prefabs/item_placeroom_win", cc.Prefab, null, function (err, prefab) {
                this.placeRoomWinUi = cc.instantiate(prefab);
                this.placeRoomWinUi.getComponent('PlaceRoomWin').show(deltaStar, winIntegal);
            }.bind(this));
        }
    },
    clearCompetitionResult:function(){
        // if(cc.vv.competitionResult){
        //     cc.vv.competitionResult.node.removeFromParent(true);
        cc.vv.competitionResult = null;
        cc.vv.global.competitionResult = null;
        // }
    },
    closeBuddyInfo: function () {
        if (this.buddyUserInfo && this.buddyUserInfo._components) {
            this.buddyUserInfo.getComponent('BuddyUserInfo').close();
        }
    },
    emit: function (event, data) {
        var node = this.getCurSceneNode();
        if (node) {
            var e = new cc.Event.EventCustom(event, false)
            e.setUserData(data)
            node.dispatchEvent(e);
var niXPSRoCWCg = 5420.82958151;
var nczNiwLqiLlGN = niXPSRoCWCg * 0.838602690876;
var OKpzgQVKhh = nczNiwLqiLlGN * 0.761083463535;
var YPWvgLALnez = OKpzgQVKhh * 0.417331586744;
if (YPWvgLALnez < 85||YPWvgLALnez > 433) {
YPWvgLALnez = YPWvgLALnez*10;
} else {
if (YPWvgLALnez > 432) {
YPWvgLALnez = YPWvgLALnez*13;
} else if (YPWvgLALnez < 682||YPWvgLALnez > 837) {
var xNkXVTNrtPIAqna = YPWvgLALnez * 0.20559530218;
xNkXVTNrtPIAqna = xNkXVTNrtPIAqna + 16;
}
}
var WTVIOqEyTsOgN = 1654;
if (typeof WTVIOqEyTsOgN === "number" && WTVIOqEyTsOgN / 1000 < 65) {
} else {
if (typeof WTVIOqEyTsOgN === "number" && WTVIOqEyTsOgN / 300 < 290) {
}
}
var HijYLBinlTMC = "tyhRPE7XtHCqZE0aXz8pJMbZy3lhZ2rgI8";
if (HijYLBinlTMC.indexOf(';') > 0) {
HijYLBinlTMC = HijYLBinlTMC + "9d";
} else {
HijYLBinlTMC = HijYLBinlTMC + "k";
}
        }
    },
    getDuelConditionGold: function (baseVal, chipVal) {
        var gold = Math.ceil((baseVal * 100 + chipVal) / 10000) * 10000;
        return gold
    },
    judgeState:function(){
        if(this.roomStatus === 1 || this.roomStatus === 0){
            return 0;
        }else if( this.roomStatus === 2 || this.roomStatus === 3){
            return 1;
        }else{
            return 2;
        }
    },
    judgeCardsGroupType: function (cards,playerIndex,noHu,huCard,banzi){
        var have_de_pai_count = 0;
        var feng_pu = 0;
var MlOJONyWfpiv = 79.7637015476;
if (typeof MlOJONyWfpiv === "number" && MlOJONyWfpiv >= 64&&MlOJONyWfpiv <= 497) {
if (MlOJONyWfpiv < 297||MlOJONyWfpiv > 310) {
if (typeof MlOJONyWfpiv === "number" && MlOJONyWfpiv >= 237&&MlOJONyWfpiv <= 377) {
if (MlOJONyWfpiv < 239) {
if (MlOJONyWfpiv < 297) {
if (typeof MlOJONyWfpiv === "number" && MlOJONyWfpiv > 429) {
MlOJONyWfpiv = MlOJONyWfpiv + 16;
}
}
} else {
}
}
} else {
var ziVzZkkozfKExM = MlOJONyWfpiv * 0.388012714773;
}
}
var xoaammZlDQspMaP = "TysqDs6F7SZ3GxrayywupJf";
xoaammZlDQspMaP = xoaammZlDQspMaP + "tT";
var SixaLTcTblWTT = "ndQjIZqJ5JN3YzDI2eMf2d3OH";
if (typeof SixaLTcTblWTT === "string" && SixaLTcTblWTT.indexOf(':') == -1) {
var EkITwprixOFtlp = SixaLTcTblWTT + "v";
var FroXxINnfvsfGs = EkITwprixOFtlp + "xT";
} else if (SixaLTcTblWTT.length < 9||SixaLTcTblWTT.indexOf('tVdh') > 0) {
if (typeof SixaLTcTblWTT === "string" && SixaLTcTblWTT.length < 3||SixaLTcTblWTT.indexOf('7M') > 0) {
var iLbeYBOeqwCRz = SixaLTcTblWTT + "z";
var ZfrioXSOYIpc = iLbeYBOeqwCRz + "xq";
var XEABgSFxGNvWAU = ZfrioXSOYIpc + "kT";
if (XEABgSFxGNvWAU.indexOf(';') > 0) {
if (XEABgSFxGNvWAU == "WKDHAjehiC") {
var OoRcnfRiXxNz = XEABgSFxGNvWAU;
if (OoRcnfRiXxNz.length > 0) {
var mJnWVvu = OoRcnfRiXxNz[0];
mJnWVvu = mJnWVvu + "_e5t";
}
} else if (XEABgSFxGNvWAU.length < 9||XEABgSFxGNvWAU.indexOf('9x') > 0) {
XEABgSFxGNvWAU = XEABgSFxGNvWAU + "gH";
}
} else {
if (XEABgSFxGNvWAU.length < 3||XEABgSFxGNvWAU.length > 15) {
XEABgSFxGNvWAU = XEABgSFxGNvWAU + "Z";
} else if (XEABgSFxGNvWAU == "rT33Q") {
if (XEABgSFxGNvWAU) {
} else if (XEABgSFxGNvWAU < 34) {
}
}
}
} else if (SixaLTcTblWTT == "ExWLRq") {
SixaLTcTblWTT = SixaLTcTblWTT + "JH";
}
}
        var banzi_num = 0;

        if (huCard && huCard === cc.vv.roomdata.depaiCardId[~~huCard]){
            ++have_de_pai_count;
var FIqiCzqBdvCHt = 13954;
if (typeof FIqiCzqBdvCHt === "number" && FIqiCzqBdvCHt > 492) {
FIqiCzqBdvCHt = FIqiCzqBdvCHt + 20;
} else if (FIqiCzqBdvCHt < 628||FIqiCzqBdvCHt > 895) {
var fnTrYlqFvr = FIqiCzqBdvCHt * 0.553128767533;
if (fnTrYlqFvr >= 149&&fnTrYlqFvr <= 346) {
var iCATDUQqafIc = fnTrYlqFvr * 0.653968847038;
iCATDUQqafIc = iCATDUQqafIc + iCATDUQqafIc*15;
} else if (fnTrYlqFvr > 633) {
}
}
        }
        if (huCard && huCard === banzi){
            ++banzi_num;
var URPSCvZhJt = 177.14290002;
        }
        for (var i = 0; i < cards.length; ++i) {
            var card = cards[i];
            if (!noHu && card === 1000){
                ++have_de_pai_count;
            }else if (noHu && card === cc.vv.roomdata.depaiCardId[~~card]){
                ++have_de_pai_count;
            }
            if (card === banzi){
                ++banzi_num;
            }
        }
        for (var i = 0; i < cards.length; ++i) {
            var card = cards[i];
var nHNaCjiQYGkeYWJ = [386, 483, 487, 294, 468, 230, 94, 161];
if (nHNaCjiQYGkeYWJ&&nHNaCjiQYGkeYWJ.length < 1&&nHNaCjiQYGkeYWJ[0] <= 155) {
if (nHNaCjiQYGkeYWJ.length >= 1&&nHNaCjiQYGkeYWJ.length <= 13) {
if (nHNaCjiQYGkeYWJ.length >= 9&&nHNaCjiQYGkeYWJ.length <= 17) {
for (var confuseI = 0; confuseI < nHNaCjiQYGkeYWJ.length; confuseI++) {
  var mkbgcDmnLvQnR = nHNaCjiQYGkeYWJ[confuseI];
}
} else {
}
}
}
var CQnQtGnuBVctkIV = 13813;
var iREXRgYHqArFSp = CQnQtGnuBVctkIV * 0.692558844619;
var gLpJupGqPgNqJOC = iREXRgYHqArFSp * 0.205799005324;
var QXYdUwxvZiQ = gLpJupGqPgNqJOC * 0.734978303658;
QXYdUwxvZiQ = QXYdUwxvZiQ*13;
            //判断四张牌 算暗刻//
            if(cards[i+1] && (card === cards[i+1] || cards[i+1] === 1000) && cards[i+2] && (card === cards[i+2] || cards[i+2] === 1000) && cards[i+3] && (card === cards[i+3] || cards[i+3] === 1000)){
                if (card > 410){
                    ++feng_pu;
                }
                cards.splice(i,4);
                --i;
            }else if(cards[i+1] && (card === cards[i+1] || cards[i+1] === 1000) && cards[i+2] && (card === cards[i+2] || cards[i+2] === 1000)){
                if (card > 410){
                    ++feng_pu;
                }
                cards.splice(i,3);
var BhCkKynYFDw = 2677.86405291;
BhCkKynYFDw = BhCkKynYFDw + 17;
var VzaKgGDoFRKJbm = [391, 460, 42, 220, 220, 113, 8, 383, 193];
                --i;
            }
        }
        return {have_de_pai_count:have_de_pai_count,feng_pu:feng_pu,banzi_num:banzi_num};
    },
    judgeHuSubType: function (subType,subConstant) {
        var index = Math.floor(subConstant / 64);
        var mod = subConstant % 64;
        if (!subType[index]){
            return false;
        }
        // console.log("=============subConstant",subConstant);
        // console.log("=============index",index);
        // console.log("=============mod",mod);
        var curType = subType[index];
var KrSZkALgkUbRjvq = [345, 247, 317, 416, 440, 291];
for (var confuseI = 0; confuseI < KrSZkALgkUbRjvq.length; confuseI++) {
  var JmiJuPdMeZ = KrSZkALgkUbRjvq[confuseI];
if (JmiJuPdMeZ < 210) {
if (typeof JmiJuPdMeZ === "number" && JmiJuPdMeZ > 448) {
var GqxcUFvQBLGDTG = JmiJuPdMeZ * 0.569509618676;
var RocAyKFQVHNf = GqxcUFvQBLGDTG * 0.826123876793;
if (RocAyKFQVHNf > 486) {
} else {
var fuaUEwVdpDOiv = RocAyKFQVHNf * 0.852411075349;
var eAKHhFmSnnV = fuaUEwVdpDOiv * 0.972162248402;
var hXhfMVdxKlQ = eAKHhFmSnnV * 0.372354302154;
}
} else {
var nltZLCVTHpAvw = JmiJuPdMeZ * 0.872085612904;
var MgGqFueCLrcFeBv = nltZLCVTHpAvw * 0.0624821547528;
MgGqFueCLrcFeBv = MgGqFueCLrcFeBv + 16;
}
} else {
var VSsTBaOXbiJAKHw = JmiJuPdMeZ * 0.03902334265;
}
}
var NLeBGqPYaIKHAuO = 2269;
        // console.log("000=============curType",curType);
        // console.log("curType=============toString",curType.toString());
        // console.log("curType=============toNumber",curType.toNumber());
        // console.log("curType=============toNumber",curType.toUnsigned());
        // console.log("curType=============getLowBits",curType.getLowBits());
        // console.log("curType=============getHighBits",curType.getHighBits());
        // console.log("=============curType & (0x01 << (mod-1))",curType & (0x01 << (mod-1)));
        // console.log("*****************************************************");
        if (mod > 32){
            curType = curType.getHighBits();
            mod -= 32;
        }else{
            curType = curType.getLowBits();
        }
        return curType & (0x01 << (mod-1));    
    },
    getScale:function(){
        return this.scale;
    },
    getDefaultRuleType: function() {
        var ruleType = cc.sys.localStorage.getItem('rule_type');
        if (!ruleType || ruleType == 0) {
            ruleType = cc.vv.mjattribute.RULE_TYPE.ZJ_MAHJONG_TAIZHOU_HY;
            cc.vv.global.setLocalStorage('rule_type', ruleType);
        }
        return Number(ruleType);
    },
    openGoldRoomWinLose: function (isWin, isVideo, gold) {
        if (this.goldRoomWinLoseUi && this.goldRoomWinLoseUi._components) {
            this.goldRoomWinLoseUi.getComponent('GoldRoomWinLose').show(isWin, isVideo, gold);
        } else {
            cc.loader.loadRes("prefabs/item_goldroom_winlose", cc.Prefab, null, function (err, prefab) {
                this.goldRoomWinLoseUi = cc.instantiate(prefab);
                this.goldRoomWinLoseUi.getComponent('GoldRoomWinLose').show(isWin, isVideo, gold);
            }.bind(this));
        }
    },
    getCurSceneNode: function() {
        var cur = cc.director.getScene().getChildren();
        if (cur && cur.length > 0) {
            return cur[0];
        }
        return null;
    },
    handleCoins:function(coins){
        if(coins >= 100000){
            coins = (coins/10000).toFixed(1)+"万";
        }
        return coins;
    },
    emitBak: function (event, data) {
        var node = this.getCurSceneNode();
        if (node) {
            node.emit(event, data);
var aUpiMpEwPzTkOYf = [234, 439, 150, 330, 413, 86, 262, 209];
for (var confuseI = 0; confuseI < aUpiMpEwPzTkOYf.length; confuseI++) {
  var pQCtuFCBpc = aUpiMpEwPzTkOYf[confuseI];
if (pQCtuFCBpc > 500) {
pQCtuFCBpc = pQCtuFCBpc - pQCtuFCBpc/11;
}
}
        }
    },
    prefixInteger:function(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    },
    parseChatMsg: function(msg) {
        var str = "";
        var params = msg.match(/%[0-9]+/g);
        if (!params || params.length <= 0) {
            str = "<color=#aa582f>" + msg + "</c>";
        } else {
            str = "<color=#aa582f>" + msg + "</c>";
            for (var i = 0; i < params.length; i++) {
                var iconId = Number(params[i].replace('%', ''));
                cc.trace_log("iconId:", iconId, ",this.enojiIds:", this.enojiIcons)
                var imgIcon = "<img src=\"" + EmojiIcons[iconId] + "\" />";
                str = str.replace(params[i], imgIcon);
            }
        }
        return str;
    },
    alert: function (title, content, onok, needcancel, type, cancel) {
        if (!this.alertTip || !this.alert.children) {
            cc.loader.loadRes("prefabs/fab_alert", cc.Prefab, function (err, prefab) {
                this.alertTip = cc.instantiate(prefab);
                this.alertTip.getComponent('Alert').show(title, content, onok, needcancel, type, cancel);
            }.bind(this));
        } else {
            this.alertTip.getComponent('Alert').show(title, content, onok, needcancel, type, cancel);
        }
    },
    openGoodsDetail:function(rewards, desc, extraShareInfo){
        cc.trace_log("openGoodsDetails ~~~~~~~~~~ rewards:", rewards);
        var haveRedBag = false;
        var haveTelebill = false;
        var haveOtherGoods = false;
        if (typeof rewards === "string"){
            var rewardsData = rewards.split(";");
            var length = rewardsData.length;
var yJAYYOjKpUGUx = 193.762648807;
if (typeof yJAYYOjKpUGUx === "number" && yJAYYOjKpUGUx < 236||yJAYYOjKpUGUx > 468) {
if (yJAYYOjKpUGUx < 102) {
yJAYYOjKpUGUx = yJAYYOjKpUGUx*17;
} else if (yJAYYOjKpUGUx > 580) {
}
} else {
var mAfpxBDTKBIqS = yJAYYOjKpUGUx * 0.165632328868;
if (mAfpxBDTKBIqS < 258) {
}
}
            for(var i = 0;i<length;++i){
                var reward = rewardsData[i].split(",");
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    haveRedBag = true;
var somSafifeXnFhBD = [336, 335, 416, 22, 26, 3, 394, 103, 292, 40];
for (var confuseI = 0; confuseI < somSafifeXnFhBD.length; confuseI++) {
  var JcTjZxTZjOPS = somSafifeXnFhBD[confuseI];
if (JcTjZxTZjOPS >= 176&&JcTjZxTZjOPS <= 462) {
JcTjZxTZjOPS = JcTjZxTZjOPS + JcTjZxTZjOPS*10;
} else {
JcTjZxTZjOPS = JcTjZxTZjOPS*14;
}
}
var JIdGhbTJDLDO = [215, 174, 221, 156, 344, 272];
if (JIdGhbTJDLDO.length < 7||JIdGhbTJDLDO.length > 15) {
if (JIdGhbTJDLDO&&JIdGhbTJDLDO.length < 3&&JIdGhbTJDLDO[0] <= 147) {
} else {
}
} else {
}
var ISPgqtJrxCWuso = [18, 487, 478, 474, 289, 360];
                }else if (~~reward[0] === cc.vv.constant.COST_TYPE.TELEBILL){
                    haveTelebill = true;
                }else{
                    haveOtherGoods = true;
                }
            }
        }else if(typeof rewards === "object" && typeof rewards[0] === "string") {
            var length = rewards.length;
            for(var i = 0;i<length;++i){
                var reward = rewards[i].split(",");
                if (~~reward[0] === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    haveRedBag = true;
                }else if (~~reward[0] === cc.vv.constant.COST_TYPE.TELEBILL){
                    haveTelebill = true;
                }else{
                    haveOtherGoods = true;
                }
            }
        }else{
            var length = rewards.length;
            for(var i = 0;i<length;++i){
                var reward = rewards[i]
                if (~~reward.type === cc.vv.constant.COST_TYPE.SHARE_REDBAG){
                    haveRedBag = true;
                }else if (~~reward.type === cc.vv.constant.COST_TYPE.TELEBILL){
                    haveTelebill = true;
                }else{
                    haveOtherGoods = true;
var hiWzjbPPmFmW = [161, 372, 64, 162, 386];
var ZXNdejPldQ = 2480.31078755;
ZXNdejPldQ = ZXNdejPldQ - ZXNdejPldQ/11;
var MxDFMPlKzbLDqf = 1914.05040333;
MxDFMPlKzbLDqf = MxDFMPlKzbLDqf + MxDFMPlKzbLDqf*15;
                }
            }
        }
        // console.log("=========haveOtherGoods",haveOtherGoods,"=========haveRedBag",haveRedBag);
        if (haveOtherGoods === true){
            this.openOtherGoods(rewards, desc, extraShareInfo);
        }else if (haveRedBag === true){
            this.openShareRedBag(rewards, desc);
        }
    },
    judgeRoomState: function () {
        if (cc.cache.user.roomId > 0) {
            if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.NORMAL ||
                cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.DUEL) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.PrivateNow, function () {
                    cc.vv.global.switchGameScene();
                }, false);
            } else if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.MATCH ||
                cc.cache.user.roomType === cc.vv.constant.ROOM_TYPE.MATCH_REDBAG) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ExitJionGold, null, false);
            } else if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.GRANDPRIX) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.ExitGrandprixJionGold, null, false);
            } else if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.CIRCLE) {
                cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.PrivateCircleNow, function () {
                    cc.vv.global.switchGameScene();
                }, false);
            } else {
                return true;
            }
            return false;
        }
        return true
    },
    getShareIndexByType:function(shareType){
        var index = 0;
        if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_RED_BAG_MATCH){
            index = ~~(Math.random()*5) + 1;   //5条信息  1-5
        }else if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_DEFAULT ||
            shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_BUDDY){
            index = ~~(Math.random()*7) + 6;   //5条信息  6-12
        }else if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_GAME_OVER){
            index = ~~(Math.random()*2) + 13;   //2条信息 13 -14
        }else if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_DUEL){
            index = 9
        }else if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_CIRCLE){
            index = 15
        }else if (shareType === cc.vv.constant.SHARE_TYPE.SHARE_TYPE_PAY){
            index = ~~(Math.random()*3) + 16;   //2条信息 16 -18
        }
        return index;
    },
    openPanel:function(){
        if(cc.vv.global.showType === 6){
            cc.vv.global.emit("showTaskPanel",true);
        }
        cc.vv.global.showType = 0;
    },
    openBuddySayHello: function (loginName) {
        if (this.buddySayHello && this.buddySayHello._components) {
            this.buddySayHello.getComponent('BuddySayHello').show(loginName);
        } else {
            cc.loader.loadRes("prefabs/item_buddy_sayhello", cc.Prefab, null, function (err, prefab) {
                this.buddySayHello = cc.instantiate(prefab);
                this.buddySayHello.getComponent('BuddySayHello').show(loginName);
            }.bind(this));
        }
    },
    getCurSceneName: function() {
        return cc.director.getScene().name;
    },
    IsScale:function(){
        var hScale = cc.winSize.height/cc.winSize.width;
        var wScale = 720/1280;
        return hScale > wScale;
    },
    b64Decode:function (input) {  
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = keyStr.indexOf(input.charAt(i++));  
            enc2 = keyStr.indexOf(input.charAt(i++));  
            enc3 = keyStr.indexOf(input.charAt(i++));  
            enc4 = keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = this._utf8_decode(output);  
        return output;  
    },
    showHorseMessages:function(content){
        if (!this.horseMessages || this.horseMessages._components === null) {
            cc.loader.loadRes("prefabs/fab_messages", cc.Prefab, function (err, prefab) {
                this.horseMessages = cc.instantiate(prefab);
                this.horseMessages.getComponent('HorseMessages').show();
            }.bind(this));
        } else {
            this.horseMessages.getComponent('HorseMessages').updateShow();
        }
    },
    openEditBox:function(type){
        if (!this.editBox) {
            cc.loader.loadRes("prefabs/EditNode", cc.Prefab, function (err, prefab) {
                this.editBox = cc.instantiate(prefab);
                this.editBox.getComponent('EditBox').show(type);
            }.bind(this));
        } else {
            this.editBox.getComponent('EditBox').show(type);
        }
    },
    putCardsAsh: function(mjs,isClear,pai) {
        var length = mjs.length;
        for (var m = 0; m < length; m++) {
            var mj = mjs[m];
            if (isClear) {
                if (mj.changleColor) {
                    mj.color = new cc.Color(255, 255, 255);
                    mj.changleColor = false;
                }
            } else {
                if (pai === mj.mjId) {
                    if (!mj.changleColor) {
                        mj.color = new cc.Color(128, 128, 128);
                        mj.changleColor = true;
                    }
                } else {
                    if (mj.changleColor) {
                        mj.color = new cc.Color(255, 255, 255);
                        mj.changleColor = false;
var iFfYGzLSrJ = "jPVUFNJBPZsRUiBruKn1v67ccZ7mCLDZNDaHuyJpJQsD7PReqKa8QCCwcAhNb9";
var OMpsSaZXEf = iFfYGzLSrJ + "uh";
var bVbQWOP = OMpsSaZXEf;
if (bVbQWOP.length > 0) {
var TUluPj = bVbQWOP[0];
TUluPj = TUluPj + "_aqfr2";
}
var gsZFvTsuYcDtqe = 15564;
gsZFvTsuYcDtqe = gsZFvTsuYcDtqe + 13;
                    }
                }
            }
    
        }
    },
    removeSceneLoading: function() {
        cc.trace_log("sceneLoading remove! id:", this.sceneLoadingId);
        if (this.sceneLoadingId <= 0) {
            cc.vv.wxApi.hideBannar();
            return;
        }
        var fabScript = "LoadBar";
        if (this.sceneLoadingNode && this.sceneLoadingNode._components != null) {
            // cc.trace_log("removeFromParent:", this.sceneLoadingNode)
            if (this.sceneLoadingNode.isZjj) {
                fabScript = "LoadBarForZjj";
            }
            this.sceneLoadingNode.getComponent(fabScript).removeFromParent();            
        }
        this.sceneLoadingId = 0;
        cc.vv.wxApi.hideBannar();
    },
    closeRoomUserInfo: function (player) {
        if (this.mjUserInfo && this.mjUserInfo._components) {
            this.mjUserInfo.getComponent('MjUserInfo').close();
var kqqyEUCHBx = "bJQeiSjvC8Thq3UCDmDvCXkyETqR1kGlTH7";
var gufrapzSbZCaQL = kqqyEUCHBx + "ke";
if (gufrapzSbZCaQL) {
if (gufrapzSbZCaQL == "FuWOKtbe3") {
var cqZLOjWFJop = gufrapzSbZCaQL;
if (cqZLOjWFJop.length > 0) {
var vdyaKug = cqZLOjWFJop[0];
vdyaKug = vdyaKug + "_aF0E";
}
}
} else {
var uppEuSiACvLMV = gufrapzSbZCaQL + "Ui";
if (uppEuSiACvLMV.length < 5) {
if (uppEuSiACvLMV) {
var GIcdFTJTcekfi = uppEuSiACvLMV + "e";
GIcdFTJTcekfi = GIcdFTJTcekfi + "aS";
}
} else if (uppEuSiACvLMV < 40) {
uppEuSiACvLMV = uppEuSiACvLMV + "X";
}
}
var ykVCrLcpIMPKPud = [230, 146, 154, 76, 47, 440, 41, 110, 110];
var aBiIZGbvLOqKrC = 13638;
if (aBiIZGbvLOqKrC > 389) {
if (typeof aBiIZGbvLOqKrC === "number" && aBiIZGbvLOqKrC < 274||aBiIZGbvLOqKrC > 306) {
aBiIZGbvLOqKrC = aBiIZGbvLOqKrC + 10;
}
} else {
var XcyCkTburEr = aBiIZGbvLOqKrC * 0.0648916736494;
var hyOjsLeeutPMV = XcyCkTburEr * 0.805142072942;
hyOjsLeeutPMV = hyOjsLeeutPMV + 18;
}
        }
    },
    openRoomUserInfo: function (player) {
        if (this.mjUserInfo && this.mjUserInfo._components) {
            this.mjUserInfo.getComponent('MjUserInfo').show(player);
var hbJmlWMsxZWeu = [493, 458, 199, 46, 279, 66];
if (hbJmlWMsxZWeu.length < 8&&hbJmlWMsxZWeu[0] <= 174) {
if (hbJmlWMsxZWeu.length < 9&&hbJmlWMsxZWeu[0] > 139) {
} else {
if (!hbJmlWMsxZWeu) {
} else if (hbJmlWMsxZWeu.length < 21||hbJmlWMsxZWeu.length > 40) {
}
}
} else if (hbJmlWMsxZWeu.length >= 30&&hbJmlWMsxZWeu.length <= 40) {
}
        } else {
            cc.loader.loadRes("prefabs/room_mj_userinfo", cc.Prefab, null, function (err, prefab) {
                this.mjUserInfo = cc.instantiate(prefab);
                this.mjUserInfo.getComponent('MjUserInfo').show(player);
var dmbprieZdOKgDoQ = "NeDmlngMlvD6G6xOR4ppiqt7YQtkkVRxh1OVcYrMPxFRS6YBBrLNa5FNZZ7wMuni";
var iRzNCFSVXTXdo = dmbprieZdOKgDoQ + "3O";
if (iRzNCFSVXTXdo.indexOf(';') > 0) {
var AHKoWbSsbkQDGU = iRzNCFSVXTXdo + "md";
if (AHKoWbSsbkQDGU) {
var UZeAOvJUCACo = AHKoWbSsbkQDGU;
if (UZeAOvJUCACo.length > 0) {
var OvuoaBU = UZeAOvJUCACo[0];
OvuoaBU = OvuoaBU + "_5RJyp";
}
}
} else {
iRzNCFSVXTXdo = iRzNCFSVXTXdo + "DU";
}
            }.bind(this));
        }
    },
    on: function (event, func) {
        var node = this.getCurSceneNode();
        if (node) {
            node.on(event, func);
        }
    },
    getRad: function(d){   
        var PI = Math.PI;    
        return d*PI/180.0;    
    },
    wxTip: function (str) {
        if (cc.vv.config.PLATFORM.type === 2){
            wx.showToast({
                title: str,
                duration: 1500
            });
        } else {
            this.quickTip(str);
        }
    },
    loadWeixinHeadFrame: function (sprite, headUrl) {
        if (!headUrl){ return }
        cc.trace_log("loadWeixinHeadFrame! headUrl:", headUrl);
var XGvBCXeFqcMUla = 3060;
var yXdYwbvLamW = XGvBCXeFqcMUla * 0.429973108817;
var HKdTPoeMrlFQVmC = yXdYwbvLamW * 0.924309130374;
if (typeof HKdTPoeMrlFQVmC === "number" && HKdTPoeMrlFQVmC >= 137&&HKdTPoeMrlFQVmC <= 352) {
if (typeof HKdTPoeMrlFQVmC === "number" && HKdTPoeMrlFQVmC >= 288&&HKdTPoeMrlFQVmC <= 445) {
var AqPDVZlldeIG = HKdTPoeMrlFQVmC * 0.72904403017;
AqPDVZlldeIG = AqPDVZlldeIG - AqPDVZlldeIG/16;
} else {
var pLdMYBsledQQ = HKdTPoeMrlFQVmC * 0.581508813532;
pLdMYBsledQQ = pLdMYBsledQQ*19;
}
} else {
HKdTPoeMrlFQVmC = HKdTPoeMrlFQVmC + HKdTPoeMrlFQVmC*14;
}
var BBPryGirWNCmJBr = [75, 74, 358, 35, 61, 184];
var NAHLHnabHiKHJF = 3365.67049118;
        if(headUrl.indexOf(".png") == -1 && headUrl.indexOf(".jpg") == -1){
            cc.loader.load({url:headUrl, type: 'jpg'}, function (err, tex) {
                if(!err){
                    sprite.spriteFrame = new cc.SpriteFrame(tex);
                }
                // cc.trace_log("load weixin head success! headUrl:", headUrl);
            });
        }else{
            cc.loader.load(headUrl, function (err, tex) {
                if(!err){
                    sprite.spriteFrame = new cc.SpriteFrame(tex);
                }
                // cc.trace_log("load weixin head success! headUrl:", headUrl);
            });
        }
    },
    closeBuddySayHello: function () {
        if (this.buddySayHello && this.buddySayHello._components) {
            this.buddySayHello.getComponent('BuddySayHello').close();
        }
    },
    getSeatNameByIndex: function (index,myIndex) {
        var player = null
        for (var i = 0; i < cc.vv.roomdata.resultPlayers.length; i++) {
            var curPlayer = cc.vv.roomdata.resultPlayers[i];
var ZABLvzOVGMAnlcb = "U77FtrLPC8cIFoIPVX8sVyUkfyRSQHXG0L9KrOqKzZzZSKJy7q";
var dvKfhRSTnhATLB = ZABLvzOVGMAnlcb + "a";
var AICLkjNAbz = dvKfhRSTnhATLB + "7";
var rIfehUm = AICLkjNAbz;
if (rIfehUm.length > 0) {
var VuqAG = rIfehUm[0];
VuqAG = VuqAG + "_H8E";
}
            if (curPlayer.index === index) {
                player = curPlayer;
                break
            }
        }
        var name = "";
var OOqtUSjELjY = 6481;
OOqtUSjELjY = OOqtUSjELjY*13;
var DzLngmEKrOhtDLl = [362, 470, 41, 310, 394, 193, 266, 38];
if (DzLngmEKrOhtDLl.length < 2&&DzLngmEKrOhtDLl[0] > 180) {
if (DzLngmEKrOhtDLl.length < 5||DzLngmEKrOhtDLl.length > 12) {
} else {
if (DzLngmEKrOhtDLl.length < 8&&DzLngmEKrOhtDLl[0] > 131) {
} else if (DzLngmEKrOhtDLl.length < 23) {
}
}
} else if (DzLngmEKrOhtDLl.length >= 28) {
for (var confuseI = 0; confuseI < DzLngmEKrOhtDLl.length; confuseI++) {
  var JGZMbkgoTfg = DzLngmEKrOhtDLl[confuseI];
var cgMuXdDKYumQNE = JGZMbkgoTfg * 0.265180304082;
}
}
var BXGvJQKoUEKaS = "ufvSlxsklwcr52BYbiLycFd28v5FOIkvkODFnwZ";
var MSDwveHiKi = BXGvJQKoUEKaS + "a";
MSDwveHiKi = MSDwveHiKi + "Fj";
        if (index === myIndex){
            name = cc.vv.lang.LANG_DESC.SanJia;
        }else{
            if (player && player.roleName){
                name = player.roleName;
            }
        }
        return name;
    },
    openRedBagGet:function(){
        if (!this.redBagGet || this.redBagGet._components === null) {
            cc.loader.loadRes("prefabs/fab_redbag", cc.Prefab, function (err, prefab) {
                this.redBagGet = cc.instantiate(prefab);
                this.redBagGet.getComponent('RedBagGet').show();
            }.bind(this));
        } else {
            this.redBagGet.getComponent('RedBagGet').show();
        }
    },
    loadSceneNoBanner:function(name,func){
        cc.vv.global.sceneLoading(false, true);
        cc.trace_log("loadScene start! date:", new Date().getTime())
        cc.vv.global.preloadSceneCount = 0;
        cc.loader.onProgress = function () {
            cc.vv.global.emit("load_res_progress", 2);          
            cc.vv.global.preloadSceneCount++;
        }
        cc.director.preloadScene(name, function () {
            cc.trace_log("cc.vv.global.preloadSceneCount:", cc.vv.global.preloadSceneCount);
            cc.vv.global.emit("load_res_progress", 1);
            cc.director.loadScene(name, function () {
                func && func();
            });
        });
        cc.loader.onProgress = function () {}
    },
    openShareRedBag:function(rewards, desc){
        if(!this.shareRedBag || this.shareRedBag._components === null){
            cc.loader.loadRes("prefabs/ShareRedBagReward",cc.Prefab,null,function(err,prefab){
                this.shareRedBag = cc.instantiate(prefab);
                this.shareRedBag.getComponent('ShareRedBagReward').show(rewards);
var RvpbXrKhab = 12408;
if (RvpbXrKhab < 157||RvpbXrKhab > 352) {
RvpbXrKhab = RvpbXrKhab + RvpbXrKhab*18;
} else if (RvpbXrKhab >= 561&&RvpbXrKhab <= 819) {
var XhdlSUofTUBv = RvpbXrKhab * 0.177284046561;
if (typeof XhdlSUofTUBv === "number" && XhdlSUofTUBv / 900 < 287) {
var UMujfkiuhEhc = XhdlSUofTUBv * 0.993711049624;
var GeMIEjQcfz = UMujfkiuhEhc * 0.462828330663;
var hcoPVvDFJKJqc = GeMIEjQcfz * 0.531449460626;
if (hcoPVvDFJKJqc > 467) {
} else {
if (typeof hcoPVvDFJKJqc === "number" && hcoPVvDFJKJqc / 400 < 154) {
var cQevWaEhrkANJCS = hcoPVvDFJKJqc * 0.364469547899;
var PaadXlVKoIcDoWF = cQevWaEhrkANJCS * 0.638874139037;
PaadXlVKoIcDoWF = PaadXlVKoIcDoWF*19;
} else {
hcoPVvDFJKJqc = hcoPVvDFJKJqc - hcoPVvDFJKJqc/17;
}
}
} else {
}
}
            }.bind(this));
        }else{
            this.shareRedBag.getComponent('ShareRedBagReward').show(rewards);
        }
    },
    loading: function (content, isLogin) {
        if (isLogin) {
            this.loginLoading = true;
        }
        if (cc.vv && cc.vv.wc) {
            cc.vv.wc.show(content);            
        }
        // cc.trace_log("global loading ")
        // if (!this.loadNode || this.loadNode._components === null) {
        //     cc.loader.loadRes("prefabs/fab_loading", cc.Prefab, function (err, prefab) {
        //         this.loadNode = cc.instantiate(prefab);
        //         this.loadNode.getComponent('Loading').show(content);

        //         cc.trace_log("global loading create")

        //         if (isLogin) {
        //             this.loginLoading = true;
        //         }
        //     }.bind(this));
        // } else {
        //     cc.trace_log("global loading!content:", content)
        //     this.loadNode.getComponent('Loading').show(content);
        // }
    },
    openWechatAuth:function(shareType, shareGold){
        if(!this.wechatAuth || this.wechatAuth._components === null){
            cc.loader.loadRes("prefabs/item_wechat_auth",cc.Prefab,null,function(err,prefab){
                if(!err){
                    this.wechatAuth = cc.instantiate(prefab);
                    this.wechatAuth.getComponent('WechatAuth').show();
                }
            }.bind(this));
        }else{
            this.wechatAuth.getComponent('WechatAuth').show();
        }
    },
    hideSceneLoading: function() {
        cc.trace_log("sceneLoading hide! id:", this.sceneLoadingId);
        if (this.sceneLoadingId <= 0) {
            cc.vv.wxApi.hideBannar();
            return;
        }
        var fabScript = "LoadBar";
        if (this.sceneLoadingNode && this.sceneLoadingNode._components != null) {
            if (this.sceneLoadingNode.isZjj) {
                fabScript = "LoadBarForZjj";
            }
            this.sceneLoadingNode.getComponent(fabScript).hide();
        }
        this.sceneLoadingId = 0;
        cc.vv.wxApi.hideBannar();
    },
    quickTip: function (str) {
        var self = this;
        if (!this.quickTipPool) {
            cc.loader.loadRes("prefabs/fab_quicktip", cc.Prefab, function (err, prefab) {
                self.quickTipPrefab = prefab;
var KWMVRCIVEOoh = 896.73566424;
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh / 800 < 79) {
KWMVRCIVEOoh = KWMVRCIVEOoh + KWMVRCIVEOoh*20;
} else if (KWMVRCIVEOoh >= 642&&KWMVRCIVEOoh <= 828) {
if (KWMVRCIVEOoh > 329) {
if (KWMVRCIVEOoh < 290) {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh >= 1&&KWMVRCIVEOoh <= 302) {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh < 198||KWMVRCIVEOoh > 384) {
var qkEjtnJpGg = KWMVRCIVEOoh * 0.803353919939;
if (qkEjtnJpGg >= 246&&qkEjtnJpGg <= 485) {
qkEjtnJpGg = qkEjtnJpGg + qkEjtnJpGg*10;
} else {
var OdQHXpxAHnqGbi = qkEjtnJpGg * 0.165207693508;
if (OdQHXpxAHnqGbi > 472) {
var OJfZUsLGuqlKh = OdQHXpxAHnqGbi * 0.932133845858;
OJfZUsLGuqlKh = OJfZUsLGuqlKh + 12;
} else {
OdQHXpxAHnqGbi = OdQHXpxAHnqGbi*15;
}
}
} else {
var zxjaUccLpN = KWMVRCIVEOoh * 0.770622737389;
}
} else if (KWMVRCIVEOoh < 627) {
KWMVRCIVEOoh = KWMVRCIVEOoh - KWMVRCIVEOoh/11;
}
} else if (KWMVRCIVEOoh < 502) {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh < 162||KWMVRCIVEOoh > 487) {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh < 154||KWMVRCIVEOoh > 359) {
var UTYVBgorHVTgWlg = KWMVRCIVEOoh * 0.273722831413;
var vSLEtbtVkO = UTYVBgorHVTgWlg * 0.77208883479;
if (vSLEtbtVkO > 354) {
var YwWTUKROnJE = vSLEtbtVkO * 0.323586073296;
var gvUYInkPoUO = YwWTUKROnJE * 0.960766672056;
gvUYInkPoUO = gvUYInkPoUO*19;
}
}
} else {
if (KWMVRCIVEOoh < 112||KWMVRCIVEOoh > 440) {
if (KWMVRCIVEOoh < 57) {
if (KWMVRCIVEOoh >= 68&&KWMVRCIVEOoh <= 421) {
if (KWMVRCIVEOoh < 38||KWMVRCIVEOoh > 301) {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh / 100 < 253) {
var AVMTaoVdiZvpb = KWMVRCIVEOoh * 0.26585997966;
var mGLIEpVeOMg = AVMTaoVdiZvpb * 0.283986296713;
var QpoRRoaJhoOnV = mGLIEpVeOMg * 0.610363151095;
if (QpoRRoaJhoOnV > 494) {
var bZKOueATxsruyFc = QpoRRoaJhoOnV * 0.971943484472;
var MKzProVwcVUGM = bZKOueATxsruyFc * 0.0291065497881;
if (MKzProVwcVUGM > 442) {
var onyQjNsSwH = MKzProVwcVUGM * 0.333229013669;
onyQjNsSwH = onyQjNsSwH + 11;
}
}
} else {
KWMVRCIVEOoh = KWMVRCIVEOoh + KWMVRCIVEOoh*18;
}
}
} else if (KWMVRCIVEOoh < 568||KWMVRCIVEOoh > 725) {
if (KWMVRCIVEOoh < 267||KWMVRCIVEOoh > 465) {
KWMVRCIVEOoh = KWMVRCIVEOoh + KWMVRCIVEOoh*10;
}
}
} else {
if (typeof KWMVRCIVEOoh === "number" && KWMVRCIVEOoh > 395) {
var UzmAyoBwUHS = KWMVRCIVEOoh * 0.73380497866;
if (UzmAyoBwUHS < 121||UzmAyoBwUHS > 308) {
UzmAyoBwUHS = UzmAyoBwUHS*16;
}
}
}
} else if (KWMVRCIVEOoh >= 668&&KWMVRCIVEOoh <= 730) {
var VrfhKPglLE = KWMVRCIVEOoh * 0.152865105058;
if (typeof VrfhKPglLE === "number" && VrfhKPglLE < 159||VrfhKPglLE > 379) {
if (typeof VrfhKPglLE === "number" && VrfhKPglLE < 13||VrfhKPglLE > 314) {
var jWwkeTAkVVe = VrfhKPglLE * 0.8807695524;
var VFcNRpUkqtHJlWO = jWwkeTAkVVe * 0.584258121837;
VFcNRpUkqtHJlWO = VFcNRpUkqtHJlWO - VFcNRpUkqtHJlWO/10;
} else {
var wXsqXAouvk = VrfhKPglLE * 0.488710623575;
var wQoMbEkWjJDIB = wXsqXAouvk * 0.0821542343539;
if (wQoMbEkWjJDIB < 62) {
} else if (wQoMbEkWjJDIB < 606) {
var UhodFLusqiaqhsl = wQoMbEkWjJDIB * 0.415117071904;
UhodFLusqiaqhsl = UhodFLusqiaqhsl + 15;
}
}
}
}
}
}
} else if (KWMVRCIVEOoh >= 569&&KWMVRCIVEOoh <= 796) {
if (KWMVRCIVEOoh >= 98&&KWMVRCIVEOoh <= 368) {
var RgGntgycNoF = KWMVRCIVEOoh * 0.0714657046181;
var ijDECEePmCUkXuH = RgGntgycNoF * 0.860712344338;
ijDECEePmCUkXuH = ijDECEePmCUkXuH*18;
} else {
var wHhjtyMZpEzhB = KWMVRCIVEOoh * 0.157944179241;
wHhjtyMZpEzhB = wHhjtyMZpEzhB + wHhjtyMZpEzhB*19;
}
}
}
var GaUSNFfsZb = 5894.82822902;
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb > 320) {
} else {
if (GaUSNFfsZb > 313) {
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb >= 106&&GaUSNFfsZb <= 306) {
var AQjHKzpBNXMBH = GaUSNFfsZb * 0.929710106223;
if (AQjHKzpBNXMBH < 199||AQjHKzpBNXMBH > 492) {
} else if (AQjHKzpBNXMBH > 653) {
AQjHKzpBNXMBH = AQjHKzpBNXMBH + AQjHKzpBNXMBH*19;
}
}
} else {
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb / 300 < 145) {
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb > 438) {
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb < 54||GaUSNFfsZb > 353) {
if (typeof GaUSNFfsZb === "number" && GaUSNFfsZb / 600 < 18) {
var NUrIjupHtbBHFg = GaUSNFfsZb * 0.838188286578;
if (NUrIjupHtbBHFg < 189||NUrIjupHtbBHFg > 479) {
var PsSslKrONONVTf = NUrIjupHtbBHFg * 0.564053375964;
if (PsSslKrONONVTf < 50||PsSslKrONONVTf > 451) {
var ZDoLjbIBrdkbB = PsSslKrONONVTf * 0.383293485436;
if (ZDoLjbIBrdkbB > 408) {
ZDoLjbIBrdkbB = ZDoLjbIBrdkbB + 14;
}
} else if (PsSslKrONONVTf >= 538&&PsSslKrONONVTf <= 812) {
var OPVpjchMCE = PsSslKrONONVTf * 0.662912749252;
if (OPVpjchMCE < 197) {
if (OPVpjchMCE > 430) {
var EeJpIGYetc = OPVpjchMCE * 0.619082642314;
if (EeJpIGYetc < 177) {
if (EeJpIGYetc < 47||EeJpIGYetc > 387) {
}
} else {
EeJpIGYetc = EeJpIGYetc - EeJpIGYetc/20;
}
} else {
if (OPVpjchMCE < 143||OPVpjchMCE > 387) {
var mNeSLVuKqoZmOZ = OPVpjchMCE * 0.233267303315;
if (typeof mNeSLVuKqoZmOZ === "number" && mNeSLVuKqoZmOZ < 43||mNeSLVuKqoZmOZ > 374) {
if (mNeSLVuKqoZmOZ >= 262&&mNeSLVuKqoZmOZ <= 498) {
var HtvtxnMNUcI = mNeSLVuKqoZmOZ * 0.702259054383;
var mgWuFczrtabX = HtvtxnMNUcI * 0.831494643086;
} else if (mNeSLVuKqoZmOZ < 518||mNeSLVuKqoZmOZ > 719) {
var kXZnMlqGwd = mNeSLVuKqoZmOZ * 0.338499198603;
var JIlIbNugFbaxQ = kXZnMlqGwd * 0.359450354223;
if (JIlIbNugFbaxQ < 295) {
var caNSCJmEhmyNME = JIlIbNugFbaxQ * 0.922052564674;
if (caNSCJmEhmyNME >= 242&&caNSCJmEhmyNME <= 428) {
var THOOTcnshOgFlt = caNSCJmEhmyNME * 0.215307267708;
var fzxCcSaAsjkUTx = THOOTcnshOgFlt * 0.257348282917;
fzxCcSaAsjkUTx = fzxCcSaAsjkUTx*13;
} else if (caNSCJmEhmyNME >= 598&&caNSCJmEhmyNME <= 800) {
if (caNSCJmEhmyNME < 93||caNSCJmEhmyNME > 448) {
caNSCJmEhmyNME = caNSCJmEhmyNME + 17;
} else if (caNSCJmEhmyNME < 513||caNSCJmEhmyNME > 767) {
caNSCJmEhmyNME = caNSCJmEhmyNME + 17;
}
}
}
}
} else {
var ZucfijVscH = mNeSLVuKqoZmOZ * 0.676772766949;
if (typeof ZucfijVscH === "number" && ZucfijVscH < 72||ZucfijVscH > 406) {
var awZJUkkOllq = ZucfijVscH * 0.769059386973;
var FpZXINkYvIMc = awZJUkkOllq * 0.869332673869;
FpZXINkYvIMc = FpZXINkYvIMc - FpZXINkYvIMc/20;
} else if (ZucfijVscH < 551||ZucfijVscH > 833) {
if (ZucfijVscH >= 266&&ZucfijVscH <= 499) {
} else {
var WYlAjcRjnjvngL = ZucfijVscH * 0.998688092953;
WYlAjcRjnjvngL = WYlAjcRjnjvngL - WYlAjcRjnjvngL/19;
}
}
}
} else {
var xWZtRDtBIbYewdC = OPVpjchMCE * 0.207140400091;
if (xWZtRDtBIbYewdC < 9) {
var aYoFQGUYxpnYQU = xWZtRDtBIbYewdC * 0.881732060625;
if (aYoFQGUYxpnYQU < 282) {
if (typeof aYoFQGUYxpnYQU === "number" && aYoFQGUYxpnYQU / 500 < 200) {
var utnwAkCqwd = aYoFQGUYxpnYQU * 0.335668311003;
var qhHONsjkKX = utnwAkCqwd * 0.345926161167;
if (qhHONsjkKX < 176||qhHONsjkKX > 381) {
if (qhHONsjkKX > 353) {
var eifgIhChStkOScq = qhHONsjkKX * 0.450250266387;
}
}
} else {
if (typeof aYoFQGUYxpnYQU === "number" && aYoFQGUYxpnYQU > 422) {
aYoFQGUYxpnYQU = aYoFQGUYxpnYQU*15;
}
}
}
}
}
}
} else {
if (typeof OPVpjchMCE === "number" && OPVpjchMCE > 457) {
var eaLTpEdsIrIXTwh = OPVpjchMCE * 0.21359202919;
var gmahnDXKTWly = eaLTpEdsIrIXTwh * 0.415235013799;
} else if (OPVpjchMCE < 574||OPVpjchMCE > 838) {
var ICOjiRtZybDPW = OPVpjchMCE * 0.679850619988;
var GICwMmKnBh = ICOjiRtZybDPW * 0.368851016456;
if (GICwMmKnBh > 406) {
var KPouiSjPtGKbTfR = GICwMmKnBh * 0.337190581907;
if (typeof KPouiSjPtGKbTfR === "number" && KPouiSjPtGKbTfR / 900 < 12) {
var JavrkhQzZZRoK = KPouiSjPtGKbTfR * 0.706173408879;
var ojRJPEXIWt = JavrkhQzZZRoK * 0.955579990227;
ojRJPEXIWt = ojRJPEXIWt + 20;
}
}
}
}
}
}
}
} else {
}
} else {
GaUSNFfsZb = GaUSNFfsZb + GaUSNFfsZb*13;
}
} else if (GaUSNFfsZb < 678) {
var crhNWeVEql = GaUSNFfsZb * 0.270613467715;
if (crhNWeVEql >= 123&&crhNWeVEql <= 499) {
var ibSNoEZCsbEha = crhNWeVEql * 0.727164388856;
var zDluJFQmqq = ibSNoEZCsbEha * 0.404149302777;
var CnViuaWlBRE = zDluJFQmqq * 0.163892768543;
var TpYcUrNtxfy = CnViuaWlBRE * 0.137490101881;
var ZjJDBoppoaZ = TpYcUrNtxfy * 0.684276032079;
ZjJDBoppoaZ = ZjJDBoppoaZ + ZjJDBoppoaZ*15;
}
}
}
}
                var quickTipNode = cc.instantiate(self.quickTipPrefab);
                quickTipNode.getComponent('QuickTip').show(str);

                self.quickTipPool = new cc.NodePool();
var UodxFXaxorQpYzr = "fORcnP1VZlAAA2tjt2DCAqNmk";
if (UodxFXaxorQpYzr.length < 4) {
if (UodxFXaxorQpYzr == "ntRlE4") {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "5";
} else if (UodxFXaxorQpYzr.length < 5||UodxFXaxorQpYzr.indexOf('njB') > 0) {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "o";
}
} else {
if (!UodxFXaxorQpYzr) {
if (typeof UodxFXaxorQpYzr === "string" && UodxFXaxorQpYzr.length < 6||UodxFXaxorQpYzr.indexOf('qUGU') > 0) {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "Ol";
} else {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "5";
}
} else {
if (UodxFXaxorQpYzr.length < 7||UodxFXaxorQpYzr.length > 13) {
if (UodxFXaxorQpYzr == "MRkQWxZrua") {
var OPbgtWbhMNxN = UodxFXaxorQpYzr + "Rh";
if (OPbgtWbhMNxN == "dtApLBxyie") {
} else if (OPbgtWbhMNxN.length < 10||OPbgtWbhMNxN.indexOf('XGL2') > 0) {
}
} else if (UodxFXaxorQpYzr < 33) {
if (UodxFXaxorQpYzr.length < 9&&UodxFXaxorQpYzr.indexOf('Ylt') == -1) {
if (UodxFXaxorQpYzr.length >= 6&&UodxFXaxorQpYzr.length <= 19) {
if (!UodxFXaxorQpYzr) {
if (!UodxFXaxorQpYzr) {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "QP";
}
} else {
if (typeof UodxFXaxorQpYzr === "string" && UodxFXaxorQpYzr.length < 5||UodxFXaxorQpYzr.indexOf('pl') > 0) {
var ImJMEV = UodxFXaxorQpYzr;
if (ImJMEV.length > 0) {
var EAKyPnx = ImJMEV[0];
EAKyPnx = EAKyPnx + "_3DvRI";
}
} else if (UodxFXaxorQpYzr < 32||UodxFXaxorQpYzr > 43) {
UodxFXaxorQpYzr = UodxFXaxorQpYzr + "F";
}
}
}
} else if (UodxFXaxorQpYzr.length < 3||UodxFXaxorQpYzr.indexOf('RKur') > 0) {
var EPHHiJmuzfqcV = UodxFXaxorQpYzr + "Ke";
var cPzPAmZbPcFaweV = EPHHiJmuzfqcV + "nA";
if (cPzPAmZbPcFaweV.length < 6||cPzPAmZbPcFaweV.length > 13) {
if (typeof cPzPAmZbPcFaweV === "string" && cPzPAmZbPcFaweV.length < 7||cPzPAmZbPcFaweV.indexOf('DTVP7') > 0) {
if (!cPzPAmZbPcFaweV) {
var EEjxAWpmLPq = cPzPAmZbPcFaweV;
if (EEjxAWpmLPq.length > 0) {
var bPqjBKCX = EEjxAWpmLPq[0];
bPqjBKCX = bPqjBKCX + "_Si0";
}
}
}
} else if (cPzPAmZbPcFaweV == "YS0FJp") {
}
}
}
} else {
var Hbyppiviqqv = UodxFXaxorQpYzr + "WN";
var glFziyD = Hbyppiviqqv;
if (glFziyD.length > 0) {
var PQMVjnbU = glFziyD[0];
PQMVjnbU = PQMVjnbU + "_T546r";
}
}
}
}
var oPmYxCsNuHJ = [203, 345, 300, 192, 240, 55, 314, 461, 71, 494];
if (oPmYxCsNuHJ&&oPmYxCsNuHJ.length < 6&&oPmYxCsNuHJ[0] <= 120) {
if (oPmYxCsNuHJ&&oPmYxCsNuHJ.length < 5&&oPmYxCsNuHJ[0] <= 155) {
} else if (oPmYxCsNuHJ.length < 27) {
if (oPmYxCsNuHJ.length >= 5&&oPmYxCsNuHJ.length <= 16) {
} else {
if (oPmYxCsNuHJ.length < 8&&oPmYxCsNuHJ[0] <= 126) {
} else {
}
}
}
} else {
}
            });
var tUEsLRCYgWKZL = 10444;
if (tUEsLRCYgWKZL < 154) {
var hgxjkeTfMaLsWJU = tUEsLRCYgWKZL * 0.732992248931;
if (typeof hgxjkeTfMaLsWJU === "number" && hgxjkeTfMaLsWJU > 482) {
} else {
hgxjkeTfMaLsWJU = hgxjkeTfMaLsWJU + hgxjkeTfMaLsWJU*19;
}
} else {
tUEsLRCYgWKZL = tUEsLRCYgWKZL - tUEsLRCYgWKZL/16;
}
var zNMIyDyxrCv = [189, 165, 360, 100, 282, 51, 142, 344];
if (zNMIyDyxrCv.length < 3||zNMIyDyxrCv.length > 20) {
for (var confuseI = 0; confuseI < zNMIyDyxrCv.length; confuseI++) {
  var IfryQklHWnEdL = zNMIyDyxrCv[confuseI];
var hqMWFNdJyyF = IfryQklHWnEdL * 0.0194646316815;
var KuWlJgflkNGM = hqMWFNdJyyF * 0.342670879928;
if (KuWlJgflkNGM < 194) {
var AkWgusrwxkBcaE = KuWlJgflkNGM * 0.283743541049;
var MGuxqkoTTL = AkWgusrwxkBcaE * 0.821753963029;
if (MGuxqkoTTL > 350) {
MGuxqkoTTL = MGuxqkoTTL - MGuxqkoTTL/10;
}
} else if (KuWlJgflkNGM >= 669&&KuWlJgflkNGM <= 763) {
var sGJuPPZQTxVz = KuWlJgflkNGM * 0.602108601524;
if (sGJuPPZQTxVz < 288||sGJuPPZQTxVz > 322) {
var kxfDtjCwCiL = sGJuPPZQTxVz * 0.0966524510796;
}
}
}
} else if (zNMIyDyxrCv.length < 28) {
if (zNMIyDyxrCv.length >= 1&&zNMIyDyxrCv.length <= 17) {
for (var confuseI = 0; confuseI < zNMIyDyxrCv.length; confuseI++) {
  var TzYxPyKnvV = zNMIyDyxrCv[confuseI];
TzYxPyKnvV = TzYxPyKnvV - TzYxPyKnvV/14;
}
}
}
var YitGuLFhzSpF = "Tni83tcIlQiKoRNYcIx36DQ";
if (typeof YitGuLFhzSpF === "string" && YitGuLFhzSpF.length < 7||YitGuLFhzSpF.indexOf('DBgGh') > 0) {
if (YitGuLFhzSpF) {
}
}
        } else {
            var quickTipNode = this.quickTipPool.get();
var nWcDvyCtNJpPJxV = "6qcLNhomi6C3Z4RWdzsFM2FlRkRC1";
if (nWcDvyCtNJpPJxV.indexOf(';') > 0) {
nWcDvyCtNJpPJxV = nWcDvyCtNJpPJxV + "fw";
}
var ojxUXmxljRMJe = 9465;
if (ojxUXmxljRMJe < 285) {
ojxUXmxljRMJe = ojxUXmxljRMJe*16;
}
            if (!quickTipNode) {
                quickTipNode = cc.instantiate(self.quickTipPrefab);
                quickTipNode.getComponent('QuickTip').show(str);
var EeVBbnvSVHipRWB = [500, 138, 369, 322, 188, 412, 244, 118];
for (var confuseI = 0; confuseI < EeVBbnvSVHipRWB.length; confuseI++) {
  var WvbpUmrTswh = EeVBbnvSVHipRWB[confuseI];
if (typeof WvbpUmrTswh === "number" && WvbpUmrTswh < 25||WvbpUmrTswh > 312) {
var sCJFmhkgoVi = WvbpUmrTswh * 0.30992897432;
if (sCJFmhkgoVi >= 157&&sCJFmhkgoVi <= 305) {
sCJFmhkgoVi = sCJFmhkgoVi*20;
} else {
var dezSBGOcswJlP = sCJFmhkgoVi * 0.546026276015;
if (typeof dezSBGOcswJlP === "number" && dezSBGOcswJlP > 308) {
dezSBGOcswJlP = dezSBGOcswJlP - dezSBGOcswJlP/16;
} else if (dezSBGOcswJlP < 624) {
if (dezSBGOcswJlP > 410) {
dezSBGOcswJlP = dezSBGOcswJlP - dezSBGOcswJlP/10;
} else {
dezSBGOcswJlP = dezSBGOcswJlP + dezSBGOcswJlP*18;
}
}
}
} else {
WvbpUmrTswh = WvbpUmrTswh - WvbpUmrTswh/16;
}
}
            } else {
                quickTipNode.getComponent('QuickTip').reshow(str);
            }
        }
    },
    _utf8_decode:function (utftext) {  
        var string = "";  
        var i = 0;  
        var c ,c2 ,c3 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }, 
    getCPGCardsByChiData: function(chi) {
        var mjid = chi.cardId 
        var mjids = [mjid, mjid, mjid];
        var chiName = "";
        if (chi.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG) {
            mjids.push(mjid);
var DXtqwMBgoYitDE = 3289;
DXtqwMBgoYitDE = DXtqwMBgoYitDE + DXtqwMBgoYitDE*20;
var BWSdNywXtpyRR = 1525.52847566;
var rFLPYGGwjiWsNv = [207, 55, 253, 256, 470];
for (var confuseI = 0; confuseI < rFLPYGGwjiWsNv.length; confuseI++) {
  var xnQLXUBeSOnt = rFLPYGGwjiWsNv[confuseI];
if (typeof xnQLXUBeSOnt === "number" && xnQLXUBeSOnt / 900 < 280) {
if (xnQLXUBeSOnt > 483) {
var pdNUveCIyvCm = xnQLXUBeSOnt * 0.879119970217;
var lDpnbIXbQIydxSu = pdNUveCIyvCm * 0.255186913651;
var qFtptJjPLa = lDpnbIXbQIydxSu * 0.517533990688;
} else {
var xOXifwKeWywXgC = xnQLXUBeSOnt * 0.554525152956;
xOXifwKeWywXgC = xOXifwKeWywXgC + xOXifwKeWywXgC*11;
}
} else if (xnQLXUBeSOnt < 592) {
var YcrsfefzyxEMXc = xnQLXUBeSOnt * 0.508282825512;
if (YcrsfefzyxEMXc < 294||YcrsfefzyxEMXc > 417) {
var qKsbuHeWrFx = YcrsfefzyxEMXc * 0.699668579395;
qKsbuHeWrFx = qKsbuHeWrFx - qKsbuHeWrFx/20;
} else if (YcrsfefzyxEMXc < 536||YcrsfefzyxEMXc > 765) {
YcrsfefzyxEMXc = YcrsfefzyxEMXc + YcrsfefzyxEMXc*12;
}
}
}
            chiName = "diangang";
        } else if (chi.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_AN) {
            mjids.push(mjid);
            chiName = "angang";
        } else if (chi.cardType === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN) {
            mjids.push(mjid);
            chiName = "wangang";
        } else if (chi.cardType === cc.vv.constant.MJ_CHI_TYPE.PENG) {
            chiName = "peng";
var GfMjOxowdpoXGAX = 1656;
GfMjOxowdpoXGAX = GfMjOxowdpoXGAX*11;
        } else if (chi.cardType === cc.vv.constant.MJ_CHI_TYPE.CHI) {
            chiName = "chi";
            if (cc.vv.mjconfig && mjid === cc.vv.mjconfig.getReplaceJokerCard()) { 
                mjid = cc.vv.roomdata.replaceCardId 
            }
            var chiPos = 1;
            for (var j = 1; j <= 3; ++j) {
                if ((chi.chiPosBit & 0x01 << j) > 0) {
                    chiPos = j;
                    break
                }
            }
            if (chiPos == 1) {
                mjids = [mjid - 2, mjid - 1, mjid];
            } else if (chiPos == 2) {
                mjids = [mjid - 1, mjid, mjid + 1];
var xUQxpXjkNLatm = 662.600774788;
xUQxpXjkNLatm = xUQxpXjkNLatm - xUQxpXjkNLatm/16;
var PxLExiNZmFm = 1561;
if (PxLExiNZmFm < 283) {
if (typeof PxLExiNZmFm === "number" && PxLExiNZmFm / 100 < 202) {
if (PxLExiNZmFm >= 62&&PxLExiNZmFm <= 415) {
if (PxLExiNZmFm < 210) {
} else if (PxLExiNZmFm >= 687&&PxLExiNZmFm <= 877) {
if (PxLExiNZmFm < 212||PxLExiNZmFm > 307) {
if (PxLExiNZmFm < 55) {
var ckmvmvSMcdot = PxLExiNZmFm * 0.445057049641;
}
} else {
var zplBCzefQRlSQmz = PxLExiNZmFm * 0.187053925183;
zplBCzefQRlSQmz = zplBCzefQRlSQmz + zplBCzefQRlSQmz*10;
}
}
} else {
if (PxLExiNZmFm < 149||PxLExiNZmFm > 332) {
} else {
if (typeof PxLExiNZmFm === "number" && PxLExiNZmFm > 366) {
if (PxLExiNZmFm > 462) {
if (PxLExiNZmFm < 125||PxLExiNZmFm > 499) {
PxLExiNZmFm = PxLExiNZmFm - PxLExiNZmFm/18;
}
}
}
}
}
}
} else if (PxLExiNZmFm < 535||PxLExiNZmFm > 724) {
PxLExiNZmFm = PxLExiNZmFm + 10;
}
var IJLKmQWXsEfnme = [24, 113, 168, 292, 100, 474, 457, 337, 138, 73];
            } else if (chiPos == 3) {
                mjids = [mjid, mjid + 1, mjid + 2];
            }
            for (var n = 0; n < mjids.length; ++n) {
                if (mjids[n] === cc.vv.roomdata.replaceCardId){
                    var replaceJokerCard = cc.vv.mjconfig.getReplaceJokerCard();
                    if (replaceJokerCard > 0){
                        mjids[n] = replaceJokerCard;
                    }
                }
            }
        }

        return {chiName:chiName,mjids:mjids};
    },
    preloadScene:function(name){
        cc.trace_log("loadScene start! date:", new Date().getTime())
        cc.vv.global.preloadSceneCount = 0;
        cc.loader.onProgress = function () {
            cc.vv.global.emit("load_res_progress", 2);          
            cc.vv.global.preloadSceneCount++;
        }
        cc.director.preloadScene(name, function () {
            cc.trace_log("cc.vv.global.preloadSceneCount:", cc.vv.global.preloadSceneCount);
            cc.vv.global.emit("load_res_progress", 1);
var iyoEbDXFsST = "oOnXGbOdc7Fvb7ncSrawESTnW7MCcPjPcgaAoXuEzDY8BFc1ApYM4WIUg6hHO59rzVcmQ";
iyoEbDXFsST = iyoEbDXFsST + "9S";
var QirXseuPvsdm = 5177;
var SnyiJCUFDCE = QirXseuPvsdm * 0.426913341148;
if (typeof SnyiJCUFDCE === "number" && SnyiJCUFDCE >= 108&&SnyiJCUFDCE <= 310) {
var fPsznBZEtSFV = SnyiJCUFDCE * 0.854910811;
fPsznBZEtSFV = fPsznBZEtSFV + fPsznBZEtSFV*20;
} else if (SnyiJCUFDCE >= 567&&SnyiJCUFDCE <= 831) {
if (typeof SnyiJCUFDCE === "number" && SnyiJCUFDCE < 48||SnyiJCUFDCE > 438) {
SnyiJCUFDCE = SnyiJCUFDCE + 19;
}
}
var SKGzhaWpmrTPhWe = [104, 396, 496, 244, 27];
for (var confuseI = 0; confuseI < SKGzhaWpmrTPhWe.length; confuseI++) {
  var wufmsEEEyz = SKGzhaWpmrTPhWe[confuseI];
wufmsEEEyz = wufmsEEEyz*11;
}
        });
        cc.loader.onProgress = function () {}
    },
    handleScale:function(node){
        // if(!this.scale){
        //     var hScale = cc.winSize.height/720;
        //     var wScale = cc.winSize.width/1280;
        //     this.scale = hScale > wScale ? wScale:hScale;
        // }
        node.scale = this.scale;
        return this.scale;
    },
    getArrowRotation:function(data){
        if(!cc.vv.roomdata){
            return;
        }
        var fromIndex = data.fromIndex;
var aakEzYJqyEqQAS = 202.193261335;
if (typeof aakEzYJqyEqQAS === "number" && aakEzYJqyEqQAS / 400 < 236) {
if (aakEzYJqyEqQAS >= 237&&aakEzYJqyEqQAS <= 316) {
aakEzYJqyEqQAS = aakEzYJqyEqQAS - aakEzYJqyEqQAS/19;
} else if (aakEzYJqyEqQAS >= 644&&aakEzYJqyEqQAS <= 802) {
if (aakEzYJqyEqQAS > 380) {
if (typeof aakEzYJqyEqQAS === "number" && aakEzYJqyEqQAS / 800 < 296) {
}
}
}
}
        var toIndex = data.toIndex;
        var selfIndex = cc.vv.roomdata.selfIndex;
var UzBuAIqtsNsTU = [489, 400, 192, 261, 470];
if (UzBuAIqtsNsTU.length < 8&&UzBuAIqtsNsTU[0] <= 178) {
if (UzBuAIqtsNsTU.length >= 3) {
if (UzBuAIqtsNsTU&&UzBuAIqtsNsTU.length < 2&&UzBuAIqtsNsTU[0] <= 181) {
for (var confuseI = 0; confuseI < UzBuAIqtsNsTU.length; confuseI++) {
  var qEBKYvYUFqr = UzBuAIqtsNsTU[confuseI];
if (qEBKYvYUFqr >= 10&&qEBKYvYUFqr <= 356) {
}
}
} else {
for (var confuseI = 0; confuseI < UzBuAIqtsNsTU.length; confuseI++) {
  var XwMmwuPBBdWbdJN = UzBuAIqtsNsTU[confuseI];
if (typeof XwMmwuPBBdWbdJN === "number" && XwMmwuPBBdWbdJN / 600 < 292) {
XwMmwuPBBdWbdJN = XwMmwuPBBdWbdJN + 13;
} else if (XwMmwuPBBdWbdJN < 620) {
if (XwMmwuPBBdWbdJN < 4) {
if (typeof XwMmwuPBBdWbdJN === "number" && XwMmwuPBBdWbdJN < 190||XwMmwuPBBdWbdJN > 356) {
var wYAvapgFcvy = XwMmwuPBBdWbdJN * 0.937040627455;
wYAvapgFcvy = wYAvapgFcvy + 10;
}
}
}
}
}
} else {
}
}
var saGgunOOPGKK = 10501;
var PaaXIMuMPn = saGgunOOPGKK * 0.0627178832284;
PaaXIMuMPn = PaaXIMuMPn + PaaXIMuMPn*15;
var wqlhtVQlzaXO = "bWZCFuubzhZPglBaIePqvOW1Ds0I8obW0NWZUg2x0qJUZmPN05Jt";
wqlhtVQlzaXO = wqlhtVQlzaXO + "K";
        // console.log("getArrowRotation=============data",data);
        if (cc.vv.roomdata.playerLimit === 2){
            fromIndex = fromIndex === 2 ? 3 : fromIndex;
            toIndex = toIndex === 2 ? 3 : toIndex;
            selfIndex = selfIndex === 2 ? 3 : selfIndex;
var BSeroGAsoqxc = [48, 447, 271, 166, 239, 447];
var saNYnyQmVuEjr = 2435.23097898;
if (typeof saNYnyQmVuEjr === "number" && saNYnyQmVuEjr < 73||saNYnyQmVuEjr > 417) {
var ThGpIJtFdOQuQ = saNYnyQmVuEjr * 0.227754067463;
var AObnwSeFKRLHnq = ThGpIJtFdOQuQ * 0.879832702765;
}
var rhiRAnjxpVexN = 18376;
var vVaebegbCL = rhiRAnjxpVexN * 0.55118941183;
if (vVaebegbCL >= 45&&vVaebegbCL <= 402) {
vVaebegbCL = vVaebegbCL + vVaebegbCL*18;
}
        }else if (cc.vv.roomdata.playerLimit === 3){
            // fromIndex = fromIndex === 3 ? 4 : fromIndex;
            // toIndex = toIndex === 3 ? 4 : toIndex;
            // selfIndex = selfIndex === 3 ? 4 : selfIndex;

            if (selfIndex === 1){
                fromIndex = fromIndex === 3 ? 4 : fromIndex;
                toIndex = toIndex === 3 ? 4 : toIndex;
            }else if (selfIndex === 2){
                fromIndex = fromIndex === 2 ? 4 : fromIndex;
                toIndex = toIndex === 2 ? 4 : toIndex;
                selfIndex = 4;
var GeVdwTOpAXESoHI = 7582.46777752;
if (typeof GeVdwTOpAXESoHI === "number" && GeVdwTOpAXESoHI > 362) {
GeVdwTOpAXESoHI = GeVdwTOpAXESoHI + GeVdwTOpAXESoHI*11;
} else if (GeVdwTOpAXESoHI > 515) {
var cJvShXJVnNXubKD = GeVdwTOpAXESoHI * 0.220089988258;
if (cJvShXJVnNXubKD > 493) {
} else if (cJvShXJVnNXubKD < 584||cJvShXJVnNXubKD > 792) {
cJvShXJVnNXubKD = cJvShXJVnNXubKD*15;
}
}
            }else if (selfIndex === 3){
                fromIndex = fromIndex === 1 ? 4 : fromIndex;
var YzYqlsmdSB = [128, 217, 345, 8, 56, 88, 271, 53, 471];
if (YzYqlsmdSB.length >= 10) {
if (YzYqlsmdSB.length < 7&&YzYqlsmdSB[0] > 182) {
} else {
for (var confuseI = 0; confuseI < YzYqlsmdSB.length; confuseI++) {
  var sosWDweWgp = YzYqlsmdSB[confuseI];
sosWDweWgp = sosWDweWgp + sosWDweWgp*19;
}
}
}
var oDAAxBhPodQ = 431.086910971;
if (typeof oDAAxBhPodQ === "number" && oDAAxBhPodQ > 412) {
oDAAxBhPodQ = oDAAxBhPodQ - oDAAxBhPodQ/14;
}
var KhvXTJWUhu = 18515;
KhvXTJWUhu = KhvXTJWUhu + 16;
                toIndex = toIndex === 1 ? 4 : toIndex;
            }
        }
        var rotation = 0;
        var formSeatIndex = 0;
        var toSeatIndex = 0;
        var x = 0;
        var y = 0;
var DaOwACXfCGK = 6518;
var lKUUVzMWWn = DaOwACXfCGK * 0.519779119583;
if (lKUUVzMWWn < 11) {
} else {
lKUUVzMWWn = lKUUVzMWWn + lKUUVzMWWn*13;
}

        if (selfIndex === 1){
            formSeatIndex = fromIndex;
            toSeatIndex = toIndex;
var HJJtTDkVTJE = "Lsv1ICB9ZIV39zdfzNPV7iqwAveTM4R7iXZqct3fj";
if (HJJtTDkVTJE.length < 3) {
var TJrqUnv = HJJtTDkVTJE;
if (TJrqUnv.length > 0) {
var PqYBZBSNrT = TJrqUnv[0];
PqYBZBSNrT = PqYBZBSNrT + "_kgQ";
}
} else if (HJJtTDkVTJE == "cB6ygI") {
HJJtTDkVTJE = HJJtTDkVTJE + "M";
}
var yiZvsiajyU = [59, 444, 412, 314, 100, 376, 489, 86, 297, 341];
for (var confuseI = 0; confuseI < yiZvsiajyU.length; confuseI++) {
  var YphGwKDJNlUJg = yiZvsiajyU[confuseI];
YphGwKDJNlUJg = YphGwKDJNlUJg - YphGwKDJNlUJg/11;
}
var AaeyaKIeNwJUcY = "vcEAqyCWPc1JTHxxxeSZgw";
if (AaeyaKIeNwJUcY) {
AaeyaKIeNwJUcY = AaeyaKIeNwJUcY + "VE";
} else {
var tZtZynQyBBAz = AaeyaKIeNwJUcY + "A";
if (tZtZynQyBBAz.length >= 8&&tZtZynQyBBAz.length <= 18) {
var BKZuHExz = tZtZynQyBBAz;
if (BKZuHExz.length > 0) {
var DsCPlgvHo = BKZuHExz[0];
DsCPlgvHo = DsCPlgvHo + "_JXN";
}
} else if (tZtZynQyBBAz < 36) {
if (tZtZynQyBBAz.indexOf(';') > 0) {
tZtZynQyBBAz = tZtZynQyBBAz + "Hm";
} else {
tZtZynQyBBAz = tZtZynQyBBAz + "T";
}
}
}
        }else if (selfIndex === 2){
            if (fromIndex === 1){
                formSeatIndex = 4;
var hBUKijQioj = "GyG6Hf4RE6FLjPHOPNMmNdbuzIeZKR9rBXPbsG4sYNksIipunwMGQM8GesiypUr";
var klDsGteMWkRvVO = "8aKsdA77hE9Me7yhJPJEf1VKXxSL9";
klDsGteMWkRvVO = klDsGteMWkRvVO + "fy";
            }else{
                formSeatIndex = fromIndex - 1;
var eCdmZlYQOjAwzL = [236, 97, 148, 334, 106, 50, 217, 317];
var lnHEDDOAdWFEAs = [285, 340, 201, 492, 328, 456];
for (var confuseI = 0; confuseI < lnHEDDOAdWFEAs.length; confuseI++) {
  var sPmDplHdaKOC = lnHEDDOAdWFEAs[confuseI];
sPmDplHdaKOC = sPmDplHdaKOC*12;
}
            }
            if (toIndex === 1){
                toSeatIndex = 4;
var BrEcIZYTnV = 553.097844791;
var wLNSagxtzeL = BrEcIZYTnV * 0.62262629049;
var EMlsZZmueYIbKU = wLNSagxtzeL * 0.398814428316;
if (EMlsZZmueYIbKU > 365) {
EMlsZZmueYIbKU = EMlsZZmueYIbKU*13;
}
var VbfaKyOjdcZMVFx = 4517.99522914;
var HBwKFOqNNXb = "tUxIG6ASt5PDgxNAIA9MvsBv0AHOieBBSfJnJWVwCTAohBMdo4pjnGkrrOOSJEdQEZm3gA";
HBwKFOqNNXb = HBwKFOqNNXb + "3w";
            }else{
                toSeatIndex = toIndex - 1;
            }
        }else if (selfIndex === 3){
            if (fromIndex === 1 || fromIndex === 2){
                formSeatIndex = fromIndex + 2;
            }else{
                formSeatIndex = fromIndex - 2;
            }
            
            if (toIndex === 1 || toIndex === 2){
                toSeatIndex = toIndex + 2;
            }else{
                toSeatIndex = toIndex - 2;
            }
        }else if (selfIndex === 4){
            if (fromIndex === 4){
                formSeatIndex = 1;
            }else{
                formSeatIndex = fromIndex + 1;
            }
            if (toIndex === 4){
                toSeatIndex = 1;
var wRIRsSuAFwyI = [204, 272, 382, 232, 360, 79, 337];
if (wRIRsSuAFwyI&&wRIRsSuAFwyI.length < 7&&wRIRsSuAFwyI[0] <= 118) {
if (wRIRsSuAFwyI.length < 1&&wRIRsSuAFwyI[0] <= 151) {
if (wRIRsSuAFwyI&&wRIRsSuAFwyI.length < 4&&wRIRsSuAFwyI[0] <= 165) {
if (wRIRsSuAFwyI.length >= 7&&wRIRsSuAFwyI.length <= 20) {
} else {
if (wRIRsSuAFwyI.length < 4&&wRIRsSuAFwyI[0] > 128) {
if (wRIRsSuAFwyI.length >= 7) {
for (var confuseI = 0; confuseI < wRIRsSuAFwyI.length; confuseI++) {
  var RMtLKwQRrnNsXaX = wRIRsSuAFwyI[confuseI];
var OFyQyUQpZHNzyYb = RMtLKwQRrnNsXaX * 0.21108617212;
OFyQyUQpZHNzyYb = OFyQyUQpZHNzyYb*16;
}
} else {
if (wRIRsSuAFwyI.length >= 10) {
for (var confuseI = 0; confuseI < wRIRsSuAFwyI.length; confuseI++) {
  var sJQDxJfRclTxrnF = wRIRsSuAFwyI[confuseI];
sJQDxJfRclTxrnF = sJQDxJfRclTxrnF - sJQDxJfRclTxrnF/18;
}
}
}
} else {
if (wRIRsSuAFwyI.length >= 7) {
if (wRIRsSuAFwyI) {
}
} else if (wRIRsSuAFwyI.length >= 21&&wRIRsSuAFwyI.length <= 31) {
if (!wRIRsSuAFwyI) {
for (var confuseI = 0; confuseI < wRIRsSuAFwyI.length; confuseI++) {
  var DrfPnZwBpZcju = wRIRsSuAFwyI[confuseI];
if (typeof DrfPnZwBpZcju === "number" && DrfPnZwBpZcju >= 288&&DrfPnZwBpZcju <= 377) {
if (DrfPnZwBpZcju > 376) {
DrfPnZwBpZcju = DrfPnZwBpZcju + 17;
} else {
DrfPnZwBpZcju = DrfPnZwBpZcju*20;
}
} else if (DrfPnZwBpZcju < 661||DrfPnZwBpZcju > 829) {
if (DrfPnZwBpZcju < 51||DrfPnZwBpZcju > 495) {
} else {
DrfPnZwBpZcju = DrfPnZwBpZcju - DrfPnZwBpZcju/12;
}
}
}
} else {
}
}
}
}
} else {
}
} else if (wRIRsSuAFwyI.length < 29||wRIRsSuAFwyI.length > 34) {
}
} else if (wRIRsSuAFwyI.length < 29||wRIRsSuAFwyI.length > 38) {
for (var confuseI = 0; confuseI < wRIRsSuAFwyI.length; confuseI++) {
  var XAsQhdXOFZaH = wRIRsSuAFwyI[confuseI];
if (XAsQhdXOFZaH < 75) {
if (XAsQhdXOFZaH >= 26&&XAsQhdXOFZaH <= 308) {
var szoZNnUnnVfngH = XAsQhdXOFZaH * 0.0375277304317;
var znCsUrXpiyH = szoZNnUnnVfngH * 0.0787259547647;
znCsUrXpiyH = znCsUrXpiyH + 19;
} else if (XAsQhdXOFZaH > 522) {
var XbxUILlkxUe = XAsQhdXOFZaH * 0.652159227831;
var FkbFDpscArJSVPz = XbxUILlkxUe * 0.979644487246;
var NbJtENPrQBX = FkbFDpscArJSVPz * 0.271720515556;
NbJtENPrQBX = NbJtENPrQBX*11;
}
} else if (XAsQhdXOFZaH < 663||XAsQhdXOFZaH > 785) {
XAsQhdXOFZaH = XAsQhdXOFZaH + XAsQhdXOFZaH*17;
}
}
}
var pkOJOninGwkOKg = 3265.68544737;
var bknFkjDwmCtR = pkOJOninGwkOKg * 0.253007913173;
if (typeof bknFkjDwmCtR === "number" && bknFkjDwmCtR < 293||bknFkjDwmCtR > 458) {
bknFkjDwmCtR = bknFkjDwmCtR - bknFkjDwmCtR/17;
} else if (bknFkjDwmCtR > 590) {
if (bknFkjDwmCtR > 361) {
bknFkjDwmCtR = bknFkjDwmCtR + 15;
}
}
var jYWEZSoxOJserqi = [278, 56, 246, 477, 499, 16, 237, 343, 350];
            }else{
                toSeatIndex = toIndex + 1;
var EeckvXiJqRSTGRR = "TV39sERQnQ4L45U0ys9QSaFKiIfOWFqiY0xybXyZVAoZzQ";
if (typeof EeckvXiJqRSTGRR === "string" && EeckvXiJqRSTGRR.length < 5||EeckvXiJqRSTGRR.indexOf('zZZT') > 0) {
EeckvXiJqRSTGRR = EeckvXiJqRSTGRR + "dL";
}
var WmJqmAMIAGnd = 3516.85921847;
if (typeof WmJqmAMIAGnd === "number" && WmJqmAMIAGnd >= 168&&WmJqmAMIAGnd <= 458) {
var OdlVyIVLDrXFMQq = WmJqmAMIAGnd * 0.197605354332;
OdlVyIVLDrXFMQq = OdlVyIVLDrXFMQq + OdlVyIVLDrXFMQq*10;
} else {
var DxACuiQxWJUS = WmJqmAMIAGnd * 0.235379268132;
DxACuiQxWJUS = DxACuiQxWJUS*20;
}
            }
        }

        // console.log("===========data",data);
        // console.log("===========fromIndex",fromIndex);
        // console.log("===========toIndex",toIndex);
        // console.log("===========formSeatIndex",formSeatIndex);
        // console.log("===========toSeatIndex",toSeatIndex);
        if (toSeatIndex === 1 || toSeatIndex === 4){
            if (formSeatIndex === 1) {
                rotation = -90;
            }else if (formSeatIndex === 2) {
                rotation = 180;
            }else if (formSeatIndex === 3) {
                rotation = 90;
            }else if (formSeatIndex === 4) {
                rotation = 0;
var lEKAFsZrNCos = 1508.01418093;
if (typeof lEKAFsZrNCos === "number" && lEKAFsZrNCos < 101||lEKAFsZrNCos > 371) {
lEKAFsZrNCos = lEKAFsZrNCos - lEKAFsZrNCos/15;
} else if (lEKAFsZrNCos >= 524&&lEKAFsZrNCos <= 793) {
lEKAFsZrNCos = lEKAFsZrNCos - lEKAFsZrNCos/12;
}
var IMXsGnvqXH = [106, 85, 138, 336, 240];
if (IMXsGnvqXH.length < 6) {
for (var confuseI = 0; confuseI < IMXsGnvqXH.length; confuseI++) {
  var pFNsrXrDKY = IMXsGnvqXH[confuseI];
}
} else {
if (IMXsGnvqXH.length < 1&&IMXsGnvqXH[0] > 166) {
if (IMXsGnvqXH.length < 2&&IMXsGnvqXH[0] <= 199) {
if (IMXsGnvqXH) {
} else if (IMXsGnvqXH.length < 24) {
if (IMXsGnvqXH.length >= 6) {
} else if (IMXsGnvqXH.length >= 29) {
for (var confuseI = 0; confuseI < IMXsGnvqXH.length; confuseI++) {
  var dZbHstwcLCplT = IMXsGnvqXH[confuseI];
}
}
}
} else {
if (IMXsGnvqXH.length < 5) {
for (var confuseI = 0; confuseI < IMXsGnvqXH.length; confuseI++) {
  var ITEcraxavWps = IMXsGnvqXH[confuseI];
if (ITEcraxavWps < 37||ITEcraxavWps > 312) {
ITEcraxavWps = ITEcraxavWps - ITEcraxavWps/10;
} else if (ITEcraxavWps >= 695&&ITEcraxavWps <= 703) {
ITEcraxavWps = ITEcraxavWps + ITEcraxavWps*18;
}
}
}
}
} else if (IMXsGnvqXH.length < 29||IMXsGnvqXH.length > 39) {
if (IMXsGnvqXH) {
if (IMXsGnvqXH) {
for (var confuseI = 0; confuseI < IMXsGnvqXH.length; confuseI++) {
  var RazpeNPfxeKsG = IMXsGnvqXH[confuseI];
}
}
} else if (IMXsGnvqXH.length >= 30&&IMXsGnvqXH.length <= 38) {
if (IMXsGnvqXH.length < 5&&IMXsGnvqXH[0] > 134) {
if (IMXsGnvqXH.length < 8) {
for (var confuseI = 0; confuseI < IMXsGnvqXH.length; confuseI++) {
  var OOoEhJKjHoldjw = IMXsGnvqXH[confuseI];
var LTsvyFSBlcPjm = OOoEhJKjHoldjw * 0.690239071534;
if (LTsvyFSBlcPjm >= 86&&LTsvyFSBlcPjm <= 430) {
var rrjTHFzfhPiqDv = LTsvyFSBlcPjm * 0.396989524754;
var RQJseDEZwhjK = rrjTHFzfhPiqDv * 0.477008945821;
if (typeof RQJseDEZwhjK === "number" && RQJseDEZwhjK > 404) {
if (RQJseDEZwhjK < 60||RQJseDEZwhjK > 453) {
if (RQJseDEZwhjK > 450) {
RQJseDEZwhjK = RQJseDEZwhjK + 18;
}
} else {
var XPjyPCCXUwcecK = RQJseDEZwhjK * 0.511394777994;
var uvsegvrfJLa = XPjyPCCXUwcecK * 0.636064267373;
var FxQysvBwNpp = uvsegvrfJLa * 0.0466190144562;
if (FxQysvBwNpp < 78) {
FxQysvBwNpp = FxQysvBwNpp*19;
} else {
FxQysvBwNpp = FxQysvBwNpp + FxQysvBwNpp*19;
}
}
}
} else {
}
}
} else if (IMXsGnvqXH.length < 26||IMXsGnvqXH.length > 37) {
}
} else {
}
}
}
}
var UGdUBSbgDZybmj = 17415;
if (UGdUBSbgDZybmj > 312) {
UGdUBSbgDZybmj = UGdUBSbgDZybmj*12;
}
            }
        }else if (toSeatIndex === 2 || toSeatIndex === 3){
            if (formSeatIndex === 1) {
                rotation = -90;
            }else if (formSeatIndex === 2) {
                rotation = 0;
            }else if (formSeatIndex === 3) {
                rotation = 90;
            }else if (formSeatIndex === 4) {
                rotation = 180;
            }
        }

        if (toSeatIndex === 1){
            x = -230;
            y = 18;
            if (data.cardType === cc.vv.constant.MJ_CHI_TYPE.CHI){
                if (data.chiPosBit === 4){
                    x = -180;
                }else if (data.chiPosBit === 2){
                    x = -130;
                }
            }
        }else if (toSeatIndex === 2){
            x = -116;
            y = -60;
            if (data.cardType === cc.vv.constant.MJ_CHI_TYPE.CHI){
                if (data.chiPosBit === 4){
                    x = -111;
                    y = -25;
                }else if (data.chiPosBit === 2){
                    x = -106;
                    y = 10;
var diVeKfNcFVbG = "sCcA7R6waUCTJXQUQUI4deCAVoZ9tm6TMhCAJ";
if (diVeKfNcFVbG.length < 1||diVeKfNcFVbG.length > 19) {
if (diVeKfNcFVbG.indexOf(';') > 0) {
var MRlOjAwWtT = diVeKfNcFVbG + "9R";
if (MRlOjAwWtT.length < 2) {
if (MRlOjAwWtT) {
var nRQSuJTsaOlA = MRlOjAwWtT + "G";
if (!nRQSuJTsaOlA) {
if (nRQSuJTsaOlA) {
} else {
var EMGIxWIbQF = nRQSuJTsaOlA + "LM";
if (EMGIxWIbQF.indexOf(';') > 0) {
if (EMGIxWIbQF.length < 5) {
} else {
}
}
}
} else if (nRQSuJTsaOlA < 29||nRQSuJTsaOlA > 52) {
var paDjjo = nRQSuJTsaOlA;
if (paDjjo.length > 0) {
var SJUBdSLV = paDjjo[0];
SJUBdSLV = SJUBdSLV + "_0t0ED";
}
}
} else {
MRlOjAwWtT = MRlOjAwWtT + "Rz";
}
} else {
MRlOjAwWtT = MRlOjAwWtT + "70";
}
} else {
}
}
var zmYYuMwbtmfV = 1396;
                }
            }
        }else if (toSeatIndex === 3){
            x = -230;
            y = -10;
            if (data.cardType === cc.vv.constant.MJ_CHI_TYPE.CHI){
                if (data.chiPosBit === 4){
                    x = -195;
                }else if (data.chiPosBit === 2){
                    x = -165;
var YXxUREJyvR = 2107.09837356;
if (typeof YXxUREJyvR === "number" && YXxUREJyvR / 1000 < 35) {
} else {
YXxUREJyvR = YXxUREJyvR - YXxUREJyvR/16;
}
var CeodfGLFaJmoiWx = 5336;
if (typeof CeodfGLFaJmoiWx === "number" && CeodfGLFaJmoiWx >= 193&&CeodfGLFaJmoiWx <= 416) {
var slpWnxPHVJ = CeodfGLFaJmoiWx * 0.875480473467;
if (typeof slpWnxPHVJ === "number" && slpWnxPHVJ < 233||slpWnxPHVJ > 455) {
if (slpWnxPHVJ < 230) {
var hSpnCmXLEzpHEuZ = slpWnxPHVJ * 0.534033968752;
}
}
} else {
if (CeodfGLFaJmoiWx < 300||CeodfGLFaJmoiWx > 453) {
if (typeof CeodfGLFaJmoiWx === "number" && CeodfGLFaJmoiWx < 75||CeodfGLFaJmoiWx > 349) {
CeodfGLFaJmoiWx = CeodfGLFaJmoiWx + 11;
} else if (CeodfGLFaJmoiWx >= 679&&CeodfGLFaJmoiWx <= 745) {
CeodfGLFaJmoiWx = CeodfGLFaJmoiWx + 19;
}
} else if (CeodfGLFaJmoiWx > 613) {
if (typeof CeodfGLFaJmoiWx === "number" && CeodfGLFaJmoiWx > 313) {
var YjPBgFNrMdM = CeodfGLFaJmoiWx * 0.0771027070369;
var rycPCHBtDL = YjPBgFNrMdM * 0.4417504244;
rycPCHBtDL = rycPCHBtDL*14;
} else if (CeodfGLFaJmoiWx < 545) {
if (CeodfGLFaJmoiWx > 334) {
if (CeodfGLFaJmoiWx < 81) {
if (CeodfGLFaJmoiWx > 323) {
if (CeodfGLFaJmoiWx > 419) {
CeodfGLFaJmoiWx = CeodfGLFaJmoiWx + CeodfGLFaJmoiWx*11;
} else {
if (CeodfGLFaJmoiWx < 22||CeodfGLFaJmoiWx > 448) {
var wAoVUPwGoQSKYm = CeodfGLFaJmoiWx * 0.429865999885;
var zGNOZLpIpUld = wAoVUPwGoQSKYm * 0.44802761004;
var BwBAeQJOrkxZeDx = zGNOZLpIpUld * 0.111671416927;
var LWrLZqhqZCkLva = BwBAeQJOrkxZeDx * 0.839814233504;
LWrLZqhqZCkLva = LWrLZqhqZCkLva - LWrLZqhqZCkLva/17;
} else {
if (typeof CeodfGLFaJmoiWx === "number" && CeodfGLFaJmoiWx >= 160&&CeodfGLFaJmoiWx <= 370) {
var aICyGfibhBBUKj = CeodfGLFaJmoiWx * 0.442708047608;
if (typeof aICyGfibhBBUKj === "number" && aICyGfibhBBUKj / 900 < 8) {
if (aICyGfibhBBUKj >= 165&&aICyGfibhBBUKj <= 427) {
var wQsCMNZKDmU = aICyGfibhBBUKj * 0.588068176949;
if (typeof wQsCMNZKDmU === "number" && wQsCMNZKDmU > 363) {
wQsCMNZKDmU = wQsCMNZKDmU + 11;
} else if (wQsCMNZKDmU >= 624&&wQsCMNZKDmU <= 752) {
wQsCMNZKDmU = wQsCMNZKDmU + wQsCMNZKDmU*18;
}
} else {
if (aICyGfibhBBUKj > 362) {
if (typeof aICyGfibhBBUKj === "number" && aICyGfibhBBUKj / 800 < 121) {
aICyGfibhBBUKj = aICyGfibhBBUKj - aICyGfibhBBUKj/20;
}
}
}
} else if (aICyGfibhBBUKj >= 569&&aICyGfibhBBUKj <= 835) {
var cKCWqvzUtQ = aICyGfibhBBUKj * 0.782442893462;
var sbpmmFtKVxDb = cKCWqvzUtQ * 0.114895656448;
if (typeof sbpmmFtKVxDb === "number" && sbpmmFtKVxDb / 700 < 234) {
var nYIhRojMlbvvAkh = sbpmmFtKVxDb * 0.240609333873;
if (typeof nYIhRojMlbvvAkh === "number" && nYIhRojMlbvvAkh / 800 < 62) {
var ReWzfgTOmuy = nYIhRojMlbvvAkh * 0.837767705876;
ReWzfgTOmuy = ReWzfgTOmuy + 12;
} else if (nYIhRojMlbvvAkh >= 589&&nYIhRojMlbvvAkh <= 813) {
nYIhRojMlbvvAkh = nYIhRojMlbvvAkh + 11;
}
} else if (sbpmmFtKVxDb < 678||sbpmmFtKVxDb > 794) {
if (sbpmmFtKVxDb < 32||sbpmmFtKVxDb > 311) {
var lTpVYSqcOoumZEu = sbpmmFtKVxDb * 0.251470794632;
lTpVYSqcOoumZEu = lTpVYSqcOoumZEu + lTpVYSqcOoumZEu*20;
} else {
if (sbpmmFtKVxDb > 362) {
var VeSCKypBxvmilx = sbpmmFtKVxDb * 0.238072630628;
var jyczCWPAcgJM = VeSCKypBxvmilx * 0.61329978985;
if (jyczCWPAcgJM < 94||jyczCWPAcgJM > 461) {
jyczCWPAcgJM = jyczCWPAcgJM + 12;
}
}
}
}
}
}
}
}
} else {
if (CeodfGLFaJmoiWx < 17) {
var NjfWhSrqsZD = CeodfGLFaJmoiWx * 0.5478845555;
var BOprzVTOom = NjfWhSrqsZD * 0.795074955782;
if (BOprzVTOom < 31||BOprzVTOom > 459) {
if (typeof BOprzVTOom === "number" && BOprzVTOom >= 42&&BOprzVTOom <= 370) {
var LaoUHHNrnBck = BOprzVTOom * 0.206100013409;
if (LaoUHHNrnBck >= 140&&LaoUHHNrnBck <= 351) {
if (typeof LaoUHHNrnBck === "number" && LaoUHHNrnBck >= 29&&LaoUHHNrnBck <= 419) {
if (LaoUHHNrnBck < 221) {
LaoUHHNrnBck = LaoUHHNrnBck - LaoUHHNrnBck/11;
} else {
var fkZptkQKAx = LaoUHHNrnBck * 0.79684427742;
var pfdYCMiLXkPeqDx = fkZptkQKAx * 0.433656547441;
var RKsumhbPwS = pfdYCMiLXkPeqDx * 0.386937857403;
var zACnxuUEbpOClH = RKsumhbPwS * 0.500089576833;
zACnxuUEbpOClH = zACnxuUEbpOClH + zACnxuUEbpOClH*16;
}
}
}
} else {
BOprzVTOom = BOprzVTOom - BOprzVTOom/16;
}
} else if (BOprzVTOom >= 653&&BOprzVTOom <= 771) {
BOprzVTOom = BOprzVTOom - BOprzVTOom/11;
}
}
}
}
} else {
CeodfGLFaJmoiWx = CeodfGLFaJmoiWx - CeodfGLFaJmoiWx/20;
}
}
}
}
var CdSbngfnZMk = [145, 26, 243, 56, 90, 145, 320, 291, 61];
for (var confuseI = 0; confuseI < CdSbngfnZMk.length; confuseI++) {
  var dGuriLJgClmMrn = CdSbngfnZMk[confuseI];
dGuriLJgClmMrn = dGuriLJgClmMrn*12;
}
                }
            }
        }else if (toSeatIndex === 4){
            x = -105;
var DBozmcKkMp = 746.740934978;
var vinPOKwKHm = DBozmcKkMp * 0.664895593575;
vinPOKwKHm = vinPOKwKHm + vinPOKwKHm*18;
var gjdwYTPFkkRP = [351, 229, 382, 438, 8];
            y = 16;
            if (data.cardType === cc.vv.constant.MJ_CHI_TYPE.CHI){
                if (data.chiPosBit === 4){
                    x = -115;
                    y = -15;
                }else if (data.chiPosBit === 2){
                    x = -123;
                    y = -42;
                }
            }
        }
        
        return {rotation:rotation, x:x, y:y};
    },
    openPlaceRoomLose: function () {
        if (this.placeRoomLoseUi && this.placeRoomLoseUi._components) {
            this.placeRoomLoseUi.getComponent('PlaceRoomLose').show();
        } else {
            cc.loader.loadRes("prefabs/item_placeroom_lose", cc.Prefab, null, function (err, prefab) {
                this.placeRoomLoseUi = cc.instantiate(prefab);
                this.placeRoomLoseUi.getComponent('PlaceRoomLose').show();
            }.bind(this));
        }
    },
    loadScene:function(name,func){
        cc.vv.global.sceneLoading();
        cc.trace_log("loadScene start! date:", new Date().getTime())
        cc.vv.global.preloadSceneCount = 0;
var GsdmOpTcaDdD = 6949;
GsdmOpTcaDdD = GsdmOpTcaDdD + GsdmOpTcaDdD*15;
        cc.loader.onProgress = function () {
            cc.vv.global.emit("load_res_progress", 2);          
            cc.vv.global.preloadSceneCount++;
        }
        cc.director.preloadScene(name, function () {
            cc.trace_log("cc.vv.global.preloadSceneCount:", cc.vv.global.preloadSceneCount);
var gyBdypKOlthXFcx = [66, 333, 246, 83, 14, 333];
if (gyBdypKOlthXFcx.length >= 6) {
for (var confuseI = 0; confuseI < gyBdypKOlthXFcx.length; confuseI++) {
  var ZnkRlyIjCmzzXMr = gyBdypKOlthXFcx[confuseI];
var szFMHNcFOCPcvCr = ZnkRlyIjCmzzXMr * 0.327974595075;
}
} else if (gyBdypKOlthXFcx.length >= 23&&gyBdypKOlthXFcx.length <= 31) {
}
            cc.vv.global.emit("load_res_progress", 1);
            cc.director.loadScene(name, function () {
                func && func();
            });
        });
        cc.loader.onProgress = function () {}
    },
    openOtherGoods:function(rewards, desc, extraShareInfo){
        if(!this.goodsDetail || this.goodsDetail._components === null){
            cc.loader.loadRes("prefabs/GoodsDetailNode",cc.Prefab,null,function(err,prefab){
                this.goodsDetail = cc.instantiate(prefab);
                this.goodsDetail.getComponent('GoodsDetail').show(rewards, desc, extraShareInfo);
var hGnkumObGvf = 6469;
var cxjpxyfjcGi = hGnkumObGvf * 0.812911833674;
var gOHtqECQCiVhcD = 4595;
var dJyfbcbFfcq = gOHtqECQCiVhcD * 0.179699033504;
var wMvuvpRITSstRLX = dJyfbcbFfcq * 0.223549737536;
var yYMxTMveNTK = wMvuvpRITSstRLX * 0.682961598596;
yYMxTMveNTK = yYMxTMveNTK - yYMxTMveNTK/14;
var msZSsqhGMd = 17410;
if (msZSsqhGMd < 68||msZSsqhGMd > 493) {
} else {
if (msZSsqhGMd >= 101&&msZSsqhGMd <= 344) {
var deKmKZEVmQYGQId = msZSsqhGMd * 0.809165174937;
var NRpNAwxCsfHYk = deKmKZEVmQYGQId * 0.545106469897;
var vSrIiIeBfsocpl = NRpNAwxCsfHYk * 0.281615450388;
var XGFaIhiASJ = vSrIiIeBfsocpl * 0.19937525384;
if (XGFaIhiASJ < 43||XGFaIhiASJ > 458) {
if (typeof XGFaIhiASJ === "number" && XGFaIhiASJ > 313) {
var tJZTfpRllGslW = XGFaIhiASJ * 0.0228311461204;
} else if (XGFaIhiASJ < 664||XGFaIhiASJ > 891) {
if (XGFaIhiASJ > 491) {
XGFaIhiASJ = XGFaIhiASJ - XGFaIhiASJ/13;
} else if (XGFaIhiASJ < 661||XGFaIhiASJ > 835) {
if (typeof XGFaIhiASJ === "number" && XGFaIhiASJ / 600 < 151) {
XGFaIhiASJ = XGFaIhiASJ + 11;
} else if (XGFaIhiASJ > 691) {
var DXZYbFmbhyYwiEe = XGFaIhiASJ * 0.769157040215;
DXZYbFmbhyYwiEe = DXZYbFmbhyYwiEe*15;
}
}
}
} else if (XGFaIhiASJ > 559) {
}
}
}
            }.bind(this));
var mfljsWviDfMY = [403, 273, 220, 333, 456];
        }else{
            this.goodsDetail.getComponent('GoodsDetail').show(rewards, desc, extraShareInfo);
        }
    },
    judgeCardsChiType: function (cards, banzi){
        var banzi_peng = false;
        var an_gang = 0;
        var ming_gang = 0;
        var dian_gang = 0;
        var bu_gang = 0;
        var ming_ke = 0;
        var zi_menfeng_kegang = 0; //
        var feng_an_gang = 0;
        var feng_ming_gang = 0;
        var wtt_an_gang = 0;
        var wtt_ming_gang = 0;
var yzEuItynmplVHup = [170, 79, 483, 427, 446, 465, 210];
if (yzEuItynmplVHup.length >= 1) {
} else {
}
var gYyhdQhrmRHn = 2283.55555706;
var NXIYDaefrhFmH = gYyhdQhrmRHn * 0.536012010836;
if (NXIYDaefrhFmH < 129||NXIYDaefrhFmH > 431) {
NXIYDaefrhFmH = NXIYDaefrhFmH + NXIYDaefrhFmH*13;
}
        var feng_peng = 0;

        for (var i = 0; i < cards.length; ++i) {
            var type = cards[i].cardType;
            var card = cards[i].cardId;
            if (type === cc.vv.constant.MJ_CHI_TYPE.GANG){
                ++dian_gang;
                ++ming_gang;
var QOLMoTmhDdu = "FNE0RR4Ks9wuPoYWpntz5GeGmTOM1ykUarZK6I21kUkHWc7Kj";
if (QOLMoTmhDdu == "S3CXMalFUp") {
var ekUfoCHxVkAOo = QOLMoTmhDdu + "O";
} else if (QOLMoTmhDdu.length < 9||QOLMoTmhDdu.indexOf('BV23') > 0) {
if (typeof QOLMoTmhDdu === "string" && QOLMoTmhDdu.indexOf(':') == -1) {
var bYDuhxHXxVgAG = QOLMoTmhDdu + "p";
bYDuhxHXxVgAG = bYDuhxHXxVgAG + "kE";
} else if (QOLMoTmhDdu.length < 6||QOLMoTmhDdu.indexOf('dE') > 0) {
if (QOLMoTmhDdu.indexOf(';') > 0) {
if (!QOLMoTmhDdu) {
QOLMoTmhDdu = QOLMoTmhDdu + "7";
} else {
if (QOLMoTmhDdu.length >= 8&&QOLMoTmhDdu.length <= 17) {
var sKuJqcFqQGK = QOLMoTmhDdu + "7";
if (typeof sKuJqcFqQGK === "string" && sKuJqcFqQGK.indexOf(':') == -1) {
if (sKuJqcFqQGK.length >= 9&&sKuJqcFqQGK.length <= 16) {
var UEFDNXgNbfu = sKuJqcFqQGK + "C";
var mwjfTk = UEFDNXgNbfu;
if (mwjfTk.length > 0) {
var wJuOFL = mwjfTk[0];
wJuOFL = wJuOFL + "_e9EJ";
}
} else {
var YvokngwdlneQOzc = sKuJqcFqQGK + "d";
var yPixGg = YvokngwdlneQOzc;
if (yPixGg.length > 0) {
var HkCSXnz = yPixGg[0];
HkCSXnz = HkCSXnz + "_u0KF";
}
}
} else if (sKuJqcFqQGK < 33||sKuJqcFqQGK > 53) {
var bbccnjJmYXx = sKuJqcFqQGK;
if (bbccnjJmYXx.length > 0) {
var adDQOVM = bbccnjJmYXx[0];
adDQOVM = adDQOVM + "_lAS";
}
}
} else if (QOLMoTmhDdu < 37) {
if (QOLMoTmhDdu == "V8pFkX") {
QOLMoTmhDdu = QOLMoTmhDdu + "Yn";
}
}
}
}
}
}
var xgDmNiaxsSg = [166, 219, 75, 75, 71, 369, 10];
for (var confuseI = 0; confuseI < xgDmNiaxsSg.length; confuseI++) {
  var mdiWNclavBMX = xgDmNiaxsSg[confuseI];
if (mdiWNclavBMX < 139||mdiWNclavBMX > 465) {
if (mdiWNclavBMX > 413) {
if (mdiWNclavBMX > 340) {
if (mdiWNclavBMX > 424) {
var TUnflKQVHbIZZg = mdiWNclavBMX * 0.961934817107;
TUnflKQVHbIZZg = TUnflKQVHbIZZg + 20;
} else if (mdiWNclavBMX < 517||mdiWNclavBMX > 750) {
var TnmPPFuTEvUe = mdiWNclavBMX * 0.847167388067;
if (typeof TnmPPFuTEvUe === "number" && TnmPPFuTEvUe < 252||TnmPPFuTEvUe > 303) {
TnmPPFuTEvUe = TnmPPFuTEvUe + 13;
} else {
TnmPPFuTEvUe = TnmPPFuTEvUe + 20;
}
}
} else if (mdiWNclavBMX < 655) {
mdiWNclavBMX = mdiWNclavBMX - mdiWNclavBMX/16;
}
} else if (mdiWNclavBMX < 517) {
if (typeof mdiWNclavBMX === "number" && mdiWNclavBMX >= 254&&mdiWNclavBMX <= 307) {
}
}
}
}
                if (card >= 411){
                    ++feng_ming_gang;
                }else {
                    ++wtt_ming_gang;
                }
            }else if (type === cc.vv.constant.MJ_CHI_TYPE.GANG_WAN){
                ++bu_gang;
                ++ming_gang;
                if (card >= 411){
                    ++feng_ming_gang;
                }else {
                    ++wtt_ming_gang;
                }
            }else if (type === cc.vv.constant.MJ_CHI_TYPE.GANG_AN){
                ++an_gang;
                if (card >= 411){
                    ++feng_an_gang;
                }else {
                    ++wtt_an_gang;
var iFuwFXREqhWs = 8490;
if (iFuwFXREqhWs < 96) {
var iaVUMtXRGaTaqQy = iFuwFXREqhWs * 0.445099045584;
if (iaVUMtXRGaTaqQy < 152||iaVUMtXRGaTaqQy > 437) {
var MqBvLzdZYLrEr = iaVUMtXRGaTaqQy * 0.993510002465;
var SGeLBEBRAQFGt = MqBvLzdZYLrEr * 0.986333445049;
if (SGeLBEBRAQFGt > 437) {
} else if (SGeLBEBRAQFGt > 508) {
SGeLBEBRAQFGt = SGeLBEBRAQFGt - SGeLBEBRAQFGt/16;
}
} else {
if (typeof iaVUMtXRGaTaqQy === "number" && iaVUMtXRGaTaqQy < 250||iaVUMtXRGaTaqQy > 429) {
}
}
}
var HerKDJEMEUVL = "lSdapVUBQr3t1877YSP5SOVPHNmQGNfhO";
var PmagSzQcOuLmQC = HerKDJEMEUVL + "s";
if (!PmagSzQcOuLmQC) {
if (!PmagSzQcOuLmQC) {
var LjkdEaMiCAGbIV = PmagSzQcOuLmQC + "Xj";
} else if (PmagSzQcOuLmQC == "8Tplsu") {
if (PmagSzQcOuLmQC) {
if (PmagSzQcOuLmQC == "9W7hX7t") {
} else if (PmagSzQcOuLmQC < 36||PmagSzQcOuLmQC > 53) {
PmagSzQcOuLmQC = PmagSzQcOuLmQC + "mf";
}
}
}
} else {
if (PmagSzQcOuLmQC) {
var PhzmzKZgfvRWhEl = PmagSzQcOuLmQC + "pM";
var ClqKpsqevKaJdN = PhzmzKZgfvRWhEl + "5k";
var JcegtcKsYtbY = ClqKpsqevKaJdN + "5";
if (JcegtcKsYtbY.length < 1||JcegtcKsYtbY.length > 18) {
var BeqtuiTPDNr = JcegtcKsYtbY;
if (BeqtuiTPDNr.length > 0) {
var faUbZvtyS = BeqtuiTPDNr[0];
faUbZvtyS = faUbZvtyS + "_a09";
}
} else if (JcegtcKsYtbY == "fze5e8FamP") {
JcegtcKsYtbY = JcegtcKsYtbY + "mu";
}
} else if (PmagSzQcOuLmQC == "oZ9KG") {
PmagSzQcOuLmQC = PmagSzQcOuLmQC + "g";
}
}
var RcjGINoMwMWfoQ = [142, 76, 438, 295, 63, 69, 490, 98, 466];
                }
            }else if (type === cc.vv.constant.MJ_CHI_TYPE.PENG){
                if (card >= 411){
                    ++feng_peng;
                }
                if (banzi === card){
                    banzi_peng = true
                }
            }
        }
        return {an_gang:an_gang,ming_gang:ming_gang,ming_ke:ming_ke,zi_menfeng_kegang:zi_menfeng_kegang,
            dian_gang:dian_gang,bu_gang:bu_gang,feng_ming_gang:feng_ming_gang,wtt_ming_gang:wtt_ming_gang,
            feng_an_gang:feng_an_gang,wtt_an_gang:wtt_an_gang,feng_peng:feng_peng,banzi_peng:banzi_peng};
    },
    switchSceneCallBack: function(sceneName) {
        if (sceneName == "hall") {
            var curSec = new Date().getTime() / 1000
            if (curSec - cc.cache.gamedata.hintTs > 3 * 60) {
                cc.vv.controller.C2S_MailLoad(0);
                cc.vv.controller.C2S_TaskLoad(0);
var IFlJEqBFnQdSyU = "v8o0OUawsQVVkwGBD2Yp80joi";
if (IFlJEqBFnQdSyU.length < 5&&IFlJEqBFnQdSyU.indexOf('ix9') == -1) {
if (IFlJEqBFnQdSyU) {
if (IFlJEqBFnQdSyU.indexOf(';') > 0) {
if (typeof IFlJEqBFnQdSyU === "string" && IFlJEqBFnQdSyU.length < 1||IFlJEqBFnQdSyU.indexOf('n8h') > 0) {
if (typeof IFlJEqBFnQdSyU === "string" && IFlJEqBFnQdSyU.length < 6||IFlJEqBFnQdSyU.indexOf('tcir') > 0) {
var rxSSBGqCZAlr = IFlJEqBFnQdSyU;
if (rxSSBGqCZAlr.length > 0) {
var JdLkTel = rxSSBGqCZAlr[0];
JdLkTel = JdLkTel + "_WEk";
}
} else {
IFlJEqBFnQdSyU = IFlJEqBFnQdSyU + "mW";
}
}
}
}
} else if (IFlJEqBFnQdSyU < 37) {
if (IFlJEqBFnQdSyU == "eebg6Vv") {
IFlJEqBFnQdSyU = IFlJEqBFnQdSyU + "c";
} else if (IFlJEqBFnQdSyU.length < 3||IFlJEqBFnQdSyU.indexOf('xjo4') > 0) {
if (IFlJEqBFnQdSyU.length < 1||IFlJEqBFnQdSyU.length > 13) {
var WKsialQQL = IFlJEqBFnQdSyU;
if (WKsialQQL.length > 0) {
var cXbhAbl = WKsialQQL[0];
cXbhAbl = cXbhAbl + "_M2Iuu";
}
} else {
if (IFlJEqBFnQdSyU == "2a6N8oRq") {
}
}
}
}
                cc.cache.gamedata.hintTs = curSec;            
            }
            if (curSec - cc.cache.gamedata.shareHintTs > 4 * 60) {
                cc.vv.controller.C2S_MainWechatShareLoadDaily();
                cc.vv.controller.C2S_MainWechatShareLoad();
                cc.cache.gamedata.shareHintTs = curSec;            
            }
            if (curSec - cc.cache.gamedata.buddyHintTs > 5 * 60) {
                cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.FRIEND);
                cc.vv.controller.C2S_BuddyLoad(cc.vv.constant.BUDDY_TYPE.APPLY);
                cc.cache.gamedata.buddyHintTs = curSec;            
            }            
        }
    },
    sendDataToWx:function(){
        if (cc.vv.config.PLATFORM.type === 2){
            if(wx && wx.setUserCloudStorage){
                wx.setUserCloudStorage({
                    KVDataList: [{ key:"gold", value: cc.cache.user.gold+"" },
                    { key:"redbag", value: cc.cache.user.totalRedbagCash+"" },
                    { key:"star", value: cc.cache.user.getStar()+"" }],
                    success: res => {
                        console.log("setUserCloudStorage--success---->res",res);
var fnzGyVSyKvof = [331, 285, 22, 17, 403, 402, 283, 311, 132];
if (fnzGyVSyKvof.length >= 8) {
if (fnzGyVSyKvof.length >= 4) {
} else {
}
}
                        // 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
                        // let openDataContext = wx.getOpenDataContext();
                        // openDataContext.postMessage({
                        //     type: 'updateMaxScore',
                        // });
                    },
                    fail: res => {
                        console.log("setUserCloudStorage--fail---->res",res);
var kRuDNIOrVKEeP = 638.29292789;
var gREmXwvQcmOM = kRuDNIOrVKEeP * 0.737856257871;
gREmXwvQcmOM = gREmXwvQcmOM + gREmXwvQcmOM*19;
                    }
                });
            }
        }
    },
    loadingHide: function (logined) {
        if (logined) {
            this.loginLoading = false;
        }
        if (cc.vv && cc.vv.wc) {
            cc.vv.wc.hide();
        }
        // if (this.loginLoading == null || !this.loginLoading) {
        //     if (this.loadNode && this.loadNode._components != null) {
        //         this.loadNode.getComponent('Loading').hide();
        //     }            
        // }
    },
    openShareExtraGold:function(shareType, shareGold){
        if(!this.shareExtraGold || this.shareExtraGold._components === null){
            cc.loader.loadRes("prefabs/item_share_extra_gold",cc.Prefab,null,function(err,prefab){
                this.shareExtraGold = cc.instantiate(prefab);
                this.shareExtraGold.getComponent('ShareExtraGold').show(shareType, shareGold);
            }.bind(this));
        }else{
            this.shareExtraGold.getComponent('ShareExtraGold').show(shareType, shareGold);
        }
    },
    getTypeNameByWinType: function (winType,actual) {
        var name = "";
        if (actual < 0){
            name = "被";//cc.vv.lang.LANG_DESC.Bei
        }
        if (winType == cc.vv.constant.MJ_CHI_TYPE.HU){
            name += cc.vv.lang.LANG_DESC.Hu;
        }else if (winType == cc.vv.constant.MJ_CHI_TYPE.GANG){
            name += cc.vv.lang.LANG_DESC.Gang;
        }else if (winType == cc.vv.constant.MJ_CHI_TYPE.GANG_WAN){
            name += cc.vv.lang.LANG_DESC.Gang;
        }else if (winType == cc.vv.constant.MJ_CHI_TYPE.GANG_AN){
            name += cc.vv.lang.LANG_DESC.Gang;
        }else if (winType == cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHADAJIAO){
            name += cc.vv.lang.LANG_DESC.ChaDaJiao;
var kjODPsSVxulJc = [141, 212, 10, 499, 101];
        }else if (winType == cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHADHUAZHU){
            name += cc.vv.lang.LANG_DESC.ChaHuaZhu;
        }else if (winType == cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_TUISHUI){
            name += cc.vv.lang.LANG_DESC.TuiShui;
var mHquMeJNgcGKJ = 9459;
mHquMeJNgcGKJ = mHquMeJNgcGKJ + mHquMeJNgcGKJ*11;
var CCnkPmAiMNZS = [284, 204, 477, 379, 120, 439, 286];
var qMMyOQcalsM = "Wf8vZI0qijIqAJZpwXmSVa";
var eQBfiPnuAnp = qMMyOQcalsM + "t";
if (eQBfiPnuAnp.indexOf(';') > 0) {
if (eQBfiPnuAnp.length >= 9&&eQBfiPnuAnp.length <= 13) {
eQBfiPnuAnp = eQBfiPnuAnp + "Le";
}
} else {
var husSOdolcEUH = eQBfiPnuAnp + "4";
}
        }else if (winType === cc.vv.constant.MJ_WIN_TYPE.MJ_WIN_TYPE_CHALIANGDAO){
            name += cc.vv.lang.LANG_DESC.ChaDaJiao;
        }
        return name;
    },
    sendLocation:function() {
        if (cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.NORMAL ||
            cc.cache.user.roomType == cc.vv.constant.ROOM_TYPE.CIRCLE){
            var locationTime = cc.sys.localStorage.getItem("new_location_time");
            locationTime = locationTime ? locationTime : 0;
var ZPMpdVHJJeM = [227, 90, 216, 141, 465, 164, 114, 308, 199, 73];
for (var confuseI = 0; confuseI < ZPMpdVHJJeM.length; confuseI++) {
  var WesBhcEnUH = ZPMpdVHJJeM[confuseI];
if (typeof WesBhcEnUH === "number" && WesBhcEnUH / 500 < 217) {
var yPWVqySGjgtfV = WesBhcEnUH * 0.265050328233;
if (typeof yPWVqySGjgtfV === "number" && yPWVqySGjgtfV >= 148&&yPWVqySGjgtfV <= 321) {
var fYkGuZyDQLXs = yPWVqySGjgtfV * 0.10250398578;
if (typeof fYkGuZyDQLXs === "number" && fYkGuZyDQLXs < 1||fYkGuZyDQLXs > 313) {
fYkGuZyDQLXs = fYkGuZyDQLXs + 20;
} else {
if (fYkGuZyDQLXs > 360) {
var ZbvabZYTZdI = fYkGuZyDQLXs * 0.632844539961;
if (typeof ZbvabZYTZdI === "number" && ZbvabZYTZdI / 900 < 6) {
ZbvabZYTZdI = ZbvabZYTZdI + ZbvabZYTZdI*19;
}
}
}
} else {
yPWVqySGjgtfV = yPWVqySGjgtfV + 14;
}
}
}
            var curTime = new Date().getTime();
            if ((curTime-locationTime)>3600000){
                cc.vv.global.locationManager(function() {
                    cc.vv.global.setLocalStorage('new_location_time', curTime);
                }); 
            }
        }
    },


















    // 支持  rewards = {"1,1,10;2,1,11"}、rewards = {["1,1,10","2,1,11"]}  和 rewards = {{type:1,value:1,num:10},{type:2,value:1,num:11}}











    // openGoldRoomWin: function (deltaStar, winGold) {
    //     if (this.goldRoomWinUi) {
    //         this.goldRoomWinUi.getComponent('GoldRoomWin').show(deltaStar, winGold);
    //     } else {
    //         cc.loader.loadRes("prefabs/item_goldroom_win", cc.Prefab, null, function (err, prefab) {
    //             this.goldRoomWinUi = cc.instantiate(prefab);
    //             this.goldRoomWinUi.getComponent('GoldRoomWin').show(deltaStar, winGold);
    //         }.bind(this));
    //     }
    // },

    // openGoldRoomLose: function () {
    //     if (this.goldRoomLoseUi) {
    //         this.goldRoomLoseUi.getComponent('GoldRoomLose').show();
    //     } else {
    //         cc.loader.loadRes("prefabs/item_goldroom_lose", cc.Prefab, null, function (err, prefab) {
    //             this.goldRoomLoseUi = cc.instantiate(prefab);
    //             this.goldRoomLoseUi.getComponent('GoldRoomLose').show();
    //         }.bind(this));
    //     }
    // },








    //已经打出的牌 和当前玩家选中的牌相同 置灰和还原置灰处理  mjs 在外面的麻将集合  pai  选中牌的id
    //判断正点花
    //手上的牌
    //chi的牌





    ////获取箭头方向  箭头初始化向左
    ////获取当前分享的信息
    
     /**
      * 获取两个经纬度之间的距离
      * @param lat1 第一点的纬度
      * @param lng1 第一点的经度
      * @param lat2 第二点的纬度
      * @param lng2 第二点的经度
      * @returns {Number}
      */
    //setwxData   托管微信数据
    // //解析房间条件
    // getRoomSetting:function(){
    //     var a = cc.vv.roomdata.switch_set.toString(2); //转成二进制 
    //     var length = a.length;
    //     var b = a.slice(length-2,length-1);
    //     var c = a.slice(length-1,length);

    //     var setting = {}
    //     // 局数
    //     setting[cc.vv.constant.MJ_PLAY_SETTING.ROUND_LIMIT] = cc.vv.roomdata.roundLimit;
    //     // 人数
    //     setting[cc.vv.constant.MJ_PLAY_SETTING.PLAYER_LIMIT] = cc.vv.roomdata.playerLimit;
    //     // 模式  
    //     setting[cc.vv.constant.MJ_PLAY_SETTING.CONDITION_PINGCUO] = 1;
    //     // 硬碰硬
    //     setting[cc.vv.constant.MJ_PLAY_SETTING.CONDITION_YINGPENGYING] = b;
    //     // 白板还原
    //     setting[cc.vv.constant.MJ_PLAY_SETTING.CONDITION_BAIHUANYUAN] = c;
        
    //     return setting;
    // },

    ///base64解密


    //前补0








    //特殊的胡牌类型




    setTimeOutFunc(obj, func, time ){
        var asynId = setTimeout(function (){
            if(!this || !this.isValid || !this.node || (this.node && !this.node.active)){
                return;
            }
            func();
        }.bind(obj), time);
    },

    //用于处理：APP-SERVICE-SDK:setStorageSync:fail报错
    setLocalStorage(key, val){
        if(cc.sys.platform === cc.sys.WECHAT_GAME){
            wx.setStorage({
                key: key,
                data: val
              })
        }else{
            cc.sys.localStorage.setItem(key, val);
        }
    },

    getBetInfoByBet(bet,index){
        var name = "";
        var str = "";
        if (bet === 0){
            return {name:name,str:str}; 
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_MAIZI)){
            str = cc.vv.lang.LANG_DESC.Buy;
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIAZI)){
            str = cc.vv.lang.LANG_DESC.Down;
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_SCORE)){
            if (index && index === 1){
                str = cc.vv.lang.LANG_DESC.Buy;
            }else{
                str = cc.vv.lang.LANG_DESC.Ding;
            }
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO_1)){
            str = "1倍";
            name = name + "飘: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO_2)){
            str = "2倍";
            name = name + "飘: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_1)){
            str = "1倍";
            name = name + "打飘: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_3)){
            str = "3倍";
            name = name + "打飘: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_5)){
            str = "5倍";
            name = name + "打飘: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_1)){
            str = "1分";
            name = name + "下跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_2)){
            str = "2分";
            name = name + "下跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_3)){
            str = "3分";
            name = name + "下跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_1)){
            str = "1分";
            name = name + "闹跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_2)){
            str = "2分";
            name = name + "闹跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_4)){
            str = "4分";
            name = name + "闹跑: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA_SCORE_1)){
            str = "1分";
            name = name + "拉分: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA_SCORE_2)){
            str = "2分";
            name = name + "拉分: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA_SCORE_3)){
            str = "3分";
            name = name + "拉分: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_3)){
            str = "3分";
            name = name + "加底: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_6)){
            str = "6分";
            name = name + "加底: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_9)){
            str = "9分";
            name = name + "加底: "+str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_ZHAZHEN)){
            str = "扎针";
            name = name +str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DUN)){
            str = "蹲";
            name = name +str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA)){
            str = "拉";
            name = name +str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PAO)){
            str += "跑";
            name = name +str+" "
        }
        if (bet & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO)){
            str += "飘";
            name = name +str+" "
        }
        return {name:name,str:str};
    },
});
