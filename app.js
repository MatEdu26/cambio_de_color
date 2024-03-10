//funcion cambio de color background

let color_bg = document.getElementById('color_bg');

let color_body = document.getElementById('cuerpo')

function cambio_back_color() {
    let selector_color = color_bg.value;
    color_body.style.backgroundColor = selector_color;
}

color_bg.addEventListener('input', cambio_back_color);

//funcion cambio de color titulo

let color_titulo = document.getElementById('color_titulo');

let title = document.getElementById('titulo');

function color_title() {
    let color = color_titulo.value;
    title.style.color = color;
}

color_titulo.addEventListener('input', color_title);

//funcion cambio de texto de titulo

let titulo = document.getElementById('titulo');

let texto = document.getElementById('texto_nuevo');

function cambiarTitulo() {
    let nuevoTexto = document.getElementById('texto_nuevo').value;
    document.getElementById('titulo').textContent = nuevoTexto;
}