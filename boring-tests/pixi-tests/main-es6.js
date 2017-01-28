import 'pixi.js';

function App(){
	const vm = this;
	const app = new PIXI.Application(800, 600, {antialias: true, backgroundColor : 0x1099bb}, false);
	document.body.appendChild(app.view);

	let rectangle = new PIXI.Graphics();
	rectangle.lineStyle(1, 0xFF3300, 1);
	rectangle.beginFill(0x66CCFF);
	rectangle.drawRect(0, 0, 60, 60);
	rectangle.endFill();
	rectangle.x = 170;
	rectangle.y = 170;
	rectangle.pivot.set(30);

	// draw a circle, set the lineStyle to zero so the circle doesn't have an outline
	let circle = new PIXI.Graphics();
	circle.lineStyle(0);
	circle.beginFill(0xFFFF0B, 0.5);
	circle.drawCircle(470, 90,60);
	circle.endFill();
	
	//Add to child
	app.stage.addChild(rectangle, circle);	

	//
    app.ticker.add((delta) => {3

        rectangle.rotation += .1;
		circle.y += 2;

		if(circle.y > 500){
			circle.y = 0;
		}
    });


}



App();