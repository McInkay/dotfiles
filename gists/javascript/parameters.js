/*
 * Throws an error if we don't have the specific parameters
 */

const _err = function( message ){
 throw new Error( message );
}

const getSum = function (a = _err('a is not defined'), b = _err('b is not defined')) {
  return a + b;
}

getSum( 10 ) // throws Error, b is not defined
getSum( undefined, 10 ) // throws Error, a is not defined

/*
 * Pass parameters to callback
 */
 
function callback(a, b) {
 return function() {
  console.log('sum = ', (a+b));
 }
}

var x = 1, y = 2;
document.getElementById('someelem').addEventListener('click', callback(x, y));

// Or with bind

var alertText = function(text) {
  alert(text);
};

document.getElementById('someelem').addEventListener('click', alertText.bind(this, 'hello'));
