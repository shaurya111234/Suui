document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('login-name').value;
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var confirmPassword = document.getElementById('login-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Your code to handle the form submission goes here
    console.log('Form submitted successfully');
});