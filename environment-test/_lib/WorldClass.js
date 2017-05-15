import 'pixi.js';
import p2 from 'p2';
import CollisionGroupClass from './CollisionGroupClass';

class WorldClass {
    constructor(){

        // PIXI stage setup        
        let pixi = new PIXI.Application(800, 600, {antialias: true}, false);
        document.body.appendChild(pixi.view);
        pixi.renderer.resize(window.innerWidth,window.innerHeight);
        window.addEventListener('resize', ()=>{this.resizeWorld()});

        // Add a GLOBAL stage container
        let stageContainer = new PIXI.Container();
        pixi.stage.addChild(stageContainer);

        // Init p2.js
        this.p2World = new p2.World({gravity: [0,-9.8]});       
        this.p2World.setGlobalStiffness(1e5); 
        this.p2World.setGlobalRelaxation(1e7);
        this.p2World.defaultContactMaterial.friction = 0.3;
        this.p2World.defaultContactMaterial.restitution = 0;
        this.p2World.defaultContactMaterial.stiffness = 1e7; // We need infinite stiffness to get exact restitution
        this.p2World.defaultContactMaterial.frictionRelaxation = 3;

        // Convenience vars for PIXI objects
        this.stage = stageContainer;
        this.ticker = pixi._ticker;
        this.renderer = pixi.renderer;

        // Children tracking arrays
        this.stageArray = [];
        this.enemiesArray = [];           
        this.levelArray = [];

        // BOTTOM FLOOR/DEADZONE - Add a plane 
        this.deadZoneShape = new p2.Plane();
        //this.deadZoneShape.collisionGroup = CollisionGroupClass.world;
        this.deadZoneBody = new p2.Body({ position:[0, -500], mass:0});
        this.deadZoneBody.addShape(this.deadZoneShape);
        this.p2World.addBody(this.deadZoneBody);

        // Add DEADZONE shape to the stageArray (for collision detection)
        this.addToChildrenToStageArray(this.deadZoneShape);

        //Time
        this.time;
    }
    addToChildrenToStageArray(childToAdd){
        if(typeof childToAdd ==='undefined') return;
        this.stageArray.push(childToAdd);
    }
    addToChildrenToEnemiesArray(childToAdd){
        if(typeof childToAdd ==='undefined') return;
        this.enemiesArray.push(childToAdd);        
    }
    addToChildrenToLevelArray(childToAdd){
        if(typeof childToAdd ==='undefined') return;
        this.levelArray.push(childToAdd);
    }
    resizeWorld(){
        this.renderer.resize(window.innerWidth,window.innerHeight);
    }
    addDisplay(){
        
    }
    deleteDisplay(){

    }    
    addBody(){

    }
}
export default (new WorldClass);