var font;
var vehicles = [];

function preload() {
  font = loadFont("LuckiestGuy-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  word('SELAMAT MENYAMBUT', width*0.10, height*0.25);
  word('TAHUN BARU', width*0.25, height*0.45);
  word('2022', width*0.35, height*0.65);
  word('DARI SAYA NICKSYFQ', width*0.10, height*0.85);
  
  
}

function draw() {
  background(0);
  
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function word(string, width, height){
  var points = font.textToPoints(string, width, height, 150);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
}}