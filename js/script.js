// Menu toggle mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Formulaire de contact
const button = document.getElementById('button');

button.addEventListener('click', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (name === ''||name.length<3 ) {
        alert('Veuillez entrer votre nom d\'au moins 3 caratères.');
        return;
    }

    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        alert('Veuillez entrer un email valide.');
        return;
    }

    if (message === '' || message.length<5) {
        alert('Veuillez écrire un vrai message.');
        return;
    }

    // Simulation d'envoi si tout est correct
    alert(
        `Simulation d'envoi réussie !\n\nNom : ${name}\nEmail : ${email}\nMessage : ${message}`
    );

    document.getElementById('nom').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
});
