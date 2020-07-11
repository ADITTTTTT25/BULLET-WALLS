//Global variables
var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 70, 25);
  bullet.shapeColor="white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(55,90);
  weight=random(30,52);
  thickness=random(223,321);

   bullet.velocityX=speed;

}

function draw() {
  background("black");  

  // To check the Damage


  if(hascollided(bullet,wall)){

    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){

      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hascollided(bullet,wall){

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}
      
  