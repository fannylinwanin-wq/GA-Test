System.register("chunks:///_virtual/main",["./UIManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UIManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r,i,a,c,s;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Button,s=t.Component}],execute:function(){var u,l,p,f,y;i._RF.push({},"96205CsG6VOZL81ykIwqse2","UIManager",void 0);var g=a.ccclass,v=a.property;t("UIManager",(u=g("UIManager"),l=v(c),u((y=n((f=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i))||this,o(n,"startButton",y,r(n)),n}e(n,t);var i=n.prototype;return i.start=function(){this.startButton.node.on(c.EventType.CLICK,this.onStartButtonClick,this)},i.onStartButtonClick=function(){var t=window.gtag;"function"==typeof t&&t("event","game_start",{event_category:"User Action",event_label:"Start Button Clicked"}),console.log("Start button clicked, event sent to Google Analytics")},i.onDestroy=function(){this.startButton.node.off(c.EventType.CLICK,this.onStartButtonClick,this)},n}(s)).prototype,"startButton",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});