const toggleTheme = document.getElementById("theme-toggle");

const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
if (storedTheme)
    document.documentElement.setAttribute("data-theme", storedTheme);

if (toggleTheme != null) {
    toggleTheme.onclick = function () {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);
    };
}
