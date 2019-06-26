cc.Class({
    extends: cc.Component,
    properties: {
    },
    onEnable:function(){
        this.updateData()
    },
    updateGangTou:function(){
        var curBg = this.bg1;
        if (this.gangtouCount === 2){
            curBg = this.bg2;
        }else if (this.gangtouCount === 4){
            curBg = this.bg4;
        }

        var title = curBg.getChildByName('bg_title').getChildByName('label').getComponent(cc.Label);
        if (cc.vv.mjconfig.gangtouTitle){
            title.string = cc.vv.mjconfig.gangtouTitle;
        }
        for (var i = 0; i < this.gangtouCount; ++i) {
            var curData = cc.vv.roomdata.gangtouData[i];
            var curPlayer = {}
            if (this.gangtouCount === 1){
                curPlayer = cc.vv.roomdata.players[1];
            }else {
                curPlayer = cc.vv.roomdata.players[curData.index];
            }

            var head = curBg.getChildByName("head_sp_"+(i+1));
            var headSign = head.getChildByName("sign").getComponent(cc.Sprite);
            var score = curBg.getChildByName("label_score_"+(i+1));
            var pais = curBg.getChildByName("hu_node_"+(i+1));
            //总分数
            if (curData.value === null || cc.vv.mjconfig.notShowGTScore){
                score.getComponent(cc.Label).string = "";
            }else if (curData.value >= 0){
                score.getComponent(cc.Label).string = "+"+curData.value;
            }else{
                score.getComponent(cc.Label).string = curData.value;
            }
            score.opacity = 0;
            //设置头像
            if (cc.vv.mjconfig.gangtouTitle == cc.vv.lang.LANG_DESC.MaiMa || 
                cc.vv.mjconfig.gangtouTitle == cc.vv.lang.LANG_DESC.FeiCangYing){
                head.active = false;
            }else {
                head.active = true;
                if(curPlayer){
                    if (curPlayer.headUrl != undefined && curPlayer.headUrl && curPlayer.headUrl != "") {
                        cc.vv.global.loadWeixinHeadFrame(head.getComponent(cc.Sprite), curPlayer.headUrl);
                    }
                    if (curPlayer.index === 1){
                        headSign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_032");
                    }else if (curPlayer.index === 2){
                        headSign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_033");    
                    }else if (curPlayer.index === 3){
                        headSign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_034");
                    }else if (curPlayer.index === 4){
                        headSign.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_035");
                    }
                }
            }
            
            //杠头翻牌
            if (this._time === -1){
                this._time = curData.gt_cards.length*0.5 + 3;//2;
            }
            for (var j = 0; j < curData.gt_cards.length; ++j) {
                var curCard = curData.gt_cards[j];
                var paiSp = pais.getChildByName("sp_pai_"+(j+1));
                var paiSpFrame = paiSp.getChildByName("pai").getComponent(cc.Sprite);
                var paiSign = paiSp.getChildByName("sign")
                var paiSignFrame = paiSign.getComponent(cc.Sprite);
                paiSign.active = false;
                if (cc.vv.mjconfig.gangtouTitle == "买马"){
                    if (curCard.card === 411 || (curCard.card < 400 && curCard.card % 100 === 1) || 
                        (curCard.card < 400 && curCard.card % 100 === 5) || (curCard.card < 400 && curCard.card % 100 === 9)){
                        paiSign.active = true;
                        paiSignFrame.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_03"+(cc.vv.roomdata.resultPlayers[0].index+1));
                    }
                }else{
                    if (curCard.type === cc.vv.constant.GANG_TOU_CARD_TYPE.CARD_TYPE_WIN){
                        paiSign.active = true;
                        if (curCard.card === 411 || (curCard.card < 400 && curCard.card % 100 === 1) || 
                            (curCard.card < 400 && curCard.card % 100 === 5) || (curCard.card < 400 && curCard.card % 100 === 9)){
                            paiSignFrame.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_032");
                        }else if (curCard.card === 412 || curCard.card === 415 || 
                            (curCard.card < 400 && curCard.card % 100 === 2) || (curCard.card < 400 && curCard.card % 100 === 6)){
                            paiSignFrame.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_033");    
                        }else if (curCard.card === 413 || curCard.card === 416 || 
                            (curCard.card < 400 && curCard.card % 100 === 3) || (curCard.card < 400 && curCard.card % 100 === 7)){
                            paiSignFrame.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_034");
                        }else if (curCard.card === 414 || curCard.card === 417 || 
                            (curCard.card < 400 && curCard.card % 100 === 4) || (curCard.card < 400 && curCard.card % 100 === 8)){
                            paiSignFrame.spriteFrame = cc.plistAtlas.gtSign.getSpriteFrame("inn_035");
                        }
                    }
                }

                paiSpFrame.spriteFrame = cc.vv.mahjongSprite.getMSpriteFrameById(curCard.card);

                paiSp.active = true;
                paiSp.opacity = 0;
                var action1 = cc.delayTime(0.5*j);
                var action2 = cc.fadeIn(0.5);
                paiSp.runAction(cc.sequence(action1, action2));
                if (j === (curData.gt_cards.length-1)){
                    score.runAction(cc.sequence(cc.delayTime(0.5*(j+1)), cc.fadeIn(0.5)));
                }
            }
        }
    },
    onLoad: function () {
    },
    updateData:function(){
        this.bg1 = this.node.getChildByName("bg_1");
        this.bg2 = this.node.getChildByName("bg_2");
        this.bg4 = this.node.getChildByName("bg_4");

        this.gangtouCount = 0;

        for (var i = 0; i < cc.vv.roomdata.gangtouData.length; i++) {
            var curData = cc.vv.roomdata.gangtouData[i];
            if (curData.gt_cards.length > 0){
                ++this.gangtouCount;
            }
        }
        
        if (this.gangtouCount === 1){
            this.bg1.active = true;
            this.bg2.active = false;
            this.bg4.active = false;
        }else if (this.gangtouCount === 2){
            this.bg1.active = false;
            this.bg2.active = true;
            this.bg4.active = false;
        }else if (this.gangtouCount === 4){
            this.bg1.active = false;
            this.bg2.active = false;
            this.bg4.active = true;
        }else{
            return;
        }

        this._time = -1;
        this.updateGangTou();
    },
    update:function(dt){
        if (this._time <= -1){
            return;
        }
        this._time -= dt;
        if (this._time <= 0){
            this._time = -1;
            cc.vv.global.emit("mj_game_over");
            this.node.active = false;
        }
    },




});