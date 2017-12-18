
console.log('navigation.ts');
interface INavLink {
    name: string;
    link: string;
}
class Navigation {
    private _navs:INavLink[];
    private _template: string;
    private _microTemplate: string;
    private _navModule: HTMLElement;
    private _list: HTMLUListElement;

    constructor(navs: INavLink[]) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    private _cacheDOM() {

    }
    private _bindEvents() {

    }
    private _render() {

    }
    private _urlChanged(e) {
        this._render();
    }
}