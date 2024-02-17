function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function setElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorInKeyboard(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-green-500", "text-black");
}