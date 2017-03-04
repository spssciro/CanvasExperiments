import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';
import ControlClass from './ControlClass.js';

class PlayerClass extends DisplayClass {
    constructor(x, y, w, h){
        super();

        // Create our simple player square
        this.player = new PIXI.Graphics();
        this.player.beginFill(0x0050cc);
        this.player.drawRect(x, y, w, h);
        this.player.endFill();
        
        // Add player to the stage container
        WorldClass.stage.addChild(this.player);
        
        //add on our methods to the object for return
        this.player.moveBg = (x,y) => {this.moveBg(x,y)};
        
        ControlClass.addActionCheck({"keyArray":[87],"action": () => this.movePlayer()});
        ControlClass.addActionCheck({"keyArray":[68],"action": () => this.movePlayer()});
        return this.player;
    }
    movePlayer(player){
        this.player.x ++;
    }
    
}
export default PlayerClass;