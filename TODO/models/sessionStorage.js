import { listSession } from '../controller/main.js';
import {inputElement} from '../views/list.js';
import {instanceFlag,instanceTracker} from '../controller/instanceClicked.js';
export function sessionPush () {
  if(instanceFlag){
  listSession.root2.push(inputElement);
  sessionStorage.setItem('root2', JSON.stringify(listSession.root2));
}
else{
  listSession.root1.push(inputElement);
  sessionStorage.setItem('root1', JSON.stringify(listSession.root1));
}
}
export function sessionPop (element,tempId) {
if(instanceTracker[tempId]){
 listSession.root2.splice(listSession.root2.indexOf(element),1);
 sessionStorage.setItem('root2', JSON.stringify(listSession.root2));
}
else{
  listSession.root1.splice(listSession.root1.indexOf(element),1);
  sessionStorage.setItem('root1', JSON.stringify(listSession.root1));
}
}
