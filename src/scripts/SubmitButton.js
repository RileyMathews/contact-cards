//function to add event listener to submit button
const ContactCollection = require("./ContactCollection")

const activateSubmitButton = () => {
    const button = document.querySelector("#submit")
    button.addEventListener("click", () => {
        const name = document.querySelector("#name").value
        const number = document.querySelector("#number").value
        const address = document.querySelector("#address").value
        ContactCollection.addContact(name, number, address)
    })
}

module.exports = activateSubmitButton