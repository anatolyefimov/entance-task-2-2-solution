pagination(document.querySelector('.devices'), 215)
pagination(document.querySelector('.scenario'), 1);

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

let menu = document.querySelector('.menu')
document.querySelector('.icon-list').addEventListener('click', function() {
    menu.style.height = (menu.style.height === '0px') ? '90px' : '0px';
})

let filtersContainer = document.querySelector('.filters');
let filters = filtersContainer.children;
let devices = document.querySelector('.devices .book').children;
let arrowDevices = document.querySelector('.devices .arrow-devices');

for (let filter of filters) {
    if (filter.classList.contains('filter'))
        filter.addEventListener('click', function(event) {
            if (filter.classList.contains('close')) {
                for (let i = 0; i < filters.length; ++i) {
                    filters[i].style.display='block';
                }
                filter.classList.remove('close');
                filtersContainer.style.transition='height 0.5s';
                filtersContainer.style.height='150px';
                arrowDevices.style.transform = 'rotate(180deg)';
                return;
            }
            for (let cur of filters) {
                if (cur.classList.contains('active')) {
                    cur.classList.remove('active')
                }
            }
            this.classList.add('active')
            if (w <= 745) {
                arrowDevices.style.transform = 'none';
                filtersContainer.style.transition = 'none';
                filtersContainer.style.height = '30px';
                for (let i = 0;  i < filters.length; ++i) {
                    if (!filters[i].classList.contains('active') && !filters[i].classList.contains('arrow-devices')) {
                        filters[i].style.display = 'none';
                    }
                }
                this.classList.add('close')
            }
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

let popup = document.querySelector('.popup');

for (let i = 0; i < devices.length; ++i) {
    devices[i].addEventListener('click', function(event) {
        popup.style.left = event.x + 'px';
        popup.style.top = event.y + 'px';
        document.querySelector('.paranja').style.display = 'block';
        setTimeout(function() {
            popup.classList.add('opened')
            document.querySelector('.header').classList.add('opened');
            document.querySelector('.body-scroller').classList.add('opened')
        }, 10);
    })
}