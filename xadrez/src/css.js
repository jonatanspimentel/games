
function css() {
    
    function addCssClass(id, className) {
        let element = document.getElementById(id);
        element.classList.add(className);
    }

    function addHtmlAttribute(element, name, value) {
        element.setAttribute(name, value);
    }

    function addHtmlElement(elementName, atributeArray) {
        let element = document.createElement(elementName);

        atributeArray.forEach(attr => {
            addHtmlAttribute(element, attr.name, attr.value);
        });

        return element;
    }

    function removeCssClassById(id, className) {
        let element = document.getElementById(id);
        element.classList.remove(className);
    }

    return {
        addHtmlElement
    }

}

export default css();