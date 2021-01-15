function drawLinedChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);
d3.tsv("/data/ms_prediction.tsv", function (data) {
  data = dimple.filterData(data, "Source", ["MS - Main case", "MS - Bull case", "MS - Bear case", "BOFA"])
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Year");
  x.addOrderRule("Year");
  // change font size of x-axis
  x.fontSize = "12";
  // add y-axis and change font size
  var y = myChart.addMeasureAxis("y", "Size of Space Industry");
  y.fontSize = "12";
  myChart.addSeries("Source", dimple.plot.line);
  // add legend and change font size
  var myLegend = myChart.addLegend(60, 10, 500, 20, "right");
  myLegend.fontSize = "12";
  // change default color
  myChart.defaultColors = [
    new dimple.color("lightpink"),
    new dimple.color("red"),
    new dimple.color("lightpink"),
    new dimple.color("skyblue"),
  ]; 
  myChart.lineMarkers = true;
  myChart.draw();
});
};

drawLinedChart('#ms_prediction');