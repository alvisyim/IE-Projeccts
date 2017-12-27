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

var rock01LocationY = 0;
var rockGone = false;
var rockState = "111";
var rock01SizeY = 200/490*370;

var bg01;
var ship01;
var dottedLine;
var rock01;

function preload() {
  bg01 = loadImage("bg01.jpg");
  //320x480
  ship01 = loadImage("ship01.png");
  //500x413
  dottedLine = loadImage("line.png");
  rock01 = loadImage("rock01.png");
  //490x370
  missile01 = loadImage("missile01.png");
  //230x310
}

function setup () {
  createCanvas(600,400);
  textAlign(CENTER);

  ship01LocationX = (width/2)-(ship01SizeX/2);
  ship01LocationY = height-ship01SizeY-10;

  missile01LocationX = (ship01LocationX+ship01SizeX/2)-(missile01SizeX/2);
  //missile Speed
  missile01LocationY = height-missile01SizeY-30;


}

function draw() {
  background(255);
  bg();
  ifs();
  rock();
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


function rock () {
  if (rockState =="000"){
  }
  else if (rockState =="100"){
    //rect(0,rock01LocationY,200,rock01SizeY);
    image(rock01,0,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "010") {
    //rect(200,rock01LocationY,200,rock01SizeY);
    image(rock01,200,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "001") {
    //rect(400,rock01LocationY,200,rock01SizeY);
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "101") {
    //rect(0,rock01LocationY,200,rock01SizeY);
    image(rock01,0,rock01LocationY,200,rock01SizeY);
    //rect(400,rock01LocationY,200,rock01SizeY);
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "110") {
    //rect(0,rock01LocationY,200,rock01SizeY);
    image(rock01,0,rock01LocationY,200,rock01SizeY);
    //rect(200,rock01LocationY,200,rock01SizeY);
    image(rock01,200,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "011") {
    //rect(200,rock01LocationY,200,rock01SizeY);
    image(rock01,200,rock01LocationY,200,rock01SizeY);
    //rect(400,rock01LocationY,200,rock01SizeY);
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  }
  else if (rockState == "111") {
    //rect(0,rock01LocationY,200,rock01SizeY);
    image(rock01,0,rock01LocationY,200,rock01SizeY);
    //rect(200,rock01LocationY,200,rock01SizeY);
    image(rock01,200,rock01LocationY,200,rock01SizeY);
    //rect(400,rock01LocationY,200,rock01SizeY);
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  }

  //rock speed
  rock01LocationY += 0.5;
}

function ifs() {
  if (missile01Move == true){
    missile01LocationY -= 10;
    image(missile01,missile01LocationX, missile01LocationY,missile01SizeX, missile01SizeY);
  } else if (missile01Move == false) {
  }

  if (missile01Move == true && missile01LocationY <=0){
    missileReset();
  }


  if ((missile01LocationY < rock01LocationY + rock01SizeY) && missile01Move == true) {////////////////////////////////////////////////////
    missile01Move = false;
    missileReset();

    if (rockState == "111"){
      if (missile01LocationX + (missile01SizeX/2) > 0 && missile01LocationX < 200){
        rockState = "011";
      } else if (missile01LocationX + (missile01SizeX/2) > 200 && missile01LocationX < 400){
        rockState = "101";
      } else  if (missile01LocationX + (missile01SizeX/2) > 400 && missile01LocationX < 600){
        rockState = "110";
      }
    }else if (rockState == "011"){
      if (missile01LocationX + (missile01SizeX/2) > 400 && missile01LocationX < 600){
        rockState = "010";
      } else if (missile01LocationX + (missile01SizeX/2) > 200 && missile01LocationX < 400){
        rockState = "001";
      }
    }else if (rockState == "101"){
      if (missile01LocationX + (missile01SizeX/2) > 0 && missile01LocationX < 200){
        rockState = "001";
      } else if (missile01LocationX + (missile01SizeX/2) > 400 && missile01LocationX < 600){
        rockState = "100";
      }
    }else if (rockState == "110"){
      if (missile01LocationX + (missile01SizeX/2) > 200 && missile01LocationX < 400){
        rockState = "100";
      } else if (missile01LocationX + (missile01SizeX/2) > 0 && missile01LocationX < 200){
        rockState = "010";
      }
    }else if (rockState == "001"){
      if (missile01LocationX + (missile01SizeX/2) > 400 && missile01LocationX < 600){
        rockState = "000";
      }
    }else if (rockState == "010"){
      if (missile01LocationX + (missile01SizeX/2) > 200 && missile01LocationX < 400){
        rockState = "000";
      }
    }else if (rockState == "100"){
      if (missile01LocationX + (missile01SizeX/2) > 0 && missile01LocationX < 200){
        rockState = "000";
      }
    }
  }

  if ((rock01LocationY+rock01SizeY >= (height-ship01SizeY-10)-10 )&& rockState != "000") {
    gameOver();
  }else {
  }
}

function missileReset () {
  missile01LocationX = (ship01LocationX+ship01SizeX/2)-(missile01SizeX/2);
  missile01LocationY = height-missile01SizeY-60;
}

function gameOver () {
  fill(225);
  text("Game Over",0,0,width, height);
}

function keyPressed (){
  if (keyCode == 32){
    missile01Move = true;
  }
  if (keyCode == LEFT_ARROW){
    ship01LocationX -= 100;
  }
  if (keyCode == RIGHT_ARROW){
    ship01LocationX += 100;
  }


  if (ship01LocationX <=0 ){
    ship01LocationX = 0;
  }
  if (ship01LocationX >= width-ship01SizeX ){
    ship01LocationX = width-ship01SizeX;
  }
}

function test() {
  fill(225);
  text(bg01y,0,0,100,100);
  text(missile01LocationX,0,20,100,100);
  text(rockState,0,40,100,100);
}











//aaa
//missile misbehaving
//arrows not continues
