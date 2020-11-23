const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;
let img;
 
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
  textFont('Georgia')
  textSize(50)
  img = loadImage('imgs/beQuick.jpg')
  
  
  img1 = loadImage('imgs/minderFinder.jpg')
  
  
  img2 = loadImage('imgs/reaction.jpg')
  
  c1 = color(188,178,255)
  c2 = color(189,211,255)
  setGradient(0, 0, 1150, 600, c1, c2, 1) 
}
 
 
function draw() {
 
  //title
  stroke(0);
  strokeWeight(4);
  fill('white')
  rect(378,35, 400, 100, 20);
  
  strokeWeight(0);
  fill('black')
  textSize(50);
  text('Remedy Clicker',400,100);
  
 
//react  
  stroke(0);
  strokeWeight(4);
  fill('white')
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
  fill('white')
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
  fill('white')
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

