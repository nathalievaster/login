"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
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
            // Plocka ut elementet där vi vill visa användarna
            const secretContent = document.getElementById("secretContent");

            // Rensa tidigare innehåll
            secretContent.innerHTML = "";

            // Skapa en lista med användare
            const userList = document.createElement("ul");
            data.users.forEach(user => {
                const li = document.createElement("li");

                // Formatera datumet
                const createdDate = new Date(user.created).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                });

                li.innerHTML = `
                <strong>ID:</strong> ${user.id}, <br>
                <strong>Användarnamn:</strong> ${user.username}, <br>
                <strong>Skapad:</strong> ${createdDate}
                `;
                userList.appendChild(li);
            });

            secretContent.appendChild(userList);
        } else {
            localStorage.removeItem("jwt");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Fel vid hämtning:", error);
        window.location.href = "login.html";
    }
});
