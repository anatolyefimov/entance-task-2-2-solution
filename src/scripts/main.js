pagination(document.querySelector('.devices'), 215)
pagination(document.querySelector('.scenario'), 1);

let menu = document.querySelector('.menu')
document.querySelector('.icon-list').addEventListener('click', function() {
    menu.style.height = (menu.style.height === '0px') ? '90px' : '0px';
})
