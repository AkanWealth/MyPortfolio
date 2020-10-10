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

const testimonialContainer = document.querySelector(".testimonial-container")
const testimonialGhost = document.querySelector(".testimonial-ghost-container")
const nextBtn = document.querySelector("#next")
const testimonials = [{
        name: "Sarah Drucker",
        text: "Working with John Doe was a real pleasure, he helps me extending my business online.",
        avatar: "https://shorturl.at/eqyGW",
    },
    {
        name: "Nicolas Jaylen",
        text: "My business was broken, then i start working with John Doe, and now everything works fine.",
        avatar: "https://shorturl.at/ptC58",
    },
    {
        name: "Awa Fall",
        text: "John Doe helps me a lot from designing my website to make it live in just 5 weeks.",
        avatar: "https://shorturl.at/lwBY1",
    },
]
let counter = 0

const handleFirstTestimonial = () => {
    // Author avatar selection
    testimonialContainer.children[1].children[0].src = testimonials[0].avatar
        // Testimonial Author selection
    testimonialContainer.children[1].children[1].innerHTML = testimonials[0].name
        // Testimonial text selection
    testimonialContainer.children[1].children[2].innerHTML = `
  <i class="fas fa-quote-left"></i>
  ${testimonials[0].text}
  <i class="fas fa-quote-right"></i>
  `
}

const activeTestimonial = () => {
    testimonialContainer.classList.add("testimonial-active-animated")
        // Author avatar selection
    testimonialContainer.children[1].children[0].src =
        testimonials[counter].avatar
        // Testimonial Author selection
    testimonialContainer.children[1].children[1].innerHTML =
        testimonials[counter].name
        // Testimonial text selection
    testimonialContainer.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[counter].text}
  <i class="fas fa-quote-right"></i>`

    setTimeout(() => {
        // Remove the active animated class
        testimonialContainer.classList.remove("testimonial-active-animated")
    }, 1400)
}

const inactiveTestimonial = () => {
    testimonialGhost.classList.add("testimonial-inactive-animated")
    let newCounter = counter
    if (newCounter === 0) {
        newCounter = testimonials.length
    }
    // image selection
    testimonialGhost.children[1].children[0].src =
        testimonials[newCounter - 1].avatar
        // title selection
    testimonialGhost.children[1].children[1].innerHTML =
        testimonials[newCounter - 1].name
        // text selection
    testimonialGhost.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[newCounter - 1].text}
  <i class="fas fa-quote-right"></i>`
    setTimeout(() => {
        // Remove the active animated class
        testimonialGhost.classList.remove("testimonial-inactive-animated")
    }, 1400)
}

nextBtn.addEventListener("click", () => {
    if (counter === testimonials.length - 1) {
        counter = 0
        inactiveTestimonial()
        activeTestimonial()
    } else {
        counter++
        inactiveTestimonial()
        activeTestimonial()
    }
})

handleFirstTestimonial()