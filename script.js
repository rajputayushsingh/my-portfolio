
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {

            const button =
                document.querySelector(".navbar-toggler");

            button.click();

        }

    });

});


const yearElement =
    document.querySelector(".copyright");

if (yearElement) {

    const year = new Date().getFullYear();

    yearElement.textContent =
        `© ${year} Ayush Singh. All Rights Reserved.`;

}