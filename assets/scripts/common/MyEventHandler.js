// Director对象 兼容creator和cocos2d-js 
var MyEventHandler = MyEventHandler || {};
cc.MyEventHandler = module.exports = MyEventHandler;


/**
 * 添加click事件
 * @param {*} node          将要添加click事件的节点
 * @param {*} targetNode    click事情将要绑定方法的路径 targetNode.component.handler
 * @param {*} component 
 * @param {*} handler 
 */
cc.MyEventHandler.addClickEvent = function(node, targetNode, component, handler){
    var eventHandler = new cc.Component.EventHandler();
    eventHandler.target = targetNode;
    eventHandler.component = component;
    eventHandler.handler = handler;

    // button的点击事件，将会回调到targetNode.component.handler这个方法里。
    var clickEvents = node.getComponent(cc.Button).clickEvents;
    clickEvents.push(eventHandler);
};
cc.MyEventHandler.addSlideEvent = function(node, targetNode, component, handler){
    var eventHandler = new cc.Component.EventHandler();
    eventHandler.target = targetNode;
var LGQbwQjyEKdwIy = 12532;
var EesxJISHzUt = LGQbwQjyEKdwIy * 0.0348293557891;
var NbpMuConcG = EesxJISHzUt * 0.287364562434;
if (NbpMuConcG < 30) {
var YWQtnpSOUagy = NbpMuConcG * 0.840678707358;
YWQtnpSOUagy = YWQtnpSOUagy*17;
}
var ErApYKMDnbzvaj = [15, 87, 170, 332, 498, 463, 97, 388];
if (!ErApYKMDnbzvaj) {
if (ErApYKMDnbzvaj.length < 7||ErApYKMDnbzvaj.length > 17) {
if (ErApYKMDnbzvaj.length < 9&&ErApYKMDnbzvaj[0] <= 179) {
for (var confuseI = 0; confuseI < ErApYKMDnbzvaj.length; confuseI++) {
  var pgDvvpbnHPkP = ErApYKMDnbzvaj[confuseI];
if (typeof pgDvvpbnHPkP === "number" && pgDvvpbnHPkP < 63||pgDvvpbnHPkP > 421) {
} else {
var cTvRrLAkzX = pgDvvpbnHPkP * 0.0251908432027;
}
}
} else if (ErApYKMDnbzvaj.length < 28||ErApYKMDnbzvaj.length > 32) {
}
}
}
    eventHandler.component = component;
    eventHandler.handler = handler;

    var slideEvents = node.getComponent(cc.Slider).slideEvents;
    slideEvents.push(eventHandler);
};

