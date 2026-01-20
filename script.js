// ===== Smooth Scroll & Navigation =====
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Active section highlighting on scroll
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// ===== Parameter Toggle =====
const toggleButtons = document.querySelectorAll('.toggle-btn');
const paramPanels = document.querySelectorAll('.param-panel');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const paramType = this.getAttribute('data-param');

        // Update button states
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Update panel visibility
        paramPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === `param-${paramType}`) {
                panel.classList.add('active');
            }
        });
    });
});

// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
        this.classList.toggle('active');
    });
}


// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
const animateElements = document.querySelectorAll('.feature-card, .param-grid, .spec-table-wrapper');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Scroll to Top Button (Optional Enhancement) =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ef4444;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 0 25px rgba(239, 68, 68, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.4)';
});

// ===== Preload Images =====
window.addEventListener('load', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function () {
                this.style.opacity = '1';
            });
        }
    });
});

// ===== Console Message =====
console.log('%c🔬 UroScan Urine Analyzer', 'color: #0066ff; font-size: 20px; font-weight: bold;');
console.log('%cAdvanced Dual-Wavelength Reflectance Technology', 'color: #00d4aa; font-size: 14px;');
