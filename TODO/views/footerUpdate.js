export function footerUpdatePending() {
    if (parseInt(document.getElementById("pending").children[0].innerHTML) > 0) {
        document.getElementById("pending").children[0].innerHTML =parseInt(document.getElementById("pending").children[0].innerHTML)-1;

    }
    else {
        document.getElementById("pending").children[0].innerHTML = 0;
    }
}
export function footerUpdateCompleted() {
    if (parseInt(document.getElementById("completed").children[0].innerHTML) > 0) {
        document.getElementById("completed").children[0].innerHTML =parseInt(document.getElementById("completed").children[0].innerHTML)-1;
    }
    else {
        document.getElementById("completed").children[0].innerHTML = 0;
    }
}