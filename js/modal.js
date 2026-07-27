// ==========================================
// SAFARI MODALS
// Joy Travels & Vacations
// ==========================================
// ==========================================
// OPEN SAFARI MODAL
// ==========================================

function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        console.warn("Modal not found:", id);
        return;
    }

    // Show modal
    modal.style.display = "block";

    // Stop background page from scrolling
    document.body.classList.add("modal-open");

}


// ==========================================
// CLOSE SAFARI MODAL
// ==========================================

function closeModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        return;
    }

    // Hide modal
    modal.style.display = "none";

    // Allow background page to scroll again
    document.body.classList.remove("modal-open");

}


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE MODAL
// ==========================================

window.onclick = function(event) {

    document.querySelectorAll(".modal").forEach(function(modal) {

        if (event.target === modal) {

            modal.style.display = "none";

            // Enable background scrolling again
            document.body.classList.remove("modal-open");

        }

    });

};


// ==========================================
// CLOSE WITH ESCAPE KEY
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            document.querySelectorAll(".modal").forEach(function(modal) {

                if (modal.style.display === "block") {

                    modal.style.display = "none";

                    // Enable background scrolling again
                    document.body.classList.remove("modal-open");

                }

            });

        }

    }
);
