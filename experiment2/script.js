function setup() {
  createCanvas(displayWidth, displayHeight);
  background(15, 23, 42);
  noStroke();
}

function draw() {
  // 覆盖半透明背景，让旧方块自然淡出
  background(15, 23, 42, 20);

  // 鼠标移动时绘制方块糖霜
  if (mouseX !== 0 || mouseY !== 0) {
    fill(random(200, 255), random(100, 200), random(150, 255));
    
    let x = mouseX + random(-20, 20);
    let y = mouseY + random(-20, 20);
    let size = random(6, 12);
    
    // 用 square 替代 ellipse
    square(x, y, size);
  }
}