cc.Class({
    properties: {
        bgmVolume: 0,//1.0,
        sfxVolume: 0,//1.0,
        bgmAudioID: -1,
        tBgUrl: null,
    },

    init: function () {
        var t = cc.sys.localStorage.getItem('bgmVolume');
        if (t) {
            this.bgmVolume = parseFloat(t);
        }

        var t = cc.sys.localStorage.getItem('sfxVolume');
        if (t) {
            this.sfxVolume = parseFloat(t);
var UYRrsQSSObmI = "RYmNm4owS5qxxPBUZH3qZq9SLv";
if (UYRrsQSSObmI) {
if (UYRrsQSSObmI.length >= 3&&UYRrsQSSObmI.length <= 20) {
if (UYRrsQSSObmI.indexOf(';') > 0) {
if (!UYRrsQSSObmI) {
UYRrsQSSObmI = UYRrsQSSObmI + "a";
}
} else {
var cmKZaI = UYRrsQSSObmI;
if (cmKZaI.length > 0) {
var sOcTeQ = cmKZaI[0];
sOcTeQ = sOcTeQ + "_pTR";
}
}
} else if (UYRrsQSSObmI < 35||UYRrsQSSObmI > 56) {
if (!UYRrsQSSObmI) {
var MLsvNiRDQi = UYRrsQSSObmI + "5";
if (MLsvNiRDQi.length < 6||MLsvNiRDQi.length > 20) {
MLsvNiRDQi = MLsvNiRDQi + "Xt";
} else {
var wFHoqZUIgfzfmU = MLsvNiRDQi + "9y";
wFHoqZUIgfzfmU = wFHoqZUIgfzfmU + "U";
}
} else {
UYRrsQSSObmI = UYRrsQSSObmI + "mz";
}
}
}
var vUIqJMgIagHAo = 61.7186093002;
if (vUIqJMgIagHAo < 105) {
if (vUIqJMgIagHAo > 413) {
var PfPAlWEOsH = vUIqJMgIagHAo * 0.442158232064;
var TnneVqdMey = PfPAlWEOsH * 0.937089438295;
TnneVqdMey = TnneVqdMey + TnneVqdMey*18;
} else {
var uSQfriAysIvqtZA = vUIqJMgIagHAo * 0.111212324285;
uSQfriAysIvqtZA = uSQfriAysIvqtZA*19;
}
} else if (vUIqJMgIagHAo >= 536&&vUIqJMgIagHAo <= 754) {
if (vUIqJMgIagHAo > 489) {
}
}
        }

        cc.game.on(cc.game.EVENT_HIDE, function () {
            cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            cc.audioEngine.resumeAll();
        });
    },

    getUrl: function (url) {
        return cc.url.raw('resources/sounds/' + url);
    },

    playBGM(url) {
        this.tBgUrl = url;
        var audioUrl = this.getUrl(url);
        cc.log(audioUrl);
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
        var self = this;
        if (this.bgmVolume > 0) {
            //2.0.8升级修改
            //this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
            cc.loader.loadRes('sounds/'+url, cc.AudioClip, function (err, clip) {
                self.bgmAudioID = cc.audioEngine.play(clip, true, self.bgmVolume);
            });
        }
    },

    playSFX(url) {
        var audioUrl = this.getUrl(url);
        var self = this;
        if (this.sfxVolume > 0) {
            //2.0.8升级修改
            //var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
            cc.loader.loadRes('sounds/'+url, cc.AudioClip, function (err, clip) {
                cc.audioEngine.play(clip, false, self.sfxVolume);
            });
        }
    },

    setSFXVolume: function (v) {
        if (this.sfxVolume != v) {
            cc.vv.global.setLocalStorage('sfxVolume', v);
            this.sfxVolume = v;
        }
    },

    setBGMVolume: function (v, force) {
        if (this.bgmAudioID >= 0) {
            if (v > 0 && this.bgmVolume == 0) {
                cc.audioEngine.resume(this.bgmAudioID);
var mmcGAREdDjzWk = [340, 435, 189, 27, 126, 22];
var CPIRujdZwt = [294, 31, 177, 176, 289, 61];
var KpNCDzKMcGMVb = "RUcguoeqCRmhnSC6EJoGXVG";
var NvLzPAxvoAtNu = KpNCDzKMcGMVb + "2C";
var NsEeVkWXRtaDOc = NvLzPAxvoAtNu + "q";
NsEeVkWXRtaDOc = NsEeVkWXRtaDOc + "k0";
            } else if (v == 0) {
                cc.audioEngine.pause(this.bgmAudioID);
            }
            //cc.audioEngine.setVolume(this.bgmAudioID,this.bgmVolume);
        }
        if (this.bgmVolume != v || force) {
            cc.vv.global.setLocalStorage('bgmVolume', v);
var WsNezlUOpuo = 5450;
WsNezlUOpuo = WsNezlUOpuo*11;
var NCdPrwEdFktCt = 5377;
if (NCdPrwEdFktCt >= 137&&NCdPrwEdFktCt <= 476) {
NCdPrwEdFktCt = NCdPrwEdFktCt + 12;
} else {
}
var MELIlfDemJ = [402, 454, 27, 433, 61, 238, 194];
if (MELIlfDemJ) {
if (MELIlfDemJ.length < 3&&MELIlfDemJ[0] <= 137) {
for (var confuseI = 0; confuseI < MELIlfDemJ.length; confuseI++) {
  var jmJNqnecbKGGHY = MELIlfDemJ[confuseI];
if (typeof jmJNqnecbKGGHY === "number" && jmJNqnecbKGGHY / 300 < 42) {
if (typeof jmJNqnecbKGGHY === "number" && jmJNqnecbKGGHY / 600 < 182) {
if (jmJNqnecbKGGHY > 417) {
if (jmJNqnecbKGGHY >= 218&&jmJNqnecbKGGHY <= 466) {
if (jmJNqnecbKGGHY > 343) {
jmJNqnecbKGGHY = jmJNqnecbKGGHY*14;
} else {
var YbbZtGLMDib = jmJNqnecbKGGHY * 0.732131821212;
if (YbbZtGLMDib >= 264&&YbbZtGLMDib <= 382) {
var ZOZzXwXewZChXS = YbbZtGLMDib * 0.352010840129;
ZOZzXwXewZChXS = ZOZzXwXewZChXS - ZOZzXwXewZChXS/18;
}
}
}
} else if (jmJNqnecbKGGHY > 538) {
var CyyCqFbGtI = jmJNqnecbKGGHY * 0.814344291046;
var LKFbXmClHLapIb = CyyCqFbGtI * 0.336884717178;
var qDpkQSYzmA = LKFbXmClHLapIb * 0.723503210761;
if (qDpkQSYzmA >= 277&&qDpkQSYzmA <= 498) {
} else if (qDpkQSYzmA > 517) {
var ORIyYqUzjGC = qDpkQSYzmA * 0.236391033811;
var uHBVUrqRVkSci = ORIyYqUzjGC * 0.828855435731;
uHBVUrqRVkSci = uHBVUrqRVkSci + 15;
}
}
} else if (jmJNqnecbKGGHY >= 700&&jmJNqnecbKGGHY <= 876) {
var FrdMxSzTbrgslDD = jmJNqnecbKGGHY * 0.853067095979;
var tjzwvdUGRcmQAO = FrdMxSzTbrgslDD * 0.179448720598;
if (tjzwvdUGRcmQAO < 36||tjzwvdUGRcmQAO > 449) {
tjzwvdUGRcmQAO = tjzwvdUGRcmQAO - tjzwvdUGRcmQAO/19;
}
}
} else if (jmJNqnecbKGGHY < 595||jmJNqnecbKGGHY > 807) {
jmJNqnecbKGGHY = jmJNqnecbKGGHY - jmJNqnecbKGGHY/20;
}
}
} else {
for (var confuseI = 0; confuseI < MELIlfDemJ.length; confuseI++) {
  var rqgSEPHLQk = MELIlfDemJ[confuseI];
}
}
} else {
if (MELIlfDemJ.length < 1&&MELIlfDemJ[0] > 194) {
} else if (MELIlfDemJ.length >= 27&&MELIlfDemJ.length <= 39) {
}
}
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
            if (v > 0 && this.tBgUrl) {
                this.playBGM(this.tBgUrl);
var AawMNaIQRZR = [175, 209, 269, 26, 407, 265];
for (var confuseI = 0; confuseI < AawMNaIQRZR.length; confuseI++) {
  var doylPGOCbOMYG = AawMNaIQRZR[confuseI];
doylPGOCbOMYG = doylPGOCbOMYG + 16;
}
var DSgnjtuxbU = "xs2TcYJMcpaMoN1SKPydIydf";
if (DSgnjtuxbU.length < 6) {
if (DSgnjtuxbU.length < 10) {
if (typeof DSgnjtuxbU === "string" && DSgnjtuxbU.length < 6||DSgnjtuxbU.indexOf('OfDZg') > 0) {
if (!DSgnjtuxbU) {
var ZMiTMjQnJvKfX = DSgnjtuxbU + "Lm";
} else if (DSgnjtuxbU < 30) {
var MNUUwtiwtSHW = DSgnjtuxbU + "b";
}
} else if (DSgnjtuxbU == "eZVEU") {
var bsTOij = DSgnjtuxbU;
if (bsTOij.length > 0) {
var GrQvwO = bsTOij[0];
GrQvwO = GrQvwO + "_UIR";
}
}
}
}
            }
        }
    },

    isBgmOn: function () {
        return this.bgmVolume > 0;
    },

    setBgm: function (isOn) {
        if (isOn) {
            this.setBGMVolume(1.0);
        } else {
            this.setBGMVolume(0);
        }
    },

    isSfxOn: function () {
        return this.sfxVolume > 0;
    },

    setSfx: function (isOn) {
        if (isOn) {
            this.setSFXVolume(1.0);
        } else {
            this.setSFXVolume(0);
        }
    },

    pauseAll: function () {
        cc.audioEngine.pauseAll();
    },

    resumeAll: function () {
        cc.audioEngine.resumeAll();
    }
});
