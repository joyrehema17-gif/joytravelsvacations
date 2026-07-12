/* =====================================================
   JOY TRAVELS & VACATIONS
   MAIN JAVASCRIPT
===================================================== */

"use strict";
/* =====================================================
   LOAD SHARED COMPONENTS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");

});

async function loadComponent(id, file){

    const element = document.getElementById(id);

    if(!element) return;

    try{

        const response = await fetch(file);

        if(!response.ok){

            throw new Error(`Unable to load ${file}`);

        }

        element.innerHTML = await response.text();

    }

    catch(error){

        console.error(error);

    }

}
/* =====================================================
   1. GLOBAL VARIABLES
===================================================== */

const body = document.body;

/*const navbar = document.querySelector(".navbar");*/

const cards = document.querySelectorAll(".card");

const fadeElements = document.querySelectorAll(".fade-in");

const modals = document.querySelectorAll(".modal");

/* =====================================================
   2. HERO SLIDER
===================================================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    if(slides.length === 0) return;

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

}

if(slides.length){

    showSlide();

    setInterval(showSlide,4000);

}
