var vg_1 = "homework.vg.json"; 
vegaEmbed("#Map", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);
var vg_2 = "homework2.vg.json";
vegaEmbed("#chart", vg_2).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);