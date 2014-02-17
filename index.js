'use strict';
var Filter = require('broccoli-filter');
var csso = require('csso');

function CssoFilter(inputTree, options) {
	if (!(this instanceof CssoFilter)) {
		return new CssoFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

CssoFilter.prototype = Object.create(Filter.prototype);
CssoFilter.prototype.constructor = CssoFilter;

CssoFilter.prototype.extensions = ['css'];
CssoFilter.prototype.targetExtension = 'css';

CssoFilter.prototype.processString = function (str) {
	return csso.justDoIt(str, this.options.restructure);
};

module.exports = CssoFilter;
