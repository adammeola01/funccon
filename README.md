#FuncCon (function concurrence).

##A sister package of [funcSeq](https://github.com/adammeola01/funcseq): 

An old strategy for executing a function after a serious of asynchronous functions run to completion.

```javascript
const con = require('funccon');

con({functionArray, completeFunction});
```
<br/>
```javascript
con({
	functionArray: [
		function(complete) {
			var counter = 0;
			var a = setInterval(function(){
				counter++;
				console.log('function 1 counter = '+counter);
				if(counter >= 10){
					clearInterval(a);
					complete();
				}
			},100);
		},
		function(complete) {
			var counter = 0;
			var a = setInterval(function(){
				counter++;
				console.log('function 2 counter = '+counter);
				if(counter >= 10){
					clearInterval(a);
					complete();
				}
			},100);
		},
		function(complete) {
			var counter = 0;
			var a = setInterval(function(){
				counter++;
				console.log('function 3 counter = '+counter);
				if(counter >= 10){
					clearInterval(a);
					complete();
				}
			},100);
		
		}
	],
	completeFunction:function(){
		console.log('completeFunction called, done');
	}
});
```