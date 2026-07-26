/**
 * Redirects the user to the OMNIBAND order/landing page.
 */
function goToOrderPage() {
    window.location.href = "https://lenovousercasper-wq.github.io/OMNIBAND/";
}

/**
 * Changes the color of the wristband visual and updates the label name.
 * @param {string} colorHex - Hex color code for the border.
 * @param {string} colorName - Name of the chosen color.
 * @param {HTMLElement} element - The clicked swatch element.
 */
function selectColor(colorHex, colorName, element) {
    const bandGraphic = document.getElementById('bandGraphic');
    if (bandGraphic) {
        bandGraphic.style.borderColor = colorHex;
    }

    const colorLabel = document.getElementById('colorLabel');
    if (colorLabel) {
        colorLabel.textContent = colorName;
    }

    document.querySelectorAll('.swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    element.classList.add('active');
}

/**
 * Changes the active size indicator text and selection state.
 * @param {string} sizeText - Description of the size selected.
 * @param {HTMLElement} element - The clicked size button element.
 */
function selectSize(sizeText, element) {
    const sizeDisplay = document.getElementById('sizeDisplay');
    if (sizeDisplay) {
        sizeDisplay.textContent = 'Selected Size: ' + sizeText;
    }

    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}
