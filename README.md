# FuncCon
## (function concurrence)
<hr/>
An old strategy for executing a function after a serious of asynchronous functions run to completion.

...which can also be used to make things run in sequnce, by setting the size aregument to 1

The "size" argument sets how many functions are allowed to run simultaniously
<hr/><br/>



<blockquote>
    <br/>release notes:
    <br/><br/>
    <blockquote>
        <br/>
        6.0.0:
		<br/>
		<br/>
        <blockquote>
            <br/>
            
- promise interface added<br/><br/>
    - ```done: () = >{}``` is still supported, but now optional<br/><br/>
    - 
        ```javascript
        con({
            size: numberOfFunctionsAllowedToRunAtOnce,
            funcs: arrayOfYourFunctions
        }).then(()=>{
            // next step here
        });
        ```
    - OR<br/><br/>
    - 
        ```javascript
        con({
            size: numberOfFunctionsAllowedToRunAtOnce,
            funcs: arrayOfYourFunctions
            done: ()=>{
                // next step here
            }
        });
        ```
        <br/>
        </blockquote>
        <br/>
        <br/>
    </blockquote>
    <br/>
    <br/>

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
</blockquote><br/>
Inline versions available is es5 and es6 at:  <a href="https://www.adammeola.com/wk/index.php/Js/funccon">https://www.adammeola.com/wk/index.php/Js/funccon</a>
