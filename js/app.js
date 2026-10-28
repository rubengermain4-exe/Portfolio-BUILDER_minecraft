// ========================================
// SON AU SURVOL DES RÉALISATIONS
// ========================================

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    const sound = new Audio(project.dataset.sound);

    sound.volume = 0.7;
    sound.preload = "auto";

    project.addEventListener("mouseenter", () => {
        sound.currentTime = 0;

        sound.play().catch(() => {
            // Le navigateur peut bloquer le son
            // avant la première interaction.
        });
    });

    project.addEventListener("mouseleave", () => {
        sound.pause();
        sound.currentTime = 0;
    });

});


// ========================================
// BARRES DE COMPÉTENCES
// ========================================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    const percent = card.querySelector(".skill-percent");
    const progress = card.querySelector(".progress-fill");

    if (!percent || !progress) return;

    // Récupère le nombre avant le %
    const value = parseInt(percent.textContent);

    // Adapte automatiquement la barre
    progress.style.width = value + "%";

});