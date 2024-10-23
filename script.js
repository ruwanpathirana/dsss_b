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

