// let x = 50;
// let y = 600;
// let vel = 1;
// const gravity = 0.8;
let player;
let platform;
let GRAVITY = 1;
let JUMP = 15;
let velocity = velocity + GRAVITY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(50, windowHeight - 100, 20, 20);
  player.addAnimation("static", "assets/sprites/player.png");
  frameRate(60);

  
}

// class Player {

//   constructor(x, y, diameter) {
//       this.x = x;
//       this.y = y;
//       this.diameter = diameter;
//   }

//   drawCircle() {
//       circle(this.x, this.y, this.diameter = 40);
//   }
// }
  
function draw() {
  background(247, 134, 84);
  player.setCollider("circle", 0, 0, 20);
  // player.setDefaultCollider();
  drawSprites();
  // platform = rect(0, windowHeight - 40, windowWidth, 40);
  // platform.setCollider("rectangle", windowWidth/2, 20, 0, 0);
  // platform.setDefaultCollider();

  
  player.velocity.y = 5;

  if (player.y >= windowHeight - 20) {
    player.velocity.y = 0;
  }

  // if(player.collide(platform)) {
  //   player.velocity.y = 0;
  // }


  // const player = new Player(x, y);
  // player.drawCircle(); 

  // vel += gravity;
  // y += vel;


  // if (y >= windowHeight) {
  //   y = windowHeight - 20;
  // }

  // if (y <= 0 + 20) {
  //   vel += vel;
  // }
  
}




// function keyPressed() {
//   if (y >= windowHeight - 20 && keyCode === UP_ARROW) {
//     vel -= 20;
    
//   }

// }




  

  


  