"Use strict";

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const token = localStorage.getItem("jwt");

    // Rensa nuvarande nav
    nav.innerHTML = "";

    if (token) {
        // Om användare är inloggad
        nav.innerHTML = `
            <a href="index.html">Home</a>
            <a href="secret.html">Secret</a>
            <button id="logoutBtn" class="auth-button">Logout</button>
        `;

        // Lägg till logout-funktion
        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("jwt");
            window.location.href = "index.html";
        });
    } else {
        // Om användare inte är inloggad
        nav.innerHTML = `
            <a href="index.html">Home</a>
            <a href="login.html">Sign in</a>
            <a href="register.html">Register</a>
            <a href="secret.html">Secret</a>
        `;
    }
});
