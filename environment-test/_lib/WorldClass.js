//IMPORTS
import 'pixi.js';
import ControlClass from './ControlClass.js';

class WorldClass {
    constructor(){

        //PIXI stage setup        
        let pixi = new PIXI.Application(800, 600, {antialias: true}, false);
        document.body.appendChild(pixi.view);
        pixi.renderer.resize(window.innerWidth,window.innerHeight);
        window.addEventListener("resize", ()=>{this.resizeWorld()});

        //Add a GLOBAL stage container
        let stageContainer = new PIXI.Container();
        pixi.stage.addChild(stageContainer);

        //Convenience vars for PIXI objects
        this.stage = stageContainer;
        this.ticker = pixi._ticker;
        this.renderer = pixi.renderer;

        //Children tracking arrays
        this.stageArray = [];
        this.enemiesArray = [];           
        this.levelArray = [];

        //Keypress / Keymap array
        this.input = ControlClass.keyMap;

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