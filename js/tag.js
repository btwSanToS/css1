const color = {
    p:  '#00fa151',
    div: '#0011fa',
    span: '#d1be15',
    section: '#3b5be9',
    ul:     '#d53be9',
    ol:     '#e93ba1',
    header: '#05ac05',
    nav:    '#77d9e0',
    main:   '#696817',
    footer: '#e40a15',
    form:   '#362c0b',
    body:   '#0ab8e4',
    padrao: '#000000',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }

}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = color.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})