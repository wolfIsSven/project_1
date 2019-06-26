// canvas组件 utils方法
var MyCanvas = MyCanvas || {};
cc.MyCanvas = module.exports = MyCanvas;

MyCanvas.fitWidth = function(canvas){
    console.log("xltest MyCanvas.fitWidth");
    var width = true;
    canvas.fitHeight = width;
    canvas.fitWidth = !width;
};
MyCanvas.fitHeight = function(canvas){
    console.log("xltest MyCanvas.fitHeight");
    var height = true;
    canvas.fitHeight = height;
    canvas.fitWidth = !height;
};
MyCanvas.test = function () {
    
};


/*
1.designResolution
2.fitHeight
3.fitWidth
*/
// 


