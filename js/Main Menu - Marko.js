const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;
let img;
var a;
var b;
var a1 = 0;
var a2 = 0;
var b1 = 0;
var b2 = 0;
var d1 = 0;
var d2 = 0;

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
 
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
    
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
 
function setup() {
  var cnv = createCanvas(1150, 600);
  var w = (windowWidth - width) / 2;
  var h = (windowHeight - height) / 2;
  cnv.position(w, h);
  textFont('Georgia');
  textSize(50);
  img = loadImage('imgs/beQuick.jpg');
  
  
  img1 = loadImage('imgs/minderFinder.jpg');
  
  
  img2 = loadImage('imgs/reaction.jpg');
  
}
 
 
function draw() {
	
  a = mouseX/25;
  b = mouseY/25;
	
  c1 = color(188 + a,178 + a,255);
  c2 = color(189 + b,211 + b,255);
  setGradient(0, 0, 1150, 600, c1, c2, 1);
 
  buttonColor();
 
  //title
  stroke(0);
  strokeWeight(4);
  fill(255, 255, 255);
  rect(378,35, 400, 100, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(50);
  text('Remedy Clicker',400,100);
  
 
//react  
  stroke(0);
  strokeWeight(4);
  fill(255 - b1, 255 - b2, 255);
  rect(112,426, 170, 120, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(40);
  text('React',145,500);
  
  stroke(0);
  strokeWeight(10);
  rect(100,200,190,190)
  image(img2, 100,200,190,190)
  
 //minder finder  
  stroke(0);
  strokeWeight(4);
  fill(255 - d1, 255 - d2, 255);
  rect(475,426, 170, 120, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(40);
  text('Minder',495,485);
  text('Finder',497,525);
  
  stroke(0);
  strokeWeight(10);
  rect(460,200,190,190)
  image(img1,460,200,190,190)
  
//be quick
  stroke(0);
  strokeWeight(4);
  fill(255 - a1, 255 - a2, 255);
  rect(840,426, 170, 120, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(40);
  text('Be Quick',845,500);
  
  stroke(0);
  strokeWeight(10);
  rect(825,200,200,190)
  image(img, 825,200,200,190)
  
}

function mouseClicked()
{
	if ( (mouseX > 112) && (mouseX < 282) && (mouseY > 426) && (mouseY < 546) )
	{
		window.location.href = "Reaction Time.html";
	}
	
	else if ( (mouseX > 475) && (mouseX < 645) && (mouseY > 426) && (mouseY < 546) )
	{
		window.location.href = "Minder Finder.html";
	}
	
	else if ( (mouseX > 840) && (mouseX < 1010) && (mouseY > 426) && (mouseY < 546) )
	{
		window.location.href = "Be Quick.html";
	}
	
}

function buttonColor()
{
	if ( (mouseX > 112) && (mouseX < 282) && (mouseY > 426) && (mouseY < 546) )
	{
		b1 = 67;
		b2 = 77;
	}
	
	else if ( (mouseX > 475) && (mouseX < 645) && (mouseY > 426) && (mouseY < 546) )
	{
		d1 = 67;
		d2 = 77;
	}
	
	else if ( (mouseX > 840) && (mouseX < 1010) && (mouseY > 426) && (mouseY < 546) )
	{
		a1 = 67;
		a2 = 77;
	}
	
	else
	{
		a1 = 0;
		a2 = 0;
		b1 = 0;
		b2 = 0;
		d1 = 0;
		d2 = 0;
	}
}







