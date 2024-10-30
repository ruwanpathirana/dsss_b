window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > window.innerHeight) { // Change 'window.innerHeight' if you want it to trigger earlier
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};


document.addEventListener('DOMContentLoaded', function () {
    tsParticles.load('tshexagon', {
        particles: {
            number: {
                value: 80,  // Number of particles (lines and nodes)
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            shape: {
                type: "circle",  // Particles are circular nodes
            },
            color: {
                value: "#ffffff"  // Set node color (white)
            },
            opacity: {
                value: 0.3,  // Slightly transparent nodes
                random: false
            },
            size: {
                value: 5,  // Size of nodes
                random: true
            },
            line_linked: {
                enable: true,  // Enable the lines between particles
                distance: 150,  // Max distance between linked nodes
                color: "#ffffff",  // Line color (white)
                opacity: 0.4,  // Line opacity
                width: 1.5  // Line thickness
            },
            move: {
                enable: true,
                speed: 1,  // Movement speed
                direction: "none",
                out_mode: "bounce",  // Nodes will bounce when reaching edge
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"  // Lines get pulled towards cursor
                },
                onclick: {
                    enable: true,
                    mode: "push"  // Click to add more particles
                }
            },
            modes: {
                grab: {
                    distance: 200,  // Distance for "grab" effect
                    line_linked: {
                        opacity: 1  // Line opacity when "grabbed"
                    }
                },
                push: {
                    particles_nb: 4  // Number of particles added on click
                }
            }
        },
        detectRetina: true  // For high-DPI screens
    });
});

// SLIDE

$(document).ready(function () {
    // Hover functionality for navbar items with dropdowns
    $('.nav-item.dropdown').hover(
        function () {
            // Show the dropdown menu on mouse enter
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
        },
        function () {
            // Hide the dropdown menu on mouse leave
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
        }
    );
});



document.addEventListener('DOMContentLoaded', function () {
    let counters = document.querySelectorAll('.count');
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let target = entry.target;
                let countTo = target.getAttribute('data-count');
                let countNum = 0;
                let duration = 1000;  // 2 seconds for the count animation
                
                let updateCounter = function() {
                    let increment = countTo / duration * 50;  // Adjust increment based on duration
                    countNum += increment;
                    if (countNum < countTo) {
                        target.innerText = Math.floor(countNum);
                        setTimeout(updateCounter, 50);
                    } else {
                        target.innerText = countTo;
                    }
                };
                updateCounter();
                observer.unobserve(target);  // Stop observing once it's counted
            }
        });
    });

    counters.forEach(function(counter) {
        observer.observe(counter);
    });
});



let currentPosition = 0;
const cardWidth = 300; // 280px width + 20px gap
const visibleCards = 3; // Number of cards visible at a time

function slideLeft() {
    const cardsContainer = document.querySelector('.blog-cards');
    if (currentPosition < 0) {
        currentPosition += cardWidth;
        cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    }
}

function slideRight() {
    const cardsContainer = document.querySelector('.blog-cards');
    const totalCards = document.querySelectorAll('.blog-card').length;
    const maxPosition = -(cardWidth * (totalCards - visibleCards));

    if (currentPosition > maxPosition) {
        currentPosition -= cardWidth;
        cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    }
}