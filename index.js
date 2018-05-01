module.exports = (obj) => {
	let next = 0;
	let running = 0;
	let complete = false;
	var callNext = () => {
		next++;
		if (!obj.funcs[next]) {
			if (!running && !complete){
				obj.done();
				complete = true;
			}
		} else {
		running++;
			obj.funcs[next]((arg) => {
				running--;
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
