import jQuery from 'jquery';
import Particle from '../_lib/particle.js';
import Emitter from '../_lib/emitter.js';


jQuery(document).ready(() => {

this.vm = {}
vm.stage = new createjs.Stage('canvas');
vm.canvas = document.getElementById("canvas");
vm.particleArray = [];
vm.emitter = new Emitter(window.innerWidth/2, window.innerHeight/2, true, 100);
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
            console.log( vm.emitter)
            Math.cos(vm.increment) * vm.emitter.radius;
            var testParticle = new Particle((Math.cos(vm.increment) * vm.emitter.radius) + vm.emitter.x, (Math.sin(vm.increment) * vm.emitter.radius) + vm.emitter.y,(Math.random() - 0.5) * 1,(Math.random() - 0.5) * 1, vm.stage, 30);
            testParticle.createShape(1, 4, "#"+((1<<24)*Math.random()|0).toString(16));
            vm.particleArray.push(testParticle);
        }
    }
}

function moveEmitterAroundStage(){
    vm.emitter.x = Math.random() * window.innerWidth;
    vm.emitter.y = Math.random() * window.innerHeight;
    vm.particleArray = [];
}


function handleTick(){
    createParticles();
    vm.particleArray.forEach((pa,i) =>{

        //pa.p.vy += vm.gravity;
        pa.p.vx *= 1.01;
        pa.p.vy *= 1.01;
        
        pa.animate();

        pa.lifeSpan(.1);
        if(pa.deadFlag === true){
            vm.stage.removeChild(pa.p);

        }
    });

    vm.stage.update();
}
});


