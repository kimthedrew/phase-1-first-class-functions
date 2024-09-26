function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function (){ return 30 });

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function.")
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
   return function() {
    console.log("This is an anonymous function")
};
}