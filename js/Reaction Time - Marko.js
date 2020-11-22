//sets the timer to a random time at which to change the background color
var timer = (Math.random() * (7) ) + 2;
 
 
var result = false;
var time = 0;
 
 
function setup() {
  var cnv = createCanvas(1150, 600);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
}
 
 
function draw()
{
	game();
}
 
//checks if a mouse has been clicked and starts a stopwatch
function mouseClicked()
{
    if (mouseButton == LEFT && timer < 0)
    {
      result = true;
    }  
}
 
 
function reset()
{
	timer = (Math.random() * (7) ) + 2;
	result = false;
	time = 0;
	
	if (mouseButton == LEFT)
    {
        button.hide();
    }
}
 
 
function resetButton()
{	

	if (typeof button == "undefined")
	{
		button = createButton('reset');
		button.position(600 , 465);
		button.mousePressed(reset);
	}
	
	else
	{
		button.show();
	}
}

function game()
{
 
  background(95,240,240);
  
 //title
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(45);
  text('Click Your Mouse When the Screen Changes Color',60,100);
 
//timer
if (timer > 0)
{
    timer = timer - (1/60);
}
 
else
{
    timer = timer + 0;
}
 
//changes background color
 if(timer < 0)
{
	background(50,200,65);
    
	if (time >= 0)
	{
		time = time + (1/60);
	}
}
 
  
if(result == true && timer < 0)
  {
 
	//displaying the results
	stroke(0);
	strokeWeight(4);
	fill('white')
	rect(50,35, 1050, 100, 20);
    
	strokeWeight(0);
	fill('black');
	textSize(40);
	text('It Took You: ' + round(time, 5) + ' Seconds to Click Your Mouse',100,100);
  
	time = time - (1/60);
    
	resetButton();
	
  } 
 
}