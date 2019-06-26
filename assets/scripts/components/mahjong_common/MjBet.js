cc.Class({
    extends: cc.Component,
    properties: {

    },
    onBuyZiNode: function (data) {
        var seatIndex = data.detail.seatIndex;
        if (seatIndex === 0){
            this.updateData();
        }
    },
    updateData:function(){
        this.betVal = 0;
        this.clickTime = 0;
        if (cc.vv.roomdata.betVal != 0){
            this.waitNode.active = false;
            if (cc.vv.mjconfig.betSpecial){
                this.btnNode.active = false;
                this.speNode.active = true;
                this.speNode2.active = false;
                this.onShowSpeNode();
            }else if (cc.vv.mjconfig.betSpecial2){
                this.btnNode.active = false;
                this.speNode.active = false;
                this.speNode2.active = true;
                this.onShowSpeNode2();
            }else{
                this.btnNode.active = true;
                this.speNode.active = false;
                this.speNode2.active = false;
                this.onShowZiNode();
            }
        }else {
            this.btnNode.active = false;
            this.waitNode.active = true;
            this.speNode.active = false;
            this.speNode2.active = false;
        }
    },
    onZiNodeClicked: function (event) {
        var name = event.target.name;
        console.log("onZiNodeClicked============name",name);
        if (name == 'btn_buy') {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,0))
        }else if (name === "btn_xiazi") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,1))
        }else if (name === "btn_dingdifen") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,2))
        }else if (name === "btn_maidifen") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,2))
        }else if (name === "btn_piao_1") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,3))
        }else if (name === "btn_piao_2") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,4))
        }else if (name === "btn_piao_rate_1") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,5))
        }else if (name === "btn_piao_rate_3") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,6))
        }else if (name === "btn_piao_rate_5") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,7))
        }else if (name === "btn_xia_pao_1") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,8))
        }else if (name === "btn_xia_pao_2") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,9))
        }else if (name === "btn_xia_pao_3") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,10))
        }else if (name === "btn_nao_pao_1") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,11))
        }else if (name === "btn_nao_pao_2") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,12))
        }else if (name === "btn_nao_pao_4") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,13))
        }else if (name === "btn_zha_zhen") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,17))
        }else if (name === "btn_dun") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,18))
        }else if (name === "btn_pass") {
            cc.vv.controller.C2S_RoomMjBet(0)
        }else if (name === "btn_jia_di_3") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,21))
        }else if (name === "btn_jia_di_6") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,22))
        }else if (name === "btn_jia_di_9") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,23))
        }else if (name === "btn_piao") {
            cc.vv.controller.C2S_RoomMjBet(Math.pow(2,24))
        }
    },
    onSpeNodeClicked: function (event,customEventData) {
        var name = event.target.name;
        this.betVal += Math.pow(2,customEventData);
        console.log("this.betVal=============",this.betVal);
        var curLayer = null;
        if (this.clickTime === 0){
            if (name === "btn_la_score_1" || name === "btn_la_score_2" || name === "btn_la_score_3" || 
                name === "btn_pass_2") {
                curLayer = this.speNode.getChildByName("layerNode2");
            }else if (name === "btn_xia_pao_1" || name === "btn_xia_pao_2" || name === "btn_xia_pao_3" || 
                name === "btn_pass_1") {
                curLayer = this.speNode.getChildByName("layerNode1");
            }

            var children = curLayer.getChildren();
            for (var key in children) {
                var child = children[key];
                console.log("child.name=============",child.name,"name=============",name);
                if (child.name == name){
                    child.getComponent('cc.Button').interactable = false;
                }else{
                    child.active = false;
                }
            } 
            ++this.clickTime;
            return;
        }
        cc.vv.controller.C2S_RoomMjBet(this.betVal)
    },
    onShowZiNode:function () {
        var btnBuy = this.btnNode.getChildByName("btn_buy");
        var btnXiaZi = this.btnNode.getChildByName("btn_xiazi");
        var btnPass = this.btnNode.getChildByName("btn_pass");
        var btnDDF = this.btnNode.getChildByName("btn_dingdifen");
        var btnMDF = this.btnNode.getChildByName("btn_maidifen");
        var btnPiao2 = this.btnNode.getChildByName("btn_piao_2");
        var btnPiao1 = this.btnNode.getChildByName("btn_piao_1");
        var btnPiaoRate1 = this.btnNode.getChildByName("btn_piao_rate_1");
        var btnPiaoRate3 = this.btnNode.getChildByName("btn_piao_rate_3");
        var btnPiaoRate5 = this.btnNode.getChildByName("btn_piao_rate_5");
        var btnXiaPao1 = this.btnNode.getChildByName("btn_xia_pao_1");
        var btnXiaPao2 = this.btnNode.getChildByName("btn_xia_pao_2");
        var btnXiaPao3 = this.btnNode.getChildByName("btn_xia_pao_3");
        var btnNaoPao1 = this.btnNode.getChildByName("btn_nao_pao_1");
        var btnNaoPao2 = this.btnNode.getChildByName("btn_nao_pao_2");
        var btnNaoPao4 = this.btnNode.getChildByName("btn_nao_pao_4");
        var btnJiaDi3 = this.btnNode.getChildByName("btn_jia_di_3");
        var btnJiaDi6 = this.btnNode.getChildByName("btn_jia_di_6");
        var btnJiaDi9 = this.btnNode.getChildByName("btn_jia_di_9");
        var btnZhaZhen = this.btnNode.getChildByName("btn_zha_zhen");
        var btnPiao = this.btnNode.getChildByName("btn_piao");

        btnPass.active = true;

        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_MAIZI)){
            btnBuy.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIAZI)){
            btnXiaZi.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_SCORE)){
            if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_MASTER)){
                btnMDF.active = true;
            }else{
                btnDDF.active = true;
            }
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO_1)){
            btnPiao1.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO_2)){
            btnPiao2.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_1)){
            btnPiaoRate1.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_3)){
            btnPiaoRate3.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DAPIAO_RATE_5)){
            btnPiaoRate5.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_1)){
            btnXiaPao1.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_2)){
            btnXiaPao2.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_3)){
            btnXiaPao3.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_1)){
            btnNaoPao1.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_2)){
            btnNaoPao2.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_NAO_PAO_4)){
            btnNaoPao4.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_3)){
            btnJiaDi3.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_6)){
            btnJiaDi6.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_JIADI_9)){
            btnJiaDi9.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_ZHAZHEN)){
            btnZhaZhen.active = true;
        }
        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PIAO)){
            btnPiao.active = true;
        }
    },
    onShowSpeNode2:function () {
        var zhuangNode = this.speNode2.getChildByName("zhuangNode"); 
        var xianNode = this.speNode2.getChildByName("xianNode"); 

        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_DUN)){
            zhuangNode.active = true;
            xianNode.active = false; 
        }else{
            zhuangNode.active = false;
            xianNode.active = true; 

            var layer1 = xianNode.getChildByName("layerNode1"); 
            var layer2 = xianNode.getChildByName("layerNode2"); 
            if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA)){
                var children = layer1.getChildren();
                for (var key in children) {
                    var child = children[key];
                    child.active = true;
                    child.getComponent('cc.Button').interactable = true;
                } 
            }
    
            if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_PAO)){
                var children = layer2.getChildren();
                for (var key in children) {
                    var child = children[key];
                    child.active = true;
                    child.getComponent('cc.Button').interactable = true;
                } 
            }
        }
    },
    onEnable:function(){
        this.updateData()
    },
    onSpeNode2Clicked: function (event,customEventData) {
        var name = event.target.name;
        this.betVal += Math.pow(2,customEventData);
        var xianNode = this.speNode2.getChildByName("xianNode"); 

        var curLayer = null;
        if (this.clickTime === 0){
            if (name === "btn_la" || name === "btn_pass_2") {
                curLayer = xianNode.getChildByName("layerNode2");
            }else if (name === "btn_pao" || name === "btn_pass_1") {
                curLayer = xianNode.getChildByName("layerNode1");
            }

            var children = curLayer.getChildren();
            for (var key in children) {
                var child = children[key];
                if (child.name == name){
                    child.getComponent('cc.Button').interactable = false;
                }else{
                    child.active = false;
                }
            } 
            ++this.clickTime;
            return;
        }
        cc.vv.controller.C2S_RoomMjBet(this.betVal)
    },
    onShowSpeNode:function () {
        var layer1 = this.speNode.getChildByName("layerNode1"); 
        var layer2 = this.speNode.getChildByName("layerNode2"); 

        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_XIA_PAO_1)){
            var children = layer1.getChildren();
            for (var key in children) {
                var child = children[key];
                child.active = true;
                child.getComponent('cc.Button').interactable = true;
            } 
        }

        if (cc.vv.roomdata.betVal & (0x01 << cc.vv.constant.MJ_BET_TYPE.MJ_BET_LA_SCORE_1)){
            var children = layer2.getChildren();
            for (var key in children) {
                var child = children[key];
                child.active = true;
                child.getComponent('cc.Button').interactable = true;
            } 
        }
    },
    onLoad: function () {
        this.btnNode = this.node.getChildByName("layerNode");
        this.waitNode = this.node.getChildByName("waitNode");
        this.speNode = this.node.getChildByName("speNode");
        this.speNode2 = this.node.getChildByName("speNode2");

        var self = this;
        cc.vv.global.on("proto_mj_bet",function(data){
            self.onBuyZiNode(data);
            self.betVal = 0;
        }.bind(this))
    },
    onClose:function(){
        cc.vv.global.emit("mj_close_module",cc.vv.constant.ROOM_PREFAB.MJ_BET)
    }




    //买子下子






});