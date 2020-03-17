import { list } from '../controller/main.js';
import { inputElement } from '../views/list.js';
export function localPush () {
  list.push(inputElement);
  localStorage.setItem('item-list', JSON.stringify(list));
}
export function localPop (element) {
  list.splice(list.indexOf(element));
  console.log(list);
  localStorage.setItem('item-list', JSON.stringify(list));
}
