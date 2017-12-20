"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper;
(function (Helper) {
    console.log("helper.ts");
    // linkide loomisega
    // emaili formaadiga
    Helper.formatEmails = function (className, splitter) {
        var emails = document.getElementsByClassName(className);
        for (var index = 0; index < emails.length; ++index) {
            var emailParts = emails.item(index).innerHTML.split(splitter);
            var email = emailParts[0] + "@" + emailParts[1];
            var link = "<a href=\"mailto:" + email + "\">" + email + "</a>";
            emails.item(index).outerHTML = link;
        }
    };
    // templatede saamisega ja nende töötlusega
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
/// <reference path='helper.ts'/>
console.log('animal.ts');
var Animals = /** @class */ (function () {
    function Animals() {
        this._animals = ['Karu', 'Kass', 'Hunt'];
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Animals.prototype._cacheDOM = function () {
        this._microTemplate = Helper.getHTMLTemplate('templates/animal-template.html');
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.querySelector('.button');
        this._input = this._animalsModule.querySelector('input');
        this._list = this._animalsModule.querySelector('ul');
    };
    Animals.prototype._bindEvents = function () {
        this._button.addEventListener('click', this.addAnimal.bind(this));
        //this._list.addEventListener('click', this._removeAnimal.bind(this));
    };
    Animals.prototype._render = function () {
        var _this = this;
        var animals = '';
        this._animals.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value);
            animals += parsePass1;
        });
        this._list.innerHTML = animals;
    };
    Animals.prototype.showAnimals = function () {
        console.log(this._animals);
    };
    Animals.prototype.addAnimal = function (name) {
        var animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName);
        this._render();
    };
    return Animals;
}());
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
console.log("page.ts");
var Page = /** @class */ (function () {
    function Page() {
        // tyhi
    }
    Page.prototype._cacheDOM = function () {
        // tyhi
    };
    Page.prototype._bindEvents = function () {
        // tyhi
    };
    Page.prototype._render = function () {
        // tyhi
    };
    return Page;
}());
/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
/// <reference path='page.ts'/>
console.log('home.ts');
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Home.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/home-template.html');
        this._homeModule = document.querySelector('main');
        this._homeModule.outerHTML = this._template;
        this._homeModule = document.getElementById('home');
        this._button = this._homeModule.querySelector('#refresh');
        this._text = this._homeModule.querySelector('#restOutput');
        var animals = new Animals();
        this._refresh();
    };
    Home.prototype._bindEvents = function () {
        this._button.addEventListener('click', this._refresh.bind(this));
    };
    Home.prototype._render = function () {
        this._text.innerHTML = "Id: " + this._restJSON.id + " Sisu: " + this._restJSON.content;
    };
    Home.prototype._refresh = function () {
        var restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting');
        this._restJSON = JSON.parse(restAnswer);
        this._render();
    };
    return Home;
}(Page));
/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
/// <reference path='page.ts'/>
/// <reference path='home.ts'/>
console.log('main.ts');
var App = /** @class */ (function () {
    function App() {
        this._navLinks = [{ name: 'Pealeht', link: '#home' },
            { name: 'Galerii', link: '#gallery' },
            { name: 'Üritus', link: '#event' }];
        this._bindEvents();
        this._setup();
    }
    App.prototype._bindEvents = function () {
    };
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        console.log('setup');
        var nav = new Navigation(this._navLinks);
        this._urlChanged();
    };
    App.prototype._urlChanged = function () {
        var _this = this;
        Helper.formatEmails('at-mail', '(ät)');
        this._navLinks.forEach(function (value) {
            if (window.location.hash === value.link) {
                if (value.link === _this._navLinks[0].link) {
                    _this._page = new Home();
                }
            }
        });
    };
    App.prototype._checkParams = function () {
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=app.js.map