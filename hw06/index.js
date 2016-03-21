var dataSet = [4,8,15,16,23,42]

var BigDataSet = [ ["Alabama",50,50],["Alaska",28,28],
["Arizona",0,58],["Arkansas",39,40],["California",0,172],
["Colorado",0,37],["Connecticut",0,28],
["Delaware",0,16],["District of Columbia",19,19],
["Florida",99,99],["Georgia",72,76],
["Guam",0,9],["Hawaii",19,19],
["Idaho",32,32],["Illinois",67,69],
["Indiana",0,57],["Iowa", 30,30],
["Kansas",40,40],["Kentucky",46,46],
["Louisiana",41,46],["Maine",23,23],
["Maryland",0,38],["Massachusetts",42,42],
["Michigan",59,59],["Minnesota",38,38],
["Mississippi",37,40],["Missouri",40,52],
["Montana",0,27],["Nebraska",0,36],
["Nevada",0,30],["New Hampshire",23,23],
["New Jersey",0,51],["New Mexico",0,24],
["New York",0,95],["North Carolina",71,72],
["North Dakota",0,28],["Northern Marianas",0,9],["Ohio",66,66],
["Oklahoma",40,43],["Oregon",0,28],["Pennsylvania",0,71],
["Rhode Island",0,19],["South Carolina",50,50],["South Dakota",0,29],
["Tennessee",58,58],["Texas",155,155],["Utah",0,40],
["Vermont",16,16],["Virginia",49,49],["Washington",0,44],
["West Virginia",0,34],["Wisconsin",0,42],["Wyoming",11,29]];

var i = 0;
var total = 0;
for (i=0;i<BigDataSet.length;i++){
  total+= BigDataSet[i][2];
  //console.log(BigDataSet[i][0]+BigDataSet[i][2]);
}

var justNums = [];
var justStates = [];
var dele = [];
for (i=0;i<BigDataSet.length;i++){
  justNums.push(BigDataSet[i][2]);
  justStates.push(BigDataSet[i][0]);
  dele.push(BigDataSet[i][1]);	     
} console.log(justNums);

var highest= 0;
for (i=0;i<BigDataSet.length;i++){
  if (BigDataSet[i][2]>highest){
    highest = BigDataSet[i][2]
   }  //console.log(BigDataSet[i][0]+BigDataSet[i][2]);
} //console.log(highest);

var foo = d3.scale.linear()
  .domain([0,d3.max(dele)])
  .range([0,420]);

d3.select(".chart")
  .selectAll("div") 
    .data(BigDataSet)
  .enter().append("div")
    .style("width", function(d) {
        return foo(d[1])*3 + "px";})
  .text(function(d){ return d[0] + " " + d[1]; });

var Republic1 = d3.select(".chart")
  .selectAll("div") 
    .data(BigDataSet)
  .enter().append("div")
    .style("width", function(d) {
        return foo(d[1])*3 + "px";})
  .text(function(d){ return d[0] + " " + d[1]; });


var allocated = [];
for (i=0; i<dele.length; i++){
  allocated.push(justNums[i] - dele[i]);
}
var foo2 = d3.scale.linear()
  .domain([0,d3.max(allocated)])
  .range([0,420]);

d3.select(".chart2")
  .selectAll("div") 
    .data(BigDataSet)
  .enter().append("div")
    .style("width", function(d) {
        return foo2(d[2]-d[1])*3 + "px";})
  .text(function(d){ return d[0] + " " + (d[2]-d[1]); });

var Republic2 = d3.select(".chart2")
  .selectAll("div") 
    .data(BigDataSet)
  .enter().append("div")
    .style("width", function(d) {
        return foo2(d[2])*3 + "px";})
  .text(function(d){ return d[0] + " " + (d[2]-d[1]); });

////////////////////

var states = [["IA",52], ["NH",32], ["NV",43], ["SC",59], ["Al",60], ["AS",11], ["AR",37], ["CO",78], ["GA",117], ["MA",116], ["MN",93], ["OK",42], ["TN",75], ["TX",251], ["VT",26], ["VA",109], ["KS",37], ["LA",59], ["NE",30], ["ME",30], ["Abroad",17], ["MI",147], ["MS",41], ["MP",11], ["FL",246], ["IL",182], ["MO",84], ["NC",121], ["OH",160]];
var states2 = [["AZ",85], ["ID",27], ["UT",37], ["AK",20], ["HI",35], ["WA",118], ["WI",96], ["WY",18], ["NY",291], ["CT",71], ["DE",31], ["MD",118], ["PA",210], ["RI",33], ["IN",92], ["GU",12], ["WV",37], ["KY",60], ["OR",74], ["VI",12], ["PR",67], ["CA",548], ["MT",27], ["NJ",142], ["NM",43], ["ND",23], ["SD",25], ["DC",46], ["Unassigned",1]];

var maxDelegates = 0;

function findMaxDelegates(state){
    for (var i = 0; i < state.length; i++){
	if (state[i][1] > maxDelegates){
	    maxDelegates = state[i][1];
	}
    }
}

findMaxDelegates(states);
findMaxDelegates(states2);

var foo = d3.scale.linear()
    .domain([0, maxDelegates])
    .range([0, 120])

function makeBars(chartName, state){
    d3.select(chartName)
	.selectAll("div")
	.data(state)
	.enter().append("div")
	.style("width", function(d){
	    return (foo(d[1])*10)+"px";
	})
	.text(function(d){
	    return (d[0] + ": " + d[1]);
	});
}

makeBars(".chart", states);
makeBars(".chart2", states2);

d3.select("body").transition()
      .duration(750)
    .style("background-color", "red");

var republic = true;
var replace = function(){
  ////*
  if (!republic){
    d3.select(".chart2")
      .selectAll("div") 
        .data(BigDataSet)
      .enter().append("div")
        .style("width", function(d) {
            return foo2(d[2])*3 + "px";})
      .text(function(d){ return d[0] + " " + (d[2]-d[1]); });
    d3.select(".chart")
      .selectAll("div") 
        .data(BigDataSet)
      .enter().append("div")
        .style("width", function(d) {
            return foo(d[1])*3 + "px";})
      .text(function(d){ return d[0] + " " + d[1]; });
    republic = true;
  console.log("republicans");
  } else {
    republic=false;
    makeBars(".chart", states);
    makeBars(".chart2", states2);
    console.log("HI");
  }
  //*/
  /*
  if (republic){
    transition().div("chart", "hi");
    republic = false;
  } else {
    republic = false;
    d3.selectAll("div").transition() ////////// transition is not defined
      .attr("chart2", Republic1);
  }
  console.log("hi");
  */
};
window.addEventListener("click", replace);
