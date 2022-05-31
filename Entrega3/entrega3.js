


alert ("este es el juego")

let respuesta = "tenedor"
let palabra = prompt("Ingresa una palabra")

const letras = []

for (i=0;i<palabra.length;i++){
    letras.push(palabra[i])
}

console.log(letras)




function t (){
   

  if (letras[0] == "t" ) {
  letra1 = "Y"
  }
  else if (letras[0] == "s" || letras[0] == "o"  ) {
    letra1 = "H"
    }
    else {
        letra1 = "C"
    }

}

let letra1 = 0

while (palabra !== respuesta) {

    alert ( palabra +
            letra1)
            break
}


