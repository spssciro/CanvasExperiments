class Particle {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = yx;
        this.vy = vy;
    }
    move(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;        
    }
}