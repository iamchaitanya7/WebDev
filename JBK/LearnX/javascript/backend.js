let isSignUp = false;

function toggleAuth() {
    const authForm = document.getElementById('authForm');
    if (isSignUp) {
        authForm.querySelector('button').textContent = 'Sign In';
        authForm.querySelector('.switch-text').innerHTML = `Don't have an account? <span onclick="toggleAuth()">Sign Up</span>`;
        isSignUp = false;
    } else {
        authForm.querySelector('button').textContent = 'Sign Up';
        authForm.querySelector('.switch-text').innerHTML = `Already have an account? <span onclick="toggleAuth()">Sign In</span>`;
        isSignUp = true;
    }
}

function login() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isSignUp) {
        alert(`Account created for ${username}`);
        toggleAuth();
    } else if (username && password) {
        alert(`Welcome, ${username}!`);
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-menu').classList.remove('hidden');
    } else {
        alert("Please fill in all fields.");
    }
}

function navigateTo(section) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById(section).classList.remove('hidden');
}

function checkATS() {
    const file = document.getElementById('resumeFile').files[0];
    if (file) {
        alert("ATS Checker is under construction.");
    } else {
        alert("Please upload a file.");
    }
}

document.getElementById('resumeForm').onsubmit = function(event) {
    event.preventDefault();
    alert("Resume Generation is under construction.");
};
