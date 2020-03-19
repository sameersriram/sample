import { listLocal } from '../controller/main.js';
import {inputElement} from '../views/list.js';
export function localPush () {
  listLocal.push(inputElement);
  localStorage.setItem('item-list', JSON.stringify(listLocal));
}
export function localPop (element) {
  listLocal.splice(listLocal.indexOf(element),1);
  localStorage.setItem('item-list', JSON.stringify(listLocal));
}
