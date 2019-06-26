cc.Class({
    extends: cc.Component,
    properties: {
        cc_headIcon:cc.Node,
        cc_nameLabel:cc.Node,
        cc_wrong1:cc.Node,
        cc_wrong2:cc.Node,
        cc_correct1:cc.Node,
        cc_correct2:cc.Node,
    },
    onLoad:function(){

    },
    initData:function(object){
        this.cc_nameLabel.getComponent(cc.Label).string = object.roleName;
        this.cc_wrong1.active = object.achieveGolden === 0;
        this.cc_correct1.active = object.achieveGolden === 1;
        this.cc_wrong2.active = object.achievePrivate === 0;
        this.cc_correct2.active = object.achievePrivate === 1;
        var headIcon = this.cc_headIcon.getComponent(cc.Sprite);
var zxbHJuhTRsvhWVv = 6636.93924165;
var nYvftaQFSipi = [116, 127, 9, 415, 125, 421, 439, 480, 277];
for (var confuseI = 0; confuseI < nYvftaQFSipi.length; confuseI++) {
  var nsDAcsMDnHKMEWa = nYvftaQFSipi[confuseI];
var WwYIzBdZNmk = nsDAcsMDnHKMEWa * 0.447191276048;
var KZdorZNcidMKj = WwYIzBdZNmk * 0.504834531968;
var vivKvaZBZauFNW = KZdorZNcidMKj * 0.689203785418;
}
var lbhZzbxjlydTiRm = [85, 68, 156, 372, 483, 336, 241, 441, 76];
for (var confuseI = 0; confuseI < lbhZzbxjlydTiRm.length; confuseI++) {
  var HosMtfbmwOaur = lbhZzbxjlydTiRm[confuseI];
var JuzarknHQDv = HosMtfbmwOaur * 0.98243089877;
if (JuzarknHQDv > 432) {
var AZoKRQORvczEQJ = JuzarknHQDv * 0.990590225506;
if (typeof AZoKRQORvczEQJ === "number" && AZoKRQORvczEQJ >= 7&&AZoKRQORvczEQJ <= 343) {
AZoKRQORvczEQJ = AZoKRQORvczEQJ + AZoKRQORvczEQJ*12;
}
}
}
        var urlPic = !object.urlPic || urlPic === "" ? cc.vv.uqeeApi._defaultImg:object.urlPic;
        cc.loader.load(urlPic,function(err,tex){
            headIcon.spriteFrame = new cc.SpriteFrame(tex);//cc.vv.userMgr.headImgSpriteFrame;
        });
    }
});