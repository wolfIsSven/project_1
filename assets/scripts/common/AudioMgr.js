cc.Class({
    extends: cc.Component,

    properties: {
        bgmVolume: 0.0,//1.0,
        sfxVolume: 0.0,//1.0,
        bgmAudioID: -1,
        tBgUrl: null,
    },

    init: function () {
        var t = cc.sys.localStorage.getItem('bgmVolume');
        if (t) {
            this.bgmVolume = parseFloat(t);
        }else{
            this.bgmVolume = parseFloat(1.0);
        }
        
        var t = cc.sys.localStorage.getItem('sfxVolume');
        if (t) {
            this.sfxVolume = parseFloat(t);
        }else{
            this.sfxVolume = parseFloat(1.0);
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
        cc.info_log(audioUrl);
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

    stopBGM() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
        }
    },

    playSFX(url) {
        var audioUrl = this.getUrl(url);
        cc.trace_log("Voice playSFX, url:", url);
        var self = this;
        if (this.sfxVolume > 0) {
            //2.0.8升级修改
            //var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
            cc.loader.loadRes('sounds/'+url, cc.AudioClip, function (err, clip) {
                var audioId = cc.audioEngine.play(clip, false, self.sfxVolume);
                cc.trace_log("Voice playSFX, audioId:", audioId);
                cc.vv.global.emit("alarm_id_callback", audioId);
            });
        }
    },

    stopSFX: function(audioId) {
        if (audioId > 0) {
            cc.audioEngine.stop(audioId); 
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
            } else if (v == 0) {
                cc.audioEngine.pause(this.bgmAudioID);
            }
            //cc.audioEngine.setVolume(this.bgmAudioID,this.bgmVolume);
        }
        if (this.bgmVolume != v || force) {
            cc.vv.global.setLocalStorage('bgmVolume', v);
            this.bgmVolume = v;
            cc.audioEngine.setVolume(this.bgmAudioID, v);
            if (v > 0 && this.tBgUrl) {
                this.playBGM(this.tBgUrl);
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
