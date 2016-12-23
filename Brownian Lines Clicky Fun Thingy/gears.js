jQuery( document ).ready(function( $ ) {

var canvas = document.getElementById('canvasViewport');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;	
stage = new createjs.Stage("canvasViewport");

var wW = jQuery(window).width();
var wH = jQuery(window).height();	
var sW = stage.canvas.width;
var sH = stage.canvas.height;
var sW2 = stage.canvas.width / 2;
var sH2 = stage.canvas.height / 2;

var particleList = [];
var friction = .98;
var particleAmt = 1000;
var mouseX;
var mouseY;
var emitter;
var mousedown;
var lightning = new createjs.Shape();
cog = new Cog(); //my crummy class for trying to make this easier

stage.on("stagemousemove", findNearest);

createjs.Ticker.addEventListener("tick", tick);
createjs.Ticker.setInterval(25);
createjs.Ticker.setFPS(40);

stage.on("stagemousedown", clickDown, false);
stage.on("stagemouseup", clickUp, false);

init();

function spawnParticles(){
	if(particleList.length < particleAmt){
		for(i=0; i < particleAmt; i++){
			var p = Particle(3,"white",1000,"fire");
			p.pt.x = cog.ranNum(sW,true);
			p.pt.y = cog.ranNum(sH, true);
			p.pt.close = false;
			particleList.push(p.pt);
			stage.addChild(p.pt);
		}
	}
}

function clickDown(evt){
	mousedown = true;
}
function clickUp(evt){
	mousedown = false;
}

function init(){
	point1 = new createjs.Shape();
	point1.graphics.beginFill("red").drawRect(0, 0, 10,10);
	point1.x = sW2;
	point1.y = sH2;
	point1.name = "point1";

	point2 = new createjs.Shape();
	point2.graphics.beginFill("rgba("+ cog.randomRGBColor() + ", 1)").drawRect(0, 0, 10,10);
	point2.x = cog.ranNum(sW,true);
	point2.y = sH2;
	point2.name = "point1";
	stage.addChild(lightning);
	spawnParticles();
	
}

function findNearest(evt){
	mouseX = evt.stageX;
	mouseY = evt.stageY;
}

function tick(event) {
	lightning.graphics.clear();

	for(i=0; i<particleList.length; i++){
		var gp = particleList[i];
		gp.x += cog.ranNum(3);
		gp.y += cog.ranNum(3);
		gp.y += gp.vy;
		gp.x += gp.vx;


	if(mousedown == true){
		var dist = cog.getDistRaw(gp.x,gp.y, mouseX,mouseY);

		if(dist[0] < 300 && dist[1] < 300){
			gp.close = true;
			gp.graphics.clear();
			gp.graphics.beginFill("red").drawCircle(0, 0, 3);
			lightning.graphics.beginStroke("rgba("+ cog.randomRGBColor() + ", 1)").setStrokeStyle(2);
			lightning.graphics.moveTo(gp.x, gp.y).lineTo(mouseX, mouseY);
			gp.vy -= (gp.y - mouseY) / 100;
			gp.vx -= (gp.x - mouseX) / 100;
		}
		if(gp.close == true && dist[0] > 301){
			gp.close = false;
			gp.graphics.clear();
			gp.graphics.beginFill("white").drawCircle(0, 0, 3);
		}
		if(gp.close == true && dist[1] > 301){
			gp.close = false;
			gp.graphics.clear();
			gp.graphics.beginFill("white").drawCircle(0, 0, 3);
		}
	}else if(mousedown == false && gp.close == true){
			gp.close = false;
			gp.graphics.clear();
			gp.graphics.beginFill("white").drawCircle(0, 0, 3);		

	}
		if(gp.y < 0 || gp.y > sH){
			gp.vy = gp.vy *-1;
		}
		if(gp.x < 0 || gp.x > sW){
			gp.vx = gp.vx * -1;
		}
		gp.vx = gp.vx * friction;
		gp.vy = gp.vy * friction;
	}
    stage.update();
}
});