let GRAVITY = 1;
let JUMP = 15;
let bg;
let score;
let walkRight;
let walkLeft;
let jumpRight;
let jumpLeft;
let isMovingRight;
let sound;
let coins;
let obstacles;
let rockObstacle;
let spear;
let spearCatcher;
let spearSingle;
let isPlaying = false;
const startScreen = document.querySelector(".start-screen");
const gameOver = document.querySelector(".game-over");
const playAgain = document.querySelector(".play-again");
const startOver = document.querySelector(".start-over");
const startBtn = document.querySelector(".start-game");

function startGame() {
  score = 0;
  // Player sprite
  player = createSprite(50, windowHeight - 400, 15, 15);
  player.addAnimation("ghost", walkRight);

  // Finish flag sprite
  flag = createSprite(1320, windowHeight - 670, 60, 30);
  flag.addAnimation("flag", "assets/sprites/flag.png");

  // Ground
  groundCollision = new Group();
  ground = createSprite(0, windowHeight - 25, windowWidth * 5, 50);
  groundCollision.add(ground);
  ground.shapeColor = "#7e9c8e";

  // Fake block
  fakeBlock = new Group();

  // Collectable coins
  coinsGroup = new Group();

  coins = [
    createSprite(350, windowHeight - 320, 10, 10),
    createSprite(750, windowHeight - 350, 10, 10),
    createSprite(1380, windowHeight - 130, 10, 10),
    createSprite(1380, windowHeight - 500, 10, 10),
    createSprite(50, windowHeight - 650, 10, 10),
    createSprite(450, windowHeight - 730, 10, 10),
    createSprite(600, windowHeight - 620, 10, 10),
    createSprite(950, windowHeight - 190, 10, 10),
    createSprite(1300, windowHeight - 400, 10, 10),
    createSprite(1250, windowHeight - 670, 10, 10),
  ];

  coins.forEach((item) => {
    item.addAnimation("coin", "assets/sprites/coin.png");
    coinsGroup.add(item);
  });

  // Obstacle sprites
  obstaclesGroup = new Group();

  obstacles = [
    createSprite(150, windowHeight - 85, 70, 30),
    createSprite(350, windowHeight - 165, 70, 30),
    createSprite(550, windowHeight - 175, 20, 20),
    createSprite(750, windowHeight - 195, 70, 30),
    createSprite(950, windowHeight - 235, 70, 30),
    createSprite(1150, windowHeight - 275, 20, 20),
    createSprite(1220, windowHeight - 275, 20, 20),
    createSprite(1400, windowHeight - 360, 40, 20),
    createSprite(950, windowHeight - 360, 15, 15),
    createSprite(300, windowHeight - 420, 15, 15),
    createSprite(50, windowHeight - 520, 15, 10),
    createSprite(450, windowHeight - 650, 10, 10),
    createSprite(750, windowHeight - 600, 20, 10),
    createSprite(850, windowHeight - 600, 20, 10),
    createSprite(1250, windowHeight - 650, 250, 10),
  ];

  rockObstacle = createSprite(1360, windowHeight - 100.5, 100, 100); // Displaced block bottom right corner
  obstacle16 = createSprite(200, windowHeight - 500, 100, 10);
  obstacle16.shapeColor = "black";
  obstaclesGroup.add(obstacle16);
  obstacle19 = createSprite(300, windowHeight - 650, 100, 10);
  obstacle19.shapeColor = "black";
  obstaclesGroup.add(obstacle19);
  obstacle21 = createSprite(600, windowHeight - 600, 70, 10);
  obstacle21.shapeColor = "black";
  obstaclesGroup.add(obstacle21);
  obstacle24 = createSprite(1050, windowHeight - 650, 130, 10);
  obstacle24.shapeColor = "black";
  obstaclesGroup.add(obstacle24);
  obstacle26 = createSprite(930, windowHeight - 600, 20, 10);
  obstacle26.shapeColor = "black";
  fakeBlock.add(obstacle26);
  obstacle24.rotation = -35;

  // Obstacle colors
  rockObstacle.addAnimation("rock", "assets/sprites/rock.png");

  // Obstacles sprites added to the collider group
  obstacles.forEach((item) => {
    item.shapeColor = "black";
    obstaclesGroup.add(item);
  });

  // Rotating obstacles + red spears
  rotationInterval = setInterval(() => {
    obstacle16.rotation += 90;
    obstacle19.rotation += 90;
    obstacle21.rotation += 90;
  }, 1800);

  spear = new Group();

  spearInterval = setInterval(() => {
    spearSingle = createSprite(50, windowHeight - 400, 60, 5);
    spearSingle.shapeColor = "red";
    spearSingle.velocity.x = 5;
    spear.add(spearSingle);
    obstaclesGroup.add(spearSingle);
  }, 1000);

  spearCatcher = createSprite(windowWidth + 10, windowHeight - 400, 20, 20);
}

function restartGame() {
  isPlaying = true;
  coinsGroup.removeSprites();
  groundCollision.removeSprites();
  fakeBlock.removeSprites();
  obstaclesGroup.removeSprites();
  spear.removeSprites();
  rockObstacle.remove();
  player.remove();
  clearInterval(rotationInterval);
  clearInterval(spearInterval);

  startGame();
}

function preload() {
  walkRight = loadAnimation("assets/sprites/ghost-right.png");
  walkLeft = loadAnimation("assets/sprites/ghost-left.png");
  jumpRight = loadAnimation("assets/sprites/ghost-right-jump.png");
  jumpLeft = loadAnimation("assets/sprites/ghost-left-jump.png");
  bg = loadImage("/assets/sprites/background.png");
  sound = new Audio("assets/sounds/coin.mp3");
}

function setup() {
  frameRate(60);
  // Canvas size
  createCanvas(windowWidth, windowHeight);

  if (!isPlaying) {
    textSize(48);
    text("Press ENTER to start game", windowWidth / 3, windowHeight / 2);
  }

  startGame();
}

function draw() {
  if (isPlaying) {
    background(bg);
    textSize(35);
    text(`Score: ${score}`, width - 300, 40);

    if (score === 1) {
      isPlaying = false;
      gameOver.classList.add("show");
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
        isMovingRight = true;
      }
    }

    // Moves player to the left
    if (keyIsDown(LEFT_ARROW)) {
      if (player.x <= 25) {
        player.velocity.x = 0;
      } else {
        player.velocity.x -= 5;
        isMovingRight = false;
      }
    }

    if (player.velocity.x > 0) {
      player.addAnimation("ghost", walkRight);
    }
    if (player.velocity.x < 0) {
      player.addAnimation("ghost", walkLeft);
    }

    if (keyIsDown(UP_ARROW)) {
      if (isMovingRight) {
        player.addAnimation("ghost", jumpRight);
      } else {
        player.addAnimation("ghost", jumpLeft);
      }
    }

    // To be able to move the block at the bottom corner
    player.displace(rockObstacle);

    // Player and obstacle group collision
    player.collide(obstaclesGroup);
    player.collide(groundCollision);

    // If player picks up a coin
    if (coinsGroup.overlap(player, removeSprite)) {
      sound.play();
      score++;
    }

    if (fakeBlock.overlap(player, removeSprite));

    // There is a hidden block outside of the screen that removes spear sprites once they've left the screen
    if (spear.overlap(spearCatcher, removeSprite));

    // Renders all sprites on the canvas
    drawSprites();
  }

}

// Keyboard event listeners
function keyPressed() {
  if (
    (player.velocity.y === 0 || player.velocity.y === 1) &&
    keyCode === UP_ARROW
  ) {
    player.velocity.y = -JUMP;
  }
}

// Removes a sprite from the canvas
function removeSprite() {
  this.remove();
}

// Button event listener prompt after collecting all the coins
startOver.addEventListener("click", () => {
  isPlaying = false;
  restartGame();
});

// Button event listener at the bottom of the screen
playAgain.addEventListener("click", () => {
  restartGame();
  gameOver.classList.remove("show");
});

// Button event listener in start screen
startBtn.addEventListener("click", () => {
  isPlaying = true;
  startScreen.classList.add("hidden");
  startOver.classList.remove("hidden");
})
