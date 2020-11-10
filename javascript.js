const etunimi = 'Ossi';
const ika = '17';
const opiskelija = true;

if(opiskelija === true){
  ala = 'opiskelija';
}else{
  ala = 'ammattilainen';
}

const mina = `Hei sivuilleni surffaaja, olen ${etunimi} ja olen ${ika} vuotias ${ala}.`;
console.log(mina);

//const ystavat = ['Eeva Ojamäki', 'Petri Saarenheimo', 'Jusu Arkkila', 'Akseli Sormunen'];

//const ystavani = (`1.Ystäväni: ${ystavat[0]} 2.Ystäväni: ${ystavat[1]} 3.Ystäväni: ${ystavat[2]} 4.Ystäväni: ${ystavat[3]}`);

const ystava1 = 'Eeva Ojamäki'
const ystava2 = 'Petri Saarenheimo'
const ystava3 = 'Jusu Arkkila'
const ystava4 = 'Akseli Sormunen'

console.log(ystava1.split(' ')[0]);
console.log(ystava2.split(' ')[0]);
console.log(ystava3.split(' ')[0]);
console.log(ystava4.split(' ')[0]);

console.log(`1. Ystäväni: ${ystava1}
2. Ystäväni: ${ystava2}
3. Ystäväni: ${ystava3}
4. Ystäväni: ${ystava4}`)


const perhe = [
  {
    id: 1,
    etunimi: 'Pekka',
    ika: '44',
    aikuinen: true,
  },
  {
    id: 1,
    etunimi: 'Mari',
    ika: '43',
    aikuinen: true,
  },
  {
    id: 2,
    etunimi: 'Mikko',
    ika: '19',
    aikuinen: true,
  },
  {
    id: 3,
    etunimi: 'Matias',
    ika: '15',
    aikuinen: false,
  },
  {
    id: 4,
    etunimi: 'Minni',
    ika: '13',
    aikuinen: false,
  },
  {
    id: 5,
    etunimi: 'Simo',
    ika: '7',
    aikuinen: false,
  }
];


for(let i=0; i<perhe.length;i++){
  console.log(perhe[i].etunimi);
}

const aikuinenPerhe=perhe.filter(function(adult){
  return adult.aikuinen === true;
}).map(function(adult){
  return adult.etunimi;
});

console.log(aikuinenPerhe);

const lapsiPerhe=perhe.filter(function(child){
  return child.aikuinen === false;
}).map(function(child){
  return child.etunimi;
});

console.log(lapsiPerhe);
