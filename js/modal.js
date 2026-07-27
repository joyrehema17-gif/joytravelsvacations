// ==========================================
// SAFARI MODALS
// Joy Travels & Vacations
// ==========================================

function openModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        console.warn("Modal not found:", id);
        return;
    }

    modal.style.display = "block";

}


// ==========================================
// CLOSE SAFARI MODAL
// ==========================================

function closeModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        return;
    }

    // Close modal
    modal.style.display = "none";

    // Wait briefly, then scroll to Safari Collection
    setTimeout(function() {

        const packages =
            document.getElementById("packages");

        if (packages) {

            window.scrollTo({
                top: packages.offsetTop,
                behavior: "smooth"
            });

        }

    }, 100);

}


// ==========================================
// CLOSE WHEN CLICKING OUTSIDE MODAL
// ==========================================

window.onclick = function(event) {

    document.querySelectorAll(".modal").forEach(function(modal) {

        if (event.target === modal) {

            modal.style.display = "none";

            setTimeout(function() {

                const packages =
                    document.getElementById("packages");

                if (packages) {

                    window.scrollTo({
                        top: packages.offsetTop,
                        behavior: "smooth"
                    });

                }

            }, 100);

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

                    setTimeout(function() {

                        const packages =
                            document.getElementById("packages");

                        if (packages) {

                            window.scrollTo({
                                top: packages.offsetTop,
                                behavior: "smooth"
                            });

                        }

                    }, 100);

                }

            });

        }

    }
);
