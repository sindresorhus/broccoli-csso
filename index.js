'use strict';
var Filter = require('broccoli-filter');
var csso = require('csso');

function CssoFilter(inputTree, options) {
	if (!(this instanceof CssoFilter)) {
		return new CssoFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};
}

CssoFilter.prototype = Object.create(Filter.prototype);
CssoFilter.prototype.constructor = CssoFilter;

CssoFilter.prototype.extensions = ['css'];
CssoFilter.prototype.targetExtension = 'css';

CssoFilter.prototype.processString = function (str) {
	return csso.minify(str, this.options).css;
};

module.exports = CssoFilter;
