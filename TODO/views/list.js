import {id} from '../controller/main.js';
import {localPush} from '../models/localStorage.js';
import {listenerClick} from '../controller/eventListener.js';
import{sessionPush} from '../models/sessionStorage.js';
export let inputElement;


export function createList() {
    inputElement = document.getElementById("inputButton").value;
    displayList(inputElement);
    localPush();
    sessionPush();
}

export function displayList(input) {
    var itemSectionList = document.querySelector(".itemSection").children[0];
    var template = `<li value=${id}>
                    ${input}
                    <a href="#">X</a>
                </li>`;
    itemSectionList.innerHTML += template;
    document.getElementById("pending").children[0].innerHTML = parseInt(document.getElementById("pending").children[0].innerHTML) + 1;
    inputForm.reset();
    var theParent = document.querySelector("#unordered-list");
    theParent.addEventListener("click",listenerClick, false);
}