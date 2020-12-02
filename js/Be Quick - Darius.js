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
  fill(224, 132, 34)
  rect(460,300,200,110); //x 460 - 660 y 300 - 410
 
  fill(224, 184, 201);
  circle(220,358,100); //x 170 - 270 y 308 - 408
 
  fill(255,0,0)
  triangle(1020, 400, 860, 300, 820, 400); // x 820 - 1020 y 300 - 400
 
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
	if ( (screenChanger == 1) && (mouseX > 170) && (mouseX < 270) && (mouseY > 308) && (mouseY < 408) && mouseButton == LEFT )
	{
		screenChanger = 6;
		//circle screen
	}
 
	else if ( (screenChanger == 1) && (mouseX > 460) && (mouseX < 660) && (mouseY > 300) && (mouseY < 410) && mouseButton == LEFT )
	{
		screenChanger = 7;
		//Rectangle screen
	}
 
	else if ( (screenChanger == 1) &&  (mouseX > 820) && (mouseX < 1020) && (mouseY > 300) && (mouseY < 400) && mouseButton == LEFT )
	{	
		screenChanger = 8;
        //triangleScreen
 
	}
	
    if ( (verifiedChange == 1) && (screenChanger == 8) && (mouseX > 50) && (mouseX < 250) && (mouseY > 400) && (mouseY < 500) && mouseButton == LEFT )
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
	
	if ( (verifiedChange == 1) && (screenChanger == 7) && (mouseX > 490) && (mouseX < 600) && (mouseY > 380) && (mouseY < 580) && (mouseButton == LEFT) )
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
	
	if ( (verifiedChange == 1) && (screenChanger == 6) && (mouseX > 850) && (mouseX < 950) && (mouseY > 250) && (mouseY < 350) && (mouseButton == LEFT) )
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
  
  fill(235, 200, 211)
  ellipse(660,270,100,120)
 
  fill(224, 184, 201)
  ellipse(660,510,100,110)
 
  fill(224, 184, 201)
  circle(500,350,150) 
  
  fill(224, 184, 201)
  circle(320,350,85)
  
  // Magic
  fill(224, 184, 201)
  circle(900,300,100)
  
  fill(224, 154, 201)
  circle(1080,200,100)
  
  fill(240, 194, 201)
  ellipse(920,500,120,80)
 
  fill(200, 184, 201)
  circle(300,200,100)
  
  fill(224, 194, 231)
  circle(300,530,120)
 
  fill(224, 184, 201)
  ellipse(150,400,80,100)

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
  
  fill(254, 112, 4)
  rect(750,470,300,110)
  
  fill(224, 132, 34)
  rect(620,150,240,110)
 
  // Magic
  fill(224, 132, 34)
  rect(490,380,110,200) 
  
  strokeWeight(2);
  fill(224, 132, 34)
  rect(940,210,110,200) 
  
  fill(224, 162, 30)
  rect(90,180,200,110)

  strokeWeight(2);
  fill(224, 162, 30)
  rect(340,240,130,140)

  strokeWeight(1);  
  
  fill(224, 132, 34)
  rect(490,200,100,130, 8)
 
  fill(224, 132, 34)
  rect(150,370,140,200)
  
  fill(224, 132, 34)
  rect(670,265,110,200, 7) 
 
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
  
  fill(255,0,0)
  strokeWeight(2);
  triangle(513,385.5,631,393,464,496)
 
  fill(255,0,0)
  strokeWeight(1);
  triangle(765,240,641,240,700,300) 
  
  fill(255,0,0)
  triangle(300,420,180,590,360,520)

  fill(255,0,0)
  triangle(605,550,720,550,690,390)   
  
  // Magic
  fill(255,0,0)
  triangle(250,400,90,500,50,400)
  
  // Similar
  fill(255,20,90)
  triangle(260,300,170,200,100,300)
  
  // Similar
  fill(225,0,0)
  triangle(1030,310,870,230,840,300)
  
  // Identical Size
  fill(165,57,69)
  triangle(600,300,440,200,400,300)
  
  // Identical Size
  fill(255,0,0)
  strokeWeight(2);
  triangle(1000,500,840,400,800,500)
 
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
		button.position((w+470),(h+470));
        button.size(200,80);
        button.style("font-size", "37px");
		
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



