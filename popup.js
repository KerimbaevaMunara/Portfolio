var modal = document.getElementById("mypopup");
var btn = document.getElementById("btn_popup");
var span = document.getElementsByClassName("close window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
    var x=document.getElementById("myTopnav");
    if (x.className ==="topnav"){
    x.className += " responsive";
}else {
        x.className = "topnav";
    }

}
