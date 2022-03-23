var bg,bgimg;
var ballon,ballonimg;
var topground;
var bottomground;


function preload() {
  bgimg = loadImage("assets/bg.png")
  ballonimg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup () {
createCanvas(1700,1000)

bg = createSprite(width/2-100,height/2-100)
bg.addImage(bgimg)
bg.scale=1.8



ballon = createSprite(130,height/2,10,10)
ballon.addAnimation("ballonimg",ballonimg)
ballon.scale=0.5

topground = createSprite(0,10,3500,20)
bottomground = createSprite(0,1000,3500,20)

topground.visible=false;
bottomground.visible=false;

}

function draw () {
 background("red")
  
if (keyDown("space")) {
  ballon.velocityY = -6
}
ballon.velocityY=ballon.velocityY+2


drawSprites()

}