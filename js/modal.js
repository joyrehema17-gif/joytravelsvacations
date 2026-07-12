// ==========================================
// SAFARI MODALS
// ==========================================
function openModal(id){
    document.getElementById(id).style.display = "block";
}
function closeModal(id){
    document.getElementById(id).style.display = "none";
}
window.onclick = function(e){
    document.querySelectorAll(".modal").forEach(modal=>{
        if(e.target === modal){
            modal.style.display = "none";
        }

    });

}
