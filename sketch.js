var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomrectangle,leftrectangle,rightrectangle;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 150, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	bottomrectangle = createSprite(width/2,height-47,200,15)
	bottomrectangle.shapeColor = "red"
	rightrectangle = createSprite(width/2.6,height-120,15,150)
	rightrectangle.shapeColor = "red"
	rightrectangle = createSprite(width/1.625,height-120,15,150)
	rightrectangle.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

keyPressed();	
	rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //console.log(packageSprite);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.setStatic(packageBody,false);
   
}
}
if (keyCode === Right_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   helicopterIMG.velocityX = -2;
}




