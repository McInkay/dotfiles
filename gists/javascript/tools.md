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
