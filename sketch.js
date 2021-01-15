var car,wall;
var weight,speed;
function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
 
  car=createSprite(400, 200, 40, 40);
  car.velocityX= speed;
  
  wall=createSprite(900,200,20,height/2);
 
}

function draw() {
  background("black");  
if (wall.x-car.x <(car.width+wall.width)/2) 
 {
 car.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if (deformation>180) 
 {
   car.shapeColor=color("170,160,145");
 }  
 if(deformation<180 && deformation>100)
 {
   car,shapeColor=color("175,124,169");
 }
 if (deformation<100) 
 {
 car.shapeColor=color("112,130,150");  
 }
  }

  drawSprites();

}
