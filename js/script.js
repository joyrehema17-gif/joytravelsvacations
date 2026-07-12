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

document.querySelectorAll(".book-btn").forEach(button=>{

button.addEventListener("click",function(){

const card=this.closest(".card");

const safari=
card.querySelector(".tour-name").innerText;

const message=
`Hello Joy Travels, I would like to book ${safari}. Kindly share itinerary, price and availability.`;

window.open(
`https://wa.me/254703158470?text=${encodeURIComponent(message)}`,
"_blank"
);

});

});
const params = new URLSearchParams(window.location.search);

if (params.get("subscribed") === "true") {
    document.getElementById("newsletter-success").style.display = "block";

    setTimeout(() => {
        document.getElementById("newsletter-success").style.display = "none";
    }, 5000);
}
/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

});
