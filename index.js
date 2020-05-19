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

  // Background image
  bg = loadImage("/assets/sprites/supermario.png");

  // Player sprite
  player = createSprite(50, windowHeight - 400, 15, 15);
  player.addAnimation("default", "assets/sprites/ghost-right.png");

  // Finish flag sprite
  flag = createSprite(1320, windowHeight - 670, 60, 30);
  flag.addAnimation("flag", "assets/sprites/flag.png")

  // Ground
  groundCollision = new Group();
  ground = createSprite(0, windowHeight -25, windowWidth*5, 50);
  groundCollision.add(ground);
  ground.shapeColor = "forestgreen";

  // Fake block
  fakeBlock = new Group();

  // Collectable coins
  coins = new Group();
  coin1 = createSprite(350, windowHeight - 320, 10, 10);
  coin1.addAnimation("coin", "assets/sprites/coin.png");
  coin2 = createSprite(750, windowHeight - 350, 10, 10);
  coin2.addAnimation("coin", "assets/sprites/coin.png");
  coin3 = createSprite(1380, windowHeight - 130, 10, 10);
  coin3.addAnimation("coin", "assets/sprites/coin.png");
  coin4 = createSprite(1380, windowHeight - 500, 10, 10);
  coin4.addAnimation("coin", "assets/sprites/coin.png");
  coin5 = createSprite(50, windowHeight - 650, 10, 10);
  coin5.addAnimation("coin", "assets/sprites/coin.png");
  coin6 = createSprite(450, windowHeight - 730, 10, 10);
  coin6.addAnimation("coin", "assets/sprites/coin.png");
  coin7 = createSprite(600, windowHeight - 620, 10, 10);
  coin7.addAnimation("coin", "assets/sprites/coin.png");
  coin8 = createSprite(950, windowHeight - 190, 10, 10);
  coin8.addAnimation("coin", "assets/sprites/coin.png");
  coin9 = createSprite(1300, windowHeight - 400, 10, 10);
  coin9.addAnimation("coin", "assets/sprites/coin.png");
  coin10 = createSprite(1250, windowHeight - 670, 10, 10);
  coin10.addAnimation("coin", "assets/sprites/coin.png");

  // Adds coins to sprite group
  coins.add(coin1);
  coins.add(coin2);
  coins.add(coin3);
  coins.add(coin4);
  coins.add(coin5);
  coins.add(coin6);
  coins.add(coin7);
  coins.add(coin8);
  coins.add(coin9);
  coins.add(coin10);

  // Obstacle sprites
  obstacles = new Group();
  obstacle1 = createSprite(150, windowHeight - 85, 70, 30);
  obstacle2 = createSprite(350, windowHeight - 165, 70, 30);
  obstacle3 = createSprite(550, windowHeight - 175, 20, 20);
  obstacle4 = createSprite(750, windowHeight - 195, 70, 30);
  obstacle5 = createSprite(950, windowHeight - 235, 70, 30);
  obstacle6 = createSprite(1150, windowHeight - 275, 20, 20);
  obstacle7 = createSprite(1220, windowHeight - 275, 20, 20);
  obstacle8 = createSprite(1400, windowHeight - 360, 40, 20);
  obstacle9 = createSprite(950, windowHeight - 360, 15, 15);
  obstacle15 = createSprite(300, windowHeight - 420, 15, 15);
  obstacle16 = createSprite(200, windowHeight - 500, 100, 10);
  obstacle17 = createSprite(50, windowHeight - 520, 15, 10);  
  obstacle18 = createSprite(1350, windowHeight - 100.5, 100, 100); // Displaced block bottom right corner
  obstacle19 = createSprite(300, windowHeight - 650, 100, 10);  
  obstacle20 = createSprite(450, windowHeight - 650, 10, 10);
  obstacle21 = createSprite(600, windowHeight - 600, 70, 10);
  obstacle22 = createSprite(750, windowHeight - 600, 20, 10);
  obstacle23 = createSprite(850, windowHeight - 600, 20, 10);
  obstacle24 = createSprite(1050, windowHeight - 650, 130, 10);
  obstacle24.rotation = -35;
  obstacle25 = createSprite(1250, windowHeight - 650, 250, 10);
  obstacle26 = createSprite(930, windowHeight - 600, 20, 10);
  fakeBlock.add(obstacle26);

  // Obstacle colors
  obstacle1.shapeColor = "black";
  obstacle2.shapeColor = "black";
  obstacle3.shapeColor = "black";
  obstacle4.shapeColor = "black";
  obstacle5.shapeColor = "black";
  obstacle6.shapeColor = "black";
  obstacle7.shapeColor = "black";
  obstacle8.shapeColor = "black";
  obstacle9.shapeColor = "black";
  obstacle15.shapeColor = "black";
  obstacle16.shapeColor = "black";
  obstacle17.shapeColor = "black";
  obstacle18.shapeColor = "black";
  obstacle19.shapeColor = "black";
  obstacle20.shapeColor = "black";
  obstacle21.shapeColor = "black";
  obstacle22.shapeColor = "black";
  obstacle23.shapeColor = "black";
  obstacle24.shapeColor = "black";
  obstacle25.shapeColor = "black";
  obstacle26.shapeColor = "black";
  
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
  obstacles.add(obstacle24);
  obstacles.add(obstacle25);

  // Rotating obstacles + red spears
  setInterval(() => {
    obstacle16.rotation += 90;
    obstacle19.rotation += 90;
    obstacle21.rotation += 90;
  }, 1800)
  }

  setInterval(() => {
    const spear = createSprite(50, windowHeight - 400, 60, 5);
    spear.shapeColor = "red";
    spear.velocity.x = 5;
    obstacles.add(spear);
  }, 1000)
  
function draw() {
  background(bg);
  textSize(35);
  text(`Score: ${score}`, width - 300, 40);
  
  if (score === 10) {
    text("Congratulations! You have beaten the game.", 300, 40);
  }

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

  // To be able to move the block at the bottom corner
  player.displace(obstacle18);

  // Player and obstacle group collision
  player.collide(obstacles);
  player.collide(groundCollision);

  // If player picks up a coin
  if (coins.overlap(player, removeSprite)) {
    score++;
  }

  if (fakeBlock.overlap(player, removeBlock)); 

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

function removeBlock() {
  this.remove();
}











  

  


  