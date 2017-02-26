import WorldClass from './_lib/WorldClass';
import BgClass from './_lib/BgClass.js';

class App{
    constructor(){
        //Setup the world
        this.world = WorldClass;

        //Etc / config
        this.controlsObj;
        
        //Display class objects
        this.player;
        this.bg = new BgClass(0,0,500,500);

        //Setup our animation Loop
        this.world.ticker.add((delta) => {
            this.theLoop(delta);
        });       
    }

    //Our animation loop
    theLoop(delta){
        this.bg.moveBg(Math.random() *10,Math.random()*10);
    }
}

//Load our app
new App();