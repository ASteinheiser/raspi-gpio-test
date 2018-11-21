// Test file for using the Raspberry Pi and Johnny-Five
const five = require('johnny-five');
const raspi = require('raspi-io');

// Make a new `Board()` instance and use raspi-io
const board = new five.Board({
       io: new raspi()
});

board.on('ready', function() { 
       // Digital Pin variable 
       const fire = new five.Pin({
       		id: 'fire',
       		pin: 4,
       		type: 'digital',
       		mode: 1
       }); 
       fire.query((state) => {
  		console.log(state);
	});
	fire.read((error, value) => {
		console.log(error);
  		console.log(value);
	});
});