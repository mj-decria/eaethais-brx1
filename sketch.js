var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1_img, car2_img;
var track;
var car1, car2;
var cars = [];
var gameState;
var allPlayers;
var Gasosa;
var verdinha;
var obstacle1Image;
var obstacle2Image;
var BANDODEDOIDO;
var gasosasgroup;
var cash;
var corazaoxin;
var CABAO;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  Gasosa = loadImage("assets/fuel.png");
  verdinha = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  corazaoxin = loadImage("assets/life.png");
  CABAO = loadImage("assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
game.update(1);
  }
  if(gameState === 1){
game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}