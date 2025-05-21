/**
 * MentaMatch - Animations
 * Smooth animation effects for a professional mentoring platform
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    animateOnScroll();
    
    // Animate chat messages with staggered timing
    animateMessages();
    
    // Set up scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize any interactive elements
    initializeTooltips();
});

/**
 * Animate elements when they scroll into view
 */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(function(element) {
        // Check if element is in viewport
        if (isElementInViewport(element)) {
            // Get animation delay if specified
            const delay = element.getAttribute('data-delay') || 0;
            
            // Apply animation after specified delay
            setTimeout(function() {
                if (element.classList.contains('fade-in')) {
                    element.style.opacity = '1';
                } else if (element.classList.contains('slide-in-right')) {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                } else if (element.classList.contains('slide-in-left')) {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                } else if (element.classList.contains('slide-in-up')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
            }, delay);
        }
    });
}

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - Whether the element is in viewport
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

/**
 * Animate chat messages with a staggered effect
 */
function animateMessages() {
    const messages = document.querySelectorAll('.animate-message');
    
    messages.forEach(function(message, index) {
        // Set custom property for animation delay based on index
        message.style.setProperty('--animation-order', index);
    });
}

/**
 * Initialize Bootstrap tooltips
 */
function initializeTooltips() {
    // Initialize tooltips if Bootstrap is loaded
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

/**
 * Smooth scroll to anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only process if the href is not just "#"
        if (this.getAttribute('href') !== "#") {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to the element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/**
 * Add animation effects to buttons and cards
 */
document.querySelectorAll('.btn, .card').forEach(element => {
    // Add subtle hover animation
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.2s ease';
        if (this.classList.contains('btn')) {
            this.style.transform = 'translateY(-2px)';
        } else if (this.classList.contains('card') && !this.classList.contains('price-card')) {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        }
    });
    
    element.addEventListener('mouseleave', function() {
        if (this.classList.contains('btn')) {
            this.style.transform = 'translateY(0)';
        } else if (this.classList.contains('card') && !this.classList.contains('price-card')) {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        }
    });
});

/**
 * Add ripple effect to buttons
 */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        this.appendChild(ripple);
        
        // Position ripple
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        // Set ripple position and style
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        // Add ripple class
        ripple.classList.add('btn-ripple');
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Define keyframe animation for messages
if (!document.querySelector('#message-animation-style')) {
    const style = document.createElement('style');
    style.id = 'message-animation-style';
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .btn-ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
