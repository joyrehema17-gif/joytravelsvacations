/* =====================================================
   JOY TRAVELS & VACATIONS
   MAIN JAVASCRIPT
===================================================== */

"use strict";
/* =====================================================
   LOAD SHARED COMPONENTS
===================================================== */

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "components/navbar.html");

    await loadComponent("footer", "components/footer.html");

    initializeNavbar();

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
   INITIALIZE NAVBAR
===================================================== */
function initializeNavbar(){

    highlightActivePage();

    initializeMobileMenu();

}
/* =====================================================
   ACTIVE PAGE
===================================================== */

function highlightActivePage(){

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        if(link.getAttribute("href") === currentPage){

            link.classList.add("active");

        }

    });

}
/* =====================================================
   MOBILE MENU
===================================================== */

function initializeMobileMenu(){

    const toggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelector(".nav-links");

    if(!toggle || !navLinks) return;

toggle.addEventListener("click", () => {

        console.log("Menu clicked");

        navLinks.classList.toggle("active");

    });

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
