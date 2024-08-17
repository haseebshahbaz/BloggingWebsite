document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    // Toggle for Password
    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Change the icon (optional)
        this.src = type === 'password' ? './show.png' : './hide-password.png'; 
    });

    // Toggle for Confirm Password
    toggleConfirmPassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);

        // Change the icon (optional)
        this.src = type === 'password' ? './show.png' : './hide-password.png';
    });
});

