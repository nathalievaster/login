// Registrera användare

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const messageEl = document.getElementById("message");

    try {
        const response = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            messageEl.textContent = "Registration successful! You're being redirected...";
            messageEl.className = "message success";
            setTimeout(() => window.location.href = "login.html", 1500);
        } else {
            messageEl.textContent = data.message || "Registration failed.";
            messageEl.className = "message error";
        }
    } catch (error) {
        messageEl.textContent = "Technical issues - try again later...";
        messageEl.className = "message error";
    }
});
