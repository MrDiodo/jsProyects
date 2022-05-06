
let username = prompt("Cree un usuario")
let pasword = prompt("Cree su contrasena")
let usernameLogIn = prompt("ingrese su usuario")
let paswordLogIn = prompt("ingrese su contrasena")

while ((username !== usernameLogIn)|| (pasword !== paswordLogIn)) {
    alert("Algunos de los datos son incorrectos intente nuevamente")
    break
}

while ((username == usernameLogIn)|| (pasword == paswordLogIn)) {
    alert("Bienvenido")
    break
}