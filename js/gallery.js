// ========================================
// LIGHTBOX — GALERIE
// ========================================

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".gallery-lightbox-close");


// Vérification des éléments
if (lightbox && lightboxImage && closeButton) {

    // ========================================
    // OUVRIR LA LIGHTBOX
    // ========================================

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const image = item.querySelector("img");

            if (!image) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });


    // ========================================
    // FERMER AVEC LE BOUTON
    // ========================================

    closeButton.addEventListener("click", closeLightbox);


    // ========================================
    // FERMER EN CLIQUANT À CÔTÉ
    // ========================================

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // ========================================
    // FERMER AVEC ÉCHAP
    // ========================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });


    // ========================================
    // FONCTION DE FERMETURE
    // ========================================

    function closeLightbox() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }

}