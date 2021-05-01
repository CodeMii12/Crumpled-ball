
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper1,ground1,side1,bottom, wall1, image1;
function preload()
{

}

function setup() {
	createCanvas(1200, 700);

	hi = createSprite(400,690,1600,45);
	hi.shapeColor = color (140, 79, 35);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,20);
	ground = new Ground(400,650,1600,35);

	side1 = new Boxes(1180,587,20,100);
	side2 = new Boxes(1020,587,20,100);
	bottom = new Boxes(1100,630,150,15);

	wall1 = new Wall(1200,400,10,800);
	//wall2 = new Wall();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(62, 0, 128);
  paper.display();
  ground.display();

  side1.display();
  side2.display();
  bottom.display();

  wall1.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})
	}
}