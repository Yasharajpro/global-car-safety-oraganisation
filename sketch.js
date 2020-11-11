var car,wall;
var speed,weight;
function setup() {
  createCanvas(1000,400);

  wall=createSprite(900, 200, 60,200);
  wall.shapeColor=color(80,80,80)
  car=createSprite(50,180,30,30);
  car.shapeColor=(0,0,0)
  car.velocityX=speed=random(55,90);
  
  weight=random(400,1500);
  
}

function draw() {
  background("black"); 
  if(wall.x-car.x<(car.width/2)+(wall.width/2)){
  car.velocityX=0;
    var deformation=0.5*speed*speed*weight/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  


  drawSprites();
}