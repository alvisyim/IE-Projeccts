//var myScore = 456;
var myScore = sessionStorage.getItem('playerScore');

//must have value
var playerName = "undefined";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzuHIqBV2fMg4BKI2Izd6BOKdD1epT6l8",
  authDomain: "shooting-stars-9a961.firebaseapp.com",
  databaseURL: "https://shooting-stars-9a961.firebaseio.com",
  projectId: "shooting-stars-9a961",
  storageBucket: "shooting-stars-9a961.appspot.com",
  messagingSenderId: "597164631844"
};
/*
// cannot be here cuz playername changes
var data = {
  name: playerName,
  score: myScore
}
*/


function preload(){
  bg01 = loadImage("bg01.jpg");
  //320x480
  gameOverWord = loadImage("gameOver.png");
  //358x247
}

function setup () {
  firebase.initializeApp(config);
  createCanvas(600,400);
  fill(225);
  background(0);
  image(bg01,0,0,width, 600/320*480);
  image(gameOverWord,(width/2)-((358*0.8)/2),5,358*0.8,247*0.8);

  highscoreInput = createInput("Your name __");
  highscoreInput.size(500,50);
  highscoreInput.style("borderColor","black");
  highscoreInput.style("font","bold 100% Tahoma");
  highscoreInput.style("textAlign","center");
  highscoreInput.position(((width/2)-250)+8,250);

  highScoreUpload = createButton("Upload Highscore");
  highScoreUpload.size(200,70);
  highScoreUpload.position(((width/2)-100)+8,330);
  //highScoreUpload.style("border","solid");
  highScoreUpload.style("borderWidth","4px");
  highScoreUpload.style("borderColor","black");
  highScoreUpload.style("borderRadius","8px");
  highScoreUpload.style("font","bold 130% Tahoma");
  highScoreUpload.style("textAlign","center");
  //highScoreUpload.style("textMargin","50px");
  highScoreUpload.style("backgroundColor","#ffc660");
  highScoreUpload.mousePressed(uploadHighscore);

  mainMenuButton = createButton("Main Menu");
  mainMenuButton.size(100,40);
  mainMenuButton.position(12,362);
  //mainMenuButton.style("border","solid");
  mainMenuButton.style("borderWidth","4px");
  mainMenuButton.style("borderColor","black");
  mainMenuButton.style("borderRadius","8px");
  mainMenuButton.style("font","bold 90% Tahoma");
  mainMenuButton.style("textAlign","center");
  //mainMenuButton.style("textMargin","50px");
  mainMenuButton.style("backgroundColor","#ffc660");
  mainMenuButton.mousePressed(goToMainMenu);

}

function draw () {
  fill(225,128,0);
  textAlign(CENTER);
  textSize(20);
  textStyle("bold");
  text("Your Score: "+ myScore, 0,210,width,height);
  //test();
}

function goToMainMenu(){
  window.location.replace("mainMenu.html");
}

function uploadHighscore() {
  // must be together//
  var database = firebase.database();
  var ref = database.ref('Highscores');
  fill(0,225,0);
  text(playerName ,0,0,100,100);
  ref.push({
    name: highscoreInput.value(),
    score: myScore
  });
  //what if undefined? highscore comfirmation?
}

function test (){
  fill(255,0,0);
  textSize(12);
  text(myScore,0,20,100,100);
}
