let locx = 255;
let locy = 255;
let dir = 1;

function setup() {
  createCanvas(500, 500);
  frameRate(20);
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      fill(255);
      rect(x, y, 10);
    }
  }
}

function draw() {
  for (let x = 5; x < width + 5; x += 10) {
    for (let y = 5; y < height + 5; y += 10) {
       fill(red(get(x, y)));
      
      rect(x - 5, y - 5, 10);
    }
  }

  if (dir == 1) {
    locy -= 10;
  }

  if (dir == 2) {
    locx += 10;
  }

  if (dir == 3) {
    locy += 10;
  }

  if (dir == 4) {
    locx -= 10;
  }

  if (red(get(locx, locy)) > 254) {
    fill(0);
    rect(locx - 5, locy - 5, 10);
    if (dir == 1) {
      dir = 2;
    } else {
      if (dir == 2) {
        dir = 3;
      } else {
        if (dir == 3) {
          dir = 4;
        } else {
          if (dir == 4) {
            dir = 1;
          }
        }
      }
    }
  } else {
    fill(255);
    rect(locx - 5, locy - 5, 10);
    if (dir == 1) {
      dir = 4;
    } else {
      if (dir == 2) {
        dir = 1;
      } else {
        if (dir == 3) {
          dir = 2;
        } else {
          if (dir == 4) {
            dir = 3;
          }
        }
      }
    }
  }
}
