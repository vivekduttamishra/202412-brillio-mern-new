


let header = document.createElement('h1', 'Hello HTML')
header.innerHTML = 'Hello HTML+JS World';

let p=document.createElement('p');
p.innerHTML="Welcome to DOM";

let div = document.createElement('div')
div.appendChild(header)
div.appendChild(p);

let root = document.getElementById('root')
root.appendChild(div); 

