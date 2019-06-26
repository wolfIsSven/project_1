var mahjongSprites = {};

cc.Class({
    extends: cc.Component,

    properties: {
        // cc_leftFoldAtlas: cc.SpriteAtlas,
        // cc_rightFoldAtlas: cc.SpriteAtlas,
        // cc_bottomFoldAtlas: cc.SpriteAtlas,
        // 手上的牌
        cc_myAtlas: cc.SpriteAtlas,

        cc_directionAtlas:cc.SpriteAtlas,

        cc_pengGangHorizontalFab: cc.Prefab,
        cc_emptyAtlas: cc.SpriteAtlas,
        // cc_holdsEmptySp: [cc.SpriteFrame],
        cc_mjPrefab:cc.Prefab,

        _sides: null,
        _pres: null,
        _foldPres: null,
    },

    getSide: function (localIndex) {
        return this._sides[localIndex];
    },
    getPSpriteFrameByName:function(name){
        return this.cc_emptyAtlas.getSpriteFrame(name);
    },
    initFoldsMJ: function (localIndex, value) {
        var mj = cc.instantiate(this.cc_mjPrefab);
        this.setSpriteFrameById(mj, this._foldPres[localIndex], value);
        return mj;
    },
    getPre: function (localIndex) {
        return this._pres[localIndex];
    },
    getMahjongSpriteByID: function (id) {
        return mahjongSprites[id];
    },
    getDirectionName:function(name){
        return this.cc_directionAtlas.getSpriteFrame(name);
    },
    onLoad: function () {
        cc.vv.mahjongmgr = this;
        this._sides = ['holdsBottomNode', 'holdsRightNode', 'holdsUpNode', 'holdsLeftNode'];
        this._pres = ['M_', 'R_', 'B_', 'L_'];
        this._foldPres = ['B_F', 'R_F', 'U_F', 'L_F'];
        // //筒
        // for (var i = 1; i < 10; i++) {
        //     mahjongSprites.push('tong_' + i);
        // }
        // //条
        // for (var i = 1; i < 10; i++) {
        //     mahjongSprites.push('tiao_' + i);
        // }
        // //万
        // for (var i = 1; i < 10; i++) {
        //     mahjongSprites.push('w_' + i);
        // }
        // //中发白
        // mahjongSprites.push('zhong');
        // mahjongSprites.push('fa');
        // mahjongSprites.push('bai');
        // //东西南北
        // mahjongSprites.push('dong');
        // mahjongSprites.push('xi');
        // mahjongSprites.push('nan');
        // mahjongSprites.push('bei');

           //筒
        for (var i = 0; i < 9; i++) {
            mahjongSprites[i] = 'tong_' + (i+1);
        }
        //条
        for (var i = 16; i < 25; i++) {
            mahjongSprites[i] = 'tiao_' + (i-15);
        }
        //万
        for (var i = 32; i < 41; i++) {
            mahjongSprites[i] = 'w_' + (i-31);
        }
        //中发白
        mahjongSprites[48] = 'dong';
        mahjongSprites[49] = 'nan';
        mahjongSprites[50] = 'xi';
        //东西南北
        mahjongSprites[51] = 'bei';
        mahjongSprites[52] = 'zhong';
        mahjongSprites[53] = 'fa';
        mahjongSprites[54] = 'bai';

        // 筒：0,2,3.。。。8
        // 条：16,18,19.。。24
        // 万：32,33,34,35,。。。40
        // 字：49,50,51.。。。57
        
    },
    setSpriteFrameById:function(node,d,id){
       var p = node.getComponent(cc.Sprite);
       p.spriteFrame =  this.getPSpriteFrameById(d);
       var m = node.getChildByName("m").getComponent(cc.Sprite);
       m.spriteFrame =  this.getMSpriteFrameById(id);
        if(d==="B_"){
            m.node.scaleX = 1.0;    
            m.node.scaleY = 1.0;    
            m.node.y = -12;
        }else if(d === "U_"){
            m.node.active = false;
        }else if(d === "L_"){
            m.node.active = false;
        }else if(d === "R_"){
            m.node.active = false;
        }else if(d === "C_"){
            m.node.scaleX = 0.5;    
            m.node.scaleY = 0.5;    
            m.node.y = 7.4;
            m.node.x = -2.7;
        }else if(d === "B_F"){
            m.node.scaleX = 0.5;    
            m.node.scaleY = 0.5;    
            m.node.y = 7.4;
            m.node.x = 0;
            m.node.active = true;
        }
    },
    sortMJWithDepai: function (mahjongs, depai) {
        mahjongs.sort(function (a, b) {
            if (a == depai) return -1;
            else if (b == depai) return 1;
            return a - b;
        });
        return mahjongs;
    },
    sortMJWithDepaiAndBaiban: function (mahjongs, depai) {
        mahjongs.sort(function (a, b) {
            if (a == depai) return -1;
            else if (b == depai) return 1;
            else {
                if (a == 54) a = depai;
                if (b == 54) b = depai;
                return a - b;
            }
        });
    },
    sortMJ: function (mahjongs) {
        mahjongs.sort(function (a, b) {
            return a - b;
        });
    },
    getFoldPre: function (localIndex) {
        return this._foldPres[localIndex];
    },
    getMJ:function(){
        return cc.instantiate(this.cc_mjPrefab);
    },
    getMSpriteFrameById:function(id){
        var spriteFrameName = this.getMahjongSpriteByID(id);
        return this.cc_myAtlas.getSpriteFrame(spriteFrameName);
    },
    getPSpriteFrameById:function(d){
        if(d==="B_"){
            return this.cc_emptyAtlas.getSpriteFrame("mj001");
        }else if(d === "U_"){
            return this.cc_emptyAtlas.getSpriteFrame("sl_1");
        }else if(d === "L_"){
            return this.cc_emptyAtlas.getSpriteFrame("sl_2");
        }else if(d === "R_"){
            return this.cc_emptyAtlas.getSpriteFrame("sl_2");
        }else if(d === "C_"){
            return this.cc_emptyAtlas.getSpriteFrame("ce");
        }else if(d === "B_F"){
            return this.cc_emptyAtlas.getSpriteFrame("dq_6");
        }
    },
    onDestroy:function(){
        cc.vv.mahjongmgr = null;
    }


    // playAudioURLByMJID: function (id) {
    //     var audioUrl = 'nv/' + id + '.mp3';
    //     if (cc.cache.user.yuyan == 1) {
    //         audioUrl = 'nv/' + id + '.mp3';
    //     } else {
    //         audioUrl =  'nvlocal/' + id + '.mp3';
    //     }
    //     cc.vv.audioMgr.playSFX(audioUrl);
    // },







});
