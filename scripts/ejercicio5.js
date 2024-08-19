function calcularCalificacion() {

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || 
        nota1 < 0 || nota1 > 20 || 
        nota2 < 0 || nota2 > 20 || 
        nota3 < 0 || nota3 > 20) {
        document.getElementById('result').innerText = "Por favor, ingrese notas válidas entre 0 y 20.";
        return;
    }
    
    var notaFinal = (nota1 + nota2 + nota3) / 3;
    
    var resultado;
    if (notaFinal < 10.5) {
        resultado = "Desaprobado";
    } else if (notaFinal <= 15) {
        resultado = "Rendimiento medio";
    } else if (notaFinal <= 17) {
        resultado = "Rendimiento alto";
    } else {
        resultado = "Rendimiento excelente";
    }

    document.getElementById('result').innerText = "Nota final: " + notaFinal.toFixed(2) + ". " + resultado;
}