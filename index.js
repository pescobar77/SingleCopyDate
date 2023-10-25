`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  //timeDisplay.textContent = formattedString;
  timeDisplay.value = formattedString;

  const d = new Date();
  var horas = d.getHours();
  var minutos = d.getMinutes();
  var segundos = d.getSeconds();
  const diasemana = d.getDay();
  const dia = d.getDate();
  const mes = d.getMonth();
  const year = d.getFullYear();
  var ampm="";

  var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves','Sabado'];
  var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


  if (horas>=12){
    horas = horas -12;
    ampm='PM';
  }
  else
  {
    ampm='AM';
  }

  if (horas==0){
    horas = 12;
  }    

  if(minutos<10) {minutos = "0" + minutos;}
  if(horas<10) {horas = "0" + horas;}
  if(segundos<10) {segundos = "0" + segundos;}
  
  document.getElementById("diaSemana").textContent = semana[diasemana];
  document.getElementById("dia").textContent = dia;
  document.getElementById("mes").textContent = meses[mes];
  document.getElementById("year").textContent =year; 
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("segundos").textContent = segundos;
  
}

function copiar(){
    // Get the text field
    var copyText = document.getElementById("time");

    // Select the text field
    //copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
   // navigator.clipboard.writeText(copyText.innerText);
   navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
  //  alert("Copied the text: " + copyText.value);
}
setInterval(refreshTime, 1000);