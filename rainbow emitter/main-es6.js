import jQuery from 'jquery';
import Particle from '../_lib/particle.js';
import Emitter from '../_lib/emitter.js';


jQuery(document).ready(() => {

this.vm = {}
vm.stage = new createjs.Stage('canvas');
vm.canvas = document.getElementById("canvas");
vm.particleArray = [];
vm.emitter = new Emitter(window.innerWidth/2, window.innerHeight/2, true, 40);
vm.particleAmt = 400;
vm.increment = 0;
vm.gravity = 0.04;


//activate!
init();
function init(){

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(120);
    canvas.width = jQuery(window).width();
    canvas.height = jQuery(window).height();

    window.setInterval(moveEmitterAroundStage,9000);
}

function createParticles(){
    if(vm.particleArray.length <= vm.particleAmt && vm.emitter.emitFlag === true){
        for(var i = 0; i < 1; i++){
            vm.increment++;
            Math.cos(vm.increment) * vm.emitter.radius;
            var testParticle = new Particle((Math.cos(vm.increment) * vm.emitter.radius) + vm.emitter.x, 
                                            (Math.sin(vm.increment) * vm.emitter.radius) + vm.emitter.y,
                                            // (Math.random() - 0.5) * 1, //true random
                                            // (Math.random() - 0.5) * 1,
                                            Math.cos(vm.increment) * .1,
                                            Math.sin(vm.increment) * .1,                                             
                                            vm.stage, 40);
            testParticle.createShape(1, 4, "#"+((1<<24)*Math.random()|0).toString(16));
            vm.particleArray.push(testParticle);
        }
    }
}

function moveEmitterAroundStage(){
    vm.emitter.x = Math.random() * window.innerWidth;
    vm.emitter.y = Math.random() * window.innerHeight;
    vm.emitter.radius = Math.random() * 100;
}

function handleTick(){
    createParticles();
    for(var i = vm.particleArray.length - 1; i>=0; i--){
        
        let particle = vm.particleArray[i];
        particle.lifeSpan(.1);

        //particle.vy += vm.gravity;
        particle.p.vx *= 1.01;
        particle.p.vy *= 1.01;
        particle.animate();

        if(particle.deadFlag === true){
            vm.stage.removeChild(particle.p);
            vm.particleArray.splice(i, 1);

        }
    }

    vm.stage.update();
}
});


