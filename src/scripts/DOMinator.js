//function to add things to the specified place in the dom

//import required modules
const nukeDOM = require("./nukeDOM")

const addToDom = (parentElement, thingToAdd) => {
    const output = document.querySelector(parentElement)
    nukeDOM(parentElement)
    output.appendChild(thingToAdd)
}

module.exports = addToDom