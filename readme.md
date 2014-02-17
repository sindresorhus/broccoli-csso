# [broccoli](https://github.com/joliss/broccoli)-csso [![Build Status](https://travis-ci.org/sindresorhus/broccoli-csso.png?branch=master)](https://travis-ci.org/sindresorhus/broccoli-csso)

> Minimize CSS using [CSSO](http://bem.info/tools/csso/description/)


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
