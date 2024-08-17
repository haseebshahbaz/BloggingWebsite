document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = content.classList.contains('hidden');

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.add('hidden');
            item.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
        });

        if (isActive) {
            content.classList.remove('hidden');
            button.querySelector('svg').classList.add('rotate-180');
        }
    });
});