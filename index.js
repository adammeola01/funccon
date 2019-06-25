let running = 0;
let complete = false;
let newObj = {};
const callNext = (next) => {
	next++;
	if (!newObj.funcs[next]) {
		if (!running && !complete){
			newObj.done();
			complete = true;
		}
	} else {
		running++;
		newObj.funcs[next]((arg) => {
			running--;
			setTimeout(()=>{
				callNext(next, newObj);
			}, 8);
		});
	}
};
module.exports = (obj) => {
	newObj = obj;
	for (i = 0; i < obj.funcs.length; i++) {
		callNext(i);
		if (i + 1 == obj.size) break;
	}
};
