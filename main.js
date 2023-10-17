alert ("!Bienvenido a creditos ya online !");
function saludo () {
    let nombre =prompt("Por favor ingrese su nombre");
    alert("Hola "+ nombre +" ,Siga los pasos para simular su prestamo");
}
saludo();
function prestamo(){
    let monto =prompt("A continuacion ingrese el monto deseado $");
    let cuota =prompt("A continuacion ingrese el numero de cuotas deseadas");
    prestamofinal=((monto*0.35)/cuota);
    alert("El monto por mes es de $"+prestamofinal +" en " +  cuota+" cuotas");
   }
   
   let repetir = true;

 while (repetir) {
  prestamo();
  let respuesta = prompt("¿Deseas realizar consultar otro prestamo? (s/n)");

  if (respuesta.toLowerCase() !== "s") {
    repetir = false;
    alert("Gracias por ingresar a creditos ya online");
  }
}
