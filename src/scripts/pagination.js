function pagination(container, remainder) {  
    let arrows = container.querySelector('.arrows').childNodes;
    container = container.querySelector('.book')
    let containerWidht = parseInt(getComputedStyle(container).width)
    let pageWidth = containerWidht - containerWidht % remainder;
    container.style.marginLeft = '0px'  
    function pagingCheck() {
        if (-parseInt(container.style.marginLeft) + containerWidht < container.scrollWidth  ) {
            console.log('test')
            arrows[0].style.opacity = '1';
        }
        else {
            arrows[0].style.opacity = '0.3';
        }
        if (parseInt(container.style.marginLeft) <  0) {
            arrows[1].style.opacity = '1';
        }
        else {
            arrows[1].style.opacity = '0.3';
        }
        
    }

    pagingCheck();

    arrows[0].addEventListener('click', function(event) {
        if (arrows[0].style.opacity === '1') {
            container.style.marginLeft = parseInt(container.style.marginLeft) - pageWidth + 'px'
            pagingCheck();
        }
    })

    arrows[1].addEventListener('click', function(event) {
        if (arrows[1].style.opacity === '1') {
            container.style.marginLeft = parseInt(container.style.marginLeft) + pageWidth + 'px'
            pagingCheck()
        }
    })
}