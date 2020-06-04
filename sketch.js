const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
   
  ground = new Ground(800,670,1600,10);

  ball = new Ball(200,450,70);

  //box1 = new Box (600,580,20,100);
  //box2 = new Box (655,620,90,20);
  box3 = new Box (1200,550,200,213);



	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display();
   
  ball.display();

 //box1.display();
 //box2.display();
  box3.display();


 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:135,y:-145});
	}
}