    let nombre = prompt("Bienvenido a la aplicación para calular el pago de las cuotas de tu deuda, ingresa tu nombre");
    console.log("aca");

    while(nombre == ''){
        nombre = prompt("Por favor ingresa tu nombre");
    }
    alert("Hola " + nombre);

    let nombrePantalla = document.getElementById("nombre");
    nombrePantalla.innerHTML = nombre;

let cantidad = prompt("ingrese la cantidad de deudas para las que quiere calcular sus pagos:")
const deudas= [];
let mensualidad;
let mensualidadTotal=0;
console.log("aca2");
// deudas.length = i;

for (let i = 0; i < cantidad; i++) {
    console.log("aca3");
    console.log(deudas.length);
    let nombreDeuda = prompt( "Ingrese el nombre que le asignará a la deuda "+[i+1])
    let montoTotal = parseInt(prompt( "Para la deuda "+[i+1]+ " Ingrese el monto total de la deuda en COP"));
    console.log(montoTotal);
    let metodoPago = parseInt(prompt("Para la deuda "+[i+1]+ " Ingrese 1 si quiere calcular basado en cuotas, 2 si quiere calcular segun capacidad de pago de la deuda"));
    console.log(metodoPago);
    let cantidadCuotas;
    let capacidadPago;
     

    if (metodoPago == 1) {
          cantidadCuotas = parseInt(prompt("Para la deuda "+[i+1]+ " Ingrese el número de cuotas"));
          console.log(cantidadCuotas);
          let metodo1 = montoTotal/cantidadCuotas;
          mensualidad = metodo1;
      } else if (metodoPago == 2){
         capacidadPago = parseInt(prompt("Para la deuda "+[i+1]+ "Ingrese la capacidad de pago mensual:"));
         console.log(capacidadPago);
         let metodo2 = montoTotal/capacidadPago;
          mensualidad = capacidadPago;
      }else{
          prompt("ingrese un método correcto:")
      }

      deudas.push({nombreDeuda1:nombreDeuda, montoTotal1:montoTotal, metodoPago1:metodoPago, cantidadCuotas1:cantidadCuotas, capacidadPago1:capacidadPago, mensualidad1:mensualidad });
      let tituloDeuda = document.getElementById("nombreD"+[i+1]);
      tituloDeuda.innerHTML = nombreDeuda;
      let valorDeuda = document.getElementById("valorD"+[i+1]);
      valorDeuda.innerHTML = montoTotal;
      let tipoPago = document.getElementById("tipoD"+[i+1]);
      tipoPago.innerHTML = metodoPago;
      let cuota = document.getElementById("cuotaD"+[i+1]);
      cuota.innerHTML = mensualidad;

}
console.log(deudas);
for (let i = 0; i < cantidad; i++) {
    console.log(deudas[i].mensualidad1)
     mensualidadTotal = mensualidadTotal + deudas[i].mensualidad1;
}

 alert("Tu mensualidad a pagar es de:$ " + mensualidadTotal);

 let totalMensual = document.getElementById("mensualidadTotal");
 totalMensual.innerHTML = mensualidadTotal;
 


