// // Function to handle login
// function handleLogin() {
//     const enteredEmail = document.getElementById('email-1').value;
//     const enteredPassword = document.getElementById('password-1').value;
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
//         alert('Login Successful!');
//         window.location.href = "joinus.html";
//     } else {
//         alert('Login credentials are not correct. Please register first.');
//         document.getElementById('registerform').style.display = 'block';
//         document.getElementById('loginForm').style.display = 'none';
//     }
// }
// // Function to handle registration
// function handleRegistration() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const repassword = document.getElementById('repassword').value;

//     if (password === repassword) {
//         alert('Registration Successful!');
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//         window.location.href = "index.html";
//     } else {
//         alert('PASSWORD DOES NOT MATCH, TRY AGAIN');
//     }
// }
// Event listeners
document.getElementById('logoutbtn').style.visibility = 'hidden';
document.getElementById("loginbutton").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerform").style.display = "none";
});
document.getElementById("closeBtn1").addEventListener("click", function() {
    document.getElementById("registerform").style.display = "none";
});

document.getElementById('registerLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerform').style.display = 'block';
});

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     handleLogin();
// });

// document.getElementById('registerform').addEventListener('submit', function(event) {
//     event.preventDefault();
//     handleRegistration();
// });

document.getElementById("joinus").addEventListener("click", function() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (!storedEmail || !storedPassword) {
        const loginBtn = document.getElementById('loginbutton');
        loginBtn.classList.add('blinking');
        setTimeout(() => {
            loginBtn.classList.remove('blinking');
        }, 3000);
        alert("Please login first!");
    } else {
        window.location.href = "joinus.html";
    }
});
