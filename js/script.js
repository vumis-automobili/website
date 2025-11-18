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
document.querySelectorAll('.feature-item, .service-card, .trust-stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Track phone calls


// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}

// WhatsApp Form Handler
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const car = document.getElementById('car').value;
        const message = document.getElementById('message').value;

        let text = `Pozdrav, moje ime je ${name}. \nTelefon: ${phone}`;
        if (car) text += `\nAutomobil: ${car}`;
        if (message) text += `\nPoruka: ${message}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/381656810032?text=${encodedText}`, '_blank');
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// --- Valuation Slider Logic ---
const yearSlider = document.getElementById('yearSlider');
const conditionSlider = document.getElementById('conditionSlider');
const yearValue = document.getElementById('yearValue');
const conditionValue = document.getElementById('conditionValue');
const priceResult = document.getElementById('priceResult');

function updateValuation() {
    if (!yearSlider || !conditionSlider || !priceResult) return;

    const year = parseInt(yearSlider.value);
    const condition = parseInt(conditionSlider.value);

    yearValue.textContent = year;
    conditionValue.textContent = condition;

    // Dummy calculation logic
    // Base for 2010 car in poor condition
    let basePrice = 0;

    // Each year adds value (Max 15 years * 5500 = 82500)
    const yearFactor = (year - 2010) * 5500;

    // Condition adds value (Max 10 * 1000 = 10000)
    const conditionFactor = condition * 1000;

    let estimatedMin = basePrice + yearFactor + conditionFactor;

    // Ensure strictly 1000 minimum (though formula should hit it naturally at 2010/Cond 1)
    if (estimatedMin < 1000) {
        estimatedMin = 1000;
    }

    let estimatedMax = estimatedMin * 1.15;

    // Enforce maximum price of 100,000€
    if (estimatedMax > 100000) {
        estimatedMax = 100000;
        // Adjust min if it exceeds max due to cap (unlikely with current logic but good safety)
        if (estimatedMin > 100000) estimatedMin = 95000;
    }

    // Format currency
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0
    });

    priceResult.textContent = `${formatter.format(estimatedMin)} - ${formatter.format(estimatedMax)}`;
}

if (yearSlider && conditionSlider) {
    yearSlider.addEventListener('input', updateValuation);
    conditionSlider.addEventListener('input', updateValuation);
    updateValuation(); // Initial call
}

// --- Typewriter Effect ---
const typeWriterElement = document.querySelector('.type-writer');
if (typeWriterElement) {
    const text = typeWriterElement.getAttribute('data-text');
    let i = 0;

    function type() {
        if (i < text.length) {
            typeWriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    // Start typing after a slight delay
    setTimeout(type, 500);
}

// --- 3D Tilt Effect ---
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});
