document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const matriculationnumberstaffid = document.getElementById('Matriculation Number/Staff ID').value;
        const password = document.getElementById('password').value;

        // Mock authentication
        if (MatriculationNumber/StaffID === 'U1234/1234123' && password === 'password') {
            alert('Sign in successful!');
            // Redirect to the dashboard or another page
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});