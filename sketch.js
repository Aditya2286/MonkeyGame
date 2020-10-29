var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FruitGroup, obstacleGroup;
var score;

function preload()
{
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup()
{
      createCanvas(400,400);

      monkey=createSprite(80,340,20,20);
      monkey.addAnimation("running",monkey_running);
      monkey.scale=0.1;
  
      ground=createSprite(200,370,400,10);
      ground.velocityX=-4;
      ground.x=ground.width/2;
      console.log(ground.x);
  
      score=0;
      
  
      FruitGroup=createGroup();
      ObstacleGroup=createGroup();
}

function draw() 
{
      background("cyan");
  
      stroke(100);
      fill(10)
      textSize(18);
      score=Math.round(frameCount/frameRate());
      text("Survival Time = "+score,120,50);
  
      if (ground.x < 200)
      {
            ground.x = ground.width/2;
      }    
  
      if(keyDown("space")&&monkey.y>=150)
      {
            monkey.velocityY=-12;  
      }
  
      monkey.velocityY=monkey.velocityY+0.8;
  
      monkey.collide(ground);
  
      fruits();
      obstacle();
      drawSprites();
}

function fruits()
{
      if(frameCount%80===0)
      {
            banana=createSprite(400,120,20,20);
            banana.y = Math.round(random(140,200));
            banana.velocityX=-8;
            banana.addImage(bananaImage);
            banana.scale=0.1;
        
            banana.lifetime=50; 
        
            FruitGroup.add(banana);
        
      }
}
function obstacle()
{
      if(frameCount%300===0)
      {
            rocks=createSprite(400,332,30,30);
            rocks.addImage(obstacleImage);
            rocks.scale=0.18;
            rocks.velocityX=-8;
        
            rocks.lifetime=50;
        
            ObstacleGroup.add(rocks);
      }
}