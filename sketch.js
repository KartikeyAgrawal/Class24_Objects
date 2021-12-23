const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;
var myengine,myworld;
var box1,box2,ground,pig1,log1;
function preload(){
  bg = loadImage("th.jpg");
}
function setup() {
  createCanvas(1200,400);
  myengine = Engine.create();
  myworld = myengine.world;
  
  box1 = new Box(700,330,50,50);
  box2 = new Box(920,330,50,50);
  ground = new Ground(600,390,1200,20);
  pig1 = new Pig(810,330);
  log1 = new Log(810,316,300,PI/2);
  box3 = new Box(700,250,50,50);
  box4 = new Box(920,250,50,50);
  pig2 = new Pig(810,250);
  log2 = new Log(810,242,300,PI/2);
  box5 = new Box(810,170,50,50);
  log3 = new Log(766,155,150,PI/7);
  log4 = new Log(854,155,150,-PI/7);
}

function draw() {
  background(bg);  
  rectMode(CENTER);
  Engine.update(myengine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  //console.log(box2.body.angle);
}