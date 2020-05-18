let GRAVITY = 1;
let JUMP = 15;
let bg;
let score = 0;

function preload() {
  walkLeft = loadAnimation("assets/sprites/ghost-left.png");
}

function setup() {
  frameRate(60);
  // Canvas size
  createCanvas(windowWidth, windowHeight);
  // Player sprite
  player = createSprite(50, windowHeight - 400, 15, 15);
  player.addAnimation("default", "assets/sprites/ghost-right.png");

  /**
   *  Removes the coin sprites when the player touches it.
   */
  function removeSprite() {
    this.remove();
    score++;
  }

  // Collectable coins
  coins = new Group();
  coin1 = createSprite(350, windowHeight - 270, 10, 10);
  coin1.addAnimation("coin", "assets/sprites/coin.png");
  coin2 = createSprite(750, windowHeight - 300, 10, 10);
  coin2.addAnimation("coin", "assets/sprites/coin.png");
  coin3 = createSprite(windowWidth - 30, windowHeight - 90, 10, 10);
  coin3.addAnimation("coin", "assets/sprites/coin.png");
  coin4 = createSprite(windowWidth - 40, windowHeight - 450, 10, 10);
  coin4.addAnimation("coin", "assets/sprites/coin.png");
  coin5 = createSprite(50, windowHeight - 600, 10, 10);
  coin5.addAnimation("coin", "assets/sprites/coin.png");
  coin6 = createSprite(450, windowHeight - 680, 10, 10);
  coin6.addAnimation("coin", "assets/sprites/coin.png");
  coin7 = createSprite(600, windowHeight - 520, 10, 10);
  coin7.addAnimation("coin", "assets/sprites/coin.png");
  // coin8 = createSprite(350, windowHeight - 270, 10, 10);
  // coin9 = createSprite(350, windowHeight - 270, 10, 10);
  // coin10 = createSprite(350, windowHeight - 270, 10, 10);

  // Adds coins to sprite group
  coins.add(coin1);
  coins.add(coin2);
  coins.add(coin3);
  coins.add(coin4);
  coins.add(coin5);
  coins.add(coin6);
  coins.add(coin7);
  // coins.add(coin8);
  // coins.add(coin9);
  // coins.add(coin10);

  // Spear obstacles
  setInterval(() => {
    // const spear = createSprite(50, windowHeight - 350, 60, 5);
    // spear.shapeColor = "red";
    // spear.velocity.x = 5;
    // obstacles.add(spear);
  }, 1000)

  // Obstacle sprites
  obstacles = new Group();
  obstacle1 = createSprite(150, windowHeight - 35, 70, 30);
  obstacle2 = createSprite(350, windowHeight - 115, 70, 30);
  obstacle3 = createSprite(550, windowHeight - 115, 20, 20);
  obstacle4 = createSprite(750, windowHeight - 145, 70, 30);
  obstacle5 = createSprite(950, windowHeight - 185, 70, 30);
  obstacle6 = createSprite(1150, windowHeight - 225, 20, 20);
  obstacle7 = createSprite(1220, windowHeight - 225, 20, 20);
  obstacle8 = createSprite(1400, windowHeight - 310, 40, 20);
  obstacle9 = createSprite(950, windowHeight - 310, 15, 15);
  obstacle15 = createSprite(300, windowHeight - 370, 15, 15);
  obstacle16 = createSprite(200, windowHeight - 450, 100, 10);
  obstacle17 = createSprite(50, windowHeight - 450, 15, 10);  
  obstacle18 = createSprite(windowWidth - 50, windowHeight - 50, 100, 100); // Displaced block bottom right corner
  obstacle19 = createSprite(300, windowHeight - 600, 100, 10);  
  obstacle20 = createSprite(450, windowHeight - 600, 10, 10);
  obstacle21 = createSprite(600, windowHeight - 500, 70, 10);
  obstacle22 = createSprite(750, windowHeight - 550, 20, 10);
  obstacle23 = createSprite(880, windowHeight - 550, 20, 10);


  setInterval(() => {
    const spear = createSprite(50, windowHeight - 350, 60, 5);
    spear.shapeColor = "red";
    spear.velocity.x = 5;
    obstacles.add(spear);
    obstacle16.rotation += 90;
    obstacle19.rotation += 90;
    obstacle21.rotation += 90;
  }, 1000)
  
  // Obstacles sprites added to the collider group
  obstacles.add(obstacle1);
  obstacles.add(obstacle2);
  obstacles.add(obstacle3);
  obstacles.add(obstacle4);
  obstacles.add(obstacle5);
  obstacles.add(obstacle6);
  obstacles.add(obstacle7);
  obstacles.add(obstacle8);
  obstacles.add(obstacle9);
  obstacles.add(obstacle15);
  obstacles.add(obstacle16);
  obstacles.add(obstacle17);
  obstacles.add(obstacle19);
  obstacles.add(obstacle20);
  obstacles.add(obstacle21);
  obstacles.add(obstacle22);
  obstacles.add(obstacle23);

  

  // Background image
  bg = loadImage("/assets/sprites/supermario.png");
}
  
function draw() {
  background(bg);
  textSize(48);
  text(`Score: ${score}`, width - 300, 40);
  // Velocity and gravity constants
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

  // Obstacle movement
  player.displace(obstacle18);
  // obstacle16.rotation -= 1;

  // Player and obstacle collision
  player.collide(obstacles);

  if (coins.overlap(player, removeSprite)) {
    score++;
  }

  drawSprites();
}

// Makes the player jump
function keyPressed() {
  if ((player.velocity.y === 0 || player.velocity.y === 1) && keyCode === UP_ARROW) {
    player.velocity.y = -JUMP;
  }
}

function removeSprite() {
  this.remove();
  score++;
}











  

  


  