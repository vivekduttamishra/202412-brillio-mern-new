import React from 'react';
import {createRoot } from 'react-dom/client';


let header = React.createElement("h1",null,"Hello React World");
let p= React.createElement("p",null,"Welcome to React");

let div = React.createElement('div',null, header,p);





let root = document.getElementById('root')
//root.innerHTML = div; //displays react component as plain object not UI
//root.appendChild(div) //can't append React element directly

 let reactRoot=createRoot(root)
 reactRoot.render(div) //renders the React element to the DOM