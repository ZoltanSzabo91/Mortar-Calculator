const CONFIG ={
    milSystem: 6400,
    theme: "forest"
};

const milVonas = document.getElementById("MilVonas");
const iranyLabel = document.getElementById("iranyLabel");
let mil = true;

iranyLabel.innerText = `Irányszög (${CONFIG.milSystem})`;

milVonas.addEventListener("click", () => {
    if (mil === true) {
        CONFIG.milSystem = 6000;
        mil = false;
        milVonas.innerText = "Vonás 6000";
    } else {
        CONFIG.milSystem = 6400;
        mil = true;
        milVonas.innerText ="Vonás 6400";
    }
    iranyLabel.innerText = `Irányszög (${CONFIG.milSystem})`;
});