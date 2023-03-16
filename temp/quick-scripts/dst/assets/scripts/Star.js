
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