var movesq,stillsq1,stillsq2,stillsq3,stillsq4;
function setup() {
  createCanvas(800,400);
  movesq = createSprite(400, 200, 50, 50);
  stillsq1 = createSprite(100, 200, 50, 50);
  movesq.shapeColor = rgb(37,173,201);
  stillsq1.shapeColor = rgb(37,173,201);
  stillsq2 = createSprite(200, 200, 50, 50);
  stillsq2.shapeColor = rgb(37,173,201);
  stillsq3 = createSprite(300, 200, 50, 50);
  stillsq3.shapeColor = rgb(37,173,201);
  stillsq4 = createSprite(400, 200, 50, 50);
  stillsq4.shapeColor = rgb(37,173,201);
}

function draw() {
  background(255,255,255);
  movesq.y = mouseY;
  movesq.x = mouseX;
  if (isTouching(movesq,stillsq1)){
    movesq.shapeColor = rgb (255,134,13);
    stillsq1.shapeColor = rgb (255,134,13);
  }
  else{
    movesq.shapeColor = rgb(37,173,201);
    stillsq1.shapeColor = rgb(37,173,201);
  }
  if (isTouching(movesq,stillsq2)){
    movesq.shapeColor = rgb (236,216,33);
    stillsq2.shapeColor = rgb (236,216,33);
  }
  else{
    movesq.shapeColor = rgb(37,173,201);
    stillsq2.shapeColor = rgb(37,173,201);
  }
  if (isTouching(movesq,stillsq3)){
    movesq.shapeColor = rgb (22,219,61);
    stillsq3.shapeColor = rgb (22,219,61);
  }
  else{
    movesq.shapeColor = rgb(37,173,201);
    stillsq3.shapeColor = rgb(37,173,201);
  }
  if (isTouching(movesq,stillsq4)){
    movesq.shapeColor = rgb (210,75,75);
    stillsq4.shapeColor = rgb (210,75,75);
  }
  else{
    movesq.shapeColor = rgb(37,173,201);
    stillsq4.shapeColor = rgb(37,173,201);
  }
  drawSprites();
}
function isTouching (object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true
  }
  else{return false
  }
}