import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';
import ControlClass from './ControlClass.js';

class PlayerClass extends DisplayClass {
    constructor(x, y, w, h){
        super();
        this.movementMultiplier = 5;

        // Create our simple player square
        this.player = new PIXI.Graphics();
        this.player.beginFill(0x0050cc);
        this.player.drawRect(x, y, w, h);
        this.player.endFill();
        
        // Add player to the stage container
        WorldClass.stage.addChild(this.player);
        
        //add on our methods to the object for return
        this.player.moveBg = (x,y) => {this.moveBg(x,y)};
        
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