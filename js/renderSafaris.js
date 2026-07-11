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
const container = document.getElementById("safariContainer");

container.innerHTML = safaris.map(safari => `

<div class="safari-card">

<img src="${safari.image}" alt="${safari.title}">

<div class="safari-content">

<h3>${safari.title}</h3>

<p>${safari.description}</p>

<h4>${safari.price}</h4>

<div class="safari-buttons">

<button class="btn" onclick="showItinerary(${safari.id})">

View Details

</button>

<a class="btn"

target="_blank"

href="https://wa.me/254703158470?text=Hello Joy, I'm interested in ${encodeURIComponent(safari.title)}">

Book Now

</a>

</div>

</div>

</div>

`).join("");
