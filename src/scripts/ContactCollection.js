//object to hold methods to save, load, and write to database
const ContactCollection = Object.create(null, {
    contacts: {
        value: {},
        writable: true
    },
    loadDatabase: {
        value: function () {
            if (localStorage.getItem("Contacts") !== null) {
                this.contacts = JSON.parse(localStorage.getItem("Contacts"))
            }
        },
    },
    saveDatabase: {
        value: function () {
            localStorage.setItem("Contacts", JSON.stringify(this.contacts))
        }
    },
    addContact: {
        value: function (name, number, address) {
            const uniqueID = Math.floor(Math.random() * number + 1)
            this.contacts[name] =
                {
                    name,
                    number,
                    address,
                    ID: uniqueID
                }
            this.saveDatabase()
        }
    }
})

module.exports = ContactCollection