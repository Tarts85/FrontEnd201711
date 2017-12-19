/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
/// <reference path='page.ts'/>
console.log('main.ts');

class App {
        private _navLinks: INavLink[] = [
            {name: 'Pealeht', link:'#home'},
            {name: 'Gallerii', link:'#gallery'},
            {name: 'Üritus', link:'#event'}];
        private _page: any;
        
    constructor() {
        this._bindEvents();
        this._setup();
    }
    private _bindEvents() {
        
    }
    private _setup() {
        if(window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        const nav = new Navigation(this._navLinks);
        this._urlChanged();
    }
    private _urlChanged() {
        Helper.formatEmails('at-mail', '(ät)');
        this._navLinks.forEach(
        (value:INavLink) => {
                console.log("lblblblb");
            if(window.location.hash === value.link) {

                if(value.link === this._navLinks[0].link){
                    this._page = new Home();

                }
                }
            }
        );
    }
    private _checkParams() {
        
    }
}
let app = new App();