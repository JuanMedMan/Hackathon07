function verificarDNI() {
    var dni = document.getElementById('dni').value;
    var letraUsuario = document.getElementById('letra').value.toUpperCase();
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var resultElement = document.getElementById('result');

    dni = parseInt(dni, 10);
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        resultElement.innerText = "Número de DNI no válido. Debe ser un número entre 0 y 99999999.";
        return;
    }

    var indexLetra = dni % 23;
    var letraCalculada = letras[indexLetra];

    if (letraUsuario !== letraCalculada) {
        resultElement.innerText = "La letra indicada no es correcta. La letra correcta es " + letraCalculada + ".";
    } else {
        resultElement.innerText = "Número y letra del DNI son correctos.";
    }
}