// Código do ator

let xActor = 145;
let yActor = 462;
let colision = false;
let myPoints = 0;

function showActor() {
  image(imageActor, xActor, yActor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW))
  {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    if(canMove())
    {
      yActor += 3;
    }
  }
}

function verifiedColision() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i += 1)
  {
    colision = collideRectCircle(xCars[i], yCars[i], wCar, hCar, xActor, yActor, 15);
    if (colision)
      {
        backToStartingPosition();
        soundColision.play();
        if (pointsGreaterZero())
        {
           myPoints -= 1;  
         }
      }
  }
}

function verifiedColisionInverse() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let j = 0; j < imageCarsInverse.length; j += 1)
  {
    colision = collideRectCircle(xCarsInverse[j], yCarsInverse[j], wCar, hCar, xActor, yActor, 15);
    if (colision)
      {
        backToStartingPosition();
        soundColision.play();
        if (pointsGreaterZero())
        {
           myPoints -= 1;  
         }
      }
  }
}


// volta Ator para posição inicial
function backToStartingPosition() {
  yActor = 462;  
}

function includePoints() {
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(myPoints, width / 5, 30);
}

function scorePoint() {
  if(yActor < 15) 
  {
    myPoints += 1;
    soundPoint.play();
    backToStartingPosition();
  }
}

function pointsGreaterZero()
{
  return myPoints > 0
}

function canMove() {
  return yActor < 462;
}