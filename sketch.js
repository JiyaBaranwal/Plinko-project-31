const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(800,1000);
engine = Engine.create();
world = engine.world;

ground = new Ground (400, 989, 800, 20);

for (var i = 0; i < width; i = i+80){
  divisions.push(new Division(i, height-divisionsHeight/2, 10, divisionsHeight))
}

for (var j=75; j<width; j=j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j=50; j<width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
for (var j=75; j<width; j=j+50){
  plinkos.push(new Plinko(j,275));
}
for (var j=50; j<width-10; j=j+50){
  plinkos.push(new Plinko(j,375));
}

Engine.run(engine)
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  
  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for (var n=0; n<divisions.length; n++){
    divisions[n].display();
  }

  if (frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }

  for (var h=0; h<divisions.length; h++){
    divisions[h].display();
  }

  for (var b=0;b<particles.length; b++){
    particles[b].display();
  }

  drawSprites();
}