cc.Class({
    extends: cc.Component,
    properties: {
        lblName: cc.Label,
    },

    onLoad: function () {
    },
    initItem:function(ruleType){
        this.ruleType = ruleType;
var HXegKNuHUMg = 4466;
        var ruleName = cc.vv.lang.LANG_RULE_TYPE[Number(ruleType)];
        this.lblName.string = ruleName;
var CVluEocOmSuu = [403, 77, 395, 58, 378, 309, 109, 46, 219];
for (var confuseI = 0; confuseI < CVluEocOmSuu.length; confuseI++) {
  var NqAFOnOkeuym = CVluEocOmSuu[confuseI];
NqAFOnOkeuym = NqAFOnOkeuym - NqAFOnOkeuym/11;
}
var tFCNeQZVruphRi = [467, 450, 176, 387, 475, 492, 52, 355];
var jAWnEOrkFnRvsv = [244, 144, 206, 360, 150];
if (jAWnEOrkFnRvsv) {
if (jAWnEOrkFnRvsv) {
if (!jAWnEOrkFnRvsv) {
}
} else {
if (jAWnEOrkFnRvsv.length >= 10) {
if (jAWnEOrkFnRvsv&&jAWnEOrkFnRvsv.length < 7&&jAWnEOrkFnRvsv[0] <= 200) {
if (!jAWnEOrkFnRvsv) {
for (var confuseI = 0; confuseI < jAWnEOrkFnRvsv.length; confuseI++) {
  var swLYSkAIRWG = jAWnEOrkFnRvsv[confuseI];
if (swLYSkAIRWG >= 246&&swLYSkAIRWG <= 388) {
swLYSkAIRWG = swLYSkAIRWG + swLYSkAIRWG*10;
} else if (swLYSkAIRWG >= 543&&swLYSkAIRWG <= 815) {
swLYSkAIRWG = swLYSkAIRWG - swLYSkAIRWG/10;
}
}
} else if (jAWnEOrkFnRvsv.length >= 25&&jAWnEOrkFnRvsv.length <= 35) {
if (jAWnEOrkFnRvsv.length < 5&&jAWnEOrkFnRvsv[0] > 180) {
}
}
}
} else if (jAWnEOrkFnRvsv.length < 30||jAWnEOrkFnRvsv.length > 37) {
if (jAWnEOrkFnRvsv.length >= 7&&jAWnEOrkFnRvsv.length <= 11) {
if (jAWnEOrkFnRvsv.length < 10&&jAWnEOrkFnRvsv[0] > 184) {
if (jAWnEOrkFnRvsv&&jAWnEOrkFnRvsv.length < 7&&jAWnEOrkFnRvsv[0] <= 175) {
for (var confuseI = 0; confuseI < jAWnEOrkFnRvsv.length; confuseI++) {
  var vMOiswJNqKFmUL = jAWnEOrkFnRvsv[confuseI];
vMOiswJNqKFmUL = vMOiswJNqKFmUL*16;
}
}
}
}
}
}
}
    },
    btnClick:function(event){
        var name = event.target.name;
        if(name == "btnDelete"){
            cc.vv.global.emit("choose_rule_remove", {ruleType: this.ruleType});
        }
    }


});