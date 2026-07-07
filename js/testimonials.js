const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial(index){

    testimonials.forEach(item=>{

        item.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

setInterval(()=>{

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

},5000);
