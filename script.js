document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll('a[href^="#"]');

    function showSection(sectionId) {

        sections.forEach(function (section) {
            section.style.display = "none";
        });

        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Close mobile navbar after clicking
        const navbar = document.getElementById("navbarNav");

        if (navbar && navbar.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbar);

            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    }

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const sectionId = this.getAttribute("href").substring(1);

            if (document.getElementById(sectionId)) {
                event.preventDefault();
                showSection(sectionId);
            }

        });

    });

    // Show Home when website opens
    showSection("home");

});
