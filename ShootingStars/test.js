
var playerScore = 9696;
var playerName = "Alvis Yim";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzuHIqBV2fMg4BKI2Izd6BOKdD1epT6l8",
  authDomain: "shooting-stars-9a961.firebaseapp.com",
  databaseURL: "https://shooting-stars-9a961.firebaseio.com",
  projectId: "shooting-stars-9a961",
  storageBucket: "shooting-stars-9a961.appspot.com",
  messagingSenderId: "597164631844"
};

var data = {
  name: playerName,
  score: playerScore
}

function setup (){
  firebase.initializeApp(config);
  createCanvas(600,400);


}

function draw () {
  background(0);

  button1 = createButton("insert highscore");
  button1.mousePressed(uploadHighscore);
  button1.position(0,0);

}

function uploadHighscore() {
  // must be together//
  var database = firebase.database();
  var ref = database.ref('Highscores');
  ref.push(data);
  ////////////////////
}
