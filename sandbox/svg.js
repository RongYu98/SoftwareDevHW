var pic = document.getElementById("vimage");


var c = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
//mess up the url, it doesn't work at ALL

c.setAttribute("cx", 0);
c.setAttribute("cy", 10);
c.setAttribute( "r", 100); //Quotes around numbers do not matter
c.setAttribute( "fill", "red");
c.setAttribute( "stroke", "black" );

pic.appendChild(c);
