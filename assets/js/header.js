'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector(".mobile-menu");

// const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// const navElemArr = [ navOpenBtn];

// for (let i = 0; i < navElemArr.length; i++) {
//     navElemArr[i].addEventListener("click", function() {
//         navbar.classList.toggle("active");
//         overlay.classList.toggle("active");
//     });
// }
navOpenBtn.addEventListener("click", function() {
    navbar.classList.toggle("open");
    overlay.classList.toggle("active");
});



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    window.scrollY >= 200 ? header.classList.add("active") :
    header && header.classList.remove("active");
})



// Desktop Navbar
let open = false;
let navItemList = document.querySelectorAll('.lower-nav-right .nav-item .nav-link')
let currentOpened = null
navItemList.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        let featureSections = document.querySelector('.lower-nav-right .nav-item .feature-section.d-flex')
        if (featureSections) {
            featureSections.classList.remove('d-flex')
        }
        e.target.nextElementSibling.classList.add('d-flex')
        if (currentOpened == e.target.dataset.id) {
            if (open) {
                e.target.nextElementSibling.classList.remove('d-flex')
            } else {
                e.target.nextElementSibling.classList.add('d-flex')
            }
        }
        open = !open
        currentOpened = e.target.dataset.id
    })
})

document.body.querySelector('main').addEventListener('click', () => {
    let featureSections = document.querySelector('.lower-nav-right .nav-item .feature-section.d-flex')
    if (featureSections) {
        featureSections.classList.remove('d-flex')
    }
})