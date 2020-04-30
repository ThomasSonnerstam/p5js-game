let player;
let platform;
let GRAVITY = 1;
let JUMP = 20;
let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(50, windowHeight - 400, 20, 20);
  player.addAnimation("static", "assets/sprites/player.png");
  frameRate(60);
  bg = loadImage("/assets/sprites/supermario.png");
}
  
function draw() {
  background(bg);
  player.setCollider("circle", 0, 0, 20);
  drawSprites();

  
  player.velocity.y += GRAVITY;
  player.velocity.x = 0;

  if (player.y >= windowHeight - 25) {
    player.velocity.y = 0;
  }

  

  if (keyIsDown(RIGHT_ARROW)) {
    if (player.x >= windowWidth - 25) {
      player.velocity.x = 0;
    } else {
      player.velocity.x += 5;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    if (player.x <= 25) {
      player.velocity.x = 0;
    } else {
      player.velocity.x -= 5;

    }
  }
  
}

function keyPressed() {
  if (player.y >= windowHeight - 25 && keyCode === UP_ARROW) {
    player.velocity.y = -JUMP; 
  }

  

}




  

  


  