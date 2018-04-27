/*
Modules.
1. Contact collection object with methods to...
    1. load database
    2. save database
    3. add person to database
2. contact component to display person
3. contact form component to add a person
*/

const ContactCollection = require("./ContactCollection")
const ContactElementFactory = require("./ContactBuilder")
const addToDom = require("./DOMinator")
const addAllContacts = require("./DisplayAllContacts")

ContactCollection.saveDatabase()
ContactCollection.addContact("Lyndz", "33333333", "singapore")
ContactCollection.addContact("Mark", "44444444", "there")
addToDom("#output", addAllContacts())