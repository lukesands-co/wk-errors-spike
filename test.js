var colours = ['#903087', '#4F9F97', '#1d70b8', '#f47738', '#ffdd00', '#d53880', '#85994b', '#b58840', '#f499be', '#d4351c'];

var intervalColours = ["rgba(231,107,243,0.2)","rgba(0,176,246,0.2)"];

var x = ['01/01/2020', '02/01/2020', '03/01/2020', '04/01/2020', '05/01/2020'];

var raw = new Array("-5,3,7", "-4,2,10", "3,6,20", "0,5,8", "-3,4,6");

var lowers = raw.map(function(item) {
  var segments = item.split(',');
  return segments[0];
})

var mids = raw.map(function(item) {
  var segments = item.split(',');
  return segments[1];
})

var uppers = raw.map(function(item) {
  var segments = item.split(',');
  return segments[2];
})

// line
var trace3 = {
  x: x, 
  y: mids, 
  line: {color: colours[1]}, 
  mode: "lines", 
  name: "Test 2", 
  type: "scatter"
};

// shading
var trace4 = {
  x: x.concat(x.slice().reverse()),
  y: uppers.concat(lowers.reverse()),
  fill: "tozerox", 
  fillcolor: intervalColours[1], 
  line: {color: "transparent"}, 
  showlegend: false, 
  type: "scatter"
}



var data = [trace3, trace4];

Plotly.newPlot('chart', data);