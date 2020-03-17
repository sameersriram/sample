import {toggle} from '../views/toggle.js';
import {delet} from '../views/delete.js';

export function listenerClick(e) {
    var ele;
    if (e.target.parentElement == e.currentTarget) {
        ele = e.target;
        toggle(ele);
        e.stopPropagation();
    }
    else if (e.target.parentElement.parentElement == e.currentTarget) {
        ele = e.target;
        delet(ele);
        e.stopPropagation();
    }
}