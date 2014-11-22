function setup(){
  var theCanvas = createCanvas(800,800);
  theCanvas.parent("hook");
  lastlastPointx = width / 2;
  lastlastPointy = height / 2;
  lastPointx = width / 2;
  lastPointy = height / 2;
  fieldSizex = width / 6;
  fieldSizey = height / 6;
}

function draw(){
}

function letter(fieldy, fieldx) {
  var pointx = random((fieldSizex*fieldx - fieldSizex), (fieldSizex*fieldx));
  var pointy = random((fieldSizey*fieldy - fieldSizey), (fieldSizey*fieldy));
  noStroke();
  fill(0,0,0,50);
  beginShape();
  vertex(pointx, pointy);
  vertex(lastPointx, lastPointy);
  vertex(lastlastPointx, lastlastPointy);
  endShape(CLOSE);
  lastlastPointx = lastPointx;
  lastlastPointy = lastPointy;
  lastPointx = pointx;
  lastPointy = pointy;
}

function keyTyped() {
  if (key === 'a') {
    letter(1,1);
  } else if (key === 'b') {
    letter(1,2);
  } else if (key === 'c') {
    letter(1,3);
  } else if (key === 'd') {
    letter(1,4);
  } else if (key === 'e') {
    letter(1,5);
  } else if (key === 'f') {
    letter(1,6);
  } else if (key === 'g') {
    letter(2,1);
  } else if (key === 'h') {
    letter(2,2);
  } else if (key === 'i') {
    letter(2,3);
  } else if (key === 'j') {
    letter(2,4);
  } else if (key === 'k') {
    letter(2,5);
  } else if (key === 'l') {
    letter(2,6);
  } else if (key === 'm') {
    letter(3,1);
  } else if (key === 'n') {
    letter(3,2);
  } else if (key === 'o') {
    letter(3,5);
  } else if (key === 'p') {
    letter(3,6);
  } else if (key === 'q') {
    letter(4,1);
  } else if (key === 'r') {
    letter(4,2);
  } else if (key === 's') {
    letter(4,5);
  } else if (key === 't') {
    letter(4,6);
  } else if (key === 'u') {
    letter(5,1);
  } else if (key === 'v') {
    letter(5,2);
  } else if (key === 'w') {
    letter(5,3);
  } else if (key === 'x') {
    letter(5,4);
  } else if (key === 'y') {
    letter(5,5);
  } else if (key === 'z') {
    letter(5,6);
  } else if (key === 'ä') {
    letter(6,1);
  } else if (key === 'ö') {
    letter(6,2);
  } else if (key === 'ü') {
    letter(6,3);
  } else if (key === '.') {
    letter(6,4);
  } else if (key === '!') {
    letter(6,5);
  } else if (key === 'ß') {
    letter(6,6);
  }
  return false;
}