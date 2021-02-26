var fixedRect, movingRect;
var wall
var box
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(500,200,40,40)
  wall.shapeColor = "blue"
  box = createSprite(700,200,40,40)
  box.shapeColor = "brown"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,wall)){
    movingRect.shapeColor = "red"
    wall.shapeColor = "red"
    
  }

  else{
    movingRect.shapeColor = "green"
    wall.shapeColor = "blue"
  }
  bounceOff(movingRect,fixedRect)
  drawSprites();
}


