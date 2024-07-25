// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const faqDetails = document.querySelectorAll('.faq details');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle FAQ sections
    faqDetails.forEach(detail => {
        detail.addEventListener('click', () => {
            faqDetails.forEach(d => {
                if (d !== detail) {
                    d.removeAttribute('open');
                }
            });
        });
    });
});