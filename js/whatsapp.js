// ==========================================
// WHATSAPP BOOKING
// ==========================================

document.querySelectorAll(".book-btn").forEach(function(button){

    button.addEventListener("click", function(){

        const card = this.closest(".card");

        if(!card) return;

        const safari =
        card.querySelector(".tour-name").innerText;

        const message =
`Hello Joy Travels and Vacations,

I would like to book:

${safari}

Kindly share:

• Price
• Full itinerary
• Availability

Thank you.`;

        const url =
`https://wa.me/254703158470?text=${encodeURIComponent(message)}`;

        window.open(url,"_blank");

    });

});
