//console.log("Scripti toimii");
const virhe = document.querySelector('.virheilmoitus');
const kiitos = document.querySelector('.kiitosilmoitus');

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();

  if(nimiKentta.value === '' || emailKentta.value === '' || viestiKentta.value === ''){
    virhe.classList.add('virhe');
    virhe.innerHTML = 'Täytä kaikki pakolliset kentät';
    nimiKentta.style.borderColor = 'red';
    emailKentta.style.borderColor = 'red';
    viestiKentta.style.borderColor = 'red';
  }else{
  sendJSON();
  kiitos.innerHTML = (`Kiitos yhteydenotostasi ${nimiKentta.value}, viestisi on lähetetty.`);
  setTimeout(() => kiitos.innerHTML = "", 30000);
  setTimeout(() => kiitos.classList.remove('kiitos'), 30000);
  nimiKentta.value = '';
  emailKentta.value = '';
  viestiKentta.value = '';
  virhe.classList.remove('virhe');
  virhe.innerHTML = '';
  emailnappi.disabled = true;
  setTimeout(() => emailnappi.disabled = false, 30000);
  kiitos.classList.add('kiitos');
  nimiKentta.style.borderColor = 'black';
  emailKentta.style.borderColor = 'black';
  viestiKentta.style.borderColor = 'black';
}});

const nimiKentta = document.querySelector('#nimi');
const emailKentta = document.querySelector('#email');
const viestiKentta = document.querySelector('textarea');

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
};
