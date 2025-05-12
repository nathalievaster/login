"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
        // Ingen token – skicka tillbaka till login-sidan
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/secret", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (response.ok) {
            // Visa skyddad data
            document.getElementById("secretContent");
        } else {
            // Token ogiltig eller utgången
            localStorage.removeItem("jwt");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Fel vid hämtning:", error);
        window.location.href = "login.html";
    }
});