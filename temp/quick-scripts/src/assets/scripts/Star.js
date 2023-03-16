"use strict";
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