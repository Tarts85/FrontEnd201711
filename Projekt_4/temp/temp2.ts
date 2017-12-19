/// <reference path='app.ts' />
interface INavLink {
    name: string;
    link: string;
}
namespace Helper {
    export function funk (params:string) {
        return params;
    }
}

const bc = 0;
class Olend extends klass {
    link : INavLink;
    constructor() {
        super(13); 
        this.link =  {name: 'Home', link:'http://..'};
        const nupp1 = document.querySelector('#nupp1') as HTMLButtonElement;
        nupp1.addEventListener('click' ,this._onClick.bind(this));
        
    }
    getName(){
        Helper.funk('Olend');
        return 'Olend';
    }
    getLink() {
        return this.link;
    }
    private _onClick(e:Event){
        console.log(this.link.name);
    }
}

const instant2 = new Olend();
instant2.getElement();
instant2.getName();

const nupp1 = document.querySelector('#nupp1') as HTMLButtonElement;
const nupp2 = document.getElementsByClassName('nupp2').item(0) as HTMLButtonElement;
const nupp3 = document.getElementById('nupp3') as HTMLButtonElement;

nupp2.addEventListener('click' , function(event: Event){console.log(this); });
nupp3.addEventListener('click' , (event: Event) => {console.log(this); });