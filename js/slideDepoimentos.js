document.addEventListener("DOMContentLoaded", function () {
    var depoimentos = document.querySelectorAll(".section7 .box-flex .depoimentos");
    var currentIndex = 0;

    function showDepoimento(index) {
        depoimentos.forEach(function (depoimento, i) {
            if (i === index) {
                depoimento.classList.add("visible");
                depoimento.classList.remove("invisible"); // Adicionado para remover a classe invisible
            } else {
                depoimento.classList.remove("visible");
                depoimento.classList.add("invisible");
            }
        });
    }
    

    function nextDepoimento() {
        currentIndex = (currentIndex + 1) % depoimentos.length;
        showDepoimento(currentIndex);
    }

    setInterval(nextDepoimento, 5000); // Altere 5000 para o intervalo desejado em milissegundos

    function handleScroll() {
        depoimentos.forEach(function (depoimento) {
            var bounding = depoimento.getBoundingClientRect();

            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                depoimento.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    // Execute handleScroll também na carga inicial da página
    handleScroll();
});