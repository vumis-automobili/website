// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button - scroll to contact
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        window.location.href = 'tel:063327327';
    });
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const phone = contactForm.querySelector('input[name="phone"]').value;
        const car = contactForm.querySelector('input[name="car"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Simple validation
        if (name && phone) {
            // Create WhatsApp message
            const whatsappMessage = `Pozdrav! Moje ime je ${name}.\nTelefon: ${phone}${car ? `\nAutomobil: ${car}` : ''}${message ? `\nPoruka: ${message}` : ''}`;
            const whatsappURL = `https://wa.me/381633327327?text=${encodeURIComponent(whatsappMessage)}`;

            // Show success message
            alert('Hvala na upitu! Bićete preusmereni na WhatsApp.');

            // Open WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            contactForm.reset();
        } else {
            // Show error if validation fails
            alert('Molimo unesite ime i telefon.');
        }
    });
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe benefit cards and steps
document.querySelectorAll('.benefit-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Track phone calls
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone call initiated:', link.href);
        // You can add analytics tracking here
    });
});
