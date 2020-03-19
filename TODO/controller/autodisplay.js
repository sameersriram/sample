import {displayList} from '../views/list.js';
let temp=[];
let localLength;
let sessionLength;
export function autoDisplay(){
     displayFromLocal();
}
function displayFromLocal(){
    if((JSON.parse(localStorage.getItem('item-list')).length).toString()=='\0')
    {
        displayFromSession();
        return;
    }
    localLength = JSON.parse(localStorage.getItem('item-list')).length;
        for (var i = 0; i < localLength; i++) {
            temp.push(JSON.parse(localStorage.getItem('item-list'))[i]);
       }
       displayFromSession();
} 
function displayFromSession(){
    if((JSON.parse(sessionStorage.getItem('item')).length).toString()=='\0'){
        return;
    }
    sessionLength =JSON.parse(sessionStorage.getItem('item')).length;
        for (var i = 0; i < sessionLength; i++) {
            temp.push(JSON.parse(sessionStorage.getItem('item'))[i]);
       }
       for(var j in temp){
           displayList(temp[j]);
       }
}
