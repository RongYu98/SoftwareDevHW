var c= document.getElementById("playground");
var ctx = c.getContext("2d");
var requestID;

var logo = new Image();
logo.src = "";

console.log("This works");

var expand = true;
var radius = 0;

var draw = function drawCircle(){
    
    ctx.clearRect(0,0,500,500);
    
    if (expand){
        radius++;
    } else {
        radius--;
    }
    if (radius >= 250){
        expand = false;
    } else if (radius == 0 ){
        expand = true;
    }

    ctx.beginPath();
    ctx.fillStyle = "#0000cc";
    ctx.arc(250,250,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawCircle );
}

var clear = document.getElementById("clear");
clear.addEventListener( "click", draw );

var desist = function HALT(){
    window.cancelAnimationFrame( requestID );
}

var stop = document.getElementById("stop");
stop.addEventListener( "click", desist);

/*

var dx = 1;
var dy = 1;
var x = 0;
var y = 0;

var DVD = document.getElementById("disc");
var bounce = function(){
    ctx.drawImage(logo, x, y, 15,5); w,h
    if ( ((x + 15) < 500) || ( x < 2 ) ){
        dx *= -1;
    } 
    if ( ((y+5) < 500) || (y < 0)){
        dy *= -1;
    }
    x += dx;
    y += dy;
}
DVD.addEventListener( "click", bounce )


*/
