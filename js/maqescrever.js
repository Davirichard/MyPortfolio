const texto = innerHTML="Desenvolvedor Front-end e UI designer";
        const titulo = document.getElementById('texto-maquina');
        let index = 0;

        function maquinaEscrever() {
            if (index < texto.length) {
                titulo.innerHTML += texto.charAt(index);
                index++;
                setTimeout(maquinaEscrever, 90);
            } else {
                setTimeout(apagarLetras, 2000);
            }
        }

        function apagarLetras() {
            if (index >= 0) {
                titulo.innerHTML = texto.substring(0, index);
                index--;
                setTimeout(apagarLetras, 100);
            } else {
                index = 0;
                setTimeout(maquinaEscrever, 1000);
            }
        }

        maquinaEscrever();
        // Inicia a máquina de escrever
        maquinaEscrever();