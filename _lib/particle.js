class Particle {
    constructor(x, y, vx, vy, stageReference, life) {
        this.p = new createjs.Shape();
        this.p.x = x;
        this.p.y = y;
        this.p.vx = vx;
        this.p.vy = vy;
        this.life = life;
        this.deadFlag = false;
        
        //If we pass in stage lets just add it
        if(stageReference){
            stageReference.addChild(this.p);
        }
    }
    createShape(type, size, color){
        if(type === "square" || type === 1){
            this.p.graphics.beginFill(color).drawRect(0, 0, size,size);
        }
        else{
            this.p.graphics.beginFill(color).drawCircle(0, 0, size);
        }
    }
    addMass(m){
        this.m = m;
    }
    move(x,y){
        this.p.x = x;
        this.p.y = y; 
    }
    accelerate(vx,vy){
        this.p.x = this.p.x + vx;
        this.p.y = this.p.y + vy;          
    }
    lifeSpan(decrease, callback){
        this.life -= decrease;
        if(this.life <= 0){
            this.deadFlag = true;
        }
    }
    animate(){
        this.p.x = this.p.x + this.p.vx;
        this.p.y = this.p.y + this.p.vy;
    }    
    remove(stage){
        stage.removeChild(this.p);
    }
}

export default Particle;