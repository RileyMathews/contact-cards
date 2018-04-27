//function to clear everything inside the article tags of the dom
const nukeDOM = (element) => {
    const elementToNuke = document.querySelector(element)
    while (elementToNuke.firstChild) {
        elementToNuke.removeChild(elementToNuke.firstChild)
    }
}

module.exports = nukeDOM