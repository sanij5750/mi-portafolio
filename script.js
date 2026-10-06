// =========================
// Menú móvil
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Cerrar el menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// Año automático del footer
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// Formulario de contacto
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "#f87171";
        return;
    }

    formMessage.textContent =
        "¡Gracias! Tu mensaje ha sido preparado correctamente.";
    formMessage.style.color = "#4ade80";

    contactForm.reset();
});


// =========================
// Efecto de navegación
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(10, 15, 28, 0.95)";
    } else {
        header.style.background = "rgba(10, 15, 28, 0.85)";
    }
});

