var pic = document.getElementById("vimage");


console.log("HI!");

/*
var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );

c.setAttribute("cx", 0);
c.setAttribute("cy", 10);
c.setAttribute( "r", 100); //Quotes around numbers do not matter
c.setAttribute( "fill", "red");
c.setAttribute( "stroke", "black" );
console.log("Gu");

pic.appendChild(c);

*/

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

pic.addEventListener("click", clicked);
