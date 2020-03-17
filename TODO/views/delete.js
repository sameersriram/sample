import {localPop} from '../models/localStorage.js';
import {footerUpdatePending,footerUpdateCompleted} from '../views/footerUpdate.js';
import {sessionPop} from '../models/sessionStorage.js';
export function delet(ele) {
    var itemRemove = ele.parentElement.innerHTML;
    if(ele.parentElement.value==1){
        footerUpdatePending();
    }
    else{
        footerUpdateCompleted();
    }
    ele.parentElement.remove();
    localPop(itemRemove);
    sessionPop();
}