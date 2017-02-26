import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';

class BgClass extends DisplayClass {
    constructor(x, y, w, h){
        super();

        this.plane = new PIXI.Graphics();
        this.plane.beginFill(0x0097cc);
        this.plane.drawRect(x, y, w, h);
        this.plane.endFill();
        WorldClass.stage.addChild(this.plane);
        
        this.plane.moveBg = (x,y) => {this.moveBg(x,y)};
        return this.plane;
    }
    moveBg(x,y){
        this.plane.x = x;
        this.plane.y = y;
    }
}
export default BgClass;