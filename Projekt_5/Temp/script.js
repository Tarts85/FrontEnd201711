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
var asukoht = ['Tallinn', 125, 32];
var V2rv = 2 /* Sinine */;
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
;
var loom = 0 /* Kass */;
var kasKass = loom === 0 /* Kass */ ? 'On küll kass' : 'Ei ole kass';
var misLoom = loom === 0 /* Kass */ ? 'On küll kass' :
    (loom === 1 /* Koer */ ? 'On küll koer' : 'Ei ole kumbki');
// ===, == !==, !=, <=, >=
if (loom === 0 /* Kass */) {
    // kui kass
}
else if (loom === 1 /* Koer */) {
    // kui koer
}
else {
    // kui muu
}
var arv = 10;
switch (arv) {
    case 1:
        // kui arv on 1
        break;
    case 10:
        // kui arv on 10
        break;
    default:
        // kui arv on muu
        break;
}
/* tsüklid */
var massiiv2 = [1, 12, 3, 4, 5, 6, 7, 8];
var obj = { vanus: 13, numbrid: [12, 12], nimi: 'sssd' };
for (var index = 0; index < massiiv2.length; index++) {
    var element = massiiv2[index];
    console.log(element);
}
for (var _i = 0, massiiv2_1 = massiiv2; _i < massiiv2_1.length; _i++) {
    var iterator = massiiv2_1[_i];
    console.log(iterator);
}
for (var key in massiiv2) {
    if (massiiv2.hasOwnProperty(key)) {
        var element = massiiv2[key];
        console.log(element);
    }
}
massiiv2.forEach(function (element) { console.log(element); });
var kasJookseb = true;
var kaugus = 0;
while (kasJookseb) {
    if (kaugus === 100) {
        kasJookseb = false;
    }
    if (kaugus * 20 === 111) {
        break;
    }
    if (kaugus * 20 === 150) {
        continue;
    }
    kaugus++;
}
// Teeb esimese ringi igal juhul
do {
} while (kasJookseb);
/*lõpmatu loop while(true) {}
while(true){}
for(;;){}*/
//let arv4: number = 12, arv5 = 13, arv6 = 14;
//arv4 = 13;
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