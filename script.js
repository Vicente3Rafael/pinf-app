function calcular() {
    let custoMensal = document.getElementById('mensal').value
    let custoAnual = custoMensal*12
    let idade = document.getElementById('idadeAnos').value
    let calculoTotal = ((custoAnual*idade)*15)/100
    let result = document.getElementById("result");

    result.value = calculoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log(calculoTotal);
        console.log(custoAnual);
        console.log(custoMensal);
}

function calcularTwo() {
    let custoMensal = document.getElementById('mensal').value
    let custoAnual = custoMensal*12
    let result = document.getElementById('resultThree');
    let result2 = document.getElementById('resultTwo');
    let rentabilidade = document.getElementById('rent').value

    let calculo = custoAnual/(rentabilidade/100)
    result.value = calculo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    let tempoAnos = calculo/((custoAnual*15)/100)
    result2.value = parseInt(tempoAnos)
}
