//alert('Täällä ollaan');
console.log('Täällä ollaan');
/*Monta
riviä
kommentteja*/

let ika = 43;
ika = ika+1;

const pii=3.14;
console.log('Piin likiarvo: ' + pii);

const etunimi='Ossi'; //string
const sukunimi='Kauppinen'; // string
const syntymavuosi=2003; //number eli kokonaisluku
const lahtelainen=true //boolean
let maarittelematon; //undefined

console.log("syntymävuoden tyyppi: " + typeof syntymavuosi)
console.log("nimen tyyppi: " + typeof etunimi)
console.log("lahtelaisuuden tyyppi: " + typeof lahtelainen)

//template string
console.log('Nimeni on ' + etunimi + ' ' + sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

const henkilotieto = `Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`;

console.log(henkilotieto);
console.log(`Henkilotiedon pituus on: ${henkilotieto.length}`);
console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0, 9).toUpperCase());

console.log(henkilotieto.split(' ')[2]);

console.log(henkilotieto.split(' '));

const autoja = ['Hyundai', 'Toyota', 'Volvo'];

autoja[3]='BMW';

autoja.push('Saab');

autoja.unshift('Mersu');

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Ossi',
  sukunimi: 'Kauppinen',
  syntymavuosi: '2003',
  koulutus: ['Peruskoulu', '1v Lukioa', 'Ammattikoulu'],
  osoite: {
    katu: 'Ståhlberginkatu 4A',
    postinumero: '15500',
    kunta: 'Lahti',
  }
}

console.log(opiskelija.etunimi);

const laksyt = [
  {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true,
  },
  {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true,
  },
  {
    id: 3,
    tehtava: 'Ohjelmointi, JavaScript',
    tehty: false,
  }
];

for (let i=0; i <= 10; i++){
  console.log(`iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`While loopin iteraatioluku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length;i++){
  console.log(laksyt[i].tehtava);
}

const laksyTehtava = laksyt.map(function(laksy){  
  return laksy.tehtava;
});

console.log(laksyTehtava);