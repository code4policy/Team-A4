function drawLinedChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);
d3.tsv("/data/ms_prediction.tsv", function (data) {
  data = dimple.filterData(data, "Source", ["MS - Main case", "MS - Bull case", "MS - Bear case", "BOFA"])
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Year");
  x.addOrderRule("Year");
  myChart.addMeasureAxis("y", "Size of Space Industry");
  myChart.addSeries("Source", dimple.plot.line);
  myChart.addLegend(60, 10, 500, 20, "right");
  myChart.draw();
});
};

drawLinedChart('#ms_prediction');