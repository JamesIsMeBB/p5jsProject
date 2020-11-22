// Center Canvas perfectly on current window.
function setup() 
{
  var cnv = createCanvas(1150, 600);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
}

// Boolean to determine between screen one and screen two.
var screen = false;

// Used for moving shapes back and forth. 
var x = 1;
var y = 1;
var change = false;

// Draw fucntion for displaying two separate screens. 
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
}

// mouseClicked function to switch between two screens based on a mouse click on circle.
function mouseClicked()
{
	// Two variables that represent distance from mouse and circle on screen one and screen two.
	let e = dist(mouseX, mouseY, 256, 100);
	let f = dist(mouseX, mouseY, 200, 150);
	
	// If else to determine which screen in on, if the mouse has clicked inside the circle, and if so to switch screens.
	if (e < 30 && mouseButton == LEFT && screen == false)
	{
		screen = true;
	}
		
	else if (f < 30 && mouseButton == LEFT && screen == true)
	{
		screen = false;
	}
}

// Screen One display.
function screenOne()
{ 
	// Local variable used for hover color changing on square.
	var hoverColor = 0;
	
	// If else statement to determine if mouse is over square and when to change color.
	if (mouseX > 100 && mouseX < 200 && mouseY > 100 + y && mouseY < 200 + y)
	{
		hoverColor = 255;
	}
	
	else
	{
		hoverColor = 0;
	}
	
	// Animate shapes back and forth betweem y 1 and 150. May be used for reaction time. 
	if ( y == 250)
	{
		change = true;
	}

	else if ( y == 1)
	{
		change = false;
	}
	
	if (change == false)
	{
		y = y + 1;
	}
	
	else if (change == true)
	{
		y = y - 1;
	}
	
	else 
	{
		y = y + 1;
	}
	
	background(100, 50, 200);
	fill(hoverColor);
	strokeWeight(5)
	rect(100, 100 + y, 100, 100);
	fill(0, 100, 255);
	strokeWeight(10)
	triangle(500, 100 + y, 550, 200 + y, 450, 200 + y);
	fill(0, 200, 100);
	strokeWeight(15)
	ellipse(256, 100, 55, 55);
}

// Screen Two display.
function screenTwo()
{
	background(200, 70, 150);
	fill(0);
	strokeWeight(5);
	rect(100, 200, 300, 100);
	fill(100);
	strokeWeight(10);
	triangle(500, 100, 550, 200, 450, 200);
	fill(100, 200, 100);
	strokeWeight(15);
	ellipse(200, 150, 55, 55);
}