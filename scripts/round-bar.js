
/* Graph 1 */

function drawRoundBarChart1(cssSelector){


// set the dimensions and margins of the graph
var margin = {top: 50, right: 0, bottom: 0, left: 0},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object
var svg = d3.select("#launch_1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

d3.csv("../data/launch_by_country_1969.csv", function(data) {

  // Scales
  var x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing
      .domain(data.map(function(d) { return d.Country; })); // The domain of the X axis is the list of states.
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 60]); // Domain of Y is from 0 to the max seen in the data


  // Add the bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
      .attr("fill", "#69b3a2")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d['Value']); })
          .startAngle(function(d) { return x(d.Country); })
          .endAngle(function(d) { return x(d.Country) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))
      .on("mouseover", function(){
        d3.select(this)
            .attr("style", "fill:#00FFFF");   // alter highlight color 
          })
      .on("mouseout", function(){
        d3.select(this)
            .attr("style", "#696969");
          });

  // Add title - altered text decoration and font to make graphs more coherent with rest
  svg.append("text")
        .attr("text-anchor", "middle")  
        .style("font-size", "20px") 
        .style("text-decoration", "none")  
        .text("1957-1969");


  // Add the labels
  svg.append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
        .attr("text-anchor", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Value'])+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Country)})
        .attr("transform", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});
};

drawRoundBarChart1('#launch_1');


/* Graph2 */

function drawRoundBarChart2(cssSelector){


// set the dimensions and margins of the graph
var margin = {top: 50, right: 0, bottom: 0, left: 0},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object
var svg = d3.select("#launch_2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

d3.csv("../data/launch_by_country_1970.csv", function(data) {

  // Scales
  var x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing
      .domain(data.map(function(d) { return d.Country; })); // The domain of the X axis is the list of states.
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 60]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
      .attr("fill", "#5E6264")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d['Value']); })
          .startAngle(function(d) { return x(d.Country); })
          .endAngle(function(d) { return x(d.Country) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))
      .on("mouseover", function(){
        d3.select(this)
            .attr("style", "fill:#00FFFF");   // alter highlight color 
          })
      .on("mouseout", function(){
        d3.select(this)
            .attr("style", "#5E6264");
          });

  // Add title - altered text decoration and font to make graphs more coherent with rest
  svg.append("text")
        .attr("text-anchor", "middle")  
        .style("font-size", "20px") 
        .style("text-decoration", "none")  
        .text("1970-1974");

  // Add the labels
  svg.append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
        .attr("text-anchor", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Value'])+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Country)})
        .attr("transform", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});
};

drawRoundBarChart2('#launch_2');


/* Graph 3 */

function drawRoundBarChart3(cssSelector){

// set the dimensions and margins of the graph
var margin = {top: 50, right: 0, bottom: 0, left: 0},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    innerRadius = 90,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// append the svg object
var svg = d3.select("#launch_3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

d3.csv("../data/launch_by_country_1975.csv", function(data) {

  // Scales
  var x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing
      .domain(data.map(function(d) { return d.Country; })); // The domain of the X axis is the list of states.
  var y = d3.scaleRadial()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 60]); // Domain of Y is from 0 to the max seen in the data

  // Add the bars
  svg.append("g")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
      .attr("fill", "#24246C")
      .attr("d", d3.arc()     // imagine your doing a part of a donut plot
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y(d['Value']); })
          .startAngle(function(d) { return x(d.Country); })
          .endAngle(function(d) { return x(d.Country) + x.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))
      .on("mouseover", function(){
        d3.select(this)
            .attr("style", "fill:#00FFFF");   // alter highlight color 
          })
      .on("mouseout", function(){
        d3.select(this)
            .attr("style", "#191970");
          });

  // Add title - altered text decoration and font to make graphs more coherent with rest
  svg.append("text")
        .attr("text-anchor", "middle")  
        .style("font-size", "20px") 
        .style("text-decoration", "none")  
        .text("1975-2020");

  // Add the labels
  svg.append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
        .attr("text-anchor", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y(d['Value'])+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Country)})
        .attr("transform", function(d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});
};


drawRoundBarChart3('#launch_3');


