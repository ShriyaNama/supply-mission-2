var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, box1, box2, box3, box1_Body, box2_Body, box3_Body;
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

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = createSprite(400, height-50, 200, 20);
	box1.shapeColor = rgb(255, 0, 0);

	box2 = createSprite(490, 600, 20, 100);
	box2.shapeColor = rgb(255, 0, 0);
	
	box3 = createSprite(310, 600, 20, 100);
	box3.shapeColor = rgb(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	box1_Body = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});

	box2_Body = Bodies.rectangle(490, 600, 20, 100, {isStatic:true});

	box3_Body = Bodies.rectangle(310, 600, 20, 100, {isStatic:true});

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody, false);
  }
}