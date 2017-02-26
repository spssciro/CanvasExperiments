//IMPORTS
import 'pixi.js';

class WorldClass {
    constructor(){
        let pixi = new PIXI.Application(800, 600, {antialias: true}, false);
        document.body.appendChild(pixi.view);

        //convenience vars
        this.stage = pixi.stage;
        this.ticker = pixi._ticker;
        this.renderer = pixi.renderer;

        // Children tracking arrays
        this.stageArray = [];
        this.enemiesArray = [];           

        //Time
        this.time;
    }

    setupStage(){
        // Boot up a pixi APP
    }
    resizeWorld(){

    }



    addDisplay(){
        console.log(this.x + "yes");
    }
    addBody(){

    }

    deleteDisplay(){

    }

}
export default (new WorldClass);