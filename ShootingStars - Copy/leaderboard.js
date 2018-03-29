//var arr = [12,45,87,55,1,9,4,100,20,305,66,79,12,23,33,49];

var config = {
  apiKey: "AIzaSyBzuHIqBV2fMg4BKI2Izd6BOKdD1epT6l8",
  authDomain: "shooting-stars-9a961.firebaseapp.com",
  databaseURL: "https://shooting-stars-9a961.firebaseio.com",
  projectId: "shooting-stars-9a961",
  storageBucket: "shooting-stars-9a961.appspot.com",
  messagingSenderId: "597164631844"
};

  firebase.initializeApp(config);
  database = firebase.database();
/*
var ref = database.ref('score');
ref.on('value',gotData, errData);
*/
function preload(){
  bg01 = loadImage("bg01.jpg");
  //320x480
  loading = createImg("loading.gif");
  //square
}

function setup () {
  createCanvas(600,400);
  fill(225);
  background(0);
  image(bg01,0,0,width, 600/320*480);
  loading.position((width/2)-50,(height/2)-50);
  loading.size(100,100);

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

function draw () {/*
  textAlign(CENTER);
  textSize(20);
  selectionSort(arr);

  for(bbb = 0; bbb <= 9; bbb++){
	fill(225);
	rect(0,20*bbb,100,20);

  fill(225,128,0);
  textStyle("bold");
  text(arr[bbb],0,20*bbb,100,20)


  }
  //text(arr,0,0,600,400);
  //test();
*/
}
/*
function gotData(data){
  var ggg = data.val();
  text(ggg,100,0,500,400);
  console.log(data);
}

function errData(err){
  console.log('error');

}

/////sorting function
function selectionSort(aaa){
  var minIdx, temp,
      len = aaa.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(aaa[j]<aaa[minIdx]){
          minIdx = j;
       }
    }
    temp = aaa[i];
    aaa[i] = aaa[minIdx];
    aaa[minIdx] = temp;
  }
}
*/
function test (){
  fill(255,0,0);
  textSize(12);
}
