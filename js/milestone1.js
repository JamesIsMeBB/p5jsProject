// Center canvas in the middle of the window.
function setup() 
{
  var cnv = createCanvas(1150, 600);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
}

// Used for moving shapes back and forth. 
var x = 1;
var y = 1;
var change = false;

// For shape color change.
var shape = false;
let color = 0;

// Used as random timer countdown.
var timer = (Math.random() * (7) ) + 2;

function draw() 
{
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
	fill(color);
	strokeWeight(5)
	rect(100, 100, 100, 100);
	fill(0 + y);
	strokeWeight(10)
	triangle(500 + x, 100 + y, 550 + x, 200 + y, 450 + x, 200 + y);
	fill(0 + y, 200, 100);
	strokeWeight(15)
	ellipse(256, 100 + y, 55, 55);
	
	// If statement to stop timer once it drops below zero.
	if (timer > 0)
	{
		timer = timer - (1/60);
	}
	
	else
	{
		timer = timer + 0;
	}
	
	// Display timer. 
	textSize(32);
	text(timer, 10, 30);
}

// Shape will change color when screen is clicked.
function mouseClicked()
{
		if (mouseButton == LEFT && shape == false)
	{
		color = 255;
		shape = !shape;
	}
	
	else if (mouseButton == LEFT && shape == true)
	{
		color = 0;
		shape = !shape;
	}
}

















