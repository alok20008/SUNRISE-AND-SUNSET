const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6,sunris
var bg="sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
  //text("Score  " + score, width-300, 50)

    Engine.update(engine);
    
    fill("black")
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }
    }
       async function getBackgroundImg(){
            // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);    
    // write code to display time in correct format here
    
    if(hour>=0 && hour<18 ){
        bg = "sunrise1.png";
    }
    else{
        bg="sunset7.png"
    }
    


    // add conditions to change the background images from sunrise to sunset
        //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}