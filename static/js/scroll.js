window.onscroll = () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 200) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
};
