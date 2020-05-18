let player;
let GRAVITY = 1;
let JUMP = 15;
let bg;

function setup() {
  frameRate(60);
  // Canvas size
  createCanvas(windowWidth, windowHeight);
  // Player sprite & collider
  player = createSprite(50, windowHeight - 400, 20, 20);
  player.addAnimation("default", "assets/sprites/ghost-right.png");
  // Obstacle sprite(s)
  obstacles = new Group();
  obstacle = createSprite(150, windowHeight - 35, 70, 30);
  obstacle2 = createSprite(350, windowHeight - 75, 70, 30);
  obstacle3 = createSprite(550, windowHeight - 115, 70, 30);
  obstacle4 = createSprite(750, windowHeight - 145, 70, 30);
  obstacle5 = createSprite(950, windowHeight - 185, 70, 30);
  
  obstacles.add(obstacle);
  obstacles.add(obstacle2);
  obstacles.add(obstacle3);
  obstacles.add(obstacle4);
  obstacles.add(obstacle5);
  // Background image
  bg = loadImage("/assets/sprites/supermario.png");

  console.log(obstacles.length);
  
  
  
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
  
  player.collide(obstacles);

  
  
  
  drawSprites();
}

// Makes the player jump
function keyPressed() {
  if ((player.velocity.y === 0 || player.velocity.y === 1) && keyCode === UP_ARROW) {
    player.velocity.y = -JUMP;
  }
}







  

  


  