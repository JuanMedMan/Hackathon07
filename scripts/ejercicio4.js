function verificarPalindromo() {
    var texto = document.getElementById('texto').value;
    
    var textoLimpio = texto.replace(/\s+/g, '').toLowerCase();

    var esPalindromo = true;
    var longitud = textoLimpio.length;
    
    for (var i = 0; i < longitud / 2; i++) {
        if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }
    
    var resultado = document.getElementById('result');
    if (esPalindromo) {
        resultado.innerText = "El texto ingresado es un palíndromo.";
    } else {
        resultado.innerText = "El texto ingresado no es un palíndromo.";
    }
}