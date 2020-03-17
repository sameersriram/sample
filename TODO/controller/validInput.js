import {createList} from '../views/list.js';


export function valid() {
    if (!(document.getElementById("inputButton").value)) {
        alert("the input cannot be empty");
    }
    else {
    createList();
    }
}