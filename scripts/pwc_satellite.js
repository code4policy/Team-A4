function drawLinedChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);
d3.tsv("../data/pwc_satellite.tsv", function (data) {
  data = dimple.filterData(data, "Source", "pwc")
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Year");
  x.addOrderRule("Year");
  myChart.addMeasureAxis("y", "Number of Launch");
  var s = myChart.addSeries(null, dimple.plot.line);
  myChart.draw();
});
};

drawLinedChart('#pwc_satellite');