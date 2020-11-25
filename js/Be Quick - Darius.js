var w;
var h;
var screenChanger = 0;

function setup() 
{
  var cnv = createCanvas(1150, 600);
  w = (windowWidth - width) / 2;
  h = (windowHeight - height) / 2;
  var screenChanger = 0;
  cnv.position(w, h);
}

// [James] Added code into the draw function that consists of if-statements to change between many of your screens! 
function draw() 
{
	if (screenChanger = 0)
	{
		screenWelcome();
	}
	
	else if (screenChanger = 1)
	{
		screenFail();
	}
	
	else if (screenChanger = 2)
	{
		// [James] Added this screen for testing, example, and for you to use and customize if you'd like!
		screenDecision1();
	}
	
	else if (screenChanger = 3)
	{
		// [James] Any Screen you want to display with a certain "screenChanger" number, place here.
	}
	
	else if (screenChanger = 4)
	{
		// [James] Any Screen you want to display with a certain "screenChanger" number, place here.
	}
	
	else if (screenChanger = 5)
	{
		screenCongrats();
	}
}
 
 // [James] Welcome screen? 
function screenWelcome()
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
  
	// What screen you want it to go to
	// screenChanger = [some number here];
}
 
// [James] Fail Screen?
function screenFail()
{ 
  background(900);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  fill("red")
  rect(0, 0, 500, 500)
 
  fill("black")
  text("WRONG SHAPE", 230, 100);
  
  //time://display time
  
 	// What screen you want it to go to
	// screenChanger = [some number here];
}
 
//[James] Congrats Screen
 
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
  //time: (display time it took)
  
 	// What screen you want it to go to
	// screenChanger = [some number here];
 
}

function screenDecision1()
{
	background(400);
	
	// [James] Your code for background, shapes, looks, all that jazz will be above. 
	// This screen will have the code in it for the clicking mechanic that will separate the screen into three parts. 
	// Make sure your three shapes you present to make the decision are divided into three equal VERTICAL sections on the screen. 
	// Meaning, you will put one shape onto the first vertical section alone, another onto the second alone, and so on.
	
	function mouseClicked()
	{
		if ( mouseButton == LEFT && (mouseX > w) && (mouseX < (w + 383) ) && (mouseY > h) && (mouseY < (h + 600) ) )
		{
			rect( (w + 191), (h + 300), 200, 200);
			// What screen you want it to go to
			// screenChanger = [some number here];
		}
	
		else if ( mouseButton == LEFT && (mouseX > w + 383) && (mouseX < (w + 766) ) && (mouseY > h) && (mouseY < (h + 600) ) )
		{
			rect( (w + 575), (h + 300), 200, 200);
			// What screen you want it to go to
			// screenChanger = [some number here];
		}
	
		else if ( mouseButton == LEFT && (mouseX > w + 766) && (mouseX < (w + 1150) ) && (mouseY > h) && (mouseY < (h + 600) ) )
		{	
			rect( (w + 958), (h + 300), 200, 200);
			// What screen you want it to go to
			// screenChanger = [some number here];
		}
	}
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
 
 
// [James] Not sure if these are additional screens below or not so I won't delete this code, but you can't use multiple draw functions!
//CIRCLE

/*
====================================================================
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
  //time: (display time it took)
 
}

====================================================================
*/