// var ArduinoFirmata = require(__dirname+'/../');
var ArduinoFirmata = require('arduino-firmata');
var LindaClient = require('linda').Client;
var socket = require('socket.io-client').connect('http://linda-server.herokuapp.com');
var linda = new LindaClient().connect(socket);
var ts = linda.tuplespace('ami');
var arduino = new ArduinoFirmata().connect('/dev/cu.usbmodem14111');

linda.io.on('connect', function() {
	console.log("connect");
});

linda.io.on('disconnect', function() {
	console.log("disconnect");
});

arduino.on('connect', function(){
  console.log("connect!! "+arduino.serialport_name);
  console.log("board version: "+arduino.boardVersion);

  setInterval(function(){
    var an = arduino.analogRead(0);

    ts.write({
    	type: "sensor",
      	name: "ikea",
      	value: an
    });

    console.log(an);
  }, 1000);
});

// ts.watch
