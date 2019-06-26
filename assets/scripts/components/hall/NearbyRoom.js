cc.Class({
    extends: cc.Component,
    properties: {
        _object:null
    },
    onLoad: function () {
   
    },
    initData:function(object){
        this._object = object;
        var roomNumber = this.node.getChildByName("roomnumberLabel");
        roomNumber.getComponent(cc.Label).string = cc.vv.lang.LANG_DESC.HouseNumber+this._object.roomId;

        var nameLabel = this.node.getChildByName("nameLabel");
        nameLabel.getComponent(cc.Label).string =cc.vv.lang.LANG_DESC.FangZhu+this._object.ownerName;

        var roundNode = this.node.getChildByName("inn_030");
        if(object.maxRound === 8){
            var url = "textures/inn/inn_030";
            cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
                roundNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }else if(object.maxRound === 16){
            var url = "textures/inn/inn_031";
            cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
                roundNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }else{
            var url = "textures/inn/inn_035";
            cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
                roundNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }

        var mahjongLabel = this.node.getChildByName("MahjongLabel");
        mahjongLabel.getComponent(cc.Label).string =(object.privateType === 1 ? cc.vv.lang.LANG_RULE_TYPE[7001]:object.privateType === 2 ? cc.vv.lang.LANG_RULE_TYPE[7002]:cc.vv.lang.LANG_RULE_TYPE[7003])+"("+object.maxSide+cc.vv.lang.LANG_DESC.People+")";

        var costLabel = this.node.getChildByName("CostLabel");
        costLabel.getComponent(cc.Label).string =cc.vv.lang.LANG_DESC.FangFei+":"+(object.chargeRoomType === 1 ? cc.vv.lang.LANG_DESC.PingTan:object.chargeRoomType === 2 ? cc.vv.lang.LANG_DESC.FangZhuFuFei:cc.vv.lang.LANG_DESC.DaYingJiaFuFei);

        var typeLabel = this.node.getChildByName("typeLabel");
        typeLabel.getComponent(cc.Label).string =cc.vv.lang.LANG_DESC.NoDe+"("+(object.useMammon === 1 ? cc.vv.lang.LANG_DESC.AddOneTai:cc.vv.lang.LANG_DESC.NotAddTai)+")  "+cc.vv.lang.LANG_DESC.BaiBan+"("+(object.restoreMamon === 1 ? cc.vv.lang.LANG_DESC.HuanYuan:cc.vv.lang.LANG_DESC.ChangGui)+")";

        var headNode1 = this.node.getChildByName("Player1Node").getChildByName("headNode");
        var picUrls = object.picUrls;
        if(picUrls[0]){
            cc.loader.load(picUrls[0],function(err,tex){
                headNode1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }else{
            headNode1.getComponent(cc.Sprite).spriteFrame = null;
        }

        var headNode2 = this.node.getChildByName("Player2Node").getChildByName("headNode");
        if(picUrls[1]){
            cc.loader.load(picUrls[1],function(err,tex){
                headNode2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }else{
            headNode2.getComponent(cc.Sprite).spriteFrame = null;
        }
        var headNode3 = this.node.getChildByName("Player3Node").getChildByName("headNode");
        if(picUrls[2]){
            cc.loader.load(picUrls[2],function(err,tex){
                headNode3.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }else{
            headNode3.getComponent(cc.Sprite).spriteFrame = null;
        }
        var headNode4 = this.node.getChildByName("Player4Node").getChildByName("headNode");
        if(picUrls[3]){
            cc.loader.load(picUrls[3],function(err,tex){
                headNode4.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            });
        }else{
            headNode4.getComponent(cc.Sprite).spriteFrame = null;
        }
        
    },
    onClicked:function(event){
        cc.vv.protobuf.sendMessage(1101,{type:1101,room_Type:1,room_Id:this._object.roomId});
    }
});