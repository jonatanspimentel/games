
function css() {
    function addClassAttrById(id, className) {
        let element = document.getElementById(id);
        element.classList.add(className);
    }

    function addElementHtml(elementName, atributeArray) {
        let element = document.createElement(elementName);

        atributeArray.forEach(attr => {
            addAttribute(element, attr.name, attr.value);
        });

        return element;
    }

    function addAttribute(element, name, value) {
        element.setAttribute(name, value);
    }

    function removeClassAttrById(id, className) {
        let element = document.getElementById(id);
        element.classList.remove(className);
    }

    return {
        addClassAttrById, 
        addElementHtml,
        addAttribute,
        removeClassAttrById
    }

}

export default css();