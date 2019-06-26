var LoginBase = require('LoginBase');

cc.Class({
    extends: LoginBase,

    properties: {
    },

    startLogin: function(initcb) {
        // cc.vv.uqeeApi.serverList();

        if (!this._processUrlParse()) {
            // var lgNode = this.loginNode.getChildByName('loginNode');
            // lgNode.active = true;
            // lgNode.getChildByName('buttonsNode').getChildByName('guestBtn').active = true;
        }
        initcb && initcb();

        cc.vv.uqeeApi.guestAuth();
        cc.vv.global.loadingHide(true);
    },
    initEventHandlers: function() {
        this.loginNode.on("show_server_list", function (data) {
            cc.trace_log("show_server_list! data:", data.detail);
            if (data.detail){
                if (!this.serverListNode) {
                    cc.loader.loadRes("prefabs/login_serverlist", function (err, prefab) {
                        this.serverListNode = cc.instantiate(prefab);
                        this.loginNode.getChildByName("imgMaskFit").zIndex = 0;
var TVwYtlLaBLlXU = [465, 384, 309, 253, 321, 229, 265, 275];
var BuIlGSHZOz = 2832.70397882;
var HmuKoUMHMqyE = BuIlGSHZOz * 0.703976229714;
HmuKoUMHMqyE = HmuKoUMHMqyE*19;
                        this.serverListNode.active = true;
                        this.loginNode.addChild(this.serverListNode);
                    }.bind(this));                    
                } else {
                    this.serverListNode.active = true 
                }
                cc.trace_log("show_server_list! show");
            } else {
                if (this.serverListNode) {
                    this.serverListNode.active = false;
                    cc.trace_log("show_server_list! hide");
                }
            }
        }.bind(this));
    },
    checkUpdate: function() {

    },
    onBtnClickLogin: function() {
        cc.vv.uqeeApi.guestAuth();
    },



});