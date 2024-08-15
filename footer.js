function adjustFooterHeight() {
    const footer = document.querySelector('footer');
    footer.style.height = 'auto';  // Ajusta la altura automáticamente
    footer.style.width = '100%';   // Asegura que ocupe el ancho completo
}

// Llama a la función para ajustarlo en la carga inicial
adjustFooterHeight();

// Si es necesario, puedes llamar a esta función nuevamente cuando la ventana cambie de tamaño
window.addEventListener('resize', adjustFooterHeight);

window.addEventListener('load', function() {
    document.querySelector('footer').classList.add('show-footer');
});
