const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backgroundImg, bg, inviGround;
var ground, hero, fly, monster;
var blocks = [];

function preload() {
//preload the images here
  bgGm = loadImage("img/bgGm.png");
  bgGn = loadImage("img/bgGn.jpg");


}

function setup() {
  createCanvas(1200, 630);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(400, 515, 800, 15);

  inviGround = new Ground(1000, 515, 150, 15);

  // Creating HERO
  hero = new Hero(200, 200, 160, 30);

  // Creating Fly
  fly = new Fly(hero.body, {x:200, y:5});

  // Creating Monster
  monster = new Monster(1000, 480, 150, 130);

  // Creating blocks
  for(var i = 400; i<=750; i=i+50)
  {
  
    blocks.push(new Blocks(i, 400, 50, 50));
    blocks.push(new Blocks(i, 350, 50, 50));
    // alert("hello");
  }

  for(var i = 450; i<=700; i=i+50)
  {
  
    blocks.push(new Blocks(i, 300, 50, 50));
    blocks.push(new Blocks(i, 250, 50, 50));
    // alert("hello");
  }
  
  getTime();
}

function draw() {
  if(backgroundImg)
  {

    background(backgroundImg);
  }
  else
  {
    background(12);
  }
  Engine.update(engine);
  text("X"+mouseX+"  Y"+ mouseY , 50, 50);
  
    if(monster.body.position.y>580)
    {
      textSize(30);
      fill("green")
      text("You WIN the game", 460, 250);
      // alert("YES")
    }


  hero.display();
  fly.display();
  ground.display();
  monster.display();
  inviGround.display();

  for (var i = 0; i < blocks.length; i++) {
    
    blocks[i].display();
  }
  
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}



async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  // console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);

  if(hour>=06 && hour<=18){
    backgroundImg = bgGm;
  }
  else{
    backgroundImg = bgGn;
  }

  // backgroundImg = loadImage(bg);
}
