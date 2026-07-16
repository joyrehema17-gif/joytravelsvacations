// ==========================================
// Animated Counters
// ==========================================

const counters = document.querySelectorAll(".counter");

const speed = 60;

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / speed);

                count += increment;

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));
