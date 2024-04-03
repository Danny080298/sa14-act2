document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 6) {
        document.getElementById('username-error').textContent = 'Username must be at least 6 characters.';
        return; 
    }

    const email = document.getElementById('email').value;
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        return; 
    }
    
   
    const password = document.getElementById('password').value;
    if (!password.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter and one number.';
        return; 
    }

    console.log('Form is valid. Submitting...');
});
