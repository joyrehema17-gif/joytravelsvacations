// ==========================================
// FADE ANIMATION
// ==========================================

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeElements.forEach(el=>{

observer.observe(el);

});
// ==========================================
// PREMIUM COUNTER ANIMATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseInt(counter.dataset.target);

            let current = 0;

            const duration = 1800;

            const stepTime = 20;

            const increment = Math.ceil(target / (duration / stepTime));

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    if (target === 100) {

                        counter.textContent = "100%";

                    } else {

                        counter.textContent = target + "+";

                    }

                    return;

                }

                counter.textContent = current;

                setTimeout(updateCounter, stepTime);

            }

            updateCounter();

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

});
