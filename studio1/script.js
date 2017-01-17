// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(184, 155, 255);
}

function draw() {

  if (mouseIsPressed){
    console.log("pressed");
    fill(0);
  }
  else{
    fill(184, 155, 255);
  }
  ellipse(abs(800-mouseX),abs(250-mouseY),10,10);
}
