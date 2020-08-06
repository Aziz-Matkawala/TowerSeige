const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base, engine, world, box1, box2, box3, box4, box5, box6, polygon, rope;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  base = new Ground(600, 50, 200, 10);
  box1 = new Box(550, 50, 50, 50);
  box2 = new Box(600, 50, 50, 50);
  box3 = new Box(650, 50, 50, 50);
  box4 = new Box(575, 100, 50, 50);
  box5 = new Box(625, 100, 50, 50);
  box6 = new Box(600, 150, 50, 50);
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
  polygon = new Box(100, 100, 20, 20);
  rope = new Rope(polygon.body, {x:100, y:100})
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
  rope.fly();
}
