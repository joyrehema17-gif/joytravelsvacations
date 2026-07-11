JOY TRAVELS & VACATIONS
Website Design & Development Style Guide

Version: 1.0
Project: Joy Travels & Vacations
Website: https://joytravelsvacations.com

1. Project Structure
2. joytravelsvacations/

│
├── index.html
├── safaris.html
├── destinations.html
├── excursions.html
├── transfers.html
├── hotels.html
├── group-travel.html
├── about.html
├── contact.html
│
├── css/
│
│   01-variables.css
│   02-reset.css
│   03-global.css
│   04-navbar.css
│   05-footer.css
│   06-home.css
│   07-safaris.css
│   08-destinations.css
│   09-excursions.css
│   10-transfers.css
│   11-about.css
│   12-contact.css
│   13-modal.css
│   14-animations.css
│   15-responsive.css
│
├── js/
├── images/
└── components/

2. Brand Colours
Primary Gold
#D4AF37

Primary Dark Gold
#B88A1B

Accent Orange
#F4A300

Dark
#1B1B1B

Dark Light
#2A2A2A

Cream
#F8F4EC

White
#FFFFFF

Body Text
#444444

Light Text
#777777

3. Typography

Body

Arial, Helvetica, sans-serif

Body size

16px

Headings

H1 = 64px

H2 = 42px

H3 = 28px
4. Standard Buttons

Primary Button

.btn

Secondary Button

.btn-outline

Small Button

.btn-small

Never create another button style unless absolutely necessary.

5. Standard Sections

Every page follows this spacing.

section{

padding:90px 0;

}

Every section heading uses

.section-title

Never create custom titles.

6. Cards

Cards use

border-radius:12px;

box-shadow:var(--shadow);

background:white;

Used for

Safari cards
Destination cards
Hotel cards
Testimonials
Booking boxes

7. Images

All images

display:block;

max-width:100%;

height:auto;

Hero images

cover

Gallery images

object-fit:cover;
8. CSS Responsibilities
01-variables.css

Only

colours
shadows
radius
transitions
02-reset.css

Only browser reset.

Never page styling.

03-global.css

Shared throughout entire website.

Contains

typography
forms
buttons
containers
section titles
utilities
04-navbar.css

Navigation only.

05-footer.css

Footer only.

06-home.css

Homepage only.

Contains

Hero

Feature Bar

Home Grid

Reviews

Top Destinations

Featured Safaris

Meet Joy

Gallery

Testimonials

Newsletter
07-safaris.css

Only Safari page.

08-destinations.css

Destinations only.

09-excursions.css

Excursions only.

10-transfers.css

Transfers only.

11-about.css

About page only.

12-contact.css

Contact page only.

13-modal.css

Every popup.

Never put modal CSS elsewhere.

14-animations.css

Every animation

Fade

Zoom

Slide

Reveal

Hover

15-responsive.css

Only responsive design.

Never desktop styling.

9. JavaScript Responsibilities
components.js

Loads Navbar & Footer

slider.js

Hero slider

renderSafaris.js

Creates safari cards

modal.js

Popup system

gallery.js

Gallery popup

testimonials.js

Testimonial slider

animations.js

Scroll animations

whatsapp.js

Booking buttons
10. Folder Naming Rules

Always

images/gallery/

images/testimonials/

images/safaris/

images/destinations/

Never use spaces in folder names.

Example

❌

images/    gallery

✅

images/gallery
11. Naming Convention

Classes
feature-bar
gallery-grid
destination-card
booking-box
section-title
Use lowercase.
Separate words with hyphens.
Never use spaces.

12. Development Workflow
Whenever we add a new page:
Create HTML structure.
Create page-specific CSS.
Reuse global components.
Test on desktop.
Test on tablet.
Test on mobile.
Optimize images.
Test GitHub Pages.
Commit changes.
Deploy.
13. Final Quality Checklist

Before publishing any update:

✅ HTML validates without errors.
✅ CSS has no duplicate styles.
✅ JavaScript loads without console errors.
✅ Images load correctly (no 404 errors).
✅ Responsive layout works on mobile, tablet, and desktop.
✅ Navbar and footer are consistent across all pages.
✅ Buttons, cards, and typography match the style guide.
✅ Links, forms, and modals function correctly.
✅ Changes are committed to GitHub and verified on the live website.
Where we are today

We've made significant progress. The project has evolved from a collection of working pages into a structured website with a clear architecture. The CSS is organized, duplicate styles have been reduced, the homepage is nearly complete, and we've established conventions that will make future development much faster and more consistent.

From here, our next focus can shift to building out the remaining pages (Group Travel, Hotels, Excursions, Transfers, About, Contact) using this guide as the standard. That will give Joy Travels & Vacations a consistent, professional look across the entire website.
