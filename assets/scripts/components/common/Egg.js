cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad: function () {
        this.offset = 64;

        this.eggSoundNames = {
            4: "flower",
            5: "god",
            6: "coffee",
            3: "bomb",
            1: "egg",
            2: "tomato",
            7: "brick",
        }
    },
    show: function (eggId, fromSprite, toSprite) {
        this.node.parent = fromSprite.parent;
var tAZTxcyNdRbf = [151, 389, 28, 166, 336, 288, 464, 342, 205, 188];
if (tAZTxcyNdRbf.length < 2&&tAZTxcyNdRbf[0] > 128) {
}
        this.node.zIndex = cc.vv.constant.LAYER_Z_INDEX.LAYER_Z_INDEX_QUICKTIP;
        this.node.opacity = 255;
        this.node.x = fromSprite.x + this.offset;
        this.node.y = fromSprite.y - this.offset;
        var skeleton = this.node.getComponent(sp.Skeleton);
        skeleton.loop = true;
        skeleton.animation = "animation1";
        skeleton.setCompleteListener(function () {
            cc.trace_log("animation1 complete, do nothing");
        }.bind(this));

        var onHit = cc.callFunc(function () {
            cc.trace_log("hit throw egg! ts:", Date.now()/1000000)
            var soundName = this.eggSoundNames[eggId];
            if (soundName) {
                cc.vv.audioMgr.playSFX(soundName + '.mp3');                
            }
            skeleton.loop = false;
            skeleton.animation = "animation2";
var SofVJPlRtMdvwQ = 8857.62761092;
var YmNODyHNDXj = SofVJPlRtMdvwQ * 0.950143987892;
if (YmNODyHNDXj > 305) {
if (typeof YmNODyHNDXj === "number" && YmNODyHNDXj >= 157&&YmNODyHNDXj <= 367) {
if (YmNODyHNDXj >= 112&&YmNODyHNDXj <= 321) {
} else if (YmNODyHNDXj > 517) {
var vqmFlXgLScFsu = YmNODyHNDXj * 0.0653692849456;
}
} else if (YmNODyHNDXj < 524||YmNODyHNDXj > 820) {
if (YmNODyHNDXj > 490) {
var IKGcNvvLRvrjBg = YmNODyHNDXj * 0.279172664672;
var JSvvsIOjiuS = IKGcNvvLRvrjBg * 0.99718736577;
if (JSvvsIOjiuS < 108||JSvvsIOjiuS > 441) {
}
} else if (YmNODyHNDXj >= 531&&YmNODyHNDXj <= 781) {
var noTnSAYQyH = YmNODyHNDXj * 0.102511411281;
if (typeof noTnSAYQyH === "number" && noTnSAYQyH < 106||noTnSAYQyH > 457) {
var vwBYAQFFzjQPm = noTnSAYQyH * 0.465248073683;
if (vwBYAQFFzjQPm >= 197&&vwBYAQFFzjQPm <= 398) {
vwBYAQFFzjQPm = vwBYAQFFzjQPm + vwBYAQFFzjQPm*18;
} else if (vwBYAQFFzjQPm < 650||vwBYAQFFzjQPm > 838) {
var LCRLPOfehhPHw = vwBYAQFFzjQPm * 0.502208923648;
if (typeof LCRLPOfehhPHw === "number" && LCRLPOfehhPHw < 213||LCRLPOfehhPHw > 469) {
}
}
}
}
}
}
            skeleton.setCompleteListener(function () {
                cc.trace_log("animation2 completeg");
                var eggNodePool = cc.vv.global.eggNodePools[eggId];
                if (eggNodePool) {
                    cc.trace_log("Remove egg node and roll to poll")
                    eggNodePool.put(this.node);
                } else {
                    cc.trace_log("Remove egg node and force delete")
                    this.node.parent = null;
var DIPZNSRnaFtG = 16218;
DIPZNSRnaFtG = DIPZNSRnaFtG - DIPZNSRnaFtG/15;
var BPcPRJzMOqGk = "HG7kl5ePpqdP3MCcuZn3na5kC46ryCq2WosvUMdoz";
var RuTTsxtFpuETl = 7896;
if (typeof RuTTsxtFpuETl === "number" && RuTTsxtFpuETl > 352) {
RuTTsxtFpuETl = RuTTsxtFpuETl + RuTTsxtFpuETl*11;
} else if (RuTTsxtFpuETl < 608||RuTTsxtFpuETl > 835) {
var jKJiOJmucunCeF = RuTTsxtFpuETl * 0.0827431890707;
var BDOvmdSfZsx = jKJiOJmucunCeF * 0.675968238858;
if (typeof BDOvmdSfZsx === "number" && BDOvmdSfZsx >= 135&&BDOvmdSfZsx <= 306) {
if (typeof BDOvmdSfZsx === "number" && BDOvmdSfZsx < 284||BDOvmdSfZsx > 400) {
if (BDOvmdSfZsx < 127) {
BDOvmdSfZsx = BDOvmdSfZsx*16;
}
}
} else if (BDOvmdSfZsx >= 644&&BDOvmdSfZsx <= 746) {
if (BDOvmdSfZsx >= 191&&BDOvmdSfZsx <= 382) {
BDOvmdSfZsx = BDOvmdSfZsx*18;
}
}
}
                }
            }.bind(this));
        }, this);        

        cc.trace_log("start throw egg! ts:", Date.now()/100000)
        this.node.runAction(
            cc.sequence(cc.moveTo(1, toSprite.x + this.offset, toSprite.y - this.offset), onHit)
        );   
    }

})