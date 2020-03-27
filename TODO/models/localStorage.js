import { listLocal } from '../controller/main.js';
import {inputElement} from '../views/list.js';
import {instanceFlag,instanceTracker} from '../controller/instanceClicked.js';
export function localPush () {
  if(instanceFlag){
  listLocal.root2.push(inputElement);
  localStorage.setItem("root2", JSON.stringify(listLocal.root2));
}
else{
  listLocal.root1.push(inputElement);
  localStorage.setItem("root1", JSON.stringify(listLocal.root1));
}
}
export function localPop (element,tempId) {
  if(instanceTracker[tempId]){
  listLocal.root2.splice(listLocal.root2.indexOf(element),1);
  localStorage.setItem("root2", JSON.stringify(listLocal.root2));
}
else{
  listLocal.root1.splice(listLocal.root1.indexOf(element),1);
  localStorage.setItem("root1", JSON.stringify(listLocal.root1));
}
}