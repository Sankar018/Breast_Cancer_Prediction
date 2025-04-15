// Benign.js - JavaScript for Non-Malignant Result Page

document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const btn = item.querySelector('.accordion-btn');
        
        btn.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Schedule Button functionality
    const scheduleBtn = document.getElementById('scheduleBtn');
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', function() {
            
            window.location.href = '/self';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for result card on load
    const resultCard = document.querySelector('.result-card');
    if (resultCard) {
        setTimeout(() => {
            resultCard.style.transform = 'scale(1.02)';
            resultCard.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                resultCard.style.transform = 'scale(1)';
            }, 300);
        }, 500);
    }
});