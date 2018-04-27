//function to add event listener to submit button
const ContactCollection = require("./ContactCollection")

const activateSubmitButton = () => {
    const button = document.querySelector("#btn--submit")
    button.addEventListener("click", () => {
        const name = document.querySelector("#input--name").value
        const number = document.querySelector("#input--number").value
        const address = document.querySelector("#input--address").value
        ContactCollection.addContact(name, number, address)
    })
}

module.exports = activateSubmitButton