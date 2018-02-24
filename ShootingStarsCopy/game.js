var bg01y = 0;
var bg01;

var ship01SizeX = 50;
var ship01SizeY = 50;
var ship01LocationX, ship01LocationY;
var missile01LocationX, missile01LocationY;
var missile01SizeX = 20;
var missile01SizeY = 27;
var missile01Move = false;


var rock01SizeY = 200/490*370;
var rock01LocationY;

var inPos, bg01, ship01, dottedLine, rock01;

var rock01Appear1 = false;
var rock01Appear2 = false;
var rock01Appear3 = false;

var correctAnswer;
var bbb = 0;
var ccc = 0;
var ddd = 0;
var exSize = 200;
var exLocationX,exLocationY;

var triggerExplode1 = false;
var triggerExplode2 = false;
var triggerExplode3 = false;

var score = 100;

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

  ex01 = loadImage("ex/ex01.png");
  ex02 = loadImage("ex/ex02.png");
  ex03 = loadImage("ex/ex03.png");
  ex04 = loadImage("ex/ex04.png");
  ex05 = loadImage("ex/ex05.png");
  ex06 = loadImage("ex/ex06.png");
  ex07 = loadImage("ex/ex07.png");
  ex08 = loadImage("ex/ex08.png");
  ex09 = loadImage("ex/ex09.png");
  ex10 = loadImage("ex/ex10.png");
  ex11 = loadImage("ex/ex11.png");
  ex12 = loadImage("ex/ex12.png");
  //1:1

  gameOverWord = loadImage("gameOver.png");
  //358x247
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
  if (rock01LocationY+rock01SizeY >= (height-ship01SizeY-10)-10 + 5) {
    youLose();
  } else {
    //main game
    background(255);
    bg();
    rockInit();
    ifs();
    rock();
    keyFunction();
    image(ship01, ship01LocationX, ship01LocationY, ship01SizeX, ship01SizeY);
  }
  test();
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
        triggerExplode1 = true;
        rock01Appear1 = false;
        missile01Move = false;

        if (correctAnswer == "1"){
          score = score +  20;
          if(rock01Appear2 == true){
            triggerExplode2 = true;
            rock01Appear2 = false;
          }
          if(rock01Appear3 == true){
            triggerExplode3 = true;
            rock01Appear3 = false;
          }
        } else {
          score = score -10;
        }
      } else {
      }
    }
    if (inPos == "2"){
      if (rock01Appear2 == true ){
        triggerExplode2 = true;
        rock01Appear2 = false;
        missile01Move = false;

        if (correctAnswer == "2"){
          score = score +  20;
          if(rock01Appear1 == true){
            triggerExplode1 = true;
            rock01Appear1 = false;
          }
          if(rock01Appear3 == true){
            triggerExplode3 = true;
            rock01Appear3 = false;
          }
        } else {
          score = score -10;
        }
      } else {
      }
    }
    if (inPos == "3"){
      if (rock01Appear3 == true ){
        triggerExplode3 = true;
        rock01Appear3 = false;
        missile01Move = false;

        if (correctAnswer == "3"){
          score = score +  20;
          if (rock01Appear1 == true){
            triggerExplode1 = true;
            rock01Appear1 = false;
          }
          if(rock01Appear2 == true){
            triggerExplode2 = true;
            rock01Appear2 = false;
          }
        } else {
          score = score -10;
        }
      } else {
      }
    }
  }
  if (missile01Move == true && missile01LocationY <=0){
    missile01Move = false;
  }
}

// trigger the explosion
{
  if (triggerExplode1 == true) {
    explodeAniEx1(100-(exSize/2),rock01LocationY+(rock01SizeY/2)-(exSize/2));

  }
  if (triggerExplode2 == true) {
    explodeAniEx2(300-(exSize/2),rock01LocationY+(rock01SizeY/2)-(exSize/2));
  }
  if (triggerExplode3 == true) {
    explodeAniEx3(500-(exSize/2),rock01LocationY+(rock01SizeY/2)-(exSize/2));
  }
}

//missile reset
{
  if (missile01Move == false){
    missile01LocationX = (ship01LocationX+(ship01SizeX/2))-(missile01SizeX/2);
    missile01LocationY = height-missile01SizeY-60;
  }
}

//rock reset
{
  //if they all didnt appear and their explotions are done, then reset
  if (rock01Appear1 == false && rock01Appear2 == false && rock01Appear3 == false && triggerExplode1 == false && triggerExplode2 == false && triggerExplode3 == false) {// triger the explode then reset
      resetStuff();
  }
}

}

function rock () {
  fill(120)
  if (rock01Appear1 == true) {
    image(rock01,0,rock01LocationY,200,rock01SizeY);
  } else {
  }
  if (rock01Appear2 == true) {
    image(rock01,200,rock01LocationY,200,rock01SizeY);
  } else {
  }
  if (rock01Appear3 == true) {
    image(rock01,400,rock01LocationY,200,rock01SizeY);
  } else {
  }

  //rock speed
  rock01LocationY += 1;//1
}

//cuz if we only use one function, it will not be able to explode seperately, they would end the same time
function explodeAniEx1(x1,y1) {
  bbb += 0.2;
  if (int(bbb) == 1){
    image(ex01,x1,y1,exSize,exSize);
  }else if (int(bbb) == 2){
    image(ex02,x1,y1,exSize,exSize);
  }else if (int(bbb) == 3){
    image(ex03,x1,y1,exSize,exSize);
  }else if (int(bbb) == 4){
    image(ex04,x1,y1,exSize,exSize);
  }else if (int(bbb) == 5){
    image(ex05,x1,y1,exSize,exSize);
  }else if (int(bbb) == 6){
    image(ex06,x1,y1,exSize,exSize);
  }else if (int(bbb) == 7){
    image(ex07,x1,y1,exSize,exSize);
  }else if (int(bbb) == 8){
    image(ex08,x1,y1,exSize,exSize);
  }else if (int(bbb) == 9){
    image(ex09,x1,y1,exSize,exSize);
  }else if (int(bbb) == 10){
    image(ex10,x1,y1,exSize,exSize);
  }else if (int(bbb) == 11){
    image(ex11,x1,y1,exSize,exSize);
  }else if (int(bbb) == 12){
    image(ex12,x1,y1,exSize,exSize);
  } else  if (int(bbb)>12) {
    triggerExplode1 = false;
    bbb = 0;
  }
}

function explodeAniEx2(x2,y2) {
  ccc += 0.2;
  if (int(ccc) == 1){
    image(ex01,x2,y2,exSize,exSize);
  }else if (int(ccc) == 2){
    image(ex02,x2,y2,exSize,exSize);
  }else if (int(ccc) == 3){
    image(ex03,x2,y2,exSize,exSize);
  }else if (int(ccc) == 4){
    image(ex04,x2,y2,exSize,exSize);
  }else if (int(ccc) == 5){
    image(ex05,x2,y2,exSize,exSize);
  }else if (int(ccc) == 6){
    image(ex06,x2,y2,exSize,exSize);
  }else if (int(ccc) == 7){
    image(ex07,x2,y2,exSize,exSize);
  }else if (int(ccc) == 8){
    image(ex08,x2,y2,exSize,exSize);
  }else if (int(ccc) == 9){
    image(ex09,x2,y2,exSize,exSize);
  }else if (int(ccc) == 10){
    image(ex10,x2,y2,exSize,exSize);
  }else if (int(ccc) == 11){
    image(ex11,x2,y2,exSize,exSize);
  }else if (int(ccc) == 12){
    image(ex12,x2,y2,exSize,exSize);
  } else if (int(ccc)>12) {
    triggerExplode2 = false;
    ccc = 0;
  }
}

function explodeAniEx3(x3,y3) {
  ddd += 0.2;
  if (int(ddd) == 1){
    image(ex01,x3,y3,exSize,exSize);
  }else if (int(ddd) == 2){
    image(ex02,x3,y3,exSize,exSize);
  }else if (int(ddd) == 3){
    image(ex03,x3,y3,exSize,exSize);
  }else if (int(ddd) == 4){
    image(ex04,x3,y3,exSize,exSize);
  }else if (int(ddd) == 5){
    image(ex05,x3,y3,exSize,exSize);
  }else if (int(ddd) == 6){
    image(ex06,x3,y3,exSize,exSize);
  }else if (int(ddd) == 7){
    image(ex07,x3,y3,exSize,exSize);
  }else if (int(ddd) == 8){
    image(ex08,x3,y3,exSize,exSize);
  }else if (int(ddd) == 9){
    image(ex09,x3,y3,exSize,exSize);
  }else if (int(ddd) == 10){
    image(ex10,x3,y3,exSize,exSize);
  }else if (int(ddd) == 11){
    image(ex11,x3,y3,exSize,exSize);
  }else if (int(ddd) == 12){
    image(ex12,x3,y3,exSize,exSize);
  } else if (int(ddd)>12) {
    triggerExplode3 = false;
    ddd = 0;
  }
}

function resetStuff() {
    rock01Appear1 = true;
    rock01Appear2 = true;
    rock01Appear3 = true;
    correctAnswer = int(random(1, 3.9999999999));
    rock01LocationY = -rock01SizeY;
}

function restartThisPage(){
  window.location.replace("game.html");
}

function youLose(){
  window.location.replace("highScore.html");
}

function goToMainMenu(){
  window.location.replace("mainMenu.html");
}

function keyPressed (){
  if (keyCode == 32){
    missile01Move = true;
  }
}

function keyFunction (){
//ship speed
  if (keyIsDown(LEFT_ARROW)){
    ship01LocationX -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    ship01LocationX += 3;
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
  text("bbb"+int(bbb),0,80,100,100);
  text("ccc"+int(ccc),0,100,100,100);
  text("ddd"+int(ddd),0,120,100,100);
  text("score: "+int(score),0,140,100,100);
}

//x3,y3; ddd
