 // ========================================
// RELOJ EN TIEMPO REAL
// ========================================
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    if (clockElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const timeString = now.toLocaleDateString('es-ES', options);
        clockElement.textContent = timeString;
    }
}

// Actualizar el reloj cada segundo
if (document.getElementById('clock')) {
    updateClock();
    setInterval(updateClock, 1000);
}

// ========================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Validar el formulario
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }

        // Si es válido, obtener los datos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        // Aquí normalmente enviarías los datos a un servidor
        console.log('Datos del formulario:', {
            nombre,
            email,
            asunto,
            mensaje
        });

        // Mostrar mensaje de éxito
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        // Limpiar el formulario
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// ========================================
// ANIMACIÓN DE BARRAS DE PROGRESO
// ========================================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Ejecutar animación cuando el documento esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProgressBars);
} else {
    animateProgressBars();
}

// ========================================
// SMOOTH SCROLL PARA ENLACES
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// EFECTO DE APARICIÓN AL HACER SCROLL
// ========================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.card, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Ejecutar efecto de revelación
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealOnScroll);
} else {
    revealOnScroll();
}

// ========================================
// NAVEGACIÓN ACTIVA
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ========================================
// CONSOLE LOG DE BIENVENIDA
// ========================================
console.log('%c¡Hola! 👋', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cGracias por visitar mi portafolio', 'font-size: 14px; color: #333;');
console.log('%c¿Interesado en el código? Visita mi GitHub', 'font-size: 12px; color: #666;');