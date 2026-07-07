const galleryImages = document.querySelectorAll(".gallery-item img");

const galleryModal = document.getElementById("galleryModal");

const galleryImage = document.getElementById("galleryImage");

const galleryClose = galleryModal.querySelector(".close");

galleryImages.forEach(img => {

    img.onclick = function(){

        galleryModal.style.display = "block";

        galleryImage.src = this.src;

        galleryImage.alt = this.alt;

    }

});

galleryClose.onclick = function(){

    galleryModal.style.display = "none";

}

galleryModal.onclick = function(e){

    if(e.target === galleryModal){

        galleryModal.style.display = "none";

    }

}
