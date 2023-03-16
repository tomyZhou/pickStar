
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBBdWRpbyIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwibm9kZSIsInRoZW4iLCJzdGFydCIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25rZXlEb3duIiwiS0VZX1VQIiwib25rZXlVcCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwib25EZXN0cnkiLCJvZmYiLCJFdmVuVHlwZSIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUMsQ0FERDtBQUVWQyxJQUFBQSxZQUFZLEVBQUMsQ0FGSDtBQUdWQyxJQUFBQSxZQUFZLEVBQUMsQ0FISDtBQUlWQyxJQUFBQSxLQUFLLEVBQUMsQ0FKSTtBQUtWQyxJQUFBQSxTQUFTLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ1QsRUFBRSxDQUFDVTtBQUZBO0FBTEEsR0FIUDtBQWVMQyxFQUFBQSxhQWZLLDJCQWVZO0FBQ2I7QUFDQSxRQUFJQyxNQUFNLEdBQUdaLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXQyxFQUFYLENBQWMsS0FBS1QsWUFBbkIsRUFBaUM7QUFBQ1UsTUFBQUEsQ0FBQyxFQUFFLEtBQUtYO0FBQVQsS0FBakMsRUFBdUQ7QUFBQ1ksTUFBQUEsTUFBTSxFQUFFO0FBQVQsS0FBdkQsQ0FBYixDQUZhLENBR2I7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHakIsRUFBRSxDQUFDYSxLQUFILEdBQVdDLEVBQVgsQ0FBYyxLQUFLVCxZQUFuQixFQUFpQztBQUFDVSxNQUFBQSxDQUFDLEVBQUUsQ0FBQyxLQUFLWDtBQUFWLEtBQWpDLEVBQXdEO0FBQUNZLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBQXhELENBQWYsQ0FKYSxDQU1iOztBQUNBLFFBQUlILEtBQUssR0FBR2IsRUFBRSxDQUFDYSxLQUFILEdBQVdLLFFBQVgsQ0FBb0JOLE1BQXBCLEVBQTRCSyxRQUE1QixFQUFzQ0UsSUFBdEMsQ0FBMkMsS0FBS0MsYUFBaEQsRUFBOEQsSUFBOUQsQ0FBWixDQVBhLENBUWI7O0FBQ0EsV0FBT3BCLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXUSxhQUFYLENBQXlCUixLQUF6QixDQUFQO0FBQ0gsR0F6Qkk7QUEyQkxPLEVBQUFBLGFBQWEsRUFBQyx5QkFBVTtBQUNwQnBCLElBQUFBLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLZixTQUEvQixFQUF5QyxLQUF6QztBQUNILEdBN0JJO0FBK0JMZ0IsRUFBQUEsTUEvQkssb0JBK0JLO0FBQ04sUUFBSUMsVUFBVSxHQUFHLEtBQUtkLGFBQUwsRUFBakI7QUFDQVgsSUFBQUEsRUFBRSxDQUFDYSxLQUFILENBQVMsS0FBS2EsSUFBZCxFQUFvQkMsSUFBcEIsQ0FBeUJGLFVBQXpCLEVBQXFDRyxLQUFyQztBQUVBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBRUEvQixJQUFBQSxFQUFFLENBQUNnQyxXQUFILENBQWVDLEVBQWYsQ0FBa0JqQyxFQUFFLENBQUNrQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQW9ELEtBQUtDLFNBQXpELEVBQW1FLElBQW5FO0FBQ0FyQyxJQUFBQSxFQUFFLENBQUNnQyxXQUFILENBQWVDLEVBQWYsQ0FBa0JqQyxFQUFFLENBQUNrQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTNDLEVBQWtELEtBQUtDLE9BQXZELEVBQStELElBQS9EO0FBR0gsR0E1Q0k7QUE4Q0xYLEVBQUFBLEtBOUNLLG1CQThDSSxDQUVSLENBaERJO0FBa0RMUyxFQUFBQSxTQWxESyxxQkFrREtHLEtBbERMLEVBa0RXO0FBRVpDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQUQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csT0FBbEI7O0FBRUEsWUFBT0gsS0FBSyxDQUFDRyxPQUFiO0FBQ0ksV0FBSzNDLEVBQUUsQ0FBQzRDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNBLFdBQUssRUFBTDtBQUNJLGFBQUtqQixPQUFMLEdBQWUsSUFBZjtBQUNBOztBQUNKLFdBQUs3QixFQUFFLENBQUM0QyxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBbEI7QUFDQSxXQUFLLEVBQUw7QUFDSSxhQUFLakIsUUFBTCxHQUFnQixJQUFoQjtBQUNBO0FBUlI7QUFVSCxHQWpFSTtBQW1FTFMsRUFBQUEsT0FuRUssbUJBbUVHQyxLQW5FSCxFQW1FUztBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE9BQWxCOztBQUVBLFlBQU9ILEtBQUssQ0FBQ0csT0FBYjtBQUNJLFdBQUszQyxFQUFFLENBQUM0QyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsQ0FBbEI7QUFDQSxXQUFLLEVBQUw7QUFDSSxhQUFLakIsT0FBTCxHQUFlLEtBQWY7QUFDQTs7QUFDSixXQUFLN0IsRUFBRSxDQUFDNEMsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQWxCO0FBQ0EsV0FBSyxFQUFMO0FBQ0ksYUFBS2pCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTtBQVJSO0FBVUgsR0FqRkk7QUFtRkxrQixFQUFBQSxRQW5GSyxzQkFtRks7QUFDTmhELElBQUFBLEVBQUUsQ0FBQ2dDLFdBQUgsQ0FBZWlCLEdBQWYsQ0FBbUJqRCxFQUFFLENBQUNrQyxXQUFILENBQWVnQixRQUFmLENBQXdCZCxRQUEzQyxFQUFvRCxLQUFLQyxTQUF6RCxFQUFtRSxJQUFuRTtBQUNBckMsSUFBQUEsRUFBRSxDQUFDZ0MsV0FBSCxDQUFlaUIsR0FBZixDQUFtQmpELEVBQUUsQ0FBQ2tDLFdBQUgsQ0FBZWdCLFFBQWYsQ0FBd0JaLE1BQTNDLEVBQWtELEtBQUtDLE9BQXZELEVBQStELElBQS9EO0FBQ0gsR0F0Rkk7QUF5RkxZLEVBQUFBLE1BekZLLGtCQXlGR0MsRUF6RkgsRUF5Rk87QUFDUixRQUFHLEtBQUt2QixPQUFSLEVBQWdCO0FBQ1osV0FBS0UsTUFBTCxJQUFjLEtBQUt4QixLQUFMLEdBQVc2QyxFQUF6QjtBQUNILEtBRkQsTUFFTSxJQUFHLEtBQUt0QixRQUFSLEVBQWlCO0FBQ25CLFdBQUtDLE1BQUwsSUFBZSxLQUFLeEIsS0FBTCxHQUFXNkMsRUFBMUI7QUFDSDs7QUFFRCxRQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLdkIsTUFBZCxJQUFzQixLQUFLekIsWUFBOUIsRUFBMkM7QUFDdkMsV0FBS3lCLE1BQUwsR0FBYyxLQUFLekIsWUFBTCxHQUFtQixLQUFLeUIsTUFBeEIsR0FBK0JzQixJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLdkIsTUFBZCxDQUE3QztBQUNIOztBQUVELFNBQUtMLElBQUwsQ0FBVTZCLENBQVYsSUFBYyxLQUFLeEIsTUFBTCxHQUFZcUIsRUFBMUI7QUFFSDtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgIGp1bXBEdXJhdGlvbjowLFxyXG4gICAgICBtYXhNb3ZlU3BlZWQ6MCxcclxuICAgICAgYWNjZWw6MCxcclxuICAgICAganVtcEF1ZGlvOntcclxuICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXBcclxuICAgICAgfVxyXG4gICBcclxuICAgIH0sXHJcblxyXG4gICAgcnVuSnVtcEFjdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiB0aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luZU91dCd9KTtcclxuICAgICAgICAvLyDkuIvokL1cclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy50d2VlbigpLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7eTogLXRoaXMuanVtcEhlaWdodH0sIHtlYXNpbmc6ICdzaW5lSW4nfSk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqO+8jOaMiSBqdW1wVXDjgIFqdW1wRG93biDnmoTpobrluo/miafooYzliqjkvZxcclxuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pLmNhbGwodGhpcy5wbGF5SnVtcEF1ZGlvLHRoaXMpO1xyXG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcEF1ZGlvOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbyxmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbmtleURvd24sdGhpcylcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMub25rZXlVcCx0aGlzKVxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9ua2V5RG93bihldmVudCl7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25LZXlEb3duXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleUNvZGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9ua2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25LZXlVcFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKVxyXG5cclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3RyeSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVuVHlwZS5LRVlfRE9XTix0aGlzLm9ua2V5RG93bix0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVuVHlwZS5LRVlfVVAsdGhpcy5vbmtleVVwLHRoaXMpXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT10aGlzLmFjY2VsKmR0O1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYWNjUmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsKmR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpPnRoaXMubWF4TW92ZVNwZWVkKXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCogdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPXRoaXMueFNwZWVkKmR0O1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58e21GiasRKybVpRqMnr+V6', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    //主角离星星之间的距离小于这个数值时，就会被吃掉。
    distance: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var distance = this.node.position.sub(playerPos).mag();
    return distance;
  },
  onPicked: function onPicked() {
    this.game.createNewStar();
    this.game.getScore();
    this.node.destroy();
  },
  update: function update(dt) {
    if (this.getPlayerDistance() < this.distance) {
      this.onPicked();
      return;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRpc3RhbmNlIiwic3RhcnQiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsIm5vZGUiLCJwb3NpdGlvbiIsInN1YiIsIm1hZyIsIm9uUGlja2VkIiwiY3JlYXRlTmV3U3RhciIsImdldFNjb3JlIiwiZGVzdHJveSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxRQUFRLEVBQUM7QUFGRCxHQUhQO0FBUUw7QUFFQTtBQUVBQyxFQUFBQSxLQVpLLG1CQVlJLENBRVIsQ0FkSTtBQWdCTEMsRUFBQUEsaUJBQWlCLEVBQUMsNkJBQVU7QUFDeEIsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEI7QUFFQSxRQUFJTixRQUFRLEdBQUksS0FBS08sSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1Qk4sU0FBdkIsRUFBa0NPLEdBQWxDLEVBQWhCO0FBRUEsV0FBT1YsUUFBUDtBQUNILEdBdEJJO0FBd0JMVyxFQUFBQSxRQUFRLEVBQUMsb0JBQVU7QUFDZixTQUFLUCxJQUFMLENBQVVRLGFBQVY7QUFFQSxTQUFLUixJQUFMLENBQVVTLFFBQVY7QUFFQSxTQUFLTixJQUFMLENBQVVPLE9BQVY7QUFDSCxHQTlCSTtBQWtDTEMsRUFBQUEsTUFsQ0ssa0JBa0NHQyxFQWxDSCxFQWtDTztBQUNSLFFBQUcsS0FBS2QsaUJBQUwsS0FBMEIsS0FBS0YsUUFBbEMsRUFBMkM7QUFDdkMsV0FBS1csUUFBTDtBQUNBO0FBQ0g7QUFDSjtBQXZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/kuLvop5LnprvmmJ/mmJ/kuYvpl7TnmoTot53nprvlsI/kuo7ov5nkuKrmlbDlgLzml7bvvIzlsLHkvJrooqvlkIPmjonjgIJcclxuICAgICAgICBkaXN0YW5jZTowLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZGlzdGFuY2UgID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdGFuY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uUGlja2VkOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5nYW1lLmNyZWF0ZU5ld1N0YXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLmdldFNjb3JlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKTwgdGhpcy5kaXN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '559fehKXcBMqpCKUc7uONLa', 'Game');
// scripts/Game.js

"use strict";

//https://docs.cocos.com/creator/2.4/manual/zh/getting-started/quick-start.html  教程
cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 0,
    ground: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.groundY = this.ground.y + this.ground.height / 2;
    this.createNewStar();
    this.score = 0;
  },
  createNewStar: function createNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
    return cc.v2(randX, randY);
  },
  getScore: function getScore() {
    this.score += 1;
    this.scoreDisplay.string = 'Score: ' + this.score;
    console.info("播放声音");
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  start: function start() {},
  update: function update(dt) {// if(this.timer > this.starDuration){
    //     this.gameOver();
    //     return ;
    // }
    // this.timer +=dt;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    cc.director.loadScene('game');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwiY3JlYXRlTmV3U3RhciIsInNjb3JlIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwicmFuZFgiLCJyYW5kWSIsIk1hdGgiLCJyYW5kb20iLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwic3RhckR1cmF0aW9uIiwidGltZXIiLCJ2MiIsImdldFNjb3JlIiwic3RyaW5nIiwiY29uc29sZSIsImluZm8iLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJQUREO0FBRVBDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBREg7QUFNUkMsSUFBQUEsZUFBZSxFQUFDLENBTlI7QUFPUkMsSUFBQUEsZUFBZSxFQUFDLENBUFI7QUFTUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVISixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1U7QUFGTCxLQVRDO0FBY1JDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFRLElBREw7QUFFSE4sTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNVO0FBRkwsS0FkQztBQW1CUkUsSUFBQUEsWUFBWSxFQUFDO0FBQ1QsaUJBQVEsSUFEQztBQUVUUCxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ2E7QUFGQyxLQW5CTDtBQXdCUkMsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVEsSUFERDtBQUVQVCxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ2U7QUFGRDtBQXhCSCxHQUhQO0FBbUNMO0FBRUFDLEVBQUFBLE1BckNLLG9CQXFDSztBQUNOLFNBQUtDLE9BQUwsR0FBZSxLQUFLUixNQUFMLENBQVlTLENBQVosR0FBZ0IsS0FBS1QsTUFBTCxDQUFZVSxNQUFaLEdBQW1CLENBQWxEO0FBRUEsU0FBS0MsYUFBTDtBQUVBLFNBQUtDLEtBQUwsR0FBWSxDQUFaO0FBQ0gsR0EzQ0k7QUE2Q0xELEVBQUFBLGFBQWEsRUFBQyx5QkFBVTtBQUNwQixRQUFJRSxPQUFPLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS25CLFVBQXBCLENBQWQ7QUFDQSxTQUFLb0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CSCxPQUFuQjtBQUNBQSxJQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEI7QUFFQUwsSUFBQUEsT0FBTyxDQUFDTSxZQUFSLENBQXFCLE1BQXJCLEVBQTZCQyxJQUE3QixHQUFvQyxJQUFwQztBQUNILEdBbkRJO0FBcURMRixFQUFBQSxrQkFBa0IsRUFBQyw4QkFBVTtBQUN6QixRQUFJRyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLZCxPQUFMLEdBQWVlLElBQUksQ0FBQ0MsTUFBTCxLQUFlLEtBQUt0QixNQUFMLENBQVlpQixZQUFaLENBQXlCLFFBQXpCLEVBQW1DTSxVQUFqRSxHQUE4RSxFQUExRjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLWCxJQUFMLENBQVVZLEtBQVYsR0FBZ0IsQ0FBM0I7QUFDQU4sSUFBQUEsS0FBSyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsTUFBTCxLQUFjLEdBQWYsSUFBb0IsQ0FBcEIsR0FBc0JFLElBQTlCO0FBRUEsU0FBS0UsWUFBTCxHQUFxQixLQUFLN0IsZUFBTCxHQUFzQndCLElBQUksQ0FBQ0MsTUFBTCxNQUFlLEtBQUsxQixlQUFMLEdBQXVCLEtBQUtDLGVBQTNDLENBQTNDO0FBQ0EsU0FBSzhCLEtBQUwsR0FBYSxDQUFiO0FBRUEsV0FBT3RDLEVBQUUsQ0FBQ3VDLEVBQUgsQ0FBTVQsS0FBTixFQUFZQyxLQUFaLENBQVA7QUFDSCxHQS9ESTtBQWlFTFMsRUFBQUEsUUFBUSxFQUFDLG9CQUFVO0FBQ2YsU0FBS25CLEtBQUwsSUFBYSxDQUFiO0FBQ0EsU0FBS1QsWUFBTCxDQUFrQjZCLE1BQWxCLEdBQTJCLFlBQVUsS0FBS3BCLEtBQTFDO0FBQ0FxQixJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxNQUFiO0FBQ0EzQyxJQUFBQSxFQUFFLENBQUM0QyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSy9CLFVBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0F0RUk7QUF3RUxnQyxFQUFBQSxLQXhFSyxtQkF3RUksQ0FFUixDQTFFSTtBQTRFTEMsRUFBQUEsTUE1RUssa0JBNEVHQyxFQTVFSCxFQTRFTyxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFSCxHQXBGSTtBQXNGTEMsRUFBQUEsUUFBUSxFQUFDLG9CQUFVO0FBQ2YsU0FBS3RDLE1BQUwsQ0FBWXVDLGNBQVo7QUFFQWxELElBQUFBLEVBQUUsQ0FBQ21ELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNIO0FBMUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvemgvZ2V0dGluZy1zdGFydGVkL3F1aWNrLXN0YXJ0Lmh0bWwgIOaVmeeoi1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzdGFyUHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjowLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjowLFxyXG5cclxuICAgICAgICBncm91bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXllcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzY29yZURpc3BsYXk6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZUF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3U3RhcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlID0wO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVOZXdTdGFyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246ZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcmFuZFggPSAwO1xyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKS0wLjUpKjIqbWF4WFxyXG5cclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiAgPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArTWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCxyYW5kWSlcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2NvcmU6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNjb3JlICs9MTtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5zdHJpbmcgPSAnU2NvcmU6ICcrdGhpcy5zY29yZTtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCLmkq3mlL7lo7Dpn7NcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy50aW1lciArPWR0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
