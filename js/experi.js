document.addEventListener("DOMContentLoaded", function() {
    function animateNumber(elementId, finalNumber, duration, interval) {
        const numeroElement = document.getElementById(elementId);
        const increment = (finalNumber / (duration / interval));

        function updateNumber(currentNumber) {
            numeroElement.textContent = Math.round(currentNumber) + "+";

            if (currentNumber < finalNumber) {
                requestAnimationFrame(() => updateNumber(currentNumber + increment));
            } else {
                numeroElement.textContent = finalNumber + "+";
            }
        }

        function handleScroll() {
            const elementoComClasse = document.querySelector('.box-experiencia');
            if (isElementInViewport(elementoComClasse)) {
                numeroElement.style.visibility = 'visible';
                updateNumber(0);
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    animateNumber("numero", 3, 10000, 100);
    animateNumber("numero2", 6, 10000, 100);
    animateNumber("numero3", 18, 10000, 50);
});
