#include <MCP3008.h>

// define pin connections
#define CS_PIN 12
#define CLOCK_PIN 9
#define MOSI_PIN 11
#define MISO_PIN 10

// put pins inside MCP3008 constructor
MCP3008 adc(CLOCK_PIN, MOSI_PIN, MISO_PIN, CS_PIN);

void setup() {
 // open serial port
 Serial.begin(9600);
  
}


void loop() {
  int val1 = adc.readADC(0); // read channel 0 from ADC
  int val2 = adc.readADC(1); // read channel 1 from ADC
  Serial.print(val1);
  Serial.print("/");
  Serial.println(val2);
}