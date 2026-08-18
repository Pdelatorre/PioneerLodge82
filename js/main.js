// Pioneer Lodge 82 - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        // Single source of truth for menu state, so the button's
        // aria-expanded attribute never drifts out of sync with the menu.
        const setMenu = (open) => {
            navMenu.classList.toggle('active', open);
            mobileMenuToggle.classList.toggle('active', open);
            mobileMenuToggle.setAttribute('aria-expanded', String(open));
        };

        mobileMenuToggle.addEventListener('click', function() {
            setMenu(!navMenu.classList.contains('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                setMenu(false);
            }
        });

        // Close menu on Escape and return focus to the toggle
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenu(false);
                mobileMenuToggle.focus();
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                setMenu(false);
            });
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default if it's not just '#'
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission feedback (optional enhancement)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        // You can add custom form submission handling here if needed
        // For Formspree, the default behavior works fine
        console.log('Form submitted');
    });
});
