//function to return all contacts as an html element

//import required modules
const ContactCollection = require("./ContactCollection")
const ContactBuilder = require("./ContactBuilder")

const returnAllContacts = () => {
    const fragment = document.createDocumentFragment()
    for (const key in ContactCollection.contacts) {
        fragment.appendChild(ContactBuilder(key))
    }
    return fragment
}


module.exports = returnAllContacts