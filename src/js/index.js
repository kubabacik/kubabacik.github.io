document.addEventListener("DOMContentLoaded", function () {
    let theme = localStorage.getItem("kubabaciktheme") || "cat-mocha";

    document.documentElement.className = theme;

    const themeSelector = document.getElementById("theme-select")
    themeSelector.value = theme;

    themeSelector.addEventListener("change", function (event) {

        theme = event.target.value;
        localStorage.setItem("kubabaciktheme", theme);
        document.documentElement.className = theme;
    }
    );
});