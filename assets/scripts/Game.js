//https://docs.cocos.com/creator/2.4/manual/zh/getting-started/quick-start.html  教程

cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab:{
            default:null,
            type:cc.Prefab
        },

        maxStarDuration:0,
        minStarDuration:0,

        ground:{
            default:null,
            type:cc.Node
        },

        player:{
            default:null,
            type:cc.Node
        },
        
        scoreDisplay:{
            default:null,
            type:cc.Label
        },

        scoreAudio:{
            default:null,
            type:cc.AudioClip
        }
    
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.groundY = this.ground.y + this.ground.height/2;

        this.createNewStar();

        this.score =0;
    },

    createNewStar:function(){
        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());

        newStar.getComponent('Star').game = this;
    },

    getNewStarPosition:function(){
        var randX = 0;
        var randY = this.groundY + Math.random()* this.player.getComponent('Player').jumpHeight + 50;
        var maxX = this.node.width/2;
        randX = (Math.random()-0.5)*2*maxX

        this.starDuration  = this.minStarDuration +Math.random()*(this.maxStarDuration - this.minStarDuration);
        this.timer = 0;

        return cc.v2(randX,randY)
    },

    getScore:function(){
        this.score +=1;
        this.scoreDisplay.string = 'Score: '+this.score;
        console.info("播放声音");
        cc.audioEngine.playEffect(this.scoreAudio,false);
    },

    start () {

    },

    update (dt) {
        // if(this.timer > this.starDuration){
        //     this.gameOver();
        //     return ;
        // }

        // this.timer +=dt;

    },

    gameOver:function(){
        this.player.stopAllActions();

        cc.director.loadScene('game');
    }
});
