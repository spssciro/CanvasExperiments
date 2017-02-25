import  BgClass  from './_lib/BgClass';

class App{
    constructor(){
        var BG = new BgClass(20,20,30,20).attachDisplay();
    }
}

//Load our app
new App();