//sets the timer to a random time at which to change the background color
var timer = (Math.random() * (7) ) + 1;
 
 
var result = false;
var time = 0;
var early = false;
stop = false;
stop2 = false;
var w;
var h;
 
function preload(){
 
  playSound = loadSound("sounds/Ding.mp3");
 
}
 
function setup() {
   var cnv = createCanvas(1150, 600);
  w = (windowWidth - width) / 2;
  h = (windowHeight - height) / 2;
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
 
 
      playSound.setVolume(.3);
 
      playSound.play();
 
 
      result = true;
    }  
}
 
 
 
function reset()
{
	timer = (Math.random() * (7) ) + 2;
	result = false;
	time = 0;
  early = false;
	stop2 = false;
	if (mouseButton == LEFT)
    {
        button.hide();
    }
}
 
function mousePressed()
{
  if(stop2 == false)
    {
  timer = (Math.random() * (7) ) + 2;
  stop = true;
 
    }
 
}
 
function resetButton()
{	
 
	if (typeof button == "undefined")
	{
		button = createButton('reset');
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
 
function game()
{
 
  background(188,178,255);
 
 //title
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(50,35, 1050, 100, 20);
 
  strokeWeight(0);
  fill('black')
  textSize(45);
  text('Click Your Mouse When the Screen Changes Color',60,100);
 
  //warning message
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(300,360, 555, 150, 20);
 
 
 strokeWeight(0);
  fill('black')
  textSize(30);
  text('The screen will not change colors as',335,427);
 
  strokeWeight(0);
  fill('black')
  textSize(30);
  text('long as you are clicking too early',355,465);
 
 
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
	background(189,211,255);
  stop2 = true;
 
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