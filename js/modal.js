var modal = document.getElementById("mymodal");
var btn = document.getElementById("btn_modal_window");
var close = document.getElementsByClassName("close_modal_window") [0];



btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}