//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }    
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //Q: What good might this do?
    window.cancelAnimationFrame( requestID );
    //This ensures that whenever the function is called, the last one is stopped.    

    //var inits
    var dx = 1;
    var dy = 2;
    var x = 10;
    var y = 30;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";


    //a function defined within a function, oh my!
    var dvdLogo = function() {
	
	//propulsion mechanism
	ctx.drawImage(logo, x, y, 80,60); //w,h
        if ( ((x + 80) > 500) || ( x < 2 ) ){
            dx *= -1;
        } 
        if ( ((y+60) > 500) || (y < 0)){
            dy *= -1;
        }
        x += dx;
        y += dy;
	
        //Q: Why this here?
	requestID = window.requestAnimationFrame( dvdLogo );
        //A: So that a different ID comes from different frames, it allows for only one to be stopped.
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );
