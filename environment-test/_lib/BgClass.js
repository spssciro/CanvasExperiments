import  DisplayClass  from './DisplayClass.js';

class BgClass extends DisplayClass {
    super(){
        return configureBG();
    }
    configureBG(){
        let bgPlane = new PIXI.Graphics();
        bgPlane.beginFill(0x0097cc);
        bgPlane.drawRect(0, 0, w, 300);
        bgPlane.endFill();
        bgPlane.x = planeBody.position[0];
        bgPlane.y = planeBody.position[1] *-1;
        bgPlane.rotation = -planeBody.angle; 
        return bgPlane;  
    }
}
export default BgClass;