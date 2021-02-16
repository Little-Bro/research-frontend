const barSketch = (p5) => {
  // global variables
  let y;
  let maxHeight;
  let descriptionText;

  p5.setup = () => {
    p5.createCanvas(400, 400);
    maxHeight = -250;
    y = 0;
    descriptionText = p5.createP("Appuyez sur les touches 🔼 et 🔽", 0, 450);
    descriptionText.position(80, 410);
  };

  p5.draw = () => {
    p5.background(55);

    // constraining height of rectangle
    y = p5.constrain(y, maxHeight, 0);

    // drawing rectangle
    let red = p5.map(y, maxHeight, 0, 0, 255);
    let green = p5.map(y, maxHeight, 0, 255, 0);
    p5.fill(red, green, 0);
    p5.noStroke();
    p5.rect(p5.width / 2 - 25, p5.height - 30, 50, y);

    // user input
    if (p5.keyIsDown(p5.UP_ARROW)) {
      y -= 5;
    } else if (p5.keyIsDown(p5.DOWN_ARROW)) {
      y += 5;
    }
  };
};

let s2 = new p5(barSketch, 'bar');