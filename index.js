const _ = require('lodash');
module.exports = (obj) => {
	var args = {arr:[]};
	var next = 0;
	var running = 0;
	var callNext = () => {
		next++;
		if (!obj.funcs[next]) {
			if (!running){
				obj.done(args);
				process.exit();
			}
		} else {
		running++;
			obj.funcs[next]((arg) => {
				running--;
				if(typeof arg === 'string') args.arr.push(arg);
				else args = _.merge(args, arg);
				callNext(next);
			});
		}
	};
	next = -1;
	for (i = 0; i < obj.funcs.length; i++) {
		callNext(i);
		if (i + 1 == obj.size) break;
	}
};
