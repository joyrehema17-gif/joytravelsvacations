// ==========================================
// WHATSAPP BOOKING
// ==========================================

document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("book-btn")) return;

    const safari = e.target.dataset.safari;

    const message =
`Hello Joy Travels and Vacations,

I would like to book:

${safari}

Kindly send me:

• Full itinerary
• Price
• Availability
• Pickup information

Thank you.`;

    window.open(
        "https://wa.me/254703158470?text=" +
        encodeURIComponent(message),
        "_blank"
    );

});
