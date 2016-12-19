jQuery(document).ready(function($) {

  var stage = new createjs.Stage('canvas');
  var canvas = document.getElementById("canvas");

  createjs.Ticker.addEventListener("tick", handleTick);
  createjs.Ticker.setFPS(60);
  canvas.width = jQuery(window).width();
  canvas.height = jQuery(window).height();
  jQuery(window).on("resize", resizeBrow);
 
  stage.addChild(lineShape);


  //on browser resize change canvas dims
  function resizeBrow(){
    canvas.width = jQuery(window).width();
    canvas.height = jQuery(window).height();
  }

  function handleTick(event) {
    stage.update();
  }
});
