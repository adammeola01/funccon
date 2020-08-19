var con = require(process.cwd() + '/index.js');
con({
	size:1,
	funcs:[
		(complete)=>{
			console.log('testing promise interface');
			setTimeout(()=>{
				complete();
			},1000)
			
		},
		(complete)=>{
			console.log('about to run "then"');
			setTimeout(()=>{
				complete();
			},1000)
			
		}
	]
}).then(()=>{
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
			console.log('done called, done');
	
	
		}
	});
	
});
