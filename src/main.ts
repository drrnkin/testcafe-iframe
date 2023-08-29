import * as Highcharts from "highcharts";

// This is just to prevent a compiler error.  Simply importing highcharts cause the problem with Firefox
Highcharts;

const div = document.createElement("div");
div.innerText = "This was created by the iframe";
document.body.appendChild(div);

console.log(document.querySelectorAll);