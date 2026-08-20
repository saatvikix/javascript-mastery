const toggleBtn = document.querySelector("#toggleTheme");
const body = document.querySelector("body");

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

// 1. Check if USER has already chosen a theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
}

// 2. Otherwise, follow the SYSTEM theme
else {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    applyTheme(systemTheme);
}

// 3. Let the user override the system theme
toggleBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    const newTheme = body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme", newTheme);
});