document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
        return;
    }

    // Simulate successful login for now
    if (username === 'anu' && password === '12345') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to a dashboard page after login
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
