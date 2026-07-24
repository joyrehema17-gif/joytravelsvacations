// ==========================================
// RENDER DESTINATIONS
// Joy Travels & Vacations
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Make sure destination data exists
    if (typeof destinations === "undefined") {

        console.warn("Destination data not found.");

        return;

    }


    // ==========================================
    // CATEGORY CONTAINERS
    // ==========================================

    const categoryContainers = {

        "Safari & Wildlife":
            document.getElementById("safari-wildlife"),

        "Coastal Destinations":
            document.getElementById("coastal-destinations"),

        "Mountains & Nature":
            document.getElementById("mountains-nature")

    };


    // ==========================================
    // RENDER DESTINATIONS
    // ==========================================

    destinations.forEach(destination => {


        // Find correct category container

        const container =
            categoryContainers[destination.category];


        // If container does not exist

        if (!container) {

            console.warn(
                `Container not found for category: ${destination.category}`
            );

            return;

        }


        // ==========================================
        // CREATE DESTINATION CARD
        // ==========================================

        const card =
            document.createElement("div");


        card.className =
            "destination-card";


        card.innerHTML = `

            <div class="destination-image">

                <img
                    src="${destination.image}"
                    alt="${destination.title}"
                    loading="lazy"
                >

            </div>


            <div class="destination-content">

                <h3>
                    ${destination.title}
                </h3>


                <p class="destination-location">

                    📍 ${destination.location}

                </p>


                <p class="destination-description">

                    ${destination.shortDescription}

                </p>


                <div class="destination-bottom">

                    <button
                        class="btn destination-details-btn"
                        data-destination="${destination.id}"
                    >

                        View Details

                    </button>

                </div>

            </div>

        `;


        // ==========================================
        // ADD CARD TO CATEGORY
        // ==========================================

        container.appendChild(card);

    });

});
