let arrows = document.querySelector('.devices .arrows').childNodes;
let container = document.querySelector('.devices .book');
let containerWidht = parseInt(getComputedStyle(container).width)
let pageWidth = containerWidht - containerWidht % 215;
container.style.marginLeft = '0px'

function pagingCheck() {
    if (parseInt(container.style.marginLeft)  - pageWidth > -container.scrollWidth) {
        arrows[0].style.opacity = '1';
    }
    else {
        arrows[0].style.opacity = '0.3';
    }
}

pagingCheck();

arrows[0].addEventListener('click', function(event) {
    if (arrows[0].style.opacity === '1') {
        container.style.marginLeft = parseInt(container.style.marginLeft) - pageWidth + 'px'
        pagingCheck();
    }
})


console.log(containerWidht)

