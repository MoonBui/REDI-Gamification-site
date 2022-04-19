var results = 0
const MAX_NUM = 4

document.getElementById("myModal").style.display = "none";

function toggleIcon(n) {
    var icon = document.getElementsByClassName("find-icon");
    icon[n].style.opacity = '0'
    window.setTimeout(
        function removethis() {
            icon[n].style.display = "none";
        }, 300);
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