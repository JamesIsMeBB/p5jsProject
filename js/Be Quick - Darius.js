var w = 0;
var h = 0;
var screenChanger = 1;
var timer = 0;
var verifiedChange = 0;
 
function preload(){
 
  playSound = loadSound("sounds/wrong1.mp3");
  playSound2 = loadSound("sounds/Alert-07.mp3");
 
}
 
function setup() 
{
  var cnv = createCanvas(1150, 600);
  w = (windowWidth - width) / 2;
  h = (windowHeight - height) / 2;
  cnv.position(w, h); 
  playSound.setVolume(0.3);
  playSound2.setVolume(0.3);
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
 
  background(189,211,255);
  
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);
  
  strokeWeight(0);
  textAlign(CENTER);
  textSize(100);
  textFont("Impact", 55);
  fill("black")
  text("Please choose a shape and remember it!", 570, 105);
 
  strokeWeight(1);
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
  background(255,0,0);
 
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);
 
  strokeWeight(0);
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 50);
  fill("black");
  text("WRONG SHAPE!", 560, 105);
  
  resetButton();
  
}
 
// [James] This is a test screen.
function screenDecision1()
{
	background(189,211,255);
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
	
    if ( (verifiedChange == 1) && (screenChanger == 8) && (mouseX > 384) && (mouseX < 595) && (mouseY > 200) && (mouseY < 300) && mouseButton == LEFT )
	{
      screenChanger = 5;
      //victory screen
	  playSound2.play();
    }
	
    else if ( (verifiedChange == 1)  && (screenChanger == 8) && (mouseButton == LEFT) )
	{
      screenChanger = 4;
      //fail screen
	  playSound.play()
    }
	
	if ( (verifiedChange == 1) && (screenChanger == 7) && (mouseX > 600) && (mouseX < 800) && (mouseY > 210) && (mouseY < 320) && (mouseButton == LEFT) )
	{
      screenChanger = 5;
      //victory screen
	  playSound2.play();
    }
	
    else if ( (verifiedChange == 1) && (screenChanger == 7) && (mouseButton == LEFT) )
	{
      screenChanger = 4;
      //fail screen
	  playSound.play()
    }
	
	if ( (verifiedChange == 1) && (screenChanger == 6) && (mouseX > 750) && (mouseX < 850) && (mouseY > 250) && (mouseY < 350) && (mouseButton == LEFT) )
	{
      screenChanger = 5;
      //victory screen
	  playSound2.play();
    }
	
    else if ( (verifiedChange == 1) && (screenChanger == 6) && (mouseButton == LEFT) )
	{
      screenChanger = 4;
      //fail screen
	  playSound.play();
    }
}
 
function screenCircles()
{
  verifiedChange = 1;
  timer = timer + 1/60;	
  
  background(189,211,255);
  
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);

  strokeWeight(0);    
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 50)
 
  fill("black")
  text("Choose your shape, QUICKLY!: ", 560, 105);
  text(round(timer, 1), 920, 105);
 
  strokeWeight(1);   
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
  verifiedChange = 1;
  timer = timer + 1/60;	
	
  background(189,211,255)
  
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);

  strokeWeight(0);    
  textAlign(CENTER);
  textSize(75);
  textFont("Impact", 50)
 
  fill("black")
  text("Choose your shape, QUICKLY!: ", 560, 105);
  text(round(timer, 1), 920, 105);

  strokeWeight(1);
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
  verifiedChange = 1;	
  timer = timer + 1/60;	
  
  background(189,211,255);	
	
  stroke(0);
  strokeWeight(4);
  fill('white');
  rect(50,35, 1050, 100, 20);

  strokeWeight(0);  
  textAlign(CENTER);
  textFont("Impact", 50)
 
  fill("black")
  text("Choose your shape, QUICKLY!: ", 560, 105);
  text(round(timer, 1), 920, 105);
 
  strokeWeight(1);
  fill("red")
  triangle(513,385.5,631,393,464,496)
 
  fill("red")
  triangle(765,240,641,240,700,300) 
  fill("red")
 
 
  strokeWeight(1);
  stroke(1);
  triangle(600,300,440,200,400,300)
 
}
 
//Congrats Screen
 
function screenCongrats()
{
  background(0,255,0);
	
  stroke(0);
  strokeWeight(4);
  fill('white');
  rect(50,35, 1050, 100, 20);
	
  strokeWeight(0);	
  textAlign(CENTER);
  textFont("Impact", 43)
 
  fill("black")
  text("CONGRATS! You chose the right object in " + round(timer, 3) + " seconds!", 570, 100);
  
  resetButton();
 
}

function resetButton()
{	
 
	if (typeof button == "undefined")
	{
		button = createButton('Reset!');
		button.position((w+520),(h+400));
        button.size(100,40);
        button.style("font-size", "30px");
		
		button.mousePressed(reset);
	}
 
	else
	{
		button.show();
	}
}

function reset()
{
	screenChanger = 1;
	timer = 0;
	verifiedChange = 0;
	
	if (mouseButton == LEFT)
    {
        button.hide();
    }
}



