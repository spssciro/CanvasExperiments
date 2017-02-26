//IMPORTS
import WorldClass from './_lib/WorldClass';

class App{
    constructor(){
        // Setup the world
        this.world = WorldClass;
        //On load resize the renderer to our window size
        this.world.renderer.resize(window.innerWidth,window.innerHeight);

        // etc / config
        this.controlsObj;
        
        // Display class objects
        this.player;
        this.bg;

        //Setup our animation Loop
        this.world.ticker.add((delta) => {
            this.theLoop(delta);
        });
       
        console.log(this);
    }

    //Our animation loop
    theLoop(delta){

    }
}

//Load our app
new App();