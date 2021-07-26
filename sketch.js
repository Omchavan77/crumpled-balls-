
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,690,800,20)
box1=new Ground(600,670,200,20)
box2=new Ground(490,630,20,100)
box3=new Ground(710,630,20,100)
paper=new Paper(100,500,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 paper.display();
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:0.5,y:0.10
		})
	}
}


