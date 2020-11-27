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
		screenDecision1();
	}
 
	else if (screenChanger == 1)
	{
		screenWelcome();
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
    else if (screenChanger == 6)
      {
        screenCircles();
      }
    else if (screenChanger == 7)
      {
        screenRectangles();
      }
    else if (screenChanger == 8)
      {
        screenTriangles();
      }
}
 
 // [James] Welcome screen? 
function screenWelcome()
{
 
  background(100,100,100);
  textAlign(CENTER);
  textSize(100);
  textFont("Impact", 55);
 
  fill("black")
  text("Please choose a shape", 540, 160);
 
 
  fill("orange");
  rect(300,370,200,110);
 
  fill("pink");
  circle(300,270,100);
 
  fill("red");
  triangle(600, 300, 440, 200, 400, 300);
 
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
  text("WRONG SHAPE", 550, 100);
 
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
  text("CONGRATS! You chose the right object!", 0, 100);
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
	if ( (screenChanger == 1) && (mouseX > 240) && (mouseX < 387) && (mouseY > 213) && (mouseY < 322) && mouseButton == LEFT )
	{
		screenChanger = 6;
		//circle screen
	}
 
	else if ( (screenChanger == 1) && (mouseX > 280) && (mouseX < 485) && (mouseY > 369) && (mouseY < 482) && mouseButton == LEFT )
	{
		screenChanger = 7;
		//Rectangle screen
	}
 
	else if ( (screenChanger == 1) &&  (mouseX > 397) && (mouseX < 584) && (mouseY > 199) && (mouseY < 300) && mouseButton == LEFT )
	{	
		screenChanger = 8;
        //triangleScreen
 
	}
   else  if ( (screenChanger == 8) &&  (mouseX > 384) && (mouseX < 595) && (mouseY > 200) && (mouseY < 300) && mouseButton == LEFT )
	{
      screenChanger = 5;
      //victory screen
    }
  else  if ( (screenChanger == 8) &&  (mouseX > 384) && (mouseX < 761) && (mouseY > 237) && (mouseY < 302) && mouseButton == LEFT )
	{
      screenChanger = 4;
      //fail screen
    }
  else  if ( (screenChanger == 8) &&  (mouseX > 463) && (mouseX < 636) && (mouseY > 380) && (mouseY < 495) && mouseButton == LEFT )
	{
      screenChanger = 4;
      //fail screen
    }
  else  if ( (screenChanger == 6) &&  (mouseX < 710) && (mouseX >0 ) && (mouseY > 110) && (mouseY < 525) && mouseButton == LEFT )
    {
      screenChanger = 4;
      //fail screen
    }
   else  if ( (screenChanger == 6) &&  (mouseX > 729) && (mouseX < 855) && (mouseY > 244) && (mouseY < 330) && mouseButton == LEFT )
    {
      screenChanger = 5;
      //victory screen
    }
  else  if ( (screenChanger == 7) &&  (mouseX > 600) && (mouseX < 804) && (mouseY > 210) && (mouseY < 312) && mouseButton == LEFT )
    {
      screenChanger = 5;
      //victory screen
    }
  else  if ( (screenChanger == 7) &&  (mouseX > 240) && (mouseX < 450) && (mouseY > 196) && (mouseY < 516) && mouseButton == LEFT )
    {
      screenChanger = 4;
      //Fail screen
    }
  else  if ( (screenChanger == 7) &&  (mouseX > 240) && (mouseX < 890) && (mouseY > 354) && (mouseY < 530) && mouseButton == LEFT )
    {
      screenChanger = 4;
      //Fail screen
    }
 
}
 
function screenCircles()
{
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  background("grey")
 
  fill("black")
  text("Choose your shape:", 530, 100);
 
  fill("pink")
  ellipse(660,300,100,120)
 
  fill("pink")
  ellipse(660,460,100,110)
 
  fill("purple")
  circle(530,200,150) 
  fill("pink")
  circle(800,300,100)
 
  fill("red")
  circle(400,400,100)
 
 
  strokeWeight(1);
  stroke(1);
  ellipse(150,400,80,100)
  fill("pink")
 
}
 
function screenRectangles()
{
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  background("black")
 
  fill("white")
  text("Choose your shape:", 530, 100);
 
  fill("yellow")
  rect(500,400,300,110)
 
  fill("orange")
  rect(600,210,200,110) 
  fill("yellow")
  rect(300,200,100,130)
 
  strokeWeight(1);
  stroke(1);
  fill("orange")
  rect(250,370,200,130)
 
}
 
function screenTriangles()
{
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 40)
 
  background("grey")
 
  fill("white")
  text("Choose your shape:", 530, 100);
 
  fill("red")
  triangle(513,385.5,631,393,464,496)
 
  fill("red")
  triangle(765,240,641,240,700,300) 
  fill("red")
 
 
  strokeWeight(1);
  stroke(1);
  triangle(600,300,440,200,400,300)
 
}
 
function screenDecision2 ()
{
  if ( (screenChanger == 0) &&  (mouseX > 397) && (mouseX < 584) && (mouseY > 199) && (mouseY < 300) && mouseButton == LEFT )
	{
      screenChanger = 1;
    } 
}
 
//Congrats Screen
 
function screenCongrats()
{
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 30)
 
  background("white")
 
  fill("black")
  text("CONGRATS! You chose the right object!", 540, 100);
  //time: (display time it took)
 
}