
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
