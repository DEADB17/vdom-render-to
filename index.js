'use strict';

var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


module.exports = function (domElement) {
    return function (tree) {
        var element = createElement(tree);
        domElement.parentElement.replaceChild(element, domElement);
        return function update(newTree) {
            element = patch(element, diff(tree, newTree));
            tree = newTree;
            return update;
        };
    };
};
