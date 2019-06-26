cc.Class({
    extends: cc.Component,
    properties: {
        lblTip:cc.Label,
        lblVip:cc.Label,
        lblRwdVip:cc.Label,
        lblBarExp:cc.Label,
        leftBtn:cc.Button,
        rightBtn:cc.Button,
        cc_pageView:cc.Node,
        cc_fabVip:cc.Prefab,
        cc_rewardItem: cc.Prefab,
        cc_iconView: cc.Node,
        nodeHelp:cc.Node,
        nodeReward:cc.Node,
        lblCondition: cc.Label,
        drawBtn:cc.Button,
        iconDrawn:cc.Node,

        _load:false
    },
    onEnable: function() {
        this.updateView();

        var vipLevel = cc.cache.user.vipLevel;
        // this.cc_pageView.parent.parent.getComponent(cc.PageView).scrollToPage(vipLevel);
        this.cc_pageView.parent.parent.getComponent(cc.PageView).setCurrentPageIndex(vipLevel);

        var maxVip = cc.vv.configuration.getMaxVipLevel();
        var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
var bSaiAdKhaL = 7711;
bSaiAdKhaL = bSaiAdKhaL + bSaiAdKhaL*19;
        if (curIndex == 0) {
            this.leftBtn.node.active = false;
            this.rightBtn.node.active = true;
        } else if (curIndex == maxVip) {
            this.leftBtn.node.active = true;
            this.rightBtn.node.active = false;
        } else {
            this.leftBtn.node.active = true;
            this.rightBtn.node.active = true;        
        }
        this.nodeHelp.active = false;
var TYwGowjCsny = 1694.23055705;
var oWeTyJHvIk = TYwGowjCsny * 0.686086993316;
if (oWeTyJHvIk >= 230&&oWeTyJHvIk <= 483) {
var QWjxYisiiXOnGRX = oWeTyJHvIk * 0.39238497291;
QWjxYisiiXOnGRX = QWjxYisiiXOnGRX - QWjxYisiiXOnGRX/11;
} else {
var osXfpMHYaDM = oWeTyJHvIk * 0.60498112967;
if (osXfpMHYaDM < 115) {
osXfpMHYaDM = osXfpMHYaDM*19;
} else {
osXfpMHYaDM = osXfpMHYaDM + 16;
}
}
var SFTjPbCJPaf = [293, 460, 257, 421, 45, 364, 374];
if (SFTjPbCJPaf.length < 3) {
} else {
if (!SFTjPbCJPaf) {
if (SFTjPbCJPaf.length >= 8) {
} else if (SFTjPbCJPaf.length >= 26) {
if (SFTjPbCJPaf.length < 9&&SFTjPbCJPaf[0] <= 162) {
for (var confuseI = 0; confuseI < SFTjPbCJPaf.length; confuseI++) {
  var exTlPUveiACuP = SFTjPbCJPaf[confuseI];
var tCZHlheFeBmoCy = exTlPUveiACuP * 0.0234768054716;
if (tCZHlheFeBmoCy >= 121&&tCZHlheFeBmoCy <= 340) {
tCZHlheFeBmoCy = tCZHlheFeBmoCy + 12;
}
}
} else {
if (SFTjPbCJPaf.length < 5&&SFTjPbCJPaf[0] <= 154) {
if (SFTjPbCJPaf&&SFTjPbCJPaf.length < 6&&SFTjPbCJPaf[0] <= 141) {
for (var confuseI = 0; confuseI < SFTjPbCJPaf.length; confuseI++) {
  var PrIidlrBfuaH = SFTjPbCJPaf[confuseI];
if (PrIidlrBfuaH < 143||PrIidlrBfuaH > 479) {
PrIidlrBfuaH = PrIidlrBfuaH*18;
} else {
}
}
} else {
}
}
}
}
} else if (SFTjPbCJPaf.length < 28) {
}
}
var tOzGOFZccOD = 8641;
if (typeof tOzGOFZccOD === "number" && tOzGOFZccOD > 354) {
var ZaDpxtTVVF = tOzGOFZccOD * 0.329003353647;
ZaDpxtTVVF = ZaDpxtTVVF*14;
} else if (tOzGOFZccOD >= 521&&tOzGOFZccOD <= 813) {
if (tOzGOFZccOD < 102) {
tOzGOFZccOD = tOzGOFZccOD + tOzGOFZccOD*20;
} else if (tOzGOFZccOD >= 580&&tOzGOFZccOD <= 838) {
if (tOzGOFZccOD > 327) {
}
}
}
        
        this.refreshNodeReward(curIndex);
    },
    onPageTurn: function(event) {
        cc.trace_log('Cur page view x:', this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex(), this.cc_pageView.parent.parent.getComponent(cc.PageView));
var tCZzGHXNIfMnppg = 6697;
if (typeof tCZzGHXNIfMnppg === "number" && tCZzGHXNIfMnppg < 207||tCZzGHXNIfMnppg > 304) {
var ZyJVPbLplcQ = tCZzGHXNIfMnppg * 0.793702766425;
if (ZyJVPbLplcQ < 188) {
}
}
var MkSMHaGnUgrfE = "27Fu3b2d6sRobNRpj570utVxV9kwHuQB6OZgY2";
MkSMHaGnUgrfE = MkSMHaGnUgrfE + "j";
var aAMjHFccTZG = 2598.8110322;
if (aAMjHFccTZG > 492) {
if (aAMjHFccTZG < 215||aAMjHFccTZG > 392) {
var EuZHazsroY = aAMjHFccTZG * 0.156361768922;
if (typeof EuZHazsroY === "number" && EuZHazsroY / 700 < 300) {
if (typeof EuZHazsroY === "number" && EuZHazsroY / 500 < 114) {
if (typeof EuZHazsroY === "number" && EuZHazsroY < 176||EuZHazsroY > 350) {
if (EuZHazsroY > 315) {
EuZHazsroY = EuZHazsroY + 19;
}
} else {
var LxSKRobjiXtVU = EuZHazsroY * 0.288420927013;
var MozPYboCTTkN = LxSKRobjiXtVU * 0.399669051153;
var OtofDljTgz = MozPYboCTTkN * 0.0523511719832;
var DOwEzHwBcS = OtofDljTgz * 0.845611779532;
if (DOwEzHwBcS >= 297&&DOwEzHwBcS <= 465) {
DOwEzHwBcS = DOwEzHwBcS*10;
} else if (DOwEzHwBcS < 559) {
if (typeof DOwEzHwBcS === "number" && DOwEzHwBcS < 244||DOwEzHwBcS > 485) {
DOwEzHwBcS = DOwEzHwBcS + 12;
}
}
}
} else if (EuZHazsroY < 512) {
var qwsBjrcbhWTE = EuZHazsroY * 0.436047307272;
var bJTRbkiODOW = qwsBjrcbhWTE * 0.512389544188;
var lnObPmUJtSZkcI = bJTRbkiODOW * 0.921462816238;
}
} else {
EuZHazsroY = EuZHazsroY - EuZHazsroY/12;
}
}
} else if (aAMjHFccTZG >= 673&&aAMjHFccTZG <= 880) {
if (aAMjHFccTZG >= 290&&aAMjHFccTZG <= 362) {
var IQhVQFcISlBeYch = aAMjHFccTZG * 0.59143677924;
if (IQhVQFcISlBeYch < 129) {
if (IQhVQFcISlBeYch >= 27&&IQhVQFcISlBeYch <= 477) {
}
}
} else if (aAMjHFccTZG < 505) {
if (aAMjHFccTZG > 456) {
} else {
aAMjHFccTZG = aAMjHFccTZG + 20;
}
}
}
        var maxVip = cc.vv.configuration.getMaxVipLevel();
        var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
        if (curIndex == 0) {
            this.leftBtn.node.active = false;
            this.rightBtn.node.active = true;
        } else if (curIndex == maxVip) {
            this.leftBtn.node.active = true;
            this.rightBtn.node.active = false;
        } else {
            this.leftBtn.node.active = true;
            this.rightBtn.node.active = true;        
        }
        this.refreshNodeReward(curIndex);
    },
    refreshNodeReward: function (vipLevel) {
        if (vipLevel == 0) {
            this.nodeReward.active = false;
        } else {
            this.nodeReward.active = true;
var DeeHZtKZMGSpNOg = 2613;
DeeHZtKZMGSpNOg = DeeHZtKZMGSpNOg + DeeHZtKZMGSpNOg*20;
var FzWRDfRXvBX = 2632.29153623;
FzWRDfRXvBX = FzWRDfRXvBX + FzWRDfRXvBX*11;
        }
        var vipInfo = cc.vv.configuration.getVipInfo(vipLevel);
var zWCQHpNEArdy = "feq5ZCZIYC6BfnrZzI0m07n6SSRidbm8RHtU6ZXFQEI2LIEHzAA";
var oHIfiGEHRHval = zWCQHpNEArdy + "x";
        cc.trace_log("vipLevel:", vipLevel, ",vipInfo:", vipInfo)
        if (vipInfo == null) {
            return;
        }
        this.lblRwdVip.string = vipLevel;

        // this.cc_iconView.removeAllChildren();
        this.resetRewardItem();

        var rwds = vipInfo["_reward_text"];
var JakaBwUwYsfQTn = "zaPSLPafwoldhknMct6iX2dVpsAuUHbfz4Wom6TrIfvfbPN";
if (JakaBwUwYsfQTn.length < 3&&JakaBwUwYsfQTn.indexOf('U8SzG') == -1) {
} else if (JakaBwUwYsfQTn < 36||JakaBwUwYsfQTn > 48) {
JakaBwUwYsfQTn = JakaBwUwYsfQTn + "7X";
}
var eDZbzPsTBTYFHf = "xJoMKk7c1wyTrPIBrKUQvi3uCtYtbmRdD5L1Iqt";
if (eDZbzPsTBTYFHf.length < 10) {
if (typeof eDZbzPsTBTYFHf === "string" && eDZbzPsTBTYFHf.length < 1||eDZbzPsTBTYFHf.indexOf('Rd2') > 0) {
if (typeof eDZbzPsTBTYFHf === "string" && eDZbzPsTBTYFHf.length < 2||eDZbzPsTBTYFHf.indexOf('MQ4k') > 0) {
eDZbzPsTBTYFHf = eDZbzPsTBTYFHf + "p";
} else {
if (eDZbzPsTBTYFHf == "RIYncvs") {
var SZyQwwsJPkmQNMX = eDZbzPsTBTYFHf + "Xv";
SZyQwwsJPkmQNMX = SZyQwwsJPkmQNMX + "83";
} else if (eDZbzPsTBTYFHf == "hlr4KS") {
}
}
}
}
        if (rwds == null) {
            this.updateRewardState(vipLevel);
            return;
        }
        // var rwds = "1,1,200;2,2,20000;6,6,30;4,4,400";
        var rewards = rwds.split(";");
        var length = rewards.length;
        for (var i = 0; i < length; ++i) {
            if (rewards[i] === "") {
                continue;
            }
            var rewardItem = this.rewardItemPool.get();
            if (rewardItem == null) {
                rewardItem = cc.instantiate(this.cc_rewardItem);
            }
            rewardItem.getComponent("RewardItem").initData(rewards[i], true);
            this.cc_iconView.addChild(rewardItem);
        }

        this.updateRewardState(vipLevel);
var jLRqvNETsoZBj = 15186;
if (jLRqvNETsoZBj < 213) {
jLRqvNETsoZBj = jLRqvNETsoZBj*10;
}
var rKJSUxoDAXUTrPl = [98, 481, 265, 288, 117, 325, 378, 180, 300, 234];
for (var confuseI = 0; confuseI < rKJSUxoDAXUTrPl.length; confuseI++) {
  var GnxasNLfwlSGGV = rKJSUxoDAXUTrPl[confuseI];
var JiOLTSOdku = GnxasNLfwlSGGV * 0.898701706816;
var rqOllibJNMZzLz = JiOLTSOdku * 0.52969705611;
if (typeof rqOllibJNMZzLz === "number" && rqOllibJNMZzLz / 200 < 74) {
if (typeof rqOllibJNMZzLz === "number" && rqOllibJNMZzLz >= 140&&rqOllibJNMZzLz <= 419) {
if (typeof rqOllibJNMZzLz === "number" && rqOllibJNMZzLz >= 200&&rqOllibJNMZzLz <= 423) {
} else if (rqOllibJNMZzLz < 592) {
}
} else {
}
}
}
var CtTrIOqFQMjiRfJ = 790.162244738;
var QaOAnwCykuxQny = CtTrIOqFQMjiRfJ * 0.186822672015;
QaOAnwCykuxQny = QaOAnwCykuxQny + QaOAnwCykuxQny*16;
    },
    resetRewardItem: function() {
        var childs = this.cc_iconView.getChildren();
        var childLen = childs.length
        if (childLen > 0) {
            for (var i = 0; i < childLen; i++) {
                this.rewardItemPool.put(childs[0]);
            }
            this.cc_iconView.removeAllChildren();
        }
    },
    initContent:function(){
        var vipInfos = cc.vv.configuration.getVipInfos();
        for (var i = 0; i < vipInfos.length; i++) {
            var vip = vipInfos[i];
var sRjbZYjiQR = 2875.89499202;
var xROijIYeTwNMQA = sRjbZYjiQR * 0.331059098542;
var uOZkWrHVjPY = xROijIYeTwNMQA * 0.749602418609;
var NDzhIlRsVLEU = uOZkWrHVjPY * 0.525931009114;
NDzhIlRsVLEU = NDzhIlRsVLEU - NDzhIlRsVLEU/14;
var wNMBxlhVDmOfBhc = [38, 211, 18, 231, 171, 264];
var izJoPQSLndD = 3744;
var XLUZNWWPWQD = izJoPQSLndD * 0.697393317123;
var mgzcMjxfKU = XLUZNWWPWQD * 0.297216968449;
var RGWrRZRLoWQICy = mgzcMjxfKU * 0.605598682665;
            var vipItem = cc.instantiate(this.cc_fabVip);
            vipItem.getComponent('VipItem').initItem(vip);
var jFegehefUooRPpO = 1439.38686206;
if (jFegehefUooRPpO >= 298&&jFegehefUooRPpO <= 468) {
if (typeof jFegehefUooRPpO === "number" && jFegehefUooRPpO / 400 < 280) {
jFegehefUooRPpO = jFegehefUooRPpO - jFegehefUooRPpO/14;
}
} else if (jFegehefUooRPpO > 605) {
if (jFegehefUooRPpO > 335) {
if (jFegehefUooRPpO < 30||jFegehefUooRPpO > 429) {
var KWCArrPjGGGvnDM = jFegehefUooRPpO * 0.418631066288;
var aepJbBSDqbPautq = KWCArrPjGGGvnDM * 0.92882063013;
var EXDZZrkQtcvMUrN = aepJbBSDqbPautq * 0.405230752539;
EXDZZrkQtcvMUrN = EXDZZrkQtcvMUrN - EXDZZrkQtcvMUrN/19;
}
} else if (jFegehefUooRPpO >= 616&&jFegehefUooRPpO <= 709) {
var jnHpRZYqLtzyzT = jFegehefUooRPpO * 0.0961691500035;
if (typeof jnHpRZYqLtzyzT === "number" && jnHpRZYqLtzyzT > 385) {
jnHpRZYqLtzyzT = jnHpRZYqLtzyzT - jnHpRZYqLtzyzT/20;
} else if (jnHpRZYqLtzyzT < 536||jnHpRZYqLtzyzT > 730) {
if (jnHpRZYqLtzyzT < 40||jnHpRZYqLtzyzT > 422) {
if (jnHpRZYqLtzyzT < 207||jnHpRZYqLtzyzT > 389) {
var ASlsIkRjOuUf = jnHpRZYqLtzyzT * 0.0530412689965;
var RdpEFkVdHKH = ASlsIkRjOuUf * 0.937151701839;
} else {
jnHpRZYqLtzyzT = jnHpRZYqLtzyzT*15;
}
}
}
}
}
var KmLMzzQTfquyV = "sQt3D4wJvLH3tVtQ9eRD15949TytZzLihAgWwtGdtAoK5esbjn";
var lVjDQyidwgBNH = KmLMzzQTfquyV + "UF";
if (lVjDQyidwgBNH) {
if (lVjDQyidwgBNH.length < 2||lVjDQyidwgBNH.length > 20) {
lVjDQyidwgBNH = lVjDQyidwgBNH + "V";
} else {
if (typeof lVjDQyidwgBNH === "string" && lVjDQyidwgBNH.indexOf(':') == -1) {
var aEhjNwDtUSrwSo = lVjDQyidwgBNH + "5";
aEhjNwDtUSrwSo = aEhjNwDtUSrwSo + "h";
} else {
var uWfUBoJbUsFFBL = lVjDQyidwgBNH + "1Q";
var FKYBGBeEDd = uWfUBoJbUsFFBL + "2C";
if (FKYBGBeEDd.length < 8||FKYBGBeEDd.length > 11) {
FKYBGBeEDd = FKYBGBeEDd + "le";
} else {
FKYBGBeEDd = FKYBGBeEDd + "w";
}
}
}
} else if (lVjDQyidwgBNH < 40||lVjDQyidwgBNH > 57) {
if (typeof lVjDQyidwgBNH === "string" && lVjDQyidwgBNH.length < 2||lVjDQyidwgBNH.indexOf('bB') > 0) {
lVjDQyidwgBNH = lVjDQyidwgBNH + "4";
} else {
if (lVjDQyidwgBNH.length >= 1&&lVjDQyidwgBNH.length <= 16) {
}
}
}
var NuVfVekmItrQUb = 1521.58386004;
if (typeof NuVfVekmItrQUb === "number" && NuVfVekmItrQUb >= 275&&NuVfVekmItrQUb <= 438) {
if (NuVfVekmItrQUb >= 209&&NuVfVekmItrQUb <= 404) {
var zgdVXnMgoC = NuVfVekmItrQUb * 0.984623201301;
if (zgdVXnMgoC > 449) {
if (zgdVXnMgoC >= 259&&zgdVXnMgoC <= 427) {
var naluUCcAtyhRD = zgdVXnMgoC * 0.665223800796;
naluUCcAtyhRD = naluUCcAtyhRD + naluUCcAtyhRD*19;
} else if (zgdVXnMgoC < 510) {
if (typeof zgdVXnMgoC === "number" && zgdVXnMgoC > 337) {
zgdVXnMgoC = zgdVXnMgoC - zgdVXnMgoC/11;
}
}
} else if (zgdVXnMgoC < 666||zgdVXnMgoC > 824) {
var aiRbcnVNjkmel = zgdVXnMgoC * 0.523460063764;
}
} else {
NuVfVekmItrQUb = NuVfVekmItrQUb*10;
}
}
            this.cc_pageView.addChild(vipItem);
            cc.trace_log("initContent:", this.cc_pageView)
        }
    },
    onLoad: function () {
        if (this._isLoad){
            return
        }else{
            this._isLoad = true;
        }

        this.initContent();

        this.addComponent('OnBack');

        cc.vv.global.on("vip_draw_update", function (data) {
            var vipLevel = data.detail.vipLevel;
            var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
            if (vipLevel != curIndex) {
                return;
            }
            this.updateRewardState(vipLevel);
        }.bind(this));

        if (!this.rewardItemPool) {
            this.rewardItemPool = new cc.NodePool();
            for (var i = 0; i < 2; i++) {
                var rewardItem = cc.instantiate(this.cc_rewardItem);
                this.rewardItemPool.put(rewardItem);
            }
        }
    },
    updateView: function() {
        var maxVip = cc.vv.configuration.getMaxVipLevel();
        var vipLevel = cc.cache.user.vipLevel;
var rhFppzkGbin = [495, 235, 23, 404, 106, 227, 50];
for (var confuseI = 0; confuseI < rhFppzkGbin.length; confuseI++) {
  var qkDDxbhLtEvq = rhFppzkGbin[confuseI];
if (qkDDxbhLtEvq < 277) {
var ujEemGEEoTOHv = qkDDxbhLtEvq * 0.295720124707;
if (typeof ujEemGEEoTOHv === "number" && ujEemGEEoTOHv / 400 < 287) {
} else if (ujEemGEEoTOHv < 638) {
if (ujEemGEEoTOHv >= 105&&ujEemGEEoTOHv <= 327) {
ujEemGEEoTOHv = ujEemGEEoTOHv + ujEemGEEoTOHv*20;
}
}
} else if (qkDDxbhLtEvq < 509) {
var spXeQDOvnJbi = qkDDxbhLtEvq * 0.0109793782381;
var fHVOHLRRkAoqD = spXeQDOvnJbi * 0.861371495573;
fHVOHLRRkAoqD = fHVOHLRRkAoqD - fHVOHLRRkAoqD/16;
}
}
        var zoneExp = cc.vv.configuration.getVipZoneExp(cc.cache.user.vipExp);
        var curZoneExp = cc.vv.configuration.getCurVipZoneExp(cc.cache.user.vipExp);

        cc.trace_log("vipExp:", cc.cache.user.vipExp, ",vipLevel:", vipLevel, ",zoneExp:", zoneExp, ",curZoneExp:", curZoneExp, ",maxVip:", maxVip);
        if (vipLevel >= maxVip) {
            this.lblTip.string = cc.vv.lang.VipTopTip;
        } else {
            var params = [];
            params.push(zoneExp - curZoneExp);
            params.push(vipLevel + 1);
            var tip = cc.vv.utils.formatTable(cc.vv.lang.VipTip, params);
            this.lblTip.string = tip;
            cc.trace_log("tip:", tip);
var lMNrSgBMhGAoI = 14180;
var wXvmqpFSOdO = lMNrSgBMhGAoI * 0.123040830056;
if (wXvmqpFSOdO < 210) {
if (typeof wXvmqpFSOdO === "number" && wXvmqpFSOdO >= 235&&wXvmqpFSOdO <= 333) {
if (typeof wXvmqpFSOdO === "number" && wXvmqpFSOdO > 354) {
if (wXvmqpFSOdO < 75||wXvmqpFSOdO > 448) {
if (wXvmqpFSOdO < 19||wXvmqpFSOdO > 324) {
wXvmqpFSOdO = wXvmqpFSOdO - wXvmqpFSOdO/19;
} else if (wXvmqpFSOdO < 540||wXvmqpFSOdO > 811) {
wXvmqpFSOdO = wXvmqpFSOdO*11;
}
} else {
var JtoGGSbiTx = wXvmqpFSOdO * 0.75695246559;
if (JtoGGSbiTx >= 13&&JtoGGSbiTx <= 369) {
if (JtoGGSbiTx < 34||JtoGGSbiTx > 407) {
if (JtoGGSbiTx < 165) {
JtoGGSbiTx = JtoGGSbiTx + JtoGGSbiTx*14;
} else {
if (JtoGGSbiTx < 187) {
JtoGGSbiTx = JtoGGSbiTx*18;
} else {
var UiUTrPEqqN = JtoGGSbiTx * 0.420401639512;
if (typeof UiUTrPEqqN === "number" && UiUTrPEqqN < 45||UiUTrPEqqN > 492) {
var jUkOCDlBzk = UiUTrPEqqN * 0.427449125746;
var qTBQqIBOmnwpsv = jUkOCDlBzk * 0.753337035906;
if (qTBQqIBOmnwpsv < 178||qTBQqIBOmnwpsv > 451) {
var EqEefuKksKpIxIZ = qTBQqIBOmnwpsv * 0.487629440283;
EqEefuKksKpIxIZ = EqEefuKksKpIxIZ + 18;
}
} else {
if (UiUTrPEqqN < 46) {
if (UiUTrPEqqN >= 192&&UiUTrPEqqN <= 478) {
} else if (UiUTrPEqqN < 570) {
UiUTrPEqqN = UiUTrPEqqN + UiUTrPEqqN*12;
}
} else if (UiUTrPEqqN < 574||UiUTrPEqqN > 747) {
UiUTrPEqqN = UiUTrPEqqN*20;
}
}
}
}
} else {
}
} else if (JtoGGSbiTx >= 637&&JtoGGSbiTx <= 780) {
if (JtoGGSbiTx >= 85&&JtoGGSbiTx <= 413) {
}
}
}
} else {
var QPGeFanApP = wXvmqpFSOdO * 0.459171554492;
if (typeof QPGeFanApP === "number" && QPGeFanApP / 700 < 226) {
if (QPGeFanApP < 57||QPGeFanApP > 305) {
QPGeFanApP = QPGeFanApP - QPGeFanApP/15;
} else if (QPGeFanApP < 666) {
var BmWwAassEoXSN = QPGeFanApP * 0.032805900262;
if (BmWwAassEoXSN > 391) {
BmWwAassEoXSN = BmWwAassEoXSN - BmWwAassEoXSN/10;
} else {
BmWwAassEoXSN = BmWwAassEoXSN + 14;
}
}
} else {
if (QPGeFanApP >= 99&&QPGeFanApP <= 458) {
QPGeFanApP = QPGeFanApP - QPGeFanApP/20;
}
}
}
} else {
if (typeof wXvmqpFSOdO === "number" && wXvmqpFSOdO >= 24&&wXvmqpFSOdO <= 491) {
} else {
wXvmqpFSOdO = wXvmqpFSOdO + 10;
}
}
} else {
if (wXvmqpFSOdO > 391) {
wXvmqpFSOdO = wXvmqpFSOdO*15;
} else {
var zPvSGtkyJWNKMD = wXvmqpFSOdO * 0.631798938854;
zPvSGtkyJWNKMD = zPvSGtkyJWNKMD + 10;
}
}
var TOcLykTXYtftfU = 883.80434314;
if (TOcLykTXYtftfU >= 292&&TOcLykTXYtftfU <= 400) {
var lzbNMNwadPrtj = TOcLykTXYtftfU * 0.76267715042;
var ooGSXdqrCprkJb = lzbNMNwadPrtj * 0.628210292951;
ooGSXdqrCprkJb = ooGSXdqrCprkJb + 19;
} else if (TOcLykTXYtftfU < 588||TOcLykTXYtftfU > 820) {
var kizdMhbMYW = TOcLykTXYtftfU * 0.944515090831;
var swVrFXJSWJqFF = kizdMhbMYW * 0.207254123506;
swVrFXJSWJqFF = swVrFXJSWJqFF - swVrFXJSWJqFF/11;
}
var kToHKgmCnEWDN = "cewbDSO0p0m4zllOGRnQN";
kToHKgmCnEWDN = kToHKgmCnEWDN + "C";
        }
        this.lblVip.string = vipLevel;
        this.lblBarExp.string = curZoneExp + "/" + zoneExp;

        var progressBar = this.node.getChildByName('nodeVip').getChildByName('progressBar');
        progressBar.getComponent(cc.ProgressBar).progress = curZoneExp / zoneExp;
    },
    updateRewardState: function(vipLevel) {
        var vipInfo = cc.vv.configuration.getVipInfo(vipLevel);
        cc.trace_log("vipLevel:", vipLevel, ",vipInfo:", vipInfo)
        if (vipInfo == null || vipInfo["_reward_text"] == null || vipInfo["_reward_text"] == "") {
            this.lblCondition.node.active = false;
            this.drawBtn.node.active = false;
            this.iconDrawn.active = false;
            return;
        }
        if (cc.cache.user.getVipLevel() < vipLevel) {
            this.drawBtn.node.active = false;
            this.iconDrawn.active = false;
            this.lblCondition.node.active = true;
            var params = [];
            params.push(vipLevel);
            var tip = cc.vv.utils.formatTable(cc.vv.lang.VipDrawTip, params);
            this.lblCondition.string = tip;
            return;
        }

        var firstLogType = vipLevel + 1;
        cc.trace_log("cc.cache.user.firstLog:", cc.cache.user.firstLog.low, ",firstLogType:", firstLogType, ",firstLog:", cc.cache.user.firstLog)
        if ((cc.cache.user.firstLog.low & (0x01 << firstLogType)) > 0) {
            this.drawBtn.node.active = false;
            this.iconDrawn.active = true;
            this.lblCondition.node.active = false; 
        } else {
            this.iconDrawn.active = false;
var EaupGrIImbC = 123.589975246;
var IkzheXcBfxh = "lRctVUfY4T16Q5pZaTTTAdqhUIUbci9DrAkwu6rF";
var EfHJCHkmkB = IkzheXcBfxh;
if (EfHJCHkmkB.length > 0) {
var dpYOl = EfHJCHkmkB[0];
dpYOl = dpYOl + "_wOwu";
}
            this.lblCondition.node.active = false; 
            this.drawBtn.node.active = true;
var iauZGZooWB = 523;
iauZGZooWB = iauZGZooWB + 10;
var fuAFNFUERi = [96, 452, 402, 132, 354];
if (fuAFNFUERi.length < 5||fuAFNFUERi.length > 14) {
} else {
for (var confuseI = 0; confuseI < fuAFNFUERi.length; confuseI++) {
  var CjtoNHpLfKvAR = fuAFNFUERi[confuseI];
var fVpVJACCvcX = CjtoNHpLfKvAR * 0.890557584706;
var HQHOpddkdmZw = fVpVJACCvcX * 0.0249562490146;
var uJtMMvunVWSpMs = HQHOpddkdmZw * 0.266417671286;
if (typeof uJtMMvunVWSpMs === "number" && uJtMMvunVWSpMs / 1000 < 241) {
if (uJtMMvunVWSpMs < 271||uJtMMvunVWSpMs > 366) {
if (uJtMMvunVWSpMs > 456) {
uJtMMvunVWSpMs = uJtMMvunVWSpMs + 12;
} else if (uJtMMvunVWSpMs >= 653&&uJtMMvunVWSpMs <= 804) {
uJtMMvunVWSpMs = uJtMMvunVWSpMs*18;
}
}
} else {
var IKCTKiMAtb = uJtMMvunVWSpMs * 0.200692163698;
if (IKCTKiMAtb > 305) {
if (IKCTKiMAtb < 85) {
IKCTKiMAtb = IKCTKiMAtb + 11;
}
}
}
}
}
var IEeOHqeyFarzRhg = [430, 174, 372, 301, 32, 93, 49, 402, 31, 107];
for (var confuseI = 0; confuseI < IEeOHqeyFarzRhg.length; confuseI++) {
  var udxBljhfXZinYLl = IEeOHqeyFarzRhg[confuseI];
udxBljhfXZinYLl = udxBljhfXZinYLl*18;
}
        }
    },
    onBtnClicked: function (event) {
        var name = event.target.name;
        if (name == "btnHelp") {
            this.nodeHelp.active = !this.nodeHelp.active;
            return;
        }
        if (name == "btnDraw") {
            var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
            cc.vv.controller.C2S_MainVipDraw(curIndex);
            return;
        }

        var maxVip = cc.vv.configuration.getMaxVipLevel();
        var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
        if (name == "leftBtn") {
            if (curIndex <= 0) {
                return;
            }
            this.cc_pageView.parent.parent.getComponent(cc.PageView).setCurrentPageIndex(curIndex-1);
        } else if (name == "rightBtn") {
            if (curIndex >= maxVip) {
                return;
            }
            this.cc_pageView.parent.parent.getComponent(cc.PageView).setCurrentPageIndex(curIndex+1);
        }
        var curIndex = this.cc_pageView.parent.parent.getComponent(cc.PageView).getCurrentPageIndex();
        if (curIndex == 0) {
            this.leftBtn.node.active = false;
            this.rightBtn.node.active = true;
var CjVCDdFdIeJZ = [401, 218, 87, 228, 221, 407, 273, 87, 353];
if (CjVCDdFdIeJZ.length < 6) {
if (CjVCDdFdIeJZ&&CjVCDdFdIeJZ.length < 6&&CjVCDdFdIeJZ[0] <= 189) {
for (var confuseI = 0; confuseI < CjVCDdFdIeJZ.length; confuseI++) {
  var zyNFvLbJehKtA = CjVCDdFdIeJZ[confuseI];
}
} else {
for (var confuseI = 0; confuseI < CjVCDdFdIeJZ.length; confuseI++) {
  var qsmLpIdUZOcRCNd = CjVCDdFdIeJZ[confuseI];
if (qsmLpIdUZOcRCNd >= 273&&qsmLpIdUZOcRCNd <= 327) {
var xXMDOVnVNNPTL = qsmLpIdUZOcRCNd * 0.00943434419702;
xXMDOVnVNNPTL = xXMDOVnVNNPTL + 14;
} else {
var VgRfgKQaTKurar = qsmLpIdUZOcRCNd * 0.68882340269;
}
}
}
} else {
}
        } else if (curIndex == maxVip) {
            this.leftBtn.node.active = true;
var cbzfQWRHFiJkag = 4296;
if (cbzfQWRHFiJkag < 255) {
var kRuskleIeRbKfmQ = cbzfQWRHFiJkag * 0.384683375458;
if (kRuskleIeRbKfmQ < 281||kRuskleIeRbKfmQ > 423) {
} else {
kRuskleIeRbKfmQ = kRuskleIeRbKfmQ*13;
}
} else if (cbzfQWRHFiJkag >= 524&&cbzfQWRHFiJkag <= 723) {
cbzfQWRHFiJkag = cbzfQWRHFiJkag - cbzfQWRHFiJkag/17;
}
var dJjuNcIPTi = "Y1tBH8RTkMLfQwK9EFUSNh91HJGMYN5KuWHauRhRJMYU";
dJjuNcIPTi = dJjuNcIPTi + "U";
            this.rightBtn.node.active = false;
var AkhbmEyRoGQam = 7822.90595589;
var msyOrVrmtsY = AkhbmEyRoGQam * 0.513434776237;
if (msyOrVrmtsY >= 240&&msyOrVrmtsY <= 433) {
if (typeof msyOrVrmtsY === "number" && msyOrVrmtsY / 600 < 242) {
if (typeof msyOrVrmtsY === "number" && msyOrVrmtsY > 364) {
if (typeof msyOrVrmtsY === "number" && msyOrVrmtsY / 1000 < 174) {
var wkKqkZdiVI = msyOrVrmtsY * 0.891696339335;
var LwGKjOmKqBzKQ = wkKqkZdiVI * 0.0789183016868;
} else if (msyOrVrmtsY > 538) {
if (typeof msyOrVrmtsY === "number" && msyOrVrmtsY / 600 < 63) {
} else {
if (typeof msyOrVrmtsY === "number" && msyOrVrmtsY / 400 < 222) {
msyOrVrmtsY = msyOrVrmtsY - msyOrVrmtsY/13;
} else if (msyOrVrmtsY < 506||msyOrVrmtsY > 890) {
msyOrVrmtsY = msyOrVrmtsY*20;
}
}
}
}
}
}
        } else {
            this.leftBtn.node.active = true;
            this.rightBtn.node.active = true;        
        }
        this.refreshNodeReward(curIndex);
    },



    // 刷新列表





});