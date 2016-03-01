var pic = document.getElementById("vimage");

var intervalID; // pass as arguement to the stop function
//...
//..
var grow = function(){

    //initialization statement
    //..
    var c = document.createElementsNS( "http://www.w3.org/2000/svg", "circle");
    //var c = document.createElementNS( svgNSID 

    var animateCode = function(){
	//increasing and decreasing of radius
	c.document.getElementByTagName("circle")[0] //
	var radius = parseInt(c.getAttribute("r"));
	c.setAttribute("r", radius.toString() ); //radius is local var
        console.log("hi");
    };
    intervalID= window.setInterval(animateCode, 16);
};

var change = function(e){
    e.preventDefault();
    this.setAttribute("fill","green");
};


var drawDot = function( x,y ){
    var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute( "r", 100); //Quotes around numbers do not matter
    c.setAttribute( "fill", "red");
    c.setAttribute( "stroke", "black" );
    //console.log("Gu");
    pic.appendChild(c);

};

var clicked =  function(e){
    if (e.toElement == this){
	drawDot( e.offsetX, e.offsetY );
        console.log("Hi");
    }
};

var stop = function(){
    window.clearInterval(intervalID);
}

pic.addEventListener("click", clicked);
