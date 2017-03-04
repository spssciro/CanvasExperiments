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
    }
    bodyAnimateLink(){
        console.log("link");
    }
}
export default DisplayClass;