let xBolinha = 20;
let yBolinha = 20;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let diametro = 20;
let raio = diametro / 2;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let colidiu = false;
let trilha;
function preload(){
  trilha = loadSound("trilha.mp3")
}0
function setup() {
  trilha.loop();
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
   mostraRaqueteOponente();
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
}
function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 5;
  }
  if (keyIsDown(83)) {
    yRaquete += 5;
  }0
}
function movimentaRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 5;
  }
}
function verificaColisaoRaquete(){
  colidiu = collideRectCircle(xRaqu00ete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
}
  if(colidiu){
    velocidadeXBolinha *=-1;
  }
