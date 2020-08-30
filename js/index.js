const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navCollapse = document.querySelector('.navbar-collapse');
console.log(navList.clientHeight);

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    if (hamburger.classList.contains('is-active')) {
        const newHeight = navList.clientHeight + 20;
        navCollapse.style.height = `${newHeight}px`;
    } else {
        navCollapse.style.height = `0`;
    }
});

window.addEventListener('load', function(event) {
    const loaderHolder = document.querySelector('.loader-holder');
    const navbar = document.querySelector('.navbar');
    if (event.target.readyState === 'complete') {
        setTimeout(function() {
            loaderHolder.style.opacity = '0';
            loaderHolder.style.display = 'none';
            setTimeout(function name(params) {
                navbar.style.opacity = '1';
            }, 1000);
        }, 3000);
    }
});