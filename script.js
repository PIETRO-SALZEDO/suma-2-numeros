function sumar() {
    // Obtener los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    // Calcular la suma
    let suma = num1 + num2;

    // Mostrar el resultado
    document.getElementById('resultado').textContent = suma;
    
    }
