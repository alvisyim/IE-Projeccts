function preload() {
  bg01 = loadImage("bg01.jpg");
  //320x480
}

function setup () {
  createCanvas(600,400);
  textAlign(CENTER);

}

function draw() {
  background(225);
  image(bg01,0,0,width, 600/320*480);
  textSize(50);
  fill(225);
  text("Shooting Stars",0,100,width, height-100);

  playButton = createButton("play");
  playButton.size(300,80);
  playButton.position(((width/2)-150)+8,250);
  playButton.mousePressed(playGame);

  textSize(12);
}

function playGame(){
    window.location.replace("game.html");
}
