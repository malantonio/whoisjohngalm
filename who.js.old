/**********************
** whoisjohngalm.com **
**********************/

var who = function() {
  var width; var height; var xpos; var ypos;
  
  var width = window.innerWidth;
  var height = window.innerHeight;
  var xpos = Math.floor((Math.random() * width));
  var ypos = Math.floor((Math.random() * height));
  return [xpos,ypos]
}

var whoIs = function(num) {
  var i; var rand; var xpos; var ypos; var span; var qmar; var g;
  var randcol;
  var colors = ["fff", "deedee", "426f42", "666", "ffff00", "00ffff", "ff1493", "adff2f", "ff0000"];
  var count = colors.length;
  
  var g = document.getElementById("g");
  while(g.firstChild) {
    g.removeChild(g.firstChild);
    }
  
    for(i = 0; i < num; i++) {
    var rand = who();
    var xpos = rand[0] + "px";
    var ypos = rand[1] + "px";
    var span  = document.createElement("span");
    var qmark = document.createTextNode("?");
    var randcol = colors[Math.floor((Math.random() * count))];
    span.appendChild(qmark);
    span.style.position = "absolute";
    span.style.top = ypos;
    span.style.left = xpos;
    span.style.fontSize = "15em";
    span.style.color = "#" + randcol;
    document.getElementById("g").appendChild(span);
  }
}

var whoIsJohnGalm = function() {
  setInterval(function(){
    whoIs(15);
    }, 250);
}
