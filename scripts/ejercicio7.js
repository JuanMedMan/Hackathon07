function calcularFactorial() {
    var numero = parseInt(document.getElementById('numero').value, 10);
    var resultado = document.getElementById('result');
    
    if (isNaN(numero) || numero < 0) {
        resultado.innerText = "Por favor, ingrese un número entero no negativo.";
        return;
    }
    
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    
    resultado.innerText = "El factorial de " + numero + " es " + factorial;
}