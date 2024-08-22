document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Check and apply the saved mode from localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Handle social icon clicks
    document.querySelectorAll('.social-icons img').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default action
            document.body.style.transition = 'opacity 1s ease-in-out';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = icon.parentElement.href;
            }, 1000); // Adjust the timing as necessary
        });
    });

    // Fade in the body content when the page loads
    body.style.transition = 'opacity 1.5s ease-in-out';
    body.style.opacity = '1';
});
