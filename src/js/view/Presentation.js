/**
 * A html presentation component.
 *
 * Because Presentation is very simple and has no rendering logic,
 * you must extend it and implement own rendering logics.
 */
 function Presentation(elem) {
    this.control = null;
    this.elem = elem;
 }

 Presentation.prototype.initialize = function(control) {
    this.control = control;
 }

Presentation.prototype.getById = function(id) {
    return this.elem.getElementById(id);
}

Presentation.prototype.query = function(query) {
    return this.elem.querySelector(query);
}

Presentation.prototype.queryAll = function(query) {
    return this.elem.querySelectorAll(query);
}

Presentation.prototype.forEachNode = function(nodeList, func) {
    Array.prototype.slice.call(nodeList).forEach(func, this);
}