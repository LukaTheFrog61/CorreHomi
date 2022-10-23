var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);

  // Movendo o fundo
  path = createSprite(200, 400, 10, 10);
  path.addAnimation("path", pathImg);
  path.velocityY = 4;

  //Criando menino que corre
  boy = createSprite(200, 350, 20, 50);
  boy.addAnimation("boy", boyImg);
  boy.scale = 0.05;

  // Criando Boundary (Limite) esquerdo
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //Crie Boundary direito

  rightBoundary = createSprite(400, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // Menino se movendo no eixo X com o mouse
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[3]);

  //Reiniciar o fundo
  if (path.y > 400) {
    path.y = 0;
  }

  drawSprites();
}
