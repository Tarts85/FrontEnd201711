'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/* algväärtustamine */
//alert("hello");
console.log('hello TS');
var vana = 5;
var muutuja = 5;
var konstant = 5;
//konstant = 5;
muutuja = 5;
if (true) {
    var vana = 6;
    var muutuja_1 = 6;
    //muutuja ="ddfjf"
    console.log(muutuja_1);
}
console.log(vana);
console.log(muutuja);
var _a = [12, 12, 33], arv1 = _a[0], arv2 = _a[1], arv3 = _a[2];
arv1 = arv3;
var kass = { nimi: 'Tom', vanus: 8 };
var nimi = kass.nimi, vanus = kass.vanus;
var esimene = [1, 2];
var teine = [3, 4];
var kombineeri = [0].concat(esimene, teine, [5]);
var vaikimisi = { toit: 'terav', hinnaklass: '$$', myratase: 'vali' };
var shokolateeria = __assign({}, vaikimisi, { toit: 'magus' });
/*Muutuja tüübid */
//arvud
var decimal = 6;
var hex = 0x12ff26;
var binary = 0x12ff26;
var octal = 3867;
//tõene või väär
var eijah = true; // false
//Sõne aka tekst
var string = 'Tere \'sõne';
var vanus1 = 37;
var vanusTekstis = 'Ta on "${vanus} aastat vana. Ta saab ${vanus+1} aastat vanaks.';
console.log(vanusTekstis);
//Massiivid
var list = [1, 2, 3];
console.log('Massiivi esimene element ${list[0]}');
list[1] = 20;
//Tuple
var punkt = [123, 32];
var kaart = ['Tallinn', 123, 32];
//Enumeraator - loendaja
var V2rv;
//Enumeraator - loendaja
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Sinine"] = 10] = "Sinine";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Sinine;
//suvaline
var suvaline = 'Tere'; //hoidu sektstioonist
suvaline = 'Tere';
function funk() { }
function funk2() { while (true) {
    throw new Error('viga');
} }
//Teisendamine
var sõnepikkus = suvaline.length;
var fikseerituds6num = 12;
fikseerituds6num = 'Saadetud';
//fikseerituds6num ='ssdfrf';
var arv14 = 12, arv5 = 13, arv6 = 14;
arv1 = 13;
var sum = function (x, y) { return x + y; };
var summa = sum(arv, arv);
//# sourceMappingURL=script.js.map