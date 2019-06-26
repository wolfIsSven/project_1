cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _groups: null
    },

    // use this for initialization
    check: function (radioButton) {
        var groupId = radioButton.groupId;
        var buttons = this._groups[groupId];
        if (buttons == null) {
            return;
        }
        for (var i = 0; i < buttons.length; ++i) {
            var btn = buttons[i];
            if (btn == radioButton) {
                btn.check(true);
            } else {
                btn.check(false);
            }
        }
    },
    add: function (radioButton) {
        var groupId = radioButton.groupId;
        if (!this._groups[groupId]){
            this._groups[groupId] = [];
        }
        this._groups[groupId].push(radioButton);
    },
    init: function () {
        this._groups = {};
    },
    checkById:function(groupId,id){
        var buttons = this._groups[groupId];
        if (buttons == null) {
            return;
        }
        for (var i = 0; i < buttons.length; ++i) {
            var btn = buttons[i];
            if (btn.id == id) {
                btn.check(true);
            } else {
                btn.check(false);
            }
        }
    },
    del: function (radioButton) {
        var groupId = radioButton.groupId;
        if (this._groups[groupId] === null){
            return;
        }
        var idx = this._groups[groupId].indexOf(radioButton);
        if (idx != -1) {
            this._groups[groupId].splice(idx, 1);
        }
        if (this._groups[groupId].length == 0) {
            delete this._groups[groupId]
        }
    },
    getRoupsyId:function(groupId){
        return this._groups[groupId];
    }




    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
