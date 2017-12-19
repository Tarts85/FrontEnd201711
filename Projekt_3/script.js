"use strict";
var Helper;
(function (Helper) {
    console.log('helper.ts');
    // linkide loomine
    // emaili formaadiga 
    // templatede saamisega ja nende töötlusega
    Helper.formatEmails = function (className, splitter) {
        var emails = document.getElementsByClassName(className);
        for (var i = 0; i < emails.length; ++i) {
            var emailParts = emails.item(i).innerHTML.split(splitter);
            var email = emailParts[0] + "@" + emailParts[1];
            var link = "<a href=\"mailto:" + email + "\">" + email + "</a>";
            emails.item(i).outerHTML = link;
        }
    };
    Helper.getHTMLTemplate = function (file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    };
    Helper.parseHTMLString = function (target, mustache, content) {
        return target.replace(mustache, content);
    };
})(Helper || (Helper = {}));
console.log('navigation.ts');
var Navigation = /** @class */ (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/nav-template.html');
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
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
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.name);
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
        this._navLinks = [
            { name: 'Pealeht', link: '#home' },
            { name: 'Gallerii', link: '#gallery' },
            { name: 'Üritus', link: '#event' }
        ];
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
    };
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            window.location.hash === this._navLinks[0].link;
        }
        var nav = new Navigation(this._navLinks);
        this._urlChanged();
    };
    App.prototype._urlChanged = function () {
        Helper.formatEmails('at-mail', '(ät)');
    };
    App.prototype._checkParams = function () {
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=script.js.map