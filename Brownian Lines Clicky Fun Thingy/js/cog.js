//initiate cog

function Cog(){

console.log("cog loaded");

this.world = function worldSetup(stg){
	this.wW = jQuery(window).width();
	this.hH = jQuery(window).height();
	this.sH = stg.canvas.width;
	this.sW = stg.canvas.height;
	this.sW2 = stg.canvas.width / 2;
	this.sH2 = stg.canvas.height / 2;
	return wW;
}

this.ranNum = function rangeNum(max, abs) {
    //Random rand = new Random();
	var num = Math.floor(Math.random()*max) + 1;
	if(abs == false || abs == null){
		num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; 
	}
    return num;
}

this.msPos = function mouseTracker(stage){
	stage.on("stagemousemove", this.mp);
}

this.mp = function(evt){
	mp = [];
	mp[0] = evt.stageX; 
	mp[1] = evt.stageY;

	return mp;
}

this.randomRGBColor = function randomRGBColor() {
 	var r = Math.abs(Math.floor(Math.random() *255));
	var g = Math.abs(Math.floor(Math.random() *255));
	var b = Math.abs(Math.floor(Math.random() *255));
	var combined = r + "," + g + "," + b;
	return combined;
} 

this.getDistObj = function(elem1, elem2, justPoints) {
var dist = [];

if(justPoints == true){	
	var elem1Width;
	var elem2Width;
	if(typeof(elem1.graphics) !== 'undefined'){
		elem1Width = elem1.getBounds();
	}

	if(typeof(elem2.graphics) !== 'undefined'){
		elem2Width = elem2.getBounds();
	}

    return Math.floor(Math.sqrt(Math.pow(elem2.x- (elem1.x+(elem1.width/2)), 2) + Math.pow(elem2.y - (elem1.y+(elem1.height/2)), 2)));
	
} else{
	dist[0] = Math.floor(Math.sqrt(Math.pow(elem2.x - elem1.x, 2)));
	dist[1] = Math.floor(Math.sqrt(Math.pow(elem2.y - elem1.y, 2)));
	return dist; 
	}


}

this.getDistRaw = function(elem1X, elem1Y, elem2X, elem2Y) {
	var dist = [];
	dist[0] = Math.floor(Math.sqrt(Math.pow(elem2X - elem1X, 2)));
	dist[1] = Math.floor(Math.sqrt(Math.pow(elem2Y - elem1Y, 2)));
	return dist; 

}

};