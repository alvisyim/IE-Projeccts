function preload() {
  bg01 = loadImage("bg01.jpg");
  //320x480
  logo = loadImage("shootingStarsLogo.png");
  //6652x2889
}

function setup () {
  createCanvas(600,400);
}

function draw() {
  background(225);
  image(bg01,0,0,width, 600/320*480);
  image(logo,170,0,6652/12,2889/12);

  playButton = createButton("Play >>");
  playButton.size(180,65);
  playButton.position(15,240);
  //playButton.style("border","solid");
  playButton.style("borderWidth","4px");
  playButton.style("borderColor","black");
  playButton.style("borderRadius","8px");
  playButton.style("font","bold 200% Tahoma");
  playButton.style("textAlign","left");
  //playButton.style("textMargin","50px");
  playButton.style("backgroundColor","#ffc660");


  playButton.mousePressed(playGame);



  highScores = createButton("High Scores >>");
  highScores.size(300,65);
  highScores.position(15,320);
  //highScores.style("border","solid");
  highScores.style("borderWidth","4px");
  highScores.style("borderColor","black");
  highScores.style("borderRadius","8px");
  highScores.style("font","bold 180% Tahoma");
  highScores.style("textAlign","left");
  highScores.style("backgroundColor","#ffc660");

  //highScores.mousePressed(go to list page);


}

function playGame(){
  window.location.replace("game.html");
}
