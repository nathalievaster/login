# Frontend-applikation som konsumerar REST API med autentisering
Denna webbapplikation är en klient som konsumerar ett REST API med stöd för registrering, inloggning och åtkomst till skyddade resurser med hjälp av JSON Web Tokens (JWT).

## Funktionalitet
- Registrera nya användare via REST API (POST /api/register)

- Logga in med existerande användare och få en JWT (POST /api/login)

- JWT sparas i localStorage och används vid autentisering mot skyddade endpoints

- En skyddad sida (secret.html) som endast är åtkomlig för inloggade användare

- Dynamisk navigation beroende på inloggningsstatus

- Logout-funktionalitet som rensar token och återställer navigation och innehåll

## Kom igång

1. Klona repot
```bash
git clone https://github.com/nathalievaster/login.git
cd login
```
2. Installera och starta backend enligt instruktioner i backend-repot (https://github.com/nathalievaster/authentication.git).


