var results = 0
const MAX_NUM = 4

document.getElementById("myModal").style.display = "none";

function toggleIcon(n) {
    var icon = document.getElementsByTagName("i");
    icon[n].style.display = "none";
    results += 1;
    document.getElementById("result").innerHTML = results;
    if (results == MAX_NUM) {
        document.getElementById("myModal").style.display = "inline-flex";
    }
}

function closeModal() {
    var close = document.getElementById("myModal");
    close.style.display = "none"
}