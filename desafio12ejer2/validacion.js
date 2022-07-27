let usuario = prompt("Ingrese nombre de usuario");
let contraseña = prompt("Ingrese su contraseña");

if (usuario == "admin" && contraseña == "1234"){
    document.write(`<h1>Bienvenido</h1>`)
}else{
    alert("Acceso no autorizado")
};