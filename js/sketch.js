var y = 100;
var canvas;
var noeuds=[];

function setup() {
  console.log("init sketch")
   frameRate(60);
//  canvas = createCanvas(400, 300);
    canvas = createCanvas(800, 600);
    console.log(canvas);
  canvas.position(0,0);
//  canvas.style('z-index', '-1');
//canvas.style('top','0px');
console.log(canvas);

}

function draw() {
  background(255,0,100);
  textAlign(CENTER);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
  ellipse(mouseX,mouseY, 10,10);

  var noeudsString = localStorage.getItem("noeuds");
  try {
  noeuds = JSON.parse(noeudsString);              // {}
} catch (e) {
  console.error("Parsing error:", e);
}
  document.getElementById("result").innerHTML = noeuds;

  for (i = 0; i < noeuds.length; i++) {
    noeud = noeuds[i];
    //  console.log(noeud);
    push();
    translate(noeud.centerX,noeud.centerY);
  //  var taille=textWidth(noeud.thingName);

    var nom=noeud.thingName;
  //  console.log(nom);
        var taille = nom.length;
    //    console.log(taille);
    ellipse(0,0,20+taille*5,20+taille*2);
    text(noeud.thingName,0,0+4);
    pop();
}
//  text(frameCount, width/2, height/2);
var firstPoint = JSON.parse(localStorage.getItem("firstPoint"));
var lastPoint = JSON.parse(localStorage.getItem("lastPoint"));
if (firstPoint && lastPoint){
line(firstPoint.X,firstPoint.Y,lastPoint.X,lastPoint.Y);
}
}
