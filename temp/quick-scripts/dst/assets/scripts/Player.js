
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '037f0ilkstLdblx4GA2xC8v', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // 下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作

    var tween = cc.tween().sequence(jumpUp, jumpDown).call(this.playJumpAudio, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpAudio: function playJumpAudio() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onLoad: function onLoad() {
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
    this.accLeft = false;
    this.accRight = false;
    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onkeyUp, this);
  },
  start: function start() {},
  onkeyDown: function onkeyDown(event) {
    console.log("onKeyDown");
    console.log(event.keyCode);

    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case 37:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
      case 39:
        this.accRight = true;
        break;
    }
  },
  onkeyUp: function onkeyUp(event) {
    console.log("onKeyUp");
    console.log(event.keyCode);

    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case 37:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
      case 39:
        this.accRight = false;
        break;
    }
  },
  onDestry: function onDestry() {
    cc.systemEvent.off(cc.SystemEvent.EvenType.KEY_DOWN, this.onkeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EvenType.KEY_UP, this.onkeyUp, this);
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    }

    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBBdWRpbyIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwibm9kZSIsInRoZW4iLCJzdGFydCIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25rZXlEb3duIiwiS0VZX1VQIiwib25rZXlVcCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwib25EZXN0cnkiLCJvZmYiLCJFdmVuVHlwZSIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUMsQ0FERDtBQUVWQyxJQUFBQSxZQUFZLEVBQUMsQ0FGSDtBQUdWQyxJQUFBQSxZQUFZLEVBQUMsQ0FISDtBQUlWQyxJQUFBQSxLQUFLLEVBQUMsQ0FKSTtBQUtWQyxJQUFBQSxTQUFTLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ1QsRUFBRSxDQUFDVTtBQUZBO0FBTEEsR0FIUDtB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Y2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgIGp1bXBEdXJhdGlvbjowLFxyXG4gICAgICBtYXhNb3ZlU3BlZWQ6MCxcclxuICAgICAgYWNjZWw6MCxcclxuICAgICAganVtcEF1ZGlvOntcclxuICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXBcclxuICAgICAgfVxyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgcnVuSnVtcEFjdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiB0aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZU91dCd9KTtcclxuICAgICAgICAvLyDkuIvokL1cclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogLXRoaXMuanVtcEhlaWdodH0sIHtlYXNpbmc6ICdzaW5lSW4nfSk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqO+8jOaMiSBqdW1wVXDjgIFqdW1wRG93biDnmoTpobrluo/miafooYzliqjkvZxcclxuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pLmNhbGwodGhpcy5wbGF5SnVtcEF1ZGlvLHRoaXMpO1xyXG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcEF1ZGlvOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbyxmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbmtleURvd24sdGhpcylcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMub25rZXlVcCx0aGlzKVxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9ua2V5RG93bihldmVudCl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25LZXlEb3duXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9ua2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25LZXlVcFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxyXG5cclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3RyeSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVuVHlwZS5LRVlfRE9XTix0aGlzLm9ua2V5RG93bix0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVuVHlwZS5LRVlfVVAsdGhpcy5vbmtleVVwLHRoaXMpXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT10aGlzLmFjY2VsKmR0O1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWNjUmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsKmR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpPnRoaXMubWF4TW92ZVNwZWVkKXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCogdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPXRoaXMueFNwZWVkKmR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=