let ground;
let lander;
var lander_img;
var bg_img;
var rect;
var finalX, finalY;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  rect = createSprite(550,530,100,20);
  frameRate(80);


  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("circle",0,0,300);
  lander.debug = true;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  console.log(lander.position.x,lander.position.y);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();



  if (keyDown("UP_ARROW")){
    vy -=g;
    lander.position.y-=vy;
  }

  if (keyDown("DOWN_ARROW")){
    vy +=g;
    lander.position.y+=vy;
  }

  if (keyDown("LEFT_ARROW")){
    vy -=g;
    lander.position.x-=vy;
  }
  if (keyDown("RIGHT_ARROW")){
    vy +=g;
    lander.position.x+=vy;
  }
 // if((lander.position.x>=550 || lander.position.x<=560)&&(lander.position.y>=510 || lander.position.y<=520) ){
   if(lander.isTouching(rect)){
     finalX = lander.position.x;
     finalY = lander.position.y;
    lander.collide(rect);
   textSize(40);
   text("Landing Successful",200,20);
   lander.position.x = finalX;
   lander.position.y = finalY;
  }
  drawSprites();

}
 

