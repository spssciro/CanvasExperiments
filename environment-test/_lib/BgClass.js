import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';

class BgClass extends DisplayClass {
    constructor(x, y, w, h){
        super();

        //Create a container for the BG
        this.bgContainer = new PIXI.Container(x,y,w,h);
        
        //now make a plane for the BG color
        let bgRectangle = new PIXI.Graphics();
        bgRectangle.beginFill(0x0097cc);
        bgRectangle.drawRect(x, y, w, h);
        bgRectangle.endFill();

        //Add the bg to container
        this.bgContainer.addChild(bgRectangle);
        //Add the container to the stage
        WorldClass.stage.addChild(this.bgContainer);
        this.bgContainer.moveBg = (x,y) => {this.moveBg(x,y)};
        
        return this.bgContainer;
    }
    moveBg(player){
        console.log("moveBg");
        //this.bgContainer.x = x;
        //this.bgContainer.y = y;
    }
    addToBgContainer(x,y,graphic){

    }
    
}
export default BgClass;