function clean(){
    document.getElementById("cambio").innerHTML = " ";
    document.getElementById('formulario').reset();
    
}

function sumar(){
 var a = parseFloat(document.getElementById("caja1").value);
 var b = parseFloat(document.getElementById("caja2").value);
 if (isNaN(a) || isNaN(b)) {
    document.getElementById("igual-symbol").style.visibility = "hidden"; // Oculta el símbolo '='
    document.getElementById("cambio").classList.add("error-message");
    document.getElementById("cambio").innerHTML = "Por favor, ingrese números válidos";
   } else {
    document.getElementById("igual-symbol").style.visibility = "visible"; // Muestra el símbolo '='
    document.getElementById("cambio").classList.remove("error-message");
    document.getElementById("cambio").innerHTML = a+b
  }  
}
function restar(){
  var a = parseFloat(document.getElementById("caja1").value);
  var b = parseFloat(document.getElementById("caja2").value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("igual-symbol").style.visibility = "hidden"; // Oculta el símbolo '='
    document.getElementById("cambio").classList.add("error-message");
    document.getElementById("cambio").innerHTML = "Por favor, ingrese números válidos";
   } else {
    document.getElementById("igual-symbol").style.visibility = "visible"; // Muestra el símbolo '='
    document.getElementById("cambio").classList.remove("error-message");
    document.getElementById("cambio").innerHTML = a-b
  }  
}
 function multiplicar(){
  var a = parseFloat(document.getElementById("caja1").value);
  var b = parseFloat(document.getElementById("caja2").value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("igual-symbol").style.visibility = "hidden"; // Oculta el símbolo '='
    document.getElementById("cambio").classList.add("error-message");
    document.getElementById("cambio").innerHTML = "Por favor, ingrese números válidos";
   } else {
    document.getElementById("igual-symbol").style.visibility = "visible"; // Muestra el símbolo '='
    document.getElementById("cambio").classList.remove("error-message");
    document.getElementById("cambio").innerHTML = a*b
  }  
}
 function dividir(){
  var a = parseFloat(document.getElementById("caja1").value);
  var b = parseFloat(document.getElementById("caja2").value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("igual-symbol").style.visibility = "hidden"; // Oculta el símbolo '='
    document.getElementById("cambio").classList.add("error-message");
    document.getElementById("cambio").innerHTML = "Por favor, ingrese números válidos";
} else if (b === 0) {
    document.getElementById("igual-symbol").style.visibility = "hidden"; // Oculta el símbolo '='
    document.getElementById("cambio").classList.add("error-message");
    document.getElementById("cambio").innerHTML = "No se puede dividir por cero";
} else {
    document.getElementById("igual-symbol").style.visibility = "visible"; // Muestra el símbolo '='
    document.getElementById("cambio").classList.remove("error-message");
    document.getElementById("cambio").innerHTML = (a / b).toFixed(2);
}
}


// EL SIGUIENTE ES EL PRIMER CÓDIGO QUE DESARROLLÉ PERO EL OPTIMIZADO CON LA EXPERIENCIA ES 🔼🔼🔼

// function sumar(){
//  var a = parseInt(document.getElementById("caja1").value);
//  var b = parseInt(document.getElementById("caja2").value);
//     document.getElementById("cambio").innerHTML = a+b
// }  

// function restar(){
//   var a = parseInt(document.getElementById("caja1").value);
//   var b = parseInt(document.getElementById("caja2").value);
//      document.getElementById("cambio").innerHTML = a-b
//  }  
//  function multiplicar(){
//   var a = parseInt(document.getElementById("caja1").value);
//   var b = parseInt(document.getElementById("caja2").value);
//      document.getElementById("cambio").innerHTML = a*b
//  }  
//  function dividir(){
//   var a = parseInt(document.getElementById("caja1").value);
//   var b = parseInt(document.getElementById("caja2").value);
//      document.getElementById("cambio").innerHTML = a/b
//  } 








    

    
   
















    


         
    
   







     






