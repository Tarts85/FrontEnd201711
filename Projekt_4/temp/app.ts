'use strict';
/* algväärtustamine */
//alert("hello");
console.log('hello TS');
/*
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
/*
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
const enum V2rv{
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
arv = 13;
*/

/*if, switch ja conditional
//conditional
const enum Loom{Kass, Koer, Muu};
const loom = Loom.Kass
const kasKass = loom === Loom.Kass ? 'On küll kass': 'Ei ole kass';
const misLoom = loom === Loom.Kass? 'On küll kass': (loom === Loom.Koer ?'On küll koer' :'Ei ole kumbki');


// ===, ==, !==, !=, >=, <=

// if
if(loom === Loom.Kass){
    // kui kass
} else if(loom === Loom.Koer){
    //kui koer
}else{
//Kõik muu
}

// switch
const arv: number= 10;
switch (arv) {
    case 1:
     // kui arv on 1
    break;
    case 10:
    // kui arv on 10
    break;
    default:
    // kui arv on midagi muud
    break;
}*/


/*tsüklid*/
/*
const massiiv2 = [1,12,3,4,5,6,7,8];
const obj= {vanus: 13, numbrid: [12,12], nimi: 'sssd'};
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
massiiv2.forEach(element =>{console.log(element); });

let kasJookseb = true;
let kaugus = 0;
while (kasJookseb) {
    if(kaugus = 100){
        kasJookseb = false;
    }
    if(kaugus*20 === 111){
        break;
    }
    if(kaugus*20 === 111){
        continue;
    }
    ++kaugus;
//Teeb esimese ringi igaljuhul
do{
 //
} while(kasJookseb);
while(true){}
for(;;){}
*/

const arv4 = 4
const sum = (x:number, y:number)=> x+y;
const sum3 = (x:number, y:number): number=>{return x+y};
const summa = sum(arv4, arv4);
function sum2(x: number, y:number){
    return x + y;
}
const summa2 = sum2(arv4, arv4);
const sum4 = function(x = 5, y = 6 z :number) {
    if(z)
    return x+ y + z;
    else
    return x + y;
}
const summa3 = sum4(arv4);
const summa4 = sum4();
const summa5 = sum4(23,233,55);

