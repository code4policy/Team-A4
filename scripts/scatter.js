function drawScatterChart(cssSelector){

var svg = dimple.newSvg(cssSelector, 590, 400);
      d3.tsv("../data/launch_cost.tsv", function (data) {
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(60, 30, 505, 305)
        var x = myChart.addCategoryAxis("x", "Year");
        x.addOrderRule("Year");
        myChart.addMeasureAxis("y", "Cost");
        myChart.addSeries("Channel", dimple.plot.bubble);
        myChart.addLegend(180, 10, 360, 20, "right");
        myChart.draw();
      });
    };

drawScatterChart('#launch_cost');

