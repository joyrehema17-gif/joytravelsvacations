// ==========================================
// Homepage Gallery Preview
// ==========================================

const homeGallery = document.getElementById("homeGallery");

if (homeGallery && typeof galleryImages !== "undefined") {

    const previewImages = galleryImages.slice(0, 8);

    previewImages.forEach(item => {

        homeGallery.innerHTML += `

        <a href="gallery.html" class="home-gallery-card">

    <img
        src="${item.image}"
        alt="${item.title}">

    <div class="home-gallery-overlay">

        <span class="gallery-label">

            ${item.category}

        </span>

        <h3>

            ${item.title}

        </h3>

    </div>

</a>

        `;

    });

}
