import p2 from 'p2';
import DisplayClass  from './DisplayClass.js';
import WorldClass from './WorldClass';
import ControlClass from './ControlClass.js';
import CollisionGroupClass from './CollisionGroupClass';

class PlayerClass extends DisplayClass {
    constructor(x, y, w, h){
        super();
        
        // Tweak the movement amount
        this.movementMultiplier = 5;

        // Create our simple player sprite
        this.player = PIXI.Sprite.fromImage('./assets/mario.png');
        this.player.x = x;
        this.player.y = y;        
        this.player.width = w;
        this.player.height = h;

        // Add player to the stage container
        WorldClass.stage.addChild(this.player);        

        // Setup the player physics
        this.playerShape = new p2.Box({ width: w, height: h});
        //this.playerShape.collisionGroup = CollisionGroupClass.world;
        this.playerBody = new p2.Body({ mass: 1, position:[w/2,0] });
        this.playerBody.addShape(this.playerShape);
        this.playerBody.fixedRotation = true;
        this.playerBody.damping = 0.5;

        // Player material
        let playerMaterial = new p2.Material();
        this.playerBody.Material = playerMaterial;

        // Add body to the world
        WorldClass.p2World.addBody(this.playerBody);

        // Add on our methods to the object for return
        this.player.moveBg = (x,y) => {this.moveBg(x,y)};
        this.player.animate = () => {this.animate()};

        // Add player shape to the stageArray (for collision detection)
        WorldClass.addToChildrenToStageArray(this.playerShape);

        // Setup our player's movement        
        ControlClass.addActionCheck({"keyArray":[65],"action": () => this.movePlayer(-2)});
        ControlClass.addActionCheck({"keyArray":[68],"action": () => this.movePlayer(2)});

        // Jump The player
        ControlClass.addActionCheck({"keyArray":[32],"action": () => this.jumpPlayer(-5)});

        return this.player;
    }
    animate(){
        this.player.x = this.playerBody.position[0];
        this.player.y = -this.playerBody.position[1];
    }
    movePlayer(dirX = 0, dirY = 0){
        this.playerBody.position[0] += dirX * this.movementMultiplier;
        this.playerBody.position[1] += dirY * this.movementMultiplier;
    }
    jumpPlayer(amount = -1){
        this.playerBody.applyForceLocal([0,50]);
    }
    
}
export default PlayerClass;