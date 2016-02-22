var c= document.getElementById("playground");
var ctx = c.getContext("2d");

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

    window.requestAnimationFrame( drawCircle );
}

clear.addEventListener( "click", draw );

var desist = function HALT(){
    window.cancelAnimationFrame( draw );
}

// stop.addEventListener is not a function... It's not supposed to be???
stop.addEventListener( "click", desist);