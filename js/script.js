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
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        document.getElementById('success-message').style.display = 'block';
    }
</script>
setTimeout(() => {
    document.getElementById('success-message').style.display = 'none';
}, 5000);
