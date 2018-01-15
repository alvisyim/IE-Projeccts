var bg01y = 0;
var bg01;

var ship01SizeX = 50;
var ship01SizeY = 50;
var ship01LocationX;
var ship01LocationY;
var missile01LocationX;
var missile01LocationY;
var missile01SizeX = 20;
var missile01SizeY = 27;
var missile01Move = false;


var rock01SizeY = 200/490*370;
var rock01LocationY;

var inPos;
var bg01;
var ship01;
var dottedLine;
var rock01;

var rock01Appear1 = false;
var rock01Appear2 = false;
var rock01Appear3 = false;

var correctAnswer;


function preload() {
  bg01 = loadImage("bg01.jpg");
  //320x480
  ship01 = loadImage("ship01.png");
  //500x413
  dottedLine = loadImage("line.png");
  rock01 = loadImage("rock01.png");
  //4:3
  missile01 = loadImage("missile01.png");
  //230x310
}

function setup () {
  createCanvas(600,400);
  textAlign(CENTER);

  rock01LocationY = -rock01SizeY;

  ship01LocationX = (width/2)-(ship01SizeX/2);
  ship01LocationY = height-ship01SizeY-10;

  missile01LocationX = (ship01LocationX+ship01SizeX/2)-(missile01SizeX/2);
  missile01LocationY = height-missile01SizeY-30;


  if (ship01LocationX <=0 ){
    ship01LocationX = 0;
  }
  if (ship01LocationX >= width-ship01SizeX ){
    ship01LocationX = width-ship01SizeX;
  }
}

function draw() {
  background(255);
  bg();
  rockInit();
  ifs();
  rock();
  keyFunction();
  test();

  image(ship01, ship01LocationX, ship01LocationY, ship01SizeX, ship01SizeY);
}

function bg() {
  bg01y = bg01y+1;
  if (bg01y > 400) {
    bg01y = -500;
  }
  image(bg01,0,bg01y,600,900);
  image(bg01,0,bg01y-900,600,900);
  image(dottedLine,0,(height-ship01SizeY-10)-10-5,600,0+10);
}

function rockInit(){
////////////////////////////////////////////////////////////////////////////////////rock01Appear1 == ture
    if (missile01Move == true){
      //missile Speed
      missile01LocationY -= 10;
      image(missile01,missile01LocationX, missile01LocationY,missile01SizeX, missile01SizeY);
    } else if (missile01Move == false) {
    }
}

function ifs() {
  if (rock01Appear1 == false && rock01Appear3 == false && rock01Appear3 == false ) {
    rockInit();
  }
// missile in position
{
  if (missile01LocationX + (missile01SizeX/2) >= 0 && missile01LocationX + (missile01SizeX/2) < 200){
    inPos = "1";
  }else if (missile01LocationX + (missile01SizeX/2) >= 200 && missile01LocationX + (missile01SizeX/2) < 400){
    inPos = "2";
  }else if (missile01LocationX + (missile01SizeX/2)>= 400 && missile01LocationX + (missile01SizeX/2) < 600){
    inPos = "3";
  }
}

//missile  contacts the rock line
{
  if ((missile01LocationY < rock01LocationY + rock01SizeY) && missile01Move == true) {
    if (inPos == "1"){
      if (rock01Appear1 == true ){
        rock01Appear1 = false;
        missile01Move = false;

        if (correctAnswer == "1"){
          rock01Appear1 = false;
          rock01Appear2 = false;
          rock01Appear3 = false;
        }
      } else {
      }
    }
    if (inPos == "2"){
      if (rock01Appear2 == true ){
        rock01Appear2 = false;
        missile01Move = false;

        if (correctAnswer == "2"){
          rock01Appear1 = false;
          rock01Appear2 = false;
          rock01Appear3 = false;
        }
      } else {
      }
    }
    if (inPos == "3"){
      if (rock01Appear3 == true ){
        rock01Appear3 = false;
        missile01Move = false;

        if (correctAnswer == "3"){
          rock01Appear1 = false;
          rock01Appear2 = false;
          rock01Appear3 = false;
        }
      } else {
      }
    }
  }
  if (missile01Move == true && missile01LocationY <=0){
    missile01Move = false;
  }
  ///////////////////////////////////////////////////////////////////////////////
}

//missile reset
{
  if (missile01Move == false){
    missile01LocationX = (ship01LocationX+(ship01SizeX/2))-(missile01SizeX/2);
    missile01LocationY = height-missile01SizeY-60;
  }
}

//loop initiale
{
  if (rock01Appear1 == false && rock01Appear2 == false && rock01Appear3 == false) {
    //rock01Appear1 = true;
    //rock01Appear2 = true;
    //rock01Appear3 = true;
  }
}

//rock reset
{
  if (rock01Appear1 == false && rock01Appear2 == false && rock01Appear3 == false) {
      resetStuff();
  }
}

//gameMode
{
  if (rock01LocationY+rock01SizeY >= (height-ship01SizeY-10)-10 + 5) {
    gameOver();
  }
}

}

function resetStuff(){
    rock01Appear1 = true;
    rock01Appear2 = true;
    rock01Appear3 = true;
    correctAnswer = int(random(1, 3.9999999999));
    rock01LocationY = -rock01SizeY;
}

function rock () {
  fill(120)
  if (rock01Appear1 == true) {
    //rect(0,rock01LocationY,200,rock01SizeY);
    image(rock01,0,rock01LocationY,200,rock01SizeY);
  } else {
  }
  if (rock01Appear2 == true) {
    //rect(200,rock01LocationY,200,rock01SizeY);
    image(rock01,200,rock01LocationY,200,rock01SizeY);
  } else {
  }
  if (rock01Appear3 == true) {
    //rect(400,rock01LocationY,200,rock01SizeY);
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  } else {
  }

  //rock speed
  rock01LocationY += 0.5;
}

function gameOver () {
  fill(225);
  text("Game Over",0,0,width, height);
}

function keyPressed (){
  if (keyCode == 32){
    missile01Move = true;
  }
}

function keyFunction (){

  if (keyIsDown(LEFT_ARROW)){
    ship01LocationX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ship01LocationX += 5;
  }

  if (ship01LocationX <= 0){
    ship01LocationX =0;
  }
  if (ship01LocationX + ship01SizeX >= 600){
    ship01LocationX = 600 - ship01SizeX;
  }
}

function test() {
  fill(225,0,0);
  text(inPos,0,0,100,100);
  text(missile01LocationX + missile01SizeX/2,0,20,100,100);
  text(missile01Move,0,40,100,100);
  text(correctAnswer,0,60,100,100);
}











//aaa
//arrows not continues
