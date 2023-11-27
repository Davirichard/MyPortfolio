document.addEventListener("DOMContentLoaded", function() {
    // Seletor do elemento h5
    const numeroElement = document.getElementById("numero");

    // Número final desejado
    const numeroFinal = 3;

    // Duração da animação em milissegundos
    const duracao = 1500;

    // Intervalo de atualização (a cada quanto tempo atualizar o número)
    const intervalo = 50;

    // Calcula o incremento com base na duração e no intervalo
    const incremento = (numeroFinal / (duracao / intervalo));

    // Função para atualizar o número
    function atualizarNumero(numeroAtual) {
        numeroElement.textContent = Math.round(numeroAtual) + "+";

        if (numeroAtual < numeroFinal) {
            // Se o número atual for menor que o número final, continua a animação
            setTimeout(function() {
                atualizarNumero(numeroAtual + incremento);
            }, intervalo);
        } else {
            // Garante que o número final seja exibido corretamente
            numeroElement.textContent = numeroFinal + "+";
        }
    }

    // Função para verificar se o elemento com a classe está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar a visibilidade do elemento e iniciar a animação
    function handleScroll() {
        const elementoComClasse = document.querySelector('.box-experiencia');
        if (isElementInViewport(elementoComClasse)) {
            // Torna o número visível
            numeroElement.style.visibility = 'visible';
            // Inicia a animação quando o elemento está visível
            atualizarNumero(0);
            // Remove o listener após a animação ter iniciado para não reiniciar
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Adiciona um listener para verificar a rolagem
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    // Seletor do elemento h5
    const numeroElement = document.getElementById("numero2");

    // Número final desejado
    const numeroFinal = 6;

    // Duração da animação em milissegundos
    const duracao = 1500;

    // Intervalo de atualização (a cada quanto tempo atualizar o número)
    const intervalo = 50;

    // Calcula o incremento com base na duração e no intervalo
    const incremento = (numeroFinal / (duracao / intervalo));

    // Função para atualizar o número
    function atualizarNumero(numeroAtual) {
        numeroElement.textContent = Math.round(numeroAtual) + "+";

        if (numeroAtual < numeroFinal) {
            // Se o número atual for menor que o número final, continua a animação
            setTimeout(function() {
                atualizarNumero(numeroAtual + incremento);
            }, intervalo);
        } else {
            // Garante que o número final seja exibido corretamente
            numeroElement.textContent = numeroFinal + "+";
        }
    }

    // Função para verificar se o elemento com a classe está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar a visibilidade do elemento e iniciar a animação
    function handleScroll() {
        const elementoComClasse = document.querySelector('.box-experiencia');
        if (isElementInViewport(elementoComClasse)) {
            // Torna o número visível
            numeroElement.style.visibility = 'visible';
            // Inicia a animação quando o elemento está visível
            atualizarNumero(0);
            // Remove o listener após a animação ter iniciado para não reiniciar
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Adiciona um listener para verificar a rolagem
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    // Seletor do elemento h5
    const numeroElement = document.getElementById("numero3");

    // Número final desejado
    const numeroFinal = 15;

    // Duração da animação em milissegundos
    const duracao = 1500;

    // Intervalo de atualização (a cada quanto tempo atualizar o número)
    const intervalo = 50;

    // Calcula o incremento com base na duração e no intervalo
    const incremento = (numeroFinal / (duracao / intervalo));

    // Função para atualizar o número
    function atualizarNumero(numeroAtual) {
        numeroElement.textContent = Math.round(numeroAtual) + "+";

        if (numeroAtual < numeroFinal) {
            // Se o número atual for menor que o número final, continua a animação
            setTimeout(function() {
                atualizarNumero(numeroAtual + incremento);
            }, intervalo);
        } else {
            // Garante que o número final seja exibido corretamente
            numeroElement.textContent = numeroFinal + "+";
        }
    }

    // Função para verificar se o elemento com a classe está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar a visibilidade do elemento e iniciar a animação
    function handleScroll() {
        const elementoComClasse = document.querySelector('.box-experiencia');
        if (isElementInViewport(elementoComClasse)) {
            // Torna o número visível
            numeroElement.style.visibility = 'visible';
            // Inicia a animação quando o elemento está visível
            atualizarNumero(0);
            // Remove o listener após a animação ter iniciado para não reiniciar
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Adiciona um listener para verificar a rolagem
    window.addEventListener('scroll', handleScroll);
});