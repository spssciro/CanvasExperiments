import 'pixi.js';
import p2 from 'p2';
 
function App(){
    let vm = this;
    const h = 900;
    const w = 1920;
    const app = new PIXI.Application(w, h, {antialias: true, backgroundColor : 0x1099bb}, false);
    document.body.appendChild(app.view);
 
    // Init p2.js
    let world = new p2.World({gravity: [0,-9.8]});
    world.defaultContactMaterial.friction = 1;
	world.defaultContactMaterial.restitution = 1.5;
	world.defaultContactMaterial.stiffness = 1.25;
 
    // create a testCollisionGroup 
    var testCollisionGroup = 0x0001;
    let squareArray = [];
	const particleAmt = 100;
	let inc = 0;

 
    for(var i = 0; squareArray.length < particleAmt; i++){
		
        var s = {};
		let size = (Math.random() * 30) + 10;
        // Add a square
        s.squareShape2 = new p2.Box({ width: size, height: size});
        s.squareBody2 = new p2.Body({ mass:1, position:[w/2,0], sleepTimeLimit: 1, sleepSpeedLimit:0.1 });
        s.squareShape2.material = new p2.Material();
		s.life = (Math.random() * 100) + 50;
        s.square = new PIXI.Graphics();
        s.square.lineStyle(0);
        s.square.beginFill(0xFFFF0B, 0.5);
        s.square.drawRect(0, 0,size, size);
        s.square.endFill();
        s.square.pivot.set(size/2);
        world.addBody(s.squareBody2);
        s.squareBody2.addShape(s.squareShape2);
         
        app.stage.addChild(s.square);
        squareArray.push(s);
    }
     
    // Add a plane
    let planeShape = new p2.Plane();
    let planeBody = new p2.Body({ position:[0, -h+100 ] });
    planeShape.material = new p2.Material();
    planeBody.addShape(planeShape); 
    world.addBody(planeBody);
 
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(1, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 60, 60);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 170;

    //Add to child
    app.stage.addChild(rectangle);  
 
    app.ticker.add((delta) => {
 
	    inc += .2;

        for(var o = 0; o < squareArray.length; o++){
            var ls = squareArray[o];
			ls.life -= 1;
            ls.square.x = ls.squareBody2.position[0];
            ls.square.y = (ls.squareBody2.position[1] *-1);
            ls.square.rotation = ls.squareBody2.angle;
			
			if(ls.life <= 0){
				ls.squareBody2.position[0] = 960;
				ls.squareBody2.position[1] = 0;
				ls.life = (Math.random() * 100) + 50;
			}
 
        }
		let yCosine = Math.cos(inc) * 20;
		planeBody.position[1] += yCosine;
 
        // Move physics bodies forward in time
        world.step(30/60);
 
    });
 
 
}
App();