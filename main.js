let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextSlide() {
    items[currentIndex].style.opacity = 0; // Hide current slide
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first slide
    items[currentIndex].style.opacity = 1; // Show next slide
}

// Initialize the first slide to be visible
items[currentIndex].style.opacity = 1;

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

function ToggleMenu(event) {
    const menu = document.getElementById('slideoutMenu');
    menu.classList.toggle('active');
    event.stopPropagation(); // Prevent the event from bubbling up
}

// Close the menu when clicking outside of it
document.addEventListener(function(event) {
    const menu = document.getElementById('slideoutMenu');
    const hamburger = document.querySelector('.icon');
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});