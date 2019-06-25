var con = require(process.cwd() + '/index.js');
con({
	size: 100, // number of function allowed to run simulataniously
	funcs: [ // your functions
		(complete) => {
			var counter = 0;
			var a = setInterval(function() {
				counter++;
				console.log('func 1 counter: ' + counter);
				if (counter >= 4) {
					clearInterval(a);
					complete(); // the complete function tells funccon to move on
				}
			}, 300);
        },
		(complete) => {
			var counter = 0;
			var a = setInterval(function() {
				counter++;
				console.log('func 2 counter: ' + counter);
				if (counter >= 4) {
					clearInterval(a);
					complete();
				}
			}, 300);
        },
		(complete) => {
			var counter = 0;
			var a = setInterval(function() {
				counter++;
				console.log('func 3 counter: ' + counter);
				if (counter >= 4) {
					clearInterval(a);
					complete();
				}
			}, 300);
        },
		(complete) => {
			var counter = 0;
			var a = setInterval(function() {
				counter++;
				console.log('func 4 counter: ' + counter);
				if (counter >= 4) {
					clearInterval(a);
					complete();
				}
			}, 300);
        }
    ],
	done: function() { // this fires when all the above functions are complete
		console.log('done calledfirst time');
		console.log();
		con({
			size: 1,
			funcs: [
				(complete) => {
					var counter = 0;
					var a = setInterval(function() {
						counter++;
						console.log('func 1 counter: ' + counter);
						if (counter >= 4) {
							clearInterval(a);
							complete();
						}
					}, 500);
		        },
				(complete) => {
					var counter = 0;
					var a = setInterval(function() {
						counter++;
						console.log('func 2 counter: ' + counter);
						if (counter >= 4) {
							clearInterval(a);
							complete();
						}
					}, 500);
		        },
				(complete) => {
					var counter = 0;
					var a = setInterval(function() {
						counter++;
						console.log('func 3 counter: ' + counter);
						if (counter >= 4) {
							clearInterval(a);
							complete();
						}
					}, 500);
		        },
				(complete) => {
					var counter = 0;
					var a = setInterval(function() {
						counter++;
						console.log('func 4 counter: ' + counter);
						if (counter >= 4) {
							clearInterval(a);
							complete();
						}
					}, 500);
		        }
		    ],
			done: function() {
				console.log('done called, done');
			}
		});

	}
});
