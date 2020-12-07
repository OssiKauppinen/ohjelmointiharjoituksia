var getJSON = function(url, callback) {
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function() {
    
    var status = xhr.status;
    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };

  xhr.send();
};

getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data) {
let taulukko = '<table style="border:1px solid black">'
const historia = data.map(function(paiva){

  if(paiva.confirmedCases != undefined){
    console.log(`Confirmed: ${paiva.confirmedCases}`)
    taulukko = taulukko + `<tr><td>Confirmed</td></tr>${paiva.confirmedCases}</td></tr>`;
  }
  if(paiva.tested != undefined){
    console.log(`Tested: ${paiva.testedCases}`)
    taulukko = taulukko + `<tr><td>Tested</td></tr>${paiva.testedCases}</td></tr>`;
  }
  if(paiva.infected != undefined){
    console.log(`Infected: ${paiva.infected}`)
    taulukko = taulukko + `<tr><td>Infected</td></tr>${paiva.infected}</td></tr>`;
  }
  else{
    console.log('Ei dataa');
    taulukko = taulukko + '<tr><td>Ei dataa</td><td>Ei dataa</td></td>'
  }
});
taulukko = taulukko + '</table>'
document.body.innerHTML=taulukko;
});
