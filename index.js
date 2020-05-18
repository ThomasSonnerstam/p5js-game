let player;
let obstacle;
let GRAVITY = 1;
let JUMP = 20;
let bg;

function setup() {
  frameRate(60);
  // Canvas size
  createCanvas(windowWidth, windowHeight);
  // Player sprite & collider
  player = createSprite(50, windowHeight - 400, 20, 20);
  player.addAnimation("default", "assets/sprites/ghost-right.png");
  player.setCollider("circle", 0, 0, 20);
  // Obstacle sprite(s) and collider(s)
  obstacle = createSprite(600, windowHeight - 35, 50, 70);
  obstacle.shapeColor = color(255, 123, 0);
  obstacle.setCollider("rectangle");
  // Background image
  bg = loadImage("/assets/sprites/supermario.png");
}
  
function draw() {
  background(bg);
  
  player.velocity.y += GRAVITY;
  player.velocity.x = 0;

  // Stops the player vertical speed if the player reaches the bottom of the canvas
  if (player.y >= windowHeight - 25) {
    player.velocity.y = 0;
  }

  // Moves player to the right
  if (keyIsDown(RIGHT_ARROW)) {
    if (player.x >= windowWidth - 25) {
      player.velocity.x = 0;
    } else {
      player.velocity.x += 5;
    }
  }

  // Moves player to the left
  if (keyIsDown(LEFT_ARROW)) {

    if (player.x <= 25) {
      player.velocity.x = 0;
    } else {
      player.velocity.x -= 5;
    }
  }

  // Player and obstacle collision
  player.collide(obstacle);
  
  
  drawSprites();
}

// Makes the player jump
function keyPressed() {

  if ((player.velocity.y === 0 || player.velocity.y === 1) && keyCode === UP_ARROW) {
    player.velocity.y = -JUMP;
  }
}




  

  


  