// ==========================================
// ANIMATIONS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // FADE IN
    // ==========================================

    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    fadeElements.forEach(el => {

        fadeObserver.observe(el);

    });



    // ==========================================
    // COUNTERS
    // ==========================================

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 80);

            function update() {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        target === 100 ? "100%" : target + "+";

                    return;

                }

                counter.textContent = current;

                requestAnimationFrame(update);

            }

            update();

            counterObserver.unobserve(counter);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

});
