// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print,print_input_delimiter
// ==/ClosureCompiler==
//  https://closure-compiler.appspot.com
//  (a) => {  ----- function(a){
//  var  ----- let
module.exports = (obj) => {
    return new Promise((resolve, reject) => {
        let next = -1;
        let running = 0;
        let complete = false;
        var callNext = () => {
            next++;
            if (!obj.funcs[next]) {
                if (!running && !complete) {
                    if (obj.hasOwnProperty('done')) obj.done();
                    resolve();
                    complete = true;
                    setTimeout(() => {
                        obj = running = complete = null;
                    }, 8);
                }
            } else {
                running++;
                obj.funcs[next]((arg) => {
                    running--;
                    setTimeout(callNext, 8);
                });
            }
        };
        for (let i = 0; i < obj.size; i++) callNext(i);
    });
};