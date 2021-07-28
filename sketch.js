let runnerAnim;
let runner;
let track;
let trackImg;
let invTrack;
let invTrack2;
function preload(){
  runnerAnim = loadAnimation('Runner-1.png','Runner-2.png')
  track = loadImage('path.png')

}

function setup(){
  createCanvas(400,400);
  invTrack = createSprite(-10,200,100,400);
  invTrack2 = createSprite(380,200,20,400);
  invTrack.visible = false
  invTrack2.visible = false
  trackImg = createSprite(200,200)
  trackImg.addImage('track',track)
  runner = createSprite(200,350)
  runner.addAnimation('runner',runnerAnim)
  runner.scale = 0.08
  trackImg.velocityY = 10
  console.log(trackImg.width)
}

function draw() {
  background(0);
  runner.collide(invTrack)
  runner.collide(invTrack2)
  if(trackImg.y > 400){
    trackImg.y = trackImg.width / 2
  }
  if(keyDown(RIGHT_ARROW)){
    runner.velocityX = 4
  }
  if(keyDown(LEFT_ARROW)){
    runner.velocityX = -4
  }
  drawSprites();
}
