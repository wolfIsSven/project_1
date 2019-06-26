cc.Class({
    extends: cc.Component,
    properties: {
        cc_taskItem:cc.Prefab,
        cc_contentView:cc.Node,
        cc_packInfoNode:cc.Node,
        cc_nameNode:cc.Node,
        cc_positionNode:cc.Node,
        cc_skillNode:cc.Node,
        cc_priceNode:cc.Node,
        cc_scrollView:cc.Node,
        _selectedNode:null
    },
    initPack:function(){
        var packItem = this.cc_packInfoNode.getChildByName("PackItem");
        if(!packItem){
            packItem= cc.instantiate(this.cc_taskItem);
            packItem.parent = this.cc_packInfoNode;
            packItem.x = -155;
            packItem.y = 134;
        }
        packItem.getComponent("PackItem").initData(2);
    },
    adjustPosition:function(){
        if(cc.vv.global.IsScale()){
            this.node.getChildByName("bg").height = cc.winSize.height;
            this.node.getChildByName("topNode").y = cc.winSize.height*0.5;
            this.node.getChildByName("btn_back").y = cc.winSize.height*0.5;
            cc.vv.global.handleScale(this.cc_scrollView);
        }
    },
    onLoad: function () {
        this.adjustPosition();
        this.addComponent('OnBack');
        var self = this;
        cc.vv.global.on("pack_selected",function(data){
            data = data.detail;
            if(self._selectedNode){
                self._selectedNode.cc_selectedNode.active = false;
            }
            self._selectedNode = data;
            self.cc_packInfoNode.active = true;
            self.initPack();
         });

        var length = 32;
        for(var i = 0;i<length;i++){
            var friend = cc.instantiate(this.cc_taskItem);
            friend.getComponent("PackItem").initData(1);
            this.cc_contentView.addChild(friend);
        }
        var row = length%5===0?length/5:(length/5+1);
        this.cc_contentView.height = row*128+(row-1)*5
    },
    onClicked:function(event){
        var name = event.target.name;
        if(name === "dropButton"){

        }else if(name === "allButton"){

        }else if(name === "btn_back2"){
            this.cc_packInfoNode.active = false;
       }else if(name === "offButton"){
        
      }else if(name === "equipButton"){
        
      }
    }
});