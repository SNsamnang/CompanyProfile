// Function to handle the scroll animation
function handleScrollAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the element comes into view
            entry.target.classList.add('visible');
            // Optionally unobserve the element to stop checking after it's animated
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleScrollAnimation, {
    threshold: 0.5 // Trigger animation when 50% of the element is visible
});

// Target all elements with the 'animate-on-scroll' class
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Observe each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Toggle the nav-links visibility on hamburger click
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');  // Toggle the 'active' class on the navbar
});

// Close nav-links when clicking on a <li> link
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');  // Remove the 'active' class to hide nav-links
    });
});
