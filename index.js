module.exports = function(obj) {
	var count = 0;
	var complete = 0;
	var ceiling = obj.functionArray.length - 1;
	function bsCB(num) {
		complete++;
		if(complete === ceiling) obj.completeFunction();
	}
	function call(num) {
		obj.functionArray[num](bsCB);
		count++;
		if (count <= ceiling) call(count);
	}
	call(count);
};
