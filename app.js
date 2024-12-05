const display = document.getElementById("display");

// Append a value to the display
function appendValue(value) {
    const lastChar = display.value.slice(-1);
    // Prevent adding multiple consecutive operators
    if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
        return;
    }
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result of the expression
function calculateResult() {
    try {
        // Safely evaluate the mathematical expression
        const result = new Function(`return ${display.value}`)();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
