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
        threshold: 1
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


    // Create the observer
const cards = document.querySelectorAll('.photo .card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Add animation when entering view
    } else {
      entry.target.classList.remove('animate'); // Remove animation when leaving view
    }
  });
});

// Attach the observer to each card
cards.forEach(card => {
  observer.observe(card);
});


document.addEventListener('DOMContentLoaded', function () {
    const reviewCards = document.querySelectorAll('.review-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1  // Trigger when at least 10% of the card is visible
    });

    reviewCards.forEach(card => {
      observer.observe(card);
    });
  });


  (function() {
    emailjs.init("M3_YU8JnPjve2mlj3"); // Replace with your public EmailJS user ID
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the email via EmailJS
    emailjs.send("service_gigxh68", "template_ihe61i8", {
      name: name,
      email: email,
      message: message
    })
    .then(function(response) {
      console.log("SUCCESS", response);
      document.getElementById('statusMessage').textContent = "Message sent successfully!";
    }, function(error) {
      console.log("FAILED", error);
      document.getElementById('statusMessage').textContent = "Failed to send message.";
    });
  });



  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Send the email via EmailJS
    emailjs.send("service_gigxh68", "template_ihe61i8", {
      to_email: "youremail@example.com",  // Add your email here
      from_name: name,
      message: message
    })
    .then(function(response) {
      // Show success message in the modal
      showModal("Message sent successfully!");
    }, function(error) {
      // Show error message in the modal
      showModal("Failed to send the message. Please try again.");
    });
  });
  
  // Function to show the modal with a message
  function showModal(message) {
    const modal = document.getElementById("popupModal");
    const modalMessage = document.getElementById("modalMessage");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    // Set the modal message
    modalMessage.textContent = message;
  
    // Display the modal
    modal.style.display = "block";
  
    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  



// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
