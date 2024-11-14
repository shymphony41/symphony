document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const cards = document.querySelectorAll(".solution-card");
    const nextButton = document.querySelector(".nav-button");

    // Mostrar la primera tarjeta
    if (cards.length > 0) {
        cards[currentIndex].classList.add("active");
    }

    // Cambiar tarjeta al hacer clic en el botón
    nextButton.addEventListener("click", function () {
        if (cards.length > 0) {
            // Aplicar animación de salida a la tarjeta actual
            cards[currentIndex].classList.add("exit");

            // Esperar a que termine la animación antes de ocultar la tarjeta
            setTimeout(() => {
                cards[currentIndex].classList.remove("active", "exit");

                // Mover al siguiente índice y volver al primero si estamos en el último
                currentIndex = (currentIndex + 1) % cards.length;

                // Mostrar la siguiente tarjeta con animación
                cards[currentIndex].classList.add("active");
            }, 500); // Tiempo de espera coincide con la duración de la animación CSS
        }
    });
});
