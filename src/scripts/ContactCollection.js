//object to hold methods to save, load, and write to database
const ContactCollection = Object.create(null, {
    contacts: {
        value: [
            //dummy data
            {
                name: "Riley",
                number: "555555555",
                address: "where?"
            }
        ]
    },
    loadDatabase: {
        value: () => {},
    },
    saveDatabase: {
        value: () => {
            localStorage.setItem("Contacts", JSON.stringify(ContactCollection.contacts))
            console.log(ContactCollection.contacts)
        },
    },
    addContact: {
        value: () => {}
    }
})

module.exports = ContactCollection