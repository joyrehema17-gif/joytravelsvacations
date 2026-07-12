// ==========================================
// Render Safari Cards
// ==========================================

const safariContainer = document.getElementById("safari-container");
const modalContainer = document.getElementById("modal-container");

if (safariContainer && typeof safaris !== "undefined") {

    safaris.forEach(safari => {

        // Create Safari Card
        safariContainer.innerHTML += `
            <div class="card">

                <img src="${safari.image}" alt="${safari.title}">

                <h3 class="tour-name">${safari.title}</h3>

                <p><strong>${safari.duration}</strong></p>

                <p>${safari.shortDescription}</p>

                <p><strong>${safari.price}</strong></p>

                <button class="btn" onclick="openModal('${safari.id}')">
                    View Itinerary
                </button>

                <button class="btn book-btn"
                        data-safari="${safari.title}">
                    Book Now
                </button>

            </div>
        `;
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

                Book Now

            </button>

        </div>

    </div>

</div>

`;



        
        // Build itinerary HTML
        let itineraryHTML = "";

        safari.itinerary.forEach(day => {

            itineraryHTML += `
                <h3>${day.day}</h3>
                <p>${day.description}</p>
            `;

        });

        // Create Popup
        modalContainer.innerHTML += `

            <div id="${safari.id}" class="modal">

                <div class="modal-content">

                    <span class="close"
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
                        Book This Safari
                    </button>

                </div>

            </div>

        `;

    });

}
