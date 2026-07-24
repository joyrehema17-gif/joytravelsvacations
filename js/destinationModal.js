// ==========================================
// DESTINATION MODAL
// Joy Travels & Vacations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CREATE MODAL
    // ==========================================

    const modal = document.createElement("div");

    modal.className = "destination-modal";

    modal.innerHTML = `

        <div class="destination-modal-overlay"></div>

        <div class="destination-modal-content">

            <button
                class="destination-modal-close"
                aria-label="Close destination details"
            >
                &times;
            </button>


            <!-- IMAGE -->

            <div class="destination-modal-image">

                <img
                    id="modalDestinationImage"
                    src=""
                    alt=""
                >

            </div>


            <!-- BODY -->

            <div class="destination-modal-body">

                <span
                    id="modalDestinationCategory"
                    class="destination-modal-category">
                </span>


                <h2 id="modalDestinationTitle"></h2>


                <!-- META -->

                <div class="destination-modal-meta">

                    <span id="modalDestinationLocation"></span>

                    <span id="modalDestinationBestTime"></span>

                </div>


                <!-- DESCRIPTION -->

                <p
                    id="modalDestinationDescription"
                    class="destination-modal-description">
                </p>


                <!-- HIGHLIGHTS -->

                <div class="destination-modal-highlights">

                    <h3>Destination Highlights</h3>

                    <ul id="modalDestinationHighlights"></ul>

                </div>


                <!-- FOOTER -->

                <div class="destination-modal-footer">

                    <div class="destination-modal-plan">

                        <small>READY TO EXPLORE?</small>

                        <strong>
                            Plan Your Visit
                        </strong>

                    </div>


                    <a
                        id="modalDestinationBooking"
                        href="#"
                        target="_blank"
                        class="btn"
                    >
                        Plan This Trip
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
        document.getElementById(
            "modalDestinationImage"
        );


    const modalCategory =
        document.getElementById(
            "modalDestinationCategory"
        );


    const modalTitle =
        document.getElementById(
            "modalDestinationTitle"
        );


    const modalLocation =
        document.getElementById(
            "modalDestinationLocation"
        );


    const modalBestTime =
        document.getElementById(
            "modalDestinationBestTime"
        );


    const modalDescription =
        document.getElementById(
            "modalDestinationDescription"
        );


    const modalHighlights =
        document.getElementById(
            "modalDestinationHighlights"
        );


    const modalBooking =
        document.getElementById(
            "modalDestinationBooking"
        );


    const closeButton =
        modal.querySelector(
            ".destination-modal-close"
        );


    const overlay =
        modal.querySelector(
            ".destination-modal-overlay"
        );


    // ==========================================
    // OPEN MODAL
    // ==========================================

    function openDestinationModal(destination) {

        if (!destination) {

            console.warn(
                "Destination not found."
            );

            return;

        }


        // Image

        modalImage.src =
            destination.image;

        modalImage.alt =
            destination.title;


        // Category

        modalCategory.textContent =
            destination.category;


        // Title

        modalTitle.textContent =
            destination.title;


        // Location

        modalLocation.textContent =
            "📍 " + destination.location;


        // Best Time

        modalBestTime.textContent =
            "📅 Best Time: " +
            destination.bestTime;


        // Description

        modalDescription.textContent =
            destination.description;


        // ==========================================
        // HIGHLIGHTS
        // ==========================================

        modalHighlights.innerHTML = "";


        destination.highlights.forEach(
            highlight => {

                const li =
                    document.createElement("li");


                li.textContent =
                    highlight;


                modalHighlights.appendChild(li);

            }
        );


        // ==========================================
        // WHATSAPP BOOKING
        // ==========================================

        const message =

`Hello Joy Travels & Vacations,

I would like to plan a trip to:

Destination: ${destination.title}

Location: ${destination.location}

Best Time to Visit: ${destination.bestTime}

Please provide more information about available packages, accommodation, transport and pricing.

Thank you.`;


        modalBooking.href =

            "https://wa.me/254703158470?text=" +

            encodeURIComponent(message);


        // ==========================================
        // SHOW MODAL
        // ==========================================

        modal.classList.add(
            "active"
        );


        document.body.classList.add(
            "modal-open"
        );

    }


    // ==========================================
    // CLOSE MODAL
    // ==========================================

    function closeDestinationModal() {

        modal.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }


    // ==========================================
    // VIEW DETAILS BUTTON
    // ==========================================

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    ".destination-details-btn"
                );


            if (!button) {

                return;

            }


            const destinationId =
                button.dataset.destination;


            const destination =
                destinations.find(
                    item =>
                        item.id ===
                        destinationId
                );


            openDestinationModal(
                destination
            );

        }
    );


    // ==========================================
    // CLOSE BUTTON
    // ==========================================

    closeButton.addEventListener(
        "click",
        closeDestinationModal
    );


    // ==========================================
    // CLOSE OVERLAY
    // ==========================================

    overlay.addEventListener(
        "click",
        closeDestinationModal
    );


    // ==========================================
    // ESCAPE KEY
    // ==========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closeDestinationModal();

            }

        }
    );

});
