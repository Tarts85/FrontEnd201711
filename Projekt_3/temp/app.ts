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

const arv4 = 4;
const sum = (x:number, y:number) => x+y;
const sum3 = (x:number, y:number) : number =>{return x + y };
const summa = sum(arv4, arv4);
function sum2(x:number, y:number){
    return x+y;
}

const summa2 = sum2(arv4,arv4);
const sum4 = function Sum4(x = 5, y = 6,z? : number) {
    if(z) return x + y + z;
    else
    return x + y;
}

const summa3 = sum4(arv4);
const summa4 = sum4(23,233,55);
const summa5 = sum4();