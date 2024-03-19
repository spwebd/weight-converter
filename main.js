function convertPoundsToKilos() {
    const pounds = parseFloat(document.getElementById('poundsInput').value);
    const kilograms = pounds * 0.453592;
    document.getElementById('result').innerText = `${pounds} pounds is equal to ${kilograms} kilograms.`;
}

function convertKilosToPounds() {
    const kilograms = parseFloat(document.getElementById('kilosInput').value);
    const pounds = kilograms * 2.20462;
    document.getElementById('result2').innerText = `${kilograms} kilograms is equal to ${pounds} pounds.`;
}