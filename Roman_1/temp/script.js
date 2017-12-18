'use strict';
/* Algväärtustamine */
/*var vana = 5;
let muutuja = 5;
const konstant = 5;
// konstant = 5;
muutuja = 5;

if (true) {
    var vana = 6;
    let muutuja = 6;
    //muutuja = "ddfjf";
    console.log(muutuja);
}
console.log(vana);
console.log(muutuja);

let [arv1, , arv3] = [17,12,33];
arv1 = arv3;

const kass = {nimi: 'Tom', vanus: 8};
const {nimi, vanus} = kass;

const esimene = [1,2];
const teine = [3,4];
const kombineeri = [0, ...esimene, ...teine, 5];

const vaikimisi = { toit:'terav', hinnaklass: '$$', myratase: 'vali'};
const shokolateeria = { ...vaikimisi, toit: 'magus' };/*
*/
/* Muutuja tüübid */
/*
// arvud
const decimal: number = 6;
const hex = 0x12ff26;
const binary = 0b1010;
const octal = 0o7433;
// tõene või väär
const eijah: boolean = true; // false

// Sõne aka tekst
const s6ne: string = 'Tere \' sõne';
const vanus = 37;
const vanusTekstis = `Ta on ${vanus} aastat vana.
Ta saab ${vanus+1} aastat vanaks.`;
console.log(vanusTekstis);

// Massiivid
const list: number[] = [1,2,3];
console.log(`Massiivi esimen element ${list[0]}`);
list[1] = 20;

// Tuple
const punkt: [number, number] = [125, 32];
const asukoht: [string, number, number] = ['Tallinn', 125, 32];

// Enumeraator - loendaja
const enum V2rv{
    Punane,
    Roheline,
    Sinine = 10
}
const v2rv = V2rv.Sinine;
// Suvaline - hoidu sektsioonist
let suvaline: any = 'Tere';
suvaline = 'Tere';
function funk(): void {}
function funk2(): never { while (true) {throw new Error('Viga!');} }

// Teisendamine
const s6nePikkus: number = (suvaline as string).length;

//Valikuline
type Saadetis = 'Saadetud' | 'Saatmata' | number;
let fikseeritudS6num: Saadetis = 12;
fikseeritudS6num = 'Saadetud';
//fikseerituds6num = 'ssdfrf';
*/
/* if, switch ja conditional */
/*// conditional
const enum Loom{Muu, Koer, Kass};
const loom = Loom.Kass;
const kasKass = loom === Loom.Kass ? 'On Küll kass' : 'Ei ole kass';
const misLoom = loom === Loom.Kass ? 'On Küll kass' :
    (loom === Loom.Koer ? 'On Küll koer' : 'Ei ole kumbki');

// if
// ===, == , !==, !=, >=, <=
if(loom === Loom.Kass){
    // kui kass
} else if (loom === Loom.Koer) {
    // kui koer
} else {
    // kui muu
}
// switch
const arv: number = 10;
switch (arv) {
    case 1:
        // kui arv on 1
        break;
    case 10:
        // kui arv on 10
        break;
    default:
        // kui arv midagi muud
        break;
}*/
/*tsükklid*/
/*
const massiiv2 = [1,12,3,4,5,6,7,8];
const obj = {vanus: 13, numbrid: [12,12], nimi: 'sssd'};
for (let index = 0; index < massiiv2.length; ++index) {
    const element = massiiv2[index];
    console.log(element);
}
for (const iterator of massiiv2) {
    console.log(iterator);
}
for (const key in massiiv2) {
    if (massiiv2.hasOwnProperty(key)) {
        const element = massiiv2[key];
        console.log(element);
    }
}
massiiv2.forEach( element => {console.log(element); });

let kasJookseb = true;
let kaugus = 0;
while (kasJookseb) {
    if(kaugus === 100){
        kasJookseb = false;
    }
    if(kaugus*20 === 111){
        break;
    }
    if(kaugus*20 === 150){
        continue;
    }
    ++kaugus;
}
// Teeb esimese ringi igaljuhul
do {
    // Loogika
} while (kasJookseb);
// lõpmatus
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
var sum4 = function (x, y, z) {
    if (x === void 0) { x = 5; }
    if (y === void 0) { y = 6; }
    if (z)
        return x + y + z;
    else
        return x + y;
};
var summa3 = sum4(arv4);
var summa4 = sum4();
var summa5 = sum4(23, 233, 55);
//# sourceMappingURL=script.js.map