var pic = document.getElementById("vimage");

var dot = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");


var intervalID;
/*
var grow = function(x,y){

    //initialization statement
    //..
    var c = document.createElementsNS( "http://www.w3.org/2000/svg", "circle");
    //var c = document.createElementNS( svgNSID 
    var radius = 0;
    var growing = true;

    var animateCode = function(){
	//increasing and decreasing of radius
	c.document.getElementByTagName("circle")[0] //
	var radius = parseInt(c.getAttribute("r"));
	c.setAttribute("r", radius.toString() ); //radius is local var
        console.log("hi");
    };
    intervalID= window.setInterval(animateCode, 16);
};
*/
var change = function(e){
    e.preventDefault();
    this.setAttribute("fill","green");
};

var drawDot = function(){
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
    var radius = 100;
    var growing = true;
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute( "r", 100); //Quotes around numbers do not matter
    c.setAttribute( "fill", "red");
    c.setAttribute( "stroke", "black" );
    pic.appendChild(c);
    pic.addEventListener("click", clicked);

    var animateCode = function(){
	//increasing and decreasing of radius
	c = document.getElementsByTagName("circle")[0];
        if (radius == 0){
            growing = true;
        } 
        if (radius == 250){
            growing = false;
        }
        if ( growing == true ){
            radius += 1;
        } else {
            radius -= 1;
        }
	c.setAttribute("r", radius.toString() ); //radius is local var
        console.log("hi");
    };
    intervalID= window.setInterval(animateCode, 16);
};

var dvdLogoSetup = function(){
    var x = 10;
    var y = 30;
    var dx = 1;
    var dy = 2;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    c.setAttribute("src", "logo_dvd.jpg");
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    c.setAttribute("width", "40px");
    c.setAttribute("height", "30px");
    pic.appendChild(c);
    
    var moveDVD = function() {
        c = document.getElementsByTagName("image")[0];        
	if (x >= 460 || x <= 0) {
	    dx = dx * -1;
	} else if (y > 470 || y <=0) {
	    dy = dy * -1;
	}
	x += dx;
	y += dy;
	c.setAttribute("x", x.toString() ); 
	c.setAttribute("y", y.toString() ); 
	console.log("hi");
    }
    intervalID = window.setInterval(moveDVD,16);  
};


var clicked =  function(e){
    if (e.toElement == this){
	drawDot( e.offsetX, e.offsetY );
    }
};

var HALT = function(){
    window.clearInterval(intervalID);
}

dot.addEventListener("click", drawDot);
dvd.addEventListener("click", dvdLogoSetup);
stop.addEventListener("click", HALT);