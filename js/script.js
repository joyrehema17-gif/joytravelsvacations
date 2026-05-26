window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        card.style.opacity = "1"; 
    });
});
const elements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // VERY IMPORTANT
<script>
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// Change slide every 4 seconds
setInterval(showSlide, 4000);
</script>

function openModal(id){
    document.getElementById(id).style.display="block";
}

function closeModal(id){
    document.getElementById(id).style.display="none";
}

window.onclick=function(e){

let modal=document.querySelectorAll('.modal');

modal.forEach(box=>{

if(e.target===box){
box.style.display="none";
}

});

}
document.querySelectorAll(".book-btn").forEach(button => {

button.addEventListener("click", function(){

let card=this.closest(".card");

let safari=card.querySelector(".tour-name").innerText;

let message=`Hello Joy Travels, I would like to book ${safari}. Kindly share price, itinerary and availability.`;

let url=`https://wa.me/254703158470?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

});

});
