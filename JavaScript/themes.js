const themeSelector = document.getElementById("theme-selector");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("selectedTheme", theme);

    themeSelector.value = theme;
}

// Load saved theme
const savedTheme = localStorage.getItem("selectedTheme") || "default";

applyTheme(savedTheme);

// Listen for theme changes
themeSelector.addEventListener("change", function () {
    applyTheme(this.value);
});