function drawScatterChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);
  d3.tsv("../data/launch_cost.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 505, 305)
    var x = myChart.addCategoryAxis("x", "Year");
    x.addOrderRule("Year");
    // change font size of x-axis
    x.fontSize = "12";
    // add y-axis and change font size
    var y = myChart.addMeasureAxis("y", "Cost per Launch");
    y.fontSize = "12";
    myChart.addSeries("Size", dimple.plot.bubble);
    // add legend and change font size
    var myLegend = myChart.addLegend(180, 10, 360, 20, "right");
    myLegend.fontSize = "12";
    myChart.draw();
  });
};

drawScatterChart('#launch_cost');