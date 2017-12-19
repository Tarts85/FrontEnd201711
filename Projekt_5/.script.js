"use strict";
console.log('main.ts');
var App = /** @class */ (function () {
    function App() {
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
    };
    App.prototype._setup = function () {
    };
    App.prototype._urlChanged = function () {
    };
    App.prototype._checkParams = function () {
    };
    return App;
}());
var app = new App();
console.log('navigation.ts');
var Navigation = /** @class */ (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
    };
    Navigation.prototype._bindEvents = function () {
    };
    Navigation.prototype._render = function () {
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
//# sourceMappingURL=.script.js.map