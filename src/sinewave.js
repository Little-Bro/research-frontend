const waveSketch = function (p5) {
  // global variables
  let wave;
  let sliderP, sliderA; // sliders
  let colour, bgColour; // wave colour/background colour
  let pA, pP; // Amplitude/Period text below sliders

  p5.setup = () => {
    // settings
    p5.angleMode(p5.DEGREES);
    p5.createCanvas(400, 400);
    wave = new Wave(50, 300, 10);
    // HTML elements
    sliderP = p5.createSlider(2, 5, 3);
    sliderA = p5.createSlider(2, 100, 51);
    sliderP.position(10, 410);
    sliderA.position(200, 410);
    pA = p5.createP('amplitude');
    pP = p5.createP('période');
    pP.position(80, 425);
    pA.position(260, 425);
    // colours
    colour = p5.color(p5.random(255), p5.random(255), p5.random(255));
    bgColour = p5.color(0);
  };

  p5.draw = () => {
    p5.fill(255);
    p5.textSize(32);
    p5.background(bgColour);
    wave.period = sliderP.value();
    wave.amplitude = sliderA.value();
    p5.strokeWeight(2);
    // prevents the wave from being the same colour as the background
    colour = colour != bgColour ? colour : p5.color(255);
    p5.stroke(colour);
    p5.noFill();
    p5.beginShape();
    for (let x = 0; x < p5.width; x += 2) {
      let y = wave.calculate(x);
      p5.curveVertex(x, y + p5.height / 2);
    }
    p5.endShape();
  };

  class Wave {
    constructor(amp, pha, per) {
      this.amplitude = amp;
      this.phase = pha;
      this.period = per;
    }
    calculate(x) {
      return p5.sin(this.phase + (p5.TWO_PI * x) / this.period) * this.amplitude;
    }
  }
};

let s = new p5(waveSketch, 'sinewave');