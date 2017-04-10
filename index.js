module.exports = function(obj){
	var completed = 0;
	var ceiling = obj.functionArray.length;
	function maybeDone(){
		completed++;
		if(completed === ceiling) obj.completeFunction();
	}
	for (i=0; i<obj.functionArray.length; i++) {
		obj.functionArray[i](maybeDone);
	}
};
