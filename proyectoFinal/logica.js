
// Creamos la funcion que va a permitir que se agregue un nuevo mozo
 
function agregarMozo()

{
 let id=1
 if(agregarMozo.length>0){
    id=mozo [mozo.length-1].id+1
 }
    let nombre=prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let mozo = new Mozo(id, nombre, apellido);

    mozo.push(Mozo)

    

}


document.getElementById("agregarMozo").onclick = agregarMozo()
console.log (Mozo)