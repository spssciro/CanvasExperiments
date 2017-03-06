import p2 from 'p2';
import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';
import ControlClass from './ControlClass.js';

class PlayerClass extends DisplayClass {
    constructor(x, y, w, h){
        super();
        
        //Tweak the movement amount
        this.movementMultiplier = 5;

        // Create our simple player square
        this.player = PIXI.Sprite.fromImage('./assets/mario.png');
        this.player.x = x;
        this.player.y = y;        
        this.player.width = w;
        this.player.height = h;
        
        // Add player to the stage container
        WorldClass.stage.addChild(this.player);
        
        //add on our methods to the object for return
        this.player.moveBg = (x,y) => {this.moveBg(x,y)};

        //Setup our player's movement        
        ControlClass.addActionCheck({"keyArray":[65],"action": () => this.movePlayer(-1)});
        ControlClass.addActionCheck({"keyArray":[68],"action": () => this.movePlayer(1)});
        ControlClass.addActionCheck({"keyArray":[87],"action": () => this.movePlayer(0,-1)});
        ControlClass.addActionCheck({"keyArray":[83],"action": () => this.movePlayer(0,1)});
        ControlClass.addActionCheck({"keyArray":[32],"action": () => this.jumpPlayer(-5)});

        return this.player;
    }
    movePlayer(dirX = 0, dirY = 0){
        this.player.x += dirX * this.movementMultiplier;
        this.player.y += dirY * this.movementMultiplier;
    }
    jumpPlayer(amount = -1){
        this.player.y += amount;
    }
    
}
export default PlayerClass;