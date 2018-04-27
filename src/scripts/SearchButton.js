//function to activate search button
const addToDom = require("./DOMinator")
const ContactBuilder = require("./ContactBuilder")

const activateSearchButton = () => {
    const button = document.querySelector("#btn--search")
    button.addEventListener("click", () => {
        const nameSearched = document.querySelector("#input--search").value
        addToDom("#output", ContactBuilder(nameSearched))
    })
}

module.exports = activateSearchButton