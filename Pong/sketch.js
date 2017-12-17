var theImage = 1;
var lock = false;
var img01;
var img02;
var img03;
var img04;
var img05;
var img06;
var img07;
var img08;
var img09;

function preload() {
  img01=loadImage("1.png");
  img02=loadImage("2.png");
  img03=loadImage("3.png");
  img04=loadImage("4.png");
  img05=loadImage("5.png");
  img06=loadImage("6.png");
  img07=loadImage("7.png");
  img08=loadImage("8.png");
  img09=loadImage("9.png");
}
function setup() {
  createCanvas(600, 400);
  background(200,200,200);
  image(img01, 0, 0,600,400);
}
function draw(){
  if (theImage == 1){
    image(img01, 0, 0,600,400);
  }
  if (theImage == 2){
    image(img02, 0, 0,600,400);
  }
  if (theImage == 3){
    image(img03, 0, 0,600,400);
  }
  if (theImage == 4){
    image(img04, 0, 0,600,400);
  }
  if (theImage == 5){
    image(img05, 0, 0,600,400);
  }
  if (theImage == 6){
    image(img06, 0, 0,600,400);
  }
  if (theImage == 7){
    image(img07, 0, 0,600,400);
  }
  if (theImage == 8){
    image(img08, 0, 0,600,400);
  }
  if (theImage == 9){
    image(img09, 0, 0,600,400);
  }
  if (theImage > 9){
    theImage = 1;
  }
  test();
}
function keyPressed() {
  if (keyCode == 32) {
    theImage += 1;
    lock = true;
  }
  test();
}

function keyReleased(){
  lock = false;
}

function test(){
  fill(225);
  text(theImage,10,100,100);
  text(lock,10,40,100,100);
}
