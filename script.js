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

// Select all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


(function () {
    emailjs.init("fFf8rz3Uv-a41Po1s"); // Replace with your EmailJS Public Key
})();

// Handle Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs.send("service_dt5sbfb", "template_ey0icma", {
        name: name,
        email: email,
        message: message,
    }).then(
        function (response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            alert("Failed to send message. Please try again later.");
            console.error("FAILED...", error);
        }
    );
});
