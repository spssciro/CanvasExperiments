import jQuery from 'jquery';

jQuery(document).ready(init());

//activate!
function init(){

    const stage = new createjs.Stage('canvas');
    const canvas = document.getElementById("canvas");

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    canvas.width = jQuery(window).width();
    canvas.height = jQuery(window).height();

}

function handleTick(){
    console.log("tick");
}