/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
/// <reference path='page.ts'/>
/// <reference path='home.ts'/>
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
        this._urlChanged();
    }
    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }
    private _setup() {
        if(window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        const nav = new Navigation(this._navLinks);
        this._checkParams();
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

                }else if(value.link === this._navLinks[2].link){
                    this._page = new EventPage();
                    }
                }
            }
        );
    }
    private _checkParams() {
        const name = Helper.getParameterByName('name');
        const joined = Helper.getParameterByName('joined');
        if(name && joined) {
            Helper.removeParams();
            let people: IParticipant[] = JSON.parse(localStorage.getItem('people'));
            if(!people) {
                people = [];
            }
            const person: IParticipant = {name,joined};  
            people.push(person);
            console.log(people);
            localStorage.setItem('people', JSON.stringify(people));
        }
    }
}
let app = new App();