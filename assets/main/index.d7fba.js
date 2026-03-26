System.register("chunks:///_virtual/main",["./UIManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/UIManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,i,a,r,s,c;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Button,c=t.Component}],execute:function(){var l,u,d,f,g;a._RF.push({},"96205CsG6VOZL81ykIwqse2","UIManager",void 0);var p=r.ccclass,y=r.property;t("UIManager",(l=p("UIManager"),u=y(s),l((g=n((f=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(n=t.call.apply(t,[this].concat(a))||this)._sessionStartTime=0,o(n,"startButton",g,i(n)),n}e(n,t);var a=n.prototype;return a.onLoad=function(){var t=this;this._sessionStartTime=Date.now(),console.log("Slot 遊戲開始計時"),window.addEventListener("beforeunload",(function(){t.sendFinalStayTime()})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&console.log("玩家切換分頁/縮小視窗")}))},a.sendFinalStayTime=function(){var t=Math.floor((Date.now()-this._sessionStartTime)/1e3);"function"==typeof window.gtag&&window.gtag("event","slot_session_duration",{duration_seconds:t,game_type:"Slot_Classic"})},a.start=function(){this.startButton.node.on(s.EventType.CLICK,this.onStartButtonClick,this)},a.onStartButtonClick=function(){var t=window.gtag;"function"==typeof t&&t("event","game_start",{event_category:"User Action",event_label:"Start Button Clicked"}),console.log("Start button clicked, event sent to Google Analytics")},a.onDestroy=function(){this.startButton.node.off(s.EventType.CLICK,this.onStartButtonClick,this)},n}(c)).prototype,"startButton",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));a._RF.pop()}}}));

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