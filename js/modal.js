// ==========================================
// SAFARI MODALS
// Joy Travels & Vacations
// ==========================================

// Open Safari Modal
function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        console.warn("Safari modal not found:", id);
        return;
    }

    // Remember current position
    modal.dataset.scrollPosition = window.scrollY;

    // Show modal
    modal.style.display = "block";

    // Prevent background scrolling
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

    // Allow page scrolling again
    document.body.classList.remove("modal-open");

    // Scroll back to Safari Collection
    setTimeout(() => {

        const safariSection =
            document.getElementById("packages");

        if (safariSection) {

            safariSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);

}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

window.onclick = function(event) {

    document.querySelectorAll(".modal").forEach(modal => {

        if (event.target === modal) {

            modal.style.display = "none";

            document.body.classList.remove("modal-open");

            setTimeout(() => {

                const safariSection =
                    document.getElementById("packages");

                if (safariSection) {

                    safariSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 100);

        }

    });

};


// ==========================================
// CLOSE MODAL WITH ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal").forEach(modal => {

            if (modal.style.display === "block") {

                modal.style.display = "none";

                document.body.classList.remove("modal-open");

                const safariSection =
                    document.getElementById("packages");

                if (safariSection) {

                    safariSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    }

});
