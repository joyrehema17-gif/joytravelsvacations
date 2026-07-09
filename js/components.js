async function loadComponent(id, file) {

    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    if (id === "navbar") {

        const currentPage = location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".nav-links a").forEach(link => {

            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }

        });

    }

}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
