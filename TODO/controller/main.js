import {displayList} from '../views/list.js';
import {valid} from '../controller/validInput.js';

export let id = 1;
export let list = [];


document.querySelector('.saveButton').addEventListener('click', valid , false);
(function () {
    var temp=[]
    var length = JSON.parse(localStorage.getItem('item-list')).length;
    for (var i = 0; i < length; i++) {
         temp.push(JSON.parse(localStorage.getItem('item-list'))[i]);
    }
    for(var i in temp){
        displayList(temp[i]);
    }
})();
