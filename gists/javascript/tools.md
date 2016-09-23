# A number of tools that are useful for JS development

## Time something

```
function time(desc, func) {
  console.time(desc);
  func();
  console.timeEnd(desc);
}
```

Example:

```
function arrayInitialise() {
  var arr = new Array(100),
      len = arr.length,
      i;
  
  for (i = 0; i < len; i++) {
      arr[i] = new Object();
  };
}

time("Array initialise", arrayInitialise); // Outputs: Array initialize: 0.711ms
```

## Promise sideeffect while still sending on the result

```
const sideEffect = fn => d => {
  fn(d)
  return d;
};
```

Example:

```
getReposForUser('ColinEberhardt')
  .then(sideEffect(repos => console.log(`repos returned ${repos.length}`)))
  .then(getRepoWithMostStargazers)
  .then(console.log)
```

## Throw an error if we don't have parameter

```

const _err = function( message ){
 throw new Error( message );
}

const getSum = function (a = _err('a is not defined'), b = _err('b is not defined')) {
  return a + b;
}

getSum( 10 ) // throws Error, b is not defined
getSum( undefined, 10 ) // throws Error, a is not defined

```


## Pass parameters to function that is a parameter itself

```

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

```