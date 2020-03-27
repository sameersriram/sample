import {valid} from '../controller/validInput.js';
import {autoDisplay} from '../controller/autodisplay.js';
import {localStorageClicked,sessionStorageClicked} from '../controller/storageClicked.js';
import {root1Clicked,root2Clicked} from './instanceClicked.js';

export let id = 1;
export let listLocal = {
    root1:[],
    root2:[]
};
export let listSession={
    root1:[],
    root2:[]
};


document.querySelector('.dropdown-content').children[0].addEventListener('click',localStorageClicked,false );
document.querySelector('.dropdown-content').children[1].addEventListener('click',sessionStorageClicked,false);

document.querySelector('.dropdown-content-object').children[0].addEventListener('click',root1Clicked,false );
document.querySelector('.dropdown-content-object').children[1].addEventListener('click',root2Clicked,false);

document.querySelector('.saveButton').addEventListener('click', valid , false);

autoDisplay();