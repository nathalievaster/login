// Logga in användare

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const messageDiv = document.getElementById("loginMessage");

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("jwt", data.response.token);
        messageDiv.textContent = "Login successful! You are being redirected...";
        messageDiv.className = "message success";
        setTimeout(() => window.location.href = "index.html", 1500);


    } else {
        messageDiv.textContent = data.message || "Wrong username/password: ";
        messageDiv.className = "message error";
    }
});
