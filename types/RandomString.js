var BrigModule = require('brig-module');

var proto = module.exports = new BrigModule.TypePrototype('RandomString');
proto.defineProperty('value', '');
proto.on('instance-created', function(instance) {

	// Change value every 100 milliseconds
	setInterval(function() {
		instance.setProperty('value', Date.now().toString());
	}, 100);
});
