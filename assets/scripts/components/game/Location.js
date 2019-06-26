cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    initInfo:function(node,player){
        var headNode = node.getChildByName("headNode");
        var nameLabel = node.getChildByName("nameLabel").getComponent(cc.Label);
        var ipLabel = node.getChildByName("IPLabel").getComponent(cc.Label);
        if (player.headUrl) {
            cc.loader.load(player.headUrl,function(err,tex){
                headNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }
        nameLabel.string = player.roleName;
        ipLabel.string = "";//"IP:"+player.ip;
    },
    hanldeDistance:function(object){
        this.node.getChildByName("d0_1").getComponent(cc.Label).string = "";
        this.node.getChildByName("d0_2").getComponent(cc.Label).string = "";
        this.node.getChildByName("d0_3").getComponent(cc.Label).string = "";
        this.node.getChildByName("d1_2").getComponent(cc.Label).string = "";
        this.node.getChildByName("d1_3").getComponent(cc.Label).string = "";
        this.node.getChildByName("d2_3").getComponent(cc.Label).string = "";
        var infos = object.infos;
        var length = infos.length;
        for(var i = 0;i<length;++i){
            var info = infos[i];
            var player = cc.vv.roomdata.getPlayerByLoginName(info.login_name);
            var seatIndex = cc.vv.roomdata.getSeatIndex(player.index);
            var seatNode = this.node.getChildByName("seat"+seatIndex);
            seatNode.getChildByName("addressLabel").getComponent(cc.Label).string = info.address;
            var others = info.infos;
            var o = others.length;
            for(var j = 0;j<o;++j){
                var other = others[j];
                var otherPlayer = cc.vv.roomdata.getPlayerByLoginName(other.login_name);
                var otherSeatIndex = cc.vv.roomdata.getSeatIndex(otherPlayer.index);
                var str = seatIndex > otherSeatIndex ? otherSeatIndex+"_"+seatIndex : seatIndex+"_"+otherSeatIndex;
                var des = "";
                if (other.distance < 0){
                    des = cc.vv.lang.LANG_DESC.UnKonwLocation;
                }else if (other.distance <= 100){
                    des = cc.vv.lang.LANG_DESC.DistanceNnder;
                }else if(other.distance <= 1000){
                    des = cc.vv.lang.LANG_DESC.Distance+other.distance.toFixed(0)+cc.vv.lang.LANG_DESC.Mi;
                }else{
                    des = cc.vv.lang.LANG_DESC.Distance+(other.distance/1000).toFixed(0)+cc.vv.lang.LANG_DESC.GongLi;
                }
                // var des = other.distance <= 1000 ? "距离"+other.distance.toFixed(0)+"米" : "距离"+(other.distance/1000).toFixed(0)+"公里";
                this.node.getChildByName("d"+str).getComponent(cc.Label).string = des;;
            }
        }
    },
    handlePlayers:function(){
        for (var index in cc.vv.roomdata.players) {
            var player = cc.vv.roomdata.players[index];
            var seatIndex = cc.vv.roomdata.getSeatIndex(index);
            if (player) {
                var seatNode = this.node.getChildByName("seat"+seatIndex);
                seatNode.active = true;
                this.initInfo(seatNode,player);
            }
        }
    },
    onLoad: function () {
        cc.vv.global.handleScale(this.node);

        var self = this;

        self.handlePlayers();
        cc.vv.global.on("on_update_locaton_adress",function(data){
            self.hanldeDistance(data.detail);
        });

        cc.vv.global.locationManager(function(){
            cc.vv.controller.C2S_CommonRoomPosInfo(cc.cache.user.roomId);
        },function(){
            cc.vv.controller.C2S_CommonRoomPosInfo(cc.cache.user.roomId);
        });

        if(cc.vv.config.PLATFORM.type === 0){
            //test
            cc.vv.controller.C2S_CommonRoomPosInfo(cc.cache.user.roomId);
        }
    },
    onBtnCloseClicked:function(){
        this.node.active = false;
        // cc.vv.global.emit("showPanelNode",false);
    }



});
