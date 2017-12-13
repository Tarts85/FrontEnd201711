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
// arvud
var decimal = 6;
var hex = 0x12ff26;
var binary = 10;
var octal = 3867;
// tõene või väär
var eijah = true; // false
// Sõne aka tekst
var s6ne = 'Tere \' sõne';
var vanus = 37;
var vanusTekstis = "Ta on " + vanus + " aastat vana.\nTa saab " + (vanus + 1) + " aastat vanaks.";
console.log(vanusTekstis);
// Massiivid
var list = [1, 2, 3];
console.log("Massiivi esimen element " + list[0]);
list[1] = 20;
// Tuple
var punkt = [125, 32];
var asukoht = ['Tallinn', 125, 32];
// Enumeraator - loendaja
var V2rv;
// Enumeraator - loendaja
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Sinine"] = 10] = "Sinine";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Sinine;
// Suvaline - hoidu sektsioonist
var suvaline = 'Tere';
suvaline = 'Tere';
function funk() { }
function funk2() { while (true) {
    throw new Error('Viga!');
} }
// Teisendamine
var s6nePikkus = suvaline.length;
var fikseeritudS6num = 12;
fikseeritudS6num = 'Saadetud';
//fikseerituds6num = 'ssdfrf';
var arv4 = 12, arv5 = 13, arv6 = 14;
arv4 = 13;
var sum = function (x, y) { return x + y; };
var summa = sum(arv4, arv4);
//# sourceMappingURL=script.js.map