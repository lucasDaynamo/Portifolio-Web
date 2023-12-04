// horario
const horas1 = document.getElementById("horas1");
const minutos1 = document.getElementById("minutos1");
const segundos1 = document.getElementById("segundos1");

// data
const yyyy1 = document.getElementById("yyyy1")
const mm1 = document.getElementById("mm1")
const dd1 = document.getElementById("dd1")

//configuração
const relogio = setInterval(() => {

    let datetoday = new Date();

    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    let ano = datetoday.getFullYear();
    let mes = datetoday.getMonth()+1;
    let dia = datetoday.getDate();

    // stilizaçao dos numerais
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    if (ano < 10) ano = '0' + ano;
    if (mes < 10) mes = '0' + mes;
    if (dia < 10) dia = '0' + dia;

    // o que vai aparecer na tela
    segundos1.textContent = sec
    minutos1.textContent = min
    horas1.textContent = hr

    yyyy1.textContent = ano
    mm1.textContent = mes
    dd1.textContent = dia

});
//dd=dia ,mm=mês ,yyyy=ano.

//fixar a tela em um tipo.
screen.orientation.lock('portrait')
screen.orientation.lock('landscape')
screen.orientation.unlock()