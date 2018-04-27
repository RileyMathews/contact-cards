//function to add things to the specified place in the dom
const addToDom = (parentElement, thingToAdd) => {
    const output = document.querySelector(parentElement)
    output.appendChild(thingToAdd)
}

module.exports = addToDom