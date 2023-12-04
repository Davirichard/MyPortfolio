const texto = "Desenvolvedor Front-end e UI designer";
const titulo = document.getElementById('texto-maquina');
let index = 0;
const velocidadeEscrita = 100;
const tempoEsperaInicio = 2000;
const tempoEsperaFim = 1000;

function maquinaEscrever() {
    if (index < texto.length) {
        titulo.textContent += texto.charAt(index);
        index++;
        setTimeout(maquinaEscrever, velocidadeEscrita);
    } else {
        setTimeout(apagarLetras, tempoEsperaFim);
    }
}

function apagarLetras() {
    if (index >= 0) {
        titulo.textContent = texto.substring(0, index);
        index--;
        setTimeout(apagarLetras, velocidadeEscrita);
    } else {
        index = 0;
        setTimeout(maquinaEscrever, tempoEsperaInicio);
    }
}

// Inicia a máquina de escrever
maquinaEscrever();
