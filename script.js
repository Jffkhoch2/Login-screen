document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('php/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('logged-in-section').style.display = 'block';
            document.getElementById('logged-in-user').textContent = username;
        } else {
            alert('Login failed: ' + data.message);
        }
    });
});

document.getElementById('logout-btn').addEventListener('click', function() {
    fetch('php/logout.php')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('login-section').style.display = 'block';
            document.getElementById('logged-in-section').style.display = 'none';
        }
    });
});
