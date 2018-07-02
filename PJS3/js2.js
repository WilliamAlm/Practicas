var nombre = prompt("Inserte su nombre: ", "");
if (nombre == nombre) {
    document.write("Bienvenid@: " + nombre);
}
if (nombre == "") {
    confirm("Porfavor digite su nombre de usuario");
    location.href = "PJS2.html";
}

function tabla() {
    var vi = prompt("Ingrese un numero", "");
    document.write("<table border='1'>");
    document.write("<h1>Tabla de Multiplicar</h1>")
    var i = 0;
    for (i = 1; i <= vi; i++) {
        for (y = 1; y <= 12; y++) {
            table = y * i;
            document.write("<tr>");
            document.write(i + " x " + y + " = " + table + "<br>");
            document.write("</tr>");
        }
        document.write("<br>");
    }

    document.write("</table>");
}

function tasa() {
    var num1 = parseFloat(document.getElementById('valor').value);
    var num2 = parseFloat(document.getElementById('tasa').value);
    var resultado = num1 * num2;
    if (num2 == num2 && num1 == num1) {
        confirm("Gracias por utilizar nuestra calculadora de tasa resultado es: \n\n" + "RD$" + resultado);
    } else {
        confirm("Operacion no realizada favor de verificar campos en blanco");
    }
    var num1 = parseFloat(document.getElementById('valor').value = "");
    var num2 = parseFloat(document.getElementById('tasa').value = "");
}

function login() {
    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;
    if (usuario == "admin" && clave == "admin") {
        alert("Acceso correcto");
    } else {
        alert("Usuario u/o clave incorrecto, porfavor vuelva a intentarlo");
    }
}

function vtrue() {
    var num = Number(document.getElementById('multiplo').value);
    if (num % 5 == 0) {
        confirm("Es multiplo de 5");
    } else {
        alert("No es multiplo de 5");
    }
}