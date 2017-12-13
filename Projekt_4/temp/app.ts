'use strict';
/* algväärtustamine */
//alert("hello");
console.log('hello TS');

var vana= 5;
let muutuja = 5;
const konstant = 5;

//konstant = 5;
muutuja = 5;

if(true) {
    var vana = 6;
    let muutuja = 6;
    //muutuja ="ddfjf"
    console.log(muutuja);
}
console.log(vana);
console.log(muutuja);

let [arv1, arv2, arv3] = [12,12,33];
arv1 = arv3;
const kass ={nimi: 'Tom', vanus: 8};
const {nimi, vanus} = kass;


const esimene = [1,2];
const teine =[3,4];
const kombineeri =[0,...esimene, ...teine, 5];

const vaikimisi ={toit:'terav', hinnaklass: '$$', myratase: 'vali'};
const shokolateeria = {...vaikimisi, toit: 'magus',};



/*Muutuja tüübid */
//arvud
const decimal: number = 6;
const hex = 0x12ff26;
const binary = 0x12ff26;
const octal = 0o7433;


//tõene või väär
var eijah: boolean = true; // false


//Sõne aka tekst
const string: string = 'Tere \'sõne';
const vanus1 = 37;
const vanusTekstis = 'Ta on "${vanus} aastat vana. Ta saab ${vanus+1} aastat vanaks.';
console.log(vanusTekstis);


//Massiivid
const list: number[] = [1,2,3];
console.log('Massiivi esimene element ${list[0]}');
list[1] = 20;


//Tuple
const punkt: [number, number] =[123, 32];
const kaart: [string, number, number] =['Tallinn', 123, 32];


//Enumeraator - loendaja
enum V2rv{
    Punane,
    Roheline,
    Sinine =10
}
const v2rv = V2rv.Sinine;


//suvaline
let suvaline: any = 'Tere'; //hoidu sektstioonist
suvaline = 'Tere';
function funk():void{}
function funk2():never{while (true) {throw new Error('viga');} }


//Teisendamine
const sõnepikkus: number = (suvaline as string).length;


//Valikuline
type Saadetis = 'Saadetud' | 'Saatmata' | number
let fikseerituds6num: Saadetis = 12;
fikseerituds6num = 'Saadetud';
//fikseerituds6num ='ssdfrf';

let arv14: number = 12, arv5 = 13, arv6 =14
arv1 = 13;



const sum = (x:number, y:number)=>x+y
const summa = sum(arv, arv);


