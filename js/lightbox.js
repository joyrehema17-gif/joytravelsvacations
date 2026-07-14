// ==========================================
// Premium Gallery Lightbox
// ==========================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCaption = document.getElementById("lightbox-caption");

const closeLightbox = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// ==========================================
// Open Lightbox
// ==========================================

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("view-photo")) {

        currentIndex = galleryImages.findIndex(
            item => item.image === e.target.dataset.image
        );

        openLightbox(currentIndex);

    }

});

// ==========================================

function openLightbox(index) {

    const item = galleryImages[index];

    lightbox.style.display = "flex";

    lightboxImage.src = item.image;

    lightboxTitle.textContent = item.title;

    lightboxCaption.textContent = item.description;

}

// ==========================================
// Close
// ==========================================

closeLightbox.onclick = function () {

    lightbox.style.display = "none";

};

// ==========================================
// Click outside image
// ==========================================

lightbox.onclick = function (e) {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

};

// ==========================================
// Previous
// ==========================================

prevBtn.onclick = function () {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    openLightbox(currentIndex);

};

// ==========================================
// Next
// ==========================================

nextBtn.onclick = function () {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    openLightbox(currentIndex);

};

// ==========================================
// ESC Key
// ==========================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

});
