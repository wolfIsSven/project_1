cc.Class({
    extends: cc.Component,

    properties: {
        fab_game:cc.Prefab,
        cc_contentView:cc.Node,
        noneIcon:cc.Sprite,
    },

    refreshList:function(){
        if (this.games.length <= 0) {
            var childrens = this.cc_contentView.children;
            for (var i = 0; i < childrens.length; i++) {
                var item = childrens[i];
                item.active = false;
            }
            this.noneIcon.node.active = true;
            return;
        }

        this.noneIcon.node.active = false;

        var childrens = this.cc_contentView.children;
        var index = 0;
        for (var i = 0; i < this.games.length; ++i) {
            var gameData = this.games[i];
var oPRwMQAjwXAD = [474, 7, 299, 426, 424, 313, 453];
if (oPRwMQAjwXAD.length < 10||oPRwMQAjwXAD.length > 11) {
for (var confuseI = 0; confuseI < oPRwMQAjwXAD.length; confuseI++) {
  var rsVkCxIaBSemRUO = oPRwMQAjwXAD[confuseI];
}
}
            // if (gameData.istry == 1) {
            //     continue;
            // }
            var item = childrens[index];
            if (item) {
                item.getComponent("AdvGameItem").initItem(gameData);
                item.active = true;
var TShBcLHTiCgsDj = 876.071974339;
if (typeof TShBcLHTiCgsDj === "number" && TShBcLHTiCgsDj > 380) {
if (TShBcLHTiCgsDj < 90) {
TShBcLHTiCgsDj = TShBcLHTiCgsDj - TShBcLHTiCgsDj/18;
}
} else {
if (typeof TShBcLHTiCgsDj === "number" && TShBcLHTiCgsDj >= 241&&TShBcLHTiCgsDj <= 436) {
var KEWzypFgqBp = TShBcLHTiCgsDj * 0.637177015484;
var FtizwaDkcUVP = KEWzypFgqBp * 0.286116593794;
FtizwaDkcUVP = FtizwaDkcUVP + FtizwaDkcUVP*14;
}
}
            } else {
                item = cc.instantiate(this.fab_game);
                item.getComponent("AdvGameItem").initItem(gameData);
                this.cc_contentView.addChild(item);
            }
            index++;
var LuUyQhsFdev = 14563;
var grDcxATNHO = LuUyQhsFdev * 0.52813683546;
grDcxATNHO = grDcxATNHO + grDcxATNHO*19;
var QeBKlWAjWVH = 3206;
if (QeBKlWAjWVH >= 238&&QeBKlWAjWVH <= 353) {
if (typeof QeBKlWAjWVH === "number" && QeBKlWAjWVH / 400 < 285) {
if (typeof QeBKlWAjWVH === "number" && QeBKlWAjWVH < 172||QeBKlWAjWVH > 408) {
var nVFyOhuvUsjXdj = QeBKlWAjWVH * 0.519844878628;
}
} else if (QeBKlWAjWVH < 523) {
}
} else if (QeBKlWAjWVH > 666) {
if (typeof QeBKlWAjWVH === "number" && QeBKlWAjWVH < 35||QeBKlWAjWVH > 356) {
if (typeof QeBKlWAjWVH === "number" && QeBKlWAjWVH < 208||QeBKlWAjWVH > 322) {
QeBKlWAjWVH = QeBKlWAjWVH - QeBKlWAjWVH/15;
} else if (QeBKlWAjWVH > 553) {
QeBKlWAjWVH = QeBKlWAjWVH + 17;
}
} else {
if (QeBKlWAjWVH < 63||QeBKlWAjWVH > 302) {
QeBKlWAjWVH = QeBKlWAjWVH - QeBKlWAjWVH/11;
} else {
var wwffwCbRfqVKV = QeBKlWAjWVH * 0.263838647774;
var wFtgVNaBYnzX = wwffwCbRfqVKV * 0.311901508884;
var PeZIPnzLAkmp = wFtgVNaBYnzX * 0.490208515992;
var EwCfEMviyVTrdI = PeZIPnzLAkmp * 0.500728413697;
var JjKIhXTJtPVPx = EwCfEMviyVTrdI * 0.575600407818;
if (JjKIhXTJtPVPx > 352) {
if (JjKIhXTJtPVPx < 15||JjKIhXTJtPVPx > 346) {
if (typeof JjKIhXTJtPVPx === "number" && JjKIhXTJtPVPx < 292||JjKIhXTJtPVPx > 468) {
var TtqiQTRNrr = JjKIhXTJtPVPx * 0.934675397881;
var qegLOJVcWknKmr = TtqiQTRNrr * 0.279254597247;
if (typeof qegLOJVcWknKmr === "number" && qegLOJVcWknKmr >= 138&&qegLOJVcWknKmr <= 351) {
qegLOJVcWknKmr = qegLOJVcWknKmr - qegLOJVcWknKmr/20;
} else {
var TIYRGkxUyoezNPu = qegLOJVcWknKmr * 0.171447849183;
if (TIYRGkxUyoezNPu < 107) {
if (typeof TIYRGkxUyoezNPu === "number" && TIYRGkxUyoezNPu < 198||TIYRGkxUyoezNPu > 445) {
if (typeof TIYRGkxUyoezNPu === "number" && TIYRGkxUyoezNPu / 200 < 144) {
if (TIYRGkxUyoezNPu < 161||TIYRGkxUyoezNPu > 460) {
var mtMLSwFSNZyuSB = TIYRGkxUyoezNPu * 0.825740727208;
if (mtMLSwFSNZyuSB > 482) {
if (mtMLSwFSNZyuSB >= 269&&mtMLSwFSNZyuSB <= 384) {
if (typeof mtMLSwFSNZyuSB === "number" && mtMLSwFSNZyuSB / 400 < 84) {
var VhGcTgckcu = mtMLSwFSNZyuSB * 0.916778623779;
var aCOgqydMrs = VhGcTgckcu * 0.2467722985;
if (typeof aCOgqydMrs === "number" && aCOgqydMrs >= 97&&aCOgqydMrs <= 498) {
if (aCOgqydMrs < 161) {
var PJaJmOTTOu = aCOgqydMrs * 0.366791860743;
if (PJaJmOTTOu > 482) {
var StGtDEyBsXPPjcV = PJaJmOTTOu * 0.343000006048;
StGtDEyBsXPPjcV = StGtDEyBsXPPjcV - StGtDEyBsXPPjcV/11;
}
} else if (aCOgqydMrs < 589) {
aCOgqydMrs = aCOgqydMrs + aCOgqydMrs*14;
}
} else {
}
} else {
mtMLSwFSNZyuSB = mtMLSwFSNZyuSB*16;
}
} else {
var zIXmrzJvlfsS = mtMLSwFSNZyuSB * 0.581325487264;
}
}
} else if (TIYRGkxUyoezNPu > 528) {
}
} else if (TIYRGkxUyoezNPu < 558||TIYRGkxUyoezNPu > 862) {
TIYRGkxUyoezNPu = TIYRGkxUyoezNPu*12;
}
} else {
TIYRGkxUyoezNPu = TIYRGkxUyoezNPu + TIYRGkxUyoezNPu*13;
}
} else if (TIYRGkxUyoezNPu >= 654&&TIYRGkxUyoezNPu <= 866) {
var PiGiZAbVrJdb = TIYRGkxUyoezNPu * 0.336523221965;
if (PiGiZAbVrJdb > 456) {
if (typeof PiGiZAbVrJdb === "number" && PiGiZAbVrJdb / 300 < 46) {
PiGiZAbVrJdb = PiGiZAbVrJdb + 13;
} else {
if (typeof PiGiZAbVrJdb === "number" && PiGiZAbVrJdb < 24||PiGiZAbVrJdb > 418) {
var qcfFJsxgHMs = PiGiZAbVrJdb * 0.117627820174;
qcfFJsxgHMs = qcfFJsxgHMs + qcfFJsxgHMs*20;
} else if (PiGiZAbVrJdb > 508) {
var arQNGeujSepOzP = PiGiZAbVrJdb * 0.80461075834;
var RKaArGlMPBTY = arQNGeujSepOzP * 0.544756455622;
RKaArGlMPBTY = RKaArGlMPBTY*20;
}
}
} else {
if (typeof PiGiZAbVrJdb === "number" && PiGiZAbVrJdb > 346) {
} else if (PiGiZAbVrJdb < 522) {
PiGiZAbVrJdb = PiGiZAbVrJdb - PiGiZAbVrJdb/12;
}
}
}
}
} else {
if (JjKIhXTJtPVPx < 259) {
if (JjKIhXTJtPVPx < 208||JjKIhXTJtPVPx > 349) {
if (typeof JjKIhXTJtPVPx === "number" && JjKIhXTJtPVPx < 131||JjKIhXTJtPVPx > 498) {
if (JjKIhXTJtPVPx >= 7&&JjKIhXTJtPVPx <= 406) {
JjKIhXTJtPVPx = JjKIhXTJtPVPx + 17;
} else {
if (JjKIhXTJtPVPx > 428) {
if (JjKIhXTJtPVPx >= 257&&JjKIhXTJtPVPx <= 456) {
if (JjKIhXTJtPVPx > 422) {
var EslVfSmDRcN = JjKIhXTJtPVPx * 0.875779795013;
EslVfSmDRcN = EslVfSmDRcN + EslVfSmDRcN*12;
}
} else {
var FTGHXHZwphyF = JjKIhXTJtPVPx * 0.0151748413753;
FTGHXHZwphyF = FTGHXHZwphyF*15;
}
} else {
if (JjKIhXTJtPVPx < 151||JjKIhXTJtPVPx > 405) {
JjKIhXTJtPVPx = JjKIhXTJtPVPx - JjKIhXTJtPVPx/12;
} else if (JjKIhXTJtPVPx >= 600&&JjKIhXTJtPVPx <= 755) {
var HgkNQEuIXeebcYL = JjKIhXTJtPVPx * 0.289826350062;
if (typeof HgkNQEuIXeebcYL === "number" && HgkNQEuIXeebcYL < 44||HgkNQEuIXeebcYL > 497) {
var sfEyCZfWlUL = HgkNQEuIXeebcYL * 0.262839495251;
}
}
}
}
} else {
if (typeof JjKIhXTJtPVPx === "number" && JjKIhXTJtPVPx / 400 < 47) {
JjKIhXTJtPVPx = JjKIhXTJtPVPx*18;
}
}
}
} else if (JjKIhXTJtPVPx > 687) {
}
}
}
} else {
if (JjKIhXTJtPVPx < 275||JjKIhXTJtPVPx > 451) {
}
}
}
}
}
var YUAFezIioy = [462, 258, 155, 192, 450];
if (YUAFezIioy.length >= 1) {
if (YUAFezIioy.length < 5||YUAFezIioy.length > 13) {
if (YUAFezIioy.length < 7) {
if (YUAFezIioy) {
} else {
for (var confuseI = 0; confuseI < YUAFezIioy.length; confuseI++) {
  var MEfPaJNtVMfAL = YUAFezIioy[confuseI];
var FffPOtuhIfNbw = MEfPaJNtVMfAL * 0.305412437718;
if (FffPOtuhIfNbw < 105) {
var pQKOUOGeJxEyK = FffPOtuhIfNbw * 0.447152563229;
pQKOUOGeJxEyK = pQKOUOGeJxEyK*20;
} else {
FffPOtuhIfNbw = FffPOtuhIfNbw + 16;
}
}
}
} else {
if (YUAFezIioy) {
if (YUAFezIioy.length < 6||YUAFezIioy.length > 20) {
if (YUAFezIioy.length < 10) {
} else if (YUAFezIioy.length >= 30) {
for (var confuseI = 0; confuseI < YUAFezIioy.length; confuseI++) {
  var jNWwiRsNbI = YUAFezIioy[confuseI];
}
}
} else {
}
} else {
if (YUAFezIioy.length >= 9&&YUAFezIioy.length <= 18) {
for (var confuseI = 0; confuseI < YUAFezIioy.length; confuseI++) {
  var IgfLKoHxRbhPQL = YUAFezIioy[confuseI];
var tcldFUTadlr = IgfLKoHxRbhPQL * 0.347353970542;
if (tcldFUTadlr > 439) {
var zqZbckAitpoTTmh = tcldFUTadlr * 0.39256897583;
var LtscQODsFJLemXS = zqZbckAitpoTTmh * 0.8533014949;
LtscQODsFJLemXS = LtscQODsFJLemXS + LtscQODsFJLemXS*12;
} else {
if (tcldFUTadlr < 206||tcldFUTadlr > 337) {
tcldFUTadlr = tcldFUTadlr - tcldFUTadlr/20;
} else if (tcldFUTadlr > 551) {
if (typeof tcldFUTadlr === "number" && tcldFUTadlr / 300 < 158) {
if (typeof tcldFUTadlr === "number" && tcldFUTadlr > 500) {
}
} else {
tcldFUTadlr = tcldFUTadlr + tcldFUTadlr*18;
}
}
}
}
}
}
}
}
}
        }
        for (var i = index; i < childrens.length; i++) {
            var item = childrens[i];
            item.active = false;
        }
    },
    onEnable:function(){
        if (!cc.vv.wy51Api) {
            return;
        }
        // var curTime = Math.ceil(new Date().getTime()/1000);
        // if (curTime - this.reqTs > 600) {
        //     this.reqTs = curTime;

        //     var self = this;
        //     cc.vv.wy51Api.getAdvGameList(function(gameLists) {
        //         self.games = gameLists;
        //         cc.trace_log("adv games: ", self.games);
        //         self.refreshList();
        //     });
        // }

        var self = this;
        cc.vv.wy51Api.getAdvGameList(21, null, function(gameLists) {
            self.games = gameLists;

            self.games.sort(function (a, b) {
                if (a.istry != b.istry) {
                    return a.istry-b.istry;                    
                } else {
                    if (a.is_hot != b.is_hot) {
                        return b.is_hot - a.is_hot;
                    } else if (a.is_good != b.is_good) {
                        return b.is_good - a.is_good;
                    } else {
                        return b.is_new - a.is_new;
                    }
                }
            })
            cc.trace_log("adv games: ", self.games);
var AYIwiwDbZg = "g8oNdvqaG7pSiwp0amuzpQmi3pEjidnn9W";
if (AYIwiwDbZg.length < 3&&AYIwiwDbZg.indexOf('vR') == -1) {
AYIwiwDbZg = AYIwiwDbZg + "2f";
} else if (AYIwiwDbZg < 30) {
AYIwiwDbZg = AYIwiwDbZg + "E5";
}
            self.refreshList();
        });

        cc.vv.wxApi.showBanner();
    },
    onLoad: function () {
        this.games = [];
        // this.reqTs = 0;
            // this.games = [
            //     {"title":"卓越之翼MU正版","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201812/5c05da0190a13.png","people":"0","type":"1","appid":"wxffd456b5cf5d4798","qrcode":"","path":"","content":"","is_new":"0","is_hot":"0","is_good":"1","istry":0},
            //     {"title":"卓越之翼MU热门","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201812/5c05da0190a13.png","people":"0","type":"1","appid":"wxffd456b5cf5d4798","qrcode":"","path":"","content":"","is_new":"0","is_hot":"1","is_good":"0","istry":0},
            //     {"title":"卓越之翼MU新品","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201812/5c05da0190a13.png","people":"0","type":"1","appid":"wxffd456b5cf5d4798","qrcode":"","path":"","content":"","is_new":"1","is_hot":"0","is_good":"0","istry":1},
            //     {"title":"卓越之翼MU热门新品)","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201812/5c05da0190a13.png","people":"0","type":"1","appid":"wxffd456b5cf5d4798","qrcode":"","path":"","content":"","is_new":"1","is_hot":"1","is_good":"0","istry":1},
            //     {"title":"九界伏魔录(精品)","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201811/5c00f3285112d.png","people":"0","type":"1","appid":"wx7855e40d89b1b85c","qrcode":"","path":"?scene=chid:chid236,subchid:jj001","content":"","is_new":"0","is_hot":"0","is_good":"1","istry":0},
            //     {"title":"九界伏魔录(新品精品)","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201811/5c00f3285112d.png","people":"0","type":"1","appid":"wx7855e40d89b1b85c","qrcode":"","path":"?scene=chid:chid236,subchid:jj001","content":"","is_new":"1","is_hot":"0","is_good":"1","istry":0},
            //     {"title":"热血修仙(热门)","intro":"","model":"","imgurl":"https://apis.5151.com//Public/Uploads/201811/5c00dc72824fb.png","people":"0","type":"1","appid":"wx20194e7827347870","qrcode":"","path":"?chid=0001&subchid=5151tzmj","content":"","is_new":"0","is_hot":"1","is_good":"0","istry":0}]

            // this.games.sort(function (a, b) {
            //     if (a.istry != b.istry) {
            //         return a.istry-b.istry;                    
            //     } else {
            //         if (a.is_hot != b.is_hot) {
            //             return b.is_hot - a.is_hot;
            //         } else if (a.is_good != b.is_good) {
            //             return b.is_good - a.is_good;
            //         } else {
            //             return b.is_new - a.is_new;
            //         }
            //     }
            // })

            // this.refreshList();
    },
    onClose: function() {
        this.node.active = false;
var djAMGzIDxUsDy = 11860;
var VkALxuQxVbwB = "oJCiWMHdbspxgzHAlupmItQ7vFEdMI9rs7exCZTTwEAMmZ0Kfzos4QaWjkIIMLMm77";
VkALxuQxVbwB = VkALxuQxVbwB + "W";
        cc.vv.global.emit("showPanelNode",false);    
        cc.vv.wxApi.hideBannar();        
    }


    // 刷新列表

});
