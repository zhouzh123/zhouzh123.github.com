/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:40:57
 * @version $Id$
 */
var t11 = document.getElementById("11");
var t12 = document.getElementById("12");
var t21 = document.getElementById("21");
var t22 = document.getElementById("22");
var t31 = document.getElementById("31");
var t32 = document.getElementById("32");
var colors = ["#ff0000","#00ff00","#0000ff","#ffff00","#00ffff","#ff00ff"];
var index = 0;
function changecolor() {
	var color = colors[index++];
	document.bgColor = color;
	if(index == colors.length) {
		index = 0;
	}
}