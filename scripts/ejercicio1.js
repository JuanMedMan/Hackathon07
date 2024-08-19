var valor = parseInt(prompt("Introducir un número"));
if (isNaN(valor) || valor <= 0) {
    console.log("Por favor, introduce un número válido mayor que 0.");
} else {
    console.log("EJERCICIO 1")
    console.log("=== Tabla de multiplicar del: " + valor + " ===");

    for (var j = 1; j <= 10; j++) {
        var resultado = valor * j;
        console.log(valor + " x " + j + " = " + resultado);
    }
}
