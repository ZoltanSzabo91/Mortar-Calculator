// Calculator
const zone1Square = document.getElementById("square1");
const zone1X = document.getElementById("east1");
const zone1Y = document.getElementById("north1");

const zone2Square = document.getElementById("square2");
const zone2X = document.getElementById("east2");
const zone2Y = document.getElementById("north2");

const figyCelTav = document.getElementById("tav");
const figyCelIrany = document.getElementById("irany");

const targetX = document.getElementById("targetX");
const targetY = document.getElementById("targetY");

const resultIrany = document.getElementById("resultIrany");
const resultTav = document.getElementById("resultTav");
const resultToltes = document.getElementById("resultToltes");

const deltaAm = document.getElementById("deltaAm");



function calculate() {
    if (
        !zone1X.value ||
        !zone1Y.value ||
        !zone2X.value ||
        !zone2Y.value ||
        !figyCelTav.value ||
        !figyCelIrany.value
    ) {
        return;
    }

    const figyX = Number(zone1X.value);
    const figyY = Number(zone1Y.value);

    const tuzX = Number(zone2X.value);
    const tuzY = Number(zone2Y.value);

    const tav = Number(figyCelTav.value);
    const irany = Number(figyCelIrany.value);
    const delta = Number(deltaAm.value);
    let correctedIrany = irany - delta;

    if (correctedIrany < 0) {
        correctedIrany += CONFIG.milSystem;
    }
    if (correctedIrany >= CONFIG.milSystem) {
        correctedIrany -= CONFIG.milSystem;
    }

    const rad = correctedIrany * (2 * Math.PI / CONFIG.milSystem);

    const dxFigyCel = Math.sin(rad) * tav;
    const dyFigyCel = Math.cos(rad) * tav;

    const celX = Math.round(figyX + dxFigyCel);
    const celY = Math.round(figyY + dyFigyCel);

    targetX.textContent = celX;
    targetY.textContent = celY;

    const dxTuzCel = celX - tuzX;
    const dyTuzCel = celY - tuzY;

    const tuzCelTav = Math.round(
        Math.sqrt(dxTuzCel * dxTuzCel + dyTuzCel * dyTuzCel)
    );

    let tuzCelIrany = Math.atan2(dxTuzCel, dyTuzCel) * (CONFIG.milSystem / (2 * Math.PI));

    if (tuzCelIrany < 0) {
        tuzCelIrany += CONFIG.milSystem;
    }

    resultIrany.textContent = Math.round(tuzCelIrany);
    resultTav.textContent = tuzCelTav;
    resultToltes.textContent = "-";
}

inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
});

button.addEventListener("click", calculate);

