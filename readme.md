# [broccoli](https://github.com/joliss/broccoli)-csso [![Build Status](https://travis-ci.org/sindresorhus/broccoli-csso.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-csso)

> Minify CSS using [CSSO](https://github.com/css/csso)

*Issues with the output should be reported on the CSSO [issue tracker](https://github.com/css/csso/issues).*


## Install

```
$ npm install --save-dev broccoli-csso
```


## Usage

```js
const CSSO = require('broccoli-csso');
tree = new CSSO(tree, options);
```


## API

### CSSO(tree, [options])

#### options

##### restructure

Type: `boolean`<br>
Default: `true`

Structure minimization.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
