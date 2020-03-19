import {valid} from '../controller/validInput.js';
import {autoDisplay} from '../controller/autodisplay.js';
import {localStorageClicked,sessionStorageClicked} from '../controller/storageClicked.js';

export let id = 1;
export let listLocal = [];
export let listSession=[];



document.querySelector('.dropdown-content').children[0].addEventListener('click',localStorageClicked,false );
document.querySelector('.dropdown-content').children[1].addEventListener('click',sessionStorageClicked,false);

document.querySelector('.saveButton').addEventListener('click', valid , false);

autoDisplay();