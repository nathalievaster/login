document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("jwt");
    const main = document.querySelector("main");

    if (main.classList.contains("auth-start")) {
        if (token) {
            main.innerHTML = `
                <h1>Welcome back!</h1>
                <p>You are logged in. Go to the <a href="secret.html">secret page</a> or <button id="logoutBtn" class="link-button">log out</button>.</p>
            `;

            document.getElementById("logoutBtn").addEventListener("click", () => {
                localStorage.removeItem("jwt");
                window.location.href = "index.html";
            });
        } else {
            main.innerHTML = `
                <h1>Welcome to the authentication service!</h1>
                <p>Log in or register an account to access protected content.</p>
                <div class="auth-options">
                    <a href="login.html" class="auth-button">Sign in</a>
                    <span class="divider">or</span>
                    <a href="register.html" class="auth-button">Register</a>
                </div>
            `;
        }
    }
});