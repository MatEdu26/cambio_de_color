let color_bg = document.getElementById('color_bg');

let color_body = document.getElementById('cuerpo')

function cambio_back_color() {
    let selector_color = color_bg.value;
    color_body.style.backgroundColor = selector_color;
}

color_bg.addEventListener('input', cambio_back_color);

