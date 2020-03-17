import { list } from '../controller/main.js';

export function sessionPush () {
  sessionStorage.setItem('items', JSON.stringify(list));
}
export function sessionPop () {
 sessionStorage.setItem('item', JSON.stringify(list));
}
