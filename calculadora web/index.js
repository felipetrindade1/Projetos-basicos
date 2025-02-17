const display = document.querySelector(".input-p");


function appendToDisplay(value) {
    if (display.value === "0") {
        display.value = value

    }
    else {display.value += value}
}

function clearDisplay() {
    display.value = 0
}

function calculateResult() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "Error"
    }
    
}

function exponencial() {
    display.value = display.value * display.value

}

function raiz () {
    display.value = display.value ** 0.5
}

function deleteLastCharacter() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1); 
    }
    
}



