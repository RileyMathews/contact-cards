//object to hold methods to save, load, and write to database
const ContactCollection = Object.create(null, {
    contacts: {
        value: []
    },
    loadDatabase: {
        value: function () {
            this.contacts = localStorage.getItem(JSON.parse("Contacts"))
        },
    },
    saveDatabase: {
        value: function () {
            localStorage.setItem("Contacts", JSON.stringify(this.contacts))
        }
    },
    addContact: {
        value: function (name, number, address) {
            this.contacts.push(
                {
                    name,
                    number,
                    address
                }
            )
            this.saveDatabase()
        }
    }
})

module.exports = ContactCollection