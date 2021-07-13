var box;
function setup() {
  createCanvas(800,800);
  box = createSprite(400,400,40,40);
  box.shapeColor = "white";
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }

  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }

  if(keyIsDown(UP_ARROW)){
    background("green");
  }

  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }
  drawSprites();
}




