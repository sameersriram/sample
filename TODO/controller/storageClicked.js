export let storageFlag ;
export function localStorageClicked(e){
    storageFlag=0;
    e.stopPropagation();
}
export function sessionStorageClicked(e){
    storageFlag=1;
    e.stopPropagation();
}
