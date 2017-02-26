import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';

class PlayerClass extends DisplayClass {
    constructor(x, y, w, h){
        super();

        // Create our simple player square
        this.player = new PIXI.Graphics();
        this.player.beginFill(0x0050cc);
        this.player.drawRect(x, y, w, h);
        this.player.endFill();
        
        // Add him to the stage container
        WorldClass.stage.addChild(this.player);
        
        //add on our methods to the object for return
        this.player.moveBg = (x,y) => {this.moveBg(x,y)};
        
        return this.player;
    }
    movePlayer(player){
        console.log("moveBg");
    }
    
}
export default PlayerClass;