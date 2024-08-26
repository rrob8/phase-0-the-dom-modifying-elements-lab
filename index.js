main = document.querySelector('#main')

main.remove()

const body = document.querySelector('body')
const newHeader = document.createElement('h1')
body.append(newHeader)

newHeader.id = 'victory'

newHeader.innerHTML = "Maria is the champion"

