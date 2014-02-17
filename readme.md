# [broccoli](https://github.com/joliss/broccoli)-csso [![Build Status](https://travis-ci.org/sindresorhus/broccoli-csso.png?branch=master)](https://travis-ci.org/sindresorhus/broccoli-csso)

> Minify CSS using [CSSO](http://bem.info/tools/csso/description/)

*Issues with the output should be reported on the CSSO [issue tracker](https://github.com/css/csso/issues).*


## Install

```
npm install --save broccoli-csso
```


## Example

```js
var csso = require('broccoli-csso');
tree = csso(tree, options);
```


## API

### csso(tree, options)

#### options

##### restructure

Type: `Boolean`  
Default: `true`

Structure minimization.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
