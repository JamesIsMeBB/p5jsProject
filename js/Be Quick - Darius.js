var w = 0;
var h = 0;
var screenChanger = 1;

function setup() 
{
  var cnv = createCanvas(1150, 600);
  w = (windowWidth - width) / 2;
  h = (windowHeight - height) / 2;
  cnv.position(w, h);
}

// [James] Added code into the draw function that consists of if-statements to change between many of your screens by number! 
// For example, if "screenChanger" is set to "5" anywhere in your code, the screen will change to "screenCongrats".
// You can add more "else if" statements if you need more screens. 
function draw() 
{
	if (screenChanger == 0)
	{
		screenWelcome();
	}
	
	else if (screenChanger == 1)
	{
		screenDecision1();
	}
	
	else if (screenChanger == 2)
	{
		// [James] Any Screen you want to display with a certain "screenChanger" number, place here.
	}
	
	else if (screenChanger == 3)
	{
		// [James] Any Screen you want to display with a certain "screenChanger" number, place here.
	}
	
	else if (screenChanger == 4)
	{
		screenFail();
	}
	
	else if (screenChanger == 5)
	{
		screenCongrats();
	}
}
 
 // [James] Welcome screen? 
function screenWelcome()
{
	
  background(100,100,100);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 20);
 
  fill("black")
  text("This is a decision based game.", 230, 50);
  text("You must decide which shape", 230, 70);
  text("most directly resembles your original shape", 230, 90);
  text("as fast as possible.", 230, 110);
  text("Please choose a shape", 230, 160);
 
 
  fill("orange");
  rect(150,180,70,140);
 
  fill("pink");
  circle(300,270,100);
 
  fill("red");
  triangle(100, 200, 40, 300, 100, 300);
  
	// What screen you want it to go to
	// screenChanger = [some number here];
}
 
// [James] Fail Screen?
function screenFail()
{ 
  background("red");

  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40);

  fill("black");
  text("WRONG SHAPE", 230, 100);
  
  //time://display time
  
 	// What screen you want it to go to
	// screenChanger = [some number here];
}
 
//[James] Congrats Screen
 
function screenCongrats()
{
  background("white");	
  
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 30);
 
  fill("black");
  text("CONGRATS! You chose the right object!", 240, 100);
  //time: (display time it took)
  
 	// What screen you want it to go to
	// screenChanger = [some number here];
 
}

// [James] This is a test screen.
function screenDecision1()
{
	background("red");
	fill("blue");
	textSize(25);
	textAlign(CENTER);
	text("Mouse X: " + mouseX + " " + "Mouse Y: " + mouseY + " ", 500, 500);
}

// [James] This is the screen changing code. Here is how it works.
// The if statements track your mouse position and divide the screen into three VERTICAL, equal portions. 
// Depending on which portion you click of the screen, it will take you to another screen of your choosing. 
// You can put one shape in each of their respective portions and when the user clicks on that shape (or anywhere in the portion)
// they will be taken to a screen you choose. 
// The first condition in each statement verifies what screen you are on so that you can have multiple of these functions for
// different screens and you can switch up what portion the right answer is in and what not. 
function mouseClicked()
{
	if ( (screenChanger == 1) && (mouseX > 0) && (mouseX < 383) && (mouseY > 0) && (mouseY < 600) && mouseButton == LEFT )
	{
		screenChanger = 0;
		// What screen you want it to go to
		// screenChanger = [some number here];
	}
	
	else if ( (screenChanger == 1) && (mouseX > 383) && (mouseX < 766) && (mouseY > 0) && (mouseY < 600) && mouseButton == LEFT )
	{
		screenChanger = 4;
		// What screen you want it to go to
		// screenChanger = [some number here];
	}
	
	else if ( (screenChanger == 1) &&  (mouseX > 766) && (mouseX < 1150) && (mouseY > 0) && (mouseY < 600) && mouseButton == LEFT )
	{	
		screenChanger = 5;
		// What screen you want it to go to
		// screenChanger = [some number here];
	}
}

function screenDecision2 ()
{
	// Your screen code here such as background, shapes, all that jazz PLUS the screen changing mechanism above. 
	// You can make as many of these screens as you want for all the decisions you want, just create a new function
	// for each new screen and name it like the function above but with a new number. 
}
 
/*
****CODE FOR ADDITIONAL SCREENS. USE LATER******

WOULD YOU LIKE TO TRY AGAIN?
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
 
 
// [James] Not sure if these are additional screens below or not so I won't delete this code, 
// but you CAN NOT use multiple draw functions!
//CIRCLE

/*
====================================================================
function draw(){
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

function draw(){
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
 
function draw(){
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
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 30)
 
  fill("white")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("CONGRATS! You chose the right object!", 240, 100);
  //time: (display time it took)
 
}

====================================================================
*/