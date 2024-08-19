function operacion(opcion) {
    let num1 = parseFloat(prompt("Introduzca el primer número:"));
    let num2 = parseFloat(prompt("Introduzca el segundo número:"));
    let resultado;
    let mensaje = '';

    if (isNaN(num1) || isNaN(num2)) {
        mensaje = "Por favor, introduzca números válidos";
    } else {
        switch (opcion) {
            case 1:
                resultado = num1 + num2;
                mensaje = `Resultado de la suma: ${resultado}`;
                break;
            case 2:
                resultado = num1 - num2;
                mensaje = `Resultado de la resta: ${resultado}`;
                break;
            case 3:
                resultado = num1 * num2;
                mensaje = `Resultado de la multiplicación: ${resultado}`;
                break;
            case 4:
                if (num2 === 0) {
                    mensaje = "Error: División por cero";
                } else {
                    resultado = num1 / num2;
                    mensaje = `Resultado de la división: ${resultado}`;
                }
                break;
            case 5:
                if (num2 === 0) {
                    mensaje = "Error: División por cero";
                } else {
                    resultado = num1 % num2;
                    mensaje = `Resultado del módulo: ${resultado}`;
                }
                break;
            default:
                mensaje = "Opción no válida";
        }
    }

    document.getElementById('result').innerText = mensaje;
}

function salir() {
    document.getElementById('result').innerText = "Saliendo de la calculadora.";
}