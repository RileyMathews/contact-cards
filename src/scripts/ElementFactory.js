//app to create html elements
const ElementFactory = Object.create(null, {
    textElement: {
        value: function (element, text) {
            const htmlElement = document.createElement(element)
            htmlElement.textContent = text
            return htmlElement
        }
    },
})

module.exports = ElementFactory