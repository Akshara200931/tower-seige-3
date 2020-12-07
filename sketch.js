var engine, world;
var ground1,ground2,s;
var ball1,chain1;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14,block15;
var block16,block17,block18,block19,block20,block21;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 s=0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
      ground1=new Ground(390,300,250,10);
    ground2=new Ground(700,200,200,10);
    ball1= new Ball(50,200,20);
    chain1=new Slingshot(ball1.body,{x:100,y:200});

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
    block19 = new Block(700,175,30,40);
    block20 = new Block(730,175,30,40);
    block21 = new Block(760,175,30,40);
    block22 = new Block(670,135,30,40);
    block23 = new Block(700,135,30,40);
    block24 = new Block(730,135,30,40);
    block25 = new Block(700,95,30,40);

}

function draw() {
  background("cyan"); 
  Engine.update(engine);
text("SCORE: "+s,750,48)
ground1.displayshape();
ground2.displayshape();
ball1.displayshape();
chain1.displayshape();
block1.displayshape();
block2.displayshape();
block3.displayshape();
block4.displayshape();
block5.displayshape();
block6.displayshape();
block7.displayshape();
block8.displayshape();
block9.displayshape();
block10.displayshape();
block11.displayshape();
block12.displayshape();
block13.displayshape();
block14.displayshape();
block15.displayshape();
block16.displayshape();
block17.displayshape();
block18.displayshape();
block19.displayshape();
block20.displayshape();
block21.displayshape();
block22.displayshape();
block23.displayshape();
block24.displayshape();
block25.displayshape();


block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();
}   

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if (keyCode ===  32){
    chain1.attach(ball1.body);
  }
}

async function getbackgroundImage()
{

var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
var hour =datetime.slice(11,13);
console.log(hour);

if (hour>=6 && hour<=18){
bg="yellow";

}
else {

bg="black";

}
backgroundImg=loadImage(bg);
}
