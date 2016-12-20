function Particle(size,color,life,behavior){

this.psz = size;
this.pcr = color;
this.plf = life;
this.pbvr = behavior;

pt = new createjs.Shape();
pt.graphics.beginFill(color).drawCircle(0, 0, size);
pt.vx = 0;
pt.vy = 0;
pt.life = this.plf;

 /* var blurFilter = new createjs.BlurFilter(5, 5, 1);
 pt.filters = [blurFilter];
 var bounds = blurFilter.getBounds();

 pt.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
 */
 
this.pn = function(name){
	this.name;
	return name;
}

return this;
};