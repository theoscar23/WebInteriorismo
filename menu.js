function toggleMenu() {
    var menuCheckbox = document.getElementById("menu");
    var navbar = document.querySelector(".navbar");

    navbar.style.display = menuCheckbox.checked ? "none" : "block"; 
}