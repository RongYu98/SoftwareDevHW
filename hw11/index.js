console.log("hi");
var base = "this is in f1 in global namespace";
var x = "x in global namespace";
var f2 = function(){
    console.log("this is f2");
};

var number = function() {
    var z = 0;
    function makeIncrementer() {
	z++;
	return z;
    }
    return makeIncrementer
}

var f1 = {
    x : "sumpn in the f1 namespace", //f1.x, f1["x"]
    f2 : f2, // f1.f2 returns the function, f1.f2() returns console.log
    f : function(){
	console.log("This is f in f1 namespace");
	console.log("x is "+x);
	console.log("f1.x is "+ f1.x);
	console.log("better way: "+this.x); //this is self pointing
    }
}

//makeIncerementer

var makeIncrementer = function(){
    var counter = 0;
    function inc(){
	counter++;
	return counter;
    }
    return inc;
}

var makeAdder = function(x){
    var counter = 0;
    function inc(){
	counter+=x;
	return counter;
    }
    return inc;
}

var wat = makeIncrementer();

//var watwatwat = makeAdder(n), increments by n
