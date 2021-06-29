
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;

var ground;

var ground2;

var ground3;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);
	engine = Engine.create();
	world = engine.world;

	ground =new Ground(200,480,1500,15);

    ground2 =new Ground(580,405,15,130)
    
    ground3 =new Ground(750,405,15,130)

  var ball_options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  }


	
	


 
var ball_options={
	isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2
}


ball = Bodies.circle(135,200,10,ball_options);
  World.add(world,ball);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  
  ground2.show();

  ground3.show();

  ellipse(ball.position.x,ball.position.y,25);
  
  
function keyPressed()
{
	if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0.5,y:0.5},{x:0.5,y:0.5});
    }
}
  drawSprites();
 
}



