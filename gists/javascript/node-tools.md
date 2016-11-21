## Figure out if required or run directly

```
if (!module.parent) {
    // ran with `node something.js`
    app.listen(8088, function() {
        console.log('app listening on port 8088');
    })
} else {
    // used with `require('/.something.js')`
    module.exports = app;
}
```

## Check outdates packages

`npm outdated`

## Open repo

`npm repo $package`

## Global directory change

`npm config set prefix $dir`

This could allow me to have stuff in home directory. I like this.
