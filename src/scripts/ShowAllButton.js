//function to show all contacts on dom
const addToDom = require("./DOMinator")
const DisplayAllContacts = require("./DisplayAllContacts")

const activateShowAllButton = () => {
    const button = document.querySelector("#btn--showAll")
    button.addEventListener("click", () => {
        addToDom("#output", DisplayAllContacts())
    })
}

module.exports = activateShowAllButton