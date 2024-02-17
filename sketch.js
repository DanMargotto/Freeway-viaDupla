function setup() {
  createCanvas(800, 500);
  soundMusicTrack.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  moveActor();
  showCar();
  showCarInverse();
  moveCar();
  moveCarInverse();
  backPositionInitialCar();
  backPositionInitialCarInverse();
  verifiedColision();
  verifiedColisionInverse();
  includePoints();
  scorePoint();
}

