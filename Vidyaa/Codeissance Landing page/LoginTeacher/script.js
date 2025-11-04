document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleFormBtn = document.getElementById('toggleForm');
    const formTitle = document.getElementById('formTitle');

    toggleFormBtn.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
        
        if (loginForm.classList.contains('hidden')) {
            formTitle.textContent = 'Sign Up';
            toggleFormBtn.textContent = 'Already have an account? Sign In';
        } else {
            formTitle.textContent = 'Login';
            toggleFormBtn.textContent = 'Switch to Signup';
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log('Login attempt:', { email, password });
        // Here you would typically send this data to your server
        alert('Login functionality would be implemented here.');
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Signup attempt:', { name, email, password });
        // Here you would typically send this data to your server
        alert('Signup functionality would be implemented here.');
    });
});