import WorldClass from './_lib/WorldClass';
import BgClass from './_lib/BgClass.js';
import PlayerClass from './_lib/PlayerClass.js';
import ControlClass from './_lib/ControlClass.js';

class App{
    constructor(){
        //Setup the world
        this.world = WorldClass;

        //Etc / config
        this.controlsObj;

        //Setup our world
        this.bg = new BgClass(0,0,1000,500);

        //Add our player
        this.player = new PlayerClass(200,200,51,100);

        //Setup our animation Loop
        this.world.ticker.add((delta) => {
            this.theLoop(delta);
        });
    }

    //Our animation loop
    theLoop(delta){
        ControlClass.checkAction();
    }
}

//Load our app
new App();