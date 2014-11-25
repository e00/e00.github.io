function setup(){
  var theCanvas = createCanvas(window.innerHeight*0.8,window.innerHeight*0.8);
  theCanvas.parent("hook");
  lastlastPointx = width / 2;
  lastlastPointy = height / 2;
  lastPointx = width / 2;
  lastPointy = height / 2;
  fieldSizex = width / 6;
  fieldSizey = height / 6;
  toggle = true;
  fill(0,0,0,100);
}

function letter(fieldy, fieldx) {
  var pointx = random((fieldSizex*fieldx - fieldSizex), (fieldSizex*fieldx));
  var pointy = random((fieldSizey*fieldy - fieldSizey), (fieldSizey*fieldy));
  noStroke();
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
  if (key === ' ') {
    if (toggle === true) {
      fill(255,255,255,50);
      toggle = false;
    } else {
      fill(0,0,0,100);
      toggle = true;
    }
  } else if (key === 'a' || key === 'A') {
    letter(1,1);
  } else if (key === 'b' || key === 'B') {
    letter(1,2);
  } else if (key === 'c' || key === 'C') {
    letter(1,3);
  } else if (key === 'd' || key === 'D') {
    letter(1,4);
  } else if (key === 'e' || key === 'E') {
    letter(1,5);
  } else if (key === 'f' || key === 'F') {
    letter(1,6);
  } else if (key === 'g' || key === 'G') {
    letter(2,1);
  } else if (key === 'h' || key === 'H') {
    letter(2,2);
  } else if (key === 'i' || key === 'I') {
    letter(2,3);
  } else if (key === 'j' || key === 'J') {
    letter(2,4);
  } else if (key === 'k' || key === 'K') {
    letter(2,5);
  } else if (key === 'l' || key === 'L') {
    letter(2,6);
  } else if (key === 'm' || key === 'M') {
    letter(3,1);
  } else if (key === 'n' || key === 'N') {
    letter(3,2);
  } else if (key === 'o' || key === 'O') {
    letter(3,5);
  } else if (key === 'p' || key === 'P') {
    letter(3,6);
  } else if (key === 'q' || key === 'Q') {
    letter(4,1);
  } else if (key === 'r' || key === 'R') {
    letter(4,2);
  } else if (key === 's' || key === 'S') {
    letter(4,5);
  } else if (key === 't' || key === 'T') {
    letter(4,6);
  } else if (key === 'u' || key === 'U') {
    letter(5,1);
  } else if (key === 'v' || key === 'V') {
    letter(5,2);
  } else if (key === 'w' || key === 'W') {
    letter(5,3);
  } else if (key === 'x' || key === 'X') {
    letter(5,4);
  } else if (key === 'y' || key === 'Y') {
    letter(5,5);
  } else if (key === 'z' || key === 'Z') {
    letter(5,6);
  } else if (key === 'ä' || key === 'Ä') {
    letter(6,1);
  } else if (key === 'ö' || key === 'Ö') {
    letter(6,2);
  } else if (key === 'ü' || key === 'Ü') {
    letter(6,3);
  } else if (key === '.' || key === ':') {
    letter(6,4);
  } else if (key === '!' || key === '-') {
    letter(6,5);
  } else if (key === '?' || key === 'ß') {
    letter(6,6);
  }
}