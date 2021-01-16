function drawLinedChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);

d3.tsv("../data/pwc_satellite.tsv", function (data) {
  data = dimple.filterData(data, "Source", "pwc")
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Year");
  x.addOrderRule("Year");
  // change font size of x-axis
  x.fontSize = "12";
  // add y-axis and change font size
  var y = myChart.addMeasureAxis("y", "Number of Launches");
  y.fontSize = "12";
  var s = myChart.addSeries(null, dimple.plot.line);
  myChart.draw();
});
};


drawLinedChart('#pwc_satellite');