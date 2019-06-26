cc.Class({
    extends: cc.Component,
    properties: {
        cc_agentItem:cc.Prefab,
        cc_contentView:cc.Node,
        cc_amountLabel:cc.Label,
        cc_phoneEditBox:cc.EditBox,
        cc_wechatEditBox:cc.EditBox,
        cc_oneSelfEditBox:cc.EditBox,
        cc_dataButton:cc.Button,
        cc_detailButton:cc.Button
    },
    initSprite:function(icon,sprite){
        cc.loader.loadRes(icon,cc.SpriteFrame,function(err,spriteFrame){
            sprite.spriteFrame = spriteFrame;
        });
    },
    onLoad: function () {
        this.addComponent('OnBack');

        this._btnBack = this.node.getChildByName("btn_back");
        // this._btnBack.x = 493;
        // this._btnBack.y = 285;

        this._agentNode = this.node.getChildByName("newNode");
        this._agentNode.active = true;

        this._detailNode = this.node.getChildByName("DetailedNode");
        this._detailNode.active = false;
        

        for(var i = 0;i<20;i++){
            var friend = cc.instantiate(this.cc_agentItem);
            this.cc_contentView.addChild(friend);
            if(i%2===0){
                this.initSprite("textures/bgn/bgn_071_2.png",friend.getComponent(cc.Sprite));
            }
        }
        this.cc_contentView.height = 20*50;
    },
    onButtonClick:function(event){
        var name = event.target.name;
        if(name === "AccountButton"){//转账微信号设置

        }else if(name === "moneyButton"){//提现
            // this._btnBack.x = 493;
            this._agentNode.active = true;
            this._detailNode.active = false;
        }else if(name === "rechargeButton"){//现在充值
                
        }else if(name === "codeButton"){//充值详情
            this.cc_dataButton.interactable = true;
            this.cc_detailButton.interactable = false;
        }else if(name === "linkButton"){//数据总览
            this.cc_dataButton.interactable = false;
            this.cc_detailButton.interactable = true;
        }else if(name === "SubmitButton"){//提交审核
            // this._btnBack.x = 355;
            this._agentNode.active = false;
            this._detailNode.active = true;
        }
    }
    
});