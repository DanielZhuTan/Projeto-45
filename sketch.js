const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var skatistaImg, skatista;
var pracaImg, praca;
var pedraImg, pedra;
var lataImg, lata;

function preload()
{
   pedraImg = loadImage("pedra.png");
   lataImg = loadImage("lata.png");
   skatistaImg = loadAnimation("Daniel/png/1.png","Daniel/png/2.png","Daniel/png/3.png");
   pracaImg = loadImage("Daniel/png/bg.gif");
}

function setup() {
	createCanvas(1200, 700);

	//engine = Engine.create();
	//world = engine.world;

	//Crie os Corpos aqui.

   skatista = createSprite(150,500,20,20);
   skatista.addAnimation("SkatistaRunner", skatistaImg);;
   skatista.scale = 0.4;

   praca = createSprite(200,360,400,20);
   praca.addImage(pracaImg);
   praca.scale = 1.8;
   praca.velocityX = 2;
	 
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(praca.x > 100){
     praca.x = praca.width/2;
  }

  drawSprites();
 
}

function gerarPedras() {
    if(frameCount % 100 === 0){
       
    }
}

function gerarLatas() {

}