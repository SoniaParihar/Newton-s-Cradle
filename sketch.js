const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Events=Matter.Events;
const Constraint= Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;

var myworld,myengine,canvas,mConstraint;
var pend1,pend2,pend3,pend4,pend5;
var sling1,sling2,sling3,sling4,sling5;





function setup() {
  canvas=createCanvas(windowWidth/2,windowHeight/1.5);
  myengine=Engine.create();
  myworld=myengine.world;
  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  }
  mConstraint=MouseConstraint.create(myengine,options);
  World.add(myworld,mConstraint);

  pend1 =new Pendulum(340,450,"00b0ff");
  pend2 =new Pendulum(400,450,"e91e63");
  pend3 =new Pendulum(460,450,"ffc107");
  pend4 =new Pendulum(520,450,"e91e63");
  pend5 =new Pendulum(580,450,"00b0ff");

  sling1= new Sling(pend1.body,{x:340,y:200});
  sling2= new Sling(pend2.body,{x:400,y:200});
  sling3= new Sling(pend3.body,{x:460,y:200});
  sling4= new Sling(pend4.body,{x:520,y:200});
  sling5= new Sling(pend5.body,{x:580,y:200});


 
  
}

function draw() {
  background(255,255,255); 
  Engine.update(myengine);
  pend1.display();
  pend2.display();
  pend3.display();
  pend4.display();
  pend5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  
}
function mouseDragged(){
  Matter.Body.setPosition(pend1.body,{x:mouseX,y:mouseY});
}