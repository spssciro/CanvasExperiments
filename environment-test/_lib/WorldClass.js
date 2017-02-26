//IMPORTS
import 'pixi.js';

class WorldClass {
    constructor(){
        //PIXI stage setup        
        let pixi = new PIXI.Application(800, 600, {antialias: true}, false);
        document.body.appendChild(pixi.view);
        pixi.renderer.resize(window.innerWidth,window.innerHeight);
        window.addEventListener("resize", ()=>{this.resizeWorld()});

        //Convenience vars
        this.stage = pixi.stage;
        this.ticker = pixi._ticker;
        this.renderer = pixi.renderer;

        //Children tracking arrays
        this.stageArray = [];
        this.enemiesArray = [];           

        //Time
        this.time;
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