const waveSketch = function (p5) {
  let wave;
  let colour, bgColour;

  p5.setup = () => {
    p5.angleMode(p5.DEGREES);
    p5.createCanvas(400, 400);
    wave = new Wave(50, 300, 10);
    colour = p5.color(p5.random(255), p5.random(255), p5.random(255));
    bgColour = p5.color(0);
  };

  p5.draw = () => {
    p5.fill(255);
    p5.textSize(32);
    p5.background(bgColour);
    
    // get potentiometer data from localStorage
    amp = localStorage.getItem('pot1');
    per = localStorage.getItem('pot2');

    // map data
    amp = p5.map(amp, 0, 1023, 2, 100);
    per = p5.map(per, 0, 1023, 2, 5);

    // set data
    wave.amplitude = amp;
    wave.period = per;

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