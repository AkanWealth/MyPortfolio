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
            }, 500);
        }, 1000);
    }
});

const items = document.querySelectorAll(".skill-list li");
const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
const run = () =>
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });

//Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);