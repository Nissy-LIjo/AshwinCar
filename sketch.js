const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car1 ;
var car2 ;
var maxCar1=5;
var maxCar2=5;
var car3; 
var backgroundImg,platform;
var invisibleGround;
var score=0;

var gameState = "onSling";
var bkgImage="bg.png"
var trackk;

 var carr1,carr2;
function preload() {
    backgroundImg = loadImage("track1.jpg");
   carr1=loadImage("car1.png");
   carr2=loadImage("car2.png");
   carr3=loadImage("car3.png")
   trackk=loadImage("track1.jpg")
}

function setup(){
    var canvas = createCanvas(1300,600);
    car1 = createSprite(1100,110,110,50);
   // track1=createSprite(600,height-200,1200,20)
   // track1.addImage(trackk)
   // trackk.scale=5
   
    car2 = createSprite(1100,490,110,50);
    
  
 car1.velocityX=-5
 car2.velocityX=-5
 car1.addImage(carr1)
 car2.addImage(carr2)
 car1.scale=0.2;
 car2.scale=0.2;
    engine = Engine.create();
    world = engine.world;


    //ground = createSprite(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
   // ground.addImage(trackk)
   // ground.x=ground.width/7;
   // ground.velocityX=0;
   
    car3=createSprite(100,310,110,50)
    car3.addImage(carr3)
    car3.scale=0.2
  
 
   
}

function draw(){
    
    Engine.update(engine);
    background(backgroundImg);


   
    textSize(20);
    fill("red");
    text("Score = "+score,width-200,30);
   
    
       if(car1.x<0&&car2.x<0)
        {
            car1.x=1100
            car1.y=110
            car2.x=1100
            car2.y=490
        }

        
   
    if(keyDown===RIGHT_ARROW){
        
         car3.x=car3.x+1
    }
       drawSprites(); 
}



   


