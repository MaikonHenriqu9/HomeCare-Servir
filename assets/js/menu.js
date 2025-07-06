const btnAbrirMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');

btnAbrirMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
});
