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
let devicesContainer = document.querySelector('.devices .book')
let arrowsForDevicesPaging = document.querySelector('.devices .arrows').children

for (let filter of filters) {
    if (filter.classList.contains('filter'))
        filter.addEventListener('click', function(event) {
            w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            if (w <= 745) {
                if (filtersContainer.classList.contains('opened')) {
                    for (let i = 0; i < devices.length; ++i) {
                        if (devices[i].getAttribute('filter') !== this.getAttribute('filter') && this.getAttribute('filter') !=='all' ) {
                            devices[i].style.display = 'none';
                        }
                        else {
                            devices[i].style.display = 'flex';
                        }
                    }
                    for (let i = 0; i < filters.length; ++i) {
                        filters[i].classList.remove('active')
                        filters[i].style.display = 'none';
                    }
                    this.style.display='block';
                    this.classList.add('active')
                    filtersContainer.classList.remove('opened'); 
                }
                else {
                    filtersContainer.classList.add('opened');
                    for (let i = 0; i < filters.length; ++i) {
                        filters[i].style.display = 'block';
                    }
                }
            }
            else {
                for (let i = 0; i < filters.length; ++i) {
                    filters[i].classList.remove('active')
                }
                this.classList.add('active');
                for (let i = 0; i < devices.length; ++i) {
                    if (devices[i].getAttribute('filter') !== this.getAttribute('filter') && this.getAttribute('filter') !=='all' ) {
                        devices[i].style.display = 'none';
                    }
                    else {
                        devices[i].style.display = 'flex';
                    }
                    
                }
                if (-parseInt(devicesContainer.style.marginLeft) + parseInt(getComputedStyle(devicesContainer).width) < devicesContainer.scrollWidth  ) {
                    console.log('test')
                    arrowsForDevicesPaging[0].style.opacity = '1';
                }
                else {
                    arrowsForDevicesPaging[0].style.opacity = '0.3';
                }
                if (parseInt(devicesContainer.style.marginLeft) <  0) {
                    arrowsForDevicesPaging[1].style.opacity = '1';
                }
                else {
                    arrowsForDevicesPaging[1].style.opacity = '0.3';
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

let arrowDouble = document.querySelector('.arrow-double')
document.querySelector('.info .hide-scrollbar').addEventListener('scroll', function(event) {
    if (event.target.scrollTop > 0) {
        arrowDouble.style.opacity = '0.3';
    }
    else {
        arrowDouble.style.opacity = '0.8';
    }
})

let scenario = document.querySelector('.scenario .book')

scenario.addEventListener('click', function(event) {
    if (event.target.classList.contains('plate')) {
        if (event.target.classList.contains('in-gear')) {
            event.target.classList.remove('in-gear')
        }
        else {
            event.target.classList.add('in-gear')
        }
    }
})