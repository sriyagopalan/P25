const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, crumpledPaper, dustbin;

function preload(){
	dustbinIMG = loadImage("dustbingreen.png");
	crumpledPaperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(600, 600);
	
	rectMode(CENTER);
	//gameState = "start";

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(300, 580, 600, 20);
	crumpledPaper = new Paper(25, 35, 20);
	dustbin = new Dustbin(400, 450, 200, 250);
}


function draw() {

	Engine.update(engine);
	background("white");
	textSize(20);
	fill("black");
	text("This is small game that will teach you the importance of \n throwing away your trash. \n", 40, 60);
	ground.display();
	crumpledPaper.display();
	dustbin.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position,{x:35, y:-75});

	}
}
