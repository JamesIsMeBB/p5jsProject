function setup() 
{
  var cnv = createCanvas(1150, 600);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
}
 
var screen = false;
 
function draw() 
{
    if (screen == false)
    {
        screenOne();
    }
 
    else if (screen == true)
    {
        screenTwo();
    }
    else if (screen == false)
    {
        screenThree();
    }
 
}
 
function mouseClicked()
{
    if (mouseButton == LEFT && screen == false)
    {
        screen = true;
    }
 
    else if (mouseButton == LEFT && screen == true)
    {
        screen = false;
    }
}
 
 
function screenOne()
{
 background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 20)
 
  fill(150)
 
  rect(0, 0, 500, 500)
 
  fill("black")
  text("This is a decision based game.", 230, 50);
  text("You must decide which shape", 230, 70);
  text("most directly resembles your original shape", 230, 90)
  text("as fast as possible.", 230, 110)
  text("Please choose a shape", 230, 160)
 
 
  fill("orange")
  rect(150,180,70,140)
 
  fill("pink")
  circle(300,270,100)
 
  fill("red")
  triangle(100, 200, 40, 300, 100, 300)
}
 
function screenTwo()
{ 
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  fill("red")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("WRONG SHAPE", 230, 100);
time://display time
}
 
 
 
 
 
/*
****CODE FOR ADDITIONAL SCREENS. USE LATER******
WOULD YOU LIKE TO TRY AGAIN?
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 35)
 
  fill("purple")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("Would you like to try again?", 230, 100);
  fill("white")
  rect(250,200, 200, 100)
  rect(30,200, 200,100)
  fill("black")
  textFont("Impact", 60)
  text("yes", 130, 270)
  text("no", 340, 270)
------------------------------------------------------------
WANNA TEST YOUR SKILLS AGAIN?
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 35)
 
  fill("blue")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("Wanna test your skills again?", 230, 100);
  fill("white")
  rect(250,200, 200, 100)
  rect(30,200, 200,100)
  fill("black")
  textFont("Impact", 60)
  text("yes", 130, 270)
  text("no", 340, 270)
 
----------------------------------------------------------
 
 
 
*/
 
 
//CIRCLE

function draw(){
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  fill("grey")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("Choose your shape:", 230, 100);
 
  fill("green")
  ellipse(90,300,100,120)
 
  fill("purple")
  circle(200,200,100) 
  fill("pink")
  circle(300,200,100)
 
  strokeWeight(1);
  stroke(1);
  ellipse(150,400,100,120)
  fill("pink")
 
}

//RECTANGLE

function setup() 
{
  createCanvas(500, 500);
}
function draw(){
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  fill("black")
  rect(0, 0, 500, 500)
 
  fill("white")
  text("Choose your shape:", 230, 100);
 
  fill("green")
  rect(30,300,200,90)
 
  fill("purple")
  rect(200,110,100,150) 
  fill("pink")
  rect(300,200,100,130)
 
  strokeWeight(1);
  stroke(1);
  rect(250,370,200,110)
  fill("pink")
 
}
 
//TRIANGLE
 
 
function setup() 
{
  createCanvas(500, 500);
}
function draw(){
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  fill("grey")
  rect(0, 0, 500, 500)
 
  fill("white")
  text("Choose your shape:", 230, 100);
 
  fill("red")
  triangle(370,470,470,470,400,400)
 
  fill("red")
  triangle(70,170,170,170,100,100) 
  fill("red")
  triangle(270,370,370,370,350,300)
 
  strokeWeight(1);
  stroke(1);
  triangle(170,270,270,270,200,150)
  fill("yellow")
 
}
 
 
//Congrats Screen
 
function screenCongrats()
{
 background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 30)
 
  fill("white")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("CONGRATS! You chose the right object!", 240, 100);
  time: (display time it took)
 
}