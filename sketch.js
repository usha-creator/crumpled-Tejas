
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var village, paper, dustbin;

function setup() {
	createCanvas(700, 700);
	village = loadImage("village.jpg");

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(80,500,40,40);
	dustbin = new Dustbin(100,600,50, 50);

	Engine.run(engine);
  
}


function draw() {
  background(village);

  Engine.update(engine);

  paper.display();
  dustbin.display();
  
  drawSprites();
}
