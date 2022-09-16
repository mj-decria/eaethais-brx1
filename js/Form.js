class Form {
  constructor() {
    //Construir o formulário em HTML
   this.input = createInput("").attribute("placeholder","Digite seu nome");
   this.playButton = createButton("jugar");
   this.titleImg = createImg("assets/title.png","titulo do jogo");
   this.greeting = createElement("h2");
  }

  setElementsPosition() {
    //Definir a posição dos elementos do formulário
    this.titleImg.position(120,70);
    this.input.position(width/2-100,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  setElementsStyle() {
    //Adicionar estilo aos elementos do formulário (style.css)
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting")
  }

  hide() {
    //Esconder os elementos quando o jogo iniciar
   this.input.hide();
   this.playButton.hide();
   this.greeting.hide();
  }

  //Função para quando apertar o botão de PLAY
   handleMousePressed(){
    this.playButton.mousePressed(() =>{
   this.input.hide();
   this.playButton.hide();
   var Mensagen = `
   olá ${this.input.value()}
   </br>aguarde o outro player `;
   this.greeting.html(Mensagen) 
   playerCount+=1;
   player.name = this.input.value();
   player.index = playerCount;
   player.addPlayer();
   player.updateCount(playerCount);
   player.getDistance();
    })
   }

  display() {
    //Exibir os elementos nas suas posições e estilos
   this.setElementsPosition();
   this.setElementsStyle();

    //Chamar a função de apertar o botão PLAY
   this.handleMousePressed();
  }
}