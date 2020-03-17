export function toggle(ele) {
    if (ele.value != -1) {
        ele.style.textDecoration = "line-through";
        document.getElementById("pending").children[0].innerHTML =parseInt(document.getElementById("pending").children[0].innerHTML)-1;
        document.getElementById("completed").children[0].innerHTML =parseInt(document.getElementById("completed").children[0].innerHTML)+1;
        ele.value = -1;
    }
    else {
        ele.style.textDecoration = "none";
        document.getElementById("pending").children[0].innerHTML =parseInt(document.getElementById("pending").children[0].innerHTML)+1;
        document.getElementById("completed").children[0].innerHTML =parseInt(document.getElementById("completed").children[0].innerHTML)-1;
        ele.value = 1;
    }
}
