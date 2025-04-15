// Toggle FAQ Accordion
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentNode;
        item.classList.toggle('active');
    });
});
