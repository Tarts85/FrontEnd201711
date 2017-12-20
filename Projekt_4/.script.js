"use strict";
var Helper;
(function (Helper) {
    console.log("helper.ts");
    //linkide loomisega
    //emaili formaadiga
    //templatede saamisega ja nende töötlusega
    Helper.getHTMLTemplate = function (file) {
        var templateHTML = 'fail';
        var xmlHttP = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4)
                $$;
            this.status === 200;
            {
                templateHTML = this.responseText;
            }
        };
        xmlHttP.open('GET', file, false);
        xmlHttP.send();
        return templateHTML;
    };
    Helper.parseHTMLString = function (target, mustache, content) {
        return target.replace(mustache, content);
    };
})(Helper || (Helper = {}));
/// <reference path='helper.ts'/>
console.log('navigation.ts');
var Navigation = /** @class */ (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('template/nav-template.html');
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innnerText;
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    Navigation.prototype._render = function () {
        var _this = this;
        var navLinks = '';
        this._navs.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value.name);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
            var setActive = (window.location.hash == value.link) ? 'active' : '';
            var parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
            navLinks += parsePass3;
        });
        this._list.innerHTML = navLinks;
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
console.log('main.ts');
var App = /** @class */ (function () {
    function App() {
        this._navLinks = [{ name: 'Pealeht', link: '#home' },
            { name: 'Gallery', link: '#gallery' },
            { name: 'Üritus', link: '#event' }];
        this._bindEvents();
        this._setup();
    }
    App.prototype.bindEvents = function () {
    };
    App.prototype.setup = function () {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        var nav = new Navigation(this._navLinks);
    };
    App.prototype._urlChanged = function () {
    };
    App.prototype._checkParams = function () {
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=.script.js.map