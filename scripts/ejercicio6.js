function validarRueda() {
    var diametro = parseFloat(document.getElementById('diametro').value);
    var grosor = parseFloat(document.getElementById('grosor').value);
    var resultado = document.getElementById('result');
    
    if (isNaN(diametro) || isNaN(grosor) || diametro <= 0 || grosor <= 0) {
        resultado.innerText = "Por favor, ingrese valores válidos mayores que 0.";
        return;
    }

    var mensaje = "";
    
    if (diametro > 1.4) {
        mensaje = "La rueda es para un vehículo grande";
        if (grosor < 0.4) {
            mensaje += " El grosor para esta rueda es inferior al recomendado";
        }
    } else if (diametro > 0.8) {
        mensaje = "La rueda es para un vehículo mediano";
        if (grosor < 0.25) {
            mensaje += " El grosor para esta rueda es inferior al recomendado";
        }
    } else {
        mensaje = "La rueda es para un vehículo pequeño";
    }
    
    resultado.innerText = mensaje;
}