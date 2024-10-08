// scripts.js

// Function to change the background color of the navigation bar on click
function changeNavColor() {
    const nav = document.querySelector('nav');
    const colors = ['#003366', '#001f3f', '#00509E', '#002b5c']; // Array of different shades of blue
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    nav.style.backgroundColor = randomColor;
}

// Event listener for changing the background color when any nav link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', changeNavColor);
});

// Function to animate the cards when hovering over them
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
