document.addEventListener("DOMContentLoaded", function () {
    // Inicializa Swiper si el contenedor existe
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
        var swiper = new Swiper(swiperContainer, {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 0,
        });
    } else {
        console.error('No se encontró el contenedor Swiper.');
    }

    // Configura el menú de hamburguesa si los elementos existen
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar-sos');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    } else {
        console.error('No se encontraron los elementos con las clases "menu-toggle" o "navbar-sos".');
    }
});

window.addEventListener('load', adjustSwiperHeight);
window.addEventListener('resize', adjustSwiperHeight);

function adjustSwiperHeight() {
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.style.height = 'auto';  // Aplica 'height: auto' dinámicamente
        slide.style.width = '100%';   // Asegura que ocupe el ancho completo
    });
}
