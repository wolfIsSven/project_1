cc.Class({
    extends: cc.Component,

    properties: {
        _voiceNode: null,
        _volumeNode: null,
        _timeBar: null,
        _lastTouchTime: null,
        _lastCheckTime: -1,
        MAX_TIME: 15000,
    },

    onLoad: function () {
        this.node.active = false;
        this._timeBar = this.node.getChildByName('timeNode');
        this._timeBar.scaleX = 0.0;

        this._volumeNode = this.node.getChildByName('volumeNode');
        for (var i = 1; i < this._volumeNode.children.length; ++i) {
            this._volumeNode.children[i].active = false;
        }

        var parent = this.node.parent;

        var self = this;
        var btnVoice = null;
        if (cc.vv.global.gamestate === "MJGame") {
            btnVoice = parent.getChildByName('rightNode').getChildByName('voiceBtn');
        } else {
            btnVoice = parent.getChildByName('voiceBtn');
        }
        if (cc.vv.config.PLATFORM.type === 0 || cc.vv.WEIXIN) {
            btnVoice.active = true;
        } else {
            btnVoice.active = false;
        }
        if (cc.cache.replay.isReplay()) {
            btnVoice.active = false;
        }

        if (btnVoice) {
            btnVoice.on(cc.Node.EventType.TOUCH_START, function () {
                cc.vv.audioTest = true;
                if (cc.vv.WEIXIN) {
                    //微信
                    // wx.startRecord();
                    window.top.postMessage({ "api": "startRecord", "params": "" }, "*");
                    cc.log("startRecord");
                } else if (cc.vv.config.PLATFORM.type === 2) {
                    // wx.startRecord();
                    var options = {
                        duration: 10000,
                        sampleRate: 44100,
                        numberOfChannels: 1,
                        encodeBitRate: 192000,
                        format: 'aac',
                        frameSize: 50
                    }
                    wx.getRecorderManage().start(options);

                } else {
                    cc.vv.voiceMgr.prepare('record.amr');
                }
                self._lastTouchTime = Date.now();
                self._voiceNode.active = true;
            });

            btnVoice.on(cc.Node.EventType.TOUCH_MOVE, function () {
            });

            btnVoice.on(cc.Node.EventType.TOUCH_END, function () {
                if (Date.now() - self._lastTouchTime < 1000) {
                    cc.vv.global.alert(cc.vv.lang.LANG_DESC.Tips, cc.vv.lang.LANG_DESC.LessOneSecond, null, false);
                    self._voiceNode.active = false;
                    if (cc.vv.WEIXIN) {
                        // wx.stopRecord();
                        window.top.postMessage({ "api": "cancelRecord", "params": "" }, "*");
                    } else if (cc.vv.config.PLATFORM.type === 2) {
                        // wx.stopRecord();
                        wx.getRecorderManage().stop();
                    } else {
                        cc.vv.voiceMgr.cancel();
                    }
                } else {
                    self.onVoiceOK();
                }
                self._lastTouchTime = null;
            });

            btnVoice.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                if (cc.vv.WEIXIN) {
                    // wx.stopRecord();
                    window.top.postMessage({ "api": "cancelRecord", "params": "" }, "*")
                } else if (cc.vv.config.PLATFORM.type === 2) {
                    // wx.stopRecord();
                    wx.getRecorderManage().stop();
                } else {
                    cc.vv.voiceMgr.cancel();
                }
                self._lastTouchTime = null;
                self._voiceNode.active = false;
            });
        }
    },
    onVoiceOK: function () {
        if (this._lastTouchTime != null) {
            if (cc.vv.WEIXIN) {
                window.top.postMessage({ "api": "stopRecord", "params": "" }, "*")
            } else if (cc.vv.config.PLATFORM.type === 2) {
                var localId;
                // wx.stopRecord({
                //     success: function (res) {
                //         localId = res.localId;
                //         wx.uploadVoice({
                //             localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                //             isShowProgressTips: 0,// 默认为1，显示进度提示
                //             success: function (res) {
                //                 var serverId = res.serverId; // 返回音频的服务器端ID
                //                 cc.log("serverId="+serverId);
                //                 // cc.vv.net.send('weixin_serverId', {serverId: serverId});
                //                 if(cc.vv.global.gamestate === "MJGame"){
                //                     var info = {type:1,data:serverId};
                //                     cc.vv.protobuf.sendMessage(1201,{type:1201,data_Id:JSON.parse(info)});
                //                 }else{
                //                     var message = JSON.stringify({type:3,message:"",voice:serverId});
                //                     cc.vv.protobuf.sendMessage(1613,{type:1613,receivedRoleId:cc.vv.friendMgr._curFriendRoleId,message:message});
                //                 }
                //             }
                //         });
                //     }
                // });
            } else {
                cc.vv.voiceMgr.release();
                var time = Date.now() - this._lastTouchTime;
                var msg = cc.vv.voiceMgr.getVoiceData('record.amr');
                // cc.vv.net.send('voice_msg', { msg: msg, time: time });
            }
        }
        this._voiceNode.active = false;
    },
    update: function (dt) {
        if (this._voiceNode.active == true) {
            if (Date.now() - this._lastCheckTime > 300) {
                for (var i = 0; i < this._volumeNode.children.length; ++i) {
                    this._volumeNode.children[i].active = false;
                }
                var v = cc.vv.voiceMgr.getVoiceLevel(7);
                if (v >= 1 && v <= 7) {
                    this._volumeNode.children[v - 1].active = true;
                }
                this._lastCheckTime = Date.now();
            }
        }

        if (this._lastTouchTime) {
            var time = Date.now() - this._lastTouchTime;
            if (time >= this.MAX_TIME) {
                this.onVoiceOK();
                this._lastTouchTime = null;
            } else {
                var percent = time / this.MAX_TIME;
                this._timeBar.scaleX = 1 - percent;
            }
        }
    }


});
