import  PixiJS  from '../node_modules/';

class DisplayClass{
    constructor(x = 0, y = 0, rotation = 0, height = 10, width = 10){
        this.x = x;
        this.y = y;
        this.rotation = rotation;
        this.height = height;
        this.width = width;
        
        this.lastX;
        this.lastY;
        this.lastRotation;

        this.body;
        console.info("display class created");
    }
    attachDisplay(){
        console.log(this.x + "yes");
    }
    attachBody(){

    }
    delete(){

    }
    move(){

    }    
    animate(){

    }
}
export default DisplayClass;