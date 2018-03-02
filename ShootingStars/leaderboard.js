function preload(){
  bg01 = loadImage("bg01.jpg");
  //320x480
}

function setup () {
  createCanvas(600,400);
  fill(225);
  background(0);
  image(bg01,0,0,width, 600/320*480);

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

function goToMainMenu(){
  window.location.replace("mainMenu.html");
}

function draw () {
  fill(225,128,0);
  textAlign(CENTER);
  textSize(20);
  textStyle("bold");
  //test();
}

function test (){
  fill(255,0,0);
  textSize(12);
}
