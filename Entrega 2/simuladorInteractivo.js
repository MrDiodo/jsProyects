let usuario = prompt("Ingresa tu nombre")
let nombre = mayuscula(usuario)

alert ("Bienvenido " + nombre + " tenemos para ofrecerte creditos increibles con intereses super bajos!!!")




let monto = Number (prompt ("Ingrese el monto a financiar"))
let cuotas = prompt("Elige en cuantas cuotas quieres finanziar tu credito!!!, podes hacerlo en 1, 3, 6 o 12 cuotas con intereses super bajos!!.")


let totalCuotas = monto / cuotas
let totalCuotasDecimales = totalCuotas.toFixed(2)


if (cuotas == 3){

    cuota3(monto,cuotas,0.21,totalCuotasDecimales)
}
 
else if (cuotas == 6) {

    cuota6(monto,cuotas,0.4,totalCuotasDecimales)
}
else if (cuotas == 12) {

    cuota12(monto,cuotas,1.20,totalCuotasDecimales) 
}

else if (cuotas == 1) {

    cuota1(monto,cuotas,0.15,totalCuotasDecimales) 
}

else  {

    alert ("Esa no es una cuota.")
}


function cuota3 (a, b, c, d) {
    alert ("El credito en 3 cuotas de $" + a + " da un total de $" + d + " sumando el 21% de interes da un total a pagar de $" +  (a + (a*c))  + " final por mes." )
}
function cuota6 (a, b, c, d) {
    alert ("El credito en 6 cuotas de $" + a + " da un total de $" + d + " sumando el 40% de interes da un total a pagar de $" + ( a + (a*c)) + " final por mes.")
}
function cuota12 (a, b, c, d) {
    alert ("El credito en 12 cuotas de $" + a + " da un total de $" + d + " sumando el 120% de interes da un total a pagar de $" + ( a + (a*c)) + " final por mes.")
}
function cuota1 (a, b, c, d) {
    alert ("para un credito de 1 cuota de $" + a + " sumando el 15% de interes da un total a pagar de $" + ( a + (a*c)) + " final.")
}

function mayuscula(ma) {
    return ma.charAt(0).toUpperCase() + ma.slice(1);
  }