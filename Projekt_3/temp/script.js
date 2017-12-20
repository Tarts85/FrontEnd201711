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
/*
//alert ("yoman");
//algv22rtustamine
var vana = 5;
let muutuja = 5;
const konstant = 5;

//konstant = 5;
muutuja = 6;

if (true) {
    var vana = 7;
    let muutuja = 6;
    console.log(muutuja);
}

console.log(muutuja);
console.log(vana);

let [arv1,, arv3] = [17, 12, 33];
arv1 = arv3
const kass = {nimi: 'Tom',vanus: 8};
const {nimi,vanus} = kass;

const esimene = [1,2];
const teine = [3, 4];
const kombineeri = [0, ...esimene, ...teine, 5];

const vaikimisi = {toit: 'terav', hinnaklass: '$$', myratase: 'vali'};
const shokolateeria = { ...vaikimisi, toit: 'magus'};
*/
/*
//muutuja tyybid
//arvud
const decimal: number = 6;
const hex = 0x12ff26;
const binary = 0b1010;
const octal = 0o7433;
//t6ene/v22r
const eijah: boolean = true; //false
//s6na aka tekts
const string : string = 'Tere \' s6na';
const vanus = 37;
const vanusTekstis = `ta on ${vanus} aastat vana.
Ta saab ${vanus+1} aastat vanaks`;
console.log(vanusTekstis);
// massiivid
const list:number[] = [1,2,3];
console.log(`Massiivi esimene element ${list[0]}`);
list[1] = 20;

//Tuple
const punkt: [number, number] =[125,32];
const kaart: [string, number, number] =['Tallinn',125,32];

//enumeraator - loendaja

const enum V2rv{
    Punane,
    Roheline,
    Sinine
}

const v2rv =V2rv.Sinine

//suvaline hoidu sektsioonist
let suvaline:any = 'Tere';
suvaline = 'Tere';
function funk ():void {}
function funk2 ():never {while (true) {throw new Error('Viga')}}


//teisendamine
const  s6naPikkus: number = (suvaline as string).length;

let arv4: number = 12,arv5 = 13,arv6 = 14;
arv4 = 13;
*/
/*
//if,switch ja conditional
const enum Loom{Muu, Koer, Kass};
const loom = Loom.Kass

//conditional operator
const kasKass = loom === Loom.Kass ? 'On kyll kass' : 'Ei ole kass'
const kasKoer = loom === Loom.Kass ? 'On kyll kass' : (loom === Loom.Koer ? 'On kyll koer' : 'ei ole kumbki');
console.log(kasKoer);

// ===, == , !== ,!=, >=, <=
//if
if(loom === Loom.Kass) {
//kui kass
    
} else if(loom === Loom.Koer) {
// kui koer
    
} else{
// kui muu
    
}

//switch
const arv :number = 10;
switch (arv){
    case 1 :
        // kui selle arvu v22rtus on 1
        break;
    case 10:
        // kui selle arvu v22rtus on 1
        break;
    case 12:
        // kui selle arvu v22rtus on 1
        break;
}

*/
/*
//valikuline;
type Saadetis = 'saadetud' | 'saatmata' | number
let fikseerituds6num: Saadetis = 12;
fikseerituds6num = 'saadetud';
const sum = (x:number, y:number) => x+y;
const summa = sum(arv4,arv5);
*/
//tsyklid
/*
let obj :object = {vanus : 13, nimi : 'sssd',numbrid:[1,2,3,4,5]}
const massiiv2 = [1,12,3,4,5,6,7,8,9,];
for(let i = 0; i < massiiv2.length; i++) {
    const element = massiiv2[i];
    console.log(element);
}

for (const i of massiiv2) {
    console.log(i);
}

for (const key in massiiv2) {
    if (massiiv2.hasOwnProperty(key)){
        const element :number = massiiv2[key];
        console.log(element);
        };
}

massiiv2.forEach(Element => {
    console.log(Element);
});

let kasJookseb = true;
let kaugus = 0;
while(kasJookseb) {
    if(kaugus === 100){
        kasJookseb = false;
    }
    if(kaugus *20 === 111){
        break;
    }
    if(kaugus *20 === 111){
        continue;
    }
kaugus++;
}
// teeb esimese ringi igaljuhul
do {
    
} while(kasJookseb)
//l6pmatus
while(true){}

for(;;){}
*/
var arv4 = 4;
var sum = function (x, y) { return x + y; };
var sum3 = function (x, y) { return x + y; };
var summa = sum(arv4, arv4);
function sum2(x, y) {
    return x + y;
}
var summa2 = sum2(arv4, arv4);
var sum4 = function Sum4(x, y, z) {
    if (x === void 0) { x = 5; }
    if (y === void 0) { y = 6; }
    if (z)
        return x + y + z;
    else
        return x + y;
};
var summa3 = sum4(arv4);
var summa4 = sum4(23, 233, 55);
var summa5 = sum4();
var klass = /** @class */ (function () {
    function klass(parameeter) {
        if (parameeter === void 0) { parameeter = 10; }
        this._element = parameeter;
    }
    klass.prototype.getElement = function () {
        return this._element;
    };
    return klass;
}());
var instant = new klass(12);
console.log(instant.getElement());
var _this = this;
/// <reference path = 'app.ts'/>
var Helper;
(function (Helper) {
    function funk(params) {
        return params;
    }
    Helper.funk = funk;
})(Helper || (Helper = {}));
var bc = 0;
var Olend = /** @class */ (function (_super) {
    __extends(Olend, _super);
    function Olend() {
        var _this = _super.call(this, 13) || this;
        _this.link = { name: 'Home', link: 'http://www.google.com' };
        var nupp1 = document.querySelector('#nupp1');
        //        nupp1.addEventListener('click', (event: Event) => { console.log(this)});
        nupp1.addEventListener('click', _this._onClick.bind(_this));
        return _this;
    }
    Olend.prototype.getName = function () {
        Helper.funk('Olend');
        return 'Olend';
    };
    Olend.prototype.getLink = function () {
        return this.link;
    };
    Olend.prototype._onClick = function (e) {
        console.log(this.link.name);
    };
    return Olend;
}(klass));
var instant2 = new Olend();
instant2.getElement();
instant2.getName();
var nupp1 = document.querySelector('#nupp1');
var nupp2 = document.getElementsByClassName('nupp2').item(0);
var nupp3 = document.getElementById('nupp3');
nupp2.addEventListener('click', function (event) { console.log(this); });
nupp3.addEventListener('click', function (event) { console.log(_this); });
//# sourceMappingURL=script.js.map