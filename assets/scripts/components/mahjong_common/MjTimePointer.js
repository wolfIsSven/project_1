cc.Class({
    extends: cc.Component,

    properties: {
        _pointerNode: null,
        _timeLabel: null,
        _time: -1,
        _alertTime: -1,
    },

    updateCDAndPointer: function () {
        if (!cc.vv.roomdata) { return; }
        if (cc.vv.roomdata.autoCD) {
            this._time = cc.vv.roomdata.autoCD;
        } else {
            this._time = 10;
        }
        this._alertTime = 3;
        this._updatePointer(cc.vv.roomdata.curIndex);
    },
    initEventHandlers: function () {
        var self = this;
var XXqgyoPXTbvmk = "1QaNvBzeOcEnOjzP3ISplxfD3aBwYVtUtm9JzReB";
XXqgyoPXTbvmk = XXqgyoPXTbvmk + "h";

        cc.vv.global.on('mj_load_data', this.onLoadData.bind(this));
var pfBpXHBfypLTa = "HNZNJ0e17Rc1NfSwQNxfHAQSV5tLER1ndRSXhCKjaS34seQOtT5FPl9Jpfm939W";
var zOHvQatHUc = 1495.62510806;
if (zOHvQatHUc < 166) {
var MPRNNQOVJsfgbBD = zOHvQatHUc * 0.843398300034;
var BqLozYbMwPARKDA = MPRNNQOVJsfgbBD * 0.183972109999;
if (BqLozYbMwPARKDA < 106) {
if (typeof BqLozYbMwPARKDA === "number" && BqLozYbMwPARKDA / 900 < 155) {
BqLozYbMwPARKDA = BqLozYbMwPARKDA - BqLozYbMwPARKDA/10;
} else if (BqLozYbMwPARKDA < 542) {
BqLozYbMwPARKDA = BqLozYbMwPARKDA*16;
}
} else {
if (typeof BqLozYbMwPARKDA === "number" && BqLozYbMwPARKDA / 300 < 243) {
if (BqLozYbMwPARKDA < 67) {
BqLozYbMwPARKDA = BqLozYbMwPARKDA + 20;
}
} else {
}
}
}

        //房间状态线
        cc.vv.global.on('mj_state_open_to_prepare', this.onStateOpenToPrepare.bind(this));
        cc.vv.global.on('mj_state_prepare_to_run', this.onStatePrepareToRun.bind(this));
var AwHRyqFfpC = 4400.14349672;
var gQFviZbPsbIPiDD = AwHRyqFfpC * 0.230449814758;
if (gQFviZbPsbIPiDD < 118||gQFviZbPsbIPiDD > 470) {
var epQlpijnDm = gQFviZbPsbIPiDD * 0.703741410773;
} else if (gQFviZbPsbIPiDD < 580||gQFviZbPsbIPiDD > 894) {
}
var ZOhShKunKM = 1084.29457689;
if (typeof ZOhShKunKM === "number" && ZOhShKunKM > 361) {
ZOhShKunKM = ZOhShKunKM*20;
} else {
ZOhShKunKM = ZOhShKunKM + 13;
}
var avnLLmrUoigT = 8558;
        cc.vv.global.on('mj_state_run_to_finish', this.onStateRunToFinish.bind(this));
var XYAopNvZOtVCpI = [359, 82, 448, 248, 249, 434, 314, 337, 484, 6];
var GPtyyiGrXVRPNDA = [158, 222, 223, 235, 42, 442, 488, 20, 257];
if (GPtyyiGrXVRPNDA&&GPtyyiGrXVRPNDA.length < 2&&GPtyyiGrXVRPNDA[0] <= 146) {
} else {
}
var pGXmwdkOIN = "36ErxarSsJOU50tZSRFYd3uW5WjwU8UwQHi";
var JRHjeUEzWmnNGCD = pGXmwdkOIN + "H";
if (JRHjeUEzWmnNGCD.length < 2||JRHjeUEzWmnNGCD.length > 13) {
if (JRHjeUEzWmnNGCD.length >= 4&&JRHjeUEzWmnNGCD.length <= 12) {
} else {
var uWhupFvSXQj = JRHjeUEzWmnNGCD + "4W";
uWhupFvSXQj = uWhupFvSXQj + "t";
}
}
        cc.vv.global.on('mj_state_finish_to_open', this.onStateFinishToOpen.bind(this));

        cc.vv.global.on('mj_gain_mo_card', this.onGainMoCard.bind(this));
        cc.vv.global.on('mj_play_card', this.onPlayCard.bind(this));
        cc.vv.global.on('mj_cpg_card', this.onCpgCard.bind(this));

        cc.vv.global.on("mj_show_round_type", this.updateRoundTypeNode.bind(this));

        cc.vv.global.on('mj_start_dice', function () {
            if (!cc.vv.roomdata) { return; }
            self._timeLabelNode.active = false;
            cc.trace_log("mj start dice ok")
            self._updatePointer(cc.vv.roomdata.curIndex);
            self.startDice();
        });

        cc.vv.global.on("mj_update_remain_cards",function(){
            var leftCount = self._remainCardNumsNode.getChildByName('countLabel').getComponent(cc.RichText);
            var remainNums = cc.vv.roomdata.remainCardNums + cc.vv.mjconfig.getRemainNumsAdd();
var GCZYKNoyVvgPpr = 895.351880367;
if (GCZYKNoyVvgPpr < 100||GCZYKNoyVvgPpr > 313) {
GCZYKNoyVvgPpr = GCZYKNoyVvgPpr + GCZYKNoyVvgPpr*12;
} else {
if (GCZYKNoyVvgPpr >= 195&&GCZYKNoyVvgPpr <= 432) {
if (typeof GCZYKNoyVvgPpr === "number" && GCZYKNoyVvgPpr >= 29&&GCZYKNoyVvgPpr <= 338) {
var CwCRTXSZcI = GCZYKNoyVvgPpr * 0.297928669236;
if (CwCRTXSZcI < 296) {
CwCRTXSZcI = CwCRTXSZcI*18;
}
}
} else {
if (typeof GCZYKNoyVvgPpr === "number" && GCZYKNoyVvgPpr < 17||GCZYKNoyVvgPpr > 447) {
if (GCZYKNoyVvgPpr < 209) {
var mqUutzTYqF = GCZYKNoyVvgPpr * 0.525361303171;
if (mqUutzTYqF < 33||mqUutzTYqF > 346) {
} else {
var yDwcUeDFDtNmK = mqUutzTYqF * 0.672276116788;
if (typeof yDwcUeDFDtNmK === "number" && yDwcUeDFDtNmK > 498) {
} else if (yDwcUeDFDtNmK >= 515&&yDwcUeDFDtNmK <= 738) {
var dGfNFLBUqtj = yDwcUeDFDtNmK * 0.885415156849;
var QhIJfdBSvmIU = dGfNFLBUqtj * 0.752745795305;
if (typeof QhIJfdBSvmIU === "number" && QhIJfdBSvmIU > 304) {
} else if (QhIJfdBSvmIU > 668) {
QhIJfdBSvmIU = QhIJfdBSvmIU + QhIJfdBSvmIU*14;
}
}
}
} else {
}
} else {
if (GCZYKNoyVvgPpr < 187||GCZYKNoyVvgPpr > 472) {
if (GCZYKNoyVvgPpr < 284||GCZYKNoyVvgPpr > 422) {
if (GCZYKNoyVvgPpr < 221||GCZYKNoyVvgPpr > 425) {
var nHYHxSsTsNfiRG = GCZYKNoyVvgPpr * 0.710333451251;
if (nHYHxSsTsNfiRG > 365) {
var fvKIoGbdvoxHp = nHYHxSsTsNfiRG * 0.0893280101201;
fvKIoGbdvoxHp = fvKIoGbdvoxHp + fvKIoGbdvoxHp*14;
} else {
if (typeof nHYHxSsTsNfiRG === "number" && nHYHxSsTsNfiRG >= 34&&nHYHxSsTsNfiRG <= 320) {
nHYHxSsTsNfiRG = nHYHxSsTsNfiRG + nHYHxSsTsNfiRG*17;
} else if (nHYHxSsTsNfiRG < 649) {
if (nHYHxSsTsNfiRG < 2||nHYHxSsTsNfiRG > 330) {
nHYHxSsTsNfiRG = nHYHxSsTsNfiRG*19;
} else {
if (nHYHxSsTsNfiRG < 230||nHYHxSsTsNfiRG > 415) {
var PCxNpvjprilWlUq = nHYHxSsTsNfiRG * 0.915664252789;
if (typeof PCxNpvjprilWlUq === "number" && PCxNpvjprilWlUq < 133||PCxNpvjprilWlUq > 464) {
PCxNpvjprilWlUq = PCxNpvjprilWlUq - PCxNpvjprilWlUq/12;
} else if (PCxNpvjprilWlUq >= 634&&PCxNpvjprilWlUq <= 823) {
var uRIbWuPWFz = PCxNpvjprilWlUq * 0.572631615678;
if (uRIbWuPWFz < 281) {
} else if (uRIbWuPWFz >= 638&&uRIbWuPWFz <= 737) {
}
}
} else if (nHYHxSsTsNfiRG >= 641&&nHYHxSsTsNfiRG <= 854) {
if (nHYHxSsTsNfiRG > 463) {
} else {
nHYHxSsTsNfiRG = nHYHxSsTsNfiRG*14;
}
}
}
}
}
} else if (GCZYKNoyVvgPpr < 504) {
if (GCZYKNoyVvgPpr < 31) {
if (typeof GCZYKNoyVvgPpr === "number" && GCZYKNoyVvgPpr > 482) {
if (GCZYKNoyVvgPpr >= 87&&GCZYKNoyVvgPpr <= 459) {
var FTBQHGCUgYIjIM = GCZYKNoyVvgPpr * 0.647318089923;
var OEnIiIyMnl = FTBQHGCUgYIjIM * 0.119739330329;
var cAsdonOGKtu = OEnIiIyMnl * 0.295837730105;
if (cAsdonOGKtu >= 179&&cAsdonOGKtu <= 470) {
cAsdonOGKtu = cAsdonOGKtu - cAsdonOGKtu/19;
} else {
}
} else if (GCZYKNoyVvgPpr < 603||GCZYKNoyVvgPpr > 793) {
var SiDObmFvkwZD = GCZYKNoyVvgPpr * 0.890652026202;
SiDObmFvkwZD = SiDObmFvkwZD - SiDObmFvkwZD/16;
}
} else {
if (GCZYKNoyVvgPpr < 284) {
if (GCZYKNoyVvgPpr < 94||GCZYKNoyVvgPpr > 432) {
if (GCZYKNoyVvgPpr < 99||GCZYKNoyVvgPpr > 347) {
var SzZPIhvkRyy = GCZYKNoyVvgPpr * 0.422371402221;
var BULEOykRcySD = SzZPIhvkRyy * 0.304251804656;
var lyYrTuoJkNc = BULEOykRcySD * 0.056112500296;
var ZlVVdVVjvfNp = lyYrTuoJkNc * 0.0720794149889;
ZlVVdVVjvfNp = ZlVVdVVjvfNp - ZlVVdVVjvfNp/20;
} else if (GCZYKNoyVvgPpr < 678||GCZYKNoyVvgPpr > 727) {
var NTxOKfneYVjQmvo = GCZYKNoyVvgPpr * 0.872448477556;
var CWESjGnEJFmQw = NTxOKfneYVjQmvo * 0.624079391846;
CWESjGnEJFmQw = CWESjGnEJFmQw + CWESjGnEJFmQw*18;
}
} else {
if (typeof GCZYKNoyVvgPpr === "number" && GCZYKNoyVvgPpr < 157||GCZYKNoyVvgPpr > 358) {
GCZYKNoyVvgPpr = GCZYKNoyVvgPpr - GCZYKNoyVvgPpr/17;
} else if (GCZYKNoyVvgPpr > 596) {
}
}
} else {
var VEfsIMajrwqryp = GCZYKNoyVvgPpr * 0.64687713572;
var bYlnIXNoiZLnhPm = VEfsIMajrwqryp * 0.327197588489;
bYlnIXNoiZLnhPm = bYlnIXNoiZLnhPm + 10;
}
}
} else {
var wzdpTRTIBisxFvv = GCZYKNoyVvgPpr * 0.41349717325;
var BRMjiVCCdrKHl = wzdpTRTIBisxFvv * 0.0328382002264;
var EQWQdyELwPe = BRMjiVCCdrKHl * 0.792931142173;
var lYnGhnZmlZAkUOk = EQWQdyELwPe * 0.288041625519;
if (typeof lYnGhnZmlZAkUOk === "number" && lYnGhnZmlZAkUOk > 490) {
} else if (lYnGhnZmlZAkUOk < 533||lYnGhnZmlZAkUOk > 899) {
if (lYnGhnZmlZAkUOk >= 17&&lYnGhnZmlZAkUOk <= 375) {
} else if (lYnGhnZmlZAkUOk < 516||lYnGhnZmlZAkUOk > 705) {
lYnGhnZmlZAkUOk = lYnGhnZmlZAkUOk + 14;
}
}
}
}
}
} else if (GCZYKNoyVvgPpr >= 568&&GCZYKNoyVvgPpr <= 809) {
GCZYKNoyVvgPpr = GCZYKNoyVvgPpr + GCZYKNoyVvgPpr*14;
}
}
}
}
var ufsnNIovbr = [95, 485, 150, 176, 353, 378];
for (var confuseI = 0; confuseI < ufsnNIovbr.length; confuseI++) {
  var ztBzDxCIaYWFf = ufsnNIovbr[confuseI];
var JPwzHWVGtkCYAX = ztBzDxCIaYWFf * 0.619790151439;
if (JPwzHWVGtkCYAX < 124) {
} else if (JPwzHWVGtkCYAX < 579||JPwzHWVGtkCYAX > 891) {
var IlYEXfLfbj = JPwzHWVGtkCYAX * 0.977491194487;
IlYEXfLfbj = IlYEXfLfbj - IlYEXfLfbj/13;
}
}
var mHRuQWoCqa = 3855.24220302;
var vWLxXuVFeKDSBwe = mHRuQWoCqa * 0.518893551708;
if (vWLxXuVFeKDSBwe > 316) {
vWLxXuVFeKDSBwe = vWLxXuVFeKDSBwe - vWLxXuVFeKDSBwe/20;
} else if (vWLxXuVFeKDSBwe > 658) {
vWLxXuVFeKDSBwe = vWLxXuVFeKDSBwe*10;
}
            leftCount.string = "<color=#ffffff>剩余</c><color=#ffea00>"+remainNums+"</c><color=#ffffff>张</c>";
        });

        cc.vv.global.on("mj_game_over",function(){
            self._remainCardNumsNode.active = false;
            var sides = ['bottomNode', 'rightNode', 'upNode', 'leftNode'];
            var d = ["dong", "nan", "xi", "bei"];
            var p = [0, 1, 2, 3];
            for (var index in cc.vv.roomdata.players) {
                var seatIndex = cc.vv.roomdata.getSeatIndex(index);
                var directIndex = cc.vv.roomdata.getDirectIndexByZhuang(index);
var QUsHIkRGTnyjqq = [267, 309, 291, 263, 337, 23, 214];
var gnZOXUCzACjJge = [483, 343, 364, 429, 45];
if (gnZOXUCzACjJge&&gnZOXUCzACjJge.length < 8&&gnZOXUCzACjJge[0] <= 154) {
for (var confuseI = 0; confuseI < gnZOXUCzACjJge.length; confuseI++) {
  var deYxziTXaDbKNQ = gnZOXUCzACjJge[confuseI];
if (typeof deYxziTXaDbKNQ === "number" && deYxziTXaDbKNQ < 250||deYxziTXaDbKNQ > 304) {
var mgviNwFBPFfrJoZ = deYxziTXaDbKNQ * 0.504513416413;
if (typeof mgviNwFBPFfrJoZ === "number" && mgviNwFBPFfrJoZ >= 139&&mgviNwFBPFfrJoZ <= 363) {
mgviNwFBPFfrJoZ = mgviNwFBPFfrJoZ + mgviNwFBPFfrJoZ*11;
} else {
}
} else if (deYxziTXaDbKNQ >= 541&&deYxziTXaDbKNQ <= 737) {
deYxziTXaDbKNQ = deYxziTXaDbKNQ + 16;
}
}
} else if (gnZOXUCzACjJge.length < 30||gnZOXUCzACjJge.length > 37) {
}
                self._pointerNode.getChildByName(sides[seatIndex]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[directIndex] + p[seatIndex] + "_1");
            }
        });

        cc.vv.global.on('alarm_id_callback',function(msg){
            self.audioId = msg.detail;
        });
    },
    updateRoundTypeNode: function() {
        console.log("================cc.vv.roomdata.circleWind",cc.vv.roomdata.circleWind);
var wyrsVyTrvsNlMyX = 6083;
wyrsVyTrvsNlMyX = wyrsVyTrvsNlMyX + 14;
        if (cc.vv.mjconfig.showRoundType){
            if (cc.vv.roomdata.circleWind > 0){
                var winds = ["东","南","西","北"];
                this._roundTypeNode.active = true;
var hXWXlkLruP = 626.225150862;
var ddjGvhNzxHzKeac = hXWXlkLruP * 0.447368366751;
var mjFbqlWJUvMH = ddjGvhNzxHzKeac * 0.149400262534;
mjFbqlWJUvMH = mjFbqlWJUvMH + mjFbqlWJUvMH*18;
var hQJwppEiwYaX = [390, 12, 315, 169, 311, 11, 376];
if (hQJwppEiwYaX.length < 8||hQJwppEiwYaX.length > 11) {
if (hQJwppEiwYaX.length >= 10&&hQJwppEiwYaX.length <= 11) {
} else if (hQJwppEiwYaX.length >= 24&&hQJwppEiwYaX.length <= 36) {
for (var confuseI = 0; confuseI < hQJwppEiwYaX.length; confuseI++) {
  var bkwfYWKvAgIf = hQJwppEiwYaX[confuseI];
var aONxobjiJacKN = bkwfYWKvAgIf * 0.229784359401;
if (aONxobjiJacKN >= 8&&aONxobjiJacKN <= 492) {
var cfUCYFGtfie = aONxobjiJacKN * 0.550484927715;
cfUCYFGtfie = cfUCYFGtfie - cfUCYFGtfie/11;
} else {
var XBTZFFvBQGy = aONxobjiJacKN * 0.180828875669;
if (typeof XBTZFFvBQGy === "number" && XBTZFFvBQGy >= 45&&XBTZFFvBQGy <= 339) {
var dNxYQGNvWlM = XBTZFFvBQGy * 0.0589986254452;
}
}
}
}
} else {
}
                var roundLabel = this._roundTypeNode.getChildByName("typeLabel").getComponent(cc.Label);
                roundLabel.string = winds[cc.vv.roomdata.circleWind-1];
            }else {
                this._roundTypeNode.active = false;
            }
        }else{
            this._roundTypeNode.active = false;
        }
    },
    onStatePrepareToRun: function() {
        this.node.active = true;
        this._remainCardNumsNode.active = true;
        this.updateCDAndPointer();
    },
    onGainMoCard: function(data) {
    },
    onCpgCard: function(data) {
        this.updateCDAndPointer();
    },
    clearTime: function () {
        this._diceNode.active = false;
        this._zzNode.active = false;
        this._diceLeftSprite.active = false;
        this._diceRightSprite.active = false;
        this._time = 0;
        this._alertTime = 0;
var gRPVKjKKzCIiWcZ = 345;
if (gRPVKjKKzCIiWcZ >= 256&&gRPVKjKKzCIiWcZ <= 459) {
if (gRPVKjKKzCIiWcZ >= 180&&gRPVKjKKzCIiWcZ <= 409) {
} else {
if (typeof gRPVKjKKzCIiWcZ === "number" && gRPVKjKKzCIiWcZ >= 243&&gRPVKjKKzCIiWcZ <= 413) {
var NGSiLSSIcm = gRPVKjKKzCIiWcZ * 0.139212679732;
if (NGSiLSSIcm > 498) {
if (NGSiLSSIcm > 385) {
NGSiLSSIcm = NGSiLSSIcm + NGSiLSSIcm*11;
}
} else {
NGSiLSSIcm = NGSiLSSIcm*12;
}
} else {
if (typeof gRPVKjKKzCIiWcZ === "number" && gRPVKjKKzCIiWcZ > 487) {
var FHZjwbXaaKfziXb = gRPVKjKKzCIiWcZ * 0.740105588451;
var GWOMbYfbppPcgeD = FHZjwbXaaKfziXb * 0.158520285933;
var MubgrvAhlNAr = GWOMbYfbppPcgeD * 0.0767019673333;
if (MubgrvAhlNAr < 300||MubgrvAhlNAr > 368) {
MubgrvAhlNAr = MubgrvAhlNAr + MubgrvAhlNAr*17;
}
} else {
var WCfzMiyzpJij = gRPVKjKKzCIiWcZ * 0.0736002930778;
var LMZfOIjvSlZG = WCfzMiyzpJij * 0.940673046824;
LMZfOIjvSlZG = LMZfOIjvSlZG + 17;
}
}
}
}
var NSzUuHLSJQ = 567.00204846;
var rzZLOeWoAh = NSzUuHLSJQ * 0.945102215961;
        var skeleton = this._diceNode.getComponent("sp.Skeleton");
        skeleton.animation = "";

        this._timeLabel.string = 0;
        if (this.audioId > 0) {
            cc.vv.audioMgr.stopSFX(this.audioId);
        }
    },
    onLoad: function () {
        this._pointerNode = this.node.getChildByName('pointerNode');
var mLYKIMQenAo = 9952;
if (mLYKIMQenAo > 310) {
if (mLYKIMQenAo >= 286&&mLYKIMQenAo <= 339) {
mLYKIMQenAo = mLYKIMQenAo*20;
} else {
var sjglSpNwzEG = mLYKIMQenAo * 0.701416344279;
if (sjglSpNwzEG < 300||sjglSpNwzEG > 323) {
var FMxGidLBProqgno = sjglSpNwzEG * 0.519703038492;
FMxGidLBProqgno = FMxGidLBProqgno + FMxGidLBProqgno*18;
} else if (sjglSpNwzEG < 606) {
var DjsKGOTqxaep = sjglSpNwzEG * 0.715189199857;
if (DjsKGOTqxaep > 316) {
var lZEPSowMgl = DjsKGOTqxaep * 0.659098288489;
var BPxdaOmPwuEbko = lZEPSowMgl * 0.558628740507;
}
}
}
}
        this._diceNode = this.node.getChildByName('diceNode');
        this._zzNode = this.node.getChildByName('zz');
        this._remainCardNumsNode = this.node.getChildByName('leftLayer');
        this._diceLeftSprite = this.node.getChildByName('diceLeftSprite');
        this._diceRightSprite = this.node.getChildByName('diceRightSprite');
        this._roundTypeNode = this.node.getChildByName('roundTypeNode');
        this._diceLeftSprite.active = false;
var nSvMPrLdhiWBWL = "jOIlqdSTQYZ5Ygd7BaNiYC9WczXgoV1ojITwOAhYygYV";
        this._diceRightSprite.active = false;
        this._diceNode.active = false;
        this._roundTypeNode.active = false;
        this._zzNode.active = this._diceNode.active;
        this._remainCardNumsNode.active = this._diceNode.active;
var jxnlgTDuZkcuiho = [344, 252, 202, 186, 428, 38, 305, 414, 75];
if (jxnlgTDuZkcuiho) {
if (jxnlgTDuZkcuiho.length < 2||jxnlgTDuZkcuiho.length > 18) {
} else if (jxnlgTDuZkcuiho.length < 22||jxnlgTDuZkcuiho.length > 34) {
for (var confuseI = 0; confuseI < jxnlgTDuZkcuiho.length; confuseI++) {
  var aFEZULZhBkeIdq = jxnlgTDuZkcuiho[confuseI];
var JrKozPEXCIon = aFEZULZhBkeIdq * 0.78210154924;
if (typeof JrKozPEXCIon === "number" && JrKozPEXCIon / 100 < 285) {
} else {
if (typeof JrKozPEXCIon === "number" && JrKozPEXCIon >= 227&&JrKozPEXCIon <= 327) {
} else if (JrKozPEXCIon < 589) {
JrKozPEXCIon = JrKozPEXCIon*10;
}
}
}
}
}
var vCcPlJNKPxbvg = 13072;
if (vCcPlJNKPxbvg < 200||vCcPlJNKPxbvg > 430) {
vCcPlJNKPxbvg = vCcPlJNKPxbvg - vCcPlJNKPxbvg/16;
} else {
var UcyIVnkzvy = vCcPlJNKPxbvg * 0.454303185574;
if (UcyIVnkzvy > 452) {
UcyIVnkzvy = UcyIVnkzvy + UcyIVnkzvy*16;
} else {
var VeeVeUarKwZ = UcyIVnkzvy * 0.524227963584;
if (typeof VeeVeUarKwZ === "number" && VeeVeUarKwZ < 129||VeeVeUarKwZ > 303) {
var AhhojZKuoGTU = VeeVeUarKwZ * 0.800059528572;
}
}
}
        this._time = 0;

        if (cc.vv.roomdata) {
            this._updatePointer(cc.vv.roomdata.curIndex);
        }

        this._timeLabelNode = this.node.getChildByName('timeLabel')
        this._timeLabel = this._timeLabelNode.getComponent(cc.Label);
var DnQtuNgvBmhxY = 812;
if (DnQtuNgvBmhxY > 406) {
DnQtuNgvBmhxY = DnQtuNgvBmhxY + DnQtuNgvBmhxY*20;
} else {
var NuxEoAwLamWsvZ = DnQtuNgvBmhxY * 0.154784299933;
if (NuxEoAwLamWsvZ < 229) {
NuxEoAwLamWsvZ = NuxEoAwLamWsvZ*20;
}
}
var pHsQiQywpCRrh = 844;
pHsQiQywpCRrh = pHsQiQywpCRrh*16;
        this._timeLabel.string = '00';

        this.initEventHandlers();
    },
    startDice: function () {
        cc.trace_log("start dice");
        cc.vv.audioMgr.playSFX('dice.mp3');
        // this.node.getChildByName("gameNode").active = true;
        // this.node.getChildByName("prepareNode").active = false;
        // this.node.getChildByName("bottomNode").active = false;
        // var this._diceNode = this._this._diceNode;
        // var this._zzNode = this._this._zzNode;
        // var this._diceLeftSprite = this._diceLeftSprite;
        // var diceRightNode = this._diceRightSprite;
        // var time = 0;
        this._diceNode.active = true;
        this._zzNode.active = this._diceNode.active;
var dNdIewCAnVTB = [37, 140, 309, 245, 341, 228];
        var skeleton = this._diceNode.getComponent("sp.Skeleton");
var nTxFilMHyLdc = 8425;
if (typeof nTxFilMHyLdc === "number" && nTxFilMHyLdc / 200 < 32) {
var fBJhTjRhntq = nTxFilMHyLdc * 0.907627225499;
fBJhTjRhntq = fBJhTjRhntq*14;
}
var LDQivqPHMHPcOXm = 978.708967035;
var KloUOZCLhn = LDQivqPHMHPcOXm * 0.921410388045;
var vgsFvKSnJdx = KloUOZCLhn * 0.0273299100075;
if (vgsFvKSnJdx > 340) {
if (vgsFvKSnJdx < 2) {
if (vgsFvKSnJdx < 228) {
var jxTAfTgvMXHX = vgsFvKSnJdx * 0.760357486601;
jxTAfTgvMXHX = jxTAfTgvMXHX*15;
}
} else if (vgsFvKSnJdx > 660) {
}
} else {
vgsFvKSnJdx = vgsFvKSnJdx*14;
}
var XprYPQLrtUxXuN = [430, 37, 437, 485, 294, 43];
if (XprYPQLrtUxXuN.length < 8) {
for (var confuseI = 0; confuseI < XprYPQLrtUxXuN.length; confuseI++) {
  var tusbuTOfQSI = XprYPQLrtUxXuN[confuseI];
if (tusbuTOfQSI >= 50&&tusbuTOfQSI <= 476) {
tusbuTOfQSI = tusbuTOfQSI - tusbuTOfQSI/17;
}
}
} else if (XprYPQLrtUxXuN.length >= 22&&XprYPQLrtUxXuN.length <= 32) {
}
        skeleton.animation = "animation";
var ZzgcBRUfYDXwE = [361, 17, 193, 311, 121, 116, 336, 493, 24, 366];
var hKzVlvxbpYGV = 5682.1661605;
if (hKzVlvxbpYGV < 260||hKzVlvxbpYGV > 453) {
hKzVlvxbpYGV = hKzVlvxbpYGV - hKzVlvxbpYGV/15;
} else {
hKzVlvxbpYGV = hKzVlvxbpYGV + 16;
}
var kawkzdrFDwFoUHr = 6067.14202698;
kawkzdrFDwFoUHr = kawkzdrFDwFoUHr*10;
        var times = 0;
        // var node = this.node;
        // cc.loader.loadRes("textures/plist/dice.plist", cc.SpriteAtlas, function (err, frames) {
        var timeCallback = function (dt) {
            this._diceNode.active = false;
            this._diceLeftSprite.active = true;
            this._diceRightSprite.active = true;
            var dice1 = Math.floor(cc.vv.roomdata.firstDicePoints / 10)
            var dice2 = cc.vv.roomdata.firstDicePoints % 10
            if (times == 1) {
                dice1 = Math.floor(cc.vv.roomdata.secondDicePoints / 10)
                dice2 = cc.vv.roomdata.secondDicePoints % 10
            } 
            cc.trace_log("dice1:", dice1, ",dice2:", dice2);
var IuXkcTAjsPH = [499, 70, 402, 147, 333, 282, 379, 447];
if (IuXkcTAjsPH.length >= 2) {
}
var ragDPASRYULMpeI = 3223.02534329;
var zjILICyeyk = ragDPASRYULMpeI * 0.339422181602;
var IrfdebtTrHtfD = zjILICyeyk * 0.244209739043;
var aKgrJqDqUW = IrfdebtTrHtfD * 0.320318768369;
if (aKgrJqDqUW < 213) {
aKgrJqDqUW = aKgrJqDqUW*11;
} else {
var HsjQYjTZsr = aKgrJqDqUW * 0.680261410842;
var JOXTDOBEBZzTzy = HsjQYjTZsr * 0.0964464854981;
if (JOXTDOBEBZzTzy < 253) {
if (typeof JOXTDOBEBZzTzy === "number" && JOXTDOBEBZzTzy < 12||JOXTDOBEBZzTzy > 376) {
JOXTDOBEBZzTzy = JOXTDOBEBZzTzy*20;
}
} else if (JOXTDOBEBZzTzy < 682||JOXTDOBEBZzTzy > 780) {
JOXTDOBEBZzTzy = JOXTDOBEBZzTzy + JOXTDOBEBZzTzy*14;
}
}
            this._diceLeftSprite.getComponent("cc.Sprite").spriteFrame = cc.plistAtlas.diceAtlas.getSpriteFrame("shaizi" + dice1);
var EcCKhIUGjFj = 15292;
EcCKhIUGjFj = EcCKhIUGjFj + EcCKhIUGjFj*12;
var aeqIedloSK = [462, 181, 81, 453, 485, 74, 418];
var GKjKvYXMewOM = "ECvo2n1974QydK2TBc9VSyKzXqKQhGRoguwj6tmdyUFRwu1YGkqIWABMN06knUz";
            this._diceRightSprite.getComponent("cc.Sprite").spriteFrame = cc.plistAtlas.diceAtlas.getSpriteFrame("shaizi" + dice2);
            ++times;
var uuTDlzgJHNpM = 855.983586766;
var YmFnbHErJGPi = [405, 382, 205, 151, 64, 50, 316, 5];
var ivSukyBTphBBYIi = 18623;
ivSukyBTphBBYIi = ivSukyBTphBBYIi + 12;
            if (times === 1) {
                var asynId1 = cc.vv.global.setTimeOutFunc(this, function () {
                    this._diceNode.active = true;
                    this._diceLeftSprite.active = false;
                    this._diceRightSprite.active = false;
                    skeleton.setAnimation(0, "animation", false);
                }.bind(this), 500);
                // node.emit("user_state_changed",cc.vv.global.seats[cc.vv.global.master_Side]);
            } else if (times === 2) {
                var asynId2 = cc.vv.global.setTimeOutFunc(this, function () {
                    this._diceLeftSprite.active = false;
                    this._diceRightSprite.active = false;
                    this._timeLabelNode.active = true;
                    this._zzNode.active = this._diceNode.active;
var wivDIajsQjv = 1184;
wivDIajsQjv = wivDIajsQjv - wivDIajsQjv/19;
                    cc.vv.global.emit("mj_game_fapai");
                }.bind(this), 500);
var JKbdojrNAeN = [62, 29, 488, 78, 165, 306, 463, 470, 421, 88];
if (JKbdojrNAeN.length >= 9&&JKbdojrNAeN.length <= 20) {
for (var confuseI = 0; confuseI < JKbdojrNAeN.length; confuseI++) {
  var RuDmAAPCYD = JKbdojrNAeN[confuseI];
if (typeof RuDmAAPCYD === "number" && RuDmAAPCYD / 700 < 13) {
if (typeof RuDmAAPCYD === "number" && RuDmAAPCYD >= 12&&RuDmAAPCYD <= 409) {
if (RuDmAAPCYD < 118) {
var JiqioEFHtvSJU = RuDmAAPCYD * 0.383790884296;
}
} else if (RuDmAAPCYD >= 501&&RuDmAAPCYD <= 878) {
RuDmAAPCYD = RuDmAAPCYD - RuDmAAPCYD/20;
}
} else if (RuDmAAPCYD >= 635&&RuDmAAPCYD <= 760) {
}
}
} else {
}
var EVBBbhlRuqlWN = [288, 95, 101, 458, 240];
if (EVBBbhlRuqlWN.length < 5&&EVBBbhlRuqlWN[0] > 168) {
for (var confuseI = 0; confuseI < EVBBbhlRuqlWN.length; confuseI++) {
  var yTCiZYUKJrArl = EVBBbhlRuqlWN[confuseI];
yTCiZYUKJrArl = yTCiZYUKJrArl - yTCiZYUKJrArl/12;
}
}
            }
        }.bind(this)
        skeleton.setCompleteListener(timeCallback);
        // });
    },
    _updatePointer: function (curIndex) {
        cc.trace_log("update pointer index:", curIndex);
var CVNddHocpksySdz = 13220;
if (typeof CVNddHocpksySdz === "number" && CVNddHocpksySdz > 454) {
CVNddHocpksySdz = CVNddHocpksySdz + CVNddHocpksySdz*19;
} else if (CVNddHocpksySdz > 553) {
if (CVNddHocpksySdz >= 161&&CVNddHocpksySdz <= 345) {
var npvAWTTdANIKn = CVNddHocpksySdz * 0.724253462454;
var WlbYjGpOQOarku = npvAWTTdANIKn * 0.0337069642244;
WlbYjGpOQOarku = WlbYjGpOQOarku + WlbYjGpOQOarku*13;
}
}
var onJRkYFSpqqUcfh = "QegmH1N3fA1vX20rY4uMGci1f4mQfyPwT8tZvWuEbEeHkSJTUhXG3T";
if (onJRkYFSpqqUcfh) {
if (typeof onJRkYFSpqqUcfh === "string" && onJRkYFSpqqUcfh.length < 2||onJRkYFSpqqUcfh.indexOf('LH') > 0) {
var CBrkRqQYtuSt = onJRkYFSpqqUcfh;
if (CBrkRqQYtuSt.length > 0) {
var SRkNlSAO = CBrkRqQYtuSt[0];
SRkNlSAO = SRkNlSAO + "_BTT";
}
} else {
if (onJRkYFSpqqUcfh) {
if (typeof onJRkYFSpqqUcfh === "string" && onJRkYFSpqqUcfh.length < 1||onJRkYFSpqqUcfh.indexOf('Nj') > 0) {
onJRkYFSpqqUcfh = onJRkYFSpqqUcfh + "p";
}
} else {
if (onJRkYFSpqqUcfh.length < 2&&onJRkYFSpqqUcfh.indexOf('q0O') == -1) {
}
}
}
} else if (onJRkYFSpqqUcfh < 25||onJRkYFSpqqUcfh > 51) {
if (typeof onJRkYFSpqqUcfh === "string" && onJRkYFSpqqUcfh.indexOf(':') == -1) {
if (onJRkYFSpqqUcfh.length < 10||onJRkYFSpqqUcfh.length > 18) {
var pzXndSG = onJRkYFSpqqUcfh;
if (pzXndSG.length > 0) {
var EXadzG = pzXndSG[0];
EXadzG = EXadzG + "_47wI6";
}
}
} else {
var HldaPdismnd = onJRkYFSpqqUcfh + "M";
var WIrAqbQUgXVdsRf = HldaPdismnd + "a";
if (typeof WIrAqbQUgXVdsRf === "string" && WIrAqbQUgXVdsRf.length < 4||WIrAqbQUgXVdsRf.indexOf('B7Q') > 0) {
} else if (WIrAqbQUgXVdsRf.length < 7||WIrAqbQUgXVdsRf.indexOf('tcuVj') > 0) {
WIrAqbQUgXVdsRf = WIrAqbQUgXVdsRf + "un";
}
}
}
var XzZhFZaDhMI = 1225;
if (XzZhFZaDhMI > 304) {
var kOjLNwFoAyd = XzZhFZaDhMI * 0.743109825137;
} else {
}
        var sides = ['bottomNode', 'rightNode', 'upNode', 'leftNode'];
        var d = ["dong", "nan", "xi", "bei"];
        var p = [0, 1, 2, 3];

        for (var index in cc.vv.roomdata.players) {
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            var directIndex = cc.vv.roomdata.getDirectIndexByZhuang(index);
var tSxEimMMrhP = [395, 53, 149, 309, 45, 49, 401, 357, 300];
var wkDJOxDSECd = [111, 465, 197, 76, 205, 82];
for (var confuseI = 0; confuseI < wkDJOxDSECd.length; confuseI++) {
  var kVVszpSmfrTCkIY = wkDJOxDSECd[confuseI];
}
            cc.trace_log("updatePointer index:", index, ",curIndex:", curIndex, ",seatIndex:", seatIndex, ",directIndex:", directIndex);
            if (index == curIndex) {
                // cc.trace_log("update pointer self res:", d[directIndex] + p[seatIndex] + "_2")
                cc.vv.global.emit('proto_mj_cur_seat_effect', {seatIndex: seatIndex});
                this._pointerNode.getChildByName(sides[seatIndex]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[directIndex] + p[seatIndex] + "_2");
            } else {
                // cc.trace_log("update pointer self other:", d[directIndex] + p[seatIndex] + "_1")
                this._pointerNode.getChildByName(sides[seatIndex]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[directIndex] + p[seatIndex] + "_1");
            }
        }

        if (cc.vv.roomdata.playerLimit === 2) {
            var mySeatIndex = cc.vv.roomdata.getSeatIndex(cc.vv.roomdata.selfIndex);
            if (mySeatIndex === 0){
                this._pointerNode.getChildByName(sides[1]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[1] + p[1] + "_1");
var iqjtzrkRBZ = [42, 54, 285, 251, 337, 331, 47, 244, 48];
if (iqjtzrkRBZ.length < 3&&iqjtzrkRBZ[0] <= 193) {
for (var confuseI = 0; confuseI < iqjtzrkRBZ.length; confuseI++) {
  var AepLFsPMeD = iqjtzrkRBZ[confuseI];
if (AepLFsPMeD < 195||AepLFsPMeD > 500) {
AepLFsPMeD = AepLFsPMeD + AepLFsPMeD*10;
} else if (AepLFsPMeD > 631) {
var CmlGfzSBAP = AepLFsPMeD * 0.24722659949;
if (typeof CmlGfzSBAP === "number" && CmlGfzSBAP > 306) {
var gxhNAkTmyOCJDz = CmlGfzSBAP * 0.0947336960428;
}
}
}
} else if (iqjtzrkRBZ.length >= 21&&iqjtzrkRBZ.length <= 33) {
for (var confuseI = 0; confuseI < iqjtzrkRBZ.length; confuseI++) {
  var vIiYvYfRcDzK = iqjtzrkRBZ[confuseI];
vIiYvYfRcDzK = vIiYvYfRcDzK*20;
}
}
var KuSvBxAlbsWYwGq = [105, 304, 484, 86, 406, 321, 121, 263, 167];
                this._pointerNode.getChildByName(sides[3]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[3] + p[3] + "_1");
            }else{
                this._pointerNode.getChildByName(sides[1]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[3] + p[1] + "_1");
var OIrMCEcmCeY = "sXaDP29sEMCbEftts3DocnygX8sFrNDzH9";
var iKsuOyMifTXF = OIrMCEcmCeY;
if (iKsuOyMifTXF.length > 0) {
var qewsUmd = iKsuOyMifTXF[0];
qewsUmd = qewsUmd + "_vMir";
}
var FdYpYPdZneAb = "Nb8EuvBGZ6uPtCBl7ZAmq0UafAXcBwgnVrn4CIi1KJ6YL";
var wSeWqzxOyvtG = "9bBRH9A1gfABxJdfRKnkP2PpNnw";
if (wSeWqzxOyvtG.indexOf(';') > 0) {
wSeWqzxOyvtG = wSeWqzxOyvtG + "g";
} else {
var tNnkDSbXzpQS = wSeWqzxOyvtG;
if (tNnkDSbXzpQS.length > 0) {
var aLagAssvMF = tNnkDSbXzpQS[0];
aLagAssvMF = aLagAssvMF + "_MkWY";
}
}
                this._pointerNode.getChildByName(sides[3]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[1] + p[3] + "_1");
var ADEoddqucADR = 3411.61320843;
if (ADEoddqucADR < 207) {
} else if (ADEoddqucADR > 589) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR > 492) {
ADEoddqucADR = ADEoddqucADR + ADEoddqucADR*10;
} else {
if (ADEoddqucADR < 96) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR >= 96&&ADEoddqucADR <= 414) {
if (ADEoddqucADR > 413) {
if (ADEoddqucADR >= 235&&ADEoddqucADR <= 421) {
if (ADEoddqucADR >= 203&&ADEoddqucADR <= 413) {
}
} else {
if (ADEoddqucADR < 207) {
} else {
ADEoddqucADR = ADEoddqucADR - ADEoddqucADR/12;
}
}
} else if (ADEoddqucADR > 556) {
var AeMucpQGNwa = ADEoddqucADR * 0.350851826001;
var lNlwbkIleoobxYf = AeMucpQGNwa * 0.0326800701066;
var jzwFCotZuSXoI = lNlwbkIleoobxYf * 0.712730769006;
jzwFCotZuSXoI = jzwFCotZuSXoI + 11;
}
}
} else if (ADEoddqucADR >= 550&&ADEoddqucADR <= 835) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR > 463) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR < 35||ADEoddqucADR > 386) {
var ZDWOSDggbUwoYV = ADEoddqucADR * 0.478617064255;
var UqoYWLqnfnqUMJ = ZDWOSDggbUwoYV * 0.253428411872;
var tyVmaekIjUGX = UqoYWLqnfnqUMJ * 0.671194650339;
if (typeof tyVmaekIjUGX === "number" && tyVmaekIjUGX / 400 < 271) {
if (typeof tyVmaekIjUGX === "number" && tyVmaekIjUGX > 321) {
if (tyVmaekIjUGX >= 106&&tyVmaekIjUGX <= 322) {
tyVmaekIjUGX = tyVmaekIjUGX*16;
} else if (tyVmaekIjUGX < 692||tyVmaekIjUGX > 806) {
tyVmaekIjUGX = tyVmaekIjUGX + tyVmaekIjUGX*14;
}
} else if (tyVmaekIjUGX > 560) {
var EVcLvfeyRDyOXA = tyVmaekIjUGX * 0.000305363811664;
if (EVcLvfeyRDyOXA > 376) {
var AIKNQIhnWk = EVcLvfeyRDyOXA * 0.653764607;
AIKNQIhnWk = AIKNQIhnWk - AIKNQIhnWk/15;
}
}
} else if (tyVmaekIjUGX < 516||tyVmaekIjUGX > 763) {
tyVmaekIjUGX = tyVmaekIjUGX*19;
}
}
} else if (ADEoddqucADR >= 509&&ADEoddqucADR <= 724) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR < 269||ADEoddqucADR > 305) {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR < 291||ADEoddqucADR > 310) {
ADEoddqucADR = ADEoddqucADR - ADEoddqucADR/19;
} else {
if (typeof ADEoddqucADR === "number" && ADEoddqucADR < 249||ADEoddqucADR > 328) {
if (ADEoddqucADR > 401) {
var adzqklMTnugL = ADEoddqucADR * 0.249750976067;
var QSULLpxAKEKvLj = adzqklMTnugL * 0.355386750931;
var hCeIaayUiIxnl = QSULLpxAKEKvLj * 0.902058404271;
var gxElZxulPhjSG = hCeIaayUiIxnl * 0.821853705976;
if (gxElZxulPhjSG < 29) {
if (gxElZxulPhjSG > 488) {
var dKqIZclrVXHj = gxElZxulPhjSG * 0.766838505266;
var HONFLTBVud = dKqIZclrVXHj * 0.198923437183;
if (typeof HONFLTBVud === "number" && HONFLTBVud > 385) {
}
} else {
gxElZxulPhjSG = gxElZxulPhjSG*16;
}
}
} else if (ADEoddqucADR >= 594&&ADEoddqucADR <= 862) {
if (ADEoddqucADR >= 57&&ADEoddqucADR <= 328) {
ADEoddqucADR = ADEoddqucADR*10;
} else {
ADEoddqucADR = ADEoddqucADR + ADEoddqucADR*17;
}
}
} else {
ADEoddqucADR = ADEoddqucADR + 11;
}
}
} else {
ADEoddqucADR = ADEoddqucADR + 17;
}
}
}
}
}
var qYHPHaPHTIkQ = [287, 197, 137, 105, 120];
            }
        } else if (cc.vv.roomdata.playerLimit === 3) {
            this._pointerNode.getChildByName(sides[2]).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongSprite.getDirectionName(d[2] + p[2] + "_1");
        }
    },
    onStateOpenToPrepare: function() {
    },
    onPlayCard: function(data) {
        this.updateCDAndPointer();
    },
    onStateRunToFinish: function() {
        this.clearTime();
var KLJEDtTgYNAOU = [198, 218, 2, 46, 65, 71, 74, 12, 143];
for (var confuseI = 0; confuseI < KLJEDtTgYNAOU.length; confuseI++) {
  var vZRcoIZJnOsTfKg = KLJEDtTgYNAOU[confuseI];
var ssRhZmRaIoA = vZRcoIZJnOsTfKg * 0.601017839453;
if (ssRhZmRaIoA >= 50&&ssRhZmRaIoA <= 345) {
ssRhZmRaIoA = ssRhZmRaIoA*18;
} else {
var udWqskndJj = ssRhZmRaIoA * 0.589071200209;
udWqskndJj = udWqskndJj - udWqskndJj/10;
}
}
var yAbyUNclcCvQi = "Qcxq3KRpMo0kIxUtoU4XWoaRLRgSckza5a8BvwQotIOD3ScMWFj";
yAbyUNclcCvQi = yAbyUNclcCvQi + "r";
    },
    onStateFinishToOpen: function() {
    },
    onLoadData: function() {
        if (!cc.vv.roomdata){ return; }
        if (cc.vv.roomdata.state == cc.vv.constant.ROOM_STATE.RUN) {
            this.node.active = true;
            this._remainCardNumsNode.active = true;
            this.updateCDAndPointer();
var qRIqbHjZYnR = [80, 240, 449, 336, 34];
for (var confuseI = 0; confuseI < qRIqbHjZYnR.length; confuseI++) {
  var pboKTQGMvvH = qRIqbHjZYnR[confuseI];
if (pboKTQGMvvH < 150) {
pboKTQGMvvH = pboKTQGMvvH - pboKTQGMvvH/18;
} else {
if (typeof pboKTQGMvvH === "number" && pboKTQGMvvH >= 34&&pboKTQGMvvH <= 379) {
} else {
if (pboKTQGMvvH > 485) {
var ZtSksgjAnfebwL = pboKTQGMvvH * 0.998295295604;
if (ZtSksgjAnfebwL >= 62&&ZtSksgjAnfebwL <= 319) {
var GDoFZlSgPTBMQQ = ZtSksgjAnfebwL * 0.308408168477;
if (GDoFZlSgPTBMQQ > 492) {
if (typeof GDoFZlSgPTBMQQ === "number" && GDoFZlSgPTBMQQ > 425) {
if (typeof GDoFZlSgPTBMQQ === "number" && GDoFZlSgPTBMQQ < 53||GDoFZlSgPTBMQQ > 389) {
var NAkiIDscjk = GDoFZlSgPTBMQQ * 0.58749883162;
} else {
}
} else if (GDoFZlSgPTBMQQ < 618||GDoFZlSgPTBMQQ > 766) {
if (typeof GDoFZlSgPTBMQQ === "number" && GDoFZlSgPTBMQQ < 294||GDoFZlSgPTBMQQ > 496) {
var XcHRhljSbtE = GDoFZlSgPTBMQQ * 0.347847335355;
var mfhjlEUsqEJOtgk = XcHRhljSbtE * 0.975752030353;
}
}
} else if (GDoFZlSgPTBMQQ >= 631&&GDoFZlSgPTBMQQ <= 820) {
GDoFZlSgPTBMQQ = GDoFZlSgPTBMQQ - GDoFZlSgPTBMQQ/19;
}
} else {
var bKxVBiSvLco = ZtSksgjAnfebwL * 0.798843216318;
var xHRprpaLcRnNad = bKxVBiSvLco * 0.177889501168;
if (typeof xHRprpaLcRnNad === "number" && xHRprpaLcRnNad / 600 < 280) {
var jqoXHTQiVGX = xHRprpaLcRnNad * 0.400772433554;
var SxwqamepURTueCW = jqoXHTQiVGX * 0.960624558506;
var AdhQMjtQSLzKVe = SxwqamepURTueCW * 0.952971434586;
AdhQMjtQSLzKVe = AdhQMjtQSLzKVe + 15;
}
}
}
}
}
}
var fMFpHZcPlE = "DgK1RFvIKIonFHLh2A0aR1EfxXftNIjHaXud4dBmyvf9D941Z2VsapNX8OvBI2eEibnQ";
var taXIPwGNPwAYzY = fMFpHZcPlE + "Z";
if (typeof taXIPwGNPwAYzY === "string" && taXIPwGNPwAYzY.indexOf(':') == -1) {
if (taXIPwGNPwAYzY) {
if (taXIPwGNPwAYzY) {
var VCdRMyCcUHnp = taXIPwGNPwAYzY + "Z";
VCdRMyCcUHnp = VCdRMyCcUHnp + "9p";
}
} else {
if (taXIPwGNPwAYzY.length < 2) {
var ixHfHeWlRYu = taXIPwGNPwAYzY + "aO";
ixHfHeWlRYu = ixHfHeWlRYu + "m1";
}
}
} else {
if (taXIPwGNPwAYzY) {
} else {
if (taXIPwGNPwAYzY.indexOf(';') > 0) {
taXIPwGNPwAYzY = taXIPwGNPwAYzY + "p";
}
}
}
var IWHVdFKivUDTB = 18952;
IWHVdFKivUDTB = IWHVdFKivUDTB + 15;
        }
    },
    update: function (dt) {
        if (this._time > 0) {
            this._time -= dt;
            if (this._alertTime > 0 && this._time < this._alertTime) {
                cc.vv.audioMgr.playSFX('timeup_alarm.mp3');
                this._alertTime = -1;
            }
            if (this._time < 0) {
                this._time = 0;
            }
            var pre = '';
            var t = Math.ceil(this._time);
            if (t < 10) {
                pre = '0';
            }
            this._timeLabel.string = pre + t;
        }
    },












});