import { listSession } from '../controller/main.js';
import {inputElement} from '../views/list.js';
export function sessionPush () {
  listSession.push(inputElement);
  sessionStorage.setItem('item', JSON.stringify(listSession));
}
export function sessionPop (element) {
 listSession.splice(listSession.indexOf(element),1);
 sessionStorage.setItem('item', JSON.stringify(listSession));
}
