const _ = require('lodash');

module.exports = (obj) => {
	var complete = 0;
	var running = 0;
	var started = 0;
	var args = [];
	if(!obj.size) obj.size = Infinity;
	function bsCB() {
		running--;
		complete++;
		if(running < obj.size && started < obj.funcs.length){
			call(started);
		}
		else if(complete === obj.funcs.length){
			obj.done(args);
		}

	}

	function call(num) {
		running++;
		started++;
		obj.funcs[num](function() {
			var arr = Object.keys(arguments);
			for (i=0; i<arr.length; i++) {
				args.push(arguments[arr[i]]);
			}
			bsCB();
		});
	}
	for (i=0; i<obj.funcs.length; i++) {
		call(i);
		if ((i+1) >= obj.size) break;
	}
};
