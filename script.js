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
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            shape: {
                type: "circle"
            },
            color: {
                value: "#ffffff"
            },
            opacity: {
                value: 0.3,
                random: false
            },
            size: {
                value: 5,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                out_mode: "bounce"
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        detectRetina: true
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


// CHATBOT

// Toggle Chat Window
function toggleChat() {
    const chatWindow = document.getElementById('chatbot-window');
    const chatIconImage = document.getElementById('chat-icon-image');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
      chatWindow.style.display = 'flex';
      chatIconImage.src = '/img/chatcut.png';  // Change icon image when chat is open
    } else {
      chatWindow.style.display = 'none';
      chatIconImage.src = '/img/chat.png';     // Change back to original icon
    }
  }
  
  // Send Message to Chatbot
  function sendMessage() {
    const inputBox = document.getElementById("user-input");
    const message = inputBox.value;
  
    if (message.trim() === "") {
      return;
    }
  
    // Add user's message to chat
    addMessage("You", message);
  
    // Send message to the backend
    fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_input: message, chat_history: [] }), // Send the chat history if applicable
      })
    .then((response) => response.json())
    .then((data) => {
      // Add AI's response to chat
      addMessage("Bot", data.response);
    })
    .catch((error) => {
      console.error("Error:", error);
      addMessage("Bot", "Error: Unable to get response from the server.");
    });
  
    // Clear input box
    inputBox.value = "";
  }
  
  // Add Message to Chat Box
  function addMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
  
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
  
    if (sender === "You") {
      messageElement.classList.add("user-message");
    } else {
      messageElement.classList.add("ai-message");
    }
  
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  