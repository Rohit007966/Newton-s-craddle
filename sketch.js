
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
 
	bobObject1=createSprite(310,330,50,50);
	bobObject1.shapeColor=color("silver")

	bobObject2=createSprite(250,330,50,50);
	bobObject2.shapeColor=color("silver")

	bobObject3=createSprite(370,330,50,50);
	bobObject3.shapeColor=color("silver")

	bobObject4=createSprite(430,330,50,50);
	bobObject4.shapeColor=color("silver")

	bobObject5=createSprite(490,330,50,50);
	bobObject5.shapeColor=color("silver")
	
	roofObject=createSprite(370,30,300,20);
	roofObject.shapeColor=color("yellow")
	
	Engine.run(engine);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+','+mouseY,30,45);
  
  

  drawSprites();
 

}



