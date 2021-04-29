const listenerSketch = (p) => {
  localStorage.clear(); // I don't really know if I have to do this but eh 
  
  let serial;
  
  p.setup = () => {
    // Instantiate our SerialPort object
    serial = new p5.SerialPort();

    // Assuming our Arduino is connected, let's open the connection to it
    // Change this to the name of your arduino's serial port
    serial.open("/dev/ttyACM0");

    // When we connect to the underlying server
    serial.on('connected', serverConnected);

    // When we some data from the serial port
    serial.on('data', gotData);

    // When or if we get an error
    serial.on('error', gotError);

    // When our serial port is opened and ready for read/write
    serial.on('open', gotOpen);
  };

  // We are connected and ready to go
  function serverConnected() {
      console.log("We are connected!");
  }

  // Connected to our serial device
  function gotOpen() {
    console.log("Serial Port is open!");
  }

  // Ut oh, here is an error, let's log it
  function gotError(theerror) {
    console.log(theerror);
  }

  // There is data available to work with from the serial port
  function gotData() {
    let currentString = serial.readStringUntil("\r\n");

    if (currentString) {
      let serial_inputs = currentString.split('/');
      let val1 = serial_inputs[0]; // first potentiometer
      let val2 = serial_inputs[1]; // second potentiometer
      // placing data in localStorage 
      // this is where the other skecthes will fetch the values
      localStorage.setItem('pot1', val1);
      localStorage.setItem('pot2', val2);
    } 
  }
};

let s3 = new p5(listenerSketch, 'sinewave');