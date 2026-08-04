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
        ${safari.badge ? `
        <span class="safari-badge">
            ${safari.badge}
        </span>
        ` : ""}
        <span class="duration">
            ${safari.duration}
        </span>
    </div>
    <div class="card-content">
        <h3 class="tour-name">
            ${safari.title}
        </h3>
        <div class="rating">
            ⭐ ${safari.rating || "5.0"}
        </div>
        <p class="destination">
            📍 ${safari.location}
        </p>
        <p class="description">
            ${safari.shortDescription}
        </p>
        ${safari.features ? `
        <div class="feature-icons">
            ${safari.features.map(feature => `
                <span>${feature}</span>
            `).join("")}
        </div>
        ` : ""}
        ${safari.parks ? `
        <div class="parks">
            <strong>Parks:</strong>
            ${safari.parks.join(" • ")}
        </div>
        ` : ""}
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
   PREMIUM SAFARI MODAL
----------------------------- */

modalContainer.innerHTML += `

<div id="${safari.id}" class="modal">

<div class="modal-content">

<span
class="close"
onclick="closeModal('${safari.id}')">

&times;

</span>


<!-- IMAGE -->

<div class="modal-image">

<img
src="${safari.image}"
alt="${safari.title}">

</div>


<!-- HEADER -->

<div class="modal-header">

<span class="modal-badge">

${safari.badge || ""}

</span>

<h2>

${safari.title}

</h2>

<div class="modal-meta">

<span>

⭐ ${safari.rating || "5.0"}

</span>

<span>

⏱ ${safari.duration}

</span>

<span>

📍 ${safari.location}

</span>

</div>

</div>


<!-- INTRO -->

<p class="modal-introduction">

${safari.introduction || ""}

</p>


<hr>


<!-- ITINERARY -->

<div class="modal-itinerary">

${itineraryHTML}

</div>


<hr>


<!-- HIGHLIGHTS -->

${safari.highlights ? `

<div class="modal-section">

<h3>⭐ Safari Highlights</h3>

<div class="modal-tags">

${safari.highlights.map(item=>`

<span>${item}</span>

`).join("")}

</div>

</div>

` : ""}


<!-- ACCOMMODATION -->

${safari.accommodation ? `

<div class="modal-section">

<h3>🏨 Accommodation</h3>

<ul>

${safari.accommodation.map(item=>`

<li>${item}</li>

`).join("")}

</ul>

</div>

` : ""}


<!-- INCLUDED -->

${safari.included ? `

<div class="modal-section">

<h3>✅ Included</h3>

<ul>

${safari.included.map(item=>`

<li>${item}</li>

`).join("")}

</ul>

</div>

` : ""}


<!-- EXCLUDED -->

${safari.excluded ? `

<div class="modal-section">

<h3>❌ Not Included</h3>

<ul>

${safari.excluded.map(item=>`

<li>${item}</li>

`).join("")}

</ul>

</div>

` : ""}


<!-- WHAT TO BRING -->

${safari.bring ? `

<div class="modal-section">

<h3>🎒 What To Bring</h3>

<ul>

${safari.bring.map(item=>`

<li>${item}</li>

`).join("")}

</ul>

</div>

` : ""}


<!-- PARKS -->

${safari.parks ? `

<div class="modal-section">

<h3>🗺 Parks Visited</h3>

<div class="modal-tags">

${safari.parks.map(item=>`

<span>${item}</span>

`).join("")}

</div>

</div>

` : ""}


<!-- BOOK -->

<div class="modal-footer">

<button

class="btn book-btn"

data-safari="${safari.title}">

📱 Book This Safari

</button>

</div>

</div>

</div>
`;
    });
}

