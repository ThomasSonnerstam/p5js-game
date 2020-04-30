let x = 50;
let y = 600;
let vel = 1;
let isMoving = true;
const gravity = 0.8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

class Player {

  constructor(x, y, diameter) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
  }

  drawCircle() {
      circle(this.x, this.y, this.diameter = 40);
  }
}
  
function draw() {
  background(247, 134, 84);

  const player = new Player(x, y);
  player.drawCircle(); 

  vel += gravity;
  y += vel;

  // if (isMoving) {
  //   y += 3;
  // }

  if (y >= windowHeight) {
    y = windowHeight - 20;
  }

  if (y <= 0 + 20) {
    vel += vel;
  }

}




function keyPressed() {
  if (y >= windowHeight - 20 && keyCode === UP_ARROW) {
    vel -= 20;
    
  }

  // if (y = windowHeight - 200) {
  //   isMoving = true;
  // }
}




  

  


  