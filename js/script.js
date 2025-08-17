// Menu toggle mobile
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Formulaire de contact


// Sélection du formulaire


document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    const name = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulation d'envoi
    alert(
    `Simulation d'envoi :\n\nNom : ${name}\nEmail : ${email}\nMessage : ${message}`
    );

     // Vider le formulaire après la simulation
    document.getElementById('nom').value="";
    document.getElementById('email').value="";
    document.getElementById('message').value="";
});
