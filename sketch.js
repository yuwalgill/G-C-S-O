var car,wall,speed,weight,deformation;

 function setup() {
  createCanvas(1600,400);
  car1=createSprite(50, 50, 25, 8);
  car2=createSprite(50, 150, 25, 8);
  car3=createSprite(50, 250, 25, 8);
  car4=createSprite(50, 350, 25, 8);
  
wall1=createSprite(1200,50,10,30);
wall2=createSprite(1200,150,10,30);
wall3=createSprite(1200,250,10,30);
wall4=createSprite(1200,350,10,30);

speed=random(55,90);
  weight=random(400,1500);

deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(80,80,80);  
  
 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    
   if(deformation>180){
    car.shapeColor=shapeColor(255,0,0)
   }
  if(deformation<180&&deformation>100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
 
  drawSprites();
}
}