const signupButton = document.getElementById('registrationForm');
signupButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('Username').querySelector('input').value;
    const password = document.getElementById('password').querySelector('input').value;
    localStorage.setItem(username, password);
    window.location.href = 'login1.html'; // Redirect to login page
});
