
function preload(){
  //pre-load images
  running=loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg=loadImage("path.png")
  
}

function setup(){
  createCanvas(400,400);

  var music = new Audio ('subwaysong.mp3')
  //create sprites here
  music.play()
  path=createSprite(200, 200)
  path.addImage(pathImg)
  path.velocityY= 4
  path.scale=1.2
  runner=createSprite(200,320)
  runner.addAnimation("run", running)
  runner.scale=0.07
  leftEdge=createSprite(5,200,15,400)
  leftEdge.visible=false
  rightEdge=createSprite(395,200,15,400)
  rightEdge.visible=false
  

}

function draw() {
  background(0);
if (path.y > 400){
  path.y = height/2
}
runner.collide(leftEdge)
runner.collide(rightEdge)
runner.x=World.mouseX
drawSprites()
}
