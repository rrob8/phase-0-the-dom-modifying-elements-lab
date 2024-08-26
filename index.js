main = document.querySelector('#main');

main.remove();

const body = document.querySelector('body');
const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.innerHTML = "Robert is the champion";

body.append(newHeader);