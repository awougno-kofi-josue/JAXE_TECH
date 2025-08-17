// Menu toggle mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Formulaire de contact
const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    const name = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation simple
    if (name === '') {
        alert('Veuillez entrer votre nom.');
        return;
    }

    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        alert('Veuillez entrer un email valide.');
        return;
    }

    if (message === '') {
        alert('Veuillez entrer un message.');
        return;
    }

    // Simulation d'envoi si tout est correct
    alert(
        `Simulation d'envoi réussie !\n\nNom : ${name}\nEmail : ${email}\nMessage : ${message}`
    );

    // Vider le formulaire après la simulation
    document.getElementById('nom').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
});
