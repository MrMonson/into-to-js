const header = document.createElement('div');
const loginButton = document.createElement('button');
loginButton.innerText = "This button belongs to Edgar";
header.appendChild(loginButton);
const headerText = document.createTextNode('hello World!');
header.appendChild(headerText);
document.body.appendChild(header);
console.log(header);



console.log(header.style);
