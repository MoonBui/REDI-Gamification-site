var results = 0
const MAX_NUM = 6

document.getElementById("myModal").style.display = "none";

function toggleIcon(n) {
    var icon = document.getElementsByClassName("targetIcon");
    icon[n].setAttribute("style", "opacity: 0");
    window.setTimeout(
        function removethis() {
            // icon[n].style.display = "none";
            icon[n].style.visibility = "hidden";
        }, 500);

    results += 1;

    if (MAX_NUM / 2 == results) {
        alert("Half way there! Doing Great!")
    }

    if (results == MAX_NUM) {
        document.getElementById("myModal").style.display = "inline-flex";
    }
}

function closeModal() {
    var close = document.getElementById("myModal");
    close.style.display = "none"
}

// var objDiv = document.getElementById("chat-popup");
// objDiv.scrollTop = objDiv.scrollHeight;

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }