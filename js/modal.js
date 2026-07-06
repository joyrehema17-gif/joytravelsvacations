// ==========================================
// SAFARI MODALS
// ==========================================

function openModal(id) {

    document.getElementById(id).style.display = "block";

}

function closeModal(id) {

    document.getElementById(id).style.display = "none";

}

window.addEventListener("click", function(event){

    document.querySelectorAll(".modal").forEach(function(modal){

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

});
