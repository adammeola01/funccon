#FuncCon (function concurrence).

##A sister package of [funcSeq](https://github.com/adammeola01/funcseq):

An old strategy for executing a function after a serious of asynchronous functions run to completion.

The "size" argument sets how many functions are allowed to run simultaniously

```javascript
var con = require(funccon);
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
					complete(1); // the complete function tells funccon to move on
								 //	Whatever you pass it will be given to the done function as an argument
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
					complete('foo');
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
					complete({
						shit: 'real'
					}, 'asfdas');
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
					complete('boom?');
				}
			}, 500);
        }
    ],
	done: function() { // this fires when all the above functions are complete
		console.log('completeFunction called, done');
		console.log();
		con({
			size: 1, // number of function allowed to run simulataniously
			funcs: [ // your functions
				(complete) => {
					var counter = 0;
					var a = setInterval(function() {
						counter++;
						console.log('func 1 counter: ' + counter);
						if (counter >= 4) {
							clearInterval(a);
							complete(1); // the complete function tells funccon to move on
										 //	Whatever you pass it will be given to the done function as an argument
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
							complete('foo');
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
							complete({
								shit: 'real'
							}, 'asfdas');
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
							complete('boom?');
						}
					}, 500);
		        }
		    ],
			done: function() { // this fires when all the above functions are complete
				console.log('completeFunction called, done');
			}
		});

	}
});

```
