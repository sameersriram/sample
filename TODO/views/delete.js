import {localPop} from '../models/localStorage.js';
import {footerUpdatePending,footerUpdateCompleted} from '../views/footerUpdate.js';
import {sessionPop} from '../models/sessionStorage.js';
import {listTracker} from '../controller/listTracker.js';

let element;

export function delet(ele) {
    var tempId=ele.parentElement.id;
    var delStore=parseInt(listTracker[tempId]);
    var itemRemove = ele.parentElement.childNodes[0].nodeValue;
    if(ele.parentElement.value==1){
        footerUpdatePending();
    }
    else{
        footerUpdateCompleted();
    }
    ele.parentElement.remove();
    element=itemRemove.replace(/[\r\n\s]+/gm,"");
   (delStore)?sessionPop(element):localPop(element);
}