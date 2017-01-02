import jQuery from 'jquery';
import Particle from '../_lib/particle.js';
import Emitter from '../_lib/emitter.js';


jQuery(document).ready(() => {

this.vm = {}
vm.stage = new createjs.Stage('canvas');
vm.canvas = document.getElementById("canvas");
vm.particleArray = [];
vm.emitter = new Emitter(200,200);
vm.particleAmt = 100;

//activate!
init();
function init(){
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    canvas.width = jQuery(window).width();
    canvas.height = jQuery(window).height();
}

function createParticles(){
    if(vm.particleArray.length <= vm.particleAmt){
        for(var i = 0; i < 1; i++){
            var testParticle = new Particle(vm.emitter.x,vm.emitter.y,(Math.random() - 0.5) * 1,(Math.random() - 0.5) * 1, vm.stage, 20);
            testParticle.createShape('circle', 3, "#"+((1<<24)*Math.random()|0).toString(16));
            vm.particleArray.push(testParticle);
        }
    }
}

function handleTick(){
    
    createParticles();
    vm.particleArray.forEach((pa,i) =>{
        pa.animate();
        pa.lifeSpan(.1);
        if(pa.deadFlag === true){
            vm.stage.removeChild(pa.p);

        }
    });

    vm.stage.update();
}
});


