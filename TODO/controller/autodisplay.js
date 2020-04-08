import {displayList} from '../views/list.js';
import {listLocal,listSession} from '../controller/main.js';
import {listTracker} from './listTracker.js';
import {instanceTracker} from './instanceClicked.js';
let localLength;
let sessionLength;
export function autoDisplay(){
     displayFromLocal();
}
function displayFromLocal(){
    if(localStorage.getItem('root1')!==null){
    localLength = JSON.parse(localStorage.getItem('root1')).length;
        for (var i = 0; i < localLength; i++) {
            listLocal.root1.push(JSON.parse(localStorage.getItem('root1'))[i]);
            listTracker.push(0);
            instanceTracker.push(0);
       }
    }
    if(localStorage.getItem('root2')!==null){
       localLength = JSON.parse(localStorage.getItem('root2')).length;
        for (var i = 0; i < localLength; i++) {
            listLocal.root2.push(JSON.parse(localStorage.getItem('root2'))[i]);
            listTracker.push(0);
            instanceTracker.push(1);
       }
    }
       displayFromSession();
} 
function displayFromSession(){
    if(sessionStorage.getItem('root1')!==null){
    sessionLength =JSON.parse(sessionStorage.getItem('root1')).length;
        for (var i = 0; i < sessionLength; i++) {
            listSession.root1.push(JSON.parse(sessionStorage.getItem('root1'))[i]);
            listTracker.push(1);
            instanceTracker.push(0);
       }
    }
    if(sessionStorage.getItem('root2')!==null){
       sessionLength =JSON.parse(sessionStorage.getItem('root2')).length;
        for (var i = 0; i < sessionLength; i++) {
            listSession.root2.push(JSON.parse(sessionStorage.getItem('root2'))[i]);
            listTracker.push(1);
            instanceTracker.push(1);
       }
    }
      display();
}
function display(){
    let arr=[];
    arr=Object.values(listLocal);
    let temparr=arr.flat();
    for(var i in temparr){
        displayList(temparr[i]);
    }
    arr=Object.values(listSession);
    temparr=arr.flat();
    for(var i in temparr){
        displayList(temparr[i]);
    }
}