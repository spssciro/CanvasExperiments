import WorldClass from './_lib/WorldClass';
import BgClass from './_lib/BgClass.js';
import PlayerClass from './_lib/PlayerClass.js';

class App{
    constructor(){
        //Setup the world
        this.world = WorldClass;

        //Etc / config
        this.controlsObj;

        //Setup our world
        this.bg = new BgClass(0,0,500,500);

        //Add our player
        this.player = new PlayerClass(0,0,20,20);

        //Setup our animation Loop
        this.world.ticker.add((delta) => {
            this.theLoop(delta);
        });
    }

    //Our animation loop
    theLoop(delta){
        
    }
}

//Load our app
new App();