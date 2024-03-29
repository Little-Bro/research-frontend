# research-frontend
Web interface for my research project (internship) 

## frameworks

Skeleton : http://getskeleton.com/  
(simple CSS boilerplate)  

p5.js : https://p5js.org/  
(open-source js library I use for drawing UI elements)

## how to use 

My setup is described here : https://pdfhost.io/v/qc9GRLaLq_SPI_Arduinopdf.pdf (it's in French, and so is the web page).  
You will need an Arduino UNO, two potentiometers and the MCP3008 ADC. 
Compile and upload the pot_sketch.ino file to your Arduino (if you open the serial monitor in the Arduino IDE, you should see the potentiometer values serparated by a "/").  

clone the p5.serialport repo : https://github.com/p5-serial/p5.serialport  
npm install in that directory  
sudo node startserver.js  
This shoud start up the server that'll read the serial data coming in from your Arduino.  

Open up the index.html file with your browser and click on 'Interface' in the top left corner.
Play with the potentiometers, you should see the sinewave amplitude and period change in real time.  

![photoSPI](https://user-images.githubusercontent.com/22426678/116568299-a9e32400-a908-11eb-8519-f616e32d5aca.png)
