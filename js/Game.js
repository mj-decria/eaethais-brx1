class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.leadeboardTitle = createElement("h2");
 
    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");

    this.resetButton = createButton("")
    this.playerMovin = false;
    this.esquerda = false;
    this.blast = false;

  }
getState(){
  var gameStateRef = database.ref("gameState");
  gameStateRef.on("value",data => {
    gameState = data.val();
  })
}
update(state){
  database.ref("/").update({
    gameState: state
  })
}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
    car1 = createSprite(width/2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.addImage("blast", CABAO);
    car1.scale = 0.07;
 
    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.addImage("blast", CABAO);
    car2.scale = 0.07;
 
    cars = [car1, car2];
    gasosasgroup = new Group();
    cash = new Group();
    BANDODEDOIDO = new Group();
    var obstaclesPositions = [
      { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
      { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
      { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
      { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
      { x: width / 2, y: height - 2800, image: obstacle2Image },
      { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
      { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
      { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
      { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
      { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
      { x: width / 2, y: height - 5300, image: obstacle1Image },
      { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
    ];

   this.addSprites(gasosasgroup,4,Gasosa,0.02);
   this.addSprites(cash,18,verdinha,0.09);
   this.addSprites(BANDODEDOIDO,obstaclesPositions.length,obstacle1Image,0.04,obstaclesPositions);
  }
  addSprites(spriteGroup,numberOfSprites,spriteImage,scale,position = []){
  for(var i = 0; i<numberOfSprites; i++){
    var X;
    var Y;
  if(position.length>0){
    X = position[i].x;
    Y = position[i].y;
    spriteImage = position[i].image
  }
  else{
    X = random(width/2+150,width/2-150);
    Y = random(-height*4.5,height-400);
  }
  var Sprite = createSprite(X,Y);
  Sprite.addImage(spriteImage);
  Sprite.scale = scale;
  spriteGroup.add(Sprite)
  }
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
    this.resetTitle.html("Botão de resetar!");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width/2+200,40);
    this.resetButton.class("resetButton");
    this.resetButton.position(width/2+230,100);
    this.leadeboardTitle.html("Placar");
    this.leadeboardTitle.class("resetText");
    this.leadeboardTitle.position(width / 3 - 60, 40);
 
    this.leader1.class("leadersText");
    this.leader1.position(width / 3 - 50, 80);
 
    this.leader2.class("leadersText");
    this.leader2.position(width / 3 - 50, 130);

  }
 
  play() {
    this.handleElements();
    this.HandleResetButton();
    Player.getPlayersInfo();
  player.getCarsAtEnd()
    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);
      this.showLeaderboard();
this.paredeamarela();
this.veracidade();
       //índice da matriz
       var index = 0;
       for (var plr in allPlayers) {
         //adicione 1 ao índice para cada loop
         index = index + 1;
 
         //use os dados do banco de dados para exibir os carros nas direções x e y
         var x = allPlayers[plr].positionX;
         var y = height - allPlayers[plr].positionY;
         var tosolteiro = allPlayers[plr].life;
         if(tosolteiro<=0){
         cars[index - 1].changeImage("blast");
         cars[index - 1].scale = 0.3;
         }
         cars[index - 1].position.x = x;
         cars[index - 1].position.y = y;
 
         if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          this.handleFuel(index);
          this.handlecoin(index);
          this.bateusera(index);
          this.amoraprimeiravista(index);
          if(player.life<=0){
           this.blast = true;
           this.playerMovin = false;
           setTimeout(() =>{this.tuperdeu()},"1000")
          }
          camera.position.y = cars[index - 1].position.y;
         }
       }
      this.handlePlayerControls();
if(this.playerMovin){
  player.positionY+=5;
  player.update();
}
 const FinishLine = height*6-100;
 if(player.positionY > FinishLine){
  gameState = 2;
  player.rank+=1;
  Player.updateCarsAtEnd(player.rank);
  player.update();
  this.showrank()
 }
      drawSprites();
    }
  }
 
handlePlayerControls(){
  if(!this.blast){
  if(keyIsDown(UP_ARROW)){
    player.positionY+=10;
    player.update();
  }
  if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
    player.positionX -= 5;
    player.update();
    this.esquerda = true;
  }

  if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
    player.positionX += 5;
    player.update();
    this.esquerda = false;
  }
  }
}

HandleResetButton(){
  this.resetButton.mousePressed(() => {
    database.ref("/").set({
      carsAtEnd:0,
      playerCount:0,
      gameState:0,
      players:{}
    });
    window.location.reload();
  })
}
showLeaderboard() {
  var leader1, leader2;
  var players = Object.values(allPlayers);
  if (
    (players[0].rank === 0 && players[1].rank === 0) ||
    players[0].rank === 1
  ) {
    // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
    leader1 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;

    leader2 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;
  }
  if(players[1].rank === 1){
    leader1 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;

    leader2 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;
  }
  this.leader1.html(leader1);
    this.leader2.html(leader2);

}
handleFuel(index) {
  //adicionando combustível
  cars[index - 1].overlap(gasosasgroup, function(collector, collected) {
    player.fuel = 185;
    //o sprite é coletado no grupo de colecionáveis que desencadeou
    //o evento
    collected.remove();
  });
if(player.fuel>0 && !this.playerMovin){
  player.fuel -= 0.3
}
if(player.fuel <=0) {
  gameState = 2;
  this.tuperdeu();
}

}
handlecoin(index) {
  cars[index - 1].overlap(cash, function(collector, collected){
    player.score +=25;
    player.update();
    collected.remove();
  })
}
showrank(){
  swal({
    title:`Parabéns ${"\n"}${player.rank} lugar`,
    text:"por onde vai esta estrada?, ela nao vai nos e que vamos",
    imageUrl:"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize:"100x100",
    confirmButtonText:"eu vi vc robar"
  })
}
tuperdeu(){
  swal({
    title:`o ala kkkk si fudeu`,
    text:"nao aguenta, nao joga bebe",
    imageUrl:"https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize:"100x100",
    confirmButtonText:"devia ter robado"
  })
}
paredeamarela(){
  push()
  image(corazaoxin,width/2-130,height-player.positionY+200,20,20);
  fill("white");
  rect(width/2-100,height-player.positionY+200,185,20);
  fill("red");
  rect(width/2-100,height-player.positionY+200,player.life,20);
  noStroke();
  pop()
}
veracidade(){
  push()
  image(Gasosa,width/2-130,height-player.positionY+250,20,20);
  fill("white");
  rect(width/2-100,height-player.positionY+250,185,20);
  fill("orange");
  rect(width/2-100,height-player.positionY+250,player.fuel,20);
  noStroke();
  pop()
}
bateusera(index){
  if(cars[index-1].collide(BANDODEDOIDO)){
    if(this.esquerda){
      player.positionX+=100;
    } else{
      player.positionX-=100;
    }
    if(player.life >0){
      player.life -=185/2
    }
    player.update();
  }
}
amoraprimeiravista(index){
  if(index === 1){
    if(cars[index - 1].collide(cars[1])){
      if(this.esquerda){
        player.positionX += 100;
      } else {
        player.positionX -= 100;
      }
      if(player.life > 0){
        player.life -= 185/4;
      }
      player.update();
    }
  }  
  if(index === 2){
    if(cars[index - 1].collide(cars[0])){
      if(this.esquerda){
        player.positionX += 100;
      } else {
        player.positionX -= 100;
      }
      if(player.life > 0){
        player.life -= 185/4;
      }
      player.update();
    }
  }

}
}
