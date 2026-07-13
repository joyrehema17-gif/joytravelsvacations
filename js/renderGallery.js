// ==========================================
// Render Gallery
// ==========================================

const galleryContainer = document.getElementById("galleryContainer");

if (galleryContainer && typeof galleryImages !== "undefined") {

    renderGallery("all");

}

// ==========================================

function renderGallery(category) {

    galleryContainer.innerHTML = "";

    const filteredImages = category === "all"
        ? galleryImages
        : galleryImages.filter(image => image.category === category);

    filteredImages.forEach(item => {

        galleryContainer.innerHTML += `

        <div class="gallery-card">

            <img src="${item.image}"
                 alt="${item.title}">

            <div class="gallery-overlay">

                <span class="gallery-category">

                    ${item.category}

                </span>

                <h3>

                    ${item.title}

                </h3>

                <p>

                    ${item.description}

                </p>

                <button
                    class="btn view-photo"
                    data-image="${item.image}"
                    data-title="${item.title}">

                    View Photo

                </button>

            </div>

        </div>

        `;

    });

}

// ==========================================
// Filter Buttons
// ==========================================

document.querySelectorAll(".gallery-filter button")
.forEach(button => {

    button.addEventListener("click", function(){

        document
            .querySelector(".gallery-filter .active")
            .classList.remove("active");

        this.classList.add("active");

        renderGallery(this.dataset.filter);

    });

});
