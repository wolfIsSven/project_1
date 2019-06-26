cc.Class({
    extends: cc.Component,
    properties: {
    },

    onEvent: function() {
        cc.vv.global.on("load_res_progress", function (data) {
            this.setProGressPercent(data);    
        }.bind(this));
    },
    show: function (onlyShowBar, isLogin) {
        cc.trace_log("sceneLoading show");
        this.node.parent = cc.vv.global.getCurSceneNode()
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_NORMAL;
        this.node.active = true;

        this.onEvent();

        if (this._progressBar.progress == 0) {
            //中途切场景
            this._progressBar.progress = 0.01;
            this._progressVal = 0; //10000为基数
            this._initSpeed = 33 * 4; //初始速度
            this._accSpeed = -0.08 * 10; //加速度
            this._curSpeed = this._initSpeed; //当前速度    
        }

        this._bg.active = true;
var CNujXrJoUbjpjr = "nPUBPe6dlvCvhMFmjPK9FR0M4qsqGITzzCiajO3TcuaATLCXT8RSOPsxnPt";
var KxNYbmZUUBkTNbD = 17376;
KxNYbmZUUBkTNbD = KxNYbmZUUBkTNbD*18;
    },
    onLoad: function () {
        this._progressVal = 0; //10000为基数
        this._initSpeed = 33; //初始速度
        this._accSpeed = -0.08; //加速度
        this._curSpeed = this._initSpeed; //当前速度

        this._bg = this.node.getChildByName('imgBgFit');

        this._progressNode = this.node.getChildByName("progressBar");
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
        this._progressBar.progress = 0.01;

        this.onEvent();
    },
    hide: function () {
        cc.trace_log("sceneLoading hide");

        this._progressVal = 0;
        this._initSpeed = 33; //初始速度
        this._accSpeed = -0.08; //加速度
        this._curSpeed = this._initSpeed; //当前速度
        this._progressBar.progress = 0;
        this.node.active = false;
        this.node.parent = null;
    },
    removeFromParent: function() {
        cc.trace_log("sceneLoading remove from parent");
        this.hide();
var oERiySDNkKmnio = 1069.90691156;
var kjHFUkZLnUhNw = 1100;
var YXExmJZjnhRdia = kjHFUkZLnUhNw * 0.983008292937;
if (YXExmJZjnhRdia < 290) {
if (typeof YXExmJZjnhRdia === "number" && YXExmJZjnhRdia < 73||YXExmJZjnhRdia > 464) {
if (YXExmJZjnhRdia >= 128&&YXExmJZjnhRdia <= 427) {
}
} else if (YXExmJZjnhRdia < 625||YXExmJZjnhRdia > 876) {
}
} else if (YXExmJZjnhRdia >= 686&&YXExmJZjnhRdia <= 735) {
var hOdiSkBBlaP = YXExmJZjnhRdia * 0.226160037655;
if (hOdiSkBBlaP < 171||hOdiSkBBlaP > 316) {
var cQIlsZKETtLKB = hOdiSkBBlaP * 0.511182755771;
if (typeof cQIlsZKETtLKB === "number" && cQIlsZKETtLKB < 12||cQIlsZKETtLKB > 470) {
cQIlsZKETtLKB = cQIlsZKETtLKB + 18;
} else {
}
} else if (hOdiSkBBlaP < 644) {
var RjahDBxyjye = hOdiSkBBlaP * 0.545273333521;
if (RjahDBxyjye > 364) {
RjahDBxyjye = RjahDBxyjye + 11;
} else if (RjahDBxyjye < 540||RjahDBxyjye > 738) {
var zhpolILDjNylR = RjahDBxyjye * 0.478432531655;
if (zhpolILDjNylR < 289||zhpolILDjNylR > 330) {
var JbMTPGFbPCjwgQS = zhpolILDjNylR * 0.326400156673;
if (JbMTPGFbPCjwgQS < 41) {
if (typeof JbMTPGFbPCjwgQS === "number" && JbMTPGFbPCjwgQS > 448) {
JbMTPGFbPCjwgQS = JbMTPGFbPCjwgQS - JbMTPGFbPCjwgQS/13;
} else {
JbMTPGFbPCjwgQS = JbMTPGFbPCjwgQS + JbMTPGFbPCjwgQS*15;
}
}
}
}
}
}
var XwzyhUXFipAQOy = 11258;
if (XwzyhUXFipAQOy < 289) {
XwzyhUXFipAQOy = XwzyhUXFipAQOy - XwzyhUXFipAQOy/11;
} else {
}
        //this.node.parent = null;
    },
    setProGressPercent: function (data){
        if (!this.node.active || !this.node.parent){
            return;
        }
        if (data && data.detail){
            this._progressVal += data.detail;
        } else {
            this._progressVal += 10;
        }
        if (this._progressVal/10000 > this._progressBar.progress) {
            if (this._progressVal > 10000) {
                this._progressVal = 10000;
            }
            this._progressBar.progress = this._progressVal/10000;
        }
    },
    update: function () {
        if (!this.node.active || !this.node.parent){
            return;
        }
        if (this._progressBar.progress < 1 && this._progressBar.progress > 0) {
            var count = this._progressBar.progress * 10000;
            this._curSpeed += this._accSpeed;
            if (this._curSpeed <= 2) {
                this._curSpeed = 2;
            }
            count += this._curSpeed;
            this._progressVal = count;
            if (this._progressVal > 10000) {
                this._progressVal = 10000;
            }
            this._progressBar.progress = this._progressVal/10000;
        }
    },






});
