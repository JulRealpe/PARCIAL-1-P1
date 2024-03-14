function suma_div(num) {
    let suma = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    return suma;
}
function sonAmigos(num1, num2) {
    // Fase 1:suma de los divisores del primer número
    const sumNum1Divisors = suma_div(num1);
    
    // Fase 2:la suma de los divisores del primer número es igual al segundo número
    if (sumNum1Divisors === num2) {
        // Fase 3:la suma de los divisores de ambos numeros son iguales
        return suma_div(num2) === num1;
    }
    
    return false;
}

// Función para manejar el clic en el botón de verificar
function checkAmicableNumbers() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);

    if (sonAmigos(number1, number2)) {
        document.getElementById("result").innerText = `${number1} y ${number2} son números amigos.`;
    } else {
        document.getElementById("result").innerText = `${number1} y ${number2} no son números amigos.`;
    }
}

// Asociar la función checkAmicableNumbers al evento click del botón
document.getElementById("checkButton").addEventListener("click", checkAmicableNumbers);