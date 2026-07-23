
// ==========================================
// RENDER EXCURSIONS
// Joy Travels & Vacations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Make sure excursion data exists
    if (typeof excursions === "undefined") {
        console.warn("Excursion data not found.");
        return;
    }

    // ==========================================
    // CATEGORY CONTAINERS
    // ==========================================

    const categoryContainers = {
        "Marine Excursions": document.getElementById("marine-excursions"),
        "Nature & Wildlife": document.getElementById("nature-wildlife"),
        "History & Culture": document.getElementById("history-culture"),
        "Adventure Activities": document.getElementById("adventure-activities")
    };


    // ==========================================
    // RENDER EXCURSIONS
    // ==========================================

    excursions.forEach(excursion => {

        // Find the correct category container
        const container = categoryContainers[excursion.category];

        // If container doesn't exist, skip
        if (!container) {
            console.warn(
                `Container not found for category: ${excursion.category}`
            );
            return;
        }


        // ==========================================
        // CREATE EXCURSION CARD
        // ==========================================

        const card = document.createElement("div");

        card.className = "excursion-card";


        card.innerHTML = `

            <div class="excursion-image">

                <img
                    src="${excursion.image}"
                    alt="${excursion.title}"
                    loading="lazy"
                >

                <span class="excursion-duration">
                    ${excursion.duration}
                </span>

            </div>


            <div class="excursion-content">

                <h3>
                    ${excursion.title}
                </h3>


                <p class="excursion-location">
                    📍 ${excursion.location}
                </p>


                <p class="excursion-description">
                    ${excursion.shortDescription}
                </p>


                <div class="excursion-bottom">

                    <div class="excursion-price">

                        <small>FROM</small>

                        <strong>
                            ${excursion.price}
                        </strong>

                    </div>


                    <button
                        class="btn excursion-details-btn"
                        data-excursion="${excursion.id}"
                    >
                        View Details
                    </button>

                </div>

            </div>

        `;


        // Add card to category
        container.appendChild(card);

    });

});
