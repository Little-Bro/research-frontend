const circleSketch = (p5) => {
  // global variables
  let y;
  let maxHeight;
  let descriptionText;

  p5.setup = () => {
    p5.createCanvas(400,400);
  };

  p5.draw = () => {
    p5.background(255);

    // get button value from localStorage
    buttonValue = localStorage.getItem('butt1');
    if (buttonValue > 1000) {
      p5.fill(0, 255, 0);
    } else {
      p5.fill(255, 0, 0);
    }

    // draw circle
    p5.noStroke();
    p5.ellipse(p5.width / 2, p5.height / 2, 100);

  };
};

let s4 = new p5(circleSketch, 'circle');