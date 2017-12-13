'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/* Algväärtustamine */
console.log('Hello TS');
var vana = 5;
var muutuja = 5;
var konstant = 5;
// konstant = 5;
muutuja = 5;
if (true) {
    var vana = 6;
    var muutuja_1 = 6;
    console.log(muutuja_1);
}
console.log(vana);
console.log(muutuja);
var _a = [17, 12, 33], arv1 = _a[0], arv3 = _a[2];
arv1 = arv3;
var kass = { nimi: 'Tom', vanus: 8 };
var nimi = kass.nimi, vanus = kass.vanus;
var esimene = [1, 2];
var teine = [3, 4];
var kombineeri = [0].concat(esimene, teine, [5]);
var vaikimisi = { toit: 'terav', hinnaklass: '$$', myratase: 'vali' };
var shokolateeria = __assign({}, vaikimisi, { toit: 'magus' });
/* Muutuja tüübid */
// arvud
var decimal = 6;
var hex = 0x12ff26;
var binaar = 10;
var octal = 3867;
// tõeväärtused
var eijah = true; // false
// Sõne ehk tekst
var string = 'Tere \' sõne';
var vanus = 37;
var vanusTekstis = "Ta on " + vanus + " aastat vana.\nTa saab " + (vanus + 1) + " aastat vanaks.";
console.log(vanusTekstis);
//Massiivid
var list = [1, 2, 3];
console.log("Massiivi esimene element " + list[0]);
list[1] = 20;
//Tuple
var punkt = [125, 32];
var asukoht = 'Tallinn';
125, 32;
;
//Enumeraator-loendaja
var V2rv;
//Enumeraator-loendaja
(function (V2rv) {
    V2rv[V2rv["Punane"] = 0] = "Punane";
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Sinine"] = 2] = "Sinine";
})(V2rv || (V2rv = {}));
var V2rv = V2rv.Sinine;
//Suvaline- hoidu sektsioonist
var suvaline = 'Tere';
suvaline = 'Tere';
function funk() { }
function funk2() { while (true) {
    throw Error;
    'Viga!';
} }
//Teisendamine
var s6napikkus = suvaline.length;
var fikseeritudS6num = 12;
fikseeritudS6num = 'Saadetud';
var arv4 = 12, arv5 = 13, arv6 = 14;
arv4 = 13;
//# sourceMappingURL=script.js.map