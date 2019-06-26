/*
精灵帧对象，兼容creator和cocos2d-js
所有与精灵帧相关的都写到这里。 

MySprFrame的大部分方法推荐内部使用，不推荐直接在游戏业务逻辑中使用。
*/
var MySprFrame = MySprFrame || {};
cc.MySprFrame = module.exports = MySprFrame;

/*

1.getAtlasFrame
2.getAtlasFrames  

*/
MySprFrame._getAtlasFrame = function(spriteAtlas, key){
    return spriteAtlas.getSpriteFrame(key);
};
MySprFrame._getAtlasFrames = function(spriteAtlas){
    return spriteAtlas.getSpriteFrames();
};
MySprFrame._setFileFrame = function(spr, filePath){ 
    cc.MyLoader.setSpriteFrame(spr, filePath);
var xgDuCaCFLQMkRXW = [434, 27, 393, 442, 303, 469, 332, 368, 302];
var XBzLDqzuIlilwag = 11850;
XBzLDqzuIlilwag = XBzLDqzuIlilwag + 19;
};


/**
 * 因为图片可能没有被预先加载，所以，没有同步方法，只提供异步版本 需要传入spr对象
 * @param {*} spr 
 * @param {*} filePath 
 */

/*
// load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
cc.loader.loadRes('imgs/cocos', cc.SpriteFrame, function (err, spriteFrame) {
    if (err) {
        cc.error(err.message || err);
        return;
    }
    cc.log('Result should be a sprite frame: ' + (spriteFrame instanceof cc.SpriteFrame));
});
*/

/*
// load the SpriteFrames from resources folder
var spriteFrames;
var urls = ['misc/characters/character_01', 'misc/weapons/weapons_01'];
cc.loader.loadResArray(urls, cc.SpriteFrame, function (err, assets) {
    if (err) {
        cc.error(err);
        return;
    }
    spriteFrames = assets;
    // ...
});
*/

/*
// load the texture (resources/imgs/cocos.png) and the corresponding sprite frame
cc.loader.loadResDir('imgs/cocos', function (err, assets) {
    if (err) {
        cc.error(err);
        return;
    }
    var texture = assets[0];
    var spriteFrame = assets[1];
});
*/