'use strict';
const Filter = require('broccoli-filter');
const csso = require('csso');

module.exports = class extends Filter {
	constructor(inputTree, options) {
		super(inputTree);
		this.inputTree = inputTree;
		this.options = options || {};
	}

	get extensions() {
		return ['css'];
	}

	get targetExtension() {
		return 'css';
	}

	processString(text) {
		return csso.minify(text, this.options).css;
	}
};
