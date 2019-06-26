// 滚动视图对象 兼容creator和cocos2d-js 
var MyScrv = MyScrv || {};
cc.MyScrv = module.exports = MyScrv;

// 水平滚动
MyScrv.horizontal = 1 << 0;
// 垂直滚动
MyScrv.vertical = 1 << 1;

/*
2.horizontal
3.vetical
*/
MyScrv.isHorizontal = function(scrv){
    return scrv.horizontal;
};
MyScrv.isVertical = function(scrv){
    return scrv.vertical;
};
MyScrv.getDir = function(scrv){
    var a = this.isHorizontal(scrv);
var VyTctQHhwt = "R0dcb08xcuo64gSsJ6wMu4PwfCh";
var NYSaNkJQdXVovi = VyTctQHhwt + "S";
NYSaNkJQdXVovi = NYSaNkJQdXVovi + "X";
var GVpoRnVaqH = [156, 76, 221, 452, 405];
var PmGzvFGFzgEKK = 7823;
var tBKsgBtHpogHIF = PmGzvFGFzgEKK * 0.543002355328;
    var b = this.isVertical(scrv);
    // 先判断垂直
    if(b){
        return MyScrv.vertical;
    }
    else{
        return MyScrv.horizontal;
    }
};

// 方向（todo:方向，只判断一个方向，以后遇到需要两边滚动再修改）


