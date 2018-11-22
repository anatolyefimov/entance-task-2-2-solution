pagination(document.querySelector('.devices'), 215)
pagination(document.querySelector('.scenario'), 1);

let menu = document.querySelector('.menu')
document.querySelector('.icon-list').addEventListener('click', function() {
    menu.style.height = (menu.style.height === '0px') ? '90px' : '0px';
})

let filters = document.querySelector('.filters').children;
let devices = document.querySelector('.devices .book').children;
for (let filter of filters) {
    filter.addEventListener('click', function() {
        for (let cur of filters) {
            if (cur.classList.contains('active')) {
                cur.classList.remove('active')
            }
        }
        this.classList.add('active')
        for (let i = 0; i < devices.length; ++i) {
            if (devices[i].getAttribute('filter') === this.getAttribute('filter') || this.getAttribute('filter') === 'all') {
                devices[i].style.display = 'block';
            }
            else {
                devices[i].style.display = 'none';
            }
        }
    })
}