const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var obj;
var chopper,drop;

function setup(){
    var canvas = createCanvas(1535,760);
    engine = Engine.create();
    world = engine.world;
    chopper = new Box(0,100);
    drop = new Box(chopper.x,chopper.y);
}

function draw(){
    background(0);
    Engine.update(engine);
   chopper.display();
   drop.display();
}


    


