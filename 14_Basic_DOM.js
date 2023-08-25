// Paste this code on any website then get into console to see the DOM by js

let h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

let input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})