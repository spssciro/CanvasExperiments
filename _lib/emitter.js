class Emitter {
    constructor(x, y, emitFlag, radius, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.emitFlag = emitFlag;
        //if radius set radius for emitter
        if(radius){
            this.radius = radius;
        }
    }
}

export default Emitter;