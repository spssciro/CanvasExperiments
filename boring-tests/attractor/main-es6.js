import 'pixi.js';
import p2 from 'p2';
 
function App(){
    let vm = this;
    const h = 900;
    const w = 1920;
    const app = new PIXI.Application(w, h, {antialias: true, backgroundColor : 0x2e3b41}, false);
    document.body.appendChild(app.view);
    let mousePos = {x:null, y:null};

    // Init p2.js
    let world = new p2.World({gravity: [0,-9.8]});
    world.defaultContactMaterial.friction = 0;
	world.defaultContactMaterial.restitution = .5;
	world.defaultContactMaterial.stiffness = 5;
 
    // create a testCollisionGroup 
    var testCollisionGroup = 0x0001;
    let squareArray = [];
	const particleAmt = 100;
	let inc = 0;
    let slowInc = 0;

    //create a player
    let player = {};
    player.g = new PIXI.Graphics()
    player.g.lineStyle(0),
    player.g.beginFill("0xFFFFFF", .9),
    player.g.drawRect(-50,-100, 50, 100),
    player.g.pivot.set(-25,-50);
    player.g.endFill();     
    app.stage.addChild(player.g);
    player.p2Shape = new p2.Box({ height: 100, width: 50});
    player.p2Body = new p2.Body({ mass:10, position:[w/2,-h/2]});
    player.p2Body.addShape(player.p2Shape);
    player.p2Body.angularDamping = 0;
    
    world.addBody(player.p2Body);

    window.addEventListener('keypress', keypressdown);

    function keypressdown(e){
        //w
        if(e.charCode === 119){
            player.p2Body.applyForceLocal ([0,500]);
        }
        //s
        if(e.charCode === 115){
            player.p2Body.applyForceLocal ([0,-500]);
        }
        //a
        if(e.charCode === 97){
            player.p2Body.angularVelocity -= .01;
            player.p2Body.applyForceLocal ([-500,500]);
        }
        //d
        if(e.charCode === 100){
            player.p2Body.angularVelocity += .01;
            player.p2Body.applyForceLocal ([500,500]);
        }                


        
    }

    function createParticles(){
        for(var i = 0; i < 2 && squareArray.length < particleAmt; i++){    
            var s = {};
            let size = (Math.random() * 10) + 10;
            // Add a square
            s.squareShape2 = new p2.Circle({ radius: size});
            s.squareBody2 = new p2.Body({ mass:1, position:[(Math.random()*w), (Math.random()*w) * -1]});
            s.squareShape2.material = new p2.Material();
            s.life = (Math.random() * 200) + 2000;
            s.square = new PIXI.Graphics();
            s.square.lineStyle(0);
            s.square.beginFill(0x32BE6F, .9);
            s.square.drawCircle(0,0, size);
            s.square.endFill();
            world.addBody(s.squareBody2);
            s.squareBody2.addShape(s.squareShape2);
            app.stage.addChild(s.square);
            squareArray.push(s);
        }
    }
    
    // Add a plane
    let planeShape = new p2.Plane();
    let planeBody = new p2.Body({ position:[0, -h+100],angle:0 });
    planeShape.material = new p2.Material();
    planeBody.addShape(planeShape); 
    world.addBody(planeBody);
 
    let plane = new PIXI.Graphics();
    plane.beginFill(0x0097cc);
    plane.drawRect(0, 0, w, 300);
    plane.endFill();
    plane.x = planeBody.position[0];
    plane.y = planeBody.position[1] *-1;
    plane.rotation = -planeBody.angle;    

    //Add to stage
    app.stage.addChild(plane);  
 
    app.ticker.add((delta) => {
 
	    inc += .125;
        
        player.p2Body.angle = 0;
        player.g.rotation = player.p2Body.angle;
        player.g.x = player.p2Body.position[0];
        player.g.y = player.p2Body.position[1] * -1;

        if(player.g.x > w){
            player.g.x = 100;
        }
        if(player.g.x < 0){
            player.g.x = w-100;
        }

        createParticles();

        for(var o = 0; o < squareArray.length; o++){
            var ls = squareArray[o];
			ls.life -= 1;
            ls.square.x = ls.squareBody2.position[0];
            ls.square.y = (ls.squareBody2.position[1] *-1);
            ls.square.rotation = ls.squareBody2.angle * -1;
			
			// if(ls.life <= 0){
            //     ls.squareBody2.position[0] = 960 + (Math.cos(inc) * 160);
			// 	ls.squareBody2.position[1] = 0;
			// 	ls.life = (Math.random() * 100) + 50;
			// }
        }
		let yCosine = Math.cos(inc) * 4;
		// planeBody.position[1] += yCosine;
        // plane.y = planeBody.position[1] *-1;
        
        // Move physics bodies forward in time
        world.step(30/60);
 
    });
 
 
}
App();