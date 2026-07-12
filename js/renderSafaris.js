// ==========================================
// Render Safari Cards
// ==========================================
const safariContainer = document.getElementById("safariContainer");
const modalContainer = document.getElementById("modal-container");

if (!safariContainer || typeof safaris === "undefined") {
    console.warn("Safari data not found.");
} else {
    safaris.forEach(safari => {
        /* -----------------------------
           Build Itinerary
        ----------------------------- */
        let itineraryHTML = "";
        safari.itinerary.forEach(day => {
            itineraryHTML += `
                <h3>${day.day}</h3>
                <p>${day.description}</p>
            `;
        });
        /* -----------------------------
           Safari Card
        ----------------------------- */
        safariContainer.innerHTML += `
        <div class="safari-card">
            <div class="card-image">
                <img src="${safari.image}" alt="${safari.title}">
                <span class="badge">
                    ⭐ Featured
                </span>
                <span class="duration">
                    ${safari.duration}
                </span>
            </div>
            <div class="card-content">
                <h3 class="tour-name">
                    ${safari.title}
                </h3>
                <p class="destination">
                    📍 Kenya Safari Experience
                </p>
                <p class="description">
                    ${safari.shortDescription}
                </p>
                <div class="price">
                    <small>FROM</small>
                    <h2>${safari.price}</h2>
                </div>
                <div class="card-buttons">
                    <button
                        class="btn"
                        onclick="openModal('${safari.id}')">
                        View Itinerary
                    </button>
                    <button
                        class="btn book-btn"
                        data-safari="${safari.title}">
                        Plan Your Safari
                    </button>
                </div>
            </div>
        </div>
        `;
        /* -----------------------------
           Popup
        ----------------------------- */
        modalContainer.innerHTML += `
        <div id="${safari.id}" class="modal">
            <div class="modal-content">
                <span
                    class="close"
                    onclick="closeModal('${safari.id}')">
                    &times;
                </span>
                <h2>${safari.title}</h2>
                <p><strong>Duration:</strong> ${safari.duration}</p>
                <p><strong>Price:</strong> ${safari.price}</p>
                <hr>
                ${itineraryHTML}
                <br>
                <button
                    class="btn book-btn"
                    data-safari="${safari.title}">
                    Plan This Safari
                </button>
            </div>
        </div>
        `;
    });
}

