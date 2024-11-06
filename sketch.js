let cor;
let posicaohorizontal;
let posicaovertical;

function setup() {
  createCanvas(800, 800);
  background("white")
  cor=color(random(0,255), random(0,255), random(0,255));
  posicaohorizontal=200;
  posicaovertical=200
}

function draw() {
  circle(posicaohorizontal,posicaovertical,50);
  fill(cor);
  if(mouseIsPressed){ 
  if(mouseX > posicaohorizontal){
    posicaohorizontal=posicaohorizontal+5;
  }
   if(mouseX < posicaohorizontal){
    posicaohorizontal=posicaohorizontal-5;
  }
  if(mouseY > posicaovertical){
    posicaovertical=posicaovertical+5;
  }
   if(mouseY < posicaovertical){
    posicaovertical=posicaovertical-5;
  }
     cor=color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
}
