var data = [{x:[1930,1940,1950,1960], 
             y:[573076, 575901, 580132, 532759]}];

Plotly.newPlot('myPlot', data);

var layout = {
  "title": "Buffalo Population",
  xaxis:{"title": "Year"},
  yaxis:{"title": "Population"}
}

Plotly.newPlot("myPlot2", data, layout);

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4],
  name: "Tracer",
  type: 'scatter'
}

var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4],
  name: 'Mercy',
  type: 'scatter'
}

var dataLegend = [trace1, trace2];
var layout2={
  title: "Overwatch",
  xaxis: {"title": 'Time'},
  yaxis: {"title": 'HP'}
}
Plotly.newPlot('myPlotLegend', dataLegend, layout2);