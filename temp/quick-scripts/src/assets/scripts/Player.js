"use strict";
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