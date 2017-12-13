'use strict';
/* Algväärtustamine */
console.log('Hello TS');
var vana = 5;
let muutuja = 5;
const konstant = 5;
 // konstant = 5;
muutuja = 5;
if (true) {
    var vana = 6;
    let muutuja = 6;
    console.log(muutuja);
}
console.log(vana);
console.log(muutuja);

const [arv1, , arv3] = [17,12,33];
arv1 =arv3;
const kass = {nimi:'Tom', vanus:8};
const {nimi,vanus} = kass;

const esimene = [1,2];
const teine = [3,4];
const kombineeri = [0, ...esimene, ...teine, 5];

const vaikimisi ={ toit:'terav', hinnaklass:'$$', myratase: 'vali'};
const shokolateeria = { ...vaikimisi, toit: 'magus'}

/* Muutuja tüübid */
// arvud
const decimal: number = 6;
const hex = 0x12ff26;
const binaar = 0b1010;
const octal = 0o7433;
// tõeväärtused
const eijah: boolean = true; // false
// Sõne ehk tekst
const string: string = 'Tere \' sõne';
const vanus = 37;
const vanusTekstis = `Ta on ${vanus} aastat vana.
Ta saab ${vanus + 1} aastat vanaks.`;
console.log(vanusTekstis);
//Massiivid
const list: number[]=[1,2,3];
console.log(`Massiivi esimene element ${list[0]}`);
list[1]=20;
//Tuple
const punkt: [number,number] = [125,32];
const asukoht: [string,number,number] ='Tallinn', 125, 32];
//Enumeraator-loendaja
enum V2rv{
    Punane,
    Roheline,
    Sinine
}
const V2rv = V2rv.Sinine;
//Suvaline- hoidu sektsioonist
let suvaline: any = 'Tere';
suvaline = 'Tere';
function funk() :void {}
function funk2() :never { while (true){throw Error'Viga!';}}

//Teisendamine
const s6napikkus:number = (suvaline as string).length;

//Valikuline
type Saadetis = 'Saadetud'| 'Saatmata'| number;
let fikseeritudS6num: Saadetis = 12;
fikseeritudS6num = 'Saadetud';

let arv4: number = 12, arv5 = 13, arv6 = 14;
arv4 = 13;
