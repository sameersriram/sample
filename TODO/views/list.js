import {id} from '../controller/main.js';
import {localPush} from '../models/localStorage.js';
import {listenerClick} from '../controller/eventListener.js';
import{sessionPush} from '../models/sessionStorage.js';
import {storageFlag} from '../controller/storageClicked.js';
import {listTrack} from '../controller/listTracker.js';


export let inputElement;

let listId=0;

export function createList() {
    inputElement = document.getElementById("inputButton").value;
    listTrack();
    displayList(inputElement);
    (storageFlag)?sessionPush():localPush();
}

export function displayList(input) {
    var itemSectionList = document.querySelector(".itemSection").children[0];
    var template = `<li value=${id} id=${listId}>
                    ${input}
                    <a href="#">X</a>
                </li>`;
    listId++;
    itemSectionList.innerHTML += template;
    document.getElementById("pending").children[0].innerHTML = parseInt(document.getElementById("pending").children[0].innerHTML) + 1;
    inputForm.reset();
    var theParent = document.querySelector("#unordered-list");
    theParent.addEventListener("click",listenerClick, false);
}