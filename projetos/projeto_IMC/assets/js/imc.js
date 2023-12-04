const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //previne o corpotamento padrao do evento submit do js,ou seja impede o carregamento da pagina

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    const imc = peso / (altura * altura).toFixed(2);//calculo do imc

    // alert(`${peso} + ${altura} = ${imc.toFixed(2)}`)

    document.getElementById('infos').classList.remove('hidden');//remover a classe hidden do id infos e ver se foi removido.

    //condições do imc

    const campoImc = document.getElementById('value');//aonde vai aparecer o imc

    let descricao;//aonde vai aparecer o texto da descrição

    campoImc.classList.add("attention");

    if (imc < 18.5) {
        descricao = "Cuidado! você está abaixo do peso";
        campoImc.classList.remove("attention");
        campoImc.style.color = "blue"
    }

    else if ((imc >= 18.5) && (imc <= 25)) {
        descricao = "você! esta no peso ideal!"
        campoImc.classList.remove("attention");
        campoImc.style.color = "green"
    }
    else if ((imc > 25) && (imc <= 30)) {
        descricao = "Cuidado! você está no sobrepeso!"
        campoImc.classList.remove("attention");
        campoImc.style.color = "yellow"
    }
    else if ((imc > 30) && (imc <= 35)) {
        descricao = "Cuidado! você está com obesidade moderada!"
        campoImc.classList.remove("attention");
        campoImc.style.color = "orange"
    }
    else if ((imc > 35) && (imc <= 40)) {
        descricao = "Cuidado! você está com obesidade severa!"
        campoImc.classList.remove("attention");
        campoImc.style.color = "rgb(165, 81, 42)"
    }
    else {
        descricao = "Atenção! você está com obesidade morbida!";
        campoImc.style.color = "red"
    }

    document.getElementById('description').textContent = descricao;
    campoImc.textContent = imc.toFixed(2);
})