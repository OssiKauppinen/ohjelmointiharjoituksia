//console.log("Scripti toimii");

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

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
    "EmailMsg": "Tähän tulee postin sisältö", // Kirjoittaa spostin sisällön
    "EmailAddress": "mira.vorne@salpaus.fi", // Viestin kirjoittajan sposti
    "EmailTo": "ossi.o.kauppinen@gmail.com", // Oma spostini
    "EmailName": "Teppo Tyyppi" // Nimikentän sisältö
  });
  xhr.send(data);
}