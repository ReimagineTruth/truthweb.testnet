export function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.sticky-header');
        const logoText = document.querySelector('.logo-text');
        
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            logoText.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            logoText.classList.remove('scrolled');
        }
    });
}