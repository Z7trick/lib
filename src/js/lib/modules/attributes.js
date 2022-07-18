import $ from '../core';

$.prototype.setAttr = function (name, value = '') {
	if (!name) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(name, value);
	}
	return this;
};
$.prototype.removeAttr = function (name) {
	if (!name) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(name);
	}
	return this;
};
