document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

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
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const sectionId = this.getAttribute("href").substring(1);

            showSection(sectionId);
        });
    });

    showSection("home");

});
