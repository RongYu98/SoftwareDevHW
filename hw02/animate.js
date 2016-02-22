var c= document.getElementById("playground");
var ctx = c.getContext("2d");

var notFirst = false;
var lastX = 0;
var lastY = 0;

console.log("This works");

playground.addEventListener("click", function doStuff(e){
    var x = e.offsetX;
    var y = e.offsetY;

    
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.stroke();

    if (notFirst){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    notFirst = true;
    lastX = e.offsetX;
    lastY = e.offsetY;    
    }
    
    window.requestAnimationFrame(		
);

/*
function ClearStuff(e){
    ctx.clearRect(0,0,538,538);
    console.log("CLEARED");
}
*/
//var cleared = document.getElementById("clear").addEventListener("click", ClearStuff());
clear.addEventListener("click", function clearStuff(e){
    ctx.clearRect(0,0,538,538);
    console.log("CLEARED");
    notFirst = false;
});
