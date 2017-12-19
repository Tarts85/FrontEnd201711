/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
console.log('main.ts');
class App {
    private _navLinks: INavLink[] = [{name:'Pealeht', link: '#home'},
                                    {name:'Gallery', link: '#gallery'},
                                    {name:'Üritus', link: '#event'}];
    
    private _page: any;
    constructor() {
        this._bindEvents();
        this._setup();
    }
    private _bindEvents(){

    }
    private _setup(){
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }   
        const nav = new Navigation(this._navLinks);
        this._urlChanged();
    }
    private _urlChanged(){
    Helper.formatEmails('at-mail', '(ät)');
    }
    private _checkParams(){

    }

}
let app = new App();