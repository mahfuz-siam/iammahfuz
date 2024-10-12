const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Function to toggle the menu
menuIcon.onclick = () => {
  navbar.classList.toggle('active'); // Toggle 'active' class on click
};

// Close the menu if the user clicks outside of it
window.onclick = (event) => {
  if (!navbar.contains(event.target) && event.target !== menuIcon) {
    navbar.classList.remove('active'); // Remove 'active' class to close menu
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});




    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progressbar');

        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            const partiallyInView = rect.top < window.innerHeight && rect.bottom >= 0;

            // Start animation when in view
            if (partiallyInView && !bar.classList.contains('animate')) {
                bar.classList.add('animate');
                bar.dataset.animate = "true";
            }

            // Reverse animation when out of view
            if (!inView && bar.classList.contains('animate')) {
                bar.classList.remove('animate');
                bar.dataset.animate = "false";
            }
        });
    }

    window.addEventListener('scroll', animateProgressBars);