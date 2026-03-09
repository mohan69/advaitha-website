// Quantum Canvas: The Observer Effect (Behind the content)
const canvas = document.getElementById('quantumCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (mouse.x) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 110, 255, 0.035)'; // Subtle "Manifestation" light
        ctx.fill();
    }
    requestAnimationFrame(animate);
}
animate();

// Mobile Navigation: Collapsing the menu wave
const navLinks = document.getElementById('navLinks');
const toggleBtn = document.getElementById('mobileMenuToggle');

function toggleMenu() {
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle('active');
        toggleBtn.classList.toggle('active'); // Rotates hamburger to X (CSS needed)
    }
}
