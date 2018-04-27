//app to return an html element representing a contact passed to it

//import required modules
const ContactCollection = require("./ContactCollection")
const ElementFactory = require("./ElementFactory")

const contactElementFactory = (contactName) => {
    const contact = ContactCollection.contacts[contactName]
    const card = document.createElement("card")

    //create heading
    card.appendChild(ElementFactory.textElement("h2", contact.name))

    //create number
    card.appendChild(ElementFactory.textElement("p", contact.number))

    //create address
    card.appendChild(ElementFactory.textElement("p", contact.address))

    return card
}

module.exports = contactElementFactory