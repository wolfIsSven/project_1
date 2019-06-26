cc.Class({
    extends: cc.Component,

    properties: {
    },

    _setFileFrame: function (spr, filePath) {
        this.setSpriteFrame(spr, filePath);
    },
    setFileFrame: function (spr, filePath) {
        if (filePath) {
            this._setFileFrame(spr, filePath);
        }
    },
    _getAtlasFrame: function (spriteAtlas, key) {
        return spriteAtlas.getSpriteFrame(key);
    },
    setSpriteFrame: function (spr, url) {
        var urlPic = url;
        if (urlPic) {
            var url = urlPic;
            var type = cc.SpriteFrame;
            var progressCb = function (completedCount, totalCount, item) {
                // 暂时不需要处理
            };
            var completedCb = function (err, resource) {
                spr.spriteFrame = resource;
            };
            cc.loader.loadRes(url, type, progressCb, completeCb);
        }
    },



});
