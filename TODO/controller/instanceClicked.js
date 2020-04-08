export let instanceFlag;
export let instanceTracker=[];

export function root1Clicked(e){
    instanceFlag=0;
    instanceTracker.push(instanceFlag);
    e.stopPropagation();
}
export function root2Clicked(e){
    instanceFlag=1;
    instanceTracker.push(instanceFlag);
    e.stopPropagation();
}
