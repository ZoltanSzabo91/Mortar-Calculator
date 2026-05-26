// dark mode
const dmButton = document.querySelector(".dm-out");

// theme betöltés
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    CONFIG.theme = savedTheme;
}
if (CONFIG.theme === "desert") {
    document.documentElement.classList.add("dm");
    dmButton.classList.add("dm-active");
}

// dark mode váltás
dmButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dm");
    dmButton.classList.toggle("dm-active");
    if (
        document.documentElement.classList.contains("dm")
    ) {
        CONFIG.theme = "desert";
    } else {
        CONFIG.theme = "forest";
    }
    localStorage.setItem(
        "theme",
        CONFIG.theme
    );
});

// button disable

const button = document.getElementById("calculate");
const inputs = document.querySelectorAll("input");

function checkInputs() {
    let valid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
        }
    });
    if (valid) {
        button.disabled = false;
        button.classList.add("usable");
    } else {
        button.disabled = true;
        button.classList.remove("usable");
    }
}

// realtime ellenőrzés
inputs.forEach(input => {
    input.addEventListener(
        "input",
        checkInputs
    );
});

//hamb menu
const hamb = document.getElementById("hamb");
const hambPanel = document.querySelector(".hambPanel");
const beallitasok = document.querySelector(".beallitasok");
const beallit = document.getElementById("beallit");

hamb.addEventListener("click", () => {
    hambPanel.classList.toggle("hidden");
    if (
        hambPanel.classList.contains("hidden")
    ) {
        beallitasok.classList.add("hidden");
    }
});

beallit.addEventListener("click", () => {
    beallitasok.classList.toggle("hidden");
});
