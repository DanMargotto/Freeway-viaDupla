// Código do carro

let xCars = [900, 900, 900];
let xCarsInverse = [-100, -100, -100];
let yCars = [50, 120, 190];
let yCarsInverse = [265, 330, 400];
let speedCars = [1.5, 2, 2.5];
let speedCarsInverse = [3, 2, 1.5];

// Dimensão Carro
let wCar = 70;
let hCar = 50;

function showCar(){
  for (let i = 0; i < imageCars.length; i += 1) 
  {
    image(imageCars[i], xCars[i], yCars[i], wCar, hCar);
  }
}

function showCarInverse(){
  for (let j = 0; j < imageCarsInverse.length; j += 1) 
  {
    image(imageCarsInverse[j], xCarsInverse[j], yCarsInverse[j], wCar, hCar);
  }
}

function moveCar() {
  for (let i = 0; i < imageCars.length; i += 1)
  {
    xCars[i] -= speedCars[i];
  }
}

function moveCarInverse() {
  for (let j = 0; j < imageCarsInverse.length; j += 1)
  {
    xCarsInverse[j] += speedCarsInverse[j];
  }
}

function backPositionInitialCar() {
  for (let i = 0; i < imageCars.length; i += 1)
  {
    if (passedTheWholeScreen(xCars[i])) 
    {
      xCars[i] = 900;
    }
  }
}

function backPositionInitialCarInverse() {
  for (let j = 0; j < imageCarsInverse.length; j += 1)
  {
    if (passedTheWholeScreenInverse(xCarsInverse[j])) 
    {
      xCarsInverse[j] = -100;
    }
  }
}

function passedTheWholeScreen(xCar) {
  return xCar < - 50;
}

function passedTheWholeScreenInverse(xCar) {
  return xCar > 850;
}
