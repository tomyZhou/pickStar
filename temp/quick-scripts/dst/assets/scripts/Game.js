
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