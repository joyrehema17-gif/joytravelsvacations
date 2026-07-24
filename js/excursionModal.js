// ==========================================
// EXCURSION MODAL
// Joy Travels & Vacations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CREATE MODAL
    // ==========================================

    const modal = document.createElement("div");

    modal.className = "excursion-modal";

    modal.innerHTML = `

        <div class="excursion-modal-overlay"></div>

        <div class="excursion-modal-content">

            <button
                class="excursion-modal-close"
                aria-label="Close excursion details"
            >
                &times;
            </button>


            <div class="excursion-modal-image">

                <img
                    id="modalExcursionImage"
                    src=""
                    alt=""
                >

            </div>


            <div class="excursion-modal-body">

                <span
                    id="modalExcursionCategory"
                    class="excursion-modal-category">
                </span>


                <h2 id="modalExcursionTitle"></h2>


                <div class="excursion-modal-meta">

                    <span id="modalExcursionLocation"></span>

                    <span id="modalExcursionDuration"></span>

                </div>


                <p
                    id="modalExcursionDescription"
                    class="excursion-modal-description">
                </p>


                <div class="excursion-modal-highlights">

                    <h3>Experience Highlights</h3>

                    <ul id="modalExcursionHighlights"></ul>

                </div>


                <div class="excursion-modal-footer">

                    <div class="excursion-modal-price">

                        <small>FROM</small>

                        <strong id="modalExcursionPrice"></strong>

                    </div>


                    <a
                        id="modalExcursionBooking"
                        href="#"
                        target="_blank"
                        class="btn"
                    >
                        Book This Excursion
                    </a>

                </div>

            </div>

        </div>

    `;


    // Add modal to page
    document.body.appendChild(modal);


    // ==========================================
    // GET MODAL ELEMENTS
    // ==========================================

    const modalImage =
        document.getElementById("modalExcursionImage");

    const modalCategory =
        document.getElementById("modalExcursionCategory");

    const modalTitle =
        document.getElementById("modalExcursionTitle");

    const modalLocation =
        document.getElementById("modalExcursionLocation");

    const modalDuration =
        document.getElementById("modalExcursionDuration");

    const modalDescription =
        document.getElementById("modalExcursionDescription");

    const modalHighlights =
        document.getElementById("modalExcursionHighlights");

    const modalPrice =
        document.getElementById("modalExcursionPrice");

    const modalBooking =
        document.getElementById("modalExcursionBooking");

    const closeButton =
        modal.querySelector(".excursion-modal-close");

    const overlay =
        modal.querySelector(".excursion-modal-overlay");


    // ==========================================
    // OPEN MODAL
    // ==========================================

    function openExcursionModal(excursion) {

        if (!excursion) {
            console.warn("Excursion not found.");
            return;
        }


        // Image
        modalImage.src = excursion.image;

        modalImage.alt = excursion.title;


        // Category
        modalCategory.textContent =
            excursion.category;


        // Title
        modalTitle.textContent =
            excursion.title;


        // Location
        modalLocation.textContent =
            "📍 " + excursion.location;


        // Duration
        modalDuration.textContent =
            "⏱️ " + excursion.duration;


        // Description
        modalDescription.textContent =
            excursion.description;


        // Price
        modalPrice.textContent =
            excursion.price;


        // ==========================================
        // HIGHLIGHTS
        // ==========================================

        modalHighlights.innerHTML = "";

        excursion.highlights.forEach(highlight => {

            const li =
                document.createElement("li");

            li.textContent =
                highlight;

            modalHighlights.appendChild(li);

        });


        // ==========================================
        // WHATSAPP BOOKING
        // ==========================================

        const message =
            `Hello Joy Travels & Vacations,

I would like to book the following excursion:

Excursion: ${excursion.title}

Location: ${excursion.location}

Duration: ${excursion.duration}

Price: ${excursion.price}

Please provide more information about availability and booking.

Thank you.`;


        modalBooking.href =
            "https://wa.me/254703158470?text=" +
            encodeURIComponent(message);


        // ==========================================
        // SHOW MODAL
        // ==========================================

        modal.classList.add("active");

        document.body.classList.add("modal-open");

    }


    // ==========================================
    // CLOSE MODAL
    // ==========================================

    function closeExcursionModal() {

        modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }


    // ==========================================
    // VIEW DETAILS BUTTONS
    // ==========================================

    document.addEventListener("click", (event) => {

        const button =
            event.target.closest(".excursion-details-btn");


        if (!button) {
            return;
        }


        const excursionId =
            button.dataset.excursion;


        const excursion =
            excursions.find(
                item => item.id === excursionId
            );


        openExcursionModal(excursion);

    });


    // ==========================================
    // CLOSE BUTTON
    // ==========================================

    closeButton.addEventListener(
        "click",
        closeExcursionModal
    );


    // ==========================================
    // CLOSE BY CLICKING OVERLAY
    // ==========================================

    overlay.addEventListener(
        "click",
        closeExcursionModal
    );


    // ==========================================
    // CLOSE WITH ESC KEY
    // ==========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeExcursionModal();

            }

        }
    );

});
