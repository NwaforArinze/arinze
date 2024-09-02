let currentDay = document.querySelector('[data-testid="currentDay"]');
let currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')

setInterval(() => {
    const date = new Date();
    currentTimeUTC.innerHTML = date.toUTCString()
}, 1000);

const date = new Date();
const dayOfWeekNumber = date.getDay();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

currentDay.innerHTML = (dayOfWeekName);

function navSlide(){
    const burger = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const overlay = document.createElement('div'); // Create the overlay div
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('close');
        overlay.classList.toggle('active'); // Toggle overlay visibility
        document.body.classList.toggle('nav-active'); // Prevent body scrolling
    
    });

    overlay.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('close');
        overlay.classList.remove('active');
        document.body.classList.remove('nav-active');
    });
   
    navLinks.forEach(link =>{
        link.addEventListener('click',()=>{
            nav.classList.remove('nav-active')
            burger.classList.remove('close'); // Reset the burger icon
            overlay.classList.remove('active'); // Hide overlay
            document.body.classList.remove('nav-active');
        });
    })

    nav
}   
 navSlide();

