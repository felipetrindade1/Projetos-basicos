function calcular() {
    let name = document.querySelector('#name').value
    let altura = parseFloat(document.querySelector('#height').value)
    let peso = parseFloat(document.querySelector('#kg').value)

    if (name && altura > 0 && peso > 0) {
        const imc = peso / (altura * altura)
        let classificacao = ""

        if (imc < 18.5) {
            classificacao = "Abaixo do peso"
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal"
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso"
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = "Obesidade grau 1"
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = "Obesidade grau 2"
        } else {
            classificacao = "Obesidade grau 3 (obesidade mórbida)"
        }

        const resultado = document.querySelector('.resultado')
        resultado.textContent = `Olá ${name}, seu IMC é: ${imc.toFixed(2)} - ${classificacao}`
    } else {
        const resultado = document.querySelector('.resultado')
        resultado.textContent = 'Por favor, insira valores válidos em todos os campos.'
    }
}
