import WorldClass from './WorldClass';

class CollisionGroupClass {
    constructor(){
        // Player collision group
        this.player = 1;
        // World collision group
        this.world = 2;
        // Enemy collision group
        this.enemy = 3;
    }
    
    collisionCheck(){
        WorldClass.stageArray.forEach((shapeA) => {
            WorldClass.stageArray.forEach((shapeB) => {
                if((shapeA.collisionGroup & shapeB.collisionMask) !== 0 && (shapeB.collisionGroup & shapeA.collisionMask) !== 0){
                    console.error("collision");
                }
            });            
        });
    }
}

export default (new CollisionGroupClass);