const visor = document.getElementById("resultado");

//funções dos botões
function insert(num) {
     if(visor >0){
        visor.innerHTML += 0
     }
    visor.innerHTML += num;
}

function clean() {
    visor.innerHTML = "";
}

function back() {
    let resultado = visor.innerHTML;
    visor.innerHTML = resultado.substring(0,resultado.length - 1)
}

function calcular() {
    resultado = visor.innerHTML;
    

    if (resultado.length > 2) {
        visor.innerHTML = eval(resultado);
} 
else {
    visor.innerHTML = 'Error!!!';
    const mytimeout = setTimeout(clean, 2000);
}


}


