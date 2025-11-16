// Scroll Animations and Interactions
export function initScrollAnimations() {
    // Intersection Observer for scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Add scroll reveal to tier cards
    const tierCards = document.querySelectorAll('.tier-card');
    tierCards.forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Tier card interactions
    tierCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const tier = card.getAttribute('data-tier');
            window.dispatchEvent(new CustomEvent('highlight-tier', { 
                detail: { tier } 
            }));
        });
        
        card.addEventListener('mouseleave', () => {
            window.dispatchEvent(new CustomEvent('unhighlight-tier'));
        });
    });
}

// GSAP animations (if GSAP is loaded)
if (typeof gsap !== 'undefined') {
    // Animate hero title
    gsap.from('.hero-title .title-line', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Animate hero subtitle
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
    });
    
    // Animate hero buttons
    gsap.from('.hero-actions .btn', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: 'back.out(1.7)'
    });
}
