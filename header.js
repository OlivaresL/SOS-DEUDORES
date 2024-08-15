document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en el símbolo de "X"
        navMenu.addEventListener('click', function (event) {
            if (event.target.classList.contains('nav-menu')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offset = 110;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }

                // Cerrar el menú después de hacer clic en un enlace
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    } else {
        console.error('No se encontraron los elementos con las ID "menu-toggle" o "nav-menu".');
    }
});

const header = document.querySelector('header');
const stickyPoint = 200;
let lastScrollTop = 0;

function checkScroll() {
    const scrollTop = window.pageYOffset;
    const headerIsSticky = header.classList.contains('sticky');

    if (scrollTop > stickyPoint) {
        if (!headerIsSticky) {
            header.classList.add('sticky');
            header.classList.remove('delayed');
        } else if (scrollTop < lastScrollTop && !header.classList.contains('delayed')) {
            header.classList.add('delayed');
        }
    } else {
        header.classList.remove('sticky', 'delayed');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', checkScroll);
