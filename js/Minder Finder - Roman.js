p5.disableFriendlyErrors = true;
let r, g, b;
let a, c, w, x, z, n, m;
let playSound;
let bab;
r = g = b = a =c=x=z=n=m=255;
 
var screen = false;
var w2;
var h2
function setup() 
{
  
  playSound = loadSound("sounds/Input-02.mp3");
  bab = loadSound("sounds/bababooey-sound-effect.mp3");
  playSound.setVolume(0.088);
  var cnv = createCanvas(1150, 600);
  w2 = (windowWidth - width) / 2;
  h2 = (windowHeight - height) / 2;
  cnv.position(w2, h2);
  //creating random number for 
  randomize();
}
 
//randomizes number in the pattern
function randomize(){
  num1 = int(random(1,10))
  num2 = int(random(1,10))
  num3 = int(random(1,10))
  num4 = int(random(1,10))
  num5 = int(random(1,10))
  num6 = int(random(1,10))
  num7 = int(random(1,10))
}
function draw() 
{
 
    if (screen == false)
    {
        screenOne();
 
    }
    
    else if (screen == true)
    {
        screenTwo();
        noLoop();
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
  
  background(189,211,255);
  fill(255, 255, 0);
  //drawing circles
  r = g = b = a = w = c = x = z = n = m = 255;
  // Draw a circle
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(r, 255, 100, 127);
  circle(175, 250, 120);
  fill(b, 255, 100, 127);
  circle(375, 250, 120);
  fill(w, 255, 100, 127);
  circle(575, 250, 120);
  fill(x, 255, 100, 127);
  circle(775, 250, 120);
  fill(n, 255, 100, 127);
  circle(975, 250, 120);
  textSize(50);
  fill(0, 0, 0);
  text('Remember the pattern! Click to Start!', 100, 100);
  //putting in text in circles
 
  text(num1, 162, 263);
  text(num2, 362, 263);
  text(num3, 562, 263);
  text(num4, 762, 263);
  text(num5, 962, 263);
 
}
function screenTwo()
{
 
  background(211, 211, 211);
  r = g = b = a = w = c = x = z = n = m = 255;
 
  button = createButton('Submit!');
  button.size(100,34);
  button.style("font-size", "25px");
  button.position((w2 + 720), (h2 + 400));
  button.mousePressed(check);
  //this adds the value in a pattern (Not addition)
  var rightNum = num1 + '' + num2 + ''+num3 + '' + num4 + '' + num5;
  //input textbox for user
  input = createInput();
  input.size(260,34);
  input.style("font-size", "30px");
  input.position((w2 + 420), (h2 + 400)
);
  //sets guess value to the user input
 
  textSize(50);
  fill(0, 0, 0);
  //text
  text('What was the pattern of the number?', 100, 100);
  //hides the next button after game is reset
  nextOne.hide();
}
 
//creates 6 circles with randomized numbers
function screenThree(){
  
  background(189,211,255);
  fill(255, 255, 0);
  // Draw a circle
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(255, 255, 100, 127);
  circle(120, 250, 100);
  circle(295, 250, 100);
  circle(470, 250, 100);
  circle(645, 250, 100);
  circle(820, 250, 100);
  circle(995,250,100)
  
  textSize(50);
  fill(0, 0, 0);
  text('Remember the pattern! Click to Start!', 100, 100);
  //putting in text in circles
  //check if visual is equal to correct pattern with randomize()
  randomize();
  text(num1, 107, 263);
  text(num2, 282, 263);
  text(num3, 457, 263);
  text(num4, 632, 263);
  text(num5, 807, 263);
  text(num6, 982, 263);
 
  nextScreen = createButton('Next!');
  nextScreen.size(100,40);
  nextScreen.style("font-size", "30px");
  nextScreen.position((w2 + 520), (h2 + 400));
  nextScreen.mousePressed(screenFour);
}
//asks for user guess from second level
function screenFour(){
  nextScreen.hide();
  background(211, 211, 211);
  fill(255, 255, 0);
  button = createButton('Submit!');
  button.size(100,34);
  button.style("font-size", "25px");
  button.position((w2 + 720), (h2 + 400)
);
  button.mousePressed(checkSecond);
 
  //input textbox for user
  input = createInput();
  input.style("font-size", "30px");
  input.size(260,34);
  input.position((w2 + 420), (h2 + 400));
  //sets guess value to the user input
  textSize(50);
  fill(0, 0, 0);
  //text
  text('What was the pattern of the number?', 100, 100);
}
//creates 7 circles with randomized numbers
function screenFive(){
  button.hide();
  input.hide();
  background(189,211,255);
  fill(255, 255, 0);
  //drawing circles
 
  // Draw a circle
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(255, 255, 100, 127);
  circle(120, 250, 100);
  circle(270, 250, 100);
  // easier to see distance between circles
  circle(270 + 150, 250, 100);
  circle(270 + 300, 250, 100);
  circle(270 + 450, 250, 100);
  circle(270 + 600, 250,100);
  circle(270 + 750, 250,100);
  
  textSize(50);
  fill(0, 0, 0);
  text('Remember the pattern! Click to start!', 100, 100);
  //putting in text in circles
  //check if visual is equal to correct pattern with randomize()
  randomize();
  text(num1, 107, 263);
  text(num2, 257, 263);
  text(num3, 260 + 147, 263);
  text(num4, 260 + 297, 263);
  text(num5, 260 + 447, 263);
  text(num6, 260 + 597, 263);
  text(num7, 260 + 747, 263);
  
  nextScreen = createButton('Next!');
  nextScreen.size(100,40);
  nextScreen.style("font-size", "30px");
  nextScreen.position((w2 + 520), (h2 + 400)
);
  nextScreen.mousePressed(screenSix);
}
//makes the screen that asks for input for third level
function screenSix(){
  nextScreen.hide();
  background(211, 211, 211);
  fill(255, 255, 0);
  button = createButton('Submit!');
  button.size(100,34);
  button.style("font-size", "25px");
  button.position((w2 + 720), (h2 + 400)
);
  button.mousePressed(checkThird);
 
  //input textbox for user
  input = createInput();
  input.style("font-size", "30px");
  input.size(260,34);
  input.position((w2 + 420), (h2 + 400)
);
  //sets guess value to the user input
  textSize(50);
  fill(0, 0, 0);
  //text
  text('What was the pattern of the number?', 100, 100);
}
//checks for the guess in the second level
function checkSecond() {
  //hides button
  button.hide();
  const guess = input.value();
  //this adds the value in a pattern (Not addition)
  var rightNum = num1 + '' + num2 + ''+num3 + '' + num4 + '' + num5 + '' + num6;
 
  if(guess == rightNum)
  {
    playSound.play();
    background(0,255,0);
    textSize(90);
    fill(0,0,0);
    text('Correct!', 375, 100);
    button = createButton('Next!');
    button.size(100,40);
    button.style("font-size", "30px");
    button.position((w2 + 720), (h2 + 400)
);
    button.mousePressed(screenFive);
  }else
  {
    resetButton();
    textSize(60);
    text('The pattern was '+rightNum, 250, 290);
  }
}
 
//checks for the guess in the third level
function checkThird() {
  
  button.hide();
  const guess = input.value();
  //this adds the value in a pattern (Not addition)
  var rightNum = num1 + '' + num2 + ''+num3 + '' + num4 + '' + num5 + '' + num6 +''+num7;
  if(guess == rightNum){
    playSound.play();
    background(0,255,0);
    textSize(60);
    fill(0,0,0);
    text('Complete! You finished the game!', 155, 100);
    button = createButton('Restart!');
    button.size(100,40);
    button.style("font-size", "25px");
    button.position((w2 + 720), (h2 + 400));
    button.mousePressed(reset);
  }else{
    resetButton();
  }
  
  textSize(60);
  text('The pattern was '+rightNum, 250, 290);
}
 
//checks if the guess is correct in first level
function check() {
  button.hide();
  const guess = input.value();
  var rightNum = num1 + '' + num2 + ''+num3 + '' + num4 + '' + num5;
  if(guess == rightNum){
    playSound.play();
    background(0,255,0);
    textSize(90);
    fill(0,0,0);
    text('Correct!', 375, 100);
    button = createButton('Next!');
    button.size(100,40);
    button.style("font-size", "30px");
    button.position((w2 + 720), (h2 + 400));
    button.mousePressed(reset2);
  }else{
    resetButton();
    textSize(60);
    text('The pattern was '+rightNum, 250, 290);
  }
}
//creates a reset button that shows as incorrect
function resetButton()
{
  background(255,0,0);
  textSize(90);
  fill(0,0,0);
  text('INCORRECT', 300, 100);
  button = createButton('Reset!');
  button.size(100,34);
  button.style("font-size", "25px");
  button.position((w2 + 720), (h2 + 400));
  button.mousePressed(reset);
}
//function to reset to main menu
function reset() 
{
  rect(0, 0, 1150, 600);
  background(211,211,211);
    //removes the button and input 
    if (mouseButton == LEFT)
    {
      //hide the button and input
        button.hide();
        input.hide();
    }
  //call the first screen
  randomize();
  screenOne();
  nextOne = createButton('Next!');
  nextOne.size(100,40);
  nextOne.style("font-size", "30px");
  nextOne.position((w2 + 520), (h2 + 400));
  nextOne.mousePressed(screenTwo);
}
//function to go on next level(not a reset, too lazy to change function name)
function reset2(){
  button.hide();
  if (mouseButton == LEFT)
    {
      button.hide();
      input.hide();
    }
  screenThree();
}