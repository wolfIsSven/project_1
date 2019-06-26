// Director对象 兼容creator和cocos2d-js 
var MySpr = MySpr || {};
cc.MySpr = module.exports = MySpr;

/*
属性：
spriteFrame
type
fillType
fillCenter
fillStart
fillRange
trim
srcBlendFactor
dstBlendFactor
sizeMode

方法：
setVisible
setInsetLeft
getInsetLeft
setInsetTop
getInsetTop
setInsetRight
getInsetRight
setInsetBottom
getInsetBottom
onEnable
*/

/**
 * 设置spr的spriteFrame, 用atlas的方式
 * @param {*} spr 
 * @param {*} atlasName 这里只填写plist的名字，不需要加后缀 
 * @param {*} key 
 */
MySpr.setAtlasFrame = function(spr, atlasName, key){
    var sprFrame = cc.MySprFrame._getAtlasFrame(cc.MyStatic[atlasName+"_atlas"], key);
    spr.spriteFrame = sprFrame;    
};
MySpr.setFileFrame = function(spr, filePath){
    if(filePath){
        cc.MySprFrame._setFileFrame(spr, filePath);
    }
    else{
        // 默认图片
        this.setAtlasFrame(spr, "common", "icon_7");
    }
};
/**
 * 设置spr的spriteFrame，用文件到方式
 * @param {*} spr 
 * @param {*} filePath 
 */
