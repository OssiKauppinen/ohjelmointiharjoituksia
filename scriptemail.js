//console.log("Scripti toimii");

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

const nimiKentta = document.querySelector('#nimi')
const emailKentta = document.querySelector('#email')
const viestiKentta = document.querySelector('textarea')

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);
  
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.satus === 200){
      console.log("Valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": `${viestiKentta}`, // Kirjoittaa spostin sisällön
    "EmailAddress": `${emailKentta}`, // Viestin kirjoittajan sposti
    "EmailTo": "ossi.o.kauppinen@gmail.com", // Oma spostini
    "EmailName": `${nimiKentta}` // Nimikentän sisältö
  });
  xhr.send(data);
}