Abtn = document.getElementById("A");
Sbtn = document.getElementById("S");
Dbtn = document.getElementById("D");
Fbtn = document.getElementById("F");
Gbtn = document.getElementById("G");
Hbtn = document.getElementById("H");
Jbtn = document.getElementById("J");
Kbtn = document.getElementById("K");
Lbtn = document.getElementById("L");
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
// function A(){
//     var sound =document.createElement("audio");
//     sound.src="sounds/boom.wav";
//    sound.setAttribute("preload","auto");
//    sound.setAttribute("controls","none");
//    sound.style.display="none";
//    document.body.appendChild(sound);
//     sound.play();
// }
function A(){
    var s= new sound("./sounds/clap.wav");
    Abtn.style["border-color"]="red";
    s.play();
   // Abtn.style.color = "white";
   setTimeout(function(){
    Abtn.style["border-color"] = "black";
   },500);
    

}
function S() {
  var s = new sound("./sounds/kick.wav");
  s.play();
   Sbtn.style["border-color"] = "red";
   
  setTimeout(function () {
    Sbtn.style["border-color"] = "black";
  }, 500);
   
}
function D() {
  var s = new sound("./sounds/kick.wav");
  s.play();
   Dbtn.style["border-color"] = "red";
   
  setTimeout(function () {
    Dbtn.style["border-color"] = "black";
  }, 500);
   
}
function F() {
  var s = new sound("./sounds/openhat.wav");
  s.play();

  Fbtn.style["border-color"] = "red";
   
  setTimeout(function () {
    Fbtn.style["border-color"] = "black";
  }, 500);
   
}
function G() {
  var s = new sound("./sounds/boom.wav");
  s.play();
   Gbtn.style["border-color"] = "red";
   
  setTimeout(function () {
    Gbtn.style["border-color"] = "black";
  }, 500);
   
}
function H() {
  var s = new sound("./sounds/ride.wav");
  s.play();
  Hbtn.style["border-color"]="red";
   
  setTimeout(function () {
    Hbtn.style["border-color"] = "black";
  }, 500);
   
}
function J() {
  var s = new sound("./sounds/snare.wav");
  s.play();
  Jbtn.style["border-color"]="red";
   
  setTimeout(function () {
    Jbtn.style["border-color"] = "black";
  }, 500);
   
}
function L() {
  var s = new sound("./sounds/tom.wav");
  s.play();
   Lbtn.style["border-color"] = "red";
   
  setTimeout(function () {
    Lbtn.style["border-color"] = "black";
  }, 500);
   
}
function K() {
  var s = new sound("./sounds/tink.wav");
  s.play();
  Kbtn.style["border-color"]="red";
   
  setTimeout(function () {
    Kbtn.style["border-color"] = "black";
  }, 500);
   
}