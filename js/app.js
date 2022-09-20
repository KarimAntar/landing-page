/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const header = document.getElementsByClassName('page__header');
const footer = document.querySelector('footer');
const navMenu = document.getElementsByClassName('navbar__menu');
const navList = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')


let navLi = '';
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBuild() {
    
    sections.forEach(section => {
        navLi += `<li><a href='#${section.id}' class='menu__link'>${section.dataset.nav}</a></li>`; 
    });
    navList.innerHTML = navLi;
    
}

// Start nav building function

navBuild();


// Add class 'active' to section when near top of viewport

const navActive = document.querySelectorAll('.menu__link')
function setActive() {
    sections.forEach((section, index) => {
        const bound = section.getBoundingClientRect()
        if (bound.top <= 380 && bound.bottom >= 350) {
            // to add classnames
            section.classList.add('your-active-class')
            navActive[index].classList.add('navbar-active')
        } else {
            // to remove active classnames
            section.classList.remove('your-active-class')
            navActive[index].classList.remove('navbar-active')
        }
    }
)};

// Set sections as active

window.addEventListener('scroll',(event)=>{
    event.preventDefault()
    setActive();
});


/**
 * End Main Functions
 * Begin Events
 * 
*/





