//object to hold methods to save, load, and write to database
ContactCollection = Object.create(null, {
    loadDatabase: {
        value: () => {},
    },
    saveDatabase: {
        value: () => {},
    },
    addContact: {
        value: () => {}
    }
})