document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling al hacer clic en un enlace del menú de navegación
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            scrollToSection(targetId);
        });
    });

    // Cambiar el fondo de la barra de navegación al hacer scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Función de scroll suave
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth"
            });
        }
    }

    // Animación en los botones al hacer clic
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("button-click");
            setTimeout(() => {
                button.classList.remove("button-click");
            }, 200);
        });
    });

    // Añadir efecto de entrada a las secciones al hacer scroll
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Loading page
    window.addEventListener("load", () => {
        console.log("Página cargada"); // Debug para confirmar la carga
        const loadingPage = document.getElementById("loading-page");
        setTimeout(() => {
            loadingPage.style.opacity = 0;
            setTimeout(() => {
                loadingPage.style.display = "none";
            }, 500);
        }, 800); // Espera 800ms para ocultar la página de carga
    });
    var typed = new Typed(".text", {
        strings: ["Técnico Informático", "Desarrollador Web"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
